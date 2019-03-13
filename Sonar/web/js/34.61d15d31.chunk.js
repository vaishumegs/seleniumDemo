webpackJsonp([34],{1691:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),a=(r.n(n),r(2178)),o=r(693),c=r(7);t.default=r.i(n.connect)(function(e){return r.i(c.getSettingsAppEncryptionState)(e)},{checkSecretKey:o.b,generateSecretKey:o.c,encryptValue:o.d,startGeneration:o.e})(a.a)},2178:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=r(0),i=r.n(c),s=r(22),l=r.n(s),p=r(2180),u=r(2179),y=r(2),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),m=i.a.createElement("i",{className:"spinner"}),h=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.checkSecretKey()}},{key:"render",value:function(){return i.a.createElement("div",{id:"encryption-page",className:"page page-limited"},i.a.createElement(l.a,{title:r.i(y.translate)("property.category.security.encryption")}),i.a.createElement("header",{className:"page-header"},i.a.createElement("h1",{className:"page-title"},r.i(y.translate)("property.category.security.encryption")),this.props.loading&&m),!this.props.loading&&!this.props.secretKeyAvailable&&i.a.createElement(p.a,{secretKey:this.props.secretKey,generateSecretKey:this.props.generateSecretKey}),this.props.secretKeyAvailable&&i.a.createElement(u.a,{encryptedValue:this.props.encryptedValue,encryptValue:this.props.encryptValue,generateSecretKey:this.props.startGeneration}))}}]),t}(i.a.PureComponent);h.propTypes={loading:i.a.PropTypes.bool.isRequired,secretKeyAvailable:i.a.PropTypes.bool,secretKey:i.a.PropTypes.string,encryptedValue:i.a.PropTypes.string,checkSecretKey:i.a.PropTypes.func.isRequired,generateSecretKey:i.a.PropTypes.func.isRequired,encryptValue:i.a.PropTypes.func.isRequired,startGeneration:i.a.PropTypes.func.isRequired},t.a=h},2179:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=r(0),i=r.n(c),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=i.a.createElement("div",{className:"spacer-bottom"},"Secret key is registered. You can encrypt any property value with the following form:"),p=i.a.createElement("button",{className:"spacer-left"},"Encrypt"),u=i.a.createElement("div",{className:"big-spacer-top spacer-bottom"},"Note that the secret key can be changed, but all the encrypted properties"," ","will have to be updated."," ",i.a.createElement("a",{href:"https://redirect.sonarsource.com/doc/settings-encryption.html"},"More information")),y=i.a.createElement("button",null,"Generate New Secret Key"),f=function(e){function t(){var e,r,o,c;n(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={value:""},c=r,a(o,c)}return o(t,e),s(t,[{key:"handleEncrypt",value:function(e){e.preventDefault(),this.props.encryptValue(this.state.value)}},{key:"handleGenerateNewKey",value:function(e){e.preventDefault(),this.props.generateSecretKey()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"encryption-form-container"},l,i.a.createElement("form",{id:"encryption-form",className:"big-spacer-bottom",onSubmit:function(t){return e.handleEncrypt(t)}},i.a.createElement("input",{id:"encryption-form-value",className:"input-large",type:"text",autoFocus:!0,required:!0,value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),p),null!=this.props.encryptedValue&&i.a.createElement("div",null,"Encrypted Value:"," ",i.a.createElement("input",{id:"encrypted-value",className:"input-clear input-code input-super-large",type:"text",readOnly:!0,value:this.props.encryptedValue})),i.a.createElement("div",{className:"huge-spacer-top bordered-top"},u,i.a.createElement("form",{id:"encryption-new-key-form",onSubmit:function(t){return e.handleGenerateNewKey(t)}},y)))}}]),t}(i.a.PureComponent);f.propTypes={encryptedValue:i.a.PropTypes.string,encryptValue:i.a.PropTypes.func.isRequired,generateSecretKey:i.a.PropTypes.func.isRequired},t.a=f},2180:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=r(0),i=r.n(c),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=i.a.createElement("h3",{className:"spacer-bottom"},"Secret Key"),p=i.a.createElement("h3",{className:"spacer-bottom"},"How To Use"),u=i.a.createElement("ul",{className:"list-styled markdown"},i.a.createElement("li",{className:"spacer-bottom"},"Store the secret key in the file"," ",i.a.createElement("code",null,"~/.sonar/sonar-secret.txt")," ","of the server. This file can be relocated by defining the property ",i.a.createElement("code",null,"sonar.secretKeyPath")," ","in ",i.a.createElement("code",null,"conf/sonar.properties")),i.a.createElement("li",{className:"spacer-bottom"},"Restrict access to this file by making it readable and by owner only"),i.a.createElement("li",{className:"spacer-bottom"},"Restart the server if the property"," ",i.a.createElement("code",null,"sonar.secretKeyPath")," ","has been set or changed."),i.a.createElement("li",{className:"spacer-bottom"},"Copy this file on all the machines that execute code inspection. Define the"," ","property ",i.a.createElement("code",null,"sonar.secretKeyPath")," on those machines if the path is not"," ",i.a.createElement("code",null,"~/.sonar/sonar-secret.txt"),"."),i.a.createElement("li",null,"For each property that you want to encrypt, generate the encrypted value and"," ","replace the original value wherever it is stored"," ","(configuration files, command lines).")),y=i.a.createElement("p",{className:"spacer-bottom"},"Secret key is required to be able to encrypt properties."," ",i.a.createElement("a",{href:"https://redirect.sonarsource.com/doc/settings-encryption.html"},"More information")),f=i.a.createElement("button",null,"Generate Secret Key"),m=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.generateSecretKey()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"generate-secret-key-form-container"},null!=this.props.secretKey?i.a.createElement("div",null,i.a.createElement("div",{className:"big-spacer-bottom"},l,i.a.createElement("input",{id:"secret-key",className:"input-large",type:"text",readOnly:!0,value:this.props.secretKey})),p,u):i.a.createElement("div",null,y,i.a.createElement("form",{id:"generate-secret-key-form",onSubmit:function(t){return e.handleSubmit(t)}},f)))}}]),t}(i.a.PureComponent);m.propTypes={secretKey:i.a.PropTypes.string,generateSecretKey:i.a.PropTypes.func.isRequired},t.a=m}});
//# sourceMappingURL=34.61d15d31.chunk.js.map