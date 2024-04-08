import{r as n,j as e}from"./jsx-runtime-BlSqMCxk.js";import{s as h}from"./tailwind-BJJYOo8r.js";import{u as f,f as x,g as y,h as j,j as S,O as w,M as g,L as v,S as k}from"./components-CT78CVRP.js";/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:t,...l}){let{isSpaMode:u}=f(),o=x(),c=y();j({getKey:t,storageKey:a});let d=n.useMemo(()=>{if(!t)return null;let s=t(o,c);return s!==o.key?s:null},[]);if(u)return null;let p=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return n.createElement("script",S({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function L(){return e.jsxs("video",{className:"fixed top-0 left-0 w-full h-full object-cover z-0",autoPlay:!0,loop:!0,muted:!0,children:[e.jsx("source",{src:"/video/video-1.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})}let R=()=>[{rel:"stylesheet",href:h}];function E({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(g,{}),e.jsx(v,{})]}),e.jsxs("body",{children:[e.jsx(L,{}),t,e.jsx(M,{}),e.jsx(k,{})]})]})}function I(){return e.jsx(w,{})}export{E as Layout,I as default,R as links};
