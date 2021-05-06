import React, { useContext, useEffect } from 'react';
import { Row, Col, Button, Space, notification } from 'antd';
import ResultPage from './ResultPage/ResultPage';
import URLinput from './URLinput/URLinput'
import GeneratorEl from './generatorEl/GeneratorEl';
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { Prompt } from "react-router-dom";


const ConstructorPage = () => {

    const { store } = useContext(Context)
    const allUrl = store.firebaseService.allUrl;
    const tmpPageService = store.tmpPageService;

    const { url, clean, setUrl, pageDOMtoString, saveBtn } = tmpPageService;

    const isDuplicate = allUrl.includes(url);

    let isEmptyData = true;
    isEmptyData = !!pageDOMtoString.length || !!url.length;

    const btn = (
        <a href={`https://na-613c.github.io/site-gen#/${url}`} target='_blank' > Вы можете посетить сайт нажав на эту надпись.</a>
    );

    const onClickSaveBtn = () => {
        isEmptyData = true;
        saveBtn.onClick()
        notification.open({
            message: 'Сайт успешно создан',
            description: 'Вы успешно создали сайт.',
            btn,
        });
    };

    useEffect(() => {
        return () => clean()
    }, [])

    const message = (location, action) => {
        if (action === 'POP') {
            console.log("Backing up...")
        }

        return location.pathname.startsWith("/constructor")
            ? true
            : isEmptyData ? `Все данные будут утеряны, Вы действительно хотите покинуть страницу?` : true
    }


    return (
        <div>
            <Prompt message={message} />

            <Space align="start">
                <URLinput url={url} setUrl={setUrl} allUrl={allUrl} />
                <Button
                    type="primary"
                    onClick={onClickSaveBtn}
                    disabled={(!saveBtn.isValid || isDuplicate)}
                > Создать </Button>
            </Space>

            <Row>
                <Col xl={{ span: 12 }} lg={{ span: 16 }} md={{ span: 20 }} xs={{ span: 24 }}>
                    <GeneratorEl tmpPageService={{ ...tmpPageService }} />
                </Col>
                <Col xl={{ span: 12 }} lg={{ span: 24 }} md={{ span: 24 }} xs={{ span: 24 }}>
                    <ResultPage pageDOMtoString={pageDOMtoString} />
                </Col>
            </Row>
        </div>
    );
}

export default React.memo(observer(ConstructorPage));