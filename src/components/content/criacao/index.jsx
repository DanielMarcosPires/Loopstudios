import "./scss/style.css";

export default function Criacao(props) {
  return (
    <>
      <section className="limite">
        <div>{props.children}</div>
        <img src={props.imagem} alt="criações" />
      </section>
    </>
  );
}
