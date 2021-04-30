import React, { useContext } from 'react';
import { PageHeader, Button } from 'antd';
import { NavLink } from 'react-router-dom'
import { CONSTRUCTOR_PAGE, MAIN_PAGE } from "../../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";
import firebase from "firebase";

const Header = () => {

    const { auth } = useContext(Context)

    const [user] = useAuthState(auth)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
        console.log(user)
    }


    return (
        <PageHeader
            title="Генератор сайтов"
            extra={[
                <NavLink to={MAIN_PAGE}>Главная</NavLink>,
                user && <NavLink to={CONSTRUCTOR_PAGE}>Конструктор</NavLink>,
                user ?
                    <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
                    :
                    <Button onClick={login} type="primary">Войти</Button>,
            ]} />
    );
}

export default React.memo(Header);