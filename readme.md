**This is** a front-end project boilerplate.
Compared to [Create React App](https://github.com/facebook/create-react-app), this is
- **lighter weight:** less dependencies
- **more configurable:** the dependencies & build config implementation details can be updated more independently
 
# Table of Contents
1. [Tooling Overview](#tooling-overview)
2. [Tooling Details](#tooling-details)
3. [Frontend UI Startup Process Order Overview](#frontend-ui-startup-process-order-overview)
4. [File Structure Overview](#file-structure-overview)
5. [Dummy Dashboard UI && State Management Overview](#dummy-dashboard-ui-and-state-management-overview)
6. [Coming Additions](#coming-additions)
 
&nbsp;
 
## Tooling Overview
The fundamental components of this framework are React, Webpack, Webpack Dev Server, && Babel.
 
**[React](http://react.js/)**
 
Frontend Component && state-management library
 
**[Webpack](http://webpack.js.org/)**
 
Webpack handles Code Bundling.
[Webpack details](#webpack-details) can be found in the webpack.config files.
 
**[Webpack Dev Server](https://github.com/webpack/webpack-dev-server)**
This serves the webpack app during development.
 
**[Babel](https://babeljs.io/)**
[Babel details](#babel-plugins)  can be found in the .babelrc file.
 
_What is Babel? from the babel [docs](https://babeljs.io/docs/en/)..._
"Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:
 
-   Transform syntax
-   Polyfill features that are missing in your target environment (through  [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill))
-   Source code transformations (codemods)
-   And more! (check out these  [videos](https://babeljs.io/videos.html)  for inspiration)"
 
&nbsp;
 
## Tooling Details
### Babel Preset && Plugin Overview
[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
(from the docs...)
`@babel/preset-env` is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!"
 
[@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
Includes several plugins on install (see docs)
 
 
[@babel/plugin-proposal-object-rest-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread)
Transforms ES6 Rest & Spread operators ```{...values}```
 
[@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
Allow parsing of ```import()```, primarily for [React's Lazy-Loading](https://reactjs.org/docs/code-splitting.html#reactlazy) of components
 
 
### Webpack Config Overview
 
- **entry:** the point where to _start_ the application
- **output:** where Webpack puts the bundled results
- **module:** "_These options determine how the [different types of modules](https://webpack.js.org/concepts/modules) within a project will be treated._"
 
&nbsp;
 
## Frontend UI Startup Process Order Overview
 
### Initial Rendering
1. Fetch the appconfig file (_src/App/index.js **ln27**_)
  - Take vars from appconfig to inform the rest of the project:
    - I.E environment-specific vars (api strings, port number(s), etc)
2. Fetch a dummy data source (_src/App/index.js **ln38**_)
  - **NETWORK LAG MOCK**: placeholder _setTimeout_ here to mock network lag
  - [React.useEffect](https://reactjs.org/docs/hooks-effect.html) notices when appConfig gets retrieved && saved && triggers a data-fetching call
3. App Rendering (_src/App/index.js **ln51**_)
  - if fetching case
    - show dummy **fetching** text
  - if not fetching && no data from mock API
    - show dummy **Manual Fetching state** text
  - if data from mock API is present
    - show dashboard && pass props:
      - API result data
      - fetch-data function
      - fetching status
 
&nbsp;
 
## File Structure Overview
**appconfig** contains configurable settings
 
**src** contains React UI files
**src/App** contains the _root_ of the React UI
- Here, a _root_ React router can be placed
 
**src/containers** contains [containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), which are state-management-heavy components
- dashboard
 
**src/components** contain _globally state-agnostic_ components. These receive properties && render based on the props. These may have inner 'state' details, but are majority [controlled components](https://reactjs.org/docs/forms.html#controlled-components)
- Dropdown
- List
 
&nbsp;
 
## Dummy Dashboard UI and State Management Overview
 
&nbsp;
 
## Coming Additions
- React-routing @ root level
- Some demo tests [Jest](https://jestjs.io/) [Enzyme](https://github.com/airbnb/enzyme)
- Testing pre-commit
- [Linting pre-commit](https://prettier.io/docs/en/precommit.html)
- More Complex State Management
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
    - Sharing values between nested components
  - [useReducer(s)](https://reactjs.org/docs/hooks-reference.html#usereducer)
    - Sharing _more complex_ state throughout the app
  - [Redux](https://redux.js.org/)
      - "a predictable state container for JavaScript Apps"
      - [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367), written by Dan Abramov, the guy who is primarily responsible for redux
      - [useReducer vs Redux](https://hashnode.com/post/should-we-usereducer-hook-instead-of-redux-cjomzn08g01y6hgs1rhtoi03k) article, comparing the two
      - [another one](https://vijayt.com/post/good-bye-redux-global-state-using-react-hooks-and-usereducer-function/)
      - [another one](https://www.robinwieruch.de/redux-vs-usereducer/)