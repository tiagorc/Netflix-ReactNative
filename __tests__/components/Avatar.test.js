import React from "react";
import Avatar from "../../components/Avatar";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Avatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
