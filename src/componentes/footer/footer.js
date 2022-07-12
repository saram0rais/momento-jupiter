import React from "react";
import "./footer.css";

function Menufooter (){
    return(
        <div className="pai">
        <div className="retangulo"></div>
        <div  id="contato" className="logo_footer"></div>
        <div className="nome_logo">
            <p>Jupiter</p>
        </div>

        <div className="text_footer">
            <p>Join us on a one-way trip to Jupiter, a planet full of gases and fun.</p>
        </div>

        <div className="since">
            <p>© 2022 Copyright: MomentSaturn.com</p>
        </div>

        <div className="opcoes">
            <p className="aboutf">About</p>
            <p className="investorsf">Investors</p>
            <p className="contactf">Contact</p>
        </div>

        </div>
    )
}

export default Menufooter;