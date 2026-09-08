# Qurio Data Collection

**Last reviewed:** September 8, 2026

## Information processed

Qurio processes a display name, email address, Supabase authentication credentials, email-verification status, account status, and role. Passwords are not available to the developer in plaintext. Account administration may record approval, denial, suspension, reactivation, role changes, reasons, and audit details.

Qurio stores language, theme, curriculum, grade, selected exam plan, study progress, content identifiers, quiz attempts and answers, hint use, timing, scores, pass results, exam-plan tasks, and timestamps.

## Local information

Preferences and progress are cached locally. Optional PIN protection stores a salted password-derived verifier in IndexedDB. Android biometric unlock uses an encrypted secret protected by Android Keystore; Qurio does not collect biometric templates.

Enabled reminder days, time, and permission-prompt state stay locally on the device. No push-notification token is uploaded.

## Providers

Supabase processes authentication, profile, authorization, learning, settings, and audit data. GitHub hosts the web client and learning content. The authentication email provider processes addresses and delivery metadata for verification and password-reset messages. Providers also receive normal connection and security metadata.

## Advertising and analytics

Qurio has no advertising, developer-operated analytics, or tracking SDK.

Questions: **anand.official.in@gmail.com**.
