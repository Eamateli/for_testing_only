import ReactPlayer from "react-player/youtube";


function Video (){

    return (
        <div className="card">
        <h1>React Player Example</h1>
        <div className="player-wrapper">
            <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                playing={false}
                volume={0.5}
                width="100%"
                height="100%"
                style={{ borderRadius: '8px', overflow: 'hidden' }}

            />
        </div>
    </div>
    )

}
   

export default Video;