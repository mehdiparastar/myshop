import React from 'react';
import Wrapper from '../../hoc/Wrapper'
const Layout = (props) => (
    <Wrapper>
        <div>هدر - بدنه اصلی - ستون - سایدبار</div>
        <main>
            {props.children}
        </main>
    </Wrapper>
)

export default Layout