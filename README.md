# Renaissance Fair Dashboard

## ERD

https://app.lucidchart.com/invitations/accept/61661407-ead2-482d-a0df-77b47ac389f2

## Wireframe

https://www.figma.com/file/Roh46wOW21lSTYFBbRW1xo/FreeLancer?node-id=15%3A4

## Link to the project

[Link](https://freelancers-7ae52.web.app/)

# Nutshell - FreeLancers

Nutshell/FreeLancers is an app that allows authorized users to create, modify, and delete different types of data; unauthorized users may still view the site and read the listed items/data, however they are unable to make any changes to the data. FreeLancers specifically provides different dashboards/modules for the authorized users to edit and manage for local Renaissance Faires to keep everything running smoothly. 

## Motivation

This app seeks to practice basic CRUD (Create, Read, Update, Delete) functionality, resolving promises, and manipulating Firebase hosted data. 

## Code

This project utilizes CSS, HTML5, and E6 Javascript. 

## Framework

Javascript + supporting HTML & CSS

## Features

FreeLancers opens with the souvenirs page, which will display all currently available souvenirs and their prices. Upon logging in and being authorized, users are able to manipulate this data as they see fit: changing current products, adding new products, and getting rid of old products. Each link across this dashboard (souvenirs, staff, shows, and food) has the same level of functionality and authorized users are capable of editing all of this data. 

## Code Snippet

Below is a snippet of code that adds the authorized user functionalities to the page. When the auth state of the user changes, it writes new buttons to the cards on each module. Buttons are only present and data is only able to be edited if user is logged in. This is the sample from our food module.

```
const addButtonsIfUserIsLoggedIn = (foodObject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $(`.button-body-${foodObject.firebaseKey}`).html(
        `<a href='#' id="${foodObject.firebaseKey}"
        class="update-food btn btn-info"><i class="far fa-edit"></i> Update food</a>
        <a href="#" id="${foodObject.firebaseKey}" class="btn btn-danger delete-food">Delete food</a>`
      );
      $('#add-button').html(
        `<div id="add-food">
           <a href='#'
           class="add-food btn btn-primary btn-lg"><i class="fas fa-plus-circle"></i> Add Food</a>
        </div>`
      );
      $('body').on('click', '.delete-food', (e) => {
        e.stopImmediatePropagation();
        const firebaseKey = e.currentTarget.id;
        $(`.card#${firebaseKey}`).remove();
        foodData.deleteFood(firebaseKey);
      });
    }
  });
};

```
