import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About component", () => {
  test("renders section with heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all three paragraphs", () => {
    render(<About />);

    const paragraphOne = screen.getByText(
      /I'm a backend-focused Web Developer/i,
    );
    const paragraphTwo = screen.getByText(/I specialize in designing systems/i);
    const paragraphThree = screen.getByText(
      /I love creating and maintaining open-source software/i,
    );

    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
    expect(paragraphThree).toBeInTheDocument();
  });
});
