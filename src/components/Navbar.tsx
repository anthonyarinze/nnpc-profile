import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      text: "Blossom Ozurumba",
      href: "/Blossom",
      component: "Blossom",
      linkedin: "https://www.linkedin.com/in/blossomozurumba",
      email: "Blossom.Ozurumba@nnpcgroup.com",
      phone: "+2348033413213",
    },
    {
      text: "Muniru Mai",
      href: "/Muniru",
      component: "Muniru",
      linkedin: "https://www.linkedin.com/in/muniru-mai-68691319",
      email: "Muniru.Mai@nnpcgroup.com",
      phone: "+2348033499226",
    },
    {
      text: "Rasheed O. Ojulari",
      href: "/Rasheed",
      component: "Rasheed",
      linkedin: "https://www.linkedin.com/in/olushola-ojulari-9a669a135",
      email: "Olushola.Ojulari@nnpcgroup.com",
      phone: "+2347034008095",
    },
    {
      text: "Olatomiwa James",
      href: "/Olatomiwa",
      component: "Olatomiwa",
      linkedin: "https://www.linkedin.com/in/olatomiwa-james-1644a430",
      email: "Olaniyi.Olatomiwa@nnpcgroup.com",
      phone: "+2348038745696",
    },
    {
      text: "Mudi Abubakar",
      href: "/Mudi",
      component: "Mudi",
      linkedin: "",
      email: "Abubakar.Mudi@nnpcgroup.com",
      phone: "+2348131760592",
    },
    {
      text: "Gesiyi T. Amakoromo",
      href: "/Gesiyi",
      component: "Gesiyi",
      linkedin: "https://www.linkedin.com/in/gesiyi-amakoromo-a4a01b21",
      email: "Gesiyi.Amakoromo@nnpcgroup.com",
      phone: "+2348033365663",
    },
    {
      text: "Sadiq Ahmad",
      href: "/Sadiq",
      component: "Sadiq",
      linkedin: "https://www.linkedin.com/in/sadiq-salihijo-ahmad-7a334010a",
      email: "Sadiq.Ahmad@nnpcgroup.com",
      phone: "+2348079185822",
    },
    {
      text: "Emmanuel Okwudili ",
      href: "/Emmanuel",
      component: "Emmanuel",
      linkedin: "https://www.linkedin.com/in/emmanuel-o-8979b71a0",
      email: "Emmanuel.Okwudili@nnpcgroup.com",
      phone: "+2347060500646",
    },
  ];

  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-bold text-slate-700">
      {/* <Link
        to="/"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Home
      </Link>
      <a
        href="politics"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Politics
      </a>
      <a
        href="economy"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Economy
      </a>
      <a
        href="music"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Music
      </a>
      <a
        href="tech"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Tech
      </a> */}
      {navItems.map(({ text, href }, index) => (
        <Link
          to={href}
          key={index}
          className="block md:inline-block px-3 mx-20 py-2 rounded-m focus:text-black focus:border-b-4 focus:border-blue-500"
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
