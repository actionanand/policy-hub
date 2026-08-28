<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { playStoreLocales } from '../../data/play-store-locales'

const props = defineProps<{ appName: string }>()
const characterLimit = 500
const locale = ref('en-US')
const notes = ref('')
const selectedTemplate = ref('maintenance')
const formatAsBullets = ref(true)
const includeReliabilityNote = ref(true)
const includeAndroidSupport = ref(false)
const selectedAndroidVersion = ref('17')
const customAndroidVersion = ref('')
const output = ref<HTMLTextAreaElement>()
const status = ref('')
let resetTimer: ReturnType<typeof setTimeout> | undefined

const templates = [
  { id: 'maintenance', label: 'Minor fixes and performance' },
  { id: 'reliability', label: 'Reliability improvements' },
  { id: 'polish', label: 'Interface and usability polish' },
  { id: 'first-release', label: 'First release' }
] as const

const androidVersions = [
  { version: '1.5', name: 'Cupcake' },
  { version: '1.6', name: 'Donut' },
  { version: '2.0–2.1', name: 'Éclair' },
  { version: '2.2', name: 'Froyo / Frozen Yogurt' },
  { version: '2.3–2.3.7', name: 'Gingerbread' },
  { version: '3.0–3.2', name: 'Honeycomb', qualifier: 'tablet-only release' },
  { version: '4.0–4.0.4', name: 'Ice Cream Sandwich' },
  { version: '4.1–4.3.1', name: 'Jelly Bean' },
  { version: '4.4–4.4.4', name: 'KitKat' },
  { version: '5', name: 'Lollipop' },
  { version: '6', name: 'Marshmallow' },
  { version: '7', name: 'Nougat' },
  { version: '8', name: 'Oreo' },
  { version: '9', name: 'Pie' },
  { version: '10', name: 'Quince Tart' },
  { version: '11', name: 'Red Velvet Cake' },
  { version: '12', name: 'Snow Cone' },
  { version: '13', name: 'Tiramisu' },
  { version: '14', name: 'Upside Down Cake' },
  { version: '15', name: 'Vanilla Ice Cream' },
  { version: '16', name: 'Baklava' },
  { version: '17', name: 'Cinnamon Bun' }
] as const

type AdditionalUpdateKey =
  | 'crashFixes'
  | 'wearAdded'
  | 'wearImproved'
  | 'tvAdded'
  | 'tvImproved'
  | 'xrAdded'
  | 'xrImproved'
  | 'tabletAdded'
  | 'tabletImproved'
  | 'foldableAdded'
  | 'foldableImproved'
  | 'chromeOsAdded'
  | 'chromeOsImproved'

const additionalUpdates = reactive<Record<AdditionalUpdateKey, boolean>>({
  crashFixes: false,
  wearAdded: false,
  wearImproved: false,
  tvAdded: false,
  tvImproved: false,
  xrAdded: false,
  xrImproved: false,
  tabletAdded: false,
  tabletImproved: false,
  foldableAdded: false,
  foldableImproved: false,
  chromeOsAdded: false,
  chromeOsImproved: false
})

const platformUpdateGroups = [
  { label: 'Wear OS', addedKey: 'wearAdded', improvedKey: 'wearImproved' },
  { label: 'Android TV', addedKey: 'tvAdded', improvedKey: 'tvImproved' },
  { label: 'VR and Android XR', addedKey: 'xrAdded', improvedKey: 'xrImproved' },
  { label: 'Tablets and large screens', addedKey: 'tabletAdded', improvedKey: 'tabletImproved' },
  { label: 'Foldable devices', addedKey: 'foldableAdded', improvedKey: 'foldableImproved' },
  { label: 'ChromeOS devices', addedKey: 'chromeOsAdded', improvedKey: 'chromeOsImproved' }
] as const

const additionalUpdateText: Record<AdditionalUpdateKey, string> = {
  crashFixes: '• Fixed crashes to improve app stability.',
  wearAdded: '• Added support for Wear OS devices.',
  wearImproved: '• Improved performance and usability on Wear OS devices.',
  tvAdded: '• Added support for Android TV devices.',
  tvImproved: '• Improved the Android TV experience.',
  xrAdded: '• Added support for VR and Android XR devices.',
  xrImproved: '• Improved compatibility with VR and Android XR devices.',
  tabletAdded: '• Added support for tablets and large screens.',
  tabletImproved: '• Improved the experience on tablets and large screens.',
  foldableAdded: '• Added support for foldable devices.',
  foldableImproved: '• Improved the experience on foldable devices.',
  chromeOsAdded: '• Added support for ChromeOS devices.',
  chromeOsImproved: '• Improved compatibility with ChromeOS devices.'
}

const additionalUpdateOrder = Object.keys(
  additionalUpdates
) as AdditionalUpdateKey[]

