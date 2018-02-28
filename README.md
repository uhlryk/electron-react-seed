# electron react seed

This is boilerplate for any electron react projects.

It is a heavily customized version of [https://github.com/chentsulin/electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate). 

## Commands

* **npm run dev** - run development environment with hot module loader
* **npm run linter** - run linter
* **npm run prettier-all** - use prettier on all js files
* **npm run prettier-changed** - use prettier on changed js files
* **npm run complexity** run static complexity

## Git hooks

run prettier and linter before commit.

## Frameworks and libraries

* electron
* react
* react-router
* redux
* reselect
* hot module loader
* sass
* compass
* bootstrap3
* font awesome
* css modules (sass)

## Project structure
 * app
   * frontend - frontend app used in electron renderer process
     * components - should contain all sharable react components
     * modules - each module should be in named folder. It contain example component called *tasks*
     * reducers  - directory for global reducers
       * index.js - root reducer
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
   * actions.js - place for module actions and actions creators
   * actionTypes.js - actions type constants
   * constants.js - module constants
   * index.js - main module file
   * reducer.js - module reducer
   * main.jsx - root module react component
   * styles.scss - css module

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

## License 

MIT
