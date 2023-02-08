import './scss/style.css'
export default function Anuncio(props){
    return(
        <div className='anuncioFundo'>
            {props.children}
        </div>
    )
}