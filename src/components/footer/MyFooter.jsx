import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const MyFooter = () => {
    return (
        <Footer style={{ textAlign: 'center' }}> Site Generator ©2021 Created by IVAN</Footer>
    );
}

export default React.memo(MyFooter);



