import{h as oi,i as Ge,j as Z,k as ai,l as oe,m as si}from"./chunk-MMIBGGZ5.js";import{a as Y,b as ri}from"./chunk-SWCWYY3E.js";import{a as Gt,c as Le,f as Re,h as qt,i as Yt,j as Xt,k as Jt,l as ne,m as ii,n as Oe,o as ot,p as He,q as ni}from"./chunk-2EBGCAL3.js";import{a as $e,b as et,c as tt,d as it,e as $t,f as ei,h as nt,i as ti}from"./chunk-RTNZTWZO.js";import{a as Be,c as kt}from"./chunk-P4SCHQ7K.js";import{a as L,c as Kt,d as Qe,h as Qt,i as w,j as Ze,k as Zt}from"./chunk-6JKHLIY7.js";import{A as V,B as A,C as k,D as B,E as ie,F as Ut,b as Vt,c as At,h as D,i as Bt,j as Q,k as Lt,l as M,n as Rt,o as dt,p as mt,r as Ot,s as Wt,t as jt,w as H,x as Nt}from"./chunk-3Z3RPJQU.js";import{d as lt,h as _,i as F,j as v,k as Ht,l as zt}from"./chunk-C4XHNY6F.js";import{Aa as p,Ba as G,Ca as qe,Da as vt,Ea as h,Fa as u,Ga as bt,H as ut,Hb as Ke,J as U,Ma as Ct,N as ue,Na as j,Oa as N,Pa as _e,Q as R,Qa as De,R as O,Ra as Te,Rb as Me,Sa as r,Sb as It,Ta as i,U as ct,Ua as e,Ub as q,Va as d,Wa as yt,X as Ee,Xa as Et,Za as Ye,Zb as I,_a as te,_b as Ft,aa as g,ab as S,bb as _t,cb as x,da as gt,db as ce,eb as ge,fb as Xe,g as E,gb as Je,hb as Fe,ib as Ve,ja as ht,jb as Ae,ka as ft,kb as Dt,lb as he,mb as we,na as l,nb as t,ob as Tt,pb as K,qb as b,rb as C,sb as y,ta as xt,ua as P,ub as wt,wa as St,xb as Mt,yb as Pt,zb as fe}from"./chunk-5X32GX6J.js";import{e as ye}from"./chunk-HHHS5ZAZ.js";var li=`<sui-embed
    suiSource="youtube"
    suiId="O6Xo21L0ybE"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var di=`<sui-embed
    suiSource="vimeo"
    suiId="125292332"
    suiPlaceHolder="https://semantic-ui.com/images/vimeo-example.jpg"></sui-embed>
`;var mi=`<sui-embed
    suiIcon="right circle arrow"
    suiSourceUrl="http://www.myfav.es/jack"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var pi=`<sui-embed
    suiAspectRatio="4:3"
    suiSource="youtube"
    suiId="HTZudKi36bo"
    suiPlaceHolder="https://semantic-ui.com/images/4by3.jpg"></sui-embed>
`;function Es(n,m){if(n&1&&d(0,"img",2),n&2){let o=x();r("src",o.suiPlaceHolder,ht)}}function _s(n,m){if(n&1&&(i(0,"div",3),d(1,"iframe",4),Mt(2,"safeUrl"),e()),n&2){let o=x();l(),r("src",Pt(2,1,o.videoUrl),ft)}}var Ds=(()=>{class n{constructor(){this.sanitizer=ue(Ft)}transform(o,...a){return this.sanitizer.bypassSecurityTrustResourceUrl(o)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275pipe=vt({name:"safeUrl",type:n,pure:!0})}}return n})(),ze=(()=>{class n{constructor(){this.cdr=ue(Ke),this.suiSource=null,this.suiAspectRatio=null,this.suiIcon="video play",this.suiId=null,this.suiPlaceHolder=null,this.suiSourceUrl=null,this.suiAutoplay=!1,this.isPLaying=!1,this.videoUrl=""}ngAfterViewInit(){this.suiAutoplay&&this.playVideo()}get classes(){return["ui",this.suiAspectRatio,"embed",F.getPropClass(this.isPLaying,"active")].join(" ")}playVideo(){this.suiSourceUrl&&(this.videoUrl=this.suiSourceUrl),this.suiSource==="vimeo"&&(this.videoUrl=`//player.vimeo.com/video/${this.suiId}?api=false&autoplay=true&byline=false&color=%23444444&portrait=false&title=false`),this.suiSource==="youtube"&&(this.videoUrl=`//www.youtube.com/embed/${this.suiId}?autohide=true&autoplay=true&color=%23444444&hq=true&jsapi=false&modestbranding=true`),this.isPLaying=!0,this.cdr.detectChanges()}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["sui-embed"]],inputs:{suiSource:"suiSource",suiAspectRatio:"suiAspectRatio",suiIcon:"suiIcon",suiId:"suiId",suiPlaceHolder:"suiPlaceHolder",suiSourceUrl:"suiSourceUrl",suiAutoplay:"suiAutoplay"},decls:4,vars:4,consts:[[3,"ngClass"],["sui-icon","",3,"click","suiIconType"],[1,"placeholder",3,"src"],[1,"embed"],["scrolling","no","webkitallowfullscreen","","mozallowfullscreen","","allowfullscreen","","width","100%","height","100%","frameborder","0",3,"src"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"i",1),S("click",function(){return s.playVideo()}),e(),j(2,Es,1,1,"img",2),j(3,_s,3,3,"div",3),e()),a&2&&(r("ngClass",s.classes),l(),r("suiIconType",s.suiIcon),l(),N(s.suiPlaceHolder?2:-1),l(),N(s.isPLaying?3:-1))},dependencies:[q,Me,D,Ds],encapsulation:2,changeDetection:0})}}return E([_()],n.prototype,"suiAutoplay",void 0),n})(),ui=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=U({imports:[q,ze]})}}return n})();var We=class{constructor(){this.isDefinitionsActive=!0}},ci=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-embed-youtube-example"]],standalone:!1,features:[h],decls:1,vars:0,consts:[["suiSource","youtube","suiId","O6Xo21L0ybE","suiPlaceHolder","https://semantic-ui.com/images/image-16by9.png"]],template:function(a,s){a&1&&d(0,"sui-embed",0)},dependencies:[ze],encapsulation:2})}}return n})(),gi=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-embed-vimeo-example"]],standalone:!1,features:[h],decls:1,vars:0,consts:[["suiSource","vimeo","suiId","125292332","suiPlaceHolder","https://semantic-ui.com/images/vimeo-example.jpg"]],template:function(a,s){a&1&&d(0,"sui-embed",0)},dependencies:[ze],encapsulation:2})}}return n})(),hi=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-embed-custom-content-example"]],standalone:!1,features:[h],decls:1,vars:0,consts:[["suiIcon","right circle arrow","suiSourceUrl","http://www.myfav.es/jack","suiPlaceHolder","https://semantic-ui.com/images/image-16by9.png"]],template:function(a,s){a&1&&d(0,"sui-embed",0)},dependencies:[ze],encapsulation:2})}}return n})(),fi=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-embed-aspect-ratio-example"]],standalone:!1,features:[h],decls:1,vars:0,consts:[["suiAspectRatio","4:3","suiSource","youtube","suiId","HTZudKi36bo","suiPlaceHolder","https://semantic-ui.com/images/4by3.jpg"]],template:function(a,s){a&1&&d(0,"sui-embed",0)},dependencies:[ze],encapsulation:2})}}return n})();function Ms(n,m){n&1&&d(0,"doc-embed-youtube-example")}function Ps(n,m){n&1&&d(0,"doc-embed-vimeo-example")}function Is(n,m){n&1&&d(0,"doc-embed-custom-content-example")}function Fs(n,m){n&1&&d(0,"doc-embed-aspect-ratio-example")}function Vs(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"States"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"YouTube"),e(),i(6,"p"),t(7,"An embed can be used to display YouTube Content"),e(),u(8,Ms,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Vimeo"),e(),i(12,"p"),t(13,"An embed can be used to display Vimeo content."),e(),u(14,Ps,1,0,"ng-template",5),e(),i(15,"doc-code-sample",3)(16,"h3",4),t(17,"Custom Content"),e(),i(18,"p"),t(19,"An embed can display any web content"),e(),u(20,Is,1,0,"ng-template",5),e(),i(21,"h2",2),t(22,"Variations"),e(),i(23,"doc-code-sample",3)(24,"h3",4),t(25,"Aspect Ratio"),e(),i(26,"p"),t(27,"An embed can specify an alternative aspect ratio"),e(),u(28,Fs,1,0,"ng-template",5),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetYoutube),l(6),r("templateCode",o.snippetVimeo),l(6),r("templateCode",o.snippetCustomContent),l(8),r("templateCode",o.snippetAspectRatio)}}function As(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-embed"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiSource"),e(),i(20,"td"),t(21,"Specifies a source to use. Cannot be used together with url. Allowed values could be "),i(22,"span",7),t(23,"'youtube'"),e(),t(24," | "),i(25,"span",7),t(26,"'vimeo'"),e(),t(27," | "),i(28,"span",7),t(29,"null"),e()(),i(30,"td")(31,"div",8),t(32," string"),e()(),i(33,"td")(34,"div",9),t(35," null"),e()()(),i(36,"tr")(37,"td"),t(38,"suiAspectRatio"),e(),i(39,"td"),t(40," An embed can specify an alternative aspect ratio. Allowed values could be "),i(41,"span",7),t(42,"'4:3'"),e(),t(43," | "),i(44,"span",7),t(45,"'16:9'"),e(),t(46," | "),i(47,"span",7),t(48,"'21:9'"),e(),t(49," | "),i(50,"span",7),t(51,"null"),e()(),i(52,"td")(53,"div",8),t(54,"string"),e()(),i(55,"td")(56,"div",9),t(57,"null"),e()()(),i(58,"tr")(59,"td"),t(60,"suiIcon "),e(),i(61,"td"),t(62," Specifies an icon to use with placeholder content. "),e(),i(63,"td")(64,"div",8),t(65,"string"),e()(),i(66,"td")(67,"div",9),t(68,"video play"),e()()(),i(69,"tr")(70,"td"),t(71,"suiId"),e(),i(72,"td"),t(73," Specifies an id for source. "),e(),i(74,"td")(75,"div",8),t(76,"string"),e(),t(77," | "),i(78,"div",8),t(79,"number"),e()(),i(80,"td")(81,"div",9),t(82,"null"),e()()(),i(83,"tr")(84,"td"),t(85,"suiPlaceHolder"),e(),i(86,"td"),t(87," A placeholder image for embed "),e(),i(88,"td")(89,"div",8),t(90,"string"),e()(),i(91,"td")(92,"div",9),t(93,"null"),e()()(),i(94,"tr")(95,"td"),t(96,"suiSourceUrl"),e(),i(97,"td"),t(98," Specifies a url to use for embed. Cannot be used together with source "),e(),i(99,"td")(100,"div",8),t(101,"string"),e()(),i(102,"td")(103,"div",9),t(104,"null"),e()()(),i(105,"tr")(106,"td"),t(107,"suiAutoplay"),e(),i(108,"td"),t(109," Setting to true or false will force autoplay "),e(),i(110,"td")(111,"div",8),t(112," boolean "),e()(),i(113,"td")(114,"div",9),t(115," false "),e()()()()()())}var xi=(()=>{class n{constructor(o){this.snippetYoutube=li,this.snippetVimeo=di,this.snippetCustomContent=mi,this.snippetAspectRatio=pi,this.isDefinitionsActive=!0,o.setTitle("Embed | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-embed"]],standalone:!1,decls:3,vars:2,consts:[["header","Embed","subHeader","An embed displays content from other websites like YouTube videos or Google Maps"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Vs,29,4,"div",1)(2,As,116,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,ci,gi,hi,fi],encapsulation:2})}}return n})();var Si=`<button sui-button
        (click)="simpleDimmerVisible = !simpleDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     [(dimmed)]="simpleDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var vi=`dimmerVisible: boolean = false;
`;var bi=`<button sui-button
        (click)="contentDimmerVisible = !contentDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     [(dimmed)]="contentDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>

  <ng-template suiDimmerContent>
    <h2 sui-header
        suiIcon
        suiInverted>
      <i sui-icon
         suiIconType="heart"></i>
      Dimmed Message!
    </h2>
  </ng-template>
</div>
`;var Ci=`<button sui-button
        (click)="pageDimmerVisible = !pageDimmerVisible">
  Toggle Dimmer
</button>

<div sui-dimmer
     suiDimmerFullPage
     [(dimmed)]="pageDimmerVisible">
  <ng-template suiDimmerContent>
    <h2 sui-header
        suiIcon
        suiInverted>
      <i sui-icon
         suiIconType="mail"></i>
      Dimmed Message
    </h2>
    <div suiSubHeader>Dimmer sub-header</div>
  </ng-template>
</div>
`;var yi=`<div sui-segment
     sui-dimmer
     dimmed="true">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Ei=`<div sui-segment
     sui-dimmer
     disabled>
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var _i=`<button sui-button
        (click)="blurringDimmerVisible = !blurringDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerBlurring
     [(dimmed)]="blurringDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Di=`<button sui-button
        (click)="blurringDInvertedDimmerVisible = !blurringDInvertedDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerBlurring
     suiDimmerInverted
     [(dimmed)]="blurringDInvertedDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Ti=`<button sui-button
        (click)="topAlignmentDimmerVisible = !topAlignmentDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerAlignment="top"
     [(dimmed)]="topAlignmentDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>

  <ng-template suiDimmerContent>
    <h2 sui-header
        suiInverted>
      Title
    </h2>
    <div sui-button
         suiEmphasis="primary">Add
    </div>
    <div sui-button>View</div>
  </ng-template>
</div>
`;var wi=`<button sui-button
        (click)="bottomAlignmentDimmerVisible = !bottomAlignmentDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerAlignment="bottom"
     [(dimmed)]="bottomAlignmentDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>

  <ng-template suiDimmerContent>
    <h2 sui-header
        suiInverted>
      Title
    </h2>
    <div sui-button
         suiEmphasis="primary">Add
    </div>
    <div sui-button>View</div>
  </ng-template>
