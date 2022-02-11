import React from 'react';

const Footer = () => {
    return (
        <div className="footer margin">
            <div className="footer-inner-logo"e>
                <a href="https://ovnd.bandcamp.com/"><img className="socialButton" src="media/logos/bandcamp.jpg" alt={"logo of Bandcamp"}></img></a>
            </div>
            <div className="footer-inner-logo">
                <a href="https://www.instagram.com/ovnd_music/"><img className="socialButton" src="media/logos/instagram.png" alt={"logo of Instagram"}></img></a>
            </div>
            <div className="footer-inner-logo">
                <a href="https://www.facebook.com/ovnd.music/"><img className="socialButton" src="media/logos/facebook.jpg" alt={"logo of Facebook"}></img></a>
            </div>
            <div className="footer-inner-logo">
                <a href="https://soundcloud.com/siegfreud"><img className="socialButton" src="media/logos/soundcloud.png" alt={"logo of Soundcloud"}></img></a>
            </div>
            <div className="footer-inner filler"></div>
            <div className="footer-inner">
                {/*<p className="margin-small-10"><em> ** Legal Note. This website and its content is copyright of Olivier Van D'huynslager.*/}
                {/*    Any distribution or reproduction of part or all of the contents in any form is prohibited. You may not,*/}
                {/*    except with our written permission, distribute or commercialy exploit the content. Nor may you transit it*/}
                {/*    or store it in any other website or other form of electronic retrieval system without the prior written*/}
                {/*    permission of Olivier Van D'huynslager.</em></p>*/}
            </div>
        </div>
    )
}

export default Footer;