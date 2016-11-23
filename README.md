# Angular Exports

This module provides a means of importing the non-component-specific functionality you need from angular in your ES6 classes
instead of relying on Angular's dependency injection.

## Dev Setup

    npm install
    npm serve

This serves the demo app from localhost:8080

## Basic Usage

```sh
npm install angular-exports --save-dev
```

Import the functionality you need

```js
import { $http, $q, $interpolate } from 'angular-exports';
```

### Peer Dependencies

Make sure you add angular to your project (specified as a peerDependency in `package.json`)
Importing 'angular-exports' in your app entry point will automatically pull angular into your project.

#### babel-polyfill:

```sh
npm install --save-dev babel-polyfill
```

**ES6:** Add the following line to the *top* of your app.js:

```js
import 'babel-polyfill';
```


## Code Styling

### Editor Config
This project uses [EditorConfig](http://editorconfig.org/) to define and maintain basic coding styles. It works out of the box with IDEA when enabled. [Plugins for other editors](http://editorconfig.org/#download) are available.

### ESLint
[ESLint](http://eslint.org/) is configured with code styling rules and is run during the build. Our config extends from eslint-config-angular and uses eslint-plugin-angular. It works out of the box with IDEA when enabled. [Plugins for other editors](http://eslint.org/docs/user-guide/integrations#editors) are available.

ESLint automatically fixes problems (currently mostly whitespace) on [some rules](http://eslint.org/docs/rules/).

## Serve & Build Commands

    npm run serve

Uses webpack-dev-server to serve the demo app at localhost:8080

    npm run build

Lints and builds the module

## Versioning

Then run the following command which will automatically update the `package.json` and commit for you with a message containing the new version number.

```
npm version [major|minor|patch]
```

**Minor** versions are for non-breaking changes that add new functionality (e.g. adding a method to a class, adding a new class, etc).

Similarly, **patch** versions are for non-breaking changes that do not add new functionality (e.g. changing the implementation of a method without changing it's signature or behaviour), including bug fixes.

All other changes (i.e. breaking changes) are **major** versions. See the [Semantic Versioning](http://semver.org/) specification for details.

