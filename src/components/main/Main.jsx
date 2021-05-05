import React, { useContext } from 'react';
import { Steps, Button, Row, Col, Space } from 'antd';
import LeftArrow from '../common/LeftArrow/LeftArrow'
import { NavLink } from 'react-router-dom'
import { CONSTRUCTOR_PAGE } from "../../utils/consts";
import AllWebSites from "./allWebSites/AllWebSites";
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const { Step } = Steps;


const Main = () => {

    const { store, auth } = useContext(Context)
    const [user] = useAuthState(auth)
    const firebaseService = store.firebaseService
    return (
        <>
            <Row>
                <h1>Здесь Вы можете собрать простенький сайт</h1>
            </Row>
            <Row>
                <Col span={12}>
                    <Steps progressDot current={3} direction="vertical">
                        <Step title="Регистрация" description="Для создания сайта необходиво войти через свой google аккаунт." />
                        <Step title="Уникальный URL" description="Далее надо указать URL по которому будет доступен ваш сайт." />
                        <Step title="Сборка" description="И последним этапом является то, что надо собрать сайт и сохранить." />
                    </Steps>
                </Col>
                <Col span={12}>
                    <NavLink to={CONSTRUCTOR_PAGE} >
                        <Button type="primary" style={{ marginRight: 20 }}>
                            Начать создание
                    </Button>
                    </NavLink>
                    <LeftArrow />
                    <span style={{ display: 'inline-block' }}>  Нажми на кнопку сбоку, что бы начать создание сайта.</span>
                </Col>
            </Row>

            <Row justify="space-around" align="middle">
                <Col span={12}>
                    <p>Список уже созданных сайтов</p>
                </Col>
                <Col span={12}>
                    <AllWebSites user={{...user}} firebaseService={{...firebaseService}}/>
                </Col>
            </Row>

        </>
    );
}

export default React.memo(observer(Main));