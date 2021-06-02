import playlistCover from "../../assets/images/cover/playlist.png";

type HeaderProps = {
    title: string;
    subtitle: string;

}

const PlayListHeader = ({title, subtitle}: HeaderProps) => {
    return(
        <div className="header-container">
            <div className="container-background"/>
            <div className="readercontent">

                <img src={playlistCover} alt="Capa da Playlist" className="readercover" />
                <div className="info">
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                </div>
            </div>
        </div>
    );
    
};

export default PlayListHeader;