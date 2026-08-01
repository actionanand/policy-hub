# Privacy Policy for Spendzo

**Effective Date:** July 30, 2026  
**Last Updated:** July 30, 2026

## Overview

Spendzo is an offline-first personal expense and budget-tracking application.
It is provided by **Anand Raja**. It does not require an account and does not
include advertising, analytics, tracking, telemetry, crash reporting, or cloud
synchronization.

## Information stored by the app

Spendzo stores information that you enter, including:

- Expenses, amounts, dates, categories, titles, notes, payment methods, and tags
- Income entries, sources, amounts, dates, and notes
- Budgets, savings targets, emergency allocations, and category limits
- App preferences such as currency, budget-cycle dates, theme, and lock settings

This information is stored locally in the app's private SQLite database on
Android. The developer does not receive or have access to it.

## Information collected or shared

Spendzo does not send your financial information or app usage information to
the developer or third parties. It does not sell or share personal data.

The libraries used to provide the app interface, charts, local storage, and
Android integration run within the app. No third-party analytics, advertising,
or cloud-data SDK is included.

## PIN and fingerprint protection

PIN protection is optional. Spendzo stores a cryptographic PIN verifier rather
than the PIN itself. There is no PIN recovery.

Optional fingerprint unlock is handled by Android's biometric system. Spendzo
does not receive or store fingerprint images or biometric templates. Android
Keystore protects the local secret used for fingerprint unlock, and a PIN
remains available as the fallback.

## Permissions

Spendzo may use:

- **Biometric permission:** only when you choose fingerprint unlock.
- **Internet permission:** included for the Capacitor application runtime. The
  reviewed Spendzo app does not use it to upload or synchronize financial data.

Spendzo does not request location, camera, microphone, contacts, SMS, or broad
storage permissions. Android's system document picker is used when you choose
where to save an export or backup.

## Backups and exports

You can create local `.budgetbackup`, CSV, and PDF files. These files are saved
only to a location you select. Backup files exclude PIN and biometric secrets,
but the financial information inside a backup is not encrypted. Anyone who can
access an exported file may be able to read it.

Spendzo does not upload or retain copies of exported files. You are responsible
for protecting and deleting files saved outside the app.

## Data retention and deletion

Local data remains on the device until you delete individual records, clear
Spendzo's storage through Android settings, or uninstall the app. Files that
you exported are separate and must be deleted from their saved locations.

Because Spendzo has no account or developer-operated server, there is no
server-side account data for the developer to delete.

## Children's privacy

Spendzo is a general-purpose budgeting tool and is not specifically directed to
children under 13. The developer does not knowingly collect personal
information from children or other users.

## Changes to this policy

This policy may be updated when Spendzo's features or data practices change.
The updated date at the top will identify the latest version.

## Contact

For privacy questions, email **anand.official.in@gmail.com**.
