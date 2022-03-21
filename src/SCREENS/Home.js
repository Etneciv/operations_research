import Header from '../COMPONENTS/Header';
import Carousel from '../COMPONENTS/Carousel';
import CarouselInfo from '../UTILS/CarouselInfo';
import YoutubeVideo from '../COMPONENTS/YoutubeVideo';
import VideosInfo from '../UTILS/VideosInfo';
import Footer from '../COMPONENTS/Footer';
function Home() {
    return (
        <>
            <Header title="Operations Research" />
            <Carousel Info={CarouselInfo} />
            <YoutubeVideo Video={VideosInfo} />
            <Footer />
        </>
    )
}

export default Home;