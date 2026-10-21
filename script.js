
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      menuToggle.textContent = '☰';
    });
  });
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const trialForm = document.getElementById('trialForm');

if (trialForm) {
  trialForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(trialForm);
    const parentName = data.get('parentName') || '';
    const email = data.get('email') || '';
    const country = data.get('country') || '';
    const age = data.get('age') || '';
    const level = data.get('level') || '';

    // Add these fields to index.html if you want parents to fill them in.
    const preferredDay = data.get('preferredDay') || 'Not specified';
    const preferredTime = data.get('preferredTime') || 'Not specified';
    const goals = data.get('goals') || 'Not specified';

    const tutorEmail = 'bagoht@gmail.com';

    const subject = encodeURIComponent(
      'Free Hindi trial class request from ' + parentName
    );

    const body = encodeURIComponent(
      'Hello Kishan,\n\n' +
      'I would like to request a FREE introductory Hindi trial lesson for my child via Google Meet. Please confirm the appointment by email and send the meeting link.\n\n' +
      'Parent/guardian: ' + parentName + '\n' +
      'Email: ' + email + '\n' +
      'Country/time zone: ' + country + '\n' +
      'Child age: ' + age + '\n' +
      'Current Hindi level: ' + level + '\n' +
      'Preferred day: ' + preferredDay + '\n' +
      'Preferred time / time zone: ' + preferredTime + '\n' +
      'Learning goals: ' + goals + '\n\n' +
      'Thank you.'
    );

    window.location.href =
      `mailto:${tutorEmail}?subject=${subject}&body=${body}`;
  });
}

// Copy the UPI ID for convenient payment.
const copyUpiButton = document.getElementById('copyUpiButton');

if (copyUpiButton) {
  copyUpiButton.addEventListener('click', async () => {
    const upiId = 'baghot@okaxis';
    const message = document.getElementById('paymentMessage');

    try {
      await navigator.clipboard.writeText(upiId);
      if (message) {
        message.textContent =
          'UPI ID copied. Please verify the recipient before paying.';
      }
    } catch (error) {
      if (message) {
        message.textContent =
          'UPI ID: ' + upiId + ' — you can select and copy it manually.';
      }
    }
  });
}
