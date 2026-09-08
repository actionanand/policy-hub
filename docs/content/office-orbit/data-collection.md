# Office Orbit Data Collection

**Last reviewed:** September 8, 2026

## Information processed

Office Orbit retrieves authenticated work records from its API. These can include work logs, comments, project and company relationships, JIRA details, sprint plans and allocations, release information, feedback, work links, dashboard summaries, and analytics.

The sign-in password is sent to the authentication endpoint over HTTPS. The username field supports credential-manager identification and is not sent by the Office Orbit client to its API.

## Information stored locally

The app stores access-token and session timing information in browser session storage on the web and secure device storage on Android. An optional PIN is represented by a salted verifier. Android performs optional biometric authentication without providing biometric templates to Office Orbit.

Fetched work data and navigation state are cached in memory and cleared on sign-out. Selected work-log data is included in a PDF only when you request an export.

## Network and third-party processing

The configured Cloudflare Workers API receives authentication and data requests plus ordinary connection metadata. GitHub Pages processes ordinary delivery logs for the web app. External sites receive information when you choose to open their links. These providers apply their own terms and privacy policies.

## Advertising and analytics

Office Orbit contains no advertising, developer-operated analytics, or telemetry service.

## Contact

Questions can be sent to **anand.official.in@gmail.com**.
