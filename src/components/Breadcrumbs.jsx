import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="px-10 my-10 flex text-2xl">
      <Link to="/" className="hover:text-sky-600">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const label = value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <span key={to} className="flex items-center gap-1">
            <ChevronRight />
            <Link to={to} className="hover:text-sky-600">
              {label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
