import React, { FC, useRef, useEffect } from 'react'
import './style/index.less'

export interface textjumpProps { 
    style?: React.CSSProperties,
    wrapperClassName?: string,
    speed?: number,
}

const TextJump: FC<textjumpProps> = ({ children, style, wrapperClassName, speed = 1 }) => {
    const jRef = useRef<HTMLDivElement>(null)
    useEffect(() => { 
        let ele = jRef.current && jRef.current?.children || null
        let len = ele?.length || 0
        for (let i = 0; i < len; i++) { 
            if (ele) { 
                ele[i].setAttribute('style', `animation: jump ${speed}s linear ${i * (1/5)}s infinite alternate`)
            }
        }
    }, [])
    return <div ref={jRef} style={style} className={`text-jump-cont ${wrapperClassName}`}>
        { children }
    </div>
}

export default TextJump