import{r as j,j as s,V as i,s as D}from"./iframe-Drba6mZ1.js";import{u as A}from"./useThemedStyles-cVR-DtoZ.js";import{C as q}from"./Card-CrDEn9J4.js";import{T as v}from"./Text-Do5dS1qg.js";import{I as z}from"./index-BPIMqECe.js";import"./preload-helper-Zf8nSx-t.js";import"./index-BeTpEGf2.js";import"./extends-CF3RwP-h.js";import"./index-NHC-rSwp.js";import"./index-Do3x-qHF.js";import"./index-Cpa-95Zj.js";const P=144,a=120,O="5deg",N=-41,M=130,V="40",L={elevation:8,shadowOffset:{width:0,height:8},shadowOpacity:1,shadowRadius:16},k=e=>D.create({additionalText:{color:e.colors.text.secondary},images:{alignItems:"center",justifyContent:"center",paddingHorizontal:e.space[3],position:"relative",width:"100%"},leftImage:{borderRadius:e.radius.sm,height:a,left:e.space[3],overflow:"hidden",position:"absolute",top:e.space[3],transform:[{rotate:`-${O}`}],width:a},mainImageView:{...L,shadowColor:`${e.palette.black}${V}`,borderRadius:e.radius.sm,height:P,overflow:"hidden",width:P,zIndex:1},rightImage:{borderRadius:e.radius.sm,height:a,overflow:"hidden",position:"absolute",right:e.space[3],top:e.space[3],transform:[{rotate:O}],width:a},secondPhotos:{alignItems:"center",flexDirection:"row",justifyContent:"center"},secondRightImage:{marginLeft:N,position:"relative",right:"auto",top:"auto",width:M},textPlaceholder:{color:e.palette.lightGray}}),W=({uri:e,size:n})=>s.jsx(z,{source:{uri:e},style:{width:n,height:n},resizeMode:"cover"}),I=({title:e,photos:n=[],onPress:S,withShadow:b=!0,photoCountText:_,emptyText:U,useCompactTwoPhotoLayout:H=!1,renderImage:f=W,accessibilityLabel:E})=>{const o=A(k),r=j.useMemo(()=>n.filter(t=>typeof t?.fileUrl=="string"&&t.fileUrl.length>0).map(t=>({fileUrl:t.fileUrl,isCover:!!t.isCover})),[n]),w=r.some(t=>t.isCover),R=w?r.find(t=>t.isCover)?.fileUrl??"":r[0]?.fileUrl??"",T=w?r.filter(t=>!t.isCover):r.slice(1),y=T[1]?.fileUrl,C=T[0]?.fileUrl,x=r.length===2;return s.jsx(q,{withShadow:b,onPress:S,title:e,accessibilityLabel:E??e,additional:s.jsx(v,{variant:"headline/regular",style:o.additionalText,children:_}),children:r.length?s.jsxs(i,{style:[o.images,x&&o.secondPhotos],children:[y?s.jsx(i,{style:o.leftImage,children:f({uri:y,size:a})}):null,s.jsx(i,{style:o.mainImageView,children:f({uri:R,size:P})}),C?s.jsx(i,{style:[o.rightImage,H&&x&&o.secondRightImage],children:f({uri:C,size:a})}):null]}):s.jsx(v,{variant:"body/regular",style:o.textPlaceholder,children:U})})};I.__docgenInfo={description:"Card with a fanned stack of up to three photos, or an empty text.",methods:[],displayName:"PhotosPreviewCard",props:{title:{required:!0,tsType:{name:"string"},description:"Card title."},photos:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| {
    fileUrl?: string | null;
    isCover?: boolean;
  }
| null
| undefined`,elements:[{name:"signature",type:"object",raw:`{
  fileUrl?: string | null;
  isCover?: boolean;
}`,signature:{properties:[{key:"fileUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"isCover",value:{name:"boolean",required:!1}}]}},{name:"null"},{name:"undefined"}]}],raw:"PhotosPreviewCardPhoto[]"},description:"Photos. The cover (or the first one) is in front; two more fan out behind it.",defaultValue:{value:"[]",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Makes the card tappable."},withShadow:{required:!1,tsType:{name:"boolean"},description:"Draws the card shadow. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},photoCountText:{required:!0,tsType:{name:"string"},description:'Text next to the title, e.g. "3 photos".'},emptyText:{required:!0,tsType:{name:"string"},description:"Text shown when there are no photos."},useCompactTwoPhotoLayout:{required:!1,tsType:{name:"boolean"},description:"With exactly two photos, places the second one beside the main one.",defaultValue:{value:"false",computed:!1}},renderImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: PhotosPreviewCardRenderParams) => ReactNode",signature:{arguments:[{type:{name:"PhotosPreviewCardRenderParams"},name:"params"}],return:{name:"ReactNode"}}},description:"Draws a photo instead of the built-in `Image` (app: `DinamicImage`).",defaultValue:{value:`({ uri, size }: PhotosPreviewCardRenderParams) => (
  <Image
    source={{ uri }}
    style={{ width: size, height: size }}
    resizeMode="cover"
  />
)`,computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Screen-reader label of the tappable card."}}};const g=[{fileUrl:"https://picsum.photos/id/237/288/288",isCover:!0},{fileUrl:"https://picsum.photos/id/1025/240/240"},{fileUrl:"https://picsum.photos/id/169/240/240"}],te={title:"Components/PhotosPreviewCard",component:I,args:{title:"Photos",photoCountText:"3",emptyText:"No photos yet",photos:g}},l={},c={args:{photos:g.slice(0,2),photoCountText:"2"}},d={args:{photos:g.slice(0,2),photoCountText:"2",useCompactTwoPhotoLayout:!0}},p={args:{photos:g.slice(0,1),photoCountText:"1"}},u={args:{photos:[],photoCountText:"0"}},h={args:{onPress:()=>{}}},m={args:{withShadow:!1}},oe=["ThreePhotos","TwoPhotos","TwoPhotosCompact","OnePhoto","Empty","Pressable","Flat"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    photos: PHOTOS.slice(0, 2),
    photoCountText: '2'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    photos: PHOTOS.slice(0, 2),
    photoCountText: '2',
    useCompactTwoPhotoLayout: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    photos: PHOTOS.slice(0, 1),
    photoCountText: '1'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    photos: [],
    photoCountText: '0'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onPress: () => undefined
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    withShadow: false
  }
}`,...m.parameters?.docs?.source}}};export{u as Empty,m as Flat,p as OnePhoto,h as Pressable,l as ThreePhotos,c as TwoPhotos,d as TwoPhotosCompact,oe as __namedExportsOrder,te as default};
