import React, { useContext } from 'react';
import { Row, Col, Collapse, Button } from 'antd';
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import ElementForm from './ElementForm/ElementForm'
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
                <Button
                    style={{ marginTop: 20 }}
                    type="primary"
                    onClick={() => tmpPageService.saveBtn.onClick()}
                    disabled={!tmpPageService.saveBtn.isValid}
                >
                    Создать
                    </Button>
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