import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ===== Firebase Config ===== */
const firebaseConfig = {
  apiKey: "AIzaSyA50b7_sCWGCc91E5V49CDRQGkl1S40ds4",
  authDomain: "sevasaathi-96010.firebaseapp.com",
  projectId: "sevasaathi-96010",
  appId: "1:695605361402:web:7efc728f6c32d16d166743"
};

/* ===== Init ===== */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

/* ===== ELEMENTS ===== */
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const googleBtn = document.getElementById("googleBtn");
const errorText = document.getElementById("error");

/* ===== CORE POST-LOGIN LOGIC ===== */
async function handleUserRedirect(user) {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  // 🆕 First-time user
  if (!snap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      name: user.displayName || "User",
      createdAt: serverTimestamp(),
      smsAlertsEnabled: false
    });

    window.location.href = "./phone/phone.html";
    return;
  }

  // 👤 Existing user
  const data = snap.data();

  if (data.phoneNumber) {
    window.location.href = "../scam-page/index.html";
  } else {
    window.location.href = "../login-page/phone/phone.html";
  }
}

/* ===== GOOGLE LOGIN ===== */
googleBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    await handleUserRedirect(result.user);
  } catch (err) {
    errorText.innerText = err.message;
  }
});

/* ===== EMAIL LOGIN ===== */
loginBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      emailInput.value,
      passwordInput.value
    );
    await handleUserRedirect(result.user);
  } catch (err) {
    errorText.innerText = err.message;
  }
});

/* ===== CREATE ACCOUNT ===== */
signupBtn.addEventListener("click", async () => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      emailInput.value,
      passwordInput.value
    );
    await handleUserRedirect(result.user);
  } catch (err) {
    errorText.innerText = err.message;
  }
});


const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
  window.history.back();
});
