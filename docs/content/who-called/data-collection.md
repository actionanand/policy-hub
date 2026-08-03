# Who Called Data Collection

**Last reviewed:** August 3, 2026

## Data stored locally

Who Called stores private contacts, birthday and anniversary dates, reminder
preferences, saved messages and their optional bold/highlight ranges, tagged
numbers, and settings as AES-GCM-encrypted records in local IndexedDB. Optional
PIN verification data is stored as a salted PBKDF2 verifier. Android handles
biometric verification without giving the app biometric templates.

## Android call log

The released Android app uses `android.permission.READ_CALL_LOG` only after the
user enables recent calls and grants Android's runtime permission. It reads at
most 100 recent entries—the number, cached caller name when available, call
type, date and time, and duration—to display call history on the homepage and
perform local contact or tag matching.

The list is held temporarily for the app session. It is not saved in the app
database, backups, or contact exports and is not sent to the developer. Who
Called does not request SMS-reading permission or read SMS or MMS content.

## Optional local notifications

When a user enables a birthday or anniversary reminder, the Android app
schedules a yearly local notification for approximately 6:00 AM and requests
notification permission when required. The schedule can include a local contact
identifier, the contact's displayed name, and the birthday or named anniversary
needed to compose the notification. Android processes and delivers the
notification on the device. This information is not sent to the developer.

Web builds store reminder preferences for backup and later Android use but do
not display browser notifications.

## Data collected by the developer

Who Called has no account, developer cloud, analytics, advertising, crash
reporting, or tracking service. The developer does not receive application
records or call history. Support email contains only what you choose to send.

## External apps

The phone dialer, SMS composer, WhatsApp, WhatsApp Business, or browser receives
the number, draft text, or web address needed for an action you initiate. A file
provider you choose receives backups or exports sent to it.

## Google Play Data safety context

Application records and optional call-history processing remain on the device
and are not transmitted to the developer. Google Play defines data collection
primarily as transmission off the device, so on-device-only processing is not
developer collection. The Play Console declaration must still be reviewed for
every released app version and for user-initiated transfers to external apps or
file destinations.

## Contact

Questions can be sent to **anand.official.in@gmail.com**.
