import{j as t,s as c}from"./iframe-Drba6mZ1.js";import{u as p}from"./useThemedStyles-cVR-DtoZ.js";import{P as u}from"./Pressable-CfC83KfU.js";import{T as m}from"./Text-Do5dS1qg.js";import{I as f}from"./Icon-Cwc6oh7S.js";import{I as y}from"./IconCalendarDays-DX291SwN.js";const h=20,V=e=>c.create({label:{flexShrink:1},row:{alignItems:"center",backgroundColor:e.colors.bg.surface,borderColor:e.palette.lightGray,borderRadius:e.radius.sm,borderWidth:e.stroke[1],flexDirection:"row",justifyContent:"space-between",paddingHorizontal:e.space[6]-e.stroke[1],paddingVertical:e.space[4]-e.stroke[1]}}),g=({label:e,icon:o=y,isDestructive:a=!1,onPress:r,disabled:n=!1,accessibilityLabel:i,style:l,testID:d})=>{const s=p(V);return t.jsxs(u,{testID:d,accessibilityRole:"button",accessibilityLabel:i??e,disabled:n,onPress:r,style:[s.row,l],children:[t.jsx(m,{variant:"headline/medium",style:s.label,children:e}),t.jsx(f,{icon:o,size:h,color:a?"text.error":"default"})]})};g.__docgenInfo={description:"Action row of the task sheet (Figma `TaskSheetRow`): label on the left,\nicon on the right; the destructive variant paints only the icon red.",methods:[],displayName:"TaskSheetRow",props:{label:{required:!0,tsType:{name:"string"},description:"Row text. Figma TEXT `label`."},icon:{required:!1,tsType:{name:"ComponentType",elements:[{name:"IconComponentProps"}],raw:"ComponentType<IconComponentProps>"},description:"Icon on the right. Figma INSTANCE_SWAP `icon`. Defaults to `IconCalendarDays`.",defaultValue:{value:`({
  color,
  size = 24,
  width,
  height,
}: IconComponentProps) => {
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M7 11H9V13H7V11ZM21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5ZM5 7H19V5H5V7ZM19 19V9H5V19H19ZM15 13V11H17V13H15ZM11 13V11H13V13H11ZM7 15H9V17H7V15ZM15 17V15H17V17H15ZM11 17V15H13V17H11Z"
        fill={color}
      />
    </Svg>
  );
}`,computed:!1}},isDestructive:{required:!1,tsType:{name:"boolean"},description:"Destructive action: the icon turns red (the label stays dark). Figma VARIANT `isDestructive`. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called on tap."},disabled:{required:!1,tsType:{name:"boolean"},description:"Blocks the press and dims the row (`theme.opacity.disabled`, app 0.45). Not in Figma.",defaultValue:{value:"false",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Screen-reader label. Defaults to `label`."},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:"Outer layout style, applied last."},testID:{required:!1,tsType:{name:"string"},description:"Test identifier of the row."}}};export{g as T};
