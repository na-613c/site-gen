import React from 'react';
import s from './ReultPage.module.css'
import parse from 'html-react-parser';
import Animate from 'rc-animate';

const ResultPage = ({ pageDOMtoString}) => {

    const text = pageDOMtoString.map((el) => <div key={el.id}>{parse(el.string || '')}</div>);

    return (
        <div className={s.border}>
            <Animate
                component="div"
                transitionName="fade"
                style={{ width: '100%' }}
            >
                {text}
            </Animate>

        </div>
    );
}

export default React.memo(ResultPage);