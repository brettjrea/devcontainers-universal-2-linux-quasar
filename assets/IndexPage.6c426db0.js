import{c as g,h as d}from"./render.a900dd99.js";import{p as t,c as i,h,a as c,q as f,I as m,g as v,_ as x,L as y,M as _,N as C,O as $,U as P}from"./index.080c19b8.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=v(),e=c(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=i(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),u=i(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},d(o.default))}}),q="https://brettjrea.github.io/devcontainers-universal-2-linux-quasar/assets/quasar-logo-vertical.55e9c854.svg";const F=y({name:"IndexPage"}),b=P("img",{alt:"Quasar logo",src:q,style:{width:"200px",height:"200px"}},null,-1);function B(n,o,s,e,l,r){return _(),C(Q,{class:"flex flex-center"},{default:$(()=>[b]),_:1})}var j=x(F,[["render",B]]);export{j as default};
