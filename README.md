# 🏆 Playoffs Καλοκαιριού – Estia

Static website for the Estia summer basketball playoffs, hosted on GitHub Pages.

## Project structure

```
.
├── index.html              # Main page
└── assets/
    ├── css/style.css       # All site styles
    ├── js/main.js          # Confetti + photo lightbox
    ├── images/
    │   ├── logos/          # Team logos
    │   ├── blog/           # Blog post images
    │   └── gallery/        # Photo gallery
    └── videos/
        ├── interviews/     # Interview videos
        └── blog/           # Blog post videos
```

## Adding content

- **Gallery photo:** put the image in `assets/images/gallery/` and copy one of the
  `gallery-item` blocks in `index.html`, updating the path in both places.
- **Blog post / interview:** put media in the matching `assets/` folder and add a card in
  the Blog or Interviews section of `index.html`.

Use lowercase file names with no spaces (e.g. `photo-5.jpg`). GitHub Pages is
case-sensitive, so `Photo.JPG` and `photo.jpg` count as different files.

## Local preview

```sh
python3 -m http.server
# open http://localhost:8000
```
