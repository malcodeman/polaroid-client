import React from "react";
import renderer from "react-test-renderer";

import Modal from "../components/Modal";
import Posts from "../components/Posts";

test("Modal matches snapshot", () => {
  const component = renderer.create(<Modal />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Posts(no posts) matches snapshot", () => {
  const component = renderer.create(<Posts />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const posts = [
  {
    id: 1,
    photoURL:
      "https://instagram.fsjj1-1.fna.fbcdn.net/vp/d290920f9a938d426f6edd3bfdf3a4e0/5BAB4F61/t51.2885-15/e35/33630509_2122355564708396_6000352995101900800_n.jpg"
  },
  {
    id: 2,
    photoURL:
      "https://instagram.fsjj1-1.fna.fbcdn.net/vp/61faee47738a31b77346f3d524354d18/5BB89C6E/t51.2885-15/e35/33177999_204623263489562_6594454715688288256_n.jpg"
  }
];

test("Posts matches snapshot", () => {
  const component = renderer.create(<Posts posts={posts} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
