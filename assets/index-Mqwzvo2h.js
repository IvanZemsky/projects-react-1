import{F as d,N as w,r as I,j as e,S as x,H as E,M as P,R as T,T as q}from"./index-DW7niEK_.js";import{e as y,p as F}from"./store-DDDbk47J.js";import{u as W,F as L}from"./index.esm-BZsw8hz4.js";import{T as l,I as N}from"./TextField-D9CnMREb.js";import{S as R}from"./Select-DnoR1PEi.js";import{M as u}from"./MenuItem-3KFYzs4i.js";import"./utils-C_uqNxTM.js";const V=()=>{var n,o,c;const f=W({defaultValues:{name:"",description:"",leadId:d.Unspecified,endDate:"",startDate:""}}),h=w(),{register:r,handleSubmit:j,getValues:s,setError:g,clearErrors:S,formState:D}=f,{errors:t}=D,i=I.useMemo(()=>y.get(),[]),b=()=>{const a=s("startDate"),m=s("endDate");if(new Date(a)>new Date(m)){g("endDate",{type:"validate",message:"End date cannot be earlier than start date."});return}S("endDate");const v={name:s("name"),description:s("description"),leadId:s("leadId"),startDate:a,endDate:m},p=F.create(v);p&&h("/"+P(T.Projects,p.id))};return e.jsx("form",{onSubmit:j(b),noValidate:!0,children:e.jsxs(x,{spacing:2,children:[e.jsx(l,{id:"project-name",label:"Name",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",error:!!t.name,helperText:(n=t.name)==null?void 0:n.message,...r("name",{required:"Name is required."})}),e.jsx(l,{id:"project-description",label:"Description",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",multiline:!0,minRows:3,maxRows:3,...r("description")}),e.jsxs(L,{fullWidth:!0,children:[e.jsx(N,{id:"project-lead-label",children:"Lead"}),e.jsxs(R,{id:"project-lead",labelId:"project-lead-label",label:"Lead",defaultValue:d.Unspecified,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...r("leadId"),children:[e.jsx(u,{value:d.Unspecified,selected:!0,children:"Unspecified"}),!!(i!=null&&i.data.length)&&i.data.map(a=>e.jsx(u,{value:a.id,children:a.name},a.id))]})]}),e.jsx(l,{id:"project-start-date",label:"Start date",slotProps:{inputLabel:{shrink:!0}},variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",type:"date",error:!!t.startDate,helperText:(o=t.startDate)==null?void 0:o.message,...r("startDate",{required:"Start date is required."})}),e.jsx(l,{id:"project-end-date",label:"End date",slotProps:{inputLabel:{shrink:!0}},variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",type:"date",error:!!t.endDate,helperText:(c=t.endDate)==null?void 0:c.message,...r("endDate",{required:"End date is required."})}),e.jsx(E,{variant:"contained",type:"submit",sx:{alignSelf:"flex-start"},children:"Create"})]})})},A=()=>e.jsxs(x,{spacing:2,children:[e.jsx(q,{variant:"h1",children:"New project"}),e.jsx(V,{})]});export{A as default};
