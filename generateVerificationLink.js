const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function generateVerificationLink(email) {
  const actionCodeSettings = {
    url: 'https://mail-verification-app.vercel.app/verified.html',
    handleCodeInApp: true,
  };

  return await admin.auth().generateEmailVerificationLink(email, actionCodeSettings);
}

module.exports = { generateVerificationLink };
