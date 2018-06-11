import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Post from "../components/Post";
import PostLoading from "../components/PostLoading";

test("Post matches snapshot", () => {
  const component = renderer.create(
    <MemoryRouter>
      <Post />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("PostLoading matches snapshot", () => {
  const component = renderer.create(<PostLoading />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
