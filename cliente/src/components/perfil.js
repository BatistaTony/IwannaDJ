import React from 'react'
import './styles/perfil.css'
import Navbar from './navbar'
import $ from 'jquery'
import Rodape from './rodape'
import { Redirect } from 'react-router-dom'
import { GET_USER_DATA } from './store/actions/index'
import { connect } from 'react-redux'


class Perfil extends React.Component {

    state = { 
       
        nome: '',
        senha: '',
        telefone: '',
        endereco: '',
        aparelho:'',
        preco: 0,
        festa: 'Aniversario',
        nivel: 'Iniciante',
        erro: ''
}


     showEdit = (e)=>{
        e.preventDefault()
        $('.cadastro').slideToggle('fade',()=>{
            $('.cadastro').css({display:'flex'})
        })

        $('.dj_perfil').slideToggle(()=>{
            $('.dj_perfil').css({display:'none'})
        })
    }

    componentDidMount(){
        this.setState(this.props.state.user)
    }

     Cancelar = (e)=>{
        e.preventDefault()
        $('.cadastro').slideToggle('fade',()=>{
            $('.cadastro').css({display:'none'})
        })

        $('.dj_perfil').slideToggle(()=>{
            $('.dj_perfil').css({display:'flex'})
        })

    }

    handleChange = (e)=>{
        e.preventDefault()

        const isCheckbox = [e.target.type] === 'chwckbox'

        this.setState({
            [e.target.name]: isCheckbox ?
            e.target.checked : e.target.value
        })
    }

     actualizar = (e)=>{
         e.preventDefault()
        console.log(this.state)
    }

    render(){
    return (
        <div className="Perfil">

            {this.props.state.user ? null: <Redirect to="/home" />}

                <Navbar item={'perfil'} />

                
                
                <div className="dj_perfil">
                   <div className="card">

                        <div className="control">
                           <button onClick={this.showEdit} className="btn_editar">Editar</button>
                           <button className="btn_editar">Foto</button>
                        </div>

                       <img className="foto" src="./img/IMG_3180.jpg" alt="" />

                       
                       
                       <h1 className="nome">{this.props.state.user.nome}</h1>

                       <ul className="detalhes">

                            <li> <img src="./img/icons8_price_tag_64px_1.png" alt="" />{this.props.state.user.preco} kzs</li>
                            {this.props.state.user.aparelho ?
                            <li> <img src="./img/icons8_tune_64px.png" alt="" />Tem Aparelho</li>
                            :<li> <img src="./img/icons8_tune_64px.png" alt="" />Nao Tem Aparelho</li>
                            }
                            <li> <img src="./img/icons8_stairs_up_64px.png" alt="" />Nivel {this.props.state.user.nivel}</li>
                            <li> <img src="./img/icons8_marker_64px.png" alt="" />{this.props.state.user.endereco}</li>
                            <li> <img src="./img/icons8_confetti_48px.png" alt="" />{this.props.state.user.festa}</li>

                        </ul>

                       </div>
                    </div>


                    <div className="cadastro">

                        <h1 className="title">Actualizar a sua conta</h1>

                    <form className="cad">
                    
                    <div>
                        <h1>Nome:</h1>
                        <input className="ipt" type="text" value={this.props.state.user.nome} onChange={this.handleChange} name="nome" />
                    </div>

                    <div>
                        <h1>Telefone</h1>
                        <input className="ipt" type="number" value={this.props.state.user.telefone} onChange={this.handleChange}  name="telefone" />
                    </div>

                    <div>
                        <h1>Endereco</h1>
                        <input className="ipt" type="text" value={this.props.state.user.endereco} onChange={this.handleChange}  name="endereco" />
                    </div>

                    

                   
                    <div>
                    <h1>Tipo de Festa</h1>
                    <select value={this.props.state.user.festa} name="festa" onChange={this.handleChange}  className="ipt">
                        <option>Aniversario</option>
                        <option>Aniversario</option>
                        <option>Aniversario</option>
                        <option>Aniversario</option>
                    </select>
                    </div>

                    <div>
                        <h1>Preco por hora</h1>
                        <input className="ipt" value={this.props.state.user.preco} onChange={this.handleChange}  type="number" name="preco" />
                    </div>


                    <div>
                    <h1>Tem Aparelho</h1>
                    <select value={this.props.state.user.aparelho} onChange={this.handleChange} name="aparelho" className="ipt">
                        <option>SIM</option>
                        <option>NÃO</option>
                    </select>
                    </div>

                    <div>
                    <h1>Link do facebook</h1>
                    <input className="ipt"  type="text" name="facebook" />
                    </div>

                    <div>
                    <h1>Nivel</h1>
                    <select value={this.props.state.user.nivel} onChange={this.handleChange}  name="nivel" className="ipt">
                        <option>Iniciante</option>
                        <option>Medio</option>
                        <option>Avancado</option>
                    </select>
                    </div>

                    <button onClick={this.Cancelar} className="btn_cad">Cancelar</button>
                    <button onClick={this.actualizar} className="btn_cad">Actualizar</button>
                    </form>
                    
                    </div>

                    <Rodape />

            </div>
    )
                        }
}

const mapStateToProps = (state) =>{
    return {
        state
    }
}


const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Perfil)