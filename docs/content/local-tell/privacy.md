# Privacy Policy for LocalTell

**Effective Date:** September 24, 2026  
**Last Updated:** October 4, 2026

## Overview

LocalTell is an offline-first Android app developed by **Anand Raja**. It uses an on-device location fix to resolve a locality from an offline geographic data pack installed on your device, and provides cellular diagnostics from information Android reports. It has no account, advertising, analytics, developer-operated tracking, or developer-operated cloud service.

## Information processed on your device

After you grant Android's location permission, LocalTell can read registered serving-cell information supplied by Android: radio technology, mobile country code, mobile network code, area code, cell identifier, and signal strength. It processes this information locally for diagnostics. To resolve a Home locality, LocalTell first requests one short GNSS fix from the Android GPS provider and uses that coordinate only on the device with a downloaded offline SQLite pack.

If GPS cannot provide a sufficiently usable coordinate, LocalTell may offer an optional **Use assisted location** choice. It requests an assisted current location only after you choose that option, using Android/Google Play services and a usable network connection. The resulting coordinate is still matched only against the offline pack; LocalTell does not perform online reverse geocoding or send the coordinate to the developer.

The Easy screen requests a location only when you choose **Get my location**. It can locally create and decode LocalTell location codes; these codes represent a coordinate but are not stored in a developer service. Optional Journey mode remains GPS-only: it requests periodic GNSS fixes only while you have explicitly started its foreground service, and stores a local history only when the resolved locality changes.

If you use Journey mode, LocalTell stores a local history of resolved localities. An entry includes its timestamp, locality, optional district and state, radio technology, network code, cell identifier, and confidence. Offline pack preferences and installed-pack metadata are also kept in app-private storage.

## Network use and offline packs

Internet access is used to retrieve the published offline-pack manifest, download a pack you choose, and periodically check for pack updates. It can also be used by Android/Google Play services when you explicitly choose assisted location. Pack URLs use HTTPS and downloaded packs are checked before use. Serving-cell data, Journey history, GNSS coordinates, and locality results are not sent to the developer as part of these requests.

## Permissions

LocalTell may use the following Android permissions:

- Precise and approximate location permission so Android can provide serving cellular identifiers and, when you request it, a location fix for locality resolution or Easy location sharing. GPS is used first; assisted location is optional and requires your separate choice.
- Internet permission for optional offline-pack downloads and update checks.
- Foreground-service and foreground-service-location permissions for optional Journey mode, which periodically checks the serving cellular network while you have started the service.
- Notification permission on Android versions that require it, only to show the ongoing Journey foreground-service notification.

You can deny or revoke permissions in Android settings. Without location permission, LocalTell cannot read cell identifiers or resolve a locality. Journey mode requires location access and, where applicable, notification permission.

## Sharing and external services

When you choose Share, Open in Google Maps, Uber, Ola, or Rapido, LocalTell passes the selected location information to the Android app or service you choose. Easy sharing can include the coordinate, LocalTell codes, and a Google Maps link. Ola and Rapido copy the destination before opening their apps. Those external destinations handle the information under their own privacy policies. LocalTell does not automatically share or upload results.

## Retention and deletion

Data remains on your device until you remove it. You can remove an installed offline pack in the Offline data screen and clear Journey history in the Journey screen. Clearing LocalTell's storage in Android settings or uninstalling LocalTell removes its app-private data, including downloaded packs and Journey history. Android backup and device-transfer rules exclude LocalTell app data.

The developer does not hold an account or cloud copy of this data, so there is no developer-held app data to delete by email. Support email contains only the information you choose to send.

## Children's privacy and policy changes

LocalTell is not designed to collect children's personal information through a developer-operated service. This policy may change if the app's features or data practices change; the dates above will be updated when a revised policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com

