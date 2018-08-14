import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Ravenous",
    'href': " http://ravenous-portfolio.s3-website-us-east-1.amazonaws.com",
    'desc': "Using the Yelp API I built a simple app which fetches the data and renders it to a simple UI. ",
    'image': {
      'desc': "",
      'src': "./images/ravenous.png",
      'comment': ""
    }
  },
  {
    'title': "BudgetApp",
    'href': "http://budgetapp.s3-website.us-east-2.amazonaws.com",
    'desc': "Vanilla javascript featuring constructors and closures.",
    'image': {
      'desc': "",
      'src': "./images/BudgetApp.png",
      'comment': ""
    },
  {
    'title': "Spotify App",
    'href': "http://jgjamming.s3-website-us-east-1.amazonaws.com",
    'desc': "Working with the spotify API a user can use this app and create a playlist in their spotify account.  Again I used the create react app build and hosted it in an S3 bucket in the AWS cloud.  My tech stack is javascript, React, CSS, and HTML.",
    'image': {
      'desc': "",
      'src': "./images/Jammming.png",
      'comment': ""
    }
  },{
    'title': "Full-Stack Weather App",
    'href': "http://weather-portfolio.s3-website-us-east-1.amazonaws.com",
    'desc': "This single page application is a full-stack app with a react front-end and a node backend.  I can only demonstrate limited functionality due to the complexity of the application versus the manner in which it is being hosted.  The server makes the DarkSky API request.  I used the google API for geolocation.  I used the SkyCons plug-in for the animated weather icons.  This is one where I could use some help from the dev community.  I have scoured the web looking for a way to host a dynamic full-stack app in an S3 bucket utilizing a lambda function.  If anyone has ideas on how to accomplish this without using another technology such as LightSail I would love to hear your thoughts.  Another option would be to host this app on Heroku and point the href to that url.",
    'image': {
      'desc': "",
      'src': "./images/Weather_App.png",
      'comment': ""
    }
  },
  {
    'title': "(G)Etsy",
    'href': "http://s3.amazonaws.com/etsypics/etsy1.png",
    'desc': "This project was a homework assignment that is intended to be a mock-up of the Etsy website.  It represents a learning point where I combined SCSS, HTML, React, Backbone and an API request to add and then style content.",
    'image': {
      'desc': "",
      'src': "./images/work-exam21.png",
      'comment': ""
    }
  },
  {
    'title': "Pomodoro Clock",
    'href': "http://pomodoro-portfolio.s3-website-us-east-1.amazonaws.com",
    'desc': "An Iron Yard homework assignment.  I like to look back on it to remind myself how far I have come.  I like to compare the original code and styling to what is developed using the creat-react module. It was originally written with pure javascript and you can see the original code on my github page assisgnment 16.",
    'image': {
      'desc': "",
      'src': "./images/pomodoro.png",
      'comment': ""
    }
  },
  {
    'title': "Oyster API",
    'href': "#",
    'desc': "This one is for the oyster lovers out there.  I am building a CRUD app API to find all of the types of oysters served in the low-country.  Please check back soon to see my progess.",
    'image': {
      'desc': "",
      'src': "./images/oyster.jpg",
      'comment': ""
  }
    },
    {
      'title': "YelpCamp",
      'href': "#",
      'desc': "I am building a CRUD node project with a mongodb database that demonstrates RESTful API calls. Please check back soon to see my progess.",
      'image': {
        'desc': "",
        'src': "./images/YelpCamp.png",
        'comment': ""
      }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('work'));
