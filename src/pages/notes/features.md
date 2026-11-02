---
layout: ../../layouts/Guide.astro
title: Features & limitations
description: What the apps can do, what has changed, and where the alpha still has limits.
updated: '2026-11-02'
---

## No Contact

Browse a phone-first directory and favourites, edit supported contact details, organise provider groups and local packs, and review possible duplicates. Account and provider permissions decide which changes are available.

A calling portrait is separate from the ordinary contact photo. Compatible No Call installations can use it for supported audio calls. Without a compatible portrait, No Call falls back to a contact photo or initials.

## No Message

Read and compose carrier SMS, organise conversations, choose sending SIM preferences and schedule a message for later. Eligible notification actions and optional islands keep supported replies and code-copy actions nearby.

**Recently added in development:** Saved tags, pins, checklist notes and a preferred opening folder; local reminders attached to an original message; SMS encoding explanations; and offline inspection of a link's destination. A reminder does not send a message. Link inspection does not load the page, follow redirects or certify that a destination is safe.

### Scheduling

Schedules can be set up to **30 days ahead**. Android power limits, force-stop, first unlock after reboot, permissions and carrier conditions affect timing. A schedule more than 15 minutes late goes to Needs review. Neither scheduling nor a successful Android handoff guarantees delivery.

The optional 5–30 second send delay only provides a cancel window before carrier handoff. It cannot recall a submitted SMS. Outgoing text reactions are ordinary SMS and may incur carrier charges.

### Trash

Trash is a local classification over Android's message-provider originals. Another SMS app can still show those originals. Permanent deletion or expiry can remove them; clearing app data loses the local classification. Saved text copies can outlive their originals.

### Messaging limits

MMS remains unfinished. Ordinary composition does not expose MMS; live receiving, outgoing attachments and delivery/read reports are not a completed service. Internal experiments do not establish device or carrier compatibility. RCS and encrypted internet chat are not implemented.

## No Call

Search contacts and call history, use supported incoming and ongoing audio-call controls, choose SIM preferences and personalise the interface. Floating call islands are optional and do not require the other suite apps.

**Recently added in development:** Notes, categorised reminders and callback organisation. A reminder leaves the action to you; it does not automatically place a call.

The promotional film contains a simulated video-call interface. An internal carrier-video experiment does not establish live compatibility. No Call is not an internet video-calling service.

## Power Saving

Each app now has its own Power Saving controls. Select Never, Always or a battery threshold, and independently choose whether to follow Android Battery Saver. The active indicator opens that app's settings.

Power Saving temporarily reduces supported presentation effects while keeping saved appearance choices. It does not promise a measured battery-life improvement or change the carrier's delivery behaviour.

## License

The project uses a custom personal, non-commercial license. Commercial or business use needs separate written permission. Third-party components keep their own licences. Public source and release links will be added when available.

For requirements, see [installation and setup](/notes/setup/). For a useful test report, see [testing and feedback](/notes/testing/).
