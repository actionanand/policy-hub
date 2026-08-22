# Privacy Policy for Click2Chat

**Effective Date:** August 17, 2026  
**Last Updated:** August 22, 2026

## Overview

Click2Chat is an offline-first utility developed by **Anand Raja**. It lets you
view recent calls in the Android app and start a WhatsApp or WhatsApp Business
conversation without first saving the number as a contact.

The app does not require an account and does not include advertising,
analytics, tracking, or developer-operated cloud storage.

## Android Call Log Permission

The released Android app declares and requests
`android.permission.READ_CALL_LOG`. This permission is used only to display
the phone's recent call history in Click2Chat. The app requests access when the
recent-calls screen needs it. You may deny or later revoke the permission;
direct-number chat remains available.

When permission is granted, Click2Chat reads at most the configured 100 most
recent call-log entries. For each entry, the app can read:

- The phone number
- The cached caller name, when Android provides one
- The call type, such as incoming, outgoing, missed, rejected, blocked, or
  voicemail
- The call date and time
- The call duration

These entries are displayed from temporary app memory. Click2Chat does not save
the retrieved call list to a database, localStorage, a file, a backup, or a
developer server. It does not alter or delete the Android call log.

Click2Chat does not request permission to read Android Contacts, SMS or MMS
content, recorded call audio, the microphone, location, or device files.

## Phone Dialler

The phone button beside a recent call first displays a confirmation in
Click2Chat. If you choose **Call**, the app passes that phone number to the
Android phone dialler. The dialler displays the number for review, and you must
use the phone app's Call button to place the call.

Click2Chat does not place calls automatically and does not request
`android.permission.CALL_PHONE`. Your phone app and mobile carrier process a
call under their own terms and privacy practices.

## Numbers, Country Selection, and Messages

A phone number and optional message that you enter are held temporarily while
you prepare the chat. Click2Chat formats this information locally. It does not
save the number or message as an app record.

The selected country and calling code are synchronized in the interface. The
last selected country and your light, dark, or system theme preference can be
stored locally in browser or WebView localStorage so they can be restored the
next time you use the app. These preferences do not identify you and are not
sent to the developer.

## Clipboard Access

Click2Chat reads text from the clipboard only when you press the paste button.
It does not monitor the clipboard in the background. Pasted text is placed into
the phone-number field and is handled like text you type manually.

## WhatsApp and External Services

When you choose to open a chat, Click2Chat passes the formatted phone number and
optional message to WhatsApp, WhatsApp Business, or the `wa.me` web service. If
both Android applications are installed, Click2Chat lets you choose one. If
only one is installed, the app can open it directly.

The selected external application or website receives the number and message
needed to perform the action you requested. Its own privacy policy and terms
apply. Click2Chat does not send a WhatsApp message automatically.

On Android, Click2Chat checks locally whether the WhatsApp and WhatsApp Business
package names are available. This installed-app check is not transmitted to the
developer.

## Network and Hosting

The browser version can be hosted as a static website. The hosting provider may
process ordinary technical request information, such as an IP address, browser
type, and request time, under its own policies. Click2Chat itself does not add
analytics or tracking.

Opening a chat creates a user-initiated connection to WhatsApp or `wa.me`.
Opening the phone dialler passes only the selected number to the phone app.
Apart from loading the static application and actions you initiate, Click2Chat
does not transmit call history, phone numbers, messages, clipboard text, or
preferences to a developer-operated service.

## Retention and Deletion

Recent call entries, typed numbers, pasted text, and draft messages are not
persisted by Click2Chat. They leave app memory when the relevant view or app
session ends.

To remove the saved country and theme preferences, clear Click2Chat storage in
Android system settings, uninstall the Android app, or clear the site's storage
in your browser. Android manages the device call log separately; clearing
Click2Chat data does not delete calls from the phone's system call history.

Because Click2Chat has no account or developer database, the developer does not
hold app records that can be deleted through an email request.

## Children's Privacy

Click2Chat is a general utility and is not directed to children. The developer
does not knowingly collect personal information from children through the app.

## Changes to This Policy

This policy may be updated when Click2Chat's features, permissions, or data
practices change. The dates above will be revised when an update is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com
