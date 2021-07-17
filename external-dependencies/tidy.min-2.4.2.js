(function(l,h){typeof exports=="object"&&typeof module!="undefined"?h(exports,require("d3-array")):typeof define=="function"&&define.amd?define(["exports","d3-array"],h):(l=typeof globalThis!="undefined"?globalThis:l||self,h(l.Tidy={},l.d3))})(this,function(l,h){"use strict";function A(n,...t){if(typeof n=="function")throw new Error("You must supply the data as the first argument to tidy()");let e=n;for(const u of t)u&&(e=u(e));return e}function sn(n){return e=>e.filter(n)}function ln(n,t){return u=>{if(typeof n=="function"){if(!n(u))return u}else if(!n)return u;return A(u,...t)}}function fn(n){return e=>e.map(n)}function j(n){return n==null?[]:Array.isArray(n)?n:[n]}function an(n){return e=>{if(n=j(n),!n.length){const o=new Set;for(const s of e)o.add(s);return Array.from(o)}const u=new Map,r=[],c=n[n.length-1];for(const o of e){let s=u,f=!1;for(const i of n){const a=typeof i=="function"?i(o):o[i];if(i===c){f=s.has(a),f||(r.push(o),s.set(a,!0));break}s.has(a)||s.set(a,new Map),s=s.get(a)}}return r}}function k(n){return e=>{const u=j(n).map(r=>typeof r=="function"?r:H(r));return e.slice().sort((r,c)=>{for(const o of u){const s=o(r,c);if(s)return s}return 0})}}function H(n){const t=typeof n=="function"?n:e=>e[n];return function(u,r){return P(t(u),t(r),!1)}}function C(n){const t=typeof n=="function"?n:e=>e[n];return function(u,r){return P(t(u),t(r),!0)}}function mn(n,t,e){let{position:u="start"}=e!=null?e:{};const r=u==="end"?-1:1,c=new Map;for(let s=0;s<t.length;++s)c.set(t[s],s);const o=typeof n=="function"?n:s=>s[n];return function(f,i){var a,m;const d=(a=c.get(o(f)))!=null?a:-1,y=(m=c.get(o(i)))!=null?m:-1;return d>=0&&y>=0?d-y:d>=0?r*-1:y>=0?r*1:0}}function P(n,t,e){let u=e?t:n,r=e?n:t;if(z(u)&&z(r)){const s=(u!==u?0:u===null?1:2)-(r!==r?0:r===null?1:2);return e?-s:s}return z(u)?e?-1:1:z(r)?e?1:-1:h.ascending(u,r)}function z(n){return n==null||n!==n}function L(n,t){return u=>{t=t!=null?t:{};const r={},c=Object.keys(n);for(const o of c)r[o]=n[o](u);if(t.rest&&u.length){const o=Object.keys(u[0]);for(const s of o)c.includes(s)||(r[s]=t.rest(s)(u))}return[r]}}function R(n,t,e,u){if(!n.length)return[];const r={};let c;if(u==null)c=Object.keys(n[0]);else{c=[];for(const o of j(u))typeof o=="function"?c.push(...o(n)):c.push(o)}for(const o of c){if(e){const s=n.map(f=>f[o]);if(!e(s))continue}r[o]=t(o)(n)}return[r]}function Y(n){return e=>R(e,n)}function J(n,t){return u=>R(u,t,n)}function Z(n,t){return u=>R(u,t,void 0,n)}function M(n){return e=>{const u=[];for(const r of e){const c={...r};for(const o in n){const s=n[o],f=typeof s=="function"?s(c):s;c[o]=f}u.push(c)}return u}}function dn(n,t){return u=>{const r=L(n)(u),c=M(t)(r);return[...u,...c]}}function yn(n,t){return u=>{const r=Y(n)(u),c=M(t)(r);return[...u,...c]}}function pn(n,t,e){return r=>{const c=J(n,t)(r),o=M(e)(c);return[...r,...o]}}function hn(n,t,e){return r=>{const c=Z(n,t)(r),o=M(e)(c);return[...r,...o]}}function $(n,t){if(n==null||typeof n!="object"||Array.isArray(n))return n;const e=Object.fromEntries(t.filter(u=>typeof u[0]!="function"));return Object.assign(e,n)}function E(n,t,e,u,r,c=0){for(const[o,s]of n.entries()){const f=[...e,o];if(s instanceof Map){const i=u(t,f,c);E(s,i,f,u,r,c+1)}else r(t,f,s,c)}return t}function gn(n,t,e=u=>u[u.length-1]){function u(o,s){const f=new Map;return o.set(e(s),f),f}function r(o,s,f){o.set(e(s),t(f,s))}const c=new Map;return E(n,c,[],u,r),c}const O=n=>n;function b(n,t,e){return typeof t=="function"?t=[t]:arguments.length===2&&t!=null&&!Array.isArray(t)&&(e=t),r=>{const c=bn(r,n),o=_n(c,t,e==null?void 0:e.addGroupKeys);if(e==null?void 0:e.export)switch(e.export){case"grouped":return o;case"levels":return W(o,e);case"entries-obj":case"entriesObject":return W(o,{...e,export:"levels",levels:["entries-object"]});default:return W(o,{...e,export:"levels",levels:[e.export]})}return vn(o,e==null?void 0:e.addGroupKeys)}}b.grouped=n=>({...n,export:"grouped"}),b.entries=n=>({...n,export:"entries"}),b.entriesObject=n=>({...n,export:"entries-object"}),b.object=n=>({...n,export:"object"}),b.map=n=>({...n,export:"map"}),b.keys=n=>({...n,export:"keys"}),b.values=n=>({...n,export:"values"}),b.levels=n=>({...n,export:"levels"});function _n(n,t,e){let u=n;if(!(t==null?void 0:t.length))return u;for(const r of t)!r||(u=gn(u,(c,o)=>{let f=r(c,{groupKeys:o});return e!==!1&&(f=f.map(i=>$(i,o))),f}));return u}function bn(n,t){const e=j(t).map((r,c)=>{const o=typeof r=="function"?r:f=>f[r],s=new Map;return f=>{const i=o(f);if(s.has(i))return s.get(i);const a=[r,i];return s.set(i,a),a}});return h.group(n,...e)}function vn(n,t){const e=[];return E(n,e,[],O,(u,r,c)=>{let o=c;t!==!1&&(o=c.map(s=>$(s,r))),u.push(...o)}),e}const jn=n=>n.join("/");function Sn(n){var t;const{flat:e,single:u,mapLeaf:r=O,mapLeaves:c=O,addGroupKeys:o}=n;let s;return n.flat&&(s=(t=n.compositeKey)!=null?t:jn),{groupFn:(a,m)=>u?r(o===!1?a[0]:$(a[0],m)):c(a.map(d=>r(o===!1?d:$(d,m)))),keyFn:e?a=>s(a.map(m=>m[1])):a=>a[a.length-1][1]}}function W(n,t){const{groupFn:e,keyFn:u}=Sn(t);let{mapEntry:r=O}=t;const{levels:c=["entries"]}=t,o=[];for(const a of c)switch(a){case"entries":case"entries-object":case"entries-obj":case"entriesObject":{const m=(a==="entries-object"||a==="entries-obj"||a==="entriesObject")&&t.mapEntry==null?([d,y])=>({key:d,values:y}):r;o.push({id:"entries",createEmptySubgroup:()=>[],addSubgroup:(d,y,g,v)=>{d.push(m([g,y],v))},addLeaf:(d,y,g,v)=>{d.push(m([y,g],v))}});break}case"map":o.push({id:"map",createEmptySubgroup:()=>new Map,addSubgroup:(m,d,y)=>{m.set(y,d)},addLeaf:(m,d,y)=>{m.set(d,y)}});break;case"object":o.push({id:"object",createEmptySubgroup:()=>({}),addSubgroup:(m,d,y)=>{m[y]=d},addLeaf:(m,d,y)=>{m[d]=y}});break;case"keys":o.push({id:"keys",createEmptySubgroup:()=>[],addSubgroup:(m,d,y)=>{m.push([y,d])},addLeaf:(m,d)=>{m.push(d)}});break;case"values":o.push({id:"values",createEmptySubgroup:()=>[],addSubgroup:(m,d)=>{m.push(d)},addLeaf:(m,d,y)=>{m.push(y)}});break;default:typeof a=="object"&&o.push(a)}const s=(a,m,d)=>{var y,g;if(t.flat)return a;const v=(y=o[d])!=null?y:o[o.length-1],I=((g=o[d+1])!=null?g:v).createEmptySubgroup();return v.addSubgroup(a,I,u(m),d),I},f=(a,m,d,y)=>{var g;((g=o[y])!=null?g:o[o.length-1]).addLeaf(a,u(m),e(d,m),y)},i=o[0].createEmptySubgroup();return E(n,i,[],s,f)}function Q(){return n=>n.length}function X(n){const t=typeof n=="function"?n:e=>e[n];return e=>h.fsum(e,t)}function x(n){return e=>{const{name:u="n",wt:r}=n!=null?n:{};return L({[u]:r==null?Q():X(r)})(e)}}function kn(n,t){return u=>{t=t!=null?t:{};const{name:r="n",sort:c}=t;return A(u,b(n,[x(t)]),c?k(C(r)):O)}}function Mn(n){return e=>e.map(u=>{var r;const c={},o=Object.keys(u);for(const s of o){const f=(r=n[s])!=null?r:s;c[f]=u[s]}return c})}function T(n,t){return u=>u.slice(n,t)}const wn=n=>T(0,n),Fn=n=>T(-n);function Kn(n,t){return u=>k(t)(u).slice(0,n)}function On(n,t){return u=>typeof t=="function"?k(t)(u).slice(-n).reverse():k(C(t))(u).slice(0,n)}function In(n,t){t=t!=null?t:{};const{replace:e}=t;return r=>{if(!r.length)return r.slice();if(e){const c=[];for(let o=0;o<n;++o)c.push(r[Math.floor(Math.random()*r.length)]);return c}return h.shuffle(r.slice()).slice(0,n)}}function U(n,t){if(n.length===0||t.length===0)return{};const e=Object.keys(n[0]),u=Object.keys(t[0]),r={};for(const c of e)u.includes(c)&&(r[c]=c);return r}function V(n){if(Array.isArray(n)){const t={};for(const e of n)t[e]=e;return t}else if(typeof n=="object")return n;return{[n]:n}}function B(n,t,e){for(const u in e){const r=e[u];if(n[r]!==t[u])return!1}return!0}function An(n,t){return u=>{const r=(t==null?void 0:t.by)==null?U(u,n):V(t.by);return u.flatMap(o=>n.filter(f=>B(o,f,r)).map(f=>({...o,...f})))}}function nn(n,t){return u=>{if(!n.length)return u;const r=(t==null?void 0:t.by)==null?U(u,n):V(t.by),c=Object.keys(n[0]);return u.flatMap(s=>{const f=n.filter(a=>B(s,a,r));if(f.length)return f.map(a=>({...s,...a}));const i=Object.fromEntries(c.filter(a=>s[a]==null).map(a=>[a,void 0]));return{...s,...i}})}}function zn(n,t){return u=>{if(!n.length)return u;if(!u.length)return n;const r=(t==null?void 0:t.by)==null?U(u,n):V(t.by),c=new Map,o=Object.keys(n[0]),s=u.flatMap(f=>{const i=n.filter(m=>{const d=B(f,m,r);return d&&c.set(m,!0),d});if(i.length)return i.map(m=>({...f,...m}));const a=Object.fromEntries(o.filter(m=>f[m]==null).map(m=>[m,void 0]));return{...f,...a}});if(c.size<n.length){const f=Object.fromEntries(Object.keys(u[0]).map(i=>[i,void 0]));for(const i of n)c.has(i)||s.push({...f,...i})}return s}}function $n(n){return e=>{const u=e.map(r=>({...r}));for(const r in n){const c=n[r],o=typeof c=="function"?c(u):c,s=(o==null?void 0:o[Symbol.iterator])&&typeof o!="string"?o:e.map(()=>o);let f=-1;for(const i of u)i[r]=s[++f]}return u}}function w(n){return n.length<1?[]:Object.keys(n[0])}function tn(){return n=>w(n)}function en(n,t){let e=[];for(const c of j(t))typeof c=="function"?e.push(...c(n)):e.push(c);e.length&&e[0][0]==="-"&&(e=[...tn()(n),...e]);const u={},r=[];for(let c=e.length-1;c>=0;c--){const o=e[c];if(o[0]==="-"){u[o.substring(1)]=!0;continue}if(u[o]){u[o]=!1;continue}r.unshift(o)}return e=Array.from(new Set(r)),e}function N(n){return e=>{let u=en(e,n);return u.length?e.map(r=>{const c={};for(const o of u)c[o]=r[o];return c}):e}}function En(n){return e=>{const u=M(n)(e);return N(Object.keys(n))(u)}}function un(n){return e=>typeof n=="function"?[...e,...j(n(e))]:[...e,...j(n)]}function Dn(n){return e=>{const{namesFrom:u,valuesFrom:r,valuesFill:c,valuesFillMap:o,namesSep:s="_"}=n,f=Array.isArray(u)?u:[u],i=Array.isArray(r)?r:[r],a=[];if(!e.length)return a;const m=Object.keys(e[0]).filter(p=>!f.includes(p)&&!i.includes(p)),d={};for(const p of e)for(const _ of f)d[_]==null&&(d[_]={}),d[_][p[_]]=!0;const y=[];for(const p in d)y.push(Object.keys(d[p]));const g={},v=qn(s,y);for(const p of v){if(i.length===1){g[p]=o!=null?o[i[0]]:c;continue}for(const _ of i)g[`${_}${s}${p}`]=o!=null?o[_]:c}function F(p){if(!p.length)return[];const _={...g};for(const S of m)_[S]=p[0][S];for(const S of p){const q=f.map(K=>S[K]).join(s);if(i.length===1){_[q]=S[i[0]];continue}for(const K of i)_[`${K}${s}${q}`]=S[K]}return[_]}return m.length?A(e,b(m,[F])):F(e)}}function qn(n="_",t){function e(r,c,o){if(!o.length&&c!=null){r.push(c);return}const s=o[0],f=o.slice(1);for(const i of s)e(r,c==null?i:`${c}${n}${i}`,f)}const u=[];return e(u,null,t),u}function Cn(n){return e=>{var u;const{namesTo:r,valuesTo:c,namesSep:o="_"}=n,s=(u=n.cols)!=null?u:[],f=en(e,s),i=Array.isArray(r)?r:[r],a=Array.isArray(c)?c:[c],m=i.length>1,d=a.length>1,y=[];for(const g of e){const v=Object.keys(g).filter(p=>!f.includes(p)),F={};for(const p of v)F[p]=g[p];const I=d?Array.from(new Set(f.map(p=>p.substring(p.indexOf(o)+1)))):f;for(const p of I){const _={...F};for(const S of a){const q=d?`${S}${o}${p}`:p,K=m?p.split(o):[p];let gt=0;for(const _t of i){const bt=K[gt++];_[_t]=bt,_[S]=g[q]}}y.push(_)}}return y}}function rn(n){return e=>{const u=Rn(n),r=[];for(const c in u){const o=u[c];let s;typeof o=="function"?s=o(e):Array.isArray(o)?s=o:s=Array.from(new Set(e.map(f=>f[c]))),r.push(s.map(f=>({[c]:f})))}return Ln(r)}}function Ln(n){function t(u,r,c){if(!c.length&&r!=null){u.push(r);return}const o=c[0],s=c.slice(1);for(const f of o)t(u,{...r,...f},s)}const e=[];return t(e,null,n),e}function Rn(n){if(Array.isArray(n)){const t={};for(const e of n)t[e]=e;return t}else if(typeof n=="object")return n;return{[n]:n}}function on(n,t=1){let[e,u]=h.extent(n);const r=[];let c=e;for(;c<=u;)r.push(c),c+=t;return r}function G(n,t="day",e=1){let[u,r]=h.extent(n);const c=[];let o=new Date(u);for(;o<=r;)if(c.push(new Date(o)),t==="second"||t==="s"||t==="seconds")o.setUTCSeconds(o.getUTCSeconds()+1*e);else if(t==="minute"||t==="min"||t==="minutes")o.setUTCMinutes(o.getUTCMinutes()+1*e);else if(t==="day"||t==="d"||t==="days")o.setUTCDate(o.getUTCDate()+1*e);else if(t==="week"||t==="w"||t==="weeks")o.setUTCDate(o.getUTCDate()+7*e);else if(t==="month"||t==="m"||t==="months")o.setUTCMonth(o.getUTCMonth()+1*e);else if(t==="year"||t==="y"||t==="years")o.setUTCFullYear(o.getUTCFullYear()+1*e);else throw new Error("Invalid granularity for date sequence: "+t);return c}function Wn(n,t){return function(u){t=t!=null?t:1;const r=typeof n=="function"?n:c=>c[n];return on(u.map(r),t)}}function Tn(n,t,e){return function(r){t=t!=null?t:"day",e=e!=null?e:1;const c=typeof n=="function"?n:o=>o[n];return G(r.map(c),t,e)}}function Un(n,t,e){return function(r){t=t!=null?t:"day",e=e!=null?e:1;const c=typeof n=="function"?n:o=>o[n];return G(r.map(o=>new Date(c(o))),t,e).map(o=>o.toISOString())}}function cn(n){return e=>{const u=[];for(const r of e){const c={...r};for(const o in n)c[o]==null&&(c[o]=n[o]);u.push(c)}return u}}function Vn(n,t){return u=>{const r=rn(n)(u),c=nn(u)(r);return t?cn(t)(c):c}}function Bn(n){return e=>{const u=j(n),r={};return e.map(c=>{const o={...c};for(const s of u)o[s]!=null?r[s]=o[s]:r[s]!=null&&(o[s]=r[s]);return o})}}function Nn(n,t){return(u,r)=>{var c;let o="[tidy.debug";if((c=r==null?void 0:r.groupKeys)==null?void 0:c.length){const y=r.groupKeys.map(g=>g.join(": ")).join(", ");y.length&&(o+="|"+y)}t=t!=null?t:{};const{limit:s=10,output:f="table"}=t,i="--------------------------------------------------------------------------------";let a=i.length;const m=o+"]"+(n==null?"":" "+n);return a=Math.max(0,a-(m.length+2)),console.log(`${m} ${i.substring(0,a)}`),console[f](s==null||s>=u.length?u:u.slice(0,s)),u}}function D(n,t,e){return n==null||t==null?void 0:t===0&&n===0?0:!e&&t===0?void 0:n/t}function Gn(n,t,e){return n==null||t==null?e?(n!=null?n:0)-(t!=null?t:0):void 0:n-t}function Hn(n,t,e){return n==null||t==null?e?(n!=null?n:0)+(t!=null?t:0):void 0:n+t}var Pn=Object.freeze({__proto__:null,rate:D,subtract:Gn,add:Hn});function Yn(n,t,e){const u=typeof n=="function"?n:s=>s[n],r=typeof t=="function"?t:s=>s[t],{predicate:c,allowDivideByZero:o}=e!=null?e:{};return c==null?s=>{const f=r(s),i=u(s);return D(i,f,o)}:s=>{if(!c(s))return;const f=r(s),i=u(s);return D(i,f,o)}}function Jn(n,t){let e=new h.Adder,u=0;return Float64Array.from(n,r=>e.add(+(t(r,u++,n)||0)))}function Zn(n,t){let e=0;for(let u=0;u<n.length;++u){const r=t(n[u],u,n);+r===r&&(e+=1)}return e?h.fsum(n,t)/e:void 0}function Qn(n){const t=typeof n=="function"?n:e=>e[n];return e=>Jn(e,t)}function Xn(n,t,e){const{partial:u=!1}=e!=null?e:{};return r=>r.map((c,o)=>{const s=o;if(!u&&s-n+1<0)return;const f=Math.max(0,s-n+1),i=r.slice(f,s+1);return t(i,s)})}function xn(n,t){const e=typeof n=="function"?n:c=>c[n],{n:u=1,default:r}=t!=null?t:{};return c=>c.map((o,s)=>{const f=c[s-u];return f==null?r:e(f)})}function nt(n,t){const e=typeof n=="function"?n:c=>c[n],{n:u=1,default:r}=t!=null?t:{};return c=>c.map((o,s)=>{const f=c[s+u];return f==null?r:e(f)})}function tt(n){const t=typeof n=="function"?n:e=>e[n];return e=>h.min(e,t)}function et(n){const t=typeof n=="function"?n:e=>e[n];return e=>h.max(e,t)}function ut(n){const t=typeof n=="function"?n:e=>e[n];return e=>Zn(e,t)}function rt(n,t){const e=typeof n=="function"?n:r=>r[n],u=typeof t=="function"?t:r=>r[t];return r=>{const c=h.fsum(r,e),o=h.fsum(r,u);return D(c,o)}}function ot(n){const t=typeof n=="function"?n:e=>e[n];return e=>h.median(e,t)}function ct(n){const t=typeof n=="function"?n:e=>e[n];return e=>h.deviation(e,t)}function st(n){const t=typeof n=="function"?n:e=>e[n];return e=>h.variance(e,t)}function lt(n,t={}){const e=typeof n=="function"?n:u=>u[n];return u=>{const r=new Map;let c=0;for(const o of u){const s=e(o);if(!r.has(s)){if(!t.includeUndefined&&s===void 0||t.includeNull===!1&&s===null)continue;c+=1,r.set(s,!0)}}return c}}function ft(n){const t=typeof n=="function"?n:e=>e[n];return e=>e.length?t(e[0]):void 0}function it(n){const t=typeof n=="function"?n:e=>e[n];return e=>e.length?t(e[e.length-1]):void 0}function at(n,t=!0){return e=>{const u=new RegExp(`^${n}`,t?"i":void 0);return w(e).filter(c=>u.test(c))}}function mt(n,t=!0){return e=>{const u=new RegExp(`${n}$`,t?"i":void 0);return w(e).filter(c=>u.test(c))}}function dt(n,t=!0){return e=>{const u=new RegExp(n,t?"i":void 0);return w(e).filter(c=>u.test(c))}}function yt(n){return t=>w(t).filter(u=>n.test(u))}function pt(n,t,e){return u=>{const r=w(u),c=[];for(let o=t[0];o<=t[1];++o){const s=e==null?o:new String("00000000"+o).slice(-e);c.push(`${n}${s}`)}return r.filter(o=>c.includes(o))}}function ht(n){return t=>{let e=new Set;for(const r of j(n))if(typeof r=="function"){const c=r(t);for(const o of c)e.add(o)}else e.add(r);return Array.from(e).map(r=>`-${r}`)}}l.TMath=Pn,l.addItems=un,l.addRows=un,l.arrange=k,l.asc=H,l.complete=Vn,l.contains=dt,l.count=kn,l.cumsum=Qn,l.debug=Nn,l.desc=C,l.deviation=ct,l.distinct=an,l.endsWith=mt,l.everything=tn,l.expand=rn,l.fill=Bn,l.filter=sn,l.first=ft,l.fixedOrder=mn,l.fullJoin=zn,l.fullSeq=Wn,l.fullSeqDate=Tn,l.fullSeqDateISOString=Un,l.groupBy=b,l.innerJoin=An,l.lag=xn,l.last=it,l.lead=nt,l.leftJoin=nn,l.map=fn,l.matches=yt,l.max=et,l.mean=ut,l.meanRate=rt,l.median=ot,l.min=tt,l.mutate=M,l.mutateWithSummary=$n,l.n=Q,l.nDistinct=lt,l.negate=ht,l.numRange=pt,l.pick=N,l.pivotLonger=Cn,l.pivotWider=Dn,l.rate=Yn,l.rename=Mn,l.replaceNully=cn,l.roll=Xn,l.select=N,l.slice=T,l.sliceHead=wn,l.sliceMax=On,l.sliceMin=Kn,l.sliceSample=In,l.sliceTail=Fn,l.sort=k,l.startsWith=at,l.sum=X,l.summarize=L,l.summarizeAll=Y,l.summarizeAt=Z,l.summarizeIf=J,l.tally=x,l.tidy=A,l.total=dn,l.totalAll=yn,l.totalAt=hn,l.totalIf=pn,l.transmute=En,l.variance=st,l.vectorSeq=on,l.vectorSeqDate=G,l.when=ln,Object.defineProperty(l,"__esModule",{value:!0})});
//# sourceMappingURL=tidy.min.js.map