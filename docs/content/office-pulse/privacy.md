# Privacy Policy for Office Pulse

**Effective Date:** August 1, 2026  
**Last Updated:** August 1, 2026

## Overview

Office Pulse is a work-organization and productivity application developed by
**Anand Raja**. It combines attendance tools, schedules, tasks, notes, work
references, and utilities using device-local storage and configured Google
Sheets and Google Forms.

Office Pulse does not include advertising, developer-operated analytics, or a
general-purpose developer cloud account.

## Information Stored on Your Device

Office Pulse uses localStorage to retain information and preferences. Depending
on the features you use, this can include:

- A pending office entry time, exit time, company or workplace value, comment,
  status, work-hour settings, and attendance cache
- To-do items, checklist items, stopwatch state, local memos, cue cards,
  recently viewed Markdown files, sprint-capacity settings, and bookmarks
- Local status, colour, and tracking overrides for memos, Jira-related items,
  demonstrations, releases, and other work records
- Cached rota data, notification state, navigation or display preferences, and
  security settings

These general localStorage records are not encrypted. Do not place secrets,
passwords, authentication tokens, full payment-card details, or information you
are not permitted to store into free-text fields.

## Google Sheets

Office Pulse reads configured Google Sheets through Google Visualization or CSV
endpoints. Sheet data can include attendance entries, office holidays,
important dates, achievements, copy or transfer items, support rotas, memos,
Jira-related ticket information, tracked-ticket status, bookmarks, office
seating allocations, train-seat reference data, credit-card usage reminders,
and cue cards.

Requests disclose the configured spreadsheet and tab identifiers plus standard
connection information such as IP address, user agent, request time, and
requested resource to Google. Sheet contents are controlled by the sheet owner
and may contain workplace or personal information. Google's processing is
governed by the [Google Privacy Policy](https://policies.google.com/privacy).

Some fetched attendance and rota information is cached locally to improve
availability and performance.

## Google Forms

Office Pulse can open embedded Google Forms or submit selected fields to
configured forms after your action. Depending on the feature, submitted fields
can include entry and exit times, workplace or company name, work status,
comments, achievement titles, dates, links, or transfer notes.

Google and the form owner receive submitted information. The form owner's
access, retention, and use are governed by their configuration and applicable
policies. Review prefilled information before submitting a form.

## Local Login, PIN, and Biometrics

The primary app login compares a SHA-1 password hash locally and stores a
successful-login record in localStorage. The plain-text password is not stored
or sent to an Office Pulse server. This client-side gate is not an online
account or a high-security identity system.

An optional 4-to-8-digit application PIN is represented by a salted
PBKDF2-SHA-256 verifier. On supported Android devices, optional biometric unlock
uses Android BiometricPrompt and Android Keystore. Office Pulse does not receive
or store biometric templates. Auto-lock and background-lock preferences are
stored locally.

These controls protect access to the interface but are not substitutes for
Android device encryption, a secure device lock, or appropriate workplace
access controls.

## Notifications

If you enable Android log-off reminders and grant notification permission,
Office Pulse stores reminder timing and content locally and asks Android to
schedule or display the notification. Exact-alarm access may be used where
required by Android. Notification titles and messages can be visible on the
lock screen according to system settings.

## PDF Export and Files

Office Pulse can generate attendance reports containing dates, entry and exit
times, durations, workplace names, statuses, and comments selected for export.
On Android, the report is passed to the system save or share flow. In a browser,
the print dialog is used. Exported PDF files are readable outside the app and
are handled by the destination you choose.

The Markdown viewer reads files only after you select them. Selected file names
or recently viewed references may be retained locally.

## Information Collected by the Developer

Office Pulse has no developer-operated analytics, advertising, or telemetry
endpoint. The developer does not automatically receive localStorage records,
PINs, passwords, notification settings, or exported reports.

Information submitted to configured Google Forms or stored in configured Google
Sheets is available to the applicable form or sheet owner, which may be the
developer or an authorized workplace administrator. If you email support, the
developer receives the information you choose to include.

## Permissions

Depending on the features and Android version, Office Pulse may use internet
access for Google Sheets and Forms, notification permission and exact alarms for
optional reminders, biometric authentication for optional unlock, and document
or sharing access for PDF export and selected Markdown files.

The reviewed app does not require location, contacts, phone, SMS, camera,
microphone, or call-log permissions.

## Retention and Deletion

Local records remain until removed by the relevant feature, replaced, cleared
through Android or browser site-storage settings, or removed when the app is
uninstalled. Some caches expire or are refreshed automatically.

Clearing app data does not delete Google Form submissions, Google Sheet rows,
or PDF copies saved or shared elsewhere. Those records must be deleted through
the applicable Google account, form or sheet owner, workplace administrator,
or file destination.

## Workplace Responsibility

Use Office Pulse only with information you are authorized to access and store.
Follow employer policies and applicable privacy, confidentiality, records, and
security requirements.

## Changes to This Policy

This policy may be updated when Office Pulse features or data practices change.
The dates above will be revised when an updated policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
