# boilerplate electron app

## Installation:

How to use this code as new app:

1 Clone this repository to new empty dir:

    https://github.com/uhlryk/my-electron-boilerplate.git

2 Create your app repository

3A Change remote git url to your repository url

    git remote set-url origin https://github.com/yournick/your-app-url.git
    
3B If you don't want to have this boilerplate commit history you can remove it and create new own git init:

    rm -rf .git
    git init
    git remote add origin https://github.com/yournick/your-app-url.git
    git add .
    git commit

4 change app info in package.json 

5 update npm modules

    npm install

## Commands:

Compile/transpile/transform all source files and run electron

    npm run prebuild
Compile/transpile/transform all source files and run electron with hot loader (unsuitable for deploy, perfect for development)

    npm run prebuild-hot

Compile/transpile/transform all source files and publish electron (available in ./release)

    npm run publish
    
## Structure:


## Technology:

  * electron
  * react
  * jsx
  * redux
  * hot-loader
  * webpack
  * ES6 & ES7
  * gulp
  * bootstrap 3
  * sass
  * compass

## Licence:

MIT
