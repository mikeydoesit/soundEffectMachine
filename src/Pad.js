

const Pad = (props) => {
    return (
        <div id={props.id + 'Wrapper'} className="pad" onClick={props.play}>
            <audio onEnded={props.defaultStyle} id={props.id} src={props.audioSrc}></audio>
        </div>
    )
}

export default Pad 