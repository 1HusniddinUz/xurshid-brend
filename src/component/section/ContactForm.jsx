import "../../assets/ContactForm.css";
import logo from "../../assets/images/logo.png"
const ContactForm = () => {
    return (
        <div id="ContactForm">
            <div className="container">
                <div className="contactText">
                    <div className="contactInfo">
                        <h3>Bog'lanish uchun</h3>
                        <p>
                            Bosh menejer <span>Sharipova Dilnoza</span>
                        </p>
                        <p>
                            Phone <span>+998 (99) 123-45-67</span>
                        </p>
                        <p>
                           Email:
                            <span>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sharipovadilnoza@gmail.com&body=Assalomu%20alaykum"
                    target="_blank"
                    rel="noopener noreferrer"
                > sharipovadilnoza@gmail.com
                </a>
              </span>
                        </p>
                    </div>
                    <div className="contactSocialLink">
                        <div className="link_box">
                            <a
                                href="https://t.me/Khurshid_Kakhramonov"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-telegram" target="_blank"
                                   rel="noopener noreferrer"></i>
                            </a>
                            <a href="https://t.me/Khurshid_Kakhramonov" target="_blank"
                               rel="noopener noreferrer">
                                <button>TELEGRAM</button>
                            </a>
                        </div>
                        <div className="link_box">
                            <a
                                href="https://www.instagram.com/xushnozametraj"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.instagram.com/xushnozametraj"
                               target="_blank"
                               rel="noopener noreferrer">
                                <button>INSTAGRAM</button>
                            </a>
                        </div>
                        {/*<div className="link_box">*/}
                        {/*    <a href="https://uzum.uz/uz/shop/husansher" target="_blank"*/}
                        {/*       rel="noopener noreferrer">*/}
                        {/*        <i className="fa-brands fa-yandex"></i>*/}
                        {/*        <button>YANDEX MARKET</button>*/}
                        {/*    </a>*/}
                        {/*</div>*/}


                    </div>
                </div>
                <div className="contactLogo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="contactLocation">
                    <h3>Joylashuv</h3>
                    <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.55146678680578!2d64.43875920688576!3d39.81095143753254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500f3192a49b83%3A0xe871868d890d6134!2z4oCcU2l0b3JhaSBNb2hpIFhvc2HigJ0gc2FuYXRvcml5c2kgfCDQodCw0L3QsNGC0L7RgNC40LkgwqvQodC40YLQvtGA0LDQuCDQnNC-0YXQuCDQpdC-0YHQsMK7!5e0!3m2!1sru!2s!4v1759816684040!5m2!1sru!2s"
                            width="100%"
                            height="450"
                            style={{
                                border: "none",
                                borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="footerToTop"><a href="#Navbar"><i class="fa-solid fa-arrow-up"></i></a>
            </div>

        </div>
    );
};

export default ContactForm;