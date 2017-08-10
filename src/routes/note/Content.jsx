import React, {PropTypes} from 'react';

import Control from './Control.jsx';
import Label from './Label.jsx';
import LeftNote from './LeftNote.jsx';
import RightNote from './RightNote.jsx';
import CompleteButton from './CompleteButton.jsx';

export default class Content extends React.Component {

    static propTypes = {
        codeModel: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {codeModel} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 note-area">
                        <div className="card">
                            <Control />
                            <Label />

                            <div className="note-content">
                                <LeftNote codeModel= {codeModel}/>
                                <RightNote />
                            </div>

                            <CompleteButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}