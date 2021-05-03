import React from 'react';
import { Input, Alert } from 'antd';


class ElementForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.pageDom = props.pageDom;
        this.removeElement = props.removeElement;
        this.renderPageDOM = props.renderPageDOM;
    }

    onClose = () => {
        this.removeElement(this.pageDom.id)
        this.renderPageDOM()
    }


    onChangeContent = ({ target: { value } }) => {
        this.pageDom.onChangeContent(value)
        this.renderPageDOM()
    }

    onChangeURL = ({ target: { value } }) => {
        this.pageDom.onChangeURL(value)
        this.renderPageDOM()
    }

    render() {

        let myInput = (<>
            <Input placeholder="Контент" onChange={this.onChangeContent} />
            {this.pageDom.isHaveUrl &&
                <Input placeholder="URL" onChange={this.onChangeURL} />
            }
        </>)

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