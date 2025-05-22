const { generateVerificationLink } = require('./generateVerificationLink');
const { sendEmail } = require('./sendEmail');

(async () => {
  try {
    const email = 'mhmadrhmono2018@gmail.com';
    const link = await generateVerificationLink(email);
    await sendEmail(email, link);
    console.log('Doğrulama maili gönderildi.');
  } catch (err) {
    console.error('Hata:', err);
  }
})();
