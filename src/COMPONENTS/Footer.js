import '../STYLE/Footer.scss'
function Footer() {
    const year = new Date().getFullYear();
    console.log(year)
    return (
        <footer className="FooterBody">
            <div class="BoxFooter">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Linear programming.</a></li>
                    <li><a href="#">Nonlinear programming.</a></li>
                    <li><a href="#">In progress.</a></li>
                </ul>
            </div>
            <div class="BoxFooter">
                <h3>About</h3>
                <ul>
                    <li><a href="#"><img src={require('../img/footer/logo_udc.svg').default} /></a></li>
                    <li><a href="#">School of Telematics</a></li>
                    <li><a href="#">Developers</a></li>
                </ul>
            </div>
            <div class="BoxFooter">
                <h3>Tecnologies</h3>
                <ul>
                    <li><a href="#">React</a></li>
                    <li><a href="#">SCSS</a></li>
                </ul>
            </div>
            <div class="SocialNetworks">
                <div>
                    <a href="#"><img src={require('../img/footer/fb.png')} /></a>
                    <a href="#"><img src={require('../img/footer/yt.png')} /></a>
                    <a href="#"><img src={require('../img/footer/tw.png')} /></a>
                    <a href="#"><img src={require('../img/footer/gm.png')} /></a>
                </div>
                <p>{`Copyright ${year} © All rights reserved.`}</p>
            </div>
        </footer>
    )
}
export default Footer;