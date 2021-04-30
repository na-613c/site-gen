import React from 'react';
import { Steps, Button } from 'antd';
import LeftArrow from '../common/LeftArrow/LeftArrow'
import { NavLink } from 'react-router-dom'
import { CONSTRUCTOR_PAGE } from "../../utils/consts";

const { Step } = Steps;




const Main = () => {




    return (
        <>
            <h1>Здесь Вы можете собрать простенький сайт</h1>

            <Steps progressDot current={3} direction="vertical">
                <Step title="Регистрация" description="Для создания сайта необходиво войти через свой google аккаунт." />
                <Step title="Уникальный URL" description="Далее надо указать URL по которому будет доступен ваш сайт." />
                <Step title="Сборка" description="И последним этапом является то, что надо собрать сайт и сохранить." />
            </Steps>

            <div style={{ margin: '100px 0  0 100px' }}>
                <NavLink to={CONSTRUCTOR_PAGE} >
                    <Button type="primary" style={{ marginRight: 20 }}>
                        Начать создание
                    </Button>
                </NavLink>
                <LeftArrow /><span style={{ display: 'inline-block' }}>  Нажми на кнопку сбоку, что бы начать создание сайта.</span>
            </div>

        </>
    );
}

export default Main;