# boilerplate electron app

## Installation:

How to use this code as new app:

1 Clone this repository to new empty dir:

    git clone https://github.com/uhlryk/electron-react-seed emptyDirectory

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

### Development

run both commands

```
npm run start-main-dev
```

```
npm run start-renderer-dev
```


## Licence:

MIT
