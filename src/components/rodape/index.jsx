import "./scss/style.css";

export default function Rodape() {
  return (
    <footer className="Rodape">
      <div>
        <img className="RodapeImage" src="./images/logo.svg" alt="" />
        <nav>
          <a className="RodapeLink" href="#">
            About
          </a>
          <a className="RodapeLink" href="#">
            Carrers
          </a>
          <a className="RodapeLink" href="#">
            Event
          </a>
          <a className="RodapeLink" href="#">
            Products
          </a>
          <a className="RodapeLink" href="#">
            Support
          </a>
        </nav>
        <nav className="rodapeRedes">
            <div>
              <h3>Challenge by:</h3>
              <a target='_blank' href="https://www.frontendmentor.io/home">FrontendMentor.io</a>
            </div>
            <div>
              <h3>Programmer in React:</h3>
              <a target='_blank' href="https://www.frontendmentor.io/profile/DanielMarcosPires">
                  Daniel Marcos Pires
              </a>
            </div>
            <div>
              <h3>Github.com</h3>
              <a target='_blank' href="https://github.com/DanielMarcosPires">
                  Daniel Marcos Pires
              </a>
            </div>
        </nav>
      </div>
    </footer>
  );
}
