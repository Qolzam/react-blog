# React Blog Application
The React Social Blog `(RSB)` Application is a diary app blog based on [Semantic ui React](https://react.semantic-ui.com) for UI, [Redux](http://redux.js.org/)
with [react-redux](https://github.com/reactjs/react-redux) for managing states and [React](https://facebook.github.io/react/docs/hello-world.html) for managing DOM .It's an open source project as a portfolio.

##ON DEVELOPING
> Now I'm developing this project with `semantic-ui-react`. It hasn't released the final version so
there are some bugs that I have to face with.

> I'm trying to keep packages updated


# Prerequisites
 Install [NodeJs](https://nodejs.org/en/)

# Installing
 1. Installing all nodejs modules:
  `npm install`
 2. Rub webpack to build bundle file
  `webpack`
 3. Running server:
  `node server.js`
 4. Configure firebase:
    - Get [firebase config](https://firebase.google.com/docs/web/setup)
    - Create a folder in root folder `react-blog` set the name `config` => `>react-blog\config`
    - Create two files in `>react-blog\config` set their name `development.env` and `test.env` => `>react-blog\config\development.env` and `>react-blog\config\test.env`
    - Inside the files, you should write some keys of firebase configuration (each file is depend on the environment you work in `NODE_ENV`. If you set `NODE_ENV=development` your project will use from `development.env` to config firebase but if you set it `NODE_ENV=test` it will use `test.env` in test environment):
    >API_KEY=<API_KEY>

    >AUTH_DOMAIN=<PROJECT_ID>.firebaseapp.com

    >DATABASE_URL=https://<DATABASE_NAME>.firebaseio.com

    >PROJECT_ID=<PROJECT_ID>

    >STORAGE_BUCKET=<BUCKET>.appspot.com

    >MESSAGING_SENDER_ID=<SENDER_ID>



# Atom plugins

- atom-beautify
-  react



# Warning
- If you're using Windows you should install all node-gyp dependencies with following commands:

` $ npm install --global --production windows-build-tools`
and then install the package

` $ npm install --global node-gyp`


# Authors
- Amir Movahedi

# License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
