import{a as Xe,b as qe,c as Ke,d as mi}from"./chunk-3AIRPPXT.js";import{f as Ai,g as bt,h as Me,i as Vi,j as Ae,k as Bi}from"./chunk-6I65XHEJ.js";import{a as ae,b as Li}from"./chunk-D262BDEX.js";import{a as gi,c as Qe,f as Ze,h as fi,i as bi,j as Ei,k as Ci,n as ft,o as it,p as z,q as N,r as j,s as Pi,t as le,u as Fi,v as mt,w as At,x as pt,y as ki}from"./chunk-WQWEICND.js";import{a as Mt,b as It,c as Pt,d as Ft,e as Ti,f as Mi,h as kt,i as Ii}from"./chunk-CH3GXFVC.js";import{a as _e,c as li}from"./chunk-4ANHG4XE.js";import{a as R,e as yi,f as re,g as Tt,h as Di,j as wi,k as T,l as oe,m as _i}from"./chunk-B72OQVCU.js";import{A as L,B as H,C as W,D as O,E as ee,F as vi,b as Fe,c as ke,f as ri,h as g,i as di,j as Te,k as pi,l as F,n as ui,o as Bt,p as Lt,r as ci,s as be,t as Si,w as A,x as xi}from"./chunk-YB6MVHLL.js";import{b as wt,d as Vt,h as P,i as G,j as E,k as _t,l as hi}from"./chunk-CM7RNYHB.js";import{$a as v,$b as si,Aa as X,Ba as yt,Ca as Jt,Da as x,Ea as c,Fa as Xt,H as Wt,Hb as dt,J,La as qt,Ma as Z,N as me,Na as $,Oa as Ne,Pa as Ue,Q as C,Qa as Ge,R as y,Ra as l,Rb as Je,Sa as i,Sb as oi,Ta as t,Tb as ai,U as Ot,Ua as r,Va as Kt,Vb as Y,Wa as Qt,X as Ce,Y as Rt,Ya as Dt,Za as ne,_b as B,aa as S,ab as Zt,bb as f,ca as zt,cb as ve,da as jt,db as ge,eb as rt,fb as lt,g as I,gb as ye,hb as De,ib as k,ja as Nt,jb as $t,ka as Ut,kb as fe,lb as ei,mb as Ye,na as d,nb as e,ob as gt,pb as we,qb as D,rb as w,sa as Gt,sb as _,ta as V,ub as ti,va as Yt,xb as ii,yb as ni,za as u,zb as Ve}from"./chunk-AUZPSXMG.js";import{a as U,b as ie,e as je}from"./chunk-HHHS5ZAZ.js";var Hi=`<sui-embed
    suiSource="youtube"
    suiId="O6Xo21L0ybE"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var Wi=`<sui-embed
    suiSource="vimeo"
    suiId="125292332"
    suiPlaceHolder="https://semantic-ui.com/images/vimeo-example.jpg"></sui-embed>
