import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Weather App",
    'href': "https://s3.amazonaws.com/p.weather-app/index.html",
    'desc': "For this project, the inspiration came from a tutorial produced Udemy which had the information rendered from the index.html page and refactored it to use React and React-router. The takeway from this project is that while I was learning java I fell in love with object-oriented programming and wanted to continue that ideology in my application development.  Once the app was finished I hosted the content in an S3 bucket with AWS.  The build is handled by code pipeline and it is deployed by a lambda function.",
    'image': {
      'desc': "",
      'src': "../images/weatherApp_recent.png",
      'comment': ""
    }
  },
  {
    'title': "Etsy Clone",
    'href': "https://example.com",
    'desc': "In development",
    // 'desc': "For this project I used a Create React backbone with the content from the Udemy tutorial which was built using mainly HTML.  I recreated the DOM elements as re-usable React components, then made the styling and the functionality similar to the Weather App found on the iphone.  The takeway from this project is that while I was learning java I fell in love with object-oriented programming and wanted to continue that ideology in my application development.  Once the app was finished I hosted the content in an S3 bucket with AWS.",
    'image': {
      'desc': "",
      'src': "../images/work-exam21.png",
      'comment': ""
    }
  },
  {
    'title': "Java Code",
    'href': "https://example.com",
    'desc': "In development",
    'desc': "These are examples of files I created using the tutorial from HackerRank's tutorial 'Thirty Days of Code'.  My experience learning java taught me the beauty of object-oriented programming which has enhanced my understanding of javascript.",
    'image': {
      'desc': "",
      'src': "../images/java_files.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "In development",
    // 'desc': "For this project I used a Create React backbone with the content from the Udemy tutorial which was built using mainly HTML.  I recreated the DOM elements as re-usable React components, then made the styling and the functionality similar to the Weather App found on the iphone.  The takeway from this project is that while I was learning java I fell in love with object-oriented programming and wanted to continue that ideology in my application development.  Once the app was finished I hosted the content in an S3 bucket with AWS.",
    'image': {
      'desc': "",
      'src': "",
      'comment': ""
    }
  },
  {
    'title': "Web Design",
    'href': "https://ircsservices.org",
    'desc': "This is an example of a squarespace site I put together for a local non-profit. The CEO granted me permission to share my work (hopefully giving his organization some additional exposure). Although we had design disagreements (i.e., the quality of the logo and his desire to have the logo featured at the top of every page), I thought the site worthy of including in my portfolio because it highlights my grasp of template utilization using squarespace and manipulating the various CSS concepts such as parallax scrolling in addition to the overall functionality of the site. If you follow the link you will be re-directed to the site.",
    'image': {
      'desc': "",
      'src': "../images/work-example-ircs.png",
      'comment': ""
    }
  },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
