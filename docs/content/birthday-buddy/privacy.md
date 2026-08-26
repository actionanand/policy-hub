# Privacy Policy for Birthday Buddy

**Effective Date:** August 26, 2026  
**Last Updated:** August 26, 2026

## Overview

Birthday Buddy is a private, offline-first reminder app developed by **Anand Raja**. It helps you remember birthdays, anniversaries, and other occasions. The app does not require an account and does not include advertising, analytics, tracking, or developer-operated cloud sync.

## Information stored on your device

Birthday Buddy can store names, photos, birthdays, anniversaries, custom occasions, notes, favourites, reminder settings, contact links, contact-sync choices, theme and privacy preferences, and app-lock settings. Android stores app data locally in SQLite and protected app preferences. The browser version stores app data in browser-local storage such as IndexedDB.

This information remains on your device unless you explicitly export a backup. The developer does not automatically receive or upload it.

## Contacts and contact sync

You can add a person manually, select an individual contact, or start an optional contact sync. Selecting one contact uses Android's contact picker. Full contact sync asks for contacts permission and reads only the information needed to prepare a preview, such as a contact lookup identifier, display name, contact photo, birthday, anniversary, and other supported date events.

Sync is user-initiated, preview-first, and non-destructive. Birthday Buddy does not write to, edit, or delete Android contacts. Contact information is processed on the device and is not sent to the developer. An imported contact photo may be copied into Birthday Buddy's local data so it remains available in the app. Records you create manually are not overwritten by contact sync, and removing a source contact does not automatically delete an existing Birthday Buddy record.

If you ignore a contact during sync, a local reference may be retained so the contact stays ignored until you allow it again or clear app data.

## Photos and camera

You can optionally select a photo or take a new photo for a person. Camera permission is requested only when you choose to take a photo. Selecting an existing image uses Android's system photo picker and does not require broad access to your photo library. Selected or captured images are copied into app-local data and are not uploaded by Birthday Buddy.

## Reminders and notifications

Reminders are scheduled and delivered locally on your device. Notification permission is requested when you enable reminder features on Android versions that require it. Lock-screen privacy settings can show full details, a person's name only, or private wording.

Android controls notification timing, battery optimization, exact-alarm availability, and lock-screen display. Reboot, wake-lock, vibration, and alarm capabilities may be used only to restore or deliver the local reminders you configured. Birthday Buddy reminders are a convenience and are not guaranteed to arrive at an exact time.

## App lock and biometrics

You can optionally protect Birthday Buddy with a PIN. The app stores a salted cryptographic verifier rather than your readable PIN. On Android, sensitive lock material is protected with Android Keystore-backed encryption. In the browser, the verifier remains in browser-local storage.

After setting a PIN, you may optionally enable biometric unlock. Authentication is performed by Android and the app receives only the authentication result needed to unlock protected app data. Birthday Buddy does not receive or store fingerprints, facial images, or biometric templates.

## Backup and restore

Backups are created only when you request them. Birthday Buddy encrypts backup contents with AES-GCM using a key derived from the password you provide with PBKDF2-SHA-256. The backup password is not stored by the app or known to the developer and cannot be recovered by the developer. PIN and biometric credentials are not included in backups.

Exported `.ocbackup` files are saved to the location you choose and remain outside Birthday Buddy until you delete them. Anyone with the backup file and its password may be able to restore its contents, so keep both secure.

## Information collected by the developer

Birthday Buddy has no developer account system, advertising, analytics, tracking SDK, or developer-operated cloud database. The developer does not receive your people, occasions, contacts, photos, notes, reminders, PIN, biometric information, or backup password.

If you email support, the developer receives only the information you choose to include and uses it to respond. Do not send contact data, personal dates, photos, PINs, passwords, or backup files unless you understand the risk.

## Android permissions

Depending on your Android version and the features you use, the installed app may declare or request the following permissions:

- **`android.permission.READ_CONTACTS`** — requested at runtime only when you start full contact sync, so the app can prepare an on-device import preview. Birthday Buddy does not request `WRITE_CONTACTS`.
- **`android.permission.CAMERA`** — requested at runtime only when you choose **Take Photo**.
- **`android.permission.POST_NOTIFICATIONS`** — requested on supported Android versions so the app can display the local occasion reminders you enable.
- **`android.permission.RECEIVE_BOOT_COMPLETED`** — allows the local-notification system to restore scheduled reminders after the device restarts.
- **`android.permission.WAKE_LOCK`** — allows Android to wake briefly when needed to deliver a scheduled local reminder; it is not used for continuous background activity.
- **`android.permission.SCHEDULE_EXACT_ALARM`** — included by the local-notification library so Android can permit timely local reminders where exact-alarm access is supported. It is not used for tracking or uploading data, and Android may limit or deny exact scheduling.
- **`android.permission.VIBRATE`** — included by the haptics feature and used for optional interface feedback or notification vibration where supported.
- **`android.permission.USE_BIOMETRIC`** — used only if you enable biometric unlock after setting a PIN.
- **`android.permission.USE_FINGERPRINT`** — retained by AndroidX Biometric for compatibility with older Android devices; it serves the same optional unlock purpose.
- **`android.permission.INTERNET`** — included by the Android web-app container. Birthday Buddy's personal reminder data is not sent to a developer server; network access may occur when you deliberately open an external web link or use an online distribution or hosting surface.

The app does not request write access to contacts, call logs, SMS, microphone, location, phone state, calendar, or broad photo/storage access. Android's system pickers are used for files and existing photos where supported.

## Browser version and third-party services

The browser version is hosted on GitHub Pages. When you visit it, GitHub may process ordinary web-request information such as an IP address, browser details, and request logs under its own terms and privacy policy. Birthday Buddy does not add analytics or transmit your locally stored occasion data to GitHub.

Google Play processes information related to downloading, purchasing, reviewing, or updating Android apps under Google's own policies. External links you choose to open are governed by the destination's privacy practices.

## Retention and deletion

Deleting a person or occasion moves it to Birthday Buddy's local Trash, stops its reminders, and schedules it for permanent deletion after 30 days. You can restore an item before that deadline, permanently delete an individual Trash item, or empty Trash immediately. Expired Trash is purged when the app initializes.

Clearing the app's storage, clearing the website's stored data, or uninstalling the app removes app-local data without waiting for the Trash period. These actions do not remove exported backup files or copies saved elsewhere; delete those separately.

Because Birthday Buddy does not operate an account or cloud database, there is no server-side profile to delete by email. Detailed instructions are available on the Birthday Buddy Data Deletion page.

## Children's privacy

Birthday Buddy is not designed to collect children's personal information through a developer-operated service. A user may choose to store a child's birthday locally; that information remains subject to the same on-device practices described above.

## Changes to this policy

This policy may be updated when Birthday Buddy's features or data practices change. The dates above will be revised when an updated policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
