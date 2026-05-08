import "./NewsUpdae.css";
import News01 from "../../assets/news-image-01.jpg";
import News02 from "../../assets/news-image-02.jpg";
import News03 from "../../assets/news-image-03.jpg";

const News = () => {
  return (
    <>
      <div className=" bg-grey">
        <section className="">
          <div className="section-3">
            <h2>Product news and updates</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consequat.
            </p>
          </div>
          <div className="d-flex-row card-news">
            <div className="    card-news-content">
              <div>
                <img src={News01} />
                <h2>Robust Flow</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
            <div className="d-flex-col    card-news-content">
              <div>
                <img src={News02} />
                <h2>Robust Flow</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
            <div className="d-flex-col    card-news-content">
              <div>
                <img src={News03} />
                <h2>Robust Flow</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default News;
