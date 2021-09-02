import admin from "firebase-admin";

export default function Contact() {
    admin.firestore().collection('mail').add({
    to: 'ccook@fireflyagency.com',
    message: {
      subject: 'Hello from Firebase!',
      html: 'This is an <code>HTML</code> email body.',
    },
  })
} 