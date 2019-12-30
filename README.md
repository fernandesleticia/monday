# Monday
An API built with NodeJS

## Running the server

launch the app from the Terminal
    $ npm install
    $ node server.js

the server will run on port 8080

## Deploying on Heroku

1) first, the api must be stored on git
   $ git init
   $ git add .
   $ git commit -m "init"

2) login on heroku
   $ heroku login
   
3) create a heroku app
   $ heroku create api-delfos-node
   
4) commit your changes
   $ git commit -m "changes"
   
5) deploy your code   
   $ git push heroku master
   
6) Finally, go to your dyno on Heroku and Open app    

  
  