function customNoteBody(value: string): string {
  if (!formatAsBullets.value) return value.trim()

  return value
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^(?:[•●▪◦]|[-*])\s*/, ''))
    .filter(Boolean)
    .map((line) => `• ${line}`)
    .join('\n')
}

function buildNoteBody(value: string): string {
  const customBody = customNoteBody(value)
  const androidSupport = androidSupportLine()
  const optionalUpdates = additionalUpdateLines()

  if (!includeReliabilityNote.value) {
    return [customBody, androidSupport, optionalUpdates]
      .filter(Boolean)
      .join('\n')
  }

  const bulletLines = [
    customBody,
    androidSupport,
    optionalUpdates,
    '• Refined the overall app experience'
  ]
    .filter(Boolean)
    .join('\n')

  return [
    `We've made ${props.appName} smoother and more reliable.`,
    bulletLines
  ]
    .filter(Boolean)
    .join('\n\n')
}

function androidSupportLine(): string {
  if (!includeAndroidSupport.value) return ''

  const isCustom = selectedAndroidVersion.value === 'custom'
  const version = isCustom
    ? customAndroidVersion.value.trim()
    : selectedAndroidVersion.value

  if (isCustom && !/^\d+(?:\.\d+)?$/.test(version)) return ''

  const knownVersion = androidVersions.find((item) => item.version === version)
  const qualifier = knownVersion && 'qualifier' in knownVersion
    ? `, ${knownVersion.qualifier}`
    : ''
  const codename = knownVersion ? ` (${knownVersion.name}${qualifier})` : ''
  return `• Added support for Android ${version}${codename}.`
}

function additionalUpdateLines(): string {
  return additionalUpdateOrder
    .filter((key) => additionalUpdates[key])
    .map((key) => additionalUpdateText[key])
    .join('\n')
}

function keepOnly(
  selectedKey: AdditionalUpdateKey,
  otherKey: AdditionalUpdateKey
) {
  if (additionalUpdates[selectedKey]) additionalUpdates[otherKey] = false
}

const noteBody = computed(() => buildNoteBody(notes.value))
const characterCount = computed(() => Array.from(noteBody.value).length)
const isOverLimit = computed(() => characterCount.value > characterLimit)
const formattedNotes = computed(() => {
  const body = noteBody.value
  return body ? `<${locale.value}>\n${body}\n</${locale.value}>` : ''
})

function updateNotes(event: Event) {
  const value = (event.target as HTMLTextAreaElement).value
  notes.value = fitWithinLimit(value)
}

function fitWithinLimit(value: string): string {
  const characters = Array.from(value).slice(0, characterLimit)

  while (characters.length && Array.from(buildNoteBody(characters.join(''))).length > characterLimit) {
    characters.pop()
  }

  return characters.join('')
}

function applyTemplate() {
  const templateText: Record<string, string> = {
    maintenance: 'Fixed minor issues\nImproved performance',
    reliability: 'Improved performance\nFixed minor issues',
    polish: 'Improved interface consistency\nEnhanced usability\nFixed minor issues',
    'first-release': `Welcome to the first release of ${props.appName}!\n\nThis release introduces the core app experience with a focus on simplicity, reliability, and smooth performance.`
  }

  includeReliabilityNote.value = selectedTemplate.value !== 'first-release'

  notes.value = Array.from(templateText[selectedTemplate.value])
    .slice(0, characterLimit)
    .join('')
}

async function copyFormattedNotes() {
  if (!formattedNotes.value || isOverLimit.value) return

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(formattedNotes.value)
    } else {
      if (!output.value) throw new Error('Formatted output is unavailable')
      output.value.focus()
      output.value.select()
      if (!document.execCommand('copy')) throw new Error('Copy was rejected')
    }
    status.value = 'Copied'
  } catch {
    output.value?.focus()
    output.value?.select()
    status.value = 'Select the formatted text and copy it manually'
  }

  if (resetTimer) clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    status.value = ''
  }, 2500)
}

onBeforeUnmount(() => {
  if (resetTimer) clearTimeout(resetTimer)
})

watch(
  [
    formatAsBullets,
    includeReliabilityNote,
    includeAndroidSupport,
    selectedAndroidVersion,
    customAndroidVersion,
    () => additionalUpdateOrder.map((key) => additionalUpdates[key])
  ],
  () => {
    notes.value = fitWithinLimit(notes.value)
  }
)
</script>

