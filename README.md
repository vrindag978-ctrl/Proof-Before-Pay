Proof Before Pay --- ScamShield AI
AI-Assisted Scam Prevention and Payment Safety
Proof Before Pay is a prototype designed to help users identify
warning signs in suspicious messages, links, online offers, and payment
requests before clicking links or sending money.
The project brings scam-awareness tools together in one interface. It
supports risk awareness and informed decisions; it does not
guarantee that a website, message, image, or transaction is safe.
Problem Statement
People encounter suspicious links, fake internship offers, fraudulent
discounts, impersonation attempts, misleading payment requests, and
other possible scams through social media and messaging platforms.
Users may not know how to assess these warning signs before acting. They
need a simple, accessible way to review suspicious content and make
informed decisions before trusting a source or sending money.
Proposed Solution
Proof Before Pay provides a central interface for reviewing suspicious
content, identifying potential warning signs, and guiding users towards
safer decisions before clicking links or making payments.
Target Users
- Students checking internship, training, or job offers
- Consumers evaluating online deals and discounts
- People receiving suspicious messages and links
- Users checking unexpected payment requests
- People who want guidance before trusting an unfamiliar website or
  online claim
Features
The prototype includes the following interfaces and tools. Their level
of implementation may vary; see Current Limitations below.
- Dashboard and Home page
- Image and poster scanning interface
- Suspicious link checker
- Scam message analysis
- SocialShield AI
- Before You Pay safety checklist
- Voice assistant interface
- Scan history and evidence-related features
Technical Approach
- Frontend: HTML, CSS, and JavaScript
- Source control: GitHub
- Website hosting: Netlify
- Backend/serverless functions: Netlify Functions
- Proposed web investigation: TinyFish API integration
- Configuration: Server-side environment variables for API
  credentials
High-Level Workflow
1. A user submits a suspicious link or other content through the
   interface.
2. The frontend performs the checks available in the current prototype.
3. For a configured live investigation, the frontend sends the URL to a
   backend function.
4. The backend function calls TinyFish securely using a server-side API
   key.
5. Findings are returned to the frontend and presented with appropriate
   caveats.
6. The user reviews the findings and independently verifies important
   information before paying.
The live TinyFish workflow must be tested end-to-end before it is
described as operational.
Implementation Details
Frontend
The interface is built with HTML, CSS, and JavaScript. It provides
navigation between the dashboard, home page, and scam-checking features.
Local Link Checks
The current link checker can use local rules to flag certain patterns or
warning signs. These checks are limited and do not establish whether a
website is legitimate or fraudulent. A warning is not proof of fraud,
and the absence of a warning is not proof of safety.
Netlify Hosting and Backend Function
The website is hosted on Netlify. A serverless function is present at:
netlify/functions/check-link.js
The function is designed to accept a POST request containing a URL and
send a website-inspection request to TinyFish using the server-side
environment variable TINYFISH_API_KEY.
The function responding to a request confirms that the endpoint is
deployed and responding; it does not by itself prove that TinyFish
successfully analysed the submitted website. End-to-end API success
still needs to be verified.
TinyFish Integration
TinyFish is intended to automate website inspection and gather
information relevant to scam-risk assessment.
Proposed workflow:
1. The user submits a suspicious URL.
2. The frontend sends the URL to the Netlify function.
3. The function reads TINYFISH_API_KEY from Netlify's environment
   variables.
4. The function calls the TinyFish API.
5. The response is returned to the application for display.
The integration must follow the current official TinyFish API
documentation. Keep API keys private and store them as server-side
environment variables; never place a secret API key in frontend
JavaScript or commit it to the repository.
Setup Instructions
Option 1: View the Live Website
Open the deployed prototype:
https://proof-before-pay-vrinda.netlify.app/
Features that rely on external APIs or backend configuration may require
those services to be correctly configured and tested.
Option 2: Run the Frontend Locally
1. Download the repository as a ZIP file from GitHub, or clone it:
   git clone https://github.com/vrindag978-ctrl/Proof-Before-Pay.git
2. Open the downloaded or cloned project folder.
3. Locate index.html.
4. Open index.html in a modern web browser.
Opening the HTML file directly is suitable for frontend features that do
not require a server. Features that call Netlify Functions or external
APIs may not work correctly from a local file.
Option 3: Deploy with Netlify
1. Sign in to Netlify.
2. Import the GitHub repository:
   https://github.com/vrindag978-ctrl/Proof-Before-Pay
3. Select the main branch.
4. For a static HTML site, use the repository root as the publish
   directory and leave the build command blank unless the project
   configuration requires otherwise.
5. Configure the Netlify Functions directory as netlify/functions.
6. Add the environment variable TINYFISH_API_KEY in Netlify's
   environment-variable settings, using a valid TinyFish API key. Keep
   the value secret.
7. Deploy the site and review the deployment result.
8. Test the website and backend function. Confirm a successful TinyFish
   response before claiming live investigation is operational.
Security note: Do not paste API keys into this README, public source
files, screenshots, or public GitHub commits.
Current Limitations
- Image OCR is not yet connected.
- Local URL checks do not guarantee website safety.
- Voice features depend on browser support and permissions.
- Automated findings can be incomplete or incorrect and should not be
  treated as definitive proof of fraud.
Future Scope
- Complete and verify the TinyFish integration
- Add automatic image text extraction (OCR)
- Improve website investigation and evidence presentation
- Enhance Hindi and English voice assistance
- Develop privacy-conscious scam reporting
- Improve accessibility and user guidance
Safety
- Never enter passwords, OTPs, full payment-card details, or
  confidential banking information into the prototype.
- Independently verify unexpected payment requests using a trusted,
  separate channel.
- Treat risk results as guidance, not a guarantee.
- Do not assume that a website is safe merely because no warning signs
  are detected.
Hackathon
AZINHACK 2026
Links
- GitHub repository:
  https://github.com/vrindag978-ctrl/Proof-Before-Pay
- Live prototype: https://proof-before-pay-vrinda.netlify.app/
