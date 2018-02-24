# electron react seed

This is boilerplate for any electron react projects.

It is based on [https://github.com/chentsulin/electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate). 

But some thigs are simplified.
This one is as simple as possible to fulfill my needs. If you need something more feature rich, you should go with original one.


## Commands

* **npm run dev** - run development environment with hot module loader
* **npm run linter** - run linter
* **npm run prettier-all** - use prettier on all js files
* **npm run prettier-changed** - use prettier on changed js files
* **npm run complexity** run static complexity

## Git hooks

Before commit prettier and linter will be run.

## Frameworks and libraries

* electron
* react
* react-router
* redux
* hot module loader
* sass
* compass
* bootstrap3
* font awesome
* css modules (sass)

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
