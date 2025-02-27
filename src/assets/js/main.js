import 'regenerator-runtime/runtime.js'
import choo from 'nanochoo' // resonatecoop/nanochoo (fork of nanochoo with added support for cached components)
import './tabbing.js'
import Header from './components/header'
import RandomLogo from './components/logo'
import Trackgroups from './components/trackgroups'
import ContactForm from './components/contact'
import APIService from '@resonate/api-service'
import loadScript from './lib/load-script'

const { getAPIServiceClient } = APIService({
  apiHost: process.env.APP_HOST || 'https://beta.stream.resonate.coop'
})

function headerSearchApp (selector) {
  if (!document.querySelector(selector)) return

  const app = choo()

  app.use((state, emitter, app) => {
    state.search = state.search || {
      q: ''
    }

    state.user = {}
    state.params = {} // nanochoo does not have a router

    emitter.on('search', (q) => {
      const bang = q.startsWith('#')
      const pathname = bang ? '/tag' : '/search'
      const url = new URL(pathname, process.env.APP_HOST || 'http://localhost')
      const params = bang ? { term: q.split('#')[1] } : { q }
      url.search = new URLSearchParams(params)
      return window.open(url.href, '_blank')
    })
  })

  app.view((state, emit) => {
    return state.cache(Header, 'header').render()
  })

  app.mount(selector)
}

async function contactApp (selector) {
  if (!document.querySelector(selector)) return

  await loadScript('https://js.hcaptcha.com/1/api.js')

  const contact = choo()

  contact.view((state, emit) => {
    return state.cache(ContactForm, 'contact').render()
  })

  contact.mount(selector)
}

function randomLogoApp (selector) {
  if (!document.querySelector(selector)) return

  const logo = choo()

  logo.view((state, emit) => {
    return state.cache(RandomLogo, 'logo').render({
      invert: window.location.pathname.startsWith('/coop') ? -1 : 1
    })
  })

  logo.mount(selector)
}

document.addEventListener('DOMContentLoaded', DOMContentLoaded)

function DOMContentLoaded () {
  contactApp('.contact-form')
  randomLogoApp('.random-logo-component')
  releasesApp('.trackgroups')
}

function releasesApp (selector) {
  if (!document.querySelector(selector)) return

  const releases = choo()

  releases.use(async (state, emitter, app) => {
    emitter.on(state.events.DOMCONTENTLOADED, async () => {
      state.trackgroups = state.trackgroups || []

      const component = state.components.trackgroups
      const { machine } = component

      if (machine.state.request === 'loading') {
        return
      }

      const loaderTimeout = setTimeout(() => {
        machine.state.loader === 'off' && machine.emit('loader:toggle')
      }, 300)

      machine.emit('request:start')

      try {
        const client = await getAPIServiceClient('trackgroups')
        const result = await client.getTrackgroups({ limit: 12 })

        const { body: response } = result

        state.trackgroups = response.data

        machine.emit('request:resolve')

        emitter.emit(state.events.RENDER)
      } catch (err) {
        component.error = err
        machine.emit('request:reject')
        emitter.emit('error', err)
      } finally {
        machine.state.loader === 'on' && machine.emit('loader:toggle')
        clearTimeout(loaderTimeout)
      }
    })
  })

  releases.view((state, emit) => {
    return state.cache(Trackgroups, 'trackgroups').render({
      items: state.trackgroups || [],
      filters: []
    })
  })

  releases.mount(selector)
}

headerSearchApp('.search')
