webpackJsonp([14],{1661:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(8),n=(a.n(r),a(1976)),i=a(682),s=a(7),o=function(e){return{component:a.i(s.getMeasuresAppComponent)(e),metrics:a.i(s.getMeasuresAppAllMetrics)(e),metric:a.i(s.getMeasuresAppDetailsMetric)(e),measure:a.i(s.getMeasuresAppDetailsMeasure)(e),secondaryMeasure:a.i(s.getMeasuresAppDetailsSecondaryMeasure)(e),periods:a.i(s.getMeasuresAppDetailsPeriods)(e)}},c={fetchMeasure:i.c};t.default=a.i(r.connect)(o,c)(n.a)},1709:function(e,t,a){"use strict";function r(){return s}t.a=r;var n=a(0),i=a.n(n),s=i.a.createElement("i",{className:"spinner spinner-margin"})},1786:function(e,t,a){"use strict";function r(e){var t=e.period,r=i.a.createElement("div",{className:"measures-domains-leak-header"},a.i(u.translateWithParameters)("overview.leak_period_x",a.i(l.c)(t)));if("days"===t.mode)return r;var n=a.i(l.b)(t),s=o()(n).fromNow(),p=s+", "+o()(n).format("LL");return i.a.createElement(c.a,{placement:"bottom",overlay:p},r)}t.a=r;var n=a(0),i=a.n(n),s=a(3),o=a.n(s),c=a(29),l=a(648),u=a(2)},1810:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(4),o=(a.n(s),a(0)),c=a.n(o),l=a(1812),u=a(24),p=a(664),m=a(2),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),h=function(e){function t(){var e,a,i,s;r(this,t);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return a=i=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={},s=a,n(i,s)}return i(t,e),d(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.requestLanguages()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"requestLanguages",value:function(){var e=this;a.i(p.a)().then(function(t){e.mounted&&e.setState({languages:t})})}},{key:"getLanguageName",value:function(e){if(this.state.languages){var t=a.i(s.find)(this.state.languages,{key:e});return t?t.name:a.i(m.translate)("unknown")}return e}},{key:"cutLanguageName",value:function(e){return e.length>10?e.substr(0,7)+"...":e}},{key:"render",value:function(){var e=this,t=this.props.distribution.split(";").map(function(e,t){var a=e.split("=");return{x:parseInt(a[1],10),y:t,value:a[0]}});t=a.i(s.sortBy)(t,function(e){return-e.x});var r=t.map(function(t){return e.getLanguageName(t.value)}).map(this.cutLanguageName),n=t.map(function(e){return a.i(u.formatMeasure)(e.x,"SHORT_INT")});return c.a.createElement(l.a,{data:t,yTicks:r,yValues:n,barsWidth:10,height:25*t.length,padding:[0,60,0,80]})}}]),t}(c.a.PureComponent);h.propTypes={distribution:c.a.PropTypes.string.isRequired},t.a=h},1811:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var r=a(0),n=a.n(r),i=a(42),s=a(210),o=a(650),c=a(165),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u=n.a.createElement("div",null),p=n.a.createClass({displayName:"BarChart",propTypes:{data:n.a.PropTypes.arrayOf(n.a.PropTypes.object).isRequired,xTicks:n.a.PropTypes.arrayOf(n.a.PropTypes.any),xValues:n.a.PropTypes.arrayOf(n.a.PropTypes.any),height:n.a.PropTypes.number,padding:n.a.PropTypes.arrayOf(n.a.PropTypes.number),barsWidth:n.a.PropTypes.number.isRequired,onBarClick:n.a.PropTypes.func},mixins:[o.a],getDefaultProps:function(){return{xTicks:[],xValues:[],padding:[10,10,10,10]}},getInitialState:function(){return{width:this.props.width,height:this.props.height}},handleClick:function(e){this.props.onBarClick(e)},renderXTicks:function(e,t){var a=this;if(!this.props.xTicks.length)return null;var r=this.props.xTicks.map(function(r,i){var s=a.props.data[i],o=Math.round(e(s.x)+e.bandwidth()/2),c=t.range()[0],u=a.props.data[i],p={};return u.tooltip&&(p.title=u.tooltip,p["data-toggle"]="tooltip"),n.a.createElement("text",l({},p,{key:i,className:"bar-chart-tick",x:o,y:c,dy:"1.5em",onClick:a.props.onBarClick&&a.handleClick.bind(a,s),style:{cursor:a.props.onBarClick?"pointer":"default"}}),r)});return n.a.createElement("g",null,r)},renderXValues:function(e,t){var a=this;if(!this.props.xValues.length)return null;var r=this.props.xValues.map(function(r,i){var s=a.props.data[i],o=Math.round(e(s.x)+e.bandwidth()/2),c=t(s.y),u=a.props.data[i],p={};return u.tooltip&&(p.title=u.tooltip,p["data-toggle"]="tooltip"),n.a.createElement("text",l({key:i,className:"bar-chart-tick",x:o,y:c,dy:"-1em",onClick:a.props.onBarClick&&a.handleClick.bind(a,s),style:{cursor:a.props.onBarClick?"pointer":"default"}},p),r)});return n.a.createElement("g",null,r)},renderBars:function(e,t){var a=this,r=this.props.data.map(function(r,i){var s=Math.round(e(r.x)),o=t.range()[0],c=Math.round(t(r.y))-1,u=o-c,p={};return r.tooltip&&(p.title=r.tooltip,p["data-toggle"]="tooltip"),n.a.createElement("rect",l({key:i,className:"bar-chart-bar"},p,{x:s,y:c,width:a.props.barsWidth,height:u,onClick:a.props.onBarClick&&a.handleClick.bind(a,r),style:{cursor:a.props.onBarClick?"pointer":"default"}}))});return n.a.createElement("g",null,r)},render:function(){if(!this.state.width||!this.state.height)return u;var e=this.state.width-this.props.padding[1]-this.props.padding[3],t=this.state.height-this.props.padding[0]-this.props.padding[2],r=(e-this.props.barsWidth*this.props.data.length)/(this.props.data.length-1),o=r/(r+this.props.barsWidth),l=a.i(i.max)(this.props.data,function(e){return e.y}),p=a.i(s.scaleBand)().domain(this.props.data.map(function(e){return e.x})).range([0,e]).paddingInner(o),m=a.i(s.scaleLinear)().domain([0,l]).range([t,0]);return n.a.createElement(c.a,null,n.a.createElement("svg",{className:"bar-chart",width:this.state.width,height:this.state.height},n.a.createElement("g",{transform:"translate("+this.props.padding[3]+", "+this.props.padding[0]+")"},this.renderXTicks(p,m),this.renderXValues(p,m),this.renderBars(p,m))))}})},1812:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var r=a(0),n=a.n(r),i=a(42),s=a(210),o=a(650),c=a(165),l=n.a.createElement("div",null),u=n.a.createClass({displayName:"Histogram",propTypes:{data:n.a.PropTypes.arrayOf(n.a.PropTypes.object).isRequired,yTicks:n.a.PropTypes.arrayOf(n.a.PropTypes.any),yValues:n.a.PropTypes.arrayOf(n.a.PropTypes.any),width:n.a.PropTypes.number,height:n.a.PropTypes.number,padding:n.a.PropTypes.arrayOf(n.a.PropTypes.number),barsHeight:n.a.PropTypes.number,onBarClick:n.a.PropTypes.func},mixins:[o.a,c.b],getDefaultProps:function(){return{xTicks:[],xValues:[],padding:[10,10,10,10],barsHeight:10}},getInitialState:function(){return{width:this.props.width,height:this.props.height}},handleClick:function(e){this.props.onBarClick(e)},renderTicks:function(e,t){var a=this;if(!this.props.yTicks.length)return null;var r=this.props.yTicks.map(function(r,i){var s=a.props.data[i],o=e.range()[0],c=Math.round(t(s.y)+t.bandwidth()/2+a.props.barsHeight/2),l=r.label?r.label:r,u=r.tooltip?r.tooltip:null;return n.a.createElement("text",{key:i,className:"bar-chart-tick histogram-tick",onClick:a.props.onBarClick&&a.handleClick.bind(a,s),style:{cursor:a.props.onBarClick?"pointer":"default"},"data-title":u,"data-toggle":u?"tooltip":null,x:o,y:c,dx:"-1em",dy:"0.3em"},l)});return n.a.createElement("g",null,r)},renderValues:function(e,t){var a=this;if(!this.props.yValues.length)return null;var r=this.props.yValues.map(function(r,i){var s=a.props.data[i],o=e(s.x),c=Math.round(t(s.y)+t.bandwidth()/2+a.props.barsHeight/2);return n.a.createElement("text",{key:i,onClick:a.props.onBarClick&&a.handleClick.bind(a,s),className:"bar-chart-tick histogram-value",style:{cursor:a.props.onBarClick?"pointer":"default"},x:o,y:c,dx:"1em",dy:"0.3em"},r)});return n.a.createElement("g",null,r)},renderBars:function(e,t){var a=this,r=this.props.data.map(function(r,i){var s=Math.round(e(r.x))+1,o=Math.round(t(r.y)+t.bandwidth()/2);return n.a.createElement("rect",{key:i,className:"bar-chart-bar",onClick:a.props.onBarClick&&a.handleClick.bind(a,r),style:{cursor:a.props.onBarClick?"pointer":"default"},x:0,y:o,width:s,height:a.props.barsHeight})});return n.a.createElement("g",null,r)},render:function(){if(!this.state.width||!this.state.height)return l;var e=this.state.width-this.props.padding[1]-this.props.padding[3],t=this.state.height-this.props.padding[0]-this.props.padding[2],r=a.i(i.max)(this.props.data,function(e){return e.x}),o=a.i(s.scaleLinear)().domain([0,r]).range([0,e]),c=a.i(s.scaleBand)().domain(this.props.data.map(function(e){return e.y})).rangeRound([0,t]);return n.a.createElement("svg",{className:"bar-chart",width:this.state.width,height:this.state.height},n.a.createElement("g",{transform:"translate("+this.props.padding[3]+", "+this.props.padding[0]+")"},this.renderTicks(o,c),this.renderValues(o,c),this.renderBars(o,c)))}})},1813:function(e,t,a){"use strict";function r(e){var t=e.className,a=e.size,r=void 0===a?16:a;return i.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r},i.a.createElement("path",{style:{fill:"currentColor"},d:"M14.7 3.4v3.3c0 .1 0 .2-.1.2s-.2 0-.3-.1l-.9-.9-4.8 4.8c-.1.1-.1.1-.2.1s-.1 0-.2-.1L6.4 9l-3.2 3.2-1.5-1.5 4.5-4.5c.1-.1.1-.1.2-.1s.1 0 .2.1L8.4 8l3.5-3.5-.9-1c-.1-.1-.1-.2-.1-.3s.1-.1.2-.1h3.3c.1 0 .1 0 .2.1.1 0 .1.1.1.2z"}))}t.a=r;var n=a(0),i=a.n(n)},1970:function(e,t,a){"use strict";function r(){return s}t.a=r;var n=a(0),i=a.n(n),s=i.a.createElement("svg",{className:"measure-tab-icon",viewBox:"0 0 512 448",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M352 256c52.984 0 96 43.016 96 96s-43.016 96-96 96-96-43.016-96-96 43.016-96 96-96zM128 96c70.645 0 128 57.355 128 128 0 70.645-57.355 128-128 128C57.355 352 0 294.645 0 224 0 153.355 57.355 96 128 96zM352 0c52.984 0 96 43.016 96 96s-43.016 96-96 96-96-43.016-96-96 43.016-96 96-96z"}))},1971:function(e,t,a){"use strict";function r(){return s}t.a=r;var n=a(0),i=a.n(n),s=i.a.createElement("svg",{className:"measure-tab-icon",viewBox:"0 0 448 448",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M448 48c0-8.83-7.17-16-16-16H16C7.17 32 0 39.17 0 48v32c0 8.83 7.17 16 16 16h416c8.83 0 16-7.17 16-16V48zM448 144c0-8.83-7.17-16-16-16H16c-8.83 0-16 7.17-16 16v32c0 8.83 7.17 16 16 16h416c8.83 0 16-7.17 16-16v-32zM448 240c0-8.83-7.17-16-16-16H16c-8.83 0-16 7.17-16 16v32c0 8.83 7.17 16 16 16h416c8.83 0 16-7.17 16-16v-32zM448 336.03c0-8.83-7.17-16-16-16H16c-8.83 0-16 7.17-16 16v32c0 8.83 7.17 16 16 16h416c8.83 0 16-7.17 16-16v-32z"}))},1972:function(e,t,a){"use strict";function r(){return s}t.a=r;var n=a(0),i=a.n(n),s=i.a.createElement("svg",{className:"measure-tab-icon",viewBox:"0 0 448 448",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M448 48c0-8.83-7.17-16-16-16H16C7.17 32 0 39.17 0 48v32c0 8.83 7.17 16 16 16h416c8.83 0 16-7.17 16-16V48zM448 144c0-8.83-6.146-16-13.714-16H77.714C70.144 128 64 135.17 64 144v32c0 8.83 6.145 16 13.714 16h356.572c7.568 0 13.714-7.17 13.714-16v-32zM448 240c0-8.83-5.12-16-11.428-16H139.428C133.12 224 128 231.17 128 240v32c0 8.83 5.12 16 11.428 16h297.144c6.307 0 11.428-7.17 11.428-16v-32zM448 336.03c0-8.83-4.097-16-9.142-16H201.143c-5.046 0-9.143 7.17-9.143 16v32c0 8.83 4.097 16 9.143 16h237.715c5.045 0 9.142-7.17 9.142-16v-32z"}))},1973:function(e,t,a){"use strict";function r(){return s}t.a=r;var n=a(0),i=a.n(n),s=i.a.createElement("svg",{className:"measure-tab-icon",viewBox:"0 0 448 448",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M0 0h224v448H0zM256 0h192v256H256zM256 288h192v160H256z"}))},1976:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(0),o=a.n(s),c=a(9),l=a(1709),u=a(1977),p=a(1980),m=a(1978),d=a(648),h=a(2),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),y=o.a.createElement(m.a,null),v=o.a.createElement(l.a,null),g=o.a.createElement(m.a,null),b=function(e){function t(){var e,a,i,s;r(this,t);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return a=i=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={loading:!0},s=a,n(i,s)}return i(t,e),f(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.loadData()}},{key:"componentDidUpdate",value:function(e){e.params.metricKey!==this.props.params.metricKey&&this.loadData()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"metricExists",value:function(){var e=this.props.metrics,t=this.props.params.metricKey;return!!e.find(function(e){return e.key===t})}},{key:"loadData",value:function(){var e=this;if(this.metricExists()){this.setState({loading:!0});var t=this.props.location.query.period||1,a=function(){return e.mounted&&e.setState({loading:!1})};this.props.fetchMeasure(this.props.params.metricKey,Number(t)).then(a,a)}}},{key:"render",value:function(){if(!this.metricExists())return y;if(this.state.loading)return v;var e=this.props,t=e.component,r=e.metric,n=e.secondaryMeasure,i=e.measure,s=e.periods,l=e.children;if(!i)return g;var m=this.props.params.tab,f=this.props.location.query.period||1,b=a.i(d.d)(s,Number(f)),k=a.i(d.b)(b);return o.a.createElement("section",{id:"component-measures-details",className:"page page-container page-limited"},o.a.createElement("div",{className:"note"},o.a.createElement(c.IndexLink,{to:{pathname:"/component_measures",query:{id:t.key}},id:"component-measures-back-to-all-measures",className:"text-muted"},a.i(h.translate)("component_measures.all_measures")),!!r.domain&&o.a.createElement("span",null," / ",o.a.createElement(c.Link,{to:{pathname:"/component_measures/domain/"+r.domain,query:{id:t.key}},className:"text-muted"},a.i(h.translateWithParameters)("component_measures.domain_measures",r.domain)))),o.a.createElement(u.a,{component:t,leakPeriod:b,measure:i,metric:r,secondaryMeasure:n}),i&&o.a.createElement(p.a,{component:t,metric:r,tab:m,leakPeriod:b,leakPeriodDate:k},l))}}]),t}(o.a.PureComponent);t.a=b},1977:function(e,t,a){"use strict";function r(e){var t=e.component,r=e.measure,n=e.metric,p=e.secondaryMeasure,b=e.leakPeriod,k=a.i(h.isDiffMetric)(n.key);return i.a.createElement("header",{className:"measure-details-header"},i.a.createElement("h2",{className:"measure-details-metric"},i.a.createElement(u.a,{query:n.key,className:"little-spacer-right"}),a.i(v.getLocalizedMetricName)(n),!k&&i.a.createElement(m.a,{placement:"right",overlay:a.i(v.translate)("component_measures.show_metric_history")},i.a.createElement(s.Link,{className:"js-show-history spacer-left button button-small button-compact",to:a.i(y.i)(t.key,n.key)},g))),k&&i.a.createElement("div",{className:"pull-right"},i.a.createElement(l.a,{period:b})),i.a.createElement(f.a,{options:{html:!1}},i.a.createElement("div",{className:"measure-details-value"},k?i.a.createElement("div",{className:"measure-details-value-leak"},i.a.createElement(o.a,{measure:r,metric:n})):i.a.createElement("div",{className:"measure-details-value-absolute"},i.a.createElement(o.a,{measure:r,metric:n})),p&&"ncloc_language_distribution"===p.metric&&i.a.createElement("div",{className:"measure-details-secondary"},i.a.createElement(c.a,{distribution:p.value})),p&&"function_complexity_distribution"===p.metric&&i.a.createElement("div",{className:"measure-details-secondary"},i.a.createElement(d.a,{distribution:p.value,of:"function"})),p&&"file_complexity_distribution"===p.metric&&i.a.createElement("div",{className:"measure-details-secondary"},i.a.createElement(d.a,{distribution:p.value,of:"file"})))))}t.a=r;var n=a(0),i=a.n(n),s=a(9),o=a(327),c=a(1810),l=a(1786),u=a(211),p=a(1813),m=a(29),d=a(2249),h=a(24),f=a(165),y=a(48),v=a(2),g=i.a.createElement(p.a,null)},1978:function(e,t,a){"use strict";function r(){return i.a.createElement("div",{className:"page page-limited"},i.a.createElement("div",{className:"alert alert-danger"},a.i(s.translate)("component_measures.not_found")))}t.a=r;var n=a(0),i=a.n(n),s=a(2)},1980:function(e,t,a){"use strict";function r(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}function n(e){var t=e.children,n=e.component,i=e.metric,c=r(e,["children","component","metric"]),l=s.a.cloneElement(t,Object.assign({},c));return s.a.createElement("div",{className:"measure-details-drilldown"},s.a.createElement("ul",{className:"measure-details-drilldown-mode"},"DEV"!==n.qualifier&&s.a.createElement("li",null,s.a.createElement(o.Link,{activeClassName:"active",to:{pathname:"/component_measures/metric/"+i.key+"/list",query:{id:n.key}}},h,a.i(d.translate)("component_measures.tab.list"))),s.a.createElement("li",null,s.a.createElement(o.Link,{activeClassName:"active",to:{pathname:"/component_measures/metric/"+i.key+"/tree",query:{id:n.key}}},f,a.i(d.translate)("component_measures.tab.tree"))),a.i(m.f)(i.key)&&s.a.createElement("li",null,s.a.createElement(o.Link,{activeClassName:"active",to:{pathname:"/component_measures/metric/"+i.key+"/bubbles",query:{id:n.key}}},y,a.i(d.translate)("component_measures.tab.bubbles"))),a.i(m.g)(i)&&s.a.createElement("li",null,s.a.createElement(o.Link,{activeClassName:"active",to:{pathname:"/component_measures/metric/"+i.key+"/treemap",query:{id:n.key}}},v,a.i(d.translate)("component_measures.tab.treemap")))),l)}t.a=n;var i=a(0),s=a.n(i),o=a(9),c=a(1971),l=a(1972),u=a(1970),p=a(1973),m=a(125),d=a(2),h=s.a.createElement(c.a,null),f=s.a.createElement(l.a,null),y=s.a.createElement(u.a,null),v=s.a.createElement(p.a,null)},2249:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"a",function(){return d});var s=a(0),o=a.n(s),c=a(1811),l=a(24),u=a(2),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),m=80,d=function(e){function t(){var e,i,s,p;r(this,t);for(var d=arguments.length,h=Array(d),f=0;f<d;f++)h[f]=arguments[f];return i=s=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(h))),s.renderBarChart=function(){var e=s.props.distribution.split(";").map(function(e,t){var r=e.split("="),n=parseInt(r[1],10),i=parseInt(r[0],10);return{x:t,y:n,value:i,tooltip:a.i(u.translateWithParameters)("overview.complexity_tooltip."+s.props.of,n,i)}}),t=e.map(function(e){return e.value}),r=e.map(function(e){return a.i(l.formatMeasure)(e.y,"INT")});return o.a.createElement(c.a,{data:e,xTicks:t,xValues:r,height:m,barsWidth:20,padding:[25,10,25,10]})},p=i,n(s,p)}return i(t,e),p(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"overview-bar-chart",style:{height:m,paddingTop:10,paddingBottom:15}},this.renderBarChart())}}]),t}(o.a.PureComponent);d.propTypes={distribution:o.a.PropTypes.string.isRequired,of:o.a.PropTypes.string.isRequired}}});
//# sourceMappingURL=14.1fa6b97a.chunk.js.map