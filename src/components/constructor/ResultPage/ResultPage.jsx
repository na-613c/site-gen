import React from 'react';
import './ReultPage.css'
import parse from 'html-react-parser';
import Animate from 'rc-animate';

const ResultPage = ({ pageDOMtoString }) => {

    const text = pageDOMtoString.map((el) => <div key={el.id}>{parse(el.string || '')}</div>);

    return (
        <div className="pic-details-demo">
            <div className="pic-details-demo-header">
                <ul><li></li><li></li><li></li><li></li><li></li></ul>
                <Animate
                    component="div"
                    transitionName="fade"
                    style={{ width: '100%' }}
                >
                    {text}
                </Animate>
            </div>
        </div>
    );
}

export default React.memo(ResultPage);