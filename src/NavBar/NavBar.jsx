import { useState } from "react";
import Link from "../components/Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";
const NavBar = () => {

    const [open,setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog/:postId", name: "Blog Post" },
  ];

  return (
    <nav className="text-black p-4 bg-yellow-200">
       <div className=" md:hidden " onClick={() => setOpen(!open)}>
        {
            open === true ? <AiOutlineCloseSquare  className="text-3xl"></AiOutlineCloseSquare> :<RiMenu2Fill className="text-3xl"></RiMenu2Fill>
        }
      
       </div>
      <ul className={`md:flex duration-1000  absolute md:static ${open ? 'top-14 left-0' : '-top-80' } bg-yellow-200 px-4 `}>
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
      
    </nav>
  );
};

export default NavBar;
