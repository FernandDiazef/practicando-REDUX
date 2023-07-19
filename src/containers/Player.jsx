import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Player.scss';
import { getVideoSource } from '../Actions'
import NotFound from './NotFound';

const Player = props => {

    useLayoutEffect(() => {
        props.getVideoSource(id);
    }, [])

    const { id } = props.match.params;

    const hasPlaying = Object.keys(props.playing).length > 0;

    return hasPlaying ? (
        <>
            <div className="Player">
                <video controls autoPlay >
                <source src={props.playing.source} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
                <div className="Player-back">
                    <button type="button" onClick={() => props.history.goBack()}>
                        Regresar
                    </button>
                </div>
            </div>
        </>

    ) : <NotFound />;
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);