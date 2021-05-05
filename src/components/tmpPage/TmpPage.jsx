import React from 'react';
import parse from 'html-react-parser';
import { observer } from 'mobx-react-lite'


const TmpPage = ({ text }) => {
    return (
        <div>
            {parse(text || '')}
        </div>
    );
}

export default React.memo(observer(TmpPage));


