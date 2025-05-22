require('dotenv').config();
const Mailjet = require('node-mailjet');

const MJ_API_KEY = 'da2e16131dbd95581af343ca2e6a7563';
const MJ_SECRET_KEY = '0fb8e6e2f9c035b1b1fa8e5cf3c1bb8b';

const mailjet = Mailjet.apiConnect(MJ_API_KEY, MJ_SECRET_KEY);

async function sendEmail(toEmail, link) {
  try {
    const request = await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'mhmadrhmonoi@gmail.com',
              Name: 'Doğrulama',
            },
            To: [
              {
                Email: toEmail,
              },
            ],
            Subject: 'Email Doğrulama Linki',
            HTMLPart: `<p>Doğrulama linkiniz: <a href="${link}">Buraya tıklayın</a></p>`,
          },
        ],
      });
    console.log('Mail gönderildi:', request.body);
    return request;
  } catch (err) {
    console.error('Mail gönderme hatası:', err);
    throw err;
  }
}

module.exports = { sendEmail };
