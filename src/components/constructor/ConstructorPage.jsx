import React, { useContext } from 'react';
import { Row, Col, Button, Space } from 'antd';
import ResultPage from './ResultPage/ResultPage';
import URLinput from './URLinput/URLinput'
import GeneratorEl from './generatorEl/GeneratorEl';

import { observer } from 'mobx-react-lite'
import { Context } from '../../index'


const ConstructorPage = () => {

    const { store } = useContext(Context)
    const tmpPageService = store.tmpPageService;
    const allUrl = store.firebaseService.allUrl;
    const pageDOMtoString = store.tmpPageService.pageDOMtoString;

    const url = store.tmpPageService.url;
    const setUrl = store.tmpPageService.setUrl;

    return (
        <div>
            <Space align="start">
                <URLinput url={url} setUrl={setUrl} allUrl={allUrl}/>
                <Button
                    type="primary"
                    onClick={tmpPageService.saveBtn.onClick}
                    disabled={!tmpPageService.saveBtn.isValid}
                > Создать </Button>
            </Space>

            <Row>
                <Col span={12}>
                    <GeneratorEl tmpPageService={{ ...tmpPageService }} />
                </Col>
                <Col span={12}>
                    <ResultPage pageDOMtoString={pageDOMtoString} />
                </Col>
            </Row>
        </div>
    );
}

export default React.memo(observer(ConstructorPage));