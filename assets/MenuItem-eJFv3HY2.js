import{l as c,m as S,n as T,o as j,p as D,q as F,w as l,r as d,x as P,y as E,z as G,j as C,C as x,D as N}from"./index-Bwak4EGY.js";import{L as I}from"./Select-BOvnLskB.js";const $=c("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),M=c("MuiListItemIcon",["root","alignItemsFlexStart"]),O=c("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function U(e){return S("MuiMenuItem",e)}const r=c("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),z=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},H=e=>{const{disabled:t,dense:a,divider:s,disableGutters:n,selected:p,classes:o}=e,i=N({root:["root",a&&"dense",t&&"disabled",!n&&"gutters",s&&"divider",p&&"selected"]},U,o);return{...o,...i}},A=T(j,{shouldForwardProp:e=>D(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:z})(F(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:l(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:l(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:l(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:l(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${r.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$.inset}`]:{marginLeft:52},[`& .${O.root}`]:{marginTop:0,marginBottom:0},[`& .${O.inset}`]:{paddingLeft:36},[`& .${M.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${M.root} svg`]:{fontSize:"1.25rem"}}}]}))),J=d.forwardRef(function(t,a){const s=P({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:p="li",dense:o=!1,divider:v=!1,disableGutters:i=!1,focusVisibleClassName:w,role:R="menuitem",tabIndex:f,className:k,...L}=s,m=d.useContext(I),b=d.useMemo(()=>({dense:o||m.dense||!1,disableGutters:i}),[m.dense,o,i]),u=d.useRef(null);E(()=>{n&&u.current&&u.current.focus()},[n]);const V={...s,dense:b.dense,divider:v,disableGutters:i},g=H(s),B=G(u,a);let y;return s.disabled||(y=f!==void 0?f:-1),C.jsx(I.Provider,{value:b,children:C.jsx(A,{ref:B,role:R,tabIndex:y,component:p,focusVisibleClassName:x(g.focusVisible,w),className:x(g.root,k),...L,ownerState:V,classes:g})})});export{J as M};
