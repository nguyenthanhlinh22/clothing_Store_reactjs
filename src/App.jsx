import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from './routers/routers'; // Corrected import path

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routers.map((item, index) => (
                    <Route
                        key={index}
                        path={item.path}
                        element={<item.component />} // Correctly pass the component as a React element
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;