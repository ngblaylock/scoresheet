# Bootstrap JavaScript

I decided to include Bootstrap JS through a CDN on the `app.html` page. Simply importing it doesn't work well because you have to do it on the `onMount()` hook, and when you do that it complains about TypeScript. I think with a tool like this it is intended to import each module individually. 

I would like to figure out how to pull the script from `node-modules` eventually to make sure the CDN version is lined up with the sass version, but for now this is fine.

After all, Bootstrap doesn't come up with a lot of releases.