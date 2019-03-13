webpackJsonp([20],{1662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=(n.n(r),n(1979)),i=n(684),o=n(7),c=function(e){return{components:n.i(o.getMeasuresAppListComponents)(e),selected:n.i(o.getMeasuresAppListSelected)(e),total:n.i(o.getMeasuresAppListTotal)(e),pageIndex:n.i(o.getMeasuresAppListPageIndex)(e),component:n.i(o.getMeasuresAppComponent)(e),metrics:n.i(o.getMeasuresAppAllMetrics)(e),metric:n.i(o.getMeasuresAppDetailsMetric)(e),fetching:n.i(o.isMeasuresAppFetching)(e)}},l=function(e){return{onFetchList:function(t,r,a){return e(n.i(i.b)(t,r,a))},onFetchMore:function(t){return e(n.i(i.c)(t))},onSelect:function(t){return e(n.i(i.d)(t))},onSelectNext:function(t){return e(n.i(i.e)(t))},onSelectPrevious:function(t){return e(n.i(i.f)(t))}}};t.default=n.i(r.connect)(c,l)(a.a)},1709:function(e,t,n){"use strict";function r(){return o}t.a=r;var a=n(0),i=n.n(a),o=i.a.createElement("i",{className:"spinner spinner-margin"})},1788:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(85),o=n(125),c=n(24),l=function(e){var t=e.component,r=e.metric,l=e.onBrowse,s=function(e){e.preventDefault(),e.target.blur(),l(t)},u=void 0;u=l?a.a.createElement("a",{id:"component-measures-breadcrumb-"+t.key,href:"#",onClick:s},t.name):a.a.createElement("span",null,t.name);var m=n.i(c.isDiffMetric)(r.key)?n.i(o.e)(t.leak,r):n.i(c.formatMeasure)(t.value,r.type);return a.a.createElement("span",null,a.a.createElement(i.a,{qualifier:t.qualifier})," ",u,null!=m&&a.a.createElement("span",null," ("+m+")"))};t.a=l},1789:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1788),o=function(e){var t=e.breadcrumbs,n=e.metric,r=e.onBrowse;return a.a.createElement("ul",{className:"component-measures-breadcrumbs"},t.map(function(e,o){return a.a.createElement("li",{key:e.key},a.a.createElement(i.a,{component:e,metric:n,onBrowse:o+1<t.length?r:null}))}))};t.a=o},1790:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n.n(i),c=n(85),l=n(96),s=n(48),u=a.a.createElement("span",{className:"big-spacer-right"},a.a.createElement("i",{className:"icon-detach"})),m=function(e){var t=e.component,r=e.isSelected,i=e.onClick,m=o()("link-no-underline",{selected:r}),p=function(e){var t=0===e.button,n=!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey);t&&!n&&(e.preventDefault(),i())},f="",d=t.name;if(["DIR","FIL","UTS"].includes(t.qualifier)){var h=n.i(l.splitPath)(t.path);f=h.head,d=h.tail}var v=a.a.createElement("span",{title:t.refKey||t.key},a.a.createElement(c.a,{qualifier:t.qualifier})," ",f.length>0&&a.a.createElement("span",{className:"note"},f,"/"),a.a.createElement("span",null,d));return a.a.createElement("td",{style:{maxWidth:0}},a.a.createElement("div",{style:{maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},null==t.refId||"DEV_PRJ"===t.qualifier?a.a.createElement("a",{id:"component-measures-component-link-"+t.key,className:m,href:n.i(s.j)(t.key),onClick:p},v):a.a.createElement("a",{id:"component-measures-component-link-"+t.key,className:m,href:n.i(s.j)(t.refKey||t.key)},u,v)))};t.a=m},1791:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1792),o=n(1793),c=n(337),l=n(2),s=a.a.createElement(o.a,null),u=a.a.createElement("th",null," "),m=function(e){var t=e.components,r=e.metrics,o=e.selected,m=e.metric,p=e.onClick;if(!t.length)return s;var f=(c.a[m.key]||[]).map(function(e){return r.find(function(t){return t.key===e})});return a.a.createElement("table",{className:"data zebra zebra-hover"},f.length>0&&a.a.createElement("thead",null,a.a.createElement("tr",null,u,a.a.createElement("th",{className:"text-right"},a.a.createElement("span",{className:"small"},n.i(l.getLocalizedMetricName)(m))),f.map(function(e){return a.a.createElement("th",{key:e.key,className:"text-right"},a.a.createElement("span",{className:"small"},n.i(l.getLocalizedMetricName)(e)))}))),a.a.createElement("tbody",null,t.map(function(e){return a.a.createElement(i.a,{key:e.id,component:e,otherMetrics:f,isSelected:e===o,metric:m,onClick:p})})))};t.a=m},1792:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1790),o=n(1795),c=this,l=function(e,t){return Object.assign({},e,{value:t.value,leak:t.leak})},s=function(e){var t=e.component,n=e.otherMetrics,r=e.isSelected,s=e.metric,u=e.onClick,m=function(){u(t)},p=n.map(function(e){var n=t.measures.find(function(t){return t.metric===e.key});return Object.assign({},n,{metric:e})});return a.a.createElement("tr",null,a.a.createElement(i.a,{component:t,isSelected:r,onClick:m.bind(c,t)}),a.a.createElement(o.a,{component:t,metric:s}),p.map(function(e){return a.a.createElement(o.a,{key:e.metric.key,component:l(t,e),metric:e.metric})}))};t.a=s},1793:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(2),o=function(){return a.a.createElement("div",{className:"note"},n.i(i.translate)("no_results"))};t.a=o},1794:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1789),o=n(2),c=function(e){var t=e.metric,r=e.breadcrumbs,c=e.onBrowse,l=e.selectedIndex,s=e.componentsCount,u=e.onSelectPrevious,m=e.onSelectNext,p=l>0,f=l<s-1,d=function(e){return function(t){t.target.blur(),e()}};return a.a.createElement("header",{className:"measure-details-viewer-header"},null!=r&&r.length>1&&a.a.createElement("div",{className:"measure-details-header-container"},a.a.createElement(i.a,{breadcrumbs:r,metric:t,onBrowse:c})),null!=l&&-1!==l&&a.a.createElement("div",{className:"pull-right"},a.a.createElement("span",{className:"note spacer-right"},n.i(o.translateWithParameters)("component_measures.x_of_y",l+1,s)),a.a.createElement("div",{className:"button-group"},p&&a.a.createElement("button",{onClick:d(u)},"<"),f&&a.a.createElement("button",{onClick:d(m)},">"))))};t.a=c},1795:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(327),o=function(e){var t=e.component,n=e.metric;return a.a.createElement("td",{className:"thin nowrap text-right"},a.a.createElement("span",{id:"component-measures-component-measure-"+t.key+"-"+n.key},a.a.createElement(i.a,{measure:{value:t.value,leak:t.leak},metric:n})))};t.a=o},1979:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),c=n.n(o),l=n(10),s=n.n(l),u=n(3),m=n.n(u),p=n(1791),f=n(1794),d=n(1709),h=n(214),v=n(167),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=c.a.createElement(d.a,null),k=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),y(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.component,n=e.metric;if("DEV"===t.qualifier){this.context.router.replace({pathname:"metric/"+n.key+"/tree",query:{id:t.key}})}this.handleChangeBaseComponent(t)}},{key:"componentDidUpdate",value:function(e){e.metric!==this.props.metric&&this.handleChangeBaseComponent(this.props.component),this.props.selected?this.scrollToViewer():this.scrollTop&&this.scrollToStoredPosition()}},{key:"scrollToViewer",value:function(){var e=this.refs.container,t=e.getBoundingClientRect().top+window.scrollY-95-10;window.scrollY>t&&window.scrollTo(0,t)}},{key:"scrollToStoredPosition",value:function(){window.scrollTo(0,this.scrollTop),this.scrollTop=null}},{key:"storeScrollPosition",value:function(){this.scrollTop=window.scrollY}},{key:"handleChangeBaseComponent",value:function(e){var t=this.props,n=t.metric,r=t.onFetchList,a=this.props.location.query.period||1;r(e,n,Number(a))}},{key:"handleFetchMore",value:function(){var e=this.props.location.query.period||1;this.props.onFetchMore(Number(e))}},{key:"changeSelected",value:function(e){this.props.onSelect(e)}},{key:"handleClick",value:function(e){this.storeScrollPosition(),this.props.onSelect(e)}},{key:"handleBreadcrumbClick",value:function(){this.props.onSelect(void 0)}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.components,r=e.metrics,a=e.metric,i=e.leakPeriod,o=e.selected,l=e.total,u=e.fetching,d=this.props,y=d.onSelectNext,k=d.onSelectPrevious,b=[t];o&&b.push(o);var g=n.indexOf(o),w=0===a.key.indexOf("new_")&&i?i:null,N=null!=w?m()(w.date).toDate():null,C=null!=N?function(e){if(e.scmDate){return m()(e.scmDate).toDate()>=N}return!1}:void 0;return c.a.createElement("div",{ref:"container",className:"measure-details-plain-list"},c.a.createElement(f.a,{metric:a,breadcrumbs:b,componentsCount:n.length,selectedIndex:g,onSelectPrevious:k,onSelectNext:y,onBrowse:this.handleBreadcrumbClick.bind(this)}),!o&&c.a.createElement("div",{className:s()({"new-loading":u})},u&&0===n.length?E:c.a.createElement("div",null,c.a.createElement(p.a,{components:n,metrics:r,selected:o,metric:a,onClick:this.handleClick.bind(this)}),c.a.createElement(v.a,{count:n.length,total:l,loadMore:this.handleFetchMore.bind(this)}))),!!o&&c.a.createElement("div",{className:"measure-details-viewer"},c.a.createElement(h.default,{component:o.key,filterLine:C})))}}]),t}(c.a.PureComponent);k.contextTypes={router:c.a.PropTypes.object.isRequired},t.a=k}});
//# sourceMappingURL=20.d4029730.chunk.js.map