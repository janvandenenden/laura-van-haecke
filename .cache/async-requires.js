// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-project-post-js": () => import("../src/templates/project-post.js" /* webpackChunkName: "component---src-templates-project-post-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

