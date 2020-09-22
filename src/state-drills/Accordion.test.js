import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Accordion from "./Accordion";

const sectionsProp = [
  { title: "Section 1", content: "Lorem ipsum dolor" },
  { tilte: "Section 2", content: "Cupiditate tenetur aliquam" },
  { title: "Section 3", content: "Animi amet cumque sint" },
];

describe("Accordion Component", () => {
  it("renders empty given no Accordion without errors", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders no sections by default", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("opens any clicked section", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    wrapper.find("button").at(1).simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("only opens one section at a time", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    wrapper.find("button").at(1).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
