import './Credits.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Credits = () => {
    return <div id="credits">
        <p>
            By
            <a id='github-account' href='https://github.com/Mihnea17A1'>  
                <FontAwesomeIcon icon={faGithub} /> Mihnea Ilie
            </a>

        </p>

        </div>
}

export default Credits

