const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between items-center p-6 border-b border-gray-800 gap-4 sm:gap-0">
      <div className="text-xl font-bold">.aquie</div>
      <ul className="flex gap-6 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-gray-400">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
