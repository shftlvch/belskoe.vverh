import React, {Component} from "react";

import "./Page.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class Page extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default Page

