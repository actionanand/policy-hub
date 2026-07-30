export interface SiteSettings {
  title: string
  description: string
  productionDomain: string
  developerName: string
  generalSupportEmail: string
  privacyEmail: string
  githubUrl: string
  playStoreDeveloperUrl: string
}

export const siteSettings: SiteSettings = {
  title: 'Policy Hub',
  description:
    'One place for every app’s privacy policy, support, and legal information.',
  // Set this to the deployed origin, for example https://policies.example.com.
  // VITEPRESS_PRODUCTION_DOMAIN takes precedence during a build.
  productionDomain: '',
  developerName: '[Developer name]',
  generalSupportEmail: 'support@example.com',
  privacyEmail: 'privacy@example.com',
  githubUrl: 'https://github.com/actionanand',
  playStoreDeveloperUrl:
    'https://play.google.com/store/apps/dev?id=YOUR_DEVELOPER_ID'
}
