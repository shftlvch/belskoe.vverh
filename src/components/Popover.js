import React, {Component} from "react";

import "./Popover.css";
import Share from "./Share";


class Popover extends Component {
    constructor(props) {
        super(props);



        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.onHide();
    }


    render() {
        const props = this.props;

        if (typeof document !== 'undefined') {
            if (props.open) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }

        return (
            <div className={"modal-over " + (props.open ? 'modal-over_open' : '')}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            {props.name}, спасибо!
                            <img src={props.image} className="img img-fluid"/>
                            <div className="result__share-label">Поделитесь мотивацией:</div>
                            <Share
                                className="result__share"
                                title={`я ${props.role} #лагерь_вверх — Центр «Вверх»`}
                                url={`http://bright.vverh.su/view/${props.hash}`}
                                image={props.image}
                            />
                        </div>
                    </div>
                </div>
                <div onClick={this.handleClose} className="modal-over__close"><i class="fa fa-times" aria-hidden="true"></i></div>
            </div>
        )
    }
}

export default Popover

