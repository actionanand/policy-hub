# Office Pulse Data Collection

**Last reviewed:** August 1, 2026

## Data stored locally

Office Pulse stores attendance state, settings, tasks, checklists, stopwatch
state, memos, cue cards, file-view history, ticket overrides, caches, reminder
state, and security settings in localStorage. General app records are not
encrypted. PIN verification uses a salted PBKDF2 verifier, and Android handles
biometric verification without giving the app biometric templates.

## Google processing

The app reads configured Google Sheets and submits user-approved fields to
configured Google Forms. Google and the sheet or form owner can receive the
requested identifiers, submitted workplace or productivity information, and
standard connection metadata.

## Data collected by the developer

Office Pulse has no developer-operated advertising, analytics, or telemetry
service. The developer does not automatically receive local device records.
Form submissions or sheet rows are available to their configured owners.

## Contact

Questions can be sent to **anand.official.in@gmail.com**.
