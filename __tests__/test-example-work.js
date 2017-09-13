import React from 'react';
import {shallow} from 'enzyme';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';

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
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);

  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
    expect(images.node.props.src).toEqual(myWork[1].image.src);
  });
});
