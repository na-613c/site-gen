import React from 'react';
import { Input, Form, Alert } from 'antd';


class ElementForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.pageDom = props.pageDom;
        this.removeElement = props.removeElement;
        this.renderPageDOM = props.renderPageDOM;
        this.state = { content: props.pageDom.content, url: props.pageDom.url };
    }

    onClose = () => {
        this.removeElement(this.pageDom.id)
        this.renderPageDOM()
    }

    onChangeContent = ({ target: { value } }) => {
        this.pageDom.onChangeContent(value.trim())
        this.renderPageDOM()
        this.setState({ ...this.state, content: value.trim() })
    }

    onChangeURL = ({ target: { value } }) => {
        this.pageDom.onChangeURL(value.trim())
        this.renderPageDOM()
        this.setState({ ...this.state, url: value.trim() })
    }

    getStatus = (data) => {
        return (data === '' || data === undefined)
            ? { status: 'error', help: 'Заполните поле.' }
            : { status: 'success', help: false }
    }

    render() {

        let field1 = this.getStatus(this.state.content)
        let field2 = this.pageDom.isHaveUrl ? this.getStatus(this.state.url) : {}

        let myInput = (
            <Form>
                <Form.Item
                    name="caption"
                    onChange={this.onChangeContent}
                    hasFeedback
                    validateStatus={field1.status}
                    help={field1.help}
                >
                    <Input placeholder="Контент" />
                </Form.Item>

                {this.pageDom.isHaveUrl &&
                    (<Form.Item
                        name="url"
                        onChange={this.onChangeURL}
                        hasFeedback
                        validateStatus={field2.status}
                        help={field2.help}
                    >
                        <Input placeholder="URL" />
                    </Form.Item>)
                }
            </Form>
        )

        return (
            < Alert
                closable
                onClose={this.onClose}
                style={{ width: '100%' }}
                message={this.pageDom.title}
                description={myInput}
            />
        )
    }
}



export default ElementForm;