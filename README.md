# Jeremiah Adetunji — SEO portfolio

A responsive personal portfolio made with HTML, CSS, and vanilla JavaScript. No build step, package installation, paid service, external font, or framework is required.

## Preview locally

Open `index.html` directly in a browser, or run this command from the repository root using Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000` in your local browser. Stop the server with Ctrl+C. In a remote development environment, use its supported port forwarding if available; otherwise validate using local HTTP requests. Changes appear after refreshing the browser.

## Publish on GitHub Pages

1. Commit these four files to the repository and push a branch (for example, `main`) to GitHub.
2. In `adetunji-jeremi/jeremiahadetunji.github.io`, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the branch containing the files and **/ (root)**, then select **Save**.
5. Wait for the Pages deployment to complete. Use the published URL shown in Settings → Pages.

The standard user-site repository name must match the GitHub account: for `adetunji-jeremi`, that name is `adetunji-jeremi.github.io`. The current repository name, `jeremiahadetunji.github.io`, does not match that account, so GitHub normally serves it as a project site at `https://adetunji-jeremi.github.io/jeremiahadetunji.github.io/`. Confirm the actual URL in Pages settings. All asset links are relative, so the site supports either a project path or a user-site root. No deployment has been performed by creating these files.

## Content to verify before using for applications

- Confirm the biography, skills, and tool familiarity; add only substantiated experience.
- Replace the contact notice with a verified email `mailto:` link and LinkedIn profile link. There is deliberately no fake address, active contact form, or invented profile URL.
- Replace project outlines with real scope, dates, methods, evidence, and outcomes. The project graphics are decorative concepts, not measured performance charts.
- Add certifications only after verifying the title, issuer, date, and credential link. No credentials, employment, testimonials, or performance results are claimed.
- Add a verified résumé link only after providing a résumé file.
- Once the public URL is confirmed, add an absolute canonical URL and `og:url` in `index.html`. Optionally add a social preview image with an absolute `og:image` URL and alt text. These are omitted to avoid asserting an unconfirmed URL or missing asset.

## Files and customization

- `index.html`: semantic sections, content, SEO and social metadata.
- `styles.css`: responsive layout, CSS illustrations, colors, and typography. Edit the `:root` custom properties to adjust the palette.
- `script.js`: accessible mobile menu, linked case-study expansion, and footer year.

Navigation and case-study disclosures remain usable without JavaScript. The mobile menu supports Escape and reports its state with `aria-expanded`. The layout includes visible keyboard focus, a skip link, reduced-motion support, and no third-party requests or tracking.

## Suggested review

Check at narrow mobile and desktop widths, navigate with Tab and Enter, open the menu and dismiss with Escape, follow each project link, and verify all final contact links and claims before publishing. There is no automated test suite or build process.
