import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "../App";
require("cross-fetch/polyfill");

describe("User Posts", () => {
  test("displays user posts", async () => {
    jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
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
              title:
                "Post 3",
              body:
                "Post 3 body",
            },
            {
              userId: 1,
              id: 4,
              title: "Post 4",
              body:
                "Post 4 body",
            },
            {
              userId: 1,
              id: 5,
              title: "Post 5",
              body:
                "Post 5 body",
            },
            {
              userId: 1,
              id: 6,
              title: "Post 6",
              body:
                "Post 6 body",
            },
            {
              userId: 1,
              id: 7,
              title: "Post 7",
              body:
                "Post 7 body",
            },
            {
              userId: 1,
              id: 8,
              title: "Post 8",
              body:
                "Post 8 body",
            },
            {
              userId: 1,
              id: 9,
              title: "Post 9",
              body:
                "Post 9 body",
            },
            {
              userId: 1,
              id: 10,
              title: "Post 10",
              body:
                "Post 10 body",
            },
          ]),
      });
    });
    await act(async () => {
      render(<App />);
    });

    const firstPost = await screen.findByText(
      /post 1 body/i
    );
    expect(firstPost).toBeDefined();
  });
});
