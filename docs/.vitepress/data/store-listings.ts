import { apps } from './apps'
import spendzoSource from '../../content/spendzo/store-listing.md?raw'
import stilloraSource from '../../content/stillora/store-listing.md?raw'
import vaultNestSource from '../../content/vault-nest/store-listing.md?raw'
import cardNestSource from '../../content/card-nest/store-listing.md?raw'
import linkDeckSource from '../../content/link-deck/store-listing.md?raw'
import whoCalledSource from '../../content/who-called/store-listing.md?raw'
import arflixSource from '../../content/arflix/store-listing.md?raw'

export interface StoreListing {
  appId: string
  shortDescription: string
  fullDescription: string
}

const listingSources: Record<string, string> = {
  spendzo: spendzoSource,
  stillora: stilloraSource,
  'vault-nest': vaultNestSource,
  'card-nest': cardNestSource,
  'link-deck': linkDeckSource,
  'who-called': whoCalledSource,
  arflix: arflixSource
}

function parseShortDescription(frontmatter: string, appId: string): string {
  const match = frontmatter.match(/^shortDescription:\s*(.+)$/m)
  if (!match) {
    throw new Error(`Missing shortDescription in ${appId}/store-listing.md`)
  }

  const value = match[1].trim()
  if (value.startsWith('"') && value.endsWith('"')) {
    return JSON.parse(value) as string
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'")
  }
  return value
}

function parseListing(appId: string, source: string): StoreListing {
  const normalizedSource = source.replace(/\r\n/g, '\n')
  const match = normalizedSource.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) {
    throw new Error(`Invalid frontmatter in ${appId}/store-listing.md`)
  }

  return {
    appId,
    shortDescription: parseShortDescription(match[1], appId),
    fullDescription: match[2].trim()
  }
}

const listings = Object.entries(listingSources).map(([appId, source]) =>
  parseListing(appId, source)
)

function validateListings(items: StoreListing[]): StoreListing[] {
  const appIds = new Set(apps.map((app) => app.id))
  const listingIds = new Set<string>()

  for (const listing of items) {
    if (!appIds.has(listing.appId)) {
      throw new Error(`Store listing references unknown app: ${listing.appId}`)
    }
    if (listingIds.has(listing.appId)) {
      throw new Error(`Duplicate store listing for app: ${listing.appId}`)
    }
    if (!listing.shortDescription.trim() || listing.shortDescription.length > 80) {
      throw new Error(
        `${listing.appId} short description must contain 1–80 characters`
      )
    }
    if (!listing.fullDescription.trim() || listing.fullDescription.length > 4000) {
      throw new Error(
        `${listing.appId} full description must contain 1–4000 characters`
      )
    }

    listingIds.add(listing.appId)
  }

  const missingApp = apps.find((app) => !listingIds.has(app.id))
  if (missingApp) {
    throw new Error(`Missing store listing for app: ${missingApp.id}`)
  }

  return items
}

export const storeListings = validateListings(listings)

export function getStoreListing(appId: string): StoreListing | undefined {
  return storeListings.find((listing) => listing.appId === appId)
}
