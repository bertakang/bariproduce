import{n as D,u as F,q as L,o as n,c,a as e,t as r,x as p,F as m,s as h,p as S,e as b,_ as B}from"./CMIXcNHo.js";import{u as C}from"./OmhjXH8E.js";const f=i=>(S("data-v-4d02b6ad"),i=i(),b(),i),q={class:"recipes-page"},A={class:"recipes-description"},E={class:"header"},N={class:"recipe-ingredients"},R=f(()=>e("h3",null,"Ingredients",-1)),T={class:"recipe-directions"},V=f(()=>e("h3",null,"Directions",-1)),$=D({__name:"[recipe]",async setup(i){let o,l;const _=F();_.params;const g=_.params.recipe;async function y(){const{data:s}=await C("https://bertakang.pythonanywhere.com/","$1rDF5Tfok1"),d=s.value.recipe_cards;for(let t=0;t<d.length;t++){const u=d[t],x=u.name;if(g===x)return u}}const a=([o,l]=L(()=>y()),o=await o,l(),o),v=a.ingredients,k=a.directions,I=v.split(".").map(s=>s.trim()),w=k.split(".").map(s=>s.trim());return(s,d)=>(n(),c("section",q,[e("div",A,[e("div",E,[e("h1",null,r(p(a).name),1),e("h2",null,r(p(a).time),1)]),e("div",N,[R,(n(!0),c(m,null,h(p(I),t=>(n(),c("ul",{key:t},[e("li",null,r(t),1)]))),128))]),e("div",T,[V,e("ol",null,[(n(!0),c(m,null,h(p(w),t=>(n(),c("li",{key:t},r(t),1))),128))])])])]))}}),G=B($,[["__scopeId","data-v-4d02b6ad"]]);export{G as default};
