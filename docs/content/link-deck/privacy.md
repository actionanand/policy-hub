# Privacy Policy for Link Deck

**Effective Date:** August 1, 2026  
**Last Updated:** August 1, 2026

## Overview

Link Deck is an offline-first bookmark manager developed by **Anand Raja**. It
does not require an account and does not include advertising, analytics,
tracking, or developer-operated cloud sync.

## Information Stored on Your Device

Link Deck stores the information you enter in a local SQLite database on
Android or IndexedDB in a browser. This can include profiles, nested folders,
bookmark titles and URLs, descriptions, notes, tags, favourites, archive and
trash status, favicons, visit counts and dates, and app settings.

The developer does not receive this database. Link Deck does not use browser
localStorage or sessionStorage for application data.

## App Lock and Biometrics

If you enable an application PIN, Link Deck stores a salted
PBKDF2-SHA-256 verifier rather than the PIN itself. On supported Android
devices, optional biometric unlock uses Android BiometricPrompt and Android
Keystore. Link Deck does not receive or store biometric templates.

The PIN and biometric features control access to the app interface. They are
not a replacement for Android device encryption or a secure device lock.

## Network Requests and External Websites

When a bookmark is saved, Link Deck uses Google's favicon service to display an
icon for the saved website. The request includes the saved website's hostname.
Google may receive that hostname and standard connection information such as
the device IP address, user agent, request time, and requested resource.

Link Deck also references Google Fonts for interface symbols. Google's handling
of these requests is governed by the
[Google Privacy Policy](https://policies.google.com/privacy).

When you open a bookmark, Link Deck sends the URL to your browser. The website,
browser, network provider, and any services used by that website may process
information under their own privacy practices. Link Deck does not fetch page
content or send bookmark notes, tags, folders, or profiles to the saved website.

## Shared Links and Clipboard

On Android, Link Deck can receive text that you deliberately share from another
app and use it to prepare a new bookmark. It can also read text from the
clipboard when you choose the paste action and the platform permits access.
Review shared or pasted content before saving it.

## Backup, Restore, Import, and Export

Complete backups contain profiles, folders, bookmarks, notes, tags, favourites,
visit metadata, and settings. You can create a readable JSON backup or an
encrypted `.linkdeck` backup. Encrypted backups use AES-256-GCM with a key
derived from your passphrase using PBKDF2-SHA-256. The passphrase is not stored
and cannot be recovered by the developer.

Browser-compatible HTML imports and exports are not encrypted. They can contain
bookmark titles, URLs, favicons, timestamps, and folder structure. Files saved
or shared outside Link Deck are handled by the destination you choose.

## Information Collected by the Developer

The developer does not receive bookmarks, browsing history, folders, notes,
tags, PINs, backup passphrases, device identifiers, or usage telemetry. Link
Deck does not sell user information.

If you email support, the developer receives only the information you choose to
include and uses it to respond to your request. Do not email passwords, PINs,
private bookmark collections, or backup files.

## Permissions

Depending on the features you use, Link Deck may use internet access for
favicons, Google Fonts, and opening links; Android biometric authentication for
optional unlock; file or document access for import, export, backup, and
restore; and Android's share target for text you send to the app. The reviewed
app does not require location, contacts, camera, microphone, phone, or SMS
permissions.

## Retention and Deletion

Link Deck data remains on the device until you delete bookmarks or profiles,
clear app storage, or uninstall the app. Trashed bookmarks remain locally until
they are permanently deleted or their containing profile is deleted.

Deleting app data does not remove backup or exported HTML files saved or shared
outside Link Deck. Delete those copies separately from every destination. There
is no developer-operated Link Deck account or cloud database to delete by
email.

## Children's Privacy

Link Deck is not designed to collect children's personal information through a
developer-operated service.

## Changes to This Policy

This policy may be updated when Link Deck's features or data practices change.
The dates above will be revised when an updated policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
