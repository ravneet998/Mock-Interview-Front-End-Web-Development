import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "../App";
require("cross-fetch/polyfill");

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "Post 1",
    body:
      "Post 1 body",
  },
  {
    userId: 1,
    id: 2,
    title: "Post 2",
    body:
      "Post 2 body",
  },
  {
    userId: 1,
    id: 3,
    title: "Post 3",
    body:
      "Post 3 body",
  },
];

const comments = [
  {
    postId: 1,
    id: 1,
    name: "Comment 1",
    email: "Eliseo@gardner.biz",
    body:
      "Comment 1 body",
  },
  {
    postId: 1,
    id: 2,
    name: "Comment 2",
    email: "Jayne_Kuhic@sydney.com",
    body:
      "Comment 2 body",
  },
  {
    postId: 1,
    id: 3,
    name: "Comment 3",
    email: "Nikita@garfield.biz",
    body:
      "Comment 3 body",
  },
  {
    postId: 1,
    id: 4,
    name: "Comment 4",
    email: "Lew@alysha.tv",
    body:
      "Comment 4 body",
  },
  {
    postId: 1,
    id: 5,
    name: "Comment 5",
    email: "Hayden@althea.biz",
    body:
      "Comment 5 body",
  },
];

describe("User Comments", () => {
  afterEach(() => jest.resetAllMocks());

  test("displays comments for first post when the first post is clicked", async () => {
    const mockFetch = jest
      .spyOn(global, "fetch")
      .mockImplementationOnce((url) => {
        return Promise.resolve({
          json: () => {
            if (url.endsWith("userId=1")) {
              return Promise.resolve(posts);
            }

            if (url.endsWith("comments")) {
              return Promise.resolve(comments);
            }

            return Promise.resolve([]);
          },
        });
      });
    
    await act(async () => {
      render(<App />);
    });
    const firstPost = await screen.findByText(
      /post 1 body/i
    );

    await act(async () => {
      firstPost.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    const firstPostComments = await screen.findByText(
      /Eliseo@gardner.biz/i
    );
    expect(firstPostComments).toBeDefined();
    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
  });
});
