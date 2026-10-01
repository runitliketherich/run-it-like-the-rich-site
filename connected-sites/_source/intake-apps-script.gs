/**
 * HQ Club intake → Google Sheet + email to Laura
 *
 * Setup (about 3 minutes):
 * 1. Open the "HQ Club Intake Responses" Google Sheet in your Drive.
 * 2. Extensions → Apps Script. Delete what's there, paste this whole file, Save.
 * 3. Deploy → New deployment → type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 *    Click Deploy and approve the permissions.
 * 4. Copy the Web app URL (ends in /exec) and send it to Claude, or paste it into
 *    CONFIG["intakeEndpoint"] in build.py and rebuild.
 */

const NOTIFY_EMAIL = 'support@thehq.online';

const COLUMNS = [
  'submittedAt', 'name', 'company', 'email', 'phone', 'reach',
  'industry', 'entities', 'locations', 'teamSize', 'yearsOperating', 'taxStructure',
  'futurePlans', 'sellingTimeline',
  'accountingSoftware', 'bookkeeper', 'booksStatus', 'qboAccess',
  'googleWorkspace', 'workspacePlan', 'googleTools',
  'sys_payroll', 'sys_scheduling', 'sys_fieldOps', 'sys_inventory', 'sys_estimates', 'sys_invoicing',
  'sys_crm', 'sys_pos', 'sys_banking', 'sys_hr', 'sys_storage', 'sys_other',
  'focusAreas', 'systemsWorkingWell', 'systemsToReplace', 'notes', 'agree'
];

function doPost(e) {
  const p = (e && e.parameter) || {};
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
  sheet.appendRow(COLUMNS.map(function (c) { return p[c] || ''; }));

  const lines = COLUMNS.filter(function (c) { return p[c]; })
                       .map(function (c) { return c + ': ' + p[c]; });
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: p.email || NOTIFY_EMAIL,
    subject: 'HQ Club intake – ' + (p.company || p.name || 'new submission'),
    body: lines.join('\n')
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
                       .setMimeType(ContentService.MimeType.JSON);
}
