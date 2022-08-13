import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer =()=>
    <footer className="footer">
        <div className="copyright">
            <CopyrightIcon/>
            <p>Todos los derechos reservados</p>
        </div>
        <div className="contacto">
            <p>Contactenos</p>
            <a href="https://www.whatsapp.com/?lang=es" target="_blank"><WhatsAppIcon fontSize="large"/></a>
            <a href="https://es-la.facebook.com/" target="_blank"><FacebookIcon fontSize="large"/></a>
            <a href="https://www.instagram.com/" target="_blank"><InstagramIcon fontSize="large"/></a>
        </div>
    </footer>;

export default Footer;