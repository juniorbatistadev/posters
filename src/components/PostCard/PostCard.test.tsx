import React from "react";
import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";

test("renders PostCard", () => {
  const props = { id: 1, title: "title", body: "body", userId: 1 };
  render(<PostCard {...props} />);
  const linkElement = screen.getByText(/title/i);
  expect(linkElement).toBeInTheDocument();
});
