import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Tabs";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Tabs Component", () => {
  const tabsProp = [
    { name: "First tab", content: "Lorem ipsum" },
    { name: "Second tab", content: "Laboriosam exercitationem" },
    { name: "Third tab", content: "Fugit, sapiente aspernatur" },
  ];

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders empty given no tabs", () => {
    const wrapper = shallow(<Tabs />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders the first tab by default", () => {
    const wrapper = shallow(<Tabs />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it("closes the first tab and opens any clicked tab", () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    wrapper.find("button").at(1).simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
