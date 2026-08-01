# Card Nest Data Collection

**Last reviewed:** August 1, 2026

## Data stored locally

Card Nest stores card information, optional encrypted full card numbers and
CVVs, transactions, receipts, income, budgets, categories, payment sources,
balances, loans, EMIs, reminders, profile details, preferences, and report data
in local SQLite storage.

The application PIN is stored only as a salted PBKDF2 hash. Android handles
biometric verification without providing biometric templates to Card Nest.

## Data collected by the developer

Card Nest has no account, developer cloud, analytics, advertising, crash
reporting, or tracking service. The developer does not receive app database
contents, financial records, receipts, PINs, or usage data.

If you email support, the developer receives only the information you choose to
include in that message.

## Data processed outside local SQLite

- Android can store masked reminder content containing a card nickname, last
  digits, amount, and date when notifications are enabled.
- Google may receive normal connection metadata when Google Fonts resources are
  requested.
- A file or sharing provider you choose receives encrypted backups or readable
  report exports sent to it.
- The camera and system photo picker provide receipt images only after your
  action and permission or selection.

## Permissions

Camera, selected photos, notifications, biometrics, file access, and internet
access are used only for their corresponding features. The reviewed app does
not require location, contacts, phone, SMS, or broad gallery access.

## Contact

Questions can be sent to **anand.official.in@gmail.com**.
