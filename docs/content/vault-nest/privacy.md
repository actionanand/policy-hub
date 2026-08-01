# Privacy Policy for Vault Nest

**Effective Date:** August 1, 2026  
**Last Updated:** August 1, 2026

## Overview

Vault Nest is an offline-first password and sensitive-information manager
developed by **Anand Raja**. It has no account service, cloud sync,
advertising, analytics, or developer-operated database.

## Information Stored on Your Device

Vault Nest stores the information you enter, which may include login details,
passwords, PINs, one-time-password secrets, backup codes, secure notes,
identities, Wi-Fi details, labels, websites, custom fields, and saved templates.
It also stores app preferences and security settings.

Sensitive item contents are encrypted with AES-256-GCM in local SQLite storage
on Android or IndexedDB in a browser. A random vault key protects the records;
your master password derives a separate key used to wrap that vault key. The
master password and derived wrapping key are not persisted.

Some metadata remains outside each encrypted item payload so the app can index
records: item identifiers and types, favourite, archive and trash status,
expiry dates, and created or updated timestamps. An optional password hint is
also visible on the lock screen.

Encryption reduces risk but cannot guarantee protection if the device,
operating system, clipboard, an exported file, or the master password is
compromised.

## Optional Android Features

- **Biometric unlock:** an Android Keystore key protects a wrapped copy of the
  vault key. Biometric material is processed by Android and is not received by
  the developer.
- **Intrusion evidence:** if you enable this feature and grant camera
  permission, Vault Nest captures one front-camera image after the third
  continuous failed unlock attempt. The image is encrypted with an
  Android-Keystore key and stored in private app storage. It is not included in
  vault backups. You can review, export, or permanently delete it after
  unlocking.
- **Expiry reminders:** notification permission may be requested for saved
  credential reminders. Android receives the credential title and expiry date
  needed to display the notification; secrets and field values are excluded.
- **Credential copy shortcuts:** selected usernames, emails, or passwords can
  be made available through temporary Android notifications. The values are
  encrypted in private storage for up to three minutes and are not placed in
  notification text or pending-intent metadata.

## Website Icons and Network Access

The core vault works without an internet connection. On Android, Vault Nest may
request artwork for a website address saved in a vault item. This connects to
the entered website and possible image locations to retrieve an icon. Those
servers can receive ordinary connection data such as the device IP address,
request time, requested URL, and a Vault Nest browser user agent. Their own
privacy terms apply. The downloaded image is stored as part of the encrypted
vault item.

Vault Nest does not send passwords or other vault fields to those websites.

## Clipboard and Sharing

Copying a field places its value on the system clipboard, outside Vault Nest's
encrypted storage. The app attempts to clear copied values after five minutes,
but this is best effort because Android may stop the app. You can clear the
clipboard immediately from Settings.

When you use system sharing, only the fields you select are passed to Android
and the destination app. Sensitive fields are excluded by default and require
explicit selection. The destination app's privacy practices then apply.

## Backup, Restore, and Export

Vault Nest `.vaultpack` backups are encrypted with AES-256-GCM using a key
derived from a separate backup passphrase. The passphrase is not stored. You
choose the file destination through Android's document picker or the browser.
If you select a cloud-storage provider, that provider receives the encrypted
file under its own privacy terms.

CSV export is intentionally unencrypted for compatibility with other password
managers. It can contain readable passwords and other sensitive vault data.
Anyone with access to the exported CSV can read it. Protect it and delete it
after use.

## Information Collected by the Developer

The developer does not receive vault contents, encryption keys, master
passwords, app preferences, evidence images, or usage telemetry. Vault Nest
does not sell user information.

If you contact the developer by email, the information you include is used to
respond to the request. Do not send passwords, master passwords, backup files,
CSV exports, or other secrets.

## Permissions

Depending on the features you choose and Android version, Vault Nest may use:

- Camera permission for optional intrusion evidence
- Notification permission for optional reminders and copy shortcuts
- Biometric authentication for optional biometric unlock
- Internet access for optional website-icon retrieval
- System document-picker access only to files you choose for import or export

Vault Nest does not require broad storage, location, contacts, phone, or SMS
permission for the reviewed features.

## Retention and Deletion

Vault data remains locally until you delete items, clear the vault database,
remove the Vault Nest account, clear Android app storage, or uninstall the app.
Items moved to Trash follow the selected retention period: 7, 30, or 90 days,
or remain until manually deleted when **Never** is selected.

Removing the account deletes the local database, preferences, biometric
material, temporary notification values, and encrypted intrusion evidence.
Exported backups and CSV files remain wherever you saved or shared them and
must be deleted separately.

There is no developer-operated account or cloud vault to delete by email.

## Children's Privacy

Vault Nest is not designed to collect information from children and does not
knowingly collect children's personal information through a developer-operated
service.

## Changes to This Policy

This policy may be updated when Vault Nest's features or data practices change.
The dates above will be revised when an updated policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
