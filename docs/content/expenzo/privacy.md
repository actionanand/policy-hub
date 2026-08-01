# Privacy Policy for Expenzo

**Effective Date:** August 1, 2026  
**Last Updated:** August 1, 2026

## Overview

Expenzo is a personal-finance dashboard developed by **Anand Raja**. It displays expense, income, budget, savings, wishlist, and checklist information from configured Google Sheets and a Google Apps Script service. It also keeps selected data and preferences on your device.

Expenzo has no advertising, developer-operated analytics, or general-purpose online user account.

## Google Sheets and Apps Script

Expenzo requests financial records from a configured Google Apps Script endpoint. These records can include categories and limits, income sources and amounts, budget-cycle dates, expense transactions, notes, totals, savings, shortages, and spending summaries. The request includes an app access token and selected budget-cycle start day.

Wishlist and checklist screens read configured Google Sheet tabs. Wishlist records can include item names, quantities, units, and comments. Checklist records include item names.

Google receives standard connection information such as IP address, user agent, request time, and requested resource. The relevant Google account or sheet owner controls the source records. Google's processing is governed by the [Google Privacy Policy](https://policies.google.com/privacy).

## Information Stored on Your Device

Expenzo caches fetched finance data in browser localStorage for offline fallback. It also stores the chosen budget-cycle start day, theme, successful local-login state, and optional app-lock settings. General cached finance data is not encrypted.

The primary login checks a password hash locally. An optional PIN uses a salted PBKDF2-SHA-256 verifier. On supported Android devices, biometric unlock uses Android BiometricPrompt and Android Keystore. Expenzo does not receive or store biometric templates. These controls protect access to the interface; they do not encrypt the general finance cache.

## Exports

You can export selected financial summaries or transactions as CSV or PDF. On Android, Expenzo passes the file to the system save or share chooser. Browser versions may download or share the file. Exported copies are readable outside Expenzo and are handled by the destination you choose.

## Information Received by the Developer

The developer does not automatically receive local cache records, passwords, PINs, biometric data, or exported files. The owner of the configured Google Apps Script and Sheets can access data stored there and associated service logs. If you contact support, the developer receives the information you choose to send.

## Permissions

Expenzo uses internet access for Google services, biometric authentication when you enable it, and system save or sharing features when you export. The reviewed app does not require location, contacts, phone, SMS, call-log, camera, or microphone permissions.

## Retention and Deletion

Local information remains until replaced, cleared through Android or browser site-storage settings, or removed when the app is uninstalled. Clearing local data does not delete source records in Google Sheets, Apps Script logs, or exported files. Delete those through the relevant Google account or sheet owner and every export destination.

## Financial Information

Expenzo is an organizational and informational tool, not a bank, payment service, accountant, or financial adviser. Verify important figures against their authoritative records.

## Changes and Contact

This policy may be updated when Expenzo's features or data practices change.

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
