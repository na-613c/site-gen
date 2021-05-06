import React from 'react';
import { Table, Button, Popconfirm, Card } from 'antd';
import { NavLink } from 'react-router-dom'



const AllWebSites = ({ user, firebaseService }) => {
    const { isLoading, sites, removeWebsite, email } = firebaseService

    const columns = [
        {
            title: 'Вебсайт',
            dataIndex: 'site',
            key: 'site',
            render: (url) => <NavLink to={`${url}`} key={url}>{`https://na-613c.github.io/site-gen#/${url}`}</NavLink>,
        }, {
            title: 'Имя создателя',
            dataIndex: 'displayName',
            key: 'displayName',
        },]

    const text = 'Вы действительно хотите удалить сайт?'


    user && columns.push({
        title: 'Дейтсвие',
        dataIndex: '',
        key: 'x',
        render: (data) => (
            <Popconfirm
                placement="topLeft"
                title={text}
                onConfirm={() => removeWebsite(data.key)}
                disabled={email !== data.email}
                okText="Да" cancelText="Нет"
            >
                <Button type="primary" danger disabled={email !== data.email}>
                    Удалить
                </Button>
            </Popconfirm>),
    })


    const data = sites.map((el) => {
        return {
            key: el.uid,
            site: el.url,
            displayName: el.displayName,
            email: el.email
        }
    })


    return (
        <Card style={{ boxShadow: ' 0 10px 40px #c7d7b5' }}>
            <Table
                columns={columns}
                dataSource={data}
                loading={isLoading}
                size="small"
                pagination={{ pageSize: 5 }}
                style={{ transitionDuration: '.5s' }}
            />
        </Card>
    )
}

export default React.memo(AllWebSites);