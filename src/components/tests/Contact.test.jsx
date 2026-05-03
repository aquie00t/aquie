import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact component", () => {
  test("renders heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: /contact/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders contact text", () => {
    render(<Contact />);
    const paragraph = screen.getByText(
      /If you would like to talk to me about a project/i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  test("renders email link with correct href", () => {
    render(<Contact />);
    const emailLink = screen.getByRole("link", {
      name: /aquie00t@icloud.com/i,
    });
    expect(emailLink).toHaveAttribute("href", "mailto:aquie00t@icloud.com");
  });

  test("renders social links with correct hrefs", () => {
    render(<Contact />);

    const github = screen.getByRole("link", { name: /github/i });
    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    const twitter = screen.getByRole("link", { name: /twitter/i });

    expect(github).toHaveAttribute("href", "https://github.com/aquie00t");
    expect(linkedin).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com"),
    );
    expect(twitter).toHaveAttribute("href", "https://twitter.com/aquie00t");
  });
});
