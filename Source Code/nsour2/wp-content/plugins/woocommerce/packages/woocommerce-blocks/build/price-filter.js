this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,l=t[0],a=t[1],s=t[2],b=0,p=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var a=n[l];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={18:0,1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=a;return o.push([416,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},102:function(e,t,n){"use strict";var r=n(0),c=n(7),o=n(1),i=n(3),l=n(11);function a(e){let{level:t}=e;const n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(r.createElement)(l.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(l.Path,{d:n[t]})):null}class s extends r.Component{createLevelControl(e,t,n){const c=e===t;return{icon:Object(r.createElement)(a,{level:e}),title:Object(o.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(o.__)("Heading %d","woocommerce"),e),isActive:c,onClick:()=>n(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:n,selectedLevel:o,onChange:l}=this.props;return Object(r.createElement)(i.ToolbarGroup,{isCollapsed:e,icon:Object(r.createElement)(a,{level:o}),controls:Object(c.range)(t,n).map(e=>this.createLevelControl(e,o,l))})}}t.a=s},11:function(e,t){e.exports=window.wp.primitives},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},122:function(e,t,n){"use strict";var r=n(0),c=n(5),o=n(10),i=n(1);n(155),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:n,onChange:o,heading:l,instanceId:a}=e;const s="h"+n;return Object(r.createElement)(s,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(i.__)("Block title","woocommerce")),Object(r.createElement)(c.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:l,onChange:o}))})},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(18),c=n(9),o=n(0),i=n(50),l=n(124);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:s={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(i.a)(s),d=Object(i.a)(a),m=Object(l.a)(),f=Object(c.useSelect)(e=>{if(!u)return null;const c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,p,d],i=c.getCollectionError(...o);if(i){if(!(i instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(i)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,n,d,p,u]);return null!==f&&(b.current=f),b.current}},129:function(e,t){},13:function(e,t){e.exports=window.wp.blocks},143:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),i=n.n(o),l=n(30);n(185),t.a=e=>{let{className:t,disabled:n,label:
/* translators: Submit button text for filters. */
o=Object(c.__)("Go","woocommerce"),onClick:a,screenReaderLabel:s=Object(c.__)("Apply filter","woocommerce")}=e;return Object(r.createElement)("button",{type:"submit",className:i()("wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:n,onClick:a},Object(r.createElement)(l.a,{label:o,screenReaderLabel:s}))}},155:function(e,t){},16:function(e,t){e.exports=window.wp.url},166:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(16);const c="query_type_",o="filter_";function i(e){return window?Object(r.getQueryArg)(window.location.href,e):null}},18:function(e,t){e.exports=window.wc.wcBlocksData},185:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"l",(function(){return l})),n.d(t,"n",(function(){return a})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return w})),n.d(t,"b",(function(){return _}));var r,c=n(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",l=o.pluginUrl+"build/",a=o.buildPhase,s=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,p=c.STORE_PAGES.privacy.permalink,d=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),m=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),f=c.STORE_PAGES.cart.permalink,g=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),O=Object(c.getSetting)("allowedCountries",{}),w=Object(c.getSetting)("shippingStates",{}),_=Object(c.getSetting)("allowedStates",{})},230:function(e){e.exports=JSON.parse('{"name":"woocommerce/price-filter","version":"1.0.0","title":"Filter Products by Price","description":"Allow customers to filter the products by choosing a lower or upper price limit. Works in combination with the All Products block.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"text":true,"background":false}},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"showInputFields":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},25:function(e,t){e.exports=window.wp.isShallowEqual},27:function(e,t){e.exports=window.wc.priceFormat},3:function(e,t){e.exports=window.wp.components},30:function(e,t,n){"use strict";var r=n(0),c=n(4),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:i,wrapperProps:l={}}=e;const a=null!=n,s=null!=c;return!a&&s?(t=i||"span",l={...l,className:o()(l.className,"screen-reader-text")},Object(r.createElement)(t,l,c)):(t=i||r.Fragment,a&&s&&n!==c?Object(r.createElement)(t,l,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,l,n))}},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(278),o=n(7),i=n(50),l=n(34),a=n(76),s=n(125),u=n(52);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryState:p}=e,d=Object(u.a)();d+="-collection-data";const[m]=Object(a.a)(d),[f,g]=Object(a.b)("calculate_attribute_counts",[],d),[O,w]=Object(a.b)("calculate_price_range",null,d),[_,j]=Object(a.b)("calculate_stock_status_counts",null,d),h=Object(i.a)(t||{}),v=Object(i.a)(n),k=Object(i.a)(b);Object(r.useEffect)(()=>{"object"==typeof h&&Object.keys(h).length&&(f.find(e=>Object(l.b)(h,"taxonomy")&&e.taxonomy===h.taxonomy)||g([...f,h]))},[h,f,g]),Object(r.useEffect)(()=>{O!==v&&void 0!==v&&w(v)},[v,w,O]),Object(r.useEffect)(()=>{_!==k&&void 0!==k&&j(k)},[k,j,_]);const[y,E]=Object(r.useState)(!1),[x]=Object(c.a)(y,200);y||E(!0);const S=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(m),[m]);return Object(s.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...S},shouldSelect:x})}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},38:function(e,t,n){"use strict";var r=n(6),c=n.n(r),o=n(0),i=n(126),l=n(4),a=n.n(l);n(129);const s=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:r,onValueChange:l,displayType:u="text",...b}=e;const p="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(p))return null;const d=p/10**r.minorUnit;if(!Number.isFinite(d))return null;const m=a()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...b,...s(r),value:void 0,currency:void 0,onValueChange:void 0},g=l?e=>{const t=+e.value*10**r.minorUnit;l(t)}:()=>{};return Object(o.createElement)(i.a,c()({className:m,displayType:u},f,{value:d,onValueChange:g}))}},416:function(e,t,n){e.exports=n(490)},417:function(e,t){},418:function(e,t){},419:function(e,t){},490:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),o=n(0),i=n(1),l=n(13),a=n(4),s=n.n(a),u=n(115),b=n(542),p=n(65),d=n(5),m=n(2),f=n(22),g=n(102),O=n(122),w=n(233),_=n(3),j=n(111),h=n(76),v=n(302),k=n(38),y=n(34);n(419);const E=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[o,i]=e;const l=e=>Number.isFinite(e);return l(o)||(o=t||0),l(i)||(i=n||r),l(t)&&t>o&&(o=t),l(n)&&n<=o&&(o=n-r),l(t)&&t>=i&&(i=t+r),l(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]};var x=n(143);const S=e=>{let{maxConstraint:t,minorUnit:n}=e;return e=>{let{floatValue:r}=e;return void 0!==r&&r<=t/10**n&&r>0}},C=e=>{let{minConstraint:t,currentMaxValue:n,minorUnit:r}=e;return e=>{let{floatValue:c}=e;return void 0!==c&&c>=t/10**r&&c<n/10**r}};var N=e=>{let{minPrice:t,maxPrice:n,minConstraint:r,maxConstraint:c,onChange:l,step:a,currency:u,showInputFields:b=!0,showFilterButton:p=!1,isLoading:d=!1,onSubmit:m=(()=>{})}=e;const f=Object(o.useRef)(null),g=Object(o.useRef)(null),O=a||10**u.minorUnit,[w,_]=Object(o.useState)(t),[j,h]=Object(o.useState)(n);Object(o.useEffect)(()=>{_(t)},[t]),Object(o.useEffect)(()=>{h(n)},[n]);const v=Object(o.useMemo)(()=>isFinite(r)&&isFinite(c),[r,c]),N=Object(o.useMemo)(()=>isFinite(t)&&isFinite(n)&&v?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,n,r,c,v]),F=Object(o.useCallback)(e=>{if(d||!v||!f.current||!g.current)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=f.current.offsetWidth,o=+f.current.value,i=g.current.offsetWidth,l=+g.current.value,a=r*(o/c),s=i*(l/c);Math.abs(n-a)>Math.abs(n-s)?(f.current.style.zIndex="20",g.current.style.zIndex="21"):(f.current.style.zIndex="21",g.current.style.zIndex="20")},[d,c,v]),P=Object(o.useCallback)(e=>{const o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=+e.target.value,a=o?[Math.round(i/O)*O,n]:[t,Math.round(i/O)*O],s=E(a,r,c,O,o);l(s)},[l,t,n,r,c,O]),T=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min");if(w>=j){const e=E([0,j],null,null,O,t);return l([parseInt(e[0],10),parseInt(e[1],10)])}const n=E([w,j],null,null,O,t);l(n)},[l,O,w,j]),R=s()("wc-block-price-filter","wc-block-components-price-slider",b&&"wc-block-price-filter--has-input-fields",b&&"wc-block-components-price-slider--has-input-fields",p&&"wc-block-price-filter--has-filter-button",p&&"wc-block-components-price-slider--has-filter-button",d&&"is-loading",!v&&"is-disabled"),U=Object(y.a)(f.current)?f.current.ownerDocument.activeElement:void 0,L=U&&U===f.current?O:1,A=U&&U===g.current?O:1,B=String(w/10**u.minorUnit),V=String(j/10**u.minorUnit);return Object(o.createElement)("div",{className:R},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper",onMouseMove:F,onFocus:F},v&&Object(o.createElement)("div",{"aria-hidden":b},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:N}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(i.__)("Filter products by minimum price","woocommerce"),"aria-valuetext":B,value:Number.isFinite(t)?t:r,onChange:P,step:L,min:r,max:c,ref:f,disabled:d,tabIndex:b?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(i.__)("Filter products by maximum price","woocommerce"),"aria-valuetext":V,value:Number.isFinite(n)?n:c,onChange:P,step:A,min:r,max:c,ref:g,disabled:d,tabIndex:b?-1:0}))),Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},b&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(k.a,{currency:u,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(i.__)("Filter products by minimum price","woocommerce"),allowNegative:!1,isAllowed:C({minConstraint:r,minorUnit:u.minorUnit,currentMaxValue:j}),onValueChange:e=>{e!==w&&_(e)},onBlur:T,disabled:d||!v,value:w}),Object(o.createElement)(k.a,{currency:u,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(i.__)("Filter products by maximum price","woocommerce"),isAllowed:S({maxConstraint:c,minorUnit:u.minorUnit}),onValueChange:e=>{e!==j&&h(e)},onBlur:T,disabled:d||!v,value:j})),!b&&!d&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(i.__)("Price","woocommerce"),":  ",Object(o.createElement)(k.a,{currency:u,value:t})," – ",Object(o.createElement)(k.a,{currency:u,value:n})),p&&Object(o.createElement)(x.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",disabled:d||!v,onClick:m,screenReaderLabel:Object(i.__)("Apply price filter","woocommerce")})))},F=n(114),P=n(27),T=n(16),R=n(244),U=n(110);const L=(e,t,n)=>{const r=10*10**t;let c=null;const o=parseFloat(e);isNaN(o)||("ROUND_UP"===n?c=Math.ceil(o/r)*r:"ROUND_DOWN"===n&&(c=Math.floor(o/r)*r));const i=Object(j.a)(c,Number.isFinite);return Number.isFinite(c)?c:i};var A=n(166);function B(e,t){return Number(e)*10**t}n(418);var V=e=>{let{attributes:t,isEditor:n=!1}=e;const r=Object(m.getSettingWithCoercion)("has_filterable_products",!1,R.a),c=Object(m.getSettingWithCoercion)("is_rendering_php_template",!1,R.a),[i,l]=Object(o.useState)(!1),a=Object(A.c)("min_price"),s=Object(A.c)("max_price"),[u]=Object(h.a)(),{results:b,isLoading:p}=Object(v.a)({queryPrices:!0,queryState:u}),d=Object(P.getCurrencyFromPriceResponse)(Object(y.b)(b,"price_range")?b.price_range:void 0),[f,g]=Object(h.b)("min_price",B(a,d.minorUnit)||null),[O,w]=Object(h.b)("max_price",B(s,d.minorUnit)||null),[_,k]=Object(o.useState)(B(a,d.minorUnit)||null),[E,x]=Object(o.useState)(B(s,d.minorUnit)||null),{minConstraint:S,maxConstraint:C}=(e=>{let{minPrice:t,maxPrice:n,minorUnit:r}=e;return{minConstraint:L(t||"",r,"ROUND_DOWN"),maxConstraint:L(n||"",r,"ROUND_UP")}})({minPrice:Object(y.b)(b,"price_range")&&Object(y.b)(b.price_range,"min_price")&&Object(U.a)(b.price_range.min_price)?b.price_range.min_price:void 0,maxPrice:Object(y.b)(b,"price_range")&&Object(y.b)(b.price_range,"max_price")&&Object(U.a)(b.price_range.max_price)?b.price_range.max_price:void 0,minorUnit:d.minorUnit});Object(o.useEffect)(()=>{!i&&c&&(g(B(a,d.minorUnit)),w(B(s,d.minorUnit)),l(!0))},[d.minorUnit,c,i,s,a,w,g]);const V=Object(o.useCallback)((e,t)=>{const n=t>=Number(C)?void 0:t,r=e<=Number(S)?void 0:e;if(c&&window){const e=function(e,t){const n={};for(const[e,r]of Object.entries(t))r?n[e]=r.toString():delete n[e];const r=Object(T.removeQueryArgs)(e,...Object.keys(t));return Object(T.addQueryArgs)(r,n)}(window.location.href,{min_price:r/10**d.minorUnit,max_price:n/10**d.minorUnit});window.location.href!==e&&(window.location.href=e)}else g(r),w(n)},[S,C,g,w,c,d.minorUnit]),M=Object(F.a)(V,500),H=Object(o.useCallback)(e=>{e[0]!==_&&k(e[0]),e[1]!==E&&x(e[1]),c&&i&&!t.showFilterButton&&M(e[0],e[1])},[_,E,k,x,c,i,M,t.showFilterButton]);Object(o.useEffect)(()=>{t.showFilterButton||c||M(_,E)},[_,E,t.showFilterButton,M,c]);const I=Object(j.a)(f),z=Object(j.a)(O),G=Object(j.a)(S),q=Object(j.a)(C);if(Object(o.useEffect)(()=>{(!Number.isFinite(_)||f!==I&&f!==_||S!==G&&S!==_)&&k(Number.isFinite(f)?f:S),(!Number.isFinite(E)||O!==z&&O!==E||C!==q&&C!==E)&&x(Number.isFinite(O)?O:C)},[_,E,f,O,S,C,G,q,I,z]),!r)return null;if(!p&&(null===S||null===C||S===C))return null;const D="h"+t.headingLevel;return Object(o.createElement)(o.Fragment,null,!n&&t.heading&&Object(o.createElement)(D,{className:"wc-block-price-filter__title"},t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(N,{minConstraint:S,maxConstraint:C,minPrice:_,maxPrice:E,currency:d,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:H,onSubmit:()=>V(_,E),isLoading:p})))},M=(n(417),n(230));const H={heading:{type:"string",default:Object(i.__)("Filter by price","woocommerce")}};Object(l.registerBlockType)(M,{title:Object(i.__)("Filter Products by Price","woocommerce"),description:Object(i.__)("Allow customers to filter the products by choosing a lower or upper price limit. Works in combination with the All Products block.","woocommerce"),icon:{src:Object(o.createElement)(u.a,{icon:b.a,className:"wc-block-editor-components-block-icon"})},supports:{...M.supports,...Object(p.b)()&&{__experimentalBorder:{radius:!0,color:!0,width:!1}}},attributes:{...M.attributes,...H},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:n}=e;return"woocommerce_price_filter"===t&&!(null==n||!n.raw)},transform:e=>{var t;let{instance:n}=e;return Object(l.createBlock)("woocommerce/price-filter",{showInputFields:!1,showFilterButton:!0,heading:(null==n||null===(t=n.raw)||void 0===t?void 0:t.title)||Object(i.__)("Filter by price","woocommerce"),headingLevel:3})}}]},edit:function(e){let{attributes:t,setAttributes:n}=e;const{heading:r,headingLevel:c,showInputFields:l,showFilterButton:a}=t,s=Object(d.useBlockProps)();return Object(o.createElement)("div",s,0===f.o.productCount?Object(o.createElement)(_.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(u.a,{icon:b.a}),label:Object(i.__)("Filter Products by Price","woocommerce"),instructions:Object(i.__)("Display a slider to filter products in your store by price.","woocommerce")},Object(o.createElement)("p",null,Object(i.__)("Products with prices are needed for filtering by price. You haven't created any products yet.","woocommerce")),Object(o.createElement)(_.Button,{className:"wc-block-price-slider__add-product-button",isSecondary:!0,href:Object(m.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product","woocommerce")+" ",Object(o.createElement)(u.a,{icon:w.a})),Object(o.createElement)(_.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more","woocommerce"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(d.InspectorControls,{key:"inspector"},Object(o.createElement)(_.PanelBody,{title:Object(i.__)("Block Settings","woocommerce")},Object(o.createElement)(_.__experimentalToggleGroupControl,{label:Object(i.__)("Price Range","woocommerce"),value:l?"editable":"text",onChange:e=>n({showInputFields:"editable"===e})},Object(o.createElement)(_.__experimentalToggleGroupControlOption,{value:"editable",label:Object(i.__)("Editable","woocommerce")}),Object(o.createElement)(_.__experimentalToggleGroupControlOption,{value:"text",label:Object(i.__)("Text","woocommerce")})),Object(o.createElement)(_.ToggleControl,{label:Object(i.__)("Filter button","woocommerce"),help:a?Object(i.__)("Products will only update when the button is pressed.","woocommerce"):Object(i.__)("Products will update when the slider is moved.","woocommerce"),checked:a,onChange:()=>n({showFilterButton:!a})}),Object(o.createElement)("p",null,Object(i.__)("Heading Level","woocommerce")),Object(o.createElement)(g.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:c,onChange:e=>n({headingLevel:e})}))),Object(o.createElement)(O.a,{className:"wc-block-price-filter__title",headingLevel:c,heading:r,onChange:e=>n({heading:e})}),Object(o.createElement)(_.Disabled,null,Object(o.createElement)(V,{attributes:t,isEditor:!0}))))},save(e){let{attributes:t}=e;const{className:n,showInputFields:r,showFilterButton:i,heading:l,headingLevel:a}=t,u={"data-showinputfields":r,"data-showfilterbutton":i,"data-heading":l,"data-heading-level":a};return Object(o.createElement)("div",c()({},d.useBlockProps.save({className:s()("is-loading",n)}),u),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(25),o=n.n(c);function i(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return a}));var r=n(13),c=n(22);const o=(e,t)=>{if(c.n>2)return Object(r.registerBlockType)(e,t)},i=(e,t)=>{if(c.n>1)return Object(r.registerBlockType)(e,t)},l=()=>c.n>2,a=()=>c.n>1},7:function(e,t){e.exports=window.lodash},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n(18),c=n(9),o=n(0),i=n(25),l=n.n(i),a=n(50),s=n(111),u=n(52);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:i}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{i(e,t)},[e,i])]},p=(e,t,n)=>{const i=Object(u.a)();n=n||i;const l=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:a}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[l,Object(o.useCallback)(t=>{a(n,e,t)},[n,e,a])]},d=(e,t)=>{const n=Object(u.a)();t=t||n;const[r,c]=b(t),i=Object(a.a)(r),p=Object(a.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{l()(d,p)||(c(Object.assign({},i,p)),m.current=!0)},[i,p,d,c]),m.current?[r,c]:[e,c]}},8:function(e,t){e.exports=window.React},9:function(e,t){e.exports=window.wp.data}});