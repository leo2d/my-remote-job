# My Remote Job

Welcome to the server side!

Here you will find some infromations about the web api and the backend.

### Docs

You can access the documentation page from route: ***/api/v1/docs***

### Into the stack:

This project use some popular libraries:

- [Mongoose]( https://mongoosejs.com/ "Mongoose") - Used for manage data with MongoDB

- [Express]( https://expressjs.com/ "Express") - Used for build the server

- [Cheerio]( https://cheerio.js.org/ "Cheerio") - Used for create the scrapers

- [Swagger]( https://swagger.io/ "Swagger") - Used to document the endpoints of this web API


### How to run:

***Before runs make sure you have Node Js installed on your machine***

1. Clone this repository and navigate to the server folder
2. Then run __yarn__ or __npm i__
3. Setup your connection string to a MongoDB server  
    1. Open the file **mongoose.ts** in _src/data/database_
    2. Change the value of `connectionString` with your connection string  
        For example: 
        ```javascript

        //mongoose.ts
        
        const connectionString = 'YOUR CONNECTION STRING HERE';
        
        ```
4. Finally you can run __yarn dev:debug__ or __npm dev:debug__ to run in debug mode or just __yarn start__ or __npm start__ to start the application
5. Optional: Change the app port
    1. For default this app will runs at port `3333` but you can change editting the value of the variable `port` in the **app.ts** file in src/app.ts  
        For example: 
        ```javascript

        //app.ts
        
        const port = 3333; // Note that this value only acepts positive integer numbers
        
        ```
