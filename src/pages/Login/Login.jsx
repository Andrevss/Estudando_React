import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImgLogin from '../../Img/Img - Login.png'


import './Login.css'

function Login(){
    return(
        <div className="header">
            <Header/>
        <div className="conteudoPrincipal">
            <div className="conteudoPrincipal">
                <div className="container">
                    <div className="formEsquerda">
                        <form action="">
                            <div className="formHeader">
                                <h2>Entrar</h2>
                            </div>
                            <div className="formInputs">
                                <div className="inputBox">
                                    <label htmlFor="email">Email</label>
                                    <input id='email' type="email" name='email' placeholder='Digite seu email' />
                                </div>
                                <div className="inputBox">
                                    <label htmlFor="senha">Senha</label>
                                    <input id='senha' type="password" name='senha' placeholder='Digite sua senha' />
                                </div>
                                <div className="forget">
                                    <p><a href="">Esqueceu sua senha?</a></p>
                                </div>
                            </div>
                            <div className="formBtn">
                                <button id='login'><a href="">Entrar</a></button>
                                <p>É novo por aqui? <a href="">Cadastre-se</a></p>
                            </div>
                        </form>
                    </div>
                    <div className="formImg">
                        <h2>É um dos alunos bolsista do Embarque Digital? Acesse já!</h2>
                        <img src={ImgLogin} alt="" />
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
        </div>
    )
}

export default Login;