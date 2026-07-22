import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">Monica Villanueva</span>

        <ul className="footer__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/professional">Professional</Link></li>
          <li><Link to="/personal">Personal</Link></li>
        </ul>

        <small>&copy; {new Date().getFullYear()} Monica Villanueva. All rights reserved.</small>
      </div>
    </footer>
  );
}
