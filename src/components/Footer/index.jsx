import {ReactComponent as GithubIcon} from './../../assets/github.svg'
import {ReactComponent as LinkedInIcon} from './../../assets/linkedIn.svg'
import {ReactComponent as CopyrightIcon} from './../../assets/copyright.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="social-network">
                <ul>
                    <li>
                        <a href="https://github.com/rsalas82" alt="Github">
                            <GithubIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rsalasr/" alt="LinkedIn">
                            <LinkedInIcon />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="developedBy">
                <CopyrightIcon />
                {" "}
                Developed by Rafael Salas Robledo
            </div>
        </div>
    )
    
    
    
}

export default Footer