import React, { useRef, useEffect } from 'react'
import './style/index.less'

export interface TextLoopType { 
    type?: boolean,
    speed?: number, 
    style?: React.CSSProperties,
    warpperClassName?: string,
    textlist?: string[],
}

const TLROW = 'text-loop-row'
const TLCOL = 'text-loop-col'

const TextLoop: React.FC<TextLoopType> = ({ children, type = false, speed = 1000 / 60, style, warpperClassName, textlist=['啊哈就回', '阿发发发萨芬哈就放假啊看手机', '阿富汗及阿福就看见卡家', '阿娇手机卡升级反馈'] }) => { 
    const tRef = useRef<HTMLSpanElement>(null)
    const dRef = useRef<HTMLDivElement>(null)
    const lRef = useRef<HTMLUListElement>(null)
    let timer: number
    let time: NodeJS.Timer
    useEffect(() => {
        if (type) { 
            let dWidth = dRef.current?.offsetWidth || 0
            let tWidth = tRef.current?.offsetWidth || 0
            animated()
            function animated() {
                if (-dWidth == tWidth) { 
                    dWidth = dRef.current?.offsetWidth || 0
                }
                dWidth -= 1
                if (tRef.current) { 
                    tRef.current.style.transform = `translateX(${dWidth}px)`
                }
                timer = requestAnimationFrame(animated)
            }
            dRef.current?.addEventListener('mouseenter', mouseEvent)
            dRef.current?.addEventListener('mouseleave', mouseEvent)
            function mouseEvent(e: MouseEvent) { 
                const type = e.type || ''
                if (type == 'mouseenter') { cancelAnimationFrame(timer) }
                if (type == 'mouseleave') { 
                    timer = requestAnimationFrame(animated)
                }
            }
            return () => { 
                cancelAnimationFrame(timer)
                dRef.current?.removeEventListener('mouseenter', mouseEvent)
                dRef.current?.removeEventListener('mouseleave', mouseEvent)
            }
        }
    }, [type])

    useEffect(() => { 
        if (!type) { 
            let speed = 20
            let stop = 1000
            let scrollHeight = lRef.current?.scrollHeight || 0;
            let clientHeight = lRef.current?.clientHeight || 0;
            let height = lRef.current?.children[0].clientHeight || 0;
            time = setTimeout(animated, stop)
            function animated() { 
                if (lRef.current) { 
                    lRef.current.scrollTop++
                    if (lRef.current.scrollTop + clientHeight >= scrollHeight) {
                        lRef.current.scrollTop = 0
                    }
                    if (lRef.current.scrollTop % height == 0) {
                        time = setTimeout(animated, stop)
                    } else { 
                        time = setTimeout(animated, speed)
                    }
                }
            }
            lRef.current?.addEventListener('mouseenter', () => { 
                clearTimeout(time)
            })
            lRef.current?.addEventListener('mouseleave', () => { 
                time = setTimeout(animated, stop)
            })
        }
        return () => { 
            clearTimeout(time)
        }
    }, [type])
    const renderRowText = () => { 
        return <div style={style} ref={dRef} className={`${TLROW} ${warpperClassName}`}>
            <span ref={tRef}>{ children }</span>
        </div>
    }

    const renderColText = () => { 
        return <ul className={`${TLCOL} ${warpperClassName}`} ref={lRef}>
                {
                    textlist.map((item) => <li key={item}>{ item }</li>)
                }
        </ul>
    }

    return (
        type ? renderRowText() : renderColText()
    )
}

export default TextLoop

