(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[156],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,l(l({ref:n},u),{},{components:t})):o.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3242:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),l={title:"Models and Collections",sidebar_label:"Introduction"},c={unversionedId:"vuemc/index",id:"vuemc/index",isDocsHomePage:!1,title:"Models and Collections",description:"Models and collections are based on vue-mc project",source:"@site/docs/vuemc/index.md",sourceDirName:"vuemc",slug:"/vuemc/index",permalink:"/api-shopaholic-docs/docs/vuemc/index",editUrl:"https://github.com/planetadeleste/api-shopaholic-docs/docs/vuemc/index.md",version:"current",sidebar_label:"Introduction",frontMatter:{title:"Models and Collections",sidebar_label:"Introduction"},sidebar:"ShopaholicDocs",previous:{title:"API Shopaholic",permalink:"/api-shopaholic-docs/docs/plugins/api-shopaholic"}},i=[{value:"Models and collections are based on vue-mc project",id:"models-and-collections-are-based-on-vue-mc-project",children:[{value:"Dependencies",id:"dependencies",children:[]},{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[]}]}],s={toc:i};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"models-and-collections-are-based-on-vue-mc-project"},"Models and collections are based on ",(0,a.kt)("a",{parentName:"h2",href:"https://vuemc.io/"},"vue-mc")," project"),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"vue-mc")," package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save vue-mc\n# Or\nyarn add vue-mc\n")),(0,a.kt)("p",null,"Models and Collections extends vue-mc package, first see ",(0,a.kt)("a",{parentName:"p",href:"https://vuemc.io/"},"their docs"),"."),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Add main packages\nyarn add @bit/planetadeleste.shopaholic-mc.base\nyarn add @bit/planetadeleste.shopaholic-mc.shopaholic\n\n# Add types\nyarn add -D @bit/planetadeleste.shopaholic-mc.types.vue-mc\nyarn add -D @bit/planetadeleste.shopaholic-mc.types.vue-mc-module\n")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"On your vue project, add this lines"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import Vue from "vue";\nimport { Base } from "@bit/planetadeleste.shopaholic-mc.base";\n\n// Set API Model\nconst laroute = require("./laroute.js");\nBase.$resolve = laroute.route;\nBase.$http = Vue.axios;\n')),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"vuex")," modules for loading, messaging and auth"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import Vue from "vue";\nimport { Base } from "@bit/planetadeleste.shopaholic-mc.base";\nimport { AuthModule } from "@/store/auth";\nimport { LoadingModule } from "@/store/loading";\nimport { FlashModule } from "@/store/flash";\n\n// Set API Model\nconst laroute = require("./laroute.js");\nBase.$resolve = laroute.route;\nBase.$authModule = AuthModule;\nBase.$flashModule = FlashModule;\nBase.$loadingModule = LoadingModule;\nBase.$http = Vue.axios;\n')))}u.isMDXComponent=!0}}]);