# Scoresheet App

## Developing

Once you've created a project and installed dependencies with `npm install` start a development server:

```bash
npm run dev
# Use the Network option to view it on your phone

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app: `npm run build`.

You can preview the production build with `npm run preview`.

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
