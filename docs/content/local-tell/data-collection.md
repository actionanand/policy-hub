# LocalTell Data Collection

**Last reviewed:** October 4, 2026

## On-device processing

With Android location permission, LocalTell reads serving-cell identifiers, including radio technology, MCC/MNC, area code, cell ID, and signal strength. It processes these identifiers on the device for diagnostics. To resolve a Home locality, it first requests one short on-device GNSS fix and compares that coordinate with a locally installed offline SQLite pack. If GPS cannot provide a sufficiently usable coordinate, Home and Easy can offer assisted location only after you explicitly choose it. Assisted location uses Android/Google Play services with a usable network connection; the returned coordinate is still resolved only against the locally installed offline SQLite pack. Easy can also obtain a location only after you choose **Get my location** and can create or decode LocalTell location codes entirely on the device.

LocalTell does not send location coordinates to the developer and does not perform online reverse geocoding. Outside optional active Journey mode, it does not continuously request location. Journey remains GPS-only: while you have explicitly started it, it periodically requests an on-device GNSS fix and retains a local locality history only when the resolved locality changes. A current Easy location remains in memory only until it is refreshed or the app process ends.

Optional Journey mode stores local entries containing the time, resolved locality, optional district/state, radio, network code, cell ID, and confidence. Installed-pack metadata and preferences are also stored locally.

## Data received by the developer

LocalTell has no account, analytics, advertising, crash reporting, tracking, or developer-operated cloud database. The developer does not receive serving-cell information, approximate-area results, downloaded-pack contents, or Journey history. Support email contains only what you choose to send.

## Optional transfers

The app downloads only the offline packs you select and checks for updates over HTTPS. If you explicitly choose assisted location, Android/Google Play services may use the available network to determine the current location; those services apply their own privacy practices. If you explicitly choose Share, Open in Google Maps, Uber, Ola, or Rapido, the selected external app receives the location information needed for that action. Those external destinations apply their own privacy practices.

## Google Play Data safety context

LocalTell's serving-cell processing and Journey records remain on the device and are not transmitted to the developer. Play Console declarations must be reviewed for every release and for any future feature that changes these data practices.

