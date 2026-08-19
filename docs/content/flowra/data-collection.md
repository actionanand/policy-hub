# Flowra Data Collection

**Last reviewed:** August 19, 2026

## Data stored locally

Flowra may store profile and optional age information, menstrual and first-period
details, reproductive life stage, period dates, daily flow, products, symptoms,
moods, private notes, local predictions, reminder settings, and security and
appearance preferences. This information is stored on the user's device and is
not sent to the developer.

Android uses SQLite in private app storage. The database is not encrypted at
the database level, and the optional app PIN does not encrypt it. Flowra disables
Android cloud and device-transfer backup for its private app data.

The browser version encrypts records with AES-GCM before storing them in
IndexedDB. Its non-exportable encryption key is stored in the same browser
origin.

## Data collected by the developer

Flowra has no account, advertising, analytics, crash reporting, tracking,
developer API, remote prediction service, or cloud sync. The developer does not
collect profiles, menstrual records, symptoms, moods, notes, predictions,
device identifiers, or app activity.

If you email support, the developer receives only the information you choose to
include.

## Optional notifications and biometrics

Android notification permission is requested only when local reminders are
enabled. Notifications are scheduled on the device. Non-private notification
wording may contain a profile name and estimated timing.

Optional biometric unlock uses Android's biometric prompt and Keystore. Flowra
stores an encrypted PIN credential locally for that feature but does not access
or receive biometric templates.

## User-created files

CSV exports and printable/PDF reports may contain period history and are not
automatically encrypted. Password-protected `.flowra` backups contain local app
records encrypted with AES-GCM. These files are created only at the user's
request and are saved or shared under the user's control; they are not uploaded
to the developer.

## Browser hosting data

When the browser version is opened, its hosting provider may process standard
connection data needed to deliver web files, such as IP address, user agent,
request time, and requested path. This does not give the developer access to the
encrypted health records stored by Flowra in IndexedDB.

## Android permissions

The reviewed Android source declares notification and biometric/fingerprint
compatibility permissions. It does not request camera, microphone, location,
contacts, phone, call-log, SMS, calendar, or advertising-identifier access.

## Contact

Questions can be sent to **anand.official.in@gmail.com**.