`;var Oi=`<sui-embed
    suiIcon="right circle arrow"
    suiSourceUrl="http://www.myfav.es/jack"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var Ri=`<sui-embed
    suiAspectRatio="4:3"
    suiSource="youtube"
    suiId="HTZudKi36bo"
    suiPlaceHolder="https://semantic-ui.com/images/4by3.jpg"></sui-embed>
`;function Wl(n,m){if(n&1&&r(0,"img",2),n&2){let o=f();l("src",o.suiPlaceHolder,Nt)}}function Ol(n,m){if(n&1&&(i(0,"div",3),r(1,"iframe",4),ii(2,"safeUrl"),t()),n&2){let o=f();d(),l("src",ni(2,1,o.videoUrl),Ut)}}var Rl=(()=>{class n{constructor(){this.sanitizer=me(si)}transform(o,...a){return this.sanitizer.bypassSecurityTrustResourceUrl(o)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275pipe=Jt({name:"safeUrl",type:n,pure:!0})}}return n})(),ut=(()=>{class n{constructor(){this.cdr=me(dt),this.suiSource=null,this.suiAspectRatio=null,this.suiIcon="video play",this.suiId=null,this.suiPlaceHolder=null,this.suiSourceUrl=null,this.suiAutoplay=!1,this.isPLaying=!1,this.videoUrl=""}ngAfterViewInit(){this.suiAutoplay&&this.playVideo()}get classes(){return["ui",this.suiAspectRatio,"embed",G.getPropClass(this.isPLaying,"active")].join(" ")}playVideo(){this.suiSourceUrl&&(this.videoUrl=this.suiSourceUrl),this.suiSource==="vimeo"&&(this.videoUrl=`//player.vimeo.com/video/${this.suiId}?api=false&autoplay=true&byline=false&color=%23444444&portrait=false&title=false`),this.suiSource==="youtube"&&(this.videoUrl=`//www.youtube.com/embed/${this.suiId}?autohide=true&autoplay=true&color=%23444444&hq=true&jsapi=false&modestbranding=true`),this.isPLaying=!0,this.cdr.detectChanges()}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-embed"]],inputs:{suiSource:"suiSource",suiAspectRatio:"suiAspectRatio",suiIcon:"suiIcon",suiId:"suiId",suiPlaceHolder:"suiPlaceHolder",suiSourceUrl:"suiSourceUrl",suiAutoplay:"suiAutoplay"},decls:4,vars:4,consts:[[3,"ngClass"],["sui-icon","",3,"click","suiIconType"],[1,"placeholder",3,"src"],[1,"embed"],["scrolling","no","webkitallowfullscreen","","mozallowfullscreen","","allowfullscreen","","width","100%","height","100%","frameborder","0",3,"src"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"i",1),v("click",function(){return s.playVideo()}),t(),Z(2,Wl,1,1,"img",2),Z(3,Ol,3,3,"div",3),t()),a&2&&(l("ngClass",s.classes),d(),l("suiIconType",s.suiIcon),d(),$(s.suiPlaceHolder?2:-1),d(),$(s.isPLaying?3:-1))},dependencies:[Y,Je,g,Rl],encapsulation:2,changeDetection:0})}}return I([P()],n.prototype,"suiAutoplay",void 0),n})(),zi=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({imports:[Y,ut]})}}return n})();var ct=class{constructor(){this.isDefinitionsActive=!0}},ji=(()=>{class n extends ct{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed-youtube-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiSource","youtube","suiId","O6Xo21L0ybE","suiPlaceHolder","https://semantic-ui.com/images/image-16by9.png"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[ut],encapsulation:2})}}return n})(),Ni=(()=>{class n extends ct{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed-vimeo-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiSource","vimeo","suiId","125292332","suiPlaceHolder","https://semantic-ui.com/images/vimeo-example.jpg"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[ut],encapsulation:2})}}return n})(),Ui=(()=>{class n extends ct{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed-custom-content-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiIcon","right circle arrow","suiSourceUrl","http://www.myfav.es/jack","suiPlaceHolder","https://semantic-ui.com/images/image-16by9.png"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[ut],encapsulation:2})}}return n})(),Gi=(()=>{class n extends ct{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed-aspect-ratio-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiAspectRatio","4:3","suiSource","youtube","suiId","HTZudKi36bo","suiPlaceHolder","https://semantic-ui.com/images/4by3.jpg"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[ut],encapsulation:2})}}return n})();function Nl(n,m){n&1&&r(0,"doc-embed-youtube-example")}function Ul(n,m){n&1&&r(0,"doc-embed-vimeo-example")}function Gl(n,m){n&1&&r(0,"doc-embed-custom-content-example")}function Yl(n,m){n&1&&r(0,"doc-embed-aspect-ratio-example")}function Jl(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"States"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"YouTube"),t(),i(6,"p"),e(7,"An embed can be used to display YouTube Content"),t(),c(8,Nl,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Vimeo"),t(),i(12,"p"),e(13,"An embed can be used to display Vimeo content."),t(),c(14,Ul,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Custom Content"),t(),i(18,"p"),e(19,"An embed can display any web content"),t(),c(20,Gl,1,0,"ng-template",5),t(),i(21,"h2",2),e(22,"Variations"),t(),i(23,"doc-code-sample",3)(24,"h3",4),e(25,"Aspect Ratio"),t(),i(26,"p"),e(27,"An embed can specify an alternative aspect ratio"),t(),c(28,Yl,1,0,"ng-template",5),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetYoutube),d(6),l("templateCode",o.snippetVimeo),d(6),l("templateCode",o.snippetCustomContent),d(8),l("templateCode",o.snippetAspectRatio)}}function Xl(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-embed"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiSource"),t(),i(20,"td"),e(21,"Specifies a source to use. Cannot be used together with url. Allowed values could be "),i(22,"span",7),e(23,"'youtube'"),t(),e(24," | "),i(25,"span",7),e(26,"'vimeo'"),t(),e(27," | "),i(28,"span",7),e(29,"null"),t()(),i(30,"td")(31,"div",8),e(32," string"),t()(),i(33,"td")(34,"div",9),e(35," null"),t()()(),i(36,"tr")(37,"td"),e(38,"suiAspectRatio"),t(),i(39,"td"),e(40," An embed can specify an alternative aspect ratio. Allowed values could be "),i(41,"span",7),e(42,"'4:3'"),t(),e(43," | "),i(44,"span",7),e(45,"'16:9'"),t(),e(46," | "),i(47,"span",7),e(48,"'21:9'"),t(),e(49," | "),i(50,"span",7),e(51,"null"),t()(),i(52,"td")(53,"div",8),e(54,"string"),t()(),i(55,"td")(56,"div",9),e(57,"null"),t()()(),i(58,"tr")(59,"td"),e(60,"suiIcon "),t(),i(61,"td"),e(62," Specifies an icon to use with placeholder content. "),t(),i(63,"td")(64,"div",8),e(65,"string"),t()(),i(66,"td")(67,"div",9),e(68,"video play"),t()()(),i(69,"tr")(70,"td"),e(71,"suiId"),t(),i(72,"td"),e(73," Specifies an id for source. "),t(),i(74,"td")(75,"div",8),e(76,"string"),t(),e(77," | "),i(78,"div",8),e(79,"number"),t()(),i(80,"td")(81,"div",9),e(82,"null"),t()()(),i(83,"tr")(84,"td"),e(85,"suiPlaceHolder"),t(),i(86,"td"),e(87," A placeholder image for embed "),t(),i(88,"td")(89,"div",8),e(90,"string"),t()(),i(91,"td")(92,"div",9),e(93,"null"),t()()(),i(94,"tr")(95,"td"),e(96,"suiSourceUrl"),t(),i(97,"td"),e(98," Specifies a url to use for embed. Cannot be used together with source "),t(),i(99,"td")(100,"div",8),e(101,"string"),t()(),i(102,"td")(103,"div",9),e(104,"null"),t()()(),i(105,"tr")(106,"td"),e(107,"suiAutoplay"),t(),i(108,"td"),e(109," Setting to true or false will force autoplay "),t(),i(110,"td")(111,"div",8),e(112," boolean "),t()(),i(113,"td")(114,"div",9),e(115," false "),t()()()()()())}var Yi=(()=>{class n{constructor(o){this.snippetYoutube=Hi,this.snippetVimeo=Wi,this.snippetCustomContent=Oi,this.snippetAspectRatio=Ri,this.isDefinitionsActive=!0,o.setTitle("Embed | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed"]],standalone:!1,decls:3,vars:2,consts:[["header","Embed","subHeader","An embed displays content from other websites like YouTube videos or Google Maps"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,Jl,29,4,"div",1)(2,Xl,116,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,ji,Ni,Ui,Gi],encapsulation:2})}}return n})();var Ji=`<button sui-button
        (click)="simpleDimmerVisible = !simpleDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     [(dimmed)]="simpleDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Xi=`dimmerVisible: boolean = false;
`;var qi=`<button sui-button
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
`;var Ki=`<button sui-button
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
`;var Qi=`<div sui-segment
     sui-dimmer
     dimmed="true">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Zi=`<div sui-segment
     sui-dimmer
     disabled>
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var $i=`<button sui-button
        (click)="blurringDimmerVisible = !blurringDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerBlurring
     [(dimmed)]="blurringDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var en=`<button sui-button
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
`;var tn=`<button sui-button
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
`;var nn=`<button sui-button
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
`;var on=`<button sui-button
        (click)="invertedDimmerVisible = !invertedDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerInverted
     [(dimmed)]="invertedDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;function rd(n,m){n&1&&(i(0,"h2",4),r(1,"i",5),e(2," Dimmed Message! "),t())}function ld(n,m){n&1&&(i(0,"h2",3),r(1,"i",4),e(2," Dimmed Message "),t(),i(3,"div",5),e(4,"Dimmer sub-header"),t())}function dd(n,m){n&1&&(i(0,"h2",4),e(1," Title "),t(),i(2,"div",5),e(3,"Add "),t(),i(4,"div",6),e(5,"View"),t())}function md(n,m){n&1&&(i(0,"h2",4),e(1," Title "),t(),i(2,"div",5),e(3,"Add "),t(),i(4,"div",6),e(5,"View"),t())}var Ee=class{constructor(){this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1}},an=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-simple-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),v("click",function(){return s.simpleDimmerVisible=!s.simpleDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),_("dimmedChange",function(p){return w(s.simpleDimmerVisible,p)||(s.simpleDimmerVisible=p),p}),r(3,"doc-wireframe",2),t()),a&2&&(d(2),D("dimmed",s.simpleDimmerVisible))},dependencies:[ee,T,Me,A],encapsulation:2})}}return n})(),sn=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-content-example"]],standalone:!1,features:[x],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiIcon","","suiInverted",""],["sui-icon","","suiIconType","heart"]],template:function(a,s){a&1&&(i(0,"button",0),v("click",function(){return s.contentDimmerVisible=!s.contentDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),_("dimmedChange",function(p){return w(s.contentDimmerVisible,p)||(s.contentDimmerVisible=p),p}),r(3,"doc-wireframe",2),c(4,rd,3,0,"ng-template",3),t()),a&2&&(d(2),D("dimmed",s.contentDimmerVisible))},dependencies:[ee,E,T,Me,bt,g,A],encapsulation:2})}}return n})(),rn=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-page-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-dimmer","","suiDimmerFullPage","",3,"dimmedChange","dimmed"],["suiDimmerContent",""],["sui-header","","suiIcon","","suiInverted",""],["sui-icon","","suiIconType","mail"],["suiSubHeader",""]],template:function(a,s){a&1&&(i(0,"button",0),v("click",function(){return s.pageDimmerVisible=!s.pageDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),_("dimmedChange",function(p){return w(s.pageDimmerVisible,p)||(s.pageDimmerVisible=p),p}),c(3,ld,5,0,"ng-template",2),t()),a&2&&(d(2),D("dimmed",s.pageDimmerVisible))},dependencies:[E,_t,T,Me,bt,g],encapsulation:2})}}return n})(),ln=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-active-example"]],standalone:!1,features:[x],decls:2,vars:0,consts:[["sui-segment","","sui-dimmer","","dimmed","true"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"doc-wireframe",1),t())},dependencies:[ee,Me,A],encapsulation:2})}}return n})(),dn=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-disabled-example"]],standalone:!1,features:[x],decls:2,vars:0,consts:[["sui-segment","","sui-dimmer","","disabled",""],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"doc-wireframe",1),t())},dependencies:[ee,Me,A],encapsulation:2})}}return n})(),mn=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-blurring-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerBlurring","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),v("click",function(){return s.blurringDimmerVisible=!s.blurringDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),_("dimmedChange",function(p){return w(s.blurringDimmerVisible,p)||(s.blurringDimmerVisible=p),p}),r(3,"doc-wireframe",2),t()),a&2&&(d(2),D("dimmed",s.blurringDimmerVisible))},dependencies:[ee,T,Me,A],encapsulation:2})}}return n})(),pn=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-blurring-inverted-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerBlurring","","suiDimmerInverted","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),v("click",function(){return s.blurringDInvertedDimmerVisible=!s.blurringDInvertedDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),_("dimmedChange",function(p){return w(s.blurringDInvertedDimmerVisible,p)||(s.blurringDInvertedDimmerVisible=p),p}),r(3,"doc-wireframe",2),t()),a&2&&(d(2),D("dimmed",s.blurringDInvertedDimmerVisible))},dependencies:[ee,T,Me,A],encapsulation:2})}}return n})(),un=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-top-alignment-example"]],standalone:!1,features:[x],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerAlignment","top",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiInverted",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,s){a&1&&(i(0,"button",0),v("click",function(){return s.topAlignmentDimmerVisible=!s.topAlignmentDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),_("dimmedChange",function(p){return w(s.topAlignmentDimmerVisible,p)||(s.topAlignmentDimmerVisible=p),p}),r(3,"doc-wireframe",2),c(4,dd,6,0,"ng-template",3),t()),a&2&&(d(2),D("dimmed",s.topAlignmentDimmerVisible))},dependencies:[ee,E,T,Me,bt,A],encapsulation:2})}}return n})(),cn=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-bottom-alignment-example"]],standalone:!1,features:[x],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerAlignment","bottom",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiInverted",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,s){a&1&&(i(0,"button",0),v("click",function(){return s.bottomAlignmentDimmerVisible=!s.bottomAlignmentDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),_("dimmedChange",function(p){return w(s.bottomAlignmentDimmerVisible,p)||(s.bottomAlignmentDimmerVisible=p),p}),r(3,"doc-wireframe",2),c(4,md,6,0,"ng-template",3),t()),a&2&&(d(2),D("dimmed",s.bottomAlignmentDimmerVisible))},dependencies:[ee,E,T,Me,bt,A],encapsulation:2})}}return n})(),hn=(()=>{class n extends Ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-inverted-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerInverted","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),v("click",function(){return s.invertedDimmerVisible=!s.invertedDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),_("dimmedChange",function(p){return w(s.invertedDimmerVisible,p)||(s.invertedDimmerVisible=p),p}),r(3,"doc-wireframe",2),t()),a&2&&(d(2),D("dimmed",s.invertedDimmerVisible))},dependencies:[ee,T,Me,A],encapsulation:2})}}return n})();function ud(n,m){n&1&&r(0,"doc-dimmer-simple-example")}function cd(n,m){n&1&&r(0,"doc-dimmer-content-example")}function hd(n,m){n&1&&r(0,"doc-dimmer-page-example")}function Sd(n,m){n&1&&r(0,"doc-dimmer-active-example")}function xd(n,m){n&1&&r(0,"doc-dimmer-disabled-example")}function vd(n,m){n&1&&r(0,"doc-dimmer-blurring-example")}function gd(n,m){n&1&&r(0,"doc-dimmer-blurring-inverted-example")}function fd(n,m){n&1&&r(0,"doc-dimmer-top-alignment-example")}function bd(n,m){n&1&&r(0,"doc-dimmer-bottom-alignment-example")}function Ed(n,m){n&1&&r(0,"doc-dimmer-inverted-example")}function Cd(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Dimmer"),t(),i(6,"p"),e(7,"A simple dimmer displays no content"),t(),c(8,ud,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Content Dimmer"),t(),i(12,"p"),e(13,"A dimmer can display content"),t(),c(14,cd,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Page Dimmer"),t(),i(18,"p"),e(19,"A dimmer can be formatted to be fixed to the page"),t(),c(20,hd,1,0,"ng-template",5),t(),i(21,"h2",2),e(22,"States"),t(),i(23,"doc-code-sample",6)(24,"h3",4),e(25,"Active"),t(),i(26,"p"),e(27,"An active dimmer will dim its parent container"),t(),c(28,Sd,1,0,"ng-template",5),t(),i(29,"doc-code-sample",6)(30,"h3",4),e(31,"Disabled"),t(),i(32,"p"),e(33,"A disabled dimmer cannot be activated"),t(),c(34,xd,1,0,"ng-template",5),t(),i(35,"h2",2),e(36,"Variations"),t(),i(37,"doc-code-sample",3)(38,"h3",4),e(39,"Blurring"),t(),i(40,"p"),e(41,"A dimmable element can blur its contents"),t(),c(42,vd,1,0,"ng-template",5),t(),i(43,"doc-code-sample",3),c(44,gd,1,0,"ng-template",5),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Vertical Alignment"),t(),i(48,"p"),e(49,"A dimmer can have its content top or bottom aligned."),t(),c(50,fd,1,0,"ng-template",5),t(),i(51,"doc-code-sample",3),c(52,bd,1,0,"ng-template",5),t(),i(53,"doc-code-sample",3)(54,"h3",4),e(55,"Inverted"),t(),i(56,"p"),e(57,"A dimmer can be formatted to have its colours inverted"),t(),c(58,Ed,1,0,"ng-template",5),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetSimple)("componentCode",o.snippetSharedTs),d(6),l("templateCode",o.snippetContent)("componentCode",o.snippetSharedTs),d(6),l("templateCode",o.snippetPage)("componentCode",o.snippetSharedTs),d(8),l("templateCode",o.snippetActive),d(6),l("templateCode",o.snippetDisabled),d(8),l("templateCode",o.snippetBlurring)("componentCode",o.snippetSharedTs),d(6),l("templateCode",o.snippetBlurringInverted)("componentCode",o.snippetSharedTs),d(2),l("templateCode",o.snippetTopAligned)("componentCode",o.snippetSharedTs),d(6),l("templateCode",o.snippetBottomAligned)("componentCode",o.snippetSharedTs),d(2),l("templateCode",o.snippetInverted)("componentCode",o.snippetSharedTs)}}function yd(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-dimmer"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiDimmerAlignment"),t(),i(20,"td"),e(21,"Specifies the dimmer content position. Allowed values could be "),i(22,"span",8),e(23,"'top'"),t(),e(24," | "),i(25,"span",8),e(26,"'bottom'"),t(),e(27," | "),i(28,"span",8),e(29,"null"),t()(),i(30,"td")(31,"div",9),e(32,"string"),t()(),i(33,"td")(34,"div",10),e(35,"top"),t()()(),i(36,"tr")(37,"td"),e(38,"suiDimmerBlurring"),t(),i(39,"td"),e(40,"Determine if the dimmer should blur the background"),t(),i(41,"td")(42,"div",9),e(43,"boolean "),t()(),i(44,"td")(45,"div",10),e(46,"false "),t()()(),i(47,"tr")(48,"td"),e(49,"suiDimmerInverted"),t(),i(50,"td"),e(51,"Determine if the dimmer should invert its colours"),t(),i(52,"td")(53,"div",9),e(54,"boolean "),t()(),i(55,"td")(56,"div",10),e(57,"false "),t()()(),i(58,"tr")(59,"td"),e(60,"suiDimmerSimple"),t(),i(61,"td"),e(62,"Show a simple dimmer"),t(),i(63,"td")(64,"div",9),e(65,"boolean "),t()(),i(66,"td")(67,"div",10),e(68,"false "),t()()(),i(69,"tr")(70,"td"),e(71,"suiDimmerFullPage"),t(),i(72,"td"),e(73,"Determine if the dimmer should cover the entire page"),t(),i(74,"td")(75,"div",9),e(76,"boolean "),t()(),i(77,"td")(78,"div",10),e(79,"false "),t()()(),i(80,"tr")(81,"td"),e(82,"suiCloseOnClick"),t(),i(83,"td"),e(84,"Determine if the dimmer should be closed when the mask or any other location is clicked"),t(),i(85,"td")(86,"div",9),e(87,"boolean "),t()(),i(88,"td")(89,"div",10),e(90,"true "),t()()(),i(91,"tr")(92,"td"),e(93,"disabled"),t(),i(94,"td"),e(95,"Stop the dimmer from responding to actions"),t(),i(96,"td")(97,"div",9),e(98,"boolean "),t()(),i(99,"td")(100,"div",10),e(101,"false "),t()()(),i(102,"tr")(103,"td"),e(104,"dimmed"),t(),i(105,"td"),e(106,"Determines if the dimmer is shown or not. This field supports two way binding following the "),i(107,"code"),e(108,"[(dimmed)]"),t(),e(109," syntax. "),t(),i(110,"td")(111,"div",9),e(112,"boolean "),t()(),i(113,"td")(114,"div",10),e(115,"false "),t()()()()(),i(116,"h2",2),e(117,"suiDimmerContent"),t(),i(118,"h4",4),e(119,"Properties"),t(),i(120,"table",7)(121,"thead")(122,"tr")(123,"th"),e(124,"Property"),t(),i(125,"th"),e(126,"Description"),t(),i(127,"th"),e(128,"Type"),t(),i(129,"th"),e(130,"Default"),t()()(),r(131,"tbody"),i(132,"tfoot",11)(133,"tr")(134,"th",12)(135,"div",13),e(136,"No properties for this directive"),t()()()()()())}var Sn=(()=>{class n{constructor(o){this.snippetSimple=Ji,this.snippetSharedTs=Xi,this.snippetContent=qi,this.snippetPage=Ki,this.snippetActive=Qi,this.snippetDisabled=Zi,this.snippetBlurring=$i,this.snippetBlurringInverted=en,this.snippetTopAligned=tn,this.snippetBottomAligned=nn,this.snippetInverted=on,this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1,o.setTitle("Dimmer | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer"]],standalone:!1,decls:3,vars:2,consts:[["header","Dimmer","subHeader","A dimmer hides distractions to focus attention on particular content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["docDemo",""],[3,"templateCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,Cd,59,18,"div",1)(2,yd,137,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,an,sn,rn,ln,dn,mn,pn,un,cn,hn],styles:["button[_ngcontent-%COMP%]{margin-bottom:1.2rem!important}"]})}}return n})();var xn=`<sui-rating suiMaxValue="1"></sui-rating>
`;var vn=`<sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
`;var gn=`<sui-rating
    suiType="heart"
    suiValue="1"
    suiMaxValue="3"></sui-rating>
`;var fn=`<sui-rating
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
`;function Md(n,m){if(n&1){let o=ne();Kt(0,"i",1),Zt("click",function(){let s=C(o).$implicit,h=f();return y(h.onClick(s))})("mouseover",function(){let s=C(o).$implicit,h=f();return y(h.onHover(s))})("mouseout",function(){C(o);let s=f();return y(s.onUnhover())}),Qt()}if(n&2){let o=m.$implicit,a=f();fe("active",o<=a.suiValue)("selected",o<=a.hoverValue)}}var ot=(()=>{class n{set suiValue(o){this.value!==o&&(this.value=+o)}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.generateRatingsArray()}get suiMaxValue(){return this.maxValue}get classes(){return["ui",this.suiSize,this.suiType,G.getPropClass(this.suiReadOnly,"read-only"),"rating",G.getPropClass(this.hoverValue>0,"selected")].join(" ")}constructor(){this.changeDetectorRef=me(dt),this.valueChanged=new Ce,this.suiSize=null,this.suiType=null,this.suiReadOnly=!1,this.suiClearable=!1,this.ratingsArray=[],this.hoverValue=0,this.value=0,this.maxValue=5,this.controlValueChangeFn=()=>{},this.generateRatingsArray()}onClick(o){this.suiReadOnly||(this.suiClearable&&this.suiValue===o&&(o=0),this.suiValue!==o&&(this.controlValueChangeFn(o),this.valueChanged.emit(o)),this.suiValue=o)}onHover(o){this.suiReadOnly?this.hoverValue=0:this.hoverValue=o}onUnhover(){this.suiReadOnly||(this.hoverValue=0)}writeValue(o){this.suiValue=o,this.changeDetectorRef.markForCheck()}registerOnChange(o){this.controlValueChangeFn=o}registerOnTouched(o){}setDisabledState(o){}generateRatingsArray(){this.ratingsArray=Array(this.maxValue).fill(0).map((o,a)=>a+1)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-rating"]],hostVars:2,hostBindings:function(a,s){a&2&&Ye(s.classes)},inputs:{suiSize:"suiSize",suiType:"suiType",suiReadOnly:"suiReadOnly",suiClearable:"suiClearable",suiValue:"suiValue",suiMaxValue:"suiMaxValue"},outputs:{valueChanged:"valueChanged"},features:[ti([{provide:gi,useExisting:Wt(()=>n),multi:!0}])],decls:2,vars:0,consts:[[1,"icon",3,"active","selected"],[1,"icon",3,"click","mouseover","mouseout"]],template:function(a,s){a&1&&Ue(0,Md,1,4,"i",0,Ne),a&2&&Ge(s.ratingsArray)},styles:[`:host.read-only .icon{cursor:auto}
`],encapsulation:2})}}return I([P()],n.prototype,"suiReadOnly",void 0),I([P()],n.prototype,"suiClearable",void 0),n})(),bn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({})}}return n})();var ht=class{constructor(){this.isDefinitionsActive=!0}},Cn=(()=>{class n extends ht{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating-basic-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiMaxValue","1"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[ot],encapsulation:2})}}return n})(),yn=(()=>{class n extends ht{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating-star-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiType","star","suiValue","3","suiMaxValue","4"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[ot],encapsulation:2})}}return n})(),Dn=(()=>{class n extends ht{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating-heart-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiType","heart","suiValue","1","suiMaxValue","3"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[ot],encapsulation:2})}}return n})(),wn=(()=>{class n extends ht{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating-sizes-example"]],standalone:!1,features:[x],decls:22,vars:0,consts:[["suiSize","mini","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","tiny","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","small","suiType","star","suiValue","3","suiMaxValue","4"],["suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","large","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","huge","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","massive","suiType","star","suiValue","3","suiMaxValue","4"]],template:function(a,s){a&1&&r(0,"sui-rating",0)(1,"br")(2,"br")(3,"sui-rating",1)(4,"br")(5,"br")(6,"sui-rating",2)(7,"br")(8,"br")(9,"sui-rating",3)(10,"br")(11,"br")(12,"sui-rating",4)(13,"br")(14,"br")(15,"sui-rating",5)(16,"br")(17,"br")(18,"sui-rating",5)(19,"br")(20,"br")(21,"sui-rating",6)},dependencies:[ot],encapsulation:2})}}return n})();function Pd(n,m){n&1&&r(0,"doc-rating-basic-example")}function Fd(n,m){n&1&&r(0,"doc-rating-star-example")}function kd(n,m){n&1&&r(0,"doc-rating-heart-example")}function Ad(n,m){n&1&&r(0,"doc-rating-sizes-example")}function Vd(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"States"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Rating "),i(6,"span",5),e(7,"Flexbox"),t()(),i(8,"p"),e(9,"A basic rating"),t(),c(10,Pd,1,0,"ng-template",6),t(),i(11,"doc-code-sample",3)(12,"h3",4),e(13,"Star"),t(),i(14,"p"),e(15,"A rating can use a set of star icons"),t(),c(16,Fd,1,0,"ng-template",6),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Heart"),t(),i(20,"p"),e(21,"A rating can use a set of heart icons"),t(),c(22,kd,1,0,"ng-template",6),t(),i(23,"h2",2),e(24,"Variations"),t(),i(25,"doc-code-sample",3)(26,"h3",4),e(27,"Size"),t(),i(28,"p"),e(29,"A rating can vary in size"),t(),c(30,Ad,1,0,"ng-template",6),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetBasic),d(8),l("templateCode",o.snippetStar),d(6),l("templateCode",o.snippetHeart),d(8),l("templateCode",o.snippetSizes)}}function Bd(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-rating"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiSize"),t(),i(20,"td"),e(21,"Set the rating size. Allowed values could be "),i(22,"span",8),e(23,"mini"),t(),e(24," | "),i(25,"span",8),e(26,"tiny"),t(),e(27," | "),i(28,"span",8),e(29,"small"),t(),e(30," | "),i(31,"span",8),e(32,"medium"),t(),e(33," | "),i(34,"span",8),e(35,"big"),t(),e(36," | "),i(37,"span",8),e(38,"huge"),t(),e(39," | "),i(40,"span",8),e(41,"massive"),t(),e(42," | "),i(43,"span",8),e(44,"null"),t()(),i(45,"td")(46,"div",5),e(47," string "),t()(),i(48,"td")(49,"div",9),e(50," null "),t()()(),i(51,"tr")(52,"td"),e(53,"suiType"),t(),i(54,"td"),e(55,"Specifies a icon to use. Cannot be used together with url. Allowed values could be "),i(56,"span",8),e(57,"star"),t(),e(58," | "),i(59,"span",8),e(60,"heart"),t(),e(61," | "),i(62,"span",8),e(63,"null"),t()(),i(64,"td")(65,"div",5),e(66," string"),t()(),i(67,"td")(68,"div",9),e(69," null"),t()()(),i(70,"tr")(71,"td"),e(72,"suiReadOnly "),t(),i(73,"td"),e(74," Setting to true or false will determine if users can change the rating value "),t(),i(75,"td")(76,"div",5),e(77," boolean "),t()(),i(78,"td")(79,"div",9),e(80," false "),t()()(),i(81,"tr")(82,"td"),e(83,"suiClearable"),t(),i(84,"td"),e(85," Setting to true or false will determine if clicking on the value would reset it "),t(),i(86,"td")(87,"div",5),e(88," boolean "),t()(),i(89,"td")(90,"div",9),e(91," false "),t()()()()(),i(92,"h4",4),e(93,"Events"),t(),i(94,"table",7)(95,"thead")(96,"tr")(97,"th"),e(98,"Event"),t(),i(99,"th"),e(100,"Description"),t(),i(101,"th"),e(102,"Type"),t()()(),i(103,"tbody")(104,"tr")(105,"td"),e(106,"valueChanged "),t(),i(107,"td"),e(108,"Fired when the rating value is changed. Also supports "),i(109,"code"),e(110,"[(ngModel)]"),t(),e(111," syntax"),t(),i(112,"td")(113,"div",5),e(114," number "),t()()()()()())}var _n=(()=>{class n{constructor(o){this.snippetBasic=xn,this.snippetStar=vn,this.snippetHeart=gn,this.snippetSizes=fn,this.isDefinitionsActive=!0,o.setTitle("Rating | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating"]],standalone:!1,decls:3,vars:2,consts:[["header","Rating","subHeader","A rating indicates user interest in content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-label","","suiColour","teal"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,Vd,31,4,"div",1)(2,Bd,115,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,Cn,yn,Dn,wn],encapsulation:2})}}return n})();var Tn=`<sui-search
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var Mn=`<sui-search
    suiShowIcon
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var In=`<sui-search
    suiShowIcon
    suiPlaceholder="Common animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Pn=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="countries">
</sui-search>
`;var Fn=`countries = [
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
`;var kn=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="categoryContent">
</sui-search>
`;var An=`categoryContent = [
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
`;var Vn=`<sui-search
    suiLoading
    suiPlaceholder="Search..."
    [suiOptions]="blankOptions">
</sui-search>
`;var Bn=`<sui-search
    disabled
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptions]="blankOptions">
</sui-search>
`;var Ln=`<sui-search
    suiFluid
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Hn=`<sui-search
    suiShowIcon
    suiAlignment="right"
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Ie=class n{constructor(){this.blankOptions=[],this.countries=[{title:"Andorra"},{title:"United Arab Emirates"},{title:"Afghanistan"},{title:"Antigua"},{title:"Anguilla"},{title:"Albania"},{title:"Armenia"},{title:"Netherlands Antilles"},{title:"Angola"},{title:"Argentina"},{title:"American Samoa"},{title:"Austria"},{title:"Australia"},{title:"Aruba"},{title:"Aland Islands"},{title:"Azerbaijan"},{title:"Bosnia"},{title:"Barbados"},{title:"Bangladesh"},{title:"Belgium"},{title:"Burkina Faso"},{title:"Bulgaria"},{title:"Bahrain"},{title:"Burundi"}],this.categoryContent=[{category:"South America",title:"Brazil"},{category:"South America",title:"Peru"},{category:"North America",title:"Canada"},{category:"Asia",title:"South Korea"},{category:"Asia",title:"Japan"},{category:"Asia",title:"China"},{category:"Europe",title:"Denmark"},{category:"Europe",title:"England"},{category:"Europe",title:"France"},{category:"Europe",title:"Germany"},{category:"Africa",title:"Ethiopia"},{category:"Africa",title:"Nigeria"},{category:"Africa",title:"Zimbabwe"}]}searchText(m){return je(this,null,function*(){let o=`https://api.semantic-ui.com/search/${m}`;return n.callUrl(o)})}searchCategories(m){return je(this,null,function*(){let o=`https://api.semantic-ui.com/search/category/${m}`;return n.callUrl(o)})}static callUrl(m){return je(this,null,function*(){try{return(yield(yield fetch(m)).json()).results}catch(o){return[]}})}},Wn=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-basic-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiPlaceholder","Common passwords...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchText)},dependencies:[Ae],encapsulation:2})}}return n})(),On=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-basic-alt-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Common passwords...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchText)},dependencies:[Ae],encapsulation:2})}}return n})(),Rn=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-category-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Common animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchCategories)},dependencies:[Ae],encapsulation:2})}}return n})(),zn=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-local-search-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Search countries...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptions",s.countries)},dependencies:[Ae],encapsulation:2})}}return n})(),jn=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-local-category-search-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Search countries...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptions",s.categoryContent)},dependencies:[Ae],encapsulation:2})}}return n})(),Nn=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-loading-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiLoading","","suiPlaceholder","Search...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptions",s.blankOptions)},dependencies:[Ae],encapsulation:2})}}return n})(),Un=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-disabled-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["disabled","","suiShowIcon","","suiPlaceholder","Search animals...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptions",s.blankOptions)},dependencies:[Ae],encapsulation:2})}}return n})(),Gn=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-fluid-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiFluid","","suiShowIcon","","suiPlaceholder","Search animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchCategories)},dependencies:[Ae],encapsulation:2})}}return n})(),Yn=(()=>{class n extends Ie{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-aligned-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiAlignment","right","suiPlaceholder","Search animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchCategories)},dependencies:[Ae],encapsulation:2})}}return n})();function Xd(n,m){n&1&&r(0,"doc-search-basic-example")}function qd(n,m){n&1&&r(0,"doc-search-basic-alt-example")}function Kd(n,m){n&1&&r(0,"doc-search-category-example")}function Qd(n,m){n&1&&r(0,"doc-search-local-search-example")}function Zd(n,m){n&1&&r(0,"doc-search-local-category-search-example")}function $d(n,m){n&1&&r(0,"doc-search-loading-example")}function em(n,m){n&1&&r(0,"doc-search-disabled-example")}function tm(n,m){n&1&&r(0,"doc-search-fluid-example")}function im(n,m){n&1&&r(0,"doc-search-aligned-example")}function nm(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Type"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Search"),t(),i(6,"p"),e(7,"A basic search element"),t(),c(8,Xd,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3),c(10,qd,1,0,"ng-template",5),t(),i(11,"doc-code-sample",3)(12,"h3",4),e(13,"Category"),t(),i(14,"p"),e(15,"A search can display results from remote content ordered by categories"),t(),c(16,Kd,1,0,"ng-template",5),t(),i(17,"doc-code-sample",6)(18,"h3",4),e(19,"Local Search"),t(),i(20,"p"),e(21,"A search can look for results inside a static local source."),t(),c(22,Qd,1,0,"ng-template",5),t(),i(23,"doc-code-sample",6)(24,"h3",4),e(25,"Local Category Search"),t(),i(26,"p"),e(27,"A search can look for category results inside a static local source."),t(),c(28,Zd,1,0,"ng-template",5),t(),r(29,"br"),i(30,"h2",2),e(31,"States"),t(),i(32,"doc-code-sample",3)(33,"h3",4),e(34,"Loading"),t(),i(35,"p"),e(36,"A search can show a loading indicator."),t(),c(37,$d,1,0,"ng-template",5),t(),r(38,"br"),i(39,"h2",2),e(40,"Variations"),t(),i(41,"doc-code-sample",3)(42,"h3",4),e(43,"Disabled"),t(),i(44,"p"),e(45,"A search can show it is currently unable to be interacted with."),t(),c(46,em,1,0,"ng-template",5),t(),i(47,"doc-code-sample",3)(48,"h3",4),e(49,"Fluid"),t(),i(50,"p"),e(51,"A search can have its results take up the width of its container."),t(),c(52,tm,1,0,"ng-template",5),t(),i(53,"doc-code-sample",3)(54,"h3",4),e(55,"Aligned"),t(),i(56,"p"),e(57,"A search can have its results aligned to its left or right container edge."),t(),c(58,im,1,0,"ng-template",5),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetBasic),d(6),l("templateCode",o.snippetBasicAlt),d(2),l("templateCode",o.snippetCategory),d(6),l("templateCode",o.snippetLocalSearch)("componentCode",o.snippetLocalSearchTs),d(6),l("templateCode",o.snippetLocalCategorySearch)("componentCode",o.snippetLocalCategorySearchTs),d(9),l("templateCode",o.snippetLoading),d(9),l("templateCode",o.snippetDisabled),d(6),l("templateCode",o.snippetFluid),d(6),l("templateCode",o.snippetAligned)}}function om(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-search"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiAlignment"),t(),i(20,"td"),e(21,"Set the search result alignment. Allowed values could be "),i(22,"span",8),e(23,"right"),t(),e(24," | "),i(25,"span",8),e(26,"null"),t()(),i(27,"td")(28,"div",9),e(29," string "),t()(),i(30,"td")(31,"div",10),e(32," null "),t()()(),i(33,"tr")(34,"td"),e(35,"suiPlaceholder"),t(),i(36,"td"),e(37,"Set the search input placeholder text. "),t(),i(38,"td")(39,"div",9),e(40," string "),t()(),i(41,"td")(42,"div",10),e(43," null "),t()()(),i(44,"tr")(45,"td"),e(46,"suiSearchDelay"),t(),i(47,"td"),e(48,"Set the delay (in milliseconds) before a search is started. "),t(),i(49,"td")(50,"div",9),e(51," number "),t()(),i(52,"td")(53,"div",10),e(54," 200 "),t()()(),i(55,"tr")(56,"td"),e(57,"suiShowIcon"),t(),i(58,"td"),e(59,"Determine whether or not to show the search icon "),t(),i(60,"td")(61,"div",9),e(62," boolean "),t()(),i(63,"td")(64,"div",10),e(65," false "),t()()(),i(66,"tr")(67,"td"),e(68,"disabled"),t(),i(69,"td"),e(70,"Determine whether or not to disable the search functionality "),t(),i(71,"td")(72,"div",9),e(73," boolean "),t()(),i(74,"td")(75,"div",10),e(76," false "),t()()(),i(77,"tr")(78,"td"),e(79,"suiFluid"),t(),i(80,"td"),e(81,"Determine whether or not the search results fill the width of their container "),t(),i(82,"td")(83,"div",9),e(84," boolean "),t()(),i(85,"td")(86,"div",10),e(87," false "),t()()(),i(88,"tr")(89,"td"),e(90,"suiLoading"),t(),i(91,"td"),e(92,"Determine whether or not to manually override the loading icon display "),t(),i(93,"td")(94,"div",9),e(95," boolean "),t()(),i(96,"td")(97,"div",10),e(98," false "),t()()(),i(99,"tr")(100,"td"),e(101,"suiOptions"),t(),i(102,"td"),e(103,"The options available to search. Cannot be used in conjunction with "),i(104,"code"),e(105,"suiOptionsLookup"),t()(),i(106,"td")(107,"div",9),e(108," Array<{title: string, category: string (optional), description: string (optional)}> "),t()(),i(109,"td")(110,"div",10),e(111," null "),t()()(),i(112,"tr")(113,"td"),e(114,"suiOptionsLookup"),t(),i(115,"td"),e(116,"A function to asynchronously search a remote resource with the provided query. Cannot be used in conjunction with "),i(117,"code"),e(118,"suiOptions"),t()(),i(119,"td")(120,"div",9),e(121," (query: string) => Promise<Array<{title: string, category: string (optional), description: string (optional)}>> "),t()(),i(122,"td")(123,"div",10),e(124," null "),t()()()()(),i(125,"h4",4),e(126,"Events"),t(),i(127,"table",7)(128,"thead")(129,"tr")(130,"th"),e(131,"Property"),t(),i(132,"th"),e(133,"Description"),t(),i(134,"th"),e(135,"Type"),t()()(),i(136,"tbody")(137,"tr")(138,"td"),e(139,"suiResultSelected"),t(),i(140,"td"),e(141,"Fired when a result is selected. "),t(),i(142,"td")(143,"div",9),e(144," {title: string, category: string, description: string} "),t()()()()()())}var Jn=(()=>{class n{constructor(o){this.snippetBasic=Tn,this.snippetBasicAlt=Mn,this.snippetCategory=In,this.snippetLocalSearch=Pn,this.snippetLocalSearchTs=Fn,this.snippetLocalCategorySearch=kn,this.snippetLocalCategorySearchTs=An,this.snippetLoading=Vn,this.snippetDisabled=Bn,this.snippetFluid=Ln,this.snippetAligned=Hn,this.blankOptions=[],this.countries=[{title:"Andorra"},{title:"United Arab Emirates"},{title:"Afghanistan"},{title:"Antigua"},{title:"Anguilla"},{title:"Albania"},{title:"Armenia"},{title:"Netherlands Antilles"},{title:"Angola"},{title:"Argentina"},{title:"American Samoa"},{title:"Austria"},{title:"Australia"},{title:"Aruba"},{title:"Aland Islands"},{title:"Azerbaijan"},{title:"Bosnia"},{title:"Barbados"},{title:"Bangladesh"},{title:"Belgium"},{title:"Burkina Faso"},{title:"Bulgaria"},{title:"Bahrain"},{title:"Burundi"}],this.categoryContent=[{category:"South America",title:"Brazil"},{category:"South America",title:"Peru"},{category:"North America",title:"Canada"},{category:"Asia",title:"South Korea"},{category:"Asia",title:"Japan"},{category:"Asia",title:"China"},{category:"Europe",title:"Denmark"},{category:"Europe",title:"England"},{category:"Europe",title:"France"},{category:"Europe",title:"Germany"},{category:"Africa",title:"Ethiopia"},{category:"Africa",title:"Nigeria"},{category:"Africa",title:"Zimbabwe"}],o.setTitle("Search | Ngx Semantic")}searchText(o){return je(this,null,function*(){let a=`https://api.semantic-ui.com/search/${o}`;return n.callUrl(a)})}searchCategories(o){return je(this,null,function*(){let a=`https://api.semantic-ui.com/search/category/${o}`;return n.callUrl(a)})}static callUrl(o){return je(this,null,function*(){try{return(yield(yield fetch(o)).json()).results}catch(a){return[]}})}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-search"]],standalone:!1,decls:3,vars:2,consts:[["header","Search","subHeader","A search module allows a user to query for results from a selection of data"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,nm,59,11,"div",1)(2,om,145,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,Wn,On,Rn,zn,jn,Nn,Un,Gn,Yn],encapsulation:2})}}return n})();var Xn=`<sui-tabs>
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
`;var qn=`<sui-tabs
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
`;var Kn=`<sui-tabs
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
`;var Qn=`<sui-tabs>
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
`;var Zn=`<sui-tabs>
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
`;var $n=`<sui-tabs
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
`;var eo=`<select name="tab-colour"
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
`;var um=["contentTemplate"],cm=["*"];function hm(n,m){n&1&&ge(0)}function Sm(n,m){n&1&&Dt(0)}function xm(n,m){if(n&1&&c(0,Sm,1,0,"ng-container",2),n&2){f(2);let o=k(2);l("ngTemplateOutlet",o)}}function vm(n,m){n&1&&Dt(0)}function gm(n,m){if(n&1&&c(0,vm,1,0,"ng-container",2),n&2){let o=f(2);l("ngTemplateOutlet",o.currentTab.contentTemplate)}}function fm(n,m){n&1&&Dt(0)}function bm(n,m){if(n&1&&c(0,fm,1,0,"ng-container",2),n&2){f(2);let o=k(2);l("ngTemplateOutlet",o)}}function Em(n,m){if(n&1&&(Z(0,xm,1,1,"ng-container"),i(1,"div",1),Z(2,gm,1,1,"ng-container"),t(),Z(3,bm,1,1,"ng-container")),n&2){let o=f();$(o.isTop?0:-1),d(),fe("loading",o.currentTab==null?null:o.currentTab.suiLoading),l("suiAttached",o.segmentAttachment),d(),$(o.currentTab?2:-1),d(),$(o.isTop?-1:3)}}function Cm(n,m){if(n&1&&r(0,"i",6),n&2){let o=f().$implicit;l("suiIconType",o.suiIcon)}}function ym(n,m){if(n&1&&(i(0,"div",7),e(1),t()),n&2){let o=f().$implicit;l("suiColour",o.suiLabelColour)("suiCircular",o.suiLabelCircular),d(),we(" ",o.suiLabel," ")}}function Dm(n,m){if(n&1){let o=ne();i(0,"div",5),v("click",function(){let s=C(o),h=s.$implicit,p=s.$index,b=f(2);return y(b.changeTab(h,p))}),Z(1,Cm,1,1,"i",6),e(2),Z(3,ym,2,3,"div",7),t()}if(n&2){let o=m.$implicit,a=m.$index,s=f(2);l("disabled",o.disabled)("suiActive",s.isTabSelected(a)),d(),$(o.suiIcon?1:-1),d(),we(" ",o.suiTitle," "),d(),$(o.suiLabel?3:-1)}}function wm(n,m){if(n&1&&(i(0,"div",3),Ue(1,Dm,4,5,"div",4,Ne),t()),n&2){let o=f();l("suiInverted",o.suiInverted)("suiColour",o.suiColour)("suiAttached",o.menuAttachment)("suiTabular",o.isBasic)("suiSecondary",o.isSecondary)("suiPointing",o.isPointing)("suiText",o.isText)("suiBorderless",o.isBorderless),d(),Ge(o.tabs)}}var Le=(()=>{class n{constructor(){this.suiTitle=null,this.suiIcon=null,this.suiLabel=null,this.suiLoading=!1,this.disabled=!1,this.suiLabelColour=null,this.suiLabelCircular=!1}get classes(){return[G.getPropClass(this.suiLoading,"loading"),G.getPropClass(this.disabled,"disabled")].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-tab"]],viewQuery:function(a,s){if(a&1&&lt(um,7),a&2){let h;ye(h=De())&&(s.contentTemplate=h.first)}},hostVars:2,hostBindings:function(a,s){a&2&&Ye(s.classes)},inputs:{suiContent:"suiContent",suiTitle:"suiTitle",suiIcon:"suiIcon",suiLabel:"suiLabel",suiLoading:"suiLoading",disabled:"disabled",suiLabelColour:"suiLabelColour",suiLabelCircular:"suiLabelCircular"},exportAs:["suiTab"],ngContentSelectors:cm,decls:2,vars:0,consts:[["contentTemplate",""]],template:function(a,s){a&1&&(ve(),Xt(0,hm,1,0,"ng-template",null,0,Ve))},encapsulation:2})}}return I([P()],n.prototype,"suiLoading",void 0),I([P()],n.prototype,"disabled",void 0),I([P()],n.prototype,"suiLabelCircular",void 0),n})(),He=(()=>{class n{constructor(){this.tabs=new jt,this.suiTabMenuPosition="top",this.suiTabType="basic",this.suiColour=null,this.suiInverted=!1,this.suiSelectedIndexChanged=new Ce,this.selectedTabIndex=0,this.hasTabs=!1,this.currentTab=null}get isSecondary(){return this.suiTabType==="secondary"}get isBasic(){return this.suiTabType==="basic"}get isPointing(){return this.suiTabType==="pointing"}get isText(){return this.suiTabType==="text"}get isBorderless(){return this.suiTabType==="borderless"}get isTop(){return this.suiTabMenuPosition==="top"}get menuAttachment(){return this.suiTabType==="basic"?this.isTop?"top":"bottom":null}get segmentAttachment(){return this.suiTabType==="basic"?this.isTop?"bottom attached":"top attached":null}changeTab(o,a){if(o.disabled)return;let s=this.selectedTabIndex!==a;this.selectedTabIndex=a,this.setCurrentTab(),s&&this.suiSelectedIndexChanged.emit(this.selectedTabIndex)}isTabSelected(o){return this.selectedTabIndex===o}ngAfterContentChecked(){this.setCurrentTab()}setCurrentTab(){let o=this.tabs.toArray();this.hasTabs=o.length>0,this.currentTab=o[this.selectedTabIndex]}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-tabs"]],contentQueries:function(a,s,h){if(a&1&&rt(h,Le,4),a&2){let p;ye(p=De())&&(s.tabs=p)}},inputs:{suiTabMenuPosition:"suiTabMenuPosition",suiTabType:"suiTabType",suiColour:"suiColour",suiInverted:"suiInverted"},outputs:{suiSelectedIndexChanged:"suiSelectedIndexChanged"},decls:3,vars:1,consts:[["tabMenu",""],["sui-segment","",1,"active","tab",3,"suiAttached"],[4,"ngTemplateOutlet"],["sui-menu","",3,"suiInverted","suiColour","suiAttached","suiTabular","suiSecondary","suiPointing","suiText","suiBorderless"],["suiMenuItem","",3,"disabled","suiActive"],["suiMenuItem","",3,"click","disabled","suiActive"],["sui-icon","",3,"suiIconType"],["sui-label","",3,"suiColour","suiCircular"]],template:function(a,s){a&1&&(Z(0,Em,4,6),c(1,wm,3,8,"ng-template",null,0,Ve)),a&2&&$(s.hasTabs?0:-1)},dependencies:[Y,ai,A,Fe,ke,g,F],encapsulation:2,changeDetection:0})}}return I([P()],n.prototype,"suiInverted",void 0),n})(),to=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({imports:[Y,He]})}}return n})();function Tm(n,m){if(n&1&&(i(0,"option",1),e(1),t()),n&2){let o=m.$implicit;l("value",o),d(),gt(o)}}var We=class{constructor(){this.isDefinitionsActive=!0,this.colours=["red","orange","green","blue","violet"],this.tabColour="blue",this.isTabDisabled=!1}},no=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-basic-example"]],standalone:!1,features:[x],decls:22,vars:0,consts:[["suiTitle","HTML"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML"],["suiTitle","CSS"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS"],["suiTitle","JavaScript"],["href","https://developer.mozilla.org/en-US/docs/Web/javascript"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0)(2,"h3"),e(3,"HTML"),t(),i(4,"p"),e(5," HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript). "),t(),i(6,"a",1),e(7,"developer.mozilla.org"),t()(),i(8,"sui-tab",2)(9,"h3"),e(10,"CSS"),t(),i(11,"p"),e(12," Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. "),t(),i(13,"a",3),e(14,"developer.mozilla.org"),t()(),i(15,"sui-tab",4)(16,"h3"),e(17,"JavaScript"),t(),i(18,"p"),e(19," JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. "),t(),i(20,"a",5),e(21,"developer.mozilla.org"),t()()())},dependencies:[Le,He],encapsulation:2})}}return n})(),oo=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-pointing-menu-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiTabType","pointing"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),e(2," Circle "),t(),i(3,"sui-tab",2),e(4," Box "),t(),i(5,"sui-tab",3),e(6," Triangle "),t()())},dependencies:[Le,He],encapsulation:2})}}return n})(),ao=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-text-menu-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiTabType","text"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),e(2," Circle "),t(),i(3,"sui-tab",2),e(4," Box "),t(),i(5,"sui-tab",3),e(6," Triangle "),t()())},dependencies:[Le,He],encapsulation:2})}}return n})(),so=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-loading-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiLoading","","suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0),e(2," Circle "),t(),i(3,"sui-tab",1),e(4," Box "),t(),i(5,"sui-tab",2),e(6," Triangle "),t()())},dependencies:[Le,He],encapsulation:2})}}return n})(),ro=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-disabled-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiTitle","Circle"],["suiTitle","Box"],["disabled","","suiTitle","Secret Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0),e(2," Circle "),t(),i(3,"sui-tab",1),e(4," Box "),t(),i(5,"sui-tab",2),e(6," Triangle "),t()())},dependencies:[Le,He],encapsulation:2})}}return n})(),lo=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-positioned-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiTabType","secondary","suiTabMenuPosition","bottom"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),e(2," Circle "),t(),i(3,"sui-tab",2),e(4," Box "),t(),i(5,"sui-tab",3),e(6," Triangle "),t()())},dependencies:[Le,He],encapsulation:2})}}return n})(),mo=(()=>{class n extends We{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-coloured-example"]],standalone:!1,features:[x],decls:10,vars:2,consts:[["name","tab-colour",3,"ngModelChange","ngModel"],[3,"value"],["suiTabType","pointing",3,"suiColour"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"select",0),_("ngModelChange",function(p){return w(s.tabColour,p)||(s.tabColour=p),p}),Ue(1,Tm,2,2,"option",1,Ne),t(),i(3,"sui-tabs",2)(4,"sui-tab",3),e(5," Circle "),t(),i(6,"sui-tab",4),e(7," Box "),t(),i(8,"sui-tab",5),e(9," Triangle "),t()()),a&2&&(D("ngModel",s.tabColour),d(),Ge(s.colours),d(2),l("suiColour",s.tabColour))},dependencies:[bi,Ei,fi,Qe,Ze,Le,He],encapsulation:2})}}return n})();function Im(n,m){n&1&&r(0,"doc-tab-basic-example")}function Pm(n,m){n&1&&r(0,"doc-tab-pointing-menu-example")}function Fm(n,m){n&1&&r(0,"doc-tab-text-menu-example")}function km(n,m){n&1&&r(0,"doc-tab-loading-example")}function Am(n,m){n&1&&r(0,"doc-tab-disabled-example")}function Vm(n,m){n&1&&r(0,"doc-tab-positioned-example")}function Bm(n,m){n&1&&r(0,"doc-tab-coloured-example")}function Lm(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Type"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Tab"),t(),i(6,"p"),e(7,"A basic tab"),t(),c(8,Im,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Pointing Menu"),t(),i(12,"p"),e(13,"A tab menu can point to its tab panes"),t(),c(14,Pm,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Text Menu"),t(),i(18,"p"),e(19,"A tab menu can be formatted for text content"),t(),c(20,Fm,1,0,"ng-template",5),t(),r(21,"br"),i(22,"h2",2),e(23,"States"),t(),i(24,"doc-code-sample",3)(25,"h3",4),e(26,"Loading"),t(),i(27,"p"),e(28,"A tab can display a loading indicator."),t(),c(29,km,1,0,"ng-template",5),t(),i(30,"doc-code-sample",3)(31,"h3",4),e(32,"Disabled"),t(),i(33,"p"),e(34,"A tab can be disabled"),t(),c(35,Am,1,0,"ng-template",5),t(),r(36,"br"),i(37,"h2",2),e(38,"Menu Variations"),t(),i(39,"doc-code-sample",3)(40,"h3",4),e(41,"Position"),t(),i(42,"p"),e(43,"A tab can be positioned."),t(),c(44,Vm,1,0,"ng-template",5),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Coloured"),t(),i(48,"p"),e(49,"A tab can be coloured."),t(),c(50,Bm,1,0,"ng-template",5),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetBasic),d(6),l("templateCode",o.snippetPointing),d(6),l("templateCode",o.snippetText),d(9),l("templateCode",o.snippetLoading),d(6),l("templateCode",o.snippetDisabled),d(9),l("templateCode",o.snippetPositioned),d(6),l("templateCode",o.snippetColoured)}}function Hm(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-tabs"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiTabMenuPosition"),t(),i(20,"td"),e(21,"Specifies the menu position. Allowed values could be "),i(22,"span",7),e(23,"'top'"),t(),e(24," | "),i(25,"span",7),e(26,"'bottom'"),t()(),i(27,"td")(28,"div",8),e(29,"string"),t()(),i(30,"td")(31,"div",9),e(32,"top"),t()()(),i(33,"tr")(34,"td"),e(35,"suiTabType"),t(),i(36,"td"),e(37," Determine the styling for the tab menu. Allowed values could be "),i(38,"span",7),e(39,"'basic'"),t(),e(40," | "),i(41,"span",7),e(42,"'pointing'"),t(),e(43," | "),i(44,"span",7),e(45,"'secondary'"),t(),e(46," | "),i(47,"span",7),e(48,"'text'"),t(),e(49," | "),i(50,"span",7),e(51,"null"),t()(),i(52,"td")(53,"div",8),e(54,"string"),t()(),i(55,"td")(56,"div",9),e(57,"basic"),t()()(),i(58,"tr")(59,"td"),e(60,"suiColour"),t(),i(61,"td"),e(62,"Set the menu colour. Allowed values could be "),i(63,"span",7),e(64,"'red'"),t(),e(65," | "),i(66,"span",7),e(67,"'orange'"),t(),e(68," | "),i(69,"span",7),e(70,"'yellow'"),t(),e(71," | "),i(72,"span",7),e(73,"'olive'"),t(),e(74," | "),i(75,"span",7),e(76,"'green'"),t(),e(77," | "),i(78,"span",7),e(79,"'teal'"),t(),e(80," | "),i(81,"span",7),e(82,"'blue'"),t(),e(83," | "),i(84,"span",7),e(85,"'violet'"),t(),e(86," | "),i(87,"span",7),e(88,"'purple'"),t(),e(89," | "),i(90,"span",7),e(91,"'pink'"),t(),e(92," | "),i(93,"span",7),e(94,"'brown'"),t(),e(95," | "),i(96,"span",7),e(97,"'grey'"),t(),e(98," | "),i(99,"span",7),e(100,"'black'"),t(),e(101," | "),i(102,"span",7),e(103,"null"),t()(),i(104,"td")(105,"div",8),e(106," string "),t()(),i(107,"td")(108,"div",9),e(109," null "),t()()()()(),i(110,"h4",4),e(111,"Events"),t(),i(112,"table",6)(113,"thead")(114,"tr")(115,"th"),e(116,"Event"),t(),i(117,"th"),e(118,"Description"),t(),i(119,"th"),e(120,"Type"),t()()(),i(121,"tbody")(122,"tr")(123,"td"),e(124,"suiSelectedIndexChanged"),t(),i(125,"td"),e(126,"Fires when the selected tab is changed. Index starts from 0."),t(),i(127,"td")(128,"div",8),e(129,"number"),t()()()()(),i(130,"h2",2),e(131,"sui-tab"),t(),i(132,"h4",4),e(133,"Properties"),t(),i(134,"table",6)(135,"thead")(136,"tr")(137,"th"),e(138,"Property"),t(),i(139,"th"),e(140,"Description"),t(),i(141,"th"),e(142,"Type"),t(),i(143,"th"),e(144,"Default"),t()()(),i(145,"tbody")(146,"tr")(147,"td"),e(148,"suiTitle"),t(),i(149,"td"),e(150,"Set the tab title"),t(),i(151,"td")(152,"div",8),e(153,"string"),t()(),i(154,"td")(155,"div",9),e(156,"null"),t()()(),i(157,"tr")(158,"td"),e(159,"suiIcon"),t(),i(160,"td"),e(161,"Set the tab icon"),t(),i(162,"td")(163,"div",8),e(164,"string"),t()(),i(165,"td")(166,"div",9),e(167,"null"),t()()(),i(168,"tr")(169,"td"),e(170,"suiLoading"),t(),i(171,"td"),e(172,"Show the loading icon"),t(),i(173,"td")(174,"div",8),e(175," boolean "),t()(),i(176,"td")(177,"div",9),e(178," false "),t()()(),i(179,"tr")(180,"td"),e(181,"disabled"),t(),i(182,"td"),e(183,"Prevent the tab from being activated"),t(),i(184,"td")(185,"div",8),e(186," boolean "),t()(),i(187,"td")(188,"div",9),e(189," false "),t()()()()()())}var po=(()=>{class n{constructor(o){this.snippetBasic=Xn,this.snippetPointing=qn,this.snippetText=Kn,this.snippetLoading=Qn,this.snippetDisabled=Zn,this.snippetPositioned=$n,this.snippetColoured=eo,this.isDefinitionsActive=!0,this.colours=["red","orange","green","blue","violet"],this.tabColour="blue",this.isTabDisabled=!1,o.setTitle("Tab | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab"]],standalone:!1,decls:3,vars:2,consts:[["header","Tab","subHeader","A tab is a hidden section of content activated by a menu"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,Lm,51,7,"div",1)(2,Hm,190,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,no,oo,ao,so,ro,lo,mo],styles:["select[_ngcontent-%COMP%]{margin-bottom:1rem}"]})}}return n})();var uo=`<sui-accordion>
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
`;var co=`<sui-accordion suiStyled>
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
`;var ho=`<sui-accordion suiStyled suiFluid>
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
`;var So=`<div sui-segment suiInverted>
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
`;var xo=["*"],St=(()=>{class n{constructor(){this.suiTitle="",this.disabled=!1,this.isOpenChange=new Ce,this._isOpen=!1}get isOpen(){return this._isOpen}set isOpen(o){this.disabled||(this._isOpen=o,this.isOpenChange.emit(o))}toggle(){this.isOpen=!this.isOpen}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-accordion-panel"]],inputs:{suiTitle:"suiTitle",disabled:"disabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:xo,decls:5,vars:5,consts:[[1,"title",3,"click"],["sui-icon","","suiIconType","dropdown"],[1,"content"]],template:function(a,s){a&1&&(ve(),i(0,"div",0),v("click",function(){return s.toggle()}),r(1,"i",1),e(2),t(),i(3,"div",2),ge(4),t()),a&2&&(fe("active",s.isOpen),d(2),we(" ",s.suiTitle," "),d(),fe("active",s.isOpen))},dependencies:[g],encapsulation:2})}}return I([P()],n.prototype,"disabled",void 0),I([P()],n.prototype,"isOpen",null),n})(),xt=(()=>{class n{constructor(){this.suiStyled=!1,this.suiFluid=!1,this.suiInverted=!1,this.suiCloseOthers=!0}get classes(){return["ui",G.getPropClass(this.suiFluid,"fluid"),G.getPropClass(this.suiStyled,"styled"),G.getPropClass(this.suiInverted,"inverted"),"accordion"].join(" ")}ngAfterContentInit(){this.suiCloseOthers&&this.panels.forEach((o,a)=>o.isOpenChange.subscribe(s=>{s&&this.panels.forEach((h,p)=>{a!==p&&(h.isOpen=!1)})}))}ngOnDestroy(){this.panels.forEach(o=>o.isOpenChange.unsubscribe())}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-accordion"]],contentQueries:function(a,s,h){if(a&1&&rt(h,St,4),a&2){let p;ye(p=De())&&(s.panels=p)}},inputs:{suiStyled:"suiStyled",suiFluid:"suiFluid",suiInverted:"suiInverted",suiCloseOthers:"suiCloseOthers"},ngContentSelectors:xo,decls:2,vars:1,consts:[[3,"ngClass"]],template:function(a,s){a&1&&(ve(),i(0,"div",0),ge(1),t()),a&2&&l("ngClass",s.classes)},dependencies:[Y,Je],encapsulation:2})}}return I([P()],n.prototype,"suiStyled",void 0),I([P()],n.prototype,"suiFluid",void 0),I([P()],n.prototype,"suiInverted",void 0),I([P()],n.prototype,"suiCloseOthers",void 0),n})(),vo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({imports:[Y,xt]})}}return n})();var go=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion-standard-example"]],standalone:!1,decls:12,vars:0,consts:[["isOpen","","suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion")(1,"sui-accordion-panel",0)(2,"p"),e(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),t()(),i(4,"sui-accordion-panel",1)(5,"p"),e(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),t()(),i(7,"sui-accordion-panel",2)(8,"p"),e(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),t(),i(10,"p"),e(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),t()()())},dependencies:[xt,St],encapsulation:2})}}return n})(),fo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion-styled-example"]],standalone:!1,decls:12,vars:0,consts:[["suiStyled",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion",0)(1,"sui-accordion-panel",1)(2,"p"),e(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),t()(),i(4,"sui-accordion-panel",2)(5,"p"),e(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),t()(),i(7,"sui-accordion-panel",3)(8,"p"),e(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),t(),i(10,"p"),e(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),t()()())},dependencies:[xt,St],encapsulation:2})}}return n})(),bo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion-styled-fluid-example"]],standalone:!1,decls:12,vars:0,consts:[["suiStyled","","suiFluid",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion",0)(1,"sui-accordion-panel",1)(2,"p"),e(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),t()(),i(4,"sui-accordion-panel",2)(5,"p"),e(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),t()(),i(7,"sui-accordion-panel",3)(8,"p"),e(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),t(),i(10,"p"),e(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),t()()())},dependencies:[xt,St],encapsulation:2})}}return n})(),Eo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion-inverted-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-segment","","suiInverted",""],["suiInverted",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"sui-accordion",1)(2,"sui-accordion-panel",2)(3,"p"),e(4,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),t()(),i(5,"sui-accordion-panel",3)(6,"p"),e(7,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),t()(),i(8,"sui-accordion-panel",4)(9,"p"),e(10,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),t(),i(11,"p"),e(12,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),t()()()())},dependencies:[A,xt,St],encapsulation:2})}}return n})();function Um(n,m){n&1&&r(0,"doc-accordion-standard-example")}function Gm(n,m){n&1&&r(0,"doc-accordion-styled-example")}function Ym(n,m){n&1&&r(0,"doc-accordion-styled-fluid-example")}function Jm(n,m){n&1&&r(0,"doc-accordion-inverted-example")}function Xm(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Accordion"),t(),i(6,"p"),e(7,"A standard accordion"),t(),c(8,Um,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Styled"),t(),i(12,"p"),e(13,"A styled accordion adds basic formatting"),t(),c(14,Gm,1,0,"ng-template",5),t(),i(15,"h2",2),e(16,"Variations"),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Fluid"),t(),i(20,"p"),e(21,"An accordion can take up the width of its container"),t(),c(22,Ym,1,0,"ng-template",5),t(),i(23,"doc-code-sample",3)(24,"h3",4),e(25,"Inverted"),t(),i(26,"p"),e(27,"An accordion can be formatted to appear on dark backgrounds"),t(),c(28,Jm,1,0,"ng-template",5),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetStandard),d(6),l("templateCode",o.snippetStyled),d(8),l("templateCode",o.snippetStyledFluid),d(6),l("templateCode",o.snippetInverted)}}function qm(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-accordion"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiStyled"),t(),i(20,"td"),e(21," Determines if the styled variation of the accordion is rendered "),t(),i(22,"td")(23,"div",7),e(24,"boolean"),t()(),i(25,"td")(26,"div",8),e(27,"false"),t()()(),i(28,"tr")(29,"td"),e(30,"suiFluid"),t(),i(31,"td"),e(32," Determines if the styled variation of the accordion is rendered "),t(),i(33,"td")(34,"div",7),e(35,"boolean"),t()(),i(36,"td")(37,"div",8),e(38,"false"),t()()(),i(39,"tr")(40,"td"),e(41,"suiFluid"),t(),i(42,"td"),e(43," Determines if the styled variation of the accordion is rendered "),t(),i(44,"td")(45,"div",7),e(46,"boolean"),t()(),i(47,"td")(48,"div",8),e(49,"false"),t()()(),i(50,"tr")(51,"td"),e(52,"suiInverted"),t(),i(53,"td"),e(54,"Determine if the accordion should invert it's colours"),t(),i(55,"td")(56,"div",7),e(57,"boolean "),t()(),i(58,"td")(59,"div",8),e(60,"false "),t()()(),i(61,"tr")(62,"td"),e(63,"suiCloseOthers"),t(),i(64,"td"),e(65,"Determines if the accordion should close other open panels when a panel is open"),t(),i(66,"td")(67,"div",7),e(68,"boolean "),t()(),i(69,"td")(70,"div",8),e(71,"true "),t()()()()(),i(72,"h2",2),e(73,"sui-accordion-panel"),t(),i(74,"h4",4),e(75,"Properties"),t(),i(76,"table",6)(77,"thead")(78,"tr")(79,"th"),e(80,"Property"),t(),i(81,"th"),e(82,"Description"),t(),i(83,"th"),e(84,"Type"),t(),i(85,"th"),e(86,"Default"),t()()(),i(87,"tbody")(88,"tr")(89,"td"),e(90,"suiTitle"),t(),i(91,"td"),e(92," What title the accordion panel should gave "),t(),i(93,"td")(94,"div",7),e(95,"string"),t()(),r(96,"td"),t(),i(97,"tr")(98,"td"),e(99,"disabled"),t(),i(100,"td"),e(101," Determines if a panel should be disabled meaning it cannot be interacted with "),t(),i(102,"td")(103,"div",7),e(104,"boolean"),t()(),i(105,"td")(106,"div",8),e(107,"false"),t()()(),i(108,"tr")(109,"td"),e(110,"isOpen"),t(),i(111,"td"),e(112,"A bindable field to determine and notify whether a panel is open or not"),t(),i(113,"td")(114,"div",7),e(115,"boolean"),t()(),r(116,"td"),t()()()())}var Co=(()=>{class n{constructor(o){this.snippetStandard=uo,this.snippetStyled=co,this.snippetStyledFluid=ho,this.snippetInverted=So,o.setTitle("Accordion | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion"]],standalone:!1,decls:3,vars:2,consts:[["header","Accordion","subHeader","An accordion allows users to toggle the display of sections of content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,Xm,29,4,"div",1)(2,qm,117,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,go,fo,bo,Eo],encapsulation:2})}}return n})();var yo=`<sui-checkbox>
  Make my profile visible
</sui-checkbox>
`;var Do=`<sui-checkbox
    suiType="radio">
  Radio choice
</sui-checkbox>
`;var wo=`<div sui-form>
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
`;var _o=`inlineRadioValue: string = null;
`;var To=`<div sui-form>
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
`;var Mo=`groupedRadioValue: string = null;
`;var Io=`<sui-checkbox
    suiType="slider">
  Accept terms and conditions
</sui-checkbox>
`;var Po=`<div sui-form>
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
`;var Fo=`groupedSliderValue: string = null;
`;var ko=`<sui-checkbox
    suiType="toggle">
  Subscribe to weekly newsletter
</sui-checkbox>
`;var Ao=`<sui-checkbox
    suiReadOnly>
  Read Only
</sui-checkbox>
`;var Vo=`<sui-checkbox
    [checked]="true">
  Active
</sui-checkbox>
`;var Bo=`<sui-checkbox>
  Indeterminate
</sui-checkbox>
`;var Lo=`<div>
  <sui-checkbox disabled>
    Disabled
  </sui-checkbox>
</div>
<div>
  <sui-checkbox disabled suiType="toggle">
    Disabled
  </sui-checkbox>
</div>
`;var Ho=`<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="slider"></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="toggle"></sui-checkbox>
</div>
`;var Wo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-standard-example"]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(i(0,"sui-checkbox"),e(1,` Make my profile visible
`),t())},dependencies:[ae],encapsulation:2})}}return n})(),Oo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-basic-radio-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","radio"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Radio choice
`),t())},dependencies:[ae],encapsulation:2})}}return n})(),Ro=(()=>{class n{constructor(){this.inlineRadioValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-inline-radio-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["suiType","radio","suiValue","once-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","2-3-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","once-a-day",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","twice-a-day",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"How often do you use checkboxes?"),t(),i(4,"div",2)(5,"sui-checkbox",3),_("ngModelChange",function(p){return w(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),e(6," Once a week "),t()(),i(7,"div",2)(8,"sui-checkbox",4),_("ngModelChange",function(p){return w(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),e(9," 2-3 times a week "),t()(),i(10,"div",2)(11,"sui-checkbox",5),_("ngModelChange",function(p){return w(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),e(12," Once a day "),t()(),i(13,"div",2)(14,"sui-checkbox",6),_("ngModelChange",function(p){return w(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),e(15," Twice a day "),t()()()()),a&2&&(d(5),D("ngModel",s.inlineRadioValue),d(3),D("ngModel",s.inlineRadioValue),d(3),D("ngModel",s.inlineRadioValue),d(3),D("ngModel",s.inlineRadioValue))},dependencies:[Qe,Ze,mt,pt,At,ae],encapsulation:2})}}return n})(),zo=(()=>{class n{constructor(){this.groupedRadioValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-grouped-radio-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","radio","suiValue","once-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","2-3-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","once-a-day",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","twice-a-day",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"How often do you use checkboxes?"),t(),i(4,"div",2)(5,"sui-checkbox",3),_("ngModelChange",function(p){return w(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),e(6," Once a week "),t()(),i(7,"div",2)(8,"sui-checkbox",4),_("ngModelChange",function(p){return w(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),e(9," 2-3 times a week "),t()(),i(10,"div",2)(11,"sui-checkbox",5),_("ngModelChange",function(p){return w(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),e(12," Once a day "),t()(),i(13,"div",2)(14,"sui-checkbox",6),_("ngModelChange",function(p){return w(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),e(15," Twice a day "),t()()()()),a&2&&(d(5),D("ngModel",s.groupedRadioValue),d(3),D("ngModel",s.groupedRadioValue),d(3),D("ngModel",s.groupedRadioValue),d(3),D("ngModel",s.groupedRadioValue))},dependencies:[Qe,Ze,mt,pt,At,ae],encapsulation:2})}}return n})(),jo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-basic-slider-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","slider"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Accept terms and conditions
`),t())},dependencies:[ae],encapsulation:2})}}return n})(),No=(()=>{class n{constructor(){this.groupedSliderValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-grouped-slider-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","slider","suiValue","20mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","10mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","5mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","~mb",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Outbound Throughput"),t(),i(4,"div",2)(5,"sui-checkbox",3),_("ngModelChange",function(p){return w(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),e(6," 20 mbps max "),t()(),i(7,"div",2)(8,"sui-checkbox",4),_("ngModelChange",function(p){return w(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),e(9," 10 mbps max "),t()(),i(10,"div",2)(11,"sui-checkbox",5),_("ngModelChange",function(p){return w(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),e(12," 5 mbps max "),t()(),i(13,"div",2)(14,"sui-checkbox",6),_("ngModelChange",function(p){return w(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),e(15," Unmetered "),t()()()()),a&2&&(d(5),D("ngModel",s.groupedSliderValue),d(3),D("ngModel",s.groupedSliderValue),d(3),D("ngModel",s.groupedSliderValue),d(3),D("ngModel",s.groupedSliderValue))},dependencies:[Qe,Ze,mt,pt,At,ae],encapsulation:2})}}return n})(),Uo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-toggle-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","toggle"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Subscribe to weekly newsletter
`),t())},dependencies:[ae],encapsulation:2})}}return n})(),Go=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-read-only-example"]],standalone:!1,decls:2,vars:0,consts:[["suiReadOnly",""]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Read Only
`),t())},dependencies:[ae],encapsulation:2})}}return n})(),Yo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-checked-example"]],standalone:!1,decls:2,vars:1,consts:[[3,"checked"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Active
`),t()),a&2&&l("checked",!0)},dependencies:[ae],encapsulation:2})}}return n})(),Jo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-indeterminate-example"]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(i(0,"sui-checkbox"),e(1,` Indeterminate
`),t())},dependencies:[ae],encapsulation:2})}}return n})(),Xo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-disabled-example"]],standalone:!1,decls:6,vars:0,consts:[["disabled",""],["disabled","","suiType","toggle"]],template:function(a,s){a&1&&(i(0,"div")(1,"sui-checkbox",0),e(2," Disabled "),t()(),i(3,"div")(4,"sui-checkbox",1),e(5," Disabled "),t()())},dependencies:[ae],encapsulation:2})}}return n})(),qo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-fitted-example"]],standalone:!1,decls:6,vars:0,consts:[["sui-segment","","suiCompact","","suiFloated","left floated"],["suiFitted",""],["suiFitted","","suiType","slider"],["suiFitted","","suiType","toggle"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-checkbox",1),t(),i(2,"div",0),r(3,"sui-checkbox",2),t(),i(4,"div",0),r(5,"sui-checkbox",3),t())},dependencies:[A,ae],encapsulation:2})}}return n})();function hp(n,m){n&1&&r(0,"doc-checkbox-standard-example")}function Sp(n,m){n&1&&r(0,"doc-checkbox-basic-radio-example")}function xp(n,m){n&1&&r(0,"doc-checkbox-inline-radio-example")}function vp(n,m){n&1&&r(0,"doc-checkbox-grouped-radio-example")}function gp(n,m){n&1&&r(0,"doc-checkbox-basic-slider-example")}function fp(n,m){n&1&&r(0,"doc-checkbox-grouped-slider-example")}function bp(n,m){n&1&&r(0,"doc-checkbox-toggle-example")}function Ep(n,m){n&1&&r(0,"doc-checkbox-read-only-example")}function Cp(n,m){n&1&&r(0,"doc-checkbox-checked-example")}function yp(n,m){n&1&&r(0,"doc-checkbox-indeterminate-example")}function Dp(n,m){n&1&&r(0,"doc-checkbox-disabled-example")}function wp(n,m){n&1&&r(0,"doc-checkbox-fitted-example")}function _p(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Checkbox"),t(),i(6,"p"),e(7,"A standard checkbox"),t(),c(8,hp,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Radio"),t(),i(12,"p"),e(13,"A checkbox can be formatted as a radio element. This means it is an exclusive option"),t(),c(14,Sp,1,0,"ng-template",5),t(),i(15,"doc-code-sample",6),c(16,xp,1,0,"ng-template",5),t(),i(17,"doc-code-sample",6),c(18,vp,1,0,"ng-template",5),t(),i(19,"doc-code-sample",3)(20,"h3",4),e(21,"Slider"),t(),i(22,"p"),e(23,"A checkbox can be formatted to emphasize the current selection state"),t(),c(24,gp,1,0,"ng-template",5),t(),i(25,"doc-code-sample",6),c(26,fp,1,0,"ng-template",5),t(),i(27,"doc-code-sample",3)(28,"h3",4),e(29,"Toggle"),t(),i(30,"p"),e(31,"A checkbox can be formatted to show an on or off choice"),t(),c(32,bp,1,0,"ng-template",5),t(),i(33,"h2",2),e(34,"States"),t(),i(35,"doc-code-sample",3)(36,"h3",4),e(37,"Read-only"),t(),i(38,"p"),e(39,"A checkbox can be read-only and unable to change states"),t(),c(40,Ep,1,0,"ng-template",5),t(),i(41,"doc-code-sample",3)(42,"h3",4),e(43,"Checked"),t(),i(44,"p"),e(45,"A checkbox can be checked"),t(),c(46,Cp,1,0,"ng-template",5),t(),i(47,"doc-code-sample",3)(48,"h3",4),e(49,"Indeterminate"),t(),i(50,"p"),e(51,"A checkbox can be indeterminate"),t(),c(52,yp,1,0,"ng-template",5),t(),i(53,"doc-code-sample",3)(54,"h3",4),e(55,"Disabled"),t(),i(56,"p"),e(57,"A checkbox can be read-only and unable to change states"),t(),c(58,Dp,1,0,"ng-template",5),t(),i(59,"h2",2),e(60,"Variations"),t(),i(61,"doc-code-sample",3)(62,"h3",4),e(63,"Fitted"),t(),i(64,"p"),e(65,"A fitted checkbox does not leave padding for a label"),t(),c(66,wp,1,0,"ng-template",5),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetStandard),d(6),l("templateCode",o.snippetBasicRadio),d(6),l("templateCode",o.snippetInlineRadio)("componentCode",o.snippetInlineRadioTs),d(2),l("templateCode",o.snippetGroupedRadio)("componentCode",o.snippetGroupedRadioTs),d(2),l("templateCode",o.snippetBasicSlider),d(6),l("templateCode",o.snippetGroupedSlider)("componentCode",o.snippetGroupedSliderTs),d(2),l("templateCode",o.snippetToggle),d(8),l("templateCode",o.snippetReadOnly),d(6),l("templateCode",o.snippetChecked),d(6),l("templateCode",o.snippetIndeterminate),d(6),l("templateCode",o.snippetDisabled),d(8),l("templateCode",o.snippetFitted)}}function Tp(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-checkbox"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiReadOnly"),t(),i(20,"td"),e(21," Determines if the checkbox's state can be modified "),t(),i(22,"td")(23,"div",8),e(24,"boolean"),t()(),i(25,"td")(26,"div",9),e(27,"false"),t()()(),i(28,"tr")(29,"td"),e(30,"suiFitted"),t(),i(31,"td"),e(32," Determines if the fitted variation of the checkbox is rendered "),t(),i(33,"td")(34,"div",8),e(35,"boolean"),t()(),i(36,"td")(37,"div",9),e(38,"false"),t()()(),i(39,"tr")(40,"td"),e(41,"disabled"),t(),i(42,"td"),e(43," Determines if the checkbox is disabled "),t(),i(44,"td")(45,"div",8),e(46,"boolean"),t()(),i(47,"td")(48,"div",9),e(49,"false"),t()()(),i(50,"tr")(51,"td"),e(52,"name"),t(),i(53,"td"),e(54,"Sets the name attribute of the checkbox. Required for form usage"),t(),i(55,"td")(56,"div",8),e(57,"string"),t()(),i(58,"td")(59,"div",9),e(60,"null"),t()()(),i(61,"tr")(62,"td"),e(63,"suiValue"),t(),i(64,"td"),e(65,"Sets the value of the checkbox"),t(),i(66,"td")(67,"div",8),e(68,"any"),t()(),i(69,"td")(70,"div",9),e(71,"null"),t()()(),i(72,"tr")(73,"td"),e(74,"[(value)]"),t(),i(75,"td"),e(76,"Sets and notifies you of changes to the checkbox's value"),t(),i(77,"td")(78,"div",8),e(79,"any"),t()(),i(80,"td")(81,"div",9),e(82,"null"),t()()(),i(83,"tr")(84,"td"),e(85,"[(checked)]"),t(),i(86,"td"),e(87,"Sets and notifies you of changes to the checkbox's check state"),t(),i(88,"td")(89,"div",8),e(90,"boolean"),t()(),i(91,"td")(92,"div",9),e(93,"null"),t()()()()()())}var Ko=(()=>{class n{constructor(o){this.snippetStandard=yo,this.snippetBasicRadio=Do,this.snippetInlineRadio=wo,this.snippetInlineRadioTs=_o,this.snippetGroupedRadio=To,this.snippetGroupedRadioTs=Mo,this.snippetBasicSlider=Io,this.snippetGroupedSlider=Po,this.snippetGroupedSliderTs=Fo,this.snippetToggle=ko,this.snippetReadOnly=Ao,this.snippetChecked=Vo,this.snippetIndeterminate=Bo,this.snippetDisabled=Lo,this.snippetFitted=Ho,o.setTitle("Checkbox | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox"]],standalone:!1,decls:3,vars:2,consts:[["header","Checkbox","subHeader","A checkbox allows a user to select a value from a small set of options, often binary"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,_p,67,15,"div",1)(2,Tp,94,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,Wo,Oo,Ro,zo,jo,No,Uo,Go,Yo,Jo,Xo,qo],encapsulation:2})}}return n})();var Qo=`<sui-progress
    suiShowProgress
    [suiValue]="standardValue">
  Uploading Files
