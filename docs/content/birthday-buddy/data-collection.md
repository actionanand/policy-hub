# Birthday Buddy Data Collection

**Last Updated:** August 26, 2026

Birthday Buddy is designed to keep reminder information on your device. It does not require an account, display ads, include analytics, or send app usage telemetry to the developer.

## Data you may add

The app can locally store:

- Names, birthdays, anniversaries, custom occasions, notes, and favourites
- Optional profile photos
- Reminder timing and notification-privacy preferences
- Optional links to Android contacts and contact-sync choices
- Theme, accessibility, app-lock, and other settings
- Encrypted backup content when you explicitly export a backup

## Optional device sources

- **Contacts:** an individual contact picker or an opt-in, preview-first sync can read supported names, photos, and date events. Processing happens locally, and Birthday Buddy never writes to contacts.
- **Camera and photos:** only the image you capture or select is copied into app-local data.
- **Notifications:** locally scheduled reminders contain wording determined by your lock-screen privacy setting.
- **Biometrics:** Android performs authentication. The app receives an authentication result, not your biometric template.

## Storage and transmission

Android data is stored in app-local SQLite storage and protected preferences. Browser data is stored locally by the browser, including IndexedDB. Birthday Buddy does not automatically transmit personal reminder data to a developer-operated server.

An encrypted `.ocbackup` file leaves app-local storage only when you export it. Files and links you send to another service are then handled by that destination. Visiting the GitHub Pages-hosted browser app or Google Play can expose ordinary request or store activity information to those providers under their own policies.

## Data received by the developer

The developer receives no app data automatically. If you contact support, the developer receives the email address, message, and attachments you choose to send and uses them to respond.

For permission-specific details, including contacts, camera, notifications, reboot, wake lock, exact alarms, vibration, biometrics, legacy fingerprint compatibility, and internet access, see the Birthday Buddy Privacy Policy.
