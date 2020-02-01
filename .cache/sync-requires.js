const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-post-js": hot(preferDefault(require("/Users/janvandenenden/Desktop/web design and programming/laura-van-haecke/src/templates/project-post.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/janvandenenden/Desktop/web design and programming/laura-van-haecke/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/janvandenenden/Desktop/web design and programming/laura-van-haecke/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/janvandenenden/Desktop/web design and programming/laura-van-haecke/src/pages/projects.js")))
}