</div>
`;var Mi=`<button sui-button
        (click)="invertedDimmerVisible = !invertedDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerInverted
     [(dimmed)]="invertedDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;function Gs(n,m){n&1&&(i(0,"h2",4),d(1,"i",5),t(2," Dimmed Message! "),e())}function qs(n,m){n&1&&(i(0,"h2",3),d(1,"i",4),t(2," Dimmed Message "),e(),i(3,"div",5),t(4,"Dimmer sub-header"),e())}function Ys(n,m){n&1&&(i(0,"h2",4),t(1," Title "),e(),i(2,"div",5),t(3,"Add "),e(),i(4,"div",6),t(5,"View"),e())}function Xs(n,m){n&1&&(i(0,"h2",4),t(1," Title "),e(),i(2,"div",5),t(3,"Add "),e(),i(4,"div",6),t(5,"View"),e())}var J=class{constructor(){this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1}},Pi=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-simple-example"]],standalone:!1,features:[h],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.simpleDimmerVisible=!s.simpleDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),y("dimmedChange",function(c){return C(s.simpleDimmerVisible,c)||(s.simpleDimmerVisible=c),c}),d(3,"doc-wireframe",2),e()),a&2&&(l(2),b("dimmed",s.simpleDimmerVisible))},dependencies:[ie,w,Z,H],encapsulation:2})}}return n})(),Ii=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-content-example"]],standalone:!1,features:[h],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiIcon","","suiInverted",""],["sui-icon","","suiIconType","heart"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.contentDimmerVisible=!s.contentDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),y("dimmedChange",function(c){return C(s.contentDimmerVisible,c)||(s.contentDimmerVisible=c),c}),d(3,"doc-wireframe",2),u(4,Gs,3,0,"ng-template",3),e()),a&2&&(l(2),b("dimmed",s.contentDimmerVisible))},dependencies:[ie,v,w,Z,Ge,D,H],encapsulation:2})}}return n})(),Fi=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-page-example"]],standalone:!1,features:[h],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-dimmer","","suiDimmerFullPage","",3,"dimmedChange","dimmed"],["suiDimmerContent",""],["sui-header","","suiIcon","","suiInverted",""],["sui-icon","","suiIconType","mail"],["suiSubHeader",""]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.pageDimmerVisible=!s.pageDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),y("dimmedChange",function(c){return C(s.pageDimmerVisible,c)||(s.pageDimmerVisible=c),c}),u(3,qs,5,0,"ng-template",2),e()),a&2&&(l(2),b("dimmed",s.pageDimmerVisible))},dependencies:[v,Ht,w,Z,Ge,D],encapsulation:2})}}return n})(),Vi=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-active-example"]],standalone:!1,features:[h],decls:2,vars:0,consts:[["sui-segment","","sui-dimmer","","dimmed","true"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"div",0),d(1,"doc-wireframe",1),e())},dependencies:[ie,Z,H],encapsulation:2})}}return n})(),Ai=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-disabled-example"]],standalone:!1,features:[h],decls:2,vars:0,consts:[["sui-segment","","sui-dimmer","","disabled",""],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"div",0),d(1,"doc-wireframe",1),e())},dependencies:[ie,Z,H],encapsulation:2})}}return n})(),ki=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-blurring-example"]],standalone:!1,features:[h],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerBlurring","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.blurringDimmerVisible=!s.blurringDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),y("dimmedChange",function(c){return C(s.blurringDimmerVisible,c)||(s.blurringDimmerVisible=c),c}),d(3,"doc-wireframe",2),e()),a&2&&(l(2),b("dimmed",s.blurringDimmerVisible))},dependencies:[ie,w,Z,H],encapsulation:2})}}return n})(),Bi=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-blurring-inverted-example"]],standalone:!1,features:[h],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerBlurring","","suiDimmerInverted","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.blurringDInvertedDimmerVisible=!s.blurringDInvertedDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),y("dimmedChange",function(c){return C(s.blurringDInvertedDimmerVisible,c)||(s.blurringDInvertedDimmerVisible=c),c}),d(3,"doc-wireframe",2),e()),a&2&&(l(2),b("dimmed",s.blurringDInvertedDimmerVisible))},dependencies:[ie,w,Z,H],encapsulation:2})}}return n})(),Li=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-top-alignment-example"]],standalone:!1,features:[h],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerAlignment","top",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiInverted",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.topAlignmentDimmerVisible=!s.topAlignmentDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),y("dimmedChange",function(c){return C(s.topAlignmentDimmerVisible,c)||(s.topAlignmentDimmerVisible=c),c}),d(3,"doc-wireframe",2),u(4,Ys,6,0,"ng-template",3),e()),a&2&&(l(2),b("dimmed",s.topAlignmentDimmerVisible))},dependencies:[ie,v,w,Z,Ge,H],encapsulation:2})}}return n})(),Ri=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-bottom-alignment-example"]],standalone:!1,features:[h],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerAlignment","bottom",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiInverted",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.bottomAlignmentDimmerVisible=!s.bottomAlignmentDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),y("dimmedChange",function(c){return C(s.bottomAlignmentDimmerVisible,c)||(s.bottomAlignmentDimmerVisible=c),c}),d(3,"doc-wireframe",2),u(4,Xs,6,0,"ng-template",3),e()),a&2&&(l(2),b("dimmed",s.bottomAlignmentDimmerVisible))},dependencies:[ie,v,w,Z,Ge,H],encapsulation:2})}}return n})(),Oi=(()=>{class n extends J{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer-inverted-example"]],standalone:!1,features:[h],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerInverted","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.invertedDimmerVisible=!s.invertedDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),y("dimmedChange",function(c){return C(s.invertedDimmerVisible,c)||(s.invertedDimmerVisible=c),c}),d(3,"doc-wireframe",2),e()),a&2&&(l(2),b("dimmed",s.invertedDimmerVisible))},dependencies:[ie,w,Z,H],encapsulation:2})}}return n})();function Ks(n,m){n&1&&d(0,"doc-dimmer-simple-example")}function Qs(n,m){n&1&&d(0,"doc-dimmer-content-example")}function Zs(n,m){n&1&&d(0,"doc-dimmer-page-example")}function $s(n,m){n&1&&d(0,"doc-dimmer-active-example")}function er(n,m){n&1&&d(0,"doc-dimmer-disabled-example")}function tr(n,m){n&1&&d(0,"doc-dimmer-blurring-example")}function ir(n,m){n&1&&d(0,"doc-dimmer-blurring-inverted-example")}function nr(n,m){n&1&&d(0,"doc-dimmer-top-alignment-example")}function or(n,m){n&1&&d(0,"doc-dimmer-bottom-alignment-example")}function ar(n,m){n&1&&d(0,"doc-dimmer-inverted-example")}function sr(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Dimmer"),e(),i(6,"p"),t(7,"A simple dimmer displays no content"),e(),u(8,Ks,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Content Dimmer"),e(),i(12,"p"),t(13,"A dimmer can display content"),e(),u(14,Qs,1,0,"ng-template",5),e(),i(15,"doc-code-sample",3)(16,"h3",4),t(17,"Page Dimmer"),e(),i(18,"p"),t(19,"A dimmer can be formatted to be fixed to the page"),e(),u(20,Zs,1,0,"ng-template",5),e(),i(21,"h2",2),t(22,"States"),e(),i(23,"doc-code-sample",6)(24,"h3",4),t(25,"Active"),e(),i(26,"p"),t(27,"An active dimmer will dim its parent container"),e(),u(28,$s,1,0,"ng-template",5),e(),i(29,"doc-code-sample",6)(30,"h3",4),t(31,"Disabled"),e(),i(32,"p"),t(33,"A disabled dimmer cannot be activated"),e(),u(34,er,1,0,"ng-template",5),e(),i(35,"h2",2),t(36,"Variations"),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Blurring"),e(),i(40,"p"),t(41,"A dimmable element can blur its contents"),e(),u(42,tr,1,0,"ng-template",5),e(),i(43,"doc-code-sample",3),u(44,ir,1,0,"ng-template",5),e(),i(45,"doc-code-sample",3)(46,"h3",4),t(47,"Vertical Alignment"),e(),i(48,"p"),t(49,"A dimmer can have its content top or bottom aligned."),e(),u(50,nr,1,0,"ng-template",5),e(),i(51,"doc-code-sample",3),u(52,or,1,0,"ng-template",5),e(),i(53,"doc-code-sample",3)(54,"h3",4),t(55,"Inverted"),e(),i(56,"p"),t(57,"A dimmer can be formatted to have its colours inverted"),e(),u(58,ar,1,0,"ng-template",5),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetSimple)("componentCode",o.snippetSharedTs),l(6),r("templateCode",o.snippetContent)("componentCode",o.snippetSharedTs),l(6),r("templateCode",o.snippetPage)("componentCode",o.snippetSharedTs),l(8),r("templateCode",o.snippetActive),l(6),r("templateCode",o.snippetDisabled),l(8),r("templateCode",o.snippetBlurring)("componentCode",o.snippetSharedTs),l(6),r("templateCode",o.snippetBlurringInverted)("componentCode",o.snippetSharedTs),l(2),r("templateCode",o.snippetTopAligned)("componentCode",o.snippetSharedTs),l(6),r("templateCode",o.snippetBottomAligned)("componentCode",o.snippetSharedTs),l(2),r("templateCode",o.snippetInverted)("componentCode",o.snippetSharedTs)}}function rr(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-dimmer"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiDimmerAlignment"),e(),i(20,"td"),t(21,"Specifies the dimmer content position. Allowed values could be "),i(22,"span",8),t(23,"'top'"),e(),t(24," | "),i(25,"span",8),t(26,"'bottom'"),e(),t(27," | "),i(28,"span",8),t(29,"null"),e()(),i(30,"td")(31,"div",9),t(32,"string"),e()(),i(33,"td")(34,"div",10),t(35,"top"),e()()(),i(36,"tr")(37,"td"),t(38,"suiDimmerBlurring"),e(),i(39,"td"),t(40,"Determine if the dimmer should blur the background"),e(),i(41,"td")(42,"div",9),t(43,"boolean "),e()(),i(44,"td")(45,"div",10),t(46,"false "),e()()(),i(47,"tr")(48,"td"),t(49,"suiDimmerInverted"),e(),i(50,"td"),t(51,"Determine if the dimmer should invert its colours"),e(),i(52,"td")(53,"div",9),t(54,"boolean "),e()(),i(55,"td")(56,"div",10),t(57,"false "),e()()(),i(58,"tr")(59,"td"),t(60,"suiDimmerSimple"),e(),i(61,"td"),t(62,"Show a simple dimmer"),e(),i(63,"td")(64,"div",9),t(65,"boolean "),e()(),i(66,"td")(67,"div",10),t(68,"false "),e()()(),i(69,"tr")(70,"td"),t(71,"suiDimmerFullPage"),e(),i(72,"td"),t(73,"Determine if the dimmer should cover the entire page"),e(),i(74,"td")(75,"div",9),t(76,"boolean "),e()(),i(77,"td")(78,"div",10),t(79,"false "),e()()(),i(80,"tr")(81,"td"),t(82,"suiCloseOnClick"),e(),i(83,"td"),t(84,"Determine if the dimmer should be closed when the mask or any other location is clicked"),e(),i(85,"td")(86,"div",9),t(87,"boolean "),e()(),i(88,"td")(89,"div",10),t(90,"true "),e()()(),i(91,"tr")(92,"td"),t(93,"disabled"),e(),i(94,"td"),t(95,"Stop the dimmer from responding to actions"),e(),i(96,"td")(97,"div",9),t(98,"boolean "),e()(),i(99,"td")(100,"div",10),t(101,"false "),e()()(),i(102,"tr")(103,"td"),t(104,"dimmed"),e(),i(105,"td"),t(106,"Determines if the dimmer is shown or not. This field supports two way binding following the "),i(107,"code"),t(108,"[(dimmed)]"),e(),t(109," syntax. "),e(),i(110,"td")(111,"div",9),t(112,"boolean "),e()(),i(113,"td")(114,"div",10),t(115,"false "),e()()()()(),i(116,"h2",2),t(117,"suiDimmerContent"),e(),i(118,"h4",4),t(119,"Properties"),e(),i(120,"table",7)(121,"thead")(122,"tr")(123,"th"),t(124,"Property"),e(),i(125,"th"),t(126,"Description"),e(),i(127,"th"),t(128,"Type"),e(),i(129,"th"),t(130,"Default"),e()()(),d(131,"tbody"),i(132,"tfoot",11)(133,"tr")(134,"th",12)(135,"div",13),t(136,"No properties for this directive"),e()()()()()())}var Hi=(()=>{class n{constructor(o){this.snippetSimple=Si,this.snippetSharedTs=vi,this.snippetContent=bi,this.snippetPage=Ci,this.snippetActive=yi,this.snippetDisabled=Ei,this.snippetBlurring=_i,this.snippetBlurringInverted=Di,this.snippetTopAligned=Ti,this.snippetBottomAligned=wi,this.snippetInverted=Mi,this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1,o.setTitle("Dimmer | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-dimmer"]],standalone:!1,decls:3,vars:2,consts:[["header","Dimmer","subHeader","A dimmer hides distractions to focus attention on particular content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["docDemo",""],[3,"templateCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,sr,59,18,"div",1)(2,rr,137,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,Pi,Ii,Fi,Vi,Ai,ki,Bi,Li,Ri,Oi],styles:["button[_ngcontent-%COMP%]{margin-bottom:1.2rem!important}"]})}}return n})();var zi=`<sui-rating suiMaxValue="1"></sui-rating>
`;var Wi=`<sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
`;var ji=`<sui-rating
    suiType="heart"
    suiValue="1"
    suiMaxValue="3"></sui-rating>
`;var Ni=`<sui-rating
    suiSize="mini"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="tiny"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="small"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="large"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="huge"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="huge"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
<br><br>
<sui-rating
    suiSize="massive"
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
`;function ur(n,m){if(n&1){let o=te();yt(0,"i",1),_t("click",function(){let s=R(o).$implicit,f=x();return O(f.onClick(s))})("mouseover",function(){let s=R(o).$implicit,f=x();return O(f.onHover(s))})("mouseout",function(){R(o);let s=x();return O(s.onUnhover())}),Et()}if(n&2){let o=m.$implicit,a=x();he("active",o<=a.suiValue)("selected",o<=a.hoverValue)}}var ke=(()=>{class n{set suiValue(o){this.value!==o&&(this.value=+o)}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.generateRatingsArray()}get suiMaxValue(){return this.maxValue}get classes(){return["ui",this.suiSize,this.suiType,F.getPropClass(this.suiReadOnly,"read-only"),"rating",F.getPropClass(this.hoverValue>0,"selected")].join(" ")}constructor(){this.changeDetectorRef=ue(Ke),this.valueChanged=new Ee,this.suiSize=null,this.suiType=null,this.suiReadOnly=!1,this.suiClearable=!1,this.ratingsArray=[],this.hoverValue=0,this.value=0,this.maxValue=5,this.controlValueChangeFn=()=>{},this.generateRatingsArray()}onClick(o){this.suiReadOnly||(this.suiClearable&&this.suiValue===o&&(o=0),this.suiValue!==o&&(this.controlValueChangeFn(o),this.valueChanged.emit(o)),this.suiValue=o)}onHover(o){this.suiReadOnly?this.hoverValue=0:this.hoverValue=o}onUnhover(){this.suiReadOnly||(this.hoverValue=0)}writeValue(o){this.suiValue=o,this.changeDetectorRef.markForCheck()}registerOnChange(o){this.controlValueChangeFn=o}registerOnTouched(o){}setDisabledState(o){}generateRatingsArray(){this.ratingsArray=Array(this.maxValue).fill(0).map((o,a)=>a+1)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["sui-rating"]],hostVars:2,hostBindings:function(a,s){a&2&&we(s.classes)},inputs:{suiSize:"suiSize",suiType:"suiType",suiReadOnly:"suiReadOnly",suiClearable:"suiClearable",suiValue:"suiValue",suiMaxValue:"suiMaxValue"},outputs:{valueChanged:"valueChanged"},features:[wt([{provide:Gt,useExisting:ut(()=>n),multi:!0}])],decls:2,vars:0,consts:[[1,"icon",3,"active","selected"],[1,"icon",3,"click","mouseover","mouseout"]],template:function(a,s){a&1&&De(0,ur,1,4,"i",0,_e),a&2&&Te(s.ratingsArray)},styles:[`:host.read-only .icon{cursor:auto}
`],encapsulation:2})}}return E([_()],n.prototype,"suiReadOnly",void 0),E([_()],n.prototype,"suiClearable",void 0),n})(),Ui=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=U({})}}return n})();var je=class{constructor(){this.isDefinitionsActive=!0}},qi=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-rating-basic-example"]],standalone:!1,features:[h],decls:1,vars:0,consts:[["suiMaxValue","1"]],template:function(a,s){a&1&&d(0,"sui-rating",0)},dependencies:[ke],encapsulation:2})}}return n})(),Yi=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-rating-star-example"]],standalone:!1,features:[h],decls:1,vars:0,consts:[["suiType","star","suiValue","3","suiMaxValue","4"]],template:function(a,s){a&1&&d(0,"sui-rating",0)},dependencies:[ke],encapsulation:2})}}return n})(),Xi=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-rating-heart-example"]],standalone:!1,features:[h],decls:1,vars:0,consts:[["suiType","heart","suiValue","1","suiMaxValue","3"]],template:function(a,s){a&1&&d(0,"sui-rating",0)},dependencies:[ke],encapsulation:2})}}return n})(),Ji=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-rating-sizes-example"]],standalone:!1,features:[h],decls:22,vars:0,consts:[["suiSize","mini","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","tiny","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","small","suiType","star","suiValue","3","suiMaxValue","4"],["suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","large","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","huge","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","massive","suiType","star","suiValue","3","suiMaxValue","4"]],template:function(a,s){a&1&&d(0,"sui-rating",0)(1,"br")(2,"br")(3,"sui-rating",1)(4,"br")(5,"br")(6,"sui-rating",2)(7,"br")(8,"br")(9,"sui-rating",3)(10,"br")(11,"br")(12,"sui-rating",4)(13,"br")(14,"br")(15,"sui-rating",5)(16,"br")(17,"br")(18,"sui-rating",5)(19,"br")(20,"br")(21,"sui-rating",6)},dependencies:[ke],encapsulation:2})}}return n})();function gr(n,m){n&1&&d(0,"doc-rating-basic-example")}function hr(n,m){n&1&&d(0,"doc-rating-star-example")}function fr(n,m){n&1&&d(0,"doc-rating-heart-example")}function xr(n,m){n&1&&d(0,"doc-rating-sizes-example")}function Sr(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"States"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Rating "),i(6,"span",5),t(7,"Flexbox"),e()(),i(8,"p"),t(9,"A basic rating"),e(),u(10,gr,1,0,"ng-template",6),e(),i(11,"doc-code-sample",3)(12,"h3",4),t(13,"Star"),e(),i(14,"p"),t(15,"A rating can use a set of star icons"),e(),u(16,hr,1,0,"ng-template",6),e(),i(17,"doc-code-sample",3)(18,"h3",4),t(19,"Heart"),e(),i(20,"p"),t(21,"A rating can use a set of heart icons"),e(),u(22,fr,1,0,"ng-template",6),e(),i(23,"h2",2),t(24,"Variations"),e(),i(25,"doc-code-sample",3)(26,"h3",4),t(27,"Size"),e(),i(28,"p"),t(29,"A rating can vary in size"),e(),u(30,xr,1,0,"ng-template",6),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetBasic),l(8),r("templateCode",o.snippetStar),l(6),r("templateCode",o.snippetHeart),l(8),r("templateCode",o.snippetSizes)}}function vr(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-rating"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiSize"),e(),i(20,"td"),t(21,"Set the rating size. Allowed values could be "),i(22,"span",8),t(23,"mini"),e(),t(24," | "),i(25,"span",8),t(26,"tiny"),e(),t(27," | "),i(28,"span",8),t(29,"small"),e(),t(30," | "),i(31,"span",8),t(32,"medium"),e(),t(33," | "),i(34,"span",8),t(35,"big"),e(),t(36," | "),i(37,"span",8),t(38,"huge"),e(),t(39," | "),i(40,"span",8),t(41,"massive"),e(),t(42," | "),i(43,"span",8),t(44,"null"),e()(),i(45,"td")(46,"div",5),t(47," string "),e()(),i(48,"td")(49,"div",9),t(50," null "),e()()(),i(51,"tr")(52,"td"),t(53,"suiType"),e(),i(54,"td"),t(55,"Specifies a icon to use. Cannot be used together with url. Allowed values could be "),i(56,"span",8),t(57,"star"),e(),t(58," | "),i(59,"span",8),t(60,"heart"),e(),t(61," | "),i(62,"span",8),t(63,"null"),e()(),i(64,"td")(65,"div",5),t(66," string"),e()(),i(67,"td")(68,"div",9),t(69," null"),e()()(),i(70,"tr")(71,"td"),t(72,"suiReadOnly "),e(),i(73,"td"),t(74," Setting to true or false will determine if users can change the rating value "),e(),i(75,"td")(76,"div",5),t(77," boolean "),e()(),i(78,"td")(79,"div",9),t(80," false "),e()()(),i(81,"tr")(82,"td"),t(83,"suiClearable"),e(),i(84,"td"),t(85," Setting to true or false will determine if clicking on the value would reset it "),e(),i(86,"td")(87,"div",5),t(88," boolean "),e()(),i(89,"td")(90,"div",9),t(91," false "),e()()()()(),i(92,"h4",4),t(93,"Events"),e(),i(94,"table",7)(95,"thead")(96,"tr")(97,"th"),t(98,"Event"),e(),i(99,"th"),t(100,"Description"),e(),i(101,"th"),t(102,"Type"),e()()(),i(103,"tbody")(104,"tr")(105,"td"),t(106,"valueChanged "),e(),i(107,"td"),t(108,"Fired when the rating value is changed. Also supports "),i(109,"code"),t(110,"[(ngModel)]"),e(),t(111," syntax"),e(),i(112,"td")(113,"div",5),t(114," number "),e()()()()()())}var Ki=(()=>{class n{constructor(o){this.snippetBasic=zi,this.snippetStar=Wi,this.snippetHeart=ji,this.snippetSizes=Ni,this.isDefinitionsActive=!0,o.setTitle("Rating | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-rating"]],standalone:!1,decls:3,vars:2,consts:[["header","Rating","subHeader","A rating indicates user interest in content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-label","","suiColour","teal"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Sr,31,4,"div",1)(2,vr,115,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,qi,Yi,Xi,Ji],encapsulation:2})}}return n})();var Qi=`<sui-search
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var Zi=`<sui-search
    suiShowIcon
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var $i=`<sui-search
    suiShowIcon
    suiPlaceholder="Common animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var en=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="countries">
</sui-search>
`;var tn=`countries = [
  { title: 'Andorra' },
  { title: 'United Arab Emirates' },
  { title: 'Afghanistan' },
  { title: 'Antigua' },
  { title: 'Anguilla' },
  { title: 'Albania' },
  { title: 'Armenia' },
  { title: 'Netherlands Antilles' },
  { title: 'Angola' },
  { title: 'Argentina' },
  { title: 'American Samoa' },
  { title: 'Austria' },
  { title: 'Australia' },
  { title: 'Aruba' },
  { title: 'Aland Islands' },
  { title: 'Azerbaijan' },
  { title: 'Bosnia' },
  { title: 'Barbados' },
  { title: 'Bangladesh' },
  { title: 'Belgium' },
  { title: 'Burkina Faso' },
  { title: 'Bulgaria' },
  { title: 'Bahrain' },
  { title: 'Burundi' }
];
`;var nn=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="categoryContent">
</sui-search>
`;var on=`categoryContent = [
  { category: 'South America', title: 'Brazil' },
  { category: 'South America', title: 'Peru' },
  { category: 'North America', title: 'Canada' },
  { category: 'Asia', title: 'South Korea' },
  { category: 'Asia', title: 'Japan' },
  { category: 'Asia', title: 'China' },
  { category: 'Europe', title: 'Denmark' },
  { category: 'Europe', title: 'England' },
  { category: 'Europe', title: 'France' },
  { category: 'Europe', title: 'Germany' },
  { category: 'Africa', title: 'Ethiopia' },
  { category: 'Africa', title: 'Nigeria' },
  { category: 'Africa', title: 'Zimbabwe' }
];
`;var an=`<sui-search
    suiLoading
    suiPlaceholder="Search..."
    [suiOptions]="blankOptions">
</sui-search>
`;var sn=`<sui-search
    disabled
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptions]="blankOptions">
</sui-search>
`;var rn=`<sui-search
    suiFluid
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var ln=`<sui-search
    suiShowIcon
    suiAlignment="right"
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var $=class n{constructor(){this.blankOptions=[],this.countries=[{title:"Andorra"},{title:"United Arab Emirates"},{title:"Afghanistan"},{title:"Antigua"},{title:"Anguilla"},{title:"Albania"},{title:"Armenia"},{title:"Netherlands Antilles"},{title:"Angola"},{title:"Argentina"},{title:"American Samoa"},{title:"Austria"},{title:"Australia"},{title:"Aruba"},{title:"Aland Islands"},{title:"Azerbaijan"},{title:"Bosnia"},{title:"Barbados"},{title:"Bangladesh"},{title:"Belgium"},{title:"Burkina Faso"},{title:"Bulgaria"},{title:"Bahrain"},{title:"Burundi"}],this.categoryContent=[{category:"South America",title:"Brazil"},{category:"South America",title:"Peru"},{category:"North America",title:"Canada"},{category:"Asia",title:"South Korea"},{category:"Asia",title:"Japan"},{category:"Asia",title:"China"},{category:"Europe",title:"Denmark"},{category:"Europe",title:"England"},{category:"Europe",title:"France"},{category:"Europe",title:"Germany"},{category:"Africa",title:"Ethiopia"},{category:"Africa",title:"Nigeria"},{category:"Africa",title:"Zimbabwe"}]}searchText(m){return ye(this,null,function*(){let o=`https://api.semantic-ui.com/search/${m}`;return n.callUrl(o)})}searchCategories(m){return ye(this,null,function*(){let o=`https://api.semantic-ui.com/search/category/${m}`;return n.callUrl(o)})}static callUrl(m){return ye(this,null,function*(){try{return(yield(yield fetch(m)).json()).results}catch(o){return[]}})}},dn=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-basic-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiPlaceholder","Common passwords...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptionsLookup",s.searchText)},dependencies:[oe],encapsulation:2})}}return n})(),mn=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-basic-alt-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Common passwords...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptionsLookup",s.searchText)},dependencies:[oe],encapsulation:2})}}return n})(),pn=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-category-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Common animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptionsLookup",s.searchCategories)},dependencies:[oe],encapsulation:2})}}return n})(),un=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-local-search-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Search countries...",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptions",s.countries)},dependencies:[oe],encapsulation:2})}}return n})(),cn=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-local-category-search-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Search countries...",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptions",s.categoryContent)},dependencies:[oe],encapsulation:2})}}return n})(),gn=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-loading-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiLoading","","suiPlaceholder","Search...",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptions",s.blankOptions)},dependencies:[oe],encapsulation:2})}}return n})(),hn=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-disabled-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["disabled","","suiShowIcon","","suiPlaceholder","Search animals...",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptions",s.blankOptions)},dependencies:[oe],encapsulation:2})}}return n})(),fn=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-fluid-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiFluid","","suiShowIcon","","suiPlaceholder","Search animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptionsLookup",s.searchCategories)},dependencies:[oe],encapsulation:2})}}return n})(),xn=(()=>{class n extends ${static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-search-aligned-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiShowIcon","","suiAlignment","right","suiPlaceholder","Search animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&d(0,"sui-search",0),a&2&&r("suiOptionsLookup",s.searchCategories)},dependencies:[oe],encapsulation:2})}}return n})();function Vr(n,m){n&1&&d(0,"doc-search-basic-example")}function Ar(n,m){n&1&&d(0,"doc-search-basic-alt-example")}function kr(n,m){n&1&&d(0,"doc-search-category-example")}function Br(n,m){n&1&&d(0,"doc-search-local-search-example")}function Lr(n,m){n&1&&d(0,"doc-search-local-category-search-example")}function Rr(n,m){n&1&&d(0,"doc-search-loading-example")}function Or(n,m){n&1&&d(0,"doc-search-disabled-example")}function Hr(n,m){n&1&&d(0,"doc-search-fluid-example")}function zr(n,m){n&1&&d(0,"doc-search-aligned-example")}function Wr(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Type"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Search"),e(),i(6,"p"),t(7,"A basic search element"),e(),u(8,Vr,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3),u(10,Ar,1,0,"ng-template",5),e(),i(11,"doc-code-sample",3)(12,"h3",4),t(13,"Category"),e(),i(14,"p"),t(15,"A search can display results from remote content ordered by categories"),e(),u(16,kr,1,0,"ng-template",5),e(),i(17,"doc-code-sample",6)(18,"h3",4),t(19,"Local Search"),e(),i(20,"p"),t(21,"A search can look for results inside a static local source."),e(),u(22,Br,1,0,"ng-template",5),e(),i(23,"doc-code-sample",6)(24,"h3",4),t(25,"Local Category Search"),e(),i(26,"p"),t(27,"A search can look for category results inside a static local source."),e(),u(28,Lr,1,0,"ng-template",5),e(),d(29,"br"),i(30,"h2",2),t(31,"States"),e(),i(32,"doc-code-sample",3)(33,"h3",4),t(34,"Loading"),e(),i(35,"p"),t(36,"A search can show a loading indicator."),e(),u(37,Rr,1,0,"ng-template",5),e(),d(38,"br"),i(39,"h2",2),t(40,"Variations"),e(),i(41,"doc-code-sample",3)(42,"h3",4),t(43,"Disabled"),e(),i(44,"p"),t(45,"A search can show it is currently unable to be interacted with."),e(),u(46,Or,1,0,"ng-template",5),e(),i(47,"doc-code-sample",3)(48,"h3",4),t(49,"Fluid"),e(),i(50,"p"),t(51,"A search can have its results take up the width of its container."),e(),u(52,Hr,1,0,"ng-template",5),e(),i(53,"doc-code-sample",3)(54,"h3",4),t(55,"Aligned"),e(),i(56,"p"),t(57,"A search can have its results aligned to its left or right container edge."),e(),u(58,zr,1,0,"ng-template",5),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetBasic),l(6),r("templateCode",o.snippetBasicAlt),l(2),r("templateCode",o.snippetCategory),l(6),r("templateCode",o.snippetLocalSearch)("componentCode",o.snippetLocalSearchTs),l(6),r("templateCode",o.snippetLocalCategorySearch)("componentCode",o.snippetLocalCategorySearchTs),l(9),r("templateCode",o.snippetLoading),l(9),r("templateCode",o.snippetDisabled),l(6),r("templateCode",o.snippetFluid),l(6),r("templateCode",o.snippetAligned)}}function jr(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-search"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiAlignment"),e(),i(20,"td"),t(21,"Set the search result alignment. Allowed values could be "),i(22,"span",8),t(23,"right"),e(),t(24," | "),i(25,"span",8),t(26,"null"),e()(),i(27,"td")(28,"div",9),t(29," string "),e()(),i(30,"td")(31,"div",10),t(32," null "),e()()(),i(33,"tr")(34,"td"),t(35,"suiPlaceholder"),e(),i(36,"td"),t(37,"Set the search input placeholder text. "),e(),i(38,"td")(39,"div",9),t(40," string "),e()(),i(41,"td")(42,"div",10),t(43," null "),e()()(),i(44,"tr")(45,"td"),t(46,"suiSearchDelay"),e(),i(47,"td"),t(48,"Set the delay (in milliseconds) before a search is started. "),e(),i(49,"td")(50,"div",9),t(51," number "),e()(),i(52,"td")(53,"div",10),t(54," 200 "),e()()(),i(55,"tr")(56,"td"),t(57,"suiShowIcon"),e(),i(58,"td"),t(59,"Determine whether or not to show the search icon "),e(),i(60,"td")(61,"div",9),t(62," boolean "),e()(),i(63,"td")(64,"div",10),t(65," false "),e()()(),i(66,"tr")(67,"td"),t(68,"disabled"),e(),i(69,"td"),t(70,"Determine whether or not to disable the search functionality "),e(),i(71,"td")(72,"div",9),t(73," boolean "),e()(),i(74,"td")(75,"div",10),t(76," false "),e()()(),i(77,"tr")(78,"td"),t(79,"suiFluid"),e(),i(80,"td"),t(81,"Determine whether or not the search results fill the width of their container "),e(),i(82,"td")(83,"div",9),t(84," boolean "),e()(),i(85,"td")(86,"div",10),t(87," false "),e()()(),i(88,"tr")(89,"td"),t(90,"suiLoading"),e(),i(91,"td"),t(92,"Determine whether or not to manually override the loading icon display "),e(),i(93,"td")(94,"div",9),t(95," boolean "),e()(),i(96,"td")(97,"div",10),t(98," false "),e()()(),i(99,"tr")(100,"td"),t(101,"suiOptions"),e(),i(102,"td"),t(103,"The options available to search. Cannot be used in conjunction with "),i(104,"code"),t(105,"suiOptionsLookup"),e()(),i(106,"td")(107,"div",9),t(108," Array<{title: string, category: string (optional), description: string (optional)}> "),e()(),i(109,"td")(110,"div",10),t(111," null "),e()()(),i(112,"tr")(113,"td"),t(114,"suiOptionsLookup"),e(),i(115,"td"),t(116,"A function to asynchronously search a remote resource with the provided query. Cannot be used in conjunction with "),i(117,"code"),t(118,"suiOptions"),e()(),i(119,"td")(120,"div",9),t(121," (query: string) => Promise<Array<{title: string, category: string (optional), description: string (optional)}>> "),e()(),i(122,"td")(123,"div",10),t(124," null "),e()()()()(),i(125,"h4",4),t(126,"Events"),e(),i(127,"table",7)(128,"thead")(129,"tr")(130,"th"),t(131,"Property"),e(),i(132,"th"),t(133,"Description"),e(),i(134,"th"),t(135,"Type"),e()()(),i(136,"tbody")(137,"tr")(138,"td"),t(139,"suiResultSelected"),e(),i(140,"td"),t(141,"Fired when a result is selected. "),e(),i(142,"td")(143,"div",9),t(144," {title: string, category: string, description: string} "),e()()()()()())}var Sn=(()=>{class n{constructor(o){this.snippetBasic=Qi,this.snippetBasicAlt=Zi,this.snippetCategory=$i,this.snippetLocalSearch=en,this.snippetLocalSearchTs=tn,this.snippetLocalCategorySearch=nn,this.snippetLocalCategorySearchTs=on,this.snippetLoading=an,this.snippetDisabled=sn,this.snippetFluid=rn,this.snippetAligned=ln,this.blankOptions=[],this.countries=[{title:"Andorra"},{title:"United Arab Emirates"},{title:"Afghanistan"},{title:"Antigua"},{title:"Anguilla"},{title:"Albania"},{title:"Armenia"},{title:"Netherlands Antilles"},{title:"Angola"},{title:"Argentina"},{title:"American Samoa"},{title:"Austria"},{title:"Australia"},{title:"Aruba"},{title:"Aland Islands"},{title:"Azerbaijan"},{title:"Bosnia"},{title:"Barbados"},{title:"Bangladesh"},{title:"Belgium"},{title:"Burkina Faso"},{title:"Bulgaria"},{title:"Bahrain"},{title:"Burundi"}],this.categoryContent=[{category:"South America",title:"Brazil"},{category:"South America",title:"Peru"},{category:"North America",title:"Canada"},{category:"Asia",title:"South Korea"},{category:"Asia",title:"Japan"},{category:"Asia",title:"China"},{category:"Europe",title:"Denmark"},{category:"Europe",title:"England"},{category:"Europe",title:"France"},{category:"Europe",title:"Germany"},{category:"Africa",title:"Ethiopia"},{category:"Africa",title:"Nigeria"},{category:"Africa",title:"Zimbabwe"}],o.setTitle("Search | Ngx Semantic")}searchText(o){return ye(this,null,function*(){let a=`https://api.semantic-ui.com/search/${o}`;return n.callUrl(a)})}searchCategories(o){return ye(this,null,function*(){let a=`https://api.semantic-ui.com/search/category/${o}`;return n.callUrl(a)})}static callUrl(o){return ye(this,null,function*(){try{return(yield(yield fetch(o)).json()).results}catch(a){return[]}})}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-search"]],standalone:!1,decls:3,vars:2,consts:[["header","Search","subHeader","A search module allows a user to query for results from a selection of data"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Wr,59,11,"div",1)(2,jr,145,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,dn,mn,pn,un,cn,gn,hn,fn,xn],encapsulation:2})}}return n})();var vn=`<sui-tabs>
  <sui-tab
    suiTitle="HTML">
    <h3>HTML</h3>
    <p>
      HTML (HyperText Markup Language) is the most basic building block of
      the Web. It describes and defines the content of a webpage along with
      the basic layout of the webpage. Other technologies besides HTML are
      generally used to describe a web page's appearance/presentation (CSS)
      or functionality/ behavior (JavaScript).
    </p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">developer.mozilla.org</a>
  </sui-tab>
  <sui-tab
    suiTitle="CSS">
    <h3>CSS</h3>
    <p>
      Cascading Style Sheets (CSS) is a stylesheet language used to describe
      the presentation of a document written in HTML or XML (including XML
      dialects such as SVG or XHTML). CSS describes how elements should be
      rendered on screen, on paper, in speech, or on other media.
    </p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">developer.mozilla.org</a>
  </sui-tab>
  <sui-tab
    suiTitle="JavaScript">
    <h3>JavaScript</h3>
    <p>
      JavaScript (JS) is a lightweight interpreted or JIT-compiled
      programming language with first-class functions. While it is most
      well-known as the scripting language for Web pages, many non-browser
      environments also use it, such as Node.js, Apache CouchDB and Adobe
      Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic
      language, supporting object-oriented, imperative, and declarative
      (e.g. functional programming) styles.
    </p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">developer.mozilla.org</a>
  </sui-tab>
</sui-tabs>
`;var bn=`<sui-tabs
  suiTabType="pointing">
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var Cn=`<sui-tabs
  suiTabType="text">
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var yn=`<sui-tabs>
  <sui-tab
    suiLoading
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var En=`<sui-tabs>
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    disabled
    suiTitle="Secret Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var _n=`<sui-tabs
  suiTabType="secondary"
  suiTabMenuPosition="bottom">
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var Dn=`<select name="tab-colour"
  [(ngModel)]="tabColour">
  @for (colour of colours; track colour) {
    <option
    [value]="colour">{{colour}}</option>
  }
</select>

<sui-tabs
  suiTabType="pointing"
  [suiColour]="tabColour">
  <sui-tab
    suiTitle="Circle">
    Circle
  </sui-tab>
  <sui-tab
    suiTitle="Box">
    Box
  </sui-tab>
  <sui-tab
    suiTitle="Triangle">
    Triangle
  </sui-tab>
</sui-tabs>
`;var Kr=["contentTemplate"],Qr=["*"];function Zr(n,m){n&1&&ge(0)}function $r(n,m){n&1&&Ye(0)}function el(n,m){if(n&1&&u(0,$r,1,0,"ng-container",2),n&2){x(2);let o=Ae(2);r("ngTemplateOutlet",o)}}function tl(n,m){n&1&&Ye(0)}function il(n,m){if(n&1&&u(0,tl,1,0,"ng-container",2),n&2){let o=x(2);r("ngTemplateOutlet",o.currentTab.contentTemplate)}}function nl(n,m){n&1&&Ye(0)}function ol(n,m){if(n&1&&u(0,nl,1,0,"ng-container",2),n&2){x(2);let o=Ae(2);r("ngTemplateOutlet",o)}}function al(n,m){if(n&1&&(j(0,el,1,1,"ng-container"),i(1,"div",1),j(2,il,1,1,"ng-container"),e(),j(3,ol,1,1,"ng-container")),n&2){let o=x();N(o.isTop?0:-1),l(),he("loading",o.currentTab==null?null:o.currentTab.suiLoading),r("suiAttached",o.segmentAttachment),l(),N(o.currentTab?2:-1),l(),N(o.isTop?-1:3)}}function sl(n,m){if(n&1&&d(0,"i",6),n&2){let o=x().$implicit;r("suiIconType",o.suiIcon)}}function rl(n,m){if(n&1&&(i(0,"div",7),t(1),e()),n&2){let o=x().$implicit;r("suiColour",o.suiLabelColour)("suiCircular",o.suiLabelCircular),l(),K(" ",o.suiLabel," ")}}function ll(n,m){if(n&1){let o=te();i(0,"div",5),S("click",function(){let s=R(o),f=s.$implicit,c=s.$index,Ss=x(2);return O(Ss.changeTab(f,c))}),j(1,sl,1,1,"i",6),t(2),j(3,rl,2,3,"div",7),e()}if(n&2){let o=m.$implicit,a=m.$index,s=x(2);r("disabled",o.disabled)("suiActive",s.isTabSelected(a)),l(),N(o.suiIcon?1:-1),l(),K(" ",o.suiTitle," "),l(),N(o.suiLabel?3:-1)}}function dl(n,m){if(n&1&&(i(0,"div",3),De(1,ll,4,5,"div",4,_e),e()),n&2){let o=x();r("suiInverted",o.suiInverted)("suiColour",o.suiColour)("suiAttached",o.menuAttachment)("suiTabular",o.isBasic)("suiSecondary",o.isSecondary)("suiPointing",o.isPointing)("suiText",o.isText)("suiBorderless",o.isBorderless),l(),Te(o.tabs)}}var xe=(()=>{class n{constructor(){this.suiTitle=null,this.suiIcon=null,this.suiLabel=null,this.suiLoading=!1,this.disabled=!1,this.suiLabelColour=null,this.suiLabelCircular=!1}get classes(){return[F.getPropClass(this.suiLoading,"loading"),F.getPropClass(this.disabled,"disabled")].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["sui-tab"]],viewQuery:function(a,s){if(a&1&&Je(Kr,7),a&2){let f;Fe(f=Ve())&&(s.contentTemplate=f.first)}},hostVars:2,hostBindings:function(a,s){a&2&&we(s.classes)},inputs:{suiContent:"suiContent",suiTitle:"suiTitle",suiIcon:"suiIcon",suiLabel:"suiLabel",suiLoading:"suiLoading",disabled:"disabled",suiLabelColour:"suiLabelColour",suiLabelCircular:"suiLabelCircular"},exportAs:["suiTab"],ngContentSelectors:Qr,decls:2,vars:0,consts:[["contentTemplate",""]],template:function(a,s){a&1&&(ce(),bt(0,Zr,1,0,"ng-template",null,0,fe))},encapsulation:2})}}return E([_()],n.prototype,"suiLoading",void 0),E([_()],n.prototype,"disabled",void 0),E([_()],n.prototype,"suiLabelCircular",void 0),n})(),Se=(()=>{class n{constructor(){this.tabs=new gt,this.suiTabMenuPosition="top",this.suiTabType="basic",this.suiColour=null,this.suiInverted=!1,this.suiSelectedIndexChanged=new Ee,this.selectedTabIndex=0,this.hasTabs=!1,this.currentTab=null}get isSecondary(){return this.suiTabType==="secondary"}get isBasic(){return this.suiTabType==="basic"}get isPointing(){return this.suiTabType==="pointing"}get isText(){return this.suiTabType==="text"}get isBorderless(){return this.suiTabType==="borderless"}get isTop(){return this.suiTabMenuPosition==="top"}get menuAttachment(){return this.suiTabType==="basic"?this.isTop?"top":"bottom":null}get segmentAttachment(){return this.suiTabType==="basic"?this.isTop?"bottom attached":"top attached":null}changeTab(o,a){if(o.disabled)return;let s=this.selectedTabIndex!==a;this.selectedTabIndex=a,this.setCurrentTab(),s&&this.suiSelectedIndexChanged.emit(this.selectedTabIndex)}isTabSelected(o){return this.selectedTabIndex===o}ngAfterContentChecked(){this.setCurrentTab()}setCurrentTab(){let o=this.tabs.toArray();this.hasTabs=o.length>0,this.currentTab=o[this.selectedTabIndex]}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["sui-tabs"]],contentQueries:function(a,s,f){if(a&1&&Xe(f,xe,4),a&2){let c;Fe(c=Ve())&&(s.tabs=c)}},inputs:{suiTabMenuPosition:"suiTabMenuPosition",suiTabType:"suiTabType",suiColour:"suiColour",suiInverted:"suiInverted"},outputs:{suiSelectedIndexChanged:"suiSelectedIndexChanged"},decls:3,vars:1,consts:[["tabMenu",""],["sui-segment","",1,"active","tab",3,"suiAttached"],[4,"ngTemplateOutlet"],["sui-menu","",3,"suiInverted","suiColour","suiAttached","suiTabular","suiSecondary","suiPointing","suiText","suiBorderless"],["suiMenuItem","",3,"disabled","suiActive"],["suiMenuItem","",3,"click","disabled","suiActive"],["sui-icon","",3,"suiIconType"],["sui-label","",3,"suiColour","suiCircular"]],template:function(a,s){a&1&&(j(0,al,4,6),u(1,dl,3,8,"ng-template",null,0,fe)),a&2&&N(s.hasTabs?0:-1)},dependencies:[q,It,H,Vt,At,D,M],encapsulation:2,changeDetection:0})}}return E([_()],n.prototype,"suiInverted",void 0),n})(),Tn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=U({imports:[q,Se]})}}return n})();function ul(n,m){if(n&1&&(i(0,"option",1),t(1),e()),n&2){let o=m.$implicit;r("value",o),l(),Tt(o)}}var ve=class{constructor(){this.isDefinitionsActive=!0,this.colours=["red","orange","green","blue","violet"],this.tabColour="blue",this.isTabDisabled=!1}},wn=(()=>{class n extends ve{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-tab-basic-example"]],standalone:!1,features:[h],decls:22,vars:0,consts:[["suiTitle","HTML"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML"],["suiTitle","CSS"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS"],["suiTitle","JavaScript"],["href","https://developer.mozilla.org/en-US/docs/Web/javascript"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0)(2,"h3"),t(3,"HTML"),e(),i(4,"p"),t(5," HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript). "),e(),i(6,"a",1),t(7,"developer.mozilla.org"),e()(),i(8,"sui-tab",2)(9,"h3"),t(10,"CSS"),e(),i(11,"p"),t(12," Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. "),e(),i(13,"a",3),t(14,"developer.mozilla.org"),e()(),i(15,"sui-tab",4)(16,"h3"),t(17,"JavaScript"),e(),i(18,"p"),t(19," JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. "),e(),i(20,"a",5),t(21,"developer.mozilla.org"),e()()())},dependencies:[xe,Se],encapsulation:2})}}return n})(),Mn=(()=>{class n extends ve{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-tab-pointing-menu-example"]],standalone:!1,features:[h],decls:7,vars:0,consts:[["suiTabType","pointing"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),t(2," Circle "),e(),i(3,"sui-tab",2),t(4," Box "),e(),i(5,"sui-tab",3),t(6," Triangle "),e()())},dependencies:[xe,Se],encapsulation:2})}}return n})(),Pn=(()=>{class n extends ve{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-tab-text-menu-example"]],standalone:!1,features:[h],decls:7,vars:0,consts:[["suiTabType","text"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),t(2," Circle "),e(),i(3,"sui-tab",2),t(4," Box "),e(),i(5,"sui-tab",3),t(6," Triangle "),e()())},dependencies:[xe,Se],encapsulation:2})}}return n})(),In=(()=>{class n extends ve{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-tab-loading-example"]],standalone:!1,features:[h],decls:7,vars:0,consts:[["suiLoading","","suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0),t(2," Circle "),e(),i(3,"sui-tab",1),t(4," Box "),e(),i(5,"sui-tab",2),t(6," Triangle "),e()())},dependencies:[xe,Se],encapsulation:2})}}return n})(),Fn=(()=>{class n extends ve{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-tab-disabled-example"]],standalone:!1,features:[h],decls:7,vars:0,consts:[["suiTitle","Circle"],["suiTitle","Box"],["disabled","","suiTitle","Secret Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0),t(2," Circle "),e(),i(3,"sui-tab",1),t(4," Box "),e(),i(5,"sui-tab",2),t(6," Triangle "),e()())},dependencies:[xe,Se],encapsulation:2})}}return n})(),Vn=(()=>{class n extends ve{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-tab-positioned-example"]],standalone:!1,features:[h],decls:7,vars:0,consts:[["suiTabType","secondary","suiTabMenuPosition","bottom"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),t(2," Circle "),e(),i(3,"sui-tab",2),t(4," Box "),e(),i(5,"sui-tab",3),t(6," Triangle "),e()())},dependencies:[xe,Se],encapsulation:2})}}return n})(),An=(()=>{class n extends ve{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-tab-coloured-example"]],standalone:!1,features:[h],decls:10,vars:2,consts:[["name","tab-colour",3,"ngModelChange","ngModel"],[3,"value"],["suiTabType","pointing",3,"suiColour"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"select",0),y("ngModelChange",function(c){return C(s.tabColour,c)||(s.tabColour=c),c}),De(1,ul,2,2,"option",1,_e),e(),i(3,"sui-tabs",2)(4,"sui-tab",3),t(5," Circle "),e(),i(6,"sui-tab",4),t(7," Box "),e(),i(8,"sui-tab",5),t(9," Triangle "),e()()),a&2&&(b("ngModel",s.tabColour),l(),Te(s.colours),l(2),r("suiColour",s.tabColour))},dependencies:[Yt,Xt,qt,Le,Re,xe,Se],encapsulation:2})}}return n})();function gl(n,m){n&1&&d(0,"doc-tab-basic-example")}function hl(n,m){n&1&&d(0,"doc-tab-pointing-menu-example")}function fl(n,m){n&1&&d(0,"doc-tab-text-menu-example")}function xl(n,m){n&1&&d(0,"doc-tab-loading-example")}function Sl(n,m){n&1&&d(0,"doc-tab-disabled-example")}function vl(n,m){n&1&&d(0,"doc-tab-positioned-example")}function bl(n,m){n&1&&d(0,"doc-tab-coloured-example")}function Cl(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Type"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Tab"),e(),i(6,"p"),t(7,"A basic tab"),e(),u(8,gl,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Pointing Menu"),e(),i(12,"p"),t(13,"A tab menu can point to its tab panes"),e(),u(14,hl,1,0,"ng-template",5),e(),i(15,"doc-code-sample",3)(16,"h3",4),t(17,"Text Menu"),e(),i(18,"p"),t(19,"A tab menu can be formatted for text content"),e(),u(20,fl,1,0,"ng-template",5),e(),d(21,"br"),i(22,"h2",2),t(23,"States"),e(),i(24,"doc-code-sample",3)(25,"h3",4),t(26,"Loading"),e(),i(27,"p"),t(28,"A tab can display a loading indicator."),e(),u(29,xl,1,0,"ng-template",5),e(),i(30,"doc-code-sample",3)(31,"h3",4),t(32,"Disabled"),e(),i(33,"p"),t(34,"A tab can be disabled"),e(),u(35,Sl,1,0,"ng-template",5),e(),d(36,"br"),i(37,"h2",2),t(38,"Menu Variations"),e(),i(39,"doc-code-sample",3)(40,"h3",4),t(41,"Position"),e(),i(42,"p"),t(43,"A tab can be positioned."),e(),u(44,vl,1,0,"ng-template",5),e(),i(45,"doc-code-sample",3)(46,"h3",4),t(47,"Coloured"),e(),i(48,"p"),t(49,"A tab can be coloured."),e(),u(50,bl,1,0,"ng-template",5),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetBasic),l(6),r("templateCode",o.snippetPointing),l(6),r("templateCode",o.snippetText),l(9),r("templateCode",o.snippetLoading),l(6),r("templateCode",o.snippetDisabled),l(9),r("templateCode",o.snippetPositioned),l(6),r("templateCode",o.snippetColoured)}}function yl(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-tabs"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiTabMenuPosition"),e(),i(20,"td"),t(21,"Specifies the menu position. Allowed values could be "),i(22,"span",7),t(23,"'top'"),e(),t(24," | "),i(25,"span",7),t(26,"'bottom'"),e()(),i(27,"td")(28,"div",8),t(29,"string"),e()(),i(30,"td")(31,"div",9),t(32,"top"),e()()(),i(33,"tr")(34,"td"),t(35,"suiTabType"),e(),i(36,"td"),t(37," Determine the styling for the tab menu. Allowed values could be "),i(38,"span",7),t(39,"'basic'"),e(),t(40," | "),i(41,"span",7),t(42,"'pointing'"),e(),t(43," | "),i(44,"span",7),t(45,"'secondary'"),e(),t(46," | "),i(47,"span",7),t(48,"'text'"),e(),t(49," | "),i(50,"span",7),t(51,"null"),e()(),i(52,"td")(53,"div",8),t(54,"string"),e()(),i(55,"td")(56,"div",9),t(57,"basic"),e()()(),i(58,"tr")(59,"td"),t(60,"suiColour"),e(),i(61,"td"),t(62,"Set the menu colour. Allowed values could be "),i(63,"span",7),t(64,"'red'"),e(),t(65," | "),i(66,"span",7),t(67,"'orange'"),e(),t(68," | "),i(69,"span",7),t(70,"'yellow'"),e(),t(71," | "),i(72,"span",7),t(73,"'olive'"),e(),t(74," | "),i(75,"span",7),t(76,"'green'"),e(),t(77," | "),i(78,"span",7),t(79,"'teal'"),e(),t(80," | "),i(81,"span",7),t(82,"'blue'"),e(),t(83," | "),i(84,"span",7),t(85,"'violet'"),e(),t(86," | "),i(87,"span",7),t(88,"'purple'"),e(),t(89," | "),i(90,"span",7),t(91,"'pink'"),e(),t(92," | "),i(93,"span",7),t(94,"'brown'"),e(),t(95," | "),i(96,"span",7),t(97,"'grey'"),e(),t(98," | "),i(99,"span",7),t(100,"'black'"),e(),t(101," | "),i(102,"span",7),t(103,"null"),e()(),i(104,"td")(105,"div",8),t(106," string "),e()(),i(107,"td")(108,"div",9),t(109," null "),e()()()()(),i(110,"h4",4),t(111,"Events"),e(),i(112,"table",6)(113,"thead")(114,"tr")(115,"th"),t(116,"Event"),e(),i(117,"th"),t(118,"Description"),e(),i(119,"th"),t(120,"Type"),e()()(),i(121,"tbody")(122,"tr")(123,"td"),t(124,"suiSelectedIndexChanged"),e(),i(125,"td"),t(126,"Fires when the selected tab is changed. Index starts from 0."),e(),i(127,"td")(128,"div",8),t(129,"number"),e()()()()(),i(130,"h2",2),t(131,"sui-tab"),e(),i(132,"h4",4),t(133,"Properties"),e(),i(134,"table",6)(135,"thead")(136,"tr")(137,"th"),t(138,"Property"),e(),i(139,"th"),t(140,"Description"),e(),i(141,"th"),t(142,"Type"),e(),i(143,"th"),t(144,"Default"),e()()(),i(145,"tbody")(146,"tr")(147,"td"),t(148,"suiTitle"),e(),i(149,"td"),t(150,"Set the tab title"),e(),i(151,"td")(152,"div",8),t(153,"string"),e()(),i(154,"td")(155,"div",9),t(156,"null"),e()()(),i(157,"tr")(158,"td"),t(159,"suiIcon"),e(),i(160,"td"),t(161,"Set the tab icon"),e(),i(162,"td")(163,"div",8),t(164,"string"),e()(),i(165,"td")(166,"div",9),t(167,"null"),e()()(),i(168,"tr")(169,"td"),t(170,"suiLoading"),e(),i(171,"td"),t(172,"Show the loading icon"),e(),i(173,"td")(174,"div",8),t(175," boolean "),e()(),i(176,"td")(177,"div",9),t(178," false "),e()()(),i(179,"tr")(180,"td"),t(181,"disabled"),e(),i(182,"td"),t(183,"Prevent the tab from being activated"),e(),i(184,"td")(185,"div",8),t(186," boolean "),e()(),i(187,"td")(188,"div",9),t(189," false "),e()()()()()())}var kn=(()=>{class n{constructor(o){this.snippetBasic=vn,this.snippetPointing=bn,this.snippetText=Cn,this.snippetLoading=yn,this.snippetDisabled=En,this.snippetPositioned=_n,this.snippetColoured=Dn,this.isDefinitionsActive=!0,this.colours=["red","orange","green","blue","violet"],this.tabColour="blue",this.isTabDisabled=!1,o.setTitle("Tab | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-tab"]],standalone:!1,decls:3,vars:2,consts:[["header","Tab","subHeader","A tab is a hidden section of content activated by a menu"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Cl,51,7,"div",1)(2,yl,190,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,wn,Mn,Pn,In,Fn,Vn,An],styles:["select[_ngcontent-%COMP%]{margin-bottom:1rem}"]})}}return n})();var Bn=`<sui-accordion>
  <sui-accordion-panel
      isOpen
      suiTitle="What is a dog?">
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
      welcome guest in many households across the world.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="What kinds of dogs are there?">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
      dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="How do you acquire a dog?">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
      shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
      assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
      from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </sui-accordion-panel>
</sui-accordion>
`;var Ln=`<sui-accordion suiStyled>
  <sui-accordion-panel
      suiTitle="What is a dog?">
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
      welcome guest in many households across the world.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="What kinds of dogs are there?">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
      dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="How do you acquire a dog?">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
      shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
      assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
      from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </sui-accordion-panel>
</sui-accordion>
`;var Rn=`<sui-accordion suiStyled suiFluid>
  <sui-accordion-panel
      suiTitle="What is a dog?">
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
      welcome guest in many households across the world.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="What kinds of dogs are there?">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
      dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </sui-accordion-panel>
  <sui-accordion-panel
      suiTitle="How do you acquire a dog?">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
      shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
      assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
      from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </sui-accordion-panel>
</sui-accordion>
`;var On=`<div sui-segment suiInverted>
  <sui-accordion suiInverted=>
    <sui-accordion-panel
        suiTitle="What is a dog?">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
        welcome guest in many households across the world.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
        suiTitle="What kinds of dogs are there?">
      <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed
        of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
        suiTitle="How do you acquire a dog?">
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
        shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
        assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
        from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </sui-accordion-panel>
  </sui-accordion>
</div>
`;var Hn=["*"],Ne=(()=>{class n{constructor(){this.suiTitle="",this.disabled=!1,this.isOpenChange=new Ee,this._isOpen=!1}get isOpen(){return this._isOpen}set isOpen(o){this.disabled||(this._isOpen=o,this.isOpenChange.emit(o))}toggle(){this.isOpen=!this.isOpen}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["sui-accordion-panel"]],inputs:{suiTitle:"suiTitle",disabled:"disabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:Hn,decls:5,vars:5,consts:[[1,"title",3,"click"],["sui-icon","","suiIconType","dropdown"],[1,"content"]],template:function(a,s){a&1&&(ce(),i(0,"div",0),S("click",function(){return s.toggle()}),d(1,"i",1),t(2),e(),i(3,"div",2),ge(4),e()),a&2&&(he("active",s.isOpen),l(2),K(" ",s.suiTitle," "),l(),he("active",s.isOpen))},dependencies:[D],encapsulation:2})}}return E([_()],n.prototype,"disabled",void 0),E([_()],n.prototype,"isOpen",null),n})(),Ue=(()=>{class n{constructor(){this.suiStyled=!1,this.suiFluid=!1,this.suiInverted=!1,this.suiCloseOthers=!0}get classes(){return["ui",F.getPropClass(this.suiFluid,"fluid"),F.getPropClass(this.suiStyled,"styled"),F.getPropClass(this.suiInverted,"inverted"),"accordion"].join(" ")}ngAfterContentInit(){this.suiCloseOthers&&this.panels.forEach((o,a)=>o.isOpenChange.subscribe(s=>{s&&this.panels.forEach((f,c)=>{a!==c&&(f.isOpen=!1)})}))}ngOnDestroy(){this.panels.forEach(o=>o.isOpenChange.unsubscribe())}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["sui-accordion"]],contentQueries:function(a,s,f){if(a&1&&Xe(f,Ne,4),a&2){let c;Fe(c=Ve())&&(s.panels=c)}},inputs:{suiStyled:"suiStyled",suiFluid:"suiFluid",suiInverted:"suiInverted",suiCloseOthers:"suiCloseOthers"},ngContentSelectors:Hn,decls:2,vars:1,consts:[[3,"ngClass"]],template:function(a,s){a&1&&(ce(),i(0,"div",0),ge(1),e()),a&2&&r("ngClass",s.classes)},dependencies:[q,Me],encapsulation:2})}}return E([_()],n.prototype,"suiStyled",void 0),E([_()],n.prototype,"suiFluid",void 0),E([_()],n.prototype,"suiInverted",void 0),E([_()],n.prototype,"suiCloseOthers",void 0),n})(),zn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=U({imports:[q,Ue]})}}return n})();var Wn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-accordion-standard-example"]],standalone:!1,decls:12,vars:0,consts:[["isOpen","","suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion")(1,"sui-accordion-panel",0)(2,"p"),t(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),e()(),i(4,"sui-accordion-panel",1)(5,"p"),t(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),e()(),i(7,"sui-accordion-panel",2)(8,"p"),t(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),e(),i(10,"p"),t(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),e()()())},dependencies:[Ue,Ne],encapsulation:2})}}return n})(),jn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-accordion-styled-example"]],standalone:!1,decls:12,vars:0,consts:[["suiStyled",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion",0)(1,"sui-accordion-panel",1)(2,"p"),t(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),e()(),i(4,"sui-accordion-panel",2)(5,"p"),t(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),e()(),i(7,"sui-accordion-panel",3)(8,"p"),t(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),e(),i(10,"p"),t(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),e()()())},dependencies:[Ue,Ne],encapsulation:2})}}return n})(),Nn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-accordion-styled-fluid-example"]],standalone:!1,decls:12,vars:0,consts:[["suiStyled","","suiFluid",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion",0)(1,"sui-accordion-panel",1)(2,"p"),t(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),e()(),i(4,"sui-accordion-panel",2)(5,"p"),t(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),e()(),i(7,"sui-accordion-panel",3)(8,"p"),t(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),e(),i(10,"p"),t(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),e()()())},dependencies:[Ue,Ne],encapsulation:2})}}return n})(),Un=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-accordion-inverted-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-segment","","suiInverted",""],["suiInverted",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"sui-accordion",1)(2,"sui-accordion-panel",2)(3,"p"),t(4,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),e()(),i(5,"sui-accordion-panel",3)(6,"p"),t(7,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),e()(),i(8,"sui-accordion-panel",4)(9,"p"),t(10,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),e(),i(11,"p"),t(12,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),e()()()())},dependencies:[H,Ue,Ne],encapsulation:2})}}return n})();function Pl(n,m){n&1&&d(0,"doc-accordion-standard-example")}function Il(n,m){n&1&&d(0,"doc-accordion-styled-example")}function Fl(n,m){n&1&&d(0,"doc-accordion-styled-fluid-example")}function Vl(n,m){n&1&&d(0,"doc-accordion-inverted-example")}function Al(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Accordion"),e(),i(6,"p"),t(7,"A standard accordion"),e(),u(8,Pl,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Styled"),e(),i(12,"p"),t(13,"A styled accordion adds basic formatting"),e(),u(14,Il,1,0,"ng-template",5),e(),i(15,"h2",2),t(16,"Variations"),e(),i(17,"doc-code-sample",3)(18,"h3",4),t(19,"Fluid"),e(),i(20,"p"),t(21,"An accordion can take up the width of its container"),e(),u(22,Fl,1,0,"ng-template",5),e(),i(23,"doc-code-sample",3)(24,"h3",4),t(25,"Inverted"),e(),i(26,"p"),t(27,"An accordion can be formatted to appear on dark backgrounds"),e(),u(28,Vl,1,0,"ng-template",5),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetStandard),l(6),r("templateCode",o.snippetStyled),l(8),r("templateCode",o.snippetStyledFluid),l(6),r("templateCode",o.snippetInverted)}}function kl(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-accordion"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiStyled"),e(),i(20,"td"),t(21," Determines if the styled variation of the accordion is rendered "),e(),i(22,"td")(23,"div",7),t(24,"boolean"),e()(),i(25,"td")(26,"div",8),t(27,"false"),e()()(),i(28,"tr")(29,"td"),t(30,"suiFluid"),e(),i(31,"td"),t(32," Determines if the styled variation of the accordion is rendered "),e(),i(33,"td")(34,"div",7),t(35,"boolean"),e()(),i(36,"td")(37,"div",8),t(38,"false"),e()()(),i(39,"tr")(40,"td"),t(41,"suiFluid"),e(),i(42,"td"),t(43," Determines if the styled variation of the accordion is rendered "),e(),i(44,"td")(45,"div",7),t(46,"boolean"),e()(),i(47,"td")(48,"div",8),t(49,"false"),e()()(),i(50,"tr")(51,"td"),t(52,"suiInverted"),e(),i(53,"td"),t(54,"Determine if the accordion should invert it's colours"),e(),i(55,"td")(56,"div",7),t(57,"boolean "),e()(),i(58,"td")(59,"div",8),t(60,"false "),e()()(),i(61,"tr")(62,"td"),t(63,"suiCloseOthers"),e(),i(64,"td"),t(65,"Determines if the accordion should close other open panels when a panel is open"),e(),i(66,"td")(67,"div",7),t(68,"boolean "),e()(),i(69,"td")(70,"div",8),t(71,"true "),e()()()()(),i(72,"h2",2),t(73,"sui-accordion-panel"),e(),i(74,"h4",4),t(75,"Properties"),e(),i(76,"table",6)(77,"thead")(78,"tr")(79,"th"),t(80,"Property"),e(),i(81,"th"),t(82,"Description"),e(),i(83,"th"),t(84,"Type"),e(),i(85,"th"),t(86,"Default"),e()()(),i(87,"tbody")(88,"tr")(89,"td"),t(90,"suiTitle"),e(),i(91,"td"),t(92," What title the accordion panel should gave "),e(),i(93,"td")(94,"div",7),t(95,"string"),e()(),d(96,"td"),e(),i(97,"tr")(98,"td"),t(99,"disabled"),e(),i(100,"td"),t(101," Determines if a panel should be disabled meaning it cannot be interacted with "),e(),i(102,"td")(103,"div",7),t(104,"boolean"),e()(),i(105,"td")(106,"div",8),t(107,"false"),e()()(),i(108,"tr")(109,"td"),t(110,"isOpen"),e(),i(111,"td"),t(112,"A bindable field to determine and notify whether a panel is open or not"),e(),i(113,"td")(114,"div",7),t(115,"boolean"),e()(),d(116,"td"),e()()()())}var Gn=(()=>{class n{constructor(o){this.snippetStandard=Bn,this.snippetStyled=Ln,this.snippetStyledFluid=Rn,this.snippetInverted=On,o.setTitle("Accordion | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-accordion"]],standalone:!1,decls:3,vars:2,consts:[["header","Accordion","subHeader","An accordion allows users to toggle the display of sections of content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Al,29,4,"div",1)(2,kl,117,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,Wn,jn,Nn,Un],encapsulation:2})}}return n})();var qn=`<sui-checkbox>
  Make my profile visible
</sui-checkbox>
`;var Yn=`<sui-checkbox
    suiType="radio">
  Radio choice
</sui-checkbox>
`;var Xn=`<div sui-form>
  <div suiFormFields suiInline>
    <label>How often do you use checkboxes?</label>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="once-a-week"
          [(ngModel)]="inlineRadioValue">
        Once a week
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="2-3-a-week"
          [(ngModel)]="inlineRadioValue">
        2-3 times a week
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="once-a-day"
          [(ngModel)]="inlineRadioValue">
        Once a day
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="twice-a-day"
          [(ngModel)]="inlineRadioValue">
        Twice a day
      </sui-checkbox>
    </div>
  </div>
</div>
`;var Jn=`inlineRadioValue: string = null;
`;var Kn=`<div sui-form>
  <div suiFormFields suiGrouped>
    <label>How often do you use checkboxes?</label>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="once-a-week"
          [(ngModel)]="groupedRadioValue">
        Once a week
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="2-3-a-week"
          [(ngModel)]="groupedRadioValue">
        2-3 times a week
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="once-a-day"
          [(ngModel)]="groupedRadioValue">
        Once a day
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="radio"
          suiValue="twice-a-day"
          [(ngModel)]="groupedRadioValue">
        Twice a day
      </sui-checkbox>
    </div>
  </div>
</div>
`;var Qn=`groupedRadioValue: string = null;
`;var Zn=`<sui-checkbox
    suiType="slider">
  Accept terms and conditions
</sui-checkbox>
`;var $n=`<div sui-form>
  <div suiFormFields suiGrouped>
    <label>Outbound Throughput</label>
    <div suiFormField>
      <sui-checkbox
          suiType="slider"
          suiValue="20mb"
          [(ngModel)]="groupedSliderValue">
        20 mbps max
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="slider"
          suiValue="10mb"
          [(ngModel)]="groupedSliderValue">
        10 mbps max
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="slider"
          suiValue="5mb"
          [(ngModel)]="groupedSliderValue">
        5 mbps max
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox
          suiType="slider"
          suiValue="~mb"
          [(ngModel)]="groupedSliderValue">
        Unmetered
      </sui-checkbox>
    </div>
  </div>
</div>
`;var eo=`groupedSliderValue: string = null;
`;var to=`<sui-checkbox
    suiType="toggle">
  Subscribe to weekly newsletter
</sui-checkbox>
`;var io=`<sui-checkbox
    suiReadOnly>
  Read Only
</sui-checkbox>
`;var no=`<sui-checkbox
    [checked]="true">
  Active
</sui-checkbox>
`;var oo=`<sui-checkbox>
  Indeterminate
</sui-checkbox>
`;var ao=`<div>
  <sui-checkbox disabled>
    Disabled
  </sui-checkbox>
</div>
<div>
  <sui-checkbox disabled suiType="toggle">
    Disabled
  </sui-checkbox>
</div>
`;var so=`<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="slider"></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="toggle"></sui-checkbox>
</div>
`;var ro=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-standard-example"]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(i(0,"sui-checkbox"),t(1,` Make my profile visible
`),e())},dependencies:[Y],encapsulation:2})}}return n})(),lo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-basic-radio-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","radio"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Radio choice
`),e())},dependencies:[Y],encapsulation:2})}}return n})(),mo=(()=>{class n{constructor(){this.inlineRadioValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-inline-radio-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["suiType","radio","suiValue","once-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","2-3-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","once-a-day",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","twice-a-day",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"How often do you use checkboxes?"),e(),i(4,"div",2)(5,"sui-checkbox",3),y("ngModelChange",function(c){return C(s.inlineRadioValue,c)||(s.inlineRadioValue=c),c}),t(6," Once a week "),e()(),i(7,"div",2)(8,"sui-checkbox",4),y("ngModelChange",function(c){return C(s.inlineRadioValue,c)||(s.inlineRadioValue=c),c}),t(9," 2-3 times a week "),e()(),i(10,"div",2)(11,"sui-checkbox",5),y("ngModelChange",function(c){return C(s.inlineRadioValue,c)||(s.inlineRadioValue=c),c}),t(12," Once a day "),e()(),i(13,"div",2)(14,"sui-checkbox",6),y("ngModelChange",function(c){return C(s.inlineRadioValue,c)||(s.inlineRadioValue=c),c}),t(15," Twice a day "),e()()()()),a&2&&(l(5),b("ngModel",s.inlineRadioValue),l(3),b("ngModel",s.inlineRadioValue),l(3),b("ngModel",s.inlineRadioValue),l(3),b("ngModel",s.inlineRadioValue))},dependencies:[Le,Re,Oe,He,ot,Y],encapsulation:2})}}return n})(),po=(()=>{class n{constructor(){this.groupedRadioValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-grouped-radio-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","radio","suiValue","once-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","2-3-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","once-a-day",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","twice-a-day",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"How often do you use checkboxes?"),e(),i(4,"div",2)(5,"sui-checkbox",3),y("ngModelChange",function(c){return C(s.groupedRadioValue,c)||(s.groupedRadioValue=c),c}),t(6," Once a week "),e()(),i(7,"div",2)(8,"sui-checkbox",4),y("ngModelChange",function(c){return C(s.groupedRadioValue,c)||(s.groupedRadioValue=c),c}),t(9," 2-3 times a week "),e()(),i(10,"div",2)(11,"sui-checkbox",5),y("ngModelChange",function(c){return C(s.groupedRadioValue,c)||(s.groupedRadioValue=c),c}),t(12," Once a day "),e()(),i(13,"div",2)(14,"sui-checkbox",6),y("ngModelChange",function(c){return C(s.groupedRadioValue,c)||(s.groupedRadioValue=c),c}),t(15," Twice a day "),e()()()()),a&2&&(l(5),b("ngModel",s.groupedRadioValue),l(3),b("ngModel",s.groupedRadioValue),l(3),b("ngModel",s.groupedRadioValue),l(3),b("ngModel",s.groupedRadioValue))},dependencies:[Le,Re,Oe,He,ot,Y],encapsulation:2})}}return n})(),uo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-basic-slider-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","slider"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Accept terms and conditions
`),e())},dependencies:[Y],encapsulation:2})}}return n})(),co=(()=>{class n{constructor(){this.groupedSliderValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-grouped-slider-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","slider","suiValue","20mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","10mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","5mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","~mb",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Outbound Throughput"),e(),i(4,"div",2)(5,"sui-checkbox",3),y("ngModelChange",function(c){return C(s.groupedSliderValue,c)||(s.groupedSliderValue=c),c}),t(6," 20 mbps max "),e()(),i(7,"div",2)(8,"sui-checkbox",4),y("ngModelChange",function(c){return C(s.groupedSliderValue,c)||(s.groupedSliderValue=c),c}),t(9," 10 mbps max "),e()(),i(10,"div",2)(11,"sui-checkbox",5),y("ngModelChange",function(c){return C(s.groupedSliderValue,c)||(s.groupedSliderValue=c),c}),t(12," 5 mbps max "),e()(),i(13,"div",2)(14,"sui-checkbox",6),y("ngModelChange",function(c){return C(s.groupedSliderValue,c)||(s.groupedSliderValue=c),c}),t(15," Unmetered "),e()()()()),a&2&&(l(5),b("ngModel",s.groupedSliderValue),l(3),b("ngModel",s.groupedSliderValue),l(3),b("ngModel",s.groupedSliderValue),l(3),b("ngModel",s.groupedSliderValue))},dependencies:[Le,Re,Oe,He,ot,Y],encapsulation:2})}}return n})(),go=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-toggle-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","toggle"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Subscribe to weekly newsletter
`),e())},dependencies:[Y],encapsulation:2})}}return n})(),ho=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-read-only-example"]],standalone:!1,decls:2,vars:0,consts:[["suiReadOnly",""]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Read Only
`),e())},dependencies:[Y],encapsulation:2})}}return n})(),fo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-checked-example"]],standalone:!1,decls:2,vars:1,consts:[[3,"checked"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Active
`),e()),a&2&&r("checked",!0)},dependencies:[Y],encapsulation:2})}}return n})(),xo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-indeterminate-example"]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(i(0,"sui-checkbox"),t(1,` Indeterminate
`),e())},dependencies:[Y],encapsulation:2})}}return n})(),So=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-disabled-example"]],standalone:!1,decls:6,vars:0,consts:[["disabled",""],["disabled","","suiType","toggle"]],template:function(a,s){a&1&&(i(0,"div")(1,"sui-checkbox",0),t(2," Disabled "),e()(),i(3,"div")(4,"sui-checkbox",1),t(5," Disabled "),e()())},dependencies:[Y],encapsulation:2})}}return n})(),vo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox-fitted-example"]],standalone:!1,decls:6,vars:0,consts:[["sui-segment","","suiCompact","","suiFloated","left floated"],["suiFitted",""],["suiFitted","","suiType","slider"],["suiFitted","","suiType","toggle"]],template:function(a,s){a&1&&(i(0,"div",0),d(1,"sui-checkbox",1),e(),i(2,"div",0),d(3,"sui-checkbox",2),e(),i(4,"div",0),d(5,"sui-checkbox",3),e())},dependencies:[H,Y],encapsulation:2})}}return n})();function $l(n,m){n&1&&d(0,"doc-checkbox-standard-example")}function ed(n,m){n&1&&d(0,"doc-checkbox-basic-radio-example")}function td(n,m){n&1&&d(0,"doc-checkbox-inline-radio-example")}function id(n,m){n&1&&d(0,"doc-checkbox-grouped-radio-example")}function nd(n,m){n&1&&d(0,"doc-checkbox-basic-slider-example")}function od(n,m){n&1&&d(0,"doc-checkbox-grouped-slider-example")}function ad(n,m){n&1&&d(0,"doc-checkbox-toggle-example")}function sd(n,m){n&1&&d(0,"doc-checkbox-read-only-example")}function rd(n,m){n&1&&d(0,"doc-checkbox-checked-example")}function ld(n,m){n&1&&d(0,"doc-checkbox-indeterminate-example")}function dd(n,m){n&1&&d(0,"doc-checkbox-disabled-example")}function md(n,m){n&1&&d(0,"doc-checkbox-fitted-example")}function pd(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Checkbox"),e(),i(6,"p"),t(7,"A standard checkbox"),e(),u(8,$l,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Radio"),e(),i(12,"p"),t(13,"A checkbox can be formatted as a radio element. This means it is an exclusive option"),e(),u(14,ed,1,0,"ng-template",5),e(),i(15,"doc-code-sample",6),u(16,td,1,0,"ng-template",5),e(),i(17,"doc-code-sample",6),u(18,id,1,0,"ng-template",5),e(),i(19,"doc-code-sample",3)(20,"h3",4),t(21,"Slider"),e(),i(22,"p"),t(23,"A checkbox can be formatted to emphasize the current selection state"),e(),u(24,nd,1,0,"ng-template",5),e(),i(25,"doc-code-sample",6),u(26,od,1,0,"ng-template",5),e(),i(27,"doc-code-sample",3)(28,"h3",4),t(29,"Toggle"),e(),i(30,"p"),t(31,"A checkbox can be formatted to show an on or off choice"),e(),u(32,ad,1,0,"ng-template",5),e(),i(33,"h2",2),t(34,"States"),e(),i(35,"doc-code-sample",3)(36,"h3",4),t(37,"Read-only"),e(),i(38,"p"),t(39,"A checkbox can be read-only and unable to change states"),e(),u(40,sd,1,0,"ng-template",5),e(),i(41,"doc-code-sample",3)(42,"h3",4),t(43,"Checked"),e(),i(44,"p"),t(45,"A checkbox can be checked"),e(),u(46,rd,1,0,"ng-template",5),e(),i(47,"doc-code-sample",3)(48,"h3",4),t(49,"Indeterminate"),e(),i(50,"p"),t(51,"A checkbox can be indeterminate"),e(),u(52,ld,1,0,"ng-template",5),e(),i(53,"doc-code-sample",3)(54,"h3",4),t(55,"Disabled"),e(),i(56,"p"),t(57,"A checkbox can be read-only and unable to change states"),e(),u(58,dd,1,0,"ng-template",5),e(),i(59,"h2",2),t(60,"Variations"),e(),i(61,"doc-code-sample",3)(62,"h3",4),t(63,"Fitted"),e(),i(64,"p"),t(65,"A fitted checkbox does not leave padding for a label"),e(),u(66,md,1,0,"ng-template",5),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetStandard),l(6),r("templateCode",o.snippetBasicRadio),l(6),r("templateCode",o.snippetInlineRadio)("componentCode",o.snippetInlineRadioTs),l(2),r("templateCode",o.snippetGroupedRadio)("componentCode",o.snippetGroupedRadioTs),l(2),r("templateCode",o.snippetBasicSlider),l(6),r("templateCode",o.snippetGroupedSlider)("componentCode",o.snippetGroupedSliderTs),l(2),r("templateCode",o.snippetToggle),l(8),r("templateCode",o.snippetReadOnly),l(6),r("templateCode",o.snippetChecked),l(6),r("templateCode",o.snippetIndeterminate),l(6),r("templateCode",o.snippetDisabled),l(8),r("templateCode",o.snippetFitted)}}function ud(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-checkbox"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiReadOnly"),e(),i(20,"td"),t(21," Determines if the checkbox's state can be modified "),e(),i(22,"td")(23,"div",8),t(24,"boolean"),e()(),i(25,"td")(26,"div",9),t(27,"false"),e()()(),i(28,"tr")(29,"td"),t(30,"suiFitted"),e(),i(31,"td"),t(32," Determines if the fitted variation of the checkbox is rendered "),e(),i(33,"td")(34,"div",8),t(35,"boolean"),e()(),i(36,"td")(37,"div",9),t(38,"false"),e()()(),i(39,"tr")(40,"td"),t(41,"disabled"),e(),i(42,"td"),t(43," Determines if the checkbox is disabled "),e(),i(44,"td")(45,"div",8),t(46,"boolean"),e()(),i(47,"td")(48,"div",9),t(49,"false"),e()()(),i(50,"tr")(51,"td"),t(52,"name"),e(),i(53,"td"),t(54,"Sets the name attribute of the checkbox. Required for form usage"),e(),i(55,"td")(56,"div",8),t(57,"string"),e()(),i(58,"td")(59,"div",9),t(60,"null"),e()()(),i(61,"tr")(62,"td"),t(63,"suiValue"),e(),i(64,"td"),t(65,"Sets the value of the checkbox"),e(),i(66,"td")(67,"div",8),t(68,"any"),e()(),i(69,"td")(70,"div",9),t(71,"null"),e()()(),i(72,"tr")(73,"td"),t(74,"[(value)]"),e(),i(75,"td"),t(76,"Sets and notifies you of changes to the checkbox's value"),e(),i(77,"td")(78,"div",8),t(79,"any"),e()(),i(80,"td")(81,"div",9),t(82,"null"),e()()(),i(83,"tr")(84,"td"),t(85,"[(checked)]"),e(),i(86,"td"),t(87,"Sets and notifies you of changes to the checkbox's check state"),e(),i(88,"td")(89,"div",8),t(90,"boolean"),e()(),i(91,"td")(92,"div",9),t(93,"null"),e()()()()()())}var bo=(()=>{class n{constructor(o){this.snippetStandard=qn,this.snippetBasicRadio=Yn,this.snippetInlineRadio=Xn,this.snippetInlineRadioTs=Jn,this.snippetGroupedRadio=Kn,this.snippetGroupedRadioTs=Qn,this.snippetBasicSlider=Zn,this.snippetGroupedSlider=$n,this.snippetGroupedSliderTs=eo,this.snippetToggle=to,this.snippetReadOnly=io,this.snippetChecked=no,this.snippetIndeterminate=oo,this.snippetDisabled=ao,this.snippetFitted=so,o.setTitle("Checkbox | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-checkbox"]],standalone:!1,decls:3,vars:2,consts:[["header","Checkbox","subHeader","A checkbox allows a user to select a value from a small set of options, often binary"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,pd,67,15,"div",1)(2,ud,94,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,ro,lo,mo,po,uo,co,go,ho,fo,xo,So,vo],encapsulation:2})}}return n})();var Co=`<sui-progress
    suiShowProgress
    [suiValue]="standardValue">
  Uploading Files
