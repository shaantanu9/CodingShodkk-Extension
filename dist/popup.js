(()=>{"use strict";var e,t={1343:(e,t,l)=>{l.d(t,{Z:()=>c});var n=l(4933),o=l.n(n),r=l(3476),a=l.n(r)()(o());a.push([e.id,'body{background-color:#f5f5f5;width:320px;height:112px;color:#0f110f;font-family:"roboto"}',""]);const c=a},230:(e,t,l)=>{var n=l(7378),o=l(7634),r=(l(6658),l(1892)),a=l.n(r),c=l(5760),s=l.n(c),i=l(8311),u=l.n(i),m=l(8192),d=l.n(m),g=l(8060),p=l.n(g),h=l(4865),k=l.n(h),E=l(1343),b={};b.styleTagTransform=k(),b.setAttributes=d(),b.insert=u().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=p(),a()(E.Z,b),E.Z&&E.Z.locals&&E.Z.locals;var v=l(4206),f=l.n(v);const y=({token:e})=>{const[t,l]=(0,n.useState)(e),[o,r]=(0,n.useState)(""),[a,c]=n.useState(null),[s,i]=n.useState(null),[u,m]=(0,n.useState)(!1);n.useEffect((()=>{chrome.tabs.query({currentWindow:!0,active:!0},(function(e){var t;c((t=e[0].url).includes("youtube.com")?t.split("&")[0]:t),i(e[0].title),console.log("title",e[0].title)}))}),[]);const d={title:s,url:a,description:"",tags:"",isPrivate:!1,code:""},[g,p]=(0,n.useState)(d),[h,k]=(0,n.useState)([]),E=e=>{if(console.log(e.target.type,"e.target.type",e.target.id,"e.target.id",e.target.checked,"e.target.checked"),"checkbox"===e.target.type)return void p(Object.assign(Object.assign({},g),{[e.target.id]:e.target.checked}));const{value:t,id:l}=e.target;"tags"===l&&(console.log(t),p(Object.assign(Object.assign({},g),{[l]:t.split(",")}))),console.log(g,"post"),p(Object.assign(Object.assign({},g),{[l]:t}))},b={container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",width:"100%"},input:{width:"80%",height:"20%"},button:{width:"100%",height:"30px"},label:{width:"100%",height:"30px",marginBottom:"1px"}};return n.createElement(n.Fragment,null,n.createElement("form",{onSubmit:e=>{e.preventDefault();const l=g.title,n=g.description;console.log(g.tags,"Post tags Before");let o=g.tags.split(",");o=o.map((e=>e.trim())),o=o.filter((e=>""!==e)),o=o.map((e=>e.toLowerCase())),o=[...new Set(o)],console.log(o,"tags After");const r={title:l,url:a,description:n,tags:o,code:g.code,isPrivate:g.isPrivate},c=JSON.stringify(r);console.log(c,"stringifyData"),n.length>4&&f().post("https://camel-bedclothes.cyclic.app/bookmarks",r,{headers:{Authorization:`Bearer ${t}`}}).then((e=>{console.log(e),m(!0),setTimeout((()=>{m(!1)}),2e3),p(d)})).catch((e=>{console.log("This is Error Message= ",e)}))},style:b.container},n.createElement("br",null),n.createElement("label",{style:b.label,htmlFor:"title"},"Title"),n.createElement("input",{style:b.input,value:g.title,id:"title",onChange:e=>E(e),type:"text",autoCapitalize:"on",autoCorrect:"on",autoComplete:"on",autoSave:"on"}),n.createElement("br",null),n.createElement("label",{style:b.label,htmlFor:"description"},"Description"),n.createElement("textarea",{id:"description",onChange:e=>E(e),value:g.description,required:!0,style:b.input,autoFocus:!0}),n.createElement("br",null),n.createElement("label",{style:b.label,htmlFor:"code"},"Code"),n.createElement("textarea",{style:b.input,id:"code",onChange:e=>E(e),value:g.code}),n.createElement("br",null),n.createElement("label",{style:b.label,htmlFor:"isPrivate"},"Is Private"),n.createElement("input",{type:"checkbox",id:"isPrivate",name:"isPrivate",value:"isPrivate",onChange:e=>E(e)}),n.createElement("label",{style:b.label,htmlFor:"tags"},"Tags"),n.createElement("input",{style:b.input,value:g.tags,id:"tags",onChange:e=>E(e),autoComplete:"on"}),n.createElement("br",null),n.createElement("input",{style:b.input,type:"submit",value:"BookMark"})),n.createElement("br",null),u&&n.createElement("div",null,n.createElement("h1",null,"Bookmark Posted Successfully")),n.createElement("p",null,a))},S=({bookmarks:e})=>{const[t,l]=n.useState(!1),o=e=>{e.target.value.startsWith("```")&&e.target.value.endsWith("```")&&(e.target.value=e.target.value.replace(/```/g,"")),navigator.clipboard.writeText(e.target.value)};return n.createElement(n.Fragment,null,n.createElement("div",{id:"mainBookmark"},e.map((e=>n.createElement("div",{key:e._id},n.createElement("h1",null,e.title),n.createElement("p",null,e.description),n.createElement("p",null,function(e){console.log(e,"code"),e=""===e||null==e?"Code shown here":e;return n.createElement("pre",{style:{backgroundColor:"black",color:"white",padding:"10px",borderRadius:"5px",fontSize:"12px"}},n.createElement("code",null,e))}(e.code)),n.createElement("a",{href:e.url},e.url),n.createElement("p",null,e.tags.map(((e,t)=>n.createElement("span",{key:t},"#",e," ")))),n.createElement("button",{onClick:()=>{return n=e._id,console.log("deleteBookmark",n),void f().delete(`https://camel-bedclothes.cyclic.app/bookmarks/${n}`).then((e=>{console.log(e),l(!t)}));var n}},"delete"),n.createElement("button",{onClick:o,value:e.description},"Copy Description"),n.createElement("button",{onClick:o,value:e.code},"Copy Code"))))))},C=({token:e})=>{const[t,l]=(0,n.useState)(e),[o,r]=(0,n.useState)([]),[a,c]=(0,n.useState)(!1),[s,i]=n.useState(null),[u,m]=(0,n.useState)(!1),d=new AbortController;(0,n.useEffect)((()=>{chrome.tabs.query({currentWindow:!0,active:!0},(function(e){console.log(e[0].url,"tabs[0].url"),i((()=>e[0].url)),g(e[0].url)}))}),[]);const g=e=>f().get("https://camel-bedclothes.cyclic.app/bookmarks/private/search?s="+e,{signal:d.signal,headers:{Authorization:`Bearer ${t}`}}).then((e=>{console.log(e.data,"then"),console.log(e.data,"then from getBookmarkFromURL"),r(e.data),c(!1)})).catch((e=>{console.log(e),c(!0)}));return n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement(S,{bookmarks:o})))},w="https://camel-bedclothes.cyclic.app/",x=({currentTab:e,token:t})=>{const[l,o]=(0,n.useState)(t),[r,a]=(0,n.useState)(""),[c,s]=(0,n.useState)([]),[i,u]=(0,n.useState)(!1),m=()=>{s([]),""===r&&a(e),console.log(r,"GetURL from getBookmarkFromURL",e),f().get(`${w}bookmarks/search?s=${r}`,{headers:{Authorization:`Bearer ${l}`}}).then((e=>{if(console.log(e.data,"then from getBookmarkFromURL"),0===e.data.length)return n.createElement("div",null,"No Bookmark Found");s(e.data)})).catch((e=>{console.log(e)}))};return n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("input",{type:"text",id:"url",onChange:e=>{const{value:t,id:l}=e.target;a(t)},onKeyDown:e=>(e=>{"Enter"===e.key&&m()})(e)}),n.createElement("br",null),n.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:"10px"}},n.createElement("button",{onClick:()=>{s([]),""===r&&a(e),console.log(r,"GetURL from getBookmarkFromURL",e),f().get(`${w}bookmarks/private/search?s=${r}`,{headers:{Authorization:`Bearer ${l}`}}).then((e=>{if(console.log(e.data,"then from getPersonalBookmarkFromURL"),0===e.data.length)return n.createElement("div",null,"No Bookmark Found");s(e.data)}))}},"Get My Bookmark"),n.createElement("button",{onClick:m},"Get Bookmark")),n.createElement("p",null,"searchTearm: ",r," ")),n.createElement(S,{bookmarks:c}),n.createElement("br",null))},B=({getTokenFrom:e})=>{const[t,l]=n.useState(""),[o,r]=n.useState(""),[a,c]=n.useState("");return n.createElement("form",{onSubmit:l=>{if(l.preventDefault(),""!==t&&""!==o)return c(""),f().post("https://camel-bedclothes.cyclic.app/users/login",{email:t,password:o}).then((t=>{console.log(t.data),chrome.storage.sync.set({token:t.data.token},(()=>{e(t.data.token),console.log("saved")}))})).catch((e=>{console.log(e)}));c("Please fill all the fields")}},n.createElement("div",{className:"login"},n.createElement("div",{className:"login__container"},n.createElement("h1",null,"Login Shodkk"),n.createElement("input",{type:"text",placeholder:"Email",value:t,required:!0,autoComplete:"on",onChange:e=>l(e.target.value)}),n.createElement("input",{type:"password",placeholder:"Password",value:o,required:!0,onChange:e=>r(e.target.value)}),n.createElement("br",null),n.createElement("div",null,n.createElement("p",null,n.createElement("a",{href:"https://google.com",target:"_blank"},"Forgot Password?")),n.createElement("p",null,n.createElement("a",{href:"https://google.com",target:"_blank"},"Create an Account"))),n.createElement("input",{type:"submit",value:"Login"}))))},F=({deleteToken:e})=>n.createElement("div",null,n.createElement("button",{onClick:()=>{chrome.storage.sync.set({token:null},(()=>{e(null),console.log("saved")}))}},"Logout")),P=document.getElementById("root-popup");(0,o.s)(P).render(n.createElement((()=>{const[e,t]=n.useState(!1),[l,o]=n.useState(null),[r,a]=n.useState(!1),[c,s]=n.useState(!1),[i,u]=n.useState(null);n.useEffect((()=>{chrome.tabs.query({currentWindow:!0,active:!0},(function(e){console.log(e[0].url),u(e[0].url)}))}),[]);const[m,d]=n.useState(null);return n.useEffect((()=>{chrome.storage.sync.get(["token"],(function(e){console.log("Value currently is "+e.token),d(e.token)}))}),[]),m||l?n.createElement("div",null,n.createElement("p",null,n.createElement("b",null,"Hi Shodkk Start Learning in Public")),n.createElement("div",null,n.createElement("p",null),n.createElement("button",{onClick:()=>{console.log("renderTextBox",r),a(!r),s(!1),t(!1)}},"Add Bookmark"),r&&n.createElement(y,{token:m})),n.createElement("div",null,n.createElement("p",null),n.createElement("button",{onClick:()=>{console.log("renderGetBookmark",e),t(!e),s(!1),a(!1)}},"Get Bookmark"),e&&n.createElement(C,{token:m})),n.createElement("div",null,n.createElement("p",null),n.createElement("button",{onClick:()=>{console.log("renderGetURL",c),s(!c),a(!1),t(!1)}},"Get Bookmark from URL"),n.createElement("p",null),c&&n.createElement(x,{currentTab:i,token:m}),n.createElement("p",null)),n.createElement("div",{style:{position:"absolute",right:"0",bottom:"0",padding:"10px"}},n.createElement(F,{deleteToken:o}))):n.createElement(B,{getTokenFrom:o})}),null))}},l={};function n(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={id:e,exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,o,r)=>{if(!l){var a=1/0;for(u=0;u<e.length;u++){for(var[l,o,r]=e[u],c=!0,s=0;s<l.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,o,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");l.length&&(e=l[l.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.b=document.baseURI||self.location.href;var e={42:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[a,c,s]=l,i=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(l);i<a.length;i++)r=a[i],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},l=self.webpackChunkcodingshodkk_extension=self.webpackChunkcodingshodkk_extension||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})(),n.nc=void 0;var o=n.O(void 0,[698,885],(()=>n(230)));o=n.O(o)})();