import React from 'react';
import ReactDOM from 'react-dom';
import ResultPage from './ResultPage/ResultPage';
import URLinput from './URLinput/URLinput'
import { Row, Col } from 'antd';
import GeneratorEl from './generatorEl/GeneratorEl';



const ConstructorPage = () => {
    return (
        <div>
            <URLinput />
            <Row>
                <Col span={12}><GeneratorEl /> </Col>
                <Col span={12}><ResultPage /></Col>
            </Row>
        </div>
    );
}

export default React.memo(ConstructorPage);