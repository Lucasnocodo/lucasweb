import React,{ /*useState,*/ useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import login from "./page/loginPage";
import Home from "./homePage/index";
import "./components/i18n";
import { useTranslation } from "react-i18next";
import { useSelector} from "react-redux";


function App() {
    const locale = useSelector((state) => state.language.locale);
    const { i18n } = useTranslation();
    useEffect(() => {
        console.log('useEffect i18n change',locale)
        i18n.changeLanguage(locale);
    }, [locale]);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/login" component={login} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
