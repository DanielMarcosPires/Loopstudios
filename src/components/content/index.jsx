import './scss/style.css'

import Anuncio from "./anuncio";
import Poster from "./anuncio/Poster";
import Criacao from "./criacao";

import terra from "./images/image-deep-earth.jpg"
import bolinha from "./images/image-night-arcade.jpg"
import futebol from "./images/image-soccer-team.jpg"
import corrida from "./images/image-grid.jpg"
import pista from "./images/image-from-above.jpg"
import aurora from "./images/image-pocket-borealis.jpg"
import marte from "./images/image-curiosity.jpg"
import louco from "./images/image-fisheye.jpg"
import SeeAll from './verMais';

export default function Content(props) {
    const criacaoList = [
        {
            imagem:terra,
            titulo:'deep earth',
        },
        {
            imagem:bolinha,
            titulo:'night Arcade',
        },
        {
            imagem:futebol,
            titulo:'soccer team vr',
        },
        {
            imagem:corrida,
            titulo:'the grid',
        },
        {
            imagem:pista,
            titulo:'from up above vr',
        },
        {
            imagem:aurora,
            titulo:'pocket borealis',
        },
        {
            imagem:marte,
            titulo:'the curiosity',
        },
        {
            imagem:louco,
            titulo:'make it fisheye',
        },
    ]
  return (
    <>
    <section>
      <Anuncio>
        <Poster />
      </Anuncio>
    </section>
    <section>
    <div className='flex flex2'>
       <h2 className='tituloCriacao'>our creations</h2>
       <SeeAll nome="see all" />
    </div>
        <div className="flex">
            {criacaoList.map(criacaoList =>
                <Criacao imagem={criacaoList.imagem}>
                    <h2 className='criacaoTitulo'>{criacaoList.titulo}</h2>
                </Criacao>
            )}
        </div>
    </section>
    </>
  );
}
