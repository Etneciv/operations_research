import '../STYLE/Carousel.scss'

function Carousel({ Info }) {
    console.log(Info[0].title)
    const CarouselSlide = Info.map((item) => {
        return (
            <div className='CarouselItem' id={item.id}>
                <img src={item.img} />
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                </div>
                <div className='MenuCarousel'>
                    {Info.map((a) => {
                        if (a.id == item.id) {
                            return (
                                <a className="MenuActive" href={`#${a.id}`}></a>
                            )
                        }
                        else {
                            return (
                                <a href={`#${a.id}`}></a>
                            )
                        }
                    })}
                </div>
            </div>
        )
    })
    return (
        <div className='CarouselContainer'>
            <div className='Carousel'>
                {CarouselSlide}
            </div>
        </div>

    )
}
export default Carousel;