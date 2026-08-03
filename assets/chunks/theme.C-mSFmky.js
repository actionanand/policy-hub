const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DbAuNAS9.js","assets/chunks/framework.DOB-AMqW.js"])))=>i.map(i=>d[i]);
import{d as g,c,r as h,n as M,o as i,a as G,t as m,b as w,w as v,T as ke,e as f,_ as x,u as qe,i as Je,f as Ye,g as U,h as b,j as s,k as d,l as q,m as ve,p as P,q as B,s as oe,v as j,x as _e,y as we,z as Qe,A as Ze,F as D,B as R,C as J,D as se,E as y,G as Ie,H as F,I as De,J as Z,K as W,L as ie,M as Xe,N as Ee,O as me,P as $e,Q as Me,R as re,S as en,U as nn,V as tn,W as Re,X as Ue,Y as an,Z as on,$ as le,a0 as sn,a1 as rn,a2 as te,a3 as ln,a4 as fe}from"./framework.DOB-AMqW.js";const cn=g({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(i(),c("span",{class:M(["VPBadge",e.type])},[h(t.$slots,"default",{},()=>[G(m(e.text),1)])],2))}}),dn={key:0,class:"VPBackdrop"},un=g({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(i(),w(ke,{name:"fade"},{default:v(()=>[e.show?(i(),c("div",dn)):f("",!0)]),_:1}))}}),pn=x(un,[["__scopeId","data-v-c79a1216"]]),I=qe;function hn(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),(a=!0)&&setTimeout(()=>a=!1,t))}}function ge(e){return e.startsWith("/")?e:`/${e}`}function Se(e){const{pathname:t,search:n,hash:a,protocol:o}=new URL(e,"http://a.com");if(Je(e)||e.startsWith("#")||!o.startsWith("http")||!Ye(t))return e;const{site:l}=I(),r=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,l.value.cleanUrls?"":".html")}${n}${a}`);return U(r)}function X({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:a,theme:o,hash:l}=I(),r=b(()=>{var p,k;return{label:(p=t.value.locales[n.value])==null?void 0:p.label,link:((k=t.value.locales[n.value])==null?void 0:k.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:b(()=>Object.entries(t.value.locales).flatMap(([p,k])=>r.value.label===k.label?[]:{text:k.label,link:vn(k.link||(p==="root"?"/":`/${p}/`),o.value.i18nRouting!==!1&&e,a.value.relativePath.slice(r.value.link.length-1),!t.value.cleanUrls)+l.value})),currentLang:r}}function vn(e,t,n,a){return t?e.replace(/\/$/,"")+ge(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):e}const mn={class:"NotFound"},fn={class:"code"},gn={class:"title"},bn={class:"quote"},yn={class:"action"},kn=["href","aria-label"],_n=g({__name:"NotFound",setup(e){const{theme:t}=I(),{currentLang:n}=X();return(a,o)=>{var l,r,u,p,k;return i(),c("div",mn,[s("p",fn,m(((l=d(t).notFound)==null?void 0:l.code)??"404"),1),s("h1",gn,m(((r=d(t).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=s("div",{class:"divider"},null,-1)),s("blockquote",bn,m(((u=d(t).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),s("div",yn,[s("a",{class:"link",href:d(U)(d(n).link),"aria-label":((p=d(t).notFound)==null?void 0:p.linkLabel)??"go to home"},m(((k=d(t).notFound)==null?void 0:k.linkText)??"Take me home"),9,kn)])])}}}),wn=x(_n,[["__scopeId","data-v-d6be1790"]]);function Oe(e,t){if(Array.isArray(e))return ee(e);if(e==null)return[];t=ge(t);const n=Object.keys(e).sort((o,l)=>l.split("/").length-o.split("/").length).find(o=>t.startsWith(ge(o))),a=n?e[n]:[];return Array.isArray(a)?ee(a):ee(a.items,a.base)}function $n(e){const t=[];let n=0;for(const a in e){const o=e[a];if(o.items){n=t.push(o);continue}t[n]||t.push({items:[]}),t[n].items.push(o)}return t}function Sn(e){const t=[];function n(a){for(const o of a)o.text&&o.link&&t.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&n(o.items)}return n(e),t}function be(e,t){return Array.isArray(t)?t.some(n=>be(e,n)):q(e,t.link)?!0:t.items?be(e,t.items):!1}function ee(e,t){return[...e].map(n=>{const a={...n},o=a.base||t;return o&&a.link&&(a.link=o+a.link),a.items&&(a.items=ee(a.items,o)),a})}function K(){const{frontmatter:e,page:t,theme:n}=I(),a=ve("(min-width: 960px)"),o=P(!1),l=b(()=>{const $=n.value.sidebar,E=t.value.relativePath;return $?Oe($,E):[]}),r=P(l.value);B(l,($,E)=>{JSON.stringify($)!==JSON.stringify(E)&&(r.value=l.value)});const u=b(()=>e.value.sidebar!==!1&&r.value.length>0&&e.value.layout!=="home"),p=b(()=>k?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),k=b(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),T=b(()=>u.value&&a.value),_=b(()=>u.value?$n(r.value):[]);function A(){o.value=!0}function C(){o.value=!1}function L(){o.value?C():A()}return{isOpen:o,sidebar:r,sidebarGroups:_,hasSidebar:u,hasAside:k,leftAside:p,isSidebarEnabled:T,open:A,close:C,toggle:L}}function Pn(e,t){let n;oe(()=>{n=e.value?document.activeElement:void 0}),j(()=>{window.addEventListener("keyup",a)}),_e(()=>{window.removeEventListener("keyup",a)});function a(o){o.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function xn(e){const{page:t,hash:n}=I(),a=P(!1),o=b(()=>e.value.collapsed!=null),l=b(()=>!!e.value.link),r=P(!1),u=()=>{r.value=q(t.value.relativePath,e.value.link)};B([t,e,n],u),j(u);const p=b(()=>r.value?!0:e.value.items?be(t.value.relativePath,e.value.items):!1),k=b(()=>!!(e.value.items&&e.value.items.length));oe(()=>{a.value=!!(o.value&&e.value.collapsed)}),we(()=>{(r.value||p.value)&&(a.value=!1)});function T(){o.value&&(a.value=!a.value)}return{collapsed:a,collapsible:o,isLink:l,isActiveLink:r,hasActiveLink:p,hasChildren:k,toggle:T}}function Ln(){const{hasSidebar:e}=K(),t=ve("(min-width: 960px)"),n=ve("(min-width: 1280px)");return{isAsideEnabled:b(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const Tn=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,ye=[];function Be(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function Pe(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{element:n,title:An(n),link:"#"+n.id,level:a}});return Cn(t,e)}function An(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(Tn.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function Cn(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[a,o]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return In(e,a,o)}function Vn(e,t){const{isAsideEnabled:n}=Ln(),a=hn(l,100);let o=null;j(()=>{requestAnimationFrame(l),window.addEventListener("scroll",a)}),Qe(()=>{r(location.hash)}),_e(()=>{window.removeEventListener("scroll",a)});function l(){if(!n.value)return;const u=window.scrollY,p=window.innerHeight,k=document.body.offsetHeight,T=Math.abs(u+p-k)<1,_=ye.map(({element:C,link:L})=>({link:L,top:Nn(C)})).filter(({top:C})=>!Number.isNaN(C)).sort((C,L)=>C.top-L.top);if(!_.length){r(null);return}if(u<1){r(null);return}if(T){r(_[_.length-1].link);return}let A=null;for(const{link:C,top:L}of _){if(L>u+Ze()+4)break;A=C}r(A)}function r(u){o&&o.classList.remove("active"),u==null?o=null:o=e.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const p=o;p?(p.classList.add("active"),t.value.style.top=p.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Nn(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function In(e,t,n){ye.length=0;const a=[],o=[];return e.forEach(l=>{const r={...l,children:[]};let u=o[o.length-1];for(;u&&u.level>=r.level;)o.pop(),u=o[o.length-1];if(r.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){o.push({level:r.level,shouldIgnore:!0});return}r.level>n||r.level<t||(ye.push({element:r.element,link:r.link}),u?u.children.push(r):a.push(r),o.push(r))}),a}const Dn=["href","title"],En=g({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const a=n.href.split("#")[1],o=document.getElementById(decodeURIComponent(a));o==null||o.focus({preventScroll:!0})}return(n,a)=>{const o=J("VPDocOutlineItem",!0);return i(),c("ul",{class:M(["VPDocOutlineItem",e.root?"root":"nested"])},[(i(!0),c(D,null,R(e.headers,({children:l,link:r,title:u})=>(i(),c("li",null,[s("a",{class:"outline-link",href:r,onClick:t,title:u},m(u),9,Dn),l!=null&&l.length?(i(),w(o,{key:0,headers:l},null,8,["headers"])):f("",!0)]))),256))],2)}}}),Fe=x(En,[["__scopeId","data-v-b933a997"]]),Mn={class:"content"},Rn={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Un=g({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=I(),a=Ie([]);se(()=>{a.value=Pe(t.value.outline??n.value.outline)});const o=P(),l=P();return Vn(o,l),(r,u)=>(i(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:M(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:o},[s("div",Mn,[s("div",{class:"outline-marker",ref_key:"marker",ref:l},null,512),s("div",Rn,m(d(Be)(d(n))),1),y(Fe,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),On=x(Un,[["__scopeId","data-v-a5bbad30"]]),Bn={class:"VPDocAsideCarbonAds"},Fn=g({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,a)=>(i(),c("div",Bn,[y(d(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),zn={class:"VPDocAside"},Hn=g({__name:"VPDocAside",setup(e){const{theme:t}=I();return(n,a)=>(i(),c("div",zn,[h(n.$slots,"aside-top",{},void 0,!0),h(n.$slots,"aside-outline-before",{},void 0,!0),y(On),h(n.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=s("div",{class:"spacer"},null,-1)),h(n.$slots,"aside-ads-before",{},void 0,!0),d(t).carbonAds?(i(),w(Fn,{key:0,"carbon-ads":d(t).carbonAds},null,8,["carbon-ads"])):f("",!0),h(n.$slots,"aside-ads-after",{},void 0,!0),h(n.$slots,"aside-bottom",{},void 0,!0)]))}}),Gn=x(Hn,[["__scopeId","data-v-3f215769"]]);function Kn(){const{theme:e,page:t}=I();return b(()=>{const{text:n="Edit this page",pattern:a=""}=e.value.editLink||{};let o;return typeof a=="function"?o=a(t.value):o=a.replace(/:path/g,t.value.filePath),{url:o,text:n}})}function Wn(){const{page:e,theme:t,frontmatter:n}=I();return b(()=>{var k,T,_,A,C,L,$,E;const a=Oe(t.value.sidebar,e.value.relativePath),o=Sn(a),l=jn(o,V=>V.link.replace(/[?#].*$/,"")),r=l.findIndex(V=>q(e.value.relativePath,V.link)),u=((k=t.value.docFooter)==null?void 0:k.prev)===!1&&!n.value.prev||n.value.prev===!1,p=((T=t.value.docFooter)==null?void 0:T.next)===!1&&!n.value.next||n.value.next===!1;return{prev:u?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((_=l[r-1])==null?void 0:_.docFooterText)??((A=l[r-1])==null?void 0:A.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((C=l[r-1])==null?void 0:C.link)},next:p?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((L=l[r+1])==null?void 0:L.docFooterText)??(($=l[r+1])==null?void 0:$.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((E=l[r+1])==null?void 0:E.link)}}})}function jn(e,t){const n=new Set;return e.filter(a=>{const o=t(a);return n.has(o)?!1:n.add(o)})}const z=g({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=b(()=>t.tag??(t.href?"a":"span")),a=b(()=>t.href&&De.test(t.href)||t.target==="_blank");return(o,l)=>(i(),w(F(n.value),{class:M(["VPLink",{link:e.href,"vp-external-link-icon":a.value,"no-icon":e.noIcon}]),href:e.href?d(Se)(e.href):void 0,target:e.target??(a.value?"_blank":void 0),rel:e.rel??(a.value?"noreferrer":void 0)},{default:v(()=>[h(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),qn={class:"VPLastUpdated"},Jn=["datetime"],Yn=g({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:a}=I(),o=b(()=>new Date(n.value.lastUpdated)),l=b(()=>o.value.toISOString()),r=P("");return j(()=>{oe(()=>{var u,p,k;r.value=new Intl.DateTimeFormat((p=(u=t.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&p.forceLocale?a.value:void 0,((k=t.value.lastUpdated)==null?void 0:k.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(u,p)=>{var k;return i(),c("p",qn,[G(m(((k=d(t).lastUpdated)==null?void 0:k.text)||d(t).lastUpdatedText||"Last updated")+": ",1),s("time",{datetime:l.value},m(r.value),9,Jn)])}}}),Qn=x(Yn,[["__scopeId","data-v-e98dd255"]]),Zn={key:0,class:"VPDocFooter"},Xn={key:0,class:"edit-info"},et={key:0,class:"edit-link"},nt={key:1,class:"last-updated"},tt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},at={class:"pager"},ot=["innerHTML"],st=["innerHTML"],it={class:"pager"},rt=["innerHTML"],lt=["innerHTML"],ct=g({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:a}=I(),o=Kn(),l=Wn(),r=b(()=>t.value.editLink&&a.value.editLink!==!1),u=b(()=>n.value.lastUpdated),p=b(()=>r.value||u.value||l.value.prev||l.value.next);return(k,T)=>{var _,A,C,L;return p.value?(i(),c("footer",Zn,[h(k.$slots,"doc-footer-before",{},void 0,!0),r.value||u.value?(i(),c("div",Xn,[r.value?(i(),c("div",et,[y(z,{class:"edit-link-button",href:d(o).url,"no-icon":!0},{default:v(()=>[T[0]||(T[0]=s("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),G(" "+m(d(o).text),1)]),_:1},8,["href"])])):f("",!0),u.value?(i(),c("div",nt,[y(Qn)])):f("",!0)])):f("",!0),(_=d(l).prev)!=null&&_.link||(A=d(l).next)!=null&&A.link?(i(),c("nav",tt,[T[1]||(T[1]=s("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),s("div",at,[(C=d(l).prev)!=null&&C.link?(i(),w(z,{key:0,class:"pager-link prev",href:d(l).prev.link},{default:v(()=>{var $;return[s("span",{class:"desc",innerHTML:(($=d(t).docFooter)==null?void 0:$.prev)||"Previous page"},null,8,ot),s("span",{class:"title",innerHTML:d(l).prev.text},null,8,st)]}),_:1},8,["href"])):f("",!0)]),s("div",it,[(L=d(l).next)!=null&&L.link?(i(),w(z,{key:0,class:"pager-link next",href:d(l).next.link},{default:v(()=>{var $;return[s("span",{class:"desc",innerHTML:(($=d(t).docFooter)==null?void 0:$.next)||"Next page"},null,8,rt),s("span",{class:"title",innerHTML:d(l).next.text},null,8,lt)]}),_:1},8,["href"])):f("",!0)])])):f("",!0)])):f("",!0)}}}),dt=x(ct,[["__scopeId","data-v-e257564d"]]),ut={class:"container"},pt={class:"aside-container"},ht={class:"aside-content"},vt={class:"content"},mt={class:"content-container"},ft={class:"main"},gt=g({__name:"VPDoc",setup(e){const{theme:t}=I(),n=Z(),{hasSidebar:a,hasAside:o,leftAside:l}=K(),r=b(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,p)=>{const k=J("Content");return i(),c("div",{class:M(["VPDoc",{"has-sidebar":d(a),"has-aside":d(o)}])},[h(u.$slots,"doc-top",{},void 0,!0),s("div",ut,[d(o)?(i(),c("div",{key:0,class:M(["aside",{"left-aside":d(l)}])},[p[0]||(p[0]=s("div",{class:"aside-curtain"},null,-1)),s("div",pt,[s("div",ht,[y(Gn,null,{"aside-top":v(()=>[h(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[h(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[h(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[h(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[h(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[h(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):f("",!0),s("div",vt,[s("div",mt,[h(u.$slots,"doc-before",{},void 0,!0),s("main",ft,[y(k,{class:M(["vp-doc",[r.value,d(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),y(dt,null,{"doc-footer-before":v(()=>[h(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),h(u.$slots,"doc-after",{},void 0,!0)])])]),h(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),bt=x(gt,[["__scopeId","data-v-39a288b8"]]),yt=g({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=b(()=>t.href&&De.test(t.href)),a=b(()=>t.tag||(t.href?"a":"button"));return(o,l)=>(i(),w(F(a.value),{class:M(["VPButton",[e.size,e.theme]]),href:e.href?d(Se)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:v(()=>[G(m(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),kt=x(yt,[["__scopeId","data-v-fa7799d5"]]),_t=["src","alt"],wt=g({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const a=J("VPImage",!0);return e.image?(i(),c(D,{key:0},[typeof e.image=="string"||"src"in e.image?(i(),c("img",W({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:d(U)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,_t)):(i(),c(D,{key:1},[y(a,W({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),y(a,W({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):f("",!0)}}}),ae=x(wt,[["__scopeId","data-v-8426fc1a"]]),$t={class:"container"},St={class:"main"},Pt={class:"heading"},xt=["innerHTML"],Lt=["innerHTML"],Tt=["innerHTML"],At={key:0,class:"actions"},Ct={key:0,class:"image"},Vt={class:"image-container"},Nt=g({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=ie("hero-image-slot-exists");return(n,a)=>(i(),c("div",{class:M(["VPHero",{"has-image":e.image||d(t)}])},[s("div",$t,[s("div",St,[h(n.$slots,"home-hero-info-before",{},void 0,!0),h(n.$slots,"home-hero-info",{},()=>[s("h1",Pt,[e.name?(i(),c("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,xt)):f("",!0),e.text?(i(),c("span",{key:1,innerHTML:e.text,class:"text"},null,8,Lt)):f("",!0)]),e.tagline?(i(),c("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,Tt)):f("",!0)],!0),h(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(i(),c("div",At,[(i(!0),c(D,null,R(e.actions,o=>(i(),c("div",{key:o.link,class:"action"},[y(kt,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):f("",!0),h(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||d(t)?(i(),c("div",Ct,[s("div",Vt,[a[0]||(a[0]=s("div",{class:"image-bg"},null,-1)),h(n.$slots,"home-hero-image",{},()=>[e.image?(i(),w(ae,{key:0,class:"image-src",image:e.image},null,8,["image"])):f("",!0)],!0)])])):f("",!0)])],2))}}),It=x(Nt,[["__scopeId","data-v-4f9c455b"]]),Dt=g({__name:"VPHomeHero",setup(e){const{frontmatter:t}=I();return(n,a)=>d(t).hero?(i(),w(It,{key:0,class:"VPHomeHero",name:d(t).hero.name,text:d(t).hero.text,tagline:d(t).hero.tagline,image:d(t).hero.image,actions:d(t).hero.actions},{"home-hero-info-before":v(()=>[h(n.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[h(n.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[h(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[h(n.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[h(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):f("",!0)}}),Et={class:"box"},Mt={key:0,class:"icon"},Rt=["innerHTML"],Ut=["innerHTML"],Ot=["innerHTML"],Bt={key:4,class:"link-text"},Ft={class:"link-text-value"},zt=g({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(i(),w(z,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:v(()=>[s("article",Et,[typeof e.icon=="object"&&e.icon.wrap?(i(),c("div",Mt,[y(ae,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(i(),w(ae,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(i(),c("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Rt)):f("",!0),s("h2",{class:"title",innerHTML:e.title},null,8,Ut),e.details?(i(),c("p",{key:3,class:"details",innerHTML:e.details},null,8,Ot)):f("",!0),e.linkText?(i(),c("div",Bt,[s("p",Ft,[G(m(e.linkText)+" ",1),n[0]||(n[0]=s("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):f("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ht=x(zt,[["__scopeId","data-v-a3976bdc"]]),Gt={key:0,class:"VPFeatures"},Kt={class:"container"},Wt={class:"items"},jt=g({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=b(()=>{const a=t.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,o)=>e.features?(i(),c("div",Gt,[s("div",Kt,[s("div",Wt,[(i(!0),c(D,null,R(e.features,l=>(i(),c("div",{key:l.title,class:M(["item",[n.value]])},[y(Ht,{icon:l.icon,title:l.title,details:l.details,link:l.link,"link-text":l.linkText,rel:l.rel,target:l.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):f("",!0)}}),qt=x(jt,[["__scopeId","data-v-a6181336"]]),Jt=g({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=I();return(n,a)=>d(t).features?(i(),w(qt,{key:0,class:"VPHomeFeatures",features:d(t).features},null,8,["features"])):f("",!0)}}),Yt=g({__name:"VPHomeContent",setup(e){const{width:t}=Xe({initialWidth:0,includeScrollbar:!1});return(n,a)=>(i(),c("div",{class:"vp-doc container",style:Ee(d(t)?{"--vp-offset":`calc(50% - ${d(t)/2}px)`}:{})},[h(n.$slots,"default",{},void 0,!0)],4))}}),Qt=x(Yt,[["__scopeId","data-v-8e2d4988"]]),Zt=g({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=I();return(a,o)=>{const l=J("Content");return i(),c("div",{class:M(["VPHome",{"external-link-icon-enabled":d(n).externalLinkIcon}])},[h(a.$slots,"home-hero-before",{},void 0,!0),y(Dt,null,{"home-hero-info-before":v(()=>[h(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[h(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[h(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[h(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[h(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),h(a.$slots,"home-hero-after",{},void 0,!0),h(a.$slots,"home-features-before",{},void 0,!0),y(Jt),h(a.$slots,"home-features-after",{},void 0,!0),d(t).markdownStyles!==!1?(i(),w(Qt,{key:0},{default:v(()=>[y(l)]),_:1})):(i(),w(l,{key:1}))],2)}}}),Xt=x(Zt,[["__scopeId","data-v-8b561e3d"]]),ea={},na={class:"VPPage"};function ta(e,t){const n=J("Content");return i(),c("div",na,[h(e.$slots,"page-top"),y(n),h(e.$slots,"page-bottom")])}const aa=x(ea,[["render",ta]]),oa=g({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=I(),{hasSidebar:a}=K();return(o,l)=>(i(),c("div",{class:M(["VPContent",{"has-sidebar":d(a),"is-home":d(n).layout==="home"}]),id:"VPContent"},[d(t).isNotFound?h(o.$slots,"not-found",{},()=>[y(wn)],!0,0):d(n).layout==="page"?(i(),w(aa,{key:1},{"page-top":v(()=>[h(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[h(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):d(n).layout==="home"?(i(),w(Xt,{key:2},{"home-hero-before":v(()=>[h(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[h(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[h(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[h(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[h(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[h(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[h(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[h(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[h(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):d(n).layout&&d(n).layout!=="doc"?(i(),w(F(d(n).layout),{key:3})):(i(),w(bt,{key:4},{"doc-top":v(()=>[h(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[h(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[h(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[h(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[h(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[h(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[h(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[h(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[h(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[h(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[h(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),sa=x(oa,[["__scopeId","data-v-1428d186"]]),ia={class:"container"},ra=["innerHTML"],la=["innerHTML"],ca=g({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=I(),{hasSidebar:a}=K();return(o,l)=>d(t).footer&&d(n).footer!==!1?(i(),c("footer",{key:0,class:M(["VPFooter",{"has-sidebar":d(a)}])},[s("div",ia,[d(t).footer.message?(i(),c("p",{key:0,class:"message",innerHTML:d(t).footer.message},null,8,ra)):f("",!0),d(t).footer.copyright?(i(),c("p",{key:1,class:"copyright",innerHTML:d(t).footer.copyright},null,8,la)):f("",!0)])],2)):f("",!0)}}),da=x(ca,[["__scopeId","data-v-e315a0ad"]]);function ua(){const{theme:e,frontmatter:t}=I(),n=Ie([]),a=b(()=>n.value.length>0);return se(()=>{n.value=Pe(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:a}}const pa={class:"menu-text"},ha={class:"header"},va={class:"outline"},ma=g({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=I(),a=P(!1),o=P(0),l=P(),r=P();function u(_){var A;(A=l.value)!=null&&A.contains(_.target)||(a.value=!1)}B(a,_=>{if(_){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),me("Escape",()=>{a.value=!1}),se(()=>{a.value=!1});function p(){a.value=!a.value,o.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function k(_){_.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),$e(()=>{a.value=!1}))}function T(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(_,A)=>(i(),c("div",{class:"VPLocalNavOutlineDropdown",style:Ee({"--vp-vh":o.value+"px"}),ref_key:"main",ref:l},[e.headers.length>0?(i(),c("button",{key:0,onClick:p,class:M({open:a.value})},[s("span",pa,m(d(Be)(d(n))),1),A[0]||(A[0]=s("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),c("button",{key:1,onClick:T},m(d(n).returnToTopLabel||"Return to top"),1)),y(ke,{name:"flyout"},{default:v(()=>[a.value?(i(),c("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:k},[s("div",ha,[s("a",{class:"top-link",href:"#",onClick:T},m(d(n).returnToTopLabel||"Return to top"),1)]),s("div",va,[y(Fe,{headers:e.headers},null,8,["headers"])])],512)):f("",!0)]),_:1})],4))}}),fa=x(ma,[["__scopeId","data-v-8a42e2b4"]]),ga={class:"container"},ba=["aria-expanded"],ya={class:"menu-text"},ka=g({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=I(),{hasSidebar:a}=K(),{headers:o}=ua(),{y:l}=Me(),r=P(0);j(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),se(()=>{o.value=Pe(n.value.outline??t.value.outline)});const u=b(()=>o.value.length===0),p=b(()=>u.value&&!a.value),k=b(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:u.value,fixed:p.value}));return(T,_)=>d(n).layout!=="home"&&(!p.value||d(l)>=r.value)?(i(),c("div",{key:0,class:M(k.value)},[s("div",ga,[d(a)?(i(),c("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:_[0]||(_[0]=A=>T.$emit("open-menu"))},[_[1]||(_[1]=s("span",{class:"vpi-align-left menu-icon"},null,-1)),s("span",ya,m(d(t).sidebarMenuLabel||"Menu"),1)],8,ba)):f("",!0),y(fa,{headers:d(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):f("",!0)}}),_a=x(ka,[["__scopeId","data-v-a6f0e41e"]]);function wa(){const e=P(!1);function t(){e.value=!0,window.addEventListener("resize",o)}function n(){e.value=!1,window.removeEventListener("resize",o)}function a(){e.value?n():t()}function o(){window.outerWidth>=768&&n()}const l=Z();return B(()=>l.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:a}}const $a={},Sa={class:"VPSwitch",type:"button",role:"switch"},Pa={class:"check"},xa={key:0,class:"icon"};function La(e,t){return i(),c("button",Sa,[s("span",Pa,[e.$slots.default?(i(),c("span",xa,[h(e.$slots,"default",{},void 0,!0)])):f("",!0)])])}const Ta=x($a,[["render",La],["__scopeId","data-v-1d5665e3"]]),Aa=g({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=I(),a=ie("toggle-appearance",()=>{t.value=!t.value}),o=P("");return we(()=>{o.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(l,r)=>(i(),w(Ta,{title:o.value,class:"VPSwitchAppearance","aria-checked":d(t),onClick:d(a)},{default:v(()=>[...r[0]||(r[0]=[s("span",{class:"vpi-sun sun"},null,-1),s("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),xe=x(Aa,[["__scopeId","data-v-5337faa4"]]),Ca={key:0,class:"VPNavBarAppearance"},Va=g({__name:"VPNavBarAppearance",setup(e){const{site:t}=I();return(n,a)=>d(t).appearance&&d(t).appearance!=="force-dark"&&d(t).appearance!=="force-auto"?(i(),c("div",Ca,[y(xe)])):f("",!0)}}),Na=x(Va,[["__scopeId","data-v-6c893767"]]),Le=P();let ze=!1,pe=0;function Ia(e){const t=P(!1);if(re){!ze&&Da(),pe++;const n=B(Le,a=>{var o,l,r;a===e.el.value||(o=e.el.value)!=null&&o.contains(a)?(t.value=!0,(l=e.onFocus)==null||l.call(e)):(t.value=!1,(r=e.onBlur)==null||r.call(e))});_e(()=>{n(),pe--,pe||Ea()})}return en(t)}function Da(){document.addEventListener("focusin",He),ze=!0,Le.value=document.activeElement}function Ea(){document.removeEventListener("focusin",He)}function He(){Le.value=document.activeElement}const Ma={class:"VPMenuLink"},Ra=["innerHTML"],Ua=g({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=I();return(n,a)=>(i(),c("div",Ma,[y(z,{class:M({active:d(q)(d(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,Ra)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ce=x(Ua,[["__scopeId","data-v-35975db6"]]),Oa={class:"VPMenuGroup"},Ba={key:0,class:"title"},Fa=g({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(i(),c("div",Oa,[e.text?(i(),c("p",Ba,m(e.text),1)):f("",!0),(i(!0),c(D,null,R(e.items,a=>(i(),c(D,null,["link"in a?(i(),w(ce,{key:0,item:a},null,8,["item"])):f("",!0)],64))),256))]))}}),za=x(Fa,[["__scopeId","data-v-69e747b5"]]),Ha={class:"VPMenu"},Ga={key:0,class:"items"},Ka=g({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(i(),c("div",Ha,[e.items?(i(),c("div",Ga,[(i(!0),c(D,null,R(e.items,a=>(i(),c(D,{key:JSON.stringify(a)},["link"in a?(i(),w(ce,{key:0,item:a},null,8,["item"])):"component"in a?(i(),w(F(a.component),W({key:1,ref_for:!0},a.props),null,16)):(i(),w(za,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):f("",!0),h(t.$slots,"default",{},void 0,!0)]))}}),Wa=x(Ka,[["__scopeId","data-v-b98bc113"]]),ja=["aria-expanded","aria-label"],qa={key:0,class:"text"},Ja=["innerHTML"],Ya={key:1,class:"vpi-more-horizontal icon"},Qa={class:"menu"},Za=g({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=P(!1),n=P();Ia({el:n,onBlur:a});function a(){t.value=!1}return(o,l)=>(i(),c("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:l[1]||(l[1]=r=>t.value=!0),onMouseleave:l[2]||(l[2]=r=>t.value=!1)},[s("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:l[0]||(l[0]=r=>t.value=!t.value)},[e.button||e.icon?(i(),c("span",qa,[e.icon?(i(),c("span",{key:0,class:M([e.icon,"option-icon"])},null,2)):f("",!0),e.button?(i(),c("span",{key:1,innerHTML:e.button},null,8,Ja)):f("",!0),l[3]||(l[3]=s("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),c("span",Ya))],8,ja),s("div",Qa,[y(Wa,{items:e.items},{default:v(()=>[h(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Te=x(Za,[["__scopeId","data-v-cf11d7a2"]]),Xa=["href","aria-label","innerHTML"],eo=g({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=P();j(async()=>{var l;await $e();const o=(l=n.value)==null?void 0:l.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const a=b(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(o,l)=>(i(),c("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,Xa))}}),no=x(eo,[["__scopeId","data-v-bd121fe5"]]),to={class:"VPSocialLinks"},ao=g({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(i(),c("div",to,[(i(!0),c(D,null,R(e.links,({link:a,icon:o,ariaLabel:l})=>(i(),w(no,{key:a,icon:o,link:a,ariaLabel:l},null,8,["icon","link","ariaLabel"]))),128))]))}}),Ae=x(ao,[["__scopeId","data-v-7bc22406"]]),oo={key:0,class:"group translations"},so={class:"trans-title"},io={key:1,class:"group"},ro={class:"item appearance"},lo={class:"label"},co={class:"appearance-action"},uo={key:2,class:"group"},po={class:"item social-links"},ho=g({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=I(),{localeLinks:a,currentLang:o}=X({correspondingLink:!0}),l=b(()=>a.value.length&&o.value.label||t.value.appearance||n.value.socialLinks);return(r,u)=>l.value?(i(),w(Te,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[d(a).length&&d(o).label?(i(),c("div",oo,[s("p",so,m(d(o).label),1),(i(!0),c(D,null,R(d(a),p=>(i(),w(ce,{key:p.link,item:p},null,8,["item"]))),128))])):f("",!0),d(t).appearance&&d(t).appearance!=="force-dark"&&d(t).appearance!=="force-auto"?(i(),c("div",io,[s("div",ro,[s("p",lo,m(d(n).darkModeSwitchLabel||"Appearance"),1),s("div",co,[y(xe)])])])):f("",!0),d(n).socialLinks?(i(),c("div",uo,[s("div",po,[y(Ae,{class:"social-links-list",links:d(n).socialLinks},null,8,["links"])])])):f("",!0)]),_:1})):f("",!0)}}),vo=x(ho,[["__scopeId","data-v-bb2aa2f0"]]),mo=["aria-expanded"],fo=g({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(i(),c("button",{type:"button",class:M(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>t.$emit("click"))},[...n[1]||(n[1]=[s("span",{class:"container"},[s("span",{class:"top"}),s("span",{class:"middle"}),s("span",{class:"bottom"})],-1)])],10,mo))}}),go=x(fo,[["__scopeId","data-v-e5dd9c1c"]]),bo=["innerHTML"],yo=g({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=I();return(n,a)=>(i(),w(z,{class:M({VPNavBarMenuLink:!0,active:d(q)(d(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,bo)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ko=x(yo,[["__scopeId","data-v-e56f3d57"]]),_o=g({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=I(),a=l=>"component"in l?!1:"link"in l?q(n.value.relativePath,l.link,!!t.item.activeMatch):l.items.some(a),o=b(()=>a(t.item));return(l,r)=>(i(),w(Te,{class:M({VPNavBarMenuGroup:!0,active:d(q)(d(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||o.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),wo={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},$o=g({__name:"VPNavBarMenu",setup(e){const{theme:t}=I();return(n,a)=>d(t).nav?(i(),c("nav",wo,[a[0]||(a[0]=s("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(i(!0),c(D,null,R(d(t).nav,o=>(i(),c(D,{key:JSON.stringify(o)},["link"in o?(i(),w(ko,{key:0,item:o},null,8,["item"])):"component"in o?(i(),w(F(o.component),W({key:1,ref_for:!0},o.props),null,16)):(i(),w(_o,{key:2,item:o},null,8,["item"]))],64))),128))])):f("",!0)}}),So=x($o,[["__scopeId","data-v-dc692963"]]);function Po(e){const{localeIndex:t,theme:n}=I();function a(o){var L,$,E;const l=o.split("."),r=(L=n.value.search)==null?void 0:L.options,u=r&&typeof r=="object",p=u&&((E=($=r.locales)==null?void 0:$[t.value])==null?void 0:E.translations)||null,k=u&&r.translations||null;let T=p,_=k,A=e;const C=l.pop();for(const V of l){let S=null;const N=A==null?void 0:A[V];N&&(S=A=N);const Y=_==null?void 0:_[V];Y&&(S=_=Y);const ue=T==null?void 0:T[V];ue&&(S=T=ue),N||(A=S),Y||(_=S),ue||(T=S)}return(T==null?void 0:T[C])??(_==null?void 0:_[C])??(A==null?void 0:A[C])??""}return a}const xo=["aria-label"],Lo={class:"DocSearch-Button-Container"},To={class:"DocSearch-Button-Placeholder"},Ce=g({__name:"VPNavBarSearchButton",setup(e){const n=Po({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,o)=>(i(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":d(n)("button.buttonAriaLabel")},[s("span",Lo,[o[0]||(o[0]=s("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),s("span",To,m(d(n)("button.buttonText")),1)]),o[1]||(o[1]=s("span",{class:"DocSearch-Button-Keys"},[s("kbd",{class:"DocSearch-Button-Key"}),s("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,xo))}}),Ao={class:"VPNavBarSearch"},Co={id:"local-search"},Vo={key:1,id:"docsearch"},No=g({__name:"VPNavBarSearch",setup(e){const t=nn(()=>tn(()=>import("./VPLocalSearchBox.DbAuNAS9.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:a}=I(),o=P(!1),l=P(!1);j(()=>{});function r(){o.value||(o.value=!0,setTimeout(u,16))}function u(){const _=new Event("keydown");_.key="k",_.metaKey=!0,window.dispatchEvent(_),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function p(_){const A=_.target,C=A.tagName;return A.isContentEditable||C==="INPUT"||C==="SELECT"||C==="TEXTAREA"}const k=P(!1);me("k",_=>{(_.ctrlKey||_.metaKey)&&(_.preventDefault(),k.value=!0)}),me("/",_=>{p(_)||(_.preventDefault(),k.value=!0)});const T="local";return(_,A)=>{var C;return i(),c("div",Ao,[d(T)==="local"?(i(),c(D,{key:0},[k.value?(i(),w(d(t),{key:0,onClose:A[0]||(A[0]=L=>k.value=!1)})):f("",!0),s("div",Co,[y(Ce,{onClick:A[1]||(A[1]=L=>k.value=!0)})])],64)):d(T)==="algolia"?(i(),c(D,{key:1},[o.value?(i(),w(d(n),{key:0,algolia:((C=d(a).search)==null?void 0:C.options)??d(a).algolia,onVnodeBeforeMount:A[2]||(A[2]=L=>l.value=!0)},null,8,["algolia"])):f("",!0),l.value?f("",!0):(i(),c("div",Vo,[y(Ce,{onClick:r})]))],64)):f("",!0)])}}}),Io=g({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=I();return(n,a)=>d(t).socialLinks?(i(),w(Ae,{key:0,class:"VPNavBarSocialLinks",links:d(t).socialLinks},null,8,["links"])):f("",!0)}}),Do=x(Io,[["__scopeId","data-v-0394ad82"]]),Eo=["href","rel","target"],Mo=["innerHTML"],Ro={key:2},Uo=g({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=I(),{hasSidebar:a}=K(),{currentLang:o}=X(),l=b(()=>{var p;return typeof n.value.logoLink=="string"?n.value.logoLink:(p=n.value.logoLink)==null?void 0:p.link}),r=b(()=>{var p;return typeof n.value.logoLink=="string"||(p=n.value.logoLink)==null?void 0:p.rel}),u=b(()=>{var p;return typeof n.value.logoLink=="string"||(p=n.value.logoLink)==null?void 0:p.target});return(p,k)=>(i(),c("div",{class:M(["VPNavBarTitle",{"has-sidebar":d(a)}])},[s("a",{class:"title",href:l.value??d(Se)(d(o).link),rel:r.value,target:u.value},[h(p.$slots,"nav-bar-title-before",{},void 0,!0),d(n).logo?(i(),w(ae,{key:0,class:"logo",image:d(n).logo},null,8,["image"])):f("",!0),d(n).siteTitle?(i(),c("span",{key:1,innerHTML:d(n).siteTitle},null,8,Mo)):d(n).siteTitle===void 0?(i(),c("span",Ro,m(d(t).title),1)):f("",!0),h(p.$slots,"nav-bar-title-after",{},void 0,!0)],8,Eo)],2))}}),Oo=x(Uo,[["__scopeId","data-v-1168a8e4"]]),Bo={class:"items"},Fo={class:"title"},zo=g({__name:"VPNavBarTranslations",setup(e){const{theme:t}=I(),{localeLinks:n,currentLang:a}=X({correspondingLink:!0});return(o,l)=>d(n).length&&d(a).label?(i(),w(Te,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:d(t).langMenuLabel||"Change language"},{default:v(()=>[s("div",Bo,[s("p",Fo,m(d(a).label),1),(i(!0),c(D,null,R(d(n),r=>(i(),w(ce,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):f("",!0)}}),Ho=x(zo,[["__scopeId","data-v-88af2de4"]]),Go={class:"wrapper"},Ko={class:"container"},Wo={class:"title"},jo={class:"content"},qo={class:"content-body"},Jo=g({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=Me(),{hasSidebar:a}=K(),{frontmatter:o}=I(),l=P({});return we(()=>{l.value={"has-sidebar":a.value,home:o.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(r,u)=>(i(),c("div",{class:M(["VPNavBar",l.value])},[s("div",Go,[s("div",Ko,[s("div",Wo,[y(Oo,null,{"nav-bar-title-before":v(()=>[h(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[h(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),s("div",jo,[s("div",qo,[h(r.$slots,"nav-bar-content-before",{},void 0,!0),y(No,{class:"search"}),y(So,{class:"menu"}),y(Ho,{class:"translations"}),y(Na,{class:"appearance"}),y(Do,{class:"social-links"}),y(vo,{class:"extra"}),h(r.$slots,"nav-bar-content-after",{},void 0,!0),y(go,{class:"hamburger",active:e.isScreenOpen,onClick:u[0]||(u[0]=p=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=s("div",{class:"divider"},[s("div",{class:"divider-line"})],-1))],2))}}),Yo=x(Jo,[["__scopeId","data-v-6aa21345"]]),Qo={key:0,class:"VPNavScreenAppearance"},Zo={class:"text"},Xo=g({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=I();return(a,o)=>d(t).appearance&&d(t).appearance!=="force-dark"&&d(t).appearance!=="force-auto"?(i(),c("div",Qo,[s("p",Zo,m(d(n).darkModeSwitchLabel||"Appearance"),1),y(xe)])):f("",!0)}}),es=x(Xo,[["__scopeId","data-v-b44890b2"]]),ns=["innerHTML"],ts=g({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=ie("close-screen");return(n,a)=>(i(),w(z,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:d(t)},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,ns)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),as=x(ts,[["__scopeId","data-v-df37e6dd"]]),os=["innerHTML"],ss=g({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=ie("close-screen");return(n,a)=>(i(),w(z,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:d(t)},{default:v(()=>[s("span",{innerHTML:e.item.text},null,8,os)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ge=x(ss,[["__scopeId","data-v-3e9c20e4"]]),is={class:"VPNavScreenMenuGroupSection"},rs={key:0,class:"title"},ls=g({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(i(),c("div",is,[e.text?(i(),c("p",rs,m(e.text),1)):f("",!0),(i(!0),c(D,null,R(e.items,a=>(i(),w(Ge,{key:a.text,item:a},null,8,["item"]))),128))]))}}),cs=x(ls,[["__scopeId","data-v-8133b170"]]),ds=["aria-controls","aria-expanded"],us=["innerHTML"],ps=["id"],hs={key:0,class:"item"},vs={key:1,class:"item"},ms={key:2,class:"group"},fs=g({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=P(!1),a=b(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function o(){n.value=!n.value}return(l,r)=>(i(),c("div",{class:M(["VPNavScreenMenuGroup",{open:n.value}])},[s("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:o},[s("span",{class:"button-text",innerHTML:e.text},null,8,us),r[0]||(r[0]=s("span",{class:"vpi-plus button-icon"},null,-1))],8,ds),s("div",{id:a.value,class:"items"},[(i(!0),c(D,null,R(e.items,u=>(i(),c(D,{key:JSON.stringify(u)},["link"in u?(i(),c("div",hs,[y(Ge,{item:u},null,8,["item"])])):"component"in u?(i(),c("div",vs,[(i(),w(F(u.component),W({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(i(),c("div",ms,[y(cs,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,ps)],2))}}),gs=x(fs,[["__scopeId","data-v-b9ab8c58"]]),bs={key:0,class:"VPNavScreenMenu"},ys=g({__name:"VPNavScreenMenu",setup(e){const{theme:t}=I();return(n,a)=>d(t).nav?(i(),c("nav",bs,[(i(!0),c(D,null,R(d(t).nav,o=>(i(),c(D,{key:JSON.stringify(o)},["link"in o?(i(),w(as,{key:0,item:o},null,8,["item"])):"component"in o?(i(),w(F(o.component),W({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(i(),w(gs,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):f("",!0)}}),ks=g({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=I();return(n,a)=>d(t).socialLinks?(i(),w(Ae,{key:0,class:"VPNavScreenSocialLinks",links:d(t).socialLinks},null,8,["links"])):f("",!0)}}),_s={class:"list"},ws=g({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=X({correspondingLink:!0}),a=P(!1);function o(){a.value=!a.value}return(l,r)=>d(t).length&&d(n).label?(i(),c("div",{key:0,class:M(["VPNavScreenTranslations",{open:a.value}])},[s("button",{class:"title",onClick:o},[r[0]||(r[0]=s("span",{class:"vpi-languages icon lang"},null,-1)),G(" "+m(d(n).label)+" ",1),r[1]||(r[1]=s("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),s("ul",_s,[(i(!0),c(D,null,R(d(t),u=>(i(),c("li",{key:u.link,class:"item"},[y(z,{class:"link",href:u.link},{default:v(()=>[G(m(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):f("",!0)}}),$s=x(ws,[["__scopeId","data-v-858fe1a4"]]),Ss={class:"container"},Ps=g({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=P(null),n=Re(re?document.body:null);return(a,o)=>(i(),w(ke,{name:"fade",onEnter:o[0]||(o[0]=l=>n.value=!0),onAfterLeave:o[1]||(o[1]=l=>n.value=!1)},{default:v(()=>[e.open?(i(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[s("div",Ss,[h(a.$slots,"nav-screen-content-before",{},void 0,!0),y(ys,{class:"menu"}),y($s,{class:"translations"}),y(es,{class:"appearance"}),y(ks,{class:"social-links"}),h(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):f("",!0)]),_:3}))}}),xs=x(Ps,[["__scopeId","data-v-f2779853"]]),Ls={key:0,class:"VPNav"},Ts=g({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:a}=wa(),{frontmatter:o}=I(),l=b(()=>o.value.navbar!==!1);return Ue("close-screen",n),oe(()=>{re&&document.documentElement.classList.toggle("hide-nav",!l.value)}),(r,u)=>l.value?(i(),c("header",Ls,[y(Yo,{"is-screen-open":d(t),onToggleScreen:d(a)},{"nav-bar-title-before":v(()=>[h(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[h(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[h(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[h(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),y(xs,{open:d(t)},{"nav-screen-content-before":v(()=>[h(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[h(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):f("",!0)}}),As=x(Ts,[["__scopeId","data-v-ae24b3ad"]]),Cs=["role","tabindex"],Vs={key:1,class:"items"},Ns=g({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:a,isLink:o,isActiveLink:l,hasActiveLink:r,hasChildren:u,toggle:p}=xn(b(()=>t.item)),k=b(()=>u.value?"section":"div"),T=b(()=>o.value?"a":"div"),_=b(()=>u.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),A=b(()=>o.value?void 0:"button"),C=b(()=>[[`level-${t.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":o.value},{"is-active":l.value},{"has-active":r.value}]);function L(E){"key"in E&&E.key!=="Enter"||!t.item.link&&p()}function $(){t.item.link&&p()}return(E,V)=>{const S=J("VPSidebarItem",!0);return i(),w(F(k.value),{class:M(["VPSidebarItem",C.value])},{default:v(()=>[e.item.text?(i(),c("div",W({key:0,class:"item",role:A.value},an(e.item.items?{click:L,keydown:L}:{},!0),{tabindex:e.item.items&&0}),[V[1]||(V[1]=s("div",{class:"indicator"},null,-1)),e.item.link?(i(),w(z,{key:0,tag:T.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:v(()=>[(i(),w(F(_.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),w(F(_.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(i(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:$,onKeydown:on($,["enter"]),tabindex:"0"},[...V[0]||(V[0]=[s("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):f("",!0)],16,Cs)):f("",!0),e.item.items&&e.item.items.length?(i(),c("div",Vs,[e.depth<5?(i(!0),c(D,{key:0},R(e.item.items,N=>(i(),w(S,{key:N.text,item:N,depth:e.depth+1},null,8,["item","depth"]))),128)):f("",!0)])):f("",!0)]),_:1},8,["class"])}}}),Is=x(Ns,[["__scopeId","data-v-b3fd67f8"]]),Ds=g({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=P(!0);let n=null;return j(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),le(()=>{n!=null&&(clearTimeout(n),n=null)}),(a,o)=>(i(!0),c(D,null,R(e.items,l=>(i(),c("div",{key:l.text,class:M(["group",{"no-transition":t.value}])},[y(Is,{item:l,depth:0},null,8,["item"])],2))),128))}}),Es=x(Ds,[["__scopeId","data-v-c40bc020"]]),Ms={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Rs=g({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=K(),a=e,o=P(null),l=Re(re?document.body:null);B([a,o],()=>{var u;a.open?(l.value=!0,(u=o.value)==null||u.focus()):l.value=!1},{immediate:!0,flush:"post"});const r=P(0);return B(t,()=>{r.value+=1},{deep:!0}),(u,p)=>d(n)?(i(),c("aside",{key:0,class:M(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:o,onClick:p[0]||(p[0]=sn(()=>{},["stop"]))},[p[2]||(p[2]=s("div",{class:"curtain"},null,-1)),s("nav",Ms,[p[1]||(p[1]=s("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),h(u.$slots,"sidebar-nav-before",{},void 0,!0),(i(),w(Es,{items:d(t),key:r.value},null,8,["items"])),h(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):f("",!0)}}),Us=x(Rs,[["__scopeId","data-v-319d5ca6"]]),Os=g({__name:"VPSkipLink",setup(e){const{theme:t}=I(),n=Z(),a=P();B(()=>n.path,()=>a.value.focus());function o({target:l}){const r=document.getElementById(decodeURIComponent(l.hash).slice(1));if(r){const u=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",u)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",u),r.focus(),window.scrollTo(0,0)}}return(l,r)=>(i(),c(D,null,[s("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),s("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},m(d(t).skipToContentLabel||"Skip to content"),1)],64))}}),Bs=x(Os,[["__scopeId","data-v-0b0ada53"]]),Fs=g({__name:"Layout",setup(e){const{isOpen:t,open:n,close:a}=K(),o=Z();B(()=>o.path,a),Pn(t,a);const{frontmatter:l}=I(),r=rn(),u=b(()=>!!r["home-hero-image"]);return Ue("hero-image-slot-exists",u),(p,k)=>{const T=J("Content");return d(l).layout!==!1?(i(),c("div",{key:0,class:M(["Layout",d(l).pageClass])},[h(p.$slots,"layout-top",{},void 0,!0),y(Bs),y(pn,{class:"backdrop",show:d(t),onClick:d(a)},null,8,["show","onClick"]),y(As,null,{"nav-bar-title-before":v(()=>[h(p.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[h(p.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[h(p.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[h(p.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[h(p.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[h(p.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),y(_a,{open:d(t),onOpenMenu:d(n)},null,8,["open","onOpenMenu"]),y(Us,{open:d(t)},{"sidebar-nav-before":v(()=>[h(p.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[h(p.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),y(sa,null,{"page-top":v(()=>[h(p.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[h(p.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[h(p.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[h(p.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[h(p.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[h(p.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[h(p.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[h(p.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[h(p.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[h(p.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[h(p.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[h(p.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[h(p.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[h(p.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[h(p.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[h(p.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[h(p.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[h(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[h(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[h(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[h(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[h(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[h(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),y(da),h(p.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),w(T,{key:1}))}}}),zs=x(Fs,[["__scopeId","data-v-5d98c3a5"]]),Hs={Layout:zs,enhanceApp:({app:e})=>{e.component("Badge",cn)}};function O(e){return[{id:"privacy",label:"Privacy Policy",navLabel:"Privacy",shortDescription:"How information is handled",symbol:"P",portalUrl:`/apps/${e}/privacy`,standaloneUrl:`/privacy/${e}`},{id:"terms",label:"Terms and Conditions",navLabel:"Terms",shortDescription:"Rules for using the app",symbol:"T",portalUrl:`/apps/${e}/terms`,standaloneUrl:`/terms/${e}`},{id:"support",label:"Support",shortDescription:"Help and troubleshooting",symbol:"?",portalUrl:`/apps/${e}/support`,standaloneUrl:`/support/${e}`},{id:"data-collection",label:"Data Collection",navLabel:"Data collection",shortDescription:"A summary of app data practices",symbol:"D",portalUrl:`/apps/${e}/data-collection`,standaloneUrl:`/data-collection/${e}`},{id:"data-deletion",label:"Data Deletion",navLabel:"Data deletion",shortDescription:"How to delete app data",symbol:"X",portalUrl:`/apps/${e}/data-deletion`,standaloneUrl:`/data-deletion/${e}`},{id:"contact",label:"App Contact",navLabel:"Contact",shortDescription:"App-specific contact information",symbol:"@",portalUrl:`/apps/${e}/contact`,standaloneUrl:`/contact/${e}`}]}const Q=[{id:"spendzo",name:"Spendzo",shortDescription:"A personal expense and budget-tracking application.",icon:"/apps/spendzo/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.spendzo.app",webLinks:[{label:"Open Spendzo in browser",url:"https://actionanand.github.io/spendzo/"}],documents:O("spendzo")},{id:"stillora",name:"Stillora",shortDescription:"A relaxation, meditation and ambient-sound application.",icon:"/apps/stillora/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.stillora.app",webLinks:[{label:"Open Stillora in browser",url:"https://actionanand.github.io/stillora/"}],documents:O("stillora")},{id:"vault-nest",name:"Vault Nest",shortDescription:"A private, offline-first password and sensitive-information manager.",icon:"/apps/vault-nest/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.vaultnest.app",webLinks:[{label:"Open Vault Nest in browser",url:"https://actionanand.github.io/vault-nest/"}],githubUrl:"https://github.com/actionanand/vault-nest",documents:O("vault-nest")},{id:"card-nest",name:"Card Nest",shortDescription:"A private, offline-first credit-card and personal-finance organizer.",icon:"/apps/card-nest/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.cardnest.app",webLinks:[{label:"Open Card Nest in browser",url:"https://actionanand.github.io/card-nest/"}],githubUrl:"https://github.com/actionanand/card-nest",documents:O("card-nest")},{id:"link-deck",name:"Link Deck",shortDescription:"A private, offline-first bookmark manager with profiles and nested folders.",icon:"/apps/link-deck/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.linkdeck.app",webLinks:[{label:"Open Link Deck in browser",url:"https://actionanand.github.io/link-deck/"}],githubUrl:"https://github.com/actionanand/link-deck",documents:O("link-deck")},{id:"who-called",name:"Who Called",shortDescription:"A private, offline contact organizer with optional call-history tools.",icon:"/apps/who-called/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.whocalled.app",webLinks:[{label:"Open Who Called in browser",url:"https://actionanand.github.io/who-called/"}],githubUrl:"https://github.com/actionanand/who-called",documents:O("who-called")},{id:"arflix",name:"ARFlix",shortDescription:"A movie and TV discovery app with TMDb details and a curated collection.",icon:"/apps/arflix/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.arflix.app",webLinks:[{label:"Open ARFlix in browser",url:"https://actionanand.github.io/arflix/"},{label:"Open legacy ARFlix in browser",url:"https://actionanand.github.io/ar-flix/"}],githubUrl:"https://github.com/actionanand/arflix",documents:O("arflix")},{id:"office-pulse",name:"Office Pulse",shortDescription:"A work dashboard for attendance, schedules, tasks, notes, and utilities.",icon:"/apps/office-pulse/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open Office Pulse in browser",url:"https://actionanand.github.io/office-pulse/"}],githubUrl:"https://github.com/actionanand/office-pulse",documents:O("office-pulse")},{id:"personix",name:"Personix",shortDescription:"A private personal organizer for links, family records, vehicles, notes, and checklists.",icon:"/apps/personix/icon.png",platform:"android",releasedToPlayStore:!0,playStoreUrl:"https://play.google.com/store/apps/details?id=com.actionanand.personix.app",webLinks:[{label:"Open Personix in browser",url:"https://actionanand.github.io/personix/"}],githubUrl:"https://github.com/actionanand/personix",documents:O("personix")},{id:"expenzo",name:"Expenzo",shortDescription:"A finance dashboard for expenses, budgets, savings, wishlists, and checklists.",icon:"/apps/expenzo/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open Expenzo in browser",url:"https://actionanand.github.io/expenzo/"}],githubUrl:"https://github.com/actionanand/expenzo",documents:O("expenzo")},{id:"ar-tamil-jathagam",name:"AR Tamil Jathagam",shortDescription:"A Tamil and English astrology app for horoscopes, Panchanga, and compatibility.",icon:"/apps/ar-tamil-jathagam/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open AR Tamil Jathagam in browser",url:"https://ar-tamil-jathagam.pages.dev/"}],githubUrl:"https://github.com/actionanand/ar-tamil-jathagam",documents:O("ar-tamil-jathagam")},{id:"lingua-log",name:"Lingua Log",shortDescription:"A multilingual sentence, translation, explanation, and learning-resource organizer.",icon:"/apps/lingua-log/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open Lingua Log in browser",url:"https://actionanand.github.io/lingua-log/"}],githubUrl:"https://github.com/actionanand/lingua-log",documents:O("lingua-log")},{id:"scrollix",name:"Scrollix",shortDescription:"A curated, scrollable feed for videos, social posts, and web articles.",icon:"/apps/scrollix/icon.png",platform:"android",releasedToPlayStore:!1,webLinks:[{label:"Open Scrollix in browser",url:"https://actionanand.github.io/scrollix/"}],githubUrl:"https://github.com/actionanand/scrollix",documents:O("scrollix")},{id:"arblogz",name:"AR Blogz",shortDescription:"A multilingual personal blog about learning, culture, health, food, and discoveries.",icon:"/apps/arblogz/icon.png",platform:"web",releasedToPlayStore:!1,webLinks:[{label:"Open AR Blogz on Cloudflare Pages",url:"https://arblogz.pages.dev/"},{label:"Open AR Blogz on GitHub Pages",url:"https://actionanand.github.io/arblogz/"}],githubUrl:"https://github.com/actionanand/arblogz",documents:O("arblogz")},{id:"artamizhsolai",name:"AR Tamizh Solai",shortDescription:"A Tamil literature publication exploring classics, poetry, language, and culture.",platform:"web",releasedToPlayStore:!1,webLinks:[{label:"Open AR Tamizh Solai on Cloudflare Pages",url:"https://artamizhsolai.pages.dev/"},{label:"Open AR Tamizh Solai on GitHub Pages",url:"https://actionanand.github.io/artamizhsolai/"}],githubUrl:"https://github.com/actionanand/artamizhsolai",documents:O("artamizhsolai")}];var Ne;for(const e of Q){if((((Ne=e.webLinks)==null?void 0:Ne.length)??0)>3)throw new Error(`${e.id} supports a maximum of three web links`);if(e.playStoreUrl&&!e.releasedToPlayStore)throw new Error(`${e.id} cannot have a Play Store URL before release`)}function de(e){return Q.find(t=>t.id===e)}const Gs={class:"breadcrumbs","aria-label":"Breadcrumb"},Ks=["href"],Ws=["href"],js={key:0},qs=["href"],Js={key:1,"aria-current":"page"},Ke=g({__name:"AppBreadcrumbs",props:{appId:{},current:{}},setup(e){const t=e,n=b(()=>t.appId?de(t.appId):void 0);return(a,o)=>(i(),c("nav",Gs,[s("ol",null,[s("li",null,[s("a",{href:d(U)("/")},"Home",8,Ks)]),s("li",null,[s("a",{href:d(U)("/apps/")},"Apps",8,Ws)]),n.value?(i(),c("li",js,[s("a",{href:d(U)(`/apps/${n.value.id}/`)},m(n.value.name),9,qs)])):f("",!0),e.current?(i(),c("li",Js,m(e.current),1)):f("",!0)])]))}}),Ys={class:"app-card"},Qs={class:"app-card__heading"},Zs={class:"app-icon","aria-hidden":"true"},Xs=["src"],ei={key:1},ni={class:"app-card__badges"},ti={class:"app-badge"},ai=["href"],oi=["aria-label"],si=["href"],ii=["href"],ri=["aria-label"],li=["href"],We=g({__name:"AppCard",props:{app:{}},setup(e){const t=e,n=P(!1),a=b(()=>t.app.name.split(/\s+/).map(o=>o[0]).join("").slice(0,2).toUpperCase());return(o,l)=>{var r;return i(),c("article",Ys,[s("div",Qs,[s("div",Zs,[e.app.icon&&!n.value?(i(),c("img",{key:0,src:d(U)(e.app.icon),alt:"",onError:l[0]||(l[0]=u=>n.value=!0)},null,40,Xs)):(i(),c("span",ei,m(a.value),1))]),s("div",null,[s("div",ni,[s("span",ti,m(e.app.platform==="android"?"Android":"Web"),1),e.app.platform==="android"?(i(),c("span",{key:0,class:M(["app-badge",e.app.releasedToPlayStore?"is-released":"is-unreleased"])},m(e.app.releasedToPlayStore?"Play Store released":"Not released"),3)):f("",!0)]),s("h3",null,[s("a",{href:d(U)(`/apps/${e.app.id}/`)},m(e.app.name),9,ai)]),s("p",null,m(e.app.shortDescription),1)])]),e.app.playStoreUrl||(r=e.app.webLinks)!=null&&r.length?(i(),c("div",{key:0,class:"app-card__official-links","aria-label":`${e.app.name} official app links`},[e.app.playStoreUrl?(i(),c("a",{key:0,href:e.app.playStoreUrl,target:"_blank",rel:"noopener noreferrer"}," Google Play ",8,si)):f("",!0),(i(!0),c(D,null,R(e.app.webLinks,u=>(i(),c("a",{key:u.url,href:u.url,target:"_blank",rel:"noopener noreferrer"},m(u.label),9,ii))),128))],8,oi)):f("",!0),s("div",{class:"app-card__links","aria-label":`${e.app.name} resources`},[(i(!0),c(D,null,R(e.app.documents,u=>(i(),c("a",{key:u.id,href:d(U)(u.portalUrl)},m(u.navLabel||u.label),9,li))),128))],8,ri)])}}}),ci={class:"app-directory","aria-labelledby":"app-directory-title"},di={class:"section-heading"},ui={class:"app-filter"},pi={class:"directory-controls"},hi={class:"filter-group"},vi={class:"segmented-control"},mi=["aria-pressed","onClick"],fi={key:0,class:"filter-group"},gi={class:"segmented-control"},bi=["aria-pressed","onClick"],yi={class:"directory-summary","aria-live":"polite"},ki={key:0,class:"app-grid"},_i={key:1,class:"empty-state"},wi={key:2,class:"app-pagination","aria-label":"Application pages"},$i={class:"pagination-settings"},Si={class:"page-size-control"},Pi=["value"],xi={class:"pagination-range"},Li={class:"pagination-navigation"},Ti=["disabled"],Ai={key:0,class:"pagination-pages"},Ci={key:0,class:"pagination-ellipsis","aria-hidden":"true"},Vi=["aria-current","aria-label","onClick"],Ni=["disabled"],Ii=g({__name:"AppGrid",setup(e){const t=[10,25,50,100],n=P(""),a=P("android"),o=P("released"),l=P(10),r=P(1),u=b(()=>{const V=n.value.trim().toLocaleLowerCase();return Q.filter(S=>a.value!=="all"&&S.platform!==a.value||a.value==="android"&&(o.value==="released"&&!S.releasedToPlayStore||o.value==="unreleased"&&S.releasedToPlayStore)?!1:!V||`${S.name} ${S.shortDescription}`.toLocaleLowerCase().includes(V))}),p=b(()=>Math.max(1,Math.ceil(u.value.length/l.value))),k=b(()=>(r.value-1)*l.value),T=b(()=>u.value.slice(k.value,k.value+l.value)),_=b(()=>u.value.length?k.value+1:0),A=b(()=>Math.min(k.value+l.value,u.value.length)),C=b(()=>{const V=p.value;return V<=7?Array.from({length:V},(S,N)=>N+1):r.value<=3?[1,2,3,"ellipsis-end",V-1,V]:r.value>=V-2?[1,2,"ellipsis-start",V-2,V-1,V]:[1,"ellipsis-start",r.value-1,r.value,r.value+1,"ellipsis-end",V]});B([n,a,o,l],()=>{r.value=1}),B(p,V=>{r.value>V&&(r.value=V)});function L(V){a.value=V}function $(V){var S;r.value=Math.min(Math.max(V,1),p.value),(S=document.querySelector("#app-directory-title"))==null||S.scrollIntoView({behavior:"smooth",block:"start"})}function E(){n.value="",a.value="android",o.value="released",l.value=10}return(V,S)=>(i(),c("section",ci,[s("div",di,[S[6]||(S[6]=s("div",null,[s("p",{class:"eyebrow"},"Application directory"),s("h2",{id:"app-directory-title"},"Find an app")],-1)),s("label",ui,[S[4]||(S[4]=s("span",{class:"sr-only"},"Search applications",-1)),S[5]||(S[5]=s("span",{"aria-hidden":"true"},"⌕",-1)),te(s("input",{"onUpdate:modelValue":S[0]||(S[0]=N=>n.value=N),type:"search",placeholder:"Search apps",autocomplete:"off"},null,512),[[ln,n.value]])])]),s("div",pi,[s("fieldset",hi,[S[7]||(S[7]=s("legend",null,"App category",-1)),s("div",vi,[(i(),c(D,null,R([{value:"all",label:"All"},{value:"web",label:"Web apps"},{value:"android",label:"Android apps"}],N=>s("button",{key:N.value,type:"button","aria-pressed":a.value===N.value,onClick:Y=>L(N.value)},m(N.label),9,mi)),64))])]),a.value==="android"?(i(),c("fieldset",fi,[S[8]||(S[8]=s("legend",null,"Play Store status",-1)),s("div",gi,[(i(),c(D,null,R([{value:"released",label:"Released"},{value:"unreleased",label:"Not released"},{value:"all",label:"All statuses"}],N=>s("button",{key:N.value,type:"button","aria-pressed":o.value===N.value,onClick:Y=>o.value=N.value},m(N.label),9,bi)),64))])])):f("",!0)]),s("div",yi,[s("p",null,[s("strong",null,m(_.value)+"–"+m(A.value),1),G(" of "+m(u.value.length)+" "+m(u.value.length===1?"application":"applications"),1)]),n.value||a.value!=="android"||o.value!=="released"||l.value!==10?(i(),c("button",{key:0,type:"button",onClick:E}," Reset filters ")):f("",!0)]),T.value.length?(i(),c("div",ki,[(i(!0),c(D,null,R(T.value,N=>(i(),w(We,{key:N.id,app:N},null,8,["app"]))),128))])):(i(),c("div",_i,[S[9]||(S[9]=s("h3",null,"No matching apps",-1)),S[10]||(S[10]=s("p",null,"Try a different search, category, or release status.",-1)),s("button",{type:"button",onClick:E},"Show released Android apps")])),u.value.length?(i(),c("nav",wi,[s("div",$i,[s("label",Si,[S[11]||(S[11]=s("span",null,"Items per page:",-1)),te(s("select",{"onUpdate:modelValue":S[1]||(S[1]=N=>l.value=N),"aria-label":"Items per page"},[(i(),c(D,null,R(t,N=>s("option",{key:N,value:N},m(N),9,Pi)),64))],512),[[fe,l.value,void 0,{number:!0}]])]),s("span",xi,m(_.value)+"–"+m(A.value)+" of "+m(u.value.length),1)]),s("div",Li,[s("button",{type:"button",class:"pagination-direction",disabled:r.value===1,"aria-label":"Previous page",onClick:S[2]||(S[2]=N=>$(r.value-1))},[...S[12]||(S[12]=[s("span",{"aria-hidden":"true"},"‹",-1)])],8,Ti),p.value>1?(i(),c("div",Ai,[(i(!0),c(D,null,R(C.value,N=>(i(),c(D,{key:N},[typeof N!="number"?(i(),c("span",Ci,"…")):(i(),c("button",{key:1,type:"button",class:M({"is-current":r.value===N}),"aria-current":r.value===N?"page":void 0,"aria-label":`Page ${N}`,onClick:Y=>$(N)},m(N),11,Vi))],64))),128))])):f("",!0),s("button",{type:"button",class:"pagination-direction",disabled:r.value===p.value,"aria-label":"Next page",onClick:S[3]||(S[3]=N=>$(r.value+1))},[...S[13]||(S[13]=[s("span",{"aria-hidden":"true"},"›",-1)])],8,Ni)])])):f("",!0)]))}}),Di=["aria-label"],Ei=["href","aria-current"],je=g({__name:"AppSubnav",props:{appId:{}},setup(e){const t=e,n=Z(),a=b(()=>de(t.appId)),o=b(()=>a.value?[{label:"Overview",href:`/apps/${a.value.id}/`},{label:a.value.platform==="android"?"Store listing":"Descriptions",href:`/apps/${a.value.id}/store-listings`},...a.value.platform==="android"?[{label:"Release notes",href:`/apps/${a.value.id}/release-notes`}]:[],...a.value.documents.map(r=>({label:r.navLabel||r.label,href:r.portalUrl}))]:[]);function l(r){return n.path.replace(/\/$/,"")===r.replace(/\/$/,"")}return(r,u)=>a.value?(i(),c("nav",{key:0,class:"app-subnav","aria-label":`${a.value.name} pages`},[(i(!0),c(D,null,R(o.value,p=>(i(),c("a",{key:p.href,href:d(U)(p.href),"aria-current":l(p.href)?"page":void 0},m(p.label),9,Ei))),128))],8,Di)):f("",!0)}}),Mi=["href","aria-label"],ne=g({__name:"ExternalLinkButton",props:{href:{},label:{},variant:{}},setup(e){return(t,n)=>(i(),c("a",{class:M(["external-button",e.variant==="primary"?"is-primary":"is-secondary"]),href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${e.label} (opens in a new tab)`},[s("span",null,m(e.label),1)],10,Mi))}}),Ri={key:0,class:"app-overview"},Ui={class:"app-overview__hero"},Oi={class:"app-icon app-icon--large","aria-hidden":"true"},Bi=["src"],Fi={key:1},zi={class:"app-overview__badges"},Hi={class:"app-badge"},Gi={"aria-labelledby":"legal-support-heading"},Ki={class:"resource-grid"},Wi=["href"],ji={class:"resource-card__icon","aria-hidden":"true"},qi={"aria-labelledby":"publishing-heading"},Ji={id:"publishing-heading"},Yi={class:"resource-grid"},Qi=["href"],Zi=["href"],Xi={key:0,"aria-labelledby":"official-links-heading"},er={class:"button-row"},nr={key:1,class:"empty-state"},tr=g({__name:"AppOverview",props:{appId:{}},setup(e){const t=e,n=b(()=>de(t.appId)),a=P(!1),o=b(()=>n.value?n.value.name.split(/\s+/).map(l=>l[0]).join("").slice(0,2).toUpperCase():"");return(l,r)=>{var u;return n.value?(i(),c("div",Ri,[y(Ke,{"app-id":n.value.id,current:"Overview"},null,8,["app-id"]),y(je,{"app-id":n.value.id},null,8,["app-id"]),s("header",Ui,[s("div",Oi,[n.value.icon&&!a.value?(i(),c("img",{key:0,src:d(U)(n.value.icon),alt:"",onError:r[0]||(r[0]=p=>a.value=!0)},null,40,Bi)):(i(),c("span",Fi,m(o.value),1))]),s("div",null,[r[1]||(r[1]=s("p",{class:"eyebrow"},"App information",-1)),s("h1",null,m(n.value.name),1),s("p",null,m(n.value.shortDescription),1),s("div",zi,[s("span",Hi,m(n.value.platform==="android"?"Android app":"Web app"),1),n.value.platform==="android"?(i(),c("span",{key:0,class:M(["app-badge",n.value.releasedToPlayStore?"is-released":"is-unreleased"])},m(n.value.releasedToPlayStore?"Released on Google Play":"Not released on Google Play"),3)):f("",!0)])])]),s("section",Gi,[r[3]||(r[3]=s("h2",{id:"legal-support-heading"},"Legal and support",-1)),s("div",Ki,[(i(!0),c(D,null,R(n.value.documents,p=>(i(),c("a",{key:p.id,class:"resource-card",href:d(U)(p.portalUrl)},[s("span",ji,m(p.symbol),1),s("span",null,[s("strong",null,m(p.label),1),s("small",null,m(p.shortDescription),1)]),r[2]||(r[2]=s("span",{"aria-hidden":"true"},"->",-1))],8,Wi))),128))])]),s("section",qi,[s("h2",Ji,m(n.value.platform==="android"?"Google Play publishing":"Publishing copy"),1),s("div",Yi,[s("a",{class:"resource-card",href:d(U)(`/apps/${n.value.id}/store-listings`)},[r[5]||(r[5]=s("span",{class:"resource-card__icon","aria-hidden":"true"},"A",-1)),s("span",null,[s("strong",null,m(n.value.platform==="android"?"Store listing":"Descriptions"),1),r[4]||(r[4]=s("small",null,"Copy the short and full descriptions",-1))]),r[6]||(r[6]=s("span",{"aria-hidden":"true"},"->",-1))],8,Qi),n.value.platform==="android"?(i(),c("a",{key:0,class:"resource-card",href:d(U)(`/apps/${n.value.id}/release-notes`)},[...r[7]||(r[7]=[s("span",{class:"resource-card__icon","aria-hidden":"true"},"R",-1),s("span",null,[s("strong",null,"Release notes"),s("small",null,"Format localized notes for Play Console")],-1),s("span",{"aria-hidden":"true"},"->",-1)])],8,Zi)):f("",!0)])]),n.value.playStoreUrl||(u=n.value.webLinks)!=null&&u.length||n.value.githubUrl?(i(),c("section",Xi,[r[8]||(r[8]=s("h2",{id:"official-links-heading"},"Official links",-1)),s("div",er,[n.value.playStoreUrl?(i(),w(ne,{key:0,href:n.value.playStoreUrl,label:"View on Google Play",variant:"primary"},null,8,["href"])):f("",!0),(i(!0),c(D,null,R(n.value.webLinks,p=>(i(),w(ne,{key:p.url,href:p.url,label:p.label,variant:"secondary"},null,8,["href","label"]))),128)),n.value.githubUrl?(i(),w(ne,{key:1,href:n.value.githubUrl,label:"View on GitHub",variant:"secondary"},null,8,["href"])):f("",!0)])])):f("",!0)])):(i(),c("div",nr,[...r[9]||(r[9]=[s("h1",null,"Application not found",-1),s("p",null,"Check the app ID in the page component.",-1)])]))}}}),H={title:"Policy Hub",description:"One place for every app’s privacy policy, support, and legal information.",productionDomain:"",developerName:"Anand Raja",generalSupportEmail:"anand.official.in@gmail.com",privacyEmail:"anand.official.in@gmail.com",githubUrl:"",playStoreDeveloperUrl:"https://play.google.com/store/apps/developer?id=actionanand"},ar={class:"contact-list"},or=["href"],sr=["href"],ir={key:0},rr=["href"],lr={key:1},cr=["href"],dr=g({__name:"ContactDetails",setup(e){return(t,n)=>(i(),c("dl",ar,[s("div",null,[n[0]||(n[0]=s("dt",null,"Developer",-1)),s("dd",null,m(d(H).developerName),1)]),s("div",null,[n[1]||(n[1]=s("dt",null,"General support",-1)),s("dd",null,[s("a",{href:`mailto:${d(H).generalSupportEmail}`},m(d(H).generalSupportEmail),9,or)])]),s("div",null,[n[2]||(n[2]=s("dt",null,"Privacy enquiries",-1)),s("dd",null,[s("a",{href:`mailto:${d(H).privacyEmail}`},m(d(H).privacyEmail),9,sr)])]),d(H).githubUrl?(i(),c("div",ir,[n[3]||(n[3]=s("dt",null,"GitHub",-1)),s("dd",null,[s("a",{href:d(H).githubUrl,target:"_blank",rel:"noopener noreferrer"}," Developer profile ",8,rr)])])):f("",!0),d(H).playStoreDeveloperUrl?(i(),c("div",lr,[n[4]||(n[4]=s("dt",null,"Google Play",-1)),s("dd",null,[s("a",{href:d(H).playStoreDeveloperUrl,target:"_blank",rel:"noopener noreferrer"}," Developer profile ",8,cr)])])):f("",!0)]))}}),ur={class:"copy-policy"},pr={"aria-hidden":"true"},hr={class:"sr-only","aria-live":"polite"},vr={key:0,class:"copy-policy__fallback"},mr=["for"],fr=["id","value"],gr=g({__name:"CopyStandaloneUrl",props:{path:{},label:{default:"Copy standalone URL"},copiedLabel:{default:"Standalone URL copied"},documentName:{default:"standalone document"}},setup(e){const t=e,n=P(t.label),a=P(""),o=P(!1),l=P(),r=P(!1);let u;const p=b(()=>`standalone-url-${t.path.replace(/\W/g,"-")}`),k=b(()=>typeof window>"u"?U(t.path):new URL(U(t.path),window.location.origin).toString());function T(C){const L=document.createElement("textarea");L.value=C,L.setAttribute("readonly",""),L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select();let $=!1;try{$=document.execCommand("copy")}finally{document.body.removeChild(L)}return $}function _(){u&&clearTimeout(u),u=setTimeout(()=>{n.value=t.label,a.value="",r.value=!1},2400)}async function A(){var L,$,E,V,S;if(o.value){(L=l.value)==null||L.focus(),($=l.value)==null||$.select();return}let C=!1;try{(E=navigator.clipboard)!=null&&E.writeText&&(await navigator.clipboard.writeText(k.value),C=!0)}catch{C=!1}if(C||(C=T(k.value)),C){r.value=!0,n.value=t.copiedLabel,a.value=`${t.documentName} URL copied to clipboard.`,_();return}o.value=!0,n.value="Select standalone URL",a.value=`Automatic copy is unavailable. The ${t.documentName} URL is ready to select and copy.`,await $e(),(V=l.value)==null||V.focus(),(S=l.value)==null||S.select()}return le(()=>{u&&clearTimeout(u)}),(C,L)=>(i(),c("div",ur,[s("button",{class:"copy-policy__button",type:"button",onClick:A},[s("span",pr,m(r.value?"OK":"URL"),1),G(" "+m(n.value),1)]),s("p",hr,m(a.value),1),o.value?(i(),c("div",vr,[s("label",{for:p.value},"Copy this URL manually",8,mr),s("input",{id:p.value,ref_key:"fallbackInput",ref:l,value:k.value,readonly:"",onFocus:L[0]||(L[0]=$=>{var E;return(E=l.value)==null?void 0:E.select()})},null,40,fr)])):f("",!0)]))}}),br=`---
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
`,yr=`---
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
`,kr=`---
shortDescription: Secure offline password manager with encryption, backups and biometric unlock.
---

Vault Nest is a private, offline-first password manager for storing credentials and sensitive information on your device.

Create one encrypted vault for logins, secure notes, identities, Wi-Fi credentials, and custom records. Organize entries with labels, favorites, archives, reusable templates, and Trash.

Strong Local Encryption

• AES-256-GCM encryption protects sensitive vault records
• A unique vault key is wrapped using a key derived from your master password
• Your master password is not stored
• Automatic locking can protect the vault after inactivity or when the app enters the background
• Optional Android biometric unlock uses Android Keystore protection

Credential Tools

• Generate strong passwords with configurable length and character options
• Review password strength locally
• Store usernames, passwords, websites, PINs, OTP secrets, backup codes, notes, and custom fields
• Copy selected values with automatic clipboard clearing attempted after five minutes
• Add optional expiry reminders for saved credentials

Backup and Portability

Create an encrypted .vaultpack backup protected by a separate passphrase, then restore it when needed. For migration to another password manager, you can deliberately export a plaintext CSV after acknowledging its security risk.

Optional Android Protection

Enable screenshot protection on supported screens. You can also choose opt-in intrusion evidence, which uses the front camera after repeated failed unlock attempts and stores the captured image encrypted in private app storage.

Private by Design

Vault Nest has no developer account, cloud vault, advertisements, analytics, or trackers. Core vault features work without an internet connection. Optional website-icon retrieval connects only to websites saved in your vault to download their artwork.

Important: Vault Nest cannot recover your master password or decrypt your vault. Keep the master password safe and maintain tested encrypted backups.
`,_r=`---
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
`,wr=`---
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
`,$r=`---
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
`,Sr=`---
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
`,Pr=`---
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
`,xr=`---
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
`,Lr=`---
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
`,Tr=`---
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
`,Ar=`---
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
`,Cr=`---
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
`,Vr=`---
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
`,Nr=`---
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
`,Ir={spendzo:br,stillora:yr,"vault-nest":kr,"card-nest":_r,"link-deck":wr,"who-called":$r,arflix:Sr,"office-pulse":Pr,personix:xr,expenzo:Lr,"ar-tamil-jathagam":Tr,"lingua-log":Ar,scrollix:Cr,arblogz:Vr,artamizhsolai:Nr};function Dr(e,t){const n=e.match(/^shortDescription:\s*(.+)$/m);if(!n)throw new Error(`Missing shortDescription in ${t}/store-listing.md`);const a=n[1].trim();return a.startsWith('"')&&a.endsWith('"')?JSON.parse(a):a.startsWith("'")&&a.endsWith("'")?a.slice(1,-1).replace(/''/g,"'"):a}function Er(e,t){const a=t.replace(/\r\n/g,`
`).match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!a)throw new Error(`Invalid frontmatter in ${e}/store-listing.md`);return{appId:e,shortDescription:Dr(a[1],e),fullDescription:a[2].trim()}}const Mr=Object.entries(Ir).map(([e,t])=>Er(e,t));function Rr(e){const t=new Set(Q.map(o=>o.id)),n=new Set;for(const o of e){if(!t.has(o.appId))throw new Error(`Store listing references unknown app: ${o.appId}`);if(n.has(o.appId))throw new Error(`Duplicate store listing for app: ${o.appId}`);if(!o.shortDescription.trim()||o.shortDescription.length>80)throw new Error(`${o.appId} short description must contain 1–80 characters`);if(!o.fullDescription.trim()||o.fullDescription.length>4e3)throw new Error(`${o.appId} full description must contain 1–4000 characters`);n.add(o.appId)}const a=Q.find(o=>!n.has(o.id));if(a)throw new Error(`Missing store listing for app: ${a.id}`);return e}const Ur=Rr(Mr);function Or(e){return Ur.find(t=>t.appId===e)}const Br={class:"listing-field"},Fr={class:"listing-field__header"},zr={class:"listing-field__count"},Hr=["aria-label","rows","value"],Gr={class:"visually-hidden","aria-live":"polite"},Ve=g({__name:"ListingTextField",props:{label:{},value:{},limit:{},rows:{}},setup(e){const t=e,n=P(),a=P("");let o;const l=b(()=>t.value.length);async function r(){var u,p;try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(t.value);else{if(!n.value)throw new Error("Text field is unavailable");if(n.value.focus(),n.value.select(),!document.execCommand("copy"))throw new Error("Copy was rejected")}a.value="Copied"}catch{(u=n.value)==null||u.focus(),(p=n.value)==null||p.select(),a.value="Select the text and copy it manually"}o&&clearTimeout(o),o=setTimeout(()=>{a.value=""},2500)}return le(()=>{o&&clearTimeout(o)}),(u,p)=>(i(),c("section",Br,[s("div",Fr,[s("div",null,[s("h3",null,m(e.label),1),s("span",zr,m(l.value)+" / "+m(e.limit)+" characters ",1)]),s("button",{class:"listing-copy-button",type:"button",onClick:r},m(a.value==="Copied"?"Copied":"Copy"),1)]),s("textarea",{ref_key:"textarea",ref:n,class:"listing-field__text","aria-label":`${e.label}, ${l.value} of ${e.limit} characters`,rows:e.rows||5,value:e.value,readonly:"",spellcheck:"false",onFocus:p[0]||(p[0]=k=>{var T;return(T=n.value)==null?void 0:T.select()})},null,40,Hr),s("span",Gr,m(a.value),1)]))}}),Kr={key:0,class:"store-listings"},Wr={class:"store-listing-card"},jr={class:"store-listing-card__header"},qr=["src","alt"],Jr={key:1,class:"store-listing-card__fallback","aria-hidden":"true"},Yr={class:"store-listing-card__eyebrow"},Qr={key:1,class:"empty-state"},Zr=g({__name:"StoreListings",props:{appId:{}},setup(e){const t=e,n=b(()=>de(t.appId)),a=b(()=>Or(t.appId)),o=P(!1);return(l,r)=>n.value&&a.value?(i(),c("div",Kr,[s("article",Wr,[s("header",jr,[n.value.icon&&!o.value?(i(),c("img",{key:0,class:"store-listing-card__icon",src:d(U)(n.value.icon),alt:`${n.value.name} icon`,onError:r[0]||(r[0]=u=>o.value=!0)},null,40,qr)):(i(),c("span",Jr,m(n.value.name.charAt(0)),1)),s("div",null,[s("p",Yr,m(n.value.platform==="android"?"Google Play listing":"Publishing descriptions"),1),s("h2",null,m(n.value.name),1)])]),y(Ve,{label:"Short description",limit:80,rows:2,value:a.value.shortDescription},null,8,["value"]),y(Ve,{label:"Full description",limit:4e3,rows:14,value:a.value.fullDescription},null,8,["value"])])])):(i(),c("div",Qr,[...r[1]||(r[1]=[s("h2",null,"Descriptions not found",-1),s("p",null,"Check the app ID and add its descriptions to the listing data.",-1)])]))}}),Xr=[{code:"af",label:"Afrikaans"},{code:"sq",label:"Albanian"},{code:"am",label:"Amharic"},{code:"ar",label:"Arabic"},{code:"hy-AM",label:"Armenian"},{code:"az-AZ",label:"Azerbaijani"},{code:"bn-BD",label:"Bangla"},{code:"eu-ES",label:"Basque"},{code:"be",label:"Belarusian"},{code:"bg",label:"Bulgarian"},{code:"my-MM",label:"Burmese"},{code:"ca",label:"Catalan"},{code:"zh-HK",label:"Chinese (Hong Kong)"},{code:"zh-CN",label:"Chinese (Simplified)"},{code:"zh-TW",label:"Chinese (Traditional)"},{code:"hr",label:"Croatian"},{code:"cs-CZ",label:"Czech"},{code:"da-DK",label:"Danish"},{code:"nl-NL",label:"Dutch"},{code:"en-AU",label:"English (Australia)"},{code:"en-CA",label:"English (Canada)"},{code:"en-US",label:"English (United States)"},{code:"en-GB",label:"English (United Kingdom)"},{code:"en-IN",label:"English (India)"},{code:"en-SG",label:"English (Singapore)"},{code:"en-ZA",label:"English (South Africa)"},{code:"et",label:"Estonian"},{code:"fil",label:"Filipino"},{code:"fi-FI",label:"Finnish"},{code:"fr-CA",label:"French (Canada)"},{code:"fr-FR",label:"French (France)"},{code:"gl-ES",label:"Galician"},{code:"ka-GE",label:"Georgian"},{code:"de-DE",label:"German"},{code:"el-GR",label:"Greek"},{code:"gu",label:"Gujarati"},{code:"iw-IL",label:"Hebrew"},{code:"hi-IN",label:"Hindi"},{code:"hu-HU",label:"Hungarian"},{code:"is-IS",label:"Icelandic"},{code:"id",label:"Indonesian"},{code:"it-IT",label:"Italian"},{code:"ja-JP",label:"Japanese"},{code:"kn-IN",label:"Kannada"},{code:"kk",label:"Kazakh"},{code:"km-KH",label:"Khmer"},{code:"ko-KR",label:"Korean"},{code:"ky-KG",label:"Kyrgyz"},{code:"lo-LA",label:"Lao"},{code:"lv",label:"Latvian"},{code:"lt",label:"Lithuanian"},{code:"mk-MK",label:"Macedonian"},{code:"ms-MY",label:"Malay (Malaysia)"},{code:"ms",label:"Malay"},{code:"ml-IN",label:"Malayalam"},{code:"mr-IN",label:"Marathi"},{code:"mn-MN",label:"Mongolian"},{code:"ne-NP",label:"Nepali"},{code:"no-NO",label:"Norwegian"},{code:"fa",label:"Persian"},{code:"fa-AE",label:"Persian (United Arab Emirates)"},{code:"fa-AF",label:"Persian (Afghanistan)"},{code:"fa-IR",label:"Persian (Iran)"},{code:"pl-PL",label:"Polish"},{code:"pt-BR",label:"Portuguese (Brazil)"},{code:"pt-PT",label:"Portuguese (Portugal)"},{code:"pa",label:"Punjabi"},{code:"ro",label:"Romanian"},{code:"rm",label:"Romansh"},{code:"ru-RU",label:"Russian"},{code:"sr",label:"Serbian"},{code:"si-LK",label:"Sinhala"},{code:"sk",label:"Slovak"},{code:"sl",label:"Slovenian"},{code:"es-419",label:"Spanish (Latin America)"},{code:"es-ES",label:"Spanish (Spain)"},{code:"es-US",label:"Spanish (United States)"},{code:"sw",label:"Swahili"},{code:"sv-SE",label:"Swedish"},{code:"ta-IN",label:"Tamil"},{code:"te-IN",label:"Telugu"},{code:"th",label:"Thai"},{code:"tr-TR",label:"Turkish"},{code:"uk",label:"Ukrainian"},{code:"ur",label:"Urdu"},{code:"vi",label:"Vietnamese"}],el={class:"release-notes-formatter","aria-labelledby":"release-notes-heading"},nl={class:"release-notes-formatter__controls"},tl={class:"release-notes-formatter__template"},al=["value"],ol={class:"release-notes-formatter__locale"},sl=["value"],il={class:"release-notes-formatter__editor"},rl={class:"release-notes-formatter__label-row"},ll=["value"],cl={class:"listing-field release-notes-formatter__output"},dl={class:"listing-field__header"},ul=["disabled"],pl=["value"],hl={class:"visually-hidden","aria-live":"polite"},he=500,vl=g({__name:"ReleaseNotesFormatter",props:{appName:{}},setup(e){const t=e,n=P("en-US"),a=P(""),o=P("maintenance"),l=P(),r=P("");let u;const p=[{id:"maintenance",label:"Minor fixes and performance"},{id:"reliability",label:"Reliability improvements"},{id:"polish",label:"Interface and usability polish"},{id:"first-release",label:"First release"}],k=b(()=>Array.from(a.value).length),T=b(()=>{const L=a.value.trim();return L?`<${n.value}>
${L}
</${n.value}>`:""});function _(L){const $=L.target.value;a.value=Array.from($).slice(0,he).join("")}function A(){const L={maintenance:`This update includes minor bug fixes and performance improvements for ${t.appName}.`,reliability:`We've made ${t.appName} smoother and more reliable.

• Improved performance
• Fixed minor issues
• Refined the overall app experience`,polish:`This ${t.appName} update includes interface refinements, usability improvements, and minor fixes for a smoother overall experience.`,"first-release":`Welcome to the first release of ${t.appName}!

This release introduces the core app experience with a focus on simplicity, reliability, and smooth performance.`};a.value=Array.from(L[o.value]).slice(0,he).join("")}async function C(){var L,$;if(T.value){try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(T.value);else{if(!l.value)throw new Error("Formatted output is unavailable");if(l.value.focus(),l.value.select(),!document.execCommand("copy"))throw new Error("Copy was rejected")}r.value="Copied"}catch{(L=l.value)==null||L.focus(),($=l.value)==null||$.select(),r.value="Select the formatted text and copy it manually"}u&&clearTimeout(u),u=setTimeout(()=>{r.value=""},2500)}}return le(()=>{u&&clearTimeout(u)}),(L,$)=>(i(),c("section",el,[$[7]||($[7]=s("div",{class:"release-notes-formatter__intro"},[s("p",{class:"store-listing-card__eyebrow"},"Reusable tool"),s("h2",{id:"release-notes-heading"},"Release notes formatter"),s("p",null," Enter user-facing changes only. Google Play allows up to 500 Unicode characters per language and requires the locale tags on separate lines. ")],-1)),s("div",nl,[s("div",tl,[s("label",null,[$[3]||($[3]=s("span",null,"Generic note",-1)),te(s("select",{"onUpdate:modelValue":$[0]||($[0]=E=>o.value=E)},[(i(),c(D,null,R(p,E=>s("option",{key:E.id,value:E.id},m(E.label),9,al)),64))],512),[[fe,o.value]])]),s("button",{type:"button",onClick:A},"Use generic note"),s("small",null," Inserts an editable English note and adds "+m(e.appName)+" automatically. ",1)]),s("label",ol,[$[4]||($[4]=s("span",null,"Language",-1)),te(s("select",{"onUpdate:modelValue":$[1]||($[1]=E=>n.value=E)},[(i(!0),c(D,null,R(d(Xr),E=>(i(),c("option",{key:E.code,value:E.code},m(E.label)+" ("+m(E.code)+") ",9,sl))),128))],512),[[fe,n.value]])]),s("label",il,[s("span",rl,[$[5]||($[5]=s("span",null,"Release notes",-1)),s("span",null,m(k.value)+" / "+m(he)+" characters",1)]),s("textarea",{value:a.value,rows:"10",placeholder:"Describe what changed in this release. Use short paragraphs or • bullets.",onInput:_},null,40,ll)]),s("section",cl,[s("div",dl,[$[6]||($[6]=s("div",null,[s("h3",null,"Play Console format"),s("span",{class:"listing-field__count"},"Ready to paste")],-1)),s("button",{class:"listing-copy-button",type:"button",disabled:!T.value,onClick:C},m(r.value==="Copied"?"Copied":"Copy"),9,ul)]),s("textarea",{ref_key:"output",ref:l,class:"listing-field__text",value:T.value,rows:"12",readonly:"","aria-label":"Formatted Google Play release notes",placeholder:"Formatted release notes will appear here.",onFocus:$[2]||($[2]=E=>{var V;return(V=l.value)==null?void 0:V.select()})},null,40,pl),s("span",hl,m(r.value),1)])]),$[8]||($[8]=s("p",{class:"release-notes-formatter__hint"}," Only choose languages already added to the app's Google Play store listing. Generic notes are written in English; translate them yourself before selecting another language. ",-1))]))}}),fl={extends:Hs,enhanceApp({app:e}){e.component("AppBreadcrumbs",Ke),e.component("AppCard",We),e.component("AppGrid",Ii),e.component("AppOverview",tr),e.component("AppSubnav",je),e.component("ContactDetails",dr),e.component("CopyStandaloneUrl",gr),e.component("ExternalLinkButton",ne),e.component("StoreListings",Zr),e.component("ReleaseNotesFormatter",vl)}};export{fl as R,Po as c,I as u};
