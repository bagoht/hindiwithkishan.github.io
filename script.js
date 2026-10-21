const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
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

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('trialForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const parentName = data.get('parentName');
  const email = data.get('email');
  const country = data.get('country');
  const age = data.get('age');
  const level = data.get('level');
  const preferredDay = data.get('preferredDay');
  const preferredTime = data.get('preferredTime');
  const goals = data.get('goals') || 'Not specified';

  // Booking requests are prepared for your teaching email.
  const tutorEmail = 'bagoht@gmail.com';

  const subject = encodeURIComponent('Free Hindi trial class request from ' + parentName);
  const body = encodeURIComponent(
    'Hello Kishan,\n\nI would like to request a FREE introductory Hindi trial lesson for my child via Google Meet. Please confirm the appointment by email and send the meeting link.\n\n' +
    'Parent/guardian: ' + parentName + '\n' +
    'Email: ' + email + '\n' +
    'Country/time zone: ' + country + '\n' +
    'Child age: ' + age + '\n' +
    'Current Hindi level: ' + level + '\n' +
    'Preferred day: ' + preferredDay + '\n' +
    'Preferred time / time zone: ' + preferredTime + '\n' +
    'Learning goals: ' + goals + '\n\nThank you.'
  );
  window.location.href = `mailto:${tutorEmail}?subject=${subject}&body=${body}`;
});


// Copy the UPI ID for convenient payment.
const copyUpiButton = document.getElementById('copyUpiButton');
if (copyUpiButton) {
  copyUpiButton.addEventListener('click', async () => {
    const upiId = 'baghot@okaxis';
    const message = document.getElementById('paymentMessage');
    try {
      await navigator.clipboard.writeText(upiId);
      message.textContent = 'UPI ID copied. Please verify the recipient before paying.';
    } catch (error) {
      message.textContent = 'UPI ID: ' + upiId + ' — you can select and copy it manually.';
    }
  });
}
