# Privacy Policy for Qurio

**Effective Date:** September 8, 2026  
**Last Updated:** September 8, 2026

## Overview

Qurio is a multilingual learning and exam-preparation app developed by **Anand Raja**. It provides study material, quizzes, progress tracking, practice history, and exam plans through authenticated accounts.

Qurio has no advertising, does not sell personal information, and does not use developer-operated analytics or tracking SDKs.

## Account information

Registration processes your display name, email address, and password through Supabase Authentication. The developer cannot view your plaintext password. Qurio also processes email-verification and password-reset requests, account status and role, approval decisions, reasons, and timestamps.

Verified users may be approved automatically when the owner enables that setting, or reviewed by an owner or administrator.

## Learning information

Qurio stores account-linked learning information including:

- Language, theme, curriculum, grade, and selected exam plan
- Study-content identifiers, reading progress, completion state, and timestamps
- Quiz identifiers, selected and correct answers, hint use, time spent, scores, pass results, and attempt timestamps
- Exam-plan dates, task identifiers and types, and completion status

Database Row Level Security restricts learners to their own learner-state records.

## Administration and audit records

Authorized owners and administrators can manage verification, approval, account status, and roles. Security audit records may contain the affected account's name and email; the acting administrator's account, role, and action; old and new status or role; a reason; and a timestamp.

## Device and browser storage

Qurio stores preferences, cached progress, quiz history, exam progress, reminder settings, and notification-prompt state locally. Supabase maintains the authenticated session.

Optional app locking stores a salted, password-derived PIN verifier in IndexedDB. The web app does not store the PIN in plaintext. Optional Android biometric unlock stores an encrypted PIN secret protected by Android Keystore. Android performs biometric matching; Qurio never receives fingerprint or face templates.

## Notifications

If you enable Android practice reminders, Qurio asks for notification permission, stores selected days and time locally, and schedules local notifications. Boot-completed, time-change, and timezone-change events restore enabled schedules after restarts or clock changes.

No push token is uploaded. Reminders contain no quiz answers, scores, or sensitive learning details. You can disable reminders in Qurio and revoke permission in Android settings.

## Service providers

Qurio uses **Supabase** for authentication, profiles, authorization, learner state, settings, and audit records; a configured authentication email provider for verification and reset emails; **GitHub Pages** for the web client; and **GitHub raw-content delivery** for learning files. These services process necessary data and ordinary connection metadata such as IP address, user agent, request time, and requested resource under their own policies.

## Android permissions

Qurio uses:

- **Internet access** for authentication, synchronization, and learning content
- **Notifications** for optional practice reminders
- **Receive boot completed** to restore enabled reminders
- **Biometric authentication** only when you enable biometric unlock

Qurio does not request location, contacts, phone, SMS, call logs, camera, microphone, or broad storage access.

## Retention and deletion

Account and learning records remain while needed to provide Qurio. Signing out ends the local session but does not delete server data. Local information remains until cleared through the browser or Android settings.

Deleting an authentication account is designed to delete its linked profile and learner-state records. Limited audit or support records may remain for security, disputes, legal duties, and accountability. See the Data Deletion page.

## Children and families

Qurio may be used by school-age learners. A parent, guardian, school, or authorized adult should supervise account creation where consent is required. Children should not send unnecessary personal information to support. A parent or guardian may request access to or deletion of a child's account. Qurio does not serve behaviorally targeted advertising or build advertising profiles.

## Security

Qurio uses HTTPS, Supabase Authentication, email verification, role-based authorization, Row Level Security, approval controls, and optional device locking. Protect your email account, password, device, PIN, and active session.

## Changes and contact

This policy may change with Qurio's features or providers. Updated dates will be published here.

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
