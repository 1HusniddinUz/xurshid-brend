import "../../assets/ProductCard.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";

const ProductCard = () => {
    return (
        <section id="ProductCard">
            <div className="container">
                <h3 className="section-title">Matolar kolleksiyasi </h3>

                <div className="CardBig_box">

                    <div className="card_box">
                        <div className="image_wrap">
                            <img src={img1} alt="Necklaces" />
                            <button>BLUE + SWAROVSKY</button>
                        </div>
                    </div>

                    <div className="card_box">
                        <div className="image_wrap">
                            <img src={img2} alt="Earrings" />
                            <button>RED + SWAROVSKY</button>
                        </div>
                    </div>

                    <div className="card_box">
                        <div className="image_wrap">
                            <img src={img3} alt="Wedding Rings" />
                            <button>IZUMRUD + SWAROVSKY</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductCard;
