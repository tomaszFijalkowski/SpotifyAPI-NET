(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),a=(n(0),n(186)),i={id:"logging",title:"Logging"},c={id:"logging",title:"Logging",description:"The library provides a way to inject your own, custom HTTP Logger. By default, no logging is performed.",source:"@site/docs/logging.md",permalink:"/SpotifyAPI-NET/docs/next/logging",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/logging.md",version:"next",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1593464643,sidebar:"docs",previous:{title:"Configuration",permalink:"/SpotifyAPI-NET/docs/next/configuration"},next:{title:"Proxy",permalink:"/SpotifyAPI-NET/docs/next/proxy"}},l=[{value:"SimpleConsoleHTTPLogger",id:"simpleconsolehttplogger",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The library provides a way to inject your own, custom HTTP Logger. By default, no logging is performed."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var config = SpotifyClientConfig\n  .CreateDefault("YourAccessToken")\n  .WithHTTPLogger(new YourHTTPLogger());\n\nvar spotify = new SpotifyClient(config);\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"IHTTPLogger")," interface can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Http/Interfaces/IHTTPLogger.cs"}),"here"),"."),Object(a.b)("h2",{id:"simpleconsolehttplogger"},"SimpleConsoleHTTPLogger"),Object(a.b)("p",null,"The library ships with a simple console-based logger"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var config = SpotifyClientConfig\n  .CreateDefault("YourAccessToken")\n  .WithHTTPLogger(new SimpleConsoleHTTPLogger());\n\nvar spotify = new SpotifyClient(config);\n')),Object(a.b)("p",null,"This logger produces a simple console output for debugging purposes:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'GET tracks/NotAnid []\n--\x3e BadRequest application/json {  "error" : {    "status" : 400,    "message" : "\n\nGET tracks/6YlOxoHWLjH6uVQvxUIUug []\n--\x3e OK application/json {  "album" : {    "album_type" : "album",    "arti\n')))}s.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||g[f]||a;return n?o.a.createElement(b,c({ref:t},p,{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);