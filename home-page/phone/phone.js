import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  updateDoc
} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* Firebase config */
const firebaseConfig = {
  apiKey: "AIzaSyA50b7_sCWGCc91E5V49CDRQGkl1S40ds4",
  authDomain: "sevasaathi-96010.firebaseapp.com",
  projectId: "sevasaathi-96010",
  appId: "1:695605361402:web:7efc728f6c32d16d166743"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("savePhoneBtn").onclick = async () => {
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("msg");

  if (phone.length < 10) {
    msg.innerText = "Please enter a valid phone number";
    return;
  }

  const user = auth.currentUser;
  if (!user) return;

  await updateDoc(doc(db, "users", user.uid), {
    phoneNumber: phone,
    smsAlertsEnabled: true
  });

    window.location.href = "../../scam-page/index.html";
};
