/**
 * Virtual HQ™ Configuration
 * Executive Internal Business Command Center by TheHQ.online
 */

// Replace this URL with your deployed Google Apps Script Web App URL
// (e.g., "https://script.google.com/macros/s/AKfycbx.../exec")
// When empty or not deployed, the form operates in graceful preview mode with direct mailto fallback.
export const GOOGLE_APPS_SCRIPT_ENDPOINT: string = '';

export const BRAND_CONFIG = {
  name: 'Virtual HQ™',
  provider: 'TheHQ.online',
  email: 'support@thehq.online',
  tagline: 'ONE PLACE TO SEE YOUR BUSINESS. AND KEEP IT MOVING.',
  positioning: 'Owner-controlled • Customized to your business • Built around the way you actually operate',
  launchPrice: 4750,
  depositPrice: 250,
};

// Easy-to-change Launch Build Slots
export const LAUNCH_SLOTS_CONFIG = {
  totalSlots: 8,
  claimedSlots: 4,
  get remainingSlots() {
    return Math.max(0, this.totalSlots - this.claimedSlots);
  },
  batchLabel: 'Active Expansion Cohort',
};
