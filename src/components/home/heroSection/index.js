import { Button } from 'react-bootstrap'
const HeroSection = () => {

    return(

        <section className="video-container">
            <video autoPlay muted loop>
                <source src="/video/NS_VB_EO_HPDesktop_M_VID_3200x1800_030122_v3.mp4 720P(1).mp4" type="video/mp4" />
            </video>
            <div className="caption">
            <h1>Find Your Self in FIGS</h1>
            <p>Introducing Night Sky — our newest color that celebrates your pursuit of finding something worth fighting for. Here in Limited Edition and Core Scrub styles.</p>

            <Button className="myButton" variant="light">Shop Men</Button>{' '}
            </div>
        </section>

    );
}

export default HeroSection;