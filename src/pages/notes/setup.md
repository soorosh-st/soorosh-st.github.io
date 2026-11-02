---
layout: ../../layouts/Guide.astro
title: Installation & setup
description: A few things to know before making the suite part of your everyday.
updated: '2026-11-03'
---

## Build status

The apps are in alpha, working toward 1.0. No public download or Google Play listing is linked here yet. The project lives in [no-apps on GitHub](https://github.com/soorosh-st/no-apps), currently private while development continues. You need repository access to open it. A development build is not a production release.

You need **Android 13 or later**. No Contact, No Message and No Call each work independently. Install the ones you want to use.

Phone and SMS capabilities also depend on the build. Current internal testing variants enable the relevant default-app roles; debug, benchmark and release configurations currently disable them. Granting extra permissions cannot enable a role disabled in a build. Always check the notes supplied with your actual APK.

## No Contact

Grant Contacts access to browse your address book. The everyday directory is phone-first, so a contact needs a usable number to appear. Check the account filter when someone seems to be missing.

Editing and importing need write access and a writable account. SIM and read-only sources have limits. Account sync uses Android's existing providers; requesting a sync does not prove cloud completion.

## No Message

Use a role-enabled build and select No Message as Android's default SMS app. Review the required messaging permissions, notifications and sending SIM. Contacts access is optional for names and photos.

Review the recipient, message and SIM before sending. SMS uses your carrier and may cost money. Android accepting a send is not a delivery confirmation. Ordinary MMS, RCS and encrypted internet chat are not available services in this alpha.

## No Call

Use a role-enabled build and select No Call as Android's default Phone app. Review the phone, notification and full-screen call settings. Contacts and call-log access support names, search and history.

Choose the calling account or SIM deliberately. Hold, merge, participants and audio routes depend on the capabilities Android and your carrier report. Optional call islands need overlay access outside the app; dismissing an island does not end a call.

## Back up and restore

No Contact offers VCF, CSV and its own advanced archive. They preserve different fields. VCF embedded-photo import is not supported; CSV is not a lossless archive. Settings have a separate export.

No Message supports selected SMS backup paths and a native archive for supported saved content. Saved copies and local organisation are separate from Android's provider originals.

Review the selected format and the import result before deleting originals or changing apps. Most portable exports are unencrypted, so choose their destination carefully.

Read [features and limitations](/notes/features/) and [privacy and permissions](/notes/privacy/) for more detail.
