# This is our [AngularAttack](https://www.angularattack.com) 2016 Repo

> The start of our AngularAttack 2016 entry.

Currently it has a basic typescript project structure without functionality.

### Step 1) Get Your Local Environment setup

Clone this repo locally

* Install the latest [Node / NPM](https://nodejs.org).

* `git clone git@github.com:rumblex/angularattack2016-4promises.git`

* `cd angularattack2016-4promises`

* `npm install`

* `npm start` will start the server locally to test that everything is running correctly


### Step 2) Deploy App

The deployment of this sample app is made to [Surge](https://surge.sh).

* `npm install -g surge`

* `surge .`

After make a change, you don't need to commit just run `surge .`
again and refresh [the instance](http://4promises.2016.angularattack.io) on the browser.

Note: please do not remove the `CNAME` file, as that tells it where to deploy to.

### Step 3) Happy coding

    console.log('start typing!');
