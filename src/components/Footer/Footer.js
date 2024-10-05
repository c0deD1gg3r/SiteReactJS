import './Footer.css';

import tg from './../../img/icons/tg.png';
import discord from './../../img/icons/dis.png';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="#!"><img style={{ width: 45, height: 45, marginTop: '2px' }} src={tg} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img style={{ width: 50, height: 50, borderRadius: 10, marginTop: '7px' }} src={discord} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
          </ul>
          <div className="copyright">
            <p>© 2024 frontend-dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;