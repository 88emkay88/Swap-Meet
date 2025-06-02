import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ currentPage }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="px-10 my-10 flex items-center md:text-2xl">
      <Link to="/" className="hover:text-sky-600">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");

        // If it's the last segment, show 'current if provided
        const isLast = index === pathnames.length - 1;
        const label =
          isLast && currentPage
            ? currentPage
            : value.charAt(0).toLocaleUpperCase() + value.slice(1);

        return (
          <span key={to} className="flex items-center gap-1">
            <ChevronRight />
            {isLast ? (
              <span>{label}</span>
            ) : (
              <Link to={to} className="hover:text-sky-600">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
