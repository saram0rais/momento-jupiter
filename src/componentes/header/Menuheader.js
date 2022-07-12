import React from "react";
import "./Menuheader.css";

 function Menu (){
    return(
         <div className="menu-inicial">
            <div className="logo-jupiter">
               <img className="logoimg" src="https://github.com/saram0rais/momento-jupiter/blob/main/main/img/icone.png?raw=true"/>
            <h1 className="title">Jupiter</h1>
            </div>
            <div className="title2" >
            <a href="#aboutus" className="about">About us</a>
            <a href="#work" className="howitwork">How it works</a>
            <a href="#trip" className="joinus">Join us</a>
            <a href="#cardsgt" className="security">Security</a>
            <a href="#contato" className="contact">Contact</a>

            <div className="borda" >
            <button className="sng">Sign up</button>
            </div>

            </div>

        </div>
    );
 }

 export default Menu;