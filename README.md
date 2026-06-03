# Housing Affordability in Toronto

This is a fully static interactive data-journalism website about housing affordability in Toronto. It uses only:

- `index.html`
- `styles.css`
- `script.js`
- `README.md`

There is no backend, no build step, no API key, no framework, and no required external dependency. The chart and calculator use local JavaScript so the page still works when opened offline.

## Open Locally

1. Download or clone this folder.
2. Open `index.html` directly in a browser.
3. Keep `index.html`, `styles.css`, and `script.js` in the same folder.

You can also use a simple local server, but it is not required.

## Deploy to GitHub Pages

1. Create a new repository on GitHub.
2. Put these files in the repository root folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Commit and push to the `main` branch.
4. On GitHub, open the repository settings.
5. Go to **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Set the branch to **main** and the folder to **root**.
8. Save.
9. GitHub Pages will publish a URL like:

```text
https://your-username.github.io/your-repository-name/
```

## Embed in Google Sites

1. Copy the final GitHub Pages URL.
2. Open your Google Sites page.
3. Choose **Insert -> Embed**.
4. Choose **By URL**.
5. Paste the GitHub Pages URL.
6. Insert the embed and resize it on the page.

Google Sites should embed the published GitHub Pages URL, not the local `index.html` file.

## Notes

- The site is designed to publish from the `main` branch root folder.
- It works from GitHub Pages because all file paths are relative.
- It works locally because the project does not rely on a development server.
- The references section uses APA-style citations with public source links.
