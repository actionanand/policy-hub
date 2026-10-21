# Privacy Policy for Card Nest

**Effective Date:** August 1, 2026  
**Last Updated:** October 22, 2026

## Overview

Card Nest is an offline-first credit-card and personal-finance organizer
developed by **Anand Raja**. It does not require an account and does not include
advertising, analytics, tracking, or developer-operated cloud sync.

## Information Stored on Your Device

Card Nest stores the information you enter in a local SQLite database, which may
include:

- Card nicknames, issuers, networks, last digits, limits, statement and due-date
  rules, expiry dates, annual fees, benefits, important links, and linked-card
  groups
- Optional full card numbers and CVVs
- Transactions, merchants, amounts, dates, categories, payment sources, notes,
  tax information, recurring rules, and receipt images
- Income, budgets, category limits, cash or account balances, loan and EMI
  details, reminder settings, and report history
- Optional profile title and name, theme, date format, currency, and other app
  preferences

The developer does not receive this database.

## Sensitive Card Data and App Lock

Optional full card numbers and CVVs are encrypted locally with AES-GCM using a
random key stored in Card Nest's local app preferences. These values are hidden
by default and excluded from masked CSV and PDF reports.

An optional application PIN is stored as a salted PBKDF2-SHA-256 hash; the PIN
itself is not stored. Optional Android biometric unlock asks Android to verify
an enrolled biometric before opening the app. Card Nest does not receive or
store biometric templates.

The PIN and biometric features control access to the app interface. They do not
derive the card-data encryption key and are not a replacement for Android device
encryption or a secure device lock. No security measure can guarantee complete
protection on a compromised device.

## Receipt Images

You may use the Android camera, system photo picker, or browser camera to attach
receipt images to transactions. Selected images are processed and stored
locally with Card Nest data. Camera access occurs only when you choose the
camera action and grant permission. The system photo picker provides access only
to images you select.

## Optional Android SMS Review

On supported Android distributions, you may choose to turn on **SMS Sync** to
review financial transaction alerts from your SMS inbox. Card Nest requests
`READ_SMS` and `RECEIVE_SMS` only after you deliberately start this feature in
SMS Review or turn on its sync control. It does not request SMS access at app
launch, during ordinary navigation, or merely because the app returns to the
foreground.

`READ_SMS` lets Card Nest examine inbox messages within the history range you
choose so it can identify financial alerts. `RECEIVE_SMS` lets Android notify
the app about a newly received SMS so an opted-in, permission-granted sync can
be scheduled. Card Nest uses this access only to provide its SMS-review feature.
It does not send SMS messages, read call logs, access contacts, use SMS for
advertising or analytics, or use messages to make payments.

Financial alerts are turned into private review suggestions. Card Nest never
adds a financial transaction, changes a balance, or initiates a payment merely
because it finds an SMS. You must review and explicitly approve a suggestion
before it can be added to your records. You may instead paste a financial SMS
for local parsing without granting inbox access.

SMS processing occurs on the device. The SMS queue is separate from the
financial ledger database and uses an Android Keystore-backed AES-GCM key to
encrypt extracted review data. It stores encrypted extracted data and a
deduplication identity; it does not retain raw SMS bodies, senders, OTPs, or
marketing messages in that queue. The developer does not receive SMS contents
or data derived from them.

You can turn off SMS Sync at any time. This immediately stops discovery and
scheduling, while keeping already saved transactions and review progress. It
does not revoke Android permission; you can revoke SMS access in Android system
settings. **Delete all data** clears Card Nest's SMS Sync settings and encrypted
queue along with its local database. Retention controls remove old extracted
review data while keeping only the minimum tombstones needed to prevent a
previously handled message from being imported again.

SMS permissions are restricted by Google Play. Their availability depends on
the app's distribution eligibility and any required Play Console declaration or
approval. Where SMS Sync is unavailable, Card Nest's manual entry and pasted
SMS flow remain available without inbox permission.

## Notifications

If you enable reminders and grant notification permission, Card Nest schedules
Android notifications for payment due dates, annual fees, and card expiry.
Notification content can include a card nickname, masked last digits, amount,
and relevant date. It does not include a full card number or CVV.

Android stores and displays scheduled notification content outside Card Nest's
SQLite database. Its visibility on the lock screen depends on your Android
notification settings.

## Backup, Restore, and Exports

Card Nest `.cnbak` backups contain the local database and are encrypted with
AES-256-GCM using a key derived from a separate backup passphrase with
PBKDF2-SHA-256. The passphrase is not stored and cannot be recovered by the
developer.

You choose where to save or share a backup. If you select a cloud-storage or
sharing provider, that provider receives the encrypted file under its own
privacy practices.

CSV and PDF exports are designed for reports and contain readable financial and
transaction information. Masked exports exclude full card numbers and CVVs, but
may still contain card nicknames, last digits, merchants, amounts, categories,
dates, sources, income, budgets, and notes. Protect exported files and delete
copies you no longer need.

## Network Requests and Third-Party Services

Card Nest's interface references Google Fonts. When the app has internet access,
the device may request font resources from Google. Google may receive standard
connection information such as the device IP address, user agent, request time,
and requested resource. Google's processing is governed by the
[Google Privacy Policy](https://policies.google.com/privacy).

The core database, cards, transactions, calculations, reports, and reminders do
not require a developer server or cloud account.

## Information Collected by the Developer

The developer does not receive Card Nest database contents, card details,
receipts, financial records, PINs, backup passphrases, device identifiers, or
usage telemetry. Card Nest does not sell user information.

If you contact the developer by email, the information you voluntarily include
is used to respond to your support or privacy request. Do not email card
numbers, CVVs, PINs, receipts, backups, or unredacted financial exports.

## Permissions

Depending on the features you use and Android version, Card Nest may use:

- Camera permission for receipt capture
- System photo-picker access for receipt images you select
- Notification permission for optional reminders
- Android biometric authentication for optional app unlock
- File or document access for backups and report exports
- Internet access for Google-hosted font resources
- `READ_SMS` and `RECEIVE_SMS` for the optional Android SMS Review feature

Card Nest does not require location, contacts, phone, call-log, or broad gallery
access. SMS access is optional and used only as described above.

## Retention and Deletion

Card Nest data remains on the device until you delete individual records, run a
history cleanup, select **Delete all data**, clear Android app storage, or
uninstall the app. History cleanup can remove transactions older than the
selected 3, 5, 7, or 10-year period.

Deleting all app data does not remove backup, CSV, or PDF files saved or shared
outside Card Nest. Delete those files separately from every destination.

There is no developer-operated Card Nest account or cloud database to delete by
email.

## Children's Privacy

Card Nest is not designed to collect children's personal information through a
developer-operated service.

## Changes to This Policy

This policy may be updated when Card Nest's features or data practices change.
The dates above will be revised when an updated policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
