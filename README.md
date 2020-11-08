# OpeNetwork

## Build Setup

```bash
# copy env variable file 
$ cp server/.local.server.config.example server/local.server.config.js

# write a secret in the SESSION_SECRET variable

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

# Synopsis

## Analyze  

The significance or the main idea of the project is to build a social network for all open-source projects with the followings benefits : 
* Open the scope for projects to a larger group of workers. 
* Give the best search experience to users who want to contribute to new or trending open source projects. 
* Propose a new way to sponsor projects, maintainers, and contributors.
* With the best UI, offer visibility to open source projects. 
* Users, contributors or sponsors get newsletters for updates related to open-source projects for which they have an interest
* Offer a more user friendly alternative to “explore” features of Github or Gitlab.

### Objectives : 
* Data security.
* Improve UI/UX.
* Improve search experience. 
* Improve social interactions in an open-source project. 
* Provide more interests in open-source. 

### Users :
* Developers 
* Designers 
* Product Owners
* Investors
* Lambda-users
* Students

### Actions:
* Sign up / Sign In
* Customize social profile 
* Create project
* Create an article
* Chat with maintainers
* Invest / Donate 
* Search
* Explore in trending
* Collaborate

### App Upgrades:
* The Application can be upgraded according to user’s and administrators requirements with little changes.
* New features can be added per requirements.


## Conceive

Opening the scope of open-source projects to a larger group of workers implies that anyone who wishes to contribute to a project, even if they do not have a technical background, must understand how it works. Thus build a social network website for developers, designers, project managers, sponsors, and anyone who wishes to start or help in the open-source world. 
 * We need to implement features and a user interface that are simple enough to be understood and used by anyone. That way, they might enjoy the experience and keep using our services.

Since we have users, we must have a way to store information about them (credentials, their projects, all the information about their professional social), and build a database alongside the website. Storing them in a file is not ideal as it is complicated to have multiple simultaneous read and write of a file, and the file would get too large and put too much strain on the system, thus the need for a dedicated database.
* The fact that some users may sponsor other users implies that we must implement a payment feature.
We want to give a more enjoyable experience on project presentations than a simple readme file in a repository to present projects. We should then suggest that users present their project to produce a more visual presentation through our user interface. 

We want to suggest a way to keep users involved in the projects they contribute or sponsor.
* Creating a newsletter feature and sending it to users who applied it seems an excellent way to do so.

We need to ensure that our services are stable and secure. We need to implement tests to ensure our website meets any specifications we set and ensure no regression. The best way to ensure this would be to add a continuous integration test on our project repository. 
* The only practical information we would host would be the user's info for the security part. 

The projects presented on our website would be open-source, so they would not need a third party specialized module would most likely handle any protection, and the monetary transaction offered through sponsorship.
To sum up, we need to have an ergonomic and esthetic website backed by a database with different users with different privileges. Users would interact with each other through forums or chats and possibly sponsor users or projects they like through a payment module.


## Plan
We want to be as close as possible to the world of open source. 

We will develop our application like an open-source project. 

We are 5 maintainers :
* @Ekeu - Ulrich Ekeu
* @MLD94 - Mouloud Daoud
* @p-co - Pierre Couderc
* @Tikaiz - Sofiane Mektane
* @Tomklotzpro - Tom Klotz

We create issues for little functionalities or fix, and milestones for significant functionalities. 

We can work on a different part of the project. That is why we use commit conventions and branch name conventions. Everyone can participate in a pull request.

Each Pull request needs to be at least reviewed by one maintainer. 

We merge the pull request on main for the moment since we do not have a production environment. We do not keep track of the semantic versioning since we work on an **Alpha** for the 15th of December 2021. 
Once the alpha and the beta are ready, we will use proper tags and changelog to follow semantic versioning. 

When we have a proper production and staging environment to release with a CI/CD with Jenkins, functional testing would be on staging before releasing it to production. Production will be based on the main branch and staging on the staging branch. 


1 - 8 November : 
 * Welcome page 
 * Authenticate 

9 - 16 November : 
 * Customize Profil 
 * Create project 
 * Add circle CI 

17 - 24  November
 * Add Search with Algolia
 * Chat 
 * Add donate / invest with Paypal or Stripe
 * Add Database 

25 November - 2 December 
 * Add Newsletter
 * Add Trending algorithms 
 * Add notification 

3 - 10 December
 * Create production
 * Add CD 
 * Buy DNS + configure SSL 
 * Full review + full functional test with Alpha testers

11-15 December
 * Add twilio 
 * Release
 
## Initial Prototype 

Minimum Testable Product features :
* Registration / signin
* Projects pages
* Ability for users to communicate
* Search engine

***Detailed user scenario***

* Registration scenario : Main page -> click on register button -> filling firstname, surname, email, password and password confirmation -> confirm button -> confirm validation email.

* Project pages : Main page -> Browse project or search project and click on it -> Inspect project page

* Communicate : On project page -> Enter Chatroom OR Search user -> Send message

* Search engine : On any page -> type user name or project name

Action Plan :

1 - 8 November : 
 * Welcome page 
 * Authenticate 

9 - 16 November : 
 * Customize Profil 
 * Create project 
 * Add circle CI 

17 - 24  November
 * Add Search with Algolia
 * Chat 
 * Add donate / invest with Paypal or Stripe
 * Add Database 

25 November - 2 December 
 * Add Newsletter
 * Add Trending algorithms 
 * Add notification 

3 - 10 December
 * Create production
 * Add CD 
 * Buy DNS + configure SSL 
 * Full review + full functional test with Alpha testers

11-15 December
 * Add twilio 
 * Release