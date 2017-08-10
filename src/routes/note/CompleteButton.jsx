import React, {PropTypes} from 'react';

export default class CompleteButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="note-bottom">
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-10">
                        <div className="card-button">完了</div>
                    </div>
                </div>
            </div>
        );
    }
}