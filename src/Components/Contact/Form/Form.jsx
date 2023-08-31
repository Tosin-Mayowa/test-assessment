import './Form.css'

export default ()=>{
    return (
      <>
        <form action="">
          <div className="form_container">
            <div className="header_text">
              <p className="header_para">Get in touch</p>
              <p className="para">
                Your Questions and Feedback Matter to Us - Reach Out, Let's
                Connect, and Explore Together to Ensure Your Rare Eat Fresh
                Experience Is Exceptional and Delightful.
              </p>
            </div>
            <div className="inp_wrapper">
              <div className="fullName">
                <input type="text" className="firstName" />
                <input type="text" className="lastName" value="" />
              </div>
              <div className="email">
                <input type="email" id="form_email" />
              </div>
              <div className="text-area">
                <textarea
                  name=""
                  placeholder="Describe your issues"
                  cols="90"
                  rows="20"
                  id="area"
                ></textarea>
              </div>
            </div>
            <button className="btn">Send</button>
          </div>
        </form>
      </>
    );
}