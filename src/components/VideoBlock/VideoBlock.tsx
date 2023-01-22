import css from "./VideoBlock.module.css";
// import video from "../../static/video2.mp4";
import video from "../../static/mermaid-video.mp4";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const VideoBlock = () => {
    const [isVideoReady, setVideoReady] = useState(false);

    useEffect(() => {
        fetch("../../static/mermaid-video.mp4").then(() => setVideoReady(true));
    }, []);

    return (
        <div className={css.videoBlock}>
            <div className={css.videoBlock__video}>
                {isVideoReady && <video src={video} autoPlay muted loop></video>}
            </div>
            <div className={cn(css.videoBlock__info, css.info)}>
                <div className={css.info__title}>Турекцие электронагреватели</div>
                <div className={css.info__text}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis, odit amet odio
                        consectetur, reiciendis voluptatibus pariatur error rem libero repellendus molestias dolore
                        fugit? Tempore officiis repudiandae labore amet commodi!
                    </p>
                </div>
                <div className={css.info__button}>
                    <NavLink to="/order">Оформить сейчас</NavLink>
                </div>
            </div>
        </div>
    );
};

export default VideoBlock;
