import React from 'react';
import './Titles.css'

const imgCopita = {
    width: '30px',
    height: '30px',
    mixBlendMode: 'difference ',
    marginRight:'10px',
}

const containerCampeonatos2 = {
    display:'flex',
    flexDirection:'row',
    color:'#fff',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    fontFamily:'MonumentUltraBold',
    backgroundColor:'rgba(235,235,235,0.8999)',
    width:'600px',
    borderRadius:'10px',
    height:'80px',
    paddingBottom:'5px'
}

const containerCampeonatos = {
    display:'flex',
    justifyContent:'center', 
    flexDirection:'column',
    alignItems:'center',
    marginTop:'70px',
}

const imgGoLMP = {
    width: '142px',
    height: '100px',
    /* mixBlendMode: 'difference ', */

}

const Titles = () => {
    return (
        <div style={containerCampeonatos}>
            <div id='divContenedor' style={containerCampeonatos2}>
                <img style={imgCopita} src="https://i.ibb.co/L51pnHt/Recurso-1.png"/>
                
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h2 style={{marginBottom:'-10px', color:'#d39ab0', fontSize:'32px'}}>ROCKET LEAGUE</h2>
                    <p style={{fontFamily:'Euclid', color:'black'}}>Torneo 3v3 Rocket Open League, organizado por el streamer Tomikka</p>
                </div>
            </div>

            <div style={{height: '200px', display:'flex', justifyContent: 'center', alignItems:'flex-end'}}>
                <img src="https://i.ibb.co/7VzPD7Z/Go-LMP-PNG.png" style={imgGoLMP}></img>
            </div>
        </div>
    );
};


export default Titles;