</sui-progress>
`;var yo=`<sui-progress
    suiIndicating
    suiState="active"
    [suiValue]="indicatingValue">
  {{ indicatingValue }}% Funded
</sui-progress>
`;var Eo=`indicatingValue = 40;
`;var _o=`<sui-progress
    [suiValue]="28">
</sui-progress>
`;var Do=`<sui-progress
    suiShowProgress
    [suiValue]="35">
</sui-progress>
`;var To=`<sui-progress
    suiState="active"
    [suiValue]="51">
  Uploading Files
</sui-progress>
`;var wo=`<sui-progress
    suiState="success"
    [suiValue]="100">
  Everything worked, your file is all ready.
</sui-progress>
`;var Mo=`<sui-progress
    suiState="warning"
    [suiValue]="100">
  Your file didn't meet the minimum resolution requirements.
</sui-progress>
`;var Po=`<sui-progress
    suiState="error"
    [suiValue]="100">
  There was an error.
</sui-progress>
`;var Io=`<sui-progress
    disabled
    [suiValue]="38">
</sui-progress>
`;var Fo=`<div sui-segment suiInverted>
  <sui-progress
      suiInverted
      suiShowProgress
      [suiValue]="15">
    Uploading Files
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="success"
      [suiValue]="100">
    Success
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="warning"
      [suiValue]="100">
    Warning
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="error"
      [suiValue]="100">
    Error
  </sui-progress>
