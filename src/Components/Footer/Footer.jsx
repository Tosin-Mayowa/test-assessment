import Logo from "../../Asset/logo.png";
import './Footer.css'
import Facebook from '../../Asset/facebk.png'
import Instagram from "../../Asset/insta.png";
import LinkedIn from "../../Asset/linkedIn.png";
import Twitter from "../../Asset/twitter.png";
export default ()=>{

    return (
      <>
        <div id="footer">
          <img src={Logo} alt="Logo_image" className="footer_logo" />

          <div className="footer_content_bag">
            <div className="company">
              <p className="test-1">Company</p>
              <div className="sub_company">
                <p className="test_legal-1">About Us</p>
                <p className="test_legal-1">Store</p>
                <p className="test_legal-1">Blog</p>
              </div>
            </div>
            {/*end company */}
            <div className="legal">
              <p className="test-1">About Us</p>
              <div className="sub_legal">
                <p className="test_legal-1">Term and Conditions</p>
                <p className="test_legal-1">Privacy Policy</p>
                <p className="test_legal-1">Shipping Policy</p>
              </div>
              <p className="test_legal-1">Returns & Refunds</p>
              <p className="test_legal-1">Cookies</p>
            </div>
            {/*end legal */}
            <div className="need_help">
              <p className="test-1">Need Help?</p>
              <div className="sub_need_help">
                <p className="test_legal-1">Track Order</p>
                <p className="test_legal-1">FAQ's</p>
              </div>
            </div>
            {/*end need_help */}
            <div className="contact">
              <p className="test-1">Contact Us</p>
              <div className="sub_contact">
                <p className="test_legal-1">support@rareeatfresh.com</p>
                <p className="test_legal-1">020 7205 4031</p>
                <p className="test_legal-1">
                  International House, 64 Nile Street, London, N1 7SR, United
                  Kingdom
                </p>
                </div>
                <div className="contact_social">
                  <img src={Facebook} alt="" className="contact_social_img" />
                  <img src={Instagram} alt="" className="contact_social_img" />
                  <img src={Twitter} alt="" className="contact_social_img" />
                  <img src={LinkedIn} alt="" className="contact_social_img" />
                </div>
              
            </div>
            
          </div>
          <div className="line"></div>
        </div>
      </>
    );
}