import React from 'react';
import withWrapper from '../../withWrapper'
import './Contact.css'
import background from '../../Asset/frame.png'
import Form from './Form/Form';
import Logo from "../../Asset/logo.png";
import Twit from "../../Asset/twt.png";
import linkd from "../../Asset/linkd.png";
import Inst from "../../Asset/instg.png";
import fcbk from "../../Asset/fcb.png";
const Contact= ()=>{
    return (
      <>
        <div id="content">
          <div id="small_cont">
            <img src={Logo} alt="Logo_image" className="cont_logo" />
            
              <div className="para_inner">
                <p className="para">
                  RARE EAT FRESH represents a range of unique ingredients and
                  the vibrancy of different Cultures, every product in the Rare
                  Eat range has a story inspired by different Cultures
                </p>
                <p className="para">020 7205 4031</p>
                <p className="para">support@rareeatfresh.com</p>
              </div>
           
            <div className="socials">
              <img src={fcbk} alt="Logo_image" className="so_logo" />
              <img src={Inst} alt="Logo_image" className="so_logo" />
              <img src={Twit} alt="Logo_image" className="so_logo" />
              <img src={linkd} alt="Logo_image" className="so_logo" />
            </div>
          </div>
          <Form />
        </div>
      </>
    );
}

export default withWrapper(Contact);