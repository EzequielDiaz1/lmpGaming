import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import './Form.css'


const texto = {
    fontFamily: "MonumentUltraBold", 
	fontSize: "32px",
	color:'#d39ab0',
	marginTop:'70px'
}

const texto1 = {
    fontFamily: "Euclid", 
    fontSize: "15px",
    color:'#fff'
}


const contenedorPadre = {
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
}

const padreDelPadre = {
	display:'flex', 
	alignItems:'center', 
	justifyContent:'center', 
	flexDirection:'column'
}

const input = {
	borderRadius:'10px',
	width:'400px',
	height:'30px',
	marginBottom:'10px',
	fontFamily: "Euclid", 
	fontSize:'12px',
	outline: 'none'
}

const sponsors = {
	fontFamily:'MonumentUltraBold',
	color:'#fff',
	mixBlendMode: 'difference ',
	marginBottom:'-50px'
}

const textArea = {
	borderRadius:'7px',
	width:'400px',
	maxWidth:'400px',
	height:'50px',
	maxHeight:'150px',
	fontFamily: "Euclid", 
	fontSize:'12px',
	outline: 'none'
}

const imgGoLMP = {
    width: '296.6',
    height: '90px',
    mixBlendMode: 'difference ',

}


const Form = () => {
   const frmContact = { userEmail:'', concernCategory:'', emailTitle:'', emailDetails:'' };
   const [contact,setContact] = useState(frmContact);
   const handleChange = e => { 
		const {name,value} = e.target;
        setContact({...contact,
			[name]:value
		}); 
   };


   const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('default_service','template_hum7j2r', contact, 'user_0qm6Dm0hCAVMxnH10E16F')
		.then((response) => {
				   setContact(frmContact);
                   swal({
                    text:
                        'El contacto fue exitoso, pronto nos pondremos en contacto',
                    icon: 'success',
                    })
		}, (err) => {
				   console.log('FAILED...', err);
		});
   }
  return (
	<div style={padreDelPadre}>
		<h1 style={texto}> CONTACTO </h1>
		<div style={contenedorPadre}>
		
			<form  onSubmit={handleSubmit}>
				
				<div >
						<div > <b style={texto1}>Tu correo electronico</b> <br/>
							<input  style={input} required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Tu correo electronico.." />
						</div>
				</div>

				<div >
						<div > <b style={texto1}>Asunto</b> <br/>
							<input style={input} value={contact.emailTitle} required type="text" name="emailTitle" onChange={handleChange}  className="form-control" placeholder="Asunto.." />
						</div>
				</div>
				<div >
						<div > <b style={texto1}>Mensaje</b> <br/>
							<textarea style={textArea} required name="emailDetails" onChange={handleChange} className="form-control" placeholder="Escribe tu mensaje.." value={contact.emailDetails}></textarea>
						</div>
				</div>
				
			</form>	
			<div >
						<button className='btn fourth' >Enviar</button>
				</div>
		</div>
		<hr/>
		<h1 style={sponsors}>SPONSORS</h1>
		<div style={{height: '200px', display:'flex', justifyContent: 'center', alignItems:'flex-end'}}>

            <img src="https://i.ibb.co/ZHnbQgK/LOGO-WONDER-BLANCO.png" style={imgGoLMP}></img>
        </div>
	</div>
  );
}
export default Form;

	
