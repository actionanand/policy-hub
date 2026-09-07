# Privacy Policy for Office Orbit

**Effective Date:** September 8, 2026  
**Last Updated:** September 8, 2026

## Overview

Office Orbit is a personal work-management application developed by **Anand Raja**. It provides authenticated views of work logs, JIRA references, sprints, allocations, releases, feedback, work links, dashboards, and analytics obtained from the configured Office Orbit API.

Office Orbit does not include advertising, developer-operated analytics, or third-party tracking SDKs.

## Information you provide

The sign-in screen accepts a username and password. The username exists to support the device or browser credential manager and is not sent by Office Orbit to its API. The password is sent over HTTPS to the configured authentication endpoint. Office Orbit does not store the plaintext password itself. Your browser, Android Autofill service, or Google Password Manager may offer to store credentials under that provider's settings and privacy terms.

If you contact support, the developer receives the information you choose to include in the message.

## Work information retrieved by the app

After authentication, Office Orbit can retrieve work information from its API, including:

- Work-log dates, updates, categories, types, work modes, comments, issues, appraisal markers, and related company, team, project, JIRA, and sprint references
- JIRA keys, summaries, statuses, tags, blockers, spillovers, demo details, projects, releases, and sprint relationships
- Sprint dates, capacity, leave and holiday values, allocations, planned days, and notes
- Release items, components, deployment types, versions, branches, dates, notes, and related JIRAs
- Feedback text, dates, sources, types, context, details, follow-up actions, and organizational relationships
- Work-link names, URLs, notes, types, active state, companies, and projects
- Dashboard summaries and analytics derived from these records

This information may be workplace, confidential, or personal information. Access and retention at the API and its underlying data source are controlled by the service operator, not by the Office Orbit client.

## Local and device storage

On the web, Office Orbit stores the authenticated session in browser session storage. It normally ends when that browser session is closed or when the session expires or is cleared. On Android, the session is stored using secure device storage so an active session can be restored.

Optional PIN protection stores a salted password-based verifier rather than the PIN in plaintext. On supported Android devices, optional biometric unlock uses Android's biometric system. Office Orbit does not receive or store fingerprint, face, or other biometric templates.

Fetched work records and navigation state are cached in application memory to improve performance. The client clears this cache on sign-out, and it is not designed as persistent storage for the source work records.

Theme and similar browser-facing preferences may be stored locally on the device.

## API and authentication processing

Office Orbit connects to the configured Office Orbit API hosted on Cloudflare Workers. Authentication requests include the entered password. Authenticated requests include an access token and request parameters such as filters, date ranges, pagination cursors, and relationship options. The service also receives ordinary connection information such as IP address, user agent, request time, and requested resource.

Cloudflare may process network and security information as the hosting provider under its own terms and privacy policy. The Office Orbit service operator can access information held by the API and its underlying work-data source according to that system's authorization and retention rules.

## Web hosting and external links

The browser version is hosted on GitHub Pages. GitHub may process ordinary web-request information such as IP address, browser details, and request logs under its own terms and privacy policy. Office Orbit does not add analytics to the hosted site.

When you open a work link or another external URL, the destination receives the request and applies its own privacy practices.

## PDF exports

Office Orbit can create PDF reports from selected work logs. Depending on your export choices, a report can contain dates, work updates, categories, types, work modes, comments, issues, appraisal markers, organization names, and JIRA references.

On the web, the report is downloaded through the browser. On Android, it is temporarily prepared in the app cache and passed to Android's save or share flow. Exported copies are readable outside Office Orbit and are controlled by the destination you select. Delete every saved or shared copy separately when it is no longer needed.

## Information collected by the developer

Office Orbit has no developer-operated advertising, analytics, or telemetry endpoint. The developer does not automatically receive your locally stored session, PIN verifier, biometric data, in-memory cache, or exported files.

The API operator receives authentication and data requests needed to provide the service. Support messages are retained as needed to answer the request and handle related support, privacy, or legal matters.

## Android permissions

Office Orbit uses:

- **Internet access** to authenticate and retrieve work information from the API
- **Biometric authentication** only when you choose to enable biometric app unlock on a supported device

PDF saving and sharing uses Android's system flow. The reviewed app does not request location, contacts, phone, SMS, camera, microphone, call-log, notification, or broad storage permissions.

## Retention and deletion

Signing out clears the locally stored Office Orbit session and in-memory data cache. Expired or invalid sessions are also discarded. Disabling PIN protection removes the local PIN and biometric preference.

You can remove all app-held Android data by clearing Office Orbit storage in Android settings or uninstalling the app. In a browser, close the browser session and clear the site's storage and cache.

These actions do not delete work records held by the API or its underlying data source, support emails, or PDF files saved or shared elsewhere. Follow the data-deletion instructions for those records.

## Workplace responsibility

Use Office Orbit only with work information you are authorized to access. Follow applicable employer policies and privacy, confidentiality, security, intellectual-property, and records-retention requirements.

## Children's privacy

Office Orbit is a workplace productivity tool and is not directed to children.

## Changes to this policy

This policy may be updated when Office Orbit's features or data practices change. The dates above will be revised when an updated policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
