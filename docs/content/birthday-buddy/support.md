# Birthday Buddy Support

Birthday Buddy keeps birthdays, anniversaries, and occasion reminders locally on your device. No account is required.

## Reminders are not appearing

1. Confirm the occasion has a reminder enabled and its date and time are correct.
2. Allow Birthday Buddy notifications in Android settings.
3. Review battery optimization, background restrictions, and exact-alarm access where your Android version exposes those controls.
4. Restart the app after changing system permissions. Reboot restoration is handled locally, but Android ultimately controls delivery timing.

## Contact import or sync is unavailable

- To select one person, use the Android contact picker.
- For full sync, grant contacts permission when prompted and review the preview before importing.
- Birthday Buddy never edits Android Contacts. If a source contact changes, run sync again to preview supported changes.
- Browser builds do not have Android's native contact-sync integration.

## Camera or photo selection is unavailable

Allow camera permission only if you want to take a new photo. Existing images are selected through the system picker where supported. If permission was denied permanently, enable it from Android's app settings.

## PIN or biometric unlock problems

Biometric unlock is optional and becomes available only after a PIN is set. Changes to enrolled biometrics or device security can invalidate the protected key; use the PIN if available and configure biometrics again. The developer cannot recover your PIN.

## Backup or restore problems

Keep the `.ocbackup` file and its exact password together securely. Backup passwords are not stored and cannot be recovered. Make a current backup before restoring because restore operations can change local data. Ensure the selected file was created by Birthday Buddy and has not been modified.

## Clear local data

On Android, clear Birthday Buddy's storage in system settings or uninstall the app. In a browser, clear site data for `actionanand.github.io`. Exported backup files must be deleted separately from wherever you saved them.

## Contact support

Email **anand.official.in@gmail.com** with your platform/version and reproducible steps. Do not include contacts, personal dates, photos, PINs, backup passwords, or backup files unless necessary and you understand the risk.
