# Group Plan
---

## USER STORIES
- As a user... ROLE
- I want to... GOAL
- Because... BENEFIT
#### As a user 
- I have documents that I want to make in to a cheatsheet(pdf)
- I don't want to waste time gathering and retyping all this information
- I want to easily extract elements from different screenshots and add them to one sheet
- I want to be able to add my own text/images and edit the imported elements as well
- I want my sheet to be aesthetically pleasing (something I can be proud of)
    * add my own flare: font, colour scheme, highlights, resizing, blocks
- I want to be able to resize my cheatsheet for printing or use on different screen sizes
- I want to be able to share my cheatsheet with friends (QR code)


## FEATURES
- Single Page App: React
- Desktop first (since we're building it for students)

##### MVP: Minimum Viable Product
  - user login
  - onboarding chatbot/process
    * registration/login
    * add images/screenshots - "Do you want to add elements??"
  - import resources (ie screenshots/images) => TESSERACT
  - edit and customize
    * add or delete from elements
    * add new elements (including images)
    * change colours/schemes
    * highlightable sections
    * resize/bold/italics and change fonts
    * basic shapes (circles, lines, arrows, stars, flow charts)
    * move elements in Z-space - maybe even anchor?
  - save progress and come back (drafts)
  - public (with QR code) or private (only creator's account)

##### Stretch Features
  - templates
  - cute animations with characters
  - chatbot with help and character features
  - different languages (google translate)
  - build out mobile aspect (through CSS or React-native)

## STACK - LIBRARY, UI, FRONT-END FRAMEWORK
- Language:
  * Node.js
- Framework:
  * Express/Meteor/Sails???
- Front-End Framework:
  * React
- Database:
  * Postgresql/Sequelize/Connects?
- UI Framework:
  * Material UI
  * Sass

- Libraries
  - Login/Register:
    * Bcrypt
    * Cookie-sessions
  - Screenshot/Image Scraper:
    * Tesseract
    * Cropper
    * Cloudinary
  - Customization:
    * ??

- Dev Dependencies
  * babel
  * storybook?
  * cypress
  * jest

## WIREFRAMES
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fk5WviZcWW8gW45dAPUAyUh%2FA-Sheet-in-the-Streets%3Fnode-id%3D0%253A1&chrome=DOCUMENTATION" allowfullscreen></iframe>

## ERD & DATA NECESSITIES


## ROUTES
##### Following RESTful convention:
| HTTP METHOD   | URL PATTERN   | USE         |
| ------------- |:-------------:| -----------:|
| GET           | /sheets       | cheat sheet |


## STORYBOARD

## DESIGN

## UI FRAMEWORK