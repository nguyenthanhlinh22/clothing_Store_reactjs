import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from './routers/routers'; // Corrected import path
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from './compoents/SideBar/SideBar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/StoreProvider';

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SideBarProvider>
                    <SideBar />
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
                </SideBarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
