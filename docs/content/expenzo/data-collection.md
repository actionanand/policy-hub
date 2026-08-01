# Expenzo Data Collection

**Last reviewed:** August 1, 2026

## Data handled

Expenzo retrieves configured financial records through Google Apps Script, including transactions, categories, limits, income, budget cycles, savings, and summaries. It reads wishlist item names, quantities, units, and comments, plus checklist item names, from configured Google Sheets.

Fetched finance data can be cached in localStorage with theme, cycle, login, and security preferences. General cached records are not encrypted. PIN verification uses a salted PBKDF2 verifier, while Android performs biometric verification without exposing biometric templates to Expenzo.

Google and the configured service owner can receive requested resource identifiers, an app token and cycle selection where applicable, and standard connection metadata. Expenzo has no developer-operated ads, analytics, or telemetry.

Questions can be sent to **anand.official.in@gmail.com**.
