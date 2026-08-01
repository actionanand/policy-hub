# Privacy Policy for Lingua Log

**Effective Date:** August 1, 2026  
**Last Updated:** August 1, 2026

## Overview

Lingua Log is a multilingual learning-record application developed by **Anand Raja**. It helps you organize sentences, transliterations, manually supplied translations, explanations, tables, and source references using a configured Google Sheet and device-local preferences.

Lingua Log has no advertising, developer-operated analytics, or general-purpose online user account. It does not automatically translate text.

## Language Content

Entries can include a generated identifier, creation and update times, source language and text, transliteration, translations, formatted explanations, table contents, resource labels and links, and a protected-status flag. Supported choices include Tamil, English, Sanskrit, Hindi, Kannada, Malayalam, Telugu, French, and a user-named language.

Do not enter confidential, copyrighted, personal, or third-party information unless you are authorized to store and share it.

## Google Sheets

Lingua Log reads entries from a configured Google Sheet through Google's Visualization endpoint. The editor copies a header or tab-separated row to the system clipboard so you can paste it into Google Sheets manually; the app does not directly write or delete Sheet rows.

The Sheet owner can access all stored entry content. Google receives the spreadsheet and tab identifiers plus standard connection information such as IP address, user agent, request time, and requested resource. Google's processing is governed by the [Google Privacy Policy](https://policies.google.com/privacy).

A row marked **Protected** is hidden in the Lingua Log interface until local login. The row remains present in the Sheet response and is not encrypted by this flag. Sheet sharing permissions remain the actual access control.

## Information Stored on Your Device

On Android, Lingua Log caches up to 30 recently fetched Sheet entries in localStorage for offline use. The cache can include protected rows and all their entry fields. It is not encrypted.

The app also stores theme preference, a local login session containing the entered user name and a SHA-1 password hash, and optional PIN or biometric settings. Even an unsuccessful login attempt can replace the locally stored user name and password hash. Login is checked locally and is not an online identity service.

An optional 4-to-8-digit PIN is represented by a salted PBKDF2-SHA-256 verifier. On supported Android devices, optional biometric unlock uses Android BiometricPrompt and Android Keystore. Lingua Log does not receive or store biometric templates. These controls restrict the app interface; they do not encrypt the Sheet cache.

## Clipboard and External Resources

Copied TSV content may be available to Android, keyboard software, clipboard history, and other apps permitted to read the clipboard. Entries may contain links or references. Opening a link shares normal request information with the destination and is governed by its policies.

## Information Received by the Developer

The developer does not automatically receive local login details, PIN data, cached entries, editor content, or clipboard rows. The owner of the configured Google Sheet can access Sheet content. If you contact support, the developer receives the information you choose to send.

## Permissions

Lingua Log uses internet access for Google Sheets, biometric permission when you enable fingerprint unlock, and clipboard access after copy or paste actions. The reviewed app does not request location, contacts, phone, SMS, call-log, camera, microphone, or notification permission.

## Retention and Deletion

The Android cache and settings remain until refreshed, replaced, cleared through system app-storage settings, or removed when the app is uninstalled. In a browser, clear the site's storage and cache. Logging out removes only the local login session.

Clearing Lingua Log does not delete Google Sheet rows, clipboard history, or content copied elsewhere. Delete Sheet records through the relevant Google account or Sheet owner and clear external copies separately.

## Changes and Contact

This policy may be updated when Lingua Log features or data practices change.

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
