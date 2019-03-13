webpackJsonp([31],{1664:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),a=(r.n(n),r(1982)),i=r(7),s=function(e){return{component:r.i(i.getMeasuresAppComponent)(e),metric:r.i(i.getMeasuresAppDetailsMetric)(e)}},o=function(){return{}};t.default=r.i(n.connect)(s,o)(a.a)},1709:function(e,t,r){"use strict";function n(){return s}t.a=n;var a=r(0),i=r.n(a),s=i.a.createElement("i",{className:"spinner spinner-margin"})},1982:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=r(0),c=r.n(o),l=r(210),u=r(1709),p=r(125),h=r(2243),m=r(40),f=r(24),d=r(2),y=r(48),b=r(169),g=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=c.a.createElement(u.a,null),k=function(e){function t(){var e,r,n,s;a(this,t);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.state={fetching:!0,components:[],breadcrumbs:[]},s=r,i(n,s)}return s(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props.component;this.mounted=!0,this.fetchComponents(e.key)}},{key:"componentDidUpdate",value:function(e){e.metric!==this.props.metric&&this.fetchComponents(this.props.component.key)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchComponents",value:function(e){var t=this,n=this.props.metric,a=["ncloc",n.key],i={s:"metric",metricSort:"ncloc",asc:!1};return r.i(m.g)(e,a,i).then(function(e){var n=e.components.map(function(e){var t={},n=e.refKey||e.key;return e.measures.forEach(function(e){var n=0===e.metric.indexOf("new_");t[e.metric]=n?r.i(p.c)(e):e.value}),Object.assign({},e,{measures:t,key:n})});t.setState({components:n,fetching:!1})})}},{key:"getTooltip",value:function(e){var t=this.props.metric,n=[e.name,r.i(d.translate)("metric.ncloc.name")+": "+r.i(f.formatMeasure)(e.measures.ncloc,"INT")],a=e.measures[t.key],i=null!=a?r.i(f.formatMeasure)(a,t.type):"—";return n.push(r.i(d.getLocalizedMetricName)(t)+": "+i),'<div class="text-left">'+(n=n.join("<br>"))+"</div>"}},{key:"getPercentColorScale",value:function(e){var t=r.i(l.scaleLinear)().domain([0,25,50,75,100]);return t.range(1===e.direction?["#d4333f","#ed7d20","#eabe06","#b0d513","#00aa00"]:["#00aa00","#b0d513","#eabe06","#ed7d20","#d4333f"]),t}},{key:"getRatingColorScale",value:function(){return r.i(l.scaleLinear)().domain([1,2,3,4,5]).range(["#00aa00","#b0d513","#eabe06","#ed7d20","#d4333f"])}},{key:"getLevelColorScale",value:function(){return r.i(l.scaleOrdinal)().domain(["ERROR","WARN","OK","NONE"]).range(["#d4333f","#ed7d20","#00aa00","#b4b4b4"])}},{key:"getScale",value:function(){var e=this.props.metric;return"LEVEL"===e.type?this.getLevelColorScale():"RATING"===e.type?this.getRatingColorScale():this.getPercentColorScale(e)}},{key:"handleRectangleClick",value:function(e){var t=this;if("FIL"===e.qualifier||"UTS"===e.qualifier)return void b.default.openComponent({key:e.key});this.fetchComponents(e.key).then(function(){var r=[].concat(n(t.state.breadcrumbs)),a=t.state.breadcrumbs.findIndex(function(t){return t.key===e.key});-1!==a&&(r=r.slice(0,a)),r=[].concat(n(r),[{key:e.key,name:e.name,qualifier:e.qualifier}]),t.setState({breadcrumbs:r})})}},{key:"handleReset",value:function(){var e=this,t=this.props.component;this.fetchComponents(t.key).then(function(){e.setState({breadcrumbs:[]})})}},{key:"renderTreemap",value:function(){var e=this,t=this.props.metric,n=this.getScale(),a=this.state.components.filter(function(e){return e.measures.ncloc}).map(function(a){var i=a.measures[t.key];return{id:a.id,key:a.key,name:a.name,qualifier:a.qualifier,size:a.measures.ncloc,color:null!=i?n(i):"#777",tooltip:e.getTooltip(a),label:a.name,link:r.i(y.j)(a.key)}});return c.a.createElement(h.a,{items:a,breadcrumbs:this.state.breadcrumbs,height:500,canBeClicked:function(){return!0},onRectangleClick:this.handleRectangleClick.bind(this),onReset:this.handleReset.bind(this)})}},{key:"render",value:function(){var e=this.props.metric;return this.state.fetching?c.a.createElement("div",{className:"measure-details-treemap"},c.a.createElement("div",{className:"note text-center",style:{lineHeight:"500px"}},v)):c.a.createElement("div",{className:"measure-details-treemap"},c.a.createElement("ul",{className:"list-inline note measure-details-treemap-legend"},c.a.createElement("li",null,r.i(d.translateWithParameters)("component_measures.legend.color_x",r.i(d.getLocalizedMetricName)(e))),c.a.createElement("li",null,r.i(d.translateWithParameters)("component_measures.legend.size_x",r.i(d.translate)("metric.ncloc.name")))),this.renderTreemap())}}]),t}(c.a.PureComponent);t.a=k},2242:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"a",function(){return p});var s=r(0),o=r.n(s),c=r(85),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=o.a.createElement("i",{className:"icon-chevron-right"}),p=function(e){function t(){var e,r,i,s;n(this,t);for(var l=arguments.length,p=Array(l),h=0;h<l;h++)p[h]=arguments[h];return r=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),i.handleItemClick=function(e,t){t.preventDefault(),i.props.onRectangleClick(e)},i.handleReset=function(e){e.preventDefault(),i.props.onReset()},i.renderHome=function(){return o.a.createElement("span",{className:"treemap-breadcrumbs-item"},o.a.createElement("a",{onClick:i.handleReset,className:"icon-home",href:"#"}))},i.renderBreadcrumbsItems=function(e){return o.a.createElement("span",{key:e.key,className:"treemap-breadcrumbs-item",title:e.name},u,o.a.createElement(c.a,{qualifier:e.qualifier}),o.a.createElement("a",{onClick:i.handleItemClick.bind(i,e),href:"#"},e.name))},s=r,a(i,s)}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.breadcrumbs.map(this.renderBreadcrumbsItems);return o.a.createElement("div",{className:"treemap-breadcrumbs"},this.props.breadcrumbs.length?this.renderHome():null,e)}}]),t}(o.a.PureComponent);p.propTypes={breadcrumbs:o.a.PropTypes.arrayOf(o.a.PropTypes.shape({key:o.a.PropTypes.string.isRequired,name:o.a.PropTypes.string.isRequired,qualifier:o.a.PropTypes.string.isRequired}).isRequired).isRequired}},2243:function(e,t,r){"use strict";function n(e){for(var t=e.slice(0).sort(),r=t[0],n=r.length,a=t[t.length-1],i=0;i<n&&r.charAt(i)===a.charAt(i);)i++;var s=r.substr(0,i),o=s.split(/[\s\\\/]/),c=o[o.length-1];return s.substr(0,s.length-c.length)}r.d(t,"a",function(){return b});var a=r(0),i=r.n(a),s=r(210),o=r(450),c=r(2242),l=r(650),u=r(165),p=r(2),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m=r.i(s.scaleLinear)().domain([3,15]).range([11,18]).clamp(!0),f=i.a.createElement("span",{className:"icon-link"}),d=i.a.createClass({displayName:"TreemapRect",propTypes:{x:i.a.PropTypes.number.isRequired,y:i.a.PropTypes.number.isRequired,width:i.a.PropTypes.number.isRequired,height:i.a.PropTypes.number.isRequired,fill:i.a.PropTypes.string.isRequired,label:i.a.PropTypes.string.isRequired,onClick:i.a.PropTypes.func},renderLink:function(){return this.props.link?this.props.width<24||this.props.height<24?null:i.a.createElement("a",{onClick:function(e){return e.stopPropagation()},className:"treemap-link",href:this.props.link,style:{fontSize:12}},f):null},render:function(){var e={};this.props.tooltip&&(e={"data-toggle":"tooltip","data-title":this.props.tooltip});var t={left:this.props.x,top:this.props.y,width:this.props.width,height:this.props.height,backgroundColor:this.props.fill,fontSize:m(this.props.width/this.props.label.length),lineHeight:this.props.height+"px",cursor:"function"==typeof this.props.onClick?"pointer":"default"},r=this.props.width>=40&&this.props.height>=40;return i.a.createElement("div",h({className:"treemap-cell"},e,{style:t,onClick:this.props.onClick}),i.a.createElement("div",{className:"treemap-inner",dangerouslySetInnerHTML:{__html:this.props.label},style:{maxWidth:this.props.width,visibility:r?"visible":"hidden"}}),this.renderLink())}}),y=i.a.createElement("div",null," "),b=i.a.createClass({displayName:"Treemap",propTypes:{items:i.a.PropTypes.arrayOf(i.a.PropTypes.object).isRequired,height:i.a.PropTypes.number,onRectangleClick:i.a.PropTypes.func},mixins:[l.a,u.b],getInitialState:function(){return{width:this.props.width,height:this.props.height}},renderWhenNoData:function(){return i.a.createElement("div",{className:"sonar-d3"},i.a.createElement("div",{className:"treemap-container",style:{width:this.state.width,height:this.state.height}},r.i(p.translate)("no_data")),i.a.createElement(c.a,this.props))},render:function(){var e=this;if(!this.state.width||!this.state.height)return y;if(!this.props.items.length)return this.renderWhenNoData();var t=r.i(o.hierarchy)({children:this.props.items}).sum(function(e){return e.size}).sort(function(e,t){return t.value-e.value}),a=r.i(o.treemap)().round(!0).size([this.state.width,this.state.height]),s=a(t).leaves(),l=n(this.props.items.map(function(e){return e.label})),u=l.length,p=s.map(function(t){var r=t.data.label,n=u?l+"<br>"+t.data.label.substr(u):t.data.label,a=e.props.canBeClicked(t.data)?function(){return e.props.onRectangleClick(t.data)}:null;return i.a.createElement(d,{key:r,x:t.x0,y:t.y0,width:t.x1-t.x0,height:t.y1-t.y0,fill:t.data.color,label:n,prefix:l,tooltip:t.data.tooltip,link:t.data.link,onClick:a})});return i.a.createElement("div",{className:"sonar-d3"},i.a.createElement("div",{className:"treemap-container",style:{width:this.state.width,height:this.state.height}},p),i.a.createElement(c.a,this.props))}})}});
//# sourceMappingURL=31.bc1148dd.chunk.js.map