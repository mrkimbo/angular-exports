# MyPost Consumer Onboarding Slides

This module contains onboarding information and data collection slides for MyPost Consumer.

## Dev Setup

    npm install
    gulp serve

This should open a browser window to the 'stub' page

## Basic Usage

```sh
npm install --save mypost-consumer-onboarding-slides
```

Add the directive to your project:

```html
<onboarding-slide-controls></onboarding-slide-controls>
<onboarding-slide-container></onboarding-slide-container>
```

### Peer Dependencies

Make sure you add the peerDependencies (specified in the `package.json`) to your project and specify them as dependencies to your angular module (see `demo.js`)

#### babel-polyfill:

```sh
npm install --save-dev babel-polyfill
```

**ES6:** Add the following line to the *top* of your app.js:

```js
import 'babel-polyfill';
```

**ES5**: Copy the `babel-polyfill/browser.js` into your dist folder.

### Config

Add the following lines to your .config constant to configure this module:

If the slides or content has changed, increment the ```version``` value as this will override the stored state for all users.

```js
onboardingSlides: {
  version: '1.0.0', // implementation versioning
  slides: {
    // override which slides are shown here if required
    // e.g. only show welcome slide
    {
      id: 'slide-directive-name',
      intro: `Feature tour, step {{n}} of {{max}}: This is screen reader only copy`,
      analytics {
        code: 'side analytics code',
        skip: 'event350' // extra event to send on skipping this slide'
      },
      required: true // whether this slide must be completed to allow full dismissal
    }
  },
  content: {
    // override content here if required
  },
  analytics: {
    // override prefix here if required
    prefix: 'my:prefix'
  }
}
```

## Code Styling

### Editor Config
This project uses [EditorConfig](http://editorconfig.org/) to define and maintain basic coding styles. It works out of the box with IDEA when enabled. [Plugins for other editors](http://editorconfig.org/#download) are available.

### ESLint
[ESLint](http://eslint.org/) is configured with code styling rules and is run during the build. Our config extends from eslint-config-angular and uses eslint-plugin-angular. It works out of the box with IDEA when enabled. [Plugins for other editors](http://eslint.org/docs/user-guide/integrations#editors) are available.

ESLint automatically fixes problems (currently mostly whitespace) on [some rules](http://eslint.org/docs/rules/).

## Gulp Commands

    gulp serve

Serves the app

    gulp test

Runs tests

    gulp build

Builds the app

## Versioning
First update the `changelog.md`.

Then run the following command which will automatically update the `package.json` and commit for you with a message containing the new version number.

```
npm version [major|minor|patch]
```

**Minor** versions are for non-breaking changes that add new functionality (e.g. adding a method to a class, adding a new class, etc).

Similarly, **patch** versions are for non-breaking changes that do not add new functionality (e.g. changing the implementation of a method without changing it's signature or behaviour), including bug fixes.

All other changes (i.e. breaking changes) are **major** versions. See the [Semantic Versioning](http://semver.org/) specification for details.