<template>
  <section class="release-notes-formatter" aria-labelledby="release-notes-heading">
    <div class="release-notes-formatter__intro">
      <p class="store-listing-card__eyebrow">Reusable tool</p>
      <h2 id="release-notes-heading">Release notes formatter</h2>
      <p>
        Enter user-facing changes only. Google Play allows up to 500 Unicode
        characters per language and requires the locale tags on separate lines.
      </p>
    </div>

    <div class="release-notes-formatter__controls">
      <div class="release-notes-formatter__template">
        <label>
          <span>Generic note</span>
          <select v-model="selectedTemplate">
            <option
              v-for="item in templates"
              :key="item.id"
              :value="item.id"
            >
              {{ item.label }}
            </option>
          </select>
        </label>
        <button type="button" @click="applyTemplate">Use generic note</button>
        <small>
          Inserts an editable English note and adds {{ appName }} automatically.
        </small>
      </div>

      <label class="release-notes-formatter__locale">
        <span>Language</span>
        <select v-model="locale">
          <option
            v-for="item in playStoreLocales"
            :key="item.code"
            :value="item.code"
          >
            {{ item.label }} ({{ item.code }})
          </option>
        </select>
      </label>

      <fieldset class="release-notes-formatter__options">
        <legend>Formatting options</legend>
        <label>
          <input v-model="formatAsBullets" type="checkbox" />
          <span>Format each custom line as a bullet point</span>
        </label>
        <label>
          <input v-model="includeReliabilityNote" type="checkbox" />
          <span>
            Add “We've made {{ appName }} smoother and more reliable.” and
            “Refined the overall app experience”
          </span>
        </label>
        <div class="release-notes-formatter__android-option">
          <label>
            <input v-model="includeAndroidSupport" type="checkbox" />
            <span>Add an Android version support bullet point</span>
          </label>
          <div
            v-if="includeAndroidSupport"
            class="release-notes-formatter__android-controls"
          >
            <label>
              <span>Android version</span>
              <select v-model="selectedAndroidVersion">
                <option
                  v-for="item in androidVersions"
                  :key="item.version"
                  :value="item.version"
                >
                  Android {{ item.version }} ({{ item.name }})
                </option>
                <option value="custom">Custom version</option>
              </select>
            </label>
            <label v-if="selectedAndroidVersion === 'custom'">
              <span>Custom Android version</span>
              <input
                v-model="customAndroidVersion"
                type="number"
                min="1"
                max="99"
                step="any"
                inputmode="decimal"
                placeholder="For example, 18 or 8.1"
              />
            </label>
          </div>
        </div>
        <fieldset class="release-notes-formatter__updates">
          <legend>Optional platform and quality updates</legend>
          <p>Choose only the improvements included in this release.</p>
          <label class="release-notes-formatter__crash-option">
            <input v-model="additionalUpdates.crashFixes" type="checkbox" />
            <span>App crash fixes</span>
          </label>
          <div class="release-notes-formatter__platform-grid">
            <section
              v-for="group in platformUpdateGroups"
              :key="group.label"
              class="release-notes-formatter__platform"
              :aria-label="group.label"
            >
              <strong>{{ group.label }}</strong>
              <label>
                <input
                  v-model="additionalUpdates[group.addedKey]"
                  type="checkbox"
                  @change="keepOnly(group.addedKey, group.improvedKey)"
                />
                <span>Support added</span>
              </label>
              <label>
                <input
                  v-model="additionalUpdates[group.improvedKey]"
                  type="checkbox"
                  @change="keepOnly(group.improvedKey, group.addedKey)"
                />
                <span>Support improved</span>
              </label>
            </section>
          </div>
        </fieldset>
      </fieldset>

      <label class="release-notes-formatter__editor">
        <span class="release-notes-formatter__label-row">
          <span>Custom release notes</span>
          <span :class="{ 'is-over-limit': isOverLimit }">
            {{ characterCount }} / {{ characterLimit }} characters
          </span>
        </span>
        <textarea
          :value="notes"
          rows="10"
          placeholder="Enter one change per line. Bullet symbols are added automatically."
          @input="updateNotes"
        />
      </label>

      <section class="listing-field release-notes-formatter__output">
        <div class="listing-field__header">
          <div>
            <h3>Play Console format</h3>
            <span
              class="listing-field__count"
              :class="{ 'is-over-limit': isOverLimit }"
            >
              {{ isOverLimit ? 'Reduce selected options to 500 characters' : 'Ready to paste' }}
            </span>
          </div>
          <button
            class="listing-copy-button"
            type="button"
            :disabled="!formattedNotes || isOverLimit"
            @click="copyFormattedNotes"
          >
            {{ status === 'Copied' ? 'Copied' : 'Copy' }}
          </button>
        </div>
        <textarea
          ref="output"
          class="listing-field__text"
          :value="formattedNotes"
          rows="12"
          readonly
          aria-label="Formatted Google Play release notes"
          placeholder="Formatted release notes will appear here."
          @focus="output?.select()"
        />
        <span class="visually-hidden" aria-live="polite">{{ status }}</span>
      </section>
    </div>

    <p class="release-notes-formatter__hint">
      Only choose languages already added to the app's Google Play store listing.
      Generic notes are written in English; translate them yourself before
      selecting another language.
    </p>
  </section>
</template>
