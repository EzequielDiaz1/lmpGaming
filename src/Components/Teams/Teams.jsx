import React from 'react';



const styleImgRoster={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'500px',
    marginTop:'20px',
    mixBlendMode: 'difference'
}

const contenedorRosters={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
}

const imgGoLMP = {
    width: '142px',
    height: '100px',
    mixBlendMode: 'difference ',

}


const contenedorNombres={
    display:'flex',
    justifyContent:'center', 
    alignItems:'center', 
    flexDirection:'row', 
    marginBottom:'-80px'
}

const textoNoRosa = {
    marginRight:'15px', 
    fontWeight:'lighter', 
    fontSize:'20px'
}

const textoRosa = {
    marginRight:'15px',
    fontFamily:'MonumentUltraBold', 
    color:'#d39ab0', 
    fontSize:'30px'
}

const Teams = () => {
    return (
        <div id="contenedor1" style={{marginTop:'50px'}}>
           
            <div style={contenedorRosters}>
                <h1 style={{fontFamily:"MonumentUltraBold", color:'#d39ab0', mixBlendMode: 'difference '}}>EQUIPOS</h1>
                <div>
                <hr/>
                    <div>
                        <img src="https://i.ibb.co/wLSysvK/Recurso-3.png" alt="https://i.ibb.co/wLSysvK/Recurso-3.png" style={styleImgRoster}/>
                    </div>
                    <div style={{textAlign:'center',  fontFamily:"MonumentRegular", mixBlendMode: 'difference', color:'#fff'}}>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>JEREMIAS</h5>
                            <h5 style={textoRosa}> KEKE </h5>
                            <h5 style={textoNoRosa}> ARRIETA</h5>
                        </div> 
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>FRANCO</h5>
                            <h5 style={textoRosa}> FRAN.- </h5>
                            <h5 style={textoNoRosa}>PALOMO</h5>
                        </div>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>IGNACIO</h5>
                            <h5 style={textoRosa}> M4 </h5>
                            <h5 style={textoNoRosa}>AGUIRRE</h5>
                        </div>
                        <div style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'row',marginBottom:'-20px'}}>
                            <h5 style={textoNoRosa}>RODRIGO</h5>
                            <h5 style={textoRosa}> RDRY </h5>
                            <h5 style={textoNoRosa}> LAVOZ </h5>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                
                <div>
                    <div>
                        <img src="https://i.ibb.co/QJX8dJF/Recurso-2.png" alt="https://i.ibb.co/QJX8dJF/Recurso-2.png" style={styleImgRoster}/>
                    </div>
                    <div style={{textAlign:'center',  fontFamily:"MonumentRegular", mixBlendMode: 'difference', color:'#fff'}}>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}style={textoNoRosa}>FACUNDO</h5>
                            <h5 style={textoRosa}> MARAN </h5>
                            <h5 style={textoNoRosa}>ZARACHO</h5>
                        </div>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>AGUSTÍN</h5>
                            <h5 style={textoRosa}style={textoRosa}> MPX </h5>
                            <h5 style={textoNoRosa}>VALENTÍN</h5>
                        </div>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>ANTU</h5>
                            <h5 style={textoRosa}> STOUD </h5>
                            <h5 style={textoNoRosa}>LIMA</h5>
                        </div>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>ANTU</h5>
                            <h5 style={textoRosa}> STOUD </h5>
                            <h5 style={textoNoRosa}>LIMA</h5>
                        </div>
                            <div style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'row',marginBottom:'-20px'}}>
                                <h5 style={textoNoRosa}>DANIEL</h5>
                                <h5 style={textoRosa}> SCOFIELD </h5>
                                <h5 style={textoNoRosa}>UHICH</h5>
                            </div>
                    </div>
                    <hr/>
                </div>   

                <div>
                    <div>
                        <img src="https://i.ibb.co/s1fqMvy/Recurso-1.png" alt="https://i.ibb.co/s1fqMvy/Recurso-1.png" style={styleImgRoster}/>
                    </div>
                    <div style={{textAlign:'center',  fontFamily:"MonumentRegular", mixBlendMode: 'difference', color:'#fff'}}>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>GIOVANNI</h5>
                            <h5 style={textoRosa}> GIO </h5>
                            <h5 style={textoNoRosa}>BERNARDINI</h5>
                        </div>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>NICOLÁS</h5>
                            <h5 style={textoRosa}> NICO </h5>
                            <h5 style={textoNoRosa}>AGUIRRE</h5>
                        </div>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>AGUSTÍN</h5>
                            <h5 style={textoRosa}> BAMBI </h5>
                            <h5 style={textoNoRosa}>GEREZ</h5>
                        </div>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>MAXIMILIANO</h5>
                            <h5 style={textoRosa}> WAYAN </h5>
                            <h5 style={textoNoRosa}>BURGOS</h5>
                        </div>
                        <div style={contenedorNombres}>
                            <h5 style={textoNoRosa}>FACUNDO</h5>
                            <h5 style={textoRosa}> FACU </h5>
                            <h5 style={textoNoRosa}>SOLÍS</h5>
                        </div>
                        <div style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'row',marginBottom:'-50px'}}>
                            <h5 style={textoNoRosa}>MIRKO</h5>
                            <h5 style={textoRosa}> MIRKO </h5>
                            <h5 style={textoNoRosa}>ALFONSO</h5>
                        </div>
                    </div>
                </div>    
            </div>
            <div style={{marginBottom:'-50px'}}>
                <div style={{height: '200px', display:'flex', justifyContent: 'center', alignItems:'flex-end'}}>
                    <img src="https://i.ibb.co/7VzPD7Z/Go-LMP-PNG.png" style={imgGoLMP}></img>
                </div>
            </div>
        </div>
    );
};

export default Teams;