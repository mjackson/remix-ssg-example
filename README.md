# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

### Building a Static Site

This repo has been modified from a bare bones Remix template to add static site generation capabilities.

To build your site statically, first do a normal build and boot the production server as shown above.

Then, in a separate terminal tab do:

```sh
npm run build-static
```

This will generate a `static` directory with the HTML files and assets you need to serve a fully hydrated Remix site. It uses `wget` to pull HTML, CSS, and JS from the server you have running in the other tab. It pulls all [the URLs listed in `static-urls.txt`](static-urls.txt). Once it completes, you can shut down the local server.

To test out your static build, run:

```sh
npm run serve-static
```

To deploy, just copy the `static` dir to your static hosting provider.

**IMPORTANT**

This isn't typically how Remix works (we usually have a server) so you'll want to note a few things about this setup:

- `loader` still works (see `app/routes/one.tsx` and `app/routes/two.tsx`) so you can still grab data from the filesystem or from your database and put it into your markup via `useLoaderData`
- Although the page is fully hydrated with React on it (we are still rendering the `<Scripts>` element in `app/root.tsx`) all navigation on the site should be done with a full document reload (using `<Link reloadDocument>`). This is because no server is running to be able to dynamically serve the data we need for the new route when we do a client-side transition to it. However, the data is already encoded in the HTML in the `static` output directory we generated in the `build-static` command.
- Other features that require a server (like `action`) will not work.
