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
  developerName: 'actionanand',
  generalSupportEmail: 'anand.official.in@gmail.com',
  privacyEmail: 'anand.official.in@gmail.com',
  githubUrl: '',
  playStoreDeveloperUrl:
    'https://play.google.com/store/apps/dev?id=9131486047464010567'
}
