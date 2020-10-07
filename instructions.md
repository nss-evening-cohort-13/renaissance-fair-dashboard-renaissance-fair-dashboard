# Renaissance Fair Dashboard

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

## Description
### Week 2:
The owners of FreeLancer were very pleased with the results of V1 of their website but didn't have enough money to continue paying the same developers so they hired you.  Now that they are able to perform full CRUD on Food, Souvenirs, Shows, and Staff they would like to be able to bring all the modules together and create events that get Food, Souvenirs, Shows, and Staff assigned to them.  They would also like to be able to do some financial reporting and graphing to easily visualize how much revenue they are bringing in both per event and for all events.  This application will mainly be used by the companies event planners.

### Week 2 Requirements
* Authenticated user is the Event planner
* Event Module
* Financial Reporting
* Graphing

### Week 2 User Stories
#### Events
As a user, I should be able to add Renaissance Fair Events.

As a user, I should be able to add Staff to an Event I have created.

As a user, I should be able to add Food to an Event I have created.

As a user, I should be able to add Shows to an Event I have created.

As a user, I should be able to delete Souvenirs from an Event I have created.

As a user, I should be able to delete Staff from an Event I have created.

As a user, I should be able to delete Food from an Event I have created.

As a user, I should be able to delete Shows from an Event I have created.

As a user, I should be able to delete Souvenirs from an Event I have created.

As a user, I should be able to see(READ) entire Event with all the Staff, food, Shows, and Souvenirs.

#### Authentication
As a user, when I am logged in I should have access to an events dashboard.

As a user, when I am logged out I should NOT have access to an events dashboard.

As a user, when I am on the Events page I should only be able to modify or delete events I have created

#### Financial Reporting
As a user, I should be able to see a detail page for a specific event.

As a user, I should be able to see financial reporting broken up per module (Food, Shows, Souvenirs, Staff) for a specific event.

As a user, I should be able to see financial totals broken up per module (Food, Shows, Souvenirs, Staff) for a specific event.

As a user, I should be able to see the total cost of a specific event.

As a user, I should be able to filter a list of all costs for all modules by module name or by price range

#### Graphing
As a user, I would like to be able to see a column chart on the specific event page that displays the cost for each module (ie module on the x axis cost on the y axis).

As a user, I would like to see a graph on the Events dashboard that shows costs across ALL events.

As a developer, I would like to use AmCharts to make all charts - use the free version.
