set -e

node package-deploy/npm-login.js $(cat "/etc/npm-cred/NPM_AUTH_TOKEN")

npm i
npm run package

filename="$(npm pack --dry-run | tail -n 1)"
npm publish $filename --registry=https://registry.npmjs.org/

echo "$filename package pushed to myGet successfully"