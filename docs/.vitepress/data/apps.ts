export interface AppDocumentInfo {
  id: string
  label: string
  navLabel?: string
  shortDescription: string
  symbol: string
  portalUrl: string
  standaloneUrl: string
}

export type AppPlatform = 'web' | 'android'

export interface AppWebLink {
  label: string
  url: string
}

export interface AppInfo {
  id: string
  name: string
  shortDescription: string
  /**
   * Public asset path for the app icon.
   * Recommended convention: /apps/<app-id>/icon.png
   * Omit this field to display the app's initial instead.
   */
  icon?: string
  platform: AppPlatform
  releasedToPlayStore: boolean
  playStoreUrl?: string
  /** Browser-accessible app links. A maximum of three links is supported. */
  webLinks?: AppWebLink[]
  githubUrl?: string
  documents: AppDocumentInfo[]
}

function createDocuments(appId: string): AppDocumentInfo[] {
  return [
    {
      id: 'privacy',
      label: 'Privacy Policy',
      navLabel: 'Privacy',
      shortDescription: 'How information is handled',
      symbol: 'P',
      portalUrl: `/apps/${appId}/privacy`,
      standaloneUrl: `/privacy/${appId}`
    },
    {
      id: 'terms',
      label: 'Terms and Conditions',
      navLabel: 'Terms',
      shortDescription: 'Rules for using the app',
      symbol: 'T',
      portalUrl: `/apps/${appId}/terms`,
      standaloneUrl: `/terms/${appId}`
    },
    {
      id: 'support',
      label: 'Support',
      shortDescription: 'Help and troubleshooting',
      symbol: '?',
      portalUrl: `/apps/${appId}/support`,
      standaloneUrl: `/support/${appId}`
    },
    {
      id: 'data-collection',
      label: 'Data Collection',
      navLabel: 'Data collection',
      shortDescription: 'A summary of app data practices',
      symbol: 'D',
      portalUrl: `/apps/${appId}/data-collection`,
      standaloneUrl: `/data-collection/${appId}`
    },
    {
      id: 'data-deletion',
      label: 'Data Deletion',
      navLabel: 'Data deletion',
      shortDescription: 'How to delete app data',
      symbol: 'X',
      portalUrl: `/apps/${appId}/data-deletion`,
      standaloneUrl: `/data-deletion/${appId}`
    },
    {
      id: 'contact',
      label: 'App Contact',
      navLabel: 'Contact',
      shortDescription: 'App-specific contact information',
      symbol: '@',
      portalUrl: `/apps/${appId}/contact`,
      standaloneUrl: `/contact/${appId}`
    }
  ]
}

export const apps: AppInfo[] = [
  {
    id: 'spendzo',
    name: 'Spendzo',
    shortDescription: 'A personal expense and budget-tracking application.',
    icon: '/apps/spendzo/icon.png',
    platform: 'android',
    releasedToPlayStore: true,
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.actionanand.spendzo.app',
    webLinks: [
      {
        label: 'Open Spendzo in browser',
        url: 'https://actionanand.github.io/spendzo/'
      }
    ],
    documents: createDocuments('spendzo')
  },
  {
    id: 'stillora',
    name: 'Stillora',
    shortDescription: 'A relaxation, meditation and ambient-sound application.',
    icon: '/apps/stillora/icon.png',
    platform: 'android',
    releasedToPlayStore: true,
    webLinks: [
      {
        label: 'Open Stillora in browser',
        url: 'https://actionanand.github.io/stillora/'
      }
    ],
    documents: createDocuments('stillora')
  },
  {
    id: 'vault-nest',
    name: 'Vault Nest',
    shortDescription:
      'A private, offline-first password and sensitive-information manager.',
    icon: '/apps/vault-nest/icon.png',
    platform: 'android',
    releasedToPlayStore: true,
    webLinks: [
      {
        label: 'Open Vault Nest in browser',
        url: 'https://actionanand.github.io/vault-nest/'
      }
    ],
    githubUrl: 'https://github.com/actionanand/vault-nest',
    documents: createDocuments('vault-nest')
  },
  {
    id: 'card-nest',
    name: 'Card Nest',
    shortDescription:
      'A private, offline-first credit-card and personal-finance organizer.',
    icon: '/apps/card-nest/icon.png',
    platform: 'android',
    releasedToPlayStore: true,
    webLinks: [
      {
        label: 'Open Card Nest in browser',
        url: 'https://actionanand.github.io/card-nest/'
      }
    ],
    githubUrl: 'https://github.com/actionanand/card-nest',
    documents: createDocuments('card-nest')
  },
  {
    id: 'link-deck',
    name: 'Link Deck',
    shortDescription:
      'A private, offline-first bookmark manager with profiles and nested folders.',
    icon: '/apps/link-deck/icon.png',
    platform: 'android',
    releasedToPlayStore: true,
    webLinks: [
      {
        label: 'Open Link Deck in browser',
        url: 'https://actionanand.github.io/link-deck/'
      }
    ],
    githubUrl: 'https://github.com/actionanand/link-deck',
    documents: createDocuments('link-deck')
  },
  {
    id: 'who-called',
    name: 'Who Called',
    shortDescription:
      'A private, offline contact organizer with optional call-history tools.',
    icon: '/apps/who-called/icon.png',
    platform: 'android',
    releasedToPlayStore: true,
    webLinks: [
      {
        label: 'Open Who Called in browser',
        url: 'https://actionanand.github.io/who-called/'
      }
    ],
    githubUrl: 'https://github.com/actionanand/who-called',
    documents: createDocuments('who-called')
  },
  {
    id: 'arflix',
    name: 'ARFlix',
    shortDescription:
      'A movie and TV discovery app with TMDb details and a curated collection.',
    icon: '/apps/arflix/icon.png',
    platform: 'android',
    releasedToPlayStore: true,
    webLinks: [
      {
        label: 'Open ARFlix in browser',
        url: 'https://actionanand.github.io/arflix/'
      },
      {
        label: 'Open legacy ARFlix in browser',
        url: 'https://actionanand.github.io/ar-flix/'
      }
    ],
    githubUrl: 'https://github.com/actionanand/arflix',
    documents: createDocuments('arflix')
  }
]

for (const app of apps) {
  if ((app.webLinks?.length ?? 0) > 3) {
    throw new Error(`${app.id} supports a maximum of three web links`)
  }
  if (app.playStoreUrl && !app.releasedToPlayStore) {
    throw new Error(`${app.id} cannot have a Play Store URL before release`)
  }
}

export function getApp(appId: string): AppInfo | undefined {
  return apps.find((app) => app.id === appId)
}

export function getAppDocument(
  appId: string,
  documentId: string
): AppDocumentInfo | undefined {
  return getApp(appId)?.documents.find((document) => document.id === documentId)
}
