# Privacy Policy for Personix

**Effective Date:** August 3, 2026  
**Last Updated:** August 3, 2026

## Overview

Personix is a private, offline-first personal organizer developed by **Anand Raja**. It helps you organize saved links, family and health references, vehicle information, temporary notes, and checklists. Personix does not require an account and does not include advertising, analytics, or developer-operated cloud storage.

## Information Stored on Your Device

Personix stores the information you enter locally in SQLite on Android or IndexedDB in a browser. Depending on the features you use, this can include:

- Saved links, titles, descriptions, categories, tags, intended recipients, preview images, and adult-content settings
- Family-member details, contact details, Rasi, Nakshatra, Gothram, hospital OP references, medical-insurance information, medicines, toiletries, and blood-group records
- Vehicle registration, ownership, insurance, pollution-expiry, and note information
- Notes, checklists, and app settings

This information may be sensitive. Keep your device secured and enter only information you are authorized to store.

## Metadata and Third-Party Content

On Android, Personix can connect directly to a saved website to retrieve Open Graph metadata and preview images. The destination website can receive standard connection information such as your IP address, user agent, request time, and requested URL.

In the browser version, third-party metadata fetching is disabled by default. If you explicitly enable it, the saved URL is sent to `api.microlink.io` to retrieve preview information. Microlink's own privacy terms apply. Embedded or opened content from services such as YouTube, Instagram, Facebook, TikTok, Dailymotion, and Vimeo is handled by those services under their own privacy policies.

## Text-Based Records and Backup Files

Personix records are text-based. The app does not access your camera or collect photo, video, or audio attachments. When you choose to import or export an encrypted backup, the selected backup file is handled through the applicable system file flow. Exported files are controlled by the destination you choose.

## PIN, Biometrics, and Backups

An optional app PIN is stored as a salted PBKDF2 verifier. On supported Android devices, biometric unlock uses Android's biometric system and Keystore; Personix does not receive or store your biometric template.

Backups are encrypted using AES-256-GCM with a key derived from the password you provide. App PINs, biometric credentials, and Android Keystore keys are excluded from backups. Anyone with a backup file and its password may be able to restore its contents, so store both securely.

## Information Received by the Developer

The developer does not automatically receive your local records, PIN, biometric information, or backup files. If you email support, the developer receives the information you choose to include.

## Retention and Deletion

Local information remains until you delete individual records, use the in-app delete-all-data option, clear the app's storage, clear the browser's site data, or uninstall the app. Deleting app data does not delete exported backups or files saved or shared elsewhere.

## Changes to This Policy

This policy may be updated when Personix features or data practices change. The date above will be revised when an updated policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
