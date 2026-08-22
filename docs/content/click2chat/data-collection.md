# Click2Chat Data Collection

**Last reviewed:** August 22, 2026

## Data processed on the device

Click2Chat processes a phone number, selected country code, and optional draft
message that you enter or paste. This information is held temporarily to create
the WhatsApp action you request. It is not saved as an app record or sent to
the developer.

The app can store two preferences locally:

- The last selected country
- The selected light, dark, or system theme

These preferences are stored in localStorage on the device or in the browser.

## Android call history

The Android build declares `android.permission.READ_CALL_LOG`. After Android
grants the runtime permission, Click2Chat reads at most the configured 100 most
recent call-log entries to display them on the recent-calls screen.

An entry can contain a phone number, cached caller name when available, call
type, date and time, and duration. The list is held temporarily in app memory.
It is not saved, backed up, exported, or transmitted to the developer.

Click2Chat does not request SMS, Contacts, microphone, location, or broad file
access permission.

## Clipboard

Clipboard text is read only after you press the paste button. Click2Chat does
not monitor clipboard changes or collect clipboard contents in the background.

## Data received by external services

When you initiate a chat, WhatsApp, WhatsApp Business, or `wa.me` receives the
formatted number and optional message required to open the conversation. Their
privacy practices apply to that user-initiated transfer.

When you confirm a call from the recent-calls screen, the Android phone dialler
receives the selected number. Click2Chat does not place the call automatically
and does not request `android.permission.CALL_PHONE`.

The static web host may receive ordinary web request information when the
browser version is loaded. Click2Chat has no developer analytics, advertising,
tracking, account, or cloud-storage service.

## Data received by the developer

The developer does not receive call history, numbers, messages, clipboard
contents, or local preferences through Click2Chat. A support email contains
only the information you choose to send.

## Contact

Questions can be sent to **anand.official.in@gmail.com**.
