export const site = {
  name: 'Soorosh',
  handle: 'soorosh-st',
  github: 'https://github.com/soorosh-st',
  repository: 'https://github.com/soorosh-st/no-apps',
  repositoryLabel: 'no-apps on GitHub (private)',
  releases: '/notes/setup/#build-status',
  issues: '/notes/testing/#share-feedback',
  guides: {
    setup: '/notes/setup/',
    features: '/notes/features/',
    privacy: '/notes/privacy/',
    testing: '/notes/testing/',
  },
  status: 'Public alpha',
  requirement: 'Android 13+',
};

export const guides = [
  { title: 'Installation & setup', description: 'Builds, roles and getting started.', href: site.guides.setup },
  { title: 'Features & limitations', description: 'What each app can do today.', href: site.guides.features },
  { title: 'Privacy & permissions', description: 'Your data, and what access is needed.', href: site.guides.privacy },
  { title: 'Testing & feedback', description: 'Help make the next version better.', href: site.guides.testing },
];

export const updates = [
  {
    app: 'No Message',
    title: 'A little more organised.',
    text: 'Tags, pinned items and checklist notes bring more order to Saved Messages. Choose the folder you want to open first, and keep reminders attached to the original message.',
    href: '/work/no-message/',
  },
  {
    app: 'No Call',
    title: 'Pick up where you left off.',
    text: 'Keep a note, organise reminders into categories and give a callback its own place. Reminders leave the decision to call with you.',
    href: '/work/no-call/',
  },
  {
    app: 'Across the suite',
    title: 'A quieter way to save power.',
    text: 'Each app has its own Power Saving settings. Choose a battery threshold, follow Android Battery Saver, and temporarily reduce supported visual effects.',
    href: '/notes/features/#power-saving',
  },
];
