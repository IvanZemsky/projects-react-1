import{l as J,j as e,g as K,a as G,s as C,m as Q,r as v,u as X,D as Y,h as Z,i as _,S as k,I as b,k as U,M as N,R as W,T as h,K as ee,F as T,H as L,o as se,J as V,n as te}from"./index-DW7niEK_.js";import{C as q}from"./TaskColumn-Cf5tcA9W.js";import{t as A,e as F}from"./store-DDDbk47J.js";import{t as ae}from"./constants-DWoOd6FE.js";import{u as re,C as R,F as E}from"./index.esm-BZsw8hz4.js";import{T as P,I as B}from"./TextField-D9CnMREb.js";import{S as z}from"./Select-DnoR1PEi.js";import{M as w}from"./MenuItem-3KFYzs4i.js";import{E as ie,u as oe,D as ne,B as le}from"./Delete-CcYEeSlv.js";const de=J(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ce(s){return G("MuiAvatar",s)}K("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const ue=s=>{const{classes:t,variant:a,colorDefault:n}=s;return _({root:["root",a,n&&"colorDefault"],img:["img"],fallback:["fallback"]},ce,t)},pe=C("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:a}=s;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})(Q(({theme:s})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:s.typography.fontFamily,fontSize:s.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(s.vars||s).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(s.vars||s).palette.background.default,...s.vars?{backgroundColor:s.vars.palette.Avatar.defaultBg}:{backgroundColor:s.palette.grey[400],...s.applyStyles("dark",{backgroundColor:s.palette.grey[600]})}}}]}))),me=C("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(s,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),fe=C(de,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(s,t)=>t.fallback})({width:"75%",height:"75%"});function ge({crossOrigin:s,referrerPolicy:t,src:a,srcSet:n}){const[i,r]=v.useState(!1);return v.useEffect(()=>{if(!a&&!n)return;r(!1);let o=!0;const l=new Image;return l.onload=()=>{o&&r("loaded")},l.onerror=()=>{o&&r("error")},l.crossOrigin=s,l.referrerPolicy=t,l.src=a,n&&(l.srcset=n),()=>{o=!1}},[s,t,a,n]),i}const H=v.forwardRef(function(t,a){const n=X({props:t,name:"MuiAvatar"}),{alt:i,children:r,className:o,component:l="div",slots:m={},slotProps:u={},imgProps:f,sizes:S,src:g,srcSet:p,variant:I="circular",...j}=n;let d=null;const c=ge({...f,src:g,srcSet:p}),D=g||p,M=D&&c!=="error",x={...n,colorDefault:!M,component:l,variant:I};delete x.ownerState;const y=ue(x),[O,$]=Y("img",{className:y.img,elementType:me,externalForwardedProps:{slots:m,slotProps:{img:{...f,...u.img}}},additionalProps:{alt:i,src:g,srcSet:p,sizes:S},ownerState:x});return M?d=e.jsx(O,{...$}):r||r===0?d=r:D&&i?d=i[0]:d=e.jsx(fe,{ownerState:x,className:y.fallback}),e.jsx(pe,{as:l,className:Z(y.root,o),ref:a,...j,ownerState:x,children:d})}),Ce=({team:s,excludeId:t,onDelete:a,editBtn:n,links:i=!0})=>{const r=s.filter(o=>o.id!==t);return e.jsxs(k,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-start",gap:1},children:[n,r.map(o=>{var l;return e.jsx(b,{title:((l=o.position)==null?void 0:l.name)||"Unspecified position",arrow:!0,children:e.jsx(q,{component:i?U:"div",to:i?N("",W.Executors,o.id):void 0,avatar:e.jsx(H,{children:o.name[0]}),label:o.name,sx:{fontWeight:400,fontSize:18,cursor:"pointer"},onDelete:a?()=>a(o.id):void 0})},o.id)})]})},Ae=({assignee:s})=>{var t;return e.jsx(k,{spacing:2,direction:"row",sx:{flexWrap:"wrap",alignItems:"center"},children:s?e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Assignee: "}),e.jsx(b,{title:((t=s.position)==null?void 0:t.name)||"Unspecified position",arrow:!0,children:e.jsx(q,{component:U,to:N("",W.Executors,s.id),avatar:e.jsx(H,{children:s.name[0]}),label:s.name,sx:{fontWeight:400,fontSize:18,cursor:"pointer"}})})]}):e.jsx(h,{children:"Assignee: unspecified"})})},xe=({taskId:s,setEditedTask:t})=>{var j;const[a,n]=v.useState(!1),{projectId:i}=ee();if(!i)return e.jsx(h,{children:"Error"});const r=A.getById(s);if(!r)return e.jsx(h,{children:"Error"});const o=re({defaultValues:{name:r.name,description:r.description,assigneeId:((j=r.assignee)==null?void 0:j.id)||T.Unspecified,status:r.status}}),{register:l,handleSubmit:m,getValues:u,control:f,formState:S,reset:g}=o,p=F.get(),I=()=>{const d={name:u("name").trim(),description:u("description").trim(),assigneeId:u("assigneeId"),status:u("status")},c={...r,name:d.name,description:d.description,status:d.status,assignee:F.getById(d.assigneeId)};n(!0),t(c),g(d)};return e.jsx("form",{onSubmit:m(I),noValidate:!0,children:e.jsxs(k,{spacing:2,children:[e.jsx(P,{id:"task-name",label:"Name",variant:"filled",autoFocus:!0,sx:{alignSelf:"flex-start",width:"100%"},size:"small",...l("name",{required:!0})}),e.jsx(P,{id:"task-description",label:"Description",variant:"filled",sx:{alignSelf:"flex-start",width:"100%"},size:"small",multiline:!0,minRows:3,maxRows:3,...l("description")}),e.jsx(R,{control:f,name:"assigneeId",render:({field:d})=>e.jsxs(E,{fullWidth:!0,children:[e.jsx(B,{id:"task-assignee-label",children:"Assignee"}),e.jsxs(z,{id:"task-assignee",labelId:"task-assignee-label",label:"Assignee",...d,sx:{alignSelf:"flex-start",width:"100%"},children:[e.jsx(w,{value:T.Unspecified,children:"Unspecified"}),p==null?void 0:p.data.map(c=>e.jsx(w,{value:c.id,children:c.name},c.id))]})]})}),e.jsx(R,{control:f,name:"status",render:({field:d})=>e.jsxs(E,{fullWidth:!0,children:[e.jsx(B,{id:"task-status-label",children:"Status"}),e.jsx(z,{id:"task-status",labelId:"task-status-label",label:"Status",...d,sx:{alignSelf:"flex-start",width:"100%"},children:ae.map(c=>e.jsx(w,{value:c.id,children:c.label},c.id))})]})}),e.jsxs(k,{direction:"row",spacing:2,sx:{alignItems:"center"},children:[e.jsx(L,{variant:"contained",disabled:!S.isDirty,type:"submit",children:"Save"}),a&&e.jsx(h,{color:"success",children:"Changes saved."})]})]})})},De=({id:s,name:t,onEditorClose:a,onPointerDown:n})=>{const[i,r]=v.useState(null),o=()=>{i&&A.update(i),a&&a()},{openModal:l,handleModalOpen:m,handleModalClose:u}=se(!1,o);return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Edit",children:e.jsx(V,{size:"small",onPointerDown:n,onClick:m,children:e.jsx(ie,{})})}),e.jsx(te,{title:`Edit task '${t}'`,open:l,onClose:u,children:e.jsx(xe,{taskId:s,setEditedTask:r})})]})},Me=({id:s,name:t,onPointerDown:a,redirectOnDelete:n})=>{const{dialog:i,handleDeleteClick:r}=oe(()=>A.delete(s),n);return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Delete",children:e.jsx(V,{size:"small",onPointerDown:a,onClick:i.handleModalOpen,children:e.jsx(ne,{})})}),e.jsx(le,{title:`Are you sure you want to delete task '${t}'?`,open:i.openModal,onClose:i.handleModalClose,actionButtons:e.jsx(L,{color:"sensitive",variant:"contained",onClick:r,children:"Delete"})})]})};export{Ae as A,Me as D,De as E,Ce as T};
