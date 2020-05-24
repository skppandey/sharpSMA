import React, {useEffect} from 'react';
import img2 from '../images/QLED-Part-5_wide_main_1.jpg';

function Info2() {
  return (
    <div style={{marginTop: '-20px'}}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          height: '500px',
          width: '50%',
          float: 'left',
        }}
      >
        <span style={{marginTop:"100px"}}>
          <img src={img2} style={{width: '90%'}} alt="img2" />
        </span>
       
      </div>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          height: '500px',
          width: '50%',
          float: 'right',
        }}
      >
           <span
        //   style={{
        //     width: '50%',
        //     marginTop: '0px',
        //   }}
        >
          <h2
            align="left"
            style={{
              fontFamily: "Roboto",
              fontWeight: 'normal',
              color: '#dd3333',
              fontWeight: 400,
    lineHeight: 1.8,
              transform: 'translateY(0) scale(1)',
              width: '90%',
            }}
          >
            Who we are
          </h2>
          <p
            align="left"
            style={{
              marginBottom: '.65em',
              fontFamily: 'verdana',
              fontSize: '1em',
              color: '#333',
              fontWeight: 400,
              lineHeight: 1.8,
              width: '95%',
            }}
          >
            At SECD, we live to help our customers find the right solution,
            working side-by-side with you to deliver the support and services
            you need to take your products to the next level. Our components are
            designed for top performance and ease of integration, and are
            continually re-envisioned to meet emerging market demand and take
            advantage of the latest Sharp technology innovations. If you are
            seeking an LCD, Sensor, Imaging, or Optoelectronics solution,
            contact your local Sharp Representative and let us put the power of
            Sharp to work for you.
          </p>
        </span>
      </div>
    </div>
  );
}
export default Info2;
