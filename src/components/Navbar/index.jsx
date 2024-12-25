import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";  // Pastikan CSS Bootstrap diimpor
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Pastikan JavaScript Bootstrap diimpor

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      navigate(`/search/${searchInput.trim()}`);
    }
  };

  const links = [
    { title: "Indonesia", path: "/" },
    { title: "Programming", path: "/programming" },
    { title: "COVID-19", path: "/covid-19" },
    { title: "SAVED", path: "/saved" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand text-warning" to="/">
          NewsApp
        </NavLink>
        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.title}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-success" : "nav-link text-danger"
                  }
                  to={link.path}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Search Form */}
          <form
            className="d-flex mt-2 mt-lg-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cari berita"
              aria-label="Search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={handleSearch}
            >
              Cari
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
