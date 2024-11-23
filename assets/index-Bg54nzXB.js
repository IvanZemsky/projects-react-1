import{r as u,u as S,f as j,e as h,p as C,j as e,T as o,S as m,d as M,i as z,k as A,l as D,L as F,s as L,R as P,P as R}from"./index-lYFP5Mbq.js";import{C as v}from"./TaskColumn-CMaXbNmY.js";import{T as y,A as W,E as N,D as O}from"./DeleteTaskBtn-CBDaBqUH.js";import{E as H,o as U}from"./Delete-B1e0ZgLZ.js";import{F as V}from"./index.esm-BDWSUy-D.js";import{I as $}from"./TextField-By6Opk9u.js";import{S as q}from"./Select-iZkkjfx3.js";import{M as G}from"./MenuItem-BaMFnwzx.js";import"./constants-DWoOd6FE.js";import"./utils-Bxiod-Hf.js";const J=({taskId:t,setEditedTask:n})=>{const[s,l]=u.useState(!1),{projectId:f}=S(),c=j.getById(t),x=h.get(),p=C.getById(f);if(!c||!x||!p)return e.jsx(o,{children:"Error"});const g=h.getManyById(c.team),[i,T]=u.useState(g),b=a=>{const r=a.target.value,d=h.getById(r);d&&T(k=>[...k,d])},B=a=>{T(i.filter(r=>r.id!==a))},E=x.data.filter(a=>{var r,d;return!i.some(k=>k.id===a.id)&&a.id!==((r=c.assignee)==null?void 0:r.id)&&a.id!==((d=p.lead)==null?void 0:d.id)});u.useEffect(()=>{l(!1)},[i]);const w=a=>{a.preventDefault();const r=i.map(d=>d.id);n({...c,team:r}),l(!0)};return e.jsx("form",{noValidate:!0,onSubmit:w,children:e.jsxs(m,{spacing:2,sx:{alignItems:"flex-start"},children:[e.jsxs(V,{fullWidth:!0,children:[e.jsx($,{id:"task-executor-label",size:"small",children:"Executor"}),e.jsx(q,{id:"task-executor",labelId:"task-executor-label",label:"Executor",size:"small",value:"",onChange:b,disabled:!E.length,sx:{alignSelf:"flex-start",width:"100%"},children:E.map(a=>e.jsx(G,{value:a.id,children:a.name},a.id))})]}),i.length?e.jsx(y,{team:i,onDelete:B,links:!1}):e.jsx(o,{children:"Task team is empty now"}),e.jsxs(m,{direction:"row",spacing:2,sx:{alignItems:"center"},children:[e.jsx(M,{variant:"contained",type:"submit",children:"Save"}),s&&e.jsx(o,{color:"success",children:"Changes saved."})]})]})})},I=({taskId:t,onEditorClose:n})=>{var i;const s=(i=j.getById(t))==null?void 0:i.name,[l,f]=u.useState(null),c=()=>{l&&j.update(l),n&&n()},{openModal:x,handleModalOpen:p,handleModalClose:g}=z(!1,c);return e.jsxs(e.Fragment,{children:[e.jsx(v,{sx:{fontSize:16},label:"Edit team",variant:"outlined",color:"primary",icon:e.jsx(H,{fontSize:"small"}),onClick:p,clickable:!0}),e.jsx(A,{title:`Edit team of task '${s}'`,open:x,onClose:g,children:e.jsx(J,{taskId:t,setEditedTask:f})})]})},K=({taskId:t,team:n})=>n.length?e.jsx(y,{team:n,editBtn:e.jsx(I,{taskId:t})}):e.jsxs(m,{spacing:2,direction:"row",sx:{flexWrap:"wrap",alignItems:"center"},children:[e.jsx(o,{children:"Task team is empty now."}),e.jsx(I,{taskId:t})]}),Q=({assignee:t})=>{var n;return e.jsx(m,{spacing:2,direction:"row",sx:{flexWrap:"wrap",alignItems:"center"},children:t?e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Assignee: "}),e.jsx(D,{title:((n=t.position)==null?void 0:n.name)||"Unspecified position",arrow:!0,children:e.jsx(v,{component:F,to:L("",P.Executors,t.id),avatar:e.jsx(W,{children:t.name[0]}),label:t.name,sx:{fontWeight:400,fontSize:18,cursor:"pointer"}})})]}):e.jsx(o,{children:"Assignee: unspecified"})})},re=U(()=>{const{projectId:t,taskId:n}=S(),s=j.getById(n);if(!s||!t)return e.jsx(o,{children:"Error"});const l=h.getManyById(s.team);return e.jsxs(m,{spacing:2,children:[e.jsxs(R,{title:s.name,children:[e.jsx(N,{id:s.id,name:s.name}),e.jsx(O,{id:s.id,name:s.name,projectId:t,redirectOnDelete:!0})]}),e.jsx(o,{children:s.description||"No description provided"}),e.jsx(Q,{assignee:s.assignee}),e.jsx(K,{taskId:s.id,team:l})]})});export{re as default};