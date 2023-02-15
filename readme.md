Codespace Notes:
---
Check for default universal image because as of right now it doesn't count toward codespace storage.

`devcontainer-info`

Check installed extensions because they do count against codespace storage.

`du -h -s ~/.vscode-remote/extensions`

Quasar Install:
---

`quasar info` Check install details.

`npm init quasar` Skip if cloned, forked, or templated the Project in this repo is already scaffolded.

`cd quasar-project` move to project folder.

`npm install` Skip if using codespaces, added this to "postCreateCommand" in devcontainer.json.

`quasar dev -p 4000` Added 4000 to "portsAttributes" in devcontainer.json.

`quasar build` will output SPA build to quasar-project/dist/spa.

`cd dist/spa` Important to remember to move to SPA folder before serving otherwise it will serve blank page.

`quasar serve . -H 127.0.0.1 -p 9000` need the single period to serve current directory, needed localhost and port flags to get it to serve anything at all.

Build.yml
---

To fix the href paths for production you need to go into quasar.config.js and uncomment out `//publicPath:` and add your path.
But I wanted to try to keep the files in this repo untouched so added a script in build.yml to inject it in at build time.

-add vercel

Add SSR
---
`quasar dev -m ssr` adds to project the src-ssr folder and serves ssr locally for preview with vite and express in one command.

`quasar build -m ssr` builds to the dist/ssr folder for deployment.

`cd dist/ssr`  Important to remember to move to SSR folder before serving otherwise it will serve blank page.

`quasar serve . -H 127.0.0.1 -p 9000` need the single period to serve current directory, needed localhost and port flags to get it to serve anything at all.

Windows
---

winget install OpenJS.NodeJS.LTS

npm install --force

npm ci --force

npm i -g @quasar/cli