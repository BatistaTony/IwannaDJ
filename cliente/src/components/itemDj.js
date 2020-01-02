import React from 'react'
import './styles/dj.css'


export default function ItemDj(props){
    return (

        <div className="DJ">

    <h1 className="nome">{props.dj.nome}</h1>

                <img className="capa" src="./img/IMG_3179.jpg" alt="" />

                <ul className="detalhes">
                    <li> <img src="./img/icons8_price_tag_64px_1.png" alt="" /> {props.dj.preco} kzs</li>
                    {props.dj.aparelho ?
                    <li> <img src="./img/icons8_tune_64px.png" alt="" />Tem Aparelho</li>
                    :<li> <img src="./img/icons8_tune_64px.png" alt="" />Nao Tem Aparelho</li>
                    }
                    <li> <img src="./img/icons8_stairs_up_64px.png" alt="" />Nivel {props.dj.nivel}</li>
                    <li> <img src="./img/icons8_marker_64px.png" alt="" />{props.dj.endereco}</li>
                    <li> <img src="./img/icons8_confetti_48px.png" alt="" />{props.dj.festa}</li>

                </ul>

                <h3 className="number">948351365<img src="./img/icons8_facebook_old_50px.png" alt="" /></h3>

            </div>
    )
}