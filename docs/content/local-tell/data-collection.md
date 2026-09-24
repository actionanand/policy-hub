# LocalTell Data Collection

**Last reviewed:** September 24, 2026

## On-device processing

With Android location permission, LocalTell reads serving-cell identifiers, including radio technology, MCC/MNC, area code, cell ID, and signal strength. It processes these identifiers on the device to find an approximate locality in a locally installed offline SQLite pack. LocalTell does not request or read GPS coordinates.

Optional Journey mode stores local entries containing the time, approximate area, optional district/state, radio, network code, cell ID, and confidence. Installed-pack metadata and preferences are also stored locally.

## Data received by the developer

LocalTell has no account, analytics, advertising, crash reporting, tracking, or developer-operated cloud database. The developer does not receive serving-cell information, approximate-area results, downloaded-pack contents, or Journey history. Support email contains only what you choose to send.

## Optional transfers

The app downloads only the offline packs you select and checks for updates over HTTPS. If you choose Share, the selected Android share target receives the approximate-area text you choose to share. Those external destinations apply their own privacy practices.

## Google Play Data safety context

LocalTell's serving-cell processing and Journey records remain on the device and are not transmitted to the developer. Play Console declarations must be reviewed for every release and for any future feature that changes these data practices.

