import { useState } from 'react';
import SubmissionForm from '../submission-form/SubmissionForm';

import './Contests.css';

const Contests = ({ onNewSubmission }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="box">
            <h4 className='headline'>Qualification Round 2019</h4>
            <h4>Photo slideshow</h4>
            <div className="box-actions">
                <button className="new-sub" onClick={handleShow}>
                    New Submission
                </button>
                {show && <SubmissionForm show={show} handleClose={handleClose} onNewSubmission={onNewSubmission} />}
            </div>
        </div>

    );
}

export default Contests;
