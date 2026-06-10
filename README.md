# Toronto Housing Affordability Call for Action

Static media product for Part F of the Agent of Change project. The site uses math to argue that Toronto housing affordability and homelessness are social justice issues.

The page includes:

- a clear issue summary and research question
- one-variable statistics from the HCI survey: 69 responses, 51 parents, 18 students
- two-variable correlation statistics from Part E
- a probability experiment comparing expected versus reported Indigenous representation in homelessness data
- city and housing-cost evidence from reliable sources
- a housing-cost-burden calculator using the 30% affordability benchmark
- limitations, an opposition view, and a direct call for action

## Open Locally

Open `index.html` directly in a browser. Keep these files in the same root folder:

- `index.html`
- `styles.css`
- `script.js`
- `README.md`

No React, Vite, backend, API keys, or chart libraries are required.

## GitHub Pages Deployment

This repository can publish from the `main` branch root folder.

1. Push the files to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose:
   - Branch: `main`
   - Folder: `/ (root)`
6. Save.

## Embed in Google Sites

Use the GitHub Pages URL, not the local `index.html` file.

1. Open your Google Sites page.
2. Choose **Insert -> Embed**.
3. Choose **By URL**.
4. Paste the GitHub Pages URL.
5. Insert the embed and resize it to fit the page.

## Technical Notes

- All charts and interactive elements are generated with local JavaScript in `script.js`.
- The survey statistics come from Vladyslav's Part E analysis.
- The site uses relative paths only, so it works from a local file path and from GitHub Pages.
