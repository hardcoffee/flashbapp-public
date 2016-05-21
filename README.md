# Flashbapp

> This was once our [AngularAttack](https://www.angularattack.com) 2016 project

Create a flash on a place with a date and description of
what happened there and share it with people around the world.

### Step 1) Understand what is this

This is an Angular 2 project and your looking at the `webpack` branch.
This is only useful if you are looking to deploy the application, to run locally use the `master` branch.
The status is a working Alpha application waiting to be developed.

### Step 2) Get Your Local Environment setup

Clone this repo locally

* Install the latest [Node / NPM](https://nodejs.org).

* `git clone git@github.com:hardcoffee/flashbapp.git`

* `cd flashbapp`

* `npm install`

* ~~`npm start`~~ will CRASH

Just prepare for the deploy.


### Step 2) Deploy App

* `npm install -g webpack`

* `npm build`

* `cd dist`

* `surge .`

To make it even smaller remove the `.map` files. I tried to do it using a TS config but couldn't get it working.

### Step 3) Profit

    console.log('??');
