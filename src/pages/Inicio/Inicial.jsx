import './Inicial.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import ImgMain from '../../Img/Img - Index.png'
import accenture from '../../Img/Logos/logo - accenture.png'
import di2wind from '../../Img/Logos/logo - di2win.png'
import ferreira from '../../Img/Logos/logo - ferreira costa.png'
import zerobank from '../../Img/Logos/logo - zerobank.png'
import imip from '../../Img/Logos/logo - imip.png'


function Inicio() {
    return(
        <div className="conteudoPrincipal">
            <Header/>
            <div className="container">
                <div className="conteudo">
                    <section className="conteudoEsquerda">
                        <div className="esquerdaTexto">
                            <h1>Que tal fazer parte de um projeto que está formando 2000 profissionais de TI?</h1>
                            <button className="cadastre"><a href="">Cadastre-se</a></button>
                        </div>
                    </section>
                    <div className="conteudoDireita">
                        <img src={ImgMain} alt="" />
                    </div>
                </div>
            </div>
            <nav className="carrossel">
                <div className="slides">
                    <img id="acc" src={accenture} alt="" />
                    <img id="di2win" src={di2wind} alt="" />
                    <img id="ferreira" src={ferreira} alt="" />
                    <img id="zerobank" src={zerobank} alt="" />
                    <img id="imip" src={imip} alt="" />  
                </div>
            </nav>
            <Footer/>
        </div>
    )
}

export default Inicio;