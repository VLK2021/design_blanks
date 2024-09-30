import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Carousels from "./pages/Carousels/Carousels";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/carousels'} element={<Carousels/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
