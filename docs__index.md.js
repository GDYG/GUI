(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"F+kV":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),i=t.n(r),o=t("dEAq");t("Rsk4");n["default"]=e=>(i.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),i.a.createElement(i.a.Fragment,null))},Rsk4:function(e,n,t){"use strict";t.r(n);var r=t("9og8"),i=t("WmNS"),o=t.n(i),a=t("rlch"),s="import React from 'react';\nimport Alert from '../../alert/index';\nimport '../style/index.less';\n\nexport default () => {\n    return <>\n        <Alert kind='info'>\u8fd9\u662f\u4e00\u6761info\u63d0\u793a</Alert>\n        <div style={{marginBottom: '20px'}}></div>\n        <Alert kind=\"positive\">\u8fd9\u662f\u4e00\u6761positive\u63d0\u793a</Alert>\n        <div style={{marginBottom: '20px'}}></div>\n        <Alert kind=\"negative\">\u8fd9\u662f\u4e00\u6761negative\u63d0\u793a</Alert>\n        <div style={{marginBottom: '20px'}}></div>\n        <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761warning\u63d0\u793a</Alert>\n    </>\n};",l="import React, {useState} from 'react';\nimport t from 'prop-types';\nexport interface AlertProps {\n/**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n*/\n  icon?: React.ReactNode,\n  closed?: boolean,\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'gnt-alert';\nconst prefixClsPrev = 'gnt-alert-prev';\nconst closeCls = 'gnt-alert-close';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#6ECE24',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\nconst Alert: React.FC<AlertProps> = ({ children, closed = false, icon = '', kind = 'info', ...rest }) => {\n  const [show, setShow] = useState(true)\n  let cont: any = null;\n  const close = () => {\n    setShow(false)\n  }\n  return (show ? <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    ref={e => cont = e}\n    {...rest}\n  >\n    {\n      icon ? <span className={prefixClsPrev}>{icon}</span> : ''\n    }\n    {children}\n    {\n      closed ? <span onClick={close} className={closeCls}>\n        <svg viewBox=\"64 64 896 896\" focusable=\"false\" data-icon=\"close\" width=\"1em\" height=\"1em\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z\"></path></svg>\n      </span> : ''\n    }\n  </div> : null)\n};\n\nAlert.propTypes = {\n  closed: t.bool,\n  icon: t.node,\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",c="@popupPrefix: gnt-alert;\n@alertPrefix: gnt-alert-prev;\n@alertNextfix: gnt-alert-close;\n\n.@{popupPrefix} {\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  color: white;\n  overflow: hidden;\n}\n.@{alertPrefix} {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin-right: 10px;\n  vertical-align: text-top;\n}\n.@{alertNextfix} {\n  width: 14px;\n  height: 14px;\n  vertical-align: text-top;\n  float: right;\n  cursor: pointer;\n  transition: all 0.1s linear;\n  &:hover {\n    opacity: 0.88;\n  }\n}",p="import React from 'react';\nimport Alert from '../../alert/index';\nimport '../style/index.less';\n\nexport default () => {\n    return <>\n        <Alert closed kind='info'>\u8fd9\u662f\u4e00\u6761info\u63d0\u793a</Alert>\n    </>\n};",d='import React from \'react\';\nimport Alert from \'../../alert/index\';\nimport \'../style/index.less\';\nconst svg = <svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>\n\nexport default () => {\n    return <>\n        <Alert icon={svg} kind=\'info\'>\u8fd9\u662f\u4e00\u6761info\u63d0\u793a</Alert>\n    </>\n};';n["default"]={"alert-basic":{component:Object(a["c"])({loader:function(){var e=Object(r["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"025M"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:s},"index.tsx":{import:"../../alert/index",content:l},"style/index.less":{import:"../style/index.less",content:c}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",title:"\u56db\u79cd\u6837\u5f0f",description:'<div class="markdown"><p>\u5171\u6709\u56db\u79cd\u6837\u5f0finfo\u3001positive\u3001negative\u3001warning\u3002</p></div>',identifier:"alert-basic"}},"alert-basicclose":{component:Object(a["c"])({loader:function(){var e=Object(r["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"FvnX"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:p},"index.tsx":{import:"../../alert/index",content:l},"style/index.less":{import:"../style/index.less",content:c}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",title:"\u5e26\u6709\u5173\u95ed\u6309\u94ae",description:'<div class="markdown"><p>\u5173\u95ed\u6309\u94ae, \u9ed8\u8ba4\u4e0d\u663e\u793a</p></div>',identifier:"alert-basicclose"}},"alert-basicicon":{component:Object(a["c"])({loader:function(){var e=Object(r["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"bNFQ"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:d},"index.tsx":{import:"../../alert/index",content:l},"style/index.less":{import:"../style/index.less",content:c}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",title:"\u81ea\u5b9a\u4e49\u524d\u7f00\u56fe\u6807",description:'<div class="markdown"><p>\u652f\u6301\u81ea\u5b9a\u4e49\u56fe\u6807, \u53ef\u4ee5\u662f\u56fe\u7247\u3001svg\u3001canvas\u7b49</p></div>',identifier:"alert-basicicon"}}}},x2v5:function(e){e.exports=JSON.parse('{"alert":{"default":[{"identifier":"icon","description":"Alert \u7684\u7c7b\u578b","type":"ReactNode","default":""},{"identifier":"closed","type":"boolean","default":"false"},{"identifier":"kind","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]}}')}}]);