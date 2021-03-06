import React from 'react';
import HomeHeader from '../common/HomeHeader/HomeHeader';
import Games from './Games/Games';
import './Home.scss';
// import Navbar from '../common/Navbar/Navbar';
import dalal from '../../assets/bull5-grey.png';
import kryp from '../../assets/kry-grey.png';
import hash from '../../assets/hash2-grey.png';
import echo from '../../assets/ech2-grey.png';

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <HomeHeader />
      </div>
      <div className="container col-md-12">
        <div className="events">
          <div className="row">
            <div className="col-md-6 center-block text-center cell">
              <Games
                name="DALALBULL"
                rank="12"
                logo={dalal}
                imageSize="dalalPic"
                type="ranked"
                href="/Dalalbull"
              />
            </div>
            <div className="col-md-6 center-block text-center cell">
              <Games
                name="KRYPTOS"
                rank="21"
                logo={kryp}
                imageSize="krypPic"
                type="ranked"
                href="Kryptos"
              />
            </div>
            <div className="w-100" />
            <div className="col-md-6 center-block text-center cell">
              <Games
                name="#INCLUDE"
                logo={hash}
                imageSize="hashPic"
                type="notRanked"
              />
            </div>
            <div className="col-md-6 center-block text-center cell">
              <Games
                name="ECHO"
                logo={echo}
                imageSize="echoPic"
                type="notRanked"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
