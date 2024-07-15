import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import Avatar from "../img/img.png"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Thaíssa Santos" />
            <p className="title">Desenvolvedora Front-End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
            Download do Currículo
            </a>
        </aside>
    )
}

export default Sidebar