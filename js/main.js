import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './portfolio';

const myWork = [
  {
    'title': "Ravenous",
    'href': " http://ravenous-portfolio.s3-website-us-east-1.amazonaws.com",
    'desc': "Using the Yelp API I built a simple app which fetches the data and renders it to a simple UI. ",
    'image': {
      'src': "./images/rav.jpg"
    },
    'comment': "item0 hov"
  },
  {
    'title': "Iron Yard Certificate",
    'href': '#',
    'image': "./images/tiy.jpg",
    'comment': "item1 hov",
  },
  {
    'title': "Pomodoro Clock",
    'href': "http://pomodoro-portfolio.s3-website-us-east-1.amazonaws.com",
    'desc': "An Iron Yard homework assignment.  I like to look back on it to remind myself how far I have come by comparing the original code and styling to what is developed using the creat-react module. It was originally written with pure javascript and you can see the original code on my github page assisgnment 16.",
    'image': {
      'desc': "",
      'src': "./images/clock.jpg"
    },
    'intro': "View App",
    'comment': "item2 hov"
  },
  {
    'title': "Full-Stack Weather App",
    'href': "http://weather-portfolio.s3-website-us-east-1.amazonaws.com",
    'desc': "This single page application is a full-stack app with a react front-end and a node backend.",
    'image': {
      'desc': "",
      'src': "./images/weather.jpg"
    },
    'intro': "View App",
    'comment': "item3 hov"
  },
  {
    'title': "YelpCamp",
    'href': "#",
    'desc': "I am building a CRUD node project with a mongodb database that demonstrates RESTful API calls. Please check back soon to see my progess.",
    'image': {
      'desc': "",
      'src': "./images/yelp.jpg"
    },
    'intro': "View App",
    'comment': "item4 hov"
  },
  {
    'title': "Oyster API",
    'href': "#",
    'desc': "This one is for the oyster lovers out there.  I am building a CRUD app API to find all of the types of oysters served in the low-country.  Please check back soon to see my progess.",
    'image': {
      'desc': "",
      'src': "./images/oyster1.jpg"
    },
    'intro': "View App",
    'comment': "item5 hov"
  },
  {
    'title': "CodeCademy Intensive",
    'image': "./images/code.jpg",
    'href': "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/11347858",
    'comment': "item6 hov",
    'intro': "View Certificate"
  },
  {
    'title': "Spotify App",
    'href': "http://jgjamming.s3-website-us-east-1.amazonaws.com",
    'desc': "Working with the spotify API a user can use this app and create a playlist in their spotify account.  Again I used the create react app build and hosted it in an S3 bucket in the AWS cloud.  My tech stack is javascript, React, CSS, and HTML.",
    'image': {
      'desc': "",
      'src': "./images/jam.jpg"
    },
      'intro': "View App",
      'comment': "item7 hov"
  },
  {
    'title': "Scrum Master",
    'image': "./images/csm.jpg",
    'href': "http://bcert.me/sthdbnfra",
    'comment': "item8 hov",
    'intro': "View Certificate"
  },
  {
    'title': "BudgetApp",
    'href': "http://budgetapp.s3-website.us-east-2.amazonaws.com",
    'desc': "Vanilla javascript featuring constructors and closures.",
    'image': {
      'desc': "",
      'src': "./images/budget.jpg"
    },
    'intro': "View App",
    'comment': "item9 hov"
  },
  {
    'title': "(G)Etsy",
    'href': "http://s3.amazonaws.com/etsypics/etsy1.png",
    'desc': "This project was a homework assignment that is intended to be a mock-up of the Etsy website.  It represents a learning point where I combined SCSS, HTML, React, Backbone and an API request to add and then style content.",
    'image': {
      'desc': "",
      'src': "./images/etsy.jpg"
    },
    'intro': "View App",
    'comment': "item10 hov"
  }
];

ReactDOM.render(<Portfolio work={myWork}/>, document.getElementById('work'));
