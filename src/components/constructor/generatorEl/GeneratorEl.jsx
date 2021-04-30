import React, { useContext } from 'react';
import { Collapse } from 'antd';
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'


const { Panel } = Collapse;

const GeneratorEl = () => {

    const { store } = useContext(Context)

    const { tmpPageService } = store;

    const elements = tmpPageService.elements.map((el, id) => {
        return (
            <Panel header={el.title} key={id}>
                {el.content.map((cont, id) => {
                    return (
                        <p key={id} onClick={() => cont.content()}>
                            {cont.title}
                        </p>
                    )
                })}
            </Panel>
        )
    })

    console.log(tmpPageService)

    function callback(key) {
        // console.log(key);
    }

    return (
        <div>
            <Collapse onChange={callback}>
                {elements}
            </Collapse>
            <button onClick={() => tmpPageService.saveBtn()}>111111111</button>
        </div>

    );
}

export default React.memo(observer(GeneratorEl));