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
	justifyContent:'center',
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
	minWidth:'400px',
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
	marginRight:'25px',
	marginLeft:'25px'
}


const Form = () => {
	const frmContact = { userEmail:'', concernCategory:'', emailTitle:'', contenido:'' };
	const [contact,setContact] = useState(frmContact);
	const [showMessage, setShowMessage] = useState(false);
	const handleChange = e => { 
		 const {name,value} = e.target;
		 setContact({...contact,[name]:value}); 
	};
	const handleSubmit = e =>{
		 e.preventDefault();
		
		 emailjs.send('default_service','template_hum7j2r', contact, 'user_0qm6Dm0hCAVMxnH10E16F')
		 .then((response) => {
					console.log('SUCCESS!', response.status, response.text);
					setContact(frmContact);
					setShowMessage(true);
					swal({
						text:'El mensaje fue enviado correctamente, pronto estaremos en contacto',
						icon: 'success',
					})
		 }, (err) => {
					console.log('FAILED...', err);
		 });
	}
   return (
	 <div style={padreDelPadre}>
		 <h1 style={texto}>CONTACTO</h1>
		 <form onSubmit={handleSubmit} style={contenedorPadre}>
			  
			   <div>
					 <div> <b style={texto1}>Tu correo electronico</b><br/>
						 <input style={input} required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Correo electronico.." />
					 </div>
			   </div>
			   
			   <div>
					 <div> <b style={texto1}>Asunto</b> <br/>
						 <input style={input} value={contact.emailTitle} required type="text" name="emailTitle" onChange={handleChange}  className="form-control" placeholder="Asunto.." />
					 </div>
			   </div>

			   <div>
					 <div> <b style={texto1}>Escribe tu mensaje</b><br/>
						 <input style={textArea} required name="concernCategory" onChange={handleChange} className="form-control" placeholder="Tu mensaje.." value={contact.concernCategory}/>
					 </div>
			   </div>
			   <div>
					 <button className="btn fourth">Enviar</button>
			   </div>
		 </form>		
		 <hr style={{marginTop:'50px'}}/>
		 <h1 style={sponsors}>SPONSORS</h1>
		 <div style={{height: '200px', display:'flex',justifyContent: 'space-around' ,alignItems:'flex-end'}}>
			<div>
				<a href="https://www.instagram.com/wonder.hamburgueseria/"><img style={imgGoLMP} src="https://i.ibb.co/ZHnbQgK/LOGO-WONDER-BLANCO.png" alt=""/></a>
		 	</div>
			<div>
			<a href="https://www.instagram.com/clean.pc20/"><img style={imgGoLMP} src="https://i.ibb.co/FJQwYhG/Recurso-6.png" alt=""/></a>
			</div>
		 </div>
	 </div>
   );
 }

 export default Form;
