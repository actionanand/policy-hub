import { defineConfig, type HeadConfig } from 'vitepress'
import { apps } from './data/apps'
import { siteSettings } from './data/site'

function normalizeBase(value: string | undefined): string {
  if (!value || value === '/') return '/'
  return `/${value.replace(/^\/+|\/+$/g, '')}/`
}

const base = normalizeBase(process.env.VITEPRESS_BASE)
const productionDomain = (
  process.env.VITEPRESS_PRODUCTION_DOMAIN || siteSettings.productionDomain
).replace(/\/+$/, '')

function pagePath(relativePath: string): string {
  const cleanPath = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
  return `${base}${cleanPath}`.replace(/\/+/g, '/')
}

const defaultHead: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#1f6f5f' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:site_name', content: siteSettings.title }],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href:
        'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Crect width=%2264%22 height=%2264%22 rx=%2216%22 fill=%22%231f6f5f%22/%3E%3Cpath d=%22M20 16h14c9 0 15 5 15 13s-6 13-15 13h-6v8h-8V16Zm8 7v12h6c4 0 7-2 7-6s-3-6-7-6h-6Z%22 fill=%22white%22/%3E%3C/svg%3E'
    }
  ]
]

if (productionDomain) {
  defaultHead.push([
    'meta',
    {
      property: 'og:image',
      content: `${productionDomain}${base}og.png`
    }
  ])
}

export default defineConfig({
  lang: 'en-US',
  title: siteSettings.title,
  description: siteSettings.description,
  base,
  cleanUrls: true,
  lastUpdated: false,
  srcExclude: ['content/**/*.md'],
  head: defaultHead,
  sitemap: productionDomain
    ? { hostname: `${productionDomain}${base}` }
    : undefined,
  transformHead({ pageData }) {
    const pageTitle =
      pageData.title === siteSettings.title
        ? siteSettings.title
        : `${pageData.title} | ${siteSettings.title}`
    const pageDescription =
      pageData.frontmatter.description || siteSettings.description
    const head: HeadConfig[] = [
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }]
    ]

    if (productionDomain) {
      const canonicalUrl = `${productionDomain}${pagePath(pageData.relativePath)}`
      head.push(['link', { rel: 'canonical', href: canonicalUrl }])
      head.push(['meta', { property: 'og:url', content: canonicalUrl }])
    }

    return head
  },
  themeConfig: {
    siteTitle: siteSettings.title,
    nav: [
      { text: 'Policy Hub', link: '/' },
      {
        text: 'Apps',
        items: [
          { text: 'All apps', link: '/apps/' },
          ...apps.map((app) => ({
            text: app.name,
            link: `/apps/${app.id}/`
          }))
        ]
      },
      { text: 'Contact', link: '/contact' },
      { text: 'About', link: '/about' }
    ],
    sidebar: Object.fromEntries(
      apps.map((app) => [
        `/apps/${app.id}/`,
        [
          {
            text: app.name,
            items: [
              { text: 'Overview', link: `/apps/${app.id}/` },
              {
                text: 'Store listing',
                link: `/apps/${app.id}/store-listings`
              },
              {
                text: 'Release notes',
                link: `/apps/${app.id}/release-notes`
              },
              ...app.documents.map((document) => ({
                text: document.label,
                link: document.portalUrl
              }))
            ]
          }
        ]
      ])
    ),
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    socialLinks: siteSettings.githubUrl
      ? [{ icon: 'github', link: siteSettings.githubUrl }]
      : [],
    footer: {
      message: 'Legal and support information for our Android applications.',
      copyright: 'Review all sample legal content before publishing.'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    externalLinkIcon: true
  }
})
