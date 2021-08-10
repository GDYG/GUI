import React from 'react'
import t from 'prop-types'
import classnames from 'classnames'
import './style/index.less'

export interface ButtonProps {
    /**
     * @description       Button 的类型
     * @default           'primary'
    */
    type?: 'primary' | 'dashed' | 'link' | 'text',
}

const buttonClass = 'gnt-button-cls'

const Button: React.FC<ButtonProps> = ({children, type='primary'}) => {
    return <div className={classnames(buttonClass)}>
        <button>{children}</button>
    </div>
}

Button.propTypes = {
    type: t.oneOf(['primary', 'dashed', 'link', 'text'])
}

export default Button
