import React, { useContext } from 'react';
import { PageHeader, Button, Space, Avatar, Popconfirm } from 'antd';
import { NavLink } from 'react-router-dom'
import { CONSTRUCTOR_PAGE, MAIN_PAGE } from "../../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";
import firebase from "firebase";


const Header = () => {

    const { auth, store} = useContext(Context)

    const [user] = useAuthState(auth)

    user && store.firebaseService.setUser(user)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user} = await auth.signInWithPopup(provider)
        store.firebaseService.setUser(user)
    }

    const signOut = () => {
            store.firebaseService.setUser({
                displayName: null,
                email: null
            })
        auth.signOut()
    }
    const text = 'Вы действительно хотите выйти?'

    return (

        <PageHeader
            title="Генератор сайтов"
            extra={[
                <NavLink to={MAIN_PAGE} key='1'>Главная</NavLink>,
                user && <NavLink to={CONSTRUCTOR_PAGE} key='2'>Конструктор</NavLink>,
                user ?
                    (<Space align="center" key='3'>
                        <Avatar src={user.photoURL} alt={user.displayName} />
                        <span>{user.displayName}</span>
                        <Popconfirm placement="topLeft" title={text} onConfirm={signOut} okText="Да" cancelText="Нет">
                            <Button variant={"outlined"}>Выйти</Button>
                        </Popconfirm>
                    </Space>)
                    :
                    <Button onClick={login} type="primary" key='4'>Войти</Button>,
            ]} />
    );
}

export default React.memo(Header);