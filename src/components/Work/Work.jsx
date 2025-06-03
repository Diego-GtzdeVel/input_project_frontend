import { useEffect, useState } from "react";
import unsplashApi from "../../../utils/UnsplashApi";

function Work() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);
    unsplashApi.fetchWorkImages()
      .then((imgs) => {
        setImages(imgs);
      })
      .catch((err) => {
        console.error(err);
        setImages([]);
      })
      .finally(() => setLoading(false));
  }, []);

    return (
        <div className="work">
            <h1 className="work__heading">OUR WORK</h1>
            <div className="work__content">
                <div className="work__project">
                <img className="work__project-image" src="../../images/Booster Logo.png" alt="Project-001" />
                <h2 className="work__project-title">BOOSTER MOTORSPORT</h2>
                <p className="work__project-description">Branding project for "Booster Motorsport," a clothing brand inspired by motorsports and the love of cars, a design inspired by the automotive industry and the great motorsports teams.</p>
            </div>
            <div className="work__grid">
                {loading ? (
                <i className="circle-preloader"></i>
                ) : (
                images.map((img) => (
                    <div key={img.id} className="work__grid-project">
                    <img
                        className="work__grid-project-image"
                        src={img.url}
                        alt={img.title}
                    />
                    <p className="work__grid-project-text">{img.title}</p>
                    </div>
                ))
                )}
            </div>
            </div>
        </div>
    );
};

export default Work;