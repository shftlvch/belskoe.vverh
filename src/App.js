import React, {Component} from "react";

import "./App.css";
import "./assets/font-awesome/css/font-awesome.css";
import DocumentMeta from "react-document-meta";


import Page from "./components/Page";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {

    }



    static getRGBA(color, opacity) {
        return `rgba(${Math.floor(color[0])}, ${Math.floor(color[1])}, ${Math.floor(color[2])}, ${opacity}) `
    }

    render() {
        let state = this.state;

        const meta = {
            title: `#лагерь_вверх — Центр равных возможностей для детей-сирот «Вверх»`,
            description: 'Расскажите друзьям про проект #лагерь_вверх, может быть, благодаря вам у детей из интерната в Бельском-Устье будет больше поводов для улыбок.',
            canonical: `http://belkoe.vverh.su/`,
            meta: {
                charSet: 'utf-8',
                name: {
                    keywords: '#лагерь_вверх, Вверх, благотворительность, Центр равных возможностей для детей-сирот'
                },
                property: {
                    'og:image': '',
                }
            },
            auto: {
                ograph: true
            }
        };

        return (
            <DocumentMeta {...meta}>
                <Page/>
            </DocumentMeta>
        );
    }
}

export default App;
