# Privacy Policy for Who Called

**Effective Date:** August 1, 2026  
**Last Updated:** August 3, 2026

## Overview

Who Called is an offline-first private contact organizer developed by
**Anand Raja**. It does not require an account and does not include advertising,
analytics, tracking, or developer-operated cloud sync.

## Information Stored on Your Device

Who Called stores records encrypted with AES-256-GCM in local IndexedDB. These
records can include:

- Private contact names, companies, phone numbers, email addresses, social
  links, birth dates, up to three named anniversary dates, reminder choices,
  notes, favourites, hidden status, and WhatsApp preferences
- Saved messages that you manually enter, paste, or share to the app, including
  titles, senders, categories, detected codes, favourites, and saved bold or
  highlight formatting ranges
- Tags and notes for unknown numbers, appearance counts, and last-seen dates
- Country, theme, privacy, call-history, security, and other app settings

The encryption key is a non-extractable browser CryptoKey stored locally in
IndexedDB. The developer does not receive the database or encryption key. Who
Called does not store application records in localStorage, sessionStorage, or
cookies.

## Android Call Log Permission and Recent Calls

The released Android app declares and requests
`android.permission.READ_CALL_LOG`. This permission is used only to show the
phone's recent call history on the Who Called homepage and to match those calls
locally against private contacts or tagged numbers in the app.

Who Called reads at most the 100 most recent call-log entries after you enable
the feature and grant Android's runtime permission. For each entry, the app can
read the phone number, cached caller name when available, call type (such as
incoming, outgoing, missed, rejected, blocked, or voicemail), date and time,
and call duration.

The retrieved call-history list is processed on the device and held temporarily
for the current app session. It is not written to Who Called's database,
backups, CSV files, or vCard files, and it is not transmitted to the developer
or a developer-operated server. Disabling the setting stops future retrieval.
Android controls the permission, and denying or revoking it leaves the rest of
the app available.

`READ_CALL_LOG` does not give Who Called access to SMS content. Who Called does
not request an SMS-reading permission and does not read the SMS inbox, sent
messages, one-time passwords from SMS, or MMS content. It also does not read
Android Contacts, notification content, or recorded call audio.

## Optional Birthday and Anniversary Reminders

On Android, you can optionally schedule a birthday or anniversary reminder for
a contact. The app requests notification permission only when you enable a
reminder. Enabled reminders are scheduled locally through Android to repeat
yearly at approximately 6:00 AM.

A reminder can display the contact's name and the birthday or named anniversary
in an Android notification. Android controls notification delivery, lock-screen
visibility, and timing. Reminder schedules and preferences are not sent to the
developer. Web builds retain reminder choices in the encrypted local record but
do not display browser notifications.

## Calling, SMS, WhatsApp, and Web Links

Who Called can pass a phone number to the Android dialer, pass a number and
draft text to the SMS composer, or open a WhatsApp or WhatsApp Business chat
using a `wa.me` link. These actions occur only after your request. The app does
not silently place a call or send a message.

Web addresses detected inside a saved message become actionable only within
that message view. Who Called shows a confirmation before passing the selected
address to your browser. You can cancel or copy the address instead.

The selected external app receives the phone number and any draft message you
provide. WhatsApp, your carrier, phone app, SMS app, browser, and other handlers
process information under their own privacy practices.

## Shared Text and Clipboard

On Android, Who Called can receive plain text you explicitly share from another
app. It displays that text in the Saved Message editor for review and does not
save it automatically. Clipboard content is read only when you choose a paste
action and is written only when you choose a copy action.

## App Lock, Biometrics, and Screenshots

If you enable an application PIN, Who Called stores a salted PBKDF2-SHA-256
verifier rather than the PIN itself. Optional Android biometric unlock uses
Android BiometricPrompt and Android Keystore. Who Called does not receive or
store biometric templates.

Optional screenshot protection asks Android to block screenshots and screen
recording of the app where supported. These controls are not a replacement for
device encryption or a secure device lock.

## Backup, Restore, Import, and Export

Encrypted `.contactvault` backups can include contacts, saved messages, tagged
numbers, and settings. Backups use AES-256-GCM with a key derived from your
passphrase using PBKDF2-SHA-256. The passphrase is not stored and cannot be
recovered by the developer.

CSV and vCard contact exports are not encrypted and can contain readable contact
information. Imported CSV and vCard files are read only after you select them.
Files saved or shared outside Who Called are handled by the destination you
choose.

## Information Collected by the Developer

The developer does not receive contacts, call history, user-saved text,
tagged numbers, PINs, backup passphrases, device identifiers, or usage
telemetry. Who Called does not sell user information. References to saved
messages in this policy mean text that a user manually enters, pastes, or
explicitly shares to Who Called; they do not mean messages read from the SMS
inbox.

If you email support, the developer receives only the information you choose to
include and uses it to respond. Do not email PINs, private contact collections,
saved messages, call logs, or backup files.

## Permissions

Depending on the Android build and features you choose, Who Called may use:

- `android.permission.READ_CALL_LOG` to display up to 100 recent calls on the
  homepage after the user enables the feature and grants permission
- Biometric authentication for optional app unlock
- Notification access for optional birthday and anniversary reminders
- File or document access for backup, restore, contact import, and export
- Clipboard access for explicit paste and copy actions
- Package visibility to offer installed WhatsApp or WhatsApp Business handlers
- Android's share target for text you deliberately send to the app

The reviewed app does not request permission to read SMS or MMS content and
does not require Android Contacts, location, microphone, or phone-call
placement permissions.

## Retention and Deletion

Contacts moved to Trash remain encrypted locally for up to 30 days unless you
restore or permanently delete them sooner. Expired trashed contacts are removed
when the app loads. Saved messages and tagged numbers remain until deleted.
Trashing or permanently deleting a contact cancels that contact's scheduled
birthday and anniversary reminders; restoring the contact reschedules reminders
that remain enabled.

Clearing app/site storage or uninstalling removes the local database. It does
not remove backups, CSV files, or vCard files saved or shared elsewhere. Delete
those copies separately. There is no developer-operated account or cloud
database to delete by email.

## Children's Privacy

Who Called is not designed to collect children's personal information through a
developer-operated service.

## Changes to This Policy

This policy may be updated when the app's features or data practices change. The
dates above will be revised when an updated policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
