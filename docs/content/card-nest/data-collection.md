# Card Nest Data Collection

**Last reviewed:** October 22, 2026

## Data stored locally

Card Nest stores card information, optional encrypted full card numbers and
CVVs, transactions, receipts, income, budgets, categories, payment sources,
balances, loans, EMIs, reminders, profile details, preferences, and report data
in local SQLite storage.

The application PIN is stored only as a salted PBKDF2 hash. Android handles
biometric verification without providing biometric templates to Card Nest.

## Data collected by the developer

Card Nest has no account, developer cloud, analytics, advertising, crash
reporting, or tracking service. The developer does not receive app database
contents, financial records, receipts, PINs, or usage data.

If you email support, the developer receives only the information you choose to
include in that message.

## Data processed outside local SQLite

- Android can store masked reminder content containing a card nickname, last
  digits, amount, and date when notifications are enabled.
- Google may receive normal connection metadata when Google Fonts resources are
  requested.
- A file or sharing provider you choose receives encrypted backups or readable
  report exports sent to it.
- The camera and system photo picker provide receipt images only after your
  action and permission or selection.

## Optional Android SMS Review data

If you deliberately enable SMS Sync, Card Nest uses `READ_SMS` to examine the
SMS inbox within the history range you select and `RECEIVE_SMS` to schedule
processing after a new message arrives. It uses these permissions only to find
financial transaction alerts and create review suggestions. It does not send
SMS, access call logs or contacts, use SMS for advertising or analytics, or
automatically add a transaction or make a payment.

Processing is on-device. The separate SMS Sync queue stores an encrypted
extracted review record and a deduplication identity using an Android
Keystore-backed AES-GCM key. Raw SMS bodies, senders, OTPs, and marketing
messages are not retained in that queue. The developer does not receive SMS
contents or data derived from them. You must explicitly approve any suggestion
before it becomes a financial record.

You can turn SMS Sync off to stop future discovery and scheduling, revoke the
permission in Android settings, or use **Delete all data** to clear SMS Sync
settings and its encrypted queue. You can also paste a financial SMS for local
parsing without granting inbox access.

## Permissions

Camera, selected photos, notifications, biometrics, file access, internet, and
optional SMS permissions are used only for their corresponding features. Card
Nest does not require location, contacts, phone, call-log, or broad gallery
access. SMS permissions are restricted by Google Play and are available only
where the app's distribution eligibility and required Play Console declaration
or approval permit them.

## Contact

Questions can be sent to **anand.official.in@gmail.com**.
