import React from 'react';
import s from './ReultPage.module.css'

const ResultPage = () => {

    return (
        <div className={s.border}>
            <iframe src="http://localhost:3000/tmp" style={{ width: '100%', height: '100%' }}></iframe>
        </div>
    );
}

export default React.memo(ResultPage);