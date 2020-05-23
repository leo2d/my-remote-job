# My Remote Job - Web Client

### Into the stack:

- [Create React App](https://github.com/facebook/create-react-app "Create React App") - This project was bootstrapped with Create React App using __React Js 16.12.0__ and Hooks
- [TypeScript]( https://www.typescriptlang.org/ "TypeScript") - Used for provide types


### How to run:

***Before runs make sure you have Node Js installed on your machine***

1. Clone this repository and navigate to the web folder
2. Then run __yarn__ or __npm i__
3. Setup the connection to the api
    1. Open the file **serverURL.ts** in _src/serverURL.ts_
    2. Change the value of **serverURL** with your server url info:  
         For Example:
        ```javascript

        //serverURL.ts
        
       const serverURL = 'http://localhost:3333'; //your url here

       export default serverURL;

        
        ```
4. So you can run __yarn start__ or __npm start__ to start the application
