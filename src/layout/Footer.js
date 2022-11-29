import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa' 


import style from './Footer.module.css'

function Footer(){
    return (
        <footer>
            <ul className={style.social_list}>
            <a href="https://github.com/vandersonmauricio" target="_blank" rel="noopener noreferrer"><li><FaFacebook/></li> </a> 
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
            </ul>
        </footer>
    )
}
export default Footer;