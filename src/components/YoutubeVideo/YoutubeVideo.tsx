import css from "./Youtube.module.css";

type VideoProps = {
    videoCode: string;
};

const YoutubeVideo = ({ videoCode }: VideoProps) => {
    return (
        <div className={css.videoResponsive}>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${videoCode}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};

export default YoutubeVideo;
