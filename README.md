# Fullstack-Project-2 Freshcapade app 

## Pitch and concept 

While traveling or moving to new places it can be tedious to find out what to do in the area. Googling and finding outdated or sparse information. Building an app to make a one stop spot to get all the event and activity information in your area.


### Product features

As a user I want to:
    - bringing like minded people together
    - search events and reviews near my location
    - creat an account and a user profile
    - check in, rate and review events
    - see past events
    - businesses can make and account, post events and discounts
    - join our contact mailing list

### Development process

Researched tech:
API selection 
    - Initially we were going to use the Eventful API but there were too many compatibility issues with our application goals
    - meetup was also not a viable option
    - Concluded on using Eventbrite's API
        - It is one of the most widely used APIs available for social event information
Nodemailer 
    - There were various ways to impliment nodemailer.
        - nodemailer will be used by Freshcapade as a way to contact help and support along with signing up for newsletter content. 
        - STMP is the main transport for delivering messages
        - Using Etherial.email platform to send and recieve emails from users
            - Ethereal is a fake SMTP service, mostly aimed at Nodemailer users (but not limited to). It's a free anti-transactional email service where messages never get delivered.

    - Addl Development tech used Node.js, Express.js, Sequelize.js, MySQL, Handlebars, bcrypt, dotenv, gitignore, Insomnia, & Heroku

### Breakdown of tasks and roles
Ayele: handlebars
Brandon: Backend 
Carina: Backend
Matthew: Frontend

## Challenges and successes

 Challenges
    - Not being able to see front-end browser while trying to get and post information
    - Integrating the API into the app 
    - Configuring the contact page and nodemailer
 Successes
    - 

### Future developmemt 


### App Requirements

    - Use Node.js and Express.js to create a RESTful API.
    - Use Handlebars.js as the template engine.
    - Use MySQL and the Sequelize ORM for the database.
    - Have both GET and POST routes for retrieving and adding new data.
    - Use at least one new library, package, or technology that we haven’t discussed.
    - Have a folder structure that meets the MVC paradigm.
    - Include authentication (express-session and cookies)
    - Protect API keys and sensitive information with environment variables.
    - Be deployed using Heroku (with data).
    - Have a polished UI.
    - Be responsive.
    - Be interactive (i.e., accept and respond to user input).
    - Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
    - Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).