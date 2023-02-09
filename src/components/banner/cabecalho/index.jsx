import "./scss/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"; 
export default function Cabecalho() {
  return (
    <header className="header">
      <div className="headerMargin">
        <img src="./images/logo.svg" alt="" />
        
        <nav className="headerNav">
          <a className="headerLink" href="#">
            About
          </a>
          <a className="headerLink" href="#">
            Careers
          </a>
          <a className="headerLink" href="#">
            Events
          </a>
          <a className="headerLink" href="#">
            Products
          </a>
          <a className="headerLink" href="#">
            Support
          </a>
          
        </nav>
      </div>
    </header>
  );
}