</sui-progress>
`;var Zo=`<sui-progress
    suiIndicating
    suiState="active"
    [suiValue]="indicatingValue">
  {{ indicatingValue }}% Funded
</sui-progress>
`;var $o=`indicatingValue = 40;
`;var ea=`<sui-progress
    [suiValue]="28">
</sui-progress>
`;var ta=`<sui-progress
    suiShowProgress
    [suiValue]="35">
</sui-progress>
`;var ia=`<sui-progress
    suiState="active"
    [suiValue]="51">
  Uploading Files
</sui-progress>
`;var na=`<sui-progress
    suiState="success"
    [suiValue]="100">
  Everything worked, your file is all ready.
</sui-progress>
`;var oa=`<sui-progress
    suiState="warning"
    [suiValue]="100">
  Your file didn't meet the minimum resolution requirements.
</sui-progress>
`;var aa=`<sui-progress
    suiState="error"
    [suiValue]="100">
  There was an error.
</sui-progress>
`;var sa=`<sui-progress
    disabled
    [suiValue]="38">
</sui-progress>
`;var ra=`<div sui-segment suiInverted>
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
`;var la=`<div sui-segment>
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
`;var da=`<div sui-card>
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
`;var ma=`<sui-progress
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
`;var pa=`<sui-progress
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
`;var ua=`<div sui-segment suiInverted>
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
`;var Up=["*"];function Gp(n,m){if(n&1&&(i(0,"div",2),e(1),t()),n&2){let o=f();d(),we("",o.progressPercentage,"%")}}var K=(()=>{class n{constructor(){this.suiAttached=null,this.suiSize=null,this.suiColour=null,this.suiState=null,this.suiIndicating=!1,this.disabled=!1,this.suiInverted=!1,this.suiShowProgress=!1,this.value=0,this.maxValue=100,this.progressPercentage=0}set suiValue(o){this.value=+o,this.calculatePercentage()}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.calculatePercentage()}get suiMaxValue(){return this.maxValue}get classes(){return G.combineToClass(["ui",this.suiSize??"",this.suiColour??"",this.suiAttached?`${this.suiAttached} attached`:"",G.getPropClass(this.suiIndicating,"indicating"),G.getPropClass(this.disabled,"disabled"),G.getPropClass(this.suiInverted,"inverted"),"progress",this.suiState??""])}calculatePercentage(){this.value>this.maxValue||(this.progressPercentage=Math.ceil(this.value*100/this.maxValue))}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-progress"]],inputs:{suiAttached:"suiAttached",suiSize:"suiSize",suiColour:"suiColour",suiState:"suiState",suiIndicating:"suiIndicating",disabled:"disabled",suiInverted:"suiInverted",suiShowProgress:"suiShowProgress",suiValue:"suiValue",suiMaxValue:"suiMaxValue"},ngContentSelectors:Up,decls:5,vars:5,consts:[[3,"ngClass"],[1,"bar"],[1,"progress"],[1,"label"]],template:function(a,s){a&1&&(ve(),i(0,"div",0)(1,"div",1),Z(2,Gp,2,1,"div",2),t(),i(3,"div",3),ge(4),t()()),a&2&&(l("ngClass",s.classes),qt("data-percent",s.progressPercentage),d(),$t("width",s.progressPercentage,"%"),d(),$(s.suiShowProgress?2:-1))},dependencies:[Y,Je],styles:["[_nghost-%COMP%]{width:100%}"]})}}return I([P()],n.prototype,"suiIndicating",void 0),I([P()],n.prototype,"disabled",void 0),I([P()],n.prototype,"suiInverted",void 0),I([P()],n.prototype,"suiShowProgress",void 0),n})(),ca=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({imports:[K]})}}return n})();var Q=class{constructor(){this.standardValue=31,this.indicatingValue=40}addToStandard(m){let o=this.standardValue+m;o>100?o=100:o<0&&(o=0),this.standardValue=o}addToIndicating(m){let o=this.indicatingValue+m;o>100?o=100:o<0&&(o=0),this.indicatingValue=o}},Sa=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-standard-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Uploading Files
`),t()),a&2&&l("suiValue",s.standardValue)},dependencies:[K],encapsulation:2})}}return n})(),xa=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-indicating-example"]],standalone:!1,features:[x],decls:2,vars:2,consts:[["suiIndicating","","suiState","active",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1),t()),a&2&&(l("suiValue",s.indicatingValue),d(),we(" ",s.indicatingValue,`% Funded
`))},dependencies:[K],encapsulation:2})}}return n})(),va=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-bar-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[[3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&l("suiValue",28)},dependencies:[K],encapsulation:2})}}return n})(),ga=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-progress-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&l("suiValue",35)},dependencies:[K],encapsulation:2})}}return n})(),fa=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-label-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Uploading Files
`),t()),a&2&&l("suiValue",45)},dependencies:[K],encapsulation:2})}}return n})(),ba=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-active-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiState","active",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Uploading Files
`),t()),a&2&&l("suiValue",51)},dependencies:[K],encapsulation:2})}}return n})(),Ea=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-success-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiState","success",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Everything worked, your file is all ready.
`),t()),a&2&&l("suiValue",100)},dependencies:[K],encapsulation:2})}}return n})(),Ca=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-warning-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiState","warning",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Your file didn't meet the minimum resolution requirements.
`),t()),a&2&&l("suiValue",100)},dependencies:[K],encapsulation:2})}}return n})(),ya=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-error-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiState","error",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` There was an error.
`),t()),a&2&&l("suiValue",100)},dependencies:[K],encapsulation:2})}}return n})(),Da=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-disabled-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["disabled","",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&l("suiValue",38)},dependencies:[K],encapsulation:2})}}return n})(),wa=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-inverted-example"]],standalone:!1,features:[x],decls:9,vars:4,consts:[["sui-segment","","suiInverted",""],["suiInverted","","suiShowProgress","",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","success",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","warning",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","error",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"sui-progress",1),e(2," Uploading Files "),t(),i(3,"sui-progress",2),e(4," Success "),t(),i(5,"sui-progress",3),e(6," Warning "),t(),i(7,"sui-progress",4),e(8," Error "),t()()),a&2&&(d(),l("suiValue",15),d(2),l("suiValue",100),d(2),l("suiValue",100),d(2),l("suiValue",100))},dependencies:[A,K],encapsulation:2})}}return n})(),_a=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-attached-example"]],standalone:!1,features:[x],decls:5,vars:2,consts:[["sui-segment",""],["suiAttached","top",3,"suiValue"],[2,"margin","20px"],["suiAttached","bottom",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-progress",1),i(2,"p",2),e(3,"La la la la"),t(),r(4,"sui-progress",3),t()),a&2&&(d(),l("suiValue",21),d(3),l("suiValue",31))},dependencies:[A,K],encapsulation:2})}}return n})(),Ta=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-card-attached-example"]],standalone:!1,features:[x],decls:14,vars:1,consts:[["sui-card",""],["suiCardImage",""],["src","/assets/images/wireframes/image.png"],["suiCardContent",""],["suiCardHeader",""],["suiCardMeta",""],[1,"date"],["suiCardExtra",""],["sui-icon","","suiIconType","user"],["suiAttached","bottom",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1),r(2,"img",2),t(),i(3,"div",3)(4,"a",4),e(5,"Project"),t(),i(6,"div",5)(7,"span",6),e(8,"Started in 2014"),t()()(),i(9,"div",7)(10,"a"),r(11,"i",8),e(12," 22 Friends "),t()(),r(13,"sui-progress",9),t()),a&2&&(d(13),l("suiValue",31))},dependencies:[kt,Mi,Pt,It,Ti,Ft,g,K],encapsulation:2})}}return n})(),Ma=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-size-example"]],standalone:!1,features:[x],decls:10,vars:5,consts:[["suiSize","tiny",3,"suiValue"],["suiSize","small",3,"suiValue"],[3,"suiValue"],["suiSize","large",3,"suiValue"],["suiSize","big",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Tiny
`),t(),i(2,"sui-progress",1),e(3,` Small
`),t(),i(4,"sui-progress",2),e(5,` Standard
`),t(),i(6,"sui-progress",3),e(7,` Large
`),t(),i(8,"sui-progress",4),e(9,` Big
`),t()),a&2&&(l("suiValue",61),d(2),l("suiValue",21),d(2),l("suiValue",41),d(2),l("suiValue",5),d(2),l("suiValue",14))},dependencies:[K],encapsulation:2})}}return n})(),Ia=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-colour-example"]],standalone:!1,features:[x],decls:13,vars:13,consts:[["suiColour","red",3,"suiValue"],["suiColour","orange",3,"suiValue"],["suiColour","yellow",3,"suiValue"],["suiColour","olive",3,"suiValue"],["suiColour","green",3,"suiValue"],["suiColour","teal",3,"suiValue"],["suiColour","blue",3,"suiValue"],["suiColour","violet",3,"suiValue"],["suiColour","purple",3,"suiValue"],["suiColour","pink",3,"suiValue"],["suiColour","brown",3,"suiValue"],["suiColour","grey",3,"suiValue"],["suiColour","black",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0)(1,"sui-progress",1)(2,"sui-progress",2)(3,"sui-progress",3)(4,"sui-progress",4)(5,"sui-progress",5)(6,"sui-progress",6)(7,"sui-progress",7)(8,"sui-progress",8)(9,"sui-progress",9)(10,"sui-progress",10)(11,"sui-progress",11)(12,"sui-progress",12),a&2&&(l("suiValue",59),d(),l("suiValue",31),d(),l("suiValue",48),d(),l("suiValue",35),d(),l("suiValue",35),d(),l("suiValue",31),d(),l("suiValue",35),d(),l("suiValue",18),d(),l("suiValue",22),d(),l("suiValue",50),d(),l("suiValue",18),d(),l("suiValue",56),d(),l("suiValue",45))},dependencies:[K],encapsulation:2})}}return n})(),Pa=(()=>{class n extends Q{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-inverted-colour-example"]],standalone:!1,features:[x],decls:14,vars:13,consts:[["sui-segment","","suiInverted",""],["suiInverted","","suiShowProgress","","suiColour","red",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","orange",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","yellow",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","olive",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","green",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","teal",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","blue",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","violet",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","purple",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","pink",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","brown",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","grey",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","black",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-progress",1)(2,"sui-progress",2)(3,"sui-progress",3)(4,"sui-progress",4)(5,"sui-progress",5)(6,"sui-progress",6)(7,"sui-progress",7)(8,"sui-progress",8)(9,"sui-progress",9)(10,"sui-progress",10)(11,"sui-progress",11)(12,"sui-progress",12)(13,"sui-progress",13),t()),a&2&&(d(),l("suiValue",59),d(),l("suiValue",31),d(),l("suiValue",48),d(),l("suiValue",35),d(),l("suiValue",35),d(),l("suiValue",31),d(),l("suiValue",35),d(),l("suiValue",18),d(),l("suiValue",22),d(),l("suiValue",50),d(),l("suiValue",18),d(),l("suiValue",56),d(),l("suiValue",45))},dependencies:[A,K],encapsulation:2})}}return n})();function Xp(n,m){n&1&&r(0,"doc-progress-standard-example")}function qp(n,m){n&1&&r(0,"doc-progress-indicating-example")}function Kp(n,m){n&1&&r(0,"doc-progress-bar-example")}function Qp(n,m){n&1&&r(0,"doc-progress-progress-example")}function Zp(n,m){n&1&&r(0,"doc-progress-label-example")}function $p(n,m){n&1&&r(0,"doc-progress-active-example")}function eu(n,m){n&1&&r(0,"doc-progress-success-example")}function tu(n,m){n&1&&r(0,"doc-progress-warning-example")}function iu(n,m){n&1&&r(0,"doc-progress-error-example")}function nu(n,m){n&1&&r(0,"doc-progress-disabled-example")}function ou(n,m){n&1&&r(0,"doc-progress-inverted-example")}function au(n,m){n&1&&r(0,"doc-progress-attached-example")}function su(n,m){n&1&&r(0,"doc-progress-card-attached-example")}function ru(n,m){n&1&&r(0,"doc-progress-size-example")}function lu(n,m){n&1&&r(0,"doc-progress-colour-example")}function du(n,m){n&1&&r(0,"doc-progress-inverted-colour-example")}function mu(n,m){if(n&1){let o=ne();i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Standard"),t(),i(6,"p"),e(7,"A standard progress bar"),t(),c(8,Xp,1,0,"ng-template",5),t(),i(9,"div")(10,"div",6)(11,"button",7),v("click",function(){C(o);let s=f();return y(s.addToStandard(-11))}),r(12,"i",8),t(),i(13,"button",9),v("click",function(){C(o);let s=f();return y(s.addToStandard(11))}),r(14,"i",10),t()()(),i(15,"doc-code-sample",11)(16,"h3",4),e(17,"Indicating"),t(),i(18,"p"),e(19,"An indicating progress bar visually indicates the current level of progress of a task"),t(),c(20,qp,1,0,"ng-template",5),t(),i(21,"div")(22,"div",6)(23,"button",7),v("click",function(){C(o);let s=f();return y(s.addToIndicating(-13))}),r(24,"i",8),t(),i(25,"button",9),v("click",function(){C(o);let s=f();return y(s.addToIndicating(13))}),r(26,"i",10),t()()(),i(27,"h2",2),e(28,"Content"),t(),i(29,"doc-code-sample",3)(30,"h3",4),e(31,"Bar"),t(),i(32,"p"),e(33,"A progress element can contain a bar visually indicating progress"),t(),c(34,Kp,1,0,"ng-template",5),t(),i(35,"doc-code-sample",3)(36,"h3",4),e(37,"Progress"),t(),i(38,"p"),e(39,"A progress bar can contain a text value indicating current progress"),t(),c(40,Qp,1,0,"ng-template",5),t(),i(41,"doc-code-sample",3)(42,"h3",4),e(43,"Label"),t(),i(44,"p"),e(45,"A progress element can contain a label"),t(),c(46,Zp,1,0,"ng-template",5),t(),i(47,"h2",2),e(48,"States"),t(),i(49,"doc-code-sample",3)(50,"h3",4),e(51,"Active"),t(),i(52,"p"),e(53,"A progress bar can show activity"),t(),c(54,$p,1,0,"ng-template",5),t(),i(55,"doc-code-sample",3)(56,"h3",4),e(57,"Success"),t(),i(58,"p"),e(59,"A progress bar can show a success state"),t(),c(60,eu,1,0,"ng-template",5),t(),i(61,"doc-code-sample",3)(62,"h3",4),e(63,"Warning"),t(),i(64,"p"),e(65,"A progress bar can show a warning state"),t(),c(66,tu,1,0,"ng-template",5),t(),i(67,"doc-code-sample",3)(68,"h3",4),e(69,"Error"),t(),i(70,"p"),e(71,"A progress bar can show an error state"),t(),c(72,iu,1,0,"ng-template",5),t(),i(73,"doc-code-sample",3)(74,"h3",4),e(75,"Disabled"),t(),i(76,"p"),e(77,"A progress bar can show an error state"),t(),c(78,nu,1,0,"ng-template",5),t(),i(79,"h2",2),e(80,"Variations"),t(),i(81,"doc-code-sample",3)(82,"h3",4),e(83,"Inverted"),t(),i(84,"p"),e(85,"A progress bar can have its colors inverted"),t(),c(86,ou,1,0,"ng-template",5),t(),i(87,"doc-code-sample",3)(88,"h3",4),e(89,"Attached"),t(),i(90,"p"),e(91,"AA progress bar can show progress of an element"),t(),c(92,au,1,0,"ng-template",5),t(),i(93,"doc-code-sample",3),c(94,su,1,0,"ng-template",5),t(),i(95,"doc-code-sample",3)(96,"h3",4),e(97,"Size"),t(),i(98,"p"),e(99,"A progress bar can vary in size"),t(),i(100,"div",12),e(101," Some small sizes may not be able to fit an inlined label "),t(),c(102,ru,1,0,"ng-template",5),t(),i(103,"doc-code-sample",3)(104,"h3",4),e(105,"Colours"),t(),i(106,"p"),e(107,"Can have different colours"),t(),c(108,lu,1,0,"ng-template",5),t(),i(109,"doc-code-sample",3)(110,"h3",4),e(111,"Inverted Colours"),t(),i(112,"p"),e(113,"These colors can also be inverted for improved contrast on dark backgrounds"),t(),c(114,du,1,0,"ng-template",5),t()()}if(n&2){let o=f();d(3),l("templateCode",o.snippetStandard),d(12),l("templateCode",o.snippetIndicating)("componentCode",o.snippetIndicatingTs),d(14),l("templateCode",o.snippetBar),d(6),l("templateCode",o.snippetProgress),d(6),l("templateCode",o.snippetStandard),d(8),l("templateCode",o.snippetActive),d(6),l("templateCode",o.snippetSuccess),d(6),l("templateCode",o.snippetWarning),d(6),l("templateCode",o.snippetError),d(6),l("templateCode",o.snippetDisabled),d(8),l("templateCode",o.snippetInverted),d(6),l("templateCode",o.snippetAttached),d(6),l("templateCode",o.snippetCardAttached),d(2),l("templateCode",o.snippetSize),d(8),l("templateCode",o.snippetColour),d(6),l("templateCode",o.snippetInvertedColour)}}function pu(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-progress"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",13)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiColour"),t(),i(20,"td"),e(21,"Set the progress colour. Allowed values could be "),i(22,"span",14),e(23,"'red'"),t(),e(24," | "),i(25,"span",14),e(26,"'orange'"),t(),e(27," | "),i(28,"span",14),e(29,"'yellow'"),t(),e(30," | "),i(31,"span",14),e(32,"'olive'"),t(),e(33," | "),i(34,"span",14),e(35,"'green'"),t(),e(36," | "),i(37,"span",14),e(38,"'teal'"),t(),e(39," | "),i(40,"span",14),e(41,"'blue'"),t(),e(42," | "),i(43,"span",14),e(44,"'violet'"),t(),e(45," | "),i(46,"span",14),e(47,"'purple'"),t(),e(48," | "),i(49,"span",14),e(50,"'pink'"),t(),e(51," | "),i(52,"span",14),e(53,"'brown'"),t(),e(54," | "),i(55,"span",14),e(56,"'grey'"),t(),e(57," | "),i(58,"span",14),e(59,"'black'"),t(),e(60," | "),i(61,"span",14),e(62,"null"),t()(),i(63,"td")(64,"div",15),e(65," string "),t()(),i(66,"td")(67,"div",16),e(68," null "),t()()(),i(69,"tr")(70,"td"),e(71,"suiSize"),t(),i(72,"td"),e(73,"Set the progress size. Allowed values could be "),i(74,"span",14),e(75,"'mini'"),t(),e(76," | "),i(77,"span",14),e(78,"'tiny'"),t(),e(79," | "),i(80,"span",14),e(81,"'small'"),t(),e(82," | "),i(83,"span",14),e(84,"'medium'"),t(),e(85," | "),i(86,"span",14),e(87,"'big'"),t(),e(88," | "),i(89,"span",14),e(90,"'huge'"),t(),e(91," | "),i(92,"span",14),e(93,"'massive'"),t(),e(94," | "),i(95,"span",14),e(96,"null"),t()(),i(97,"td")(98,"div",15),e(99," string "),t()(),i(100,"td")(101,"div",16),e(102," null "),t()()(),i(103,"tr")(104,"td"),e(105,"suiState"),t(),i(106,"td"),e(107," Determines the progress' state. Allowed values could be "),i(108,"span",14),e(109,"'active'"),t(),e(110," | "),i(111,"span",14),e(112,"'success'"),t(),e(113," | "),i(114,"span",14),e(115,"'warning'"),t(),e(116," | "),i(117,"span",14),e(118,"'error'"),t(),e(119," | "),i(120,"span",14),e(121,"null"),t()(),i(122,"td")(123,"div",15),e(124,"string"),t()(),i(125,"td")(126,"div",16),e(127,"null"),t()()(),i(128,"tr")(129,"td"),e(130,"suiAttached"),t(),i(131,"td"),e(132," Determines the progress' attachment position. Allowed values could be "),i(133,"span",14),e(134,"'bottom'"),t(),e(135," | "),i(136,"span",14),e(137,"'top'"),t(),e(138," | "),i(139,"span",14),e(140,"null"),t()(),i(141,"td")(142,"div",15),e(143,"string"),t()(),i(144,"td")(145,"div",16),e(146,"null"),t()()(),i(147,"tr")(148,"td"),e(149,"suiIndicating"),t(),i(150,"td"),e(151," Determines if the progress is indicating "),t(),i(152,"td")(153,"div",15),e(154,"boolean"),t()(),i(155,"td")(156,"div",16),e(157,"false"),t()()(),i(158,"tr")(159,"td"),e(160,"disabled"),t(),i(161,"td"),e(162," Determines if the progress is disabled "),t(),i(163,"td")(164,"div",15),e(165,"boolean"),t()(),i(166,"td")(167,"div",16),e(168,"false"),t()()(),i(169,"tr")(170,"td"),e(171,"suiInverted"),t(),i(172,"td"),e(173,"Determines whether the progress bar uses inverted colours"),t(),i(174,"td")(175,"div",15),e(176,"boolean"),t()(),i(177,"td")(178,"div",16),e(179,"false"),t()()(),i(180,"tr")(181,"td"),e(182,"suiShowProgress"),t(),i(183,"td"),e(184,"Determines whether the progress percentage is displayed"),t(),i(185,"td")(186,"div",15),e(187,"boolean"),t()(),i(188,"td")(189,"div",16),e(190,"false"),t()()()()()())}var Fa=(()=>{class n{constructor(o){this.snippetStandard=Qo,this.snippetIndicating=Zo,this.snippetIndicatingTs=$o,this.snippetBar=ea,this.snippetProgress=ta,this.snippetActive=ia,this.snippetSuccess=na,this.snippetWarning=oa,this.snippetError=aa,this.snippetDisabled=sa,this.snippetInverted=ra,this.snippetAttached=la,this.snippetCardAttached=da,this.snippetSize=ma,this.snippetColour=pa,this.snippetInvertedColour=ua,this.standardValue=31,this.indicatingValue=40,o.setTitle("Progress | Ngx Semantic")}addToStandard(o){let a=this.standardValue+o;a>100?a=100:a<0&&(a=0),this.standardValue=a}addToIndicating(o){let a=this.indicatingValue+o;a>100?a=100:a<0&&(a=0),this.indicatingValue=a}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress"]],standalone:!1,decls:3,vars:2,consts:[["header","Progress","subHeader","A progress bar shows the progression of a task"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-buttons",""],["sui-button","","suiIcon","","suiBasic","","suiColour","red",3,"click"],["sui-icon","","suiIconType","minus"],["sui-button","","suiIcon","","suiBasic","","suiColour","green",3,"click"],["sui-icon","","suiIconType","plus"],[3,"templateCode","componentCode"],["sui-message","","suiState","info"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,mu,115,17,"div",1)(2,pu,191,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,T,oe,g,re,Sa,xa,va,ga,fa,ba,Ea,Ca,ya,Da,wa,_a,Ta,Ma,Ia,Pa],encapsulation:2})}}return n})();var ka=`<button sui-button suiIcon
        sui-popup suiPopupContent="Add users to your feed">
  <i sui-icon suiIconType="add"></i>
</button>
`;var Aa=`<img sui-image suiAvatar
     sui-popup suiPopupTitle="Elliot Fu" suiPopupContent="Elliot has been a member since July 2012"
     src="/assets/images/elliot.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Stevie Feliciano" suiPopupContent="Stevie has been a member since August 2013"
     src="/assets/images/stevie.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Matt" suiPopupContent="Matt has been a member since July 2014"
     src="/assets/images/matt.jpg"/>
`;var Va=`<div sui-card
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
`;var Ba=`<button sui-button suiIcon
        sui-popup suiPopupBasic suiPopupContent="The default theme's basic popup removes the pointing arrow.">
  <i sui-icon suiIconType="add"></i>
</button>
`;var La=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="wide"
   suiPopupContent="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="very wide"
   suiPopupContent="Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
`;var Ha=`<div sui-button
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
`;var Wa=`<i sui-icon suiCircular suiLink suiIconType="heart"
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
`;var Oa=`<div sui-button
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
`;var Ra=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup"></i>
<button sui-button suiIcon
        sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup">
  <i sui-icon suiIconType="add"></i>
</button>
`;var za=`<i sui-icon suiCircular suiColour="red" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="bottom left" suiPopupContent="This is a bottom left popup"></i>
<i sui-icon suiCircular suiColour="teal" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="top right" suiPopupContent="This is a top right popup"></i>
`;function Cu(n,m){n&1&&r(0,"sui-rating",12)}function yu(n,m){n&1&&(i(0,"div",2)(1,"div",3),e(2,"1"),t(),i(3,"div",3),e(4,"2"),t(),i(5,"div",3),e(6,"3"),t(),i(7,"div",3),e(8,"4"),t()())}function Du(n,m){n&1&&(i(0,"div",2)(1,"div",3)(2,"div",4),e(3,"Basic Plan"),t(),i(4,"p")(5,"b"),e(6,"2"),t(),e(7," projects, $10 a month"),t(),i(8,"div",5),e(9,"Choose"),t()(),i(10,"div",3)(11,"div",4),e(12,"Business Plan"),t(),i(13,"p")(14,"b"),e(15,"5"),t(),e(16," projects, $20 a month"),t(),i(17,"div",5),e(18,"Choose"),t()(),i(19,"div",3)(20,"div",4),e(21,"Premium Plan"),t(),i(22,"p")(23,"b"),e(24,"8"),t(),e(25," projects, $25 a month"),t(),i(26,"div",5),e(27,"Choose"),t()()())}var ja=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-standard-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-button","","suiIcon","","sui-popup","","suiPopupContent","Add users to your feed"],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(i(0,"button",0),r(1,"i",1),t())},dependencies:[T,g,Te],encapsulation:2})}}return n})(),Na=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-titled-example"]],standalone:!1,decls:3,vars:0,consts:[["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Elliot Fu","suiPopupContent","Elliot has been a member since July 2012","src","/assets/images/elliot.jpg"],["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Stevie Feliciano","suiPopupContent","Stevie has been a member since August 2013","src","/assets/images/stevie.jpg"],["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Matt","suiPopupContent","Matt has been a member since July 2014","src","/assets/images/matt.jpg"]],template:function(a,s){a&1&&r(0,"img",0)(1,"img",1)(2,"img",2)},dependencies:[_e,Te],encapsulation:2})}}return n})(),Ua=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-html-example"]],standalone:!1,decls:17,vars:1,consts:[["popupContent",""],["sui-card","","sui-popup","","suiPopupTitle","User Rating",3,"suiPopupContent"],["suiCardImage",""],["src","https://semantic-ui.com/images/movies/watchmen-horizontal.jpg"],["suiCardContent",""],["suiCardHeader",""],["suiCardDescription",""],["sui-buttons","","suiAttached","","suiWidth","two","suiAttachedPosition","bottom"],["sui-button",""],["sui-icon","","suiIconType","add"],["sui-button","","suiEmphasis","primary"],["sui-icon","","suiIconType","play"],["suiValue","3","suiMaxValue","5"]],template:function(a,s){if(a&1&&(i(0,"div",1)(1,"div",2),r(2,"img",3),t(),i(3,"div",4)(4,"div",5),e(5,"Watchmen"),t(),i(6,"div",6),e(7," In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. "),t()(),i(8,"div",7)(9,"div",8),r(10,"i",9),e(11," Queue "),t(),i(12,"div",10),r(13,"i",11),e(14," Watch "),t()()(),c(15,Cu,1,0,"ng-template",null,0,Ve)),a&2){let h=k(16);l("suiPopupContent",h)}},dependencies:[kt,Pt,It,Mt,Ft,ot,T,oe,g,Te],encapsulation:2})}}return n})(),Ga=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-basic-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-button","","suiIcon","","sui-popup","","suiPopupBasic","","suiPopupContent","The default theme's basic popup removes the pointing arrow."],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(i(0,"button",0),r(1,"i",1),t())},dependencies:[T,g,Te],encapsulation:2})}}return n})(),Ya=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-width-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupWidth","wide","suiPopupContent","Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupWidth","very wide","suiPopupContent","Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)},dependencies:[g,Te],encapsulation:2})}}return n})(),Ja=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-fluid-example"]],standalone:!1,decls:4,vars:1,consts:[["fluidPopup",""],["sui-button","","sui-popup","",3,"suiPopupContent"],["sui-grid","","suiDivided","divided","suiAlignment","center aligned","suiWidth","four"],["suiGridColumn",""]],template:function(a,s){if(a&1&&(i(0,"div",1),e(1,` Show fluid popup
`),t(),c(2,yu,9,0,"ng-template",null,0,Ve)),a&2){let h=k(3);l("suiPopupContent",h)}},dependencies:[T,Bt,Lt,Te],encapsulation:2})}}return n})(),Xa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-size-example"]],standalone:!1,decls:5,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","mini","suiPopupContent","Hello. This is a mini popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","tiny","suiPopupContent","Hello. This is a tiny popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","small","suiPopupContent","Hello. This is a small popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","large","suiPopupContent","Hello. This is a large popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","huge","suiPopupContent","Hello. This is a huge popup"]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)(2,"i",2)(3,"i",3)(4,"i",4)},dependencies:[g,Te],encapsulation:2})}}return n})(),qa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-flowing-example"]],standalone:!1,decls:4,vars:1,consts:[["flowingTemplate",""],["sui-button","","sui-popup","","suiPopupFlowing","",3,"suiPopupContent"],["sui-grid","","suiDivided","divided","suiAlignment","center aligned","suiWidth","three"],["suiGridColumn",""],["sui-header",""],["sui-button",""]],template:function(a,s){if(a&1&&(i(0,"div",1),e(1,` Show flowing popup
`),t(),c(2,Du,28,0,"ng-template",null,0,Ve)),a&2){let h=k(3);l("suiPopupContent",h)}},dependencies:[E,T,Bt,Lt,Te],encapsulation:2})}}return n})(),Ka=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-inverted-example"]],standalone:!1,decls:3,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupInverted","","suiPopupContent","Hello. This is an inverted popup"],["sui-button","","suiIcon","","sui-popup","","suiPopupInverted","","suiPopupContent","Hello. This is an inverted popup"],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(r(0,"i",0),i(1,"button",1),r(2,"i",2),t())},dependencies:[T,g,Te],encapsulation:2})}}return n})(),Qa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-position-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-icon","","suiCircular","","suiColour","red","suiSize","big","suiIconType","heart","sui-popup","","suiPopupPlacement","bottom left","suiPopupContent","This is a bottom left popup"],["sui-icon","","suiCircular","","suiColour","teal","suiSize","big","suiIconType","heart","sui-popup","","suiPopupPlacement","top right","suiPopupContent","This is a top right popup"]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)},dependencies:[g,Te],encapsulation:2})}}return n})();function _u(n,m){n&1&&r(0,"doc-popup-standard-example")}function Tu(n,m){n&1&&r(0,"doc-popup-titled-example")}function Mu(n,m){n&1&&r(0,"doc-popup-html-example")}function Iu(n,m){n&1&&r(0,"doc-popup-basic-example")}function Pu(n,m){n&1&&r(0,"doc-popup-width-example")}function Fu(n,m){n&1&&r(0,"doc-popup-fluid-example")}function ku(n,m){n&1&&r(0,"doc-popup-size-example")}function Au(n,m){n&1&&r(0,"doc-popup-flowing-example")}function Vu(n,m){n&1&&r(0,"doc-popup-inverted-example")}function Bu(n,m){n&1&&r(0,"doc-popup-position-example")}function Lu(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Popup"),t(),i(6,"p"),e(7,"An element can specify popup content to appear"),t(),i(8,"div",5),e(9," Popup relies on "),i(10,"a",6),e(11,"Angular CDK"),t(),e(12,". Ensure that you have the latest version compatible with your Angular version "),t(),c(13,_u,1,0,"ng-template",7),t(),i(14,"doc-code-sample",3)(15,"h3",4),e(16,"Titled"),t(),i(17,"p"),e(18,"An element can specify popup content with a title"),t(),c(19,Tu,1,0,"ng-template",7),t(),i(20,"doc-code-sample",3)(21,"h3",4),e(22,"HTML"),t(),i(23,"p"),e(24,"An element can specify template HTML for a popup"),t(),c(25,Mu,1,0,"ng-template",7),t(),i(26,"h2",2),e(27,"Variations"),t(),i(28,"doc-code-sample",3)(29,"h3",4),e(30,"Basic"),t(),i(31,"p"),e(32,"A popup can provide more basic formatting"),t(),c(33,Iu,1,0,"ng-template",7),t(),i(34,"doc-code-sample",3)(35,"h3",4),e(36,"Width"),t(),i(37,"p"),e(38,"A popup can be extra wide to allow for longer content"),t(),c(39,Pu,1,0,"ng-template",7),t(),i(40,"doc-code-sample",3)(41,"h3",4),e(42,"Fluid"),t(),i(43,"p"),e(44,"A fluid popup will take up the entire width of its offset container"),t(),c(45,Fu,1,0,"ng-template",7),t(),i(46,"doc-code-sample",3)(47,"h3",4),e(48,"Size"),t(),i(49,"p"),e(50,"A popup can vary in size"),t(),c(51,ku,1,0,"ng-template",7),t(),i(52,"doc-code-sample",3)(53,"h3",4),e(54,"Flowing"),t(),i(55,"p"),e(56,"A popup can have no maximum width and continue to flow to fit its content"),t(),c(57,Au,1,0,"ng-template",7),t(),i(58,"doc-code-sample",3)(59,"h3",4),e(60,"Inverted"),t(),i(61,"p"),e(62,"A popup can have its colors inverted"),t(),c(63,Vu,1,0,"ng-template",7),t(),i(64,"doc-code-sample",3)(65,"h3",4),e(66,"Position"),t(),i(67,"p"),e(68,"A popup can be position around its trigger"),t(),c(69,Bu,1,0,"ng-template",7),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetStandard),d(11),l("templateCode",o.snippetTitled),d(6),l("templateCode",o.snippetHtml),d(8),l("templateCode",o.snippetBasic),d(6),l("templateCode",o.snippetWidth),d(6),l("templateCode",o.snippetFluid),d(6),l("templateCode",o.snippetSize),d(6),l("templateCode",o.snippetFlowing),d(6),l("templateCode",o.snippetInverted),d(6),l("templateCode",o.snippetPosition)}}function Hu(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-popup"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiPopupPlacement"),t(),i(20,"td"),e(21,"Set the popup's position. Allowed values could be "),i(22,"span",9),e(23,"'top left'"),t(),e(24," | "),i(25,"span",9),e(26,"'top center'"),t(),e(27," | "),i(28,"span",9),e(29,"'top right'"),t(),e(30," | "),i(31,"span",9),e(32,"'bottom left'"),t(),e(33," | "),i(34,"span",9),e(35,"'bottom center'"),t(),e(36," | "),i(37,"span",9),e(38,"'bottom right'"),t(),e(39," | "),i(40,"span",9),e(41,"'right center'"),t(),e(42," | "),i(43,"span",9),e(44,"'left center'"),t()(),i(45,"td")(46,"div",10),e(47," string "),t()(),i(48,"td")(49,"div",11),e(50," top left "),t()()(),i(51,"tr")(52,"td"),e(53,"suiPopupSize"),t(),i(54,"td"),e(55,"Set the popup size. Allowed values could be "),i(56,"span",9),e(57,"'mini'"),t(),e(58," | "),i(59,"span",9),e(60,"'tiny'"),t(),e(61," | "),i(62,"span",9),e(63,"'small'"),t(),e(64," | "),i(65,"span",9),e(66,"'medium'"),t(),e(67," | "),i(68,"span",9),e(69,"'big'"),t(),e(70," | "),i(71,"span",9),e(72,"'huge'"),t(),e(73," | "),i(74,"span",9),e(75,"'massive'"),t(),e(76," | "),i(77,"span",9),e(78,"null"),t()(),i(79,"td")(80,"div",10),e(81," string "),t()(),i(82,"td")(83,"div",11),e(84," null "),t()()(),i(85,"tr")(86,"td"),e(87,"suiPopupWidth"),t(),i(88,"td"),e(89," Determines the popup's width. Allowed values could be "),i(90,"span",9),e(91,"'wide'"),t(),e(92," | "),i(93,"span",9),e(94,"'very wide'"),t(),e(95," | "),i(96,"span",9),e(97,"null"),t()(),i(98,"td")(99,"div",10),e(100,"string"),t()(),i(101,"td")(102,"div",11),e(103,"null"),t()()(),i(104,"tr")(105,"td"),e(106,"suiPopupTrigger"),t(),i(107,"td"),e(108," Determines the popup's trigger. Allowed values could be "),i(109,"span",9),e(110,"'hover'"),t(),e(111," | "),i(112,"span",9),e(113,"'click'"),t()(),i(114,"td")(115,"div",10),e(116,"string"),t()(),i(117,"td")(118,"div",11),e(119,"hover"),t()()(),i(120,"tr")(121,"td"),e(122,"suiPopupTitle"),t(),i(123,"td"),e(124," What should get rendered as the popup's title/header "),t(),i(125,"td")(126,"div",10),e(127,"string"),t()(),i(128,"td")(129,"div",11),e(130,"null"),t()()(),i(131,"tr")(132,"td"),e(133,"suiPopupContent"),t(),i(134,"td"),e(135," What should get rendered as the popup's content. Could be a string or a template reference "),t(),i(136,"td")(137,"div",10),e(138,"string"),t(),e(139," | "),i(140,"div",10),e(141,"TemplateRef<any>"),t()(),i(142,"td")(143,"div",11),e(144,"null"),t()()(),i(145,"tr")(146,"td"),e(147,"suiPopupInverted"),t(),i(148,"td"),e(149," Determines if the popup uses inverted colours "),t(),i(150,"td")(151,"div",10),e(152,"boolean"),t()(),i(153,"td")(154,"div",11),e(155,"false"),t()()(),i(156,"tr")(157,"td"),e(158,"suiPopupFluid"),t(),i(159,"td"),e(160," Determines if the popup uses fluid styling "),t(),i(161,"td")(162,"div",10),e(163,"boolean"),t()(),i(164,"td")(165,"div",11),e(166,"false"),t()()(),i(167,"tr")(168,"td"),e(169,"suiPopupFlowing"),t(),i(170,"td"),e(171," Determines if the popup uses flowing styling "),t(),i(172,"td")(173,"div",10),e(174,"boolean"),t()(),i(175,"td")(176,"div",11),e(177,"false"),t()()(),i(178,"tr")(179,"td"),e(180,"suiPopupBasic"),t(),i(181,"td"),e(182,"Determines whether the popup uses basic styling and renders without the arrow"),t(),i(183,"td")(184,"div",10),e(185,"boolean"),t()(),i(186,"td")(187,"div",11),e(188,"false"),t()()()()()())}var Za=(()=>{class n{constructor(o){this.snippetStandard=ka,this.snippetTitled=Aa,this.snippetHtml=Va,this.snippetBasic=Ba,this.snippetWidth=La,this.snippetFluid=Ha,this.snippetSize=Wa,this.snippetFlowing=Oa,this.snippetInverted=Ra,this.snippetPosition=za,o.setTitle("Popup | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup"]],standalone:!1,decls:3,vars:2,consts:[["header","Popup","subHeader","A popup displays additional information on top of a page"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["href","https://www.npmjs.com/package/@angular/cdk"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,Lu,70,10,"div",1)(2,Hu,189,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,re,ja,Na,Ua,Ga,Ya,Ja,Xa,qa,Ka,Qa],encapsulation:2})}}return n})();var $a=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var es=`<sui-select
    suiFluid
    name="fluid"
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var ts=`<sui-select
    suiSearch
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var is=`<sui-select
    suiMultiple
    name="multiple"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var ns=`<sui-select
    suiSearch
    suiMultiple
    name="multiple-search"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var os=`<sui-select
    name="flag"
    suiPlaceholder="Select Country"
    [suiOptions]="countries">
</sui-select>
`;var as=`<sui-select
    name="images"
    suiPlaceholder="Select User"
    [suiOptions]="persons">
</sui-select>
`;var ss=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions"
    [(ngModel)]="selectedGender"
    (suiSelectionChanged)="onSelectionChanged($event)">
</sui-select>

<p>
  Selected value: <strong>{{ selectedGender }}</strong><br>
  Last change event: <strong>{{ lastChange }}</strong>
</p>
`;var rs=`<sui-select
    suiFluid
    suiMultiple
    suiLoading
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var ls=`<sui-select
    suiError
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var ds=`<sui-select
    disabled
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var ms=`<sui-select
    suiScrolling
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var ps=`<sui-select
    suiCompact
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var us=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var cs=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var hs=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var Ss=`countries: ISelectOption[] = [
  { text: 'Albania', value: 'al', flag: 'al' },
  { text: 'Angola', value: 'ao', flag: 'ao' },
  { text: 'Azerbaijan', value: 'az', flag: 'az' },
  { text: 'Botswana', value: 'bw', flag: 'bw' },
  { text: 'Nigeria', value: 'ng', flag: 'ng' },
];
`;var xs=`persons: ISelectOption[] = [
  { text: 'Elliot', value: null, image: { avatar: true, src: '/assets/images/elliot.jpg'} },
  { text: 'Helen', value: null, image: { avatar: true, src: '/assets/images/helen.jpg'} },
  { text: 'Jenny', value: null, image: { avatar: true, src: '/assets/images/jenny.jpg'} },
  { text: 'Joe', value: null, image: { avatar: true, src: '/assets/images/joe.jpg'} },
  { text: 'Justen', value: null, image: { avatar: true, src: '/assets/images/justen.jpg'} },
  { text: 'Laura', value: null, image: { avatar: true, src: '/assets/images/laura.jpg'} },
  { text: 'Matt', value: null, image: { avatar: true, src: '/assets/images/matt.jpg'} },
  { text: 'Stevie', value: null, image: { avatar: true, src: '/assets/images/stevie.jpg'} },
];
`;var vs=`selectedGender: number | null = 1;
lastChange: number | null = null;

genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];

onSelectionChanged(value: number): void {
  this.lastChange = value;
}
`;var gs=`options: ISelectOption[] = [
  { text: 'Option 1', value: 'one' },
  { text: 'Option 2', value: 'two' },
  { text: 'Option 3', value: 'three' },
];
`;var fs=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var bs=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var se=class{constructor(){this.selectedGender=1,this.lastChange=null,this.genderOptions=[{text:"Male",value:0},{text:"Female",value:1}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Angola",value:"ao",flag:"ao"},{text:"Azerbaijan",value:"az",flag:"az"},{text:"Botswana",value:"bw",flag:"bw"},{text:"Nigeria",value:"ng",flag:"ng"}],this.states=[{text:"Alabama",value:"AL"},{text:"Arizona",value:"AZ"},{text:"California",value:"CA"},{text:"District Of Columbia",value:"DC"},{text:"Idaho",value:"ID"},{text:"Indiana",value:"IN"},{text:"Kansas",value:"KS"},{text:"Louisiana",value:"LA"},{text:"Maryland",value:"MD"},{text:"Utah",value:"UT"}],this.persons=[{text:"Elliot",value:null,image:{avatar:!0,src:"/assets/images/elliot.jpg"}},{text:"Helen",value:null,image:{avatar:!0,src:"/assets/images/helen.jpg"}},{text:"Jenny",value:null,image:{avatar:!0,src:"/assets/images/jenny.jpg"}},{text:"Joe",value:null,image:{avatar:!0,src:"/assets/images/joe.jpg"}},{text:"Justen",value:null,image:{avatar:!0,src:"/assets/images/justen.jpg"}},{text:"Laura",value:null,image:{avatar:!0,src:"/assets/images/laura.jpg"}},{text:"Matt",value:null,image:{avatar:!0,src:"/assets/images/matt.jpg"}},{text:"Stevie",value:null,image:{avatar:!0,src:"/assets/images/stevie.jpg"}}],this.options=[{text:"Option 1",value:"one"},{text:"Option 2",value:"two"},{text:"Option 3",value:"three"}]}onSelectionChanged(m){this.lastChange=m}},Es=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-standard-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.genderOptions)},dependencies:[le],encapsulation:2})}}return n})(),Cs=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-fluid-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiFluid","","name","fluid","suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.genderOptions)},dependencies:[le],encapsulation:2})}}return n})(),ys=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-multiple-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiMultiple","","name","multiple","suiPlaceholder","State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.states)},dependencies:[le],encapsulation:2})}}return n})(),Ds=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-multiple-search-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiSearch","","suiMultiple","","name","multiple-search","suiPlaceholder","State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.states)},dependencies:[le],encapsulation:2})}}return n})(),ws=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-flag-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["name","flag","suiPlaceholder","Select Country",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.countries)},dependencies:[le],encapsulation:2})}}return n})(),_s=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-images-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["name","images","suiPlaceholder","Select User",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.persons)},dependencies:[le],encapsulation:2})}}return n})(),Ts=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-loading-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiFluid","","suiMultiple","","suiLoading","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.options)},dependencies:[le],encapsulation:2})}}return n})(),Ms=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-error-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiError","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.options)},dependencies:[le],encapsulation:2})}}return n})(),Is=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-disabled-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["disabled","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.options)},dependencies:[le],encapsulation:2})}}return n})(),Ps=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-search-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiSearch","","suiPlaceholder","Select State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.states)},dependencies:[le],encapsulation:2})}}return n})(),Fs=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-scrolling-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiScrolling","","suiPlaceholder","Select State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.states)},dependencies:[le],encapsulation:2})}}return n})(),ks=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-compact-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiCompact","","suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.genderOptions)},dependencies:[le],encapsulation:2})}}return n})(),As=(()=>{class n extends se{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-two-way-example"]],standalone:!1,features:[x],decls:9,vars:4,consts:[["suiPlaceholder","Gender",3,"ngModelChange","suiSelectionChanged","suiOptions","ngModel"]],template:function(a,s){a&1&&(i(0,"sui-select",0),_("ngModelChange",function(p){return w(s.selectedGender,p)||(s.selectedGender=p),p}),v("suiSelectionChanged",function(p){return s.onSelectionChanged(p)}),t(),i(1,"p"),e(2," Selected value: "),i(3,"strong"),e(4),t(),r(5,"br"),e(6," Last change event: "),i(7,"strong"),e(8),t()()),a&2&&(l("suiOptions",s.genderOptions),D("ngModel",s.selectedGender),d(4),gt(s.selectedGender),d(4),gt(s.lastChange))},dependencies:[Qe,Ze,le],encapsulation:2})}}return n})();function l0(n,m){n&1&&r(0,"doc-select-standard-example")}function d0(n,m){n&1&&r(0,"doc-select-fluid-example")}function m0(n,m){n&1&&r(0,"doc-select-search-example")}function p0(n,m){n&1&&r(0,"doc-select-multiple-example")}function u0(n,m){n&1&&r(0,"doc-select-multiple-search-example")}function c0(n,m){n&1&&r(0,"doc-select-flag-example")}function h0(n,m){n&1&&r(0,"doc-select-images-example")}function S0(n,m){n&1&&r(0,"doc-select-two-way-example")}function x0(n,m){n&1&&r(0,"doc-select-loading-example")}function v0(n,m){n&1&&r(0,"doc-select-error-example")}function g0(n,m){n&1&&r(0,"doc-select-disabled-example")}function f0(n,m){n&1&&r(0,"doc-select-scrolling-example")}function b0(n,m){n&1&&r(0,"doc-select-compact-example")}function E0(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Selection"),t(),i(6,"p"),e(7,"A standard select can be used to pick between choices in a form."),t(),c(8,l0,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3),c(10,d0,1,0,"ng-template",5),t(),i(11,"doc-code-sample",3)(12,"h3",4),e(13,"Search Selection"),t(),i(14,"p"),e(15,"A selection dropdown can allow a user to search through a large list of choices."),t(),c(16,m0,1,0,"ng-template",5),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Multiple Selection"),t(),i(20,"p"),e(21,"A selection dropdown can allow multiple selections."),t(),i(22,"div",6),r(23,"i",7),i(24,"div",8)(25,"p"),e(26,"Selected values are emitted as an array."),t()()(),c(27,p0,1,0,"ng-template",5),t(),i(28,"doc-code-sample",3)(29,"h3",4),e(30,"Multiple Search Selection"),t(),i(31,"p"),e(32,"A selection dropdown can allow multiple search selections."),t(),c(33,u0,1,0,"ng-template",5),t(),i(34,"doc-code-sample",3)(35,"h3",4),e(36,"Flag Selection"),t(),i(37,"p"),e(38,"A selection can include flag icons."),t(),i(39,"div",6),r(40,"i",7),i(41,"div",8)(42,"p"),e(43,"Set "),i(44,"span",9),e(45,"flag"),t(),e(46," on an option to the two-letter country code of the flag to show."),t()()(),c(47,c0,1,0,"ng-template",5),t(),i(48,"doc-code-sample",3)(49,"h3",4),e(50,"Image Selection"),t(),i(51,"p"),e(52,"A selection can include images."),t(),c(53,h0,1,0,"ng-template",5),t(),i(54,"h2",2),e(55,"Forms"),t(),i(56,"doc-code-sample",3)(57,"h3",4),e(58,"Form Binding"),t(),i(59,"p"),e(60,"A select is a form control. Use it with "),i(61,"span",9),e(62,"ngModel"),t(),e(63,", or with "),i(64,"span",9),e(65,"formControl"),t(),e(66," / "),i(67,"span",9),e(68,"formControlName"),t(),e(69," in reactive forms. The "),i(70,"span",9),e(71,"suiSelectionChanged"),t(),e(72," event also fires whenever the selection changes."),t(),i(73,"div",6),r(74,"i",7),i(75,"div",8)(76,"p"),e(77,"Form binding with "),i(78,"span",9),e(79,"ngModel"),t(),e(80," and reactive forms requires "),i(81,"span",9),e(82,"FormsModule"),t(),e(83," or "),i(84,"span",9),e(85,"ReactiveFormsModule"),t(),e(86,". Programmatic value writes are supported for single selection."),t()()(),c(87,S0,1,0,"ng-template",5),t(),i(88,"h2",2),e(89,"States"),t(),i(90,"doc-code-sample",3)(91,"h3",4),e(92,"Loading"),t(),i(93,"p"),e(94,"A dropdown can show that it is currently loading data."),t(),c(95,x0,1,0,"ng-template",5),t(),i(96,"doc-code-sample",3)(97,"h3",4),e(98,"Error"),t(),i(99,"p"),e(100,"An errored dropdown can alert a user to a problem."),t(),c(101,v0,1,0,"ng-template",5),t(),i(102,"doc-code-sample",3)(103,"h3",4),e(104,"Disabled"),t(),i(105,"p"),e(106,"A disabled dropdown menu or item does not allow user interaction."),t(),c(107,g0,1,0,"ng-template",5),t(),i(108,"h2",2),e(109,"Variations"),t(),i(110,"doc-code-sample",3)(111,"h3",4),e(112,"Scrolling"),t(),i(113,"p"),e(114,"A selection dropdown can have its menu scroll."),t(),c(115,f0,1,0,"ng-template",5),t(),i(116,"doc-code-sample",3)(117,"h3",4),e(118,"Compact"),t(),i(119,"p"),e(120,"A compact selection dropdown has no minimum width."),t(),c(121,b0,1,0,"ng-template",5),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetStandard)("componentCode",o.snippetStandardTs),d(6),l("templateCode",o.snippetFluid)("componentCode",o.snippetStandardTs),d(2),l("templateCode",o.snippetSearch)("componentCode",o.snippetSearchTs),d(6),l("templateCode",o.snippetMultiple)("componentCode",o.snippetMultipleTs),d(11),l("templateCode",o.snippetMultipleSearch)("componentCode",o.snippetMultipleTs),d(6),l("templateCode",o.snippetFlag)("componentCode",o.snippetFlagsTs),d(14),l("templateCode",o.snippetImages)("componentCode",o.snippetImagesTs),d(8),l("templateCode",o.snippetTwoWay)("componentCode",o.snippetTwoWayTs),d(34),l("templateCode",o.snippetLoading)("componentCode",o.snippetStatesTs),d(6),l("templateCode",o.snippetError)("componentCode",o.snippetStatesTs),d(6),l("templateCode",o.snippetDisabled)("componentCode",o.snippetStatesTs),d(8),l("templateCode",o.snippetScrolling)("componentCode",o.snippetScrollingTs),d(6),l("templateCode",o.snippetCompact)("componentCode",o.snippetCompactTs)}}function C0(n,m){n&1&&(i(0,"div")(1,"div",6),r(2,"i",7),i(3,"div",8)(4,"p"),e(5," Import "),i(6,"span",9),e(7,"SuiSelectModule"),t(),e(8," from "),i(9,"span",9),e(10,"ngx-semantic/modules/select"),t(),e(11,". The select builds its own menu from "),i(12,"span",9),e(13,"suiOptions"),t(),e(14,", so you do not need to write menu markup. Looking for a menu of actions? See "),i(15,"a",10),e(16,"Dropdown"),t(),e(17,". "),t()()(),i(18,"h2",2),e(19,"sui-select"),t(),i(20,"p"),e(21,"Selector: "),i(22,"span",9),e(23,"sui-select"),t(),e(24,". Implements "),i(25,"span",9),e(26,"ControlValueAccessor"),t(),e(27," so it can be used with template-driven and reactive forms."),t(),i(28,"h4",4),e(29,"Properties"),t(),i(30,"table",11)(31,"thead")(32,"tr")(33,"th"),e(34,"Property"),t(),i(35,"th"),e(36,"Description"),t(),i(37,"th"),e(38,"Type"),t(),i(39,"th"),e(40,"Default"),t()()(),i(41,"tbody")(42,"tr")(43,"td"),e(44,"suiOptions"),t(),i(45,"td"),e(46,"The options to choose from. See "),i(47,"span",9),e(48,"ISelectOption"),t(),e(49," below."),t(),i(50,"td")(51,"div",12),e(52," ISelectOption[] "),t()(),i(53,"td")(54,"div",13),e(55," [] "),t()()(),i(56,"tr")(57,"td"),e(58,"suiPlaceholder"),t(),i(59,"td"),e(60,"The select\u2019s placeholder text."),t(),i(61,"td")(62,"div",12),e(63," string "),t()(),i(64,"td")(65,"div",13),e(66," null "),t()()(),i(67,"tr")(68,"td"),e(69,"suiSearch"),t(),i(70,"td"),e(71,"Determines if the select supports searching through its options."),t(),i(72,"td")(73,"div",12),e(74," boolean "),t()(),i(75,"td")(76,"div",13),e(77," false "),t()()(),i(78,"tr")(79,"td"),e(80,"suiMultiple"),t(),i(81,"td"),e(82,"Determines if the select allows for multiple selection. The selection is then an array of option values."),t(),i(83,"td")(84,"div",12),e(85," boolean "),t()(),i(86,"td")(87,"div",13),e(88," false "),t()()(),i(89,"tr")(90,"td"),e(91,"suiFluid"),t(),i(92,"td"),e(93,"Determines if the select is rendered as fluid, taking the full width of its parent."),t(),i(94,"td")(95,"div",12),e(96," boolean "),t()(),i(97,"td")(98,"div",13),e(99," false "),t()()(),i(100,"tr")(101,"td"),e(102,"suiInline"),t(),i(103,"td"),e(104,"Determines if the select is rendered inline."),t(),i(105,"td")(106,"div",12),e(107," boolean "),t()(),i(108,"td")(109,"div",13),e(110," false "),t()()(),i(111,"tr")(112,"td"),e(113,"suiLoading"),t(),i(114,"td"),e(115,"Determines if the select is rendered as loading."),t(),i(116,"td")(117,"div",12),e(118," boolean "),t()(),i(119,"td")(120,"div",13),e(121," false "),t()()(),i(122,"tr")(123,"td"),e(124,"suiError"),t(),i(125,"td"),e(126,"Determines if the select is rendered to depict an error."),t(),i(127,"td")(128,"div",12),e(129," boolean "),t()(),i(130,"td")(131,"div",13),e(132," false "),t()()(),i(133,"tr")(134,"td"),e(135,"disabled"),t(),i(136,"td"),e(137,"Determines if the select is disabled."),t(),i(138,"td")(139,"div",12),e(140," boolean "),t()(),i(141,"td")(142,"div",13),e(143," false "),t()()(),i(144,"tr")(145,"td"),e(146,"suiScrolling"),t(),i(147,"td"),e(148,"Determines if the select\u2019s menu is rendered as scrollable."),t(),i(149,"td")(150,"div",12),e(151," boolean "),t()(),i(152,"td")(153,"div",13),e(154," false "),t()()(),i(155,"tr")(156,"td"),e(157,"suiCompact"),t(),i(158,"td"),e(159,"Determines if the select is rendered as compact, with no minimum width."),t(),i(160,"td")(161,"div",12),e(162," boolean "),t()(),i(163,"td")(164,"div",13),e(165," false "),t()()(),i(166,"tr")(167,"td"),e(168,"name"),t(),i(169,"td"),e(170,"The component\u2019s name."),t(),i(171,"td")(172,"div",12),e(173," string "),t()(),i(174,"td")(175,"div",13),e(176," null "),t()()()()(),i(177,"h4",4),e(178,"Events"),t(),i(179,"table",11)(180,"thead")(181,"tr")(182,"th"),e(183,"Event"),t(),i(184,"th"),e(185,"Description"),t(),i(186,"th"),e(187,"Type"),t()()(),i(188,"tbody")(189,"tr")(190,"td"),e(191,"suiSelectionChanged"),t(),i(192,"td"),e(193,"Fired when the selection changes. Emits the selected option value, or an array of values when "),i(194,"span",9),e(195,"suiMultiple"),t(),e(196," is set."),t(),i(197,"td")(198,"div",12),e(199," any | any[] "),t()()()()(),i(200,"h2",2),e(201,"ISelectOption"),t(),i(202,"p"),e(203,"The shape of each entry in "),i(204,"span",9),e(205,"suiOptions"),t(),e(206,". Import it from "),i(207,"span",9),e(208,"ngx-semantic/modules/select"),t(),e(209,"."),t(),i(210,"h4",4),e(211,"Properties"),t(),i(212,"table",11)(213,"thead")(214,"tr")(215,"th"),e(216,"Property"),t(),i(217,"th"),e(218,"Description"),t(),i(219,"th"),e(220,"Type"),t(),i(221,"th"),e(222,"Default"),t()()(),i(223,"tbody")(224,"tr")(225,"td"),e(226,"text"),t(),i(227,"td"),e(228,"The text displayed for the option. This is also what the search filters on."),t(),i(229,"td")(230,"div",12),e(231," string "),t()(),i(232,"td")(233,"div",13),e(234," - "),t()()(),i(235,"tr")(236,"td"),e(237,"value"),t(),i(238,"td"),e(239,"The value emitted when the option is selected."),t(),i(240,"td")(241,"div",12),e(242," any "),t()(),i(243,"td")(244,"div",13),e(245," - "),t()()(),i(246,"tr")(247,"td"),e(248,"image"),t(),i(249,"td"),e(250,"Shows an image next to the option text. See "),i(251,"span",9),e(252,"ISelectOptionImage"),t(),e(253,"."),t(),i(254,"td")(255,"div",12),e(256," ISelectOptionImage "),t()(),i(257,"td")(258,"div",13),e(259," undefined "),t()()(),i(260,"tr")(261,"td"),e(262,"flag"),t(),i(263,"td"),e(264,"The country code of a flag to show next to the option text, for example "),i(265,"span",9),e(266,"ng"),t(),e(267,"."),t(),i(268,"td")(269,"div",12),e(270," string "),t()(),i(271,"td")(272,"div",13),e(273," undefined "),t()()()()(),i(274,"h2",2),e(275,"ISelectOptionImage"),t(),i(276,"p"),e(277,"The shape of "),i(278,"span",9),e(279,"ISelectOption.image"),t(),e(280,"."),t(),i(281,"h4",4),e(282,"Properties"),t(),i(283,"table",11)(284,"thead")(285,"tr")(286,"th"),e(287,"Property"),t(),i(288,"th"),e(289,"Description"),t(),i(290,"th"),e(291,"Type"),t(),i(292,"th"),e(293,"Default"),t()()(),i(294,"tbody")(295,"tr")(296,"td"),e(297,"src"),t(),i(298,"td"),e(299,"The image source."),t(),i(300,"td")(301,"div",12),e(302," string "),t()(),i(303,"td")(304,"div",13),e(305," - "),t()()(),i(306,"tr")(307,"td"),e(308,"avatar"),t(),i(309,"td"),e(310,"When true, renders the image as a small avatar."),t(),i(311,"td")(312,"div",12),e(313," boolean "),t()(),i(314,"td")(315,"div",13),e(316," - "),t()()()()(),i(317,"h2",2),e(318,"suiSelectMenu"),t(),i(319,"p"),e(320,"Selector: "),i(321,"span",9),e(322,"[suiSelectMenu]"),t(),e(323,". The options menu rendered inside "),i(324,"span",9),e(325,"sui-select"),t(),e(326,". You do not normally use this directly."),t(),i(327,"h4",4),e(328,"Properties"),t(),i(329,"table",11)(330,"thead")(331,"tr")(332,"th"),e(333,"Property"),t(),i(334,"th"),e(335,"Description"),t(),i(336,"th"),e(337,"Type"),t(),i(338,"th"),e(339,"Default"),t()()(),i(340,"tbody")(341,"tr")(342,"td"),e(343,"suiDirection"),t(),i(344,"td"),e(345,"Sets the direction the menu opens. Allowed values are "),i(346,"span",9),e(347,"left"),t(),e(348," | "),i(349,"span",9),e(350,"right"),t(),e(351," | "),i(352,"span",9),e(353,"null"),t()(),i(354,"td")(355,"div",12),e(356," string "),t()(),i(357,"td")(358,"div",13),e(359," null "),t()()(),i(360,"tr")(361,"td"),e(362,"suiScrolling"),t(),i(363,"td"),e(364,"Determines if the menu is scrollable or not."),t(),i(365,"td")(366,"div",12),e(367," boolean "),t()(),i(368,"td")(369,"div",13),e(370," false "),t()()(),i(371,"tr")(372,"td"),e(373,"suiIsOpen"),t(),i(374,"td"),e(375,"Sets whether the menu is open. This is managed by the select."),t(),i(376,"td")(377,"div",12),e(378," boolean "),t()(),i(379,"td")(380,"div",13),e(381," false "),t()()()()(),i(382,"h2",2),e(383,"suiSelectMenuItem"),t(),i(384,"p"),e(385,"Selector: "),i(386,"span",9),e(387,"[suiSelectMenuItem]"),t(),e(388,". An option inside the menu rendered by "),i(389,"span",9),e(390,"sui-select"),t(),e(391,". You do not normally use this directly."),t(),i(392,"h4",4),e(393,"Properties"),t(),i(394,"table",11)(395,"thead")(396,"tr")(397,"th"),e(398,"Property"),t(),i(399,"th"),e(400,"Description"),t(),i(401,"th"),e(402,"Type"),t(),i(403,"th"),e(404,"Default"),t()()(),i(405,"tbody")(406,"tr")(407,"td"),e(408,"suiValue"),t(),i(409,"td"),e(410,"The value to be emitted if this menu item is selected."),t(),i(411,"td")(412,"div",12),e(413," any "),t()(),i(414,"td")(415,"div",13),e(416," null "),t()()(),i(417,"tr")(418,"td"),e(419,"suiSelected"),t(),i(420,"td"),e(421,"Determines if the menu item is shown as selected."),t(),i(422,"td")(423,"div",12),e(424," boolean "),t()(),i(425,"td")(426,"div",13),e(427," false "),t()()(),i(428,"tr")(429,"td"),e(430,"suiMultiple"),t(),i(431,"td"),e(432,"Determines if this menu allows for selecting multiple items."),t(),i(433,"td")(434,"div",12),e(435," boolean "),t()(),i(436,"td")(437,"div",13),e(438," false "),t()()()()()())}var Vs=(()=>{class n{constructor(o){this.snippetStandard=$a,this.snippetFluid=es,this.snippetSearch=ts,this.snippetMultiple=is,this.snippetMultipleSearch=ns,this.snippetFlag=os,this.snippetImages=as,this.snippetTwoWay=ss,this.snippetLoading=rs,this.snippetError=ls,this.snippetDisabled=ds,this.snippetScrolling=ms,this.snippetCompact=ps,this.snippetStandardTs=us,this.snippetSearchTs=cs,this.snippetMultipleTs=hs,this.snippetFlagsTs=Ss,this.snippetImagesTs=xs,this.snippetTwoWayTs=vs,this.snippetStatesTs=gs,this.snippetScrollingTs=fs,this.snippetCompactTs=bs,o.setTitle("Select | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-select"]],standalone:!1,decls:3,vars:2,consts:[["header","Select","subHeader","A select is a dropdown used to pick one or more values from a list of options"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["docDemo",""],["sui-message","","suiIcon",""],["sui-icon","","suiIconType","info circle"],["suiMessageContent",""],["sui-label",""],["routerLink","/modules/dropdown"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,E0,122,26,"div",1)(2,C0,439,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[wt,O,H,L,W,F,R,E,g,re,Tt,Es,Cs,ys,Ds,ws,_s,Ts,Ms,Is,Ps,Fs,ks,As],encapsulation:2})}}return n})();var Bs=`<sui-modal
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
`;var Ls=`isStandardModalVisible = true;
`;var Hs=`<sui-modal
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
`;var Ws=`isBasicModalVisible = true;
`;var Os=`<sui-modal
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
`;var Rs=`isFullScreenModalVisible = true;
`;var zs=`<sui-modal
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
`;var js=`isSizeModalVisible = true;
`;var Ns=`<sui-modal
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
`;var Us=`isScrollingModalVisible = true;
`;var Gs=`<sui-modal
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
`;var Ys=`isClosableModalVisible = true;
`;var Js=`<sui-modal
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
`;var Xs=`isMaskClosableModalVisible = true;
`;var H0=["contentTemplate"],W0=["*"];function O0(n,m){if(n&1){let o=ne();i(0,"i",4),v("click",function(){C(o);let s=f(3);return y(s.visible=!1)}),t()}}function R0(n,m){if(n&1&&Z(0,O0,1,0,"i",3),n&2){let o=f(2);$(o.suiBasic?-1:0)}}function z0(n,m){if(n&1&&r(0,"i",5),n&2){let o=f(3);l("suiIconType",o.suiHeaderIcon)}}function j0(n,m){if(n&1&&(i(0,"div"),Z(1,z0,1,1,"i",5),e(2),t()),n&2){let o=f(2);fe("ui",!!o.suiHeaderIcon)("icon",!!o.suiHeaderIcon)("header",!0),d(),$(o.suiHeaderIcon?1:-1),d(),we(" ",o.suiHeaderText," ")}}function N0(n,m){if(n&1&&(i(0,"div",1),Z(1,R0,1,1),Z(2,j0,3,8,"div",2),ge(3),t()),n&2){let o=f();l("ngClass",o.classes),d(),$(o.suiClosable?1:-1),d(),$(o.suiHeaderText||o.suiHeaderIcon?2:-1)}}var $e=(()=>{class n{get classes(){return"actions"}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=yt({type:n,selectors:[["","suiModalActions",""]],hostVars:2,hostBindings:function(a,s){a&2&&Ye(s.classes)},exportAs:["suiModalActions"]})}}return n})(),et=(()=>{class n{constructor(){this.suiImage=!1,this.suiScrollable=!1}get classes(){return[G.getPropClass(this.suiScrollable,"scrolling"),G.getPropClass(this.suiImage,"image"),"content"].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=yt({type:n,selectors:[["","suiModalContent",""]],hostVars:2,hostBindings:function(a,s){a&2&&Ye(s.classes)},inputs:{suiImage:"suiImage",suiScrollable:"suiScrollable"},exportAs:["suiModalContent"]})}}return I([P()],n.prototype,"suiImage",void 0),I([P()],n.prototype,"suiScrollable",void 0),n})(),qs=(()=>{class n{get classes(){return"description"}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=yt({type:n,selectors:[["","suiModalDescription",""]],hostVars:2,hostBindings:function(a,s){a&2&&Ye(s.classes)},exportAs:["suiModalDescription"]})}}return n})(),Oe=(()=>{class n{get visible(){return this._visible}set visible(o){o?this.showModal():this.hideModal(),this._visible=o,this.visibleChange.emit(o)}get classes(){return["ui",this.suiSize,G.getPropClass(this.suiBasic,"basic"),G.getPropClass(this.suiFullScreen,"fullscreen"),this.scrollClass,"modal","transition","visible","active"].join(" ")}get scrollClass(){return this.suiScroll==="full"?"long":this.suiScroll==="medium"?"longer":""}constructor(){this.document=me(Ot),this.renderer=me(Gt),this.viewRef=me(Yt),this.suiHeaderText=null,this.suiHeaderIcon=null,this.suiSize=null,this.suiScroll="none",this.suiBasic=!1,this.suiClosable=!0,this.suiCentered=!0,this.suiBlurring=!1,this.suiFullScreen=!1,this.suiMaskClosable=!0,this.visibleChange=new Ce,this._visible=!1,this._modalDomRef=null,this.clickListener=null,this.uniqueId=Math.ceil(Math.random()*1e8)}ngOnDestroy(){let o=this.getModalFromDom();o&&(this.renderer.removeChild(this.document.body,o),this.suiBlurring&&this.renderer.removeClass(this.document.body,"dimmable"))}showModal(){this.isModalInDom()||this.generateDomElement(),this._modalDomRef&&(this.renderer.setProperty(this._modalDomRef,"style","display: flex !important;"),this.renderer.addClass(this._modalDomRef,"visible"),this.renderer.addClass(this._modalDomRef,"active"),this.suiBlurring&&(this.renderer.addClass(this.document.body,"dimmable"),this.renderer.addClass(this.document.body,"blurring"),this.renderer.addClass(this.document.body,"dimmed")))}hideModal(){this._modalDomRef&&(this.renderer.removeAttribute(this._modalDomRef,"style"),this.renderer.removeClass(this._modalDomRef,"visible"),this.renderer.removeClass(this._modalDomRef,"active"),this.suiBlurring&&(this.renderer.removeClass(this.document.body,"blurring"),this.renderer.removeClass(this.document.body,"dimmed")))}generateDomElement(){let o=this.renderer.createElement("div");this.renderer.setAttribute(o,"id",this.uniqueId.toString());let a="ui dimmer modals page"+(this.suiCentered?"":" top aligned")+" transition";this.renderer.setAttribute(o,"class",a);let s=this.viewRef.createEmbeddedView(this.contentTemplate);s.detectChanges();for(let h of s.rootNodes)this.renderer.appendChild(o,h);this._modalDomRef=o,this.clickListener=this.renderer.listen(this._modalDomRef,"click",h=>{h.target.id===this.uniqueId.toString()&&this.onClick()}),this.renderer.appendChild(this.document.body,this._modalDomRef)}isModalInDom(){return!!this.getModalFromDom()}getModalFromDom(){return this.document.getElementById(String(this.uniqueId))}onClick(){this.suiMaskClosable&&(this.visible=!1)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-modal"]],viewQuery:function(a,s){if(a&1&&lt(H0,7),a&2){let h;ye(h=De())&&(s.contentTemplate=h.first)}},inputs:{suiHeaderText:"suiHeaderText",suiHeaderIcon:"suiHeaderIcon",suiSize:"suiSize",suiScroll:"suiScroll",suiBasic:"suiBasic",suiClosable:"suiClosable",suiCentered:"suiCentered",suiBlurring:"suiBlurring",suiFullScreen:"suiFullScreen",suiMaskClosable:"suiMaskClosable",visible:"visible"},outputs:{visibleChange:"visibleChange"},ngContentSelectors:W0,decls:2,vars:0,consts:[["contentTemplate",""],[2,"display","block !important",3,"ngClass"],[3,"ui","icon","header"],["sui-icon","","suiIconType","close"],["sui-icon","","suiIconType","close",3,"click"],["sui-icon","",3,"suiIconType"]],template:function(a,s){a&1&&(ve(),c(0,N0,4,3,"ng-template",null,0,Ve))},dependencies:[Y,Je,g],encapsulation:2,changeDetection:0})}}return I([P()],n.prototype,"suiBasic",void 0),I([P()],n.prototype,"suiClosable",void 0),I([P()],n.prototype,"suiCentered",void 0),I([P()],n.prototype,"suiBlurring",void 0),I([P()],n.prototype,"suiFullScreen",void 0),I([P()],n.prototype,"suiMaskClosable",void 0),n})(),Ks=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({imports:[Y,Oe]})}}return n})();function G0(n,m){n&1&&r(0,"div",9)(1,"img",6)}var Re=class{constructor(){this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((m,o)=>o)}},Zs=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-standard-example"]],standalone:!1,features:[x],decls:20,vars:1,consts:[["suiHeaderText","Select a Photo",3,"visibleChange","visible"],["sui-image","","suiModalContent",""],["sui-image","","suiSize","medium"],["src","https://semantic-ui.com/images/avatar2/large/rachel.png"],["suiCardDescription",""],["sui-header",""],["href","https://www.gravatar.com","target","_blank"],["suiModalActions",""],["sui-button","","suiEmphasis","secondary","suiColour","black"],["sui-button","","suiEmphasis","positive","suiIcon","","suiLabeled","right labeled"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return w(s.isStandardModalVisible,p)||(s.isStandardModalVisible=p),p}),i(1,"div",1)(2,"div",2),r(3,"img",3),t(),i(4,"div",4)(5,"div",5),e(6,"We've auto-chosen a profile image for you."),t(),i(7,"p"),e(8,"We've grabbed the following image from the "),i(9,"a",6),e(10,"gravatar"),t(),e(11," image associated with your registered e-mail address."),t(),i(12,"p"),e(13,"Is it okay to use this photo?"),t()()(),i(14,"div",7)(15,"div",8),e(16," Nope "),t(),i(17,"div",9),e(18," Yep, that's me "),r(19,"i",10),t()()()),a&2&&D("visible",s.isStandardModalVisible)},dependencies:[Mt,E,T,g,_e,Oe,$e,et],encapsulation:2})}}return n})(),$s=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-basic-example"]],standalone:!1,features:[x],decls:11,vars:1,consts:[["suiBasic","","suiHeaderIcon","archive","suiHeaderText","Archive Old Messages",3,"visibleChange","visible"],["sui-image","","suiModalContent",""],["suiModalActions",""],["sui-button","","suiBasic","","suiInverted","","suiColour","red"],["sui-icon","","suiIconType","remove"],["sui-button","","suiInverted","","suiColour","green",3,"click"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return w(s.isBasicModalVisible,p)||(s.isBasicModalVisible=p),p}),i(1,"div",1)(2,"p"),e(3,"Your inbox is getting full, would you like us to enable automatic archiving of old messages?"),t()(),i(4,"div",2)(5,"div",3),r(6,"i",4),e(7," No "),t(),i(8,"div",5),v("click",function(){return s.isStandardModalVisible=!1}),r(9,"i",6),e(10," Yes "),t()()()),a&2&&D("visible",s.isBasicModalVisible)},dependencies:[T,g,_e,Oe,$e,et],encapsulation:2})}}return n})(),er=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-full-screen-example"]],standalone:!1,features:[x],decls:17,vars:2,consts:[["suiFullScreen","","suiHeaderText","Update Your Settings",3,"visibleChange","visible"],["suiModalContent",""],["sui-form",""],["sui-header","","suiDividing",""],["suiFormField",""],[3,"checked"],["suiModalActions",""],["sui-button",""],["sui-button","","suiEmphasis","positive"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return w(s.isFullScreenModalVisible,p)||(s.isFullScreenModalVisible=p),p}),i(1,"div",1)(2,"div",2)(3,"h4",3),e(4,"Give us your feedback"),t(),i(5,"div",4)(6,"label"),e(7,"Feedback"),t(),r(8,"textarea"),t(),i(9,"div",4)(10,"sui-checkbox",5),e(11,"It's okay to contact me."),t()()()(),i(12,"div",6)(13,"div",7),e(14," Cancel "),t(),i(15,"div",8),e(16," Send "),t()()()),a&2&&(D("visible",s.isFullScreenModalVisible),d(10),l("checked",!0))},dependencies:[mt,pt,E,T,Oe,$e,et,ae],encapsulation:2})}}return n})(),tr=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-size-example"]],standalone:!1,features:[x],decls:10,vars:1,consts:[["suiSize","mini","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return w(s.isSizeModalVisible,p)||(s.isSizeModalVisible=p),p}),i(1,"div",1)(2,"p"),e(3,"Are you sure you want to delete your account"),t()(),i(4,"div",2)(5,"div",3),e(6," No "),t(),i(7,"div",4),e(8," Yes "),r(9,"i",5),t()()()),a&2&&D("visible",s.isSizeModalVisible)},dependencies:[T,g,Oe,$e,et],encapsulation:2})}}return n})(),ir=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-scrolling-example"]],standalone:!1,features:[x],decls:15,vars:1,consts:[["suiHeaderText","Profile Picture",3,"visibleChange","visible"],["suiModalContent","","suiScrollable","","suiImage",""],["sui-image","","suiSize","medium"],["src","/assets/images/wireframes/image.png"],["suiModalDescription",""],["sui-header",""],["sui-image","","src","/assets/images/wireframes/paragraph.png"],["suiModalActions",""],["sui-button","","suiEmphasis","secondary",1,"black","deny",3,"click"],["sui-divider",""]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return w(s.isScrollingModalVisible,p)||(s.isScrollingModalVisible=p),p}),i(1,"div",1)(2,"div",2),r(3,"img",3),t(),i(4,"div",4)(5,"div",5),e(6,"Modal Header"),t(),i(7,"p"),e(8,"This is an example of expanded content that will cause the modal's dimmer to scroll"),t(),r(9,"img",6),Ue(10,G0,2,0,null,null,Ne),t()(),i(12,"div",7)(13,"div",8),v("click",function(){return s.isScrollingModalVisible=!1}),e(14," Close "),t()()()),a&2&&(D("visible",s.isScrollingModalVisible),d(10),Ge(s.dummyList))},dependencies:[E,T,be,_e,Oe,$e,et,qs],encapsulation:2})}}return n})(),nr=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-closable-example"]],standalone:!1,features:[x],decls:10,vars:1,consts:[["suiClosable","false","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return w(s.isClosableModalVisible,p)||(s.isClosableModalVisible=p),p}),i(1,"div",1)(2,"p"),e(3,"Are you sure you want to delete your account"),t()(),i(4,"div",2)(5,"div",3),e(6," No "),t(),i(7,"div",4),e(8," Yes "),r(9,"i",5),t()()()),a&2&&D("visible",s.isClosableModalVisible)},dependencies:[T,g,Oe,$e,et],encapsulation:2})}}return n})(),or=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-mask-closable-example"]],standalone:!1,features:[x],decls:10,vars:1,consts:[["suiMaskClosable","false","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return w(s.isMaskClosableModalVisible,p)||(s.isMaskClosableModalVisible=p),p}),i(1,"div",1)(2,"p"),e(3,"Are you sure you want to delete your account"),t()(),i(4,"div",2)(5,"div",3),e(6," No "),t(),i(7,"div",4),e(8," Yes "),r(9,"i",5),t()()()),a&2&&D("visible",s.isMaskClosableModalVisible)},dependencies:[T,g,Oe,$e,et],encapsulation:2})}}return n})();function J0(n,m){n&1&&r(0,"doc-modal-standard-example")}function X0(n,m){n&1&&r(0,"doc-modal-basic-example")}function q0(n,m){n&1&&r(0,"doc-modal-full-screen-example")}function K0(n,m){n&1&&r(0,"doc-modal-size-example")}function Q0(n,m){n&1&&r(0,"doc-modal-scrolling-example")}function Z0(n,m){n&1&&r(0,"doc-modal-closable-example")}function $0(n,m){n&1&&r(0,"doc-modal-mask-closable-example")}function ec(n,m){if(n&1){let o=ne();i(0,"div")(1,"h2",2),e(2,"States"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Modal"),t(),i(6,"p"),e(7,"A standard modal"),t(),i(8,"button",5),v("click",function(){C(o);let s=f();return y(s.isStandardModalVisible=!0)}),e(9,"Show Modal"),t(),c(10,J0,1,0,"ng-template",6),t(),i(11,"doc-code-sample",3)(12,"h3",4),e(13,"Basic"),t(),i(14,"p"),e(15,"A modal can reduce its complexity"),t(),i(16,"button",5),v("click",function(){C(o);let s=f();return y(s.isBasicModalVisible=!0)}),e(17,"Show Modal"),t(),c(18,X0,1,0,"ng-template",6),t(),i(19,"h2",2),e(20,"Variations"),t(),i(21,"doc-code-sample",3)(22,"h3",4),e(23,"Full Screen"),t(),i(24,"p"),e(25,"A modal can use the entire size of the screen"),t(),i(26,"button",5),v("click",function(){C(o);let s=f();return y(s.isFullScreenModalVisible=!0)}),e(27,"Show Modal"),t(),c(28,q0,1,0,"ng-template",6),t(),i(29,"doc-code-sample",3)(30,"h3",4),e(31,"Size"),t(),i(32,"p"),e(33,"A modal can vary in size"),t(),i(34,"button",5),v("click",function(){C(o);let s=f();return y(s.isSizeModalVisible=!0)}),e(35,"Show Modal"),t(),c(36,K0,1,0,"ng-template",6),t(),i(37,"doc-code-sample",3)(38,"h3",4),e(39,"Scrolling Content"),t(),i(40,"p"),e(41,"A modal can use the entire size of the screen."),t(),i(42,"button",5),v("click",function(){C(o);let s=f();return y(s.isScrollingModalVisible=!0)}),e(43,"Show Modal"),t(),c(44,Q0,1,0,"ng-template",6),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Closable"),t(),i(48,"p"),e(49,"By default, a modal is rendered with a close icon in the top right corner. The modal can be rendered without the close button"),t(),i(50,"button",5),v("click",function(){C(o);let s=f();return y(s.isClosableModalVisible=!0)}),e(51,"Show Modal"),t(),c(52,Z0,1,0,"ng-template",6),t(),i(53,"doc-code-sample",3)(54,"h3",4),e(55,"Mask Closable"),t(),i(56,"p"),e(57,"By default, a modal can be closed by clicking on the background. If that isn't the desired behaviour, that is configurable"),t(),i(58,"button",5),v("click",function(){C(o);let s=f();return y(s.isMaskClosableModalVisible=!0)}),e(59,"Show Modal"),t(),c(60,$0,1,0,"ng-template",6),t()()}if(n&2){let o=f();d(3),l("templateCode",o.snippetStandard)("componentCode",o.snippetStandardTs),d(8),l("templateCode",o.snippetBasic)("componentCode",o.snippetBasicTs),d(10),l("templateCode",o.snippetFullScreen)("componentCode",o.snippetFullScreenTs),d(8),l("templateCode",o.snippetSize)("componentCode",o.snippetSizeTs),d(8),l("templateCode",o.snippetScrolling)("componentCode",o.snippetScrollingTs),d(8),l("templateCode",o.snippetClosable)("componentCode",o.snippetClosableTs),d(8),l("templateCode",o.snippetMaskClosable)("componentCode",o.snippetMaskClosableTs)}}function tc(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-modal"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiHeaderText"),t(),i(20,"td"),e(21,"The modal header"),t(),i(22,"td")(23,"div",8),e(24," string "),t()(),i(25,"td")(26,"div",9),e(27," null "),t()()(),i(28,"tr")(29,"td"),e(30,"suiHeaderIcon"),t(),i(31,"td"),e(32,"The modal header icon type"),t(),i(33,"td")(34,"div",8),e(35," string "),t()(),i(36,"td")(37,"div",9),e(38," null "),t()()(),i(39,"tr")(40,"td"),e(41,"suiSize"),t(),i(42,"td"),e(43," Set the modal's size. Allowed values could be "),i(44,"span",10),e(45,"mini"),t(),e(46," | "),i(47,"span",10),e(48,"tiny"),t(),e(49," | "),i(50,"span",10),e(51,"small"),t(),e(52," | "),i(53,"span",10),e(54,"large"),t(),e(55," | "),i(56,"span",10),e(57,"null"),t()(),i(58,"td")(59,"div",8),e(60," string "),t()(),i(61,"td")(62,"div",9),e(63," null "),t()()(),i(64,"tr")(65,"td"),e(66,"suiScroll"),t(),i(67,"td"),e(68," Determines if the modal is scrollable. Allowed values could be "),i(69,"span",10),e(70,"full"),t(),e(71," | "),i(72,"span",10),e(73,"medium"),t(),e(74," | "),i(75,"span",10),e(76,"none"),t()(),i(77,"td")(78,"div",8),e(79," string "),t()(),i(80,"td")(81,"div",9),e(82," none "),t()()(),i(83,"tr")(84,"td"),e(85,"suiBasic"),t(),i(86,"td"),e(87,"Determines if the modal is rendered as basic"),t(),i(88,"td")(89,"div",8),e(90," boolean "),t()(),i(91,"td")(92,"div",9),e(93," false "),t()()(),i(94,"tr")(95,"td"),e(96,"suiClosable"),t(),i(97,"td"),e(98,"Determines if the close icon is rendered on the modal"),t(),i(99,"td")(100,"div",8),e(101," boolean "),t()(),i(102,"td")(103,"div",9),e(104," true "),t()()(),i(105,"tr")(106,"td"),e(107,"suiCentered"),t(),i(108,"td"),e(109,"Determines if the modal is rendered vertically centered"),t(),i(110,"td")(111,"div",8),e(112," boolean "),t()(),i(113,"td")(114,"div",9),e(115," true "),t()()(),i(116,"tr")(117,"td"),e(118,"suiBlurring"),t(),i(119,"td"),e(120,"Determines if the modal uses a dimmer background"),t(),i(121,"td")(122,"div",8),e(123," boolean "),t()(),i(124,"td")(125,"div",9),e(126," false "),t()()(),i(127,"tr")(128,"td"),e(129,"suiFullScreen"),t(),i(130,"td"),e(131,"Determines if the modal is rendered to fill the screen horizontally"),t(),i(132,"td")(133,"div",8),e(134," boolean "),t()(),i(135,"td")(136,"div",9),e(137," false "),t()()(),i(138,"tr")(139,"td"),e(140,"suiMaskClosable"),t(),i(141,"td"),e(142,"Determines if the modal is dismissable by clicking on the background"),t(),i(143,"td")(144,"div",8),e(145," boolean "),t()(),i(146,"td")(147,"div",9),e(148," true "),t()()(),i(149,"tr")(150,"td"),e(151,"visible"),t(),i(152,"td"),e(153,"Determines if the modal is visible or not"),t(),i(154,"td")(155,"div",8),e(156," boolean "),t()(),i(157,"td")(158,"div",9),e(159," false "),t()()()()(),i(160,"h4",4),e(161,"Events"),t(),i(162,"table",7)(163,"thead")(164,"tr")(165,"th"),e(166,"Property"),t(),i(167,"th"),e(168,"Description"),t(),i(169,"th"),e(170,"Type"),t()()(),i(171,"tbody")(172,"tr")(173,"td"),e(174,"visibleChange"),t(),i(175,"td"),e(176,"Fired when a the modal's visibility changes "),t(),i(177,"td")(178,"div",8),e(179," boolean "),t()()()()(),i(180,"h2",2),e(181,"suiModalContent"),t(),i(182,"h4",4),e(183,"Properties"),t(),i(184,"table",7)(185,"thead")(186,"tr")(187,"th"),e(188,"Property"),t(),i(189,"th"),e(190,"Description"),t(),i(191,"th"),e(192,"Type"),t(),i(193,"th"),e(194,"Default"),t()()(),i(195,"tbody")(196,"tr")(197,"td"),e(198,"suiImage"),t(),i(199,"td"),e(200,"Determines if the content can contain an image "),t(),i(201,"td")(202,"div",8),e(203," boolean "),t()(),i(204,"td")(205,"div",9),e(206," false "),t()()(),i(207,"tr")(208,"td"),e(209,"suiScrollable"),t(),i(210,"td"),e(211,"Determines if the content is scrollable or not "),t(),i(212,"td")(213,"div",8),e(214," boolean "),t()(),i(215,"td")(216,"div",9),e(217," false "),t()()()()(),i(218,"h2",2),e(219,"suiModalActions"),t(),i(220,"h4",4),e(221,"Properties"),t(),i(222,"table",7)(223,"thead")(224,"tr")(225,"th"),e(226,"Property"),t(),i(227,"th"),e(228,"Description"),t(),i(229,"th"),e(230,"Type"),t(),i(231,"th"),e(232,"Default"),t()()(),r(233,"tbody"),i(234,"tfoot",11)(235,"tr")(236,"th",12)(237,"div",13),e(238,"No properties for this directive"),t()()()()(),i(239,"h2",2),e(240,"suiModalDescription"),t(),i(241,"h4",4),e(242,"Properties"),t(),i(243,"table",7)(244,"thead")(245,"tr")(246,"th"),e(247,"Property"),t(),i(248,"th"),e(249,"Description"),t(),i(250,"th"),e(251,"Type"),t(),i(252,"th"),e(253,"Default"),t()()(),r(254,"tbody"),i(255,"tfoot",11)(256,"tr")(257,"th",12)(258,"div",13),e(259,"No properties for this directive"),t()()()()()())}var ar=(()=>{class n{constructor(o){this.snippetStandard=Bs,this.snippetStandardTs=Ls,this.snippetBasic=Hs,this.snippetBasicTs=Ws,this.snippetFullScreen=Os,this.snippetFullScreenTs=Rs,this.snippetSize=zs,this.snippetSizeTs=js,this.snippetScrolling=Ns,this.snippetScrollingTs=Us,this.snippetClosable=Gs,this.snippetClosableTs=Ys,this.snippetMaskClosable=Js,this.snippetMaskClosableTs=Xs,this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((a,s)=>s),o.setTitle("Modal | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal"]],standalone:!1,decls:3,vars:2,consts:[["header","Modal","subHeader","Modals display content that temporarily blocks interactions with the main view of a site."],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-button","",3,"click"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,ec,61,14,"div",1)(2,tc,260,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,T,Zs,$s,er,tr,ir,nr,or],encapsulation:2})}}return n})();var sr=`<sui-dropdown>
  <div class="text">File</div>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>
      <span class="description">ctrl + o</span>
      Open...
    </div>
    <div suiDropdownMenuItem>
      <span class="description">ctrl + s</span>
      Save as...
    </div>
    <div suiDropdownMenuItem>
      <span class="description">ctrl + r</span>
      Rename
    </div>
    <div suiDropdownMenuItem>Make a copy</div>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="folder"></i>
      Move to folder
    </div>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="trash"></i>
      Move to trash
    </div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuItem>Download As...</div>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="dropdown"></i>
      Publish To Web
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>Google Docs</div>
        <div suiDropdownMenuItem>Google Drive</div>
        <div suiDropdownMenuItem>Dropbox</div>
        <div suiDropdownMenuItem>Adobe Creative Cloud</div>
        <div suiDropdownMenuItem>Private FTP</div>
        <div suiDropdownMenuItem>Another Service...</div>
      </div>
    </div>
    <div suiDropdownMenuItem>E-mail Collaborators</div>
  </div>
</sui-dropdown>
`;var rr=`<span>
  Show me posts by
  <sui-dropdown suiInline>
    <div class="text">
      <img sui-image suiAvatar src="/assets/images/jenny.jpg" alt="Jenny Hess">
      Jenny Hess
    </div>
    <i sui-icon suiIconType="dropdown"></i>
    <div suiDropdownMenu>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/jenny.jpg" alt="Jenny Hess">
        Jenny Hess
      </div>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/elliot.jpg" alt="Elliot Fu">
        Elliot Fu
      </div>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/stevie.jpg" alt="Stevie Feliciano">
        Stevie Feliciano
      </div>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/matt.jpg" alt="Matt">
        Matt
      </div>
      <div suiDropdownMenuItem>
        <img sui-image suiAvatar src="/assets/images/justen.jpg" alt="Justen Kitsune">
        Justen Kitsune
      </div>
    </div>
  </sui-dropdown>
</span>
`;var lr=`<sui-dropdown suiPointing
              class="link item">
  <span class="text">Home</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Shopping</div>
    <div suiDropdownMenuItem>Categories</div>
    <div suiDropdownMenuItem>Order</div>
  </div>
</sui-dropdown>

<sui-dropdown suiPointing
              suiPointingDirection="top left"
              class="button">
  <span class="text">Top Left</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>Open...</div>
    <div suiDropdownMenuItem>Save as...</div>
  </div>
</sui-dropdown>

<sui-dropdown suiPointing
              suiPointingDirection="top right"
              class="button">
  <span class="text">Top Right</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>Open...</div>
    <div suiDropdownMenuItem>Save as...</div>
  </div>
</sui-dropdown>

<sui-dropdown suiPointing
              suiPointingDirection="left"
              class="button">
  <span class="text">Left</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>Open...</div>
    <div suiDropdownMenuItem>Save as...</div>
  </div>
</sui-dropdown>

<sui-dropdown suiPointing
              suiPointingDirection="right"
              class="button">
  <span class="text">Right</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>New</div>
    <div suiDropdownMenuItem>Open...</div>
    <div suiDropdownMenuItem>Save as...</div>
  </div>
</sui-dropdown>
`;var dr=`<sui-dropdown suiFloating
              class="labeled icon button">
  <i sui-icon suiIconType="filter"></i>
  <span class="text">Filter Posts</span>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Edit Post</div>
    <div suiDropdownMenuItem>Remove Post</div>
    <div suiDropdownMenuItem>Hide Post</div>
  </div>
</sui-dropdown>
`;var mr=`<sui-dropdown suiSimple>
  Dropdown
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var pr=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var ur=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var cr=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>
      <i sui-icon suiIconType="tags"></i>
      Filter by tag
    </div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var hr=`<sui-dropdown>
  <span class="text">Filter Tags</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu
       style="min-width: 15rem">
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>
      <span class="description">2 new</span>
      Important
    </div>
    <div suiDropdownMenuItem>
      <span class="description">10 new</span>
      Hopper
    </div>
    <div suiDropdownMenuItem>
      <span class="description">5 new</span>
      Discussion
    </div>
  </div>
</sui-dropdown>
`;var Sr=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>
      <div sui-label suiColour="red" suiEmpty suiCircular></div>
      Important
    </div>
    <div suiDropdownMenuItem>
      <div sui-label suiColour="blue" suiEmpty suiCircular></div>
      Announcement
    </div>
    <div suiDropdownMenuItem>
      <div sui-label suiColour="black" suiEmpty suiCircular></div>
      Discussion
    </div>
  </div>
</sui-dropdown>
`;var xr=`<sui-dropdown>
  <span class="text">Login</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div sui-message suiState="error">
      <div suiMessageHeader>Error</div>
      <p>You must log-in to see all categories</p>
    </div>
  </div>
</sui-dropdown>
`;var vr=`<sui-dropdown suiFluid
              class="selection">
  <span class="text">Select Type</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>
      <span class="right floated">
        <i sui-icon suiIconType="exclamation"></i>
      </span>
      Important
    </div>
    <div suiDropdownMenuItem>
      <span class="right floated">
        <i sui-icon suiIconType="bullhorn"></i>
      </span>
      Announcement
    </div>
    <div suiDropdownMenuItem>
      <span class="right floated">
        <i sui-icon suiIconType="comments"></i>
      </span>
      Discussion
    </div>
  </div>
</sui-dropdown>
`;var gr=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div class="ui icon search input"
         (click)="$event.stopPropagation()">
      <i sui-icon suiIconType="search"></i>
      <input type="text"
             placeholder="Search issues...">
    </div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var fr=`<sui-dropdown>
  <span class="text">Add User</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>People You Might Know</div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/jenny.jpg" alt="Jenny Hess">
      Jenny Hess
    </div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/elliot.jpg" alt="Elliot Fu">
      Elliot Fu
    </div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/stevie.jpg" alt="Stevie Feliciano">
      Stevie Feliciano
    </div>
    <div suiDropdownMenuDivider></div>
    <div suiDropdownMenuHeader>Your Friends' Friends</div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/matt.jpg" alt="Matt">
      Matt
    </div>
    <div suiDropdownMenuItem>
      <img sui-image suiAvatar src="/assets/images/justen.jpg" alt="Justen Kitsune">
      Justen Kitsune
    </div>
  </div>
</sui-dropdown>
`;var br=`<sui-dropdown suiLoading>
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var Er=`<sui-dropdown suiError
              class="selection">
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var Cr=`<sui-dropdown disabled>
  <span class="text">Disabled Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>

<sui-dropdown>
  <span class="text">Disabled Item</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem disabled>Disabled</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var yr=`<sui-dropdown>
  <span class="text">Select choice</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu suiScrolling>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
    <div suiDropdownMenuItem>Choice 4</div>
    <div suiDropdownMenuItem>Choice 5</div>
    <div suiDropdownMenuItem>Choice 6</div>
    <div suiDropdownMenuItem>Choice 7</div>
    <div suiDropdownMenuItem>Choice 8</div>
    <div suiDropdownMenuItem>Choice 9</div>
    <div suiDropdownMenuItem>Choice 10</div>
    <div suiDropdownMenuItem>Choice 11</div>
    <div suiDropdownMenuItem>Choice 12</div>
    <div suiDropdownMenuItem>Choice 13</div>
    <div suiDropdownMenuItem>Choice 14</div>
    <div suiDropdownMenuItem>Choice 15</div>
  </div>
</sui-dropdown>
`;var Dr=`<sui-dropdown suiCompact
              class="selection">
  <span class="text">Compact</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>A</div>
    <div suiDropdownMenuItem>B</div>
    <div suiDropdownMenuItem>C</div>
  </div>
</sui-dropdown>
`;var wr=`<sui-dropdown suiFluid
              class="selection">
  <span class="text">All Sections</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var _r=`<sui-dropdown>
  <span class="text">Menu</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="dropdown"></i>
      Right
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>1</div>
        <div suiDropdownMenuItem>2</div>
        <div suiDropdownMenuItem>3</div>
      </div>
    </div>
    <div suiDropdownMenuItem suiDirection="left">
      <i sui-icon suiIconType="dropdown"></i>
      Left
      <div suiDropdownMenu suiDirection="left">
        <div suiDropdownMenuItem>1</div>
        <div suiDropdownMenuItem>2</div>
        <div suiDropdownMenuItem>3</div>
      </div>
    </div>
  </div>
</sui-dropdown>

<sui-dropdown>
  <span class="text">Left Menu</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu suiDirection="left">
    <div suiDropdownMenuItem>1</div>
    <div suiDropdownMenuItem>2</div>
    <div suiDropdownMenuItem>3</div>
  </div>
</sui-dropdown>
`;var Tr=`<sui-dropdown>
  <span class="text">Filter Posts</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="dropdown"></i>
      Filter by tag
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>Important</div>
        <div suiDropdownMenuItem>Announcement</div>
        <div suiDropdownMenuItem>Discussion</div>
      </div>
    </div>
    <div suiDropdownMenuItem>
      <i sui-icon suiIconType="dropdown"></i>
      Filter by date
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>This Week</div>
        <div suiDropdownMenuItem>This Month</div>
        <div suiDropdownMenuItem>This Year</div>
      </div>
    </div>
  </div>
</sui-dropdown>
`;var Mr=`<div sui-buttons suiColour="teal">
  <div sui-button>Save</div>
  <sui-dropdown suiFloating
                class="button icon">
    <i sui-icon suiIconType="dropdown"></i>
    <div suiDropdownMenu>
      <div suiDropdownMenuItem>
        <i sui-icon suiIconType="edit"></i>
        Edit Post
      </div>
      <div suiDropdownMenuItem>
        <i sui-icon suiIconType="delete"></i>
        Remove Post
      </div>
      <div suiDropdownMenuItem>
        <i sui-icon suiIconType="hide"></i>
        Hide Post
      </div>
    </div>
  </sui-dropdown>
</div>
`;var Ir=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-dropdown-example"]],standalone:!1,decls:48,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],[1,"description"],["sui-icon","","suiIconType","folder"],["sui-icon","","suiIconType","trash"],["suiDropdownMenuDivider",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"div",0),e(2,"File"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"New"),t(),i(7,"div",3)(8,"span",4),e(9,"ctrl + o"),t(),e(10," Open... "),t(),i(11,"div",3)(12,"span",4),e(13,"ctrl + s"),t(),e(14," Save as... "),t(),i(15,"div",3)(16,"span",4),e(17,"ctrl + r"),t(),e(18," Rename "),t(),i(19,"div",3),e(20,"Make a copy"),t(),i(21,"div",3),r(22,"i",5),e(23," Move to folder "),t(),i(24,"div",3),r(25,"i",6),e(26," Move to trash "),t(),r(27,"div",7),i(28,"div",3),e(29,"Download As..."),t(),i(30,"div",3),r(31,"i",1),e(32," Publish To Web "),i(33,"div",2)(34,"div",3),e(35,"Google Docs"),t(),i(36,"div",3),e(37,"Google Drive"),t(),i(38,"div",3),e(39,"Dropbox"),t(),i(40,"div",3),e(41,"Adobe Creative Cloud"),t(),i(42,"div",3),e(43,"Private FTP"),t(),i(44,"div",3),e(45,"Another Service..."),t()()(),i(46,"div",3),e(47,"E-mail Collaborators"),t()()())},dependencies:[j,z,N,ft,g],encapsulation:2})}}return n})(),Pr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-inline-example"]],standalone:!1,decls:23,vars:0,consts:[["suiInline",""],[1,"text"],["sui-image","","suiAvatar","","src","/assets/images/jenny.jpg","alt","Jenny Hess"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["sui-image","","suiAvatar","","src","/assets/images/elliot.jpg","alt","Elliot Fu"],["sui-image","","suiAvatar","","src","/assets/images/stevie.jpg","alt","Stevie Feliciano"],["sui-image","","suiAvatar","","src","/assets/images/matt.jpg","alt","Matt"],["sui-image","","suiAvatar","","src","/assets/images/justen.jpg","alt","Justen Kitsune"]],template:function(a,s){a&1&&(i(0,"span"),e(1," Show me posts by "),i(2,"sui-dropdown",0)(3,"div",1),r(4,"img",2),e(5," Jenny Hess "),t(),r(6,"i",3),i(7,"div",4)(8,"div",5),r(9,"img",2),e(10," Jenny Hess "),t(),i(11,"div",5),r(12,"img",6),e(13," Elliot Fu "),t(),i(14,"div",5),r(15,"img",7),e(16," Stevie Feliciano "),t(),i(17,"div",5),r(18,"img",8),e(19," Matt "),t(),i(20,"div",5),r(21,"img",9),e(22," Justen Kitsune "),t()()()())},dependencies:[j,z,N,g,_e],encapsulation:2})}}return n})(),Fr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-pointing-example"]],standalone:!1,decls:55,vars:0,consts:[["suiPointing","",1,"link","item"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiPointing","","suiPointingDirection","top left",1,"button"],["suiPointing","","suiPointingDirection","top right",1,"button"],["suiPointing","","suiPointingDirection","left",1,"button"],["suiPointing","","suiPointingDirection","right",1,"button"]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Home"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Shopping"),t(),i(7,"div",4),e(8,"Categories"),t(),i(9,"div",4),e(10,"Order"),t()()(),i(11,"sui-dropdown",5)(12,"span",1),e(13,"Top Left"),t(),r(14,"i",2),i(15,"div",3)(16,"div",4),e(17,"New"),t(),i(18,"div",4),e(19,"Open..."),t(),i(20,"div",4),e(21,"Save as..."),t()()(),i(22,"sui-dropdown",6)(23,"span",1),e(24,"Top Right"),t(),r(25,"i",2),i(26,"div",3)(27,"div",4),e(28,"New"),t(),i(29,"div",4),e(30,"Open..."),t(),i(31,"div",4),e(32,"Save as..."),t()()(),i(33,"sui-dropdown",7)(34,"span",1),e(35,"Left"),t(),r(36,"i",2),i(37,"div",3)(38,"div",4),e(39,"New"),t(),i(40,"div",4),e(41,"Open..."),t(),i(42,"div",4),e(43,"Save as..."),t()()(),i(44,"sui-dropdown",8)(45,"span",1),e(46,"Right"),t(),r(47,"i",2),i(48,"div",3)(49,"div",4),e(50,"New"),t(),i(51,"div",4),e(52,"Open..."),t(),i(53,"div",4),e(54,"Save as..."),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),kr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-floating-example"]],standalone:!1,decls:11,vars:0,consts:[["suiFloating","",1,"labeled","icon","button"],["sui-icon","","suiIconType","filter"],[1,"text"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0),r(1,"i",1),i(2,"span",2),e(3,"Filter Posts"),t(),i(4,"div",3)(5,"div",4),e(6,"Edit Post"),t(),i(7,"div",4),e(8,"Remove Post"),t(),i(9,"div",4),e(10,"Hide Post"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Ar=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-simple-example"]],standalone:!1,decls:10,vars:0,consts:[["suiSimple",""],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0),e(1," Dropdown "),r(2,"i",1),i(3,"div",2)(4,"div",3),e(5,"Choice 1"),t(),i(6,"div",3),e(7,"Choice 2"),t(),i(8,"div",3),e(9,"Choice 3"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Vr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-header-example"]],standalone:!1,decls:13,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Filter by tag"),t(),i(7,"div",4),e(8,"Important"),t(),i(9,"div",4),e(10,"Announcement"),t(),i(11,"div",4),e(12,"Discussion"),t()()())},dependencies:[j,z,N,it,g],encapsulation:2})}}return n})(),Br=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-divider-example"]],standalone:!1,decls:13,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuDivider",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Important"),t(),r(7,"div",4),i(8,"div",3),e(9,"Announcement"),t(),r(10,"div",4),i(11,"div",3),e(12,"Discussion"),t()()())},dependencies:[j,z,N,ft,g],encapsulation:2})}}return n})(),Lr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-icon-example"]],standalone:!1,decls:14,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["sui-icon","","suiIconType","tags"],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",4),e(7," Filter by tag "),t(),i(8,"div",5),e(9,"Important"),t(),i(10,"div",5),e(11,"Announcement"),t(),i(12,"div",5),e(13,"Discussion"),t()()())},dependencies:[j,z,N,it,g],encapsulation:2})}}return n})(),Hr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-description-example"]],standalone:!1,decls:19,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu","",2,"min-width","15rem"],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],[1,"description"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter Tags"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Filter by tag"),t(),i(7,"div",4)(8,"span",5),e(9,"2 new"),t(),e(10," Important "),t(),i(11,"div",4)(12,"span",5),e(13,"10 new"),t(),e(14," Hopper "),t(),i(15,"div",4)(16,"span",5),e(17,"5 new"),t(),e(18," Discussion "),t()()())},dependencies:[j,z,N,it,g],encapsulation:2})}}return n})(),Wr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-label-example"]],standalone:!1,decls:16,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],["sui-label","","suiColour","red","suiEmpty","","suiCircular",""],["sui-label","","suiColour","blue","suiEmpty","","suiCircular",""],["sui-label","","suiColour","black","suiEmpty","","suiCircular",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Filter by tag"),t(),i(7,"div",4),r(8,"div",5),e(9," Important "),t(),i(10,"div",4),r(11,"div",6),e(12," Announcement "),t(),i(13,"div",4),r(14,"div",7),e(15," Discussion "),t()()())},dependencies:[F,j,z,N,it,g],encapsulation:2})}}return n})(),Or=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-message-example"]],standalone:!1,decls:10,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["sui-message","","suiState","error"],["suiMessageHeader",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Login"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3)(6,"div",4),e(7,"Error"),t(),i(8,"p"),e(9,"You must log-in to see all categories"),t()()()())},dependencies:[j,z,g,re,Di],encapsulation:2})}}return n})(),Rr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-floated-example"]],standalone:!1,decls:17,vars:0,consts:[["suiFluid","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],[1,"right","floated"],["sui-icon","","suiIconType","exclamation"],["sui-icon","","suiIconType","bullhorn"],["sui-icon","","suiIconType","comments"]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Select Type"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4)(6,"span",5),r(7,"i",6),t(),e(8," Important "),t(),i(9,"div",4)(10,"span",5),r(11,"i",7),t(),e(12," Announcement "),t(),i(13,"div",4)(14,"span",5),r(15,"i",8),t(),e(16," Discussion "),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),zr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-input-example"]],standalone:!1,decls:17,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],[1,"ui","icon","search","input",3,"click"],["sui-icon","","suiIconType","search"],["type","text","placeholder","Search issues..."],["suiDropdownMenuDivider",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),v("click",function(p){return p.stopPropagation()}),r(6,"i",4)(7,"input",5),t(),r(8,"div",6),i(9,"div",7),e(10,"Filter by tag"),t(),i(11,"div",8),e(12,"Important"),t(),i(13,"div",8),e(14,"Announcement"),t(),i(15,"div",8),e(16,"Discussion"),t()()())},dependencies:[j,z,N,it,ft,g],encapsulation:2})}}return n})(),jr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-image-example"]],standalone:!1,decls:25,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],["sui-image","","suiAvatar","","src","/assets/images/jenny.jpg","alt","Jenny Hess"],["sui-image","","suiAvatar","","src","/assets/images/elliot.jpg","alt","Elliot Fu"],["sui-image","","suiAvatar","","src","/assets/images/stevie.jpg","alt","Stevie Feliciano"],["suiDropdownMenuDivider",""],["sui-image","","suiAvatar","","src","/assets/images/matt.jpg","alt","Matt"],["sui-image","","suiAvatar","","src","/assets/images/justen.jpg","alt","Justen Kitsune"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Add User"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"People You Might Know"),t(),i(7,"div",4),r(8,"img",5),e(9," Jenny Hess "),t(),i(10,"div",4),r(11,"img",6),e(12," Elliot Fu "),t(),i(13,"div",4),r(14,"img",7),e(15," Stevie Feliciano "),t(),r(16,"div",8),i(17,"div",3),e(18,"Your Friends' Friends"),t(),i(19,"div",4),r(20,"img",9),e(21," Matt "),t(),i(22,"div",4),r(23,"img",10),e(24," Justen Kitsune "),t()()())},dependencies:[j,z,N,it,ft,g,_e],encapsulation:2})}}return n})(),Nr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-loading-example"]],standalone:!1,decls:11,vars:0,consts:[["suiLoading",""],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Dropdown"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Choice 1"),t(),i(7,"div",4),e(8,"Choice 2"),t(),i(9,"div",4),e(10,"Choice 3"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Ur=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-error-example"]],standalone:!1,decls:11,vars:0,consts:[["suiError","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Dropdown"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Choice 1"),t(),i(7,"div",4),e(8,"Choice 2"),t(),i(9,"div",4),e(10,"Choice 3"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Gr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-disabled-example"]],standalone:!1,decls:22,vars:0,consts:[["disabled",""],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuItem","","disabled",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Disabled Dropdown"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Choice 1"),t(),i(7,"div",4),e(8,"Choice 2"),t(),i(9,"div",4),e(10,"Choice 3"),t()()(),i(11,"sui-dropdown")(12,"span",1),e(13,"Disabled Item"),t(),r(14,"i",2),i(15,"div",3)(16,"div",4),e(17,"Choice 1"),t(),i(18,"div",5),e(19,"Disabled"),t(),i(20,"div",4),e(21,"Choice 3"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Yr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-scrolling-example"]],standalone:!1,decls:35,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu","","suiScrolling",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Select choice"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Choice 1"),t(),i(7,"div",3),e(8,"Choice 2"),t(),i(9,"div",3),e(10,"Choice 3"),t(),i(11,"div",3),e(12,"Choice 4"),t(),i(13,"div",3),e(14,"Choice 5"),t(),i(15,"div",3),e(16,"Choice 6"),t(),i(17,"div",3),e(18,"Choice 7"),t(),i(19,"div",3),e(20,"Choice 8"),t(),i(21,"div",3),e(22,"Choice 9"),t(),i(23,"div",3),e(24,"Choice 10"),t(),i(25,"div",3),e(26,"Choice 11"),t(),i(27,"div",3),e(28,"Choice 12"),t(),i(29,"div",3),e(30,"Choice 13"),t(),i(31,"div",3),e(32,"Choice 14"),t(),i(33,"div",3),e(34,"Choice 15"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Jr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-compact-example"]],standalone:!1,decls:11,vars:0,consts:[["suiCompact","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Compact"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"A"),t(),i(7,"div",4),e(8,"B"),t(),i(9,"div",4),e(10,"C"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Xr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-fluid-example"]],standalone:!1,decls:11,vars:0,consts:[["suiFluid","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"All Sections"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Choice 1"),t(),i(7,"div",4),e(8,"Choice 2"),t(),i(9,"div",4),e(10,"Choice 3"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),qr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-menu-direction-example"]],standalone:!1,decls:36,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuItem","","suiDirection","left"],["suiDropdownMenu","","suiDirection","left"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Menu"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",1),e(7," Right "),i(8,"div",2)(9,"div",3),e(10,"1"),t(),i(11,"div",3),e(12,"2"),t(),i(13,"div",3),e(14,"3"),t()()(),i(15,"div",4),r(16,"i",1),e(17," Left "),i(18,"div",5)(19,"div",3),e(20,"1"),t(),i(21,"div",3),e(22,"2"),t(),i(23,"div",3),e(24,"3"),t()()()()(),i(25,"sui-dropdown")(26,"span",0),e(27,"Left Menu"),t(),r(28,"i",1),i(29,"div",5)(30,"div",3),e(31,"1"),t(),i(32,"div",3),e(33,"2"),t(),i(34,"div",3),e(35,"3"),t()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Kr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-multiple-levels-example"]],standalone:!1,decls:25,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter Posts"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",1),e(7," Filter by tag "),i(8,"div",2)(9,"div",3),e(10,"Important"),t(),i(11,"div",3),e(12,"Announcement"),t(),i(13,"div",3),e(14,"Discussion"),t()()(),i(15,"div",3),r(16,"i",1),e(17," Filter by date "),i(18,"div",2)(19,"div",3),e(20,"This Week"),t(),i(21,"div",3),e(22,"This Month"),t(),i(23,"div",3),e(24,"This Year"),t()()()()())},dependencies:[j,z,N,g],encapsulation:2})}}return n})(),Qr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-button-group-example"]],standalone:!1,decls:15,vars:0,consts:[["sui-buttons","","suiColour","teal"],["sui-button",""],["suiFloating","",1,"button","icon"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["sui-icon","","suiIconType","edit"],["sui-icon","","suiIconType","delete"],["sui-icon","","suiIconType","hide"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1),e(2,"Save"),t(),i(3,"sui-dropdown",2),r(4,"i",3),i(5,"div",4)(6,"div",5),r(7,"i",6),e(8," Edit Post "),t(),i(9,"div",5),r(10,"i",7),e(11," Remove Post "),t(),i(12,"div",5),r(13,"i",8),e(14," Hide Post "),t()()()())},dependencies:[T,oe,j,z,N,g],encapsulation:2})}}return n})();function _c(n,m){n&1&&r(0,"doc-dropdown-dropdown-example")}function Tc(n,m){n&1&&r(0,"doc-dropdown-inline-example")}function Mc(n,m){n&1&&r(0,"doc-dropdown-pointing-example")}function Ic(n,m){n&1&&r(0,"doc-dropdown-floating-example")}function Pc(n,m){n&1&&r(0,"doc-dropdown-simple-example")}function Fc(n,m){n&1&&r(0,"doc-dropdown-header-example")}function kc(n,m){n&1&&r(0,"doc-dropdown-divider-example")}function Ac(n,m){n&1&&r(0,"doc-dropdown-icon-example")}function Vc(n,m){n&1&&r(0,"doc-dropdown-description-example")}function Bc(n,m){n&1&&r(0,"doc-dropdown-label-example")}function Lc(n,m){n&1&&r(0,"doc-dropdown-message-example")}function Hc(n,m){n&1&&r(0,"doc-dropdown-floated-example")}function Wc(n,m){n&1&&r(0,"doc-dropdown-input-example")}function Oc(n,m){n&1&&r(0,"doc-dropdown-image-example")}function Rc(n,m){n&1&&r(0,"doc-dropdown-loading-example")}function zc(n,m){n&1&&r(0,"doc-dropdown-error-example")}function jc(n,m){n&1&&r(0,"doc-dropdown-disabled-example")}function Nc(n,m){n&1&&r(0,"doc-dropdown-scrolling-example")}function Uc(n,m){n&1&&r(0,"doc-dropdown-compact-example")}function Gc(n,m){n&1&&r(0,"doc-dropdown-fluid-example")}function Yc(n,m){n&1&&r(0,"doc-dropdown-menu-direction-example")}function Jc(n,m){n&1&&r(0,"doc-dropdown-multiple-levels-example")}function Xc(n,m){n&1&&r(0,"doc-dropdown-button-group-example")}function qc(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Dropdown"),t(),i(6,"p"),e(7,"A dropdown."),t(),i(8,"div",5),r(9,"i",6),i(10,"div",7)(11,"p"),e(12,"A dropdown opens its menu when clicked. To pick a value in a form, use the selection dropdown provided by "),i(13,"a",8),e(14,"sui-select"),t(),e(15," instead."),t()()(),c(16,_c,1,0,"ng-template",9),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Inline"),t(),i(20,"p"),e(21,"A dropdown can be formatted to appear inline in other content."),t(),c(22,Tc,1,0,"ng-template",9),t(),i(23,"doc-code-sample",3)(24,"h3",4),e(25,"Pointing"),t(),i(26,"p"),e(27,"A dropdown can be formatted so that its menu is pointing."),t(),i(28,"div",5),r(29,"i",6),i(30,"div",7)(31,"p"),e(32,"Set "),i(33,"span",10),e(34,"suiPointing"),t(),e(35," to enable the pointing arrow, and optionally "),i(36,"span",10),e(37,"suiPointingDirection"),t(),e(38," to choose where the arrow sits."),t()()(),c(39,Mc,1,0,"ng-template",9),t(),i(40,"doc-code-sample",3)(41,"h3",4),e(42,"Floating"),t(),i(43,"p"),e(44,"A dropdown menu can appear to be floating below an element."),t(),c(45,Ic,1,0,"ng-template",9),t(),i(46,"doc-code-sample",3)(47,"h3",4),e(48,"Simple"),t(),i(49,"p"),e(50,"A simple dropdown can open on hover using only CSS."),t(),c(51,Pc,1,0,"ng-template",9),t(),i(52,"h2",2),e(53,"Content"),t(),i(54,"doc-code-sample",3)(55,"h3",4),e(56,"Header"),t(),i(57,"p"),e(58,"A dropdown menu can contain a header."),t(),c(59,Fc,1,0,"ng-template",9),t(),i(60,"doc-code-sample",3)(61,"h3",4),e(62,"Divider"),t(),i(63,"p"),e(64,"A dropdown menu can contain dividers to separate related content."),t(),c(65,kc,1,0,"ng-template",9),t(),i(66,"doc-code-sample",3)(67,"h3",4),e(68,"Icon"),t(),i(69,"p"),e(70,"A dropdown menu can contain an "),i(71,"a",11),e(72,"icon"),t(),e(73,"."),t(),c(74,Ac,1,0,"ng-template",9),t(),i(75,"doc-code-sample",3)(76,"h3",4),e(77,"Description"),t(),i(78,"p"),e(79,"A dropdown menu can contain a description."),t(),i(80,"div",5),r(81,"i",6),i(82,"div",7)(83,"p"),e(84,"Using a description may require setting a minimum width on the menu to prevent content overlap."),t()()(),c(85,Vc,1,0,"ng-template",9),t(),i(86,"doc-code-sample",3)(87,"h3",4),e(88,"Label"),t(),i(89,"p"),e(90,"A dropdown menu can contain a "),i(91,"a",12),e(92,"label"),t(),e(93,"."),t(),c(94,Bc,1,0,"ng-template",9),t(),i(95,"doc-code-sample",3)(96,"h3",4),e(97,"Message"),t(),i(98,"p"),e(99,"A dropdown menu can contain a "),i(100,"a",13),e(101,"message"),t(),e(102,"."),t(),c(103,Lc,1,0,"ng-template",9),t(),i(104,"doc-code-sample",3)(105,"h3",4),e(106,"Floated Content"),t(),i(107,"p"),e(108,"A dropdown menu can contain floated content."),t(),i(109,"div",5),r(110,"i",6),i(111,"div",7)(112,"p"),e(113,"Floated content may stack to two lines without manually setting a width or using a fluid dropdown."),t()()(),c(114,Hc,1,0,"ng-template",9),t(),i(115,"doc-code-sample",3)(116,"h3",4),e(117,"Input"),t(),i(118,"p"),e(119,"A dropdown menu can contain an "),i(120,"a",14),e(121,"input"),t(),e(122,"."),t(),i(123,"div",5),r(124,"i",6),i(125,"div",7)(126,"p"),e(127,"Stop click propagation on the input so that typing or clicking it does not close the menu."),t()()(),c(128,Wc,1,0,"ng-template",9),t(),i(129,"doc-code-sample",3)(130,"h3",4),e(131,"Image"),t(),i(132,"p"),e(133,"A dropdown menu can contain an "),i(134,"a",15),e(135,"image"),t(),e(136,"."),t(),c(137,Oc,1,0,"ng-template",9),t(),i(138,"h2",2),e(139,"States"),t(),i(140,"doc-code-sample",3)(141,"h3",4),e(142,"Loading"),t(),i(143,"p"),e(144,"A dropdown can show that it is currently loading data."),t(),c(145,Rc,1,0,"ng-template",9),t(),i(146,"doc-code-sample",3)(147,"h3",4),e(148,"Error"),t(),i(149,"p"),e(150,"An errored dropdown can alert a user to a problem."),t(),c(151,zc,1,0,"ng-template",9),t(),i(152,"doc-code-sample",3)(153,"h3",4),e(154,"Disabled"),t(),i(155,"p"),e(156,"A disabled dropdown menu or item does not allow user interaction."),t(),c(157,jc,1,0,"ng-template",9),t(),i(158,"h2",2),e(159,"Variations"),t(),i(160,"doc-code-sample",3)(161,"h3",4),e(162,"Scrolling"),t(),i(163,"p"),e(164,"A dropdown can have its menu scroll."),t(),i(165,"div",5),r(166,"i",6),i(167,"div",7)(168,"p"),e(169,"Scrolling dropdowns are incompatible with the usage of sub menus."),t()()(),c(170,Nc,1,0,"ng-template",9),t(),i(171,"doc-code-sample",3)(172,"h3",4),e(173,"Compact"),t(),i(174,"p"),e(175,"A compact dropdown has no minimum width."),t(),c(176,Uc,1,0,"ng-template",9),t(),i(177,"doc-code-sample",3)(178,"h3",4),e(179,"Fluid"),t(),i(180,"p"),e(181,"A dropdown can take the full width of its parent."),t(),c(182,Gc,1,0,"ng-template",9),t(),i(183,"doc-code-sample",3)(184,"h3",4),e(185,"Menu Direction"),t(),i(186,"p"),e(187,"A dropdown menu or sub-menu can specify the direction it should open."),t(),i(188,"div",5),r(189,"i",6),i(190,"div",7)(191,"p"),e(192,"Specifying "),i(193,"span",10),e(194,"left"),t(),e(195," on a menu makes all child menus open in the same direction implicitly. To have the dropdown icon appear on the left side of a child item, set "),i(196,"span",10),e(197,"suiDirection"),t(),e(198," on the item as well."),t()()(),c(199,Yc,1,0,"ng-template",9),t(),i(200,"h2",2),e(201,"Menus"),t(),i(202,"doc-code-sample",3)(203,"h3",4),e(204,"Multiple Levels"),t(),i(205,"p"),e(206,"A dropdown menu can contain multiple levels."),t(),i(207,"div",5),r(208,"i",6),i(209,"div",7)(210,"p"),e(211,"Nest a "),i(212,"span",10),e(213,"suiDropdownMenu"),t(),e(214," inside a "),i(215,"span",10),e(216,"suiDropdownMenuItem"),t(),e(217,". The sub menu opens when the item is hovered."),t()()(),c(218,Jc,1,0,"ng-template",9),t(),i(219,"h2",2),e(220,"Coupling"),t(),i(221,"doc-code-sample",3)(222,"h3",4),e(223,"Button Group"),t(),i(224,"p"),e(225,"A dropdown can be attached to a "),i(226,"a",16),e(227,"button group"),t(),e(228,"."),t(),c(229,Xc,1,0,"ng-template",9),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetDropdown),d(14),l("templateCode",o.snippetInline),d(6),l("templateCode",o.snippetPointing),d(17),l("templateCode",o.snippetFloating),d(6),l("templateCode",o.snippetSimple),d(8),l("templateCode",o.snippetHeader),d(6),l("templateCode",o.snippetDivider),d(6),l("templateCode",o.snippetIcon),d(9),l("templateCode",o.snippetDescription),d(11),l("templateCode",o.snippetLabel),d(9),l("templateCode",o.snippetMessage),d(9),l("templateCode",o.snippetFloated),d(11),l("templateCode",o.snippetInput),d(14),l("templateCode",o.snippetImage),d(11),l("templateCode",o.snippetLoading),d(6),l("templateCode",o.snippetError),d(6),l("templateCode",o.snippetDisabled),d(8),l("templateCode",o.snippetScrolling),d(11),l("templateCode",o.snippetCompact),d(6),l("templateCode",o.snippetFluid),d(6),l("templateCode",o.snippetMenuDirection),d(19),l("templateCode",o.snippetMultipleLevels),d(19),l("templateCode",o.snippetButtonGroup)}}function Kc(n,m){n&1&&(i(0,"div")(1,"div",5),r(2,"i",6),i(3,"div",7)(4,"p"),e(5," Import "),i(6,"span",10),e(7,"SuiDropdownModule"),t(),e(8," from "),i(9,"span",10),e(10,"ngx-semantic/modules/dropdown"),t(),e(11," to use the component and every directive below. Looking for the selection dropdown? See "),i(12,"a",8),e(13,"Select"),t(),e(14,". "),t()()(),i(15,"h2",2),e(16,"sui-dropdown"),t(),i(17,"p"),e(18,"Selector: "),i(19,"span",10),e(20,"sui-dropdown, [sui-dropdown]"),t(),e(21,". Clicking the dropdown toggles its "),i(22,"span",10),e(23,"suiDropdownMenu"),t(),e(24,". The dropdown is focusable and does nothing when disabled."),t(),i(25,"h4",4),e(26,"Properties"),t(),i(27,"table",17)(28,"thead")(29,"tr")(30,"th"),e(31,"Property"),t(),i(32,"th"),e(33,"Description"),t(),i(34,"th"),e(35,"Type"),t(),i(36,"th"),e(37,"Default"),t()()(),i(38,"tbody")(39,"tr")(40,"td"),e(41,"suiPointing"),t(),i(42,"td"),e(43,"When true, renders the dropdown menu with a pointing arrow."),t(),i(44,"td")(45,"div",18),e(46," boolean "),t()(),i(47,"td")(48,"div",19),e(49," false "),t()()(),i(50,"tr")(51,"td"),e(52,"suiPointingDirection"),t(),i(53,"td"),e(54,"Sets where the pointing arrow sits. Use together with "),i(55,"span",10),e(56,"suiPointing"),t(),e(57,". Allowed values are "),i(58,"span",10),e(59,"top left"),t(),e(60," | "),i(61,"span",10),e(62,"top right"),t(),e(63," | "),i(64,"span",10),e(65,"left"),t(),e(66," | "),i(67,"span",10),e(68,"right"),t(),e(69," | "),i(70,"span",10),e(71,"bottom left"),t(),e(72," | "),i(73,"span",10),e(74,"bottom right"),t(),e(75," | "),i(76,"span",10),e(77,"null"),t()(),i(78,"td")(79,"div",18),e(80," string "),t()(),i(81,"td")(82,"div",19),e(83," null "),t()()(),i(84,"tr")(85,"td"),e(86,"suiFluid"),t(),i(87,"td"),e(88,"When true, the dropdown takes the full width of its parent."),t(),i(89,"td")(90,"div",18),e(91," boolean "),t()(),i(92,"td")(93,"div",19),e(94," false "),t()()(),i(95,"tr")(96,"td"),e(97,"suiInline"),t(),i(98,"td"),e(99,"When true, the dropdown appears inline with surrounding content."),t(),i(100,"td")(101,"div",18),e(102," boolean "),t()(),i(103,"td")(104,"div",19),e(105," false "),t()()(),i(106,"tr")(107,"td"),e(108,"suiLoading"),t(),i(109,"td"),e(110,"When true, shows that the dropdown is loading data."),t(),i(111,"td")(112,"div",18),e(113," boolean "),t()(),i(114,"td")(115,"div",19),e(116," false "),t()()(),i(117,"tr")(118,"td"),e(119,"suiError"),t(),i(120,"td"),e(121,"When true, renders the dropdown in an error state."),t(),i(122,"td")(123,"div",18),e(124," boolean "),t()(),i(125,"td")(126,"div",19),e(127," false "),t()()(),i(128,"tr")(129,"td"),e(130,"disabled"),t(),i(131,"td"),e(132,"When true, the dropdown cannot be opened."),t(),i(133,"td")(134,"div",18),e(135," boolean "),t()(),i(136,"td")(137,"div",19),e(138," false "),t()()(),i(139,"tr")(140,"td"),e(141,"suiScrolling"),t(),i(142,"td"),e(143,"When true, applies the scrolling style to the dropdown. You can also set "),i(144,"span",10),e(145,"suiScrolling"),t(),e(146," on the menu."),t(),i(147,"td")(148,"div",18),e(149," boolean "),t()(),i(150,"td")(151,"div",19),e(152," false "),t()()(),i(153,"tr")(154,"td"),e(155,"suiCompact"),t(),i(156,"td"),e(157,"When true, removes the minimum width of the dropdown."),t(),i(158,"td")(159,"div",18),e(160," boolean "),t()(),i(161,"td")(162,"div",19),e(163," false "),t()()(),i(164,"tr")(165,"td"),e(166,"suiFloating"),t(),i(167,"td"),e(168,"When true, the menu appears to float below the element."),t(),i(169,"td")(170,"div",18),e(171," boolean "),t()(),i(172,"td")(173,"div",19),e(174," false "),t()()(),i(175,"tr")(176,"td"),e(177,"suiSimple"),t(),i(178,"td"),e(179,"When true, the dropdown opens on hover using CSS only."),t(),i(180,"td")(181,"div",18),e(182," boolean "),t()(),i(183,"td")(184,"div",19),e(185," false "),t()()()()(),i(186,"h2",2),e(187,"suiDropdownMenu"),t(),i(188,"p"),e(189,"Selector: "),i(190,"span",10),e(191,"[suiDropdownMenu]"),t(),e(192,". The menu of a dropdown or of a dropdown menu item (sub menu)."),t(),i(193,"h4",4),e(194,"Properties"),t(),i(195,"table",17)(196,"thead")(197,"tr")(198,"th"),e(199,"Property"),t(),i(200,"th"),e(201,"Description"),t(),i(202,"th"),e(203,"Type"),t(),i(204,"th"),e(205,"Default"),t()()(),i(206,"tbody")(207,"tr")(208,"td"),e(209,"suiDirection"),t(),i(210,"td"),e(211,"Sets the direction the menu opens. Allowed values are "),i(212,"span",10),e(213,"left"),t(),e(214," | "),i(215,"span",10),e(216,"right"),t(),e(217," | "),i(218,"span",10),e(219,"null"),t()(),i(220,"td")(221,"div",18),e(222," string "),t()(),i(223,"td")(224,"div",19),e(225," null "),t()()(),i(226,"tr")(227,"td"),e(228,"suiScrolling"),t(),i(229,"td"),e(230,"When true, the menu scrolls when it has many items."),t(),i(231,"td")(232,"div",18),e(233," boolean "),t()(),i(234,"td")(235,"div",19),e(236," false "),t()()(),i(237,"tr")(238,"td"),e(239,"suiIsOpen"),t(),i(240,"td"),e(241,"Sets whether the menu is open. This is managed by the parent dropdown or menu item but can be bound to if needed."),t(),i(242,"td")(243,"div",18),e(244," boolean "),t()(),i(245,"td")(246,"div",19),e(247," false "),t()()()()(),i(248,"h2",2),e(249,"suiDropdownMenuItem"),t(),i(250,"p"),e(251,"Selector: "),i(252,"span",10),e(253,"[suiDropdownMenuItem]"),t(),e(254,". An item in a dropdown menu. If it contains a "),i(255,"span",10),e(256,"suiDropdownMenu"),t(),e(257,", that sub menu opens while the item is hovered."),t(),i(258,"h4",4),e(259,"Properties"),t(),i(260,"table",17)(261,"thead")(262,"tr")(263,"th"),e(264,"Property"),t(),i(265,"th"),e(266,"Description"),t(),i(267,"th"),e(268,"Type"),t(),i(269,"th"),e(270,"Default"),t()()(),i(271,"tbody")(272,"tr")(273,"td"),e(274,"suiDirection"),t(),i(275,"td"),e(276,"Sets the side the item\u2019s sub menu icon appears on. Allowed values are "),i(277,"span",10),e(278,"left"),t(),e(279," | "),i(280,"span",10),e(281,"right"),t(),e(282," | "),i(283,"span",10),e(284,"null"),t()(),i(285,"td")(286,"div",18),e(287," string "),t()(),i(288,"td")(289,"div",19),e(290," null "),t()()(),i(291,"tr")(292,"td"),e(293,"disabled"),t(),i(294,"td"),e(295,"When true, the item does not allow user interaction."),t(),i(296,"td")(297,"div",18),e(298," boolean "),t()(),i(299,"td")(300,"div",19),e(301," false "),t()()()()(),i(302,"h2",2),e(303,"suiDropdownMenuHeader"),t(),i(304,"p"),e(305,"Selector: "),i(306,"span",10),e(307,"[suiDropdownMenuHeader]"),t(),e(308,". A header that groups the items below it."),t(),i(309,"h4",4),e(310,"Properties"),t(),i(311,"table",17)(312,"thead")(313,"tr")(314,"th"),e(315,"Property"),t(),i(316,"th"),e(317,"Description"),t(),i(318,"th"),e(319,"Type"),t(),i(320,"th"),e(321,"Default"),t()()(),r(322,"tbody"),i(323,"tfoot",20)(324,"tr")(325,"th",21)(326,"div",22),e(327,"No properties for this directive"),t()()()()(),i(328,"h2",2),e(329,"suiDropdownMenuDivider"),t(),i(330,"p"),e(331,"Selector: "),i(332,"span",10),e(333,"[suiDropdownMenuDivider]"),t(),e(334,". A divider that separates related items."),t(),i(335,"h4",4),e(336,"Properties"),t(),i(337,"table",17)(338,"thead")(339,"tr")(340,"th"),e(341,"Property"),t(),i(342,"th"),e(343,"Description"),t(),i(344,"th"),e(345,"Type"),t(),i(346,"th"),e(347,"Default"),t()()(),r(348,"tbody"),i(349,"tfoot",20)(350,"tr")(351,"th",21)(352,"div",22),e(353,"No properties for this directive"),t()()()()()())}var Zr=(()=>{class n{constructor(o){this.snippetDropdown=sr,this.snippetInline=rr,this.snippetPointing=lr,this.snippetFloating=dr,this.snippetSimple=mr,this.snippetHeader=pr,this.snippetDivider=ur,this.snippetIcon=cr,this.snippetDescription=hr,this.snippetLabel=Sr,this.snippetMessage=xr,this.snippetFloated=vr,this.snippetInput=gr,this.snippetImage=fr,this.snippetLoading=br,this.snippetError=Er,this.snippetDisabled=Cr,this.snippetScrolling=yr,this.snippetCompact=Dr,this.snippetFluid=wr,this.snippetMenuDirection=_r,this.snippetMultipleLevels=Tr,this.snippetButtonGroup=Mr,o.setTitle("Dropdown | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown"]],standalone:!1,decls:3,vars:2,consts:[["header","Dropdown","subHeader","A dropdown allows a user to select a value from a series of options"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiIcon",""],["sui-icon","","suiIconType","info circle"],["suiMessageContent",""],["routerLink","/modules/select"],["docDemo",""],["sui-label",""],["routerLink","/elements/icon"],["routerLink","/elements/label"],["routerLink","/collections/messages"],["routerLink","/elements/input"],["routerLink","/elements/image"],["routerLink","/elements/button"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,qc,230,23,"div",1)(2,Kc,354,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[wt,O,H,L,W,F,R,E,g,re,Tt,Ir,Pr,Fr,kr,Ar,Vr,Br,Lr,Hr,Wr,Or,Rr,zr,jr,Nr,Ur,Gr,Yr,Jr,Xr,qr,Kr,Qr],encapsulation:2})}}return n})();var $r=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="shape.flipLeft()"><i sui-icon suiIconType="left long arrow"></i> Left</button>
  <button sui-button (click)="shape.flipUp()"><i sui-icon suiIconType="up long arrow"></i> Up</button>
  <button sui-button (click)="shape.flipDown()"><i sui-icon suiIconType="down long arrow"></i> Down</button>
  <button sui-button (click)="shape.flipRight()"><i sui-icon suiIconType="right long arrow"></i> Right</button>
  <button sui-button (click)="shape.flipOver()">Over</button>
  <button sui-button (click)="shape.flipBack()">Back</button>
</div>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape">
  <sui-shape-side>
    <div sui-segment>
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/steve.jpg">
      <h4 sui-header>
        Steve
        <div suiSubHeader>Steve is a creative professional</div>
      </h4>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div sui-segment>
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/elliot.jpg">
      <h4 sui-header>
        Elliot
        <div suiSubHeader>Elliot is a sound engineer</div>
      </h4>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div sui-segment>
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/stevie.jpg">
      <h4 sui-header>
        Stevie
        <div suiSubHeader>Stevie is a writer</div>
      </h4>
    </div>
  </sui-shape-side>
</sui-shape>
`;var el=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="shape.flipLeft()"><i sui-icon suiIconType="left long arrow"></i> Left</button>
  <button sui-button (click)="shape.flipUp()"><i sui-icon suiIconType="up long arrow"></i> Up</button>
  <button sui-button (click)="shape.flipDown()"><i sui-icon suiIconType="down long arrow"></i> Down</button>
  <button sui-button (click)="shape.flipRight()"><i sui-icon suiIconType="right long arrow"></i> Right</button>
  <button sui-button (click)="shape.flipOver()">Over</button>
  <button sui-button (click)="shape.flipBack()">Back</button>
</div>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape"
           suiCube>
  <sui-shape-side>
    <div class="content">
      <div class="center">1</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">2</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">3</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">4</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">5</div>
    </div>
  </sui-shape-side>
  <sui-shape-side>
    <div class="content">
      <div class="center">6</div>
    </div>
  </sui-shape-side>
</sui-shape>
`;var tl=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="shape.flipLeft()"><i sui-icon suiIconType="left long arrow"></i> Left</button>
  <button sui-button (click)="shape.flipUp()"><i sui-icon suiIconType="up long arrow"></i> Up</button>
  <button sui-button (click)="shape.flipDown()"><i sui-icon suiIconType="down long arrow"></i> Down</button>
  <button sui-button (click)="shape.flipRight()"><i sui-icon suiIconType="right long arrow"></i> Right</button>
  <button sui-button (click)="shape.flipOver()">Over</button>
  <button sui-button (click)="shape.flipBack()">Back</button>
</div>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape"
           suiText>
  <sui-shape-side>
    <h2 sui-header>Hello there!</h2>
  </sui-shape-side>
  <sui-shape-side>
    <h2 sui-header>Flip me</h2>
  </sui-shape-side>
  <sui-shape-side>
    <h2 sui-header>Shapes can hold text</h2>
  </sui-shape-side>
  <sui-shape-side>
    <h2 sui-header>Have a nice day</h2>
  </sui-shape-side>
</sui-shape>
`;var il=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="shape.setNextSide('.first'); shape.flipUp()">First</button>
  <button sui-button (click)="shape.setNextSide('.second'); shape.flipUp()">Second</button>
  <button sui-button (click)="shape.setNextSide('.third'); shape.flipUp()">Third</button>
</div>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape"
           suiText>
  <sui-shape-side class="first">
    <h2 sui-header>First side</h2>
  </sui-shape-side>
  <sui-shape-side class="second">
    <h2 sui-header>Second side</h2>
  </sui-shape-side>
  <sui-shape-side class="third">
    <h2 sui-header>Third side</h2>
  </sui-shape-side>
</sui-shape>
`;var nl=`<button sui-button
        suiSize="small"
        (click)="shape.flipRight()">Flip Right</button>
<div sui-divider suiHidden></div>
<sui-shape #shape="suiShape"
           suiText
           suiWidth="next"
           [suiDuration]="1500">
  <sui-shape-side>
    <h2 sui-header>Short</h2>
  </sui-shape-side>
  <sui-shape-side>
    <h2 sui-header>A much longer side of text</h2>
  </sui-shape-side>
</sui-shape>
`;var ol=["*"],ih=["shapeEl"],nh=["sidesEl"],at=(()=>{class n{constructor(){this.element=me(zt),this.styleActive=!1,this.styleHidden=!1,this.styleAnimating=!1,this.inlineStyles={},this.sideClass=!0}get nativeElement(){return this.element.nativeElement}clearInlineStyles(){this.inlineStyles={}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-shape-side"]],hostVars:10,hostBindings:function(a,s){a&2&&(ei(s.inlineStyles),fe("active",s.styleActive)("hidden",s.styleHidden)("animating",s.styleAnimating)("side",s.sideClass))},exportAs:["suiShapeSide"],ngContentSelectors:ol,decls:1,vars:0,template:function(a,s){a&1&&(ve(),ge(0))},encapsulation:2})}}return n})();function Pe(n){let m=n.getBoundingClientRect(),o=getComputedStyle(n);return m.height+parseFloat(o.marginTop)+parseFloat(o.marginBottom)}function te(n){let m=n.getBoundingClientRect(),o=getComputedStyle(n);return m.width+parseFloat(o.marginLeft)+parseFloat(o.marginRight)}function oh(){let n=document.createElement("div"),m={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(let o of Object.keys(m))if(n.style[o]!==void 0)return m[o];return"transitionend"}var st=(()=>{class n{constructor(){this.cdr=me(dt),this.zone=me(Rt),this.suiDuration=null,this.suiWidth="initial",this.suiHeight="initial",this.suiJitter=0,this.suiAllowRepeats=!1,this.suiCube=!1,this.suiText=!1,this.suiBeforeChange=new Ce,this.suiOnChange=new Ce,this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={},this.transitionEnd=oh(),this.activeSide=null,this.nextSide=null,this.manualNextIndex=null,this.queue=[],this.sidesChangeSub=null}ngAfterContentInit(){this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.sidesChangeSub=this.sideList.changes.subscribe(()=>{this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.cdr.markForCheck()})}ngOnDestroy(){this.sidesChangeSub?.unsubscribe()}flipUp(){this.runFlip("flip up",()=>{this.setStageSize(),this.stageAbove(),this.animate(this.getTransformUp())})}flipDown(){this.runFlip("flip down",()=>{this.setStageSize(),this.stageBelow(),this.animate(this.getTransformDown())})}flipLeft(){this.runFlip("flip left",()=>{this.setStageSize(),this.stageLeft(),this.animate(this.getTransformLeft())})}flipRight(){this.runFlip("flip right",()=>{this.setStageSize(),this.stageRight(),this.animate(this.getTransformRight())})}flipOver(){this.runFlip("flip over",()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformOver())})}flipBack(){this.runFlip("flip back",()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformBack())})}setNextSide(o){let a=this.sideList.toArray(),s=a.filter(h=>h.nativeElement.matches(o));if(s.length===0){this.setDefaultSide();return}this.nextSide=s[0],this.manualNextIndex=a.indexOf(this.nextSide)}isAnimating(){return this.animating}reset(){this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={};for(let o of this.sideList.toArray())o.styleHidden=!1,o.styleAnimating=!1,o.clearInlineStyles();this.cdr.markForCheck()}repaint(){let o=this.sidesEl?.nativeElement;o&&o.offsetWidth}refresh(){this.setDefaultSide()}flip(o){switch(o){case"flip up":this.flipUp();break;case"flip down":this.flipDown();break;case"flip left":this.flipLeft();break;case"flip right":this.flipRight();break;case"flip over":this.flipOver();break;case"flip back":this.flipBack();break}}runFlip(o,a){this.sideList.length<2||(this.setDefaultSide(),!(!this.activeSide||!this.nextSide)&&(this.isComplete()&&!this.animating&&!this.suiAllowRepeats||(this.animating?this.queue.push(o):a())))}isComplete(){return this.activeSide!==null&&this.nextSide!==null&&this.activeSide===this.nextSide}ensureFirstSideActive(){let o=this.sideList.toArray();o.length!==0&&(o.some(a=>a.styleActive)||(o[0].styleActive=!0))}setDefaultSide(){let o=this.sideList.toArray();if(o.length===0){this.activeSide=null,this.nextSide=null;return}let a=o.findIndex(s=>s.styleActive);if(this.activeSide=a>=0?o[a]:o[0],this.manualNextIndex!==null&&this.manualNextIndex>=0&&this.manualNextIndex<o.length)this.nextSide=o[this.manualNextIndex];else{let s=o.indexOf(this.activeSide);this.nextSide=s<o.length-1?o[s+1]:o[0]}}applyDurationToSides(){if(this.suiDuration===null||this.suiDuration===void 0)return;let o=`${this.suiDuration}ms`,a={transitionDuration:o,WebkitTransitionDuration:o,MozTransitionDuration:o,OTransitionDuration:o};this.sidesInlineStyle=U(U({},this.sidesInlineStyle),a);for(let s of this.sideList.toArray())s.inlineStyles=U(U({},s.inlineStyles),a)}setStageSize(){if(!this.activeSide||!this.nextSide)return;let o=this.shapeEl.nativeElement,a=this.suiWidth,s=this.suiHeight,h,p;a==="next"?h=te(this.nextSide.nativeElement):a==="initial"?h=o.offsetWidth:h=a,s==="next"?p=Pe(this.nextSide.nativeElement):s==="initial"?p=o.offsetHeight:p=s,this.shapeInlineStyle=ie(U({},this.shapeInlineStyle),{width:`${h+this.suiJitter}px`,height:`${p+this.suiJitter}px`})}animate(o){if(!this.activeSide||!this.nextSide)return;let a=this.activeSide,s=this.nextSide;this.suiBeforeChange.emit(s);let h=this.sidesEl.nativeElement,p=b=>{if(b.target!==h){h.addEventListener(this.transitionEnd,p,{once:!0});return}this.zone.run(()=>{this.finishAnimation()})};setTimeout(()=>{this.zone.run(()=>{this.animating=!0,h.addEventListener(this.transitionEnd,p,{once:!0}),this.sidesInlineStyle=U(U({},this.sidesInlineStyle),o),a.styleHidden=!0,this.cdr.markForCheck()})})}finishAnimation(){this.reset(),this.setActive(),this.processQueue(),this.cdr.markForCheck()}setActive(){let o=this.sideList.toArray();if(this.nextSide){for(let a of o)a.styleActive=!1;this.nextSide.styleActive=!0,this.suiOnChange.emit(this.nextSide),this.manualNextIndex=null,this.setDefaultSide()}}processQueue(){let o=this.queue.shift();o&&this.flip(o)}getTransformUp(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(Pe(o)-Pe(a))/2,h=-Pe(o)/2;return{transform:`translateY(${s}px) translateZ(${h}px) rotateX(-90deg)`}}getTransformDown(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(Pe(o)-Pe(a))/2,h=-Pe(o)/2;return{transform:`translateY(${s}px) translateZ(${h}px) rotateX(90deg)`}}getTransformLeft(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(te(o)-te(a))/2,h=-te(o)/2;return{transform:`translateX(${s}px) translateZ(${h}px) rotateY(90deg)`}}getTransformRight(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(te(o)-te(a))/2,h=-te(o)/2;return{transform:`translateX(${s}px) translateZ(${h}px) rotateY(-90deg)`}}getTransformOver(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(te(o)-te(a))/2}px) rotateY(180deg)`}}getTransformBack(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(te(o)-te(a))/2}px) rotateY(-180deg)`}}stageAbove(){let o=this.activeSide,a=this.nextSide,s=Pe(o.nativeElement),h=Pe(a.nativeElement),p=(s-h)/2,b=h/2,tt=s/2;this.sidesInlineStyle=ie(U({},this.sidesInlineStyle),{transform:`translateZ(-${b}px)`}),o.inlineStyles=ie(U({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${b}px)`}),a.styleAnimating=!0,a.inlineStyles=ie(U({},a.inlineStyles),{top:`${p}px`,transform:`rotateX(90deg) translateZ(${tt}px)`})}stageBelow(){let o=this.activeSide,a=this.nextSide,s=Pe(o.nativeElement),h=Pe(a.nativeElement),p=(s-h)/2,b=h/2,tt=s/2;this.sidesInlineStyle=ie(U({},this.sidesInlineStyle),{transform:`translateZ(-${b}px)`}),o.inlineStyles=ie(U({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${b}px)`}),a.styleAnimating=!0,a.inlineStyles=ie(U({},a.inlineStyles),{top:`${p}px`,transform:`rotateX(-90deg) translateZ(${tt}px)`})}stageLeft(){let o=this.activeSide,a=this.nextSide,s=te(o.nativeElement),h=te(a.nativeElement),p=(s-h)/2,b=h/2,tt=s/2;this.sidesInlineStyle=ie(U({},this.sidesInlineStyle),{transform:`translateZ(-${b}px)`}),o.inlineStyles=ie(U({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${b}px)`}),a.styleAnimating=!0,a.inlineStyles=ie(U({},a.inlineStyles),{left:`${p}px`,transform:`rotateY(-90deg) translateZ(${tt}px)`})}stageRight(){let o=this.activeSide,a=this.nextSide,s=te(o.nativeElement),h=te(a.nativeElement),p=(s-h)/2,b=h/2,tt=s/2;this.sidesInlineStyle=ie(U({},this.sidesInlineStyle),{transform:`translateZ(-${b}px)`}),o.inlineStyles=ie(U({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${b}px)`}),a.styleAnimating=!0,a.inlineStyles=ie(U({},a.inlineStyles),{left:`${p}px`,transform:`rotateY(90deg) translateZ(${tt}px)`})}stageBehind(){let o=this.activeSide,a=this.nextSide,s=te(o.nativeElement),h=te(a.nativeElement),p=(s-h)/2;o.inlineStyles=ie(U({},o.inlineStyles),{transform:"rotateY(0deg)"}),a.styleAnimating=!0,a.inlineStyles=ie(U({},a.inlineStyles),{left:`${p}px`,transform:"rotateY(-180deg)"})}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-shape"]],contentQueries:function(a,s,h){if(a&1&&rt(h,at,4),a&2){let p;ye(p=De())&&(s.sideList=p)}},viewQuery:function(a,s){if(a&1&&lt(ih,7)(nh,7),a&2){let h;ye(h=De())&&(s.shapeEl=h.first),ye(h=De())&&(s.sidesEl=h.first)}},inputs:{suiDuration:"suiDuration",suiWidth:"suiWidth",suiHeight:"suiHeight",suiJitter:"suiJitter",suiAllowRepeats:"suiAllowRepeats",suiCube:"suiCube",suiText:"suiText"},outputs:{suiBeforeChange:"suiBeforeChange",suiOnChange:"suiOnChange"},exportAs:["suiShape"],ngContentSelectors:ol,decls:5,vars:8,consts:[["shapeEl",""],["sidesEl",""],[1,"ui","shape",3,"ngStyle"],[1,"sides",3,"ngStyle"]],template:function(a,s){a&1&&(ve(),i(0,"div",2,0)(2,"div",3,1),ge(4),t()()),a&2&&(fe("animating",s.animating)("cube",s.suiCube)("text",s.suiText),l("ngStyle",s.shapeInlineStyle),d(2),l("ngStyle",s.sidesInlineStyle))},dependencies:[Y,oi],encapsulation:2})}}return I([P()],n.prototype,"suiAllowRepeats",void 0),I([P()],n.prototype,"suiCube",void 0),I([P()],n.prototype,"suiText",void 0),n})(),al=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({imports:[Y,st]})}}return n})();var sl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-shape-example"]],standalone:!1,decls:41,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["sui-segment",""],["sui-image","","src","https://semantic-ui.com/images/avatar/large/steve.jpg"],["sui-header",""],["suiSubHeader",""],["sui-image","","src","https://semantic-ui.com/images/avatar/large/elliot.jpg"],["sui-image","","src","https://semantic-ui.com/images/avatar/large/stevie.jpg"]],template:function(a,s){if(a&1){let h=ne();i(0,"div",1)(1,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipLeft())}),r(2,"i",3),e(3," Left"),t(),i(4,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipUp())}),r(5,"i",4),e(6," Up"),t(),i(7,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipDown())}),r(8,"i",5),e(9," Down"),t(),i(10,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipRight())}),r(11,"i",6),e(12," Right"),t(),i(13,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipOver())}),e(14,"Over"),t(),i(15,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipBack())}),e(16,"Back"),t()(),r(17,"div",7),i(18,"sui-shape",null,0)(20,"sui-shape-side")(21,"div",8),r(22,"img",9),i(23,"h4",10),e(24," Steve "),i(25,"div",11),e(26,"Steve is a creative professional"),t()()()(),i(27,"sui-shape-side")(28,"div",8),r(29,"img",12),i(30,"h4",10),e(31," Elliot "),i(32,"div",11),e(33,"Elliot is a sound engineer"),t()()()(),i(34,"sui-shape-side")(35,"div",8),r(36,"img",13),i(37,"h4",10),e(38," Stevie "),i(39,"div",11),e(40,"Stevie is a writer"),t()()()()()}},dependencies:[E,_t,T,oe,g,be,_e,A,st,at],encapsulation:2})}}return n})(),rl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-cube-example"]],standalone:!1,decls:44,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["suiCube",""],[1,"content"],[1,"center"]],template:function(a,s){if(a&1){let h=ne();i(0,"div",1)(1,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipLeft())}),r(2,"i",3),e(3," Left"),t(),i(4,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipUp())}),r(5,"i",4),e(6," Up"),t(),i(7,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipDown())}),r(8,"i",5),e(9," Down"),t(),i(10,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipRight())}),r(11,"i",6),e(12," Right"),t(),i(13,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipOver())}),e(14,"Over"),t(),i(15,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipBack())}),e(16,"Back"),t()(),r(17,"div",7),i(18,"sui-shape",8,0)(20,"sui-shape-side")(21,"div",9)(22,"div",10),e(23,"1"),t()()(),i(24,"sui-shape-side")(25,"div",9)(26,"div",10),e(27,"2"),t()()(),i(28,"sui-shape-side")(29,"div",9)(30,"div",10),e(31,"3"),t()()(),i(32,"sui-shape-side")(33,"div",9)(34,"div",10),e(35,"4"),t()()(),i(36,"sui-shape-side")(37,"div",9)(38,"div",10),e(39,"5"),t()()(),i(40,"sui-shape-side")(41,"div",9)(42,"div",10),e(43,"6"),t()()()()}},dependencies:[T,oe,g,be,st,at],encapsulation:2})}}return n})(),ll=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-text-example"]],standalone:!1,decls:32,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["suiText",""],["sui-header",""]],template:function(a,s){if(a&1){let h=ne();i(0,"div",1)(1,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipLeft())}),r(2,"i",3),e(3," Left"),t(),i(4,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipUp())}),r(5,"i",4),e(6," Up"),t(),i(7,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipDown())}),r(8,"i",5),e(9," Down"),t(),i(10,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipRight())}),r(11,"i",6),e(12," Right"),t(),i(13,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipOver())}),e(14,"Over"),t(),i(15,"button",2),v("click",function(){C(h);let b=k(19);return y(b.flipBack())}),e(16,"Back"),t()(),r(17,"div",7),i(18,"sui-shape",8,0)(20,"sui-shape-side")(21,"h2",9),e(22,"Hello there!"),t()(),i(23,"sui-shape-side")(24,"h2",9),e(25,"Flip me"),t()(),i(26,"sui-shape-side")(27,"h2",9),e(28,"Shapes can hold text"),t()(),i(29,"sui-shape-side")(30,"h2",9),e(31,"Have a nice day"),t()()()}},dependencies:[E,T,oe,g,be,st,at],encapsulation:2})}}return n})(),dl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-next-side-example"]],standalone:!1,decls:19,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiText",""],[1,"first"],["sui-header",""],[1,"second"],[1,"third"]],template:function(a,s){if(a&1){let h=ne();i(0,"div",1)(1,"button",2),v("click",function(){C(h);let b=k(9);return b.setNextSide(".first"),y(b.flipUp())}),e(2,"First"),t(),i(3,"button",2),v("click",function(){C(h);let b=k(9);return b.setNextSide(".second"),y(b.flipUp())}),e(4,"Second"),t(),i(5,"button",2),v("click",function(){C(h);let b=k(9);return b.setNextSide(".third"),y(b.flipUp())}),e(6,"Third"),t()(),r(7,"div",3),i(8,"sui-shape",4,0)(10,"sui-shape-side",5)(11,"h2",6),e(12,"First side"),t()(),i(13,"sui-shape-side",7)(14,"h2",6),e(15,"Second side"),t()(),i(16,"sui-shape-side",8)(17,"h2",6),e(18,"Third side"),t()()()}},dependencies:[E,T,oe,be,st,at],encapsulation:2})}}return n})(),ml=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-settings-example"]],standalone:!1,decls:11,vars:1,consts:[["shape","suiShape"],["sui-button","","suiSize","small",3,"click"],["sui-divider","","suiHidden",""],["suiText","","suiWidth","next",3,"suiDuration"],["sui-header",""]],template:function(a,s){if(a&1){let h=ne();i(0,"button",1),v("click",function(){C(h);let b=k(4);return y(b.flipRight())}),e(1,"Flip Right"),t(),r(2,"div",2),i(3,"sui-shape",3,0)(5,"sui-shape-side")(6,"h2",4),e(7,"Short"),t()(),i(8,"sui-shape-side")(9,"h2",4),e(10,"A much longer side of text"),t()()()}a&2&&(d(3),l("suiDuration",1500))},dependencies:[E,T,be,st,at],encapsulation:2})}}return n})();function rh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-shape-example"),t())}function lh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-cube-example"),t())}function dh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-text-example"),t())}function mh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-next-side-example"),t())}function ph(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-settings-example"),t())}function uh(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Shape"),t(),i(6,"p"),e(7,"A shape can contain any content on each of its sides"),t(),i(8,"div",5),e(9," Get a reference to the shape with "),i(10,"code"),e(11,'#shape="suiShape"'),t(),e(12," to call its flip methods. "),t(),c(13,rh,2,0,"ng-template",6),t(),i(14,"doc-code-sample",3)(15,"h3",4),e(16,"Cube"),t(),i(17,"p"),e(18,"A shape can be the size of a cube"),t(),c(19,lh,2,0,"ng-template",6),t(),i(20,"doc-code-sample",3)(21,"h3",4),e(22,"Text"),t(),i(23,"p"),e(24,"A shape can be formatted for text content"),t(),c(25,dh,2,0,"ng-template",6),t(),r(26,"br"),i(27,"h2",2),e(28,"Content"),t(),i(29,"doc-code-sample",3)(30,"h3",4),e(31,"Side"),t(),i(32,"p"),e(33,"A shape displays one side at a time; you can choose the next side before flipping"),t(),i(34,"div",5)(35,"code"),e(36,"setNextSide"),t(),e(37," takes a CSS selector that is matched against each side. "),t(),c(38,mh,2,0,"ng-template",6),t(),r(39,"br"),i(40,"h2",2),e(41,"Settings"),t(),i(42,"doc-code-sample",3)(43,"h3",4),e(44,"Duration and Size"),t(),i(45,"p"),e(46,"A shape can change its animation duration, and resize to fit the next side while animating"),t(),c(47,ph,2,0,"ng-template",6),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetShape),d(11),l("templateCode",o.snippetCube),d(6),l("templateCode",o.snippetText),d(9),l("templateCode",o.snippetNextSide),d(13),l("templateCode",o.snippetSettings)}}function ch(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-shape"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19," suiCube "),t(),i(20,"td"),e(21," Format the shape as a cube "),t(),i(22,"td")(23,"div",9),e(24," boolean "),t()(),i(25,"td")(26,"div",10),e(27," false "),t()()(),i(28,"tr")(29,"td"),e(30," suiText "),t(),i(31,"td"),e(32," Format the shape for text content "),t(),i(33,"td")(34,"div",9),e(35," boolean "),t()(),i(36,"td")(37,"div",10),e(38," false "),t()()(),i(39,"tr")(40,"td"),e(41," suiDuration "),t(),i(42,"td"),e(43," Animation duration in milliseconds. Uses the Semantic UI CSS duration when not set "),t(),i(44,"td")(45,"div",9),e(46," number "),t()(),i(47,"td")(48,"div",10),e(49," null "),t()()(),i(50,"tr")(51,"td"),e(52," suiWidth "),t(),i(53,"td"),e(54," Width of the shape while animating: the initial width, the next side's width or a pixel value. Allowed values are "),i(55,"span",11),e(56,"'initial'"),t(),e(57," | "),i(58,"span",11),e(59,"'next'"),t(),e(60," | "),i(61,"span",11),e(62,"number"),t()(),i(63,"td")(64,"div",9),e(65," string | number "),t()(),i(66,"td")(67,"div",10),e(68," 'initial' "),t()()(),i(69,"tr")(70,"td"),e(71," suiHeight "),t(),i(72,"td"),e(73," Height of the shape while animating: the initial height, the next side's height or a pixel value. Allowed values are "),i(74,"span",11),e(75,"'initial'"),t(),e(76," | "),i(77,"span",11),e(78,"'next'"),t(),e(79," | "),i(80,"span",11),e(81,"number"),t()(),i(82,"td")(83,"div",9),e(84," string | number "),t()(),i(85,"td")(86,"div",10),e(87," 'initial' "),t()()(),i(88,"tr")(89,"td"),e(90," suiJitter "),t(),i(91,"td"),e(92," Pixels added to the stage size to avoid rounding issues "),t(),i(93,"td")(94,"div",9),e(95," number "),t()(),i(96,"td")(97,"div",10),e(98," 0 "),t()()(),i(99,"tr")(100,"td"),e(101," suiAllowRepeats "),t(),i(102,"td"),e(103," Allow flipping to the side that is already visible "),t(),i(104,"td")(105,"div",9),e(106," boolean "),t()(),i(107,"td")(108,"div",10),e(109," false "),t()()()()(),i(110,"h4",4),e(111,"Events"),t(),i(112,"table",8)(113,"thead")(114,"tr")(115,"th"),e(116,"Event"),t(),i(117,"th"),e(118,"Description"),t(),i(119,"th"),e(120,"Type"),t()()(),i(121,"tbody")(122,"tr")(123,"td"),e(124," suiBeforeChange "),t(),i(125,"td"),e(126," Emitted with the next side before the shape starts animating "),t(),i(127,"td")(128,"div",9),e(129," EventEmitter<SuiShapeSideComponent> "),t()()(),i(130,"tr")(131,"td"),e(132," suiOnChange "),t(),i(133,"td"),e(134," Emitted with the new active side once the animation completes "),t(),i(135,"td")(136,"div",9),e(137," EventEmitter<SuiShapeSideComponent> "),t()()()()(),i(138,"h4",4),e(139,"Methods"),t(),i(140,"table",8)(141,"thead")(142,"tr")(143,"th"),e(144,"Method"),t(),i(145,"th"),e(146,"Description"),t()()(),i(147,"tbody")(148,"tr")(149,"td"),e(150," flipUp() "),t(),i(151,"td"),e(152," Flips the shape upward "),t()(),i(153,"tr")(154,"td"),e(155," flipDown() "),t(),i(156,"td"),e(157," Flips the shape downward "),t()(),i(158,"tr")(159,"td"),e(160," flipLeft() "),t(),i(161,"td"),e(162," Flips the shape to the left "),t()(),i(163,"tr")(164,"td"),e(165," flipRight() "),t(),i(166,"td"),e(167," Flips the shape to the right "),t()(),i(168,"tr")(169,"td"),e(170," flipOver() "),t(),i(171,"td"),e(172," Flips the shape over clock-wise "),t()(),i(173,"tr")(174,"td"),e(175," flipBack() "),t(),i(176,"td"),e(177," Flips the shape back counter-clockwise "),t()(),i(178,"tr")(179,"td"),e(180," flip(behavior) "),t(),i(181,"td"),e(182," Runs a named flip such as "),i(183,"code"),e(184,"'flip up'"),t()()(),i(185,"tr")(186,"td"),e(187," setNextSide(selector) "),t(),i(188,"td"),e(189," Sets the side to show on the next flip "),t()(),i(190,"tr")(191,"td"),e(192," isAnimating() "),t(),i(193,"td"),e(194," Returns whether the shape is animating "),t()(),i(195,"tr")(196,"td"),e(197," reset() "),t(),i(198,"td"),e(199," Removes all inline animation styles "),t()(),i(200,"tr")(201,"td"),e(202," repaint() "),t(),i(203,"td"),e(204," Forces the browser to repaint the shape "),t()(),i(205,"tr")(206,"td"),e(207," refresh() "),t(),i(208,"td"),e(209," Re-reads the sides, e.g. after changing them "),t()()()()())}var pl=(()=>{class n{constructor(o){this.snippetShape=$r,this.snippetCube=el,this.snippetText=tl,this.snippetNextSide=il,this.snippetSettings=nl,o.setTitle("Shape | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape"]],standalone:!1,decls:3,vars:2,consts:[["header","Shape","subHeader","A shape is a three dimensional object displayed on a two dimensional plane","semanticUrl","https://semantic-ui.com/modules/shape.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[1,"shape-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,uh,48,5,"div",1)(2,ch,210,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,re,sl,rl,ll,dl,ml],styles:["[_nghost-%COMP%]     .shape-demo .ui.shape .side>.ui.segment{width:15rem;margin:0}"]})}}return n})();var ul=`<div sui-menu
     suiAttached="top">
  <a suiMenuItem
     (click)="visible = !visible">
    <i sui-icon suiIconType="sidebar"></i>
    Menu
  </a>
</div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       suiIcon="labeled icon"
       suiSidebarWidth="thin"
       suiSidebarAnimation="overlay"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var cl=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var hl=`<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       suiSidebarWidth="thin"
       [visible]="true">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var Sl=`<div sui-menu
     suiAttached="top">
  <a suiMenuItem
     (click)="visible = !visible">
    <i sui-icon suiIconType="sidebar"></i>
    Menu
  </a>
</div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       suiSidebarAnimation="overlay"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher
      suiDimmable>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var xl=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var vl=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="show('left')">Left</button>
  <button sui-button (click)="show('right')">Right</button>
  <button sui-button (click)="show('top')">Top</button>
  <button sui-button (click)="show('bottom')">Bottom</button>
</div>
<div sui-divider suiHidden></div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       [suiVertical]="isVertical"
       [suiSidebarPosition]="direction"
       suiSidebarAnimation="overlay"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var gl=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var fl=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="width = 'very thin'; visible = true">Very Thin</button>
  <button sui-button (click)="width = 'thin'; visible = true">Thin</button>
  <button sui-button (click)="width = null; visible = true">Default</button>
  <button sui-button (click)="width = 'wide'; visible = true">Wide</button>
  <button sui-button (click)="width = 'very wide'; visible = true">Very Wide</button>
</div>
<div sui-divider suiHidden></div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       [suiSidebarWidth]="width"
       suiSidebarAnimation="overlay"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var bl=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var El=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="show('left', 'overlay')">Overlay</button>
  <button sui-button (click)="show('left', 'push')">Push</button>
  <button sui-button (click)="show('left', 'scale down')">Scale Down</button>
  <button sui-button (click)="show('left', 'uncover')">Uncover</button>
  <button sui-button (click)="show('left', 'slide along')">Slide Along</button>
  <button sui-button (click)="show('left', 'slide out')">Slide Out</button>
</div>
<div sui-divider suiHidden></div>
<sui-sidebar-container suiPushable
                       class="ui bottom attached segment">
  <div sui-sidebar
       sui-menu
       suiInverted
       suiVertical
       suiSidebarWidth="thin"
       [suiSidebarAnimation]="animation"
       [(visible)]="visible">
    <a suiMenuItem><i sui-icon suiIconType="home"></i> Home</a>
    <a suiMenuItem><i sui-icon suiIconType="block layout"></i> Topics</a>
    <a suiMenuItem><i sui-icon suiIconType="smile"></i> Friends</a>
  </div>
  <sui-sidebar-pusher>
    <div sui-segment
         suiBasic>
      <h3 sui-header>Application Content</h3>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var Cl=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var yl=`<sui-sidebar-container>
  <div sui-sidebar
       sui-menu
       suiVertical
       suiInverted
       [(visible)]="visible">
    <a suiMenuItem>Item 1</a>
    <a suiMenuItem>Item 2</a>
  </div>
  <sui-sidebar-pusher>
    <button sui-button
            (click)="visible = !visible">Toggle Sidebar</button>
  </sui-sidebar-pusher>
</sui-sidebar-container>
`;var Dl=`import { Component } from '@angular/core';
import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

@Component({
  selector: 'app-sidebar-example',
  templateUrl: './sidebar-example.component.html'
})
export class SidebarExampleComponent {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}
`;var ze=class{constructor(){this.visible=!1,this.direction="left",this.animation="overlay",this.width=null}show(m,o="overlay"){this.direction=m,this.animation=o,this.visible=!0}get isVertical(){return this.direction==="left"||this.direction==="right"}},wl=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-sidebar-example"]],standalone:!1,features:[x],decls:21,vars:1,consts:[["sui-menu","","suiAttached","top"],["suiMenuItem","",3,"click"],["sui-icon","","suiIconType","sidebar"],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiIcon","labeled icon","suiSidebarWidth","thin","suiSidebarAnimation","overlay",3,"visibleChange","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"a",1),v("click",function(){return s.visible=!s.visible}),r(2,"i",2),e(3," Menu "),t()(),i(4,"sui-sidebar-container",3)(5,"div",4),_("visibleChange",function(p){return w(s.visible,p)||(s.visible=p),p}),i(6,"a",5),r(7,"i",6),e(8," Home"),t(),i(9,"a",5),r(10,"i",7),e(11," Topics"),t(),i(12,"a",5),r(13,"i",8),e(14," Friends"),t()(),i(15,"sui-sidebar-pusher")(16,"div",9)(17,"h3",10),e(18,"Application Content"),t(),r(19,"doc-wireframe",11)(20,"doc-wireframe",11),t()()()),a&2&&(d(5),D("visible",s.visible))},dependencies:[ee,E,g,A,Xe,qe,Ke,Fe,ke],encapsulation:2})}}return n})(),_l=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-visible-example"]],standalone:!1,features:[x],decls:17,vars:1,consts:[["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarWidth","thin",3,"visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"sui-sidebar-container",0)(1,"div",1)(2,"a",2),r(3,"i",3),e(4," Home"),t(),i(5,"a",2),r(6,"i",4),e(7," Topics"),t(),i(8,"a",2),r(9,"i",5),e(10," Friends"),t()(),i(11,"sui-sidebar-pusher")(12,"div",6)(13,"h3",7),e(14,"Application Content"),t(),r(15,"doc-wireframe",8)(16,"doc-wireframe",8),t()()()),a&2&&(d(),l("visible",!0))},dependencies:[ee,E,g,A,Xe,qe,Ke,Fe,ke],encapsulation:2})}}return n})(),Tl=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-dimmed-example"]],standalone:!1,features:[x],decls:21,vars:1,consts:[["sui-menu","","suiAttached","top"],["suiMenuItem","",3,"click"],["sui-icon","","suiIconType","sidebar"],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarAnimation","overlay",3,"visibleChange","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["suiDimmable",""],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"a",1),v("click",function(){return s.visible=!s.visible}),r(2,"i",2),e(3," Menu "),t()(),i(4,"sui-sidebar-container",3)(5,"div",4),_("visibleChange",function(p){return w(s.visible,p)||(s.visible=p),p}),i(6,"a",5),r(7,"i",6),e(8," Home"),t(),i(9,"a",5),r(10,"i",7),e(11," Topics"),t(),i(12,"a",5),r(13,"i",8),e(14," Friends"),t()(),i(15,"sui-sidebar-pusher",9)(16,"div",10)(17,"h3",11),e(18,"Application Content"),t(),r(19,"doc-wireframe",12)(20,"doc-wireframe",12),t()()()),a&2&&(d(5),D("visible",s.visible))},dependencies:[ee,E,g,A,Xe,qe,Ke,Fe,ke],encapsulation:2})}}return n})(),Ml=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-direction-example"]],standalone:!1,features:[x],decls:27,vars:3,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiSidebarAnimation","overlay",3,"visibleChange","suiVertical","suiSidebarPosition","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),v("click",function(){return s.show("left")}),e(2,"Left"),t(),i(3,"button",1),v("click",function(){return s.show("right")}),e(4,"Right"),t(),i(5,"button",1),v("click",function(){return s.show("top")}),e(6,"Top"),t(),i(7,"button",1),v("click",function(){return s.show("bottom")}),e(8,"Bottom"),t()(),r(9,"div",2),i(10,"sui-sidebar-container",3)(11,"div",4),_("visibleChange",function(p){return w(s.visible,p)||(s.visible=p),p}),i(12,"a",5),r(13,"i",6),e(14," Home"),t(),i(15,"a",5),r(16,"i",7),e(17," Topics"),t(),i(18,"a",5),r(19,"i",8),e(20," Friends"),t()(),i(21,"sui-sidebar-pusher")(22,"div",9)(23,"h3",10),e(24,"Application Content"),t(),r(25,"doc-wireframe",11)(26,"doc-wireframe",11),t()()()),a&2&&(d(11),l("suiVertical",s.isVertical)("suiSidebarPosition",s.direction),D("visible",s.visible))},dependencies:[ee,E,T,oe,g,be,A,Xe,qe,Ke,Fe,ke],encapsulation:2})}}return n})(),Il=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-width-example"]],standalone:!1,features:[x],decls:29,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarAnimation","overlay",3,"visibleChange","suiSidebarWidth","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),v("click",function(){return s.width="very thin",s.visible=!0}),e(2,"Very Thin"),t(),i(3,"button",1),v("click",function(){return s.width="thin",s.visible=!0}),e(4,"Thin"),t(),i(5,"button",1),v("click",function(){return s.width=null,s.visible=!0}),e(6,"Default"),t(),i(7,"button",1),v("click",function(){return s.width="wide",s.visible=!0}),e(8,"Wide"),t(),i(9,"button",1),v("click",function(){return s.width="very wide",s.visible=!0}),e(10,"Very Wide"),t()(),r(11,"div",2),i(12,"sui-sidebar-container",3)(13,"div",4),_("visibleChange",function(p){return w(s.visible,p)||(s.visible=p),p}),i(14,"a",5),r(15,"i",6),e(16," Home"),t(),i(17,"a",5),r(18,"i",7),e(19," Topics"),t(),i(20,"a",5),r(21,"i",8),e(22," Friends"),t()(),i(23,"sui-sidebar-pusher")(24,"div",9)(25,"h3",10),e(26,"Application Content"),t(),r(27,"doc-wireframe",11)(28,"doc-wireframe",11),t()()()),a&2&&(d(13),l("suiSidebarWidth",s.width),D("visible",s.visible))},dependencies:[ee,E,T,oe,g,be,A,Xe,qe,Ke,Fe,ke],encapsulation:2})}}return n})(),Pl=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-transitions-example"]],standalone:!1,features:[x],decls:31,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarWidth","thin",3,"visibleChange","suiSidebarAnimation","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),v("click",function(){return s.show("left","overlay")}),e(2,"Overlay"),t(),i(3,"button",1),v("click",function(){return s.show("left","push")}),e(4,"Push"),t(),i(5,"button",1),v("click",function(){return s.show("left","scale down")}),e(6,"Scale Down"),t(),i(7,"button",1),v("click",function(){return s.show("left","uncover")}),e(8,"Uncover"),t(),i(9,"button",1),v("click",function(){return s.show("left","slide along")}),e(10,"Slide Along"),t(),i(11,"button",1),v("click",function(){return s.show("left","slide out")}),e(12,"Slide Out"),t()(),r(13,"div",2),i(14,"sui-sidebar-container",3)(15,"div",4),_("visibleChange",function(p){return w(s.visible,p)||(s.visible=p),p}),i(16,"a",5),r(17,"i",6),e(18," Home"),t(),i(19,"a",5),r(20,"i",7),e(21," Topics"),t(),i(22,"a",5),r(23,"i",8),e(24," Friends"),t()(),i(25,"sui-sidebar-pusher")(26,"div",9)(27,"h3",10),e(28,"Application Content"),t(),r(29,"doc-wireframe",11)(30,"doc-wireframe",11),t()()()),a&2&&(d(15),l("suiSidebarAnimation",s.animation),D("visible",s.visible))},dependencies:[ee,E,T,oe,g,be,A,Xe,qe,Ke,Fe,ke],encapsulation:2})}}return n})(),Fl=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-page-example"]],standalone:!1,features:[x],decls:9,vars:1,consts:[["sui-sidebar","","sui-menu","","suiVertical","","suiInverted","",3,"visibleChange","visible"],["suiMenuItem",""],["sui-button","",3,"click"]],template:function(a,s){a&1&&(i(0,"sui-sidebar-container")(1,"div",0),_("visibleChange",function(p){return w(s.visible,p)||(s.visible=p),p}),i(2,"a",1),e(3,"Item 1"),t(),i(4,"a",1),e(5,"Item 2"),t()(),i(6,"sui-sidebar-pusher")(7,"button",2),v("click",function(){return s.visible=!s.visible}),e(8,"Toggle Sidebar"),t()()()),a&2&&(d(),D("visible",s.visible))},dependencies:[T,Xe,qe,Ke,Fe,ke],encapsulation:2})}}return n})();function Mh(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-sidebar-example"),t())}function Ih(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-visible-example"),t())}function Ph(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-dimmed-example"),t())}function Fh(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-direction-example"),t())}function kh(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-width-example"),t())}function Ah(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-transitions-example"),t())}function Vh(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-page-example"),t())}function Bh(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Sidebar"),t(),i(6,"p"),e(7,"A sidebar, usually an inverted vertical menu"),t(),i(8,"div",5),e(9," Bind "),i(10,"code"),e(11,"[(visible)]"),t(),e(12," to show and hide the sidebar. When it is two-way bound, clicking the page content hides the sidebar. "),t(),c(13,Mh,2,0,"ng-template",6),t(),r(14,"br"),i(15,"h2",2),e(16,"States"),t(),i(17,"doc-code-sample",7)(18,"h3",4),e(19,"Visible"),t(),i(20,"p"),e(21,"A sidebar can be visible on the page"),t(),i(22,"div",5),e(23," A sidebar that is not two-way bound stays visible when the page is clicked. "),t(),c(24,Ih,2,0,"ng-template",6),t(),i(25,"doc-code-sample",3)(26,"h3",4),e(27,"Dimmed"),t(),i(28,"p"),e(29,"A pusher can be dimmed while the sidebar is visible"),t(),c(30,Ph,2,0,"ng-template",6),t(),r(31,"br"),i(32,"h2",2),e(33,"Variations"),t(),i(34,"doc-code-sample",3)(35,"h3",4),e(36,"Direction"),t(),i(37,"p"),e(38,"A sidebar can appear on different sides of the page"),t(),i(39,"div",5),e(40," Top and bottom sidebars should be horizontal menus, so "),i(41,"code"),e(42,"suiVertical"),t(),e(43," is only set for left and right sidebars. "),t(),c(44,Fh,2,0,"ng-template",6),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Width"),t(),i(48,"p"),e(49,"A sidebar can specify its width"),t(),c(50,kh,2,0,"ng-template",6),t(),i(51,"doc-code-sample",3)(52,"h3",4),e(53,"Transitions"),t(),i(54,"p"),e(55,"A sidebar can use different transitions to appear"),t(),i(56,"div",8)(57,"code"),e(58,"uncover"),t(),e(59,", "),i(60,"code"),e(61,"slide along"),t(),e(62," and "),i(63,"code"),e(64,"slide out"),t(),e(65," only support left and right sidebars. "),t(),c(66,Ah,2,0,"ng-template",6),t(),r(67,"br"),i(68,"h2",2),e(69,"Usage"),t(),i(70,"doc-code-sample",3)(71,"h3",4),e(72,"Page Structure"),t(),i(73,"p"),e(74,"A sidebar requires a container with a sidebar and a pusher holding the page content"),t(),i(75,"div",5),e(76," Without "),i(77,"code"),e(78,"suiPushable"),t(),e(79," the page body is the context and the sidebar is fixed to the viewport. Add "),i(80,"code"),e(81,"suiPushable"),t(),e(82," to keep the sidebar inside the container, as in the examples above. "),t(),i(83,"div",8),e(84," A pushable container cannot have padding. "),t(),c(85,Vh,2,0,"ng-template",6),t()()),n&2){let o=f();d(3),l("templateCode",o.snippetSidebar)("componentCode",o.snippetSidebarTs),d(14),l("templateCode",o.snippetVisible),d(8),l("templateCode",o.snippetDimmed)("componentCode",o.snippetDimmedTs),d(9),l("templateCode",o.snippetDirection)("componentCode",o.snippetDirectionTs),d(11),l("templateCode",o.snippetWidth)("componentCode",o.snippetWidthTs),d(6),l("templateCode",o.snippetTransitions)("componentCode",o.snippetTransitionsTs),d(19),l("templateCode",o.snippetPage)("componentCode",o.snippetPageTs)}}function Lh(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-sidebar-container"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",10)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19," suiPushable "),t(),i(20,"td"),e(21," Make the container the sidebar's context instead of the page. Always applied when the pusher is dimmable "),t(),i(22,"td")(23,"div",11),e(24," boolean "),t()(),i(25,"td")(26,"div",12),e(27," false "),t()()()()(),i(28,"h2",2),e(29,"sui-sidebar"),t(),i(30,"h4",4),e(31,"Properties"),t(),i(32,"table",10)(33,"thead")(34,"tr")(35,"th"),e(36,"Property"),t(),i(37,"th"),e(38,"Description"),t(),i(39,"th"),e(40,"Type"),t(),i(41,"th"),e(42,"Default"),t()()(),i(43,"tbody")(44,"tr")(45,"td"),e(46," visible "),t(),i(47,"td"),e(48," Whether the sidebar is shown. Supports two-way binding with "),i(49,"code"),e(50,"[(visible)]"),t()(),i(51,"td")(52,"div",11),e(53," boolean "),t()(),i(54,"td")(55,"div",12),e(56," true "),t()()(),i(57,"tr")(58,"td"),e(59," suiSidebarPosition "),t(),i(60,"td"),e(61," The side of the page the sidebar appears on. Allowed values are "),i(62,"span",13),e(63,"'left'"),t(),e(64," | "),i(65,"span",13),e(66,"'right'"),t(),e(67," | "),i(68,"span",13),e(69,"'top'"),t(),e(70," | "),i(71,"span",13),e(72,"'bottom'"),t()(),i(73,"td")(74,"div",11),e(75," string "),t()(),i(76,"td")(77,"div",12),e(78," 'left' "),t()()(),i(79,"tr")(80,"td"),e(81," suiSidebarWidth "),t(),i(82,"td"),e(83," Set the width of the sidebar. Allowed values are "),i(84,"span",13),e(85,"'very thin'"),t(),e(86," | "),i(87,"span",13),e(88,"'thin'"),t(),e(89," | "),i(90,"span",13),e(91,"'wide'"),t(),e(92," | "),i(93,"span",13),e(94,"'very wide'"),t(),e(95," | "),i(96,"span",13),e(97,"null"),t()(),i(98,"td")(99,"div",11),e(100," string "),t()(),i(101,"td")(102,"div",12),e(103," null "),t()()(),i(104,"tr")(105,"td"),e(106," suiSidebarAnimation "),t(),i(107,"td"),e(108," Set the transition used to show the sidebar. Allowed values are "),i(109,"span",13),e(110,"'overlay'"),t(),e(111," | "),i(112,"span",13),e(113,"'push'"),t(),e(114," | "),i(115,"span",13),e(116,"'scale down'"),t(),e(117," | "),i(118,"span",13),e(119,"'uncover'"),t(),e(120," | "),i(121,"span",13),e(122,"'slide along'"),t(),e(123," | "),i(124,"span",13),e(125,"'slide out'"),t(),e(126," | "),i(127,"span",13),e(128,"null"),t()(),i(129,"td")(130,"div",11),e(131," string "),t()(),i(132,"td")(133,"div",12),e(134," null "),t()()(),i(135,"tr")(136,"td"),e(137," suiInverted "),t(),i(138,"td"),e(139," Invert the colours of the sidebar "),t(),i(140,"td")(141,"div",11),e(142," boolean "),t()(),i(143,"td")(144,"div",12),e(145," false "),t()()(),i(146,"tr")(147,"td"),e(148," suiClosable "),t(),i(149,"td"),e(150," Hide a two-way bound sidebar when the pusher is clicked "),t(),i(151,"td")(152,"div",11),e(153," boolean "),t()(),i(154,"td")(155,"div",12),e(156," true "),t()()()()(),i(157,"h4",4),e(158,"Events"),t(),i(159,"table",10)(160,"thead")(161,"tr")(162,"th"),e(163,"Event"),t(),i(164,"th"),e(165,"Description"),t(),i(166,"th"),e(167,"Type"),t()()(),i(168,"tbody")(169,"tr")(170,"td"),e(171," visibleChange "),t(),i(172,"td"),e(173," Emitted when the sidebar is shown or hidden "),t(),i(174,"td")(175,"div",11),e(176," EventEmitter<boolean> "),t()()()()(),i(177,"h4",4),e(178,"Methods"),t(),i(179,"table",10)(180,"thead")(181,"tr")(182,"th"),e(183,"Method"),t(),i(184,"th"),e(185,"Description"),t()()(),i(186,"tbody")(187,"tr")(188,"td"),e(189," show() "),t(),i(190,"td"),e(191," Shows the sidebar "),t()(),i(192,"tr")(193,"td"),e(194," hide() "),t(),i(195,"td"),e(196," Hides the sidebar "),t()(),i(197,"tr")(198,"td"),e(199," toggle() "),t(),i(200,"td"),e(201," Toggles the visibility of the sidebar "),t()()()(),i(202,"h2",2),e(203,"sui-sidebar-pusher"),t(),i(204,"h4",4),e(205,"Properties"),t(),i(206,"table",10)(207,"thead")(208,"tr")(209,"th"),e(210,"Property"),t(),i(211,"th"),e(212,"Description"),t(),i(213,"th"),e(214,"Type"),t(),i(215,"th"),e(216,"Default"),t()()(),i(217,"tbody")(218,"tr")(219,"td"),e(220," suiDimmable "),t(),i(221,"td"),e(222," Dim the page content while the sidebar is visible "),t(),i(223,"td")(224,"div",11),e(225," boolean "),t()(),i(226,"td")(227,"div",12),e(228," false "),t()()()()()())}var kl=(()=>{class n{constructor(o){this.snippetSidebar=ul,this.snippetSidebarTs=cl,this.snippetVisible=hl,this.snippetDimmed=Sl,this.snippetDimmedTs=xl,this.snippetDirection=vl,this.snippetDirectionTs=gl,this.snippetWidth=fl,this.snippetWidthTs=bl,this.snippetTransitions=El,this.snippetTransitionsTs=Cl,this.snippetPage=yl,this.snippetPageTs=Dl,o.setTitle("Sidebar | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar"]],standalone:!1,decls:3,vars:2,consts:[["header","Sidebar","subHeader","A sidebar hides additional content beside a page","semanticUrl","https://semantic-ui.com/modules/sidebar.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[3,"templateCode"],["sui-message","","suiState","warning"],[1,"sidebar-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""]],template:function(a,s){a&1&&(i(0,"doc-page",0),c(1,Bh,86,13,"div",1)(2,Lh,229,0,"div",1),t()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[O,H,L,W,F,R,E,re,wl,_l,Tl,Ml,Il,Pl,Fl],styles:["[_nghost-%COMP%]     .sidebar-demo sui-sidebar-container.ui.segment{height:22rem;margin-top:0}"]})}}return n})();var Hh=[{path:"accordion",component:Co},{path:"checkbox",component:Ko},{path:"dimmer",component:Sn},{path:"dropdown",component:Zr},{path:"embed",component:Yi},{path:"modal",component:ar},{path:"popup",component:Za},{path:"progress",component:Fa},{path:"rating",component:_n},{path:"search",component:Jn},{path:"select",component:Vs},{path:"shape",component:pl},{path:"sidebar",component:kl},{path:"tab",component:po}],Al=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({imports:[Vt.forChild(Hh),Vt]})}}return n})();var wC=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=X({type:n})}static{this.\u0275inj=J({imports:[Y,Ci,Al,vi,ui,yi,Ii,zi,ki,hi,bn,to,_i,Vi,Pi,di,ci,Si,li,Ks,pi,Bi,Fi,xi,wi,ca,Li,vo,Ai,al,mi,ri]})}}return n})();export{wC as ModulesModule};
