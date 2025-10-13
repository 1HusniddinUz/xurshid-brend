// Navbar.jsx
import { useState } from "react";
import { Menu, Clock, MapPin, Globe, X } from "lucide-react";
import "../../assets/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="mall-navbar" id="Navbar">
                {/* LEFT SIDE */}
                <div className="navbar-left">
                    <button className="icon-btn" onClick={() => setMenuOpen(true)}>
                        <Menu size={20} />
                    </button>
                </div>

                {/* LOGO CENTER */}
                <div className="navbar-logo">
                    <h1>
                        XURSHID <br />
                        <span>BREND</span>
                    </h1>
                </div>

                {/* RIGHT SIDE */}
                <div className="navbar-right">
                    <button className="btn outlined">
                        <a href="https://maps.app.goo.gl/HGqWzMWMzATutpmG7" target="_blank" rel="noopener"><MapPin size={18} />Yo'nalishni ko'rsatish</a>
                    </button>
                    {/*<div className="lang-switch">
                        <Globe size={18} />
                        <select
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                            className="lang-select"
                        >
                            <option value="RUS">RUS</option>
                            <option value="UZB">UZB</option>
                            <option value="ENG">ENG</option>
                        </select>
                    </div> */}
                </div>
            </nav>

            {/* SIDE MENU */}
            <div className={`side-menu ${menuOpen ? "open" : ""}`}>
                <div className="side-menu-header">
                    <h2>Menu</h2>
                    <button className="icon-btn close" onClick={() => setMenuOpen(false)}>
                        <X size={20} />
                    </button>
                </div>
                <ul>
                    <li><a href="#Header">Bosh sahifa</a></li>
                    <li><a href="#ProductCard">Mahsulotlar</a></li>
                    <li><a href="#ProductInfo">Biz haqimizda</a></li>
                    <li><a href="#ContactForm">Aloqa</a></li>
                </ul>
            </div>

            {/* OVERLAY */}
            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
        </>
    );
};

export default Navbar;