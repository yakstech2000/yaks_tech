// Public-folder assets (things referenced by a plain string path, like
// `/images/photo.jpg`) need to be prefixed with Vite's base URL so they
// resolve correctly when the site is hosted in a subfolder — e.g. GitHub
// Pages serving from https://username.github.io/repo-name/ instead of the
// domain root. Vite only rewrites paths it processes through imports/CSS
// url()/index.html automatically; a hardcoded string in JSX needs this
// helper. Works in local dev too, since BASE_URL is '/' there.
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}