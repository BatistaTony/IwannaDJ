import React from 'react'
import './styles/navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Navbar(props){

    const user = useSelector(state=>state.user)


    const isLogged = ()=>{
        return (

            <div>

                    {props.item === "perfil" ? 
                    <Link to="/Perfil"><li className="active_item">Perfil</li></Link>:
                    <Link to="/Perfil"><li>Perfil</li></Link>}
                    <Link to="/home"><li>Sair</li></Link>
            </div>

        )
    }

    const IsNotLogged = ()=>{

        return (

            <div>

                {props.item === "conta" ? 
                <Link to="/conta"><li className="active_item">Conta</li></Link>:
                <Link to="/conta"><li>Conta</li></Link>}


            </div>
        )

    }


    return (
        <div className="Navbar">
            <div className="logo">
                <h1>IwannaDj</h1>
                </div>

            <div className="menu_navbar">
                <ul>

                    {props.item === "perfil" ? null : 
                    <div>
                    {props.item === "home" ?

                    <Link to="/home"><li className="active_item">Home</li></Link>
                    :<Link to="/home"><li>Home</li></Link>

                     }
                     </div>}

                    {user ?

                        isLogged()
                      :
                     
                        IsNotLogged()
                    
                    }
                   
                    
                    
                </ul>
                </div>
            </div>
    )
}