</div>
`;var Vo=`<div sui-segment>
  <sui-progress
      suiAttached="top"
      [suiValue]="21">
  </sui-progress>
  <p style="margin: 20px">La la la la</p>
  <sui-progress
      suiAttached="bottom"
      [suiValue]="31">
  </sui-progress>
</div>
`;var Ao=`<div sui-card>
  <div suiCardImage>
    <img src="/assets/images/wireframes/image.png"/>
  </div>
  <div suiCardContent>
    <a suiCardHeader>Project</a>
    <div suiCardMeta>
      <span class="date">Started in 2014</span>
    </div>
  </div>
  <div suiCardExtra>
    <a>
      <i sui-icon suiIconType="user"></i>
      22 Friends
    </a>
  </div>
  <sui-progress
      suiAttached="bottom"
      [suiValue]="31">
  </sui-progress>
</div>
`;var ko=`<sui-progress
    suiSize="tiny"
    [suiValue]="61">
  Tiny
</sui-progress>
<sui-progress
    suiSize="small"
    [suiValue]="21">
  Small
</sui-progress>
<sui-progress
    [suiValue]="41">
  Standard
</sui-progress>
<sui-progress
    suiSize="large"
    [suiValue]="5">
  Large
</sui-progress>
<sui-progress
    suiSize="big"
    [suiValue]="14">
  Big
