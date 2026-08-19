# Delete Flowra Data

Flowra has no online account or developer-operated cloud database. Its health
records, profiles, predictions, and settings are stored locally.

## Delete Android app data

Use either Android option:

1. Open **Settings → Apps → Flowra → Storage** and select **Clear storage** or
   **Clear data**; or
2. Uninstall Flowra.

The exact labels vary by Android version and manufacturer. These actions remove
Flowra's private SQLite database, settings, local biometric credential wrapper,
and other app-private files. Android Keystore material associated with the app
is managed by Android when app data is cleared or the app is removed.

## Delete browser data

For the browser version, clear site data for the Flowra web origin using your
browser's privacy or site-storage settings. This removes the encrypted IndexedDB
records and their local encryption key. Clearing only cookies may not remove
IndexedDB, so select the option that clears all site data or storage.

## Delete exported files and backups

Clearing app or browser data does not delete CSV exports, printed or saved PDF
reports, or `.flowra` backup files. Delete each file separately from Documents,
Downloads, other device folders, and any messaging, backup, or storage provider
to which you copied or shared it.

## Notifications

Clearing app data or uninstalling the Android app removes its scheduled local
notifications. You can also disable reminders inside Flowra or revoke its
notification permission in Android settings.

Because the developer does not hold Flowra account or health data, no email
request is needed to delete data stored by the app.
