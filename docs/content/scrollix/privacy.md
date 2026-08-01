# Privacy Policy for Scrollix

**Effective Date:** August 1, 2026  
**Last Updated:** August 1, 2026

## Overview

Scrollix is a curated media-feed application developed by **Anand Raja**. It displays videos, social posts, and web articles listed in a configured Google Sheet and lets you open, play, save, or share supported content.

Scrollix has no advertising, developer-operated analytics, or general-purpose online user account.

## Curated Feed Data

Scrollix reads a configured Google Sheet through Google's Visualization endpoint. Rows can contain a serial number, media type, URL or video identifier, protected-status flag, title, description, optional YouTube start time, and share-link hash.

The complete fetched feed is cached unencrypted in localStorage for offline fallback, including rows marked Protected. A Protected row is hidden in the interface until local login; the flag does not encrypt the row or change Google Sheet permissions.

Google receives the spreadsheet and tab identifiers plus standard connection information such as IP address, user agent, request time, and requested resource. Google's processing is governed by the [Google Privacy Policy](https://policies.google.com/privacy).

## Media Platforms and External Sites

Depending on the selected item, Scrollix embeds, resolves, previews, or opens content from services such as YouTube, Instagram, Facebook, TikTok, Dailymotion, Vimeo, Reddit, and independent websites. Those services can receive your IP address, user agent, referrer or app origin, request time, content identifier, cookies or account state, and playback or interaction information under their own policies.

Loading YouTube content uses the YouTube iframe API. Facebook, Instagram, TikTok, Dailymotion, Vimeo, and other embeds use their respective players or pages. Opening a post can use an in-app reader, the Android app associated with the link, or your browser.

## Link Resolution and Previews

Scrollix can resolve Facebook and TikTok share URLs and fetch Open Graph metadata such as title, description, preview image, destination URL, and site logo. On Android, this is fetched directly from the destination on the device. On the web, Microlink may receive the target URL as a preview or redirect-resolution request.

Preview metadata can be cached unencrypted for up to seven days, with a maximum of 300 entries. Destination sites and Microlink receive standard request information and apply their own privacy policies.

## Offline Android Posts

On Android, you can save up to five supported posts for offline reading. Scrollix downloads and stores the post URL, title, description, full fetched HTML, and save time in unencrypted localStorage. Saved pages may contain third-party content or embedded references. You can remove each saved post from the app.

## Login and App Lock

Optional local login stores the entered username and successful SHA-1 password hash in localStorage. It is an interface access gate, not an online identity service.

An optional PIN uses a salted PBKDF2-SHA-256 verifier. On supported Android devices, optional biometric unlock uses Android BiometricPrompt and Android Keystore. Scrollix does not receive or store biometric templates. These controls restrict the interface but do not encrypt cached feed rows, previews, or offline posts.

## Sharing and Preferences

Scrollix can copy web or `scrollix://` Android video links to the system clipboard. Clipboard contents may be visible to Android, keyboard software, clipboard history, and permitted apps. The app stores preferences such as whether posts open in the in-app reader and a temporary browser install-prompt dismissal.

## Information Received by the Developer

The developer does not automatically receive your username, login hash, PIN data, biometric data, cached content, offline posts, playback history, or copied links. Google, media platforms, preview services, and destination sites receive the requests described above. If you contact support, the developer receives the information you choose to send.

## Permissions

Scrollix uses internet access for feed retrieval, previews, media playback, and websites; biometric permission when enabled; and clipboard access after copy actions. The reviewed app does not request location, contacts, phone, SMS, call-log, camera, microphone, storage, or notification permission.

## Retention and Deletion

You can remove saved offline posts individually and log out to remove local login records. To remove all caches, preferences, and security settings, clear Scrollix app storage or uninstall it; in a browser, clear site storage and cache. This does not delete source Google Sheet rows, third-party platform records, clipboard history, or content saved elsewhere.

## Content and Safety

Scrollix does not own or control third-party content. Availability, accuracy, suitability, licensing, and safety remain the responsibility of the relevant publisher and platform.

## Changes and Contact

This policy may be updated when Scrollix features or data practices change.

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
