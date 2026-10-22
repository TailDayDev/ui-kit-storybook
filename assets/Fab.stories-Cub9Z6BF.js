import{j as r,s as u}from"./iframe-Drba6mZ1.js";import{C as f}from"./CheckIcon-Df8qcKU4.js";import{P as h}from"./PlusIcon-BjD-KlOj.js";import{u as b}from"./useThemedStyles-cVR-DtoZ.js";import{P as g}from"./Pressable-CfC83KfU.js";import{I as y}from"./Icon-Cwc6oh7S.js";import{B as w}from"./Box-P5sGDsdo.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-COHihjjg.js";import"./index-Cpa-95Zj.js";import"./index-CJrLMJTa.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";const a=56,I=28,n=({onPress:e,accessibilityLabel:i,disabled:l=!1,icon:c=h,style:d,testID:p})=>{const m=b(S);return r.jsx(g,{onPress:e,disabled:l,accessibilityLabel:i,testID:p,style:[m.fab,d],children:r.jsx(y,{icon:c,size:I,color:"text.inverse"})})},S=e=>u.create({fab:{alignItems:"center",backgroundColor:e.palette.secondary,borderRadius:e.radius.full,boxShadow:[...e.shadows.fab],height:a,justifyContent:"center",width:a}});n.__docgenInfo={description:"Floating action button: 56pt green circle with a white glyph (Figma `Fab`).",methods:[],displayName:"Fab",props:{onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called on tap. Not called while `disabled`."},accessibilityLabel:{required:!0,tsType:{name:"string"},description:"Screen-reader text. Required: the button has no visible label."},disabled:{required:!1,tsType:{name:"boolean"},description:"Blocks interaction and dims the whole button (`opacity.disabled`, 0.45).",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ComponentType",elements:[{name:"IconComponentProps"}],raw:"ComponentType<IconComponentProps>"},description:"Glyph drawn in white at 28pt. Defaults to `PlusIcon`.",defaultValue:{value:`({
  color,
  size = PLUS_ICON_DEFAULT_SIZE,
  width,
  height,
}: IconComponentProps) => (
  <Svg
    width={width ?? size}
    height={height ?? size}
    viewBox="0 0 20 20"
    fill="none"
  >
    <Path
      d="M15.8332 10.8332H10.8332V15.8332H9.1665V10.8332H4.1665V9.1665H9.1665V4.1665H10.8332V9.1665H15.8332V10.8332Z"
      fill={color}
    />
  </Svg>
)`,computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:"Outer style. Positioning (`position: 'absolute'`, `right`, `bottom`) stays\nin the app; do not override size, fill or radius."},testID:{required:!1,tsType:{name:"string"},description:"Test identifier."}}};const H={title:"Components/Fab",component:n,args:{accessibilityLabel:"New task",disabled:!1},argTypes:{icon:{control:!1}},decorators:[e=>r.jsx(w,{padding:6,background:"screen",align:"flex-start",children:r.jsx(e,{})})]},t={},s={args:{disabled:!0}},o={args:{icon:f}},z=["Default","Disabled","CustomIcon"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"Press it to see the kit pressed opacity (0.85).",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: CheckIcon
  }
}`,...o.parameters?.docs?.source}}};export{o as CustomIcon,t as Default,s as Disabled,z as __namedExportsOrder,H as default};
