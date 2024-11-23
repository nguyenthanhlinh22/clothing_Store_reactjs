import{ createContext } from 'react';
import { useState } from 'react';


export const SideBarContext = createContext(null);

export const SideBarProvider = ({ children }) => {
    const[isOpen, setIsOpen] = useState(false);
    const[Type, setType] = useState('');
    const value = {isOpen, setIsOpen, Type, setType};
    return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;

};