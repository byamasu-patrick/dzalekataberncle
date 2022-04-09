import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { AdminComponent } from "./components/admin/AdminComponent";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import { NavbarContextProvider } from "./context.api/NavbarContextProvider";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export const RoutesLink = () => {
    return (
        <React.Fragment>            
            <NavbarContextProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path="/admin" element={ <PrivateRoute /> }>
                            <Route exact path="/admin" element={ <AdminComponent /> } />
                        </Route>
                        <Route exact path="/" element={ <Home />} />
                        <Route exact path="/contact-us" element={ <ContactPage />} />
                        <Route exact path="/about-us" element={ <AboutPage />} />
                    </Routes> 
                </Router> 
                <Footer />    
            </NavbarContextProvider> 
        </React.Fragment>
    );
}