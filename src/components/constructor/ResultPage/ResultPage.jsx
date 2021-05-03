import React, { useContext } from 'react';
import s from './ReultPage.module.css'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import parse from 'html-react-parser';
import Animate from 'rc-animate';

const ResultPage = () => {
    const { store } = useContext(Context)
    const pageDOMtoString = store.tmpPageService.pageDOMtoString
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

export default React.memo(observer(ResultPage));