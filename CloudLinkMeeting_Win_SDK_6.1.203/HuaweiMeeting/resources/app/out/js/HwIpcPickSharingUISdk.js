webpackJsonp([28],{128:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HwIpcMemberListUISdk=void 0;var a=n(135),i=o(a),c=n(4),r=o(c),u=n(2513),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u);t.HwIpcMemberListUISdk=function e(){(0,r.default)(this,e),(0,i.default)(this,l)}},130:function(e,t,n){e.exports=n(0)(0)},131:function(e,t,n){e.exports={default:n(151),__esModule:!0}},132:function(e,t,n){e.exports=n(0)(45)},133:function(e,t,n){e.exports=n(0)(47)},135:function(e,t,n){e.exports=n(0)(562)},141:function(e,t,n){e.exports=n(0)(238)},146:function(e,t,n){var o=n(10),a=n(8),i=n(148);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],c={};c[e]=t(n),o(o.S+o.F*i(function(){n(1)}),"Object",c)}},148:function(e,t,n){e.exports=n(0)(59)},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=coreCommonComponent.Button,a=o.typeMap,i=o.colorMap,c=o.sizeMap;t.default=o,t.typeMap=a,t.colorMap=i,t.sizeMap=c},151:function(e,t,n){n(152),e.exports=n(8).Object.getPrototypeOf},152:function(e,t,n){var o=n(141),a=n(153);n(146)("getPrototypeOf",function(){return function(e){return a(o(e))}})},153:function(e,t,n){e.exports=n(0)(585)},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=coreCommonComponent.MenuConAndSvg,a=coreCommonComponent.MenuConBack,i=coreCommonComponent.MenuConNotSvg,c=coreCommonComponent.MenuTcAndSvg,r=coreCommonComponent.MenuTcNoSvg,u=coreCommonComponent.MenuTitleBack,l=coreCommonComponent.MenuTwoConNotSvg,s=coreCommonComponent.MenuTxtAndClose,d=coreCommonComponent.MenuSbDedicat,p=coreCommonComponent.MenuContactBack,m=coreCommonComponent.MenuTitleAndSwitch,f=coreCommonComponent.MenuIpcTxtAndClose,h=coreCommonComponent.MenuItem;t.MenuConAndSvg=o,t.MenuConBack=a,t.MenuConNotSvg=i,t.MenuTcAndSvg=c,t.MenuTcNoSvg=r,t.MenuTitleBack=u,t.MenuTwoConNotSvg=l,t.MenuTxtAndClose=s,t.MenuSbDedicat=d,t.MenuContactBack=p,t.MenuTitleAndSwitch=m,t.MenuIpcTxtAndClose=f,t.MenuItem=h},163:function(e,t,n){e.exports=n(0)(20)},2513:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(130),i=o(a),c=n(163),r=n(2514),u=o(r);window.initLanguage().then(function(){(0,c.render)(i.default.createElement(u.default,null),document.getElementById("root"))}),window.addEventListener("dragover",function(e){e.preventDefault(),e.dataTransfer.dropEffect="none"})},2514:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i,c=n(131),r=o(c),u=n(4),l=o(u),s=n(5),d=o(s),p=n(132),m=o(p),f=n(133),h=o(f),C=n(130),g=o(C),_=n(150),v=o(_),S=n(161),M=(coreLogger.getLogger("dataconf")("dataControl"),i=a=function(e){function t(e){(0,l.default)(this,t);var n=(0,m.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n._updateData=function(e,t){var o=t.shareAppList,a=t.isShowPickSharingWindow;n.setState({shareAppList:o,isShowPickSharingWindow:a})},n._updateLangProps=function(){window.initLanguage().then(function(){var e=n.state.languageChangeNum;n.setState({languageChangeNum:1-e})})},n._handleItemClick=function(e){n.setState({selectedIndex:e},function(){var t=parseInt(e/3);t>=3?this.parentElem&&(this.parentElem.scrollTop=136*t):this.parentElem&&(this.parentElem.scrollTop=0)})},n._cancelSharing=function(){coreIpcChildProcess.childIpcPickSharingCancelSharing()},n._beginSharing=function(){var e=n.state.selectedIndex;coreIpcChildProcess.childIpcPickSharingBeginSharing(e)},n._closeSharingPage=function(){coreIpcChildProcess.childIpcPickSharingCloseWin()},n._handleKeyDown=function(e){e.preventDefault();var t=e.keyCode;if(13===t)n._beginSharing();else{var o=n.state,a=o.selectedIndex,i=o.shareAppList;37===t?a>0&&a--:38===t?a>2&&(a-=3):39===t?a<i.length-1&&a++:40===t&&a<i.length-3&&(a+=3),n._handleItemClick(a)}return!1},n.state={shareAppList:[],isShowPickSharingWindow:!1,selectedIndex:0,languageChangeNum:1},coreIpcChildProcess.createNotify(ipcConstant.IPC_PICK_SHARING_TYPE.UPDATE_CHILD_PROPS,n._updateData),coreIpcChildProcess.createNotify(ipcConstant.IPC_PICK_SHARING_TYPE.UPDATE_LANG_PROPS,n._updateLangProps),n}return(0,h.default)(t,e),(0,d.default)(t,[{key:"componentWillUpdate",value:function(e,t){!this.state.isShowPickSharingWindow&&t.isShowPickSharingWindow&&(this.parentElem&&(this.parentElem.scrollTop=0),this._handleItemClick(0))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.state,n=t.shareAppList,o=t.selectedIndex;return g.default.createElement("div",{className:"pick-sharing-window-container"},g.default.createElement("div",{className:"pick-sharing-window-title"},g.default.createElement(S.MenuIpcTxtAndClose,{drag:!0,title:language.LANG_NATIVE_START_SHARE,svgType:"Close",onClick:this._closeSharingPage})),g.default.createElement("div",{className:"pick-sharing-window-body",ref:function(t){return e.parentElem=t}},n.map(function(t,n){return g.default.createElement("div",{key:n,onClick:function(t){return e._handleItemClick(n)},title:t.title,className:n===o?"window-item-active":"window-item"},g.default.createElement("img",{src:t.thumbnail,alt:"img",className:"window-item-img"}),g.default.createElement("div",{className:"window-item-title"},t.title))})),g.default.createElement("div",{className:"pick-sharing-window-footer"},g.default.createElement("div",{className:"share-button-area"},g.default.createElement("div",{className:"button"},g.default.createElement(v.default,{onClick:this._beginSharing},language.SHARING_BEGIN)),g.default.createElement("div",{className:"button"},g.default.createElement(v.default,{type:_.typeMap.STROKE,onClick:this._cancelSharing},language.LANG_NATIVE_CONFIRM_CANCEL)))))}}]),t}(C.Component),a.propTypes={},a.defaultProps={},i);t.default=M}});