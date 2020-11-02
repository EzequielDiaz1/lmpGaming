import React from 'react';
import {useHistory} from 'react-router-dom';


const imgLogo = {  
    width: '474.600px',
    height: '510px',
    opacity: '0.9',
    mixBlendMode: 'difference '
}

const imgGoLMP = {
    width: '142px',
    height: '100px',
    mixBlendMode: 'difference ',

}




const Home = () => {

    const history = useHistory();

    return (
        <div>
            {/* Logo */}
            <div style={{display:'flex', justifyContent: 'center',marginTop:'120px'}}>
                <a href="https://www.instagram.com/lmpgaming/"><img src="https://i.ibb.co/TBbnyfb/Logo-LMP-Original-PNG.png" style={imgLogo} alt=""/></a>
            </div>
            {/* GoLMP */}
            <div style={{height: '200px', display:'flex', justifyContent: 'center', alignItems:'flex-end'}}>
                <img src="https://i.ibb.co/7VzPD7Z/Go-LMP-PNG.png" style={imgGoLMP}></img>
            </div>
        </div>
    );
};

export default Home;