# Proof Before Pay — ScamShield AI

## AI-Assisted Scam Prevention and Payment Safety

**Proof Before Pay** is an AI-assisted scam-awareness platform that helps users review suspicious messages, links, online offers, and payment requests. It brings multiple safety tools together in one interface to help users make more informed decisions before clicking links or sending money.

---

## Problem Statement

People encounter suspicious links, fake internship offers, fraudulent discounts, impersonation attempts, and misleading payment requests through social media and messaging platforms. It can be difficult to assess warning signs quickly before taking action.

Proof Before Pay brings scam-awareness tools together in one place so users can review suspicious content and take sensible verification steps.

---

## Proposed Solution

Proof Before Pay provides a central interface for reviewing suspicious content, identifying potential warning signs, and guiding users towards safer decisions before clicking links or making payments.

The platform brings together tools for checking links and messages, reviewing images, considering payment requests, and accessing safety guidance.

---

## Target Users

- Students checking internship, training, scholarship, or job offers
- Consumers evaluating online deals and discounts
- People receiving suspicious messages and links
- Online shoppers checking unfamiliar websites before making payments
- Users seeking guidance before trusting a source or sending money

---

## Features

- Dashboard and Home page
- Image and poster scanning
- Suspicious link checker
- Scam message analysis
- SocialShield AI
- Before You Pay safety checklist
- Voice assistant
- Scan history and evidence-related tools

---

## Role of AI and Automation

AI-assisted analysis and browser automation help organise information and identify possible warning signs. The platform presents findings to support user awareness and safer decision-making.

Automated findings should be considered alongside other evidence and independent verification.

---

## TinyFish Integration

Proof Before Pay integrates TinyFish to support the investigation of suspicious websites and online claims.

### Workflow

1. The user submits a website URL for review.
2. The application sends the request to a backend function.
3. The backend securely calls the TinyFish API using a server-side API key.
4. The investigation response is returned to the application.
5. The application presents the available findings to the user.

The API key is stored in Netlify environment variables and is not placed in public frontend code.

---

## Technical Approach

- **Frontend:** HTML, CSS, and JavaScript
- **Version Control:** GitHub
- **Hosting:** Netlify
- **Backend Function:** Netlify Function at `netlify/functions/check-link.js`
- **Website Investigation:** TinyFish API
- **Secret Management:** Netlify environment variable named `TINYFISH_API_KEY`

### High-Level Workflow

**User Input → Input Processing → Website Investigation and Analysis → Findings and Safety Guidance**

---

## Implementation Details

### 1. Frontend

The frontend is built with HTML, CSS, and JavaScript. It provides the user interface for navigating the dashboard and using the scam-awareness tools.

### 2. Backend

A Netlify Function at `netlify/functions/check-link.js` receives the submitted website URL and makes a server-side request to the TinyFish API.

### 3. TinyFish API

The backend sends the URL for investigation and returns the API response to the application so the user can review the findings.

### 4. Environment Configuration

The backend reads the API key from the `TINYFISH_API_KEY` environment variable in Netlify. This keeps the key out of public frontend code and the GitHub repository.

### 5. Results and User Guidance

The interface presents available analysis and safety guidance to help users review possible warning signs and decide what to verify next.

---

## Setup Instructions

### Run the Project Locally

1. Clone or download the GitHub repository.
2. Open the project folder.
3. Open `index.html` in a modern web browser.

Backend and API-powered functionality is available through the configured deployment.

### Deploy with Netlify

1. Import the GitHub repository into Netlify.
2. Select the `main` branch.
3. Leave the build command blank if no build step is required.
4. Set the publish directory to the repository root (`.`).
5. Set the Netlify Functions directory to `netlify/functions`.
6. Add `TINYFISH_API_KEY` in Netlify's environment-variable settings. Keep its value private.
7. Deploy the site and use the application to check a website URL.

---

## Future Scope

- Continue improving website investigation and evidence presentation
- Enhance image text extraction using OCR
- Expand Hindi and English voice assistance
- Improve scan history and reporting tools
- Add privacy-conscious ways to report suspicious activity
- Evaluate the system with a wider range of scam and legitimate examples

---

## Safety and Privacy

- Never enter passwords, OTPs, PINs, or confidential banking information into the prototype.
- Independently verify payment requests using a trusted contact method.
- Consider automated findings alongside other evidence.
- Keep API keys and other secrets out of frontend code and public repositories.

---

## Hackathon

**Event:** AZINHACK 2026

---

*Proof Before Pay is designed to support scam awareness and safer online decision-making.*
