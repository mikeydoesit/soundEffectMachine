import React, { Component } from 'react';
import Pad from './Pad';
import Display from './Display';

class Pads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clipName: ''
        }
        this.playClip = this.playClip.bind(this)
        this.resetPadStyle = this.resetPadStyle.bind(this)
    }


    playClip(index, name) {
        const sound = document.getElementById(`${index}`);
        const padBgd = document.getElementById(`${index}Wrapper`);
        this.setState({
            clipName: name
        })
        sound.play();

        if(sound.play) {
            padBgd.style.border = '1px solid #0f0f0f0f';
            padBgd.style.boxShadow = '0 0 7px rgb(141, 172, 254), 0 0 14px rgb(141, 172, 254), 0 0 21px rgb(141, 172, 254), 0 0 28px rgb(141, 172, 254)';
            padBgd.style.background = 'radial-gradient(circle, rgba(141, 172, 254, 1) 0%, rgba(187, 205, 253, 1) 100%)';
        }
    }

    resetPadStyle(index) {
        const sound = document.getElementById(`${index}`);
        const padBgd = document.getElementById(`${index}Wrapper`);

        if(sound.ended) {
            padBgd.style.border = '2px solid #0f0f0f';
            padBgd.style.boxShadow = 'inset 3px 0 0px -1px #4b4c4f, inset 0 -3px 1px -1px #424346, inset 0 -4px 0 -1px #353639, inset 5px 0 1px -1px rgba(182, 182, 190, 0.6), inset 0 -5px 1px -1px rgba(182, 182, 190, 0.2)';
            padBgd.style.background = 'radial-gradient(circle, rgba(231, 232, 237, 1) 0%, rgba(213, 216, 223, 1) 100%)';
        }
    }


    render() {
        const currentClip = this.state.clipName;
        const clips = this.props.payload;
        const clipList = clips.map((clip, i) => {
            return (
                <Pad defaultStyle={() => this.resetPadStyle(i)} play={() => this.playClip(i, clip.name)} id={i} key={clip.name} audioSrc={clip.previews["preview-hq-mp3"]} />
            )
        });

        return (
            <div id="drumPadWrapper">
                <Display currentClip={currentClip}/>
                <div id="drumPadContainer">
                    {clipList}
                </div>
            </div>
        )
    }
}

export default Pads