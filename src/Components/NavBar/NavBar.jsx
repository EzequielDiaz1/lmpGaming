import React from 'react';
import {useHistory} from 'react-router-dom';

const styleHead = {
    backgroundColor: '#d9a0b6',
    padding: '2px 25px',
    mixBlendMode: 'difference ',
    marginRight: '25px',
    display:'flex', 
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer'
}

const NavBar = () => {

    const history = useHistory();

    return (
        <div>
            {/* aNAVBAR */}
            <div style={{display:'flex', justifyContent:'center', color:'white',marginTop:'15px', marginBottom:'20px '}}>
                <h1 onClick={() => history.push('/')} style={{cursor:'pointer', fontFamily: "MonumentUltraBold", letterSpacing:'2px', color:'#d9a0b6', marginRight:'20px', fontSize:'30px'}}>LMP </h1> 
                <h1 onClick={() => history.push('/')} style={{cursor:'pointer', fontFamily: "MonumentRegular, regular", fontWeight:'lighter', letterSpacing:'2px', fontSize:'30px'}}>GAMING</h1>
            </div>
            <div  style={{display:'flex', justifyContent:'center'}}>
                <div  class="navBarDiv" style={styleHead}>
                    <span style={{fontFamily: "MonumentRegular, regular", fontSize: "17px"}} onClick={() => history.push('/about')}>ABOUT</span>
                </div>
                <div class="navBarDiv" style={styleHead}>
                    <span style={{fontFamily: "MonumentRegular, regular", fontSize: "17px"}}>EQUIPOS</span>
                </div>
                <div class="navBarDiv" style={styleHead}>
                    <span style={{fontFamily: "MonumentRegular, regular", fontSize: "17px"}}>TITULOS</span>
                </div>
                <div class="navBarDiv" style={styleHead}>
                    <span style={{fontFamily: "MonumentRegular, regular", fontSize: "17px"}}>CONTACTO</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;