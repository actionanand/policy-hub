export interface AppInfo {
  id: string
  name: string
  shortDescription: string
  icon?: string
  playStoreUrl?: string
  githubUrl?: string
  privacyUrl: string
  standalonePrivacyUrl: string
  termsUrl?: string
  supportUrl?: string
  dataDeletionUrl?: string
}

export const apps: AppInfo[] = [
  {
    id: 'spendzo',
    name: 'Spendzo',
    shortDescription: 'A personal expense and budget-tracking application.',
    privacyUrl: '/apps/spendzo/privacy',
    standalonePrivacyUrl: '/privacy/spendzo',
    termsUrl: '/apps/spendzo/terms',
    supportUrl: '/apps/spendzo/support',
    dataDeletionUrl: '/apps/spendzo/data-deletion'
    // Add playStoreUrl and githubUrl after the real listings are available.
  },
  {
    id: 'stillora',
    name: 'Stillora',
    shortDescription: 'A relaxation, meditation and ambient-sound application.',
    privacyUrl: '/apps/stillora/privacy',
    standalonePrivacyUrl: '/privacy/stillora',
    termsUrl: '/apps/stillora/terms',
    supportUrl: '/apps/stillora/support',
    dataDeletionUrl: '/apps/stillora/data-deletion'
    // Add playStoreUrl and githubUrl after the real listings are available.
  }
]

export function getApp(appId: string): AppInfo | undefined {
  return apps.find((app) => app.id === appId)
}
