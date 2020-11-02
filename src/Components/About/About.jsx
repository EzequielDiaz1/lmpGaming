import React from 'react';
import './about.css'

const styleDiv={
    display:'flex',
    flexDirection:'column',
    marginTop:'50px',
    alignItems: 'center',
    width:'600px',
    color:'#fff'
}

const imgGoLMP = {
    width: '142px',
    height: '100px',
    mixBlendMode: 'difference ',

}

const About = () => {
    return (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div style={styleDiv}>
                <h1 style={{fontFamily:"MonumentUltraBold", color:'#d39ab0', mixBlendMode: 'difference '}}>ABOUT LMP</h1>
                <p style={{fontFamily:'Euclid', textAlign:'center', fontSize:'20px'}}>
                    LMP Gaming se trata de una organización de eSports creada en Córdoba, Argentina. Que tiene como objetivo dejar el mayor esfuerzo y dedicación posible para que el equipo llegue lo más lejos posible.
                </p>
                <p style={{fontFamily:'Euclid', textAlign:'center', fontSize:'20px'}}>
                    Fundado en octubre de 2020, la organización actualmente cuenta con equipos de Rocket League, Counter-Strike: Global Offensive y Free Fire. Uno de ellos, el de Rocket League, ya ha logrado consagrarse campeón en uno de los torneos disputados. Los demás equipos están entrenando para llegar de la mejor forma a los torneos venideros.
                </p>
            </div>
            <div style={{height: '200px', display:'flex', justifyContent: 'center', alignItems:'flex-end'}}>
                <img src="https://i.ibb.co/7VzPD7Z/Go-LMP-PNG.png" style={imgGoLMP}></img>
            </div>
        </div>
    );
};

export default About;