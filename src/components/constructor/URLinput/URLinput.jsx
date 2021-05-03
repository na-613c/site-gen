import React from 'react';
import { Input } from 'antd';


const URLinput = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <Input
                addonBefore="http://localhost:3000/"
                defaultValue="mysite"
                maxLength={15}
                style={{ width: 300 }}
                size='middle'
            />
            <span style={{ paddingLeft:10,display: 'inline-block' }}> - по этой ссылку будет распологаться Ваш сайт.</span>
        </div>
    );
}

export default React.memo(URLinput);