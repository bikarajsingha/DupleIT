import React from "react";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/sign-up' element={<SignUp />} />
                <Route path='/user/sign-in' element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;