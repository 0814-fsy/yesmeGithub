import{r as o,t as a,U as l,K as u,B as d,o as m,c as p,j as h,x as _,D as g}from"./index.41c72bba.js";const v=["src"],w={__name:"index",props:{src:{type:String,required:!0}},setup(n){const s=n,e=o(document.documentElement.clientHeight-94.5+"px;"),t=o(!0),r=a(()=>s.src);return l(()=>{setTimeout(()=>{t.value=!1},300),window.onresize=function(){e.value=document.documentElement.clientHeight-94.5+"px;"}}),(c,f)=>{const i=u("loading");return d((m(),p("div",{style:g("height:"+e.value)},[h("iframe",{src:_(r),frameborder:"no",style:{width:"100%",height:"100%"},scrolling:"auto"},null,8,v)],4)),[[i,t.value]])}}};export{w as _};
