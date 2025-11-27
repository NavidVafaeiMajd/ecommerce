'use client'
import { createContext, useState, ReactNode, useContext } from "react";

interface NavbarContextType{
    isNavbarOpen: boolean;
    setNavbarOpen: (value:boolean) => void;
    toggleNavbar: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => setNavbarOpen(prev => !prev);

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, toggleNavbar, setNavbarOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook to use the navbar context
export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};