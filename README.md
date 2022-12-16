# Scoresheet App

Scoresheet is designed and maintained by Nathan Blaylock. It's primary purpose was primarily to learn Svelte/SvelteKit and Tailwind while creating an app that would actually be used by friends and family. 

The purpose of this app is to do the math for each scoring round during a card game. It is designed to be as general purpose as possible. The app is designed for mobile devices and can be "installed" by creating a shortcut on your device home screen.

To open the app, visit https://scoresheet.nathanblaylock.com.

## Developing

Once you've run `npm install` start a development server:

```bash
npm run dev
# Use the Network option to view it on your phone

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Releasing

1. Test the app in dev mode.
2. Make sure to update the version in `package.json`.
3. Run `npm run build` which will build to the `docs` directory.
4. Run `npm run preview` to test the app in production mode.
5. Commit with the message `v1.x.x`; x is the next number.
6. Push to the remote repo.
7. Merge in to the master branch.
8. In GitHub create a new release and tag with the version number; `v1.x.x`.
9. Close the issue in GitHub.
