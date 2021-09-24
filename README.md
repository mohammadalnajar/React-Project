# Welcome to teleShop App

#### This React project was a part of my study in HackYourFuture institute in Amsterdam

#### The app consists of the following parts:

1. **Home page** with show modals
2. **Shop page** where your find all devices available in our database.
3. **Check out page** where you can pay using a credit card using Stripe API.
4. **Sing up page** to register your information in our database.
5. **Sing in page**.

### Languages and tools:

#### Frontend:
- ReactJs
- Javascript 
- CSS
- Material UI library.

#### Backend:
- NodeJs
- ExpressJs
- MongoDB

#### APIs:
- Strip API for payments.
___
In case you want to run the app on your **local machine** follow the next steps please:

- After cloning the code into your machine please do the next steps:

### Run these commands in your terminal:

1. `cd react-project`
2. `npm install `
3. `cd client`
4. `npm install`
5. In the config folder you will find `example.env` file, first you should
   rename it to `.env` and then include your mongoDB key and Stripe key as
   shown in the next Example:

   ```javascript

    NODE_ENV=development
    MONGODB_URL=''
    STRIPE_PRIVATE_KEY=''
    STRIPE_SUCCESS_URL='http://localhost:3000'
    STRIPE_CANCEL_URL='http://localhost:3000'

   ```
6. In your mongoDB Atlas create a database called react-project
7. Create collection and name it as `Devices`   
8. Import the `ExampleDevices.json` into your `Devices` collection. 
9. Back to your terminal and run `npm run dev` in the client folder.
   
### And that's it, the app now should run successfully on your machine.

