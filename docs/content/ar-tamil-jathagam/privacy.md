# Privacy Policy for AR Tamil Jathagam

**Effective Date:** August 1, 2026  
**Last Updated:** August 1, 2026

## Overview

AR Tamil Jathagam is an astrology application developed by **Anand Raja**. It creates horoscope, Panchanga, compatibility, transit, Kundali, and Chinese astrology information from details you provide.

The app has no advertising or developer-operated analytics. It does not create a general-purpose developer cloud account.

## Birth and Profile Information

Depending on the feature, the app can process a person's name, parents' names, gender, birth date and time, birthplace, latitude, longitude, time-zone offset, and optional sunrise setting. Couple-matching features can process details for two people. Horoscope calculations can derive astrological charts, planetary positions, Nakshatra, Rasi, Dasha periods, Dosham, compatibility results, predictions, and related interpretations.

Most astrology calculations run on your device. Do not enter another person's information unless you have permission to use it.

## Local Storage

You can save up to ten birth profiles on the device. Saved profiles include their label, birth details, and save time and are stored as plain JSON in localStorage; they are not encrypted. The app also stores language preference, a local login session, an optional data-cipher key, and administrator-configured author or PDF preferences.

The login compares SHA-1 password hashes locally. This is an interface access gate, not an online account or strong protection for locally stored profiles. Secure the device with Android encryption and a screen lock.

## Google Sheets and Clipboard Export

The app can fetch saved profile rows from a configured published Google Sheet. A row contains an identifier, label, transformed birth-data string, and save time. You can also copy a transformed row to the clipboard for manual pasting into a sheet.

The transformation uses a custom reversible substitution cipher. It is obfuscation and should not be treated as modern, strong encryption. Its secret key is stored in localStorage. Labels and row metadata are not hidden by that transformation.

Google receives the sheet identifier and standard connection information such as IP address, user agent, request time, and requested resource. The sheet owner controls the source records. Google's processing is governed by the [Google Privacy Policy](https://policies.google.com/privacy). Clipboard contents may be visible to the operating system and other permitted apps.

## Online Panchanga Services

When online Panchanga information is requested, the app sends a selected date and geographic coordinates to sunrise-sunset.org, SunriseSunset.io, and the Norwegian Meteorological Institute. It sends date, time, place name, coordinates, and time-zone offset to VedAstro for detailed calculations. These providers also receive standard connection metadata and apply their own privacy policies.

The app does not request the device's GPS location. Coordinates come from the place selected or entered in the app.

## PDF and Image Exports

The app can create horoscope, compatibility, Kundali, Chinese astrology, and other reports as PDF, and can download a Panchanga timeline image. Reports may contain names, birth details, charts, interpretations, author information, or passwords applied to a PDF. Saved, downloaded, printed, or shared files are readable by the destination subject to any PDF protection you selected.

## Information Received by the Developer

The developer does not automatically receive locally stored profiles, login passwords, cipher keys, calculations, or exported reports. The owner of the configured Google Sheet can access its rows. External Panchanga providers receive the request information described above. If you contact support, the developer receives what you choose to send.

## Permissions

The app uses internet access for optional online Panchanga and Google Sheet features and uses browser or Android file, print, clipboard, or sharing capabilities after your action. The reviewed source does not request location, contacts, phone, SMS, call-log, camera, or microphone access.

## Retention and Deletion

Local profiles can be removed from the saved-user interface. To remove all local records, clear app storage or uninstall the Android app; in a browser, clear the site's storage and cache. This does not delete Google Sheet rows, clipboard history, or exported files. Delete those through the relevant Google account, sheet owner, operating-system controls, and every file destination.

## Astrology Disclaimer

Astrological results are provided for cultural, educational, and entertainment purposes. They are not scientific findings or substitutes for medical, legal, financial, relationship, or other professional advice.

## Changes and Contact

This policy may be updated when features or data practices change.

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
