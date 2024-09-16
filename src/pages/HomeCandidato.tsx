import React from 'react';

const HomeCandidato: React.ComponentType = () => {
    return (
        <>
            <div>
                <h1>Candidato</h1>
            </div>
            <div>
                <div>
                    <form action="">
                        <div>
                            <label htmlFor="">Codice Fiscale</label>
                            <input type="text" name="codiceFiscale" />
                        </div>
                        <div>
                            <label htmlFor="">Nome</label>
                            <input type="text" name="nome" />
                        </div>
                        <div>
                            <label htmlFor="">Cognome</label>
                            <input type="text" name="cognome" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="">Data di Nascita</label>
                            <input type="date" name="dataNascita" />
                        </div>
                        <div>
                            <label htmlFor="">Luogo di Nascita</label>
                            <input type="text" name="luogoNascita" />
                        </div>
                        <fieldset>
                            <legend>Seleziona la Cittadinanza:</legend>
                            <div>
                                <input type="radio" id="europea" name="cittadinanza" value="europea" />
                                <label htmlFor="europea">Europea</label>
                            </div>

                            <div>
                                <input type="radio" id="altro" name="cittadinaza" value="altro" />
                                <label htmlFor="altro">Altro</label>
                            </div>
                        </fieldset>
                        <div>
                            <label htmlFor="">Residenza</label>
                            <input type="text" name="residenza" />
                        </div>
                        <div>
                            <label htmlFor="">CAP Residenza</label>
                            <input type="text" name="cap" />
                        </div>
                        <div>
                            <label htmlFor="">Domicilio e Residenza corrispondono?</label>
                            <input type="checkbox" name="isSame" />
                        </div>
                        <div>
                            <label htmlFor="">Domicilio</label>
                            <input type="text" name="domicilio" />
                        </div>
                        <div>
                            <label htmlFor="">CaP Domicilio</label>
                            <input type="text" name="capDomicilio" />
                        </div>
                        <div>
                            <label htmlFor="">Recapito Mobile</label>
                            <input type="text" name="nome" />
                        </div>
                        <div>
                            <p>Categoria Protetta</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div>
                            <p>Condanne Civili</p>
                            <label className="switch"> 
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Come ci hai conosciuto?</label>
                            <select name="comeConosciuto" id="connosciuto">
                                <option value="canaleRecruiting">Canale Recruiting</option>
                                <option value="socialNetwork">Social Network</option>
                                <option value="linkedin">Linkedin</option>
                                <option value="sitoWeb">Sito Web Aziendale</option>
                                <option value="conoscenti">Conoscenti</option>
                            </select>
                        </div>
                        <button>Prosegui</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HomeCandidato;