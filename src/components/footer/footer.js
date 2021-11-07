import React from 'react';
import { Box } from "rebass";

const Footer = () => {
    return (
        <div className={"wrap"}>
            <Box flex={1}>
                <p></p>
            </Box>
            <Box flex={2}>
                <p><em>Legal Note. This website and its content is copyright of Olivier Van D'huynslager.
                    Any distribution or reproduction of part or all of the contents in any form is prohibited. You may not,
                    except with our written permission, distribute or commercialy exploit the content. Nor may you transit it
                    or store it in any other website or other form of electronic retrieval system without the prior written
                    permission of Olivier Van D'huynslager.</em></p>
            </Box>
        </div>
    )
}

export default Footer;