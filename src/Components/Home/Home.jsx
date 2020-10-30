import React from 'react';

const imgLogo = {  
    width: '474px',
    height: '510px',
    opacity: '0.9',
    mixBlendMode: 'difference '
}

const imgGoLMP = {
    width: '142px',
    height: '100px',
    opacity: '0.9'
}


const Home = () => {
    return (
        <div>
            <div style={{display:'flex', justifyContent: 'center',marginTop:'200px'}}>
                <a href="https://www.instagram.com/lmpgaming/"><img src="https://i.ibb.co/TBbnyfb/Logo-LMP-Original-PNG.png" style={imgLogo} alt=""/></a>
            </div>
            <div style={{display:'flex', justifyContent: 'center', alignItems:'flex-endnpm'}}>
                <img src="https://i.ibb.co/7VzPD7Z/Go-LMP-PNG.png" style={imgGoLMP}></img>
            </div>
        </div>
    );
};

export default Home;