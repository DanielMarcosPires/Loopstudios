import "./scss/style.css";
export default function Banner(props) {
  return (
    <div className="banner">
      {props.children}
      <img src={props.caminho} alt="" />
    </div>
  );
}
