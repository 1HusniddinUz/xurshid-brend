// Navbar.jsx
import { useState } from "react";
import { Menu, Clock, MapPin, Globe, X } from "lucide-react";
import "../../assets/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang] = useState("RUS");

    return (
        <>
            <nav className="mall-navbar">
                {/* LEFT SIDE */}
                <div className="navbar-left">
                    <button className="icon-btn" onClick={() => setMenuOpen(true)}>
                        <Menu size={20} />
                    </button>
                    <div className="info">
                        <Clock size={18} /> Сегодня до 23:00
                    </div>
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
                        <MapPin size={18} /> Как добраться
                    </button>
                    <div className="lang-switch">
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
                    </div>
                </div>
            </nav>

            {/* SIDE MENU */}
            <div className={`side-menu ${menuOpen ? "open" : ""}`}>
                <div className="side-menu-header">
                    <h2>Меню</h2>
                    <button className="icon-btn close" onClick={() => setMenuOpen(false)}>
                        <X size={20} />
                    </button>
                </div>
                <ul>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Услуги</li>
                    <li>Новости</li>
                    <li>Контакты</li>
                </ul>
            </div>

            {/* OVERLAY */}
            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
        </>
    );
};

export default Navbar;
