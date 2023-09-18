import React, {useState} from 'react';
import t from 'prop-types';
import './style/index.less'
export interface AlertProps {
/**
   * @description       前缀图标
   * @default           'info'
*/
  icon?: React.ReactNode,
  closed?: boolean,
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const prefixCls = 'gnt-alert';
const prefixClsPrev = 'gnt-alert-prev';
const closeCls = 'gnt-alert-close';

const kinds: KindMap = {
  info: 'rgba(125, 76, 219, .8)',
  positive: 'rgba(110, 206, 36, .8)',
  negative: 'rgba(255, 71, 87, .8)',
  warning: 'rgba(255, 165, 2, .8)',
};
const Alert: React.FC<AlertProps> = ({ children, closed = false, icon = '', kind = 'info', ...rest }) => {
  const [show, setShow] = useState(true)
  let cont: any = null;
  const close = () => {
    setShow(false)
  }
  return (show ? <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    ref={e => cont = e}
    {...rest}
  >
    {
      icon ? <span className={prefixClsPrev}>{icon}</span> : ''
    }
    {children}
    {
      closed ? <span onClick={close} className={closeCls}>
        <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
      </span> : ''
    }
  </div> : null)
};

Alert.propTypes = {
  closed: t.bool,
  icon: t.node,
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;