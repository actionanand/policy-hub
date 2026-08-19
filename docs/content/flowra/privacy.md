# Privacy Policy for Flowra

**Effective Date:** August 19, 2026  
**Last Updated:** August 19, 2026

## Overview

Flowra is a private, offline-first period and cycle tracker developed by
**Anand Raja**. It supports separate profiles, daily menstrual-health logs,
on-device cycle estimates, optional local reminders, and user-controlled
exports and backups.

Flowra does not require an account and does not include advertising, analytics,
tracking, crash reporting, or developer-operated cloud sync. The developer does
not receive the health information entered into the app.

Flowra provides record keeping and descriptive estimates only. It is not a
medical service and does not diagnose, prevent, or treat a health condition.

## Information Stored on Your Device

Depending on what you choose to enter, Flowra may store:

- Profile names or nicknames, relationship, optional notes, and privacy settings
- Optional age information, such as date of birth, birth year, approximate age,
  or age range
- Whether menstruation has started and optional first-period date, year, or age
- A user-selected reproductive life stage
- Period start and end dates and whether a record is excluded from predictions
- Daily flow, menstrual products, symptoms and severity, moods, overall mood,
  and private notes
- On-device predictions, cycle statistics, and prediction accuracy history
- Reminder timing and notification privacy preferences
- Theme, language, PIN, biometric, screenshot, and app-lock settings

You control which optional details to enter. Exact dates of birth and
first-period dates are not required.

## Local Storage and Security

On Android, records are stored in a SQLite database within Flowra's private app
storage. The SQLite database is not encrypted at the database level. Android's
application sandbox restricts ordinary access by other apps, and Flowra disables
Android cloud backup and device-transfer backup for its private files and
databases.

In the browser version, records are encrypted with AES-GCM before being stored
in IndexedDB. The non-exportable encryption key is retained in the same browser
origin. Clearing that site's browser data removes both the encrypted records and
the key required to read them.

An optional app PIN locks the Flowra interface. Flowra stores a salted PBKDF2
verifier rather than the PIN itself in its normal app settings. The app PIN does
not encrypt the Android SQLite database.

On supported Android devices, optional biometric unlock uses Android's strong
biometric prompt and Android Keystore. An encrypted PIN credential and its
initialization data are kept in private Android preferences; the key requires
successful biometric authentication and is invalidated when biometric
enrollment changes. Flowra does not receive fingerprint, face, or other
biometric templates.

Optional screenshot blocking and recent-app preview protection use Android
secure-window controls. Their availability can vary by Android version and
device.

## Predictions and Health Information

Cycle estimates and statistics are calculated locally from the records in the
selected profile. They are uncertain estimates, not guarantees or diagnoses.
Flowra does not send cycle history to a remote prediction or artificial
intelligence service.

## Notifications

If you enable period reminders on Android, Flowra requests notification
permission and schedules notifications locally on the device. Private wording
shows a general health reminder. If private wording is disabled, a notification
may show the profile name and estimated timing on the lock screen or notification
panel, subject to device settings.

## Exports, Backup, and Restore

Flowra can export period history as a CSV file and can open a printable report
that you may save as PDF. These exports are not automatically encrypted. Anyone
with access to an exported file may be able to read it.

When you create a Flowra backup, profiles, periods, daily logs, app settings,
reminder settings, and prediction records are encrypted with AES-GCM using a
key derived from your backup password with PBKDF2-SHA-256. Flowra does not store
or recover that password. On Android, the backup is written to the Documents
location; in a browser, it is downloaded to the location selected by the
browser. Restoring a selected backup replaces the app's local records after the
backup is decrypted and validated.

Flowra does not automatically upload exports or backups. You are responsible
for protecting and deleting files you save, copy, or share.

## Network Requests and Third Parties

The reviewed app contains no developer API, advertising SDK, analytics SDK,
cloud database, remote prediction service, or third-party sign-in. Core tracking,
prediction, reminder, security, export, and backup features operate without a
developer server.

The optional browser version is delivered by its web host. That host may
process ordinary connection information, such as an IP address, browser user
agent, request time, and requested files, under the host's own terms and privacy
policy. This delivery information is not the menstrual-health content stored by
Flowra in the browser.

## Device Permissions

The Android build uses:

- **Notifications:** requested only when you enable local reminders
- **Biometric and fingerprint compatibility permissions:** used only for
  optional strong-biometric unlock

The reviewed source does not request camera, microphone, precise or approximate
location, contacts, phone, call-log, SMS, calendar, or advertising-identifier
access.

## Data Sharing

Flowra does not sell health or personal information. The developer does not
receive or share the profiles, periods, symptoms, moods, notes, predictions, or
settings stored by the app. Information leaves app-controlled storage only when
you choose to export, print, back up, share a file, use a storage provider, or
contact support.

If you email the developer, the information you include is used only to respond
to your request and related support, privacy, or legal matters.

## Retention and Deletion

Local records remain until they are replaced by a restored backup, cleared
through Android or browser storage settings, or removed by uninstalling the
app. Exported CSV or PDF files and `.flowra` backups remain wherever you saved
or shared them and must be deleted separately.

Flowra has no user account or developer-operated cloud database, so there is no
server-side Flowra account data to request for deletion.

## Children's Privacy

Flowra can be used by a parent or caregiver to maintain an independent profile
for someone they care for. The app does not knowingly transmit children's data
to the developer. A parent or guardian should supervise use by a child, enter
only information needed for personal tracking, and protect the device and any
exported files.

## Changes to This Policy

This policy may be updated when Flowra's features or data practices change. The
effective and last-updated dates will be revised when changes are published.

## Contact

For privacy questions about Flowra, contact:

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
