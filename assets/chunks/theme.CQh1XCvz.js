const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.fl3_X45b.js","assets/chunks/framework.FWlv_suP.js"])))=>i.map(i=>d[i]);
import{d as b,c as l,r as h,n as R,o as r,a as J,t as v,b as $,w as m,T as Le,e as f,_ as C,u as hn,i as mn,f as vn,g as z,h as y,j as a,k as c,l as ee,m as $e,p as S,q as G,s as me,v as Z,x as Ce,y as Te,z as fn,A as gn,F as E,B as O,C as ne,D as ve,E as _,G as Ge,H as W,I as We,J as ie,K as X,L as fe,M as bn,N as je,O as Se,P as Ve,Q as qe,R as ge,S as yn,U as kn,V as wn,W as Ye,X as Je,Y as _n,Z as $n,$ as be,a0 as Sn,a1 as Pn,a2 as K,a3 as Qe,a4 as de,a5 as te,a6 as xn}from"./framework.FWlv_suP.js";const An=b({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(r(),l("span",{class:R(["VPBadge",e.type])},[h(t.$slots,"default",{},()=>[J(v(e.text),1)])],2))}}),Ln={key:0,class:"VPBackdrop"},Cn=b({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(r(),$(Le,{name:"fade"},{default:m(()=>[e.show?(r(),l("div",Ln)):f("",!0)]),_:1}))}}),Tn=C(Cn,[["__scopeId","data-v-c79a1216"]]),D=hn;function Vn(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),(o=!0)&&setTimeout(()=>o=!1,t))}}function Pe(e){return e.startsWith("/")?e:`/${e}`}function Ie(e){const{pathname:t,search:n,hash:o,protocol:s}=new URL(e,"http://a.com");if(mn(e)||e.startsWith("#")||!s.startsWith("http")||!vn(t))return e;const{site:d}=D(),i=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,d.value.cleanUrls?"":".html")}${n}${o}`);return z(i)}function le({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:o,theme:s,hash:d}=D(),i=y(()=>{var p,w;return{label:(p=t.value.locales[n.value])==null?void 0:p.label,link:((w=t.value.locales[n.value])==null?void 0:w.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:y(()=>Object.entries(t.value.locales).flatMap(([p,w])=>i.value.label===w.label?[]:{text:w.label,link:In(w.link||(p==="root"?"/":`/${p}/`),s.value.i18nRouting!==!1&&e,o.value.relativePath.slice(i.value.link.length-1),!t.value.cleanUrls)+d.value})),currentLang:i}}function In(e,t,n,o){return t?e.replace(/\/$/,"")+Pe(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):e}const Nn={class:"NotFound"},En={class:"code"},Dn={class:"title"},Mn={class:"quote"},Rn={class:"action"},On=["href","aria-label"],Bn=b({__name:"NotFound",setup(e){const{theme:t}=D(),{currentLang:n}=le();return(o,s)=>{var d,i,u,p,w;return r(),l("div",Nn,[a("p",En,v(((d=c(t).notFound)==null?void 0:d.code)??"404"),1),a("h1",Dn,v(((i=c(t).notFound)==null?void 0:i.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=a("div",{class:"divider"},null,-1)),a("blockquote",Mn,v(((u=c(t).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),a("div",Rn,[a("a",{class:"link",href:c(z)(c(n).link),"aria-label":((p=c(t).notFound)==null?void 0:p.linkLabel)??"go to home"},v(((w=c(t).notFound)==null?void 0:w.linkText)??"Take me home"),9,On)])])}}}),Un=C(Bn,[["__scopeId","data-v-d6be1790"]]);function Xe(e,t){if(Array.isArray(e))return ue(e);if(e==null)return[];t=Pe(t);const n=Object.keys(e).sort((s,d)=>d.split("/").length-s.split("/").length).find(s=>t.startsWith(Pe(s))),o=n?e[n]:[];return Array.isArray(o)?ue(o):ue(o.items,o.base)}function Fn(e){const t=[];let n=0;for(const o in e){const s=e[o];if(s.items){n=t.push(s);continue}t[n]||t.push({items:[]}),t[n].items.push(s)}return t}function zn(e){const t=[];function n(o){for(const s of o)s.text&&s.link&&t.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&n(s.items)}return n(e),t}function xe(e,t){return Array.isArray(t)?t.some(n=>xe(e,n)):ee(e,t.link)?!0:t.items?xe(e,t.items):!1}function ue(e,t){return[...e].map(n=>{const o={...n},s=o.base||t;return s&&o.link&&(o.link=s+o.link),o.items&&(o.items=ue(o.items,s)),o})}function Q(){const{frontmatter:e,page:t,theme:n}=D(),o=$e("(min-width: 960px)"),s=S(!1),d=y(()=>{const V=n.value.sidebar,U=t.value.relativePath;return V?Xe(V,U):[]}),i=S(d.value);G(d,(V,U)=>{JSON.stringify(V)!==JSON.stringify(U)&&(i.value=d.value)});const u=y(()=>e.value.sidebar!==!1&&i.value.length>0&&e.value.layout!=="home"),p=y(()=>w?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),w=y(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),A=y(()=>u.value&&o.value),k=y(()=>u.value?Fn(i.value):[]);function L(){s.value=!0}function T(){s.value=!1}function I(){s.value?T():L()}return{isOpen:s,sidebar:i,sidebarGroups:k,hasSidebar:u,hasAside:w,leftAside:p,isSidebarEnabled:A,open:L,close:T,toggle:I}}function Hn(e,t){let n;me(()=>{n=e.value?document.activeElement:void 0}),Z(()=>{window.addEventListener("keyup",o)}),Ce(()=>{window.removeEventListener("keyup",o)});function o(s){s.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function Kn(e){const{page:t,hash:n}=D(),o=S(!1),s=y(()=>e.value.collapsed!=null),d=y(()=>!!e.value.link),i=S(!1),u=()=>{i.value=ee(t.value.relativePath,e.value.link)};G([t,e,n],u),Z(u);const p=y(()=>i.value?!0:e.value.items?xe(t.value.relativePath,e.value.items):!1),w=y(()=>!!(e.value.items&&e.value.items.length));me(()=>{o.value=!!(s.value&&e.value.collapsed)}),Te(()=>{(i.value||p.value)&&(o.value=!1)});function A(){s.value&&(o.value=!o.value)}return{collapsed:o,collapsible:s,isLink:d,isActiveLink:i,hasActiveLink:p,hasChildren:w,toggle:A}}function Gn(){const{hasSidebar:e}=Q(),t=$e("(min-width: 960px)"),n=$e("(min-width: 1280px)");return{isAsideEnabled:y(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const Wn=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Ae=[];function Ze(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function Ne(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const o=Number(n.tagName[1]);return{element:n,title:jn(n),link:"#"+n.id,level:o}});return qn(t,e)}function jn(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(Wn.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function qn(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,s]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return Qn(e,o,s)}function Yn(e,t){const{isAsideEnabled:n}=Gn(),o=Vn(d,100);let s=null;Z(()=>{requestAnimationFrame(d),window.addEventListener("scroll",o)}),fn(()=>{i(location.hash)}),Ce(()=>{window.removeEventListener("scroll",o)});function d(){if(!n.value)return;const u=window.scrollY,p=window.innerHeight,w=document.body.offsetHeight,A=Math.abs(u+p-w)<1,k=Ae.map(({element:T,link:I})=>({link:I,top:Jn(T)})).filter(({top:T})=>!Number.isNaN(T)).sort((T,I)=>T.top-I.top);if(!k.length){i(null);return}if(u<1){i(null);return}if(A){i(k[k.length-1].link);return}let L=null;for(const{link:T,top:I}of k){if(I>u+gn()+4)break;L=T}i(L)}function i(u){s&&s.classList.remove("active"),u==null?s=null:s=e.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const p=s;p?(p.classList.add("active"),t.value.style.top=p.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Jn(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function Qn(e,t,n){Ae.length=0;const o=[],s=[];return e.forEach(d=>{const i={...d,children:[]};let u=s[s.length-1];for(;u&&u.level>=i.level;)s.pop(),u=s[s.length-1];if(i.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){s.push({level:i.level,shouldIgnore:!0});return}i.level>n||i.level<t||(Ae.push({element:i.element,link:i.link}),u?u.children.push(i):o.push(i),s.push(i))}),o}const Xn=["href","title"],Zn=b({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const o=n.href.split("#")[1],s=document.getElementById(decodeURIComponent(o));s==null||s.focus({preventScroll:!0})}return(n,o)=>{const s=ne("VPDocOutlineItem",!0);return r(),l("ul",{class:R(["VPDocOutlineItem",e.root?"root":"nested"])},[(r(!0),l(E,null,O(e.headers,({children:d,link:i,title:u})=>(r(),l("li",null,[a("a",{class:"outline-link",href:i,onClick:t,title:u},v(u),9,Xn),d!=null&&d.length?(r(),$(s,{key:0,headers:d},null,8,["headers"])):f("",!0)]))),256))],2)}}}),en=C(Zn,[["__scopeId","data-v-b933a997"]]),et={class:"content"},nt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},tt=b({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=D(),o=Ge([]);ve(()=>{o.value=Ne(t.value.outline??n.value.outline)});const s=S(),d=S();return Yn(s,d),(i,u)=>(r(),l("nav",{"aria-labelledby":"doc-outline-aria-label",class:R(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:s},[a("div",et,[a("div",{class:"outline-marker",ref_key:"marker",ref:d},null,512),a("div",nt,v(c(Ze)(c(n))),1),_(en,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),at=C(tt,[["__scopeId","data-v-a5bbad30"]]),ot={class:"VPDocAsideCarbonAds"},st=b({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,o)=>(r(),l("div",ot,[_(c(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),rt={class:"VPDocAside"},it=b({__name:"VPDocAside",setup(e){const{theme:t}=D();return(n,o)=>(r(),l("div",rt,[h(n.$slots,"aside-top",{},void 0,!0),h(n.$slots,"aside-outline-before",{},void 0,!0),_(at),h(n.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=a("div",{class:"spacer"},null,-1)),h(n.$slots,"aside-ads-before",{},void 0,!0),c(t).carbonAds?(r(),$(st,{key:0,"carbon-ads":c(t).carbonAds},null,8,["carbon-ads"])):f("",!0),h(n.$slots,"aside-ads-after",{},void 0,!0),h(n.$slots,"aside-bottom",{},void 0,!0)]))}}),lt=C(it,[["__scopeId","data-v-3f215769"]]);function ct(){const{theme:e,page:t}=D();return y(()=>{const{text:n="Edit this page",pattern:o=""}=e.value.editLink||{};let s;return typeof o=="function"?s=o(t.value):s=o.replace(/:path/g,t.value.filePath),{url:s,text:n}})}function dt(){const{page:e,theme:t,frontmatter:n}=D();return y(()=>{var w,A,k,L,T,I,V,U;const o=Xe(t.value.sidebar,e.value.relativePath),s=zn(o),d=ut(s,M=>M.link.replace(/[?#].*$/,"")),i=d.findIndex(M=>ee(e.value.relativePath,M.link)),u=((w=t.value.docFooter)==null?void 0:w.prev)===!1&&!n.value.prev||n.value.prev===!1,p=((A=t.value.docFooter)==null?void 0:A.next)===!1&&!n.value.next||n.value.next===!1;return{prev:u?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((k=d[i-1])==null?void 0:k.docFooterText)??((L=d[i-1])==null?void 0:L.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((T=d[i-1])==null?void 0:T.link)},next:p?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((I=d[i+1])==null?void 0:I.docFooterText)??((V=d[i+1])==null?void 0:V.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((U=d[i+1])==null?void 0:U.link)}}})}function ut(e,t){const n=new Set;return e.filter(o=>{const s=t(o);return n.has(s)?!1:n.add(s)})}const j=b({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=y(()=>t.tag??(t.href?"a":"span")),o=y(()=>t.href&&We.test(t.href)||t.target==="_blank");return(s,d)=>(r(),$(W(n.value),{class:R(["VPLink",{link:e.href,"vp-external-link-icon":o.value,"no-icon":e.noIcon}]),href:e.href?c(Ie)(e.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:m(()=>[h(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),pt={class:"VPLastUpdated"},ht=["datetime"],mt=b({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:o}=D(),s=y(()=>new Date(n.value.lastUpdated)),d=y(()=>s.value.toISOString()),i=S("");return Z(()=>{me(()=>{var u,p,w;i.value=new Intl.DateTimeFormat((p=(u=t.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&p.forceLocale?o.value:void 0,((w=t.value.lastUpdated)==null?void 0:w.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(u,p)=>{var w;return r(),l("p",pt,[J(v(((w=c(t).lastUpdated)==null?void 0:w.text)||c(t).lastUpdatedText||"Last updated")+": ",1),a("time",{datetime:d.value},v(i.value),9,ht)])}}}),vt=C(mt,[["__scopeId","data-v-e98dd255"]]),ft={key:0,class:"VPDocFooter"},gt={key:0,class:"edit-info"},bt={key:0,class:"edit-link"},yt={key:1,class:"last-updated"},kt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},wt={class:"pager"},_t=["innerHTML"],$t=["innerHTML"],St={class:"pager"},Pt=["innerHTML"],xt=["innerHTML"],At=b({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:o}=D(),s=ct(),d=dt(),i=y(()=>t.value.editLink&&o.value.editLink!==!1),u=y(()=>n.value.lastUpdated),p=y(()=>i.value||u.value||d.value.prev||d.value.next);return(w,A)=>{var k,L,T,I;return p.value?(r(),l("footer",ft,[h(w.$slots,"doc-footer-before",{},void 0,!0),i.value||u.value?(r(),l("div",gt,[i.value?(r(),l("div",bt,[_(j,{class:"edit-link-button",href:c(s).url,"no-icon":!0},{default:m(()=>[A[0]||(A[0]=a("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),J(" "+v(c(s).text),1)]),_:1},8,["href"])])):f("",!0),u.value?(r(),l("div",yt,[_(vt)])):f("",!0)])):f("",!0),(k=c(d).prev)!=null&&k.link||(L=c(d).next)!=null&&L.link?(r(),l("nav",kt,[A[1]||(A[1]=a("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),a("div",wt,[(T=c(d).prev)!=null&&T.link?(r(),$(j,{key:0,class:"pager-link prev",href:c(d).prev.link},{default:m(()=>{var V;return[a("span",{class:"desc",innerHTML:((V=c(t).docFooter)==null?void 0:V.prev)||"Previous page"},null,8,_t),a("span",{class:"title",innerHTML:c(d).prev.text},null,8,$t)]}),_:1},8,["href"])):f("",!0)]),a("div",St,[(I=c(d).next)!=null&&I.link?(r(),$(j,{key:0,class:"pager-link next",href:c(d).next.link},{default:m(()=>{var V;return[a("span",{class:"desc",innerHTML:((V=c(t).docFooter)==null?void 0:V.next)||"Next page"},null,8,Pt),a("span",{class:"title",innerHTML:c(d).next.text},null,8,xt)]}),_:1},8,["href"])):f("",!0)])])):f("",!0)])):f("",!0)}}}),Lt=C(At,[["__scopeId","data-v-e257564d"]]),Ct={class:"container"},Tt={class:"aside-container"},Vt={class:"aside-content"},It={class:"content"},Nt={class:"content-container"},Et={class:"main"},Dt=b({__name:"VPDoc",setup(e){const{theme:t}=D(),n=ie(),{hasSidebar:o,hasAside:s,leftAside:d}=Q(),i=y(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,p)=>{const w=ne("Content");return r(),l("div",{class:R(["VPDoc",{"has-sidebar":c(o),"has-aside":c(s)}])},[h(u.$slots,"doc-top",{},void 0,!0),a("div",Ct,[c(s)?(r(),l("div",{key:0,class:R(["aside",{"left-aside":c(d)}])},[p[0]||(p[0]=a("div",{class:"aside-curtain"},null,-1)),a("div",Tt,[a("div",Vt,[_(lt,null,{"aside-top":m(()=>[h(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[h(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[h(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[h(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[h(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[h(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):f("",!0),a("div",It,[a("div",Nt,[h(u.$slots,"doc-before",{},void 0,!0),a("main",Et,[_(w,{class:R(["vp-doc",[i.value,c(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),_(Lt,null,{"doc-footer-before":m(()=>[h(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),h(u.$slots,"doc-after",{},void 0,!0)])])]),h(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Mt=C(Dt,[["__scopeId","data-v-39a288b8"]]),Rt=b({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=y(()=>t.href&&We.test(t.href)),o=y(()=>t.tag||(t.href?"a":"button"));return(s,d)=>(r(),$(W(o.value),{class:R(["VPButton",[e.size,e.theme]]),href:e.href?c(Ie)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:m(()=>[J(v(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),Ot=C(Rt,[["__scopeId","data-v-fa7799d5"]]),Bt=["src","alt"],Ut=b({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const o=ne("VPImage",!0);return e.image?(r(),l(E,{key:0},[typeof e.image=="string"||"src"in e.image?(r(),l("img",X({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:c(z)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Bt)):(r(),l(E,{key:1},[_(o,X({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),_(o,X({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):f("",!0)}}}),he=C(Ut,[["__scopeId","data-v-8426fc1a"]]),Ft={class:"container"},zt={class:"main"},Ht={class:"heading"},Kt=["innerHTML"],Gt=["innerHTML"],Wt=["innerHTML"],jt={key:0,class:"actions"},qt={key:0,class:"image"},Yt={class:"image-container"},Jt=b({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=fe("hero-image-slot-exists");return(n,o)=>(r(),l("div",{class:R(["VPHero",{"has-image":e.image||c(t)}])},[a("div",Ft,[a("div",zt,[h(n.$slots,"home-hero-info-before",{},void 0,!0),h(n.$slots,"home-hero-info",{},()=>[a("h1",Ht,[e.name?(r(),l("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,Kt)):f("",!0),e.text?(r(),l("span",{key:1,innerHTML:e.text,class:"text"},null,8,Gt)):f("",!0)]),e.tagline?(r(),l("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,Wt)):f("",!0)],!0),h(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(r(),l("div",jt,[(r(!0),l(E,null,O(e.actions,s=>(r(),l("div",{key:s.link,class:"action"},[_(Ot,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):f("",!0),h(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||c(t)?(r(),l("div",qt,[a("div",Yt,[o[0]||(o[0]=a("div",{class:"image-bg"},null,-1)),h(n.$slots,"home-hero-image",{},()=>[e.image?(r(),$(he,{key:0,class:"image-src",image:e.image},null,8,["image"])):f("",!0)],!0)])])):f("",!0)])],2))}}),Qt=C(Jt,[["__scopeId","data-v-4f9c455b"]]),Xt=b({__name:"VPHomeHero",setup(e){const{frontmatter:t}=D();return(n,o)=>c(t).hero?(r(),$(Qt,{key:0,class:"VPHomeHero",name:c(t).hero.name,text:c(t).hero.text,tagline:c(t).hero.tagline,image:c(t).hero.image,actions:c(t).hero.actions},{"home-hero-info-before":m(()=>[h(n.$slots,"home-hero-info-before")]),"home-hero-info":m(()=>[h(n.$slots,"home-hero-info")]),"home-hero-info-after":m(()=>[h(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":m(()=>[h(n.$slots,"home-hero-actions-after")]),"home-hero-image":m(()=>[h(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):f("",!0)}}),Zt={class:"box"},ea={key:0,class:"icon"},na=["innerHTML"],ta=["innerHTML"],aa=["innerHTML"],oa={key:4,class:"link-text"},sa={class:"link-text-value"},ra=b({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(r(),$(j,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:m(()=>[a("article",Zt,[typeof e.icon=="object"&&e.icon.wrap?(r(),l("div",ea,[_(he,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(r(),$(he,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(r(),l("div",{key:2,class:"icon",innerHTML:e.icon},null,8,na)):f("",!0),a("h2",{class:"title",innerHTML:e.title},null,8,ta),e.details?(r(),l("p",{key:3,class:"details",innerHTML:e.details},null,8,aa)):f("",!0),e.linkText?(r(),l("div",oa,[a("p",sa,[J(v(e.linkText)+" ",1),n[0]||(n[0]=a("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):f("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),ia=C(ra,[["__scopeId","data-v-a3976bdc"]]),la={key:0,class:"VPFeatures"},ca={class:"container"},da={class:"items"},ua=b({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=y(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,s)=>e.features?(r(),l("div",la,[a("div",ca,[a("div",da,[(r(!0),l(E,null,O(e.features,d=>(r(),l("div",{key:d.title,class:R(["item",[n.value]])},[_(ia,{icon:d.icon,title:d.title,details:d.details,link:d.link,"link-text":d.linkText,rel:d.rel,target:d.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):f("",!0)}}),pa=C(ua,[["__scopeId","data-v-a6181336"]]),ha=b({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=D();return(n,o)=>c(t).features?(r(),$(pa,{key:0,class:"VPHomeFeatures",features:c(t).features},null,8,["features"])):f("",!0)}}),ma=b({__name:"VPHomeContent",setup(e){const{width:t}=bn({initialWidth:0,includeScrollbar:!1});return(n,o)=>(r(),l("div",{class:"vp-doc container",style:je(c(t)?{"--vp-offset":`calc(50% - ${c(t)/2}px)`}:{})},[h(n.$slots,"default",{},void 0,!0)],4))}}),va=C(ma,[["__scopeId","data-v-8e2d4988"]]),fa=b({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=D();return(o,s)=>{const d=ne("Content");return r(),l("div",{class:R(["VPHome",{"external-link-icon-enabled":c(n).externalLinkIcon}])},[h(o.$slots,"home-hero-before",{},void 0,!0),_(Xt,null,{"home-hero-info-before":m(()=>[h(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[h(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[h(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[h(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[h(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),h(o.$slots,"home-hero-after",{},void 0,!0),h(o.$slots,"home-features-before",{},void 0,!0),_(ha),h(o.$slots,"home-features-after",{},void 0,!0),c(t).markdownStyles!==!1?(r(),$(va,{key:0},{default:m(()=>[_(d)]),_:1})):(r(),$(d,{key:1}))],2)}}}),ga=C(fa,[["__scopeId","data-v-8b561e3d"]]),ba={},ya={class:"VPPage"};function ka(e,t){const n=ne("Content");return r(),l("div",ya,[h(e.$slots,"page-top"),_(n),h(e.$slots,"page-bottom")])}const wa=C(ba,[["render",ka]]),_a=b({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=D(),{hasSidebar:o}=Q();return(s,d)=>(r(),l("div",{class:R(["VPContent",{"has-sidebar":c(o),"is-home":c(n).layout==="home"}]),id:"VPContent"},[c(t).isNotFound?h(s.$slots,"not-found",{},()=>[_(Un)],!0,0):c(n).layout==="page"?(r(),$(wa,{key:1},{"page-top":m(()=>[h(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[h(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):c(n).layout==="home"?(r(),$(ga,{key:2},{"home-hero-before":m(()=>[h(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[h(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[h(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[h(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[h(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[h(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[h(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[h(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[h(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):c(n).layout&&c(n).layout!=="doc"?(r(),$(W(c(n).layout),{key:3})):(r(),$(Mt,{key:4},{"doc-top":m(()=>[h(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[h(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":m(()=>[h(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[h(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[h(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":m(()=>[h(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":m(()=>[h(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[h(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[h(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[h(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":m(()=>[h(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),$a=C(_a,[["__scopeId","data-v-1428d186"]]),Sa={class:"container"},Pa=["innerHTML"],xa=["innerHTML"],Aa=b({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=D(),{hasSidebar:o}=Q();return(s,d)=>c(t).footer&&c(n).footer!==!1?(r(),l("footer",{key:0,class:R(["VPFooter",{"has-sidebar":c(o)}])},[a("div",Sa,[c(t).footer.message?(r(),l("p",{key:0,class:"message",innerHTML:c(t).footer.message},null,8,Pa)):f("",!0),c(t).footer.copyright?(r(),l("p",{key:1,class:"copyright",innerHTML:c(t).footer.copyright},null,8,xa)):f("",!0)])],2)):f("",!0)}}),La=C(Aa,[["__scopeId","data-v-e315a0ad"]]);function Ca(){const{theme:e,frontmatter:t}=D(),n=Ge([]),o=y(()=>n.value.length>0);return ve(()=>{n.value=Ne(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:o}}const Ta={class:"menu-text"},Va={class:"header"},Ia={class:"outline"},Na=b({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=D(),o=S(!1),s=S(0),d=S(),i=S();function u(k){var L;(L=d.value)!=null&&L.contains(k.target)||(o.value=!1)}G(o,k=>{if(k){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),Se("Escape",()=>{o.value=!1}),ve(()=>{o.value=!1});function p(){o.value=!o.value,s.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function w(k){k.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),Ve(()=>{o.value=!1}))}function A(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(k,L)=>(r(),l("div",{class:"VPLocalNavOutlineDropdown",style:je({"--vp-vh":s.value+"px"}),ref_key:"main",ref:d},[e.headers.length>0?(r(),l("button",{key:0,onClick:p,class:R({open:o.value})},[a("span",Ta,v(c(Ze)(c(n))),1),L[0]||(L[0]=a("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(r(),l("button",{key:1,onClick:A},v(c(n).returnToTopLabel||"Return to top"),1)),_(Le,{name:"flyout"},{default:m(()=>[o.value?(r(),l("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:w},[a("div",Va,[a("a",{class:"top-link",href:"#",onClick:A},v(c(n).returnToTopLabel||"Return to top"),1)]),a("div",Ia,[_(en,{headers:e.headers},null,8,["headers"])])],512)):f("",!0)]),_:1})],4))}}),Ea=C(Na,[["__scopeId","data-v-8a42e2b4"]]),Da={class:"container"},Ma=["aria-expanded"],Ra={class:"menu-text"},Oa=b({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=D(),{hasSidebar:o}=Q(),{headers:s}=Ca(),{y:d}=qe(),i=S(0);Z(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),ve(()=>{s.value=Ne(n.value.outline??t.value.outline)});const u=y(()=>s.value.length===0),p=y(()=>u.value&&!o.value),w=y(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:u.value,fixed:p.value}));return(A,k)=>c(n).layout!=="home"&&(!p.value||c(d)>=i.value)?(r(),l("div",{key:0,class:R(w.value)},[a("div",Da,[c(o)?(r(),l("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:k[0]||(k[0]=L=>A.$emit("open-menu"))},[k[1]||(k[1]=a("span",{class:"vpi-align-left menu-icon"},null,-1)),a("span",Ra,v(c(t).sidebarMenuLabel||"Menu"),1)],8,Ma)):f("",!0),_(Ea,{headers:c(s),navHeight:i.value},null,8,["headers","navHeight"])])],2)):f("",!0)}}),Ba=C(Oa,[["__scopeId","data-v-a6f0e41e"]]);function Ua(){const e=S(!1);function t(){e.value=!0,window.addEventListener("resize",s)}function n(){e.value=!1,window.removeEventListener("resize",s)}function o(){e.value?n():t()}function s(){window.outerWidth>=768&&n()}const d=ie();return G(()=>d.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:o}}const Fa={},za={class:"VPSwitch",type:"button",role:"switch"},Ha={class:"check"},Ka={key:0,class:"icon"};function Ga(e,t){return r(),l("button",za,[a("span",Ha,[e.$slots.default?(r(),l("span",Ka,[h(e.$slots,"default",{},void 0,!0)])):f("",!0)])])}const Wa=C(Fa,[["render",Ga],["__scopeId","data-v-1d5665e3"]]),ja=b({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=D(),o=fe("toggle-appearance",()=>{t.value=!t.value}),s=S("");return Te(()=>{s.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(d,i)=>(r(),$(Wa,{title:s.value,class:"VPSwitchAppearance","aria-checked":c(t),onClick:c(o)},{default:m(()=>[...i[0]||(i[0]=[a("span",{class:"vpi-sun sun"},null,-1),a("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Ee=C(ja,[["__scopeId","data-v-5337faa4"]]),qa={key:0,class:"VPNavBarAppearance"},Ya=b({__name:"VPNavBarAppearance",setup(e){const{site:t}=D();return(n,o)=>c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",qa,[_(Ee)])):f("",!0)}}),Ja=C(Ya,[["__scopeId","data-v-6c893767"]]),De=S();let nn=!1,_e=0;function Qa(e){const t=S(!1);if(ge){!nn&&Xa(),_e++;const n=G(De,o=>{var s,d,i;o===e.el.value||(s=e.el.value)!=null&&s.contains(o)?(t.value=!0,(d=e.onFocus)==null||d.call(e)):(t.value=!1,(i=e.onBlur)==null||i.call(e))});Ce(()=>{n(),_e--,_e||Za()})}return yn(t)}function Xa(){document.addEventListener("focusin",tn),nn=!0,De.value=document.activeElement}function Za(){document.removeEventListener("focusin",tn)}function tn(){De.value=document.activeElement}const eo={class:"VPMenuLink"},no=["innerHTML"],to=b({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=D();return(n,o)=>(r(),l("div",eo,[_(j,{class:R({active:c(ee)(c(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:m(()=>[a("span",{innerHTML:e.item.text},null,8,no)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ye=C(to,[["__scopeId","data-v-35975db6"]]),ao={class:"VPMenuGroup"},oo={key:0,class:"title"},so=b({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(r(),l("div",ao,[e.text?(r(),l("p",oo,v(e.text),1)):f("",!0),(r(!0),l(E,null,O(e.items,o=>(r(),l(E,null,["link"in o?(r(),$(ye,{key:0,item:o},null,8,["item"])):f("",!0)],64))),256))]))}}),ro=C(so,[["__scopeId","data-v-69e747b5"]]),io={class:"VPMenu"},lo={key:0,class:"items"},co=b({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(r(),l("div",io,[e.items?(r(),l("div",lo,[(r(!0),l(E,null,O(e.items,o=>(r(),l(E,{key:JSON.stringify(o)},["link"in o?(r(),$(ye,{key:0,item:o},null,8,["item"])):"component"in o?(r(),$(W(o.component),X({key:1,ref_for:!0},o.props),null,16)):(r(),$(ro,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):f("",!0),h(t.$slots,"default",{},void 0,!0)]))}}),uo=C(co,[["__scopeId","data-v-b98bc113"]]),po=["aria-expanded","aria-label"],ho={key:0,class:"text"},mo=["innerHTML"],vo={key:1,class:"vpi-more-horizontal icon"},fo={class:"menu"},go=b({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=S(!1),n=S();Qa({el:n,onBlur:o});function o(){t.value=!1}return(s,d)=>(r(),l("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:d[1]||(d[1]=i=>t.value=!0),onMouseleave:d[2]||(d[2]=i=>t.value=!1)},[a("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:d[0]||(d[0]=i=>t.value=!t.value)},[e.button||e.icon?(r(),l("span",ho,[e.icon?(r(),l("span",{key:0,class:R([e.icon,"option-icon"])},null,2)):f("",!0),e.button?(r(),l("span",{key:1,innerHTML:e.button},null,8,mo)):f("",!0),d[3]||(d[3]=a("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(r(),l("span",vo))],8,po),a("div",fo,[_(uo,{items:e.items},{default:m(()=>[h(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Me=C(go,[["__scopeId","data-v-cf11d7a2"]]),bo=["href","aria-label","innerHTML"],yo=b({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=S();Z(async()=>{var d;await Ve();const s=(d=n.value)==null?void 0:d.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=y(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(s,d)=>(r(),l("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,bo))}}),ko=C(yo,[["__scopeId","data-v-bd121fe5"]]),wo={class:"VPSocialLinks"},_o=b({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(r(),l("div",wo,[(r(!0),l(E,null,O(e.links,({link:o,icon:s,ariaLabel:d})=>(r(),$(ko,{key:o,icon:s,link:o,ariaLabel:d},null,8,["icon","link","ariaLabel"]))),128))]))}}),Re=C(_o,[["__scopeId","data-v-7bc22406"]]),$o={key:0,class:"group translations"},So={class:"trans-title"},Po={key:1,class:"group"},xo={class:"item appearance"},Ao={class:"label"},Lo={class:"appearance-action"},Co={key:2,class:"group"},To={class:"item social-links"},Vo=b({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=D(),{localeLinks:o,currentLang:s}=le({correspondingLink:!0}),d=y(()=>o.value.length&&s.value.label||t.value.appearance||n.value.socialLinks);return(i,u)=>d.value?(r(),$(Me,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:m(()=>[c(o).length&&c(s).label?(r(),l("div",$o,[a("p",So,v(c(s).label),1),(r(!0),l(E,null,O(c(o),p=>(r(),$(ye,{key:p.link,item:p},null,8,["item"]))),128))])):f("",!0),c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",Po,[a("div",xo,[a("p",Ao,v(c(n).darkModeSwitchLabel||"Appearance"),1),a("div",Lo,[_(Ee)])])])):f("",!0),c(n).socialLinks?(r(),l("div",Co,[a("div",To,[_(Re,{class:"social-links-list",links:c(n).socialLinks},null,8,["links"])])])):f("",!0)]),_:1})):f("",!0)}}),Io=C(Vo,[["__scopeId","data-v-bb2aa2f0"]]),No=["aria-expanded"],Eo=b({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(r(),l("button",{type:"button",class:R(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=o=>t.$emit("click"))},[...n[1]||(n[1]=[a("span",{class:"container"},[a("span",{class:"top"}),a("span",{class:"middle"}),a("span",{class:"bottom"})],-1)])],10,No))}}),Do=C(Eo,[["__scopeId","data-v-e5dd9c1c"]]),Mo=["innerHTML"],Ro=b({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=D();return(n,o)=>(r(),$(j,{class:R({VPNavBarMenuLink:!0,active:c(ee)(c(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:m(()=>[a("span",{innerHTML:e.item.text},null,8,Mo)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Oo=C(Ro,[["__scopeId","data-v-e56f3d57"]]),Bo=b({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=D(),o=d=>"component"in d?!1:"link"in d?ee(n.value.relativePath,d.link,!!t.item.activeMatch):d.items.some(o),s=y(()=>o(t.item));return(d,i)=>(r(),$(Me,{class:R({VPNavBarMenuGroup:!0,active:c(ee)(c(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||s.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),Uo={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Fo=b({__name:"VPNavBarMenu",setup(e){const{theme:t}=D();return(n,o)=>c(t).nav?(r(),l("nav",Uo,[o[0]||(o[0]=a("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(r(!0),l(E,null,O(c(t).nav,s=>(r(),l(E,{key:JSON.stringify(s)},["link"in s?(r(),$(Oo,{key:0,item:s},null,8,["item"])):"component"in s?(r(),$(W(s.component),X({key:1,ref_for:!0},s.props),null,16)):(r(),$(Bo,{key:2,item:s},null,8,["item"]))],64))),128))])):f("",!0)}}),zo=C(Fo,[["__scopeId","data-v-dc692963"]]);function Ho(e){const{localeIndex:t,theme:n}=D();function o(s){var I,V,U;const d=s.split("."),i=(I=n.value.search)==null?void 0:I.options,u=i&&typeof i=="object",p=u&&((U=(V=i.locales)==null?void 0:V[t.value])==null?void 0:U.translations)||null,w=u&&i.translations||null;let A=p,k=w,L=e;const T=d.pop();for(const M of d){let P=null;const N=L==null?void 0:L[M];N&&(P=L=N);const q=k==null?void 0:k[M];q&&(P=k=q);const ae=A==null?void 0:A[M];ae&&(P=A=ae),N||(L=P),q||(k=P),ae||(A=P)}return(A==null?void 0:A[T])??(k==null?void 0:k[T])??(L==null?void 0:L[T])??""}return o}const Ko=["aria-label"],Go={class:"DocSearch-Button-Container"},Wo={class:"DocSearch-Button-Placeholder"},ze=b({__name:"VPNavBarSearchButton",setup(e){const n=Ho({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,s)=>(r(),l("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":c(n)("button.buttonAriaLabel")},[a("span",Go,[s[0]||(s[0]=a("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),a("span",Wo,v(c(n)("button.buttonText")),1)]),s[1]||(s[1]=a("span",{class:"DocSearch-Button-Keys"},[a("kbd",{class:"DocSearch-Button-Key"}),a("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Ko))}}),jo={class:"VPNavBarSearch"},qo={id:"local-search"},Yo={key:1,id:"docsearch"},Jo=b({__name:"VPNavBarSearch",setup(e){const t=kn(()=>wn(()=>import("./VPLocalSearchBox.fl3_X45b.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:o}=D(),s=S(!1),d=S(!1);Z(()=>{});function i(){s.value||(s.value=!0,setTimeout(u,16))}function u(){const k=new Event("keydown");k.key="k",k.metaKey=!0,window.dispatchEvent(k),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function p(k){const L=k.target,T=L.tagName;return L.isContentEditable||T==="INPUT"||T==="SELECT"||T==="TEXTAREA"}const w=S(!1);Se("k",k=>{(k.ctrlKey||k.metaKey)&&(k.preventDefault(),w.value=!0)}),Se("/",k=>{p(k)||(k.preventDefault(),w.value=!0)});const A="local";return(k,L)=>{var T;return r(),l("div",jo,[c(A)==="local"?(r(),l(E,{key:0},[w.value?(r(),$(c(t),{key:0,onClose:L[0]||(L[0]=I=>w.value=!1)})):f("",!0),a("div",qo,[_(ze,{onClick:L[1]||(L[1]=I=>w.value=!0)})])],64)):c(A)==="algolia"?(r(),l(E,{key:1},[s.value?(r(),$(c(n),{key:0,algolia:((T=c(o).search)==null?void 0:T.options)??c(o).algolia,onVnodeBeforeMount:L[2]||(L[2]=I=>d.value=!0)},null,8,["algolia"])):f("",!0),d.value?f("",!0):(r(),l("div",Yo,[_(ze,{onClick:i})]))],64)):f("",!0)])}}}),Qo=b({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=D();return(n,o)=>c(t).socialLinks?(r(),$(Re,{key:0,class:"VPNavBarSocialLinks",links:c(t).socialLinks},null,8,["links"])):f("",!0)}}),Xo=C(Qo,[["__scopeId","data-v-0394ad82"]]),Zo=["href","rel","target"],es=["innerHTML"],ns={key:2},ts=b({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=D(),{hasSidebar:o}=Q(),{currentLang:s}=le(),d=y(()=>{var p;return typeof n.value.logoLink=="string"?n.value.logoLink:(p=n.value.logoLink)==null?void 0:p.link}),i=y(()=>{var p;return typeof n.value.logoLink=="string"||(p=n.value.logoLink)==null?void 0:p.rel}),u=y(()=>{var p;return typeof n.value.logoLink=="string"||(p=n.value.logoLink)==null?void 0:p.target});return(p,w)=>(r(),l("div",{class:R(["VPNavBarTitle",{"has-sidebar":c(o)}])},[a("a",{class:"title",href:d.value??c(Ie)(c(s).link),rel:i.value,target:u.value},[h(p.$slots,"nav-bar-title-before",{},void 0,!0),c(n).logo?(r(),$(he,{key:0,class:"logo",image:c(n).logo},null,8,["image"])):f("",!0),c(n).siteTitle?(r(),l("span",{key:1,innerHTML:c(n).siteTitle},null,8,es)):c(n).siteTitle===void 0?(r(),l("span",ns,v(c(t).title),1)):f("",!0),h(p.$slots,"nav-bar-title-after",{},void 0,!0)],8,Zo)],2))}}),as=C(ts,[["__scopeId","data-v-1168a8e4"]]),os={class:"items"},ss={class:"title"},rs=b({__name:"VPNavBarTranslations",setup(e){const{theme:t}=D(),{localeLinks:n,currentLang:o}=le({correspondingLink:!0});return(s,d)=>c(n).length&&c(o).label?(r(),$(Me,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:c(t).langMenuLabel||"Change language"},{default:m(()=>[a("div",os,[a("p",ss,v(c(o).label),1),(r(!0),l(E,null,O(c(n),i=>(r(),$(ye,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):f("",!0)}}),is=C(rs,[["__scopeId","data-v-88af2de4"]]),ls={class:"wrapper"},cs={class:"container"},ds={class:"title"},us={class:"content"},ps={class:"content-body"},hs=b({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=qe(),{hasSidebar:o}=Q(),{frontmatter:s}=D(),d=S({});return Te(()=>{d.value={"has-sidebar":o.value,home:s.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(i,u)=>(r(),l("div",{class:R(["VPNavBar",d.value])},[a("div",ls,[a("div",cs,[a("div",ds,[_(as,null,{"nav-bar-title-before":m(()=>[h(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[h(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),a("div",us,[a("div",ps,[h(i.$slots,"nav-bar-content-before",{},void 0,!0),_(Jo,{class:"search"}),_(zo,{class:"menu"}),_(is,{class:"translations"}),_(Ja,{class:"appearance"}),_(Xo,{class:"social-links"}),_(Io,{class:"extra"}),h(i.$slots,"nav-bar-content-after",{},void 0,!0),_(Do,{class:"hamburger",active:e.isScreenOpen,onClick:u[0]||(u[0]=p=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=a("div",{class:"divider"},[a("div",{class:"divider-line"})],-1))],2))}}),ms=C(hs,[["__scopeId","data-v-6aa21345"]]),vs={key:0,class:"VPNavScreenAppearance"},fs={class:"text"},gs=b({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=D();return(o,s)=>c(t).appearance&&c(t).appearance!=="force-dark"&&c(t).appearance!=="force-auto"?(r(),l("div",vs,[a("p",fs,v(c(n).darkModeSwitchLabel||"Appearance"),1),_(Ee)])):f("",!0)}}),bs=C(gs,[["__scopeId","data-v-b44890b2"]]),ys=["innerHTML"],ks=b({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=fe("close-screen");return(n,o)=>(r(),$(j,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:c(t)},{default:m(()=>[a("span",{innerHTML:e.item.text},null,8,ys)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),ws=C(ks,[["__scopeId","data-v-df37e6dd"]]),_s=["innerHTML"],$s=b({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=fe("close-screen");return(n,o)=>(r(),$(j,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:c(t)},{default:m(()=>[a("span",{innerHTML:e.item.text},null,8,_s)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),an=C($s,[["__scopeId","data-v-3e9c20e4"]]),Ss={class:"VPNavScreenMenuGroupSection"},Ps={key:0,class:"title"},xs=b({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(r(),l("div",Ss,[e.text?(r(),l("p",Ps,v(e.text),1)):f("",!0),(r(!0),l(E,null,O(e.items,o=>(r(),$(an,{key:o.text,item:o},null,8,["item"]))),128))]))}}),As=C(xs,[["__scopeId","data-v-8133b170"]]),Ls=["aria-controls","aria-expanded"],Cs=["innerHTML"],Ts=["id"],Vs={key:0,class:"item"},Is={key:1,class:"item"},Ns={key:2,class:"group"},Es=b({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=S(!1),o=y(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function s(){n.value=!n.value}return(d,i)=>(r(),l("div",{class:R(["VPNavScreenMenuGroup",{open:n.value}])},[a("button",{class:"button","aria-controls":o.value,"aria-expanded":n.value,onClick:s},[a("span",{class:"button-text",innerHTML:e.text},null,8,Cs),i[0]||(i[0]=a("span",{class:"vpi-plus button-icon"},null,-1))],8,Ls),a("div",{id:o.value,class:"items"},[(r(!0),l(E,null,O(e.items,u=>(r(),l(E,{key:JSON.stringify(u)},["link"in u?(r(),l("div",Vs,[_(an,{item:u},null,8,["item"])])):"component"in u?(r(),l("div",Is,[(r(),$(W(u.component),X({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(r(),l("div",Ns,[_(As,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Ts)],2))}}),Ds=C(Es,[["__scopeId","data-v-b9ab8c58"]]),Ms={key:0,class:"VPNavScreenMenu"},Rs=b({__name:"VPNavScreenMenu",setup(e){const{theme:t}=D();return(n,o)=>c(t).nav?(r(),l("nav",Ms,[(r(!0),l(E,null,O(c(t).nav,s=>(r(),l(E,{key:JSON.stringify(s)},["link"in s?(r(),$(ws,{key:0,item:s},null,8,["item"])):"component"in s?(r(),$(W(s.component),X({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(r(),$(Ds,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):f("",!0)}}),Os=b({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=D();return(n,o)=>c(t).socialLinks?(r(),$(Re,{key:0,class:"VPNavScreenSocialLinks",links:c(t).socialLinks},null,8,["links"])):f("",!0)}}),Bs={class:"list"},Us=b({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=le({correspondingLink:!0}),o=S(!1);function s(){o.value=!o.value}return(d,i)=>c(t).length&&c(n).label?(r(),l("div",{key:0,class:R(["VPNavScreenTranslations",{open:o.value}])},[a("button",{class:"title",onClick:s},[i[0]||(i[0]=a("span",{class:"vpi-languages icon lang"},null,-1)),J(" "+v(c(n).label)+" ",1),i[1]||(i[1]=a("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),a("ul",Bs,[(r(!0),l(E,null,O(c(t),u=>(r(),l("li",{key:u.link,class:"item"},[_(j,{class:"link",href:u.link},{default:m(()=>[J(v(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):f("",!0)}}),Fs=C(Us,[["__scopeId","data-v-858fe1a4"]]),zs={class:"container"},Hs=b({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=S(null),n=Ye(ge?document.body:null);return(o,s)=>(r(),$(Le,{name:"fade",onEnter:s[0]||(s[0]=d=>n.value=!0),onAfterLeave:s[1]||(s[1]=d=>n.value=!1)},{default:m(()=>[e.open?(r(),l("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[a("div",zs,[h(o.$slots,"nav-screen-content-before",{},void 0,!0),_(Rs,{class:"menu"}),_(Fs,{class:"translations"}),_(bs,{class:"appearance"}),_(Os,{class:"social-links"}),h(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):f("",!0)]),_:3}))}}),Ks=C(Hs,[["__scopeId","data-v-f2779853"]]),Gs={key:0,class:"VPNav"},Ws=b({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:o}=Ua(),{frontmatter:s}=D(),d=y(()=>s.value.navbar!==!1);return Je("close-screen",n),me(()=>{ge&&document.documentElement.classList.toggle("hide-nav",!d.value)}),(i,u)=>d.value?(r(),l("header",Gs,[_(ms,{"is-screen-open":c(t),onToggleScreen:c(o)},{"nav-bar-title-before":m(()=>[h(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[h(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[h(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[h(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),_(Ks,{open:c(t)},{"nav-screen-content-before":m(()=>[h(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[h(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):f("",!0)}}),js=C(Ws,[["__scopeId","data-v-ae24b3ad"]]),qs=["role","tabindex"],Ys={key:1,class:"items"},Js=b({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:o,isLink:s,isActiveLink:d,hasActiveLink:i,hasChildren:u,toggle:p}=Kn(y(()=>t.item)),w=y(()=>u.value?"section":"div"),A=y(()=>s.value?"a":"div"),k=y(()=>u.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),L=y(()=>s.value?void 0:"button"),T=y(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:n.value},{"is-link":s.value},{"is-active":d.value},{"has-active":i.value}]);function I(U){"key"in U&&U.key!=="Enter"||!t.item.link&&p()}function V(){t.item.link&&p()}return(U,M)=>{const P=ne("VPSidebarItem",!0);return r(),$(W(w.value),{class:R(["VPSidebarItem",T.value])},{default:m(()=>[e.item.text?(r(),l("div",X({key:0,class:"item",role:L.value},_n(e.item.items?{click:I,keydown:I}:{},!0),{tabindex:e.item.items&&0}),[M[1]||(M[1]=a("div",{class:"indicator"},null,-1)),e.item.link?(r(),$(j,{key:0,tag:A.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:m(()=>[(r(),$(W(k.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),$(W(k.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(r(),l("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:V,onKeydown:$n(V,["enter"]),tabindex:"0"},[...M[0]||(M[0]=[a("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):f("",!0)],16,qs)):f("",!0),e.item.items&&e.item.items.length?(r(),l("div",Ys,[e.depth<5?(r(!0),l(E,{key:0},O(e.item.items,N=>(r(),$(P,{key:N.text,item:N,depth:e.depth+1},null,8,["item","depth"]))),128)):f("",!0)])):f("",!0)]),_:1},8,["class"])}}}),Qs=C(Js,[["__scopeId","data-v-b3fd67f8"]]),Xs=b({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=S(!0);let n=null;return Z(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),be(()=>{n!=null&&(clearTimeout(n),n=null)}),(o,s)=>(r(!0),l(E,null,O(e.items,d=>(r(),l("div",{key:d.text,class:R(["group",{"no-transition":t.value}])},[_(Qs,{item:d,depth:0},null,8,["item"])],2))),128))}}),Zs=C(Xs,[["__scopeId","data-v-c40bc020"]]),er={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},nr=b({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=Q(),o=e,s=S(null),d=Ye(ge?document.body:null);G([o,s],()=>{var u;o.open?(d.value=!0,(u=s.value)==null||u.focus()):d.value=!1},{immediate:!0,flush:"post"});const i=S(0);return G(t,()=>{i.value+=1},{deep:!0}),(u,p)=>c(n)?(r(),l("aside",{key:0,class:R(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:s,onClick:p[0]||(p[0]=Sn(()=>{},["stop"]))},[p[2]||(p[2]=a("div",{class:"curtain"},null,-1)),a("nav",er,[p[1]||(p[1]=a("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),h(u.$slots,"sidebar-nav-before",{},void 0,!0),(r(),$(Zs,{items:c(t),key:i.value},null,8,["items"])),h(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):f("",!0)}}),tr=C(nr,[["__scopeId","data-v-319d5ca6"]]),ar=b({__name:"VPSkipLink",setup(e){const{theme:t}=D(),n=ie(),o=S();G(()=>n.path,()=>o.value.focus());function s({target:d}){const i=document.getElementById(decodeURIComponent(d.hash).slice(1));if(i){const u=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",u)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",u),i.focus(),window.scrollTo(0,0)}}return(d,i)=>(r(),l(E,null,[a("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),a("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},v(c(t).skipToContentLabel||"Skip to content"),1)],64))}}),or=C(ar,[["__scopeId","data-v-0b0ada53"]]),sr=b({__name:"Layout",setup(e){const{isOpen:t,open:n,close:o}=Q(),s=ie();G(()=>s.path,o),Hn(t,o);const{frontmatter:d}=D(),i=Pn(),u=y(()=>!!i["home-hero-image"]);return Je("hero-image-slot-exists",u),(p,w)=>{const A=ne("Content");return c(d).layout!==!1?(r(),l("div",{key:0,class:R(["Layout",c(d).pageClass])},[h(p.$slots,"layout-top",{},void 0,!0),_(or),_(Tn,{class:"backdrop",show:c(t),onClick:c(o)},null,8,["show","onClick"]),_(js,null,{"nav-bar-title-before":m(()=>[h(p.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[h(p.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[h(p.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[h(p.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":m(()=>[h(p.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[h(p.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),_(Ba,{open:c(t),onOpenMenu:c(n)},null,8,["open","onOpenMenu"]),_(tr,{open:c(t)},{"sidebar-nav-before":m(()=>[h(p.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":m(()=>[h(p.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),_($a,null,{"page-top":m(()=>[h(p.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[h(p.$slots,"page-bottom",{},void 0,!0)]),"not-found":m(()=>[h(p.$slots,"not-found",{},void 0,!0)]),"home-hero-before":m(()=>[h(p.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[h(p.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[h(p.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[h(p.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[h(p.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[h(p.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[h(p.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[h(p.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[h(p.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":m(()=>[h(p.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[h(p.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[h(p.$slots,"doc-after",{},void 0,!0)]),"doc-top":m(()=>[h(p.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[h(p.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":m(()=>[h(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[h(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[h(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[h(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[h(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[h(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),_(La),h(p.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),$(A,{key:1}))}}}),rr=C(sr,[["__scopeId","data-v-5d98c3a5"]]),ir={Layout:rr,enhanceApp:({app:e})=>{e.component("Badge",An)}};function F(e){return[{id:"privacy",label:"Privacy Policy",navLabel:"Privacy",shortDescription:"How information is handled",symbol:"P",portalUrl:`/apps/${e}/privacy`,standaloneUrl:`/privacy/${e}`},{id:"terms",label:"Terms and Conditions",navLabel:"Terms",shortDescription:"Rules for using the app",symbol:"T",portalUrl:`/apps/${e}/terms`,standaloneUrl:`/terms/${e}`},{id:"support",label:"Support",shortDescription:"Help and troubleshooting",symbol:"?",portalUrl:`/apps/${e}/support`,standaloneUrl:`/support/${e}`},{id:"data-collection",label:"Data Collection",navLabel:"Data collection",shortDescription:"A summary of app data practices",symbol:"D",portalUrl:`/apps/${e}/data-collection`,standaloneUrl:`/data-collection/${e}`},{id:"data-deletion",label:"Data Deletion",navLabel:"Data deletion",shortDescription:"How to delete app data",symbol:"X",portalUrl:`/apps/${e}/data-deletion`,standaloneUrl:`/data-deletion/${e}`},{id:"contact",label:"App Contact",navLabel:"Contact",shortDescription:"App-specific contact information",symbol:"@",portalUrl:`/apps/${e}/contact`,standaloneUrl:`/contact/${e}`}]}const re=[{id:"spendzo",name:"Spendzo",shortDescription:"A personal expense and budget-tracking application.",icon:"/apps/spendzo/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.spendzo.app",webLinks:[{label:"Open Spendzo in browser",url:"https://actionanand.github.io/spendzo/"}],documents:F("spendzo")},{id:"stillora",name:"Stillora",shortDescription:"A relaxation, meditation and ambient-sound application.",icon:"/apps/stillora/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.stillora.app",webLinks:[{label:"Open Stillora in browser",url:"https://actionanand.github.io/stillora/"}],documents:F("stillora")},{id:"flowra",name:"Flowra",shortDescription:"A private, offline-first period and cycle tracker with on-device insights.",icon:"/apps/flowra/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.flowra.app",webLinks:[{label:"Open Flowra in browser",url:"https://actionanand.github.io/flowra/"}],githubUrl:"https://github.com/actionanand/flowra",documents:F("flowra")},{id:"vault-nest",name:"Vault Nest",shortDescription:"A private, offline-first password manager for Android and Wear OS.",icon:"/apps/vault-nest/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.vaultnest.app",webLinks:[{label:"Open Vault Nest in browser",url:"https://actionanand.github.io/vault-nest/"}],githubUrl:"https://github.com/actionanand/vault-nest",documents:F("vault-nest")},{id:"card-nest",name:"Card Nest",shortDescription:"A private, offline-first credit-card and personal-finance organizer.",icon:"/apps/card-nest/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.cardnest.app",webLinks:[{label:"Open Card Nest in browser",url:"https://actionanand.github.io/card-nest/"}],githubUrl:"https://github.com/actionanand/card-nest",documents:F("card-nest")},{id:"link-deck",name:"Link Deck",shortDescription:"A private, offline-first bookmark manager with profiles and nested folders.",icon:"/apps/link-deck/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.linkdeck.app",webLinks:[{label:"Open Link Deck in browser",url:"https://actionanand.github.io/link-deck/"}],githubUrl:"https://github.com/actionanand/link-deck",documents:F("link-deck")},{id:"who-called",name:"Who Called",shortDescription:"A private, offline contact organizer with optional call-history tools.",icon:"/apps/who-called/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.whocalled.app",webLinks:[{label:"Open Who Called in browser",url:"https://actionanand.github.io/who-called/"}],githubUrl:"https://github.com/actionanand/who-called",documents:F("who-called")},{id:"life-leaf",name:"Life Leaf",shortDescription:"A private diary for writing, memories, photos, moods, and gentle reminders.",icon:"/apps/life-leaf/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.lifeleaf.app",webLinks:[{label:"Open Life Leaf in browser",url:"https://actionanand.github.io/life-leaf/"}],documents:F("life-leaf")},{id:"birthday-buddy",name:"Birthday Buddy",shortDescription:"A private reminder for birthdays, anniversaries, and meaningful occasions.",icon:"/apps/birthday-buddy/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.birthdaybuddy.app",webLinks:[{label:"Open Birthday Buddy in browser",url:"https://actionanand.github.io/birthday-buddy/tabs/home"}],githubUrl:"https://github.com/actionanand/birthday-buddy",documents:F("birthday-buddy")},{id:"click2chat",name:"Click2Chat",shortDescription:"Start WhatsApp chats without saving numbers to your contacts.",icon:"/apps/click2chat/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.click2chat.app",webLinks:[{label:"Open Click2Chat in browser",url:"https://actionanand.github.io/click2chat/"}],githubUrl:"https://github.com/actionanand/click2chat",documents:F("click2chat")},{id:"arflix",name:"ARFlix",shortDescription:"A movie and TV discovery app with TMDb details and a curated collection.",icon:"/apps/arflix/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.arflix.app",webLinks:[{label:"Open ARFlix in browser",url:"https://actionanand.github.io/arflix/"},{label:"Open legacy ARFlix in browser",url:"https://actionanand.github.io/ar-flix/"}],githubUrl:"https://github.com/actionanand/arflix",documents:F("arflix")},{id:"office-pulse",name:"Office Pulse",shortDescription:"A work dashboard for attendance, schedules, tasks, notes, and utilities.",icon:"/apps/office-pulse/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open Office Pulse in browser",url:"https://actionanand.github.io/office-pulse/"}],githubUrl:"https://github.com/actionanand/office-pulse",documents:F("office-pulse")},{id:"personix",name:"Personix",shortDescription:"A private personal organizer for links, family records, vehicles, notes, and checklists.",icon:"/apps/personix/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.personix.app",webLinks:[{label:"Open Personix in browser",url:"https://actionanand.github.io/personix/"}],githubUrl:"https://github.com/actionanand/personix",documents:F("personix")},{id:"expenzo",name:"Expenzo",shortDescription:"A finance dashboard for expenses, budgets, savings, wishlists, and checklists.",icon:"/apps/expenzo/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open Expenzo in browser",url:"https://actionanand.github.io/expenzo/"}],githubUrl:"https://github.com/actionanand/expenzo",documents:F("expenzo")},{id:"ar-tamil-jathagam",name:"AR Tamil Jathagam",shortDescription:"A Tamil and English astrology app for horoscopes, Panchanga, and compatibility.",icon:"/apps/ar-tamil-jathagam/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open AR Tamil Jathagam in browser",url:"https://ar-tamil-jathagam.pages.dev/"}],githubUrl:"https://github.com/actionanand/ar-tamil-jathagam",documents:F("ar-tamil-jathagam")},{id:"lingua-log",name:"Lingua Log",shortDescription:"A multilingual sentence, translation, explanation, and learning-resource organizer.",icon:"/apps/lingua-log/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open Lingua Log in browser",url:"https://actionanand.github.io/lingua-log/"}],githubUrl:"https://github.com/actionanand/lingua-log",documents:F("lingua-log")},{id:"scrollix",name:"Scrollix",shortDescription:"A curated, scrollable feed for videos, social posts, and web articles.",icon:"/apps/scrollix/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open Scrollix in browser",url:"https://actionanand.github.io/scrollix/"}],githubUrl:"https://github.com/actionanand/scrollix",documents:F("scrollix")},{id:"arblogz",name:"AR Blogz",shortDescription:"A multilingual personal blog about learning, culture, health, food, and discoveries.",icon:"/apps/arblogz/icon.png",platform:"web",releasedToPlayStore:!1,webLinks:[{label:"Open AR Blogz on Cloudflare Pages",url:"https://arblogz.pages.dev/"},{label:"Open AR Blogz on GitHub Pages",url:"https://actionanand.github.io/arblogz/"}],githubUrl:"https://github.com/actionanand/arblogz",documents:F("arblogz")},{id:"artamizhsolai",name:"AR Tamizh Solai",shortDescription:"A Tamil literature publication exploring classics, poetry, language, and culture.",platform:"web",releasedToPlayStore:!1,webLinks:[{label:"Open AR Tamizh Solai on Cloudflare Pages",url:"https://artamizhsolai.pages.dev/"},{label:"Open AR Tamizh Solai on GitHub Pages",url:"https://actionanand.github.io/artamizhsolai/"}],githubUrl:"https://github.com/actionanand/artamizhsolai",documents:F("artamizhsolai")}];var Ke;for(const e of re){if((((Ke=e.webLinks)==null?void 0:Ke.length)??0)>3)throw new Error(`${e.id} supports a maximum of three web links`);if(e.playStoreUrl&&!e.releasedToPlayStore)throw new Error(`${e.id} cannot have a Play Store URL before release`)}function ke(e){return re.find(t=>t.id===e)}const lr={class:"breadcrumbs","aria-label":"Breadcrumb"},cr=["href"],dr=["href"],ur={key:0},pr=["href"],hr={key:1,"aria-current":"page"},on=b({__name:"AppBreadcrumbs",props:{appId:{},current:{}},setup(e){const t=e,n=y(()=>t.appId?ke(t.appId):void 0);return(o,s)=>(r(),l("nav",lr,[a("ol",null,[a("li",null,[a("a",{href:c(z)("/")},"Home",8,cr)]),a("li",null,[a("a",{href:c(z)("/apps/")},"Apps",8,dr)]),n.value?(r(),l("li",ur,[a("a",{href:c(z)(`/apps/${n.value.id}/`)},v(n.value.name),9,pr)])):f("",!0),e.current?(r(),l("li",hr,v(e.current),1)):f("",!0)])]))}}),mr={class:"app-card"},vr={class:"app-card__heading"},fr={class:"app-icon","aria-hidden":"true"},gr=["src"],br={key:1},yr={class:"app-card__badges"},kr={class:"app-badge"},wr=["href"],_r=["aria-label"],$r=["href"],Sr=["href"],Pr=["aria-label"],xr=["href"],sn=b({__name:"AppCard",props:{app:{}},setup(e){const t=e,n=S(!1),o=y(()=>t.app.name.split(/\s+/).map(s=>s[0]).join("").slice(0,2).toUpperCase());return(s,d)=>{var i;return r(),l("article",mr,[a("div",vr,[a("div",fr,[e.app.icon&&!n.value?(r(),l("img",{key:0,src:c(z)(e.app.icon),alt:"",onError:d[0]||(d[0]=u=>n.value=!0)},null,40,gr)):(r(),l("span",br,v(o.value),1))]),a("div",null,[a("div",yr,[a("span",kr,v(e.app.platform==="android"?"Android":"Web"),1),e.app.platform==="android"?(r(),l("span",{key:0,class:R(["app-badge",e.app.releasedToPlayStore?"is-released":"is-unreleased"])},v(e.app.releasedToPlayStore?"Play Store released":"Not released"),3)):f("",!0)]),a("h3",null,[a("a",{href:c(z)(`/apps/${e.app.id}/`)},v(e.app.name),9,wr)]),a("p",null,v(e.app.shortDescription),1)])]),e.app.playStoreUrl||(i=e.app.webLinks)!=null&&i.length?(r(),l("div",{key:0,class:"app-card__official-links","aria-label":`${e.app.name} official app links`},[e.app.playStoreUrl?(r(),l("a",{key:0,href:e.app.playStoreUrl,target:"_blank",rel:"noopener noreferrer"}," Google Play ",8,$r)):f("",!0),(r(!0),l(E,null,O(e.app.webLinks,u=>(r(),l("a",{key:u.url,href:u.url,target:"_blank",rel:"noopener noreferrer"},v(u.label),9,Sr))),128))],8,_r)):f("",!0),a("div",{class:"app-card__links","aria-label":`${e.app.name} resources`},[(r(!0),l(E,null,O(e.app.documents,u=>(r(),l("a",{key:u.id,href:c(z)(u.portalUrl)},v(u.navLabel||u.label),9,xr))),128))],8,Pr)])}}}),Ar={class:"app-directory","aria-labelledby":"app-directory-title"},Lr={class:"section-heading"},Cr={class:"app-filter"},Tr={class:"directory-controls"},Vr={class:"filter-group"},Ir={class:"segmented-control"},Nr=["aria-pressed","onClick"],Er={key:0,class:"filter-group"},Dr={class:"segmented-control"},Mr=["aria-pressed","onClick"],Rr={class:"directory-summary","aria-live":"polite"},Or={key:0,class:"app-grid"},Br={key:1,class:"empty-state"},Ur={key:2,class:"app-pagination","aria-label":"Application pages"},Fr={class:"pagination-settings"},zr={class:"page-size-control"},Hr=["value"],Kr={class:"pagination-range"},Gr={class:"pagination-navigation"},Wr=["disabled"],jr={key:0,class:"pagination-pages"},qr={key:0,class:"pagination-ellipsis","aria-hidden":"true"},Yr=["aria-current","aria-label","onClick"],Jr=["disabled"],Qr=b({__name:"AppGrid",setup(e){const t=[10,25,50,100],n=S(""),o=S("android"),s=S("released"),d=S(10),i=S(1),u=y(()=>{const M=n.value.trim().toLocaleLowerCase();return re.filter(P=>o.value!=="all"&&P.platform!==o.value||o.value==="android"&&(s.value==="released"&&!P.releasedToPlayStore||s.value==="unreleased"&&P.releasedToPlayStore)?!1:!M||`${P.name} ${P.shortDescription}`.toLocaleLowerCase().includes(M))}),p=y(()=>Math.max(1,Math.ceil(u.value.length/d.value))),w=y(()=>(i.value-1)*d.value),A=y(()=>u.value.slice(w.value,w.value+d.value)),k=y(()=>u.value.length?w.value+1:0),L=y(()=>Math.min(w.value+d.value,u.value.length)),T=y(()=>{const M=p.value;return M<=7?Array.from({length:M},(P,N)=>N+1):i.value<=3?[1,2,3,"ellipsis-end",M-1,M]:i.value>=M-2?[1,2,"ellipsis-start",M-2,M-1,M]:[1,"ellipsis-start",i.value-1,i.value,i.value+1,"ellipsis-end",M]});G([n,o,s,d],()=>{i.value=1}),G(p,M=>{i.value>M&&(i.value=M)});function I(M){o.value=M}function V(M){var P;i.value=Math.min(Math.max(M,1),p.value),(P=document.querySelector("#app-directory-title"))==null||P.scrollIntoView({behavior:"smooth",block:"start"})}function U(){n.value="",o.value="android",s.value="released",d.value=10}return(M,P)=>(r(),l("section",Ar,[a("div",Lr,[P[6]||(P[6]=a("div",null,[a("p",{class:"eyebrow"},"Application directory"),a("h2",{id:"app-directory-title"},"Find an app")],-1)),a("label",Cr,[P[4]||(P[4]=a("span",{class:"sr-only"},"Search applications",-1)),P[5]||(P[5]=a("span",{"aria-hidden":"true"},"⌕",-1)),K(a("input",{"onUpdate:modelValue":P[0]||(P[0]=N=>n.value=N),type:"search",placeholder:"Search apps",autocomplete:"off"},null,512),[[Qe,n.value]])])]),a("div",Tr,[a("fieldset",Vr,[P[7]||(P[7]=a("legend",null,"App category",-1)),a("div",Ir,[(r(),l(E,null,O([{value:"all",label:"All"},{value:"web",label:"Web apps"},{value:"android",label:"Android apps"}],N=>a("button",{key:N.value,type:"button","aria-pressed":o.value===N.value,onClick:q=>I(N.value)},v(N.label),9,Nr)),64))])]),o.value==="android"?(r(),l("fieldset",Er,[P[8]||(P[8]=a("legend",null,"Play Store status",-1)),a("div",Dr,[(r(),l(E,null,O([{value:"released",label:"Released"},{value:"unreleased",label:"Not released"},{value:"all",label:"All statuses"}],N=>a("button",{key:N.value,type:"button","aria-pressed":s.value===N.value,onClick:q=>s.value=N.value},v(N.label),9,Mr)),64))])])):f("",!0)]),a("div",Rr,[a("p",null,[a("strong",null,v(k.value)+"–"+v(L.value),1),J(" of "+v(u.value.length)+" "+v(u.value.length===1?"application":"applications"),1)]),n.value||o.value!=="android"||s.value!=="released"||d.value!==10?(r(),l("button",{key:0,type:"button",onClick:U}," Reset filters ")):f("",!0)]),A.value.length?(r(),l("div",Or,[(r(!0),l(E,null,O(A.value,N=>(r(),$(sn,{key:N.id,app:N},null,8,["app"]))),128))])):(r(),l("div",Br,[P[9]||(P[9]=a("h3",null,"No matching apps",-1)),P[10]||(P[10]=a("p",null,"Try a different search, category, or release status.",-1)),a("button",{type:"button",onClick:U},"Show released Android apps")])),u.value.length?(r(),l("nav",Ur,[a("div",Fr,[a("label",zr,[P[11]||(P[11]=a("span",null,"Items per page:",-1)),K(a("select",{"onUpdate:modelValue":P[1]||(P[1]=N=>d.value=N),"aria-label":"Items per page"},[(r(),l(E,null,O(t,N=>a("option",{key:N,value:N},v(N),9,Hr)),64))],512),[[de,d.value,void 0,{number:!0}]])]),a("span",Kr,v(k.value)+"–"+v(L.value)+" of "+v(u.value.length),1)]),a("div",Gr,[a("button",{type:"button",class:"pagination-direction",disabled:i.value===1,"aria-label":"Previous page",onClick:P[2]||(P[2]=N=>V(i.value-1))},[...P[12]||(P[12]=[a("span",{"aria-hidden":"true"},"‹",-1)])],8,Wr),p.value>1?(r(),l("div",jr,[(r(!0),l(E,null,O(T.value,N=>(r(),l(E,{key:N},[typeof N!="number"?(r(),l("span",qr,"…")):(r(),l("button",{key:1,type:"button",class:R({"is-current":i.value===N}),"aria-current":i.value===N?"page":void 0,"aria-label":`Page ${N}`,onClick:q=>V(N)},v(N),11,Yr))],64))),128))])):f("",!0),a("button",{type:"button",class:"pagination-direction",disabled:i.value===p.value,"aria-label":"Next page",onClick:P[3]||(P[3]=N=>V(i.value+1))},[...P[13]||(P[13]=[a("span",{"aria-hidden":"true"},"›",-1)])],8,Jr)])])):f("",!0)]))}}),Xr=["aria-label"],Zr=["href","aria-current"],rn=b({__name:"AppSubnav",props:{appId:{}},setup(e){const t=e,n=ie(),o=y(()=>ke(t.appId)),s=y(()=>o.value?[{label:"Overview",href:`/apps/${o.value.id}/`},{label:o.value.platform==="android"?"Store listing":"Descriptions",href:`/apps/${o.value.id}/store-listings`},...o.value.platform==="android"?[{label:"Release notes",href:`/apps/${o.value.id}/release-notes`}]:[],...o.value.documents.map(i=>({label:i.navLabel||i.label,href:i.portalUrl}))]:[]);function d(i){return n.path.replace(/\/$/,"")===i.replace(/\/$/,"")}return(i,u)=>o.value?(r(),l("nav",{key:0,class:"app-subnav","aria-label":`${o.value.name} pages`},[(r(!0),l(E,null,O(s.value,p=>(r(),l("a",{key:p.href,href:c(z)(p.href),"aria-current":d(p.href)?"page":void 0},v(p.label),9,Zr))),128))],8,Xr)):f("",!0)}}),ei=["href","aria-label"],pe=b({__name:"ExternalLinkButton",props:{href:{},label:{},variant:{}},setup(e){return(t,n)=>(r(),l("a",{class:R(["external-button",e.variant==="primary"?"is-primary":"is-secondary"]),href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${e.label} (opens in a new tab)`},[a("span",null,v(e.label),1)],10,ei))}}),ni={key:0,class:"app-overview"},ti={class:"app-overview__hero"},ai={class:"app-icon app-icon--large","aria-hidden":"true"},oi=["src"],si={key:1},ri={class:"app-overview__badges"},ii={class:"app-badge"},li={"aria-labelledby":"legal-support-heading"},ci={class:"resource-grid"},di=["href"],ui={class:"resource-card__icon","aria-hidden":"true"},pi={"aria-labelledby":"publishing-heading"},hi={id:"publishing-heading"},mi={class:"resource-grid"},vi=["href"],fi=["href"],gi={key:0,"aria-labelledby":"official-links-heading"},bi={class:"button-row"},yi={key:1,class:"empty-state"},ki=b({__name:"AppOverview",props:{appId:{}},setup(e){const t=e,n=y(()=>ke(t.appId)),o=S(!1),s=y(()=>n.value?n.value.name.split(/\s+/).map(d=>d[0]).join("").slice(0,2).toUpperCase():"");return(d,i)=>{var u;return n.value?(r(),l("div",ni,[_(on,{"app-id":n.value.id,current:"Overview"},null,8,["app-id"]),_(rn,{"app-id":n.value.id},null,8,["app-id"]),a("header",ti,[a("div",ai,[n.value.icon&&!o.value?(r(),l("img",{key:0,src:c(z)(n.value.icon),alt:"",onError:i[0]||(i[0]=p=>o.value=!0)},null,40,oi)):(r(),l("span",si,v(s.value),1))]),a("div",null,[i[1]||(i[1]=a("p",{class:"eyebrow"},"App information",-1)),a("h1",null,v(n.value.name),1),a("p",null,v(n.value.shortDescription),1),a("div",ri,[a("span",ii,v(n.value.platform==="android"?"Android app":"Web app"),1),n.value.platform==="android"?(r(),l("span",{key:0,class:R(["app-badge",n.value.releasedToPlayStore?"is-released":"is-unreleased"])},v(n.value.releasedToPlayStore?"Released on Google Play":"Not released on Google Play"),3)):f("",!0)])])]),a("section",li,[i[3]||(i[3]=a("h2",{id:"legal-support-heading"},"Legal and support",-1)),a("div",ci,[(r(!0),l(E,null,O(n.value.documents,p=>(r(),l("a",{key:p.id,class:"resource-card",href:c(z)(p.portalUrl)},[a("span",ui,v(p.symbol),1),a("span",null,[a("strong",null,v(p.label),1),a("small",null,v(p.shortDescription),1)]),i[2]||(i[2]=a("span",{"aria-hidden":"true"},"->",-1))],8,di))),128))])]),a("section",pi,[a("h2",hi,v(n.value.platform==="android"?"Google Play publishing":"Publishing copy"),1),a("div",mi,[a("a",{class:"resource-card",href:c(z)(`/apps/${n.value.id}/store-listings`)},[i[5]||(i[5]=a("span",{class:"resource-card__icon","aria-hidden":"true"},"A",-1)),a("span",null,[a("strong",null,v(n.value.platform==="android"?"Store listing":"Descriptions"),1),i[4]||(i[4]=a("small",null,"Copy the short and full descriptions",-1))]),i[6]||(i[6]=a("span",{"aria-hidden":"true"},"->",-1))],8,vi),n.value.platform==="android"?(r(),l("a",{key:0,class:"resource-card",href:c(z)(`/apps/${n.value.id}/release-notes`)},[...i[7]||(i[7]=[a("span",{class:"resource-card__icon","aria-hidden":"true"},"R",-1),a("span",null,[a("strong",null,"Release notes"),a("small",null,"Format localized notes for Play Console")],-1),a("span",{"aria-hidden":"true"},"->",-1)])],8,fi)):f("",!0)])]),n.value.playStoreUrl||(u=n.value.webLinks)!=null&&u.length||n.value.githubUrl?(r(),l("section",gi,[i[8]||(i[8]=a("h2",{id:"official-links-heading"},"Official links",-1)),a("div",bi,[n.value.playStoreUrl?(r(),$(pe,{key:0,href:n.value.playStoreUrl,label:"View on Google Play",variant:"primary"},null,8,["href"])):f("",!0),(r(!0),l(E,null,O(n.value.webLinks,p=>(r(),$(pe,{key:p.url,href:p.url,label:p.label,variant:"secondary"},null,8,["href","label"]))),128)),n.value.githubUrl?(r(),$(pe,{key:1,href:n.value.githubUrl,label:"View on GitHub",variant:"secondary"},null,8,["href"])):f("",!0)])])):f("",!0)])):(r(),l("div",yi,[...i[9]||(i[9]=[a("h1",null,"Application not found",-1),a("p",null,"Check the app ID in the page component.",-1)])]))}}}),Y={title:"Policy Hub",description:"One place for every app’s privacy policy, support, and legal information.",productionDomain:"",developerName:"Anand Raja",generalSupportEmail:"anand.official.in@gmail.com",privacyEmail:"anand.official.in@gmail.com",githubUrl:"",playStoreDeveloperUrl:"https://play.google.com/store/apps/developer?id=actionanand"},wi={class:"contact-list"},_i=["href"],$i=["href"],Si={key:0},Pi=["href"],xi={key:1},Ai=["href"],Li=b({__name:"ContactDetails",setup(e){return(t,n)=>(r(),l("dl",wi,[a("div",null,[n[0]||(n[0]=a("dt",null,"Developer",-1)),a("dd",null,v(c(Y).developerName),1)]),a("div",null,[n[1]||(n[1]=a("dt",null,"General support",-1)),a("dd",null,[a("a",{href:`mailto:${c(Y).generalSupportEmail}`},v(c(Y).generalSupportEmail),9,_i)])]),a("div",null,[n[2]||(n[2]=a("dt",null,"Privacy enquiries",-1)),a("dd",null,[a("a",{href:`mailto:${c(Y).privacyEmail}`},v(c(Y).privacyEmail),9,$i)])]),c(Y).githubUrl?(r(),l("div",Si,[n[3]||(n[3]=a("dt",null,"GitHub",-1)),a("dd",null,[a("a",{href:c(Y).githubUrl,target:"_blank",rel:"noopener noreferrer"}," Developer profile ",8,Pi)])])):f("",!0),c(Y).playStoreDeveloperUrl?(r(),l("div",xi,[n[4]||(n[4]=a("dt",null,"Google Play",-1)),a("dd",null,[a("a",{href:c(Y).playStoreDeveloperUrl,target:"_blank",rel:"noopener noreferrer"}," Developer profile ",8,Ai)])])):f("",!0)]))}}),Ci={class:"copy-policy"},Ti={"aria-hidden":"true"},Vi={class:"sr-only","aria-live":"polite"},Ii={key:0,class:"copy-policy__fallback"},Ni=["for"],Ei=["id","value"],Di=b({__name:"CopyStandaloneUrl",props:{path:{},label:{default:"Copy standalone URL"},copiedLabel:{default:"Standalone URL copied"},documentName:{default:"standalone document"}},setup(e){const t=e,n=S(t.label),o=S(""),s=S(!1),d=S(),i=S(!1);let u;const p=y(()=>`standalone-url-${t.path.replace(/\W/g,"-")}`),w=y(()=>typeof window>"u"?z(t.path):new URL(z(t.path),window.location.origin).toString());function A(T){const I=document.createElement("textarea");I.value=T,I.setAttribute("readonly",""),I.style.position="fixed",I.style.opacity="0",document.body.appendChild(I),I.select();let V=!1;try{V=document.execCommand("copy")}finally{document.body.removeChild(I)}return V}function k(){u&&clearTimeout(u),u=setTimeout(()=>{n.value=t.label,o.value="",i.value=!1},2400)}async function L(){var I,V,U,M,P;if(s.value){(I=d.value)==null||I.focus(),(V=d.value)==null||V.select();return}let T=!1;try{(U=navigator.clipboard)!=null&&U.writeText&&(await navigator.clipboard.writeText(w.value),T=!0)}catch{T=!1}if(T||(T=A(w.value)),T){i.value=!0,n.value=t.copiedLabel,o.value=`${t.documentName} URL copied to clipboard.`,k();return}s.value=!0,n.value="Select standalone URL",o.value=`Automatic copy is unavailable. The ${t.documentName} URL is ready to select and copy.`,await Ve(),(M=d.value)==null||M.focus(),(P=d.value)==null||P.select()}return be(()=>{u&&clearTimeout(u)}),(T,I)=>(r(),l("div",Ci,[a("button",{class:"copy-policy__button",type:"button",onClick:L},[a("span",Ti,v(i.value?"OK":"URL"),1),J(" "+v(n.value),1)]),a("p",Vi,v(o.value),1),s.value?(r(),l("div",Ii,[a("label",{for:p.value},"Copy this URL manually",8,Ni),a("input",{id:p.value,ref_key:"fallbackInput",ref:d,value:w.value,readonly:"",onFocus:I[0]||(I[0]=V=>{var U;return(U=d.value)==null?void 0:U.select()})},null,40,Ei)])):f("",!0)]))}}),Mi=`---
shortDescription: Track expenses, budgets & savings with powerful offline personal finance tools.
---

Spendzo is a modern, privacy-first personal expense tracker designed to help you understand where your money goes, stay within budget, and build better financial habits.

Whether you're tracking daily expenses, monthly budgets, or long-term spending trends, Spendzo gives you everything you need in a clean, fast, and offline-first experience.

Expense Tracking

• Record expenses in seconds
• Default today's date for faster entry
• Organize spending using custom categories
• Choose icons and colors for every category
• Add optional notes for transactions

Budget Planning

• Set your monthly income
• Create an overall monthly budget
• Define spending limits for each category
• See remaining budget instantly
• Track savings throughout your budget cycle

Flexible Budget Cycle

Not everyone follows the 1st to the last day of the month.

Spendzo lets you customize your budget period—for example:
• 1st to the last day of the month
• 25th to the 24th of the next month
• Any custom start date that matches your salary or billing cycle

Powerful Statistics

Visualize your spending with easy-to-understand charts and reports.

Analyze:
• Current month
• Last 3 months
• Last 6 months
• Last 12 months
• All-time spending

Understand:
• Expense breakdown by category
• Budget vs actual spending
• Savings trends
• Monthly comparisons

Privacy First

Your financial data belongs to you.

Spendzo is designed with an offline-first approach so your information stays on your device.

Optional security features include:
• PIN lock
• Fingerprint authentication (requires PIN setup)

Backup & Restore

Never lose your financial records.

• Export your data
• Import backups whenever needed
• Easily migrate to a new device

Personalize Your Experience

Customize categories with:
• Icons
• Colors
• Spending limits

Make the app work the way you manage your money.

Designed for Everyday Use

Spendzo focuses on speed and simplicity.

• Clean interface
• Quick expense entry
• Smooth navigation
• Fast performance
• No unnecessary clutter

Why Choose Spendzo?

• Offline-first
• Privacy-focused
• Simple and intuitive
• Flexible budget cycles
• Category budgets
• Beautiful statistics
• Backup and restore support
• Optional biometric protection

Whether you're a student, professional, freelancer, or managing a household, Spendzo helps you build better financial habits and stay in control of every rupee.

Spend smarter. Budget better. Save more. With Spendzo.
`,Ri=`---
shortDescription: Offline ambient sounds, custom mixes and timers for rest, focus and meditation.
---

Stillora is a private, offline-first soundscape app created for rest, focus, meditation, and quiet moments.

Choose from a collection of nature ambience and gentle musical sounds, each paired with a calming moving background. Audio and video are included with the app, so the core listening experience works without streaming.

Create Your Soundscape

• Listen to rain, ocean waves, forest ambience, streams, wind, thunder, flute, guitar, tanpura, and more
• Add up to three compatible sound layers to the main atmosphere
• Adjust the volume of each layer independently
• Save up to five favorite mixes for quick access

Flexible Listening Timers

Choose a timer for 5, 10, 15, 20, 30, 45, or 60 minutes, or select continuous playback. When a timed session ends, Stillora gently fades the sound before stopping.

Smooth and Personal

• Choose light, dark, or system theme
• Select a 5, 10, or 15-second transition between atmospheres
• Remember the last sound you used
• Set your preferred starting volume and timer

Local Backup and Restore

Export your preferences and saved mixes to a Stillora JSON backup file. Import the file later to restore your setup or move it to another device.

Private by Design

Stillora has no account, advertisements, analytics, or cloud sync. Your preferences and saved mixes stay in local app storage unless you choose to export a backup file.

Stillora keeps relaxation simple: choose an atmosphere, set a timer, and take a quiet pause.
`,Oi=`---\r
shortDescription: Secure offline password manager with Wear OS access, backups and biometrics.\r
---\r
\r
Vault Nest is a private, offline-first password manager for Android with a Wear OS companion that keeps selected credentials close at hand.\r
\r
Create one encrypted vault for logins, secure notes, identities, Wi-Fi credentials, and custom records. Organize entries with labels, favorites, archives, reusable templates, and Trash.\r
\r
Strong Local Encryption\r
\r
• AES-256-GCM encryption protects sensitive vault records\r
• A unique vault key is wrapped using a key derived from your master password\r
• Your master password is not stored\r
• Automatic locking can protect the vault after inactivity or when the app enters the background\r
• Optional Android biometric unlock uses Android Keystore protection\r
\r
Credential Tools\r
\r
• Generate strong passwords with configurable length and character options\r
• Review password strength locally\r
• Store usernames, passwords, websites, PINs, OTP secrets, backup codes, notes, and custom fields\r
• Copy selected values with automatic clipboard clearing attempted after five minutes\r
• Add optional expiry reminders for saved credentials\r
\r
Wear OS Companion\r
\r
• Choose a limited set of credentials on your phone and sync them to your paired Wear OS watch\r
• Protect the Watch vault with a dedicated 4–6 digit PIN and escalating delays after failed attempts\r
• Store synced Watch entries encrypted at rest using Android Keystore protection\r
• Browse synced entries and view usernames directly on the watch\r
• Keep passwords hidden by default and reveal them temporarily for 10 seconds\r
• Copy a password from the watch with automatic clipboard clearing attempted after one minute\r
• Refresh synced entries, lock immediately, or erase and reset the Watch vault from the watch\r
\r
Backup and Portability\r
\r
Create an encrypted .vaultpack backup protected by a separate passphrase, then restore it when needed. For migration to another password manager, you can deliberately export a plaintext CSV after acknowledging its security risk.\r
\r
Optional Android Protection\r
\r
Enable screenshot protection on supported screens. You can also choose opt-in intrusion evidence, which uses the front camera after repeated failed unlock attempts and stores the captured image encrypted in private app storage.\r
\r
Private by Design\r
\r
Vault Nest has no developer account, cloud vault, advertisements, analytics, or trackers. Core phone and Wear OS vault features work without an internet connection after the selected Watch entries are synced. Optional website-icon retrieval connects only to websites saved in your vault to download their artwork.\r
\r
Important: Vault Nest cannot recover your master password or decrypt your vault. Keep the master password safe and maintain tested encrypted backups.\r
`,Bi=`---
shortDescription: Track cards, spending, bills and budgets privately with powerful offline tools.
---

Card Nest is a private, offline-first organizer for credit cards, spending, bills, budgets, and payment reminders.

Keep card details and financial activity together without creating an account or connecting a bank. Card Nest stores your records locally and gives you practical tools to understand spending and stay ahead of upcoming obligations.

Organize Your Cards

• Track card networks, limits, statement dates, due dates, expiry, and annual fees
• Add benefit notes and important issuer links
• Group related cards that share an account or limit
• Store optional full card numbers and CVVs with local encryption
• Keep sensitive values hidden until you deliberately reveal them

Track Spending and Payments

• Record purchases, payments, refunds, cashback, fees, interest, and credits
• Organize transactions using custom categories
• Track cash, bank or UPI, meal-card, and credit-card sources
• Add notes, tax details, monthly repeats, and receipt images
• Review card balances, payment activity, and statement cycles

Plan Budgets and Commitments

• Set income and overall budgets for flexible monthly cycles
• Add category spending limits
• Track loans, external EMIs, and card purchase installments
• Review savings, remaining funds, and spending patterns

Reports and Reminders

Explore clear charts and reports by period, category, and payment source. Export masked transaction reports as CSV or PDF. On Android, enable optional reminders for payment due dates, annual fees, and card expiry.

Backup and Security

Create an encrypted .cnbak backup protected by a separate passphrase and restore it when needed. Add an optional application PIN and use Android biometric unlock on supported devices.

Private by Design

Card Nest has no account, bank connection, advertisements, analytics, trackers, or developer cloud. Core card, transaction, budget, calculation, and reporting features work locally on your device.

Card Nest is a personal tracking tool, not a banking or payment service. Always verify balances and due dates with your card issuer.
`,Ui=`---
shortDescription: Organize bookmarks privately with profiles, folders, tags and secure backups.
---

Link Deck is a private, offline-first bookmark manager built to keep useful links organized without an account or developer-operated cloud.

Create separate profiles for work, personal research, projects, or any collection. Arrange bookmarks in nested folders, add notes and tags, mark favourites, archive older links, and recover items from trash.

Organize Your Links

• Save HTTP and HTTPS bookmarks quickly
• Create independent profiles for different areas of your life
• Build nested folder structures
• Add titles, descriptions, notes, and tags
• Mark important links as favourites
• Archive links or move them to trash
• Search and sort your collection
• Choose list or grid view

Import and Export

Import Netscape Bookmark HTML from compatible browsers such as Chrome, Edge, and Firefox. Preview bookmark, folder, toolbar, and duplicate counts before importing. Choose how duplicate URLs should be handled.

Export a profile as browser-compatible Bookmark HTML while preserving its folder hierarchy, titles, URLs, timestamps, and favicons where supported.

Backup and Restore

Create a complete Link Deck backup containing profiles, folders, bookmarks, notes, tags, favourites, visit details, and settings.

• Save a readable JSON backup
• Protect a backup with passphrase-based AES-256-GCM encryption
• Restore supported Link Deck backups on another device
• Keep encrypted backup passphrases under your control

Privacy and Security

Your bookmark collection is stored locally in SQLite on Android. Link Deck has no account, advertisements, analytics, trackers, or developer cloud.

Add an optional 4 to 8 digit application PIN. On supported Android devices, enable biometric unlock after setting a PIN.

Designed for Everyday Use

• Receive a URL shared from another Android app
• Paste a URL from the clipboard when you choose
• Open saved links in your system browser
• Use light, dark, or system theme
• Track recently opened links and visit counts locally

Link Deck gives you a focused place to collect, structure, protect, and move your bookmarks while keeping your data under your control.
`,Fi=`---
shortDescription: Manage private contacts, call history, WhatsApp chats and notes offline.
---

Who Called is a private, offline-first contact organizer for the people, phone numbers, messages, and unknown callers you want to remember.

Keep a separate private contact list without adding records to Android Contacts. Search names, numbers, email addresses, social profiles, and notes while your records remain encrypted on your device.

Private Contacts

• Save names, companies, and multiple phone numbers
• Add email addresses, social links, birth dates, and notes
• Save up to three named anniversaries for each contact
• Mark favourite or hidden contacts
• Identify numbers that use WhatsApp
• Search by contact details or partial phone number
• Move contacts to Trash and restore them within 30 days

Optional Call History

On supported and policy-eligible Android builds, choose whether to display
recent phone call history after granting permission. Availability can vary by
distribution channel and Android permission eligibility.

• Review incoming, outgoing, missed, rejected, blocked, and voicemail entries
• See call time and duration where available
• Match calls with your private contacts and number tags
• Save an unknown caller as a private contact
• Tag an unknown number for future reference

Call history is displayed temporarily and is not saved in the app database or backup.

Quick Communication

• Open the phone dialer with a number ready for confirmation
• Start a WhatsApp or WhatsApp Business chat without first saving a contact
• Open the SMS composer with optional draft text
• Format international numbers using a selectable default country

Who Called never silently places a call or sends a message.

Saved Messages and Number Tags

Save important text you manually enter, paste, or share to the app. Organize
messages by title, sender, category, and favourites. The app can detect useful
OTP or reference codes within text you choose to save. Highlight or bold
selected text after saving, and use confirmed actions for detected phone
numbers and web links.

Attach temporary tags and notes to unknown phone numbers without creating complete contacts.

Keepsakes and Reminders

• Review birthdays and anniversaries for today, this week, this month, past month, next month, and upcoming dates
• Use a calendar view to track events with their contacts
• Optionally schedule one yearly Android reminder at approximately 6:00 AM
• Manage enabled reminders from the Alert Directory
• Disable one reminder or all reminders for a contact at any time

Notification permission is requested only when you enable a reminder. Web
builds do not display birthday or anniversary notifications.

Backup and Portability

• Create a complete encrypted .contactvault backup
• Protect backups with a separate passphrase
• Restore contacts, saved messages, number tags, and settings
• Import contacts from CSV or vCard files
• Export readable CSV or vCard contact files

Privacy and Security

Who Called encrypts application records locally with AES-256-GCM. It has no account, advertisements, analytics, trackers, or developer cloud.

Set an optional application PIN, use biometric unlock on supported Android devices, and enable screenshot protection where available.

Who Called does not read Android Contacts, your SMS inbox, notification content, or call audio. Your private organizer stays under your control.
`,zi=`---
shortDescription: Write a private diary with memories, moods, photos and gentle reminders.
---

Life Leaf is a calm, private diary for capturing everyday moments and returning to the memories that matter.

Write Your Story

• Create rich diary entries with titles, dates, times, moods, and tags
• Format writing with headings, lists, indentation, quotes, links, and more
• Add photos or files to the moments you want to preserve
• Mark favourites and organize entries with archive and trash controls
• Search by words, title, place, date, mood, or tag

Rediscover Memories

• Browse your diary as a timeline or calendar
• Revisit entries written on the same date in earlier years
• Explore memories by year and favourites
• See gentle, private statistics about your writing habits

Helpful Reminders

Choose optional local reminders for writing, thoughtful prompts, “On this day” memories, or gentle statistics. Set the days and time that suit your routine. Notification permission is requested only when you enable a reminder, and notifications use private wording without diary content.

Private by Design

Life Leaf works without an account, ads, analytics, trackers, or a developer cloud. Your diary stays on your device.

Set an optional app PIN, use biometric unlock on supported Android devices after setting a PIN, and enable screenshot protection where available.

Backup and Restore

• Create a complete .lifeleaf backup
• Optionally protect a backup with your own passphrase
• Restore by merging with your diary or replacing it
• Keep control of where exported files are saved

Share Into Your Diary

Send selected text or an image from another Android app to Life Leaf. Shared content opens as a draft for review and is saved only when you choose Save.

Life Leaf gives you a quiet place to write, remember, and reflect—privately, at your own pace.
`,Hi=`---
shortDescription: "Remember birthdays, anniversaries and special occasions privately."
---
Never miss a meaningful date.

Birthday Buddy is a private, offline-first reminder for birthdays, anniversaries, and the occasions that matter to you. Keep people and important dates organized, see what is coming up, and receive local notifications without creating an account.

KEY FEATURES

• Track birthdays, anniversaries, and custom occasions
• Browse upcoming events by useful time ranges and calendar views
• Add people manually or select a contact
• Preview optional contact sync before importing changes
• Add a photo from your device or camera
• Choose reminder timing for each occasion
• Control lock-screen wording with full, person-only, or private notification text
• Mark favourites and quickly find important people
• Protect the app with an optional PIN and biometric unlock
• Create password-encrypted backups for transfer or safekeeping
• Use light, dark, and system themes

PRIVATE BY DESIGN

Your people, dates, photos, reminders, and settings stay in local app storage. Birthday Buddy has no ads, analytics, tracking, account requirement, or developer-operated cloud sync. Contact sync is optional, preview-first, and never writes to Android Contacts.

RELIABLE LOCAL REMINDERS

Birthday Buddy schedules notifications on your device. Android permissions and battery settings can affect delivery, and the app provides privacy controls for notification text shown on the lock screen.

BACK UP ON YOUR TERMS

Export an encrypted \`.ocbackup\` file using your own password. Birthday Buddy does not store the password, and PIN or biometric credentials are not included in backups.

Remember the people and moments that matter—with a calm, focused app that keeps your information under your control.
`,Ki=`---
shortDescription: Start WhatsApp chats without saving numbers to your contacts.
---

Click2Chat helps you start a conversation without first adding a phone number to your contacts.

Start a Direct Chat

• India is selected automatically on first launch
• Choose another country or enter a custom calling code
• Enter or paste a mobile number
• Add an optional message
• Open the conversation in WhatsApp or WhatsApp Business
• Keep the selected country and calling code synchronized

If both WhatsApp applications are installed, Click2Chat lets you choose which one to use. If only one is available, the Android app can open it directly.

Private and Focused

• No account or sign-in
• No advertisements
• No analytics or tracking
• No developer-operated cloud storage
• No contact saving or number tagging
• No access to SMS, Contacts, microphone, location, camera, or device files
• Clipboard access occurs only when you press paste

Click2Chat stores only the selected country and appearance preference locally. Phone numbers and optional messages are passed to WhatsApp only after you request the action.

Appearance

Choose light mode, dark mode, or follow your device's system theme. The Android status and navigation bars follow the selected appearance.

`,Gi=`---
shortDescription: Discover movies, TV shows, cast, trailers and streaming availability.
---

ARFlix is a focused movie and TV discovery companion for exploring what to watch next.

Browse trending entertainment, popular movies, films now playing, television shows currently on air, and a developer-curated AR Collection. Search for titles and people, explore detailed credits, and compare useful information in one dark, cinema-inspired interface.

Discover Movies and TV

• Browse trending movies and television shows
• Explore popular movies and TV or web series
• See films currently playing and shows currently on air
• Browse by movie or television genre
• Move through paginated result collections

Powerful Search

• Search movies, TV shows, or both
• Filter results by release year
• Set a minimum rating
• Sort results by relevance, rating, or newest release
• Search for actors, directors, and other people

Detailed Information

Explore useful details for supported titles, including:

• Overview, release date, runtime, genres, language, and rating
• Cast and crew information
• Production companies, budget, and revenue where available
• Content certification and family guidance
• Image galleries, posters, and backdrops
• Similar movie or television suggestions
• Watch-provider availability information

Trailers and External Resources

Open available trailers and videos on YouTube. Visit IMDb for supported movie pages and use external provider information to continue your search.

ARFlix does not host, stream, sell, or distribute movies or television programmes. Availability, subscriptions, and charges are controlled by external providers.

Curated AR Collection

Explore a developer-maintained collection with title type, platform, language, category, comments, and matched TMDb information. Use the collection to discover selected movies, television shows, and web series.

Useful Sharing and Images

• Copy links to ARFlix title and person pages
• Open supported links directly in the Android app
• Save available posters or images to your device
• Share public links with others using your preferred app

Content Controls

ARFlix hides adult-marked content by default. A local access gate and family-only preference control whether eligible adult-marked results can appear. These preferences stay on the device and do not create an online account.

ARFlix uses TMDb data and images. This product uses the TMDb API but is not endorsed or certified by TMDb.
`,Wi=`---
shortDescription: Track attendance, schedules, tasks and work utilities in one dashboard.
---

Office Pulse brings everyday work planning, attendance references, schedules, notes, and useful calculators into one organized dashboard.

Review configured workplace information from Google Sheets, record selected updates through Google Forms, keep helpful items available locally, and move between practical tools without maintaining separate spreadsheets and notes for every task.

Attendance and Work Logs

• Record office entry and exit times
• Calculate worked duration and expected exit time
• Review daily and monthly attendance
• Support office, work-from-home, leave, and day-off statuses
• Cache recent attendance for faster access
• Export selected attendance periods as PDF reports

Schedules and Planning

• Review office holidays and important dates
• Check support rota schedules
• Browse office seating allocations by date
• Calculate sprint bandwidth and team capacity
• Track personal achievements and milestones

Tasks and Work Tracking

• Maintain local to-do items and checklists
• Review configured Jira-related ticket lists
• Track demo, release, spillover, and important-ticket statuses
• Apply local status overrides without changing source-sheet data
• Keep quick memos and colour-coded notes

Useful Work Utilities

• Run a stopwatch with lap tracking
• Keep temporary copy or transfer links and comments
• View Markdown with code, diagrams, and formatted content
• Create and review cue cards
• Access configured bookmarks and reference information
• Review configured IRCTC vacant-seat and credit-card usage references

Google Workspace Integration

Office Pulse reads configured data from Google Sheets and can open or submit configured Google Forms for selected workflows. Always review information before submitting it and use only sheets and forms you are authorized to access.

Security and Reminders

Add an optional application PIN, enable biometric unlock on supported Android devices, and configure automatic locking. Optional Android notifications can remind you about a pending office log-off time.

Local and Practical

Many preferences, pending records, notes, and caches stay in local browser storage on the device. Office Pulse has no advertisements, developer analytics, or general-purpose online user account.

Office Pulse is a productivity aid. Verify attendance, schedules, tickets, financial reminders, and workplace records against their official source before relying on them.
`,ji=`---
shortDescription: Organize links, family records, vehicles, notes and checklists privately.
---

Personix is a private, offline-first personal organizer that keeps the everyday information you care about together on your device.

Save Content for Later

• Organize videos, posts, articles, websites, and other useful links
• Add categories, tags, notes, and intended recipients
• Retrieve helpful preview details for supported links
• Keep adult content hidden by default
• Search saved content quickly

Organize Family and Health References

• Maintain separate family-member profiles
• Store hospital OP and medical-insurance references
• Record medicines, toiletries, blood groups, and helpful notes
• Add optional Rasi, Nakshatra, and Gothram details
• Keep contact and reference information easy to find

Track Vehicle Information

• Save vehicle registration and ownership details
• Record insurance and pollution-expiry dates
• Add make, model, variant, and personal notes

Notes and Checklists

• Capture temporary notes in a simple self-chat style
• Pin, tag, search, and organize important notes
• Create multiple lightweight checklists
• Track checklist items and due dates

Private by Design

Personix stores your core data locally using SQLite on Android. There is no account, advertising, analytics, tracker, or developer-operated cloud database.

Optional app security includes a PIN and supported Android biometric unlock. Personix does not receive or store your biometric template.

Encrypted Backup and Restore

Create password-protected encrypted backups of selected data. Restore by merging records or replacing selected local modules when moving devices or recovering information.

Designed for Everyday Use

• Fast grouped search across your records
• Light, dark, and automatic themes
• Clear controls for archived and adult content
• Flexible local organization without an online account

Personix is a reference and organization tool. Always verify important medical, insurance, vehicle, and expiry information with the appropriate official source.
`,qi=`---
shortDescription: Track expenses, budgets, savings, wishlists and financial insights.
---

Expenzo brings your expense records, budgets, savings, wishlists, and useful financial insights together in one clear dashboard.

Connect to your configured Google Sheet and Apps Script data, review each budget cycle, and understand how income and spending change over time.

Expense and Budget Overview

• Review income, expenses, savings, shortages, and remaining budget
• Browse transactions by budget cycle
• See category totals and spending limits
• Compare budgeted amounts with actual spending
• Use a flexible cycle start day that matches your finances

Clear Statistics

• Explore spending breakdowns by category
• Review expense and savings trends
• Compare completed budget cycles
• Understand daily spending pace and averages
• Identify over-budget categories and changing patterns

Transactions and Exports

• Search and filter transaction history
• Review names, categories, amounts, dates, and notes
• Export selected transactions as CSV
• Create readable PDF summaries
• Save or share exports using your device's system tools

Wishlists and Checklists

• Review wishlist items from a configured Google Sheet
• See quantities, units, and helpful comments
• Keep reusable checklist groups close to your finance dashboard

Offline Fallback

Expenzo stores the latest fetched finance data locally so previously loaded information can remain available when a network request fails. Refresh whenever you need the newest source data.

Optional App Protection

• Add a local application PIN
• Use fingerprint or other supported biometric unlock on Android
• Configure automatic locking
• Keep your device protected with a secure screen lock

Built for Focus

Expenzo has no advertisements, developer analytics, or general-purpose online account. It focuses on presenting your configured records in a fast, practical interface.

Expenzo is an informational personal-finance tool. Verify important figures against your authoritative financial records before making decisions.
`,Yi=`---
shortDescription: Create Tamil horoscopes, Panchanga, compatibility and astrology reports.
---

AR Tamil Jathagam brings traditional Indian astrology tools together in a Tamil and English experience for creating, exploring, and saving detailed horoscope information.

Enter accurate birth details to calculate a Jathagam and review charts, planetary positions, Nakshatra, Rasi, Dasha periods, Panchanga information, predictions, and other traditional interpretations.

Tamil Jathagam

• Create a horoscope from birth date, time, and place
• Review Rasi, Amsam, and other chart information
• Explore planetary positions, houses, Nakshatra, and Padam
• Read Dasha and Bhukti periods with interpretations
• Review Dosham, significances, strengths, and predictions
• Use Tamil or English throughout the app

Panchanga and Muhurtham

• Review Tithi, Yoga, Karana, sunrise, and sunset information
• Explore Panchanga timelines and daily planetary status
• Check Choghadiya and traditional time divisions
• Review Muhurtham guidance for selected dates
• Download a Panchanga timeline image

Compatibility Tools

• Compare two birth profiles with Porutham calculations
• Review Nakshatra and Rasi compatibility
• Explore couple charts and compatibility details
• Create a compatibility PDF for later reference

More Astrology Views

• Review current planetary transits and Gochar insights
• Explore North Indian Kundali charts and compatibility
• View Chinese zodiac, compatibility, and BaZi information
• Enter chart details manually when birth calculations are not needed

Save and Reuse Profiles

• Save up to ten profiles on your device
• Reuse saved details across supported calculations
• Remove individual profiles whenever needed
• Optionally import transformed profile rows from a configured Google Sheet

Reports and Sharing

Create detailed PDF reports for Jathagam, compatibility, Kundali, and Chinese astrology features. Choose the information and presentation you need, then save, print, or share using your device's available tools.

Privacy and Control

AR Tamil Jathagam has no advertisements or developer analytics. Most calculations run on your device. Optional online Panchanga services use the selected date and location, and saved local profiles are not encrypted, so protect your device and use birth information only with permission.

Astrological content is provided for cultural, educational, and entertainment purposes. It is not scientific, medical, legal, financial, or relationship advice.
`,Ji=`---
shortDescription: Organize multilingual sentences, translations, notes and learning resources.
---

Lingua Log helps you build a practical multilingual reference from the sentences, translations, explanations, and resources you encounter while learning.

Keep the original phrase, add a pronunciation aid, record translations in multiple languages, and preserve the context that makes each sentence useful.

Multilingual Sentence Log

• Record an original sentence and its source language
• Add an optional transliteration or pronunciation aid
• Keep translations in multiple languages
• Use Tamil, English, Sanskrit, Hindi, Kannada, Malayalam, Telugu, French, or a custom language
• Mark selected entries as protected from signed-out viewing

Detailed Learning Notes

• Write formatted explanations for grammar, nuance, and context
• Add bold, italic, lists, colors, and highlights
• Create compact tables for vocabulary, word splits, patterns, and comparisons
• Attach up to two resource links or source references
• Keep timestamps and identifiers with each entry

Google Sheets Workflow

• Browse entries from a configured Google Sheet
• Filter entries by language and source or translation role
• Search sentence, translation, explanation, table, and resource text
• Edit an existing row and copy its replacement data
• Copy a Sheet header, one TSV row, or both together
• Paste copied rows into Google Sheets using your chosen account

Offline Android Access

Lingua Log caches up to 30 recently fetched entries on Android so your latest language references remain available when the device is offline. Reconnect and reload whenever you need the newest Sheet content.

Preview Before Pasting

Paste a TSV record into the preview tool to check how it will appear. The editor supports quoted text, line breaks, rich explanations, compact table data, custom languages, and resource references.

Optional Device Protection

• Use a local login to reveal protected entries
• Add a 4-to-8-digit application PIN
• Enable fingerprint unlock on supported Android devices
• Keep PIN fallback when biometric unlock is enabled

Privacy Awareness

Lingua Log has no advertisements or developer analytics. Sheet entries and Android offline cache are not encrypted, and the Protected flag only controls visibility inside the app. Use appropriate Google Sheet permissions, protect your device, and avoid storing confidential content.

Lingua Log organizes translations that you provide; it does not automatically translate or guarantee language accuracy.
`,Qi=`---
shortDescription: Browse videos and posts from multiple platforms in one scrollable feed.
---

Scrollix brings curated videos, social posts, and web articles together in one clean, scrollable feed.

Move between videos and posts, explore content from multiple platforms, open original sources, and keep selected articles available offline on Android.

One Curated Media Feed

• Browse content selected through a configured feed
• Separate video and post views
• Search and filter supported video platforms
• Open a dedicated page for each shareable video
• Refresh content whenever you need the latest feed
• Use cached feed information when the network is unavailable

Multiple Video Platforms

• Watch YouTube videos and Shorts
• View supported Instagram and Facebook videos
• Play supported TikTok content and share links
• Open Dailymotion and Vimeo videos
• Support other embeddable video sources
• Start supported YouTube videos from a configured time

Posts and Web Articles

• Browse blogs, social posts, and useful web pages
• See titles, descriptions, preview images, and site information
• Open normal posts in the Android in-app reader
• Send selected social links to their native app or default browser
• Switch between the in-app reader and external browser behavior

Offline Android Reading

• Save up to five supported posts on your device
• Open saved page content without a network connection
• Show only offline posts when you need them
• Remove saved posts individually

Shareable Video Links

• Copy a web link for browsers and messaging apps
• Copy a Scrollix Android link for opening the installed app
• Jump directly to a video using its unique feed link
• Open the original platform page whenever an embed is unavailable

Optional App Protection

• Use local login for feed rows marked as protected
• Add a 4-to-8-digit application PIN
• Enable fingerprint unlock on supported Android devices
• Keep PIN fallback for biometric access

Simple and Focused

Scrollix has no advertisements or developer analytics. It focuses on making a curated collection easier to browse without maintaining separate lists across multiple platforms.

Scrollix displays content provided by third-party publishers and platforms. Availability, suitability, licensing, and accuracy remain subject to the original source and its policies.
`,Xi=`---
shortDescription: Explore multilingual guides on learning, culture, health, food and discovery.
---

AR Blogz is Anand Raja's multilingual corner of the internet for life, learning, culture, practical knowledge, and discoveries beyond code.

Explore detailed articles, compact feed updates, visual explainers, reference tables, and connected article series across a broad range of subjects.

Learn Across Languages

• Read guides covering Tamil, English, Hindi, Kannada, Sanskrit, Malayalam, Telugu, French, Arabic, Urdu, and other languages
• Explore scripts, pronunciation, grammar, vocabulary, and language relationships
• Switch the website interface between multiple supported languages
• Use tables and visual examples for easier comparison

Culture and Traditional Knowledge

• Explore Indian literature, history, religion, festivals, and traditions
• Read structured guides to Vedic astrology and Jathagam concepts
• Learn about Vastu, calendars, mantras, and classical sources
• Follow linked article series from introductory to advanced topics

Health and Everyday Reference

• Read educational guides about medicines, food, nutrition, vaccines, tests, and common health topics
• Review diagrams, comparison tables, cautions, and terminology
• Use clear article disclaimers and consult qualified professionals for personal decisions

Food, Products and Practical Learning

• Explore multilingual food, grocery, fish, meat, and poultry references
• Learn about ingredients, additives, brands, manufacturing, and everyday products
• Discover technology, media, business, science, and general research notes

Built for Reading and Discovery

• Browse recent and featured articles
• Explore categories, tags, archives, and related posts
• Search the published article index
• Read short feed updates and daily status notes
• Subscribe using RSS
• Use light and dark themes
• Open cited sources, videos, diagrams, and social references

Independent Publishing

AR Blogz is a personal publication by Anand Raja. It has no enabled advertising, visitor analytics, public comments, reader accounts, or newsletter in the current configuration.

Some articles may include optional donation links. Donations are voluntary and do not purchase professional advice or influence editorial conclusions.

Articles are provided for general informational and educational purposes. Verify important information using current authoritative sources and consult a qualified professional where appropriate.
`,Zi=`---
shortDescription: Explore Tamil classics, poetry, grammar, devotion, mythology and culture.
---

AR Tamizh Solai is Anand Raja's independent publication for exploring the richness of the Tamil language, literature, and cultural heritage.

Read thoughtful articles that bring classical works, celebrated verses, devotional compositions, grammar, linguistics, mythology, and folklore closer to today's reader.

Explore Tamil Literature

• Discover Sangam poetry and its historical and cultural setting
• Read verses from Kuruntokai and other classical collections
• Explore enduring works such as Thirukkural, Silappatikaram, Manimekalai, Agananooru, Purananuru, Ainkurunuru, and Pattuppattu
• Understand literary themes, imagery, vocabulary, and context

Devotional Works and Traditions

• Read devotional verses, hymns, stotrams, and explanations
• Explore works connected with Murugan, Ayyappa, Vishnu, Venkateswara, Krishna, and other traditions
• Follow word-by-word meanings, transliterations, grammatical notes, and cultural background where provided

Language and Learning

• Learn about Tamil grammar, linguistics, scripts, and word origins
• Compare source verses with explanations and supporting notes
• Use tables, footnotes, highlighted text, tabs, and visual examples designed for careful reading

Read and Discover

• Browse the latest articles and the complete archive
• Search published articles by subject or keyword
• Move between related posts and use the table of contents on longer articles
• Open supporting videos and social-media references embedded in selected articles

Support Tamil Knowledge

AR Tamizh Solai welcomes corrections, content suggestions, collaboration enquiries, and contributions from fellow Tamil-language enthusiasts. Readers can contact the publisher through the website form.

Optional donation links are available for readers who wish to support the publication. Donations are voluntary and do not purchase editorial influence or professional services.

AR Tamizh Solai is an independent educational publication. Interpretations, translations, transliterations, dates, attributions, and cultural explanations may vary among editions and traditions. Readers should consult primary texts and authoritative scholarship when accuracy is important.

Celebrate Tamil. Explore its literature. Preserve its living heritage.
`,el=`---
shortDescription: Private, offline period tracking with profiles, insights and encrypted backup.
---

Flowra is a private, offline-first period and cycle tracker designed for thoughtful daily record keeping without accounts, advertisements, analytics, or cloud sync.

Track Your Cycle Privately

• Record period start and end dates
• Log daily flow, menstrual products, symptoms, severity, moods, and private notes
• View recorded days and estimated windows in a clear calendar
• See descriptive cycle statistics and recent patterns
• Keep independent profiles for yourself or someone you care for

Personal, On-Device Estimates

Flowra calculates cycle estimates locally from the selected profile's recorded history. Recorded days always take priority over estimates, and the app clearly presents predictions as uncertain guidance rather than a guarantee or medical diagnosis.

Optional Local Reminders

Enable an on-device reminder before an estimated period. Choose private notification wording when you do not want cycle details or a profile name shown in notifications.

Security Controls

• Optional 4–8 digit app PIN
• Optional strong-biometric unlock on supported Android devices
• Lock when the app moves to the background
• Optional screenshot blocking and recent-app preview protection
• Android app data excluded from cloud and device-transfer backup

Export and Encrypted Backup

Export period history as CSV or use a printable report for PDF. Create a password-protected .flowra backup to move or restore profiles, logs, predictions, reminders, and settings. Backup encryption uses a password-derived key, and Flowra never stores your backup password.

Works Without an Account

Flowra has no sign-in, advertising, analytics, tracking, or developer-operated cloud database. Android records stay in private app storage. Browser records are encrypted before being stored in IndexedDB. Data leaves the app only when you choose to export, print, back up, or share a file.

Inclusive and Flexible

Choose from multiple interface languages, light or dark appearance, flexible age details, optional first-period information, and user-selected reproductive life stages. The supported interface languages are தமிழ் (Tamizh), English, संस्कृतम् (Sanskrit), हिन्दी (Hindi), ಕನ್ನಡ (Kannada), తెలుగు (Telugu), मराठी (Marathi), മലയാളം (Malayalam), ગુજરાતી (Gujarati), বাংলা (Bengali), اردو (Urdu), ଓଡ଼ିଆ (Odia), ਪੰਜਾਬੀ (Punjabi), සිංහල (Sinhala), 简体中文 (Simplified Chinese), 繁體中文 (Traditional Chinese), Français (French), Español (Spanish), العربية (Arabic), Čeština (Czech), Português (Portuguese), Deutsch (German), Русский (Russian), Bahasa Indonesia (Indonesian), 日本語 (Japanese), and 한국어 (Korean). Exact birth dates are never required.

Flowra helps you notice and describe personal patterns. It is not a medical device and does not diagnose, treat, or provide contraception or fertility advice.
`,nl={spendzo:Mi,stillora:Ri,"vault-nest":Oi,"card-nest":Bi,"link-deck":Ui,"who-called":Fi,"life-leaf":zi,"birthday-buddy":Hi,click2chat:Ki,arflix:Gi,"office-pulse":Wi,personix:ji,expenzo:qi,"ar-tamil-jathagam":Yi,"lingua-log":Ji,scrollix:Qi,arblogz:Xi,artamizhsolai:Zi,flowra:el};function tl(e,t){const n=e.match(/^shortDescription:\s*(.+)$/m);if(!n)throw new Error(`Missing shortDescription in ${t}/store-listing.md`);const o=n[1].trim();return o.startsWith('"')&&o.endsWith('"')?JSON.parse(o):o.startsWith("'")&&o.endsWith("'")?o.slice(1,-1).replace(/''/g,"'"):o}function al(e,t){const o=t.replace(/\r\n/g,`
`).match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!o)throw new Error(`Invalid frontmatter in ${e}/store-listing.md`);return{appId:e,shortDescription:tl(o[1],e),fullDescription:o[2].trim()}}const ol=Object.entries(nl).map(([e,t])=>al(e,t));function sl(e){const t=new Set(re.map(s=>s.id)),n=new Set;for(const s of e){if(!t.has(s.appId))throw new Error(`Store listing references unknown app: ${s.appId}`);if(n.has(s.appId))throw new Error(`Duplicate store listing for app: ${s.appId}`);if(!s.shortDescription.trim()||s.shortDescription.length>80)throw new Error(`${s.appId} short description must contain 1–80 characters`);if(!s.fullDescription.trim()||s.fullDescription.length>4e3)throw new Error(`${s.appId} full description must contain 1–4000 characters`);n.add(s.appId)}const o=re.find(s=>!n.has(s.id));if(o)throw new Error(`Missing store listing for app: ${o.id}`);return e}const rl=sl(ol);function il(e){return rl.find(t=>t.appId===e)}const ll={class:"listing-field"},cl={class:"listing-field__header"},dl={class:"listing-field__count"},ul=["aria-label","rows","value"],pl={class:"visually-hidden","aria-live":"polite"},He=b({__name:"ListingTextField",props:{label:{},value:{},limit:{},rows:{}},setup(e){const t=e,n=S(),o=S("");let s;const d=y(()=>t.value.length);async function i(){var u,p;try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(t.value);else{if(!n.value)throw new Error("Text field is unavailable");if(n.value.focus(),n.value.select(),!document.execCommand("copy"))throw new Error("Copy was rejected")}o.value="Copied"}catch{(u=n.value)==null||u.focus(),(p=n.value)==null||p.select(),o.value="Select the text and copy it manually"}s&&clearTimeout(s),s=setTimeout(()=>{o.value=""},2500)}return be(()=>{s&&clearTimeout(s)}),(u,p)=>(r(),l("section",ll,[a("div",cl,[a("div",null,[a("h3",null,v(e.label),1),a("span",dl,v(d.value)+" / "+v(e.limit)+" characters ",1)]),a("button",{class:"listing-copy-button",type:"button",onClick:i},v(o.value==="Copied"?"Copied":"Copy"),1)]),a("textarea",{ref_key:"textarea",ref:n,class:"listing-field__text","aria-label":`${e.label}, ${d.value} of ${e.limit} characters`,rows:e.rows||5,value:e.value,readonly:"",spellcheck:"false",onFocus:p[0]||(p[0]=w=>{var A;return(A=n.value)==null?void 0:A.select()})},null,40,ul),a("span",pl,v(o.value),1)]))}}),hl={key:0,class:"store-listings"},ml={class:"store-listing-card"},vl={class:"store-listing-card__header"},fl=["src","alt"],gl={key:1,class:"store-listing-card__fallback","aria-hidden":"true"},bl={class:"store-listing-card__eyebrow"},yl={key:1,class:"empty-state"},kl=b({__name:"StoreListings",props:{appId:{}},setup(e){const t=e,n=y(()=>ke(t.appId)),o=y(()=>il(t.appId)),s=S(!1);return(d,i)=>n.value&&o.value?(r(),l("div",hl,[a("article",ml,[a("header",vl,[n.value.icon&&!s.value?(r(),l("img",{key:0,class:"store-listing-card__icon",src:c(z)(n.value.icon),alt:`${n.value.name} icon`,onError:i[0]||(i[0]=u=>s.value=!0)},null,40,fl)):(r(),l("span",gl,v(n.value.name.charAt(0)),1)),a("div",null,[a("p",bl,v(n.value.platform==="android"?"Google Play listing":"Publishing descriptions"),1),a("h2",null,v(n.value.name),1)])]),_(He,{label:"Short description",limit:80,rows:2,value:o.value.shortDescription},null,8,["value"]),_(He,{label:"Full description",limit:4e3,rows:14,value:o.value.fullDescription},null,8,["value"])])])):(r(),l("div",yl,[...i[1]||(i[1]=[a("h2",null,"Descriptions not found",-1),a("p",null,"Check the app ID and add its descriptions to the listing data.",-1)])]))}}),wl=[{code:"af",label:"Afrikaans"},{code:"sq",label:"Albanian"},{code:"am",label:"Amharic"},{code:"ar",label:"Arabic"},{code:"hy-AM",label:"Armenian"},{code:"az-AZ",label:"Azerbaijani"},{code:"bn-BD",label:"Bangla"},{code:"eu-ES",label:"Basque"},{code:"be",label:"Belarusian"},{code:"bg",label:"Bulgarian"},{code:"my-MM",label:"Burmese"},{code:"ca",label:"Catalan"},{code:"zh-HK",label:"Chinese (Hong Kong)"},{code:"zh-CN",label:"Chinese (Simplified)"},{code:"zh-TW",label:"Chinese (Traditional)"},{code:"hr",label:"Croatian"},{code:"cs-CZ",label:"Czech"},{code:"da-DK",label:"Danish"},{code:"nl-NL",label:"Dutch"},{code:"en-AU",label:"English (Australia)"},{code:"en-CA",label:"English (Canada)"},{code:"en-US",label:"English (United States)"},{code:"en-GB",label:"English (United Kingdom)"},{code:"en-IN",label:"English (India)"},{code:"en-SG",label:"English (Singapore)"},{code:"en-ZA",label:"English (South Africa)"},{code:"et",label:"Estonian"},{code:"fil",label:"Filipino"},{code:"fi-FI",label:"Finnish"},{code:"fr-CA",label:"French (Canada)"},{code:"fr-FR",label:"French (France)"},{code:"gl-ES",label:"Galician"},{code:"ka-GE",label:"Georgian"},{code:"de-DE",label:"German"},{code:"el-GR",label:"Greek"},{code:"gu",label:"Gujarati"},{code:"iw-IL",label:"Hebrew"},{code:"hi-IN",label:"Hindi"},{code:"hu-HU",label:"Hungarian"},{code:"is-IS",label:"Icelandic"},{code:"id",label:"Indonesian"},{code:"it-IT",label:"Italian"},{code:"ja-JP",label:"Japanese"},{code:"kn-IN",label:"Kannada"},{code:"kk",label:"Kazakh"},{code:"km-KH",label:"Khmer"},{code:"ko-KR",label:"Korean"},{code:"ky-KG",label:"Kyrgyz"},{code:"lo-LA",label:"Lao"},{code:"lv",label:"Latvian"},{code:"lt",label:"Lithuanian"},{code:"mk-MK",label:"Macedonian"},{code:"ms-MY",label:"Malay (Malaysia)"},{code:"ms",label:"Malay"},{code:"ml-IN",label:"Malayalam"},{code:"mr-IN",label:"Marathi"},{code:"mn-MN",label:"Mongolian"},{code:"ne-NP",label:"Nepali"},{code:"no-NO",label:"Norwegian"},{code:"fa",label:"Persian"},{code:"fa-AE",label:"Persian (United Arab Emirates)"},{code:"fa-AF",label:"Persian (Afghanistan)"},{code:"fa-IR",label:"Persian (Iran)"},{code:"pl-PL",label:"Polish"},{code:"pt-BR",label:"Portuguese (Brazil)"},{code:"pt-PT",label:"Portuguese (Portugal)"},{code:"pa",label:"Punjabi"},{code:"ro",label:"Romanian"},{code:"rm",label:"Romansh"},{code:"ru-RU",label:"Russian"},{code:"sr",label:"Serbian"},{code:"si-LK",label:"Sinhala"},{code:"sk",label:"Slovak"},{code:"sl",label:"Slovenian"},{code:"es-419",label:"Spanish (Latin America)"},{code:"es-ES",label:"Spanish (Spain)"},{code:"es-US",label:"Spanish (United States)"},{code:"sw",label:"Swahili"},{code:"sv-SE",label:"Swedish"},{code:"ta-IN",label:"Tamil"},{code:"te-IN",label:"Telugu"},{code:"th",label:"Thai"},{code:"tr-TR",label:"Turkish"},{code:"uk",label:"Ukrainian"},{code:"ur",label:"Urdu"},{code:"vi",label:"Vietnamese"}],_l={class:"release-notes-formatter","aria-labelledby":"release-notes-heading"},$l={class:"release-notes-formatter__controls"},Sl={class:"release-notes-formatter__template"},Pl=["value"],xl={class:"release-notes-formatter__locale"},Al=["value"],Ll={class:"release-notes-formatter__options"},Cl={class:"release-notes-formatter__android-option"},Tl={key:0,class:"release-notes-formatter__android-controls"},Vl=["value"],Il={key:0},Nl={class:"release-notes-formatter__updates"},El={class:"release-notes-formatter__crash-option"},Dl={class:"release-notes-formatter__platform-grid"},Ml=["aria-label"],Rl=["onUpdate:modelValue","onChange"],Ol=["onUpdate:modelValue","onChange"],Bl={class:"release-notes-formatter__editor"},Ul={class:"release-notes-formatter__label-row"},Fl=["value"],zl={class:"listing-field release-notes-formatter__output"},Hl={class:"listing-field__header"},Kl=["disabled"],Gl=["value"],Wl={class:"visually-hidden","aria-live":"polite"},se=500,jl=b({__name:"ReleaseNotesFormatter",props:{appName:{}},setup(e){const t=e,n=S("en-US"),o=S(""),s=S("maintenance"),d=S(!0),i=S(!0),u=S(!1),p=S("17"),w=S(""),A=S(),k=S("");let L;const T=[{id:"maintenance",label:"Minor fixes and performance"},{id:"reliability",label:"Reliability improvements"},{id:"polish",label:"Interface and usability polish"},{id:"first-release",label:"First release"}],I=[{version:"1.5",name:"Cupcake"},{version:"1.6",name:"Donut"},{version:"2.0–2.1",name:"Éclair"},{version:"2.2",name:"Froyo / Frozen Yogurt"},{version:"2.3–2.3.7",name:"Gingerbread"},{version:"3.0–3.2",name:"Honeycomb",qualifier:"tablet-only release"},{version:"4.0–4.0.4",name:"Ice Cream Sandwich"},{version:"4.1–4.3.1",name:"Jelly Bean"},{version:"4.4–4.4.4",name:"KitKat"},{version:"5",name:"Lollipop"},{version:"6",name:"Marshmallow"},{version:"7",name:"Nougat"},{version:"8",name:"Oreo"},{version:"9",name:"Pie"},{version:"10",name:"Quince Tart"},{version:"11",name:"Red Velvet Cake"},{version:"12",name:"Snow Cone"},{version:"13",name:"Tiramisu"},{version:"14",name:"Upside Down Cake"},{version:"15",name:"Vanilla Ice Cream"},{version:"16",name:"Baklava"},{version:"17",name:"Cinnamon Bun"}],V=xn({crashFixes:!1,wearAdded:!1,wearImproved:!1,tvAdded:!1,tvImproved:!1,xrAdded:!1,xrImproved:!1,tabletAdded:!1,tabletImproved:!1,foldableAdded:!1,foldableImproved:!1,chromeOsAdded:!1,chromeOsImproved:!1}),U=[{label:"Wear OS",addedKey:"wearAdded",improvedKey:"wearImproved"},{label:"Android TV",addedKey:"tvAdded",improvedKey:"tvImproved"},{label:"VR and Android XR",addedKey:"xrAdded",improvedKey:"xrImproved"},{label:"Tablets and large screens",addedKey:"tabletAdded",improvedKey:"tabletImproved"},{label:"Foldable devices",addedKey:"foldableAdded",improvedKey:"foldableImproved"},{label:"ChromeOS devices",addedKey:"chromeOsAdded",improvedKey:"chromeOsImproved"}],M={crashFixes:"• Fixed crashes to improve app stability.",wearAdded:"• Added support for Wear OS devices.",wearImproved:"• Improved performance and usability on Wear OS devices.",tvAdded:"• Added support for Android TV devices.",tvImproved:"• Improved the Android TV experience.",xrAdded:"• Added support for VR and Android XR devices.",xrImproved:"• Improved compatibility with VR and Android XR devices.",tabletAdded:"• Added support for tablets and large screens.",tabletImproved:"• Improved the experience on tablets and large screens.",foldableAdded:"• Added support for foldable devices.",foldableImproved:"• Improved the experience on foldable devices.",chromeOsAdded:"• Added support for ChromeOS devices.",chromeOsImproved:"• Improved compatibility with ChromeOS devices."},P=Object.keys(V);function N(B){return d.value?B.split(/\r?\n/).map(g=>g.trim().replace(/^(?:[•●▪◦]|[-*])\s*/,"")).filter(Boolean).map(g=>`• ${g}`).join(`
`):B.trim()}function q(B){const g=N(B),x=ae(),H=ln();if(!i.value)return[g,x,H].filter(Boolean).join(`
`);const we=[g,x,H,"• Refined the overall app experience"].filter(Boolean).join(`
`);return[`We've made ${t.appName} smoother and more reliable.`,we].filter(Boolean).join(`

`)}function ae(){if(!u.value)return"";const B=p.value==="custom",g=B?w.value.trim():p.value;if(B&&!/^\d+(?:\.\d+)?$/.test(g))return"";const x=I.find(pn=>pn.version===g),H=x&&"qualifier"in x?`, ${x.qualifier}`:"",we=x?` (${x.name}${H})`:"";return`• Added support for Android ${g}${we}.`}function ln(){return P.filter(B=>V[B]).map(B=>M[B]).join(`
`)}function Oe(B,g){V[B]&&(V[g]=!1)}const Be=y(()=>q(o.value)),Ue=y(()=>Array.from(Be.value).length),oe=y(()=>Ue.value>se),ce=y(()=>{const B=Be.value;return B?`<${n.value}>
${B}
</${n.value}>`:""});function cn(B){const g=B.target.value;o.value=Fe(g)}function Fe(B){const g=Array.from(B).slice(0,se);for(;g.length&&Array.from(q(g.join(""))).length>se;)g.pop();return g.join("")}function dn(){const B={maintenance:`Fixed minor issues
Improved performance`,reliability:`Improved performance
Fixed minor issues`,polish:`Improved interface consistency
Enhanced usability
Fixed minor issues`,"first-release":`Welcome to the first release of ${t.appName}!

This release introduces the core app experience with a focus on simplicity, reliability, and smooth performance.`};i.value=s.value!=="first-release",o.value=Array.from(B[s.value]).slice(0,se).join("")}async function un(){var B,g;if(!(!ce.value||oe.value)){try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(ce.value);else{if(!A.value)throw new Error("Formatted output is unavailable");if(A.value.focus(),A.value.select(),!document.execCommand("copy"))throw new Error("Copy was rejected")}k.value="Copied"}catch{(B=A.value)==null||B.focus(),(g=A.value)==null||g.select(),k.value="Select the formatted text and copy it manually"}L&&clearTimeout(L),L=setTimeout(()=>{k.value=""},2500)}}return be(()=>{L&&clearTimeout(L)}),G([d,i,u,p,w,()=>P.map(B=>V[B])],()=>{o.value=Fe(o.value)}),(B,g)=>(r(),l("section",_l,[g[24]||(g[24]=a("div",{class:"release-notes-formatter__intro"},[a("p",{class:"store-listing-card__eyebrow"},"Reusable tool"),a("h2",{id:"release-notes-heading"},"Release notes formatter"),a("p",null," Enter user-facing changes only. Google Play allows up to 500 Unicode characters per language and requires the locale tags on separate lines. ")],-1)),a("div",$l,[a("div",Sl,[a("label",null,[g[9]||(g[9]=a("span",null,"Generic note",-1)),K(a("select",{"onUpdate:modelValue":g[0]||(g[0]=x=>s.value=x)},[(r(),l(E,null,O(T,x=>a("option",{key:x.id,value:x.id},v(x.label),9,Pl)),64))],512),[[de,s.value]])]),a("button",{type:"button",onClick:dn},"Use generic note"),a("small",null," Inserts an editable English note and adds "+v(e.appName)+" automatically. ",1)]),a("label",xl,[g[10]||(g[10]=a("span",null,"Language",-1)),K(a("select",{"onUpdate:modelValue":g[1]||(g[1]=x=>n.value=x)},[(r(!0),l(E,null,O(c(wl),x=>(r(),l("option",{key:x.code,value:x.code},v(x.label)+" ("+v(x.code)+") ",9,Al))),128))],512),[[de,n.value]])]),a("fieldset",Ll,[g[21]||(g[21]=a("legend",null,"Formatting options",-1)),a("label",null,[K(a("input",{"onUpdate:modelValue":g[2]||(g[2]=x=>d.value=x),type:"checkbox"},null,512),[[te,d.value]]),g[11]||(g[11]=a("span",null,"Format each custom line as a bullet point",-1))]),a("label",null,[K(a("input",{"onUpdate:modelValue":g[3]||(g[3]=x=>i.value=x),type:"checkbox"},null,512),[[te,i.value]]),a("span",null," Add “We've made "+v(e.appName)+" smoother and more reliable.” and “Refined the overall app experience” ",1)]),a("div",Cl,[a("label",null,[K(a("input",{"onUpdate:modelValue":g[4]||(g[4]=x=>u.value=x),type:"checkbox"},null,512),[[te,u.value]]),g[12]||(g[12]=a("span",null,"Add an Android version support bullet point",-1))]),u.value?(r(),l("div",Tl,[a("label",null,[g[14]||(g[14]=a("span",null,"Android version",-1)),K(a("select",{"onUpdate:modelValue":g[5]||(g[5]=x=>p.value=x)},[(r(),l(E,null,O(I,x=>a("option",{key:x.version,value:x.version}," Android "+v(x.version)+" ("+v(x.name)+") ",9,Vl)),64)),g[13]||(g[13]=a("option",{value:"custom"},"Custom version",-1))],512),[[de,p.value]])]),p.value==="custom"?(r(),l("label",Il,[g[15]||(g[15]=a("span",null,"Custom Android version",-1)),K(a("input",{"onUpdate:modelValue":g[6]||(g[6]=x=>w.value=x),type:"number",min:"1",max:"99",step:"any",inputmode:"decimal",placeholder:"For example, 18 or 8.1"},null,512),[[Qe,w.value]])])):f("",!0)])):f("",!0)]),a("fieldset",Nl,[g[19]||(g[19]=a("legend",null,"Optional platform and quality updates",-1)),g[20]||(g[20]=a("p",null,"Choose only the improvements included in this release.",-1)),a("label",El,[K(a("input",{"onUpdate:modelValue":g[7]||(g[7]=x=>V.crashFixes=x),type:"checkbox"},null,512),[[te,V.crashFixes]]),g[16]||(g[16]=a("span",null,"App crash fixes",-1))]),a("div",Dl,[(r(),l(E,null,O(U,x=>a("section",{key:x.label,class:"release-notes-formatter__platform","aria-label":x.label},[a("strong",null,v(x.label),1),a("label",null,[K(a("input",{"onUpdate:modelValue":H=>V[x.addedKey]=H,type:"checkbox",onChange:H=>Oe(x.addedKey,x.improvedKey)},null,40,Rl),[[te,V[x.addedKey]]]),g[17]||(g[17]=a("span",null,"Support added",-1))]),a("label",null,[K(a("input",{"onUpdate:modelValue":H=>V[x.improvedKey]=H,type:"checkbox",onChange:H=>Oe(x.improvedKey,x.addedKey)},null,40,Ol),[[te,V[x.improvedKey]]]),g[18]||(g[18]=a("span",null,"Support improved",-1))])],8,Ml)),64))])])]),a("label",Bl,[a("span",Ul,[g[22]||(g[22]=a("span",null,"Custom release notes",-1)),a("span",{class:R({"is-over-limit":oe.value})},v(Ue.value)+" / "+v(se)+" characters ",3)]),a("textarea",{value:o.value,rows:"10",placeholder:"Enter one change per line. Bullet symbols are added automatically.",onInput:cn},null,40,Fl)]),a("section",zl,[a("div",Hl,[a("div",null,[g[23]||(g[23]=a("h3",null,"Play Console format",-1)),a("span",{class:R(["listing-field__count",{"is-over-limit":oe.value}])},v(oe.value?"Reduce selected options to 500 characters":"Ready to paste"),3)]),a("button",{class:"listing-copy-button",type:"button",disabled:!ce.value||oe.value,onClick:un},v(k.value==="Copied"?"Copied":"Copy"),9,Kl)]),a("textarea",{ref_key:"output",ref:A,class:"listing-field__text",value:ce.value,rows:"12",readonly:"","aria-label":"Formatted Google Play release notes",placeholder:"Formatted release notes will appear here.",onFocus:g[8]||(g[8]=x=>{var H;return(H=A.value)==null?void 0:H.select()})},null,40,Gl),a("span",Wl,v(k.value),1)])]),g[25]||(g[25]=a("p",{class:"release-notes-formatter__hint"}," Only choose languages already added to the app's Google Play store listing. Generic notes are written in English; translate them yourself before selecting another language. ",-1))]))}}),Yl={extends:ir,enhanceApp({app:e}){e.component("AppBreadcrumbs",on),e.component("AppCard",sn),e.component("AppGrid",Qr),e.component("AppOverview",ki),e.component("AppSubnav",rn),e.component("ContactDetails",Li),e.component("CopyStandaloneUrl",Di),e.component("ExternalLinkButton",pe),e.component("StoreListings",kl),e.component("ReleaseNotesFormatter",jl)}};export{Yl as R,Ho as c,D as u};
