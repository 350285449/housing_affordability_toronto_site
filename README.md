# Housing Affordability in Toronto

Static interactive school project website for **Unaffordable Housing in Toronto**.

The site now presents the project as a compact data story instead of a text-heavy report. It includes:

- a first-screen metric summary
- concise research accordions
- interactive secondary-data charts
- an interactive survey explorer built from the attached 125-response survey export
- housing situation, response-theme, and correlation views
- policy proposals, limitations, and APA-style references

## Open Locally

Open `index.html` directly in a browser. Keep these files in the same root folder:

- `index.html`
- `styles.css`
- `script.js`
- `README.md`

No React, Vite, backend, API keys, or chart libraries are required.

## GitHub Pages Deployment

This repository is intended to publish from the `main` branch root folder.

1. Push the files to:

```text
https://github.com/350285449/housing_affordability_toronto_site
```

2. On GitHub, open the repository.
3. Go to **Settings -> Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose:
   - Branch: `main`
   - Folder: `/ (root)`
6. Save.

The live site should publish at:

```text
https://350285449.github.io/housing_affordability_toronto_site/
```

## Embed in Google Sites

Use the GitHub Pages URL, not the local `index.html` file.

1. Open your Google Sites page.
2. Choose **Insert -> Embed**.
3. Choose **By URL**.
4. Paste the GitHub Pages URL.
5. Insert the embed and resize it to fit the page.

## Technical Notes

- All charts are generated with local JavaScript in `script.js`.
- The survey explorer uses summarized data from the attached Google Forms export.
- The site uses relative paths only, so it works from a local file path and from GitHub Pages.
