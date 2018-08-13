import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import "jest-styled-components";

import Post from "../components/Post";
import PostLoading from "../components/PostLoading";

const testPost = {
  username: "test_username",
  profilePhotoURL:
    "https://instagram.fsjj1-1.fna.fbcdn.net/vp/f08e4b6b37fe1f96a606668534c898b9/5BBD97E2/t51.2885-15/e35/35132935_188808391837094_8704942949919621120_n.jpg",
  comments: [
    { id: 1, body: "comment 1", user: { username: "admin" } },
    { id: 2, body: "comment 2", user: { username: "test" } }
  ],
  liked: true,
  bookmarked: true,
  nameFirstLetter: "t",
  photoURL:
    "https://instagram.fprg2-1.fna.fbcdn.net/vp/28fd04be5b090942578954037710c8ab/5BCFD69E/t51.2885-15/e35/35273985_403106216853758_9170321326664056832_n.jpg",
  likesCount: 33,
  createdAt: "2010-08-04 06:20:40"
};

test("Post matches snapshot", () => {
  const component = renderer.create(
    <MemoryRouter>
      <Post
        createdAt={testPost.createdAt}
        likesCount={testPost.likesCount}
        bookmarked={testPost.bookmarked}
        photoURL={testPost.photoURL}
        liked={testPost.liked}
        username={testPost.username}
        profilePhotoURL={testPost.profilePhotoURL}
        comments={testPost.comments}
      />
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
