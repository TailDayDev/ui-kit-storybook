import{j as n,u as v,r as D,V as l,s as P,l as c}from"./iframe-Drba6mZ1.js";import{C as O}from"./CheckIcon-Df8qcKU4.js";import{S as V,P as x}from"./xml-COHihjjg.js";import{u as N}from"./useThemedStyles-cVR-DtoZ.js";import{T as W}from"./Text-Do5dS1qg.js";import{I as H}from"./Icon-Cwc6oh7S.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./index-Do3x-qHF.js";const A=({color:e,size:o=14,width:t,height:i})=>n.jsxs(V,{width:t??o,height:i??o,viewBox:"0 0 14 14",fill:"none",children:[n.jsx(x,{d:"M6.99398 1.1582C7.30355 1.1582 7.60778 1.24047 7.87525 1.39632C8.14203 1.55181 8.36298 1.77502 8.51555 2.04346L13.1811 10.2078L13.2352 10.3092C13.3535 10.5492 13.4151 10.8137 13.4152 11.0823C13.4153 11.3893 13.335 11.6913 13.1816 11.9573C13.0283 12.2233 12.8071 12.4439 12.5413 12.5976C12.2756 12.7513 11.9739 12.8325 11.6669 12.8328H2.33301C2.02638 12.8346 1.72465 12.756 1.45801 12.6044C1.18978 12.4519 0.966337 12.2312 0.810877 11.9647C0.655494 11.6982 0.573441 11.3953 0.572758 11.0868C0.572088 10.7791 0.652815 10.4768 0.806319 10.2101L5.47242 2.04346C5.62501 1.77494 5.84641 1.55183 6.11329 1.39632C6.38069 1.24053 6.6845 1.15822 6.99398 1.1582ZM6.99398 2.32487C6.89091 2.32489 6.78968 2.3522 6.70061 2.40405C6.61145 2.456 6.53729 2.53075 6.48641 2.62052L6.48584 2.62223L1.81918 10.7889L1.81747 10.7912C1.76604 10.8802 1.7392 10.9817 1.73942 11.0846C1.73969 11.1872 1.76692 11.2881 1.81861 11.3768C1.87043 11.4656 1.9451 11.5396 2.03451 11.5904C2.12386 11.6412 2.22513 11.6671 2.32788 11.6662H11.6658C11.7681 11.6661 11.8689 11.6393 11.9574 11.5881C12.046 11.5369 12.1194 11.4631 12.1705 11.3745C12.2216 11.2859 12.2486 11.1852 12.2485 11.0828C12.2485 10.9805 12.2217 10.8798 12.1705 10.7912L12.1694 10.7889L7.50269 2.62223L7.50155 2.62052C7.45068 2.5308 7.37704 2.45599 7.28793 2.40405C7.19877 2.3521 7.09717 2.32487 6.99398 2.32487Z",fill:e}),n.jsx(x,{d:"M6.41655 7.58298V5.24964C6.41655 4.92748 6.67772 4.66631 6.99989 4.66631C7.32205 4.66631 7.58322 4.92748 7.58322 5.24964V7.58298C7.58322 7.90514 7.32205 8.16631 6.99989 8.16631C6.67772 8.16631 6.41655 7.90514 6.41655 7.58298Z",fill:e}),n.jsx(x,{d:"M7.00558 9.33298C7.32775 9.33298 7.58892 9.59414 7.58892 9.91631C7.58892 10.2385 7.32775 10.4996 7.00558 10.4996H6.99989C6.67772 10.4996 6.41655 10.2385 6.41655 9.91631C6.41655 9.59414 6.67772 9.33298 6.99989 9.33298H7.00558Z",fill:e})]});A.__docgenInfo={description:"Warning triangle (copied from the app `shared/icons/TriangleAlertIcon`). Color comes from `color`.",methods:[],displayName:"TriangleAlertIcon",props:{color:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"14",computed:!1}},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""}}};const T=20,f=14,I=20,w=10,d=(e,o)=>n.jsx(H,{icon:e==="success"?O:A,color:o,size:f}),U=(e,o)=>{switch(e){case"success":return{backgroundColor:o.colors.bg.successSoft,icon:d(e,"text.success"),iconPosition:"left",textColor:o.colors.text.success};case"danger":return{backgroundColor:o.colors.bg.errorSoft,icon:d(e,"text.error"),iconPosition:"right",textColor:o.colors.text.error};case"warning":return{backgroundColor:o.palette.warningLight,icon:d(e,"text.primary"),iconPosition:"right",textColor:o.colors.text.primary};case"neutral":return{backgroundColor:o.colors.bg.subtle,icon:d(e,"text.secondary"),iconPosition:"right",textColor:o.colors.text.secondary}}},F=e=>P.create({badgeBase:{alignItems:"center",flexDirection:"row"},badgeFullWidth:{alignSelf:"stretch",borderRadius:w,gap:e.space[1],height:T,justifyContent:"center",paddingHorizontal:e.space[2]},badgeIconOnly:{alignSelf:"flex-start",borderRadius:w,height:I,justifyContent:"center",width:I},badgeInline:{alignSelf:"flex-start",borderRadius:e.radius.lg,gap:e.space[1],height:T,paddingHorizontal:e.space[2]},iconOnlySlot:{alignItems:"center",height:f,justifyContent:"center",width:f}}),b=e=>{const o=v(),t=N(F),{label:i,layout:r="inline",style:L,testID:j}=e,a=D.useMemo(()=>e.tone?U(e.tone,o):null,[e.tone,o]),B=a?.backgroundColor??e.backgroundColor,h=a?.icon??e.icon,S=e.iconPosition??a?.iconPosition??"left",_=a?.textColor??e.textColor,k=a?.textStyle??e.textStyle,E=r==="fullWidth"?t.badgeFullWidth:r==="iconOnly"?t.badgeIconOnly:t.badgeInline;return n.jsx(l,{testID:j,accessible:r==="iconOnly",accessibilityLabel:r==="iconOnly"?i:void 0,style:[t.badgeBase,E,{backgroundColor:B},L],children:r==="iconOnly"?n.jsx(l,{style:t.iconOnlySlot,children:h}):n.jsxs(n.Fragment,{children:[S==="left"?h:null,n.jsx(W,{variant:"caption/regular",style:[k,{color:_}],children:i}),S==="right"?h:null]})})};b.__docgenInfo={description:"Status pill: a short label with a tone icon (check / alert).",methods:[],displayName:"StatusBadge"};const M=["success","danger","warning","neutral"],G=["inline","fullWidth","iconOnly"],ee={title:"Components/StatusBadge",component:b,args:{label:"Given",tone:"success",layout:"inline"}},g={},u={args:{label:"Overdue",tone:"danger"}},p={args:{label:"Expiring soon",tone:"warning"}},m={args:{label:"Inactive",tone:"neutral"}},C={args:{label:"Overdue",tone:"danger",iconPosition:"left"}},y={render:()=>n.jsx(l,{style:{gap:c.space[3]},children:G.map(e=>n.jsx(l,{style:{flexDirection:"row",gap:c.space[2]},children:M.map(o=>n.jsx(l,{style:{flex:e==="fullWidth"?1:0},children:n.jsx(b,{label:o,tone:o,layout:e})},o))},e))})},s={args:{label:"Manual",tone:void 0,backgroundColor:c.palette.manualBadgeBackground,textColor:c.palette.manualBadgeForeground,icon:n.jsx(O,{size:14,color:c.palette.manualBadgeForeground})}},oe=["Success","Danger","Warning","Neutral","IconLeft","AllTonesAndLayouts","Legacy"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Overdue',
    tone: 'danger'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Expiring soon',
    tone: 'warning'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Inactive',
    tone: 'neutral'
  }
}`,...m.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Overdue',
    tone: 'danger',
    iconPosition: 'left'
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: lightTheme.space[3]
  }}>
      {LAYOUTS.map(layout => <View key={layout} style={{
      flexDirection: 'row',
      gap: lightTheme.space[2]
    }}>
          {TONES.map(tone => <View key={tone} style={{
        flex: layout === 'fullWidth' ? 1 : 0
      }}>
              <StatusBadge label={tone} tone={tone} layout={layout} />
            </View>)}
        </View>)}
    </View>
}`,...y.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Manual',
    tone: undefined,
    backgroundColor: lightTheme.palette.manualBadgeBackground,
    textColor: lightTheme.palette.manualBadgeForeground,
    icon: <CheckIcon size={14} color={lightTheme.palette.manualBadgeForeground} />
  }
}`,...s.parameters?.docs?.source},description:{story:"Deprecated API: explicit colors and icon.",...s.parameters?.docs?.description}}};export{y as AllTonesAndLayouts,u as Danger,C as IconLeft,s as Legacy,m as Neutral,g as Success,p as Warning,oe as __namedExportsOrder,ee as default};
