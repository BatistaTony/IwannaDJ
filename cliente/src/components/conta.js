import React from 'react'
import './styles/conta.css'
import Navbar from './navbar'
import $ from 'jquery'
import Rodape from './rodape'
import axios from 'axios'
import { connect } from 'react-redux'
import { GET_USER_DATA } from './store/actions/index'
import { Redirect } from 'react-router-dom'

const initialState = {
    ltelefone: '',
    lsenha: '',
    cnome: '',
    csenha: '',
    ctelefone: '',
    cendereco: '',
    caparelho:'',
    cpreco: 0,
    cfesta: 'Aniversario',
    cnivel: 'Iniciante',
    erro: ''
}

class Conta extends React.Component{

    state = initialState

    
    showCad = (e)=>{
        e.preventDefault()
        $('.cadastro').slideToggle('fade',()=>{
            $('.cadastro').css({display:'flex'})
        })

        $('.login').slideToggle(()=>{
            $('.login').css({display:'none'})
        })

        $('.log')[0].reset()
        this.setState(initialState)

    }

    showLogin = (e)=>{
        e.preventDefault()
        $('.cadastro').slideToggle(()=>{
            $('.cadastro').css({display:'none'})
        })

        $('.login').slideToggle(()=>{
            $('.login').css({display:'flex'})
        })
        $('.cad')[0].reset()
        this.setState(initialState)
    }

    handleChange = e=>{
        e.preventDefault()
        const isCheckBox = e.target.type === 'checkbox'


        this.setState({
            [e.target.name]: isCheckBox ? 
            e.target.checked : e.target.value
        })

        this.setState({erro: ''})
    }

    login = (e)=>{
        e.preventDefault()

        axios.post('/dj/login', {
            "telefone":this.state.ltelefone,
            "senha": this.state.lsenha
        }).then((res)=>{
            if(res.data.message){
                this.setState({erro: res.data.message})
            }else{
                this.props.dispatch(GET_USER_DATA(res.data))
            }
        })

        
        
    }


    cadastrar = (e)=>{
        e.preventDefault()
       axios.post('/dj/register', {
        "nome": this.state.cnome,
        "telefone": this.state.ctelefone,
        "senha": this.state.csenha,
        "endereco": this.state.cendereco,
        "festa": this.state.cfesta,
        "preco": this.state.cpreco,
        "nivel": this.state.cnivel,
        "aparelho":this.state.aparelho === "NÃO" ? false:true,
       }).then((res)=>{
            if(res.data.message){
                this.setState({erro: res.data.message})
            }else{
                this.props.dispatch(GET_USER_DATA(res.data))
            }
       })
    }



    render(){
        return (

            <div className="Conta">

                <Navbar item={"conta"}/>

                {this.props.state.user === 0 ? null: <Redirect to="/Perfil" />}


                    <div className="cadastro">

                        <h1 className="title">Cadastra aqui para alavancar a sua carreira como DJ</h1>
                        <h1 className="erro">{this.state.erro}</h1>

                    <form className="cad">
                    
                    <div className="div_ipt">
                        <h1>Nome:</h1>
                        <input className="ipt" onChange={this.handleChange} type="text" name="cnome" />
                    </div>

                    <div className="div_ipt">
                        <h1>Telefone</h1>
                        <input className="ipt" onChange={this.handleChange} type="number" name="ctelefone" />
                    </div>

                    <div className="div_ipt">
                        <h1>Endereco</h1>
                        <input className="ipt" onChange={this.handleChange} type="text" name="cendereco" />
                    </div>

                    <div className="div_ipt">
                        <h1>Senha:</h1>
                        <input className="ipt" onChange={this.handleChange} type="text" name="csenha" />
                    </div>

                   
                    <div className="div_ipt">
                    <h1>Tipo de Festa</h1>
                    <select onChange={this.handleChange} name="cfesta" className="ipt">
                        <option>Aniversario</option>
                        <option>Aniversario</option>
                        <option>Aniversario</option>
                        <option>Aniversario</option>
                    </select>
                    </div>

                    <div className="div_ipt">
                        <h1>Preco por hora</h1>
                        <input className="ipt" onChange={this.handleChange} type="number" name="cpreco" />
                    </div>


                    <div className="div_ipt">
                    <h1>Tem Aparelho</h1>
                    <select onChange={this.handleChange} name="caparelho" className="ipt">
                        <option>SIM</option>
                        <option>NÃO</option>
                    </select>
                    </div>

                    <div className="div_ipt">
                    <h1>Link do facebook</h1>
                    <input className="ipt" onChange={this.handleChange} type="text" name="cfacebook" />
                    </div>

                    <div className="div_ipt">
                    <h1>Nivel</h1>
                    <select onChange={this.handleChange} name="cnivel" className="ipt">
                        <option>Iniciante</option>
                        <option>Medio</option>
                        <option>Avancado</option>
                    </select>
                    </div>

                   
                    
                    </form>
                    
                     <div className="div_btn">
                        <button onClick={this.showLogin} className="btn_cad">Já Tenho uma conta</button>
                        <button onClick={this.cadastrar} className="btn_cad">Cadastrar</button>
                    </div>
                    
                    </div>

                    <div className="login">

                        <h1 className="title">Entre aqui para alavancar a sua carreira como DJ</h1>
                        <h1 className="erro">{this.state.erro}</h1>
                    <form className="log">
                  

                    <div className="div_ipt">
                        <h1>Telefone</h1>
                        <input className="ipt" onChange={this.handleChange} type="number" name="ltelefone" />
                    </div>

                   

                    <div className="div_ipt">
                        <h1>Senha:</h1>
                        <input className="ipt" onChange={this.handleChange} type="text" name="lsenha" />
                    </div>

                   
                   
                   
                    </form>


                     <div className="div_btn">
                    <button onClick={this.login} className="btn_cad">Entrar</button>
                    <button onClick={this.showCad} className="btn_cad">Ainda nn Tenho uma conta</button>
                    </div>
                    
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

export default  connect(mapStateToProps, mapDispatchToProps)(Conta)