import React, { useContext } from 'react';
import { Input, Form } from 'antd';
import { Context } from '../../../../index'
import { observer } from 'mobx-react-lite'




const URLinput = () => {
    const { store } = useContext(Context)

    const onChangeUrl = ({ target: { value } }) => {
        store.tmpPageService.setUrl(value)
    }

    const getStatusUrl = (url) => {
        switch (url) {
            case '': return {
                status: 'error', help: 'Заполните поле.'
            }
            case '123': return {
                status: 'error', help: 'Данный URL-путь уже занят.'
            }
            default: return {
                status: 'success', help: false
            }
        }
    }

    let field = getStatusUrl(store.tmpPageService.url);

    return (
        <Form style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <Form.Item
                tooltip="По этой ссылке будет распологаться Ваш сайт."
                name="website"
                label="Cсылка"
                onChange={onChangeUrl}
                hasFeedback
                validateStatus={field.status}
                help={field.help}
            >
                <Input
                    addonBefore={"http://localhost:3000/"}
                    maxLength={15}
                    style={{ width: 300 }}
                    size='middle'
                />
            </Form.Item>
        </Form>
    );
}

export default React.memo(observer(URLinput));