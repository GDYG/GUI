(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"+pnj":function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),i=t("dEAq"),o={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};n["a"]=function(e){var n=e.identifier,t=e.export,l=Object(i["useApiData"])(n),s=Object(r["useContext"])(i["context"]),c=s.locale,d=/^zh|cn$/i.test(c)?o["zh-CN"]:o["en-US"];return a.a.createElement(a.a.Fragment,null,l&&a.a.createElement("table",{style:{marginTop:24}},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,d.name),a.a.createElement("th",null,d.description),a.a.createElement("th",null,d.type),a.a.createElement("th",null,d.default))),a.a.createElement("tbody",null,l[t].map((function(e){return a.a.createElement("tr",{key:e.identifier},a.a.createElement("td",null,e.identifier),a.a.createElement("td",null,e.description||"--"),a.a.createElement("td",null,a.a.createElement("code",null,e.type)),a.a.createElement("td",null,a.a.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},"9kvl":function(e,n,t){"use strict";var r=t("FfOG");t.d(n,"a",(function(){return r["b"]}));t("bCY9")},Rsk4:function(e,n,t){"use strict";t.r(n);var r=t("9og8"),a=t("WmNS"),i=t.n(a),o=t("rlch"),l="import React from 'react';\nimport Alert from '../../alert/index';\nimport '../style/index.less';\n\nexport default () => {\n    return <>\n        <Alert kind='info'>\u8fd9\u662f\u4e00\u6761info\u63d0\u793a</Alert>\n        <div style={{marginBottom: '20px'}}></div>\n        <Alert kind=\"positive\">\u8fd9\u662f\u4e00\u6761positive\u63d0\u793a</Alert>\n        <div style={{marginBottom: '20px'}}></div>\n        <Alert kind=\"negative\">\u8fd9\u662f\u4e00\u6761negative\u63d0\u793a</Alert>\n        <div style={{marginBottom: '20px'}}></div>\n        <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761warning\u63d0\u793a</Alert>\n    </>\n};",s="import React, {useState} from 'react';\nimport t from 'prop-types';\nimport './style/index.less'\nexport interface AlertProps {\n/**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n*/\n  icon?: React.ReactNode,\n  closed?: boolean,\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'gnt-alert';\nconst prefixClsPrev = 'gnt-alert-prev';\nconst closeCls = 'gnt-alert-close';\n\nconst kinds: KindMap = {\n  info: 'rgba(125, 76, 219, .8)',\n  positive: 'rgba(110, 206, 36, .8)',\n  negative: 'rgba(255, 71, 87, .8)',\n  warning: 'rgba(255, 165, 2, .8)',\n};\nconst Alert: React.FC<AlertProps> = ({ children, closed = false, icon = '', kind = 'info', ...rest }) => {\n  const [show, setShow] = useState(true)\n  let cont: any = null;\n  const close = () => {\n    setShow(false)\n  }\n  return (show ? <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    ref={e => cont = e}\n    {...rest}\n  >\n    {\n      icon ? <span className={prefixClsPrev}>{icon}</span> : ''\n    }\n    {children}\n    {\n      closed ? <span onClick={close} className={closeCls}>\n        <svg viewBox=\"64 64 896 896\" focusable=\"false\" data-icon=\"close\" width=\"1em\" height=\"1em\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z\"></path></svg>\n      </span> : ''\n    }\n  </div> : null)\n};\n\nAlert.propTypes = {\n  closed: t.bool,\n  icon: t.node,\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",c="@popupPrefix: gnt-alert;\n@alertPrefix: gnt-alert-prev;\n@alertNextfix: gnt-alert-close;\n\n.@{popupPrefix} {\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  color: white;\n  overflow: hidden;\n}\n.@{alertPrefix} {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  margin-right: 10px;\n  vertical-align: text-top;\n}\n.@{alertNextfix} {\n  width: 14px;\n  height: 14px;\n  vertical-align: text-top;\n  float: right;\n  cursor: pointer;\n  transition: all 0.1s linear;\n  &:hover {\n    opacity: 0.88;\n  }\n}",d="import React from 'react';\nimport Alert from '../../alert/index';\nimport '../style/index.less';\n\nexport default () => {\n    return <>\n        <Alert closed kind='info'>\u8fd9\u662f\u4e00\u6761info\u63d0\u793a</Alert>\n    </>\n};",p='import React from \'react\';\nimport Alert from \'../../alert/index\';\nimport \'../style/index.less\';\nconst svg = <svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>\n\nexport default () => {\n    return <>\n        <Alert icon={svg} kind=\'info\'>\u8fd9\u662f\u4e00\u6761info\u63d0\u793a</Alert>\n    </>\n};',u="import React from 'react'\nimport Button from '../../button/index'\nimport '../style/index.less'\n\nexport default () => {\n    return <>\n        <Button type='primary'>primary button</Button>\n        <Button type='dashed'>dashed button</Button>\n        <Button type='link'>link button</Button>\n        <Button type='text'>text button</Button>\n    </>\n}",m="import React, { useState, MouseEventHandler } from 'react'\nimport t from 'prop-types'\nimport classnames from 'classnames'\nimport './style/index.less'\nexport interface ButtonProps {\n    /**\n     * @description       Button \u7684\u7c7b\u578b\n     * @default           'primary'\n    */\n    type?: 'primary' | 'dashed' | 'link' | 'text',\n    loading?: boolean,\n    onClick?: MouseEventHandler,\n    icon?: React.ReactNode\n}\n\nexport type Types = Record<Required<ButtonProps>['type'], string>\n\nconst buttonClass = 'gnt-button-cls'\n\nconst styleTypes: Types = {\n    primary: 'gnt-button-primary',\n    dashed: 'gnt-button-dashed',\n    link: 'gnt-button-link',\n    text: 'gnt-button-text',\n}\n\nconst Button: React.FC<ButtonProps> = ({ children, loading=false, icon='', type='primary', ...arg}) => {\n    return type == 'link' ? <a className={styleTypes[type]} {...arg}>{children}</a> : type == 'text' ? <span className={styleTypes[type]} {...arg}>{children}</span> : <button type='button' className={classnames(buttonClass, styleTypes[type])} {...arg}>\n        {\n            loading ? <svg className=\"load\" viewBox=\"0 0 12 12\">\n                <circle className=\"loading\" strokeDasharray='22' cx=\"6\" cy=\"6\" r=\"4\" />\n            </svg>\n            : null\n        }\n        {\n            !loading && icon ? <span className=\"gnt-button-cls-prev\">{icon}</span> : null\n        }\n        <span>{children}</span>\n    </button>\n}\n\nButton.propTypes = {\n    type: t.oneOf(['primary', 'dashed', 'link', 'text']),\n    loading: t.bool,\n    onClick: t.func,\n    icon: t.node\n}\n\nexport default Button",f='@Button: gnt-button-cls;\n@Button-primary: gnt-button-primary;\n@Button-dashed: gnt-button-dashed;\n@Button-link: gnt-button-link;\n@Button-text: gnt-button-text;\n\n.@{Button} {\n    display: inline-block;\n    border-color: #7D4CDB;\n    background: #7D4CDB;\n    border-radius: 3px;\n    margin-right: 8px;\n    margin-bottom: 12px;\n    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);\n    font-weight: 400;\n    white-space: nowrap;\n    text-align: center;\n    background-image: none;\n    border: 1px solid #7D4CDB;\n    box-shadow: 0 2px #00000004;\n    cursor: pointer;\n    transition: all .3s cubic-bezier(.645,.045,.355,1);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    height: 32px;\n    touch-action: manipulation;\n    padding: 4px 15px;\n    font-size: 14px;\n    color: #fff;\n    overflow: hidden;\n    &:hover {\n        opacity: 0.88;\n    }\n    position: relative;\n    &::after {\n        content: " ";\n        display: block;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        pointer-events: none;\n        background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n        background-repeat: no-repeat;\n        background-position: 50%;\n        transform: scale(10, 10);\n        opacity: 0;\n        transition: transform .3s, opacity .5s;\n    }\n    &:active:after {\n        transform: scale(0, 0);\n        opacity: .3;\n        transition: 0s;\n    }\n}\n\n.@{Button-text} {\n    font-size: 14px;\n    font-weight: 400;\n    cursor: pointer;\n    \n}\n.@{Button-link} {\n    color: rgba(125, 76, 219, 1);\n    text-decoration: none;\n    &:active {\n        color: rgb(247, 0, 255);\n    }\n    padding: 4px 15px;\n}\n.@{Button-dashed} {\n    border: 1px dashed #bbb;\n    background-color:rgba(125, 76, 219, 0);\n    color: #888;\n    padding: 4px 15px;\n    &:hover {\n        border: 1px dashed #7D4CDB;\n        color: #7D4CDB;\n    }\n}\nimg {\n    width: 12px;\n    height: 12px;\n    object-fit: cover;\n}\n.load {\n    width: 14px;\n    height: 14px;\n    margin-right: 3px;\n    vertical-align: text-top;\n    animation: rotate 2s linear infinite;\n    transition: stroke-width 0.4s;\n}\n.loading {\n    stroke: #fff;\n    stroke-width: 1;\n    fill: none;\n }\n @keyframes rotate {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n}\n.gnt-button-cls-prev {\n    width: 12px;\n    height: 12px;\n    overflow: hidden;\n    vertical-align: middle;\n    margin-right: 3px;\n}',x="import React, { useState } from 'react'\nimport Button from '../../button/index'\nimport '../style/index.less'\n\nexport default () => {\n    const [load, setLoad] = useState(false)\n    return <>\n        <Button type='primary' loading={load} onClick={() => {setLoad(true)}}>\u52a0\u8f7d\u4e2d</Button>\n    </>\n}",h='import React from \'react\'\nimport Button from \'../../button/index\'\nimport \'../style/index.less\'\nconst svg = <svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>\n\nexport default () => {\n    return <>\n        <Button type=\'primary\' icon={svg}>\u52a0\u8f7d\u4e2d</Button>\n    </>\n}';n["default"]={"alert-basic":{component:Object(o["c"])({loader:function(){var e=Object(r["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(5).then(t.bind(null,"025M"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:l},"index.tsx":{import:"../../alert/index",content:s},"style/index.less":{import:"./style/index.less",content:c}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",title:"\u56db\u79cd\u6837\u5f0f",description:'<div class="markdown"><p>\u5171\u6709\u56db\u79cd\u6837\u5f0finfo\u3001positive\u3001negative\u3001warning\u3002</p></div>',identifier:"alert-basic"}},"alert-basicclose":{component:Object(o["c"])({loader:function(){var e=Object(r["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(5).then(t.bind(null,"FvnX"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:d},"index.tsx":{import:"../../alert/index",content:s},"style/index.less":{import:"./style/index.less",content:c}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",title:"\u5e26\u6709\u5173\u95ed\u6309\u94ae",description:'<div class="markdown"><p>\u5173\u95ed\u6309\u94ae, \u9ed8\u8ba4\u4e0d\u663e\u793a</p></div>',identifier:"alert-basicclose"}},"alert-basicicon":{component:Object(o["c"])({loader:function(){var e=Object(r["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(5).then(t.bind(null,"bNFQ"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:p},"index.tsx":{import:"../../alert/index",content:s},"style/index.less":{import:"./style/index.less",content:c}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",title:"\u81ea\u5b9a\u4e49\u524d\u7f00\u56fe\u6807",description:'<div class="markdown"><p>\u652f\u6301\u81ea\u5b9a\u4e49\u56fe\u6807, \u53ef\u4ee5\u662f\u56fe\u7247\u3001svg\u3001canvas\u7b49</p></div>',identifier:"alert-basicicon"}},"button-basic":{component:Object(o["c"])({loader:function(){var e=Object(r["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(4).then(t.bind(null,"oSWt"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:u},"index.tsx":{import:"../../button/index",content:m},"style/index.less":{import:"./style/index.less",content:f}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"},classnames:{version:"2.3.1"}},componentName:"button",title:"4\u79cd\u6309\u94ae\u7c7b\u578b",description:'<div class="markdown"><p>\u652f\u63014\u4e2d\u6309\u94ae\u6837\u5f0f, primary\u3001dashed\u3001link\u3001text</p></div>',identifier:"button-basic"}},"button-loading":{component:Object(o["c"])({loader:function(){var e=Object(r["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(4).then(t.bind(null,"QbQa"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:x},"index.tsx":{import:"../../button/index",content:m},"style/index.less":{import:"./style/index.less",content:f}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"},classnames:{version:"2.3.1"}},componentName:"button",title:"\u52a0\u8f7d\u4e2d\u72b6\u6001",description:'<div class="markdown"><p>\u6dfb\u52a0 loading \u5c5e\u6027\u5373\u53ef\u8ba9\u6309\u94ae\u5904\u4e8e\u52a0\u8f7d\u72b6\u6001</p></div>',identifier:"button-loading"}},"button-previcon":{component:Object(o["c"])({loader:function(){var e=Object(r["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(4).then(t.bind(null,"3sUr"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:h},"index.tsx":{import:"../../button/index",content:m},"style/index.less":{import:"./style/index.less",content:f}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"},classnames:{version:"2.3.1"}},componentName:"button",title:"\u524d\u7f00\u56fe\u6807",description:'<div class="markdown"><p>\u6dfb\u52a0 icon \u5373\u53ef\u81ea\u5b9a\u4e49\u6309\u94ae\u56fe\u6807</p></div>',identifier:"button-previcon"}}}},x2v5:function(e){e.exports=JSON.parse('{"alert":{"default":[{"identifier":"icon","description":"Alert \u7684\u7c7b\u578b","type":"ReactNode","default":""},{"identifier":"closed","type":"boolean","default":"false"},{"identifier":"kind","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]},"button":{"default":[{"identifier":"type","description":"Button \u7684\u7c7b\u578b","type":"\\"primary\\" | \\"dashed\\" | \\"link\\" | \\"text\\"","default":"primary"},{"identifier":"loading","type":"boolean","default":"false"},{"identifier":"onClick","type":"MouseEventHandler<Element>"},{"identifier":"icon","type":"ReactNode","default":""}]}}')},yf2O:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),i=t("dEAq"),o=t("+pnj"),l=t("Zxc8"),s=t("Rsk4"),c=a.a.memo(s["default"]["alert-basic"].component),d=a.a.memo(s["default"]["alert-basicclose"].component),p=a.a.memo(s["default"]["alert-basicicon"].component);n["default"]=e=>(a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"alert-\u8b66\u544a\u63d0\u793a"},a.a.createElement(i["AnchorLink"],{to:"#alert-\u8b66\u544a\u63d0\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Alert \u8b66\u544a\u63d0\u793a"),a.a.createElement("p",null,"\u8b66\u544a\u63d0\u793a\uff0c\u5c55\u73b0\u9700\u8981\u5173\u6ce8\u7684\u4fe1\u606f\u3002"),a.a.createElement("h1",{id:"\u4f55\u65f6\u4f7f\u7528"},a.a.createElement(i["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5f53\u67d0\u4e2a\u9875\u9762\u9700\u8981\u5411\u7528\u6237\u663e\u793a\u8b66\u544a\u7684\u4fe1\u606f\u65f6\u3002")),a.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.a.createElement(i["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),a.a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},a.a.createElement(i["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),a.a.createElement(l["default"],s["default"]["alert-basic"].previewerProps,a.a.createElement(c,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h3",{id:"\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a"},a.a.createElement(i["AnchorLink"],{to:"#\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u53ef\u5173\u95ed\u7684\u8b66\u544a\u63d0\u793a")),a.a.createElement(l["default"],s["default"]["alert-basicclose"].previewerProps,a.a.createElement(d,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u56fe\u6807"},a.a.createElement(i["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u56fe\u6807","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u56fe\u6807")),a.a.createElement(l["default"],s["default"]["alert-basicicon"].previewerProps,a.a.createElement(p,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(i["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(o["a"],{src:"./index.tsx",identifier:"alert",export:"default"})))))}}]);