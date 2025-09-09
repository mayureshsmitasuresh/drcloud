const Navbar = () => {
  const navbarMenu = [
    {
      id: 1,
      name: "Home",
      link: "",
    },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Contact", link: "contact" },
  ];
  return (
    <header className="fixed left-0 right-0 z-50 py-4 border-b shadow ">
      <nav className="flex justify-center items-center">
        {navbarMenu.map((item) => (
          <a
            className="uppercase font-semibold text-base text-center px-5 py-1 rounded-xl hover:bg-green-400 hover:shadow-md transition-all ease-in-out duration-200 "
            href={`#${item.link}`}
            key={item.id}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