</sui-progress>
`;var Bo=`<sui-progress
    suiColour="red"
    [suiValue]="59">
</sui-progress>
<sui-progress
    suiColour="orange"
    [suiValue]="31">
</sui-progress>
<sui-progress
    suiColour="yellow"
    [suiValue]="48">
</sui-progress>
<sui-progress
    suiColour="olive"
    [suiValue]="35">
</sui-progress>
<sui-progress
    suiColour="green"
    [suiValue]="35">
</sui-progress>
<sui-progress
    suiColour="teal"
    [suiValue]="31">
</sui-progress>
<sui-progress
    suiColour="blue"
    [suiValue]="35">
</sui-progress>
<sui-progress
    suiColour="violet"
    [suiValue]="18">
</sui-progress>
<sui-progress
    suiColour="purple"
    [suiValue]="22">
</sui-progress>
<sui-progress
    suiColour="pink"
    [suiValue]="50">
</sui-progress>
<sui-progress
    suiColour="brown"
    [suiValue]="18">
</sui-progress>
<sui-progress
    suiColour="grey"
    [suiValue]="56">
</sui-progress>
<sui-progress
    suiColour="black"
    [suiValue]="45">
</sui-progress>
`;var Lo=`<div sui-segment suiInverted>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="red"
      [suiValue]="59">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="orange"
      [suiValue]="31">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="yellow"
      [suiValue]="48">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="olive"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="green"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="teal"
      [suiValue]="31">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="blue"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="violet"
      [suiValue]="18">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="purple"
      [suiValue]="22">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="pink"
      [suiValue]="50">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="brown"
      [suiValue]="18">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="grey"
      [suiValue]="56">
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiColour="black"
      [suiValue]="45">
  </sui-progress>
</div>
`;var Pd=["*"];function Id(n,m){if(n&1&&(i(0,"div",2),t(1),e()),n&2){let o=x();l(),K("",o.progressPercentage,"%")}}var z=(()=>{class n{constructor(){this.suiAttached=null,this.suiSize=null,this.suiColour=null,this.suiState=null,this.suiIndicating=!1,this.disabled=!1,this.suiInverted=!1,this.suiShowProgress=!1,this.value=0,this.maxValue=100,this.progressPercentage=0}set suiValue(o){this.value=+o,this.calculatePercentage()}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.calculatePercentage()}get suiMaxValue(){return this.maxValue}get classes(){return F.combineToClass(["ui",this.suiSize??"",this.suiColour??"",this.suiAttached?`${this.suiAttached} attached`:"",F.getPropClass(this.suiIndicating,"indicating"),F.getPropClass(this.disabled,"disabled"),F.getPropClass(this.suiInverted,"inverted"),"progress",this.suiState??""])}calculatePercentage(){this.value>this.maxValue||(this.progressPercentage=Math.ceil(this.value*100/this.maxValue))}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["sui-progress"]],inputs:{suiAttached:"suiAttached",suiSize:"suiSize",suiColour:"suiColour",suiState:"suiState",suiIndicating:"suiIndicating",disabled:"disabled",suiInverted:"suiInverted",suiShowProgress:"suiShowProgress",suiValue:"suiValue",suiMaxValue:"suiMaxValue"},ngContentSelectors:Pd,decls:5,vars:5,consts:[[3,"ngClass"],[1,"bar"],[1,"progress"],[1,"label"]],template:function(a,s){a&1&&(ce(),i(0,"div",0)(1,"div",1),j(2,Id,2,1,"div",2),e(),i(3,"div",3),ge(4),e()()),a&2&&(r("ngClass",s.classes),Ct("data-percent",s.progressPercentage),l(),Dt("width",s.progressPercentage,"%"),l(),N(s.suiShowProgress?2:-1))},dependencies:[q,Me],styles:["[_nghost-%COMP%]{width:100%}"]})}}return E([_()],n.prototype,"suiIndicating",void 0),E([_()],n.prototype,"disabled",void 0),E([_()],n.prototype,"suiInverted",void 0),E([_()],n.prototype,"suiShowProgress",void 0),n})(),Ro=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=U({imports:[z]})}}return n})();var W=class{constructor(){this.standardValue=31,this.indicatingValue=40}addToStandard(m){let o=this.standardValue+m;o>100?o=100:o<0&&(o=0),this.standardValue=o}addToIndicating(m){let o=this.indicatingValue+m;o>100?o=100:o<0&&(o=0),this.indicatingValue=o}},Ho=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-standard-example"]],standalone:!1,features:[h],decls:2,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Uploading Files
`),e()),a&2&&r("suiValue",s.standardValue)},dependencies:[z],encapsulation:2})}}return n})(),zo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-indicating-example"]],standalone:!1,features:[h],decls:2,vars:2,consts:[["suiIndicating","","suiState","active",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1),e()),a&2&&(r("suiValue",s.indicatingValue),l(),K(" ",s.indicatingValue,`% Funded
`))},dependencies:[z],encapsulation:2})}}return n})(),Wo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-bar-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[[3,"suiValue"]],template:function(a,s){a&1&&d(0,"sui-progress",0),a&2&&r("suiValue",28)},dependencies:[z],encapsulation:2})}}return n})(),jo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-progress-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&d(0,"sui-progress",0),a&2&&r("suiValue",35)},dependencies:[z],encapsulation:2})}}return n})(),No=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-label-example"]],standalone:!1,features:[h],decls:2,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Uploading Files
`),e()),a&2&&r("suiValue",45)},dependencies:[z],encapsulation:2})}}return n})(),Uo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-active-example"]],standalone:!1,features:[h],decls:2,vars:1,consts:[["suiState","active",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Uploading Files
`),e()),a&2&&r("suiValue",51)},dependencies:[z],encapsulation:2})}}return n})(),Go=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-success-example"]],standalone:!1,features:[h],decls:2,vars:1,consts:[["suiState","success",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Everything worked, your file is all ready.
`),e()),a&2&&r("suiValue",100)},dependencies:[z],encapsulation:2})}}return n})(),qo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-warning-example"]],standalone:!1,features:[h],decls:2,vars:1,consts:[["suiState","warning",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Your file didn't meet the minimum resolution requirements.
`),e()),a&2&&r("suiValue",100)},dependencies:[z],encapsulation:2})}}return n})(),Yo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-error-example"]],standalone:!1,features:[h],decls:2,vars:1,consts:[["suiState","error",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` There was an error.
`),e()),a&2&&r("suiValue",100)},dependencies:[z],encapsulation:2})}}return n})(),Xo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-disabled-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["disabled","",3,"suiValue"]],template:function(a,s){a&1&&d(0,"sui-progress",0),a&2&&r("suiValue",38)},dependencies:[z],encapsulation:2})}}return n})(),Jo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-inverted-example"]],standalone:!1,features:[h],decls:9,vars:4,consts:[["sui-segment","","suiInverted",""],["suiInverted","","suiShowProgress","",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","success",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","warning",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","error",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"sui-progress",1),t(2," Uploading Files "),e(),i(3,"sui-progress",2),t(4," Success "),e(),i(5,"sui-progress",3),t(6," Warning "),e(),i(7,"sui-progress",4),t(8," Error "),e()()),a&2&&(l(),r("suiValue",15),l(2),r("suiValue",100),l(2),r("suiValue",100),l(2),r("suiValue",100))},dependencies:[H,z],encapsulation:2})}}return n})(),Ko=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-attached-example"]],standalone:!1,features:[h],decls:5,vars:2,consts:[["sui-segment",""],["suiAttached","top",3,"suiValue"],[2,"margin","20px"],["suiAttached","bottom",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0),d(1,"sui-progress",1),i(2,"p",2),t(3,"La la la la"),e(),d(4,"sui-progress",3),e()),a&2&&(l(),r("suiValue",21),l(3),r("suiValue",31))},dependencies:[H,z],encapsulation:2})}}return n})(),Qo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-card-attached-example"]],standalone:!1,features:[h],decls:14,vars:1,consts:[["sui-card",""],["suiCardImage",""],["src","/assets/images/wireframes/image.png"],["suiCardContent",""],["suiCardHeader",""],["suiCardMeta",""],[1,"date"],["suiCardExtra",""],["sui-icon","","suiIconType","user"],["suiAttached","bottom",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1),d(2,"img",2),e(),i(3,"div",3)(4,"a",4),t(5,"Project"),e(),i(6,"div",5)(7,"span",6),t(8,"Started in 2014"),e()()(),i(9,"div",7)(10,"a"),d(11,"i",8),t(12," 22 Friends "),e()(),d(13,"sui-progress",9),e()),a&2&&(l(13),r("suiValue",31))},dependencies:[nt,ei,tt,et,$t,it,D,z],encapsulation:2})}}return n})(),Zo=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-size-example"]],standalone:!1,features:[h],decls:10,vars:5,consts:[["suiSize","tiny",3,"suiValue"],["suiSize","small",3,"suiValue"],[3,"suiValue"],["suiSize","large",3,"suiValue"],["suiSize","big",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Tiny
`),e(),i(2,"sui-progress",1),t(3,` Small
`),e(),i(4,"sui-progress",2),t(5,` Standard
`),e(),i(6,"sui-progress",3),t(7,` Large
`),e(),i(8,"sui-progress",4),t(9,` Big
`),e()),a&2&&(r("suiValue",61),l(2),r("suiValue",21),l(2),r("suiValue",41),l(2),r("suiValue",5),l(2),r("suiValue",14))},dependencies:[z],encapsulation:2})}}return n})(),$o=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-colour-example"]],standalone:!1,features:[h],decls:13,vars:13,consts:[["suiColour","red",3,"suiValue"],["suiColour","orange",3,"suiValue"],["suiColour","yellow",3,"suiValue"],["suiColour","olive",3,"suiValue"],["suiColour","green",3,"suiValue"],["suiColour","teal",3,"suiValue"],["suiColour","blue",3,"suiValue"],["suiColour","violet",3,"suiValue"],["suiColour","purple",3,"suiValue"],["suiColour","pink",3,"suiValue"],["suiColour","brown",3,"suiValue"],["suiColour","grey",3,"suiValue"],["suiColour","black",3,"suiValue"]],template:function(a,s){a&1&&d(0,"sui-progress",0)(1,"sui-progress",1)(2,"sui-progress",2)(3,"sui-progress",3)(4,"sui-progress",4)(5,"sui-progress",5)(6,"sui-progress",6)(7,"sui-progress",7)(8,"sui-progress",8)(9,"sui-progress",9)(10,"sui-progress",10)(11,"sui-progress",11)(12,"sui-progress",12),a&2&&(r("suiValue",59),l(),r("suiValue",31),l(),r("suiValue",48),l(),r("suiValue",35),l(),r("suiValue",35),l(),r("suiValue",31),l(),r("suiValue",35),l(),r("suiValue",18),l(),r("suiValue",22),l(),r("suiValue",50),l(),r("suiValue",18),l(),r("suiValue",56),l(),r("suiValue",45))},dependencies:[z],encapsulation:2})}}return n})(),ea=(()=>{class n extends W{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress-inverted-colour-example"]],standalone:!1,features:[h],decls:14,vars:13,consts:[["sui-segment","","suiInverted",""],["suiInverted","","suiShowProgress","","suiColour","red",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","orange",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","yellow",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","olive",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","green",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","teal",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","blue",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","violet",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","purple",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","pink",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","brown",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","grey",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","black",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0),d(1,"sui-progress",1)(2,"sui-progress",2)(3,"sui-progress",3)(4,"sui-progress",4)(5,"sui-progress",5)(6,"sui-progress",6)(7,"sui-progress",7)(8,"sui-progress",8)(9,"sui-progress",9)(10,"sui-progress",10)(11,"sui-progress",11)(12,"sui-progress",12)(13,"sui-progress",13),e()),a&2&&(l(),r("suiValue",59),l(),r("suiValue",31),l(),r("suiValue",48),l(),r("suiValue",35),l(),r("suiValue",35),l(),r("suiValue",31),l(),r("suiValue",35),l(),r("suiValue",18),l(),r("suiValue",22),l(),r("suiValue",50),l(),r("suiValue",18),l(),r("suiValue",56),l(),r("suiValue",45))},dependencies:[H,z],encapsulation:2})}}return n})();function kd(n,m){n&1&&d(0,"doc-progress-standard-example")}function Bd(n,m){n&1&&d(0,"doc-progress-indicating-example")}function Ld(n,m){n&1&&d(0,"doc-progress-bar-example")}function Rd(n,m){n&1&&d(0,"doc-progress-progress-example")}function Od(n,m){n&1&&d(0,"doc-progress-label-example")}function Hd(n,m){n&1&&d(0,"doc-progress-active-example")}function zd(n,m){n&1&&d(0,"doc-progress-success-example")}function Wd(n,m){n&1&&d(0,"doc-progress-warning-example")}function jd(n,m){n&1&&d(0,"doc-progress-error-example")}function Nd(n,m){n&1&&d(0,"doc-progress-disabled-example")}function Ud(n,m){n&1&&d(0,"doc-progress-inverted-example")}function Gd(n,m){n&1&&d(0,"doc-progress-attached-example")}function qd(n,m){n&1&&d(0,"doc-progress-card-attached-example")}function Yd(n,m){n&1&&d(0,"doc-progress-size-example")}function Xd(n,m){n&1&&d(0,"doc-progress-colour-example")}function Jd(n,m){n&1&&d(0,"doc-progress-inverted-colour-example")}function Kd(n,m){if(n&1){let o=te();i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Standard"),e(),i(6,"p"),t(7,"A standard progress bar"),e(),u(8,kd,1,0,"ng-template",5),e(),i(9,"div")(10,"div",6)(11,"button",7),S("click",function(){R(o);let s=x();return O(s.addToStandard(-11))}),d(12,"i",8),e(),i(13,"button",9),S("click",function(){R(o);let s=x();return O(s.addToStandard(11))}),d(14,"i",10),e()()(),i(15,"doc-code-sample",11)(16,"h3",4),t(17,"Indicating"),e(),i(18,"p"),t(19,"An indicating progress bar visually indicates the current level of progress of a task"),e(),u(20,Bd,1,0,"ng-template",5),e(),i(21,"div")(22,"div",6)(23,"button",7),S("click",function(){R(o);let s=x();return O(s.addToIndicating(-13))}),d(24,"i",8),e(),i(25,"button",9),S("click",function(){R(o);let s=x();return O(s.addToIndicating(13))}),d(26,"i",10),e()()(),i(27,"h2",2),t(28,"Content"),e(),i(29,"doc-code-sample",3)(30,"h3",4),t(31,"Bar"),e(),i(32,"p"),t(33,"A progress element can contain a bar visually indicating progress"),e(),u(34,Ld,1,0,"ng-template",5),e(),i(35,"doc-code-sample",3)(36,"h3",4),t(37,"Progress"),e(),i(38,"p"),t(39,"A progress bar can contain a text value indicating current progress"),e(),u(40,Rd,1,0,"ng-template",5),e(),i(41,"doc-code-sample",3)(42,"h3",4),t(43,"Label"),e(),i(44,"p"),t(45,"A progress element can contain a label"),e(),u(46,Od,1,0,"ng-template",5),e(),i(47,"h2",2),t(48,"States"),e(),i(49,"doc-code-sample",3)(50,"h3",4),t(51,"Active"),e(),i(52,"p"),t(53,"A progress bar can show activity"),e(),u(54,Hd,1,0,"ng-template",5),e(),i(55,"doc-code-sample",3)(56,"h3",4),t(57,"Success"),e(),i(58,"p"),t(59,"A progress bar can show a success state"),e(),u(60,zd,1,0,"ng-template",5),e(),i(61,"doc-code-sample",3)(62,"h3",4),t(63,"Warning"),e(),i(64,"p"),t(65,"A progress bar can show a warning state"),e(),u(66,Wd,1,0,"ng-template",5),e(),i(67,"doc-code-sample",3)(68,"h3",4),t(69,"Error"),e(),i(70,"p"),t(71,"A progress bar can show an error state"),e(),u(72,jd,1,0,"ng-template",5),e(),i(73,"doc-code-sample",3)(74,"h3",4),t(75,"Disabled"),e(),i(76,"p"),t(77,"A progress bar can show an error state"),e(),u(78,Nd,1,0,"ng-template",5),e(),i(79,"h2",2),t(80,"Variations"),e(),i(81,"doc-code-sample",3)(82,"h3",4),t(83,"Inverted"),e(),i(84,"p"),t(85,"A progress bar can have its colors inverted"),e(),u(86,Ud,1,0,"ng-template",5),e(),i(87,"doc-code-sample",3)(88,"h3",4),t(89,"Attached"),e(),i(90,"p"),t(91,"AA progress bar can show progress of an element"),e(),u(92,Gd,1,0,"ng-template",5),e(),i(93,"doc-code-sample",3),u(94,qd,1,0,"ng-template",5),e(),i(95,"doc-code-sample",3)(96,"h3",4),t(97,"Size"),e(),i(98,"p"),t(99,"A progress bar can vary in size"),e(),i(100,"div",12),t(101," Some small sizes may not be able to fit an inlined label "),e(),u(102,Yd,1,0,"ng-template",5),e(),i(103,"doc-code-sample",3)(104,"h3",4),t(105,"Colours"),e(),i(106,"p"),t(107,"Can have different colours"),e(),u(108,Xd,1,0,"ng-template",5),e(),i(109,"doc-code-sample",3)(110,"h3",4),t(111,"Inverted Colours"),e(),i(112,"p"),t(113,"These colors can also be inverted for improved contrast on dark backgrounds"),e(),u(114,Jd,1,0,"ng-template",5),e()()}if(n&2){let o=x();l(3),r("templateCode",o.snippetStandard),l(12),r("templateCode",o.snippetIndicating)("componentCode",o.snippetIndicatingTs),l(14),r("templateCode",o.snippetBar),l(6),r("templateCode",o.snippetProgress),l(6),r("templateCode",o.snippetStandard),l(8),r("templateCode",o.snippetActive),l(6),r("templateCode",o.snippetSuccess),l(6),r("templateCode",o.snippetWarning),l(6),r("templateCode",o.snippetError),l(6),r("templateCode",o.snippetDisabled),l(8),r("templateCode",o.snippetInverted),l(6),r("templateCode",o.snippetAttached),l(6),r("templateCode",o.snippetCardAttached),l(2),r("templateCode",o.snippetSize),l(8),r("templateCode",o.snippetColour),l(6),r("templateCode",o.snippetInvertedColour)}}function Qd(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-progress"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",13)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiColour"),e(),i(20,"td"),t(21,"Set the progress colour. Allowed values could be "),i(22,"span",14),t(23,"'red'"),e(),t(24," | "),i(25,"span",14),t(26,"'orange'"),e(),t(27," | "),i(28,"span",14),t(29,"'yellow'"),e(),t(30," | "),i(31,"span",14),t(32,"'olive'"),e(),t(33," | "),i(34,"span",14),t(35,"'green'"),e(),t(36," | "),i(37,"span",14),t(38,"'teal'"),e(),t(39," | "),i(40,"span",14),t(41,"'blue'"),e(),t(42," | "),i(43,"span",14),t(44,"'violet'"),e(),t(45," | "),i(46,"span",14),t(47,"'purple'"),e(),t(48," | "),i(49,"span",14),t(50,"'pink'"),e(),t(51," | "),i(52,"span",14),t(53,"'brown'"),e(),t(54," | "),i(55,"span",14),t(56,"'grey'"),e(),t(57," | "),i(58,"span",14),t(59,"'black'"),e(),t(60," | "),i(61,"span",14),t(62,"null"),e()(),i(63,"td")(64,"div",15),t(65," string "),e()(),i(66,"td")(67,"div",16),t(68," null "),e()()(),i(69,"tr")(70,"td"),t(71,"suiSize"),e(),i(72,"td"),t(73,"Set the progress size. Allowed values could be "),i(74,"span",14),t(75,"'mini'"),e(),t(76," | "),i(77,"span",14),t(78,"'tiny'"),e(),t(79," | "),i(80,"span",14),t(81,"'small'"),e(),t(82," | "),i(83,"span",14),t(84,"'medium'"),e(),t(85," | "),i(86,"span",14),t(87,"'big'"),e(),t(88," | "),i(89,"span",14),t(90,"'huge'"),e(),t(91," | "),i(92,"span",14),t(93,"'massive'"),e(),t(94," | "),i(95,"span",14),t(96,"null"),e()(),i(97,"td")(98,"div",15),t(99," string "),e()(),i(100,"td")(101,"div",16),t(102," null "),e()()(),i(103,"tr")(104,"td"),t(105,"suiState"),e(),i(106,"td"),t(107," Determines the progress' state. Allowed values could be "),i(108,"span",14),t(109,"'active'"),e(),t(110," | "),i(111,"span",14),t(112,"'success'"),e(),t(113," | "),i(114,"span",14),t(115,"'warning'"),e(),t(116," | "),i(117,"span",14),t(118,"'error'"),e(),t(119," | "),i(120,"span",14),t(121,"null"),e()(),i(122,"td")(123,"div",15),t(124,"string"),e()(),i(125,"td")(126,"div",16),t(127,"null"),e()()(),i(128,"tr")(129,"td"),t(130,"suiAttached"),e(),i(131,"td"),t(132," Determines the progress' attachment position. Allowed values could be "),i(133,"span",14),t(134,"'bottom'"),e(),t(135," | "),i(136,"span",14),t(137,"'top'"),e(),t(138," | "),i(139,"span",14),t(140,"null"),e()(),i(141,"td")(142,"div",15),t(143,"string"),e()(),i(144,"td")(145,"div",16),t(146,"null"),e()()(),i(147,"tr")(148,"td"),t(149,"suiIndicating"),e(),i(150,"td"),t(151," Determines if the progress is indicating "),e(),i(152,"td")(153,"div",15),t(154,"boolean"),e()(),i(155,"td")(156,"div",16),t(157,"false"),e()()(),i(158,"tr")(159,"td"),t(160,"disabled"),e(),i(161,"td"),t(162," Determines if the progress is disabled "),e(),i(163,"td")(164,"div",15),t(165,"boolean"),e()(),i(166,"td")(167,"div",16),t(168,"false"),e()()(),i(169,"tr")(170,"td"),t(171,"suiInverted"),e(),i(172,"td"),t(173,"Determines whether the progress bar uses inverted colours"),e(),i(174,"td")(175,"div",15),t(176,"boolean"),e()(),i(177,"td")(178,"div",16),t(179,"false"),e()()(),i(180,"tr")(181,"td"),t(182,"suiShowProgress"),e(),i(183,"td"),t(184,"Determines whether the progress percentage is displayed"),e(),i(185,"td")(186,"div",15),t(187,"boolean"),e()(),i(188,"td")(189,"div",16),t(190,"false"),e()()()()()())}var ta=(()=>{class n{constructor(o){this.snippetStandard=Co,this.snippetIndicating=yo,this.snippetIndicatingTs=Eo,this.snippetBar=_o,this.snippetProgress=Do,this.snippetActive=To,this.snippetSuccess=wo,this.snippetWarning=Mo,this.snippetError=Po,this.snippetDisabled=Io,this.snippetInverted=Fo,this.snippetAttached=Vo,this.snippetCardAttached=Ao,this.snippetSize=ko,this.snippetColour=Bo,this.snippetInvertedColour=Lo,this.standardValue=31,this.indicatingValue=40,o.setTitle("Progress | Ngx Semantic")}addToStandard(o){let a=this.standardValue+o;a>100?a=100:a<0&&(a=0),this.standardValue=a}addToIndicating(o){let a=this.indicatingValue+o;a>100?a=100:a<0&&(a=0),this.indicatingValue=a}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-progress"]],standalone:!1,decls:3,vars:2,consts:[["header","Progress","subHeader","A progress bar shows the progression of a task"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-buttons",""],["sui-button","","suiIcon","","suiBasic","","suiColour","red",3,"click"],["sui-icon","","suiIconType","minus"],["sui-button","","suiIcon","","suiBasic","","suiColour","green",3,"click"],["sui-icon","","suiIconType","plus"],[3,"templateCode","componentCode"],["sui-message","","suiState","info"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Kd,115,17,"div",1)(2,Qd,191,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,w,Ze,D,Qe,Ho,zo,Wo,jo,No,Uo,Go,qo,Yo,Xo,Jo,Ko,Qo,Zo,$o,ea],encapsulation:2})}}return n})();var ia=`<button sui-button suiIcon
        sui-popup suiPopupContent="Add users to your feed">
  <i sui-icon suiIconType="add"></i>
</button>
`;var na=`<img sui-image suiAvatar
     sui-popup suiPopupTitle="Elliot Fu" suiPopupContent="Elliot has been a member since July 2012"
     src="/assets/images/elliot.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Stevie Feliciano" suiPopupContent="Stevie has been a member since August 2013"
     src="/assets/images/stevie.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Matt" suiPopupContent="Matt has been a member since July 2014"
     src="/assets/images/matt.jpg"/>
`;var oa=`<div sui-card
     sui-popup suiPopupTitle="User Rating" [suiPopupContent]="popupContent">
  <div suiCardImage>
    <img src="https://semantic-ui.com/images/movies/watchmen-horizontal.jpg"/>
  </div>
  <div suiCardContent>
    <div suiCardHeader>Watchmen</div>
    <div suiCardDescription>
      In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a
      government crackdown, but after one of the masked veterans is brutally murdered an investigation into the
      killer is initiated.
    </div>
  </div>
  <div sui-buttons suiAttached suiWidth="two" suiAttachedPosition="bottom">
    <div sui-button>
      <i sui-icon suiIconType="add"></i>
      Queue
    </div>
    <div sui-button suiEmphasis="primary">
      <i sui-icon suiIconType="play"></i>
      Watch
    </div>
  </div>
</div>

<ng-template #popupContent>
  <sui-rating suiValue="3" suiMaxValue="5"></sui-rating>
</ng-template>
`;var aa=`<button sui-button suiIcon
        sui-popup suiPopupBasic suiPopupContent="The default theme's basic popup removes the pointing arrow.">
  <i sui-icon suiIconType="add"></i>
</button>
`;var sa=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="wide"
   suiPopupContent="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="very wide"
   suiPopupContent="Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
