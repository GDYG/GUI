import React, { useState, MouseEventHandler } from 'react'
import t from 'prop-types'
import classnames from 'classnames'
import './style/index.less'
export interface ButtonProps {
    /**
     * @description       Button 的类型
     * @default           'primary'
    */
    type?: 'primary' | 'dashed' | 'link' | 'text',
    loading?: boolean,
    onClick?: MouseEventHandler,
    icon?: React.ReactNode
}

export type Types = Record<Required<ButtonProps>['type'], string>

const buttonClass = 'gnt-button-cls'

const styleTypes: Types = {
    primary: 'gnt-button-primary',
    dashed: 'gnt-button-dashed',
    link: 'gnt-button-link',
    text: 'gnt-button-text',
}

const Button: React.FC<ButtonProps> = ({ children, loading=false, icon='', type='primary', ...arg}) => {
    return type == 'link' ? <a className={styleTypes[type]} {...arg}>{children}</a> : type == 'text' ? <span className={styleTypes[type]} {...arg}>{children}</span> : <button type='button' className={classnames(buttonClass, styleTypes[type])} {...arg}>
        {
            loading ? <svg className="load" viewBox="0 0 12 12">
                <circle className="loading" strokeDasharray='22' cx="6" cy="6" r="4" />
            </svg>
            : null
        }
        {
            !loading && icon ? <span className="gnt-button-cls-prev">{icon}</span> : null
        }
        <span>{children}</span>
    </button>
}

Button.propTypes = {
    type: t.oneOf(['primary', 'dashed', 'link', 'text']),
    loading: t.bool,
    onClick: t.func,
    icon: t.node
}

export default Button
