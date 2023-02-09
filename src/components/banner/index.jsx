import "./scss/style.css";
export default function Banner(props) {
  return (
    <div className="banner">
      {props.children}
      <img className="bannerFundo" src={props.fundo} alt/>
    </div>
  );
}
