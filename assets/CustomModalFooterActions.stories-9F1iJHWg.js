import{j as t,V as c,s as L}from"./iframe-Drba6mZ1.js";import{u as x}from"./useThemedStyles-cVR-DtoZ.js";import{B as y}from"./Button-CkI-qFPZ.js";import"./preload-helper-Zf8nSx-t.js";import"./index-Do3x-qHF.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-CxdHYcqo.js";import"./index-nQAgfKya.js";import"./index-CdAw7h69.js";import"./index-FuSJnDjU.js";const V=e=>L.create({column:{alignItems:"stretch",flexDirection:"column",gap:e.space[4]},row:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}),l=({cancelLabel:e,primaryLabel:f,onCancel:h,onPrimary:w,isPrimaryDisabled:b=!1,isPrimaryLoading:T=!1,primaryStyle:S="default",direction:v="row",style:A,testID:D,cancelTestID:P,primaryTestID:C})=>{const d=x(V),m=v==="column",u=t.jsx(y,{onPress:h,style:"light",testID:P,title:e}),p=t.jsx(y,{disabled:b,loading:T,onPress:w,style:S,testID:C,title:f});return t.jsxs(c,{style:[m?d.column:d.row,A],testID:D,children:[m?p:u,m?u:p]})};l.__docgenInfo={description:'Sheet footer (Figma `CustomModalFooterActions`): a light "Cancel" button and\nthe main action, side by side (`row`) or stacked with the main one on top\n(`column`).',methods:[],displayName:"CustomModalFooterActions",props:{cancelLabel:{required:!0,tsType:{name:"string"},description:"Text of the cancel button (Figma `Кнопка · вторая`, Button style=light)."},primaryLabel:{required:!0,tsType:{name:"string"},description:"Text of the main button (Figma `Кнопка · главная`, Button style=default)."},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the cancel button is tapped."},onPrimary:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the main button is tapped. Not called while disabled or loading."},isPrimaryDisabled:{required:!1,tsType:{name:"boolean"},description:"Blocks the main button and shows the disabled fill. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},isPrimaryLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a spinner in the main button and blocks it. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},primaryStyle:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'light'
| 'danger'
| 'dangerSimple'
| 'secondary'
| 'green'
| 'softGray'
| 'transparent'
| 'edit'
| 'link'
| 'main'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'light'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dangerSimple'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'green'"},{name:"literal",value:"'softGray'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'link'"},{name:"literal",value:"'main'"}]},description:"Kit `Button` style of the main button (e.g. `'danger'`). Defaults to `'default'`.",defaultValue:{value:"'default'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"Figma VARIANT `direction`. `'row'`: cancel left, main right, both hug\ntheir text. `'column'`: main on top, cancel below, both full width.\nDefaults to `'row'`.",defaultValue:{value:"'row'",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:"Outer style, applied last."},testID:{required:!1,tsType:{name:"string"},description:"Test identifier of the container."},cancelTestID:{required:!1,tsType:{name:"string"},description:"Test identifier of the cancel button."},primaryTestID:{required:!1,tsType:{name:"string"},description:"Test identifier of the main button."}}};const g=()=>{},F=382,q=24,K={title:"Components/CustomModalFooterActions",component:l,args:{cancelLabel:"Label",primaryLabel:"Label",onCancel:g,onPrimary:g,isPrimaryDisabled:!1,isPrimaryLoading:!1,primaryStyle:"default",direction:"row"},decorators:[e=>t.jsx(c,{style:{width:F},children:t.jsx(e,{})})]},r={},a={args:{direction:"column"}},n={args:{isPrimaryDisabled:!0}},o={args:{isPrimaryLoading:!0}},s={args:{primaryStyle:"danger",primaryLabel:"Delete"}},i={render:e=>t.jsxs(c,{style:{gap:q},children:[t.jsx(l,{...e,direction:"row"}),t.jsx(l,{...e,direction:"column"})]})},W=["Row","Column","PrimaryDisabled","PrimaryLoading","Danger","AllVariants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Figma `CustomModalFooterActions` direction=row.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'column'
  }
}`,...a.parameters?.docs?.source},description:{story:"Figma `CustomModalFooterActions` direction=column.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isPrimaryDisabled: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isPrimaryLoading: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    primaryStyle: 'danger',
    primaryLabel: 'Delete'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    gap: ALL_VARIANTS_GAP
  }}>
      <CustomModalFooterActions {...args} direction="row" />
      <CustomModalFooterActions {...args} direction="column" />
    </View>
}`,...i.parameters?.docs?.source}}};export{i as AllVariants,a as Column,s as Danger,n as PrimaryDisabled,o as PrimaryLoading,r as Row,W as __namedExportsOrder,K as default};
