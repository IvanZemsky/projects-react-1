import{a as s,r as u,u as x,j as e,S as d,b as p,e as f,s as h,R as g,d as j,T as S}from"./index-D9BQda8C.js";import{u as b,F as v}from"./index.esm-lfsrom8z.js";import{p as E}from"./storage-k6jHKiI_.js";import{T as w,I as F}from"./TextField-Df-62znA.js";import{S as V}from"./Select-CJ3_jBZx.js";import{M as o}from"./MenuItem-DVspLN0o.js";import"./utils-CGqzzuYx.js";const C=({})=>{const n=b({defaultValues:{name:"",position:s.Unspecified}}),a=u.useMemo(()=>E.get(),[]),l=x(),{register:r,handleSubmit:c,getValues:i}=n,m=()=>{const t={name:i("name"),position:i("position")};f.create(t)&&l(h("",g.Executors))};return e.jsx("form",{noValidate:!0,onSubmit:c(m),children:e.jsxs(d,{spacing:3,children:[e.jsx(w,{id:"executor-name",label:"Name",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",...r("name",{maxLength:35,required:!0})}),e.jsxs(v,{fullWidth:!0,children:[e.jsx(F,{id:"position-label",children:"Lead"}),e.jsxs(V,{id:"position",labelId:"position-label",label:"Lead",defaultValue:s.Unspecified,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...r("position"),children:[e.jsx(o,{value:s.Unspecified,selected:!0,children:"Unspecified"}),!!(a!=null&&a.length)&&a.map(t=>e.jsx(o,{value:t.name,children:t.name},t.name))]})]}),e.jsx(p,{variant:"contained",type:"submit",size:"large",sx:{alignSelf:"flex-start"},children:"Create"})]})})},W=()=>e.jsxs(j,{children:[e.jsx(S,{variant:"h1",sx:{mb:1},children:"New executor"}),e.jsx(C,{})]});export{W as default};