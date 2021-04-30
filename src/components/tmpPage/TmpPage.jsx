import React from 'react';


const TmpPage = () => {

    let test = '<button class="ant-btn ant-btn-primary">1234</button>'
    let a = < div className="Container" dangerouslySetInnerHTML={{
        __html:
            test
    }}>
    </div >

    return (
        <div>
            TmpPage
            {a}
        </div>
    );
}

export default React.memo(TmpPage);