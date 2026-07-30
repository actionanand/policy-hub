export interface AppDocumentInfo {
  id: string
  label: string
  navLabel?: string
  shortDescription: string
  symbol: string
  portalUrl: string
  standaloneUrl: string
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
  playStoreUrl?: string
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
    // icon: '/apps/spendzo/icon.png',
    icon: '/apps/spendzo/spendzo.png',
    documents: createDocuments('spendzo')
    // Add playStoreUrl and githubUrl after the real listings are available.
  },
  {
    id: 'stillora',
    name: 'Stillora',
    shortDescription: 'A relaxation, meditation and ambient-sound application.',
    // icon: '/apps/stillora/icon.png',
    icon: '/apps/stillora/stillora.png',
    documents: createDocuments('stillora')
    // Add playStoreUrl and githubUrl after the real listings are available.
  }
]

export function getApp(appId: string): AppInfo | undefined {
  return apps.find((app) => app.id === appId)
}

export function getAppDocument(
  appId: string,
  documentId: string
): AppDocumentInfo | undefined {
  return getApp(appId)?.documents.find((document) => document.id === documentId)
}
