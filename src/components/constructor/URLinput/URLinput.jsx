import React, { useEffect } from 'react';
import { Input, Form } from 'antd';


const URLinput = ({ url, setUrl, allUrl }) => {

    const [form] = Form.useForm();

    useEffect(() => {
        (url === '') && form.resetFields();
    }, [url, form]);

    const onChangeUrl = ({ target: { value } }) => {
        setUrl(value.trim())
    }

    const getStatusUrl = (url) => {
        switch (url) {
            case '': return {
                status: 'error', help: 'Заполните поле.'
            }
            default:
                if (allUrl.includes(url)) {
                    return {
                        status: 'error', help: 'Данный URL-путь уже занят.'
                    }
                } else {
                    return {
                        status: 'success', help: false
                    }
                }
        }
    }
    
    if (window.innerWidth < 590) alert('Для корректной работы, откройте с устройва с шириной экрана более 590 пикселей!')

    let field = getStatusUrl(url);

    return (
        <Form
            style={{ display: 'flex', alignItems: 'center' }}
            form={form}
        >
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
                    addonBefore={window.innerWidth > 800 ? "https://na-613c.github.io/site-gen" : "site-gen"}
                    maxLength={15}
                    style={{ width: window.innerWidth > 800 ? 400 : 240 }}
                    size='middle'
                />
            </Form.Item>
        </Form>
    );
}

export default React.memo(URLinput);