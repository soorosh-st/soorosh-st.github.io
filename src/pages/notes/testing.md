---
layout: ../../layouts/Guide.astro
title: Testing & feedback
description: Small, specific observations help make the next version better.
updated: '2026-11-02'
---

## Help test the alpha

Use a build supplied through a trusted, documented channel. Check its version, enabled roles and known limits first. [Installation and setup](/notes/setup/) explains the current build differences.

Useful areas to try include contact browsing and editing, message drafts and Saved organisation, call-history search, reminders, your SIM choices, larger text and Power Saving controls. Compare the behaviour before and after a setting change.

Use disposable sample data for import, restore and deletion tests, and retain a backup of anything important. Keep Android's emergency calling path available; emergency numbers are not alpha-test targets.

## Share feedback

Include these details in a report:

- App name and exact build from Settings → About.
- Device and Android version.
- Short steps to reproduce the behaviour.
- What you expected and what actually happened.
- Relevant role, permission or SIM settings.
- A screenshot with private information removed, when it helps.

A public issue tracker is not linked yet. If you are testing by invitation, use the contact route supplied with your build. You can also [follow Soorosh on GitHub](https://github.com/soorosh-st) for future project and release links.

## Common checks

**Cannot choose a default app?** Check the build. A configuration with its default Phone or SMS role disabled cannot be fixed by granting more permissions.

**A contact is missing?** Check Contacts permission, the selected account filter and whether the contact has a usable phone number.

**A message's status is uncertain?** Check the selected SIM and service, then inspect history before retrying. An uncertain carrier handoff may already have sent the message.

**A reminder arrived late?** Check notifications, Android background limits, force-stop and the first unlock after reboot. A reminder is not a promise of exact timing.

## What still needs testing

Source checks and a successful build do not establish real-device, manufacturer, carrier or screen-reader compatibility. Features can behave differently with Android versions, account providers, larger text, right-to-left languages and assistive technology.

The website's screenshots and films are demonstrations with fictional content. Newer app builds can differ from the pictured version.
