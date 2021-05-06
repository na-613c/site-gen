import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Button, Space, notification } from 'antd';
import ResultPage from './ResultPage/ResultPage';
import URLinput from './URLinput/URLinput'
import GeneratorEl from './generatorEl/GeneratorEl';
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { Prompt } from "react-router-dom";


const ConstructorPage = () => {

    const { store } = useContext(Context)
    const tmpPageService = store.tmpPageService;
    const allUrl = store.firebaseService.allUrl;
    const pageDOMtoString = store.tmpPageService.pageDOMtoString;

    const url = store.tmpPageService.url;
    const setUrl = store.tmpPageService.setUrl;

    const clean = store.tmpPageService.clean;

    const isDuplicate = allUrl.includes(url);

    let isEmptyData = true;
    isEmptyData = !!pageDOMtoString.length || !!url.length;

    const btn = (
        <a href={`https://na-613c.github.io/site-gen#/${url}`} target='_blank' > Вы можете посетить сайт нажав на эту надпись.</a>
    );

    const onClickSaveBtn = () => {
        isEmptyData = true;
        tmpPageService.saveBtn.onClick()
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
                    disabled={(!tmpPageService.saveBtn.isValid || isDuplicate)}
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