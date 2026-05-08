import './Header.css'
import logo from '../../assets/logo.svg'
import videoplaceholder from '../../assets/video-placeholder.jpg'


const Header = () => {
  return (
    <>
        <header>
          <div className=" section-1">
            <div className="header-content">
              <img src={logo} alt="logo" />
              <div>
                <a className="text-white" href="">
                  Secondary Page
                </a>
                <button className="btn sign-up">Sign Up</button>
              </div>
            </div>
            <div className="main">
              <div className="section-2 d-flex-row">
                <div className="col-6 txt-white">
                  <div className="content-main">
                    <h1>Landing template for startups</h1>
                    <p>
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                    <div className="d-flex-row">
                      <button className="btn col-6 btn-pricing">
                        Pricing and Plans
                      </button>
                      <button className="bg-black btn-2">Learn More</button>
                    </div>
                  </div>
                </div>
                <div className="col-6 image-sec-2">
                  <img src={videoplaceholder} alt="ws" />           
                </div>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header
