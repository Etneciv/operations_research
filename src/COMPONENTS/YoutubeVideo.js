import '../STYLE/Global.scss'

function YoutubeVideo({ Video }) {

    const RenderVideos = Video.map((videoItem) => {
        return (
            <div className='VideoBox'>
                <iframe width="100%" height="100%" src={videoItem.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4>{videoItem.title}</h4>
            </div >
        )
    })

    return (
        <div className='VideoContainer'>
            {RenderVideos}
        </div>
    )
}

export default YoutubeVideo;