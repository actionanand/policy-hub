import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import AppBreadcrumbs from './components/AppBreadcrumbs.vue'
import AppCard from './components/AppCard.vue'
import AppGrid from './components/AppGrid.vue'
import AppOverview from './components/AppOverview.vue'
import AppSubnav from './components/AppSubnav.vue'
import ContactDetails from './components/ContactDetails.vue'
import CopyStandaloneUrl from './components/CopyStandaloneUrl.vue'
import ExternalLinkButton from './components/ExternalLinkButton.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AppBreadcrumbs', AppBreadcrumbs)
    app.component('AppCard', AppCard)
    app.component('AppGrid', AppGrid)
    app.component('AppOverview', AppOverview)
    app.component('AppSubnav', AppSubnav)
    app.component('ContactDetails', ContactDetails)
    app.component('CopyStandaloneUrl', CopyStandaloneUrl)
    app.component('ExternalLinkButton', ExternalLinkButton)
  }
} satisfies Theme
