import React from 'react';
import { Row, Col, Collapse } from 'antd';
import ElementForm from './ElementForm/ElementForm'
import Animate from 'rc-animate';

const { Panel } = Collapse;


const GeneratorEl = ({ tmpPageService }) => {

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

    const pageDomElements = tmpPageService.getPageDOM().map((el) => {
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
            </Col>
            <Col span={12}>
                <Animate transitionName="fade" component="div" >
                    {pageDomElements}
                </Animate>
            </Col>
        </Row>


    );
}

export default React.memo(GeneratorEl);