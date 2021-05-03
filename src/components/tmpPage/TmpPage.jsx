import React, { useContext } from 'react';
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'


const TmpPage = () => {

    const { store } = useContext(Context)

    const { tmpPageService } = store;

    const text = tmpPageService.getPageDOMtoString;

    console.log(text)

    let a = <div dangerouslySetInnerHTML={{
        __html:
            text
    }}>
    </div >

    return (
        <div>
            {a}
        </div>
    );
}

export default React.memo(observer(TmpPage));


