---
shortDescription: Offline locality lookup with on-device location and geographic packs.
---

LocalTell identifies your current locality with an on-device GPS fix and downloaded geographic data. If GPS cannot provide a sufficiently usable coordinate, you can choose an optional assisted-location fallback. It also provides cellular radio diagnostics for the serving and neighbouring cells Android reports.

Offline by design

• Download only the state or area packs you need
• Resolve a device location coordinate against a local geographic database
• Use locality results and cellular diagnostics without sending them to a developer service
• Refresh available packs and install updates when you choose
• Share a location with Easy codes or a Google Maps link when you choose

Locality results

• See the best available locality, district, and state match from an offline pack
• Use Easy to create or decode a LocalTell location code on your device
• Locality results and Easy codes reflect the precision of the original device fix; they are not guaranteed exact locations

Cellular diagnostics

• Review radio technology, network information, signal measurements, and serving or neighbouring-cell status
• Cellular diagnostics do not determine a GNSS-based locality result

Journey mode

• Optionally record an on-device history when the resolved locality changes
• While you choose to run Journey mode, it periodically obtains an on-device GPS fix with an Android foreground-service notification
• Clear Journey history at any time

Privacy

LocalTell has no account, ads, analytics, developer-operated tracking, or developer cloud. Android location permission enables cellular diagnostics and on-device locality lookup. LocalTell does not upload your location; assisted location is optional and requires your explicit choice, while Journey obtains periodic GPS fixes only while you have explicitly started it.

GNSS, offline-pack, and cellular results may be unavailable or inaccurate. Do not use LocalTell for emergency response, navigation, safety-critical decisions, or exact location.

