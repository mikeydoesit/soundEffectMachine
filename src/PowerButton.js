import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

const PowerButton = (props) => {
    return (
        <div onClick={props.toggle} id="powerWrapper">
            <div id="powerButtonWrapper">
                <FontAwesomeIcon icon={faPowerOff} style={props.onoff}/>
            </div>
        </div>
    )
}

export default PowerButton