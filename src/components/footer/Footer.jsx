import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="section-3 text-white">
          <div>
            <h2>Simple, transparent pricing</h2>
            <p>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus in
              ornare.
            </p>
            <h4>How many users do you have?</h4>
          </div>
        </div>
        <div className="d-flex-row card-news footer-content-start ">
          <div className="d-flex-col col-6    card-news-content bg-white footer">
            <div className="footer-content">
              <span class="currency">$</span>
              <span class="amount">27</span>
              <span class="per">/m</span>
              <p>Lorem ipsum is a common text</p>
            </div>
            <div class="divider small"></div>
            <h4>What’s included</h4>
            <div class="divider"></div>
            <ul>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
            </ul>
            <button className="btn">Start Free Trial</button>
          </div>
          <div className="d-flex-col col-6   card-news-content bg-white footer">
            <div className="footer-content">
              <span class="currency">$</span>
              <span class="amount">27</span>
              <span class="per">/m</span>
              <p>Lorem ipsum is a common text</p>
            </div>
            <div class="divider small"></div>
            <h4>What’s included</h4>
            <div class="divider"></div>
            <ul>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
            </ul>
            <button className="btn">Start Free Trial</button>
          </div>
          <div className="d-flex-col col-6   card-news-content bg-white footer">
            <div className="footer-content">
              <span class="currency">$</span>
              <span class="amount">27</span>
              <span class="per">/m</span>
              <p>Lorem ipsum is a common text</p>
            </div>
            <div class="divider small"></div>
            <h4>What’s included</h4>
            <div class="divider"></div>
            <ul>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
              <li>Excepteur sint occaecat velit</li>
              <div class="divider"></div>
            </ul>
            <button className="btn">Start Free Trial</button>
          </div>
        </div>
        <div className="margin-top">
          <div className="d-flex-row sec-5">
            <h3>For previewing layouts and visual? Subscribe</h3>
            <input type="text" placeholder="Your Email"></input>
          </div>
        </div>
        <div className="margin-top">
          <div className="d-flex-row section-6-main">
            <div className="d-flex-col section-6">
              <img src={logo} alt="logo" />
              <p className="text-white">© 2020 Tidy, all rights reserved</p>
            </div>
            <div className="d-flex-col text-white">
              <div className="d-flex-row social-icon">
                <a>FB</a>
                <a>TW</a>
                <a>Inst</a>
              </div>
              <div className="d-flex-row text-white social-icon-text">
                <a className="">Contact</a>
                <a className="">About</a>
                <a className="">FAQs</a>
                <a className="">Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
