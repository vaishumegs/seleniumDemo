webpackJsonp([39],{1667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),r=(n.n(a),n(1986)),o=n(683),i=n(173),c=n(7),s=function(e){return{component:n.i(c.getMeasuresAppComponent)(e),domains:n.i(c.getMeasuresAppHomeDomains)(e),periods:n.i(c.getMeasuresAppHomePeriods)(e)}},u=function(e){return{onDisplay:function(){return e(n.i(i.d)())},fetchMeasures:function(){return e(n.i(o.b)())}}};t.default=n.i(a.connect)(s,u)(r.a)},1786:function(e,t,n){"use strict";function a(e){var t=e.period,a=o.a.createElement("div",{className:"measures-domains-leak-header"},n.i(l.translateWithParameters)("overview.leak_period_x",n.i(u.c)(t)));if("days"===t.mode)return a;var r=n.i(u.b)(t),i=c()(r).fromNow(),m=i+", "+c()(r).format("LL");return o.a.createElement(s.a,{placement:"bottom",overlay:m},a)}t.a=a;var r=n(0),o=n.n(r),i=n(3),c=n.n(i),s=n(29),u=n(648),l=n(2)},1986:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(9),u=n(1786),l=n(648),m=n(2),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"componentDidMount",value:function(){document.querySelector("html").classList.add("dashboard-page"),this.props.onDisplay(),this.props.fetchMeasures()}},{key:"componentWillUnmount",value:function(){document.querySelector("html").classList.remove("dashboard-page")}},{key:"render",value:function(){var e=this.props,t=e.component,a=e.domains,r=e.periods;if(null==a)return null;var o=n.i(l.a)(r);return c.a.createElement("section",{id:"component-measures-home",className:"page page-container page-limited"},c.a.createElement("header",{id:"component-measures-home-header",className:"home-header"},c.a.createElement("nav",{className:"nav-pills pull-left"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.IndexLink,{to:{pathname:"/component_measures",query:{id:t.key}},activeClassName:"active"},n.i(m.translate)("all"))),a.map(function(e){return c.a.createElement("li",{key:e.name},c.a.createElement(s.Link,{to:{pathname:"/component_measures/domain/"+e.name,query:{id:t.key}},activeClassName:"active"},n.i(m.getLocalizedMetricDomain)(e.name)))}))),null!=o&&c.a.createElement(u.a,{period:o})),c.a.createElement("main",{id:"component-measures-home-main"},this.props.children))}}]),t}(c.a.PureComponent);t.a=f}});
//# sourceMappingURL=39.4e5eeb05.chunk.js.map