# Irfan Can Kaleli — personal site

Interactive CV of Irfan Can Kaleli, Senior Full-Stack Engineer, with a real-time 3D showreel as its backdrop.

**Live:** https://www.irfanck.com/

## About the 3D film

The film behind the page was designed and coded by me — it isn't a template or stock footage. It runs live in the browser with three.js and WebGL: a real-time messaging platform is designed in the open, growing from a single server into a global, multi-region system with Liquid Glass components, depth of field and a camera that pulls back as the system grows. The developer at the desk is me (IrfanK): he types each change and deploys it with a beam from his screen. Every link in it is a real data path. The same code renders the downloadable MP4s frame by frame with WebCodecs.

- `js/` — the site and the film (bundled; readable source through the source maps)
- `media/` — the rendered 16:9 and 9:16 films, posters and soundtrack
- `files/Irfan-Can-Kaleli-CV.pdf` — the printable CV (`cv.html` is its source)

## Publish with GitHub Desktop

1. In GitHub Desktop: **File → New Repository**, name it `irfancnk.github.io`, and create it.
2. Copy everything in this folder (including the hidden `.nojekyll`) into the new repository folder.
3. **Commit to main**, then **Publish repository** (keep it public).
4. On GitHub: **Settings → Pages** — Source: *Deploy from a branch*, Branch: `main` / root. The site goes live at https://irfancnk.github.io/ within a minute or two.

To use your own domain (for example irfanck.com), add it under **Settings → Pages → Custom domain** and point the domain's DNS at GitHub Pages.

Third-party licences: see `THIRD_PARTY_NOTICES.md`.
