import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar(props) {
  const [searchInput, setSearchInput] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      navigate(`/search/${searchInput.trim()}`);
    }
  }

  const links = [
    {
      title: "Indonesia",
      path: "/",
    },
    {
      title: "Programming",
      path: "/programming",
    },
    {
      title: "COVID-19",
      path: "/covid-19",
    },
    {
      title: "SAVED",
      path: "/saved",
    },
  ];

  return (
    <section className={styles.navbar}>
      <section className={styles.linksContainer }>
          {
            links.map((l) => {
              return <NavLink className={((props) => {
                return props.isActive ? styles.activeLink : styles.link
              })} key={l.title} to={l.path} >
                {l.title}
              </NavLink>
            })
          }
      </section>
      <div>
        <input
          type="text"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          onClick={handleSearch}
          className={styles.searchBarBtn}
        >
          Cari berita
        </button>
      </div>
    </section>
  );
}

export { Navbar };
