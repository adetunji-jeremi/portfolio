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

## Content and review

Professional information, employment periods, education, skills, and email were supplied by Jeremiah for this content update. Selected Work contains experience summaries, not independently verified case-study outcomes. No performance metrics or testimonials have been added.

LinkedIn remains pending because a verified URL has not been supplied. GitHub uses the known repository owner. No phone number is published. Add a résumé or credential only when the actual file or verification link is available.

This content update is for review only. Do not push or publish it until Jeremiah approves.

## Files and customization

- `index.html`: semantic sections, content, SEO and social metadata.
- `styles.css`: 960px responsive layout, off-white and blue palette, project cards, and system sans-serif typography. Edit the `:root` custom properties to adjust the palette.
- `script.js`: footer year.

The About, Work, and Contact navigation remains visible on mobile and desktop. Navigation and all professional content remain usable without JavaScript. The layout includes visible keyboard focus, a skip link, and no animations, third-party requests, or tracking. LinkedIn is shown as pending rather than linked to an unverified profile; the GitHub link uses the known repository owner.

## Suggested review

Check at narrow mobile and desktop widths, navigate with Tab and Enter, check the navigation and email links, and verify all final contact links and claims before publishing. There is no automated test suite or build process.
