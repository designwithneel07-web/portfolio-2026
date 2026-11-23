# Portfolio inspiration references

Saved for future portfolio design work. Focus area: contact sections, direct contact options, and preserving visual character while keeping contact actions clear.

Research checked: 22 November 2026.

## Discovery source

### Wall of Portfolios
- URL: https://www.wallofportfolios.in/
- A curated portfolio directory with categories including Minimalist, Dark Themed, Interactive, Creative, and Modern Layout portfolios.
- Use it as a discovery index for future research. Its public homepage is a directory, not a single portfolio contact-section example.
- For this project: retain our dark visual language and look for clarity, restrained interaction, and strong craft rather than copying a specific palette or aesthetic.

## Reviewed portfolio examples

### Vlad Filon — UX Designer
- URL: https://www.vladfilon.com/
- Contact pattern: prominent “Let’s make something balanced” CTA; direct email and LinkedIn; a two-step project enquiry form; WhatsApp QR code and direct message button; privacy explanation.
- Useful ideas: make the first step approachable, separate contact details from project details, pair QR with a tap-friendly action, and tell people what happens after submit.
- Our adaptation: WhatsApp is currently omitted. The owner has reserved a username but does not yet have a username-based contact link; revisit only when that link is available. Do not use a phone-number QR.
- Avoid copying unrelated links or the reference’s green button treatment.

### Oz Gultekin — Product Experience Designer
- URL: https://ozgur.design/
- Contact pattern: editorial contact section with Name, Email, Company, Reason, and Message fields, a clear send action, and social links.
- Useful ideas: visible labels, clear field hierarchy, and an obvious form action.
- Our adaptation: use a direct email link for now; no form fields until a delivery service is configured.

### Adam Borthwick — Digital Product Designer
- URL: https://adamborthwick.com/
- Contact pattern: concise “Let’s Connect” area with direct professional social and email options.
- Useful ideas: direct links can be scanned quickly and remain available without a form.

### Lucy Smith — Product Designer
- URL: https://lucyasdesign.com/
- Contact pattern: a compact “Contact” document with prominent email and clearly named professional profile links.
- Useful ideas: explicit text labels alongside links are easy to understand and accessible; contact information can stay concise.

## Project-specific findings and guardrails

- The homepage renders the footer as its final contact area. The floating navigation’s “Let’s Talk” CTA links to #contact; preserve its placement and destination.
- The footer's email link now opens a message to the owner-confirmed inbox.
- The footer currently links LinkedIn and Behance. Keep Instagram out of the plan. The public phone number is omitted, and WhatsApp is deferred until a username-based link is available.
- An alternate ContactSection component exists but is unused by the homepage and contains placeholder links. Avoid wiring it in without consolidating the single #contact anchor.
- The contact experience currently uses a direct email link; no submission form is presented as functional.
- Do not publish the owner's phone number or generate a phone-based WhatsApp QR. Revisit WhatsApp only after a username-based link is available.
- Resend was deferred because the owner does not have a sending domain and wants to avoid domain costs. Revisit only if the owner later chooses to acquire a domain and configure sender verification.
- Preserve the current dark, atmospheric style, typography, and cyan/fuchsia accents. Do not copy another portfolio’s branding.
- Keep this note as research, not a mandate to copy examples. Recheck links and current site patterns before future implementation because portfolio sites may change.

## Verification checklist for a future implementation

- [ ] “Let’s Talk” remains in the current floating navigation position and lands at the one #contact target.
- [ ] Email display and mailto destination match.
- [ ] LinkedIn uses the owner-confirmed profile.
- [ ] Keep phone and WhatsApp omitted unless the owner later supplies a privacy-safe username link.
- [ ] If a form is added later, verify its delivery behavior before presenting it as functional.
- [ ] Desktop and mobile layouts retain the existing brand and remain keyboard-accessible.
- [ ] No unrequested social links or extra form fields were added.
