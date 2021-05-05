import Animate from 'rc-animate';
import * as React from "react";


export const withAmimate = (Component) => {
    return (props) => {
        return (
            <Animate
                component="div"
                transitionName="fade"
                {...props}
            >
                <Component {...props} />
            </Animate>
        )
    }
};