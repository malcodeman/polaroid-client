import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Post from "../components/Post";
import PostLoading from "../components/PostLoading";

const comments = [
  { id: 1, body: "comment 1", user: { username: "admin" } },
  { id: 2, body: "comment 2", user: { username: "test" } }
];

test("Post matches snapshot", () => {
  const component = renderer.create(
    <MemoryRouter>
      <Post comments={comments} />
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
