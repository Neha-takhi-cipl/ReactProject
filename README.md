<h1>Roaming Duck</h1>
It is an application for Planning trips and tours  with follow travellers by agent or self 
We are using react-boilerplate as starter kit that includes react, redux, saga, webpack, jest and a file structure.

## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more, today.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

But wait... there's more!



## Quick start

1.  Clone this repo using `git clone --depth=1 http://pravin@192.168.1.200/git/RoamingDuck.git`
2.  Move to the appropriate directory: `cd RoamingDuck`.<br />
3.  Run `npm install` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`

Now you're ready to rumble!

To generate an new component
1. `npm run generate component`
2. select options as required.

To generate an new component
1. `npm run generate container`
2. select options as required.

## Deploy the code at another server

In Codebase config update:- 
## Firstly in two files of config 
* app/appConfig.js
* server/config.js
* update the base_url where the application is serverd.
* BASE_URL like in "http://203.122.29.213:3061/tripdashboard" is "http://203.122.29.213:3061".

set the port that is set for the node application in
* server/port.js
* module.exports = parseInt(argv.port || process.env.PORT || '3000', 10);
* replace 3000 with new port number.

## Build process:- 
There are three packages global install in the environment. 
* <a href="https://nodejs.org/en/download/">node 8.11.3</a> (to check type in terminal node -v)
* <a href="https://nodejs.org/en/download/">npm 5.6.0</a> (to check type in terminal npm -v)
* <a href="http://pm2.keymetrics.io/" >pm2 3.0.0</a> (to check type in terminal pm2 -v)
1. npm install
2. npm run build
3. pm2 start server/index.js

## Documentation

* [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
* [Overview](docs/general): A short overview of the included tools
* [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
* [Testing](docs/testing): How to work with the built-in test harness
* [Styling](docs/css): How to work with the CSS tooling
* [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
* [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## License

This project is licensed under the MIT license, Copyright (c) 2017 Classic. For more information see `LICENSE.md`.
