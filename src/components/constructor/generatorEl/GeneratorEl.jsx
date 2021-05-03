import React, { useContext } from 'react';
import { Row, Col, Collapse } from 'antd';
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import ElementForm from './ElementForm'
import Animate from 'rc-animate';

const { Panel } = Collapse;

const GeneratorEl = () => {

    const { store } = useContext(Context)

    const { tmpPageService } = store;

    let pageDom = tmpPageService.getPageDOM();

    const elements = tmpPageService.elements.map((el, id) => {
        return (
            <Panel header={el.title} key={id}>
                {el.content.map((cont, id) => {
                    return (
                        <p key={id} onClick={() => cont.content(cont.title)}>
                            {cont.title}
                        </p>
                    )
                })}
            </Panel>
        )
    })

    const pageDomElements = pageDom.map((el) => {
        return (

            <ElementForm
                pageDom={el}
                key={el.id}
                removeElement={tmpPageService.removeElement}
                renderPageDOM={tmpPageService.renderPageDOM}
            />

        )
    })

    return (
        <Row>
            <Col span={12}>
                <Collapse>
                    {elements}
                </Collapse>
                <button onClick={() => tmpPageService.saveBtn()}>111111111</button>
            </Col>
            <Col span={12}>
                <Animate
                    transitionName="fade"
                    component="div"
                >
                    {pageDomElements}
                </Animate>

            </Col>
        </Row>


    );
}

export default React.memo(observer(GeneratorEl));