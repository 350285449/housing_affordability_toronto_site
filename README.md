# Housing Affordability in Toronto

Static school project website for **Unaffordable Housing in Toronto**. The site presents research, bias assessment, secondary data, primary survey data, statistical analysis, policy proposals, limitations, and APA-style references.

The project is intentionally simple and GitHub Pages friendly:

- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- no React
- no Vite
- no backend
- no Node setup required
- no API keys

## Open Locally

1. Download or clone the repository.
2. Open `index.html` directly in a browser.
3. Keep `index.html`, `styles.css`, and `script.js` in the same root folder.

The website uses relative paths only, so it works from a local file path and from GitHub Pages.

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

1. Copy the GitHub Pages URL:

```text
https://350285449.github.io/housing_affordability_toronto_site/
```

2. Open your Google Sites page.
3. Choose **Insert -> Embed**.
4. Choose **By URL**.
5. Paste the GitHub Pages URL.
6. Insert the embed and resize it to fit the page.

Use the GitHub Pages URL, not the local `index.html` file.

## Technical Notes

- All charts are generated with local JavaScript in `script.js`.
- No external chart library is required.
- If JavaScript is disabled, the chart areas include fallback text.
- The Toronto skyline is made with CSS, so there are no image files to upload.
- Source links are included in the references section of the page.
