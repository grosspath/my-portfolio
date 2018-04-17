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
    'href': "http://s3.amazonaws.com/weatherapppics/weather3.png",
    'desc': "This single page application is a full-stack app with a react front-end and a node backend.  The server makes the DarkSky API request.  I use the google API for geolocation.  I used the SkyCons plug-in for the animated weather icons.",
    'image': {
      'desc': "",
      'src': "./images/Weather_App.png",
      'comment': ""
    }
  },
  {
    'title': "(G)Etsy",
    'href': " http://s3.amazonaws.com/etsypics/etsy1.png",
    'desc': "This project was a homework assignment that is intended to be a mock-up of the Etsy website.  It represents a learning point where I combined SCSS, HTML, React, Backbone and an API request to add and then style content.",
    'image': {
      'desc': "",
      'src': "./images/work-exam21.png",
      'comment': ""
    }
  },
  {
    'title': "Pomodoro Clock",
    'href': " http://s3.amazonaws.com/etsypics/etsy1.png",
    'desc': "An Iron Yard homework assignment.  I like to look back on it to remind myself how far I have come.  I like to compare the original code and styling to what is developed using the creat-react module. It was written with pure javascript.",
    'image': {
      'desc': "",
      'src': "./images/pomodoro.png",
      'comment': ""
    }
  },
  {
    'title': "Oyster API",
    'href': "http://s3.amazonaws.com/grabbagtictactoe/tictactoe.png",
    'desc': "This one is for the oyster lovers out there.  I have built a CRUD app API to find all of the types of oysters served in the low-country",
    'image': {
      'desc': "",
      'src': "./images/oyster.jpg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('work'));
