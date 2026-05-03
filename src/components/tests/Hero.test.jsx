import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero component", () => {
  test("renders main heading", () => {
    const headingText = "Hey, I'm Aquie.";
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      name: new RegExp(headingText, "i"),
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders description text", () => {
    const text =
      "Backend-focused Web Developer crafting fast, scalable systems — and clean UIs when needed.";
    render(<Hero />);
    const paragraph = screen.getByText(text);
    expect(paragraph).toBeInTheDocument();
  });

  test('renders "View Projects" link', () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /view projects/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#projects");
  });

  test("renders social links with correct hrefs", () => {
    render(<Hero />);
    const links = screen.getAllByRole("link");

    // Sosyal linkleri sırayla kontrol edelim (View Projects + 3 sosyal link = 4 link)
    expect(links.length).toBe(4);

    expect(links[1]).toHaveAttribute("href", "https://github.com/aquie00t");
    expect(links[2]).toHaveAttribute("href", "https://x.com/aquie00t");
    expect(links[3]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/irfan-s%C3%B6nmez%C4%B1%C5%9F%C4%B1kl%C4%B1-19372b334",
    );
  });
});
