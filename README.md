# Minimal Typewriter Portfolio (plain HTML, CSS, JavaScript)

No Node, no npm, no build step. Just files.

## Nijer info edit korbe kivabe

Sudhu **`js/data.js`** file ta kono text editor-e (Notepad, VS Code) khulo, `[square bracket]` placeholder gulo
nijer info diye replace koro, save koro. Ar kono file chuite hobe na.

- Photo: `assets/` folder-e rakho (jemon `profile.jpg`), then `data.js`-e `photo: 'assets/profile.jpg',`
- Institution logo: same, `logo: 'assets/your-logo.png',`
- Social link: `social` section-e URL boshao. Jegulo faka thakbe segulo Contact page-e dekhabe na.

Dekhte chaile `index.html` file-ta double-click kore browser-e kholo. Eta computer-e directly cholbe.

## GitHub Pages-e publish (kono command lagbe na)

1. github.com-e new repository banao (Public). Nam `username.github.io` dile link hobe
   `https://username.github.io/`, onno nam dile `https://username.github.io/repo-nam/`.
2. Repository page-e **Add file -> Upload files** click koro. Ei folder-er **shob file ar folder**
   (`index.html`, `education.html`, `skills.html`, `work.html`, `contact.html`, `css`, `js`, `assets`)
   drag kore drop koro. **Commit changes** click koro.
   (Folder gulo drag korle upload hoy. README.md rakhle rakho, na rakhle o cholbe.)
3. **Settings -> Pages**. **Source: Deploy from a branch**. Branch: **main**, folder: **/ (root)**. **Save**.
4. 1-2 minute pore Settings -> Pages-er upore tomar site-er link dekhabe.

## Pore kichu bodlate chaile

`js/data.js` edit koro (GitHub-e file-ta khule pencil icon diye o edit kora jay), **Commit changes** koro.
1-2 minute-e site update hoye jabe.

## File guide

```
index.html, education.html, skills.html, work.html, contact.html   <- 5 ta page
js/data.js     <- tomar shob info (eta edit korbe)
js/main.js     <- page banano-r code (chuite hobe na)
css/style.css  <- design ar black/white color (file-er upore)
assets/        <- photo, logo
```
