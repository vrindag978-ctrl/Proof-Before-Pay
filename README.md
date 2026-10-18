
# Proof Before Pay — ScamShield AI

## AI-Assisted Scam Prevention and Payment Safety

Proof Before Pay is a prototype designed to help users identify warning
signs in suspicious messages, links, online offers, and payment requests.

## Problem Statement

People encounter suspicious links, fake internship offers, fraudulent
discounts, impersonation attempts, and misleading payment requests
through social media and messaging platforms.

## Proposed Solution

Proof Before Pay provides a central interface for reviewing suspicious
content, identifying potential warning signs, and guiding users towards
safer decisions before clicking links or sending money.

## Target Users

- Students checking internship and training offers
- Consumers evaluating online deals
- People receiving suspicious messages and links
- Users checking payment requests

## Features

- Dashboard and Home page
- Image and poster scanning interface
- Suspicious link checker
- Scam message analysis
- SocialShield AI
- Before You Pay safety checklist
- Voice assistant interface
- Scan history and evidence-related features

## Proposed TinyFish Integration

TinyFish is intended to help investigate suspicious websites, organisations,
and online claims.

Planned workflow:

1. The user submits a suspicious URL or claim.
2. The application sends the request to a backend.
3. The backend calls the TinyFish API securely.
4. Investigation findings are returned to the application.
5. The application displays findings and recommended verification steps.

The integration must follow the current official TinyFish API documentation.

## Technical Approach

- Frontend: HTML, CSS and JavaScript
- Repository: GitHub
- Website hosting: Netlify
- Web investigation: TinyFish API integration
- Backend: Required for secure API requests

## Current Limitations

- Image OCR is not yet connected.
- Local URL checks do not guarantee website safety.
- Live investigation requires a working API integration.
- Voice features depend on browser support.

## Future Scope

- Complete TinyFish integration
- Automatic image text extraction
- Improved website investigation
- Enhanced Hindi and English voice assistance
- Privacy-conscious scam reporting

## Safety

Never enter passwords, OTPs, or confidential banking information into
the prototype. Always independently verify suspicious payment requests.

## Hackathon

AZINHACK 2026