`;var ra=`<div sui-button
     sui-popup [suiPopupContent]="fluidPopup">
  Show fluid popup
</div>
<ng-template #fluidPopup>
  <div sui-grid suiDivided="divided" suiAlignment="center aligned" suiWidth="four">
    <div suiGridColumn>1</div>
    <div suiGridColumn>2</div>
    <div suiGridColumn>3</div>
    <div suiGridColumn>4</div>
  </div>
</ng-template>
`;var la=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="mini"
   suiPopupContent="Hello. This is a mini popup"></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="tiny"
   suiPopupContent="Hello. This is a tiny popup"></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="small"
   suiPopupContent="Hello. This is a small popup"></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="large"
   suiPopupContent="Hello. This is a large popup"></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupSize="huge"
   suiPopupContent="Hello. This is a huge popup"></i>
`;var da=`<div sui-button
     sui-popup suiPopupFlowing [suiPopupContent]="flowingTemplate">
  Show flowing popup
</div>
<ng-template #flowingTemplate>
  <div sui-grid suiDivided="divided" suiAlignment="center aligned" suiWidth="three">
    <div suiGridColumn>
      <div sui-header>Basic Plan</div>
      <p><b>2</b> projects, $10 a month</p>
      <div sui-button>Choose</div>
    </div>
    <div suiGridColumn>
      <div sui-header>Business Plan</div>
      <p><b>5</b> projects, $20 a month</p>
      <div sui-button>Choose</div>
    </div>
    <div suiGridColumn>
      <div sui-header>Premium Plan</div>
      <p><b>8</b> projects, $25 a month</p>
      <div sui-button>Choose</div>
    </div>
  </div>
</ng-template>
`;var ma=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup"></i>
<button sui-button suiIcon
        sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup">
  <i sui-icon suiIconType="add"></i>
