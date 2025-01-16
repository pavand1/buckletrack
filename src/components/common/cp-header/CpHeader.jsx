import { useState, useEffect } from "react";
import styles from "./cpHeader.module.scss"; // Import CSS Module
import mockMenuData from "./CpHeader_data"; // Import the mock data
import { Link, useNavigate } from "react-router-dom";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const accountURL = import.meta.env.VITE_ACCOUNT_URL;
const rateCheckURL = import.meta.env.VITE_RATE_CHECK_URL;
const trackOrderURL = import.meta.env.VITE_TRACK_ORDER_URL;

const CpHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuRight, setIsMenuRight] = useState(false); // New state to track menu alignment
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  //const location = useLocation();

  const handleScroll = () => {
    setIsMenuRight(window.scrollY > 300);
    if (window.scrollY < 300) {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("Menu Open State:", !isMenuOpen);
  };

  // Toggle the dropdown menu for the respective item
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Handle menu click events based on route name
  const handleMenuClick = (index, route) => {
    setMenuOpen(false);
    setActiveIndex(index);
    if (route.name === "Account") {
      window.open(accountURL, "_blank");
    }
    if (route.name === "Pricing") {
      window.open(rateCheckURL, "_blank");
    }
    if (route.name === "Track Order") {
      window.open(trackOrderURL, "_blank");
    }
  };

  const scaleFactor = Math.max(1 - scrollY * 0.0015, 0.5);
  const width = Math.max(550 - scrollY * 1.5, 200);
  const height = Math.max(200 - scrollY * 1.5, 60);
  console.log(scrollY);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {scrollY > 150 || window.innerWidth < 767 ? (
        <div
          className={styles.mobileLogo}
          style={{
            position: "absolute",
            width: `12%`,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            className="bt-logo"
            src="../../images/Home/Buckle Track Option.svg"
            alt=""
          />
        </div>
      ) : (
        <div
          className={styles.headerLogo}
          style={{
            transform: `translateY(${-(scrollY * 0.3)}px) translateX(${-(
              scrollY * 0.3
            )}px) scale(${scaleFactor})`,

            width: `${width}px`,
            height: `${height}px`,
          }}
          onClick={() => navigate("/")}
        >
          <img src="../../images/Home/Buckle Track Option.svg" alt="" />
        </div>
      )}
      <div
        className={`${styles.menuList} ${isMenuRight ? styles.rightAlign : ""}`} // Apply rightAlign class when scrolled
      >
        <div
          className={`${
            scrollY > 150 || window.innerWidth < 767
              ? styles.logoPlaceholder
              : ""
          }`}
        ></div>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            {mockMenuData.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.dropdown
                    ? `${styles.dropdown} ${
                        activeDropdown === index ? styles.active : ""
                      }`
                    : ""
                } ${index === activeIndex ? styles.active : ""}`}
                onClick={() => {
                  !item.dropdown && handleMenuClick(index, item);
                }}
              >
                <Link
                  to={item.route}
                  onClick={
                    item.dropdown
                      ? (e) => {
                          e.preventDefault();
                          toggleDropdown(index);
                        }
                      : null
                  }
                >
                  {item.name}{" "}
                  {item.dropdown ? (
                    activeDropdown === index ? (
                      <UpOutlined />
                    ) : (
                      <DownOutlined />
                    )
                  ) : null}
                </Link>
                {item.dropdown && activeDropdown === index && (
                  <ul className={styles.dropdownMenu}>
                    {item.dropdown.map((dropdownItem, idx) => (
                      <li
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                        }}
                      >
                        <Link to={item.route}>{dropdownItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actionItems}>
          <div className={styles.social}>
            <div
              className={styles.circle}
              onClick={(e) => {
                window.open("https://instagram.com", "_blank");
                e.preventDefault();
              }}
            >
              <img src="../../images/header/instagram.svg" alt="" />
            </div>
            <div
              className={styles.circle}
              onClick={(e) => {
                window.open("https://facebook.com", "_blank");
                e.preventDefault();
              }}
            >
              <img src="../../images/header/facebook.svg" alt="" />
            </div>
            <div
              className={styles.circle}
              onClick={(e) => {
                window.open("https://twitter.com", "_blank");
                e.preventDefault();
              }}
            >
              <img src="../../images/header/twitter.svg" alt="" />
            </div>
            <div
              className={styles.circle}
              onClick={(e) => {
                window.open("https://linkedin.com", "_blank");
                e.preventDefault();
              }}
            >
              <img src="../../images/header/linkedin.svg" alt="" />
            </div>
          </div>
          <div>
            <button
              className={styles.loginButton}
              onClick={(e) => {
                window.open(accountURL, "_blank");
                e.preventDefault();
              }}
            >
              Login
            </button>
            <button
              className={styles.signupButton}
              onClick={(e) => {
                window.open(accountURL, "_blank");
                e.preventDefault();
              }}
            >
              Sign up for Free
            </button>
          </div>
          <div className={styles.menuToggle} onClick={toggleMenu}>
            {isMenuOpen ? (
              <div className={styles.closeButton}>
                &times; {/* Close icon */}
              </div>
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CpHeader;
