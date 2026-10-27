# Customer Self Service v1.3 — Reference-Faithful Safe Test

This frontend is rebuilt from user-supplied screenshots and captured DOM structure.

## What changed
- Legacy E-Support geometry aligned more closely with the captured page structure.
- SELECT ID page now mirrors the original three choices: GAME ID / FACEBOOK / PLAYPARK, but all authentication paths remain test-only.
- SELECT FLOW wording and layout aligned to the captured source.
- Legacy game login dimensions tightened to the screenshot reference.
- Modern account login uses Inter-style spacing and card proportions similar to the captured auth gateway.
- Persistent TEST ENVIRONMENT markings remain.
- No real third-party credentials are accepted or transmitted.
- Ticket creation and tracking continue to use the separate Apps Script / Google Sheet backend.

## Deployment
Upload the frontend files to the test server or GitHub Pages and set DATA_URL in config.js to your Apps Script /exec URL.
