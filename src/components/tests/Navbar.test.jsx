import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar component", () => {
  test("renders site title", () => {
    render(<Navbar />);
    expect(screen.getByText(".aquie")).toBeInTheDocument();
  });

  test("renders all navigation links", () => {
    render(<Navbar />);

    const navItems = [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ];

    navItems.forEach(({ label, href }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    });
  });

  test("has correct number of navigation links", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });
});
