import ImgCadastro from '../../Img/Img - Cadastro'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Cadastro() {
    return(
        <div className="header">
            <Header/>
            <div className="conteudoPrincipal">
                <section className="conteudoEsquerda">
                    <p></p>
                    <img src={ImgCadastro} alt="" />
                </section>
                <section className="conteudoDireita">
                    <form action="#">
                        <div className="formInputs">
                            <div className="formHeader">
                                <h1></h1>
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="FormHeader">
                                <h1></h1>
                            </div>
                            <div className="InputBox">
                                <label htmlFor=""></label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" value={Tecnologo} />
                            </div>
                            <div className="InputBox">
                                <label htmlFor=""></label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <textarea name="" id="" cols="97" rows="7"></textarea>
                            </div>
                            <div className="formHeader">
                                <h1></h1>
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="InputBox">
                                <label htmlFor=""></label>
                                <textarea name="" id="" cols="97" rows="7"></textarea>
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="formBtn">
                            <button></button>
                        </div>
                    </form>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro;