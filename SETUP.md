# Group Plan
---

## USER STORIES
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
  - templates and colour palettes
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
Language:
  * Node.js
- Framework:
  * Express/Meteor/Sails???
- Front-End Framework:
  * React
- Database:
  * Postgresql/Sequelize/Connects?
- UI Framework:
  * [Material UI](https://material-ui.com/)
  * [Sass](https://sass-lang.com/)

Libraries:
  - Login/Register:
    * [Bcrypt](https://www.npmjs.com/package/bcrypt)
    * [Cookie-session](https://www.npmjs.com/package/cookie-session)
  - Screenshot/Image Scraper:
    * [Tesseract](https://tesseract.projectnaptha.com/)
    * [Cropper](https://fengyuanchen.github.io/cropperjs/)
    * [Cloudinary](https://cloudinary.com/)
  - Customization:
    * [Font-picker](https://github.com/samuelmeuli/font-picker-react)
    * [Fabric.js](http://fabricjs.com/)
    * [Pickr](https://github.com/Simonwep/pickr)
    * [Range Slider](https://github.com/agrinko/range-slider)
  - Animations:
    * [ThreeJS](https://threejs.org/)

- Dev Dependencies
  * babel
  * storybook
  * cypress

## WIREFRAMES
![splash page](https://github.com/meghein/finals/blob/master/docs/wireframe/1-splash.png)
![import view](https://github.com/meghein/finals/blob/master/docs/wireframe/2-import.png)
![template view](https://github.com/meghein/finals/blob/master/docs/wireframe/3-template.png)
![customize view](https://github.com/meghein/finals/blob/master/docs/wireframe/4-customize.png)
![published view](https://github.com/meghein/finals/blob/master/docs/wireframe/5-published.png)

## ERD & DATA NECESSITIES


## ROUTES
##### Following RESTful convention:
| HTTP METHOD   | URL PATTERN   | USE         |
| ------------- |:-------------:| -----------:|
| GET           | /sheets       | cheat sheet |


## STORYBOARD

## DESIGN

## UI FRAMEWORK