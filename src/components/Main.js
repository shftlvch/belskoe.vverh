import React, {Component} from "react";

import "./Main.css";
import {RIESelect} from "riek";
import Typed from "typed.js";
import request from "superagent";
import Popover from "./Popover";


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select: {id: "1", text: "знаю про"},
            selectOptions: [
                {id: "1", text: "знаю про"},
                {id: "2", text: "хочу в"},
                {id: "3", text: "волонтер"},
                {id: "4", text: "люблю"},
            ],
            valid: true,
            name: '',
            placeholders: [
                'аня',
                'лена',
                'даня',
                'катя',
                'артем',
                'саша',
                'ольга',
                'ховард',
                'полина',
                'соня',
                'таня',
                'денис',
                'вова',
                'анита',
                'лёша',
                'андрей',
                'инна',
            ],
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
        this.onSend = this.onSend.bind(this);
        this.onReset = this.onReset.bind(this);
        this.handleImageProcess = this.handleImageProcess.bind(this);
    }

    componentDidMount() {
        let typed = new Typed('.template__input', {
            strings: this.state.placeholders,
            typeSpeed: 100,
            backSpeed: 10,
            attr: 'placeholder',
            bindInputFocusEvents: true,
            loop: true,
        });
    }

    onSend() {
        if (!this.state.name) {
            let timerId = setInterval(() => {
                this.setState({valid: !this.state.valid});
            }, 100);

            setTimeout(() => {
                clearInterval(timerId);
                this.setState({valid: true});
            }, 1500);
        } else {
            this.setState({isLoading: true});
            this.handleImageProcess();

        }
        console.log('send');
    }

    onReset() {
        this.setState({pic: false})
    }

    handleImageProcess() {
        let req = request.post(process.env.NODE_ENV === 'production' ? '/api/process' : 'http://localhost:3001/api/process')
            .send({'name': this.state.name})
            .send({'role': this.state.select.text});

        req.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response.hasOwnProperty('body') && response.body !== '') {
                this.setState({
                    pic: response.body.data.object.url,
                    imageGeneratedHash: response.body.data.object.public_id,
                    isLoading: false
                });
            }
        });
    }


    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeRole(val) {
        this.setState({select: val.select});
    }


    render() {
        let state = this.state,
            placeholder = state.placeholders[state.placeholder];
        return (
            <div className="slide main">

                <div className="slide__overlay"/>
                <div className="slide__inner container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="main__description">Расскажите друзьям про проект #лагерь_вверх, может быть,
                                благодаря вам у детей из
                                интерната в Бельском-Устье будет больше поводов для улыбок.
                            </div>
                            <div className="list">
                                <div className="list__header">
                                    Как это работает?
                                </div>
                                <div className="list__wrap">
                                    <div className="list__element">1. Укажите ваше имя</div>
                                    <div className="list__element">2. Выберите что для вас <a
                                        href="http://belskoe.vverh.su">#лагерь_вверх</a></div>
                                    <div className="list__element">3. Получите картинку и  &nbsp;<i
                                        className="fa fa-share" aria-hidden="true"/> поделитесь
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="template">
                                <div className="template__name">я —
                                    <input
                                        className={
                                            [
                                                'template__input',
                                                !state.valid ? 'template__input_error' : [],
                                                state.name ? 'template__input_filled' : []
                                            ].join(' ')
                                        }
                                        maxLength="8"
                                        value={state.reason} onChange={this.handleChangeName}
                                        placeholder={placeholder}/></div>

                                <div className="template__role">я
                                    <RIESelect
                                        className="template__select"
                                        value={state.select}
                                        options={state.selectOptions}
                                        change={this.handleChangeRole}
                                        propName='select'
                                    />
                                </div>
                                <div className="template__hashtag">#лагерь_вверх</div>
                            </div>

                            <div className="row ">
                                <button className="main__btn btn btn-success"
                                        disabled={this.state.isLoading}
                                        onClick={this.onSend}>
                                    {!this.state.isLoading ?
                                        <span><i className="fa fa-heart-o" aria-hidden="true"/>&nbsp;Получить картинку и поделиться</span> :
                                        <span><i className="fa fa-refresh fa-spin fa-fw" aria-hidden="true"/> Делаем красоту...</span>}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                {/*<Popover*/}
                    {/*open={true}*/}
                    {/*name="василий"*/}
                    {/*image="http://res.cloudinary.com/vverh/image/upload/v1514410414/c5rtewbblctexfedrrdy.png"*/}
                    {/*hash="c5rtewbblctexfedrrdy"*/}
                    {/*onHide={this.onReset}*/}
                {/*/>*/}

                <Popover
                open={this.state.pic}
                name={this.state.name}
                image={this.state.pic}
                hash={this.state.imageGeneratedHash}
                onHide={this.onReset}/>
            </div>
        )
    }
}

export default Main

