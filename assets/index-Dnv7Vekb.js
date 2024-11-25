import{r as d,g as A,a as D,s as U,b as X,c as L,m as E,d as v,e as Z,f as tt,u as I,j as a,h as Y,i as F,t as _,L as et,k as at,l as q,n as ot,S,T as P,o as st,p as rt,B as nt,R as lt,A as J,P as it}from"./index-DW7niEK_.js";import{P as dt}from"./PageHeader-BcXiUKO0.js";import{p as H}from"./store-DDDbk47J.js";import{P as ct}from"./ProjectCard-n_8z5CE3.js";import{B as pt}from"./BaseList-CihogUaz.js";import{A as ut}from"./AutoGrid-BTHqS-sk.js";import{T as C,u as gt,a as ft,b as xt,c as ht,d as G,e as vt,f as bt}from"./TableRow-BDFXj6a3.js";import"./CardContent-DhbWX8Eh.js";import"./Select-DnoR1PEi.js";import"./utils-C_uqNxTM.js";import"./MenuItem-3KFYzs4i.js";function Bt(t){return d.Children.toArray(t).filter(e=>d.isValidElement(e))}function mt(t){return D("MuiToggleButton",t)}const b=A("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),K=d.createContext({}),Q=d.createContext(void 0);function Ct(t,e){return e===void 0||t===void 0?!1:Array.isArray(e)?e.includes(t):t===e}const yt=t=>{const{classes:e,fullWidth:o,selected:l,disabled:c,size:p,color:r}=t,u={root:["root",l&&"selected",c&&"disabled",o&&"fullWidth",`size${L(p)}`,r]};return F(u,mt,e)},jt=U(X,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[`size${L(o.size)}`]]}})(E(({theme:t})=>({...t.typography.button,borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active,[`&.${b.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:v(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${b.selected}`]:{color:(t.vars||t).palette.text.primary,backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette.text.primary,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:v(t.palette.text.primary,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette.text.primary,t.palette.action.selectedOpacity)}}}}},...Object.entries(t.palette).filter(Z()).map(([e])=>({props:{color:e},style:{[`&.${b.selected}`]:{color:(t.vars||t).palette[e].main,backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette[e].main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:v(t.palette[e].main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette[e].main,t.palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:t.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:t.typography.pxToRem(15)}}]}))),W=d.forwardRef(function(e,o){const{value:l,...c}=d.useContext(K),p=d.useContext(Q),r=tt({...c,selected:Ct(e.value,l)},e),u=I({props:r,name:"MuiToggleButton"}),{children:h,className:y,color:f="standard",disabled:w=!1,disableFocusRipple:B=!1,fullWidth:i=!1,onChange:j,onClick:$,selected:x,size:z="medium",value:m,...M}=u,T={...u,color:f,disabled:w,disableFocusRipple:B,fullWidth:i,size:z},O=yt(T),V=n=>{$&&($(n,m),n.defaultPrevented)||j&&j(n,m)},g=p||"";return a.jsx(jt,{className:Y(c.className,O.root,y,g),disabled:w,focusRipple:!B,ref:o,onClick:V,onChange:j,value:m,ownerState:T,"aria-pressed":x,...M,children:h})});function $t(t){return D("MuiToggleButtonGroup",t)}const s=A("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),Tt=t=>{const{classes:e,orientation:o,fullWidth:l,disabled:c}=t,p={root:["root",o,l&&"fullWidth"],grouped:["grouped",`grouped${L(o)}`,c&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return F(p,$t,e)},Rt=U("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${s.grouped}`]:e.grouped},{[`& .${s.grouped}`]:e[`grouped${L(o.orientation)}`]},{[`& .${s.firstButton}`]:e.firstButton},{[`& .${s.lastButton}`]:e.lastButton},{[`& .${s.middleButton}`]:e.middleButton},e.root,o.orientation==="vertical"&&e.vertical,o.fullWidth&&e.fullWidth]}})(E(({theme:t})=>({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${s.grouped}`]:{[`&.${s.selected} + .${s.grouped}.${s.selected}`]:{borderTop:0,marginTop:0}},[`& .${s.firstButton},& .${s.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${s.lastButton},& .${s.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${s.lastButton}.${b.disabled},& .${s.middleButton}.${b.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${s.grouped}`]:{[`&.${s.selected} + .${s.grouped}.${s.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${s.firstButton},& .${s.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${s.lastButton},& .${s.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${s.lastButton}.${b.disabled},& .${s.middleButton}.${b.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),Pt=d.forwardRef(function(e,o){const l=I({props:e,name:"MuiToggleButtonGroup"}),{children:c,className:p,color:r="standard",disabled:u=!1,exclusive:h=!1,fullWidth:y=!1,onChange:f,orientation:w="horizontal",size:B="medium",value:i,...j}=l,$={...l,disabled:u,fullWidth:y,orientation:w,size:B},x=Tt($),z=d.useCallback((g,n)=>{if(!f)return;const R=i&&i.indexOf(n);let k;i&&R>=0?(k=i.slice(),k.splice(R,1)):k=i?i.concat(n):[n],f(g,k)},[f,i]),m=d.useCallback((g,n)=>{f&&f(g,i===n?null:n)},[f,i]),M=d.useMemo(()=>({className:x.grouped,onChange:h?m:z,value:i,size:B,fullWidth:y,color:r,disabled:u}),[x.grouped,h,m,z,i,B,y,r,u]),T=Bt(c),O=T.length,V=g=>{const n=g===0,R=g===O-1;return n&&R?"":n?x.firstButton:R?x.lastButton:x.middleButton};return a.jsx(Rt,{role:"group",className:Y(x.root,p),ref:o,ownerState:$,...j,children:a.jsx(K.Provider,{value:M,children:T.map((g,n)=>a.jsx(Q.Provider,{value:V(n),children:g},n))})})}),wt=({to:t,sx:e,children:o})=>a.jsx(C,{sx:{":hover":{bgcolor:_.palette.white.dark},cursor:"pointer",p:0},children:a.jsx(et,{component:at,to:t,sx:{display:"block",p:2,width:"100%",...e},children:o})}),zt=q(a.jsx("path",{d:"M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"}),"ViewList"),kt=q(a.jsx("path",{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"}),"ViewModule"),Lt=({open:t,onClose:e})=>a.jsx(ot,{title:"Tutorial",open:t,onClose:e,children:a.jsxs(S,{spacing:1,sx:{pl:.5},children:[a.jsx(P,{children:"You can see all your projects on this page."}),a.jsx(P,{children:"You can also create new project. The main parts of project are its team and tasks."}),a.jsx(P,{children:"Team of a project is formed from executors. Team also includes lead of project if they are specified"})]})}),{Create:Mt}=lt,Ot=({view:t})=>{const e=(p,r)=>{r===null||t.value===r||(t.set(r),J.set("projectsView",r))},{openModal:o,handleModalOpen:l,handleModalClose:c}=st(!1);return a.jsxs(dt,{title:"Projects",children:[a.jsx(rt,{onClick:l}),a.jsx(Lt,{open:o,onClose:c}),a.jsx(nt,{variant:"contained",to:Mt,children:"New"}),a.jsxs(Pt,{color:"primary",value:t.value,exclusive:!0,onChange:e,sx:{height:"38px"},children:[a.jsx(W,{value:"cards","aria-label":"cards",children:a.jsx(kt,{})}),a.jsx(W,{value:"table","aria-label":"table",children:a.jsx(zt,{})})]})]})},N=12,Vt=()=>{const[t,e]=d.useState(1),o=H.get(N,t);return!o||!o.data.length?a.jsx(P,{children:"You haven't added any projects yet"}):a.jsx(pt,{totalCount:o.totalCount,limit:N,currentPage:t,setPage:e,children:a.jsx(ut,{minItemWidth:"300px",spacing:2,children:o==null?void 0:o.data.map(l=>a.jsx(ct,{data:l},l.id))})})},St=[{label:"Name",align:"left"},{label:"Lead",align:"right"},{label:"Team size",align:"right"},{label:"Start date",align:"right"},{label:"End date",align:"right"}],Ht=t=>{var e;return((e=H.getTeam(t))==null?void 0:e.length)||0},Gt=({})=>{const t=H.get(),{page:e,rowsPerPage:o,visibleRows:l,handleChangePage:c,handleChangeRowsPerPage:p}=gt(t.data,12);return!t||!t.data.length?a.jsx(P,{children:"You haven't added any projects yet"}):a.jsxs(S,{component:it,elevation:3,sx:{flexGrow:1,justifyContent:"space-between",overflow:"hidden"},children:[a.jsx(ft,{children:a.jsxs(xt,{children:[a.jsx(ht,{sx:{bgcolor:_.palette.white.dark},children:a.jsx(G,{children:St.map(r=>a.jsx(C,{sx:{py:1},align:r.align,children:r.label},r.label))})}),a.jsx(vt,{children:l.map((r,u)=>{var h;return a.jsxs(G,{hover:!0,children:[a.jsx(wt,{to:r.id,children:r.name}),a.jsx(C,{align:"right",children:((h=r.lead)==null?void 0:h.name)||"Unspecified"}),a.jsx(C,{align:"right",children:Ht(r.id)}),a.jsx(C,{align:"right",children:r.startDate}),a.jsx(C,{align:"right",children:r.endDate})]},r.name+u)})})]})}),a.jsx(bt,{rowsPerPageOptions:[12,25],component:"div",count:t.data.length,rowsPerPage:o,page:e,onPageChange:c,onRowsPerPageChange:p})]})},Wt=()=>J.get("projectsView")||"cards",Kt=()=>{const[t,e]=d.useState(Wt);return a.jsxs(S,{sx:{height:"100%"},children:[a.jsx(Ot,{view:{value:t,set:e}}),t==="cards"&&a.jsx(Vt,{}),t==="table"&&a.jsx(Gt,{})]})};export{Kt as default};
