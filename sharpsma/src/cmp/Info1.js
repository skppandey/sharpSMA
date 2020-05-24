import React, {useEffect} from 'react';
import img1 from '../images/www.sharpsma.com28728.jpg';
import img2 from '../images/www.sharpsma.com35951.jpg';

function Info1() {
  return (
    // <div >
    //   <div className="division1">
    //   <img src={img1}  alt="img1" />
    //   #left content in here</div>
    //   <div className="division2">
    //   <img src={img2}  alt="img2" />
    //   #left content in here</div>
    // </div>
    <div>
      <div class="division1" style={{backgroundColor: '#FFFFFF'}}>
        <span
          style={{
            width: '50%',
            height: '500px',
            float: 'left',
            marginTop: '30px',
          }}
        >
          <img src={img1} style={{width: '175px'}} alt="img1" />
        </span>
        <span
          style={{
            width: '50%',
            marginTop: '0px',
          }}
        >
          <h2
            align="left"
            style={{
              fontFamily: 'Verdana',
              fontWeight: 'normal',
              color: '#dd3333',
              fontSize: '2.133em',
              transform: 'translateY(0) scale(1)',
              width: '95%',
            }}
          >
            Your Perfect Display Solution? Find it Here.
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
            Whether you are looking for a market-leading stock industrial LCD, a
            Sharp display with premium performance out-of-the-box, or a
            dialed-in value-added solution, let us put decades of expertise in
            nearly every vertical industry to work for you.
          </p>
        </span>
        <span style={{float: 'left', marginTop: '18px'}}>
          <button class="snip1099 red">
            <span>Read More</span>
            <i class="ion-android-arrow-forward"></i>
          </button>
        </span>
      </div>
      <div class="division2" style={{backgroundColor: '#FFFFFF'}}>
        <span
          style={{
            width: '50%',
            height: '500px',
            float: 'left',
            alignItems: 'left',
            marginTop: '30px',
          }}
        >
          <img src={img2} style={{width: '175px'}} alt="img2" />
        </span>
        <h2
          align="left"
          style={{
            fontFamily: 'Verdana',
            fontWeight: 'normal',
            color: '#dd3333',
            fontSize: '2.133em',
            transform: 'translateY(0) scale(1)',
            width: '95%',
          }}
        >
          Memory LCDs Put the Competition on Ice!
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
          When it comes to rugged low-temperature LCD performance for wearable,
          mobile, and other small-screened devices, Sharp’s Memory LCD leaves
          bi-stable technology frozen in its tracks. Memory LCDs embed 1-bit
          memory in every pixel to deliver an “always-on”.
        </p>
        <span style={{float: 'left', marginTop: '18px'}}>
          <button class="snip1099 red">
            <span>Read More</span>
            <i class="ion-android-arrow-forward"></i>
          </button>
        </span>
      </div>

      <div
        class="division1"
        style={{backgroundColor: '#FFFFFF', borderTop: '1px solid #bbb'}}
      >
        <span
          style={{
            width: '50%',
            height: '500px',
            float: 'left',
            marginTop: '100px',
          }}
        >
          <img src={img1} style={{width: '175px'}} alt="img1" />
        </span>
        <span
          style={{
            width: '50%',
            marginTop: '100px',
          }}
        >
          <h2
            align="left"
            style={{
              fontFamily: 'Verdana',
              fontWeight: 'normal',
              color: '#dd3333',
              fontSize: '2.133em',
              transform: 'translateY(0) scale(1)',
              width: '95%',
              marginTop: '100px',
            }}
          >
            Lifetime maintenence.
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
            Nanotechnology immersion along the information highway will close
            the loop on focusing solely on the bottom line.
          </p>
        </span>
        <span style={{float: 'left', marginTop: '18px'}}>
          <button class="snip1099 red">
            <span>Read More</span>
            <i class="ion-android-arrow-forward"></i>
          </button>
        </span>
      </div>
      <div
        class="division2"
        style={{backgroundColor: '#FFFFFF', borderTop: '1px solid #bbb'}}
      >
        <span
          style={{
            width: '50%',
            height: '500px',
            float: 'left',
            alignItems: 'left',
            marginTop: '100px',
          }}
        >
          <img src={img2} style={{width: '175px'}} alt="img2" />
        </span>
        <h2
          align="left"
          style={{
            fontFamily: 'Verdana',
            fontWeight: 'normal',
            color: '#dd3333',
            fontSize: '2.133em',
            transform: 'translateY(0) scale(1)',
            width: '95%',
            marginTop: '100px',
          }}
        >
          Great engineering
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
          Nanotechnology immersion along the information highway will close the
          loop on focusing solely on the bottom line.
        </p>
        <span style={{float: 'left',marginTop: '18px'}}>
        <button class="snip1099 red">
          <span>Read More</span>
          <i class="ion-android-arrow-forward"></i>
        </button>
      </span>
      </div>
    
    </div>
  );
}

export default Info1;
