# BUDDYWORKS CI

Source of the BUDDYWORKS brand guidelines (corporate identity) page, live at **[ci.buddyworks.wtf](https://ci.buddyworks.wtf/)**.

The page explains how BUDDYWORKS should be represented in third-party media: brand colors, spelling, artwork usage, typography and association rules. Official art assets live in the [presskit](https://drive.google.com/drive/u/1/folders/1nXymwSYpDArC0JUnDkoe5CdwLELewp0-).

## Structure

```
index.html      the page
css/style.css   styles
js/main.js      copy-to-clipboard for color swatches, section index highlight
img/            logo, link-preview image, LEMON MILK font samples
favicon.ico
CNAME           custom domain (ci.buddyworks.wtf) for GitHub Pages
```

Plain HTML, CSS and JavaScript. There is no build step and no dependencies.

## Deployment

The site is served by GitHub Pages from the `main` branch. Anything merged into `main` goes live at ci.buddyworks.wtf within a minute or two.
