import React, {Component} from "react";
import DocumentMeta from "react-document-meta";
import {Redirect} from "react-router";
import {MainApi} from "../api";


export default class View extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log('will mount');
        this._handleData('view');
    }

    componentDidMount() {
        window.location.replace("/");
    }

    async _handleData(key) {
        const {staticContext} = this.props

        if (staticContext && staticContext.data[key]) {
            // const o = staticContext.data[key]
            // this.setState({o});
        } else if (staticContext) {
            staticContext.data[key] = this._getData()
        } else if (!staticContext && window.DATA[key]) {
            const o = window.DATA[key];
            console.log('window: ', o);

            this.props.staticContext = {
                data: {[key]: o.data}
            };
            window.DATA[key] = null
        } else if (!staticContext) {
            const o = await this._getData()
            console.log('no staticContext: ', o);
            this.setState({static: o.data})
        }
    }

    async _getData() {
        const {staticContext} = this.props;
        const Api = staticContext ? staticContext.api.MainApi : MainApi;
        const myApi = new Api();
        const object = await myApi.getEntry(this.props.match.params.hash);
        return object;
    }

    render() {
        let meta, view, role = '', pic = '';

        if (this.props.staticContext || this.state.static) {
            console.log('has staticContext');

            view = this.props.staticContext ? this.props.staticContext.data.view: this.state.static;
            role = '';
            pic = false;

            if (typeof view.then !== 'function') {
                console.log(view);

                role = view.role;
                pic = view.pic;
            }

            meta = {
                title: `я ${role} #лагерь_вверх — Центр «Вверх»`,
                description: 'Расскажите друзьям про проект #лагерь_вверх, может быть, благодаря вам у детей из интерната в Бельском-Устье будет больше поводов для улыбок.',
                canonical: `http://belskoe.vverh.su/view/${this.props.match.params.hash}`,
                meta: {
                    charSet: 'utf-8',
                    name: {
                        keywords: '#лагерь_вверх, Вверх, благотворительность, Центр равных возможностей для детей-сирот'
                    },
                    property: {
                        'og:image': pic ? pic.url : '',
                    }
                },
                auto: {
                    ograph: true
                }
            };
        }
        console.log('meta:', meta);


        return (
            <DocumentMeta {...meta}>
                <h1>{`я ${role} #лагерь_вверх — Центр «Вверх»`}</h1>
            </DocumentMeta>

        );


    }

}
