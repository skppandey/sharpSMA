import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{marginTop: '40px', height: '80px'}}>
      <span style={{marginLeft: '60px'}}>
        &#169;Sharp Electronics Corporation. All rights reserved.
      </span>
      <span style={{marginRight: '60px', float: 'right', justifyContent:'space-around'}}>
        <Link id="l1" className="footColor" to="#">
          Product
        </Link>
        <Link id="l2" className="footColor" to="#">
          WhereToBuy
        </Link>
        <Link id="l3" className="footColor" to="#">
          SharpTechnology
        </Link>
        <Link id="l4" className="footColor" to="#">
          Resources
        </Link>
        <Link id="l5" className="footColor" to="#">
          ContactUs
        </Link>
      </span>
    </div>
  );
};
export default Footer;
