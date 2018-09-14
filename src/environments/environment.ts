// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDOI9WNuK-2pRsw9Sb5FnC14jG-zDbcn7g",
    authDomain: "todolist-angular-app.firebaseapp.com",
    databaseURL: "https://todolist-angular-app.firebaseio.com",
    projectId: "todolist-angular-app",
    storageBucket: "todolist-angular-app.appspot.com",
    messagingSenderId: "938002721538"
  }
};
