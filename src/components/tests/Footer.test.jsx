import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer component", () => {
  test("renders copyright text with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(
      `© ${currentYear} Aquie — Web Developer`,
    );
    expect(copyright).toBeInTheDocument();
  });

  test('renders "Built with React & Tailwind CSS" text', () => {
    render(<Footer />);
    const techText = screen.getByText(/built with react & tailwind css/i);
    expect(techText).toBeInTheDocument();
  });
});
