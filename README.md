# Renaissance Fair Dashboard

## ERD

https://app.lucidchart.com/invitations/accept/61661407-ead2-482d-a0df-77b47ac389f2

## Wireframe

https://www.figma.com/file/Roh46wOW21lSTYFBbRW1xo/FreeLancer?node-id=15%3A4

## Description

Nutshell is a new product offering that you have been tasked with building. 
You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

- Functions
- Databases/API
- Github
- Objects
- CSS/SASS
- Handling user events
- Data entry/editing
- Modular code with Webpack
- Relational data
- CRUD

# Mentor
Jacob


## Project Requirements
* Clean code - single responsibility principle
* ES6 Modules bundled with webpack
* No errors - linters should be clean
* Jquery for any DOM manipulation (selectors, modifying css classes, events)
* SASS and Bootstrap for styling
* Completely planned out - before each section you should be making new cards before you code.  You should have wireframes and an ERD

### Planning and Setup
For planning and setup, your team will need to divide and conquer. All of these items will need to be completed and reviewed by noon on Saturday.

- Create an ERD and add to Readme
- Create Wireframes on Figma and add to Readme

#### Setup:
- Create a setup branch and setup webpack (make a ticket for this first)
  - Issue Ticket Template
  - Pull request Template
  - Set up readme
  
- Create 2 branches: `Main` and `Development`
  - Protect the `Main` branch from merging (DO NOT MERGE TO MAIN UNTIL APPROVAL FROM YOUR MENTOR IS OBTAINED)
  - All development should be done on the `Development` branch
  - When a milestone is completed, make a PR against the `Main` branch for your mentor to review.
  - DO NOT move on to another milestone until everyone on your team is completed with the milestone AND you get approval from your mentor.
  
- Create a new firebase project and enable google authentication
  - Share API keys with team (DO NOT PUSH TO GITHUB)
  - One person run deploys
___

### Expectations
- Break each section below into milestones
- Deploy each milestone
- Deployed URL on Readme
- Create a PR against the `Main` branch with:
  - The tickets completed that sprint
  - Explanation of what was completed in the sprint

## Description
### Week 1:
Welcome to FreeLancer the worlds go to organizer of Renaissance Fairs. Now that your company has proven its worth at staffing all sorts of different Renaissance events the owners have decided to come out of the dark ages and build one of those **FANCY** things on the interwebs.

Your task is to create a dashboard for the owners to keep track of the Food, Souvenirs, Shows, and Staff they have available across all locations.  They should be able to perform full CRUD on each of those 4 topics.  Additionally they should be able to authenticate into the application - if they are not authenticated the website should perform READ only operations.

The owners of FreeLancer are expecting to see some great branding but they aren't sure what they want so make it flashy and make it remind them about why they fell in love with Renaissance Fairs in the first place.

## Week 1
### Week 1 Requirements
* Authenticate in order to perform any actions (CUD)
* Food Module
* Souvenirs Module
* Shows Module
* Staff Module
* Well styled branded website

### Week 1 User Stories
#### Authentication
As a user, when I am unauthenticated I should be able to see the dashboard (Read only)
As a user, when I am authenticated I should be able to perform all actions on the dashboard (full CRUD).
As a user I should be able to login via google.
As a user I should be able to logout.

#### Shows
As a user, I should be able to add possible shows to my Renaissance Fair.
As a user, I should be able to see all possible shows at my Renaissance Fair.
As a user, I should be able to edit my spellin' mistakes on shows.
As a user, I should be able to delete a crappy show from my Renaissance Fair

#### Souvenirs
As a user, I should be able to add possible Souvenirs to my Renaissance Fair.

As a user, I should be able to see all possible Souvenirs at my Renaissance Fair.

As a user, I should be able to edit my spellin' mistakes on Souvenirs.

As a user, I should be able to delete a crappy Souvenir from my Renaissance Fair.

#### Staff
As a user, I should be able to add possible Staff to my Renaissance Fair.

As a user, I should be able to see all possible Staff at my Renaissance Fair.

As a user, I should be able to edit my spellin' mistakes on Staff.

As a user, I should be able to delete a crappy Staff from my Renaissance Fair.

#### Foods
As a user, I should be able to add possible Foods to my Renaissance Fair.

As a user, I should be able to see all possible Foods at my Renaissance Fair.

As a user, I should be able to edit my spellin' mistakes on Foods.

As a user, I should be able to delete a crappy Food from my Renaissance Fair.