import React, { useEffect } from 'react';
import { Input, Form } from 'antd';


const URLinput = ({ url, setUrl, allUrl }) => {

    const [form] = Form.useForm();

    useEffect(() => {
        (url === '') && form.resetFields();
    }, [url, form]);

    const onChangeUrl = ({ target: { value } }) => {
        setUrl(value)
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
                    addonBefore={"http://localhost:3000/"}
                    maxLength={15}
                    style={{ width: 300 }}
                    size='middle'
                />
            </Form.Item>
        </Form>
    );
}

export default React.memo(URLinput);