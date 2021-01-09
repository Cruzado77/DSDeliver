import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Raphael Sena durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/user/cmdtRapha" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/raphael-sena-b33610202/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/_raphars/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;