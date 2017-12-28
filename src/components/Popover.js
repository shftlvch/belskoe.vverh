import React, {Component} from "react";

import "./Popover.css";
import Share from "./Share";
import template from '../assets/template-placeholder-3.jpg'


class Popover extends Component {
    constructor(props) {
        super(props);


        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.onHide();
    }


    render() {
        const props = this.props,
            name = props.name.charAt(0).toUpperCase() + props.name.slice(1);

        if (typeof document !== 'undefined') {
            if (props.open) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }

        return (
            <div className={"modal-over " + (props.open ? 'modal-over_open' : '')}>
                <div className="modal-over__inner container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="result">
                                <div className="result__header">{name}, спасибо!</div>
                                <div className="result__img">
                                    <img src={template} className="result__template img img-fluid"/>
                                    <img src={props.image} className="result__final-img img img-fluid"/>
                                </div>
                                <div className="result__share-label">Поделитесь мотивацией:</div>
                                <Share
                                    className="result__share"
                                    title={`я ${props.role} #лагерь_вверх — Центр «Вверх»`}
                                    url={`http://belskoe.vverh.su/view/${props.hash}`}
                                    image={props.image}
                                />
                                <div className="result__btns">
                                    <a href="https://vverh.su/campaign/help/"
                                       target="_blank" rel="noopener noreferrer"
                                       className="col-lg-5 btn btn_donate result__donate">
                                        <i className="fa fa-heart-o" aria-hidden="true"/>
                                        Помочь «Вверху»
                                    </a>
                                    <button className="col-lg-5 offset-lg-2 btn btn-light result__reset" onClick={this.handleClose}>
                                        <i className="fa fa-refresh" aria-hidden="true"/>
                                        Начать заново
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={this.handleClose} className="modal-over__close"><i class="fa fa-times"
                                                                                 aria-hidden="true"></i></div>
            </div>
        )
    }
}

export default Popover

