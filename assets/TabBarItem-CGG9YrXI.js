import{r as g,j as t,V as o,s as h}from"./iframe-Drba6mZ1.js";import{u as y}from"./useThemedStyles-cVR-DtoZ.js";import{M as T}from"./index-BeTpEGf2.js";import{I as b,D as r}from"./Icon-Cwc6oh7S.js";import{I as C}from"./IconTabToday-DR7JxeUL.js";const I=92,i=6,w=23,v=-2,S=e=>h.create({item:{alignItems:"center",flexDirection:"row",justifyContent:"center",paddingVertical:e.space[3],width:I},iconWrapper:{height:r,width:r},badge:{backgroundColor:e.colors.bg.accent,borderRadius:e.radius.full,height:i,left:w,position:"absolute",top:v,width:i}}),l=({icon:e=C,isFocused:a=!0,hasBadge:c=!1,accessibilityLabel:d,onPress:p,onPressIn:u,onLongPress:m,style:f,testID:n})=>{const s=y(S);return t.jsx(T,{accessibilityRole:"tab",accessibilityLabel:d,accessibilityState:{selected:a},onPress:p,onPressIn:u,onLongPress:m,style:[s.item,f],testID:n,children:t.jsxs(o,{style:s.iconWrapper,children:[t.jsx(b,{icon:e,color:a?"accent":"default"}),c?t.jsx(o,{style:s.badge,testID:n?`${n}.badge`:void 0}):null]})})},D=g.memo(l);l.__docgenInfo={description:"",methods:[],displayName:"TabBarItemComponent",props:{icon:{required:!1,tsType:{name:"ComponentType",elements:[{name:"IconComponentProps"}],raw:"ComponentType<IconComponentProps>"},description:"Section glyph. Figma INSTANCE_SWAP `icon`. Defaults to `IconTabToday`.",defaultValue:{value:`({
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
        d="M20.75 12C20.75 7.16751 16.8325 3.25 12 3.25C7.16751 3.25 3.25 7.16751 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12ZM22.25 12C22.25 17.6609 17.6609 22.25 12 22.25C6.33908 22.25 1.75 17.6609 1.75 12C1.75 6.33908 6.33908 1.75 12 1.75C17.6609 1.75 22.25 6.33908 22.25 12Z"
        fill={color}
      />
      <Path
        d="M15.2489 8.99023C15.5303 8.68658 16.0046 8.66817 16.3085 8.94922C16.6124 9.23064 16.6309 9.70583 16.3495 10.0098L11.3495 15.4092C11.211 15.5588 11.0172 15.6455 10.8134 15.6494C10.6095 15.6533 10.4126 15.5748 10.2684 15.4307L7.66884 12.8301C7.37604 12.5372 7.37598 12.0624 7.66884 11.7695C7.96171 11.4768 8.43652 11.4768 8.72939 11.7695L10.7772 13.8184L15.2489 8.99023Z"
        fill={color}
      />
    </Svg>
  );
}`,computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Focused (current) tab: accent icon. Figma VARIANT `isFocused`. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},hasBadge:{required:!1,tsType:{name:"boolean"},description:"Shows the 6pt dot at the icon corner. Figma BOOLEAN `hasBadge`. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},accessibilityLabel:{required:!0,tsType:{name:"string"},description:"Screen-reader name of the tab (the tab has no visible label)."},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called on tap (release); also covers VoiceOver / Switch Control activation."},onPressIn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called as the finger touches down, e.g. to switch tabs a tap earlier."},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called on long press."},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:"Outer style, e.g. `flex: 1` inside a bar. Applied last."},testID:{required:!1,tsType:{name:"string"},description:"Test identifier. The badge gets `${testID}.badge`."}}};export{D as T};
