export interface AppScreen {
  id: string;
  label: string;
  heading: string;
  text: string;
  screen: string;
  alt: string;
}

export const phoneScreens: AppScreen[] = [
  { id: 'recents', label: 'Find the right call', heading: 'Less searching. More connecting.', text: 'Search contacts and call history together. Filter recent calls, find a name or number, and keep the next action close.', screen: 'phone-recents', alt: 'No Call recent calls with search, filters and fictional callers' },
  { id: 'calling', label: 'Keep controls close', heading: 'A familiar voice. A personal face.', text: 'Mute, choose an audio route, open the keypad or end the call. Compatible calling portraits are optional; ordinary photos or initials remain a fallback.', screen: 'phone-calling', alt: 'No Call audio-call screen with a fictional portrait and call controls' },
  { id: 'appearance', label: 'Make it yours', heading: 'Your phone. Your preferences.', text: 'Choose an appearance and typefaces that feel right. Each app keeps its own preferences, so you can make changes without changing the whole suite.', screen: 'phone-appearance', alt: 'Current No Call appearance settings' },
  { id: 'accessibility', label: 'Find your comfort', heading: 'Room for different needs.', text: 'Adjust text size, interface scale, colour-vision options and motion. Real-device accessibility testing remains part of the alpha.', screen: 'phone-accessibility', alt: 'Current No Call accessibility settings for text size, scale, colour and motion' },
];

export const messageScreens: AppScreen[] = [
  { id: 'inbox', label: 'Find your people', heading: 'A clearer place for every conversation.', text: 'Search, filter unread messages, and organise chats with categories, favourites and pins. Your organisation stays local to the app.', screen: 'message-inbox', alt: 'No Message inbox with fictional contacts and conversations' },
  { id: 'conversation', label: 'Keep it personal', heading: 'Everyday words. Familiar faces.', text: 'Read, draft and reply in a focused conversation. Review your recipient, message and sending SIM before a carrier SMS is handed off.', screen: 'message-conversation', alt: 'No Message conversation with fictional Alex Morgan and demo message text' },
  { id: 'scheduled', label: 'Leave a thought for later', heading: 'Plan ahead. Keep the choice.', text: 'Review, edit or cancel pending SMS. Android and carrier conditions can delay sending; a message more than 15 minutes late is held for review.', screen: 'message-scheduled', alt: 'No Message scheduled SMS screen with a fictional pending message and timing limitations' },
  { id: 'settings', label: 'Find your setup', heading: 'Small settings. A personal fit.', text: 'Explore appearance, accessibility and messaging preferences. Optional message islands have their own settings and access requirements.', screen: 'message-messageSettings', alt: 'Current No Message settings screen' },
];

export const contactScreens: AppScreen[] = [
  { id: 'directory', label: 'Find a familiar name', heading: 'Your people, easy to find.', text: 'Search names and numbers in a phone-first directory. Account filters help you focus; contacts need a usable number to appear in everyday browsing.', screen: 'contact-directory', alt: 'No Contact directory with fictional names, numbers and account details' },
  { id: 'favourites', label: 'Keep favourites close', heading: 'The people you reach for most.', text: 'Give familiar people their own place. Favourites remain available independently of the current directory account filter.', screen: 'contact-favourites', alt: 'No Contact favourites with fictional contacts and generated portraits' },
  { id: 'details', label: 'Look beyond a number', heading: 'The essentials, together.', text: 'View contact details and open supported call, message and edit actions. Connected actions depend on what a compatible installed app exposes.', screen: 'contact-details', alt: 'No Contact details for fictional Alex Morgan with call, text and edit actions' },
  { id: 'edit', label: 'Give each photo a place', heading: 'Two portraits. One person.', text: 'Choose a regular contact photo and a separate, app-private calling portrait. Sharing a calling portrait with No Call is optional and requires compatible installations.', screen: 'contact-edit', alt: 'No Contact editor with fictional identity data and separate contact and calling photos' },
  { id: 'backup', label: 'Bring your contacts along', heading: 'Choose the right kind of backup.', text: 'Use VCF or CSV for supported contact transfer, or review the advanced archive. Settings backup is separate; formats preserve different data.', screen: 'contact-backup', alt: 'No Contact backup and transfer settings showing VCF, CSV and advanced archive choices' },
];
