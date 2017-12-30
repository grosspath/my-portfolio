import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Ravenous",
    'href': " http://ravenous-portfolio.s3-website-us-east-1.amazonaws.com",
    'desc': "This is from the codecademy course on building apps from scratch.  I used the create react app and I have hosted the app in an AWS S3 bucket.  It is intended to be a Yelp clone.",
    'image': {
      'desc': "",
      'src': "./images/ravenous.png",
      'comment': ""
    }
  },
  {
    'title': "Weather App",
    'href': "https://s3.amazonaws.com/weatherapppics/weather3.png",
    'desc': "For this project, the inspiration came from a tutorial produced by Udemy which had the entire project rendered from the index.html page. I refactored it to use React and React-router.",
    'image': {
      'desc': "",
      'src': "./images/weatherApp_recent.png",
      'comment': ""
    }
  },
  {
    'title': "(G)Etsy",
    'href': " https://s3.amazonaws.com/etsypics/etsy1.png",
    'desc': "This project was a homework assignment that is intended to be a mock-up of the Etsy website.  It represents a learning point where I combined SCSS, HTML, React, Backbone and an API request to add content.",
    'image': {
      'desc': "",
      'src': "./images/work-exam21.png",
      'comment': ""
    }
  },
  {
    'title': "Java Code",
    'href': "https://github.com/grosspath/java",
    'desc': "In development",
    'desc': "These are examples of files I created using the tutorial from HackerRank's 'Thirty Days of Code'.  My experience learning java taught me the beauty of object-oriented programming which has enhanced my understanding of javascript. The code for the java files can be found in my github repo.",
    'image': {
      'desc': "",
      'src': "./images/java_files.png",
      'comment': ""
    }
  },
  {
    'title': "Grab Bag",
    'href': "https://s3.amazonaws.com/grabbagtictactoe/tictactoe.png",
    'desc': "These files represent a hodgepodge of projects that range from homework assignments to tutorials I took on-line.  The bulk of my Iron Yard training involved styling with HTML and CSS for the first four weeks.  The remainder of the time was spent on Javascript, jQuery, Backbone and React.  The code can be found in my github repos.",
    'image': {
      'desc': "",
      'src': "./images/styling.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