</button>
`;var pa=`<i sui-icon suiCircular suiColour="red" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="bottom left" suiPopupContent="This is a bottom left popup"></i>
<i sui-icon suiCircular suiColour="teal" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="top right" suiPopupContent="This is a top right popup"></i>
`;function dm(n,m){n&1&&d(0,"sui-rating",12)}function mm(n,m){n&1&&(i(0,"div",2)(1,"div",3),t(2,"1"),e(),i(3,"div",3),t(4,"2"),e(),i(5,"div",3),t(6,"3"),e(),i(7,"div",3),t(8,"4"),e()())}function pm(n,m){n&1&&(i(0,"div",2)(1,"div",3)(2,"div",4),t(3,"Basic Plan"),e(),i(4,"p")(5,"b"),t(6,"2"),e(),t(7," projects, $10 a month"),e(),i(8,"div",5),t(9,"Choose"),e()(),i(10,"div",3)(11,"div",4),t(12,"Business Plan"),e(),i(13,"p")(14,"b"),t(15,"5"),e(),t(16," projects, $20 a month"),e(),i(17,"div",5),t(18,"Choose"),e()(),i(19,"div",3)(20,"div",4),t(21,"Premium Plan"),e(),i(22,"p")(23,"b"),t(24,"8"),e(),t(25," projects, $25 a month"),e(),i(26,"div",5),t(27,"Choose"),e()()())}var ua=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-standard-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-button","","suiIcon","","sui-popup","","suiPopupContent","Add users to your feed"],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(i(0,"button",0),d(1,"i",1),e())},dependencies:[w,D,Q],encapsulation:2})}}return n})(),ca=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-titled-example"]],standalone:!1,decls:3,vars:0,consts:[["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Elliot Fu","suiPopupContent","Elliot has been a member since July 2012","src","/assets/images/elliot.jpg"],["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Stevie Feliciano","suiPopupContent","Stevie has been a member since August 2013","src","/assets/images/stevie.jpg"],["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Matt","suiPopupContent","Matt has been a member since July 2014","src","/assets/images/matt.jpg"]],template:function(a,s){a&1&&d(0,"img",0)(1,"img",1)(2,"img",2)},dependencies:[Be,Q],encapsulation:2})}}return n})(),ga=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-html-example"]],standalone:!1,decls:17,vars:1,consts:[["popupContent",""],["sui-card","","sui-popup","","suiPopupTitle","User Rating",3,"suiPopupContent"],["suiCardImage",""],["src","https://semantic-ui.com/images/movies/watchmen-horizontal.jpg"],["suiCardContent",""],["suiCardHeader",""],["suiCardDescription",""],["sui-buttons","","suiAttached","","suiWidth","two","suiAttachedPosition","bottom"],["sui-button",""],["sui-icon","","suiIconType","add"],["sui-button","","suiEmphasis","primary"],["sui-icon","","suiIconType","play"],["suiValue","3","suiMaxValue","5"]],template:function(a,s){if(a&1&&(i(0,"div",1)(1,"div",2),d(2,"img",3),e(),i(3,"div",4)(4,"div",5),t(5,"Watchmen"),e(),i(6,"div",6),t(7," In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. "),e()(),i(8,"div",7)(9,"div",8),d(10,"i",9),t(11," Queue "),e(),i(12,"div",10),d(13,"i",11),t(14," Watch "),e()()(),u(15,dm,1,0,"ng-template",null,0,fe)),a&2){let f=Ae(16);r("suiPopupContent",f)}},dependencies:[nt,tt,et,$e,it,ke,w,Ze,D,Q],encapsulation:2})}}return n})(),ha=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-basic-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-button","","suiIcon","","sui-popup","","suiPopupBasic","","suiPopupContent","The default theme's basic popup removes the pointing arrow."],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(i(0,"button",0),d(1,"i",1),e())},dependencies:[w,D,Q],encapsulation:2})}}return n})(),fa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-width-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupWidth","wide","suiPopupContent","Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupWidth","very wide","suiPopupContent","Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."]],template:function(a,s){a&1&&d(0,"i",0)(1,"i",1)},dependencies:[D,Q],encapsulation:2})}}return n})(),xa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-fluid-example"]],standalone:!1,decls:4,vars:1,consts:[["fluidPopup",""],["sui-button","","sui-popup","",3,"suiPopupContent"],["sui-grid","","suiDivided","divided","suiAlignment","center aligned","suiWidth","four"],["suiGridColumn",""]],template:function(a,s){if(a&1&&(i(0,"div",1),t(1,` Show fluid popup
`),e(),u(2,mm,9,0,"ng-template",null,0,fe)),a&2){let f=Ae(3);r("suiPopupContent",f)}},dependencies:[w,dt,mt,Q],encapsulation:2})}}return n})(),Sa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-size-example"]],standalone:!1,decls:5,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","mini","suiPopupContent","Hello. This is a mini popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","tiny","suiPopupContent","Hello. This is a tiny popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","small","suiPopupContent","Hello. This is a small popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","large","suiPopupContent","Hello. This is a large popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","huge","suiPopupContent","Hello. This is a huge popup"]],template:function(a,s){a&1&&d(0,"i",0)(1,"i",1)(2,"i",2)(3,"i",3)(4,"i",4)},dependencies:[D,Q],encapsulation:2})}}return n})(),va=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-flowing-example"]],standalone:!1,decls:4,vars:1,consts:[["flowingTemplate",""],["sui-button","","sui-popup","","suiPopupFlowing","",3,"suiPopupContent"],["sui-grid","","suiDivided","divided","suiAlignment","center aligned","suiWidth","three"],["suiGridColumn",""],["sui-header",""],["sui-button",""]],template:function(a,s){if(a&1&&(i(0,"div",1),t(1,` Show flowing popup
`),e(),u(2,pm,28,0,"ng-template",null,0,fe)),a&2){let f=Ae(3);r("suiPopupContent",f)}},dependencies:[v,w,dt,mt,Q],encapsulation:2})}}return n})(),ba=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-inverted-example"]],standalone:!1,decls:3,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupInverted","","suiPopupContent","Hello. This is an inverted popup"],["sui-button","","suiIcon","","sui-popup","","suiPopupInverted","","suiPopupContent","Hello. This is an inverted popup"],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(d(0,"i",0),i(1,"button",1),d(2,"i",2),e())},dependencies:[w,D,Q],encapsulation:2})}}return n})(),Ca=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup-position-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-icon","","suiCircular","","suiColour","red","suiSize","big","suiIconType","heart","sui-popup","","suiPopupPlacement","bottom left","suiPopupContent","This is a bottom left popup"],["sui-icon","","suiCircular","","suiColour","teal","suiSize","big","suiIconType","heart","sui-popup","","suiPopupPlacement","top right","suiPopupContent","This is a top right popup"]],template:function(a,s){a&1&&d(0,"i",0)(1,"i",1)},dependencies:[D,Q],encapsulation:2})}}return n})();function cm(n,m){n&1&&d(0,"doc-popup-standard-example")}function gm(n,m){n&1&&d(0,"doc-popup-titled-example")}function hm(n,m){n&1&&d(0,"doc-popup-html-example")}function fm(n,m){n&1&&d(0,"doc-popup-basic-example")}function xm(n,m){n&1&&d(0,"doc-popup-width-example")}function Sm(n,m){n&1&&d(0,"doc-popup-fluid-example")}function vm(n,m){n&1&&d(0,"doc-popup-size-example")}function bm(n,m){n&1&&d(0,"doc-popup-flowing-example")}function Cm(n,m){n&1&&d(0,"doc-popup-inverted-example")}function ym(n,m){n&1&&d(0,"doc-popup-position-example")}function Em(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Popup"),e(),i(6,"p"),t(7,"An element can specify popup content to appear"),e(),i(8,"div",5),t(9," Popup relies on "),i(10,"a",6),t(11,"Angular CDK"),e(),t(12,". Ensure that you have the latest version compatible with your Angular version "),e(),u(13,cm,1,0,"ng-template",7),e(),i(14,"doc-code-sample",3)(15,"h3",4),t(16,"Titled"),e(),i(17,"p"),t(18,"An element can specify popup content with a title"),e(),u(19,gm,1,0,"ng-template",7),e(),i(20,"doc-code-sample",3)(21,"h3",4),t(22,"HTML"),e(),i(23,"p"),t(24,"An element can specify template HTML for a popup"),e(),u(25,hm,1,0,"ng-template",7),e(),i(26,"h2",2),t(27,"Variations"),e(),i(28,"doc-code-sample",3)(29,"h3",4),t(30,"Basic"),e(),i(31,"p"),t(32,"A popup can provide more basic formatting"),e(),u(33,fm,1,0,"ng-template",7),e(),i(34,"doc-code-sample",3)(35,"h3",4),t(36,"Width"),e(),i(37,"p"),t(38,"A popup can be extra wide to allow for longer content"),e(),u(39,xm,1,0,"ng-template",7),e(),i(40,"doc-code-sample",3)(41,"h3",4),t(42,"Fluid"),e(),i(43,"p"),t(44,"A fluid popup will take up the entire width of its offset container"),e(),u(45,Sm,1,0,"ng-template",7),e(),i(46,"doc-code-sample",3)(47,"h3",4),t(48,"Size"),e(),i(49,"p"),t(50,"A popup can vary in size"),e(),u(51,vm,1,0,"ng-template",7),e(),i(52,"doc-code-sample",3)(53,"h3",4),t(54,"Flowing"),e(),i(55,"p"),t(56,"A popup can have no maximum width and continue to flow to fit its content"),e(),u(57,bm,1,0,"ng-template",7),e(),i(58,"doc-code-sample",3)(59,"h3",4),t(60,"Inverted"),e(),i(61,"p"),t(62,"A popup can have its colors inverted"),e(),u(63,Cm,1,0,"ng-template",7),e(),i(64,"doc-code-sample",3)(65,"h3",4),t(66,"Position"),e(),i(67,"p"),t(68,"A popup can be position around its trigger"),e(),u(69,ym,1,0,"ng-template",7),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetStandard),l(11),r("templateCode",o.snippetTitled),l(6),r("templateCode",o.snippetHtml),l(8),r("templateCode",o.snippetBasic),l(6),r("templateCode",o.snippetWidth),l(6),r("templateCode",o.snippetFluid),l(6),r("templateCode",o.snippetSize),l(6),r("templateCode",o.snippetFlowing),l(6),r("templateCode",o.snippetInverted),l(6),r("templateCode",o.snippetPosition)}}function _m(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-popup"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiPopupPlacement"),e(),i(20,"td"),t(21,"Set the popup's position. Allowed values could be "),i(22,"span",9),t(23,"'top left'"),e(),t(24," | "),i(25,"span",9),t(26,"'top center'"),e(),t(27," | "),i(28,"span",9),t(29,"'top right'"),e(),t(30," | "),i(31,"span",9),t(32,"'bottom left'"),e(),t(33," | "),i(34,"span",9),t(35,"'bottom center'"),e(),t(36," | "),i(37,"span",9),t(38,"'bottom right'"),e(),t(39," | "),i(40,"span",9),t(41,"'right center'"),e(),t(42," | "),i(43,"span",9),t(44,"'left center'"),e()(),i(45,"td")(46,"div",10),t(47," string "),e()(),i(48,"td")(49,"div",11),t(50," top left "),e()()(),i(51,"tr")(52,"td"),t(53,"suiPopupSize"),e(),i(54,"td"),t(55,"Set the popup size. Allowed values could be "),i(56,"span",9),t(57,"'mini'"),e(),t(58," | "),i(59,"span",9),t(60,"'tiny'"),e(),t(61," | "),i(62,"span",9),t(63,"'small'"),e(),t(64," | "),i(65,"span",9),t(66,"'medium'"),e(),t(67," | "),i(68,"span",9),t(69,"'big'"),e(),t(70," | "),i(71,"span",9),t(72,"'huge'"),e(),t(73," | "),i(74,"span",9),t(75,"'massive'"),e(),t(76," | "),i(77,"span",9),t(78,"null"),e()(),i(79,"td")(80,"div",10),t(81," string "),e()(),i(82,"td")(83,"div",11),t(84," null "),e()()(),i(85,"tr")(86,"td"),t(87,"suiPopupWidth"),e(),i(88,"td"),t(89," Determines the popup's width. Allowed values could be "),i(90,"span",9),t(91,"'wide'"),e(),t(92," | "),i(93,"span",9),t(94,"'very wide'"),e(),t(95," | "),i(96,"span",9),t(97,"null"),e()(),i(98,"td")(99,"div",10),t(100,"string"),e()(),i(101,"td")(102,"div",11),t(103,"null"),e()()(),i(104,"tr")(105,"td"),t(106,"suiPopupTrigger"),e(),i(107,"td"),t(108," Determines the popup's trigger. Allowed values could be "),i(109,"span",9),t(110,"'hover'"),e(),t(111," | "),i(112,"span",9),t(113,"'click'"),e()(),i(114,"td")(115,"div",10),t(116,"string"),e()(),i(117,"td")(118,"div",11),t(119,"hover"),e()()(),i(120,"tr")(121,"td"),t(122,"suiPopupTitle"),e(),i(123,"td"),t(124," What should get rendered as the popup's title/header "),e(),i(125,"td")(126,"div",10),t(127,"string"),e()(),i(128,"td")(129,"div",11),t(130,"null"),e()()(),i(131,"tr")(132,"td"),t(133,"suiPopupContent"),e(),i(134,"td"),t(135," What should get rendered as the popup's content. Could be a string or a template reference "),e(),i(136,"td")(137,"div",10),t(138,"string"),e(),t(139," | "),i(140,"div",10),t(141,"TemplateRef<any>"),e()(),i(142,"td")(143,"div",11),t(144,"null"),e()()(),i(145,"tr")(146,"td"),t(147,"suiPopupInverted"),e(),i(148,"td"),t(149," Determines if the popup uses inverted colours "),e(),i(150,"td")(151,"div",10),t(152,"boolean"),e()(),i(153,"td")(154,"div",11),t(155,"false"),e()()(),i(156,"tr")(157,"td"),t(158,"suiPopupFluid"),e(),i(159,"td"),t(160," Determines if the popup uses fluid styling "),e(),i(161,"td")(162,"div",10),t(163,"boolean"),e()(),i(164,"td")(165,"div",11),t(166,"false"),e()()(),i(167,"tr")(168,"td"),t(169,"suiPopupFlowing"),e(),i(170,"td"),t(171," Determines if the popup uses flowing styling "),e(),i(172,"td")(173,"div",10),t(174,"boolean"),e()(),i(175,"td")(176,"div",11),t(177,"false"),e()()(),i(178,"tr")(179,"td"),t(180,"suiPopupBasic"),e(),i(181,"td"),t(182,"Determines whether the popup uses basic styling and renders without the arrow"),e(),i(183,"td")(184,"div",10),t(185,"boolean"),e()(),i(186,"td")(187,"div",11),t(188,"false"),e()()()()()())}var ya=(()=>{class n{constructor(o){this.snippetStandard=ia,this.snippetTitled=na,this.snippetHtml=oa,this.snippetBasic=aa,this.snippetWidth=sa,this.snippetFluid=ra,this.snippetSize=la,this.snippetFlowing=da,this.snippetInverted=ma,this.snippetPosition=pa,o.setTitle("Popup | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-popup"]],standalone:!1,decls:3,vars:2,consts:[["header","Popup","subHeader","A popup displays additional information on top of a page"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["href","https://www.npmjs.com/package/@angular/cdk"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Em,70,10,"div",1)(2,_m,189,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,Qe,ua,ca,ga,ha,fa,xa,Sa,va,ba,Ca],encapsulation:2})}}return n})();var Ea=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var _a=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var Da=`<sui-select
    suiFluid
    name="fluid"
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var Ta=`<sui-select
    name="multiple"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var wa=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var Ma=`<sui-select
    suiSearch
    name="multiple-search"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var Pa=`<sui-select
    name="flag"
    suiPlaceholder="Select Country"
    [suiOptions]="countries">
</sui-select>
`;var Ia=`countries: ISelectOption[] = [
  { text: 'Albania', value: 'al', flag: 'al' },
  { text: 'Angola', value: 'ao', flag: 'ao' },
  { text: 'Azerbaijan', value: 'az', flag: 'az' },
  { text: 'Botswana', value: 'bw', flag: 'bw' },
  { text: 'Nigeria', value: 'ng', flag: 'ng' },
];
`;var Fa=`<sui-select
    name="images"
    suiPlaceholder="Select User"
    [suiOptions]="persons">
</sui-select>
`;var Va=`persons: ISelectOption[] = [
  { text: 'Elliot', value: null, image: { avatar: true, src: '/assets/images/elliot.jpg'} },
  { text: 'Helen', value: null, image: { avatar: true, src: '/assets/images/helen.jpg'} },
  { text: 'Jenny', value: null, image: { avatar: true, src: '/assets/images/jenny.jpg'} },
  { text: 'Joe', value: null, image: { avatar: true, src: '/assets/images/joe.jpg'} },
  { text: 'Justen', value: null, image: { avatar: true, src: '/assets/images/justen.jpg'} },
  { text: 'Laura', value: null, image: { avatar: true, src: '/assets/images/laura.jpg'} },
  { text: 'Matt', value: null, image: { avatar: true, src: '/assets/images/matt.jpg'} },
  { text: 'Stevie', value: null, image: { avatar: true, src: '/assets/images/stevie.jpg'} },
];
`;var Aa=`<sui-select
    suiFluid
    suiMultiple
    suiLoading
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var ka=`options: ISelectOption[] = [
  { text: 'Option 1', value: 'one' },
  { text: 'Option 2', value: 'two' },
  { text: 'Option 3', value: 'three' },
];
`;var Ba=`<sui-select
    suiError
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var La=`<sui-select
    disabled
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var ee=class{constructor(){this.genderOptions=[{text:"Male",value:0},{text:"Female",value:1}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Angola",value:"ao",flag:"ao"},{text:"Azerbaijan",value:"az",flag:"az"},{text:"Botswana",value:"bw",flag:"bw"},{text:"Nigeria",value:"ng",flag:"ng"}],this.states=[{text:"Alabama",value:"AL"},{text:"Arizona",value:"AZ"},{text:"California",value:"CA"},{text:"District Of Columbia",value:"DC"},{text:"Idaho",value:"ID"},{text:"Indiana",value:"IN"},{text:"Kansas",value:"KS"},{text:"Louisiana",value:"LA"},{text:"Maryland",value:"MD"},{text:"Utah",value:"UT"}],this.persons=[{text:"Elliot",value:null,image:{avatar:!0,src:"/assets/images/elliot.jpg"}},{text:"Helen",value:null,image:{avatar:!0,src:"/assets/images/helen.jpg"}},{text:"Jenny",value:null,image:{avatar:!0,src:"/assets/images/jenny.jpg"}},{text:"Joe",value:null,image:{avatar:!0,src:"/assets/images/joe.jpg"}},{text:"Justen",value:null,image:{avatar:!0,src:"/assets/images/justen.jpg"}},{text:"Laura",value:null,image:{avatar:!0,src:"/assets/images/laura.jpg"}},{text:"Matt",value:null,image:{avatar:!0,src:"/assets/images/matt.jpg"}},{text:"Stevie",value:null,image:{avatar:!0,src:"/assets/images/stevie.jpg"}}],this.options=[{text:"Option 1",value:"one"},{text:"Option 2",value:"two"},{text:"Option 3",value:"three"}]}},Ra=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-standard-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.genderOptions)},dependencies:[ne],encapsulation:2})}}return n})(),Oa=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-fluid-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiFluid","","name","fluid","suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.genderOptions)},dependencies:[ne],encapsulation:2})}}return n})(),Ha=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-multiple-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["name","multiple","suiPlaceholder","State",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.states)},dependencies:[ne],encapsulation:2})}}return n})(),za=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-multiple-search-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiSearch","","name","multiple-search","suiPlaceholder","State",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.states)},dependencies:[ne],encapsulation:2})}}return n})(),Wa=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-flag-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["name","flag","suiPlaceholder","Select Country",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.countries)},dependencies:[ne],encapsulation:2})}}return n})(),ja=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-images-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["name","images","suiPlaceholder","Select User",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.persons)},dependencies:[ne],encapsulation:2})}}return n})(),Na=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-loading-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiFluid","","suiMultiple","","suiLoading","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.options)},dependencies:[ne],encapsulation:2})}}return n})(),Ua=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-error-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["suiError","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.options)},dependencies:[ne],encapsulation:2})}}return n})(),Ga=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-select-disabled-example"]],standalone:!1,features:[h],decls:1,vars:1,consts:[["disabled","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&d(0,"sui-select",0),a&2&&r("suiOptions",s.options)},dependencies:[ne],encapsulation:2})}}return n})();function zm(n,m){n&1&&d(0,"doc-select-standard-example")}function Wm(n,m){n&1&&d(0,"doc-select-fluid-example")}function jm(n,m){n&1&&d(0,"doc-select-multiple-example")}function Nm(n,m){n&1&&d(0,"doc-select-multiple-search-example")}function Um(n,m){n&1&&d(0,"doc-select-flag-example")}function Gm(n,m){n&1&&d(0,"doc-select-images-example")}function qm(n,m){n&1&&d(0,"doc-select-loading-example")}function Ym(n,m){n&1&&d(0,"doc-select-error-example")}function Xm(n,m){n&1&&d(0,"doc-select-disabled-example")}function Jm(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Type"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Select"),e(),i(6,"p"),t(7,"A standard select can be used to pick between choices in a form"),e(),u(8,zm,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3),u(10,Wm,1,0,"ng-template",5),e(),i(11,"doc-code-sample",3)(12,"h3",4),t(13,"Multiple Selection"),e(),i(14,"p"),t(15,"A selection dropdown can allow multiple selections"),e(),u(16,jm,1,0,"ng-template",5),e(),i(17,"doc-code-sample",3)(18,"h3",4),t(19,"Multiple Search Selection"),e(),i(20,"p"),t(21,"A selection dropdown can allow multiple search selections"),e(),u(22,Nm,1,0,"ng-template",5),e(),i(23,"doc-code-sample",3)(24,"h3",4),t(25,"Flag Selection"),e(),i(26,"p"),t(27,"A selection can include flag icons"),e(),u(28,Um,1,0,"ng-template",5),e(),i(29,"doc-code-sample",3)(30,"h3",4),t(31,"Image Selection"),e(),i(32,"p"),t(33,"A selection can include images"),e(),u(34,Gm,1,0,"ng-template",5),e(),i(35,"h2",2),t(36,"States"),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Loading"),e(),i(40,"p"),t(41,"A dropdown can show that it is currently loading data"),e(),u(42,qm,1,0,"ng-template",5),e(),i(43,"doc-code-sample",3)(44,"h3",4),t(45,"Error"),e(),i(46,"p"),t(47,"An errored dropdown can alert a user to a problem"),e(),u(48,Ym,1,0,"ng-template",5),e(),i(49,"doc-code-sample",3)(50,"h3",4),t(51,"Disabled"),e(),i(52,"p"),t(53,"A disabled dropdown menu or item does not allow user interaction"),e(),u(54,Xm,1,0,"ng-template",5),e()()),n&2){let o=x();l(3),r("templateCode",o.snippetStandard)("componentCode",o.snippetStandardTs),l(6),r("templateCode",o.snippetFluid)("componentCode",o.snippetStandardTs),l(2),r("templateCode",o.snippetMultiple)("componentCode",o.snippetMultipleTs),l(6),r("templateCode",o.snippetMultipleSearch)("componentCode",o.snippetMultipleTs),l(6),r("templateCode",o.snippetFlags)("componentCode",o.snippetFlagsTs),l(6),r("templateCode",o.snippetImages)("componentCode",o.snippetImagesTs),l(8),r("templateCode",o.snippetLoading)("componentCode",o.snippetStatesTs),l(6),r("templateCode",o.snippetError)("componentCode",o.snippetStatesTs),l(6),r("templateCode",o.snippetDisabled)("componentCode",o.snippetStatesTs)}}function Km(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-select"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiPlaceholder"),e(),i(20,"td"),t(21,"The select's placeholder "),e(),i(22,"td")(23,"div",7),t(24," string "),e()(),i(25,"td")(26,"div",8),t(27," null "),e()()(),i(28,"tr")(29,"td"),t(30,"suiSearch"),e(),i(31,"td"),t(32,"Determines if the select supports searching. "),e(),i(33,"td")(34,"div",7),t(35," boolean "),e()(),i(36,"td")(37,"div",8),t(38," false "),e()()(),i(39,"tr")(40,"td"),t(41,"suiFluid"),e(),i(42,"td"),t(43,"Determines if the select is rendered as fluid. "),e(),i(44,"td")(45,"div",7),t(46," boolean "),e()(),i(47,"td")(48,"div",8),t(49," false "),e()()(),i(50,"tr")(51,"td"),t(52,"suiInline"),e(),i(53,"td"),t(54,"Determines if the select is rendered inline. "),e(),i(55,"td")(56,"div",7),t(57," boolean "),e()(),i(58,"td")(59,"div",8),t(60," false "),e()()(),i(61,"tr")(62,"td"),t(63,"suiLoading"),e(),i(64,"td"),t(65,"Determines if the select is rendered as loading. "),e(),i(66,"td")(67,"div",7),t(68," boolean "),e()(),i(69,"td")(70,"div",8),t(71," false "),e()()(),i(72,"tr")(73,"td"),t(74,"suiError"),e(),i(75,"td"),t(76,"Determines if the select is rendered to depict an error. "),e(),i(77,"td")(78,"div",7),t(79," boolean "),e()(),i(80,"td")(81,"div",8),t(82," false "),e()()(),i(83,"tr")(84,"td"),t(85,"disabled"),e(),i(86,"td"),t(87,"Determines if the select is disabled. "),e(),i(88,"td")(89,"div",7),t(90," boolean "),e()(),i(91,"td")(92,"div",8),t(93," false "),e()()(),i(94,"tr")(95,"td"),t(96,"suiScrolling"),e(),i(97,"td"),t(98,"Determines if the select is rendered as scrollable. "),e(),i(99,"td")(100,"div",7),t(101," boolean "),e()(),i(102,"td")(103,"div",8),t(104," false "),e()()(),i(105,"tr")(106,"td"),t(107,"suiMultiple"),e(),i(108,"td"),t(109,"Determines if the select allows for multiple selection. "),e(),i(110,"td")(111,"div",7),t(112," boolean "),e()(),i(113,"td")(114,"div",8),t(115," false "),e()()(),i(116,"tr")(117,"td"),t(118,"suiCompact"),e(),i(119,"td"),t(120,"Determines if the select is rendered as compact. "),e(),i(121,"td")(122,"div",7),t(123," boolean "),e()(),i(124,"td")(125,"div",8),t(126," false "),e()()(),i(127,"tr")(128,"td"),t(129,"name"),e(),i(130,"td"),t(131,"The components name. "),e(),i(132,"td")(133,"div",7),t(134," string "),e()(),i(135,"td")(136,"div",8),t(137," null "),e()()()()(),i(138,"h4",4),t(139,"Events"),e(),i(140,"table",6)(141,"thead")(142,"tr")(143,"th"),t(144,"Property"),e(),i(145,"th"),t(146,"Description"),e(),i(147,"th"),t(148,"Type"),e()()(),i(149,"tbody")(150,"tr")(151,"td"),t(152,"suiSelectionChanged"),e(),i(153,"td"),t(154,"Fired when a the selection is changed. "),e(),i(155,"td")(156,"div",7),t(157," any "),e()()()()(),i(158,"h2",2),t(159,"suiSelectMenu"),e(),i(160,"h4",4),t(161,"Properties"),e(),i(162,"table",6)(163,"thead")(164,"tr")(165,"th"),t(166,"Property"),e(),i(167,"th"),t(168,"Description"),e(),i(169,"th"),t(170,"Type"),e(),i(171,"th"),t(172,"Default"),e()()(),i(173,"tbody")(174,"tr")(175,"td"),t(176,"suiDirection"),e(),i(177,"td"),t(178,"Set the select's direction. Allowed values could be "),i(179,"span",9),t(180,"left"),e(),t(181," | "),i(182,"span",9),t(183,"right"),e(),t(184," | "),i(185,"span",9),t(186,"null"),e()(),i(187,"td")(188,"div",7),t(189," string "),e()(),i(190,"td")(191,"div",8),t(192," null "),e()()(),i(193,"tr")(194,"td"),t(195,"suiScrolling"),e(),i(196,"td"),t(197,"Determines if the menu is scrollable or not "),e(),i(198,"td")(199,"div",7),t(200," boolean "),e()(),i(201,"td")(202,"div",8),t(203," false "),e()()()()(),i(204,"h2",2),t(205,"suiSelectMenuItem"),e(),i(206,"h4",4),t(207,"Properties"),e(),i(208,"table",6)(209,"thead")(210,"tr")(211,"th"),t(212,"Property"),e(),i(213,"th"),t(214,"Description"),e(),i(215,"th"),t(216,"Type"),e(),i(217,"th"),t(218,"Default"),e()()(),i(219,"tbody")(220,"tr")(221,"td"),t(222,"suiValue"),e(),i(223,"td"),t(224," The value to be emitted if this menu item is selected. "),e(),i(225,"td")(226,"div",7),t(227," any "),e()(),i(228,"td")(229,"div",8),t(230," null "),e()()(),i(231,"tr")(232,"td"),t(233,"suiMultiple"),e(),i(234,"td"),t(235,"Determines if this menu allows for selecting multiple items "),e(),i(236,"td")(237,"div",7),t(238," boolean "),e()(),i(239,"td")(240,"div",8),t(241," false "),e()()()()()())}var qa=(()=>{class n{constructor(o){this.snippetStandard=Ea,this.snippetStandardTs=_a,this.snippetFluid=Da,this.snippetMultiple=Ta,this.snippetMultipleTs=wa,this.snippetMultipleSearch=Ma,this.snippetFlags=Pa,this.snippetFlagsTs=Ia,this.snippetImages=Fa,this.snippetImagesTs=Va,this.snippetLoading=Aa,this.snippetStatesTs=ka,this.snippetError=Ba,this.snippetDisabled=La,this.genderOptions=[{text:"Male",value:0},{text:"Female",value:1}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Angola",value:"ao",flag:"ao"},{text:"Azerbaijan",value:"az",flag:"az"},{text:"Botswana",value:"bw",flag:"bw"},{text:"Nigeria",value:"ng",flag:"ng"}],this.states=[{text:"Alabama",value:"AL"},{text:"Arizona",value:"AZ"},{text:"California",value:"CA"},{text:"District Of Columbia",value:"DC"},{text:"Idaho",value:"ID"},{text:"Indiana",value:"IN"},{text:"Kansas",value:"KS"},{text:"Louisiana",value:"LA"},{text:"Maryland",value:"MD"},{text:"Utah",value:"UT"}],this.persons=[{text:"Elliot",value:null,image:{avatar:!0,src:"/assets/images/elliot.jpg"}},{text:"Helen",value:null,image:{avatar:!0,src:"/assets/images/helen.jpg"}},{text:"Jenny",value:null,image:{avatar:!0,src:"/assets/images/jenny.jpg"}},{text:"Joe",value:null,image:{avatar:!0,src:"/assets/images/joe.jpg"}},{text:"Justen",value:null,image:{avatar:!0,src:"/assets/images/justen.jpg"}},{text:"Laura",value:null,image:{avatar:!0,src:"/assets/images/laura.jpg"}},{text:"Matt",value:null,image:{avatar:!0,src:"/assets/images/matt.jpg"}},{text:"Stevie",value:null,image:{avatar:!0,src:"/assets/images/stevie.jpg"}}],this.options=[{text:"Option 1",value:"one"},{text:"Option 2",value:"two"},{text:"Option 3",value:"three"}],o.setTitle("Select | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-select"]],standalone:!1,decls:3,vars:2,consts:[["header","Select","subHeader","A tab is a hidden section of content activated by a menu"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Jm,55,18,"div",1)(2,Km,242,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,Ra,Oa,Ha,za,Wa,ja,Na,Ua,Ga],encapsulation:2})}}return n})();var Ya=`<sui-modal
    suiHeaderText="Select a Photo"
    [(visible)]="isStandardModalVisible">
    <div sui-image suiModalContent>
      <div sui-image suiSize="medium">
        <img src="https://semantic-ui.com/images/avatar2/large/rachel.png">
      </div>
      <div suiCardDescription>
        <div sui-header>We've auto-chosen a profile image for you.</div>
        <p>We've grabbed the following image from the <a href="https://www.gravatar.com"
        target="_blank">gravatar</a> image
      associated with your registered e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </div>
  </div>
  <div suiModalActions>
    <div sui-button suiEmphasis="secondary" suiColour="black">
      Nope
    </div>
    <div sui-button suiEmphasis="positive" suiIcon suiLabeled="right labeled">
      Yep, that's me
      <i sui-icon suiIconType="checkmark"></i>
    </div>
  </div>
</sui-modal>
`;var Xa=`isStandardModalVisible = true;
`;var Ja=`<sui-modal
  suiBasic
  suiHeaderIcon="archive"
  suiHeaderText="Archive Old Messages"
  [(visible)]="isBasicModalVisible">
  <div sui-image suiModalContent>
    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
  </div>
  <div suiModalActions>
    <div sui-button suiBasic suiInverted suiColour="red">
      <i sui-icon suiIconType="remove"></i>
      No
    </div>
    <div sui-button suiInverted suiColour="green" (click)="isStandardModalVisible = false">
      <i sui-icon suiIconType="checkmark"></i>
      Yes
    </div>
  </div>
</sui-modal>
`;var Ka=`isBasicModalVisible = true;
`;var Qa=`<sui-modal
  suiFullScreen
  suiHeaderText="Update Your Settings"
  [(visible)]="isFullScreenModalVisible">
  <div suiModalContent>
    <div sui-form>
      <h4 sui-header suiDividing>Give us your feedback</h4>
      <div suiFormField>
        <label>Feedback</label>
        <textarea></textarea>
      </div>
      <div suiFormField>
        <sui-checkbox [checked]="true">It's okay to contact me.</sui-checkbox>
      </div>
    </div>
  </div>
  <div suiModalActions>
    <div sui-button>
      Cancel
    </div>
    <div sui-button suiEmphasis="positive">
      Send
    </div>
  </div>
</sui-modal>
`;var Za=`isFullScreenModalVisible = true;
`;var $a=`<sui-modal
  suiSize="mini"
  suiHeaderText="Delete Your Account"
  [(visible)]="isSizeModalVisible">
  <div suiModalContent>
    <p>Are you sure you want to delete your account</p>
  </div>
  <div suiModalActions>
    <div sui-button suiColour="red">
      No
    </div>
    <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
      Yes
      <i sui-icon suiIconType="checkmark"></i>
    </div>
  </div>
</sui-modal>
`;var es=`isSizeModalVisible = true;
`;var ts=`<sui-modal
  suiHeaderText="Profile Picture"
  [(visible)]="isScrollingModalVisible">
  <div suiModalContent suiScrollable suiImage>
    <div sui-image suiSize="medium">
      <img src="/assets/images/wireframes/image.png"/>
    </div>
    <div suiModalDescription>
      <div sui-header>Modal Header</div>
      <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

      <img sui-image src="/assets/images/wireframes/paragraph.png"/>
      @for (d of dummyList; track d) {
        <div sui-divider></div>
        <img sui-image src="/assets/images/wireframes/paragraph.png"/>
      }
    </div>
  </div>
  <div suiModalActions>
    <div class="black deny" sui-button suiEmphasis="secondary"
      (click)="isScrollingModalVisible = false">
      Close
    </div>
  </div>
</sui-modal>
`;var is=`isScrollingModalVisible = true;
`;var ns=`<sui-modal
  suiClosable="false"
  suiHeaderText="Delete Your Account"
  [(visible)]="isClosableModalVisible">
  <div suiModalContent>
    <p>Are you sure you want to delete your account</p>
  </div>
  <div suiModalActions>
    <div sui-button suiColour="red">
      No
    </div>
    <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
      Yes
      <i sui-icon suiIconType="checkmark"></i>
    </div>
  </div>
</sui-modal>
`;var os=`isClosableModalVisible = true;
`;var as=`<sui-modal
  suiMaskClosable="false"
  suiHeaderText="Delete Your Account"
  [(visible)]="isMaskClosableModalVisible">
  <div suiModalContent>
    <p>Are you sure you want to delete your account</p>
  </div>
  <div suiModalActions>
    <div sui-button suiColour="red">
      No
    </div>
    <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
      Yes
      <i sui-icon suiIconType="checkmark"></i>
    </div>
  </div>
