import React, { useEffect, useState } from "react";
import {Views} from "./views";
import GlobalStyle from './styles/globalStyles';

const App = () => {
    return(
        <>
            <GlobalStyle />
            <Views />           
        </>
    )
}

export default App