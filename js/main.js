import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Work Example",
    'image': {
      'desc': "example 1",
      'src': "/imgs/001lighticons-23.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example 2",
      'src': "imgs/clean_marine.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example 3",
      'src': "",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example 4",
      'src': "",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example 4",
      'src': "",
      'comment': ""
    }
  },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
