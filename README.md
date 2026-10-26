# Publish Vaibhav Agarwal's website

This is a complete static website. It requires no npm packages, build command, database, or paid hosting. The download ZIP contains the website files directly at its root.

## 1. Extract the ZIP

Extract `VaibhavAgarwal_Website.zip` on your computer. Inside the extracted folder, you should see `index.html`, `research.html`, `cv.html`, `contact.html`, `style.css`, `script.js`, `photo.jpg`, `cv.pdf`, and the `fonts` folder, alongside supporting files and redirects.

The supplied CV is included unchanged as `cv.pdf`.

## 2. Rename the existing GitHub repository

Your GitHub account is already named `vaibhav-sds`. As checked on 26 October 2026, the website repository is still:

https://github.com/vaibhav-sds/econvaibhav.github.io

Open that repository, then select **Settings → General**. Change the **Repository name** to exactly:

`vaibhav-sds.github.io`

Click **Rename**. This keeps the repository and its history. Do not rename your account again.

The repository will then be `https://github.com/vaibhav-sds/vaibhav-sds.github.io`.

## 3. Upload the website files

1. Open the renamed repository's **Code** tab.
2. Select **Add file → Upload files**.
3. Drag the **contents** of the extracted folder into GitHub. Upload all files and the complete `fonts` folder, replacing files with matching names. Do not upload the ZIP itself or the enclosing folder.
4. Include the hidden `.nojekyll` file. On Fedora, press **Ctrl+H** in Files to reveal hidden files before selecting the contents. If GitHub's uploader skips this empty file, use **Add file → Create new file**, enter `.nojekyll`, and commit it; a newline is sufficient.
5. Enter a commit message such as `Update personal website`, choose **Commit directly to the main branch**, and commit. If your repository requires a pull request, create and merge that pull request instead.

After upload, `index.html` must appear directly in the repository root, next to `cv.pdf` and the `fonts` folder. It must not be nested inside an extra `dist` or website folder.

The included redirects replace the old Blog, Interests, separate Publications/Projects, and personal-topic pages. The included sitemap replaces the old-domain sitemap. No custom GitHub Actions workflow or CNAME file was found in the repository at the time of preparation.

## 4. Enable GitHub Pages

Open **Settings → Pages**. Under **Build and deployment**, choose:

| Setting | Value |
| --- | --- |
| Source | Deploy from a branch |
| Branch | main |
| Folder | /(root) |

Click **Save**. Keep HTTPS enabled. GitHub's `github.io` address supports HTTPS automatically.

Wait for the Pages deployment to finish; GitHub says this can take up to 10 minutes. In **Settings → Pages**, click **Visit site**. The website's public address will be:

https://vaibhav-sds.github.io/

The site does not require ChatGPT sign-in when hosted on GitHub Pages.

## Check the result

- Open the public address in a private/incognito window.
- Check Home, Research, CV, and Contact, including the PDF open/download links.
- A fresh visitor should see the black theme; the theme button saves their later choice.
- If the old design remains visible, refresh with Ctrl+Shift+R.
- If there is a 404 after deployment completes, check the exact repository name, `main` / `/(root)` selection, and root-level `index.html`.
- If deployment fails, open the repository's **Actions** tab and inspect the latest Pages deployment log.

Your old Pages website address is not automatically redirected when the account/repository changes. Update your GitHub profile, CV, and other profile links to the new address when you are ready.

## Future edits

| Change | File |
| --- | --- |
| About me / homepage | `index.html` |
| Publications, thesis, projects, teaching | `research.html` |
| CV document | Replace `cv.pdf` with a new PDF using the same filename |
| Contact details | `contact.html` |
| Colours, spacing, fonts | `style.css` |
| Theme switch | `script.js` |
| Portrait | Replace `photo.jpg`, keeping the filename |

Upload or edit the changed file and commit to `main`. GitHub Pages then republishes it. Keep the font licence files in `fonts/`. Comic Sans is used when installed; otherwise the bundled Comic Relief font provides the fallback. ORCID and Scholar are linked; publications are updated manually.

## Optional local preview on Fedora

Open a terminal in the extracted website folder and run:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit `http://localhost:8000/` in your browser. Press **Ctrl+C** in the terminal when finished. This previews the site on your computer; GitHub Pages hosts the public version.

## Official references

- Rename a repository: https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository
- Create a GitHub Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Configure publishing: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Upload files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
