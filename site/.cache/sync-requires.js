const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---packages-gatsby-theme-cara-src-templates-cara-tsx": hot(preferDefault(require("/Users/sharode/Desktop/me/packages/gatsby-theme-cara/src/templates/cara.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sharode/Desktop/me/site/.cache/dev-404-page.js")))
}

