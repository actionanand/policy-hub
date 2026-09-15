# Qurio Data Collection

**Last reviewed:** September 16, 2026

## Information processed

Qurio processes a display name, email address, Supabase authentication credentials, email-verification status, account status, and role. Passwords are not available to the developer in plaintext. Account administration may record approval, denial, suspension, reactivation, role changes, reasons, and audit details.

For approved accounts, Qurio stores language, theme, curriculum, grade, selected exam plan, study progress, content identifiers, quiz attempts and answers, hint use, timing, scores, pass results, exam-plan tasks, bookmarks, and timestamps in Supabase's hosted PostgreSQL (SQL) database. This is the account's canonical learning record.

## Local information

The app may keep a local authenticated session, display preferences, and a temporary synchronization cache. Local data supports the installation but is not the canonical account record. Optional web PIN protection stores a salted password-derived verifier in IndexedDB. Android biometric unlock uses random unlock material protected by Android Keystore and does not store the PIN; Qurio does not collect biometric templates.

Enabled reminder days and time are saved to account settings in the Supabase SQL database so they can be restored for that account. The notification-permission state and scheduled notification remain on the Android device. No push-notification token is uploaded.

## Providers

Supabase Authentication and Supabase's hosted PostgreSQL (SQL) database process authentication, profile, authorization, learning, settings, and audit data. GitHub hosts the web client and learning content. The authentication email provider processes addresses and delivery metadata for verification and password-reset messages. Providers also receive normal connection and security metadata.

## Advertising and analytics

Qurio has no advertising, developer-operated analytics, or tracking SDK.

Questions: **anand.official.in@gmail.com**.
