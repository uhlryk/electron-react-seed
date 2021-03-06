# electron react seed

This is boilerplate for any electron react projects.

It is a heavily customized version of [https://github.com/chentsulin/electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate). 

## Commands

* **npm run dev** - run development environment with hot module loader
* **npm run prod** - run production environment (it assumes that build is done. Run **npm run build** first)
* **npm run linter** - run linter
* **npm run test** - run tests
* **npm run prettier-all** - use prettier on all js files
* **npm run prettier-changed** - use prettier on changed js files
* **npm run complexity** run static complexity
* **npm run build** build whole project
* **npm run package** package app for current environment
* **npm run package-all** package app for all environments

## Git hooks

run prettier and linter before commit.

## Frameworks and libraries

* electron
* react
* react-router
* redux
* react-notification-system
* redux-observable
* rxjs
* reselect
* hot module loader
* sass
* compass
* bootstrap3
* font awesome
* css modules (sass)
* internationalization (i18next)

## Related documentations
* [https://electronjs.org/docs](https://electronjs.org/docs)
* [https://reactjs.org/docs/](https://reactjs.org/docs/)
* [https://redux.js.org/](https://redux.js.org/)
* [https://github.com/reactjs/react-redux/](https://github.com/reactjs/react-redux/tree/master/docs)
* [https://reacttraining.com/react-router/](https://reacttraining.com/react-router/web/guides/philosophy)
* [https://redux-observable.js.org/](https://redux-observable.js.org/)
* [https://github.com/reactjs/reselect](https://github.com/reactjs/reselect)
* [https://github.com/igorprado/react-notification-system](https://github.com/igorprado/react-notification-system)
* [https://github.com/gor181/react-notification-system-redux](https://github.com/gor181/react-notification-system-redux)  
* [https://www.i18next.com/](https://www.i18next.com/)
* [https://react.i18next.com/](https://react.i18next.com/)
* [http://reactivex.io/rxjs/manual/index.html](http://reactivex.io/rxjs/manual/index.html)
* [https://lodash.com/docs/](https://lodash.com/docs/4.17.5)
* [https://www.npmjs.com/package/classnames](https://www.npmjs.com/package/classnames)
* [http://getbootstrap.com/docs/3.3/](http://getbootstrap.com/docs/3.3/)
* [https://fontawesome.com/how-to-use/svg-with-js](https://fontawesome.com/how-to-use/svg-with-js)
* [https://sass-lang.com/documentation/file.SASS_REFERENCE.html](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)
* [http://compass-style.org/examples/](http://compass-style.org/examples/)

## Project structure
 * app
   * frontend - frontend app used in electron renderer process
     * components - should contain all sharable react components
     * modules - each module should be in named folder. It contains example component called *tasks*
     * reducers - directory for global reducers
       * index.js - root reducer
     * translations - directory for translations
       * index.js - i18next configuration
       * general.js - global translations
     * styles - directory for global styles
       * index.global.scss - root global style
       * _variables.scss - place for overriding bootstrap variables
       * _mixins.scss - place for overriding bootstrap mixins
       * _bootstrap.scss - imports all bootstrap styles
       * _fontAwesome.scss - imports font awesome
       * _general.scss - place for base global styles
     * App.jsx - main react setup file
     * index.js - root frontend script file
   * app.html - renderer electron process
   * main.dev.js - main electron process
   
## Module structure

This is just suggested module structure
 * [moduleName]
   * components - place for module react components
   * views - place for module react routes and views components
   * actions.js - place for module actions and actions creators
   * actionTypes.js - actions type constants
   * constants.js - module constants
   * index.js - main module file
   * reducer.js - module reducer
   * selectors.js - module reselect selectors
   * Main.jsx - root module react component
   * styles.scss - css module
   * translation.js - module translations

## Styles

All styles can be written using sass. 
Configuration allows global styles `*.global.scss`.
And scoped locally `*.scss`.
If you use global styles you can extend from bootstrap3 classes and from fontAwesome

```scss
.button {
    @extend .btn;

    &--normal {
        @extend .btn-default;
    }
}
```
Local styles can not extend from above but their advantage is that they are scoped to component.

## Notifications
https://github.com/gor181/react-notification-system-redux

Use those actions:

import Notifications from 'react-notification-system-redux';

```
dispatch(Notifications.success(options));
dispatch(Notifications.error(options));
dispatch(Notifications.warning(options));
dispatch(Notifications.info(options));
```
where options are:
```
{
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};
```
### translation

notification message and title are translated.
As a value use :
```
<namespave>:key.subkey
```

## License 

MIT
