import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../Actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';


import ReactPlayer from "react-player";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color:  "#fff";
  `;

const ModalVideos = props => {

    const [estado, setEstado] = useState(true)
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;
    console.log(estado)
    useLayoutEffect(() => {
        props.getVideoSource(id);
        setInterval(() => {
            setEstado(false)
        }, 2000);
    }, []);

    return hasPlaying ? (
        <div className="Player" >
            <div className="PropagateLoader">
                <RingLoader color={"#fff"} loading={estado} css={override} size={150} speedMultiplier={2} />;
            </div>
            <ReactPlayer url={props.playing.source} playing={true} loop controls className="videoreact" />

            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <NotFound />;
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalVideos);



