import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';

function Footer() {
    return (
        <footer>
            <div>
                <a href="https://facebook.com/" target="_blank"><FacebookIcon/></a>
                <a href="https://twitter.com/" target="_blank"><TwitterIcon/></a>
                <a href="https://pinterest.com/" target="_blank"><PinterestIcon/></a>
                <a href="https://www.instagram.com/" target="_blank"><InstagramIcon/></a>
                <a href="mailto:comunidad@yarn.com" target="_blank"><MailIcon/></a>
            </div>
            <p><i className="fa fa-copyright" aria-hidden="true"></i>2020 Yarn Todos los derechos reservados.</p>
        </footer>

    )
}

export default Footer