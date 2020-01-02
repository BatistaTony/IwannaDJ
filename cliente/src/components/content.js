import React from 'react'
import './styles/navbar.css'
import Navbar from './navbar'
import ItemDj from './itemDj'
import Rodape from './rodape'
import {Link} from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
import { connect } from 'react-redux'

class Content extends React.Component{

    state ={

        festa: '',
        cidade: '',
        aparelho: '',
        preco: '',
        
        dj: [
        {
            nome: 'Dj vado posetr',
            endereco: 'Benguela, Lobito',
            telefone: '88888888',
            preco: '2000',
            festa: 'Noite',
            nivel: 'Avancado',
            aparelho: true,
        }
    ]}

    componentDidMount(){
        axios.get('/dj/get').then((res)=>{
           this.setState({dj:res.data})
        })
    }

    updateState = ()=>{
        axios.get('/dj/get').then((res)=>{
            this.setState({dj:res.data})
            $('.dj_destaque .title').text("DJ'S EM DESTAQUE")
         })
    }

    handleChange = (e)=>{
        e.preventDefault()
        const isCheckbox = e.target.value === "isCheckbox"

        this.setState({
            [e.target.name]: isCheckbox ? 
            e.target.checked : e.target.value
        })

        this.updateState()
    }

    pesquisar = ()=>{
        axios.post('/dj/search', {
            "festa":this.state.festa,
            "preco": this.state.preco,
            "aparelho": this.state.aparelho === "NÃO" ? false : true,
            "endereco":this.state.cidade
        }).then((res)=>{
          this.setState({dj: res.data})
          $('.dj_destaque .title').text("DJ'S ENCONTRADOS ("+this.state.dj.length+")")
        }).catch(err=>(
            console.log(err)
        ))
    }

    render(){
    return (
        <div className="home">
        <div className="content">
            <Navbar item={'home'} />

            <div className="hero">
                <div className="div_hero">
                    <h1>Eu quero um Dj</h1>
                    <p>
                    If you need me, you can't call me I stay busy makin' money You know what is on my mind All I think about is hunnids I stay busy (bzz!) workin' on me I stay busy with my business, homie I already hit her when you left her lonely She is not the type that likes to take things slowly Slowly, my mouth is goin' off, I don't know patience I got a chance, then my niggas got it too like it's contagious I see the future when I get wavy (Wavy God!) But I couldn't picture bein' Champagne  When I would buy that shit and save it for the right occasion I couldn't picture changes when I was with Ms. Craten 
                    </p>
                    </div>
                    
                    <h1 className="search_title">Encontre o melhor Dj para a tua festa.</h1>

                </div>

                

                <div className="form_search">
                    
                    <form>
                            <div>
                            <h1>Festa: </h1>
                            <select onChange={this.handleChange} name="festa" className="ipt">
                                <option>Aniversarios</option>
                                <option>Noites</option>
                                <option>Casamento</option>
                                <option>Pedido</option>
                            </select>
                            </div>

                            <div>
                            <h1>Cidade: </h1>
                            <select  onChange={this.handleChange} name="cidade" className="ipt">
                                <option>Luanda</option>
                                <option>Benguela</option>
                                <option>Huambo</option>
                                <option>Cabinda</option>
                            </select>
                            </div>

                            <div>
                            <h1>Com aparelhos Musicais: </h1>
                            <select  onChange={this.handleChange} name="aparelho" className="ipt">
                                <option>SIM</option>
                                <option>NÃO</option>
                            </select>
                            </div>

                            <div>
                            <h1>Preço por hora:</h1>
                            <input  onChange={this.handleChange} name="preco" className="ipt" type="number" name="preco" />
                            </div>

                            


                        </form>
                        <div className="div_btn_hero">
                        <a href="#pesq"><button onClick={this.pesquisar} className="btn_hero">Pesquisar</button></a>
                         
                         <h1 className="or_btn">Ou</h1>
                          <Link to="/conta"><button className="btn_hero">Eu sou um DJ</button></Link>
                           

                          </div>
                    </div>
        
            </div>

            <div className="dj_destaque" id="pesq">

                <h1 className="title">DJ'S EM DESTAQUE</h1>

                {this.state.dj.length !== 0 ?
                <div className="list">

                        {this.state.dj.map((d,key)=>(
                            <ItemDj dj={d} />
                        ))}
                        
                    </div>

                    :
                    <div className="div_semdj">
                        <h1 className="semdj">Não foi encontrado nenhum DJ</h1>
                        <button onClick={this.updateState} className="div_btn_dj">Update</button>
                    </div>
                    }

                </div>

                <Rodape />

            </div>
    )
                        }
}

const mapSstateToProps = (state)=>{
    return {
        state
    }
}


export default  connect()(Content)