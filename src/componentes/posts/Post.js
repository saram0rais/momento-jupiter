import React from "react";
import "./Post.css";

function Post() {
    return (     
      <> 
      <div className="back"></div>          
      <div className="container">
       <p className="tit">moment</p>
       <h1 className="App">Jupiter</h1>
      </div>
     
      <div className="aurora"></div>
      
      <div className="cards">
        <div className="card1"></div>
        <div className="text1">
          <p>A SECURITY É IMPORTANTE</p>
         </div>
        <div id="cardsgt" className="lorem1">
          <p>Nossa tecnologia é feita para manter a maior segurança do mercado para nossos viajantes, a parceria entra a NASA permite que nem mesmo as tempestades mais fortes de Júpiter conseguigam estragar nossa diversão.</p>
        </div>

        <div id="trip" className="card2"></div>
        <div className="text2">
          <p>UMA TRIP PARA JUPITER</p>
        </div>
        <div className="lorem2">
          <p>Viaje conosco e tenha uma experiência inesquecível para contar a todos. Já pensou em mergulhar nas nuvens de poeira de outro planeta?</p>
        </div>

        <div id="work" className="card3"></div>
        <div className="text3">
          <p>COMO FUNCIONA</p>
        </div>  
        <div className="buraco-negro"> </div> 
        <div className="lorem3">
          <p>Após um treinamento de 3 meses, os viajantes são levados à uma nave onde levará elas até Júpiter</p>
        </div>

    <div className="Block">

    <div className="sobre"> 
        <h1 id="aboutus" className="aboutus">ABOUT US</h1> 
          <p>A Momento Júpiter, é uma agência de viagens que saí da caixinha, ou da Terra. Começamos a nossa ideia no ano de 2022, onde tivemos a ideia de trazer diversão a todas as famílias de uma forma diferente e radical, então fizemos parceria com a NASA, Tesla e Space X para criar a Momento Júpiter. Foram séculos de pesquisas para encontrarmos uma forma segura de levar as pessoas para Júpiter, e finalmente em 3010 conseguimos trazer as pessoas de uma totalmente segura e divertida.</p>
          <p>Para viajar conosco, nossos viajantes precisam passar por 3 (três) meses de treinamento para ir à Júpiter.</p>
          <p>E para ajudar nosso planeta, arrrecadamos parte do nosso dinehiro para ONGS, tanto para combater a fome tanto para ajudar a natureza.</p>
          <p></p>
        </div>
        </div>
        <div className="imgsaturn">
          <img src="https://github.com/saram0rais/momento-jupiter/blob/main/main/img/2022-05-31__15_-removebg-preview.png?raw=true"/>
    </div>

      </div> 

      </>
    );
}

export default Post;