</sui-modal>
`;var ss=`isMaskClosableModalVisible = true;
`;var pp=["contentTemplate"],up=["*"];function cp(n,m){if(n&1){let o=te();i(0,"i",4),S("click",function(){R(o);let s=x(3);return O(s.visible=!1)}),e()}}function gp(n,m){if(n&1&&j(0,cp,1,0,"i",3),n&2){let o=x(2);N(o.suiBasic?-1:0)}}function hp(n,m){if(n&1&&d(0,"i",5),n&2){let o=x(3);r("suiIconType",o.suiHeaderIcon)}}function fp(n,m){if(n&1&&(i(0,"div"),j(1,hp,1,1,"i",5),t(2),e()),n&2){let o=x(2);he("ui",!!o.suiHeaderIcon)("icon",!!o.suiHeaderIcon)("header",!0),l(),N(o.suiHeaderIcon?1:-1),l(),K(" ",o.suiHeaderText," ")}}function xp(n,m){if(n&1&&(i(0,"div",1),j(1,gp,1,1),j(2,fp,3,8,"div",2),ge(3),e()),n&2){let o=x();r("ngClass",o.classes),l(),N(o.suiClosable?1:-1),l(),N(o.suiHeaderText||o.suiHeaderIcon?2:-1)}}var Pe=(()=>{class n{get classes(){return"actions"}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=qe({type:n,selectors:[["","suiModalActions",""]],hostVars:2,hostBindings:function(a,s){a&2&&we(s.classes)},exportAs:["suiModalActions"]})}}return n})(),Ie=(()=>{class n{constructor(){this.suiImage=!1,this.suiScrollable=!1}get classes(){return[F.getPropClass(this.suiScrollable,"scrolling"),F.getPropClass(this.suiImage,"image"),"content"].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=qe({type:n,selectors:[["","suiModalContent",""]],hostVars:2,hostBindings:function(a,s){a&2&&we(s.classes)},inputs:{suiImage:"suiImage",suiScrollable:"suiScrollable"},exportAs:["suiModalContent"]})}}return E([_()],n.prototype,"suiImage",void 0),E([_()],n.prototype,"suiScrollable",void 0),n})(),rs=(()=>{class n{get classes(){return"description"}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=qe({type:n,selectors:[["","suiModalDescription",""]],hostVars:2,hostBindings:function(a,s){a&2&&we(s.classes)},exportAs:["suiModalDescription"]})}}return n})(),be=(()=>{class n{get visible(){return this._visible}set visible(o){o?this.showModal():this.hideModal(),this._visible=o,this.visibleChange.emit(o)}get classes(){return["ui",this.suiSize,F.getPropClass(this.suiBasic,"basic"),F.getPropClass(this.suiFullScreen,"fullscreen"),this.scrollClass,"modal","transition","visible","active"].join(" ")}get scrollClass(){return this.suiScroll==="full"?"long":this.suiScroll==="medium"?"longer":""}constructor(){this.document=ue(ct),this.renderer=ue(xt),this.viewRef=ue(St),this.suiHeaderText=null,this.suiHeaderIcon=null,this.suiSize=null,this.suiScroll="none",this.suiBasic=!1,this.suiClosable=!0,this.suiCentered=!0,this.suiBlurring=!1,this.suiFullScreen=!1,this.suiMaskClosable=!0,this.visibleChange=new Ee,this._visible=!1,this._modalDomRef=null,this.clickListener=null,this.uniqueId=Math.ceil(Math.random()*1e8)}ngOnDestroy(){let o=this.getModalFromDom();o&&(this.renderer.removeChild(this.document.body,o),this.suiBlurring&&this.renderer.removeClass(this.document.body,"dimmable"))}showModal(){this.isModalInDom()||this.generateDomElement(),this._modalDomRef&&(this.renderer.setProperty(this._modalDomRef,"style","display: flex !important;"),this.renderer.addClass(this._modalDomRef,"visible"),this.renderer.addClass(this._modalDomRef,"active"),this.suiBlurring&&(this.renderer.addClass(this.document.body,"dimmable"),this.renderer.addClass(this.document.body,"blurring"),this.renderer.addClass(this.document.body,"dimmed")))}hideModal(){this._modalDomRef&&(this.renderer.removeAttribute(this._modalDomRef,"style"),this.renderer.removeClass(this._modalDomRef,"visible"),this.renderer.removeClass(this._modalDomRef,"active"),this.suiBlurring&&(this.renderer.removeClass(this.document.body,"blurring"),this.renderer.removeClass(this.document.body,"dimmed")))}generateDomElement(){let o=this.renderer.createElement("div");this.renderer.setAttribute(o,"id",this.uniqueId.toString());let a="ui dimmer modals page"+(this.suiCentered?"":" top aligned")+" transition";this.renderer.setAttribute(o,"class",a);let s=this.viewRef.createEmbeddedView(this.contentTemplate);s.detectChanges();for(let f of s.rootNodes)this.renderer.appendChild(o,f);this._modalDomRef=o,this.clickListener=this.renderer.listen(this._modalDomRef,"click",f=>{f.target.id===this.uniqueId.toString()&&this.onClick()}),this.renderer.appendChild(this.document.body,this._modalDomRef)}isModalInDom(){return!!this.getModalFromDom()}getModalFromDom(){return this.document.getElementById(String(this.uniqueId))}onClick(){this.suiMaskClosable&&(this.visible=!1)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=p({type:n,selectors:[["sui-modal"]],viewQuery:function(a,s){if(a&1&&Je(pp,7),a&2){let f;Fe(f=Ve())&&(s.contentTemplate=f.first)}},inputs:{suiHeaderText:"suiHeaderText",suiHeaderIcon:"suiHeaderIcon",suiSize:"suiSize",suiScroll:"suiScroll",suiBasic:"suiBasic",suiClosable:"suiClosable",suiCentered:"suiCentered",suiBlurring:"suiBlurring",suiFullScreen:"suiFullScreen",suiMaskClosable:"suiMaskClosable",visible:"visible"},outputs:{visibleChange:"visibleChange"},ngContentSelectors:up,decls:2,vars:0,consts:[["contentTemplate",""],[2,"display","block !important",3,"ngClass"],[3,"ui","icon","header"],["sui-icon","","suiIconType","close"],["sui-icon","","suiIconType","close",3,"click"],["sui-icon","",3,"suiIconType"]],template:function(a,s){a&1&&(ce(),u(0,xp,4,3,"ng-template",null,0,fe))},dependencies:[q,Me,D],encapsulation:2,changeDetection:0})}}return E([_()],n.prototype,"suiBasic",void 0),E([_()],n.prototype,"suiClosable",void 0),E([_()],n.prototype,"suiCentered",void 0),E([_()],n.prototype,"suiBlurring",void 0),E([_()],n.prototype,"suiFullScreen",void 0),E([_()],n.prototype,"suiMaskClosable",void 0),n})(),ls=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=U({imports:[q,be]})}}return n})();function vp(n,m){n&1&&d(0,"div",9)(1,"img",6)}var Ce=class{constructor(){this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((m,o)=>o)}},ds=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-modal-standard-example"]],standalone:!1,features:[h],decls:20,vars:1,consts:[["suiHeaderText","Select a Photo",3,"visibleChange","visible"],["sui-image","","suiModalContent",""],["sui-image","","suiSize","medium"],["src","https://semantic-ui.com/images/avatar2/large/rachel.png"],["suiCardDescription",""],["sui-header",""],["href","https://www.gravatar.com","target","_blank"],["suiModalActions",""],["sui-button","","suiEmphasis","secondary","suiColour","black"],["sui-button","","suiEmphasis","positive","suiIcon","","suiLabeled","right labeled"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),y("visibleChange",function(c){return C(s.isStandardModalVisible,c)||(s.isStandardModalVisible=c),c}),i(1,"div",1)(2,"div",2),d(3,"img",3),e(),i(4,"div",4)(5,"div",5),t(6,"We've auto-chosen a profile image for you."),e(),i(7,"p"),t(8,"We've grabbed the following image from the "),i(9,"a",6),t(10,"gravatar"),e(),t(11," image associated with your registered e-mail address."),e(),i(12,"p"),t(13,"Is it okay to use this photo?"),e()()(),i(14,"div",7)(15,"div",8),t(16," Nope "),e(),i(17,"div",9),t(18," Yep, that's me "),d(19,"i",10),e()()()),a&2&&b("visible",s.isStandardModalVisible)},dependencies:[$e,v,w,D,Be,be,Pe,Ie],encapsulation:2})}}return n})(),ms=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-modal-basic-example"]],standalone:!1,features:[h],decls:11,vars:1,consts:[["suiBasic","","suiHeaderIcon","archive","suiHeaderText","Archive Old Messages",3,"visibleChange","visible"],["sui-image","","suiModalContent",""],["suiModalActions",""],["sui-button","","suiBasic","","suiInverted","","suiColour","red"],["sui-icon","","suiIconType","remove"],["sui-button","","suiInverted","","suiColour","green",3,"click"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),y("visibleChange",function(c){return C(s.isBasicModalVisible,c)||(s.isBasicModalVisible=c),c}),i(1,"div",1)(2,"p"),t(3,"Your inbox is getting full, would you like us to enable automatic archiving of old messages?"),e()(),i(4,"div",2)(5,"div",3),d(6,"i",4),t(7," No "),e(),i(8,"div",5),S("click",function(){return s.isStandardModalVisible=!1}),d(9,"i",6),t(10," Yes "),e()()()),a&2&&b("visible",s.isBasicModalVisible)},dependencies:[w,D,Be,be,Pe,Ie],encapsulation:2})}}return n})(),ps=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-modal-full-screen-example"]],standalone:!1,features:[h],decls:17,vars:2,consts:[["suiFullScreen","","suiHeaderText","Update Your Settings",3,"visibleChange","visible"],["suiModalContent",""],["sui-form",""],["sui-header","","suiDividing",""],["suiFormField",""],[3,"checked"],["suiModalActions",""],["sui-button",""],["sui-button","","suiEmphasis","positive"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),y("visibleChange",function(c){return C(s.isFullScreenModalVisible,c)||(s.isFullScreenModalVisible=c),c}),i(1,"div",1)(2,"div",2)(3,"h4",3),t(4,"Give us your feedback"),e(),i(5,"div",4)(6,"label"),t(7,"Feedback"),e(),d(8,"textarea"),e(),i(9,"div",4)(10,"sui-checkbox",5),t(11,"It's okay to contact me."),e()()()(),i(12,"div",6)(13,"div",7),t(14," Cancel "),e(),i(15,"div",8),t(16," Send "),e()()()),a&2&&(b("visible",s.isFullScreenModalVisible),l(10),r("checked",!0))},dependencies:[Oe,He,v,w,be,Pe,Ie,Y],encapsulation:2})}}return n})(),us=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-modal-size-example"]],standalone:!1,features:[h],decls:10,vars:1,consts:[["suiSize","mini","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),y("visibleChange",function(c){return C(s.isSizeModalVisible,c)||(s.isSizeModalVisible=c),c}),i(1,"div",1)(2,"p"),t(3,"Are you sure you want to delete your account"),e()(),i(4,"div",2)(5,"div",3),t(6," No "),e(),i(7,"div",4),t(8," Yes "),d(9,"i",5),e()()()),a&2&&b("visible",s.isSizeModalVisible)},dependencies:[w,D,be,Pe,Ie],encapsulation:2})}}return n})(),cs=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-modal-scrolling-example"]],standalone:!1,features:[h],decls:15,vars:1,consts:[["suiHeaderText","Profile Picture",3,"visibleChange","visible"],["suiModalContent","","suiScrollable","","suiImage",""],["sui-image","","suiSize","medium"],["src","/assets/images/wireframes/image.png"],["suiModalDescription",""],["sui-header",""],["sui-image","","src","/assets/images/wireframes/paragraph.png"],["suiModalActions",""],["sui-button","","suiEmphasis","secondary",1,"black","deny",3,"click"],["sui-divider",""]],template:function(a,s){a&1&&(i(0,"sui-modal",0),y("visibleChange",function(c){return C(s.isScrollingModalVisible,c)||(s.isScrollingModalVisible=c),c}),i(1,"div",1)(2,"div",2),d(3,"img",3),e(),i(4,"div",4)(5,"div",5),t(6,"Modal Header"),e(),i(7,"p"),t(8,"This is an example of expanded content that will cause the modal's dimmer to scroll"),e(),d(9,"img",6),De(10,vp,2,0,null,null,_e),e()(),i(12,"div",7)(13,"div",8),S("click",function(){return s.isScrollingModalVisible=!1}),t(14," Close "),e()()()),a&2&&(b("visible",s.isScrollingModalVisible),l(10),Te(s.dummyList))},dependencies:[v,w,Wt,Be,be,Pe,Ie,rs],encapsulation:2})}}return n})(),gs=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-modal-closable-example"]],standalone:!1,features:[h],decls:10,vars:1,consts:[["suiClosable","false","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),y("visibleChange",function(c){return C(s.isClosableModalVisible,c)||(s.isClosableModalVisible=c),c}),i(1,"div",1)(2,"p"),t(3,"Are you sure you want to delete your account"),e()(),i(4,"div",2)(5,"div",3),t(6," No "),e(),i(7,"div",4),t(8," Yes "),d(9,"i",5),e()()()),a&2&&b("visible",s.isClosableModalVisible)},dependencies:[w,D,be,Pe,Ie],encapsulation:2})}}return n})(),hs=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["doc-modal-mask-closable-example"]],standalone:!1,features:[h],decls:10,vars:1,consts:[["suiMaskClosable","false","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),y("visibleChange",function(c){return C(s.isMaskClosableModalVisible,c)||(s.isMaskClosableModalVisible=c),c}),i(1,"div",1)(2,"p"),t(3,"Are you sure you want to delete your account"),e()(),i(4,"div",2)(5,"div",3),t(6," No "),e(),i(7,"div",4),t(8," Yes "),d(9,"i",5),e()()()),a&2&&b("visible",s.isMaskClosableModalVisible)},dependencies:[w,D,be,Pe,Ie],encapsulation:2})}}return n})();function Cp(n,m){n&1&&d(0,"doc-modal-standard-example")}function yp(n,m){n&1&&d(0,"doc-modal-basic-example")}function Ep(n,m){n&1&&d(0,"doc-modal-full-screen-example")}function _p(n,m){n&1&&d(0,"doc-modal-size-example")}function Dp(n,m){n&1&&d(0,"doc-modal-scrolling-example")}function Tp(n,m){n&1&&d(0,"doc-modal-closable-example")}function wp(n,m){n&1&&d(0,"doc-modal-mask-closable-example")}function Mp(n,m){if(n&1){let o=te();i(0,"div")(1,"h2",2),t(2,"States"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Modal"),e(),i(6,"p"),t(7,"A standard modal"),e(),i(8,"button",5),S("click",function(){R(o);let s=x();return O(s.isStandardModalVisible=!0)}),t(9,"Show Modal"),e(),u(10,Cp,1,0,"ng-template",6),e(),i(11,"doc-code-sample",3)(12,"h3",4),t(13,"Basic"),e(),i(14,"p"),t(15,"A modal can reduce its complexity"),e(),i(16,"button",5),S("click",function(){R(o);let s=x();return O(s.isBasicModalVisible=!0)}),t(17,"Show Modal"),e(),u(18,yp,1,0,"ng-template",6),e(),i(19,"h2",2),t(20,"Variations"),e(),i(21,"doc-code-sample",3)(22,"h3",4),t(23,"Full Screen"),e(),i(24,"p"),t(25,"A modal can use the entire size of the screen"),e(),i(26,"button",5),S("click",function(){R(o);let s=x();return O(s.isFullScreenModalVisible=!0)}),t(27,"Show Modal"),e(),u(28,Ep,1,0,"ng-template",6),e(),i(29,"doc-code-sample",3)(30,"h3",4),t(31,"Size"),e(),i(32,"p"),t(33,"A modal can vary in size"),e(),i(34,"button",5),S("click",function(){R(o);let s=x();return O(s.isSizeModalVisible=!0)}),t(35,"Show Modal"),e(),u(36,_p,1,0,"ng-template",6),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Scrolling Content"),e(),i(40,"p"),t(41,"A modal can use the entire size of the screen."),e(),i(42,"button",5),S("click",function(){R(o);let s=x();return O(s.isScrollingModalVisible=!0)}),t(43,"Show Modal"),e(),u(44,Dp,1,0,"ng-template",6),e(),i(45,"doc-code-sample",3)(46,"h3",4),t(47,"Closable"),e(),i(48,"p"),t(49,"By default, a modal is rendered with a close icon in the top right corner. The modal can be rendered without the close button"),e(),i(50,"button",5),S("click",function(){R(o);let s=x();return O(s.isClosableModalVisible=!0)}),t(51,"Show Modal"),e(),u(52,Tp,1,0,"ng-template",6),e(),i(53,"doc-code-sample",3)(54,"h3",4),t(55,"Mask Closable"),e(),i(56,"p"),t(57,"By default, a modal can be closed by clicking on the background. If that isn't the desired behaviour, that is configurable"),e(),i(58,"button",5),S("click",function(){R(o);let s=x();return O(s.isMaskClosableModalVisible=!0)}),t(59,"Show Modal"),e(),u(60,wp,1,0,"ng-template",6),e()()}if(n&2){let o=x();l(3),r("templateCode",o.snippetStandard)("componentCode",o.snippetStandardTs),l(8),r("templateCode",o.snippetBasic)("componentCode",o.snippetBasicTs),l(10),r("templateCode",o.snippetFullScreen)("componentCode",o.snippetFullScreenTs),l(8),r("templateCode",o.snippetSize)("componentCode",o.snippetSizeTs),l(8),r("templateCode",o.snippetScrolling)("componentCode",o.snippetScrollingTs),l(8),r("templateCode",o.snippetClosable)("componentCode",o.snippetClosableTs),l(8),r("templateCode",o.snippetMaskClosable)("componentCode",o.snippetMaskClosableTs)}}function Pp(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-modal"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiHeaderText"),e(),i(20,"td"),t(21,"The modal header"),e(),i(22,"td")(23,"div",8),t(24," string "),e()(),i(25,"td")(26,"div",9),t(27," null "),e()()(),i(28,"tr")(29,"td"),t(30,"suiHeaderIcon"),e(),i(31,"td"),t(32,"The modal header icon type"),e(),i(33,"td")(34,"div",8),t(35," string "),e()(),i(36,"td")(37,"div",9),t(38," null "),e()()(),i(39,"tr")(40,"td"),t(41,"suiSize"),e(),i(42,"td"),t(43," Set the modal's size. Allowed values could be "),i(44,"span",10),t(45,"mini"),e(),t(46," | "),i(47,"span",10),t(48,"tiny"),e(),t(49," | "),i(50,"span",10),t(51,"small"),e(),t(52," | "),i(53,"span",10),t(54,"large"),e(),t(55," | "),i(56,"span",10),t(57,"null"),e()(),i(58,"td")(59,"div",8),t(60," string "),e()(),i(61,"td")(62,"div",9),t(63," null "),e()()(),i(64,"tr")(65,"td"),t(66,"suiScroll"),e(),i(67,"td"),t(68," Determines if the modal is scrollable. Allowed values could be "),i(69,"span",10),t(70,"full"),e(),t(71," | "),i(72,"span",10),t(73,"medium"),e(),t(74," | "),i(75,"span",10),t(76,"none"),e()(),i(77,"td")(78,"div",8),t(79," string "),e()(),i(80,"td")(81,"div",9),t(82," none "),e()()(),i(83,"tr")(84,"td"),t(85,"suiBasic"),e(),i(86,"td"),t(87,"Determines if the modal is rendered as basic"),e(),i(88,"td")(89,"div",8),t(90," boolean "),e()(),i(91,"td")(92,"div",9),t(93," false "),e()()(),i(94,"tr")(95,"td"),t(96,"suiClosable"),e(),i(97,"td"),t(98,"Determines if the close icon is rendered on the modal"),e(),i(99,"td")(100,"div",8),t(101," boolean "),e()(),i(102,"td")(103,"div",9),t(104," true "),e()()(),i(105,"tr")(106,"td"),t(107,"suiCentered"),e(),i(108,"td"),t(109,"Determines if the modal is rendered vertically centered"),e(),i(110,"td")(111,"div",8),t(112," boolean "),e()(),i(113,"td")(114,"div",9),t(115," true "),e()()(),i(116,"tr")(117,"td"),t(118,"suiBlurring"),e(),i(119,"td"),t(120,"Determines if the modal uses a dimmer background"),e(),i(121,"td")(122,"div",8),t(123," boolean "),e()(),i(124,"td")(125,"div",9),t(126," false "),e()()(),i(127,"tr")(128,"td"),t(129,"suiFullScreen"),e(),i(130,"td"),t(131,"Determines if the modal is rendered to fill the screen horizontally"),e(),i(132,"td")(133,"div",8),t(134," boolean "),e()(),i(135,"td")(136,"div",9),t(137," false "),e()()(),i(138,"tr")(139,"td"),t(140,"suiMaskClosable"),e(),i(141,"td"),t(142,"Determines if the modal is dismissable by clicking on the background"),e(),i(143,"td")(144,"div",8),t(145," boolean "),e()(),i(146,"td")(147,"div",9),t(148," true "),e()()(),i(149,"tr")(150,"td"),t(151,"visible"),e(),i(152,"td"),t(153,"Determines if the modal is visible or not"),e(),i(154,"td")(155,"div",8),t(156," boolean "),e()(),i(157,"td")(158,"div",9),t(159," false "),e()()()()(),i(160,"h4",4),t(161,"Events"),e(),i(162,"table",7)(163,"thead")(164,"tr")(165,"th"),t(166,"Property"),e(),i(167,"th"),t(168,"Description"),e(),i(169,"th"),t(170,"Type"),e()()(),i(171,"tbody")(172,"tr")(173,"td"),t(174,"visibleChange"),e(),i(175,"td"),t(176,"Fired when a the modal's visibility changes "),e(),i(177,"td")(178,"div",8),t(179," boolean "),e()()()()(),i(180,"h2",2),t(181,"suiModalContent"),e(),i(182,"h4",4),t(183,"Properties"),e(),i(184,"table",7)(185,"thead")(186,"tr")(187,"th"),t(188,"Property"),e(),i(189,"th"),t(190,"Description"),e(),i(191,"th"),t(192,"Type"),e(),i(193,"th"),t(194,"Default"),e()()(),i(195,"tbody")(196,"tr")(197,"td"),t(198,"suiImage"),e(),i(199,"td"),t(200,"Determines if the content can contain an image "),e(),i(201,"td")(202,"div",8),t(203," boolean "),e()(),i(204,"td")(205,"div",9),t(206," false "),e()()(),i(207,"tr")(208,"td"),t(209,"suiScrollable"),e(),i(210,"td"),t(211,"Determines if the content is scrollable or not "),e(),i(212,"td")(213,"div",8),t(214," boolean "),e()(),i(215,"td")(216,"div",9),t(217," false "),e()()()()(),i(218,"h2",2),t(219,"suiModalActions"),e(),i(220,"h4",4),t(221,"Properties"),e(),i(222,"table",7)(223,"thead")(224,"tr")(225,"th"),t(226,"Property"),e(),i(227,"th"),t(228,"Description"),e(),i(229,"th"),t(230,"Type"),e(),i(231,"th"),t(232,"Default"),e()()(),d(233,"tbody"),i(234,"tfoot",11)(235,"tr")(236,"th",12)(237,"div",13),t(238,"No properties for this directive"),e()()()()(),i(239,"h2",2),t(240,"suiModalDescription"),e(),i(241,"h4",4),t(242,"Properties"),e(),i(243,"table",7)(244,"thead")(245,"tr")(246,"th"),t(247,"Property"),e(),i(248,"th"),t(249,"Description"),e(),i(250,"th"),t(251,"Type"),e(),i(252,"th"),t(253,"Default"),e()()(),d(254,"tbody"),i(255,"tfoot",11)(256,"tr")(257,"th",12)(258,"div",13),t(259,"No properties for this directive"),e()()()()()())}var fs=(()=>{class n{constructor(o){this.snippetStandard=Ya,this.snippetStandardTs=Xa,this.snippetBasic=Ja,this.snippetBasicTs=Ka,this.snippetFullScreen=Qa,this.snippetFullScreenTs=Za,this.snippetSize=$a,this.snippetSizeTs=es,this.snippetScrolling=ts,this.snippetScrollingTs=is,this.snippetClosable=ns,this.snippetClosableTs=os,this.snippetMaskClosable=as,this.snippetMaskClosableTs=ss,this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((a,s)=>s),o.setTitle("Modal | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(P(I))}}static{this.\u0275cmp=p({type:n,selectors:[["doc-modal"]],standalone:!1,decls:3,vars:2,consts:[["header","Modal","subHeader","Modals display content that temporarily blocks interactions with the main view of a site."],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-button","",3,"click"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),u(1,Mp,61,14,"div",1)(2,Pp,260,0,"div",1),e()),a&2&&(l(),r("docPageContent","definition"),l(),r("docPageContent","api"))},dependencies:[B,A,V,k,M,L,v,w,ds,ms,ps,us,cs,gs,hs],encapsulation:2})}}return n})();var Ip=[{path:"accordion",component:Gn},{path:"checkbox",component:bo},{path:"dimmer",component:Hi},{path:"embed",component:xi},{path:"modal",component:fs},{path:"popup",component:ya},{path:"progress",component:ta},{path:"rating",component:Ki},{path:"search",component:Sn},{path:"select",component:qa},{path:"tab",component:kn}],xs=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=U({imports:[lt.forChild(Ip),lt]})}}return n})();var q1=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=G({type:n})}static{this.\u0275inj=U({imports:[q,Jt,xs,Ut,Rt,Kt,ti,ui,ni,zt,Ui,Tn,Zt,ai,Bt,Ot,jt,kt,ls,Lt,si,ii,Nt,Qt,Ro,ri,zn,oi]})}}return n})();export{q1 as ModulesModule};
