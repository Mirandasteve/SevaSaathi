# 🌿 SevaSaathi
### A Trusted Digital Companion for Elderly Citizens to Access Government Services

SevaSaathi is a web-based guidance platform designed to help elderly citizens understand and safely access government services in their native language, with a **Kannada-first** and **elder-friendly** experience.

> ⚠️ SevaSaathi never fills forms or submits applications.  
> It only provides guidance and safety awareness.

---

## 📌 Problem Statement

Elderly citizens face multiple challenges while accessing government services:
- English-heavy government portals
- Complex and confusing digital forms
- Difficult-to-understand government notices
- Frequent policy changes
- Rising government-related scams

These challenges increase dependency, confusion, and risk of fraud.

---

## 💡 Solution – SevaSaathi

SevaSaathi acts as a **trusted digital guide** that:
- Explains government schemes in simple language
- Guides elders on how to fill forms correctly
- Simplifies government notices
- Alerts users about scams
- Helps locate nearby trusted government help centers

The platform focuses on **guidance, trust, and safety**, while the final action is always taken on **official government portals or physical help centers**.

---

## 🎯 Key Features

### 🏛️ Government Schemes Guide
- Simple explanation of schemes
- Eligibility criteria
- Benefits and required documents

### 📝 Form Filling Guidance
- Field-by-field explanation
- Common mistakes to avoid
- Safety instructions

### 📄 Notice Explainer
- Upload or paste government notices
- AI explains meaning, affected users, and required action

### 🎙️ Voice Assistance
- Native language voice guidance
- Helpful for elders with reading difficulty

### 🔔 Updates & Scam Alerts
- Verified government updates
- Awareness about ongoing scams

### 📍 Help Center Locator
- Locate nearby trusted government help centers using maps

### 🔐 Optional Login
- Login only for receiving alerts and updates
- No mandatory account creation

---

## 🌐 Language Support

- Kannada (default)
- English
- Scalable to other Indian languages

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | EXPRESS JS |
| AI | Google Gemini API |
| Authentication | Firebase (Optional) |
| Maps | Google Maps API |
| Hosting | Google Cloud Platform |

---

## 🧠 How It Works

1. User selects preferred language on first visit
2. Home page displays clear feature cards
3. User chooses a service (scheme, form, or notice)
4. Google Gemini explains content in native language
5. Safety warnings are shown at every step
6. User completes the process on official portals or help centers

---

## 🧩 Project Structure

```bash
SevaSaathi/
│
├── index.html          # Home Page
├── schemes.html        # Government Schemes Guide
├── forms.html          # Form Guidance Page
├── notice.html         # Notice Explainer Page
├── alerts.html         # Updates & Scam Alerts
├── map.html            # Help Center Locator
├── login.html          # Optional Login Page
│
├── css/
│   └── style.css
│
├── js/
│   ├── language.js
│   ├── gemini.js
│   ├── voice.js
│   └── map.js
│
└── README.md
