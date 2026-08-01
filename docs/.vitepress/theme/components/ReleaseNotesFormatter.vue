<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { playStoreLocales } from '../../data/play-store-locales'

const props = defineProps<{ appName: string }>()
const characterLimit = 500
const locale = ref('en-US')
const notes = ref('')
const selectedTemplate = ref('maintenance')
const output = ref<HTMLTextAreaElement>()
const status = ref('')
let resetTimer: ReturnType<typeof setTimeout> | undefined

const templates = [
  { id: 'maintenance', label: 'Minor fixes and performance' },
  { id: 'reliability', label: 'Reliability improvements' },
  { id: 'polish', label: 'Interface and usability polish' },
  { id: 'first-release', label: 'First release' }
] as const

const characterCount = computed(() => Array.from(notes.value).length)
const formattedNotes = computed(() => {
  const body = notes.value.trim()
  return body ? `<${locale.value}>\n${body}\n</${locale.value}>` : ''
})

function updateNotes(event: Event) {
  const value = (event.target as HTMLTextAreaElement).value
  notes.value = Array.from(value).slice(0, characterLimit).join('')
}

function applyTemplate() {
  const templateText: Record<string, string> = {
    maintenance: `This update includes minor bug fixes and performance improvements for ${props.appName}.`,
    reliability: `We've made ${props.appName} smoother and more reliable.\n\n• Improved performance\n• Fixed minor issues\n• Refined the overall app experience`,
    polish: `This ${props.appName} update includes interface refinements, usability improvements, and minor fixes for a smoother overall experience.`,
    'first-release': `Welcome to the first release of ${props.appName}!\n\nThis release introduces the core app experience with a focus on simplicity, reliability, and smooth performance.`
  }

  notes.value = Array.from(templateText[selectedTemplate.value])
    .slice(0, characterLimit)
    .join('')
}

async function copyFormattedNotes() {
  if (!formattedNotes.value) return

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

      <label class="release-notes-formatter__editor">
        <span class="release-notes-formatter__label-row">
          <span>Release notes</span>
          <span>{{ characterCount }} / {{ characterLimit }} characters</span>
        </span>
        <textarea
          :value="notes"
          rows="10"
          placeholder="Describe what changed in this release. Use short paragraphs or • bullets."
          @input="updateNotes"
        />
      </label>

      <section class="listing-field release-notes-formatter__output">
        <div class="listing-field__header">
          <div>
            <h3>Play Console format</h3>
            <span class="listing-field__count">Ready to paste</span>
          </div>
          <button
            class="listing-copy-button"
            type="button"
            :disabled="!formattedNotes"
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
