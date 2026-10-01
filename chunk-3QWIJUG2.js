import{a as Ke,b as Ze,c as $e,d as yi}from"./chunk-LFY7FQLT.js";import{a as ht,b as Ri,h as Yi,i as Dt,j as Ie,k as Ji,l as Ve,m as Xi}from"./chunk-VBXRRGRF.js";import{a as de,b as qi}from"./chunk-7VSZDAOM.js";import{c as wt,d as ot,e as z,f as U,g as j,h as Ni,i as ce,j as Ui}from"./chunk-2HLRGEM6.js";import{a as Pi,c as Qe,h as et,l as ki,m as Fi,n as Ai,o as Vi,p as St,q as zt,r as xt,t as Gi}from"./chunk-W6MYVGP4.js";import{a as Lt,b as Ot,c as Ht,d as Rt,e as Wi,f as zi,h as Wt,i as ji}from"./chunk-ZCDAJONQ.js";import{a as Te,c as Ei}from"./chunk-R6AOPLEN.js";import{a as W,e as Bi,f as re,g as Bt,h as Li,j as Oi,k as T,l as le,m as Hi}from"./chunk-DR4HYFGY.js";import{A as L,B as O,C as H,D as R,E as N,F as Ii,b as Fe,c as Ae,f as gi,h as g,i as bi,j as Me,k as Ci,l as A,n as wi,o as Yt,p as Jt,r as Di,s as ye,t as Ti,w as F,x as Mi}from"./chunk-QBLBVBYM.js";import{b as At,d as Gt,h as I,i as Y,j as b,k as Vt,l as _i}from"./chunk-NBCTIWWJ.js";import{$ as It,Ca as u,Cb as hi,Da as q,Db as Si,Ea as pt,Eb as Be,Fa as ai,G as Ut,Ga as x,Ha as h,Ia as si,K as ei,M as X,Mb as Xe,Oa as ri,Pa as ie,Q as Z,Qa as ne,Sa as Ue,T as y,Ta as Ge,U as C,Ua as Ye,Va as l,Wa as i,Wb as qe,X as Mt,Xa as e,Xb as xi,Ya as r,Yb as fi,Za as li,_ as $,_a as di,ab as Ft,ac as J,bb as se,d as Qt,da as S,db as f,eb as mi,fa as Pt,fb as E,fc as B,g as M,ga as ti,gb as Ee,gc as vi,hb as be,ib as ut,jb as ct,kb as we,lb as De,ma as ii,mb as k,na as ni,nb as pi,ob as ue,pb as ui,qa as d,qb as Je,rb as t,sb as nt,t as Nt,tb as _e,va as kt,vb as w,wa as V,wb as D,xb as _,ya as oi,zb as ci}from"./chunk-LQ7F2QM7.js";import{a as G,b as ae,e as Ne}from"./chunk-HHHS5ZAZ.js";var Ki=`<sui-embed
    suiSource="youtube"
    suiId="O6Xo21L0ybE"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var Zi=`<sui-embed
    suiSource="vimeo"
    suiId="125292332"
    suiPlaceHolder="https://semantic-ui.com/images/vimeo-example.jpg"></sui-embed>
`;var $i=`<sui-embed
    suiIcon="right circle arrow"
    suiSourceUrl="http://www.myfav.es/jack"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var Qi=`<sui-embed
    suiAspectRatio="4:3"
    suiSource="youtube"
    suiId="HTZudKi36bo"
    suiPlaceHolder="https://semantic-ui.com/images/4by3.jpg"></sui-embed>
`;function xd(n,m){if(n&1&&r(0,"img",2),n&2){let o=E();l("src",o.suiPlaceHolder,ii)}}function fd(n,m){if(n&1&&(i(0,"div",3),r(1,"iframe",4),hi(2,"safeUrl"),e()),n&2){let o=E();d(),l("src",Si(2,1,o.videoUrl),ni)}}var vd=(()=>{class n{constructor(){this.sanitizer=Z(vi)}transform(o,...a){return this.sanitizer.bypassSecurityTrustResourceUrl(o)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275pipe=ai({name:"safeUrl",type:n,pure:!0})}}return n})(),ft=(()=>{class n{constructor(){this.cdr=Z(Xe),this.suiSource=null,this.suiAspectRatio=null,this.suiIcon="video play",this.suiId=null,this.suiPlaceHolder=null,this.suiSourceUrl=null,this.suiAutoplay=!1,this.isPLaying=!1,this.videoUrl=""}ngAfterViewInit(){this.suiAutoplay&&this.playVideo()}get classes(){return["ui",this.suiAspectRatio,"embed",Y.getPropClass(this.isPLaying,"active")].join(" ")}playVideo(){this.suiSourceUrl&&(this.videoUrl=this.suiSourceUrl),this.suiSource==="vimeo"&&(this.videoUrl=`//player.vimeo.com/video/${this.suiId}?api=false&autoplay=true&byline=false&color=%23444444&portrait=false&title=false`),this.suiSource==="youtube"&&(this.videoUrl=`//www.youtube.com/embed/${this.suiId}?autohide=true&autoplay=true&color=%23444444&hq=true&jsapi=false&modestbranding=true`),this.isPLaying=!0,this.cdr.detectChanges()}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-embed"]],inputs:{suiSource:"suiSource",suiAspectRatio:"suiAspectRatio",suiIcon:"suiIcon",suiId:"suiId",suiPlaceHolder:"suiPlaceHolder",suiSourceUrl:"suiSourceUrl",suiAutoplay:"suiAutoplay"},decls:4,vars:4,consts:[[3,"ngClass"],["sui-icon","",3,"click","suiIconType"],[1,"placeholder",3,"src"],[1,"embed"],["scrolling","no","webkitallowfullscreen","","mozallowfullscreen","","allowfullscreen","","width","100%","height","100%","frameborder","0",3,"src"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"i",1),f("click",function(){return s.playVideo()}),e(),ie(2,xd,1,1,"img",2),ie(3,fd,3,3,"div",3),e()),a&2&&(l("ngClass",s.classes),d(),l("suiIconType",s.suiIcon),d(),ne(s.suiPlaceHolder?2:-1),d(),ne(s.isPLaying?3:-1))},dependencies:[J,qe,g,vd],encapsulation:2,changeDetection:0})}}return M([I()],n.prototype,"suiAutoplay",void 0),n})(),en=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[J,ft]})}}return n})();var vt=class{constructor(){this.isDefinitionsActive=!0}},tn=(()=>{class n extends vt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed-youtube-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiSource","youtube","suiId","O6Xo21L0ybE","suiPlaceHolder","https://semantic-ui.com/images/image-16by9.png"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[ft],encapsulation:2})}}return n})(),nn=(()=>{class n extends vt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed-vimeo-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiSource","vimeo","suiId","125292332","suiPlaceHolder","https://semantic-ui.com/images/vimeo-example.jpg"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[ft],encapsulation:2})}}return n})(),on=(()=>{class n extends vt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed-custom-content-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiIcon","right circle arrow","suiSourceUrl","http://www.myfav.es/jack","suiPlaceHolder","https://semantic-ui.com/images/image-16by9.png"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[ft],encapsulation:2})}}return n})(),an=(()=>{class n extends vt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed-aspect-ratio-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiAspectRatio","4:3","suiSource","youtube","suiId","HTZudKi36bo","suiPlaceHolder","https://semantic-ui.com/images/4by3.jpg"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[ft],encapsulation:2})}}return n})();function bd(n,m){n&1&&r(0,"doc-embed-youtube-example")}function yd(n,m){n&1&&r(0,"doc-embed-vimeo-example")}function Cd(n,m){n&1&&r(0,"doc-embed-custom-content-example")}function wd(n,m){n&1&&r(0,"doc-embed-aspect-ratio-example")}function Dd(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"States"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"YouTube"),e(),i(6,"p"),t(7,"An embed can be used to display YouTube Content"),e(),h(8,bd,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Vimeo"),e(),i(12,"p"),t(13,"An embed can be used to display Vimeo content."),e(),h(14,yd,1,0,"ng-template",5),e(),i(15,"doc-code-sample",3)(16,"h3",4),t(17,"Custom Content"),e(),i(18,"p"),t(19,"An embed can display any web content"),e(),h(20,Cd,1,0,"ng-template",5),e(),i(21,"h2",2),t(22,"Variations"),e(),i(23,"doc-code-sample",3)(24,"h3",4),t(25,"Aspect Ratio"),e(),i(26,"p"),t(27,"An embed can specify an alternative aspect ratio"),e(),h(28,wd,1,0,"ng-template",5),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetYoutube),d(6),l("templateCode",o.snippetVimeo),d(6),l("templateCode",o.snippetCustomContent),d(8),l("templateCode",o.snippetAspectRatio)}}function _d(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-embed"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiSource"),e(),i(20,"td"),t(21,"Specifies a source to use. Cannot be used together with url. Allowed values could be "),i(22,"span",7),t(23,"'youtube'"),e(),t(24," | "),i(25,"span",7),t(26,"'vimeo'"),e(),t(27," | "),i(28,"span",7),t(29,"null"),e()(),i(30,"td")(31,"div",8),t(32," string"),e()(),i(33,"td")(34,"div",9),t(35," null"),e()()(),i(36,"tr")(37,"td"),t(38,"suiAspectRatio"),e(),i(39,"td"),t(40," An embed can specify an alternative aspect ratio. Allowed values could be "),i(41,"span",7),t(42,"'4:3'"),e(),t(43," | "),i(44,"span",7),t(45,"'16:9'"),e(),t(46," | "),i(47,"span",7),t(48,"'21:9'"),e(),t(49," | "),i(50,"span",7),t(51,"null"),e()(),i(52,"td")(53,"div",8),t(54,"string"),e()(),i(55,"td")(56,"div",9),t(57,"null"),e()()(),i(58,"tr")(59,"td"),t(60,"suiIcon "),e(),i(61,"td"),t(62," Specifies an icon to use with placeholder content. "),e(),i(63,"td")(64,"div",8),t(65,"string"),e()(),i(66,"td")(67,"div",9),t(68,"video play"),e()()(),i(69,"tr")(70,"td"),t(71,"suiId"),e(),i(72,"td"),t(73," Specifies an id for source. "),e(),i(74,"td")(75,"div",8),t(76,"string"),e(),t(77," | "),i(78,"div",8),t(79,"number"),e()(),i(80,"td")(81,"div",9),t(82,"null"),e()()(),i(83,"tr")(84,"td"),t(85,"suiPlaceHolder"),e(),i(86,"td"),t(87," A placeholder image for embed "),e(),i(88,"td")(89,"div",8),t(90,"string"),e()(),i(91,"td")(92,"div",9),t(93,"null"),e()()(),i(94,"tr")(95,"td"),t(96,"suiSourceUrl"),e(),i(97,"td"),t(98," Specifies a url to use for embed. Cannot be used together with source "),e(),i(99,"td")(100,"div",8),t(101,"string"),e()(),i(102,"td")(103,"div",9),t(104,"null"),e()()(),i(105,"tr")(106,"td"),t(107,"suiAutoplay"),e(),i(108,"td"),t(109," Setting to true or false will force autoplay "),e(),i(110,"td")(111,"div",8),t(112," boolean "),e()(),i(113,"td")(114,"div",9),t(115," false "),e()()()()()())}var sn=(()=>{class n{constructor(o){this.snippetYoutube=Ki,this.snippetVimeo=Zi,this.snippetCustomContent=$i,this.snippetAspectRatio=Qi,this.isDefinitionsActive=!0,o.setTitle("Embed | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-embed"]],standalone:!1,decls:3,vars:2,consts:[["header","Embed","subHeader","An embed displays content from other websites like YouTube videos or Google Maps"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Dd,29,4,"div",1)(2,_d,116,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,tn,nn,on,an],encapsulation:2})}}return n})();var rn=`<button sui-button
        (click)="simpleDimmerVisible = !simpleDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     [(dimmed)]="simpleDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var ln=`dimmerVisible: boolean = false;
`;var dn=`<button sui-button
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
`;var mn=`<button sui-button
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
`;var pn=`<div sui-segment
     sui-dimmer
     dimmed="true">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var un=`<div sui-segment
     sui-dimmer
     disabled>
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var cn=`<button sui-button
        (click)="blurringDimmerVisible = !blurringDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerBlurring
     [(dimmed)]="blurringDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var hn=`<button sui-button
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
`;var Sn=`<button sui-button
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
`;var xn=`<button sui-button
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
`;var fn=`<button sui-button
        (click)="invertedDimmerVisible = !invertedDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerInverted
     [(dimmed)]="invertedDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;function Hd(n,m){n&1&&(i(0,"h2",4),r(1,"i",5),t(2," Dimmed Message! "),e())}function Rd(n,m){n&1&&(i(0,"h2",3),r(1,"i",4),t(2," Dimmed Message "),e(),i(3,"div",5),t(4,"Dimmer sub-header"),e())}function Wd(n,m){n&1&&(i(0,"h2",4),t(1," Title "),e(),i(2,"div",5),t(3,"Add "),e(),i(4,"div",6),t(5,"View"),e())}function zd(n,m){n&1&&(i(0,"h2",4),t(1," Title "),e(),i(2,"div",5),t(3,"Add "),e(),i(4,"div",6),t(5,"View"),e())}var Ce=class{constructor(){this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1}},gn=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-simple-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),f("click",function(){return s.simpleDimmerVisible=!s.simpleDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),_("dimmedChange",function(p){return D(s.simpleDimmerVisible,p)||(s.simpleDimmerVisible=p),p}),r(3,"doc-wireframe",2),e()),a&2&&(d(2),w("dimmed",s.simpleDimmerVisible))},dependencies:[N,T,Ie,F],encapsulation:2})}}return n})(),En=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-content-example"]],standalone:!1,features:[x],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiIcon","","suiInverted",""],["sui-icon","","suiIconType","heart"]],template:function(a,s){a&1&&(i(0,"button",0),f("click",function(){return s.contentDimmerVisible=!s.contentDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),_("dimmedChange",function(p){return D(s.contentDimmerVisible,p)||(s.contentDimmerVisible=p),p}),r(3,"doc-wireframe",2),h(4,Hd,3,0,"ng-template",3),e()),a&2&&(d(2),w("dimmed",s.contentDimmerVisible))},dependencies:[N,b,T,Ie,Dt,g,F],encapsulation:2})}}return n})(),bn=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-page-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-dimmer","","suiDimmerFullPage","",3,"dimmedChange","dimmed"],["suiDimmerContent",""],["sui-header","","suiIcon","","suiInverted",""],["sui-icon","","suiIconType","mail"],["suiSubHeader",""]],template:function(a,s){a&1&&(i(0,"button",0),f("click",function(){return s.pageDimmerVisible=!s.pageDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),_("dimmedChange",function(p){return D(s.pageDimmerVisible,p)||(s.pageDimmerVisible=p),p}),h(3,Rd,5,0,"ng-template",2),e()),a&2&&(d(2),w("dimmed",s.pageDimmerVisible))},dependencies:[b,Vt,T,Ie,Dt,g],encapsulation:2})}}return n})(),yn=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-active-example"]],standalone:!1,features:[x],decls:2,vars:0,consts:[["sui-segment","","sui-dimmer","","dimmed","true"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"doc-wireframe",1),e())},dependencies:[N,Ie,F],encapsulation:2})}}return n})(),Cn=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-disabled-example"]],standalone:!1,features:[x],decls:2,vars:0,consts:[["sui-segment","","sui-dimmer","","disabled",""],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"doc-wireframe",1),e())},dependencies:[N,Ie,F],encapsulation:2})}}return n})(),wn=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-blurring-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerBlurring","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),f("click",function(){return s.blurringDimmerVisible=!s.blurringDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),_("dimmedChange",function(p){return D(s.blurringDimmerVisible,p)||(s.blurringDimmerVisible=p),p}),r(3,"doc-wireframe",2),e()),a&2&&(d(2),w("dimmed",s.blurringDimmerVisible))},dependencies:[N,T,Ie,F],encapsulation:2})}}return n})(),Dn=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-blurring-inverted-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerBlurring","","suiDimmerInverted","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),f("click",function(){return s.blurringDInvertedDimmerVisible=!s.blurringDInvertedDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),_("dimmedChange",function(p){return D(s.blurringDInvertedDimmerVisible,p)||(s.blurringDInvertedDimmerVisible=p),p}),r(3,"doc-wireframe",2),e()),a&2&&(d(2),w("dimmed",s.blurringDInvertedDimmerVisible))},dependencies:[N,T,Ie,F],encapsulation:2})}}return n})(),_n=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-top-alignment-example"]],standalone:!1,features:[x],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerAlignment","top",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiInverted",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,s){a&1&&(i(0,"button",0),f("click",function(){return s.topAlignmentDimmerVisible=!s.topAlignmentDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),_("dimmedChange",function(p){return D(s.topAlignmentDimmerVisible,p)||(s.topAlignmentDimmerVisible=p),p}),r(3,"doc-wireframe",2),h(4,Wd,6,0,"ng-template",3),e()),a&2&&(d(2),w("dimmed",s.topAlignmentDimmerVisible))},dependencies:[N,b,T,Ie,Dt,F],encapsulation:2})}}return n})(),Tn=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-bottom-alignment-example"]],standalone:!1,features:[x],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerAlignment","bottom",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiInverted",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,s){a&1&&(i(0,"button",0),f("click",function(){return s.bottomAlignmentDimmerVisible=!s.bottomAlignmentDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),_("dimmedChange",function(p){return D(s.bottomAlignmentDimmerVisible,p)||(s.bottomAlignmentDimmerVisible=p),p}),r(3,"doc-wireframe",2),h(4,zd,6,0,"ng-template",3),e()),a&2&&(d(2),w("dimmed",s.bottomAlignmentDimmerVisible))},dependencies:[N,b,T,Ie,Dt,F],encapsulation:2})}}return n})(),Mn=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer-inverted-example"]],standalone:!1,features:[x],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerInverted","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),f("click",function(){return s.invertedDimmerVisible=!s.invertedDimmerVisible}),t(1,` Toggle Dimmer
`),e(),i(2,"div",1),_("dimmedChange",function(p){return D(s.invertedDimmerVisible,p)||(s.invertedDimmerVisible=p),p}),r(3,"doc-wireframe",2),e()),a&2&&(d(2),w("dimmed",s.invertedDimmerVisible))},dependencies:[N,T,Ie,F],encapsulation:2})}}return n})();function Nd(n,m){n&1&&r(0,"doc-dimmer-simple-example")}function Ud(n,m){n&1&&r(0,"doc-dimmer-content-example")}function Gd(n,m){n&1&&r(0,"doc-dimmer-page-example")}function Yd(n,m){n&1&&r(0,"doc-dimmer-active-example")}function Jd(n,m){n&1&&r(0,"doc-dimmer-disabled-example")}function Xd(n,m){n&1&&r(0,"doc-dimmer-blurring-example")}function qd(n,m){n&1&&r(0,"doc-dimmer-blurring-inverted-example")}function Kd(n,m){n&1&&r(0,"doc-dimmer-top-alignment-example")}function Zd(n,m){n&1&&r(0,"doc-dimmer-bottom-alignment-example")}function $d(n,m){n&1&&r(0,"doc-dimmer-inverted-example")}function Qd(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Dimmer"),e(),i(6,"p"),t(7,"A simple dimmer displays no content"),e(),h(8,Nd,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Content Dimmer"),e(),i(12,"p"),t(13,"A dimmer can display content"),e(),h(14,Ud,1,0,"ng-template",5),e(),i(15,"doc-code-sample",3)(16,"h3",4),t(17,"Page Dimmer"),e(),i(18,"p"),t(19,"A dimmer can be formatted to be fixed to the page"),e(),h(20,Gd,1,0,"ng-template",5),e(),i(21,"h2",2),t(22,"States"),e(),i(23,"doc-code-sample",6)(24,"h3",4),t(25,"Active"),e(),i(26,"p"),t(27,"An active dimmer will dim its parent container"),e(),h(28,Yd,1,0,"ng-template",5),e(),i(29,"doc-code-sample",6)(30,"h3",4),t(31,"Disabled"),e(),i(32,"p"),t(33,"A disabled dimmer cannot be activated"),e(),h(34,Jd,1,0,"ng-template",5),e(),i(35,"h2",2),t(36,"Variations"),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Blurring"),e(),i(40,"p"),t(41,"A dimmable element can blur its contents"),e(),h(42,Xd,1,0,"ng-template",5),e(),i(43,"doc-code-sample",3),h(44,qd,1,0,"ng-template",5),e(),i(45,"doc-code-sample",3)(46,"h3",4),t(47,"Vertical Alignment"),e(),i(48,"p"),t(49,"A dimmer can have its content top or bottom aligned."),e(),h(50,Kd,1,0,"ng-template",5),e(),i(51,"doc-code-sample",3),h(52,Zd,1,0,"ng-template",5),e(),i(53,"doc-code-sample",3)(54,"h3",4),t(55,"Inverted"),e(),i(56,"p"),t(57,"A dimmer can be formatted to have its colours inverted"),e(),h(58,$d,1,0,"ng-template",5),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetSimple)("componentCode",o.snippetSharedTs),d(6),l("templateCode",o.snippetContent)("componentCode",o.snippetSharedTs),d(6),l("templateCode",o.snippetPage)("componentCode",o.snippetSharedTs),d(8),l("templateCode",o.snippetActive),d(6),l("templateCode",o.snippetDisabled),d(8),l("templateCode",o.snippetBlurring)("componentCode",o.snippetSharedTs),d(6),l("templateCode",o.snippetBlurringInverted)("componentCode",o.snippetSharedTs),d(2),l("templateCode",o.snippetTopAligned)("componentCode",o.snippetSharedTs),d(6),l("templateCode",o.snippetBottomAligned)("componentCode",o.snippetSharedTs),d(2),l("templateCode",o.snippetInverted)("componentCode",o.snippetSharedTs)}}function em(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-dimmer"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiDimmerAlignment"),e(),i(20,"td"),t(21,"Specifies the dimmer content position. Allowed values could be "),i(22,"span",8),t(23,"'top'"),e(),t(24," | "),i(25,"span",8),t(26,"'bottom'"),e(),t(27," | "),i(28,"span",8),t(29,"null"),e()(),i(30,"td")(31,"div",9),t(32,"string"),e()(),i(33,"td")(34,"div",10),t(35,"top"),e()()(),i(36,"tr")(37,"td"),t(38,"suiDimmerBlurring"),e(),i(39,"td"),t(40,"Determine if the dimmer should blur the background"),e(),i(41,"td")(42,"div",9),t(43,"boolean "),e()(),i(44,"td")(45,"div",10),t(46,"false "),e()()(),i(47,"tr")(48,"td"),t(49,"suiDimmerInverted"),e(),i(50,"td"),t(51,"Determine if the dimmer should invert its colours"),e(),i(52,"td")(53,"div",9),t(54,"boolean "),e()(),i(55,"td")(56,"div",10),t(57,"false "),e()()(),i(58,"tr")(59,"td"),t(60,"suiDimmerSimple"),e(),i(61,"td"),t(62,"Show a simple dimmer"),e(),i(63,"td")(64,"div",9),t(65,"boolean "),e()(),i(66,"td")(67,"div",10),t(68,"false "),e()()(),i(69,"tr")(70,"td"),t(71,"suiDimmerFullPage"),e(),i(72,"td"),t(73,"Determine if the dimmer should cover the entire page"),e(),i(74,"td")(75,"div",9),t(76,"boolean "),e()(),i(77,"td")(78,"div",10),t(79,"false "),e()()(),i(80,"tr")(81,"td"),t(82,"suiCloseOnClick"),e(),i(83,"td"),t(84,"Determine if the dimmer should be closed when the mask or any other location is clicked"),e(),i(85,"td")(86,"div",9),t(87,"boolean "),e()(),i(88,"td")(89,"div",10),t(90,"true "),e()()(),i(91,"tr")(92,"td"),t(93,"disabled"),e(),i(94,"td"),t(95,"Stop the dimmer from responding to actions"),e(),i(96,"td")(97,"div",9),t(98,"boolean "),e()(),i(99,"td")(100,"div",10),t(101,"false "),e()()(),i(102,"tr")(103,"td"),t(104,"dimmed"),e(),i(105,"td"),t(106,"Determines if the dimmer is shown or not. This field supports two way binding following the "),i(107,"code"),t(108,"[(dimmed)]"),e(),t(109," syntax. "),e(),i(110,"td")(111,"div",9),t(112,"boolean "),e()(),i(113,"td")(114,"div",10),t(115,"false "),e()()()()(),i(116,"h2",2),t(117,"suiDimmerContent"),e(),i(118,"h4",4),t(119,"Properties"),e(),i(120,"table",7)(121,"thead")(122,"tr")(123,"th"),t(124,"Property"),e(),i(125,"th"),t(126,"Description"),e(),i(127,"th"),t(128,"Type"),e(),i(129,"th"),t(130,"Default"),e()()(),r(131,"tbody"),i(132,"tfoot",11)(133,"tr")(134,"th",12)(135,"div",13),t(136,"No properties for this directive"),e()()()()()())}var In=(()=>{class n{constructor(o){this.snippetSimple=rn,this.snippetSharedTs=ln,this.snippetContent=dn,this.snippetPage=mn,this.snippetActive=pn,this.snippetDisabled=un,this.snippetBlurring=cn,this.snippetBlurringInverted=hn,this.snippetTopAligned=Sn,this.snippetBottomAligned=xn,this.snippetInverted=fn,this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1,o.setTitle("Dimmer | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dimmer"]],standalone:!1,decls:3,vars:2,consts:[["header","Dimmer","subHeader","A dimmer hides distractions to focus attention on particular content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["docDemo",""],[3,"templateCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Qd,59,18,"div",1)(2,em,137,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,gn,En,bn,yn,Cn,wn,Dn,_n,Tn,Mn],styles:["button[_ngcontent-%COMP%]{margin-bottom:1.2rem!important}"]})}}return n})();var Pn=`<sui-rating suiMaxValue="1"></sui-rating>
`;var kn=`<sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
`;var Fn=`<sui-rating
    suiType="heart"
    suiValue="1"
    suiMaxValue="3"></sui-rating>
`;var An=`<sui-rating
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
`;function am(n,m){if(n&1){let o=se();li(0,"i",1),mi("click",function(){let s=y(o).$implicit,c=E();return C(c.onClick(s))})("mouseover",function(){let s=y(o).$implicit,c=E();return C(c.onHover(s))})("mouseout",function(){y(o);let s=E();return C(s.onUnhover())}),di()}if(n&2){let o=m.$implicit,a=E();ue("active",o<=a.suiValue)("selected",o<=a.hoverValue)}}var st=(()=>{class n{set suiValue(o){this.value!==o&&(this.value=+o)}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.generateRatingsArray()}get suiMaxValue(){return this.maxValue}get classes(){return["ui",this.suiSize,this.suiType,Y.getPropClass(this.suiReadOnly,"read-only"),"rating",Y.getPropClass(this.hoverValue>0,"selected")].join(" ")}constructor(){this.changeDetectorRef=Z(Xe),this.valueChanged=new $,this.suiSize=null,this.suiType=null,this.suiReadOnly=!1,this.suiClearable=!1,this.ratingsArray=[],this.hoverValue=0,this.value=0,this.maxValue=5,this.controlValueChangeFn=()=>{},this.generateRatingsArray()}onClick(o){this.suiReadOnly||(this.suiClearable&&this.suiValue===o&&(o=0),this.suiValue!==o&&(this.controlValueChangeFn(o),this.valueChanged.emit(o)),this.suiValue=o)}onHover(o){this.suiReadOnly?this.hoverValue=0:this.hoverValue=o}onUnhover(){this.suiReadOnly||(this.hoverValue=0)}writeValue(o){this.suiValue=o,this.changeDetectorRef.markForCheck()}registerOnChange(o){this.controlValueChangeFn=o}registerOnTouched(o){}setDisabledState(o){}generateRatingsArray(){this.ratingsArray=Array(this.maxValue).fill(0).map((o,a)=>a+1)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-rating"]],hostVars:2,hostBindings:function(a,s){a&2&&Je(s.classes)},inputs:{suiSize:"suiSize",suiType:"suiType",suiReadOnly:"suiReadOnly",suiClearable:"suiClearable",suiValue:"suiValue",suiMaxValue:"suiMaxValue"},outputs:{valueChanged:"valueChanged"},features:[ci([{provide:Pi,useExisting:ei(()=>n),multi:!0}])],decls:2,vars:0,consts:[[1,"icon",3,"active","selected"],[1,"icon",3,"click","mouseover","mouseout"]],template:function(a,s){a&1&&Ge(0,am,1,4,"i",0,Ue),a&2&&Ye(s.ratingsArray)},styles:[`:host.read-only .icon{cursor:auto}
`],encapsulation:2})}}return M([I()],n.prototype,"suiReadOnly",void 0),M([I()],n.prototype,"suiClearable",void 0),n})(),Vn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({})}}return n})();var Et=class{constructor(){this.isDefinitionsActive=!0}},Ln=(()=>{class n extends Et{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating-basic-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiMaxValue","1"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[st],encapsulation:2})}}return n})(),On=(()=>{class n extends Et{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating-star-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiType","star","suiValue","3","suiMaxValue","4"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[st],encapsulation:2})}}return n})(),Hn=(()=>{class n extends Et{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating-heart-example"]],standalone:!1,features:[x],decls:1,vars:0,consts:[["suiType","heart","suiValue","1","suiMaxValue","3"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[st],encapsulation:2})}}return n})(),Rn=(()=>{class n extends Et{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating-sizes-example"]],standalone:!1,features:[x],decls:22,vars:0,consts:[["suiSize","mini","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","tiny","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","small","suiType","star","suiValue","3","suiMaxValue","4"],["suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","large","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","huge","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","massive","suiType","star","suiValue","3","suiMaxValue","4"]],template:function(a,s){a&1&&r(0,"sui-rating",0)(1,"br")(2,"br")(3,"sui-rating",1)(4,"br")(5,"br")(6,"sui-rating",2)(7,"br")(8,"br")(9,"sui-rating",3)(10,"br")(11,"br")(12,"sui-rating",4)(13,"br")(14,"br")(15,"sui-rating",5)(16,"br")(17,"br")(18,"sui-rating",5)(19,"br")(20,"br")(21,"sui-rating",6)},dependencies:[st],encapsulation:2})}}return n})();function rm(n,m){n&1&&r(0,"doc-rating-basic-example")}function lm(n,m){n&1&&r(0,"doc-rating-star-example")}function dm(n,m){n&1&&r(0,"doc-rating-heart-example")}function mm(n,m){n&1&&r(0,"doc-rating-sizes-example")}function pm(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"States"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Rating "),i(6,"span",5),t(7,"Flexbox"),e()(),i(8,"p"),t(9,"A basic rating"),e(),h(10,rm,1,0,"ng-template",6),e(),i(11,"doc-code-sample",3)(12,"h3",4),t(13,"Star"),e(),i(14,"p"),t(15,"A rating can use a set of star icons"),e(),h(16,lm,1,0,"ng-template",6),e(),i(17,"doc-code-sample",3)(18,"h3",4),t(19,"Heart"),e(),i(20,"p"),t(21,"A rating can use a set of heart icons"),e(),h(22,dm,1,0,"ng-template",6),e(),i(23,"h2",2),t(24,"Variations"),e(),i(25,"doc-code-sample",3)(26,"h3",4),t(27,"Size"),e(),i(28,"p"),t(29,"A rating can vary in size"),e(),h(30,mm,1,0,"ng-template",6),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetBasic),d(8),l("templateCode",o.snippetStar),d(6),l("templateCode",o.snippetHeart),d(8),l("templateCode",o.snippetSizes)}}function um(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-rating"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiSize"),e(),i(20,"td"),t(21,"Set the rating size. Allowed values could be "),i(22,"span",8),t(23,"mini"),e(),t(24," | "),i(25,"span",8),t(26,"tiny"),e(),t(27," | "),i(28,"span",8),t(29,"small"),e(),t(30," | "),i(31,"span",8),t(32,"medium"),e(),t(33," | "),i(34,"span",8),t(35,"big"),e(),t(36," | "),i(37,"span",8),t(38,"huge"),e(),t(39," | "),i(40,"span",8),t(41,"massive"),e(),t(42," | "),i(43,"span",8),t(44,"null"),e()(),i(45,"td")(46,"div",5),t(47," string "),e()(),i(48,"td")(49,"div",9),t(50," null "),e()()(),i(51,"tr")(52,"td"),t(53,"suiType"),e(),i(54,"td"),t(55,"Specifies a icon to use. Cannot be used together with url. Allowed values could be "),i(56,"span",8),t(57,"star"),e(),t(58," | "),i(59,"span",8),t(60,"heart"),e(),t(61," | "),i(62,"span",8),t(63,"null"),e()(),i(64,"td")(65,"div",5),t(66," string"),e()(),i(67,"td")(68,"div",9),t(69," null"),e()()(),i(70,"tr")(71,"td"),t(72,"suiReadOnly "),e(),i(73,"td"),t(74," Setting to true or false will determine if users can change the rating value "),e(),i(75,"td")(76,"div",5),t(77," boolean "),e()(),i(78,"td")(79,"div",9),t(80," false "),e()()(),i(81,"tr")(82,"td"),t(83,"suiClearable"),e(),i(84,"td"),t(85," Setting to true or false will determine if clicking on the value would reset it "),e(),i(86,"td")(87,"div",5),t(88," boolean "),e()(),i(89,"td")(90,"div",9),t(91," false "),e()()()()(),i(92,"h4",4),t(93,"Events"),e(),i(94,"table",7)(95,"thead")(96,"tr")(97,"th"),t(98,"Event"),e(),i(99,"th"),t(100,"Description"),e(),i(101,"th"),t(102,"Type"),e()()(),i(103,"tbody")(104,"tr")(105,"td"),t(106,"valueChanged "),e(),i(107,"td"),t(108,"Fired when the rating value is changed. Also supports "),i(109,"code"),t(110,"[(ngModel)]"),e(),t(111," syntax"),e(),i(112,"td")(113,"div",5),t(114," number "),e()()()()()())}var Wn=(()=>{class n{constructor(o){this.snippetBasic=Pn,this.snippetStar=kn,this.snippetHeart=Fn,this.snippetSizes=An,this.isDefinitionsActive=!0,o.setTitle("Rating | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-rating"]],standalone:!1,decls:3,vars:2,consts:[["header","Rating","subHeader","A rating indicates user interest in content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-label","","suiColour","teal"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,pm,31,4,"div",1)(2,um,115,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,Ln,On,Hn,Rn],encapsulation:2})}}return n})();var zn=`<sui-search
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var jn=`<sui-search
    suiShowIcon
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var Nn=`<sui-search
    suiShowIcon
    suiPlaceholder="Common animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Un=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="countries">
</sui-search>
`;var Gn=`countries = [
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
`;var Yn=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="categoryContent">
</sui-search>
`;var Jn=`categoryContent = [
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
`;var Xn=`<sui-search
    suiLoading
    suiPlaceholder="Search..."
    [suiOptions]="blankOptions">
</sui-search>
`;var qn=`<sui-search
    disabled
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptions]="blankOptions">
</sui-search>
`;var Kn=`<sui-search
    suiFluid
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Zn=`<sui-search
    suiShowIcon
    suiAlignment="right"
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Pe=class n{constructor(){this.blankOptions=[],this.countries=[{title:"Andorra"},{title:"United Arab Emirates"},{title:"Afghanistan"},{title:"Antigua"},{title:"Anguilla"},{title:"Albania"},{title:"Armenia"},{title:"Netherlands Antilles"},{title:"Angola"},{title:"Argentina"},{title:"American Samoa"},{title:"Austria"},{title:"Australia"},{title:"Aruba"},{title:"Aland Islands"},{title:"Azerbaijan"},{title:"Bosnia"},{title:"Barbados"},{title:"Bangladesh"},{title:"Belgium"},{title:"Burkina Faso"},{title:"Bulgaria"},{title:"Bahrain"},{title:"Burundi"}],this.categoryContent=[{category:"South America",title:"Brazil"},{category:"South America",title:"Peru"},{category:"North America",title:"Canada"},{category:"Asia",title:"South Korea"},{category:"Asia",title:"Japan"},{category:"Asia",title:"China"},{category:"Europe",title:"Denmark"},{category:"Europe",title:"England"},{category:"Europe",title:"France"},{category:"Europe",title:"Germany"},{category:"Africa",title:"Ethiopia"},{category:"Africa",title:"Nigeria"},{category:"Africa",title:"Zimbabwe"}]}searchText(m){return Ne(this,null,function*(){let o=`https://api.semantic-ui.com/search/${m}`;return n.callUrl(o)})}searchCategories(m){return Ne(this,null,function*(){let o=`https://api.semantic-ui.com/search/category/${m}`;return n.callUrl(o)})}static callUrl(m){return Ne(this,null,function*(){try{return(yield(yield fetch(m)).json()).results}catch(o){return[]}})}},$n=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-basic-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiPlaceholder","Common passwords...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchText)},dependencies:[Ve],encapsulation:2})}}return n})(),Qn=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-basic-alt-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Common passwords...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchText)},dependencies:[Ve],encapsulation:2})}}return n})(),eo=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-category-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Common animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchCategories)},dependencies:[Ve],encapsulation:2})}}return n})(),to=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-local-search-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Search countries...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptions",s.countries)},dependencies:[Ve],encapsulation:2})}}return n})(),io=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-local-category-search-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Search countries...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptions",s.categoryContent)},dependencies:[Ve],encapsulation:2})}}return n})(),no=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-loading-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiLoading","","suiPlaceholder","Search...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptions",s.blankOptions)},dependencies:[Ve],encapsulation:2})}}return n})(),oo=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-disabled-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["disabled","","suiShowIcon","","suiPlaceholder","Search animals...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptions",s.blankOptions)},dependencies:[Ve],encapsulation:2})}}return n})(),ao=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-fluid-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiFluid","","suiShowIcon","","suiPlaceholder","Search animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchCategories)},dependencies:[Ve],encapsulation:2})}}return n})(),so=(()=>{class n extends Pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-search-aligned-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowIcon","","suiAlignment","right","suiPlaceholder","Search animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&l("suiOptionsLookup",s.searchCategories)},dependencies:[Ve],encapsulation:2})}}return n})();function Dm(n,m){n&1&&r(0,"doc-search-basic-example")}function _m(n,m){n&1&&r(0,"doc-search-basic-alt-example")}function Tm(n,m){n&1&&r(0,"doc-search-category-example")}function Mm(n,m){n&1&&r(0,"doc-search-local-search-example")}function Im(n,m){n&1&&r(0,"doc-search-local-category-search-example")}function Pm(n,m){n&1&&r(0,"doc-search-loading-example")}function km(n,m){n&1&&r(0,"doc-search-disabled-example")}function Fm(n,m){n&1&&r(0,"doc-search-fluid-example")}function Am(n,m){n&1&&r(0,"doc-search-aligned-example")}function Vm(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Type"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Search"),e(),i(6,"p"),t(7,"A basic search element"),e(),h(8,Dm,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3),h(10,_m,1,0,"ng-template",5),e(),i(11,"doc-code-sample",3)(12,"h3",4),t(13,"Category"),e(),i(14,"p"),t(15,"A search can display results from remote content ordered by categories"),e(),h(16,Tm,1,0,"ng-template",5),e(),i(17,"doc-code-sample",6)(18,"h3",4),t(19,"Local Search"),e(),i(20,"p"),t(21,"A search can look for results inside a static local source."),e(),h(22,Mm,1,0,"ng-template",5),e(),i(23,"doc-code-sample",6)(24,"h3",4),t(25,"Local Category Search"),e(),i(26,"p"),t(27,"A search can look for category results inside a static local source."),e(),h(28,Im,1,0,"ng-template",5),e(),r(29,"br"),i(30,"h2",2),t(31,"States"),e(),i(32,"doc-code-sample",3)(33,"h3",4),t(34,"Loading"),e(),i(35,"p"),t(36,"A search can show a loading indicator."),e(),h(37,Pm,1,0,"ng-template",5),e(),r(38,"br"),i(39,"h2",2),t(40,"Variations"),e(),i(41,"doc-code-sample",3)(42,"h3",4),t(43,"Disabled"),e(),i(44,"p"),t(45,"A search can show it is currently unable to be interacted with."),e(),h(46,km,1,0,"ng-template",5),e(),i(47,"doc-code-sample",3)(48,"h3",4),t(49,"Fluid"),e(),i(50,"p"),t(51,"A search can have its results take up the width of its container."),e(),h(52,Fm,1,0,"ng-template",5),e(),i(53,"doc-code-sample",3)(54,"h3",4),t(55,"Aligned"),e(),i(56,"p"),t(57,"A search can have its results aligned to its left or right container edge."),e(),h(58,Am,1,0,"ng-template",5),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetBasic),d(6),l("templateCode",o.snippetBasicAlt),d(2),l("templateCode",o.snippetCategory),d(6),l("templateCode",o.snippetLocalSearch)("componentCode",o.snippetLocalSearchTs),d(6),l("templateCode",o.snippetLocalCategorySearch)("componentCode",o.snippetLocalCategorySearchTs),d(9),l("templateCode",o.snippetLoading),d(9),l("templateCode",o.snippetDisabled),d(6),l("templateCode",o.snippetFluid),d(6),l("templateCode",o.snippetAligned)}}function Bm(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-search"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiAlignment"),e(),i(20,"td"),t(21,"Set the search result alignment. Allowed values could be "),i(22,"span",8),t(23,"right"),e(),t(24," | "),i(25,"span",8),t(26,"null"),e()(),i(27,"td")(28,"div",9),t(29," string "),e()(),i(30,"td")(31,"div",10),t(32," null "),e()()(),i(33,"tr")(34,"td"),t(35,"suiPlaceholder"),e(),i(36,"td"),t(37,"Set the search input placeholder text. "),e(),i(38,"td")(39,"div",9),t(40," string "),e()(),i(41,"td")(42,"div",10),t(43," null "),e()()(),i(44,"tr")(45,"td"),t(46,"suiSearchDelay"),e(),i(47,"td"),t(48,"Set the delay (in milliseconds) before a search is started. "),e(),i(49,"td")(50,"div",9),t(51," number "),e()(),i(52,"td")(53,"div",10),t(54," 200 "),e()()(),i(55,"tr")(56,"td"),t(57,"suiShowIcon"),e(),i(58,"td"),t(59,"Determine whether or not to show the search icon "),e(),i(60,"td")(61,"div",9),t(62," boolean "),e()(),i(63,"td")(64,"div",10),t(65," false "),e()()(),i(66,"tr")(67,"td"),t(68,"disabled"),e(),i(69,"td"),t(70,"Determine whether or not to disable the search functionality "),e(),i(71,"td")(72,"div",9),t(73," boolean "),e()(),i(74,"td")(75,"div",10),t(76," false "),e()()(),i(77,"tr")(78,"td"),t(79,"suiFluid"),e(),i(80,"td"),t(81,"Determine whether or not the search results fill the width of their container "),e(),i(82,"td")(83,"div",9),t(84," boolean "),e()(),i(85,"td")(86,"div",10),t(87," false "),e()()(),i(88,"tr")(89,"td"),t(90,"suiLoading"),e(),i(91,"td"),t(92,"Determine whether or not to manually override the loading icon display "),e(),i(93,"td")(94,"div",9),t(95," boolean "),e()(),i(96,"td")(97,"div",10),t(98," false "),e()()(),i(99,"tr")(100,"td"),t(101,"suiOptions"),e(),i(102,"td"),t(103,"The options available to search. Cannot be used in conjunction with "),i(104,"code"),t(105,"suiOptionsLookup"),e()(),i(106,"td")(107,"div",9),t(108," Array<{title: string, category: string (optional), description: string (optional)}> "),e()(),i(109,"td")(110,"div",10),t(111," null "),e()()(),i(112,"tr")(113,"td"),t(114,"suiOptionsLookup"),e(),i(115,"td"),t(116,"A function to asynchronously search a remote resource with the provided query. Cannot be used in conjunction with "),i(117,"code"),t(118,"suiOptions"),e()(),i(119,"td")(120,"div",9),t(121," (query: string) => Promise<Array<{title: string, category: string (optional), description: string (optional)}>> "),e()(),i(122,"td")(123,"div",10),t(124," null "),e()()()()(),i(125,"h4",4),t(126,"Events"),e(),i(127,"table",7)(128,"thead")(129,"tr")(130,"th"),t(131,"Property"),e(),i(132,"th"),t(133,"Description"),e(),i(134,"th"),t(135,"Type"),e()()(),i(136,"tbody")(137,"tr")(138,"td"),t(139,"suiResultSelected"),e(),i(140,"td"),t(141,"Fired when a result is selected. "),e(),i(142,"td")(143,"div",9),t(144," {title: string, category: string, description: string} "),e()()()()()())}var ro=(()=>{class n{constructor(o){this.snippetBasic=zn,this.snippetBasicAlt=jn,this.snippetCategory=Nn,this.snippetLocalSearch=Un,this.snippetLocalSearchTs=Gn,this.snippetLocalCategorySearch=Yn,this.snippetLocalCategorySearchTs=Jn,this.snippetLoading=Xn,this.snippetDisabled=qn,this.snippetFluid=Kn,this.snippetAligned=Zn,this.blankOptions=[],this.countries=[{title:"Andorra"},{title:"United Arab Emirates"},{title:"Afghanistan"},{title:"Antigua"},{title:"Anguilla"},{title:"Albania"},{title:"Armenia"},{title:"Netherlands Antilles"},{title:"Angola"},{title:"Argentina"},{title:"American Samoa"},{title:"Austria"},{title:"Australia"},{title:"Aruba"},{title:"Aland Islands"},{title:"Azerbaijan"},{title:"Bosnia"},{title:"Barbados"},{title:"Bangladesh"},{title:"Belgium"},{title:"Burkina Faso"},{title:"Bulgaria"},{title:"Bahrain"},{title:"Burundi"}],this.categoryContent=[{category:"South America",title:"Brazil"},{category:"South America",title:"Peru"},{category:"North America",title:"Canada"},{category:"Asia",title:"South Korea"},{category:"Asia",title:"Japan"},{category:"Asia",title:"China"},{category:"Europe",title:"Denmark"},{category:"Europe",title:"England"},{category:"Europe",title:"France"},{category:"Europe",title:"Germany"},{category:"Africa",title:"Ethiopia"},{category:"Africa",title:"Nigeria"},{category:"Africa",title:"Zimbabwe"}],o.setTitle("Search | Ngx Semantic")}searchText(o){return Ne(this,null,function*(){let a=`https://api.semantic-ui.com/search/${o}`;return n.callUrl(a)})}searchCategories(o){return Ne(this,null,function*(){let a=`https://api.semantic-ui.com/search/category/${o}`;return n.callUrl(a)})}static callUrl(o){return Ne(this,null,function*(){try{return(yield(yield fetch(o)).json()).results}catch(a){return[]}})}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-search"]],standalone:!1,decls:3,vars:2,consts:[["header","Search","subHeader","A search module allows a user to query for results from a selection of data"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Vm,59,11,"div",1)(2,Bm,145,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,$n,Qn,eo,to,io,no,oo,ao,so],encapsulation:2})}}return n})();var lo=`<sui-tabs>
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
`;var mo=`<sui-tabs
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
`;var po=`<sui-tabs
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
`;var uo=`<sui-tabs>
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
`;var co=`<sui-tabs>
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
`;var ho=`<sui-tabs
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
`;var So=`<select name="tab-colour"
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
`;var Nm=["contentTemplate"],Um=["*"];function Gm(n,m){n&1&&be(0)}function Ym(n,m){n&1&&Ft(0)}function Jm(n,m){if(n&1&&h(0,Ym,1,0,"ng-container",2),n&2){E(2);let o=k(2);l("ngTemplateOutlet",o)}}function Xm(n,m){n&1&&Ft(0)}function qm(n,m){if(n&1&&h(0,Xm,1,0,"ng-container",2),n&2){let o=E(2);l("ngTemplateOutlet",o.currentTab.contentTemplate)}}function Km(n,m){n&1&&Ft(0)}function Zm(n,m){if(n&1&&h(0,Km,1,0,"ng-container",2),n&2){E(2);let o=k(2);l("ngTemplateOutlet",o)}}function $m(n,m){if(n&1&&(ie(0,Jm,1,1,"ng-container"),i(1,"div",1),ie(2,qm,1,1,"ng-container"),e(),ie(3,Zm,1,1,"ng-container")),n&2){let o=E();ne(o.isTop?0:-1),d(),ue("loading",o.currentTab==null?null:o.currentTab.suiLoading),l("suiAttached",o.segmentAttachment),d(),ne(o.currentTab?2:-1),d(),ne(o.isTop?-1:3)}}function Qm(n,m){if(n&1&&r(0,"i",6),n&2){let o=E().$implicit;l("suiIconType",o.suiIcon)}}function ep(n,m){if(n&1&&(i(0,"div",7),t(1),e()),n&2){let o=E().$implicit;l("suiColour",o.suiLabelColour)("suiCircular",o.suiLabelCircular),d(),_e(" ",o.suiLabel," ")}}function tp(n,m){if(n&1){let o=se();i(0,"div",5),f("click",function(){let s=y(o),c=s.$implicit,p=s.$index,v=E(2);return C(v.changeTab(c,p))}),ie(1,Qm,1,1,"i",6),t(2),ie(3,ep,2,3,"div",7),e()}if(n&2){let o=m.$implicit,a=m.$index,s=E(2);l("disabled",o.disabled)("suiActive",s.isTabSelected(a)),d(),ne(o.suiIcon?1:-1),d(),_e(" ",o.suiTitle," "),d(),ne(o.suiLabel?3:-1)}}function ip(n,m){if(n&1&&(i(0,"div",3),Ge(1,tp,4,5,"div",4,Ue),e()),n&2){let o=E();l("suiInverted",o.suiInverted)("suiColour",o.suiColour)("suiAttached",o.menuAttachment)("suiTabular",o.isBasic)("suiSecondary",o.isSecondary)("suiPointing",o.isPointing)("suiText",o.isText)("suiBorderless",o.isBorderless),d(),Ye(o.tabs)}}var Oe=(()=>{class n{constructor(){this.suiTitle=null,this.suiIcon=null,this.suiLabel=null,this.suiLoading=!1,this.disabled=!1,this.suiLabelColour=null,this.suiLabelCircular=!1}get classes(){return[Y.getPropClass(this.suiLoading,"loading"),Y.getPropClass(this.disabled,"disabled")].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-tab"]],viewQuery:function(a,s){if(a&1&&ct(Nm,7),a&2){let c;we(c=De())&&(s.contentTemplate=c.first)}},hostVars:2,hostBindings:function(a,s){a&2&&Je(s.classes)},inputs:{suiContent:"suiContent",suiTitle:"suiTitle",suiIcon:"suiIcon",suiLabel:"suiLabel",suiLoading:"suiLoading",disabled:"disabled",suiLabelColour:"suiLabelColour",suiLabelCircular:"suiLabelCircular"},exportAs:["suiTab"],ngContentSelectors:Um,decls:2,vars:0,consts:[["contentTemplate",""]],template:function(a,s){a&1&&(Ee(),si(0,Gm,1,0,"ng-template",null,0,Be))},encapsulation:2})}}return M([I()],n.prototype,"suiLoading",void 0),M([I()],n.prototype,"disabled",void 0),M([I()],n.prototype,"suiLabelCircular",void 0),n})(),He=(()=>{class n{constructor(){this.tabs=new ti,this.suiTabMenuPosition="top",this.suiTabType="basic",this.suiColour=null,this.suiInverted=!1,this.suiSelectedIndexChanged=new $,this.selectedTabIndex=0,this.hasTabs=!1,this.currentTab=null}get isSecondary(){return this.suiTabType==="secondary"}get isBasic(){return this.suiTabType==="basic"}get isPointing(){return this.suiTabType==="pointing"}get isText(){return this.suiTabType==="text"}get isBorderless(){return this.suiTabType==="borderless"}get isTop(){return this.suiTabMenuPosition==="top"}get menuAttachment(){return this.suiTabType==="basic"?this.isTop?"top":"bottom":null}get segmentAttachment(){return this.suiTabType==="basic"?this.isTop?"bottom attached":"top attached":null}changeTab(o,a){if(o.disabled)return;let s=this.selectedTabIndex!==a;this.selectedTabIndex=a,this.setCurrentTab(),s&&this.suiSelectedIndexChanged.emit(this.selectedTabIndex)}isTabSelected(o){return this.selectedTabIndex===o}ngAfterContentChecked(){this.setCurrentTab()}setCurrentTab(){let o=this.tabs.toArray();this.hasTabs=o.length>0,this.currentTab=o[this.selectedTabIndex]}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-tabs"]],contentQueries:function(a,s,c){if(a&1&&ut(c,Oe,4),a&2){let p;we(p=De())&&(s.tabs=p)}},inputs:{suiTabMenuPosition:"suiTabMenuPosition",suiTabType:"suiTabType",suiColour:"suiColour",suiInverted:"suiInverted"},outputs:{suiSelectedIndexChanged:"suiSelectedIndexChanged"},decls:3,vars:1,consts:[["tabMenu",""],["sui-segment","",1,"active","tab",3,"suiAttached"],[4,"ngTemplateOutlet"],["sui-menu","",3,"suiInverted","suiColour","suiAttached","suiTabular","suiSecondary","suiPointing","suiText","suiBorderless"],["suiMenuItem","",3,"disabled","suiActive"],["suiMenuItem","",3,"click","disabled","suiActive"],["sui-icon","",3,"suiIconType"],["sui-label","",3,"suiColour","suiCircular"]],template:function(a,s){a&1&&(ie(0,$m,4,6),h(1,ip,3,8,"ng-template",null,0,Be)),a&2&&ne(s.hasTabs?0:-1)},dependencies:[J,fi,F,Fe,Ae,g,A],encapsulation:2,changeDetection:0})}}return M([I()],n.prototype,"suiInverted",void 0),n})(),xo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[J,He]})}}return n})();function op(n,m){if(n&1&&(i(0,"option",1),t(1),e()),n&2){let o=m.$implicit;l("value",o),d(),nt(o)}}var Re=class{constructor(){this.isDefinitionsActive=!0,this.colours=["red","orange","green","blue","violet"],this.tabColour="blue",this.isTabDisabled=!1}},vo=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-basic-example"]],standalone:!1,features:[x],decls:22,vars:0,consts:[["suiTitle","HTML"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML"],["suiTitle","CSS"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS"],["suiTitle","JavaScript"],["href","https://developer.mozilla.org/en-US/docs/Web/javascript"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0)(2,"h3"),t(3,"HTML"),e(),i(4,"p"),t(5," HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript). "),e(),i(6,"a",1),t(7,"developer.mozilla.org"),e()(),i(8,"sui-tab",2)(9,"h3"),t(10,"CSS"),e(),i(11,"p"),t(12," Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. "),e(),i(13,"a",3),t(14,"developer.mozilla.org"),e()(),i(15,"sui-tab",4)(16,"h3"),t(17,"JavaScript"),e(),i(18,"p"),t(19," JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. "),e(),i(20,"a",5),t(21,"developer.mozilla.org"),e()()())},dependencies:[Oe,He],encapsulation:2})}}return n})(),go=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-pointing-menu-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiTabType","pointing"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),t(2," Circle "),e(),i(3,"sui-tab",2),t(4," Box "),e(),i(5,"sui-tab",3),t(6," Triangle "),e()())},dependencies:[Oe,He],encapsulation:2})}}return n})(),Eo=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-text-menu-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiTabType","text"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),t(2," Circle "),e(),i(3,"sui-tab",2),t(4," Box "),e(),i(5,"sui-tab",3),t(6," Triangle "),e()())},dependencies:[Oe,He],encapsulation:2})}}return n})(),bo=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-loading-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiLoading","","suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0),t(2," Circle "),e(),i(3,"sui-tab",1),t(4," Box "),e(),i(5,"sui-tab",2),t(6," Triangle "),e()())},dependencies:[Oe,He],encapsulation:2})}}return n})(),yo=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-disabled-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiTitle","Circle"],["suiTitle","Box"],["disabled","","suiTitle","Secret Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0),t(2," Circle "),e(),i(3,"sui-tab",1),t(4," Box "),e(),i(5,"sui-tab",2),t(6," Triangle "),e()())},dependencies:[Oe,He],encapsulation:2})}}return n})(),Co=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-positioned-example"]],standalone:!1,features:[x],decls:7,vars:0,consts:[["suiTabType","secondary","suiTabMenuPosition","bottom"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),t(2," Circle "),e(),i(3,"sui-tab",2),t(4," Box "),e(),i(5,"sui-tab",3),t(6," Triangle "),e()())},dependencies:[Oe,He],encapsulation:2})}}return n})(),wo=(()=>{class n extends Re{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab-coloured-example"]],standalone:!1,features:[x],decls:10,vars:2,consts:[["name","tab-colour",3,"ngModelChange","ngModel"],[3,"value"],["suiTabType","pointing",3,"suiColour"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"select",0),_("ngModelChange",function(p){return D(s.tabColour,p)||(s.tabColour=p),p}),Ge(1,op,2,2,"option",1,Ue),e(),i(3,"sui-tabs",2)(4,"sui-tab",3),t(5," Circle "),e(),i(6,"sui-tab",4),t(7," Box "),e(),i(8,"sui-tab",5),t(9," Triangle "),e()()),a&2&&(w("ngModel",s.tabColour),d(),Ye(s.colours),d(2),l("suiColour",s.tabColour))},dependencies:[Fi,Ai,ki,Qe,et,Oe,He],encapsulation:2})}}return n})();function sp(n,m){n&1&&r(0,"doc-tab-basic-example")}function rp(n,m){n&1&&r(0,"doc-tab-pointing-menu-example")}function lp(n,m){n&1&&r(0,"doc-tab-text-menu-example")}function dp(n,m){n&1&&r(0,"doc-tab-loading-example")}function mp(n,m){n&1&&r(0,"doc-tab-disabled-example")}function pp(n,m){n&1&&r(0,"doc-tab-positioned-example")}function up(n,m){n&1&&r(0,"doc-tab-coloured-example")}function cp(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Type"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Tab"),e(),i(6,"p"),t(7,"A basic tab"),e(),h(8,sp,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Pointing Menu"),e(),i(12,"p"),t(13,"A tab menu can point to its tab panes"),e(),h(14,rp,1,0,"ng-template",5),e(),i(15,"doc-code-sample",3)(16,"h3",4),t(17,"Text Menu"),e(),i(18,"p"),t(19,"A tab menu can be formatted for text content"),e(),h(20,lp,1,0,"ng-template",5),e(),r(21,"br"),i(22,"h2",2),t(23,"States"),e(),i(24,"doc-code-sample",3)(25,"h3",4),t(26,"Loading"),e(),i(27,"p"),t(28,"A tab can display a loading indicator."),e(),h(29,dp,1,0,"ng-template",5),e(),i(30,"doc-code-sample",3)(31,"h3",4),t(32,"Disabled"),e(),i(33,"p"),t(34,"A tab can be disabled"),e(),h(35,mp,1,0,"ng-template",5),e(),r(36,"br"),i(37,"h2",2),t(38,"Menu Variations"),e(),i(39,"doc-code-sample",3)(40,"h3",4),t(41,"Position"),e(),i(42,"p"),t(43,"A tab can be positioned."),e(),h(44,pp,1,0,"ng-template",5),e(),i(45,"doc-code-sample",3)(46,"h3",4),t(47,"Coloured"),e(),i(48,"p"),t(49,"A tab can be coloured."),e(),h(50,up,1,0,"ng-template",5),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetBasic),d(6),l("templateCode",o.snippetPointing),d(6),l("templateCode",o.snippetText),d(9),l("templateCode",o.snippetLoading),d(6),l("templateCode",o.snippetDisabled),d(9),l("templateCode",o.snippetPositioned),d(6),l("templateCode",o.snippetColoured)}}function hp(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-tabs"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiTabMenuPosition"),e(),i(20,"td"),t(21,"Specifies the menu position. Allowed values could be "),i(22,"span",7),t(23,"'top'"),e(),t(24," | "),i(25,"span",7),t(26,"'bottom'"),e()(),i(27,"td")(28,"div",8),t(29,"string"),e()(),i(30,"td")(31,"div",9),t(32,"top"),e()()(),i(33,"tr")(34,"td"),t(35,"suiTabType"),e(),i(36,"td"),t(37," Determine the styling for the tab menu. Allowed values could be "),i(38,"span",7),t(39,"'basic'"),e(),t(40," | "),i(41,"span",7),t(42,"'pointing'"),e(),t(43," | "),i(44,"span",7),t(45,"'secondary'"),e(),t(46," | "),i(47,"span",7),t(48,"'text'"),e(),t(49," | "),i(50,"span",7),t(51,"null"),e()(),i(52,"td")(53,"div",8),t(54,"string"),e()(),i(55,"td")(56,"div",9),t(57,"basic"),e()()(),i(58,"tr")(59,"td"),t(60,"suiColour"),e(),i(61,"td"),t(62,"Set the menu colour. Allowed values could be "),i(63,"span",7),t(64,"'red'"),e(),t(65," | "),i(66,"span",7),t(67,"'orange'"),e(),t(68," | "),i(69,"span",7),t(70,"'yellow'"),e(),t(71," | "),i(72,"span",7),t(73,"'olive'"),e(),t(74," | "),i(75,"span",7),t(76,"'green'"),e(),t(77," | "),i(78,"span",7),t(79,"'teal'"),e(),t(80," | "),i(81,"span",7),t(82,"'blue'"),e(),t(83," | "),i(84,"span",7),t(85,"'violet'"),e(),t(86," | "),i(87,"span",7),t(88,"'purple'"),e(),t(89," | "),i(90,"span",7),t(91,"'pink'"),e(),t(92," | "),i(93,"span",7),t(94,"'brown'"),e(),t(95," | "),i(96,"span",7),t(97,"'grey'"),e(),t(98," | "),i(99,"span",7),t(100,"'black'"),e(),t(101," | "),i(102,"span",7),t(103,"null"),e()(),i(104,"td")(105,"div",8),t(106," string "),e()(),i(107,"td")(108,"div",9),t(109," null "),e()()()()(),i(110,"h4",4),t(111,"Events"),e(),i(112,"table",6)(113,"thead")(114,"tr")(115,"th"),t(116,"Event"),e(),i(117,"th"),t(118,"Description"),e(),i(119,"th"),t(120,"Type"),e()()(),i(121,"tbody")(122,"tr")(123,"td"),t(124,"suiSelectedIndexChanged"),e(),i(125,"td"),t(126,"Fires when the selected tab is changed. Index starts from 0."),e(),i(127,"td")(128,"div",8),t(129,"number"),e()()()()(),i(130,"h2",2),t(131,"sui-tab"),e(),i(132,"h4",4),t(133,"Properties"),e(),i(134,"table",6)(135,"thead")(136,"tr")(137,"th"),t(138,"Property"),e(),i(139,"th"),t(140,"Description"),e(),i(141,"th"),t(142,"Type"),e(),i(143,"th"),t(144,"Default"),e()()(),i(145,"tbody")(146,"tr")(147,"td"),t(148,"suiTitle"),e(),i(149,"td"),t(150,"Set the tab title"),e(),i(151,"td")(152,"div",8),t(153,"string"),e()(),i(154,"td")(155,"div",9),t(156,"null"),e()()(),i(157,"tr")(158,"td"),t(159,"suiIcon"),e(),i(160,"td"),t(161,"Set the tab icon"),e(),i(162,"td")(163,"div",8),t(164,"string"),e()(),i(165,"td")(166,"div",9),t(167,"null"),e()()(),i(168,"tr")(169,"td"),t(170,"suiLoading"),e(),i(171,"td"),t(172,"Show the loading icon"),e(),i(173,"td")(174,"div",8),t(175," boolean "),e()(),i(176,"td")(177,"div",9),t(178," false "),e()()(),i(179,"tr")(180,"td"),t(181,"disabled"),e(),i(182,"td"),t(183,"Prevent the tab from being activated"),e(),i(184,"td")(185,"div",8),t(186," boolean "),e()(),i(187,"td")(188,"div",9),t(189," false "),e()()()()()())}var Do=(()=>{class n{constructor(o){this.snippetBasic=lo,this.snippetPointing=mo,this.snippetText=po,this.snippetLoading=uo,this.snippetDisabled=co,this.snippetPositioned=ho,this.snippetColoured=So,this.isDefinitionsActive=!0,this.colours=["red","orange","green","blue","violet"],this.tabColour="blue",this.isTabDisabled=!1,o.setTitle("Tab | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-tab"]],standalone:!1,decls:3,vars:2,consts:[["header","Tab","subHeader","A tab is a hidden section of content activated by a menu"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,cp,51,7,"div",1)(2,hp,190,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,vo,go,Eo,bo,yo,Co,wo],styles:["select[_ngcontent-%COMP%]{margin-bottom:1rem}"]})}}return n})();var _o=`<sui-accordion>
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
`;var To=`<sui-accordion suiStyled>
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
`;var Mo=`<sui-accordion suiStyled suiFluid>
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
`;var Io=`<div sui-segment suiInverted>
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
`;var Po=["*"],bt=(()=>{class n{constructor(){this.suiTitle="",this.disabled=!1,this.isOpenChange=new $,this._isOpen=!1}get isOpen(){return this._isOpen}set isOpen(o){this.disabled||(this._isOpen=o,this.isOpenChange.emit(o))}toggle(){this.isOpen=!this.isOpen}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-accordion-panel"]],inputs:{suiTitle:"suiTitle",disabled:"disabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:Po,decls:5,vars:5,consts:[[1,"title",3,"click"],["sui-icon","","suiIconType","dropdown"],[1,"content"]],template:function(a,s){a&1&&(Ee(),i(0,"div",0),f("click",function(){return s.toggle()}),r(1,"i",1),t(2),e(),i(3,"div",2),be(4),e()),a&2&&(ue("active",s.isOpen),d(2),_e(" ",s.suiTitle," "),d(),ue("active",s.isOpen))},dependencies:[g],encapsulation:2})}}return M([I()],n.prototype,"disabled",void 0),M([I()],n.prototype,"isOpen",null),n})(),yt=(()=>{class n{constructor(){this.suiStyled=!1,this.suiFluid=!1,this.suiInverted=!1,this.suiCloseOthers=!0}get classes(){return["ui",Y.getPropClass(this.suiFluid,"fluid"),Y.getPropClass(this.suiStyled,"styled"),Y.getPropClass(this.suiInverted,"inverted"),"accordion"].join(" ")}ngAfterContentInit(){this.suiCloseOthers&&this.panels.forEach((o,a)=>o.isOpenChange.subscribe(s=>{s&&this.panels.forEach((c,p)=>{a!==p&&(c.isOpen=!1)})}))}ngOnDestroy(){this.panels.forEach(o=>o.isOpenChange.unsubscribe())}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-accordion"]],contentQueries:function(a,s,c){if(a&1&&ut(c,bt,4),a&2){let p;we(p=De())&&(s.panels=p)}},inputs:{suiStyled:"suiStyled",suiFluid:"suiFluid",suiInverted:"suiInverted",suiCloseOthers:"suiCloseOthers"},ngContentSelectors:Po,decls:2,vars:1,consts:[[3,"ngClass"]],template:function(a,s){a&1&&(Ee(),i(0,"div",0),be(1),e()),a&2&&l("ngClass",s.classes)},dependencies:[J,qe],encapsulation:2})}}return M([I()],n.prototype,"suiStyled",void 0),M([I()],n.prototype,"suiFluid",void 0),M([I()],n.prototype,"suiInverted",void 0),M([I()],n.prototype,"suiCloseOthers",void 0),n})(),ko=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[J,yt]})}}return n})();var Fo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion-standard-example"]],standalone:!1,decls:12,vars:0,consts:[["isOpen","","suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion")(1,"sui-accordion-panel",0)(2,"p"),t(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),e()(),i(4,"sui-accordion-panel",1)(5,"p"),t(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),e()(),i(7,"sui-accordion-panel",2)(8,"p"),t(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),e(),i(10,"p"),t(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),e()()())},dependencies:[yt,bt],encapsulation:2})}}return n})(),Ao=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion-styled-example"]],standalone:!1,decls:12,vars:0,consts:[["suiStyled",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion",0)(1,"sui-accordion-panel",1)(2,"p"),t(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),e()(),i(4,"sui-accordion-panel",2)(5,"p"),t(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),e()(),i(7,"sui-accordion-panel",3)(8,"p"),t(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),e(),i(10,"p"),t(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),e()()())},dependencies:[yt,bt],encapsulation:2})}}return n})(),Vo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion-styled-fluid-example"]],standalone:!1,decls:12,vars:0,consts:[["suiStyled","","suiFluid",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion",0)(1,"sui-accordion-panel",1)(2,"p"),t(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),e()(),i(4,"sui-accordion-panel",2)(5,"p"),t(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),e()(),i(7,"sui-accordion-panel",3)(8,"p"),t(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),e(),i(10,"p"),t(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),e()()())},dependencies:[yt,bt],encapsulation:2})}}return n})(),Bo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion-inverted-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-segment","","suiInverted",""],["suiInverted",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"sui-accordion",1)(2,"sui-accordion-panel",2)(3,"p"),t(4,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),e()(),i(5,"sui-accordion-panel",3)(6,"p"),t(7,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),e()(),i(8,"sui-accordion-panel",4)(9,"p"),t(10,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),e(),i(11,"p"),t(12,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),e()()()())},dependencies:[F,yt,bt],encapsulation:2})}}return n})();function bp(n,m){n&1&&r(0,"doc-accordion-standard-example")}function yp(n,m){n&1&&r(0,"doc-accordion-styled-example")}function Cp(n,m){n&1&&r(0,"doc-accordion-styled-fluid-example")}function wp(n,m){n&1&&r(0,"doc-accordion-inverted-example")}function Dp(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Accordion"),e(),i(6,"p"),t(7,"A standard accordion"),e(),h(8,bp,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Styled"),e(),i(12,"p"),t(13,"A styled accordion adds basic formatting"),e(),h(14,yp,1,0,"ng-template",5),e(),i(15,"h2",2),t(16,"Variations"),e(),i(17,"doc-code-sample",3)(18,"h3",4),t(19,"Fluid"),e(),i(20,"p"),t(21,"An accordion can take up the width of its container"),e(),h(22,Cp,1,0,"ng-template",5),e(),i(23,"doc-code-sample",3)(24,"h3",4),t(25,"Inverted"),e(),i(26,"p"),t(27,"An accordion can be formatted to appear on dark backgrounds"),e(),h(28,wp,1,0,"ng-template",5),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetStandard),d(6),l("templateCode",o.snippetStyled),d(8),l("templateCode",o.snippetStyledFluid),d(6),l("templateCode",o.snippetInverted)}}function _p(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-accordion"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiStyled"),e(),i(20,"td"),t(21," Determines if the styled variation of the accordion is rendered "),e(),i(22,"td")(23,"div",7),t(24,"boolean"),e()(),i(25,"td")(26,"div",8),t(27,"false"),e()()(),i(28,"tr")(29,"td"),t(30,"suiFluid"),e(),i(31,"td"),t(32," Determines if the styled variation of the accordion is rendered "),e(),i(33,"td")(34,"div",7),t(35,"boolean"),e()(),i(36,"td")(37,"div",8),t(38,"false"),e()()(),i(39,"tr")(40,"td"),t(41,"suiFluid"),e(),i(42,"td"),t(43," Determines if the styled variation of the accordion is rendered "),e(),i(44,"td")(45,"div",7),t(46,"boolean"),e()(),i(47,"td")(48,"div",8),t(49,"false"),e()()(),i(50,"tr")(51,"td"),t(52,"suiInverted"),e(),i(53,"td"),t(54,"Determine if the accordion should invert it's colours"),e(),i(55,"td")(56,"div",7),t(57,"boolean "),e()(),i(58,"td")(59,"div",8),t(60,"false "),e()()(),i(61,"tr")(62,"td"),t(63,"suiCloseOthers"),e(),i(64,"td"),t(65,"Determines if the accordion should close other open panels when a panel is open"),e(),i(66,"td")(67,"div",7),t(68,"boolean "),e()(),i(69,"td")(70,"div",8),t(71,"true "),e()()()()(),i(72,"h2",2),t(73,"sui-accordion-panel"),e(),i(74,"h4",4),t(75,"Properties"),e(),i(76,"table",6)(77,"thead")(78,"tr")(79,"th"),t(80,"Property"),e(),i(81,"th"),t(82,"Description"),e(),i(83,"th"),t(84,"Type"),e(),i(85,"th"),t(86,"Default"),e()()(),i(87,"tbody")(88,"tr")(89,"td"),t(90,"suiTitle"),e(),i(91,"td"),t(92," What title the accordion panel should gave "),e(),i(93,"td")(94,"div",7),t(95,"string"),e()(),r(96,"td"),e(),i(97,"tr")(98,"td"),t(99,"disabled"),e(),i(100,"td"),t(101," Determines if a panel should be disabled meaning it cannot be interacted with "),e(),i(102,"td")(103,"div",7),t(104,"boolean"),e()(),i(105,"td")(106,"div",8),t(107,"false"),e()()(),i(108,"tr")(109,"td"),t(110,"isOpen"),e(),i(111,"td"),t(112,"A bindable field to determine and notify whether a panel is open or not"),e(),i(113,"td")(114,"div",7),t(115,"boolean"),e()(),r(116,"td"),e()()()())}var Lo=(()=>{class n{constructor(o){this.snippetStandard=_o,this.snippetStyled=To,this.snippetStyledFluid=Mo,this.snippetInverted=Io,o.setTitle("Accordion | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-accordion"]],standalone:!1,decls:3,vars:2,consts:[["header","Accordion","subHeader","An accordion allows users to toggle the display of sections of content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Dp,29,4,"div",1)(2,_p,117,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,Fo,Ao,Vo,Bo],encapsulation:2})}}return n})();var Oo=`<sui-checkbox>
  Make my profile visible
</sui-checkbox>
`;var Ho=`<sui-checkbox
    suiType="radio">
  Radio choice
</sui-checkbox>
`;var Ro=`<div sui-form>
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
`;var Wo=`inlineRadioValue: string = null;
`;var zo=`<div sui-form>
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
`;var jo=`groupedRadioValue: string = null;
`;var No=`<sui-checkbox
    suiType="slider">
  Accept terms and conditions
</sui-checkbox>
`;var Uo=`<div sui-form>
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
`;var Go=`groupedSliderValue: string = null;
`;var Yo=`<sui-checkbox
    suiType="toggle">
  Subscribe to weekly newsletter
</sui-checkbox>
`;var Jo=`<sui-checkbox
    suiReadOnly>
  Read Only
</sui-checkbox>
`;var Xo=`<sui-checkbox
    [checked]="true">
  Active
</sui-checkbox>
`;var qo=`<sui-checkbox>
  Indeterminate
</sui-checkbox>
`;var Ko=`<div>
  <sui-checkbox disabled>
    Disabled
  </sui-checkbox>
</div>
<div>
  <sui-checkbox disabled suiType="toggle">
    Disabled
  </sui-checkbox>
</div>
`;var Zo=`<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="slider"></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="toggle"></sui-checkbox>
</div>
`;var $o=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-standard-example"]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(i(0,"sui-checkbox"),t(1,` Make my profile visible
`),e())},dependencies:[de],encapsulation:2})}}return n})(),Qo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-basic-radio-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","radio"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Radio choice
`),e())},dependencies:[de],encapsulation:2})}}return n})(),ea=(()=>{class n{constructor(){this.inlineRadioValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-inline-radio-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["suiType","radio","suiValue","once-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","2-3-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","once-a-day",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","twice-a-day",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"How often do you use checkboxes?"),e(),i(4,"div",2)(5,"sui-checkbox",3),_("ngModelChange",function(p){return D(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),t(6," Once a week "),e()(),i(7,"div",2)(8,"sui-checkbox",4),_("ngModelChange",function(p){return D(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),t(9," 2-3 times a week "),e()(),i(10,"div",2)(11,"sui-checkbox",5),_("ngModelChange",function(p){return D(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),t(12," Once a day "),e()(),i(13,"div",2)(14,"sui-checkbox",6),_("ngModelChange",function(p){return D(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),t(15," Twice a day "),e()()()()),a&2&&(d(5),w("ngModel",s.inlineRadioValue),d(3),w("ngModel",s.inlineRadioValue),d(3),w("ngModel",s.inlineRadioValue),d(3),w("ngModel",s.inlineRadioValue))},dependencies:[Qe,et,St,xt,zt,de],encapsulation:2})}}return n})(),ta=(()=>{class n{constructor(){this.groupedRadioValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-grouped-radio-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","radio","suiValue","once-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","2-3-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","once-a-day",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","twice-a-day",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"How often do you use checkboxes?"),e(),i(4,"div",2)(5,"sui-checkbox",3),_("ngModelChange",function(p){return D(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),t(6," Once a week "),e()(),i(7,"div",2)(8,"sui-checkbox",4),_("ngModelChange",function(p){return D(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),t(9," 2-3 times a week "),e()(),i(10,"div",2)(11,"sui-checkbox",5),_("ngModelChange",function(p){return D(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),t(12," Once a day "),e()(),i(13,"div",2)(14,"sui-checkbox",6),_("ngModelChange",function(p){return D(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),t(15," Twice a day "),e()()()()),a&2&&(d(5),w("ngModel",s.groupedRadioValue),d(3),w("ngModel",s.groupedRadioValue),d(3),w("ngModel",s.groupedRadioValue),d(3),w("ngModel",s.groupedRadioValue))},dependencies:[Qe,et,St,xt,zt,de],encapsulation:2})}}return n})(),ia=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-basic-slider-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","slider"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Accept terms and conditions
`),e())},dependencies:[de],encapsulation:2})}}return n})(),na=(()=>{class n{constructor(){this.groupedSliderValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-grouped-slider-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","slider","suiValue","20mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","10mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","5mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","~mb",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),t(3,"Outbound Throughput"),e(),i(4,"div",2)(5,"sui-checkbox",3),_("ngModelChange",function(p){return D(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),t(6," 20 mbps max "),e()(),i(7,"div",2)(8,"sui-checkbox",4),_("ngModelChange",function(p){return D(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),t(9," 10 mbps max "),e()(),i(10,"div",2)(11,"sui-checkbox",5),_("ngModelChange",function(p){return D(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),t(12," 5 mbps max "),e()(),i(13,"div",2)(14,"sui-checkbox",6),_("ngModelChange",function(p){return D(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),t(15," Unmetered "),e()()()()),a&2&&(d(5),w("ngModel",s.groupedSliderValue),d(3),w("ngModel",s.groupedSliderValue),d(3),w("ngModel",s.groupedSliderValue),d(3),w("ngModel",s.groupedSliderValue))},dependencies:[Qe,et,St,xt,zt,de],encapsulation:2})}}return n})(),oa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-toggle-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","toggle"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Subscribe to weekly newsletter
`),e())},dependencies:[de],encapsulation:2})}}return n})(),aa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-read-only-example"]],standalone:!1,decls:2,vars:0,consts:[["suiReadOnly",""]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Read Only
`),e())},dependencies:[de],encapsulation:2})}}return n})(),sa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-checked-example"]],standalone:!1,decls:2,vars:1,consts:[[3,"checked"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),t(1,` Active
`),e()),a&2&&l("checked",!0)},dependencies:[de],encapsulation:2})}}return n})(),ra=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-indeterminate-example"]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(i(0,"sui-checkbox"),t(1,` Indeterminate
`),e())},dependencies:[de],encapsulation:2})}}return n})(),la=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-disabled-example"]],standalone:!1,decls:6,vars:0,consts:[["disabled",""],["disabled","","suiType","toggle"]],template:function(a,s){a&1&&(i(0,"div")(1,"sui-checkbox",0),t(2," Disabled "),e()(),i(3,"div")(4,"sui-checkbox",1),t(5," Disabled "),e()())},dependencies:[de],encapsulation:2})}}return n})(),da=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox-fitted-example"]],standalone:!1,decls:6,vars:0,consts:[["sui-segment","","suiCompact","","suiFloated","left floated"],["suiFitted",""],["suiFitted","","suiType","slider"],["suiFitted","","suiType","toggle"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-checkbox",1),e(),i(2,"div",0),r(3,"sui-checkbox",2),e(),i(4,"div",0),r(5,"sui-checkbox",3),e())},dependencies:[F,de],encapsulation:2})}}return n})();function Gp(n,m){n&1&&r(0,"doc-checkbox-standard-example")}function Yp(n,m){n&1&&r(0,"doc-checkbox-basic-radio-example")}function Jp(n,m){n&1&&r(0,"doc-checkbox-inline-radio-example")}function Xp(n,m){n&1&&r(0,"doc-checkbox-grouped-radio-example")}function qp(n,m){n&1&&r(0,"doc-checkbox-basic-slider-example")}function Kp(n,m){n&1&&r(0,"doc-checkbox-grouped-slider-example")}function Zp(n,m){n&1&&r(0,"doc-checkbox-toggle-example")}function $p(n,m){n&1&&r(0,"doc-checkbox-read-only-example")}function Qp(n,m){n&1&&r(0,"doc-checkbox-checked-example")}function eu(n,m){n&1&&r(0,"doc-checkbox-indeterminate-example")}function tu(n,m){n&1&&r(0,"doc-checkbox-disabled-example")}function iu(n,m){n&1&&r(0,"doc-checkbox-fitted-example")}function nu(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Checkbox"),e(),i(6,"p"),t(7,"A standard checkbox"),e(),h(8,Gp,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3)(10,"h3",4),t(11,"Radio"),e(),i(12,"p"),t(13,"A checkbox can be formatted as a radio element. This means it is an exclusive option"),e(),h(14,Yp,1,0,"ng-template",5),e(),i(15,"doc-code-sample",6),h(16,Jp,1,0,"ng-template",5),e(),i(17,"doc-code-sample",6),h(18,Xp,1,0,"ng-template",5),e(),i(19,"doc-code-sample",3)(20,"h3",4),t(21,"Slider"),e(),i(22,"p"),t(23,"A checkbox can be formatted to emphasize the current selection state"),e(),h(24,qp,1,0,"ng-template",5),e(),i(25,"doc-code-sample",6),h(26,Kp,1,0,"ng-template",5),e(),i(27,"doc-code-sample",3)(28,"h3",4),t(29,"Toggle"),e(),i(30,"p"),t(31,"A checkbox can be formatted to show an on or off choice"),e(),h(32,Zp,1,0,"ng-template",5),e(),i(33,"h2",2),t(34,"States"),e(),i(35,"doc-code-sample",3)(36,"h3",4),t(37,"Read-only"),e(),i(38,"p"),t(39,"A checkbox can be read-only and unable to change states"),e(),h(40,$p,1,0,"ng-template",5),e(),i(41,"doc-code-sample",3)(42,"h3",4),t(43,"Checked"),e(),i(44,"p"),t(45,"A checkbox can be checked"),e(),h(46,Qp,1,0,"ng-template",5),e(),i(47,"doc-code-sample",3)(48,"h3",4),t(49,"Indeterminate"),e(),i(50,"p"),t(51,"A checkbox can be indeterminate"),e(),h(52,eu,1,0,"ng-template",5),e(),i(53,"doc-code-sample",3)(54,"h3",4),t(55,"Disabled"),e(),i(56,"p"),t(57,"A checkbox can be read-only and unable to change states"),e(),h(58,tu,1,0,"ng-template",5),e(),i(59,"h2",2),t(60,"Variations"),e(),i(61,"doc-code-sample",3)(62,"h3",4),t(63,"Fitted"),e(),i(64,"p"),t(65,"A fitted checkbox does not leave padding for a label"),e(),h(66,iu,1,0,"ng-template",5),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetStandard),d(6),l("templateCode",o.snippetBasicRadio),d(6),l("templateCode",o.snippetInlineRadio)("componentCode",o.snippetInlineRadioTs),d(2),l("templateCode",o.snippetGroupedRadio)("componentCode",o.snippetGroupedRadioTs),d(2),l("templateCode",o.snippetBasicSlider),d(6),l("templateCode",o.snippetGroupedSlider)("componentCode",o.snippetGroupedSliderTs),d(2),l("templateCode",o.snippetToggle),d(8),l("templateCode",o.snippetReadOnly),d(6),l("templateCode",o.snippetChecked),d(6),l("templateCode",o.snippetIndeterminate),d(6),l("templateCode",o.snippetDisabled),d(8),l("templateCode",o.snippetFitted)}}function ou(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-checkbox"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiReadOnly"),e(),i(20,"td"),t(21," Determines if the checkbox's state can be modified "),e(),i(22,"td")(23,"div",8),t(24,"boolean"),e()(),i(25,"td")(26,"div",9),t(27,"false"),e()()(),i(28,"tr")(29,"td"),t(30,"suiFitted"),e(),i(31,"td"),t(32," Determines if the fitted variation of the checkbox is rendered "),e(),i(33,"td")(34,"div",8),t(35,"boolean"),e()(),i(36,"td")(37,"div",9),t(38,"false"),e()()(),i(39,"tr")(40,"td"),t(41,"disabled"),e(),i(42,"td"),t(43," Determines if the checkbox is disabled "),e(),i(44,"td")(45,"div",8),t(46,"boolean"),e()(),i(47,"td")(48,"div",9),t(49,"false"),e()()(),i(50,"tr")(51,"td"),t(52,"name"),e(),i(53,"td"),t(54,"Sets the name attribute of the checkbox. Required for form usage"),e(),i(55,"td")(56,"div",8),t(57,"string"),e()(),i(58,"td")(59,"div",9),t(60,"null"),e()()(),i(61,"tr")(62,"td"),t(63,"suiValue"),e(),i(64,"td"),t(65,"Sets the value of the checkbox"),e(),i(66,"td")(67,"div",8),t(68,"any"),e()(),i(69,"td")(70,"div",9),t(71,"null"),e()()(),i(72,"tr")(73,"td"),t(74,"[(value)]"),e(),i(75,"td"),t(76,"Sets and notifies you of changes to the checkbox's value"),e(),i(77,"td")(78,"div",8),t(79,"any"),e()(),i(80,"td")(81,"div",9),t(82,"null"),e()()(),i(83,"tr")(84,"td"),t(85,"[(checked)]"),e(),i(86,"td"),t(87,"Sets and notifies you of changes to the checkbox's check state"),e(),i(88,"td")(89,"div",8),t(90,"boolean"),e()(),i(91,"td")(92,"div",9),t(93,"null"),e()()()()()())}var ma=(()=>{class n{constructor(o){this.snippetStandard=Oo,this.snippetBasicRadio=Ho,this.snippetInlineRadio=Ro,this.snippetInlineRadioTs=Wo,this.snippetGroupedRadio=zo,this.snippetGroupedRadioTs=jo,this.snippetBasicSlider=No,this.snippetGroupedSlider=Uo,this.snippetGroupedSliderTs=Go,this.snippetToggle=Yo,this.snippetReadOnly=Jo,this.snippetChecked=Xo,this.snippetIndeterminate=qo,this.snippetDisabled=Ko,this.snippetFitted=Zo,o.setTitle("Checkbox | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-checkbox"]],standalone:!1,decls:3,vars:2,consts:[["header","Checkbox","subHeader","A checkbox allows a user to select a value from a small set of options, often binary"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,nu,67,15,"div",1)(2,ou,94,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,$o,Qo,ea,ta,ia,na,oa,aa,sa,ra,la,da],encapsulation:2})}}return n})();var pa=`<sui-progress
    suiShowProgress
    [suiValue]="standardValue">
  Uploading Files
</sui-progress>
`;var ua=`<sui-progress
    suiIndicating
    suiState="active"
    [suiValue]="indicatingValue">
  {{ indicatingValue }}% Funded
</sui-progress>
`;var ca=`indicatingValue = 40;
`;var ha=`<sui-progress
    [suiValue]="28">
</sui-progress>
`;var Sa=`<sui-progress
    suiShowProgress
    [suiValue]="35">
</sui-progress>
`;var xa=`<sui-progress
    suiState="active"
    [suiValue]="51">
  Uploading Files
</sui-progress>
`;var fa=`<sui-progress
    suiState="success"
    [suiValue]="100">
  Everything worked, your file is all ready.
</sui-progress>
`;var va=`<sui-progress
    suiState="warning"
    [suiValue]="100">
  Your file didn't meet the minimum resolution requirements.
</sui-progress>
`;var ga=`<sui-progress
    suiState="error"
    [suiValue]="100">
  There was an error.
</sui-progress>
`;var Ea=`<sui-progress
    disabled
    [suiValue]="38">
</sui-progress>
`;var ba=`<div sui-segment suiInverted>
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
`;var ya=`<div sui-segment>
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
`;var Ca=`<div sui-card>
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
`;var wa=`<sui-progress
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
`;var Da=`<sui-progress
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
`;var _a=`<div sui-segment suiInverted>
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
`;var bu=["*"];function yu(n,m){if(n&1&&(i(0,"div",2),t(1),e()),n&2){let o=E();d(),_e("",o.progressPercentage,"%")}}var Q=(()=>{class n{constructor(){this.suiAttached=null,this.suiSize=null,this.suiColour=null,this.suiState=null,this.suiIndicating=!1,this.disabled=!1,this.suiInverted=!1,this.suiShowProgress=!1,this.value=0,this.maxValue=100,this.progressPercentage=0}set suiValue(o){this.value=+o,this.calculatePercentage()}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.calculatePercentage()}get suiMaxValue(){return this.maxValue}get classes(){return Y.combineToClass(["ui",this.suiSize??"",this.suiColour??"",this.suiAttached?`${this.suiAttached} attached`:"",Y.getPropClass(this.suiIndicating,"indicating"),Y.getPropClass(this.disabled,"disabled"),Y.getPropClass(this.suiInverted,"inverted"),"progress",this.suiState??""])}calculatePercentage(){this.value>this.maxValue||(this.progressPercentage=Math.ceil(this.value*100/this.maxValue))}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-progress"]],inputs:{suiAttached:"suiAttached",suiSize:"suiSize",suiColour:"suiColour",suiState:"suiState",suiIndicating:"suiIndicating",disabled:"disabled",suiInverted:"suiInverted",suiShowProgress:"suiShowProgress",suiValue:"suiValue",suiMaxValue:"suiMaxValue"},ngContentSelectors:bu,decls:5,vars:5,consts:[[3,"ngClass"],[1,"bar"],[1,"progress"],[1,"label"]],template:function(a,s){a&1&&(Ee(),i(0,"div",0)(1,"div",1),ie(2,yu,2,1,"div",2),e(),i(3,"div",3),be(4),e()()),a&2&&(l("ngClass",s.classes),ri("data-percent",s.progressPercentage),d(),pi("width",s.progressPercentage,"%"),d(),ne(s.suiShowProgress?2:-1))},dependencies:[J,qe],styles:["[_nghost-%COMP%]{width:100%}"]})}}return M([I()],n.prototype,"suiIndicating",void 0),M([I()],n.prototype,"disabled",void 0),M([I()],n.prototype,"suiInverted",void 0),M([I()],n.prototype,"suiShowProgress",void 0),n})(),Ta=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[Q]})}}return n})();var ee=class{constructor(){this.standardValue=31,this.indicatingValue=40}addToStandard(m){let o=this.standardValue+m;o>100?o=100:o<0&&(o=0),this.standardValue=o}addToIndicating(m){let o=this.indicatingValue+m;o>100?o=100:o<0&&(o=0),this.indicatingValue=o}},Ia=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-standard-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Uploading Files
`),e()),a&2&&l("suiValue",s.standardValue)},dependencies:[Q],encapsulation:2})}}return n})(),Pa=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-indicating-example"]],standalone:!1,features:[x],decls:2,vars:2,consts:[["suiIndicating","","suiState","active",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1),e()),a&2&&(l("suiValue",s.indicatingValue),d(),_e(" ",s.indicatingValue,`% Funded
`))},dependencies:[Q],encapsulation:2})}}return n})(),ka=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-bar-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[[3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&l("suiValue",28)},dependencies:[Q],encapsulation:2})}}return n})(),Fa=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-progress-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&l("suiValue",35)},dependencies:[Q],encapsulation:2})}}return n})(),Aa=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-label-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Uploading Files
`),e()),a&2&&l("suiValue",45)},dependencies:[Q],encapsulation:2})}}return n})(),Va=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-active-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiState","active",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Uploading Files
`),e()),a&2&&l("suiValue",51)},dependencies:[Q],encapsulation:2})}}return n})(),Ba=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-success-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiState","success",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Everything worked, your file is all ready.
`),e()),a&2&&l("suiValue",100)},dependencies:[Q],encapsulation:2})}}return n})(),La=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-warning-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiState","warning",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Your file didn't meet the minimum resolution requirements.
`),e()),a&2&&l("suiValue",100)},dependencies:[Q],encapsulation:2})}}return n})(),Oa=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-error-example"]],standalone:!1,features:[x],decls:2,vars:1,consts:[["suiState","error",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` There was an error.
`),e()),a&2&&l("suiValue",100)},dependencies:[Q],encapsulation:2})}}return n})(),Ha=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-disabled-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["disabled","",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&l("suiValue",38)},dependencies:[Q],encapsulation:2})}}return n})(),Ra=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-inverted-example"]],standalone:!1,features:[x],decls:9,vars:4,consts:[["sui-segment","","suiInverted",""],["suiInverted","","suiShowProgress","",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","success",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","warning",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","error",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"sui-progress",1),t(2," Uploading Files "),e(),i(3,"sui-progress",2),t(4," Success "),e(),i(5,"sui-progress",3),t(6," Warning "),e(),i(7,"sui-progress",4),t(8," Error "),e()()),a&2&&(d(),l("suiValue",15),d(2),l("suiValue",100),d(2),l("suiValue",100),d(2),l("suiValue",100))},dependencies:[F,Q],encapsulation:2})}}return n})(),Wa=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-attached-example"]],standalone:!1,features:[x],decls:5,vars:2,consts:[["sui-segment",""],["suiAttached","top",3,"suiValue"],[2,"margin","20px"],["suiAttached","bottom",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-progress",1),i(2,"p",2),t(3,"La la la la"),e(),r(4,"sui-progress",3),e()),a&2&&(d(),l("suiValue",21),d(3),l("suiValue",31))},dependencies:[F,Q],encapsulation:2})}}return n})(),za=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-card-attached-example"]],standalone:!1,features:[x],decls:14,vars:1,consts:[["sui-card",""],["suiCardImage",""],["src","/assets/images/wireframes/image.png"],["suiCardContent",""],["suiCardHeader",""],["suiCardMeta",""],[1,"date"],["suiCardExtra",""],["sui-icon","","suiIconType","user"],["suiAttached","bottom",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1),r(2,"img",2),e(),i(3,"div",3)(4,"a",4),t(5,"Project"),e(),i(6,"div",5)(7,"span",6),t(8,"Started in 2014"),e()()(),i(9,"div",7)(10,"a"),r(11,"i",8),t(12," 22 Friends "),e()(),r(13,"sui-progress",9),e()),a&2&&(d(13),l("suiValue",31))},dependencies:[Wt,zi,Ht,Ot,Wi,Rt,g,Q],encapsulation:2})}}return n})(),ja=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-size-example"]],standalone:!1,features:[x],decls:10,vars:5,consts:[["suiSize","tiny",3,"suiValue"],["suiSize","small",3,"suiValue"],[3,"suiValue"],["suiSize","large",3,"suiValue"],["suiSize","big",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),t(1,` Tiny
`),e(),i(2,"sui-progress",1),t(3,` Small
`),e(),i(4,"sui-progress",2),t(5,` Standard
`),e(),i(6,"sui-progress",3),t(7,` Large
`),e(),i(8,"sui-progress",4),t(9,` Big
`),e()),a&2&&(l("suiValue",61),d(2),l("suiValue",21),d(2),l("suiValue",41),d(2),l("suiValue",5),d(2),l("suiValue",14))},dependencies:[Q],encapsulation:2})}}return n})(),Na=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-colour-example"]],standalone:!1,features:[x],decls:13,vars:13,consts:[["suiColour","red",3,"suiValue"],["suiColour","orange",3,"suiValue"],["suiColour","yellow",3,"suiValue"],["suiColour","olive",3,"suiValue"],["suiColour","green",3,"suiValue"],["suiColour","teal",3,"suiValue"],["suiColour","blue",3,"suiValue"],["suiColour","violet",3,"suiValue"],["suiColour","purple",3,"suiValue"],["suiColour","pink",3,"suiValue"],["suiColour","brown",3,"suiValue"],["suiColour","grey",3,"suiValue"],["suiColour","black",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0)(1,"sui-progress",1)(2,"sui-progress",2)(3,"sui-progress",3)(4,"sui-progress",4)(5,"sui-progress",5)(6,"sui-progress",6)(7,"sui-progress",7)(8,"sui-progress",8)(9,"sui-progress",9)(10,"sui-progress",10)(11,"sui-progress",11)(12,"sui-progress",12),a&2&&(l("suiValue",59),d(),l("suiValue",31),d(),l("suiValue",48),d(),l("suiValue",35),d(),l("suiValue",35),d(),l("suiValue",31),d(),l("suiValue",35),d(),l("suiValue",18),d(),l("suiValue",22),d(),l("suiValue",50),d(),l("suiValue",18),d(),l("suiValue",56),d(),l("suiValue",45))},dependencies:[Q],encapsulation:2})}}return n})(),Ua=(()=>{class n extends ee{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress-inverted-colour-example"]],standalone:!1,features:[x],decls:14,vars:13,consts:[["sui-segment","","suiInverted",""],["suiInverted","","suiShowProgress","","suiColour","red",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","orange",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","yellow",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","olive",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","green",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","teal",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","blue",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","violet",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","purple",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","pink",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","brown",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","grey",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","black",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-progress",1)(2,"sui-progress",2)(3,"sui-progress",3)(4,"sui-progress",4)(5,"sui-progress",5)(6,"sui-progress",6)(7,"sui-progress",7)(8,"sui-progress",8)(9,"sui-progress",9)(10,"sui-progress",10)(11,"sui-progress",11)(12,"sui-progress",12)(13,"sui-progress",13),e()),a&2&&(d(),l("suiValue",59),d(),l("suiValue",31),d(),l("suiValue",48),d(),l("suiValue",35),d(),l("suiValue",35),d(),l("suiValue",31),d(),l("suiValue",35),d(),l("suiValue",18),d(),l("suiValue",22),d(),l("suiValue",50),d(),l("suiValue",18),d(),l("suiValue",56),d(),l("suiValue",45))},dependencies:[F,Q],encapsulation:2})}}return n})();function Du(n,m){n&1&&r(0,"doc-progress-standard-example")}function _u(n,m){n&1&&r(0,"doc-progress-indicating-example")}function Tu(n,m){n&1&&r(0,"doc-progress-bar-example")}function Mu(n,m){n&1&&r(0,"doc-progress-progress-example")}function Iu(n,m){n&1&&r(0,"doc-progress-label-example")}function Pu(n,m){n&1&&r(0,"doc-progress-active-example")}function ku(n,m){n&1&&r(0,"doc-progress-success-example")}function Fu(n,m){n&1&&r(0,"doc-progress-warning-example")}function Au(n,m){n&1&&r(0,"doc-progress-error-example")}function Vu(n,m){n&1&&r(0,"doc-progress-disabled-example")}function Bu(n,m){n&1&&r(0,"doc-progress-inverted-example")}function Lu(n,m){n&1&&r(0,"doc-progress-attached-example")}function Ou(n,m){n&1&&r(0,"doc-progress-card-attached-example")}function Hu(n,m){n&1&&r(0,"doc-progress-size-example")}function Ru(n,m){n&1&&r(0,"doc-progress-colour-example")}function Wu(n,m){n&1&&r(0,"doc-progress-inverted-colour-example")}function zu(n,m){if(n&1){let o=se();i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Standard"),e(),i(6,"p"),t(7,"A standard progress bar"),e(),h(8,Du,1,0,"ng-template",5),e(),i(9,"div")(10,"div",6)(11,"button",7),f("click",function(){y(o);let s=E();return C(s.addToStandard(-11))}),r(12,"i",8),e(),i(13,"button",9),f("click",function(){y(o);let s=E();return C(s.addToStandard(11))}),r(14,"i",10),e()()(),i(15,"doc-code-sample",11)(16,"h3",4),t(17,"Indicating"),e(),i(18,"p"),t(19,"An indicating progress bar visually indicates the current level of progress of a task"),e(),h(20,_u,1,0,"ng-template",5),e(),i(21,"div")(22,"div",6)(23,"button",7),f("click",function(){y(o);let s=E();return C(s.addToIndicating(-13))}),r(24,"i",8),e(),i(25,"button",9),f("click",function(){y(o);let s=E();return C(s.addToIndicating(13))}),r(26,"i",10),e()()(),i(27,"h2",2),t(28,"Content"),e(),i(29,"doc-code-sample",3)(30,"h3",4),t(31,"Bar"),e(),i(32,"p"),t(33,"A progress element can contain a bar visually indicating progress"),e(),h(34,Tu,1,0,"ng-template",5),e(),i(35,"doc-code-sample",3)(36,"h3",4),t(37,"Progress"),e(),i(38,"p"),t(39,"A progress bar can contain a text value indicating current progress"),e(),h(40,Mu,1,0,"ng-template",5),e(),i(41,"doc-code-sample",3)(42,"h3",4),t(43,"Label"),e(),i(44,"p"),t(45,"A progress element can contain a label"),e(),h(46,Iu,1,0,"ng-template",5),e(),i(47,"h2",2),t(48,"States"),e(),i(49,"doc-code-sample",3)(50,"h3",4),t(51,"Active"),e(),i(52,"p"),t(53,"A progress bar can show activity"),e(),h(54,Pu,1,0,"ng-template",5),e(),i(55,"doc-code-sample",3)(56,"h3",4),t(57,"Success"),e(),i(58,"p"),t(59,"A progress bar can show a success state"),e(),h(60,ku,1,0,"ng-template",5),e(),i(61,"doc-code-sample",3)(62,"h3",4),t(63,"Warning"),e(),i(64,"p"),t(65,"A progress bar can show a warning state"),e(),h(66,Fu,1,0,"ng-template",5),e(),i(67,"doc-code-sample",3)(68,"h3",4),t(69,"Error"),e(),i(70,"p"),t(71,"A progress bar can show an error state"),e(),h(72,Au,1,0,"ng-template",5),e(),i(73,"doc-code-sample",3)(74,"h3",4),t(75,"Disabled"),e(),i(76,"p"),t(77,"A progress bar can show an error state"),e(),h(78,Vu,1,0,"ng-template",5),e(),i(79,"h2",2),t(80,"Variations"),e(),i(81,"doc-code-sample",3)(82,"h3",4),t(83,"Inverted"),e(),i(84,"p"),t(85,"A progress bar can have its colors inverted"),e(),h(86,Bu,1,0,"ng-template",5),e(),i(87,"doc-code-sample",3)(88,"h3",4),t(89,"Attached"),e(),i(90,"p"),t(91,"AA progress bar can show progress of an element"),e(),h(92,Lu,1,0,"ng-template",5),e(),i(93,"doc-code-sample",3),h(94,Ou,1,0,"ng-template",5),e(),i(95,"doc-code-sample",3)(96,"h3",4),t(97,"Size"),e(),i(98,"p"),t(99,"A progress bar can vary in size"),e(),i(100,"div",12),t(101," Some small sizes may not be able to fit an inlined label "),e(),h(102,Hu,1,0,"ng-template",5),e(),i(103,"doc-code-sample",3)(104,"h3",4),t(105,"Colours"),e(),i(106,"p"),t(107,"Can have different colours"),e(),h(108,Ru,1,0,"ng-template",5),e(),i(109,"doc-code-sample",3)(110,"h3",4),t(111,"Inverted Colours"),e(),i(112,"p"),t(113,"These colors can also be inverted for improved contrast on dark backgrounds"),e(),h(114,Wu,1,0,"ng-template",5),e()()}if(n&2){let o=E();d(3),l("templateCode",o.snippetStandard),d(12),l("templateCode",o.snippetIndicating)("componentCode",o.snippetIndicatingTs),d(14),l("templateCode",o.snippetBar),d(6),l("templateCode",o.snippetProgress),d(6),l("templateCode",o.snippetStandard),d(8),l("templateCode",o.snippetActive),d(6),l("templateCode",o.snippetSuccess),d(6),l("templateCode",o.snippetWarning),d(6),l("templateCode",o.snippetError),d(6),l("templateCode",o.snippetDisabled),d(8),l("templateCode",o.snippetInverted),d(6),l("templateCode",o.snippetAttached),d(6),l("templateCode",o.snippetCardAttached),d(2),l("templateCode",o.snippetSize),d(8),l("templateCode",o.snippetColour),d(6),l("templateCode",o.snippetInvertedColour)}}function ju(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-progress"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",13)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiColour"),e(),i(20,"td"),t(21,"Set the progress colour. Allowed values could be "),i(22,"span",14),t(23,"'red'"),e(),t(24," | "),i(25,"span",14),t(26,"'orange'"),e(),t(27," | "),i(28,"span",14),t(29,"'yellow'"),e(),t(30," | "),i(31,"span",14),t(32,"'olive'"),e(),t(33," | "),i(34,"span",14),t(35,"'green'"),e(),t(36," | "),i(37,"span",14),t(38,"'teal'"),e(),t(39," | "),i(40,"span",14),t(41,"'blue'"),e(),t(42," | "),i(43,"span",14),t(44,"'violet'"),e(),t(45," | "),i(46,"span",14),t(47,"'purple'"),e(),t(48," | "),i(49,"span",14),t(50,"'pink'"),e(),t(51," | "),i(52,"span",14),t(53,"'brown'"),e(),t(54," | "),i(55,"span",14),t(56,"'grey'"),e(),t(57," | "),i(58,"span",14),t(59,"'black'"),e(),t(60," | "),i(61,"span",14),t(62,"null"),e()(),i(63,"td")(64,"div",15),t(65," string "),e()(),i(66,"td")(67,"div",16),t(68," null "),e()()(),i(69,"tr")(70,"td"),t(71,"suiSize"),e(),i(72,"td"),t(73,"Set the progress size. Allowed values could be "),i(74,"span",14),t(75,"'mini'"),e(),t(76," | "),i(77,"span",14),t(78,"'tiny'"),e(),t(79," | "),i(80,"span",14),t(81,"'small'"),e(),t(82," | "),i(83,"span",14),t(84,"'medium'"),e(),t(85," | "),i(86,"span",14),t(87,"'big'"),e(),t(88," | "),i(89,"span",14),t(90,"'huge'"),e(),t(91," | "),i(92,"span",14),t(93,"'massive'"),e(),t(94," | "),i(95,"span",14),t(96,"null"),e()(),i(97,"td")(98,"div",15),t(99," string "),e()(),i(100,"td")(101,"div",16),t(102," null "),e()()(),i(103,"tr")(104,"td"),t(105,"suiState"),e(),i(106,"td"),t(107," Determines the progress' state. Allowed values could be "),i(108,"span",14),t(109,"'active'"),e(),t(110," | "),i(111,"span",14),t(112,"'success'"),e(),t(113," | "),i(114,"span",14),t(115,"'warning'"),e(),t(116," | "),i(117,"span",14),t(118,"'error'"),e(),t(119," | "),i(120,"span",14),t(121,"null"),e()(),i(122,"td")(123,"div",15),t(124,"string"),e()(),i(125,"td")(126,"div",16),t(127,"null"),e()()(),i(128,"tr")(129,"td"),t(130,"suiAttached"),e(),i(131,"td"),t(132," Determines the progress' attachment position. Allowed values could be "),i(133,"span",14),t(134,"'bottom'"),e(),t(135," | "),i(136,"span",14),t(137,"'top'"),e(),t(138," | "),i(139,"span",14),t(140,"null"),e()(),i(141,"td")(142,"div",15),t(143,"string"),e()(),i(144,"td")(145,"div",16),t(146,"null"),e()()(),i(147,"tr")(148,"td"),t(149,"suiIndicating"),e(),i(150,"td"),t(151," Determines if the progress is indicating "),e(),i(152,"td")(153,"div",15),t(154,"boolean"),e()(),i(155,"td")(156,"div",16),t(157,"false"),e()()(),i(158,"tr")(159,"td"),t(160,"disabled"),e(),i(161,"td"),t(162," Determines if the progress is disabled "),e(),i(163,"td")(164,"div",15),t(165,"boolean"),e()(),i(166,"td")(167,"div",16),t(168,"false"),e()()(),i(169,"tr")(170,"td"),t(171,"suiInverted"),e(),i(172,"td"),t(173,"Determines whether the progress bar uses inverted colours"),e(),i(174,"td")(175,"div",15),t(176,"boolean"),e()(),i(177,"td")(178,"div",16),t(179,"false"),e()()(),i(180,"tr")(181,"td"),t(182,"suiShowProgress"),e(),i(183,"td"),t(184,"Determines whether the progress percentage is displayed"),e(),i(185,"td")(186,"div",15),t(187,"boolean"),e()(),i(188,"td")(189,"div",16),t(190,"false"),e()()()()()())}var Ga=(()=>{class n{constructor(o){this.snippetStandard=pa,this.snippetIndicating=ua,this.snippetIndicatingTs=ca,this.snippetBar=ha,this.snippetProgress=Sa,this.snippetActive=xa,this.snippetSuccess=fa,this.snippetWarning=va,this.snippetError=ga,this.snippetDisabled=Ea,this.snippetInverted=ba,this.snippetAttached=ya,this.snippetCardAttached=Ca,this.snippetSize=wa,this.snippetColour=Da,this.snippetInvertedColour=_a,this.standardValue=31,this.indicatingValue=40,o.setTitle("Progress | Ngx Semantic")}addToStandard(o){let a=this.standardValue+o;a>100?a=100:a<0&&(a=0),this.standardValue=a}addToIndicating(o){let a=this.indicatingValue+o;a>100?a=100:a<0&&(a=0),this.indicatingValue=a}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-progress"]],standalone:!1,decls:3,vars:2,consts:[["header","Progress","subHeader","A progress bar shows the progression of a task"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-buttons",""],["sui-button","","suiIcon","","suiBasic","","suiColour","red",3,"click"],["sui-icon","","suiIconType","minus"],["sui-button","","suiIcon","","suiBasic","","suiColour","green",3,"click"],["sui-icon","","suiIconType","plus"],[3,"templateCode","componentCode"],["sui-message","","suiState","info"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,zu,115,17,"div",1)(2,ju,191,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,T,le,g,re,Ia,Pa,ka,Fa,Aa,Va,Ba,La,Oa,Ha,Ra,Wa,za,ja,Na,Ua],encapsulation:2})}}return n})();var Ya=`<button sui-button suiIcon
        sui-popup suiPopupContent="Add users to your feed">
  <i sui-icon suiIconType="add"></i>
</button>
`;var Ja=`<img sui-image suiAvatar
     sui-popup suiPopupTitle="Elliot Fu" suiPopupContent="Elliot has been a member since July 2012"
     src="/assets/images/elliot.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Stevie Feliciano" suiPopupContent="Stevie has been a member since August 2013"
     src="/assets/images/stevie.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Matt" suiPopupContent="Matt has been a member since July 2014"
     src="/assets/images/matt.jpg"/>
`;var Xa=`<div sui-card
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
`;var qa=`<button sui-button suiIcon
        sui-popup suiPopupBasic suiPopupContent="The default theme's basic popup removes the pointing arrow.">
  <i sui-icon suiIconType="add"></i>
</button>
`;var Ka=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="wide"
   suiPopupContent="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="very wide"
   suiPopupContent="Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
`;var Za=`<div sui-button
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
`;var $a=`<i sui-icon suiCircular suiLink suiIconType="heart"
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
`;var Qa=`<div sui-button
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
`;var es=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup"></i>
<button sui-button suiIcon
        sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup">
  <i sui-icon suiIconType="add"></i>
</button>
`;var ts=`<i sui-icon suiCircular suiColour="red" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="bottom left" suiPopupContent="This is a bottom left popup"></i>
<i sui-icon suiCircular suiColour="teal" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="top right" suiPopupContent="This is a top right popup"></i>
`;function Qu(n,m){n&1&&r(0,"sui-rating",12)}function ec(n,m){n&1&&(i(0,"div",2)(1,"div",3),t(2,"1"),e(),i(3,"div",3),t(4,"2"),e(),i(5,"div",3),t(6,"3"),e(),i(7,"div",3),t(8,"4"),e()())}function tc(n,m){n&1&&(i(0,"div",2)(1,"div",3)(2,"div",4),t(3,"Basic Plan"),e(),i(4,"p")(5,"b"),t(6,"2"),e(),t(7," projects, $10 a month"),e(),i(8,"div",5),t(9,"Choose"),e()(),i(10,"div",3)(11,"div",4),t(12,"Business Plan"),e(),i(13,"p")(14,"b"),t(15,"5"),e(),t(16," projects, $20 a month"),e(),i(17,"div",5),t(18,"Choose"),e()(),i(19,"div",3)(20,"div",4),t(21,"Premium Plan"),e(),i(22,"p")(23,"b"),t(24,"8"),e(),t(25," projects, $25 a month"),e(),i(26,"div",5),t(27,"Choose"),e()()())}var is=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-standard-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-button","","suiIcon","","sui-popup","","suiPopupContent","Add users to your feed"],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(i(0,"button",0),r(1,"i",1),e())},dependencies:[T,g,Me],encapsulation:2})}}return n})(),ns=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-titled-example"]],standalone:!1,decls:3,vars:0,consts:[["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Elliot Fu","suiPopupContent","Elliot has been a member since July 2012","src","/assets/images/elliot.jpg"],["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Stevie Feliciano","suiPopupContent","Stevie has been a member since August 2013","src","/assets/images/stevie.jpg"],["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Matt","suiPopupContent","Matt has been a member since July 2014","src","/assets/images/matt.jpg"]],template:function(a,s){a&1&&r(0,"img",0)(1,"img",1)(2,"img",2)},dependencies:[Te,Me],encapsulation:2})}}return n})(),os=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-html-example"]],standalone:!1,decls:17,vars:1,consts:[["popupContent",""],["sui-card","","sui-popup","","suiPopupTitle","User Rating",3,"suiPopupContent"],["suiCardImage",""],["src","https://semantic-ui.com/images/movies/watchmen-horizontal.jpg"],["suiCardContent",""],["suiCardHeader",""],["suiCardDescription",""],["sui-buttons","","suiAttached","","suiWidth","two","suiAttachedPosition","bottom"],["sui-button",""],["sui-icon","","suiIconType","add"],["sui-button","","suiEmphasis","primary"],["sui-icon","","suiIconType","play"],["suiValue","3","suiMaxValue","5"]],template:function(a,s){if(a&1&&(i(0,"div",1)(1,"div",2),r(2,"img",3),e(),i(3,"div",4)(4,"div",5),t(5,"Watchmen"),e(),i(6,"div",6),t(7," In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. "),e()(),i(8,"div",7)(9,"div",8),r(10,"i",9),t(11," Queue "),e(),i(12,"div",10),r(13,"i",11),t(14," Watch "),e()()(),h(15,Qu,1,0,"ng-template",null,0,Be)),a&2){let c=k(16);l("suiPopupContent",c)}},dependencies:[Wt,Ht,Ot,Lt,Rt,st,T,le,g,Me],encapsulation:2})}}return n})(),as=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-basic-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-button","","suiIcon","","sui-popup","","suiPopupBasic","","suiPopupContent","The default theme's basic popup removes the pointing arrow."],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(i(0,"button",0),r(1,"i",1),e())},dependencies:[T,g,Me],encapsulation:2})}}return n})(),ss=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-width-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupWidth","wide","suiPopupContent","Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupWidth","very wide","suiPopupContent","Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)},dependencies:[g,Me],encapsulation:2})}}return n})(),rs=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-fluid-example"]],standalone:!1,decls:4,vars:1,consts:[["fluidPopup",""],["sui-button","","sui-popup","",3,"suiPopupContent"],["sui-grid","","suiDivided","divided","suiAlignment","center aligned","suiWidth","four"],["suiGridColumn",""]],template:function(a,s){if(a&1&&(i(0,"div",1),t(1,` Show fluid popup
`),e(),h(2,ec,9,0,"ng-template",null,0,Be)),a&2){let c=k(3);l("suiPopupContent",c)}},dependencies:[T,Yt,Jt,Me],encapsulation:2})}}return n})(),ls=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-size-example"]],standalone:!1,decls:5,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","mini","suiPopupContent","Hello. This is a mini popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","tiny","suiPopupContent","Hello. This is a tiny popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","small","suiPopupContent","Hello. This is a small popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","large","suiPopupContent","Hello. This is a large popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","huge","suiPopupContent","Hello. This is a huge popup"]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)(2,"i",2)(3,"i",3)(4,"i",4)},dependencies:[g,Me],encapsulation:2})}}return n})(),ds=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-flowing-example"]],standalone:!1,decls:4,vars:1,consts:[["flowingTemplate",""],["sui-button","","sui-popup","","suiPopupFlowing","",3,"suiPopupContent"],["sui-grid","","suiDivided","divided","suiAlignment","center aligned","suiWidth","three"],["suiGridColumn",""],["sui-header",""],["sui-button",""]],template:function(a,s){if(a&1&&(i(0,"div",1),t(1,` Show flowing popup
`),e(),h(2,tc,28,0,"ng-template",null,0,Be)),a&2){let c=k(3);l("suiPopupContent",c)}},dependencies:[b,T,Yt,Jt,Me],encapsulation:2})}}return n})(),ms=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-inverted-example"]],standalone:!1,decls:3,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupInverted","","suiPopupContent","Hello. This is an inverted popup"],["sui-button","","suiIcon","","sui-popup","","suiPopupInverted","","suiPopupContent","Hello. This is an inverted popup"],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(r(0,"i",0),i(1,"button",1),r(2,"i",2),e())},dependencies:[T,g,Me],encapsulation:2})}}return n})(),ps=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup-position-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-icon","","suiCircular","","suiColour","red","suiSize","big","suiIconType","heart","sui-popup","","suiPopupPlacement","bottom left","suiPopupContent","This is a bottom left popup"],["sui-icon","","suiCircular","","suiColour","teal","suiSize","big","suiIconType","heart","sui-popup","","suiPopupPlacement","top right","suiPopupContent","This is a top right popup"]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)},dependencies:[g,Me],encapsulation:2})}}return n})();function nc(n,m){n&1&&r(0,"doc-popup-standard-example")}function oc(n,m){n&1&&r(0,"doc-popup-titled-example")}function ac(n,m){n&1&&r(0,"doc-popup-html-example")}function sc(n,m){n&1&&r(0,"doc-popup-basic-example")}function rc(n,m){n&1&&r(0,"doc-popup-width-example")}function lc(n,m){n&1&&r(0,"doc-popup-fluid-example")}function dc(n,m){n&1&&r(0,"doc-popup-size-example")}function mc(n,m){n&1&&r(0,"doc-popup-flowing-example")}function pc(n,m){n&1&&r(0,"doc-popup-inverted-example")}function uc(n,m){n&1&&r(0,"doc-popup-position-example")}function cc(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Popup"),e(),i(6,"p"),t(7,"An element can specify popup content to appear"),e(),i(8,"div",5),t(9," Popup relies on "),i(10,"a",6),t(11,"Angular CDK"),e(),t(12,". Ensure that you have the latest version compatible with your Angular version "),e(),h(13,nc,1,0,"ng-template",7),e(),i(14,"doc-code-sample",3)(15,"h3",4),t(16,"Titled"),e(),i(17,"p"),t(18,"An element can specify popup content with a title"),e(),h(19,oc,1,0,"ng-template",7),e(),i(20,"doc-code-sample",3)(21,"h3",4),t(22,"HTML"),e(),i(23,"p"),t(24,"An element can specify template HTML for a popup"),e(),h(25,ac,1,0,"ng-template",7),e(),i(26,"h2",2),t(27,"Variations"),e(),i(28,"doc-code-sample",3)(29,"h3",4),t(30,"Basic"),e(),i(31,"p"),t(32,"A popup can provide more basic formatting"),e(),h(33,sc,1,0,"ng-template",7),e(),i(34,"doc-code-sample",3)(35,"h3",4),t(36,"Width"),e(),i(37,"p"),t(38,"A popup can be extra wide to allow for longer content"),e(),h(39,rc,1,0,"ng-template",7),e(),i(40,"doc-code-sample",3)(41,"h3",4),t(42,"Fluid"),e(),i(43,"p"),t(44,"A fluid popup will take up the entire width of its offset container"),e(),h(45,lc,1,0,"ng-template",7),e(),i(46,"doc-code-sample",3)(47,"h3",4),t(48,"Size"),e(),i(49,"p"),t(50,"A popup can vary in size"),e(),h(51,dc,1,0,"ng-template",7),e(),i(52,"doc-code-sample",3)(53,"h3",4),t(54,"Flowing"),e(),i(55,"p"),t(56,"A popup can have no maximum width and continue to flow to fit its content"),e(),h(57,mc,1,0,"ng-template",7),e(),i(58,"doc-code-sample",3)(59,"h3",4),t(60,"Inverted"),e(),i(61,"p"),t(62,"A popup can have its colors inverted"),e(),h(63,pc,1,0,"ng-template",7),e(),i(64,"doc-code-sample",3)(65,"h3",4),t(66,"Position"),e(),i(67,"p"),t(68,"A popup can be position around its trigger"),e(),h(69,uc,1,0,"ng-template",7),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetStandard),d(11),l("templateCode",o.snippetTitled),d(6),l("templateCode",o.snippetHtml),d(8),l("templateCode",o.snippetBasic),d(6),l("templateCode",o.snippetWidth),d(6),l("templateCode",o.snippetFluid),d(6),l("templateCode",o.snippetSize),d(6),l("templateCode",o.snippetFlowing),d(6),l("templateCode",o.snippetInverted),d(6),l("templateCode",o.snippetPosition)}}function hc(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-popup"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiPopupPlacement"),e(),i(20,"td"),t(21,"Set the popup's position. Allowed values could be "),i(22,"span",9),t(23,"'top left'"),e(),t(24," | "),i(25,"span",9),t(26,"'top center'"),e(),t(27," | "),i(28,"span",9),t(29,"'top right'"),e(),t(30," | "),i(31,"span",9),t(32,"'bottom left'"),e(),t(33," | "),i(34,"span",9),t(35,"'bottom center'"),e(),t(36," | "),i(37,"span",9),t(38,"'bottom right'"),e(),t(39," | "),i(40,"span",9),t(41,"'right center'"),e(),t(42," | "),i(43,"span",9),t(44,"'left center'"),e()(),i(45,"td")(46,"div",10),t(47," string "),e()(),i(48,"td")(49,"div",11),t(50," top left "),e()()(),i(51,"tr")(52,"td"),t(53,"suiPopupSize"),e(),i(54,"td"),t(55,"Set the popup size. Allowed values could be "),i(56,"span",9),t(57,"'mini'"),e(),t(58," | "),i(59,"span",9),t(60,"'tiny'"),e(),t(61," | "),i(62,"span",9),t(63,"'small'"),e(),t(64," | "),i(65,"span",9),t(66,"'medium'"),e(),t(67," | "),i(68,"span",9),t(69,"'big'"),e(),t(70," | "),i(71,"span",9),t(72,"'huge'"),e(),t(73," | "),i(74,"span",9),t(75,"'massive'"),e(),t(76," | "),i(77,"span",9),t(78,"null"),e()(),i(79,"td")(80,"div",10),t(81," string "),e()(),i(82,"td")(83,"div",11),t(84," null "),e()()(),i(85,"tr")(86,"td"),t(87,"suiPopupWidth"),e(),i(88,"td"),t(89," Determines the popup's width. Allowed values could be "),i(90,"span",9),t(91,"'wide'"),e(),t(92," | "),i(93,"span",9),t(94,"'very wide'"),e(),t(95," | "),i(96,"span",9),t(97,"null"),e()(),i(98,"td")(99,"div",10),t(100,"string"),e()(),i(101,"td")(102,"div",11),t(103,"null"),e()()(),i(104,"tr")(105,"td"),t(106,"suiPopupTrigger"),e(),i(107,"td"),t(108," Determines the popup's trigger. Allowed values could be "),i(109,"span",9),t(110,"'hover'"),e(),t(111," | "),i(112,"span",9),t(113,"'click'"),e()(),i(114,"td")(115,"div",10),t(116,"string"),e()(),i(117,"td")(118,"div",11),t(119,"hover"),e()()(),i(120,"tr")(121,"td"),t(122,"suiPopupTitle"),e(),i(123,"td"),t(124," What should get rendered as the popup's title/header "),e(),i(125,"td")(126,"div",10),t(127,"string"),e()(),i(128,"td")(129,"div",11),t(130,"null"),e()()(),i(131,"tr")(132,"td"),t(133,"suiPopupContent"),e(),i(134,"td"),t(135," What should get rendered as the popup's content. Could be a string or a template reference "),e(),i(136,"td")(137,"div",10),t(138,"string"),e(),t(139," | "),i(140,"div",10),t(141,"TemplateRef<any>"),e()(),i(142,"td")(143,"div",11),t(144,"null"),e()()(),i(145,"tr")(146,"td"),t(147,"suiPopupInverted"),e(),i(148,"td"),t(149," Determines if the popup uses inverted colours "),e(),i(150,"td")(151,"div",10),t(152,"boolean"),e()(),i(153,"td")(154,"div",11),t(155,"false"),e()()(),i(156,"tr")(157,"td"),t(158,"suiPopupFluid"),e(),i(159,"td"),t(160," Determines if the popup uses fluid styling "),e(),i(161,"td")(162,"div",10),t(163,"boolean"),e()(),i(164,"td")(165,"div",11),t(166,"false"),e()()(),i(167,"tr")(168,"td"),t(169,"suiPopupFlowing"),e(),i(170,"td"),t(171," Determines if the popup uses flowing styling "),e(),i(172,"td")(173,"div",10),t(174,"boolean"),e()(),i(175,"td")(176,"div",11),t(177,"false"),e()()(),i(178,"tr")(179,"td"),t(180,"suiPopupBasic"),e(),i(181,"td"),t(182,"Determines whether the popup uses basic styling and renders without the arrow"),e(),i(183,"td")(184,"div",10),t(185,"boolean"),e()(),i(186,"td")(187,"div",11),t(188,"false"),e()()()()()())}var us=(()=>{class n{constructor(o){this.snippetStandard=Ya,this.snippetTitled=Ja,this.snippetHtml=Xa,this.snippetBasic=qa,this.snippetWidth=Ka,this.snippetFluid=Za,this.snippetSize=$a,this.snippetFlowing=Qa,this.snippetInverted=es,this.snippetPosition=ts,o.setTitle("Popup | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-popup"]],standalone:!1,decls:3,vars:2,consts:[["header","Popup","subHeader","A popup displays additional information on top of a page"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["href","https://www.npmjs.com/package/@angular/cdk"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,cc,70,10,"div",1)(2,hc,189,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,re,is,ns,os,as,ss,rs,ls,ds,ms,ps],encapsulation:2})}}return n})();var cs=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var hs=`<sui-select
    suiFluid
    name="fluid"
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var Ss=`<sui-select
    suiSearch
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var xs=`<sui-select
    suiMultiple
    name="multiple"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var fs=`<sui-select
    suiSearch
    suiMultiple
    name="multiple-search"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var vs=`<sui-select
    name="flag"
    suiPlaceholder="Select Country"
    [suiOptions]="countries">
</sui-select>
`;var gs=`<sui-select
    name="images"
    suiPlaceholder="Select User"
    [suiOptions]="persons">
</sui-select>
`;var Es=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions"
    [(ngModel)]="selectedGender"
    (suiSelectionChanged)="onSelectionChanged($event)">
</sui-select>

<p>
  Selected value: <strong>{{ selectedGender }}</strong><br>
  Last change event: <strong>{{ lastChange }}</strong>
</p>
`;var bs=`<sui-select
    suiFluid
    suiMultiple
    suiLoading
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var ys=`<sui-select
    suiError
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var Cs=`<sui-select
    disabled
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var ws=`<sui-select
    suiScrolling
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var Ds=`<sui-select
    suiCompact
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var _s=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var Ts=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var Ms=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var Is=`countries: ISelectOption[] = [
  { text: 'Albania', value: 'al', flag: 'al' },
  { text: 'Angola', value: 'ao', flag: 'ao' },
  { text: 'Azerbaijan', value: 'az', flag: 'az' },
  { text: 'Botswana', value: 'bw', flag: 'bw' },
  { text: 'Nigeria', value: 'ng', flag: 'ng' },
];
`;var Ps=`persons: ISelectOption[] = [
  { text: 'Elliot', value: null, image: { avatar: true, src: '/assets/images/elliot.jpg'} },
  { text: 'Helen', value: null, image: { avatar: true, src: '/assets/images/helen.jpg'} },
  { text: 'Jenny', value: null, image: { avatar: true, src: '/assets/images/jenny.jpg'} },
  { text: 'Joe', value: null, image: { avatar: true, src: '/assets/images/joe.jpg'} },
  { text: 'Justen', value: null, image: { avatar: true, src: '/assets/images/justen.jpg'} },
  { text: 'Laura', value: null, image: { avatar: true, src: '/assets/images/laura.jpg'} },
  { text: 'Matt', value: null, image: { avatar: true, src: '/assets/images/matt.jpg'} },
  { text: 'Stevie', value: null, image: { avatar: true, src: '/assets/images/stevie.jpg'} },
];
`;var ks=`selectedGender: number | null = 1;
lastChange: number | null = null;

genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];

onSelectionChanged(value: number): void {
  this.lastChange = value;
}
`;var Fs=`options: ISelectOption[] = [
  { text: 'Option 1', value: 'one' },
  { text: 'Option 2', value: 'two' },
  { text: 'Option 3', value: 'three' },
];
`;var As=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var Vs=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var pe=class{constructor(){this.selectedGender=1,this.lastChange=null,this.genderOptions=[{text:"Male",value:0},{text:"Female",value:1}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Angola",value:"ao",flag:"ao"},{text:"Azerbaijan",value:"az",flag:"az"},{text:"Botswana",value:"bw",flag:"bw"},{text:"Nigeria",value:"ng",flag:"ng"}],this.states=[{text:"Alabama",value:"AL"},{text:"Arizona",value:"AZ"},{text:"California",value:"CA"},{text:"District Of Columbia",value:"DC"},{text:"Idaho",value:"ID"},{text:"Indiana",value:"IN"},{text:"Kansas",value:"KS"},{text:"Louisiana",value:"LA"},{text:"Maryland",value:"MD"},{text:"Utah",value:"UT"}],this.persons=[{text:"Elliot",value:null,image:{avatar:!0,src:"/assets/images/elliot.jpg"}},{text:"Helen",value:null,image:{avatar:!0,src:"/assets/images/helen.jpg"}},{text:"Jenny",value:null,image:{avatar:!0,src:"/assets/images/jenny.jpg"}},{text:"Joe",value:null,image:{avatar:!0,src:"/assets/images/joe.jpg"}},{text:"Justen",value:null,image:{avatar:!0,src:"/assets/images/justen.jpg"}},{text:"Laura",value:null,image:{avatar:!0,src:"/assets/images/laura.jpg"}},{text:"Matt",value:null,image:{avatar:!0,src:"/assets/images/matt.jpg"}},{text:"Stevie",value:null,image:{avatar:!0,src:"/assets/images/stevie.jpg"}}],this.options=[{text:"Option 1",value:"one"},{text:"Option 2",value:"two"},{text:"Option 3",value:"three"}]}onSelectionChanged(m){this.lastChange=m}},Bs=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-standard-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.genderOptions)},dependencies:[ce],encapsulation:2})}}return n})(),Ls=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-fluid-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiFluid","","name","fluid","suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.genderOptions)},dependencies:[ce],encapsulation:2})}}return n})(),Os=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-multiple-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiMultiple","","name","multiple","suiPlaceholder","State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.states)},dependencies:[ce],encapsulation:2})}}return n})(),Hs=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-multiple-search-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiSearch","","suiMultiple","","name","multiple-search","suiPlaceholder","State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.states)},dependencies:[ce],encapsulation:2})}}return n})(),Rs=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-flag-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["name","flag","suiPlaceholder","Select Country",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.countries)},dependencies:[ce],encapsulation:2})}}return n})(),Ws=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-images-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["name","images","suiPlaceholder","Select User",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.persons)},dependencies:[ce],encapsulation:2})}}return n})(),zs=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-loading-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiFluid","","suiMultiple","","suiLoading","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.options)},dependencies:[ce],encapsulation:2})}}return n})(),js=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-error-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiError","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.options)},dependencies:[ce],encapsulation:2})}}return n})(),Ns=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-disabled-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["disabled","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.options)},dependencies:[ce],encapsulation:2})}}return n})(),Us=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-search-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiSearch","","suiPlaceholder","Select State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.states)},dependencies:[ce],encapsulation:2})}}return n})(),Gs=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-scrolling-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiScrolling","","suiPlaceholder","Select State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.states)},dependencies:[ce],encapsulation:2})}}return n})(),Ys=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-compact-example"]],standalone:!1,features:[x],decls:1,vars:1,consts:[["suiCompact","","suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&l("suiOptions",s.genderOptions)},dependencies:[ce],encapsulation:2})}}return n})(),Js=(()=>{class n extends pe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-select-two-way-example"]],standalone:!1,features:[x],decls:9,vars:4,consts:[["suiPlaceholder","Gender",3,"ngModelChange","suiSelectionChanged","suiOptions","ngModel"]],template:function(a,s){a&1&&(i(0,"sui-select",0),_("ngModelChange",function(p){return D(s.selectedGender,p)||(s.selectedGender=p),p}),f("suiSelectionChanged",function(p){return s.onSelectionChanged(p)}),e(),i(1,"p"),t(2," Selected value: "),i(3,"strong"),t(4),e(),r(5,"br"),t(6," Last change event: "),i(7,"strong"),t(8),e()()),a&2&&(l("suiOptions",s.genderOptions),w("ngModel",s.selectedGender),d(4),nt(s.selectedGender),d(4),nt(s.lastChange))},dependencies:[Qe,et,ce],encapsulation:2})}}return n})();function Rc(n,m){n&1&&r(0,"doc-select-standard-example")}function Wc(n,m){n&1&&r(0,"doc-select-fluid-example")}function zc(n,m){n&1&&r(0,"doc-select-search-example")}function jc(n,m){n&1&&r(0,"doc-select-multiple-example")}function Nc(n,m){n&1&&r(0,"doc-select-multiple-search-example")}function Uc(n,m){n&1&&r(0,"doc-select-flag-example")}function Gc(n,m){n&1&&r(0,"doc-select-images-example")}function Yc(n,m){n&1&&r(0,"doc-select-two-way-example")}function Jc(n,m){n&1&&r(0,"doc-select-loading-example")}function Xc(n,m){n&1&&r(0,"doc-select-error-example")}function qc(n,m){n&1&&r(0,"doc-select-disabled-example")}function Kc(n,m){n&1&&r(0,"doc-select-scrolling-example")}function Zc(n,m){n&1&&r(0,"doc-select-compact-example")}function $c(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Selection"),e(),i(6,"p"),t(7,"A standard select can be used to pick between choices in a form."),e(),h(8,Rc,1,0,"ng-template",5),e(),i(9,"doc-code-sample",3),h(10,Wc,1,0,"ng-template",5),e(),i(11,"doc-code-sample",3)(12,"h3",4),t(13,"Search Selection"),e(),i(14,"p"),t(15,"A selection dropdown can allow a user to search through a large list of choices."),e(),h(16,zc,1,0,"ng-template",5),e(),i(17,"doc-code-sample",3)(18,"h3",4),t(19,"Multiple Selection"),e(),i(20,"p"),t(21,"A selection dropdown can allow multiple selections."),e(),i(22,"div",6),r(23,"i",7),i(24,"div",8)(25,"p"),t(26,"Selected values are emitted as an array."),e()()(),h(27,jc,1,0,"ng-template",5),e(),i(28,"doc-code-sample",3)(29,"h3",4),t(30,"Multiple Search Selection"),e(),i(31,"p"),t(32,"A selection dropdown can allow multiple search selections."),e(),h(33,Nc,1,0,"ng-template",5),e(),i(34,"doc-code-sample",3)(35,"h3",4),t(36,"Flag Selection"),e(),i(37,"p"),t(38,"A selection can include flag icons."),e(),i(39,"div",6),r(40,"i",7),i(41,"div",8)(42,"p"),t(43,"Set "),i(44,"span",9),t(45,"flag"),e(),t(46," on an option to the two-letter country code of the flag to show."),e()()(),h(47,Uc,1,0,"ng-template",5),e(),i(48,"doc-code-sample",3)(49,"h3",4),t(50,"Image Selection"),e(),i(51,"p"),t(52,"A selection can include images."),e(),h(53,Gc,1,0,"ng-template",5),e(),i(54,"h2",2),t(55,"Forms"),e(),i(56,"doc-code-sample",3)(57,"h3",4),t(58,"Form Binding"),e(),i(59,"p"),t(60,"A select is a form control. Use it with "),i(61,"span",9),t(62,"ngModel"),e(),t(63,", or with "),i(64,"span",9),t(65,"formControl"),e(),t(66," / "),i(67,"span",9),t(68,"formControlName"),e(),t(69," in reactive forms. The "),i(70,"span",9),t(71,"suiSelectionChanged"),e(),t(72," event also fires whenever the selection changes."),e(),i(73,"div",6),r(74,"i",7),i(75,"div",8)(76,"p"),t(77,"Form binding with "),i(78,"span",9),t(79,"ngModel"),e(),t(80," and reactive forms requires "),i(81,"span",9),t(82,"FormsModule"),e(),t(83," or "),i(84,"span",9),t(85,"ReactiveFormsModule"),e(),t(86,". Programmatic value writes are supported for single selection."),e()()(),h(87,Yc,1,0,"ng-template",5),e(),i(88,"h2",2),t(89,"States"),e(),i(90,"doc-code-sample",3)(91,"h3",4),t(92,"Loading"),e(),i(93,"p"),t(94,"A dropdown can show that it is currently loading data."),e(),h(95,Jc,1,0,"ng-template",5),e(),i(96,"doc-code-sample",3)(97,"h3",4),t(98,"Error"),e(),i(99,"p"),t(100,"An errored dropdown can alert a user to a problem."),e(),h(101,Xc,1,0,"ng-template",5),e(),i(102,"doc-code-sample",3)(103,"h3",4),t(104,"Disabled"),e(),i(105,"p"),t(106,"A disabled dropdown menu or item does not allow user interaction."),e(),h(107,qc,1,0,"ng-template",5),e(),i(108,"h2",2),t(109,"Variations"),e(),i(110,"doc-code-sample",3)(111,"h3",4),t(112,"Scrolling"),e(),i(113,"p"),t(114,"A selection dropdown can have its menu scroll."),e(),h(115,Kc,1,0,"ng-template",5),e(),i(116,"doc-code-sample",3)(117,"h3",4),t(118,"Compact"),e(),i(119,"p"),t(120,"A compact selection dropdown has no minimum width."),e(),h(121,Zc,1,0,"ng-template",5),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetStandard)("componentCode",o.snippetStandardTs),d(6),l("templateCode",o.snippetFluid)("componentCode",o.snippetStandardTs),d(2),l("templateCode",o.snippetSearch)("componentCode",o.snippetSearchTs),d(6),l("templateCode",o.snippetMultiple)("componentCode",o.snippetMultipleTs),d(11),l("templateCode",o.snippetMultipleSearch)("componentCode",o.snippetMultipleTs),d(6),l("templateCode",o.snippetFlag)("componentCode",o.snippetFlagsTs),d(14),l("templateCode",o.snippetImages)("componentCode",o.snippetImagesTs),d(8),l("templateCode",o.snippetTwoWay)("componentCode",o.snippetTwoWayTs),d(34),l("templateCode",o.snippetLoading)("componentCode",o.snippetStatesTs),d(6),l("templateCode",o.snippetError)("componentCode",o.snippetStatesTs),d(6),l("templateCode",o.snippetDisabled)("componentCode",o.snippetStatesTs),d(8),l("templateCode",o.snippetScrolling)("componentCode",o.snippetScrollingTs),d(6),l("templateCode",o.snippetCompact)("componentCode",o.snippetCompactTs)}}function Qc(n,m){n&1&&(i(0,"div")(1,"div",6),r(2,"i",7),i(3,"div",8)(4,"p"),t(5," Import "),i(6,"span",9),t(7,"SuiSelectModule"),e(),t(8," from "),i(9,"span",9),t(10,"ngx-semantic/modules/select"),e(),t(11,". The select builds its own menu from "),i(12,"span",9),t(13,"suiOptions"),e(),t(14,", so you do not need to write menu markup. Looking for a menu of actions? See "),i(15,"a",10),t(16,"Dropdown"),e(),t(17,". "),e()()(),i(18,"h2",2),t(19,"sui-select"),e(),i(20,"p"),t(21,"Selector: "),i(22,"span",9),t(23,"sui-select"),e(),t(24,". Implements "),i(25,"span",9),t(26,"ControlValueAccessor"),e(),t(27," so it can be used with template-driven and reactive forms."),e(),i(28,"h4",4),t(29,"Properties"),e(),i(30,"table",11)(31,"thead")(32,"tr")(33,"th"),t(34,"Property"),e(),i(35,"th"),t(36,"Description"),e(),i(37,"th"),t(38,"Type"),e(),i(39,"th"),t(40,"Default"),e()()(),i(41,"tbody")(42,"tr")(43,"td"),t(44,"suiOptions"),e(),i(45,"td"),t(46,"The options to choose from. See "),i(47,"span",9),t(48,"ISelectOption"),e(),t(49," below."),e(),i(50,"td")(51,"div",12),t(52," ISelectOption[] "),e()(),i(53,"td")(54,"div",13),t(55," [] "),e()()(),i(56,"tr")(57,"td"),t(58,"suiPlaceholder"),e(),i(59,"td"),t(60,"The select\u2019s placeholder text."),e(),i(61,"td")(62,"div",12),t(63," string "),e()(),i(64,"td")(65,"div",13),t(66," null "),e()()(),i(67,"tr")(68,"td"),t(69,"suiSearch"),e(),i(70,"td"),t(71,"Determines if the select supports searching through its options."),e(),i(72,"td")(73,"div",12),t(74," boolean "),e()(),i(75,"td")(76,"div",13),t(77," false "),e()()(),i(78,"tr")(79,"td"),t(80,"suiMultiple"),e(),i(81,"td"),t(82,"Determines if the select allows for multiple selection. The selection is then an array of option values."),e(),i(83,"td")(84,"div",12),t(85," boolean "),e()(),i(86,"td")(87,"div",13),t(88," false "),e()()(),i(89,"tr")(90,"td"),t(91,"suiFluid"),e(),i(92,"td"),t(93,"Determines if the select is rendered as fluid, taking the full width of its parent."),e(),i(94,"td")(95,"div",12),t(96," boolean "),e()(),i(97,"td")(98,"div",13),t(99," false "),e()()(),i(100,"tr")(101,"td"),t(102,"suiInline"),e(),i(103,"td"),t(104,"Determines if the select is rendered inline."),e(),i(105,"td")(106,"div",12),t(107," boolean "),e()(),i(108,"td")(109,"div",13),t(110," false "),e()()(),i(111,"tr")(112,"td"),t(113,"suiLoading"),e(),i(114,"td"),t(115,"Determines if the select is rendered as loading."),e(),i(116,"td")(117,"div",12),t(118," boolean "),e()(),i(119,"td")(120,"div",13),t(121," false "),e()()(),i(122,"tr")(123,"td"),t(124,"suiError"),e(),i(125,"td"),t(126,"Determines if the select is rendered to depict an error."),e(),i(127,"td")(128,"div",12),t(129," boolean "),e()(),i(130,"td")(131,"div",13),t(132," false "),e()()(),i(133,"tr")(134,"td"),t(135,"disabled"),e(),i(136,"td"),t(137,"Determines if the select is disabled."),e(),i(138,"td")(139,"div",12),t(140," boolean "),e()(),i(141,"td")(142,"div",13),t(143," false "),e()()(),i(144,"tr")(145,"td"),t(146,"suiScrolling"),e(),i(147,"td"),t(148,"Determines if the select\u2019s menu is rendered as scrollable."),e(),i(149,"td")(150,"div",12),t(151," boolean "),e()(),i(152,"td")(153,"div",13),t(154," false "),e()()(),i(155,"tr")(156,"td"),t(157,"suiCompact"),e(),i(158,"td"),t(159,"Determines if the select is rendered as compact, with no minimum width."),e(),i(160,"td")(161,"div",12),t(162," boolean "),e()(),i(163,"td")(164,"div",13),t(165," false "),e()()(),i(166,"tr")(167,"td"),t(168,"name"),e(),i(169,"td"),t(170,"The component\u2019s name."),e(),i(171,"td")(172,"div",12),t(173," string "),e()(),i(174,"td")(175,"div",13),t(176," null "),e()()()()(),i(177,"h4",4),t(178,"Events"),e(),i(179,"table",11)(180,"thead")(181,"tr")(182,"th"),t(183,"Event"),e(),i(184,"th"),t(185,"Description"),e(),i(186,"th"),t(187,"Type"),e()()(),i(188,"tbody")(189,"tr")(190,"td"),t(191,"suiSelectionChanged"),e(),i(192,"td"),t(193,"Fired when the selection changes. Emits the selected option value, or an array of values when "),i(194,"span",9),t(195,"suiMultiple"),e(),t(196," is set."),e(),i(197,"td")(198,"div",12),t(199," any | any[] "),e()()()()(),i(200,"h2",2),t(201,"ISelectOption"),e(),i(202,"p"),t(203,"The shape of each entry in "),i(204,"span",9),t(205,"suiOptions"),e(),t(206,". Import it from "),i(207,"span",9),t(208,"ngx-semantic/modules/select"),e(),t(209,"."),e(),i(210,"h4",4),t(211,"Properties"),e(),i(212,"table",11)(213,"thead")(214,"tr")(215,"th"),t(216,"Property"),e(),i(217,"th"),t(218,"Description"),e(),i(219,"th"),t(220,"Type"),e(),i(221,"th"),t(222,"Default"),e()()(),i(223,"tbody")(224,"tr")(225,"td"),t(226,"text"),e(),i(227,"td"),t(228,"The text displayed for the option. This is also what the search filters on."),e(),i(229,"td")(230,"div",12),t(231," string "),e()(),i(232,"td")(233,"div",13),t(234," - "),e()()(),i(235,"tr")(236,"td"),t(237,"value"),e(),i(238,"td"),t(239,"The value emitted when the option is selected."),e(),i(240,"td")(241,"div",12),t(242," any "),e()(),i(243,"td")(244,"div",13),t(245," - "),e()()(),i(246,"tr")(247,"td"),t(248,"image"),e(),i(249,"td"),t(250,"Shows an image next to the option text. See "),i(251,"span",9),t(252,"ISelectOptionImage"),e(),t(253,"."),e(),i(254,"td")(255,"div",12),t(256," ISelectOptionImage "),e()(),i(257,"td")(258,"div",13),t(259," undefined "),e()()(),i(260,"tr")(261,"td"),t(262,"flag"),e(),i(263,"td"),t(264,"The country code of a flag to show next to the option text, for example "),i(265,"span",9),t(266,"ng"),e(),t(267,"."),e(),i(268,"td")(269,"div",12),t(270," string "),e()(),i(271,"td")(272,"div",13),t(273," undefined "),e()()()()(),i(274,"h2",2),t(275,"ISelectOptionImage"),e(),i(276,"p"),t(277,"The shape of "),i(278,"span",9),t(279,"ISelectOption.image"),e(),t(280,"."),e(),i(281,"h4",4),t(282,"Properties"),e(),i(283,"table",11)(284,"thead")(285,"tr")(286,"th"),t(287,"Property"),e(),i(288,"th"),t(289,"Description"),e(),i(290,"th"),t(291,"Type"),e(),i(292,"th"),t(293,"Default"),e()()(),i(294,"tbody")(295,"tr")(296,"td"),t(297,"src"),e(),i(298,"td"),t(299,"The image source."),e(),i(300,"td")(301,"div",12),t(302," string "),e()(),i(303,"td")(304,"div",13),t(305," - "),e()()(),i(306,"tr")(307,"td"),t(308,"avatar"),e(),i(309,"td"),t(310,"When true, renders the image as a small avatar."),e(),i(311,"td")(312,"div",12),t(313," boolean "),e()(),i(314,"td")(315,"div",13),t(316," - "),e()()()()(),i(317,"h2",2),t(318,"suiSelectMenu"),e(),i(319,"p"),t(320,"Selector: "),i(321,"span",9),t(322,"[suiSelectMenu]"),e(),t(323,". The options menu rendered inside "),i(324,"span",9),t(325,"sui-select"),e(),t(326,". You do not normally use this directly."),e(),i(327,"h4",4),t(328,"Properties"),e(),i(329,"table",11)(330,"thead")(331,"tr")(332,"th"),t(333,"Property"),e(),i(334,"th"),t(335,"Description"),e(),i(336,"th"),t(337,"Type"),e(),i(338,"th"),t(339,"Default"),e()()(),i(340,"tbody")(341,"tr")(342,"td"),t(343,"suiDirection"),e(),i(344,"td"),t(345,"Sets the direction the menu opens. Allowed values are "),i(346,"span",9),t(347,"left"),e(),t(348," | "),i(349,"span",9),t(350,"right"),e(),t(351," | "),i(352,"span",9),t(353,"null"),e()(),i(354,"td")(355,"div",12),t(356," string "),e()(),i(357,"td")(358,"div",13),t(359," null "),e()()(),i(360,"tr")(361,"td"),t(362,"suiScrolling"),e(),i(363,"td"),t(364,"Determines if the menu is scrollable or not."),e(),i(365,"td")(366,"div",12),t(367," boolean "),e()(),i(368,"td")(369,"div",13),t(370," false "),e()()(),i(371,"tr")(372,"td"),t(373,"suiIsOpen"),e(),i(374,"td"),t(375,"Sets whether the menu is open. This is managed by the select."),e(),i(376,"td")(377,"div",12),t(378," boolean "),e()(),i(379,"td")(380,"div",13),t(381," false "),e()()()()(),i(382,"h2",2),t(383,"suiSelectMenuItem"),e(),i(384,"p"),t(385,"Selector: "),i(386,"span",9),t(387,"[suiSelectMenuItem]"),e(),t(388,". An option inside the menu rendered by "),i(389,"span",9),t(390,"sui-select"),e(),t(391,". You do not normally use this directly."),e(),i(392,"h4",4),t(393,"Properties"),e(),i(394,"table",11)(395,"thead")(396,"tr")(397,"th"),t(398,"Property"),e(),i(399,"th"),t(400,"Description"),e(),i(401,"th"),t(402,"Type"),e(),i(403,"th"),t(404,"Default"),e()()(),i(405,"tbody")(406,"tr")(407,"td"),t(408,"suiValue"),e(),i(409,"td"),t(410,"The value to be emitted if this menu item is selected."),e(),i(411,"td")(412,"div",12),t(413," any "),e()(),i(414,"td")(415,"div",13),t(416," null "),e()()(),i(417,"tr")(418,"td"),t(419,"suiSelected"),e(),i(420,"td"),t(421,"Determines if the menu item is shown as selected."),e(),i(422,"td")(423,"div",12),t(424," boolean "),e()(),i(425,"td")(426,"div",13),t(427," false "),e()()(),i(428,"tr")(429,"td"),t(430,"suiMultiple"),e(),i(431,"td"),t(432,"Determines if this menu allows for selecting multiple items."),e(),i(433,"td")(434,"div",12),t(435," boolean "),e()(),i(436,"td")(437,"div",13),t(438," false "),e()()()()()())}var Xs=(()=>{class n{constructor(o){this.snippetStandard=cs,this.snippetFluid=hs,this.snippetSearch=Ss,this.snippetMultiple=xs,this.snippetMultipleSearch=fs,this.snippetFlag=vs,this.snippetImages=gs,this.snippetTwoWay=Es,this.snippetLoading=bs,this.snippetError=ys,this.snippetDisabled=Cs,this.snippetScrolling=ws,this.snippetCompact=Ds,this.snippetStandardTs=_s,this.snippetSearchTs=Ts,this.snippetMultipleTs=Ms,this.snippetFlagsTs=Is,this.snippetImagesTs=Ps,this.snippetTwoWayTs=ks,this.snippetStatesTs=Fs,this.snippetScrollingTs=As,this.snippetCompactTs=Vs,o.setTitle("Select | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-select"]],standalone:!1,decls:3,vars:2,consts:[["header","Select","subHeader","A select is a dropdown used to pick one or more values from a list of options"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["docDemo",""],["sui-message","","suiIcon",""],["sui-icon","","suiIconType","info circle"],["suiMessageContent",""],["sui-label",""],["routerLink","/modules/dropdown"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,$c,122,26,"div",1)(2,Qc,439,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[At,R,O,L,H,A,W,b,g,re,Bt,Bs,Ls,Os,Hs,Rs,Ws,zs,js,Ns,Us,Gs,Ys,Js],encapsulation:2})}}return n})();var qs=`<sui-modal
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
`;var Ks=`isStandardModalVisible = true;
`;var Zs=`<sui-modal
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
`;var $s=`isBasicModalVisible = true;
`;var Qs=`<sui-modal
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
`;var er=`isFullScreenModalVisible = true;
`;var tr=`<sui-modal
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
`;var ir=`isSizeModalVisible = true;
`;var nr=`<sui-modal
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
`;var or=`isScrollingModalVisible = true;
`;var ar=`<sui-modal
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
`;var sr=`isClosableModalVisible = true;
`;var rr=`<sui-modal
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
`;var lr=`isMaskClosableModalVisible = true;
`;var h0=["contentTemplate"],S0=["*"];function x0(n,m){if(n&1){let o=se();i(0,"i",4),f("click",function(){y(o);let s=E(3);return C(s.visible=!1)}),e()}}function f0(n,m){if(n&1&&ie(0,x0,1,0,"i",3),n&2){let o=E(2);ne(o.suiBasic?-1:0)}}function v0(n,m){if(n&1&&r(0,"i",5),n&2){let o=E(3);l("suiIconType",o.suiHeaderIcon)}}function g0(n,m){if(n&1&&(i(0,"div"),ie(1,v0,1,1,"i",5),t(2),e()),n&2){let o=E(2);ue("ui",!!o.suiHeaderIcon)("icon",!!o.suiHeaderIcon)("header",!0),d(),ne(o.suiHeaderIcon?1:-1),d(),_e(" ",o.suiHeaderText," ")}}function E0(n,m){if(n&1&&(i(0,"div",1),ie(1,f0,1,1),ie(2,g0,3,8,"div",2),be(3),e()),n&2){let o=E();l("ngClass",o.classes),d(),ne(o.suiClosable?1:-1),d(),ne(o.suiHeaderText||o.suiHeaderIcon?2:-1)}}var tt=(()=>{class n{get classes(){return"actions"}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=pt({type:n,selectors:[["","suiModalActions",""]],hostVars:2,hostBindings:function(a,s){a&2&&Je(s.classes)},exportAs:["suiModalActions"]})}}return n})(),it=(()=>{class n{constructor(){this.suiImage=!1,this.suiScrollable=!1}get classes(){return[Y.getPropClass(this.suiScrollable,"scrolling"),Y.getPropClass(this.suiImage,"image"),"content"].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=pt({type:n,selectors:[["","suiModalContent",""]],hostVars:2,hostBindings:function(a,s){a&2&&Je(s.classes)},inputs:{suiImage:"suiImage",suiScrollable:"suiScrollable"},exportAs:["suiModalContent"]})}}return M([I()],n.prototype,"suiImage",void 0),M([I()],n.prototype,"suiScrollable",void 0),n})(),dr=(()=>{class n{get classes(){return"description"}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=pt({type:n,selectors:[["","suiModalDescription",""]],hostVars:2,hostBindings:function(a,s){a&2&&Je(s.classes)},exportAs:["suiModalDescription"]})}}return n})(),We=(()=>{class n{get visible(){return this._visible}set visible(o){o?this.showModal():this.hideModal(),this._visible=o,this.visibleChange.emit(o)}get classes(){return["ui",this.suiSize,Y.getPropClass(this.suiBasic,"basic"),Y.getPropClass(this.suiFullScreen,"fullscreen"),this.scrollClass,"modal","transition","visible","active"].join(" ")}get scrollClass(){return this.suiScroll==="full"?"long":this.suiScroll==="medium"?"longer":""}constructor(){this.document=Z(Mt),this.renderer=Z(kt),this.viewRef=Z(oi),this.suiHeaderText=null,this.suiHeaderIcon=null,this.suiSize=null,this.suiScroll="none",this.suiBasic=!1,this.suiClosable=!0,this.suiCentered=!0,this.suiBlurring=!1,this.suiFullScreen=!1,this.suiMaskClosable=!0,this.visibleChange=new $,this._visible=!1,this._modalDomRef=null,this.clickListener=null,this.uniqueId=Math.ceil(Math.random()*1e8)}ngOnDestroy(){let o=this.getModalFromDom();o&&(this.renderer.removeChild(this.document.body,o),this.suiBlurring&&this.renderer.removeClass(this.document.body,"dimmable"))}showModal(){this.isModalInDom()||this.generateDomElement(),this._modalDomRef&&(this.renderer.setProperty(this._modalDomRef,"style","display: flex !important;"),this.renderer.addClass(this._modalDomRef,"visible"),this.renderer.addClass(this._modalDomRef,"active"),this.suiBlurring&&(this.renderer.addClass(this.document.body,"dimmable"),this.renderer.addClass(this.document.body,"blurring"),this.renderer.addClass(this.document.body,"dimmed")))}hideModal(){this._modalDomRef&&(this.renderer.removeAttribute(this._modalDomRef,"style"),this.renderer.removeClass(this._modalDomRef,"visible"),this.renderer.removeClass(this._modalDomRef,"active"),this.suiBlurring&&(this.renderer.removeClass(this.document.body,"blurring"),this.renderer.removeClass(this.document.body,"dimmed")))}generateDomElement(){let o=this.renderer.createElement("div");this.renderer.setAttribute(o,"id",this.uniqueId.toString());let a="ui dimmer modals page"+(this.suiCentered?"":" top aligned")+" transition";this.renderer.setAttribute(o,"class",a);let s=this.viewRef.createEmbeddedView(this.contentTemplate);s.detectChanges();for(let c of s.rootNodes)this.renderer.appendChild(o,c);this._modalDomRef=o,this.clickListener=this.renderer.listen(this._modalDomRef,"click",c=>{c.target.id===this.uniqueId.toString()&&this.onClick()}),this.renderer.appendChild(this.document.body,this._modalDomRef)}isModalInDom(){return!!this.getModalFromDom()}getModalFromDom(){return this.document.getElementById(String(this.uniqueId))}onClick(){this.suiMaskClosable&&(this.visible=!1)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-modal"]],viewQuery:function(a,s){if(a&1&&ct(h0,7),a&2){let c;we(c=De())&&(s.contentTemplate=c.first)}},inputs:{suiHeaderText:"suiHeaderText",suiHeaderIcon:"suiHeaderIcon",suiSize:"suiSize",suiScroll:"suiScroll",suiBasic:"suiBasic",suiClosable:"suiClosable",suiCentered:"suiCentered",suiBlurring:"suiBlurring",suiFullScreen:"suiFullScreen",suiMaskClosable:"suiMaskClosable",visible:"visible"},outputs:{visibleChange:"visibleChange"},ngContentSelectors:S0,decls:2,vars:0,consts:[["contentTemplate",""],[2,"display","block !important",3,"ngClass"],[3,"ui","icon","header"],["sui-icon","","suiIconType","close"],["sui-icon","","suiIconType","close",3,"click"],["sui-icon","",3,"suiIconType"]],template:function(a,s){a&1&&(Ee(),h(0,E0,4,3,"ng-template",null,0,Be))},dependencies:[J,qe,g],encapsulation:2,changeDetection:0})}}return M([I()],n.prototype,"suiBasic",void 0),M([I()],n.prototype,"suiClosable",void 0),M([I()],n.prototype,"suiCentered",void 0),M([I()],n.prototype,"suiBlurring",void 0),M([I()],n.prototype,"suiFullScreen",void 0),M([I()],n.prototype,"suiMaskClosable",void 0),n})(),mr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[J,We]})}}return n})();function y0(n,m){n&1&&r(0,"div",9)(1,"img",6)}var ze=class{constructor(){this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((m,o)=>o)}},ur=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-standard-example"]],standalone:!1,features:[x],decls:20,vars:1,consts:[["suiHeaderText","Select a Photo",3,"visibleChange","visible"],["sui-image","","suiModalContent",""],["sui-image","","suiSize","medium"],["src","https://semantic-ui.com/images/avatar2/large/rachel.png"],["suiCardDescription",""],["sui-header",""],["href","https://www.gravatar.com","target","_blank"],["suiModalActions",""],["sui-button","","suiEmphasis","secondary","suiColour","black"],["sui-button","","suiEmphasis","positive","suiIcon","","suiLabeled","right labeled"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return D(s.isStandardModalVisible,p)||(s.isStandardModalVisible=p),p}),i(1,"div",1)(2,"div",2),r(3,"img",3),e(),i(4,"div",4)(5,"div",5),t(6,"We've auto-chosen a profile image for you."),e(),i(7,"p"),t(8,"We've grabbed the following image from the "),i(9,"a",6),t(10,"gravatar"),e(),t(11," image associated with your registered e-mail address."),e(),i(12,"p"),t(13,"Is it okay to use this photo?"),e()()(),i(14,"div",7)(15,"div",8),t(16," Nope "),e(),i(17,"div",9),t(18," Yep, that's me "),r(19,"i",10),e()()()),a&2&&w("visible",s.isStandardModalVisible)},dependencies:[Lt,b,T,g,Te,We,tt,it],encapsulation:2})}}return n})(),cr=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-basic-example"]],standalone:!1,features:[x],decls:11,vars:1,consts:[["suiBasic","","suiHeaderIcon","archive","suiHeaderText","Archive Old Messages",3,"visibleChange","visible"],["sui-image","","suiModalContent",""],["suiModalActions",""],["sui-button","","suiBasic","","suiInverted","","suiColour","red"],["sui-icon","","suiIconType","remove"],["sui-button","","suiInverted","","suiColour","green",3,"click"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return D(s.isBasicModalVisible,p)||(s.isBasicModalVisible=p),p}),i(1,"div",1)(2,"p"),t(3,"Your inbox is getting full, would you like us to enable automatic archiving of old messages?"),e()(),i(4,"div",2)(5,"div",3),r(6,"i",4),t(7," No "),e(),i(8,"div",5),f("click",function(){return s.isStandardModalVisible=!1}),r(9,"i",6),t(10," Yes "),e()()()),a&2&&w("visible",s.isBasicModalVisible)},dependencies:[T,g,Te,We,tt,it],encapsulation:2})}}return n})(),hr=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-full-screen-example"]],standalone:!1,features:[x],decls:17,vars:2,consts:[["suiFullScreen","","suiHeaderText","Update Your Settings",3,"visibleChange","visible"],["suiModalContent",""],["sui-form",""],["sui-header","","suiDividing",""],["suiFormField",""],[3,"checked"],["suiModalActions",""],["sui-button",""],["sui-button","","suiEmphasis","positive"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return D(s.isFullScreenModalVisible,p)||(s.isFullScreenModalVisible=p),p}),i(1,"div",1)(2,"div",2)(3,"h4",3),t(4,"Give us your feedback"),e(),i(5,"div",4)(6,"label"),t(7,"Feedback"),e(),r(8,"textarea"),e(),i(9,"div",4)(10,"sui-checkbox",5),t(11,"It's okay to contact me."),e()()()(),i(12,"div",6)(13,"div",7),t(14," Cancel "),e(),i(15,"div",8),t(16," Send "),e()()()),a&2&&(w("visible",s.isFullScreenModalVisible),d(10),l("checked",!0))},dependencies:[St,xt,b,T,We,tt,it,de],encapsulation:2})}}return n})(),Sr=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-size-example"]],standalone:!1,features:[x],decls:10,vars:1,consts:[["suiSize","mini","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return D(s.isSizeModalVisible,p)||(s.isSizeModalVisible=p),p}),i(1,"div",1)(2,"p"),t(3,"Are you sure you want to delete your account"),e()(),i(4,"div",2)(5,"div",3),t(6," No "),e(),i(7,"div",4),t(8," Yes "),r(9,"i",5),e()()()),a&2&&w("visible",s.isSizeModalVisible)},dependencies:[T,g,We,tt,it],encapsulation:2})}}return n})(),xr=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-scrolling-example"]],standalone:!1,features:[x],decls:15,vars:1,consts:[["suiHeaderText","Profile Picture",3,"visibleChange","visible"],["suiModalContent","","suiScrollable","","suiImage",""],["sui-image","","suiSize","medium"],["src","/assets/images/wireframes/image.png"],["suiModalDescription",""],["sui-header",""],["sui-image","","src","/assets/images/wireframes/paragraph.png"],["suiModalActions",""],["sui-button","","suiEmphasis","secondary",1,"black","deny",3,"click"],["sui-divider",""]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return D(s.isScrollingModalVisible,p)||(s.isScrollingModalVisible=p),p}),i(1,"div",1)(2,"div",2),r(3,"img",3),e(),i(4,"div",4)(5,"div",5),t(6,"Modal Header"),e(),i(7,"p"),t(8,"This is an example of expanded content that will cause the modal's dimmer to scroll"),e(),r(9,"img",6),Ge(10,y0,2,0,null,null,Ue),e()(),i(12,"div",7)(13,"div",8),f("click",function(){return s.isScrollingModalVisible=!1}),t(14," Close "),e()()()),a&2&&(w("visible",s.isScrollingModalVisible),d(10),Ye(s.dummyList))},dependencies:[b,T,ye,Te,We,tt,it,dr],encapsulation:2})}}return n})(),fr=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-closable-example"]],standalone:!1,features:[x],decls:10,vars:1,consts:[["suiClosable","false","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return D(s.isClosableModalVisible,p)||(s.isClosableModalVisible=p),p}),i(1,"div",1)(2,"p"),t(3,"Are you sure you want to delete your account"),e()(),i(4,"div",2)(5,"div",3),t(6," No "),e(),i(7,"div",4),t(8," Yes "),r(9,"i",5),e()()()),a&2&&w("visible",s.isClosableModalVisible)},dependencies:[T,g,We,tt,it],encapsulation:2})}}return n})(),vr=(()=>{class n extends ze{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal-mask-closable-example"]],standalone:!1,features:[x],decls:10,vars:1,consts:[["suiMaskClosable","false","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),_("visibleChange",function(p){return D(s.isMaskClosableModalVisible,p)||(s.isMaskClosableModalVisible=p),p}),i(1,"div",1)(2,"p"),t(3,"Are you sure you want to delete your account"),e()(),i(4,"div",2)(5,"div",3),t(6," No "),e(),i(7,"div",4),t(8," Yes "),r(9,"i",5),e()()()),a&2&&w("visible",s.isMaskClosableModalVisible)},dependencies:[T,g,We,tt,it],encapsulation:2})}}return n})();function w0(n,m){n&1&&r(0,"doc-modal-standard-example")}function D0(n,m){n&1&&r(0,"doc-modal-basic-example")}function _0(n,m){n&1&&r(0,"doc-modal-full-screen-example")}function T0(n,m){n&1&&r(0,"doc-modal-size-example")}function M0(n,m){n&1&&r(0,"doc-modal-scrolling-example")}function I0(n,m){n&1&&r(0,"doc-modal-closable-example")}function P0(n,m){n&1&&r(0,"doc-modal-mask-closable-example")}function k0(n,m){if(n&1){let o=se();i(0,"div")(1,"h2",2),t(2,"States"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Modal"),e(),i(6,"p"),t(7,"A standard modal"),e(),i(8,"button",5),f("click",function(){y(o);let s=E();return C(s.isStandardModalVisible=!0)}),t(9,"Show Modal"),e(),h(10,w0,1,0,"ng-template",6),e(),i(11,"doc-code-sample",3)(12,"h3",4),t(13,"Basic"),e(),i(14,"p"),t(15,"A modal can reduce its complexity"),e(),i(16,"button",5),f("click",function(){y(o);let s=E();return C(s.isBasicModalVisible=!0)}),t(17,"Show Modal"),e(),h(18,D0,1,0,"ng-template",6),e(),i(19,"h2",2),t(20,"Variations"),e(),i(21,"doc-code-sample",3)(22,"h3",4),t(23,"Full Screen"),e(),i(24,"p"),t(25,"A modal can use the entire size of the screen"),e(),i(26,"button",5),f("click",function(){y(o);let s=E();return C(s.isFullScreenModalVisible=!0)}),t(27,"Show Modal"),e(),h(28,_0,1,0,"ng-template",6),e(),i(29,"doc-code-sample",3)(30,"h3",4),t(31,"Size"),e(),i(32,"p"),t(33,"A modal can vary in size"),e(),i(34,"button",5),f("click",function(){y(o);let s=E();return C(s.isSizeModalVisible=!0)}),t(35,"Show Modal"),e(),h(36,T0,1,0,"ng-template",6),e(),i(37,"doc-code-sample",3)(38,"h3",4),t(39,"Scrolling Content"),e(),i(40,"p"),t(41,"A modal can use the entire size of the screen."),e(),i(42,"button",5),f("click",function(){y(o);let s=E();return C(s.isScrollingModalVisible=!0)}),t(43,"Show Modal"),e(),h(44,M0,1,0,"ng-template",6),e(),i(45,"doc-code-sample",3)(46,"h3",4),t(47,"Closable"),e(),i(48,"p"),t(49,"By default, a modal is rendered with a close icon in the top right corner. The modal can be rendered without the close button"),e(),i(50,"button",5),f("click",function(){y(o);let s=E();return C(s.isClosableModalVisible=!0)}),t(51,"Show Modal"),e(),h(52,I0,1,0,"ng-template",6),e(),i(53,"doc-code-sample",3)(54,"h3",4),t(55,"Mask Closable"),e(),i(56,"p"),t(57,"By default, a modal can be closed by clicking on the background. If that isn't the desired behaviour, that is configurable"),e(),i(58,"button",5),f("click",function(){y(o);let s=E();return C(s.isMaskClosableModalVisible=!0)}),t(59,"Show Modal"),e(),h(60,P0,1,0,"ng-template",6),e()()}if(n&2){let o=E();d(3),l("templateCode",o.snippetStandard)("componentCode",o.snippetStandardTs),d(8),l("templateCode",o.snippetBasic)("componentCode",o.snippetBasicTs),d(10),l("templateCode",o.snippetFullScreen)("componentCode",o.snippetFullScreenTs),d(8),l("templateCode",o.snippetSize)("componentCode",o.snippetSizeTs),d(8),l("templateCode",o.snippetScrolling)("componentCode",o.snippetScrollingTs),d(8),l("templateCode",o.snippetClosable)("componentCode",o.snippetClosableTs),d(8),l("templateCode",o.snippetMaskClosable)("componentCode",o.snippetMaskClosableTs)}}function F0(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-modal"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19,"suiHeaderText"),e(),i(20,"td"),t(21,"The modal header"),e(),i(22,"td")(23,"div",8),t(24," string "),e()(),i(25,"td")(26,"div",9),t(27," null "),e()()(),i(28,"tr")(29,"td"),t(30,"suiHeaderIcon"),e(),i(31,"td"),t(32,"The modal header icon type"),e(),i(33,"td")(34,"div",8),t(35," string "),e()(),i(36,"td")(37,"div",9),t(38," null "),e()()(),i(39,"tr")(40,"td"),t(41,"suiSize"),e(),i(42,"td"),t(43," Set the modal's size. Allowed values could be "),i(44,"span",10),t(45,"mini"),e(),t(46," | "),i(47,"span",10),t(48,"tiny"),e(),t(49," | "),i(50,"span",10),t(51,"small"),e(),t(52," | "),i(53,"span",10),t(54,"large"),e(),t(55," | "),i(56,"span",10),t(57,"null"),e()(),i(58,"td")(59,"div",8),t(60," string "),e()(),i(61,"td")(62,"div",9),t(63," null "),e()()(),i(64,"tr")(65,"td"),t(66,"suiScroll"),e(),i(67,"td"),t(68," Determines if the modal is scrollable. Allowed values could be "),i(69,"span",10),t(70,"full"),e(),t(71," | "),i(72,"span",10),t(73,"medium"),e(),t(74," | "),i(75,"span",10),t(76,"none"),e()(),i(77,"td")(78,"div",8),t(79," string "),e()(),i(80,"td")(81,"div",9),t(82," none "),e()()(),i(83,"tr")(84,"td"),t(85,"suiBasic"),e(),i(86,"td"),t(87,"Determines if the modal is rendered as basic"),e(),i(88,"td")(89,"div",8),t(90," boolean "),e()(),i(91,"td")(92,"div",9),t(93," false "),e()()(),i(94,"tr")(95,"td"),t(96,"suiClosable"),e(),i(97,"td"),t(98,"Determines if the close icon is rendered on the modal"),e(),i(99,"td")(100,"div",8),t(101," boolean "),e()(),i(102,"td")(103,"div",9),t(104," true "),e()()(),i(105,"tr")(106,"td"),t(107,"suiCentered"),e(),i(108,"td"),t(109,"Determines if the modal is rendered vertically centered"),e(),i(110,"td")(111,"div",8),t(112," boolean "),e()(),i(113,"td")(114,"div",9),t(115," true "),e()()(),i(116,"tr")(117,"td"),t(118,"suiBlurring"),e(),i(119,"td"),t(120,"Determines if the modal uses a dimmer background"),e(),i(121,"td")(122,"div",8),t(123," boolean "),e()(),i(124,"td")(125,"div",9),t(126," false "),e()()(),i(127,"tr")(128,"td"),t(129,"suiFullScreen"),e(),i(130,"td"),t(131,"Determines if the modal is rendered to fill the screen horizontally"),e(),i(132,"td")(133,"div",8),t(134," boolean "),e()(),i(135,"td")(136,"div",9),t(137," false "),e()()(),i(138,"tr")(139,"td"),t(140,"suiMaskClosable"),e(),i(141,"td"),t(142,"Determines if the modal is dismissable by clicking on the background"),e(),i(143,"td")(144,"div",8),t(145," boolean "),e()(),i(146,"td")(147,"div",9),t(148," true "),e()()(),i(149,"tr")(150,"td"),t(151,"visible"),e(),i(152,"td"),t(153,"Determines if the modal is visible or not"),e(),i(154,"td")(155,"div",8),t(156," boolean "),e()(),i(157,"td")(158,"div",9),t(159," false "),e()()()()(),i(160,"h4",4),t(161,"Events"),e(),i(162,"table",7)(163,"thead")(164,"tr")(165,"th"),t(166,"Property"),e(),i(167,"th"),t(168,"Description"),e(),i(169,"th"),t(170,"Type"),e()()(),i(171,"tbody")(172,"tr")(173,"td"),t(174,"visibleChange"),e(),i(175,"td"),t(176,"Fired when a the modal's visibility changes "),e(),i(177,"td")(178,"div",8),t(179," boolean "),e()()()()(),i(180,"h2",2),t(181,"suiModalContent"),e(),i(182,"h4",4),t(183,"Properties"),e(),i(184,"table",7)(185,"thead")(186,"tr")(187,"th"),t(188,"Property"),e(),i(189,"th"),t(190,"Description"),e(),i(191,"th"),t(192,"Type"),e(),i(193,"th"),t(194,"Default"),e()()(),i(195,"tbody")(196,"tr")(197,"td"),t(198,"suiImage"),e(),i(199,"td"),t(200,"Determines if the content can contain an image "),e(),i(201,"td")(202,"div",8),t(203," boolean "),e()(),i(204,"td")(205,"div",9),t(206," false "),e()()(),i(207,"tr")(208,"td"),t(209,"suiScrollable"),e(),i(210,"td"),t(211,"Determines if the content is scrollable or not "),e(),i(212,"td")(213,"div",8),t(214," boolean "),e()(),i(215,"td")(216,"div",9),t(217," false "),e()()()()(),i(218,"h2",2),t(219,"suiModalActions"),e(),i(220,"h4",4),t(221,"Properties"),e(),i(222,"table",7)(223,"thead")(224,"tr")(225,"th"),t(226,"Property"),e(),i(227,"th"),t(228,"Description"),e(),i(229,"th"),t(230,"Type"),e(),i(231,"th"),t(232,"Default"),e()()(),r(233,"tbody"),i(234,"tfoot",11)(235,"tr")(236,"th",12)(237,"div",13),t(238,"No properties for this directive"),e()()()()(),i(239,"h2",2),t(240,"suiModalDescription"),e(),i(241,"h4",4),t(242,"Properties"),e(),i(243,"table",7)(244,"thead")(245,"tr")(246,"th"),t(247,"Property"),e(),i(248,"th"),t(249,"Description"),e(),i(250,"th"),t(251,"Type"),e(),i(252,"th"),t(253,"Default"),e()()(),r(254,"tbody"),i(255,"tfoot",11)(256,"tr")(257,"th",12)(258,"div",13),t(259,"No properties for this directive"),e()()()()()())}var gr=(()=>{class n{constructor(o){this.snippetStandard=qs,this.snippetStandardTs=Ks,this.snippetBasic=Zs,this.snippetBasicTs=$s,this.snippetFullScreen=Qs,this.snippetFullScreenTs=er,this.snippetSize=tr,this.snippetSizeTs=ir,this.snippetScrolling=nr,this.snippetScrollingTs=or,this.snippetClosable=ar,this.snippetClosableTs=sr,this.snippetMaskClosable=rr,this.snippetMaskClosableTs=lr,this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((a,s)=>s),o.setTitle("Modal | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-modal"]],standalone:!1,decls:3,vars:2,consts:[["header","Modal","subHeader","Modals display content that temporarily blocks interactions with the main view of a site."],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-button","",3,"click"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,k0,61,14,"div",1)(2,F0,260,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,T,ur,cr,hr,Sr,xr,fr,vr],encapsulation:2})}}return n})();var Er=`<sui-dropdown>
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
`;var br=`<span>
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
`;var yr=`<sui-dropdown suiPointing
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
`;var Cr=`<sui-dropdown suiFloating
              class="labeled icon button">
  <i sui-icon suiIconType="filter"></i>
  <span class="text">Filter Posts</span>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Edit Post</div>
    <div suiDropdownMenuItem>Remove Post</div>
    <div suiDropdownMenuItem>Hide Post</div>
  </div>
</sui-dropdown>
`;var wr=`<sui-dropdown suiSimple>
  Dropdown
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var Dr=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var _r=`<sui-dropdown>
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
`;var Tr=`<sui-dropdown>
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
`;var Mr=`<sui-dropdown>
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
`;var Ir=`<sui-dropdown>
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
`;var Pr=`<sui-dropdown>
  <span class="text">Login</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div sui-message suiState="error">
      <div suiMessageHeader>Error</div>
      <p>You must log-in to see all categories</p>
    </div>
  </div>
</sui-dropdown>
`;var kr=`<sui-dropdown suiFluid
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
`;var Fr=`<sui-dropdown>
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
`;var Ar=`<sui-dropdown>
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
`;var Vr=`<sui-dropdown suiLoading>
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var Br=`<sui-dropdown suiError
              class="selection">
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var Lr=`<sui-dropdown disabled>
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
`;var Or=`<sui-dropdown>
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
`;var Hr=`<sui-dropdown suiCompact
              class="selection">
  <span class="text">Compact</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>A</div>
    <div suiDropdownMenuItem>B</div>
    <div suiDropdownMenuItem>C</div>
  </div>
</sui-dropdown>
`;var Rr=`<sui-dropdown suiFluid
              class="selection">
  <span class="text">All Sections</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var Wr=`<sui-dropdown>
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
`;var zr=`<sui-dropdown>
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
`;var jr=`<div sui-buttons suiColour="teal">
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
`;var Nr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-dropdown-example"]],standalone:!1,decls:48,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],[1,"description"],["sui-icon","","suiIconType","folder"],["sui-icon","","suiIconType","trash"],["suiDropdownMenuDivider",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"div",0),t(2,"File"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),t(6,"New"),e(),i(7,"div",3)(8,"span",4),t(9,"ctrl + o"),e(),t(10," Open... "),e(),i(11,"div",3)(12,"span",4),t(13,"ctrl + s"),e(),t(14," Save as... "),e(),i(15,"div",3)(16,"span",4),t(17,"ctrl + r"),e(),t(18," Rename "),e(),i(19,"div",3),t(20,"Make a copy"),e(),i(21,"div",3),r(22,"i",5),t(23," Move to folder "),e(),i(24,"div",3),r(25,"i",6),t(26," Move to trash "),e(),r(27,"div",7),i(28,"div",3),t(29,"Download As..."),e(),i(30,"div",3),r(31,"i",1),t(32," Publish To Web "),i(33,"div",2)(34,"div",3),t(35,"Google Docs"),e(),i(36,"div",3),t(37,"Google Drive"),e(),i(38,"div",3),t(39,"Dropbox"),e(),i(40,"div",3),t(41,"Adobe Creative Cloud"),e(),i(42,"div",3),t(43,"Private FTP"),e(),i(44,"div",3),t(45,"Another Service..."),e()()(),i(46,"div",3),t(47,"E-mail Collaborators"),e()()())},dependencies:[j,z,U,wt,g],encapsulation:2})}}return n})(),Ur=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-inline-example"]],standalone:!1,decls:23,vars:0,consts:[["suiInline",""],[1,"text"],["sui-image","","suiAvatar","","src","/assets/images/jenny.jpg","alt","Jenny Hess"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["sui-image","","suiAvatar","","src","/assets/images/elliot.jpg","alt","Elliot Fu"],["sui-image","","suiAvatar","","src","/assets/images/stevie.jpg","alt","Stevie Feliciano"],["sui-image","","suiAvatar","","src","/assets/images/matt.jpg","alt","Matt"],["sui-image","","suiAvatar","","src","/assets/images/justen.jpg","alt","Justen Kitsune"]],template:function(a,s){a&1&&(i(0,"span"),t(1," Show me posts by "),i(2,"sui-dropdown",0)(3,"div",1),r(4,"img",2),t(5," Jenny Hess "),e(),r(6,"i",3),i(7,"div",4)(8,"div",5),r(9,"img",2),t(10," Jenny Hess "),e(),i(11,"div",5),r(12,"img",6),t(13," Elliot Fu "),e(),i(14,"div",5),r(15,"img",7),t(16," Stevie Feliciano "),e(),i(17,"div",5),r(18,"img",8),t(19," Matt "),e(),i(20,"div",5),r(21,"img",9),t(22," Justen Kitsune "),e()()()())},dependencies:[j,z,U,g,Te],encapsulation:2})}}return n})(),Gr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-pointing-example"]],standalone:!1,decls:55,vars:0,consts:[["suiPointing","",1,"link","item"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiPointing","","suiPointingDirection","top left",1,"button"],["suiPointing","","suiPointingDirection","top right",1,"button"],["suiPointing","","suiPointingDirection","left",1,"button"],["suiPointing","","suiPointingDirection","right",1,"button"]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),t(2,"Home"),e(),r(3,"i",2),i(4,"div",3)(5,"div",4),t(6,"Shopping"),e(),i(7,"div",4),t(8,"Categories"),e(),i(9,"div",4),t(10,"Order"),e()()(),i(11,"sui-dropdown",5)(12,"span",1),t(13,"Top Left"),e(),r(14,"i",2),i(15,"div",3)(16,"div",4),t(17,"New"),e(),i(18,"div",4),t(19,"Open..."),e(),i(20,"div",4),t(21,"Save as..."),e()()(),i(22,"sui-dropdown",6)(23,"span",1),t(24,"Top Right"),e(),r(25,"i",2),i(26,"div",3)(27,"div",4),t(28,"New"),e(),i(29,"div",4),t(30,"Open..."),e(),i(31,"div",4),t(32,"Save as..."),e()()(),i(33,"sui-dropdown",7)(34,"span",1),t(35,"Left"),e(),r(36,"i",2),i(37,"div",3)(38,"div",4),t(39,"New"),e(),i(40,"div",4),t(41,"Open..."),e(),i(42,"div",4),t(43,"Save as..."),e()()(),i(44,"sui-dropdown",8)(45,"span",1),t(46,"Right"),e(),r(47,"i",2),i(48,"div",3)(49,"div",4),t(50,"New"),e(),i(51,"div",4),t(52,"Open..."),e(),i(53,"div",4),t(54,"Save as..."),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),Yr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-floating-example"]],standalone:!1,decls:11,vars:0,consts:[["suiFloating","",1,"labeled","icon","button"],["sui-icon","","suiIconType","filter"],[1,"text"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0),r(1,"i",1),i(2,"span",2),t(3,"Filter Posts"),e(),i(4,"div",3)(5,"div",4),t(6,"Edit Post"),e(),i(7,"div",4),t(8,"Remove Post"),e(),i(9,"div",4),t(10,"Hide Post"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),Jr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-simple-example"]],standalone:!1,decls:10,vars:0,consts:[["suiSimple",""],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0),t(1," Dropdown "),r(2,"i",1),i(3,"div",2)(4,"div",3),t(5,"Choice 1"),e(),i(6,"div",3),t(7,"Choice 2"),e(),i(8,"div",3),t(9,"Choice 3"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),Xr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-header-example"]],standalone:!1,decls:13,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Filter"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),t(6,"Filter by tag"),e(),i(7,"div",4),t(8,"Important"),e(),i(9,"div",4),t(10,"Announcement"),e(),i(11,"div",4),t(12,"Discussion"),e()()())},dependencies:[j,z,U,ot,g],encapsulation:2})}}return n})(),qr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-divider-example"]],standalone:!1,decls:13,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuDivider",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Filter"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),t(6,"Important"),e(),r(7,"div",4),i(8,"div",3),t(9,"Announcement"),e(),r(10,"div",4),i(11,"div",3),t(12,"Discussion"),e()()())},dependencies:[j,z,U,wt,g],encapsulation:2})}}return n})(),Kr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-icon-example"]],standalone:!1,decls:14,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["sui-icon","","suiIconType","tags"],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Filter"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",4),t(7," Filter by tag "),e(),i(8,"div",5),t(9,"Important"),e(),i(10,"div",5),t(11,"Announcement"),e(),i(12,"div",5),t(13,"Discussion"),e()()())},dependencies:[j,z,U,ot,g],encapsulation:2})}}return n})(),Zr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-description-example"]],standalone:!1,decls:19,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu","",2,"min-width","15rem"],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],[1,"description"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Filter Tags"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),t(6,"Filter by tag"),e(),i(7,"div",4)(8,"span",5),t(9,"2 new"),e(),t(10," Important "),e(),i(11,"div",4)(12,"span",5),t(13,"10 new"),e(),t(14," Hopper "),e(),i(15,"div",4)(16,"span",5),t(17,"5 new"),e(),t(18," Discussion "),e()()())},dependencies:[j,z,U,ot,g],encapsulation:2})}}return n})(),$r=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-label-example"]],standalone:!1,decls:16,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],["sui-label","","suiColour","red","suiEmpty","","suiCircular",""],["sui-label","","suiColour","blue","suiEmpty","","suiCircular",""],["sui-label","","suiColour","black","suiEmpty","","suiCircular",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Filter"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),t(6,"Filter by tag"),e(),i(7,"div",4),r(8,"div",5),t(9," Important "),e(),i(10,"div",4),r(11,"div",6),t(12," Announcement "),e(),i(13,"div",4),r(14,"div",7),t(15," Discussion "),e()()())},dependencies:[A,j,z,U,ot,g],encapsulation:2})}}return n})(),Qr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-message-example"]],standalone:!1,decls:10,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["sui-message","","suiState","error"],["suiMessageHeader",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Login"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3)(6,"div",4),t(7,"Error"),e(),i(8,"p"),t(9,"You must log-in to see all categories"),e()()()())},dependencies:[j,z,g,re,Li],encapsulation:2})}}return n})(),el=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-floated-example"]],standalone:!1,decls:17,vars:0,consts:[["suiFluid","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],[1,"right","floated"],["sui-icon","","suiIconType","exclamation"],["sui-icon","","suiIconType","bullhorn"],["sui-icon","","suiIconType","comments"]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),t(2,"Select Type"),e(),r(3,"i",2),i(4,"div",3)(5,"div",4)(6,"span",5),r(7,"i",6),e(),t(8," Important "),e(),i(9,"div",4)(10,"span",5),r(11,"i",7),e(),t(12," Announcement "),e(),i(13,"div",4)(14,"span",5),r(15,"i",8),e(),t(16," Discussion "),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),tl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-input-example"]],standalone:!1,decls:17,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],[1,"ui","icon","search","input",3,"click"],["sui-icon","","suiIconType","search"],["type","text","placeholder","Search issues..."],["suiDropdownMenuDivider",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Filter"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),f("click",function(p){return p.stopPropagation()}),r(6,"i",4)(7,"input",5),e(),r(8,"div",6),i(9,"div",7),t(10,"Filter by tag"),e(),i(11,"div",8),t(12,"Important"),e(),i(13,"div",8),t(14,"Announcement"),e(),i(15,"div",8),t(16,"Discussion"),e()()())},dependencies:[j,z,U,ot,wt,g],encapsulation:2})}}return n})(),il=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-image-example"]],standalone:!1,decls:25,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],["sui-image","","suiAvatar","","src","/assets/images/jenny.jpg","alt","Jenny Hess"],["sui-image","","suiAvatar","","src","/assets/images/elliot.jpg","alt","Elliot Fu"],["sui-image","","suiAvatar","","src","/assets/images/stevie.jpg","alt","Stevie Feliciano"],["suiDropdownMenuDivider",""],["sui-image","","suiAvatar","","src","/assets/images/matt.jpg","alt","Matt"],["sui-image","","suiAvatar","","src","/assets/images/justen.jpg","alt","Justen Kitsune"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Add User"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),t(6,"People You Might Know"),e(),i(7,"div",4),r(8,"img",5),t(9," Jenny Hess "),e(),i(10,"div",4),r(11,"img",6),t(12," Elliot Fu "),e(),i(13,"div",4),r(14,"img",7),t(15," Stevie Feliciano "),e(),r(16,"div",8),i(17,"div",3),t(18,"Your Friends' Friends"),e(),i(19,"div",4),r(20,"img",9),t(21," Matt "),e(),i(22,"div",4),r(23,"img",10),t(24," Justen Kitsune "),e()()())},dependencies:[j,z,U,ot,wt,g,Te],encapsulation:2})}}return n})(),nl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-loading-example"]],standalone:!1,decls:11,vars:0,consts:[["suiLoading",""],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),t(2,"Dropdown"),e(),r(3,"i",2),i(4,"div",3)(5,"div",4),t(6,"Choice 1"),e(),i(7,"div",4),t(8,"Choice 2"),e(),i(9,"div",4),t(10,"Choice 3"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),ol=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-error-example"]],standalone:!1,decls:11,vars:0,consts:[["suiError","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),t(2,"Dropdown"),e(),r(3,"i",2),i(4,"div",3)(5,"div",4),t(6,"Choice 1"),e(),i(7,"div",4),t(8,"Choice 2"),e(),i(9,"div",4),t(10,"Choice 3"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),al=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-disabled-example"]],standalone:!1,decls:22,vars:0,consts:[["disabled",""],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuItem","","disabled",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),t(2,"Disabled Dropdown"),e(),r(3,"i",2),i(4,"div",3)(5,"div",4),t(6,"Choice 1"),e(),i(7,"div",4),t(8,"Choice 2"),e(),i(9,"div",4),t(10,"Choice 3"),e()()(),i(11,"sui-dropdown")(12,"span",1),t(13,"Disabled Item"),e(),r(14,"i",2),i(15,"div",3)(16,"div",4),t(17,"Choice 1"),e(),i(18,"div",5),t(19,"Disabled"),e(),i(20,"div",4),t(21,"Choice 3"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),sl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-scrolling-example"]],standalone:!1,decls:35,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu","","suiScrolling",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Select choice"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),t(6,"Choice 1"),e(),i(7,"div",3),t(8,"Choice 2"),e(),i(9,"div",3),t(10,"Choice 3"),e(),i(11,"div",3),t(12,"Choice 4"),e(),i(13,"div",3),t(14,"Choice 5"),e(),i(15,"div",3),t(16,"Choice 6"),e(),i(17,"div",3),t(18,"Choice 7"),e(),i(19,"div",3),t(20,"Choice 8"),e(),i(21,"div",3),t(22,"Choice 9"),e(),i(23,"div",3),t(24,"Choice 10"),e(),i(25,"div",3),t(26,"Choice 11"),e(),i(27,"div",3),t(28,"Choice 12"),e(),i(29,"div",3),t(30,"Choice 13"),e(),i(31,"div",3),t(32,"Choice 14"),e(),i(33,"div",3),t(34,"Choice 15"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),rl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-compact-example"]],standalone:!1,decls:11,vars:0,consts:[["suiCompact","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),t(2,"Compact"),e(),r(3,"i",2),i(4,"div",3)(5,"div",4),t(6,"A"),e(),i(7,"div",4),t(8,"B"),e(),i(9,"div",4),t(10,"C"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),ll=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-fluid-example"]],standalone:!1,decls:11,vars:0,consts:[["suiFluid","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),t(2,"All Sections"),e(),r(3,"i",2),i(4,"div",3)(5,"div",4),t(6,"Choice 1"),e(),i(7,"div",4),t(8,"Choice 2"),e(),i(9,"div",4),t(10,"Choice 3"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),dl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-menu-direction-example"]],standalone:!1,decls:36,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuItem","","suiDirection","left"],["suiDropdownMenu","","suiDirection","left"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Menu"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",1),t(7," Right "),i(8,"div",2)(9,"div",3),t(10,"1"),e(),i(11,"div",3),t(12,"2"),e(),i(13,"div",3),t(14,"3"),e()()(),i(15,"div",4),r(16,"i",1),t(17," Left "),i(18,"div",5)(19,"div",3),t(20,"1"),e(),i(21,"div",3),t(22,"2"),e(),i(23,"div",3),t(24,"3"),e()()()()(),i(25,"sui-dropdown")(26,"span",0),t(27,"Left Menu"),e(),r(28,"i",1),i(29,"div",5)(30,"div",3),t(31,"1"),e(),i(32,"div",3),t(33,"2"),e(),i(34,"div",3),t(35,"3"),e()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),ml=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-multiple-levels-example"]],standalone:!1,decls:25,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),t(2,"Filter Posts"),e(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",1),t(7," Filter by tag "),i(8,"div",2)(9,"div",3),t(10,"Important"),e(),i(11,"div",3),t(12,"Announcement"),e(),i(13,"div",3),t(14,"Discussion"),e()()(),i(15,"div",3),r(16,"i",1),t(17," Filter by date "),i(18,"div",2)(19,"div",3),t(20,"This Week"),e(),i(21,"div",3),t(22,"This Month"),e(),i(23,"div",3),t(24,"This Year"),e()()()()())},dependencies:[j,z,U,g],encapsulation:2})}}return n})(),pl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown-button-group-example"]],standalone:!1,decls:15,vars:0,consts:[["sui-buttons","","suiColour","teal"],["sui-button",""],["suiFloating","",1,"button","icon"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["sui-icon","","suiIconType","edit"],["sui-icon","","suiIconType","delete"],["sui-icon","","suiIconType","hide"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1),t(2,"Save"),e(),i(3,"sui-dropdown",2),r(4,"i",3),i(5,"div",4)(6,"div",5),r(7,"i",6),t(8," Edit Post "),e(),i(9,"div",5),r(10,"i",7),t(11," Remove Post "),e(),i(12,"div",5),r(13,"i",8),t(14," Hide Post "),e()()()())},dependencies:[T,le,j,z,U,g],encapsulation:2})}}return n})();function nh(n,m){n&1&&r(0,"doc-dropdown-dropdown-example")}function oh(n,m){n&1&&r(0,"doc-dropdown-inline-example")}function ah(n,m){n&1&&r(0,"doc-dropdown-pointing-example")}function sh(n,m){n&1&&r(0,"doc-dropdown-floating-example")}function rh(n,m){n&1&&r(0,"doc-dropdown-simple-example")}function lh(n,m){n&1&&r(0,"doc-dropdown-header-example")}function dh(n,m){n&1&&r(0,"doc-dropdown-divider-example")}function mh(n,m){n&1&&r(0,"doc-dropdown-icon-example")}function ph(n,m){n&1&&r(0,"doc-dropdown-description-example")}function uh(n,m){n&1&&r(0,"doc-dropdown-label-example")}function ch(n,m){n&1&&r(0,"doc-dropdown-message-example")}function hh(n,m){n&1&&r(0,"doc-dropdown-floated-example")}function Sh(n,m){n&1&&r(0,"doc-dropdown-input-example")}function xh(n,m){n&1&&r(0,"doc-dropdown-image-example")}function fh(n,m){n&1&&r(0,"doc-dropdown-loading-example")}function vh(n,m){n&1&&r(0,"doc-dropdown-error-example")}function gh(n,m){n&1&&r(0,"doc-dropdown-disabled-example")}function Eh(n,m){n&1&&r(0,"doc-dropdown-scrolling-example")}function bh(n,m){n&1&&r(0,"doc-dropdown-compact-example")}function yh(n,m){n&1&&r(0,"doc-dropdown-fluid-example")}function Ch(n,m){n&1&&r(0,"doc-dropdown-menu-direction-example")}function wh(n,m){n&1&&r(0,"doc-dropdown-multiple-levels-example")}function Dh(n,m){n&1&&r(0,"doc-dropdown-button-group-example")}function _h(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Dropdown"),e(),i(6,"p"),t(7,"A dropdown."),e(),i(8,"div",5),r(9,"i",6),i(10,"div",7)(11,"p"),t(12,"A dropdown opens its menu when clicked. To pick a value in a form, use the selection dropdown provided by "),i(13,"a",8),t(14,"sui-select"),e(),t(15," instead."),e()()(),h(16,nh,1,0,"ng-template",9),e(),i(17,"doc-code-sample",3)(18,"h3",4),t(19,"Inline"),e(),i(20,"p"),t(21,"A dropdown can be formatted to appear inline in other content."),e(),h(22,oh,1,0,"ng-template",9),e(),i(23,"doc-code-sample",3)(24,"h3",4),t(25,"Pointing"),e(),i(26,"p"),t(27,"A dropdown can be formatted so that its menu is pointing."),e(),i(28,"div",5),r(29,"i",6),i(30,"div",7)(31,"p"),t(32,"Set "),i(33,"span",10),t(34,"suiPointing"),e(),t(35," to enable the pointing arrow, and optionally "),i(36,"span",10),t(37,"suiPointingDirection"),e(),t(38," to choose where the arrow sits."),e()()(),h(39,ah,1,0,"ng-template",9),e(),i(40,"doc-code-sample",3)(41,"h3",4),t(42,"Floating"),e(),i(43,"p"),t(44,"A dropdown menu can appear to be floating below an element."),e(),h(45,sh,1,0,"ng-template",9),e(),i(46,"doc-code-sample",3)(47,"h3",4),t(48,"Simple"),e(),i(49,"p"),t(50,"A simple dropdown can open on hover using only CSS."),e(),h(51,rh,1,0,"ng-template",9),e(),i(52,"h2",2),t(53,"Content"),e(),i(54,"doc-code-sample",3)(55,"h3",4),t(56,"Header"),e(),i(57,"p"),t(58,"A dropdown menu can contain a header."),e(),h(59,lh,1,0,"ng-template",9),e(),i(60,"doc-code-sample",3)(61,"h3",4),t(62,"Divider"),e(),i(63,"p"),t(64,"A dropdown menu can contain dividers to separate related content."),e(),h(65,dh,1,0,"ng-template",9),e(),i(66,"doc-code-sample",3)(67,"h3",4),t(68,"Icon"),e(),i(69,"p"),t(70,"A dropdown menu can contain an "),i(71,"a",11),t(72,"icon"),e(),t(73,"."),e(),h(74,mh,1,0,"ng-template",9),e(),i(75,"doc-code-sample",3)(76,"h3",4),t(77,"Description"),e(),i(78,"p"),t(79,"A dropdown menu can contain a description."),e(),i(80,"div",5),r(81,"i",6),i(82,"div",7)(83,"p"),t(84,"Using a description may require setting a minimum width on the menu to prevent content overlap."),e()()(),h(85,ph,1,0,"ng-template",9),e(),i(86,"doc-code-sample",3)(87,"h3",4),t(88,"Label"),e(),i(89,"p"),t(90,"A dropdown menu can contain a "),i(91,"a",12),t(92,"label"),e(),t(93,"."),e(),h(94,uh,1,0,"ng-template",9),e(),i(95,"doc-code-sample",3)(96,"h3",4),t(97,"Message"),e(),i(98,"p"),t(99,"A dropdown menu can contain a "),i(100,"a",13),t(101,"message"),e(),t(102,"."),e(),h(103,ch,1,0,"ng-template",9),e(),i(104,"doc-code-sample",3)(105,"h3",4),t(106,"Floated Content"),e(),i(107,"p"),t(108,"A dropdown menu can contain floated content."),e(),i(109,"div",5),r(110,"i",6),i(111,"div",7)(112,"p"),t(113,"Floated content may stack to two lines without manually setting a width or using a fluid dropdown."),e()()(),h(114,hh,1,0,"ng-template",9),e(),i(115,"doc-code-sample",3)(116,"h3",4),t(117,"Input"),e(),i(118,"p"),t(119,"A dropdown menu can contain an "),i(120,"a",14),t(121,"input"),e(),t(122,"."),e(),i(123,"div",5),r(124,"i",6),i(125,"div",7)(126,"p"),t(127,"Stop click propagation on the input so that typing or clicking it does not close the menu."),e()()(),h(128,Sh,1,0,"ng-template",9),e(),i(129,"doc-code-sample",3)(130,"h3",4),t(131,"Image"),e(),i(132,"p"),t(133,"A dropdown menu can contain an "),i(134,"a",15),t(135,"image"),e(),t(136,"."),e(),h(137,xh,1,0,"ng-template",9),e(),i(138,"h2",2),t(139,"States"),e(),i(140,"doc-code-sample",3)(141,"h3",4),t(142,"Loading"),e(),i(143,"p"),t(144,"A dropdown can show that it is currently loading data."),e(),h(145,fh,1,0,"ng-template",9),e(),i(146,"doc-code-sample",3)(147,"h3",4),t(148,"Error"),e(),i(149,"p"),t(150,"An errored dropdown can alert a user to a problem."),e(),h(151,vh,1,0,"ng-template",9),e(),i(152,"doc-code-sample",3)(153,"h3",4),t(154,"Disabled"),e(),i(155,"p"),t(156,"A disabled dropdown menu or item does not allow user interaction."),e(),h(157,gh,1,0,"ng-template",9),e(),i(158,"h2",2),t(159,"Variations"),e(),i(160,"doc-code-sample",3)(161,"h3",4),t(162,"Scrolling"),e(),i(163,"p"),t(164,"A dropdown can have its menu scroll."),e(),i(165,"div",5),r(166,"i",6),i(167,"div",7)(168,"p"),t(169,"Scrolling dropdowns are incompatible with the usage of sub menus."),e()()(),h(170,Eh,1,0,"ng-template",9),e(),i(171,"doc-code-sample",3)(172,"h3",4),t(173,"Compact"),e(),i(174,"p"),t(175,"A compact dropdown has no minimum width."),e(),h(176,bh,1,0,"ng-template",9),e(),i(177,"doc-code-sample",3)(178,"h3",4),t(179,"Fluid"),e(),i(180,"p"),t(181,"A dropdown can take the full width of its parent."),e(),h(182,yh,1,0,"ng-template",9),e(),i(183,"doc-code-sample",3)(184,"h3",4),t(185,"Menu Direction"),e(),i(186,"p"),t(187,"A dropdown menu or sub-menu can specify the direction it should open."),e(),i(188,"div",5),r(189,"i",6),i(190,"div",7)(191,"p"),t(192,"Specifying "),i(193,"span",10),t(194,"left"),e(),t(195," on a menu makes all child menus open in the same direction implicitly. To have the dropdown icon appear on the left side of a child item, set "),i(196,"span",10),t(197,"suiDirection"),e(),t(198," on the item as well."),e()()(),h(199,Ch,1,0,"ng-template",9),e(),i(200,"h2",2),t(201,"Menus"),e(),i(202,"doc-code-sample",3)(203,"h3",4),t(204,"Multiple Levels"),e(),i(205,"p"),t(206,"A dropdown menu can contain multiple levels."),e(),i(207,"div",5),r(208,"i",6),i(209,"div",7)(210,"p"),t(211,"Nest a "),i(212,"span",10),t(213,"suiDropdownMenu"),e(),t(214," inside a "),i(215,"span",10),t(216,"suiDropdownMenuItem"),e(),t(217,". The sub menu opens when the item is hovered."),e()()(),h(218,wh,1,0,"ng-template",9),e(),i(219,"h2",2),t(220,"Coupling"),e(),i(221,"doc-code-sample",3)(222,"h3",4),t(223,"Button Group"),e(),i(224,"p"),t(225,"A dropdown can be attached to a "),i(226,"a",16),t(227,"button group"),e(),t(228,"."),e(),h(229,Dh,1,0,"ng-template",9),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetDropdown),d(14),l("templateCode",o.snippetInline),d(6),l("templateCode",o.snippetPointing),d(17),l("templateCode",o.snippetFloating),d(6),l("templateCode",o.snippetSimple),d(8),l("templateCode",o.snippetHeader),d(6),l("templateCode",o.snippetDivider),d(6),l("templateCode",o.snippetIcon),d(9),l("templateCode",o.snippetDescription),d(11),l("templateCode",o.snippetLabel),d(9),l("templateCode",o.snippetMessage),d(9),l("templateCode",o.snippetFloated),d(11),l("templateCode",o.snippetInput),d(14),l("templateCode",o.snippetImage),d(11),l("templateCode",o.snippetLoading),d(6),l("templateCode",o.snippetError),d(6),l("templateCode",o.snippetDisabled),d(8),l("templateCode",o.snippetScrolling),d(11),l("templateCode",o.snippetCompact),d(6),l("templateCode",o.snippetFluid),d(6),l("templateCode",o.snippetMenuDirection),d(19),l("templateCode",o.snippetMultipleLevels),d(19),l("templateCode",o.snippetButtonGroup)}}function Th(n,m){n&1&&(i(0,"div")(1,"div",5),r(2,"i",6),i(3,"div",7)(4,"p"),t(5," Import "),i(6,"span",10),t(7,"SuiDropdownModule"),e(),t(8," from "),i(9,"span",10),t(10,"ngx-semantic/modules/dropdown"),e(),t(11," to use the component and every directive below. Looking for the selection dropdown? See "),i(12,"a",8),t(13,"Select"),e(),t(14,". "),e()()(),i(15,"h2",2),t(16,"sui-dropdown"),e(),i(17,"p"),t(18,"Selector: "),i(19,"span",10),t(20,"sui-dropdown, [sui-dropdown]"),e(),t(21,". Clicking the dropdown toggles its "),i(22,"span",10),t(23,"suiDropdownMenu"),e(),t(24,". The dropdown is focusable and does nothing when disabled."),e(),i(25,"h4",4),t(26,"Properties"),e(),i(27,"table",17)(28,"thead")(29,"tr")(30,"th"),t(31,"Property"),e(),i(32,"th"),t(33,"Description"),e(),i(34,"th"),t(35,"Type"),e(),i(36,"th"),t(37,"Default"),e()()(),i(38,"tbody")(39,"tr")(40,"td"),t(41,"suiPointing"),e(),i(42,"td"),t(43,"When true, renders the dropdown menu with a pointing arrow."),e(),i(44,"td")(45,"div",18),t(46," boolean "),e()(),i(47,"td")(48,"div",19),t(49," false "),e()()(),i(50,"tr")(51,"td"),t(52,"suiPointingDirection"),e(),i(53,"td"),t(54,"Sets where the pointing arrow sits. Use together with "),i(55,"span",10),t(56,"suiPointing"),e(),t(57,". Allowed values are "),i(58,"span",10),t(59,"top left"),e(),t(60," | "),i(61,"span",10),t(62,"top right"),e(),t(63," | "),i(64,"span",10),t(65,"left"),e(),t(66," | "),i(67,"span",10),t(68,"right"),e(),t(69," | "),i(70,"span",10),t(71,"bottom left"),e(),t(72," | "),i(73,"span",10),t(74,"bottom right"),e(),t(75," | "),i(76,"span",10),t(77,"null"),e()(),i(78,"td")(79,"div",18),t(80," string "),e()(),i(81,"td")(82,"div",19),t(83," null "),e()()(),i(84,"tr")(85,"td"),t(86,"suiFluid"),e(),i(87,"td"),t(88,"When true, the dropdown takes the full width of its parent."),e(),i(89,"td")(90,"div",18),t(91," boolean "),e()(),i(92,"td")(93,"div",19),t(94," false "),e()()(),i(95,"tr")(96,"td"),t(97,"suiInline"),e(),i(98,"td"),t(99,"When true, the dropdown appears inline with surrounding content."),e(),i(100,"td")(101,"div",18),t(102," boolean "),e()(),i(103,"td")(104,"div",19),t(105," false "),e()()(),i(106,"tr")(107,"td"),t(108,"suiLoading"),e(),i(109,"td"),t(110,"When true, shows that the dropdown is loading data."),e(),i(111,"td")(112,"div",18),t(113," boolean "),e()(),i(114,"td")(115,"div",19),t(116," false "),e()()(),i(117,"tr")(118,"td"),t(119,"suiError"),e(),i(120,"td"),t(121,"When true, renders the dropdown in an error state."),e(),i(122,"td")(123,"div",18),t(124," boolean "),e()(),i(125,"td")(126,"div",19),t(127," false "),e()()(),i(128,"tr")(129,"td"),t(130,"disabled"),e(),i(131,"td"),t(132,"When true, the dropdown cannot be opened."),e(),i(133,"td")(134,"div",18),t(135," boolean "),e()(),i(136,"td")(137,"div",19),t(138," false "),e()()(),i(139,"tr")(140,"td"),t(141,"suiScrolling"),e(),i(142,"td"),t(143,"When true, applies the scrolling style to the dropdown. You can also set "),i(144,"span",10),t(145,"suiScrolling"),e(),t(146," on the menu."),e(),i(147,"td")(148,"div",18),t(149," boolean "),e()(),i(150,"td")(151,"div",19),t(152," false "),e()()(),i(153,"tr")(154,"td"),t(155,"suiCompact"),e(),i(156,"td"),t(157,"When true, removes the minimum width of the dropdown."),e(),i(158,"td")(159,"div",18),t(160," boolean "),e()(),i(161,"td")(162,"div",19),t(163," false "),e()()(),i(164,"tr")(165,"td"),t(166,"suiFloating"),e(),i(167,"td"),t(168,"When true, the menu appears to float below the element."),e(),i(169,"td")(170,"div",18),t(171," boolean "),e()(),i(172,"td")(173,"div",19),t(174," false "),e()()(),i(175,"tr")(176,"td"),t(177,"suiSimple"),e(),i(178,"td"),t(179,"When true, the dropdown opens on hover using CSS only."),e(),i(180,"td")(181,"div",18),t(182," boolean "),e()(),i(183,"td")(184,"div",19),t(185," false "),e()()()()(),i(186,"h2",2),t(187,"suiDropdownMenu"),e(),i(188,"p"),t(189,"Selector: "),i(190,"span",10),t(191,"[suiDropdownMenu]"),e(),t(192,". The menu of a dropdown or of a dropdown menu item (sub menu)."),e(),i(193,"h4",4),t(194,"Properties"),e(),i(195,"table",17)(196,"thead")(197,"tr")(198,"th"),t(199,"Property"),e(),i(200,"th"),t(201,"Description"),e(),i(202,"th"),t(203,"Type"),e(),i(204,"th"),t(205,"Default"),e()()(),i(206,"tbody")(207,"tr")(208,"td"),t(209,"suiDirection"),e(),i(210,"td"),t(211,"Sets the direction the menu opens. Allowed values are "),i(212,"span",10),t(213,"left"),e(),t(214," | "),i(215,"span",10),t(216,"right"),e(),t(217," | "),i(218,"span",10),t(219,"null"),e()(),i(220,"td")(221,"div",18),t(222," string "),e()(),i(223,"td")(224,"div",19),t(225," null "),e()()(),i(226,"tr")(227,"td"),t(228,"suiScrolling"),e(),i(229,"td"),t(230,"When true, the menu scrolls when it has many items."),e(),i(231,"td")(232,"div",18),t(233," boolean "),e()(),i(234,"td")(235,"div",19),t(236," false "),e()()(),i(237,"tr")(238,"td"),t(239,"suiIsOpen"),e(),i(240,"td"),t(241,"Sets whether the menu is open. This is managed by the parent dropdown or menu item but can be bound to if needed."),e(),i(242,"td")(243,"div",18),t(244," boolean "),e()(),i(245,"td")(246,"div",19),t(247," false "),e()()()()(),i(248,"h2",2),t(249,"suiDropdownMenuItem"),e(),i(250,"p"),t(251,"Selector: "),i(252,"span",10),t(253,"[suiDropdownMenuItem]"),e(),t(254,". An item in a dropdown menu. If it contains a "),i(255,"span",10),t(256,"suiDropdownMenu"),e(),t(257,", that sub menu opens while the item is hovered."),e(),i(258,"h4",4),t(259,"Properties"),e(),i(260,"table",17)(261,"thead")(262,"tr")(263,"th"),t(264,"Property"),e(),i(265,"th"),t(266,"Description"),e(),i(267,"th"),t(268,"Type"),e(),i(269,"th"),t(270,"Default"),e()()(),i(271,"tbody")(272,"tr")(273,"td"),t(274,"suiDirection"),e(),i(275,"td"),t(276,"Sets the side the item\u2019s sub menu icon appears on. Allowed values are "),i(277,"span",10),t(278,"left"),e(),t(279," | "),i(280,"span",10),t(281,"right"),e(),t(282," | "),i(283,"span",10),t(284,"null"),e()(),i(285,"td")(286,"div",18),t(287," string "),e()(),i(288,"td")(289,"div",19),t(290," null "),e()()(),i(291,"tr")(292,"td"),t(293,"disabled"),e(),i(294,"td"),t(295,"When true, the item does not allow user interaction."),e(),i(296,"td")(297,"div",18),t(298," boolean "),e()(),i(299,"td")(300,"div",19),t(301," false "),e()()()()(),i(302,"h2",2),t(303,"suiDropdownMenuHeader"),e(),i(304,"p"),t(305,"Selector: "),i(306,"span",10),t(307,"[suiDropdownMenuHeader]"),e(),t(308,". A header that groups the items below it."),e(),i(309,"h4",4),t(310,"Properties"),e(),i(311,"table",17)(312,"thead")(313,"tr")(314,"th"),t(315,"Property"),e(),i(316,"th"),t(317,"Description"),e(),i(318,"th"),t(319,"Type"),e(),i(320,"th"),t(321,"Default"),e()()(),r(322,"tbody"),i(323,"tfoot",20)(324,"tr")(325,"th",21)(326,"div",22),t(327,"No properties for this directive"),e()()()()(),i(328,"h2",2),t(329,"suiDropdownMenuDivider"),e(),i(330,"p"),t(331,"Selector: "),i(332,"span",10),t(333,"[suiDropdownMenuDivider]"),e(),t(334,". A divider that separates related items."),e(),i(335,"h4",4),t(336,"Properties"),e(),i(337,"table",17)(338,"thead")(339,"tr")(340,"th"),t(341,"Property"),e(),i(342,"th"),t(343,"Description"),e(),i(344,"th"),t(345,"Type"),e(),i(346,"th"),t(347,"Default"),e()()(),r(348,"tbody"),i(349,"tfoot",20)(350,"tr")(351,"th",21)(352,"div",22),t(353,"No properties for this directive"),e()()()()()())}var ul=(()=>{class n{constructor(o){this.snippetDropdown=Er,this.snippetInline=br,this.snippetPointing=yr,this.snippetFloating=Cr,this.snippetSimple=wr,this.snippetHeader=Dr,this.snippetDivider=_r,this.snippetIcon=Tr,this.snippetDescription=Mr,this.snippetLabel=Ir,this.snippetMessage=Pr,this.snippetFloated=kr,this.snippetInput=Fr,this.snippetImage=Ar,this.snippetLoading=Vr,this.snippetError=Br,this.snippetDisabled=Lr,this.snippetScrolling=Or,this.snippetCompact=Hr,this.snippetFluid=Rr,this.snippetMenuDirection=Wr,this.snippetMultipleLevels=zr,this.snippetButtonGroup=jr,o.setTitle("Dropdown | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-dropdown"]],standalone:!1,decls:3,vars:2,consts:[["header","Dropdown","subHeader","A dropdown allows a user to select a value from a series of options"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiIcon",""],["sui-icon","","suiIconType","info circle"],["suiMessageContent",""],["routerLink","/modules/select"],["docDemo",""],["sui-label",""],["routerLink","/elements/icon"],["routerLink","/elements/label"],["routerLink","/collections/messages"],["routerLink","/elements/input"],["routerLink","/elements/image"],["routerLink","/elements/button"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,_h,230,23,"div",1)(2,Th,354,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[At,R,O,L,H,A,W,b,g,re,Bt,Nr,Ur,Gr,Yr,Jr,Xr,qr,Kr,Zr,$r,Qr,el,tl,il,nl,ol,al,sl,rl,ll,dl,ml,pl],encapsulation:2})}}return n})();var cl=`<div sui-buttons
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
`;var hl=`<div sui-buttons
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
`;var Sl=`<div sui-buttons
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
`;var xl=`<div sui-buttons
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
`;var fl=`<button sui-button
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
`;var vl=["*"],Ah=["shapeEl"],Vh=["sidesEl"],lt=(()=>{class n{constructor(){this.element=Z(Pt),this.styleActive=!1,this.styleHidden=!1,this.styleAnimating=!1,this.inlineStyles={},this.sideClass=!0}get nativeElement(){return this.element.nativeElement}clearInlineStyles(){this.inlineStyles={}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-shape-side"]],hostVars:10,hostBindings:function(a,s){a&2&&(ui(s.inlineStyles),ue("active",s.styleActive)("hidden",s.styleHidden)("animating",s.styleAnimating)("side",s.sideClass))},exportAs:["suiShapeSide"],ngContentSelectors:vl,decls:1,vars:0,template:function(a,s){a&1&&(Ee(),be(0))},encapsulation:2})}}return n})();function ke(n){let m=n.getBoundingClientRect(),o=getComputedStyle(n);return m.height+parseFloat(o.marginTop)+parseFloat(o.marginBottom)}function oe(n){let m=n.getBoundingClientRect(),o=getComputedStyle(n);return m.width+parseFloat(o.marginLeft)+parseFloat(o.marginRight)}function Bh(){let n=document.createElement("div"),m={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(let o of Object.keys(m))if(n.style[o]!==void 0)return m[o];return"transitionend"}var dt=(()=>{class n{constructor(){this.cdr=Z(Xe),this.zone=Z(It),this.suiDuration=null,this.suiWidth="initial",this.suiHeight="initial",this.suiJitter=0,this.suiAllowRepeats=!1,this.suiCube=!1,this.suiText=!1,this.suiBeforeChange=new $,this.suiOnChange=new $,this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={},this.transitionEnd=Bh(),this.activeSide=null,this.nextSide=null,this.manualNextIndex=null,this.queue=[],this.sidesChangeSub=null}ngAfterContentInit(){this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.sidesChangeSub=this.sideList.changes.subscribe(()=>{this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.cdr.markForCheck()})}ngOnDestroy(){this.sidesChangeSub?.unsubscribe()}flipUp(){this.runFlip("flip up",()=>{this.setStageSize(),this.stageAbove(),this.animate(this.getTransformUp())})}flipDown(){this.runFlip("flip down",()=>{this.setStageSize(),this.stageBelow(),this.animate(this.getTransformDown())})}flipLeft(){this.runFlip("flip left",()=>{this.setStageSize(),this.stageLeft(),this.animate(this.getTransformLeft())})}flipRight(){this.runFlip("flip right",()=>{this.setStageSize(),this.stageRight(),this.animate(this.getTransformRight())})}flipOver(){this.runFlip("flip over",()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformOver())})}flipBack(){this.runFlip("flip back",()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformBack())})}setNextSide(o){let a=this.sideList.toArray(),s=a.filter(c=>c.nativeElement.matches(o));if(s.length===0){this.setDefaultSide();return}this.nextSide=s[0],this.manualNextIndex=a.indexOf(this.nextSide)}isAnimating(){return this.animating}reset(){this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={};for(let o of this.sideList.toArray())o.styleHidden=!1,o.styleAnimating=!1,o.clearInlineStyles();this.cdr.markForCheck()}repaint(){let o=this.sidesEl?.nativeElement;o&&o.offsetWidth}refresh(){this.setDefaultSide()}flip(o){switch(o){case"flip up":this.flipUp();break;case"flip down":this.flipDown();break;case"flip left":this.flipLeft();break;case"flip right":this.flipRight();break;case"flip over":this.flipOver();break;case"flip back":this.flipBack();break}}runFlip(o,a){this.sideList.length<2||(this.setDefaultSide(),!(!this.activeSide||!this.nextSide)&&(this.isComplete()&&!this.animating&&!this.suiAllowRepeats||(this.animating?this.queue.push(o):a())))}isComplete(){return this.activeSide!==null&&this.nextSide!==null&&this.activeSide===this.nextSide}ensureFirstSideActive(){let o=this.sideList.toArray();o.length!==0&&(o.some(a=>a.styleActive)||(o[0].styleActive=!0))}setDefaultSide(){let o=this.sideList.toArray();if(o.length===0){this.activeSide=null,this.nextSide=null;return}let a=o.findIndex(s=>s.styleActive);if(this.activeSide=a>=0?o[a]:o[0],this.manualNextIndex!==null&&this.manualNextIndex>=0&&this.manualNextIndex<o.length)this.nextSide=o[this.manualNextIndex];else{let s=o.indexOf(this.activeSide);this.nextSide=s<o.length-1?o[s+1]:o[0]}}applyDurationToSides(){if(this.suiDuration===null||this.suiDuration===void 0)return;let o=`${this.suiDuration}ms`,a={transitionDuration:o,WebkitTransitionDuration:o,MozTransitionDuration:o,OTransitionDuration:o};this.sidesInlineStyle=G(G({},this.sidesInlineStyle),a);for(let s of this.sideList.toArray())s.inlineStyles=G(G({},s.inlineStyles),a)}setStageSize(){if(!this.activeSide||!this.nextSide)return;let o=this.shapeEl.nativeElement,a=this.suiWidth,s=this.suiHeight,c,p;a==="next"?c=oe(this.nextSide.nativeElement):a==="initial"?c=o.offsetWidth:c=a,s==="next"?p=ke(this.nextSide.nativeElement):s==="initial"?p=o.offsetHeight:p=s,this.shapeInlineStyle=ae(G({},this.shapeInlineStyle),{width:`${c+this.suiJitter}px`,height:`${p+this.suiJitter}px`})}animate(o){if(!this.activeSide||!this.nextSide)return;let a=this.activeSide,s=this.nextSide;this.suiBeforeChange.emit(s);let c=this.sidesEl.nativeElement,p=v=>{if(v.target!==c){c.addEventListener(this.transitionEnd,p,{once:!0});return}this.zone.run(()=>{this.finishAnimation()})};setTimeout(()=>{this.zone.run(()=>{this.animating=!0,c.addEventListener(this.transitionEnd,p,{once:!0}),this.sidesInlineStyle=G(G({},this.sidesInlineStyle),o),a.styleHidden=!0,this.cdr.markForCheck()})})}finishAnimation(){this.reset(),this.setActive(),this.processQueue(),this.cdr.markForCheck()}setActive(){let o=this.sideList.toArray();if(this.nextSide){for(let a of o)a.styleActive=!1;this.nextSide.styleActive=!0,this.suiOnChange.emit(this.nextSide),this.manualNextIndex=null,this.setDefaultSide()}}processQueue(){let o=this.queue.shift();o&&this.flip(o)}getTransformUp(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(ke(o)-ke(a))/2,c=-ke(o)/2;return{transform:`translateY(${s}px) translateZ(${c}px) rotateX(-90deg)`}}getTransformDown(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(ke(o)-ke(a))/2,c=-ke(o)/2;return{transform:`translateY(${s}px) translateZ(${c}px) rotateX(90deg)`}}getTransformLeft(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(oe(o)-oe(a))/2,c=-oe(o)/2;return{transform:`translateX(${s}px) translateZ(${c}px) rotateY(90deg)`}}getTransformRight(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(oe(o)-oe(a))/2,c=-oe(o)/2;return{transform:`translateX(${s}px) translateZ(${c}px) rotateY(-90deg)`}}getTransformOver(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(oe(o)-oe(a))/2}px) rotateY(180deg)`}}getTransformBack(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(oe(o)-oe(a))/2}px) rotateY(-180deg)`}}stageAbove(){let o=this.activeSide,a=this.nextSide,s=ke(o.nativeElement),c=ke(a.nativeElement),p=(s-c)/2,v=c/2,te=s/2;this.sidesInlineStyle=ae(G({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=ae(G({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=ae(G({},a.inlineStyles),{top:`${p}px`,transform:`rotateX(90deg) translateZ(${te}px)`})}stageBelow(){let o=this.activeSide,a=this.nextSide,s=ke(o.nativeElement),c=ke(a.nativeElement),p=(s-c)/2,v=c/2,te=s/2;this.sidesInlineStyle=ae(G({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=ae(G({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=ae(G({},a.inlineStyles),{top:`${p}px`,transform:`rotateX(-90deg) translateZ(${te}px)`})}stageLeft(){let o=this.activeSide,a=this.nextSide,s=oe(o.nativeElement),c=oe(a.nativeElement),p=(s-c)/2,v=c/2,te=s/2;this.sidesInlineStyle=ae(G({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=ae(G({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=ae(G({},a.inlineStyles),{left:`${p}px`,transform:`rotateY(-90deg) translateZ(${te}px)`})}stageRight(){let o=this.activeSide,a=this.nextSide,s=oe(o.nativeElement),c=oe(a.nativeElement),p=(s-c)/2,v=c/2,te=s/2;this.sidesInlineStyle=ae(G({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=ae(G({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=ae(G({},a.inlineStyles),{left:`${p}px`,transform:`rotateY(90deg) translateZ(${te}px)`})}stageBehind(){let o=this.activeSide,a=this.nextSide,s=oe(o.nativeElement),c=oe(a.nativeElement),p=(s-c)/2;o.inlineStyles=ae(G({},o.inlineStyles),{transform:"rotateY(0deg)"}),a.styleAnimating=!0,a.inlineStyles=ae(G({},a.inlineStyles),{left:`${p}px`,transform:"rotateY(-180deg)"})}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["sui-shape"]],contentQueries:function(a,s,c){if(a&1&&ut(c,lt,4),a&2){let p;we(p=De())&&(s.sideList=p)}},viewQuery:function(a,s){if(a&1&&ct(Ah,7)(Vh,7),a&2){let c;we(c=De())&&(s.shapeEl=c.first),we(c=De())&&(s.sidesEl=c.first)}},inputs:{suiDuration:"suiDuration",suiWidth:"suiWidth",suiHeight:"suiHeight",suiJitter:"suiJitter",suiAllowRepeats:"suiAllowRepeats",suiCube:"suiCube",suiText:"suiText"},outputs:{suiBeforeChange:"suiBeforeChange",suiOnChange:"suiOnChange"},exportAs:["suiShape"],ngContentSelectors:vl,decls:5,vars:8,consts:[["shapeEl",""],["sidesEl",""],[1,"ui","shape",3,"ngStyle"],[1,"sides",3,"ngStyle"]],template:function(a,s){a&1&&(Ee(),i(0,"div",2,0)(2,"div",3,1),be(4),e()()),a&2&&(ue("animating",s.animating)("cube",s.suiCube)("text",s.suiText),l("ngStyle",s.shapeInlineStyle),d(2),l("ngStyle",s.sidesInlineStyle))},dependencies:[J,xi],encapsulation:2})}}return M([I()],n.prototype,"suiAllowRepeats",void 0),M([I()],n.prototype,"suiCube",void 0),M([I()],n.prototype,"suiText",void 0),n})(),gl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[J,dt]})}}return n})();var El=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-shape-example"]],standalone:!1,decls:41,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["sui-segment",""],["sui-image","","src","https://semantic-ui.com/images/avatar/large/steve.jpg"],["sui-header",""],["suiSubHeader",""],["sui-image","","src","https://semantic-ui.com/images/avatar/large/elliot.jpg"],["sui-image","","src","https://semantic-ui.com/images/avatar/large/stevie.jpg"]],template:function(a,s){if(a&1){let c=se();i(0,"div",1)(1,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipLeft())}),r(2,"i",3),t(3," Left"),e(),i(4,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipUp())}),r(5,"i",4),t(6," Up"),e(),i(7,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipDown())}),r(8,"i",5),t(9," Down"),e(),i(10,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipRight())}),r(11,"i",6),t(12," Right"),e(),i(13,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipOver())}),t(14,"Over"),e(),i(15,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipBack())}),t(16,"Back"),e()(),r(17,"div",7),i(18,"sui-shape",null,0)(20,"sui-shape-side")(21,"div",8),r(22,"img",9),i(23,"h4",10),t(24," Steve "),i(25,"div",11),t(26,"Steve is a creative professional"),e()()()(),i(27,"sui-shape-side")(28,"div",8),r(29,"img",12),i(30,"h4",10),t(31," Elliot "),i(32,"div",11),t(33,"Elliot is a sound engineer"),e()()()(),i(34,"sui-shape-side")(35,"div",8),r(36,"img",13),i(37,"h4",10),t(38," Stevie "),i(39,"div",11),t(40,"Stevie is a writer"),e()()()()()}},dependencies:[b,Vt,T,le,g,ye,Te,F,dt,lt],encapsulation:2})}}return n})(),bl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-cube-example"]],standalone:!1,decls:44,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["suiCube",""],[1,"content"],[1,"center"]],template:function(a,s){if(a&1){let c=se();i(0,"div",1)(1,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipLeft())}),r(2,"i",3),t(3," Left"),e(),i(4,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipUp())}),r(5,"i",4),t(6," Up"),e(),i(7,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipDown())}),r(8,"i",5),t(9," Down"),e(),i(10,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipRight())}),r(11,"i",6),t(12," Right"),e(),i(13,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipOver())}),t(14,"Over"),e(),i(15,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipBack())}),t(16,"Back"),e()(),r(17,"div",7),i(18,"sui-shape",8,0)(20,"sui-shape-side")(21,"div",9)(22,"div",10),t(23,"1"),e()()(),i(24,"sui-shape-side")(25,"div",9)(26,"div",10),t(27,"2"),e()()(),i(28,"sui-shape-side")(29,"div",9)(30,"div",10),t(31,"3"),e()()(),i(32,"sui-shape-side")(33,"div",9)(34,"div",10),t(35,"4"),e()()(),i(36,"sui-shape-side")(37,"div",9)(38,"div",10),t(39,"5"),e()()(),i(40,"sui-shape-side")(41,"div",9)(42,"div",10),t(43,"6"),e()()()()}},dependencies:[T,le,g,ye,dt,lt],encapsulation:2})}}return n})(),yl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-text-example"]],standalone:!1,decls:32,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["suiText",""],["sui-header",""]],template:function(a,s){if(a&1){let c=se();i(0,"div",1)(1,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipLeft())}),r(2,"i",3),t(3," Left"),e(),i(4,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipUp())}),r(5,"i",4),t(6," Up"),e(),i(7,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipDown())}),r(8,"i",5),t(9," Down"),e(),i(10,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipRight())}),r(11,"i",6),t(12," Right"),e(),i(13,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipOver())}),t(14,"Over"),e(),i(15,"button",2),f("click",function(){y(c);let v=k(19);return C(v.flipBack())}),t(16,"Back"),e()(),r(17,"div",7),i(18,"sui-shape",8,0)(20,"sui-shape-side")(21,"h2",9),t(22,"Hello there!"),e()(),i(23,"sui-shape-side")(24,"h2",9),t(25,"Flip me"),e()(),i(26,"sui-shape-side")(27,"h2",9),t(28,"Shapes can hold text"),e()(),i(29,"sui-shape-side")(30,"h2",9),t(31,"Have a nice day"),e()()()}},dependencies:[b,T,le,g,ye,dt,lt],encapsulation:2})}}return n})(),Cl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-next-side-example"]],standalone:!1,decls:19,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiText",""],[1,"first"],["sui-header",""],[1,"second"],[1,"third"]],template:function(a,s){if(a&1){let c=se();i(0,"div",1)(1,"button",2),f("click",function(){y(c);let v=k(9);return v.setNextSide(".first"),C(v.flipUp())}),t(2,"First"),e(),i(3,"button",2),f("click",function(){y(c);let v=k(9);return v.setNextSide(".second"),C(v.flipUp())}),t(4,"Second"),e(),i(5,"button",2),f("click",function(){y(c);let v=k(9);return v.setNextSide(".third"),C(v.flipUp())}),t(6,"Third"),e()(),r(7,"div",3),i(8,"sui-shape",4,0)(10,"sui-shape-side",5)(11,"h2",6),t(12,"First side"),e()(),i(13,"sui-shape-side",7)(14,"h2",6),t(15,"Second side"),e()(),i(16,"sui-shape-side",8)(17,"h2",6),t(18,"Third side"),e()()()}},dependencies:[b,T,le,ye,dt,lt],encapsulation:2})}}return n})(),wl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape-settings-example"]],standalone:!1,decls:11,vars:1,consts:[["shape","suiShape"],["sui-button","","suiSize","small",3,"click"],["sui-divider","","suiHidden",""],["suiText","","suiWidth","next",3,"suiDuration"],["sui-header",""]],template:function(a,s){if(a&1){let c=se();i(0,"button",1),f("click",function(){y(c);let v=k(4);return C(v.flipRight())}),t(1,"Flip Right"),e(),r(2,"div",2),i(3,"sui-shape",3,0)(5,"sui-shape-side")(6,"h2",4),t(7,"Short"),e()(),i(8,"sui-shape-side")(9,"h2",4),t(10,"A much longer side of text"),e()()()}a&2&&(d(3),l("suiDuration",1500))},dependencies:[b,T,ye,dt,lt],encapsulation:2})}}return n})();function Hh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-shape-example"),e())}function Rh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-cube-example"),e())}function Wh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-text-example"),e())}function zh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-next-side-example"),e())}function jh(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-settings-example"),e())}function Nh(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Shape"),e(),i(6,"p"),t(7,"A shape can contain any content on each of its sides"),e(),i(8,"div",5),t(9," Get a reference to the shape with "),i(10,"code"),t(11,'#shape="suiShape"'),e(),t(12," to call its flip methods. "),e(),h(13,Hh,2,0,"ng-template",6),e(),i(14,"doc-code-sample",3)(15,"h3",4),t(16,"Cube"),e(),i(17,"p"),t(18,"A shape can be the size of a cube"),e(),h(19,Rh,2,0,"ng-template",6),e(),i(20,"doc-code-sample",3)(21,"h3",4),t(22,"Text"),e(),i(23,"p"),t(24,"A shape can be formatted for text content"),e(),h(25,Wh,2,0,"ng-template",6),e(),r(26,"br"),i(27,"h2",2),t(28,"Content"),e(),i(29,"doc-code-sample",3)(30,"h3",4),t(31,"Side"),e(),i(32,"p"),t(33,"A shape displays one side at a time; you can choose the next side before flipping"),e(),i(34,"div",5)(35,"code"),t(36,"setNextSide"),e(),t(37," takes a CSS selector that is matched against each side. "),e(),h(38,zh,2,0,"ng-template",6),e(),r(39,"br"),i(40,"h2",2),t(41,"Settings"),e(),i(42,"doc-code-sample",3)(43,"h3",4),t(44,"Duration and Size"),e(),i(45,"p"),t(46,"A shape can change its animation duration, and resize to fit the next side while animating"),e(),h(47,jh,2,0,"ng-template",6),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetShape),d(11),l("templateCode",o.snippetCube),d(6),l("templateCode",o.snippetText),d(9),l("templateCode",o.snippetNextSide),d(13),l("templateCode",o.snippetSettings)}}function Uh(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-shape"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19," suiCube "),e(),i(20,"td"),t(21," Format the shape as a cube "),e(),i(22,"td")(23,"div",9),t(24," boolean "),e()(),i(25,"td")(26,"div",10),t(27," false "),e()()(),i(28,"tr")(29,"td"),t(30," suiText "),e(),i(31,"td"),t(32," Format the shape for text content "),e(),i(33,"td")(34,"div",9),t(35," boolean "),e()(),i(36,"td")(37,"div",10),t(38," false "),e()()(),i(39,"tr")(40,"td"),t(41," suiDuration "),e(),i(42,"td"),t(43," Animation duration in milliseconds. Uses the Semantic UI CSS duration when not set "),e(),i(44,"td")(45,"div",9),t(46," number "),e()(),i(47,"td")(48,"div",10),t(49," null "),e()()(),i(50,"tr")(51,"td"),t(52," suiWidth "),e(),i(53,"td"),t(54," Width of the shape while animating: the initial width, the next side's width or a pixel value. Allowed values are "),i(55,"span",11),t(56,"'initial'"),e(),t(57," | "),i(58,"span",11),t(59,"'next'"),e(),t(60," | "),i(61,"span",11),t(62,"number"),e()(),i(63,"td")(64,"div",9),t(65," string | number "),e()(),i(66,"td")(67,"div",10),t(68," 'initial' "),e()()(),i(69,"tr")(70,"td"),t(71," suiHeight "),e(),i(72,"td"),t(73," Height of the shape while animating: the initial height, the next side's height or a pixel value. Allowed values are "),i(74,"span",11),t(75,"'initial'"),e(),t(76," | "),i(77,"span",11),t(78,"'next'"),e(),t(79," | "),i(80,"span",11),t(81,"number"),e()(),i(82,"td")(83,"div",9),t(84," string | number "),e()(),i(85,"td")(86,"div",10),t(87," 'initial' "),e()()(),i(88,"tr")(89,"td"),t(90," suiJitter "),e(),i(91,"td"),t(92," Pixels added to the stage size to avoid rounding issues "),e(),i(93,"td")(94,"div",9),t(95," number "),e()(),i(96,"td")(97,"div",10),t(98," 0 "),e()()(),i(99,"tr")(100,"td"),t(101," suiAllowRepeats "),e(),i(102,"td"),t(103," Allow flipping to the side that is already visible "),e(),i(104,"td")(105,"div",9),t(106," boolean "),e()(),i(107,"td")(108,"div",10),t(109," false "),e()()()()(),i(110,"h4",4),t(111,"Events"),e(),i(112,"table",8)(113,"thead")(114,"tr")(115,"th"),t(116,"Event"),e(),i(117,"th"),t(118,"Description"),e(),i(119,"th"),t(120,"Type"),e()()(),i(121,"tbody")(122,"tr")(123,"td"),t(124," suiBeforeChange "),e(),i(125,"td"),t(126," Emitted with the next side before the shape starts animating "),e(),i(127,"td")(128,"div",9),t(129," EventEmitter<SuiShapeSideComponent> "),e()()(),i(130,"tr")(131,"td"),t(132," suiOnChange "),e(),i(133,"td"),t(134," Emitted with the new active side once the animation completes "),e(),i(135,"td")(136,"div",9),t(137," EventEmitter<SuiShapeSideComponent> "),e()()()()(),i(138,"h4",4),t(139,"Methods"),e(),i(140,"table",8)(141,"thead")(142,"tr")(143,"th"),t(144,"Method"),e(),i(145,"th"),t(146,"Description"),e()()(),i(147,"tbody")(148,"tr")(149,"td"),t(150," flipUp() "),e(),i(151,"td"),t(152," Flips the shape upward "),e()(),i(153,"tr")(154,"td"),t(155," flipDown() "),e(),i(156,"td"),t(157," Flips the shape downward "),e()(),i(158,"tr")(159,"td"),t(160," flipLeft() "),e(),i(161,"td"),t(162," Flips the shape to the left "),e()(),i(163,"tr")(164,"td"),t(165," flipRight() "),e(),i(166,"td"),t(167," Flips the shape to the right "),e()(),i(168,"tr")(169,"td"),t(170," flipOver() "),e(),i(171,"td"),t(172," Flips the shape over clock-wise "),e()(),i(173,"tr")(174,"td"),t(175," flipBack() "),e(),i(176,"td"),t(177," Flips the shape back counter-clockwise "),e()(),i(178,"tr")(179,"td"),t(180," flip(behavior) "),e(),i(181,"td"),t(182," Runs a named flip such as "),i(183,"code"),t(184,"'flip up'"),e()()(),i(185,"tr")(186,"td"),t(187," setNextSide(selector) "),e(),i(188,"td"),t(189," Sets the side to show on the next flip "),e()(),i(190,"tr")(191,"td"),t(192," isAnimating() "),e(),i(193,"td"),t(194," Returns whether the shape is animating "),e()(),i(195,"tr")(196,"td"),t(197," reset() "),e(),i(198,"td"),t(199," Removes all inline animation styles "),e()(),i(200,"tr")(201,"td"),t(202," repaint() "),e(),i(203,"td"),t(204," Forces the browser to repaint the shape "),e()(),i(205,"tr")(206,"td"),t(207," refresh() "),e(),i(208,"td"),t(209," Re-reads the sides, e.g. after changing them "),e()()()()())}var Dl=(()=>{class n{constructor(o){this.snippetShape=cl,this.snippetCube=hl,this.snippetText=Sl,this.snippetNextSide=xl,this.snippetSettings=fl,o.setTitle("Shape | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-shape"]],standalone:!1,decls:3,vars:2,consts:[["header","Shape","subHeader","A shape is a three dimensional object displayed on a two dimensional plane","semanticUrl","https://semantic-ui.com/modules/shape.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[1,"shape-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Nh,48,5,"div",1)(2,Uh,210,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,re,El,bl,yl,Cl,wl],styles:["[_nghost-%COMP%]     .shape-demo .ui.shape .side>.ui.segment{width:15rem;margin:0}"]})}}return n})();var _l=`<div sui-menu
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
`;var Tl=`import { Component } from '@angular/core';
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
`;var Ml=`<sui-sidebar-container suiPushable
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
`;var Il=`<div sui-menu
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
`;var Pl=`import { Component } from '@angular/core';
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
`;var kl=`<div sui-buttons
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
`;var Fl=`import { Component } from '@angular/core';
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
`;var Al=`<div sui-buttons
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
`;var Vl=`import { Component } from '@angular/core';
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
`;var Bl=`<div sui-buttons
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
`;var Ll=`import { Component } from '@angular/core';
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
`;var Ol=`<sui-sidebar-container>
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
`;var Hl=`import { Component } from '@angular/core';
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
`;var je=class{constructor(){this.visible=!1,this.direction="left",this.animation="overlay",this.width=null}show(m,o="overlay"){this.direction=m,this.animation=o,this.visible=!0}get isVertical(){return this.direction==="left"||this.direction==="right"}},Rl=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-sidebar-example"]],standalone:!1,features:[x],decls:21,vars:1,consts:[["sui-menu","","suiAttached","top"],["suiMenuItem","",3,"click"],["sui-icon","","suiIconType","sidebar"],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiIcon","labeled icon","suiSidebarWidth","thin","suiSidebarAnimation","overlay",3,"visibleChange","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"a",1),f("click",function(){return s.visible=!s.visible}),r(2,"i",2),t(3," Menu "),e()(),i(4,"sui-sidebar-container",3)(5,"div",4),_("visibleChange",function(p){return D(s.visible,p)||(s.visible=p),p}),i(6,"a",5),r(7,"i",6),t(8," Home"),e(),i(9,"a",5),r(10,"i",7),t(11," Topics"),e(),i(12,"a",5),r(13,"i",8),t(14," Friends"),e()(),i(15,"sui-sidebar-pusher")(16,"div",9)(17,"h3",10),t(18,"Application Content"),e(),r(19,"doc-wireframe",11)(20,"doc-wireframe",11),e()()()),a&2&&(d(5),w("visible",s.visible))},dependencies:[N,b,g,F,Ke,Ze,$e,Fe,Ae],encapsulation:2})}}return n})(),Wl=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-visible-example"]],standalone:!1,features:[x],decls:17,vars:1,consts:[["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarWidth","thin",3,"visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"sui-sidebar-container",0)(1,"div",1)(2,"a",2),r(3,"i",3),t(4," Home"),e(),i(5,"a",2),r(6,"i",4),t(7," Topics"),e(),i(8,"a",2),r(9,"i",5),t(10," Friends"),e()(),i(11,"sui-sidebar-pusher")(12,"div",6)(13,"h3",7),t(14,"Application Content"),e(),r(15,"doc-wireframe",8)(16,"doc-wireframe",8),e()()()),a&2&&(d(),l("visible",!0))},dependencies:[N,b,g,F,Ke,Ze,$e,Fe,Ae],encapsulation:2})}}return n})(),zl=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-dimmed-example"]],standalone:!1,features:[x],decls:21,vars:1,consts:[["sui-menu","","suiAttached","top"],["suiMenuItem","",3,"click"],["sui-icon","","suiIconType","sidebar"],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarAnimation","overlay",3,"visibleChange","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["suiDimmable",""],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"a",1),f("click",function(){return s.visible=!s.visible}),r(2,"i",2),t(3," Menu "),e()(),i(4,"sui-sidebar-container",3)(5,"div",4),_("visibleChange",function(p){return D(s.visible,p)||(s.visible=p),p}),i(6,"a",5),r(7,"i",6),t(8," Home"),e(),i(9,"a",5),r(10,"i",7),t(11," Topics"),e(),i(12,"a",5),r(13,"i",8),t(14," Friends"),e()(),i(15,"sui-sidebar-pusher",9)(16,"div",10)(17,"h3",11),t(18,"Application Content"),e(),r(19,"doc-wireframe",12)(20,"doc-wireframe",12),e()()()),a&2&&(d(5),w("visible",s.visible))},dependencies:[N,b,g,F,Ke,Ze,$e,Fe,Ae],encapsulation:2})}}return n})(),jl=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-direction-example"]],standalone:!1,features:[x],decls:27,vars:3,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiSidebarAnimation","overlay",3,"visibleChange","suiVertical","suiSidebarPosition","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),f("click",function(){return s.show("left")}),t(2,"Left"),e(),i(3,"button",1),f("click",function(){return s.show("right")}),t(4,"Right"),e(),i(5,"button",1),f("click",function(){return s.show("top")}),t(6,"Top"),e(),i(7,"button",1),f("click",function(){return s.show("bottom")}),t(8,"Bottom"),e()(),r(9,"div",2),i(10,"sui-sidebar-container",3)(11,"div",4),_("visibleChange",function(p){return D(s.visible,p)||(s.visible=p),p}),i(12,"a",5),r(13,"i",6),t(14," Home"),e(),i(15,"a",5),r(16,"i",7),t(17," Topics"),e(),i(18,"a",5),r(19,"i",8),t(20," Friends"),e()(),i(21,"sui-sidebar-pusher")(22,"div",9)(23,"h3",10),t(24,"Application Content"),e(),r(25,"doc-wireframe",11)(26,"doc-wireframe",11),e()()()),a&2&&(d(11),l("suiVertical",s.isVertical)("suiSidebarPosition",s.direction),w("visible",s.visible))},dependencies:[N,b,T,le,g,ye,F,Ke,Ze,$e,Fe,Ae],encapsulation:2})}}return n})(),Nl=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-width-example"]],standalone:!1,features:[x],decls:29,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarAnimation","overlay",3,"visibleChange","suiSidebarWidth","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),f("click",function(){return s.width="very thin",s.visible=!0}),t(2,"Very Thin"),e(),i(3,"button",1),f("click",function(){return s.width="thin",s.visible=!0}),t(4,"Thin"),e(),i(5,"button",1),f("click",function(){return s.width=null,s.visible=!0}),t(6,"Default"),e(),i(7,"button",1),f("click",function(){return s.width="wide",s.visible=!0}),t(8,"Wide"),e(),i(9,"button",1),f("click",function(){return s.width="very wide",s.visible=!0}),t(10,"Very Wide"),e()(),r(11,"div",2),i(12,"sui-sidebar-container",3)(13,"div",4),_("visibleChange",function(p){return D(s.visible,p)||(s.visible=p),p}),i(14,"a",5),r(15,"i",6),t(16," Home"),e(),i(17,"a",5),r(18,"i",7),t(19," Topics"),e(),i(20,"a",5),r(21,"i",8),t(22," Friends"),e()(),i(23,"sui-sidebar-pusher")(24,"div",9)(25,"h3",10),t(26,"Application Content"),e(),r(27,"doc-wireframe",11)(28,"doc-wireframe",11),e()()()),a&2&&(d(13),l("suiSidebarWidth",s.width),w("visible",s.visible))},dependencies:[N,b,T,le,g,ye,F,Ke,Ze,$e,Fe,Ae],encapsulation:2})}}return n})(),Ul=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-transitions-example"]],standalone:!1,features:[x],decls:31,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarWidth","thin",3,"visibleChange","suiSidebarAnimation","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),f("click",function(){return s.show("left","overlay")}),t(2,"Overlay"),e(),i(3,"button",1),f("click",function(){return s.show("left","push")}),t(4,"Push"),e(),i(5,"button",1),f("click",function(){return s.show("left","scale down")}),t(6,"Scale Down"),e(),i(7,"button",1),f("click",function(){return s.show("left","uncover")}),t(8,"Uncover"),e(),i(9,"button",1),f("click",function(){return s.show("left","slide along")}),t(10,"Slide Along"),e(),i(11,"button",1),f("click",function(){return s.show("left","slide out")}),t(12,"Slide Out"),e()(),r(13,"div",2),i(14,"sui-sidebar-container",3)(15,"div",4),_("visibleChange",function(p){return D(s.visible,p)||(s.visible=p),p}),i(16,"a",5),r(17,"i",6),t(18," Home"),e(),i(19,"a",5),r(20,"i",7),t(21," Topics"),e(),i(22,"a",5),r(23,"i",8),t(24," Friends"),e()(),i(25,"sui-sidebar-pusher")(26,"div",9)(27,"h3",10),t(28,"Application Content"),e(),r(29,"doc-wireframe",11)(30,"doc-wireframe",11),e()()()),a&2&&(d(15),l("suiSidebarAnimation",s.animation),w("visible",s.visible))},dependencies:[N,b,T,le,g,ye,F,Ke,Ze,$e,Fe,Ae],encapsulation:2})}}return n})(),Gl=(()=>{class n extends je{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar-page-example"]],standalone:!1,features:[x],decls:9,vars:1,consts:[["sui-sidebar","","sui-menu","","suiVertical","","suiInverted","",3,"visibleChange","visible"],["suiMenuItem",""],["sui-button","",3,"click"]],template:function(a,s){a&1&&(i(0,"sui-sidebar-container")(1,"div",0),_("visibleChange",function(p){return D(s.visible,p)||(s.visible=p),p}),i(2,"a",1),t(3,"Item 1"),e(),i(4,"a",1),t(5,"Item 2"),e()(),i(6,"sui-sidebar-pusher")(7,"button",2),f("click",function(){return s.visible=!s.visible}),t(8,"Toggle Sidebar"),e()()()),a&2&&(d(),w("visible",s.visible))},dependencies:[T,Ke,Ze,$e,Fe,Ae],encapsulation:2})}}return n})();function a1(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-sidebar-example"),e())}function s1(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-visible-example"),e())}function r1(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-dimmed-example"),e())}function l1(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-direction-example"),e())}function d1(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-width-example"),e())}function m1(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-transitions-example"),e())}function p1(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-page-example"),e())}function u1(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Sidebar"),e(),i(6,"p"),t(7,"A sidebar, usually an inverted vertical menu"),e(),i(8,"div",5),t(9," Bind "),i(10,"code"),t(11,"[(visible)]"),e(),t(12," to show and hide the sidebar. When it is two-way bound, clicking the page content hides the sidebar. "),e(),h(13,a1,2,0,"ng-template",6),e(),r(14,"br"),i(15,"h2",2),t(16,"States"),e(),i(17,"doc-code-sample",7)(18,"h3",4),t(19,"Visible"),e(),i(20,"p"),t(21,"A sidebar can be visible on the page"),e(),i(22,"div",5),t(23," A sidebar that is not two-way bound stays visible when the page is clicked. "),e(),h(24,s1,2,0,"ng-template",6),e(),i(25,"doc-code-sample",3)(26,"h3",4),t(27,"Dimmed"),e(),i(28,"p"),t(29,"A pusher can be dimmed while the sidebar is visible"),e(),h(30,r1,2,0,"ng-template",6),e(),r(31,"br"),i(32,"h2",2),t(33,"Variations"),e(),i(34,"doc-code-sample",3)(35,"h3",4),t(36,"Direction"),e(),i(37,"p"),t(38,"A sidebar can appear on different sides of the page"),e(),i(39,"div",5),t(40," Top and bottom sidebars should be horizontal menus, so "),i(41,"code"),t(42,"suiVertical"),e(),t(43," is only set for left and right sidebars. "),e(),h(44,l1,2,0,"ng-template",6),e(),i(45,"doc-code-sample",3)(46,"h3",4),t(47,"Width"),e(),i(48,"p"),t(49,"A sidebar can specify its width"),e(),h(50,d1,2,0,"ng-template",6),e(),i(51,"doc-code-sample",3)(52,"h3",4),t(53,"Transitions"),e(),i(54,"p"),t(55,"A sidebar can use different transitions to appear"),e(),i(56,"div",8)(57,"code"),t(58,"uncover"),e(),t(59,", "),i(60,"code"),t(61,"slide along"),e(),t(62," and "),i(63,"code"),t(64,"slide out"),e(),t(65," only support left and right sidebars. "),e(),h(66,m1,2,0,"ng-template",6),e(),r(67,"br"),i(68,"h2",2),t(69,"Usage"),e(),i(70,"doc-code-sample",3)(71,"h3",4),t(72,"Page Structure"),e(),i(73,"p"),t(74,"A sidebar requires a container with a sidebar and a pusher holding the page content"),e(),i(75,"div",5),t(76," Without "),i(77,"code"),t(78,"suiPushable"),e(),t(79," the page body is the context and the sidebar is fixed to the viewport. Add "),i(80,"code"),t(81,"suiPushable"),e(),t(82," to keep the sidebar inside the container, as in the examples above. "),e(),i(83,"div",8),t(84," A pushable container cannot have padding. "),e(),h(85,p1,2,0,"ng-template",6),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetSidebar)("componentCode",o.snippetSidebarTs),d(14),l("templateCode",o.snippetVisible),d(8),l("templateCode",o.snippetDimmed)("componentCode",o.snippetDimmedTs),d(9),l("templateCode",o.snippetDirection)("componentCode",o.snippetDirectionTs),d(11),l("templateCode",o.snippetWidth)("componentCode",o.snippetWidthTs),d(6),l("templateCode",o.snippetTransitions)("componentCode",o.snippetTransitionsTs),d(19),l("templateCode",o.snippetPage)("componentCode",o.snippetPageTs)}}function c1(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"sui-sidebar-container"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",10)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19," suiPushable "),e(),i(20,"td"),t(21," Make the container the sidebar's context instead of the page. Always applied when the pusher is dimmable "),e(),i(22,"td")(23,"div",11),t(24," boolean "),e()(),i(25,"td")(26,"div",12),t(27," false "),e()()()()(),i(28,"h2",2),t(29,"sui-sidebar"),e(),i(30,"h4",4),t(31,"Properties"),e(),i(32,"table",10)(33,"thead")(34,"tr")(35,"th"),t(36,"Property"),e(),i(37,"th"),t(38,"Description"),e(),i(39,"th"),t(40,"Type"),e(),i(41,"th"),t(42,"Default"),e()()(),i(43,"tbody")(44,"tr")(45,"td"),t(46," visible "),e(),i(47,"td"),t(48," Whether the sidebar is shown. Supports two-way binding with "),i(49,"code"),t(50,"[(visible)]"),e()(),i(51,"td")(52,"div",11),t(53," boolean "),e()(),i(54,"td")(55,"div",12),t(56," true "),e()()(),i(57,"tr")(58,"td"),t(59," suiSidebarPosition "),e(),i(60,"td"),t(61," The side of the page the sidebar appears on. Allowed values are "),i(62,"span",13),t(63,"'left'"),e(),t(64," | "),i(65,"span",13),t(66,"'right'"),e(),t(67," | "),i(68,"span",13),t(69,"'top'"),e(),t(70," | "),i(71,"span",13),t(72,"'bottom'"),e()(),i(73,"td")(74,"div",11),t(75," string "),e()(),i(76,"td")(77,"div",12),t(78," 'left' "),e()()(),i(79,"tr")(80,"td"),t(81," suiSidebarWidth "),e(),i(82,"td"),t(83," Set the width of the sidebar. Allowed values are "),i(84,"span",13),t(85,"'very thin'"),e(),t(86," | "),i(87,"span",13),t(88,"'thin'"),e(),t(89," | "),i(90,"span",13),t(91,"'wide'"),e(),t(92," | "),i(93,"span",13),t(94,"'very wide'"),e(),t(95," | "),i(96,"span",13),t(97,"null"),e()(),i(98,"td")(99,"div",11),t(100," string "),e()(),i(101,"td")(102,"div",12),t(103," null "),e()()(),i(104,"tr")(105,"td"),t(106," suiSidebarAnimation "),e(),i(107,"td"),t(108," Set the transition used to show the sidebar. Allowed values are "),i(109,"span",13),t(110,"'overlay'"),e(),t(111," | "),i(112,"span",13),t(113,"'push'"),e(),t(114," | "),i(115,"span",13),t(116,"'scale down'"),e(),t(117," | "),i(118,"span",13),t(119,"'uncover'"),e(),t(120," | "),i(121,"span",13),t(122,"'slide along'"),e(),t(123," | "),i(124,"span",13),t(125,"'slide out'"),e(),t(126," | "),i(127,"span",13),t(128,"null"),e()(),i(129,"td")(130,"div",11),t(131," string "),e()(),i(132,"td")(133,"div",12),t(134," null "),e()()(),i(135,"tr")(136,"td"),t(137," suiInverted "),e(),i(138,"td"),t(139," Invert the colours of the sidebar "),e(),i(140,"td")(141,"div",11),t(142," boolean "),e()(),i(143,"td")(144,"div",12),t(145," false "),e()()(),i(146,"tr")(147,"td"),t(148," suiClosable "),e(),i(149,"td"),t(150," Hide a two-way bound sidebar when the pusher is clicked "),e(),i(151,"td")(152,"div",11),t(153," boolean "),e()(),i(154,"td")(155,"div",12),t(156," true "),e()()()()(),i(157,"h4",4),t(158,"Events"),e(),i(159,"table",10)(160,"thead")(161,"tr")(162,"th"),t(163,"Event"),e(),i(164,"th"),t(165,"Description"),e(),i(166,"th"),t(167,"Type"),e()()(),i(168,"tbody")(169,"tr")(170,"td"),t(171," visibleChange "),e(),i(172,"td"),t(173," Emitted when the sidebar is shown or hidden "),e(),i(174,"td")(175,"div",11),t(176," EventEmitter<boolean> "),e()()()()(),i(177,"h4",4),t(178,"Methods"),e(),i(179,"table",10)(180,"thead")(181,"tr")(182,"th"),t(183,"Method"),e(),i(184,"th"),t(185,"Description"),e()()(),i(186,"tbody")(187,"tr")(188,"td"),t(189," show() "),e(),i(190,"td"),t(191," Shows the sidebar "),e()(),i(192,"tr")(193,"td"),t(194," hide() "),e(),i(195,"td"),t(196," Hides the sidebar "),e()(),i(197,"tr")(198,"td"),t(199," toggle() "),e(),i(200,"td"),t(201," Toggles the visibility of the sidebar "),e()()()(),i(202,"h2",2),t(203,"sui-sidebar-pusher"),e(),i(204,"h4",4),t(205,"Properties"),e(),i(206,"table",10)(207,"thead")(208,"tr")(209,"th"),t(210,"Property"),e(),i(211,"th"),t(212,"Description"),e(),i(213,"th"),t(214,"Type"),e(),i(215,"th"),t(216,"Default"),e()()(),i(217,"tbody")(218,"tr")(219,"td"),t(220," suiDimmable "),e(),i(221,"td"),t(222," Dim the page content while the sidebar is visible "),e(),i(223,"td")(224,"div",11),t(225," boolean "),e()(),i(226,"td")(227,"div",12),t(228," false "),e()()()()()())}var Yl=(()=>{class n{constructor(o){this.snippetSidebar=_l,this.snippetSidebarTs=Tl,this.snippetVisible=Ml,this.snippetDimmed=Il,this.snippetDimmedTs=Pl,this.snippetDirection=kl,this.snippetDirectionTs=Fl,this.snippetWidth=Al,this.snippetWidthTs=Vl,this.snippetTransitions=Bl,this.snippetTransitionsTs=Ll,this.snippetPage=Ol,this.snippetPageTs=Hl,o.setTitle("Sidebar | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-sidebar"]],standalone:!1,decls:3,vars:2,consts:[["header","Sidebar","subHeader","A sidebar hides additional content beside a page","semanticUrl","https://semantic-ui.com/modules/sidebar.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[3,"templateCode"],["sui-message","","suiState","warning"],[1,"sidebar-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,u1,86,13,"div",1)(2,c1,229,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,re,Rl,Wl,zl,jl,Nl,Ul,Gl],styles:["[_nghost-%COMP%]     .sidebar-demo sui-sidebar-container.ui.segment{height:22rem;margin-top:0}"]})}}return n})();var Jl=`<div sui-segment
     #context>
  <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-rail
       suiLocation="right"
       suiInternal>
    <div sui-segment
         suiSticky
         [suiContext]="context">
      <h3 sui-header>Stuck Content</h3>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Xl=`<div sui-segment
     #context>
  <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-rail
       suiLocation="right"
       suiInternal>
    <div sui-segment
         suiSticky
         [suiContext]="context"
         suiPushing>
      <h3 sui-header>Stuck Content</h3>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var ql=`<div sui-segment
     #context>
  <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-rail
       suiLocation="right"
       suiInternal>
    <div sui-segment
         suiSticky
         [suiContext]="context"
         [suiOffset]="50">
      <h3 sui-header>Stuck Content</h3>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Kl=`<div sui-segment
     #context>
  <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-rail
       suiLocation="right"
       suiInternal>
    <div sui-segment
         suiSticky
         [suiContext]="context"
         (suiOnStick)="stuck = true"
         (suiOnUnstick)="stuck = false">
      <h3 sui-header>{{ stuck ? 'Stuck' : 'Not stuck' }}</h3>
    </div>
  </div>
</div>
`;var Zl=`<div class="sticky-scroll"
     id="sticky-scroll-example">
  <div sui-segment
       #context>
    <div class="sticky-content">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div sui-rail
         suiLocation="right"
         suiInternal>
      <div sui-segment
           suiSticky
           suiScrollContext="#sticky-scroll-example"
           [suiContext]="context">
        <h3 sui-header>Stuck Content</h3>
      </div>
    </div>
  </div>
</div>
`;var Ct=(()=>{class n{constructor(){this.document=Z(Mt),this.el=Z(Pt),this.renderer=Z(kt),this.zone=Z(It),this.cdr=Z(Xe),this.suiContext=null,this.suiScrollContext="window",this.suiOffset=0,this.suiBottomOffset=0,this.suiPushing=!1,this.suiSetSize=!0,this.suiJitter=5,this.suiObserveChanges=!1,this.suiOnReposition=new $,this.suiOnScroll=new $,this.suiOnStick=new $,this.suiOnUnstick=new $,this.suiOnTop=new $,this.suiOnBottom=new $,this.cache=null,this.classUi=!0,this.classSticky=!0,this.fixed=!1,this.bound=!1,this.topState=!1,this.bottomState=!1,this.destroy$=new Qt,this.elementScroll=0,this.scrollEl=window,this.contextEl=null,this.containerEl=null,this.mutationObserver=null,this.refreshTimer=null}ngOnInit(){this.scrollEl=this.resolveScrollElement();let o=this.document.defaultView;this.zone.runOutsideAngular(()=>{let a=this.scrollEl===window?o:this.scrollEl;Nt(a,"scroll",{passive:!0}).pipe(Ut(this.destroy$)).subscribe(()=>{requestAnimationFrame(()=>{let s=this.readScrollTop();this.zone.run(()=>{this.stick(s),this.suiOnScroll.emit()})})}),Nt(o,"resize",{passive:!0}).pipe(Ut(this.destroy$)).subscribe(()=>{requestAnimationFrame(()=>this.zone.run(()=>this.refresh(!1)))})})}ngAfterViewInit(){queueMicrotask(()=>this.refresh(!0))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.mutationObserver?.disconnect(),this.refreshTimer&&clearTimeout(this.refreshTimer),this.reset()}refresh(o=!1){this.resetLayout(),this.determineContainer(),this.determineContext(),this.contextEl&&(o&&this.determineContainer(),this.savePositions(),this.suiOnReposition.emit(),this.cdr.markForCheck(),this.suiObserveChanges&&typeof MutationObserver<"u"&&!this.mutationObserver&&(this.mutationObserver=new MutationObserver(()=>this.scheduleRefresh()),this.mutationObserver.observe(this.contextEl,{childList:!0,subtree:!0}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,subtree:!0})))}scheduleRefresh(){this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.refreshTimer=null,this.refresh(!1)},100)}resolveScrollElement(){return this.suiScrollContext==="window"?window:this.document.querySelector(this.suiScrollContext)||window}readScrollTop(){return this.scrollEl===window?window.scrollY:this.scrollEl.scrollTop}determineContainer(){let o=this.el.nativeElement;this.containerEl=o.offsetParent||o.parentElement}determineContext(){if(this.suiContext===null){this.contextEl=this.containerEl;return}if(typeof this.suiContext=="string"){this.contextEl=this.document.querySelector(this.suiContext);return}this.contextEl=this.suiContext}savePositions(){let o=this.el.nativeElement,a=this.contextEl,s=this.scrollEl===window?window.innerHeight:this.scrollEl.clientHeight,c=getComputedStyle(o),p=parseInt(c.marginTop,10)||0,v=parseInt(c.marginBottom,10)||0,te=this.scrollEl===window?null:this.scrollEl,sd=te?te.getBoundingClientRect().top:0,qt=te?te.scrollTop-sd:window.scrollY,rd=window.scrollX,Kt=o.getBoundingClientRect(),ld=a.getBoundingClientRect(),Zt=Kt.top+qt,$t=ld.top+qt,dd=Kt.left+rd,Tt=o.offsetHeight,jt=a.offsetHeight,md=Zt-p,pd=$t+jt;if(this.cache={fits:Tt+this.suiOffset<=s,sameHeight:Tt===jt,scrollContext:{height:s},element:{margin:{top:p,bottom:v},top:md,left:dd,width:o.offsetWidth,height:Tt,bottom:Zt+Tt},context:{top:$t,height:jt,bottom:pd}},this.setContainerSize(),!this.isCacheValid()){this.cache=null,this.resetLayout();return}this.stick(this.readScrollTop())}isCacheValid(){if(!this.cache)return!1;let o=getComputedStyle(this.el.nativeElement);return o.display==="none"||o.visibility==="hidden"?!1:this.cache.element.height<=this.cache.context.height}setContainerSize(){if(!this.cache||!this.containerEl)return;let o=this.containerEl.tagName;if(o==="HTML"||o==="BODY")return;let a=this.containerEl.offsetHeight,s=this.cache.context.height;Math.abs(a-s)>this.suiJitter&&this.renderer.setStyle(this.containerEl,"height",`${s}px`)}stick(o){let a=this.cache;if(!a||a.sameHeight)return;let s=this.bottomState&&this.suiPushing?this.suiBottomOffset:this.suiOffset,c={top:o+s,bottom:o+s+a.scrollContext.height},p=a.element,v=a.context,te=a.fits?0:this.computeElementScroll(o);this.isInitialPosition()?c.top>=v.bottom?this.bindBottom():c.top>p.top&&(p.height+c.top-te>=v.bottom?this.bindBottom():this.fixTop()):this.fixed?this.topState?c.top<=p.top?this.setInitialPosition():p.height+c.top-te>=v.bottom?this.bindBottom():a.fits||(this.applyElementScroll(te),this.lastScroll=c.top):this.bottomState&&(c.bottom-p.height<=p.top?this.setInitialPosition():c.bottom>=v.bottom?this.bindBottom():a.fits||(this.applyElementScroll(te),this.lastScroll=c.top)):this.bound&&this.bottomState&&(c.top<=p.top?this.setInitialPosition():this.suiPushing?this.bound&&c.bottom<=v.bottom&&this.fixBottom():this.bound&&c.top<=v.bottom-p.height&&this.fixTop()),this.lastScroll=o,this.cdr.markForCheck()}isInitialPosition(){return!this.fixed&&!this.bound}computeElementScroll(o){let a=this.cache,s=this.lastScroll===void 0?0:o-this.lastScroll,c=a.element.height-a.scrollContext.height+this.suiOffset,p=this.elementScroll;this.topState?p=Math.abs(parseInt(this.el.nativeElement.style.top||"0",10))||0:this.bottomState&&(p=Math.abs(parseInt(this.el.nativeElement.style.bottom||"0",10))||0);let v=p+s;return a.fits||v<0?0:v>c?c:v}applyElementScroll(o){this.elementScroll=o,this.topState&&(this.renderer.setStyle(this.el.nativeElement,"bottom",""),this.renderer.setStyle(this.el.nativeElement,"top",`${-o}px`)),this.bottomState&&(this.renderer.setStyle(this.el.nativeElement,"top",""),this.renderer.setStyle(this.el.nativeElement,"bottom",`${o}px`))}bindBottom(){this.unfix(),this.unbind(),this.clearPositionStyles(),this.renderer.removeStyle(this.el.nativeElement,"margin-top"),this.fixed=!1,this.bound=!0,this.topState=!1,this.bottomState=!0,this.suiOnBottom.emit(),this.suiOnUnstick.emit()}fixTop(){this.unfix(),this.unbind();let o=this.cache;this.suiSetSize&&(this.renderer.setStyle(this.el.nativeElement,"width",`${o.element.width}px`,2),this.renderer.setStyle(this.el.nativeElement,"height",`${o.element.height}px`,2)),this.containerEl&&this.renderer.setStyle(this.containerEl,"min-height",`${o.element.height}px`),this.renderer.setStyle(this.el.nativeElement,"margin-top",`${this.suiOffset}px`),this.renderer.setStyle(this.el.nativeElement,"left",`${o.element.left}px`),this.renderer.setStyle(this.el.nativeElement,"bottom",""),this.renderer.setStyle(this.el.nativeElement,"margin-bottom",""),this.scrollEl!==window&&this.renderer.setStyle(this.el.nativeElement,"top",`${this.scrollEl.getBoundingClientRect().top}px`),this.fixed=!0,this.bound=!1,this.topState=!0,this.bottomState=!1,this.suiOnStick.emit()}fixBottom(){this.unfix(),this.unbind();let o=this.cache;if(this.suiSetSize&&(this.renderer.setStyle(this.el.nativeElement,"width",`${o.element.width}px`,2),this.renderer.setStyle(this.el.nativeElement,"height",`${o.element.height}px`,2)),this.containerEl&&this.renderer.setStyle(this.containerEl,"min-height",`${o.element.height}px`),this.renderer.setStyle(this.el.nativeElement,"margin-top",`${this.suiOffset}px`),this.renderer.setStyle(this.el.nativeElement,"left",`${o.element.left}px`),this.scrollEl!==window){let a=window.innerHeight-this.scrollEl.getBoundingClientRect().bottom;this.renderer.setStyle(this.el.nativeElement,"bottom",`${a}px`)}this.fixed=!0,this.bound=!1,this.topState=!1,this.bottomState=!0,this.suiOnStick.emit()}setInitialPosition(){let o=this.fixed||this.bound;this.unfix(),this.unbind(),this.lastScroll=void 0,this.elementScroll=0,o&&(this.suiOnTop.emit(),this.suiOnUnstick.emit())}unbind(){this.bound&&(this.bound=!1,this.topState=!1,this.bottomState=!1)}unfix(){this.fixed&&(this.containerEl&&this.renderer.removeStyle(this.containerEl,"min-height"),this.renderer.removeStyle(this.el.nativeElement,"margin-top"),this.renderer.removeStyle(this.el.nativeElement,"left"),this.renderer.removeStyle(this.el.nativeElement,"width"),this.renderer.removeStyle(this.el.nativeElement,"height"),this.renderer.removeStyle(this.el.nativeElement,"top"),this.renderer.removeStyle(this.el.nativeElement,"bottom"),this.fixed=!1,this.topState=!1,this.bottomState=!1)}clearPositionStyles(){this.renderer.removeStyle(this.el.nativeElement,"left"),this.renderer.removeStyle(this.el.nativeElement,"top"),this.renderer.removeStyle(this.el.nativeElement,"bottom"),this.renderer.removeStyle(this.el.nativeElement,"margin-bottom")}resetLayout(){this.unfix(),this.unbind(),this.clearPositionStyles(),this.renderer.removeStyle(this.el.nativeElement,"margin-top"),this.containerEl&&(this.renderer.removeStyle(this.containerEl,"height"),this.renderer.removeStyle(this.containerEl,"min-height")),this.renderer.removeStyle(this.el.nativeElement,"width"),this.renderer.removeStyle(this.el.nativeElement,"height"),this.fixed=!1,this.bound=!1,this.topState=!1,this.bottomState=!1}reset(){this.resetLayout(),this.cache=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=pt({type:n,selectors:[["","suiSticky",""]],hostVars:12,hostBindings:function(a,s){a&2&&ue("ui",s.classUi)("sticky",s.classSticky)("fixed",s.fixed)("bound",s.bound)("top",s.topState)("bottom",s.bottomState)},inputs:{suiContext:"suiContext",suiScrollContext:"suiScrollContext",suiOffset:"suiOffset",suiBottomOffset:"suiBottomOffset",suiPushing:"suiPushing",suiSetSize:"suiSetSize",suiJitter:"suiJitter",suiObserveChanges:"suiObserveChanges"},outputs:{suiOnReposition:"suiOnReposition",suiOnScroll:"suiOnScroll",suiOnStick:"suiOnStick",suiOnUnstick:"suiOnUnstick",suiOnTop:"suiOnTop",suiOnBottom:"suiOnBottom"},exportAs:["suiSticky"]})}}return M([I()],n.prototype,"suiPushing",void 0),M([I()],n.prototype,"suiSetSize",void 0),M([I()],n.prototype,"suiObserveChanges",void 0),n})(),$l=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[J]})}}return n})();var mt=class{constructor(){this.stuck=!1}},Ql=(()=>{class n extends mt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sticky-sticky-example"]],standalone:!1,features:[x],decls:16,vars:1,consts:[["context",""],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","",3,"suiContext"],["sui-header",""],["type","image"]],template:function(a,s){if(a&1&&(i(0,"div",1,0)(2,"div",2),r(3,"doc-wireframe",3)(4,"doc-wireframe",3)(5,"doc-wireframe",3)(6,"doc-wireframe",3)(7,"doc-wireframe",3)(8,"doc-wireframe",3)(9,"doc-wireframe",3)(10,"doc-wireframe",3),e(),i(11,"div",4)(12,"div",5)(13,"h3",6),t(14,"Stuck Content"),e(),r(15,"doc-wireframe",7),e()()()),a&2){let c=k(1);d(12),l("suiContext",c)}},dependencies:[N,b,F,Ct,ht],encapsulation:2})}}return n})(),ed=(()=>{class n extends mt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sticky-pushing-example"]],standalone:!1,features:[x],decls:16,vars:1,consts:[["context",""],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","","suiPushing","",3,"suiContext"],["sui-header",""],["type","image"]],template:function(a,s){if(a&1&&(i(0,"div",1,0)(2,"div",2),r(3,"doc-wireframe",3)(4,"doc-wireframe",3)(5,"doc-wireframe",3)(6,"doc-wireframe",3)(7,"doc-wireframe",3)(8,"doc-wireframe",3)(9,"doc-wireframe",3)(10,"doc-wireframe",3),e(),i(11,"div",4)(12,"div",5)(13,"h3",6),t(14,"Stuck Content"),e(),r(15,"doc-wireframe",7),e()()()),a&2){let c=k(1);d(12),l("suiContext",c)}},dependencies:[N,b,F,Ct,ht],encapsulation:2})}}return n})(),td=(()=>{class n extends mt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sticky-offset-example"]],standalone:!1,features:[x],decls:16,vars:2,consts:[["context",""],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","",3,"suiContext","suiOffset"],["sui-header",""],["type","image"]],template:function(a,s){if(a&1&&(i(0,"div",1,0)(2,"div",2),r(3,"doc-wireframe",3)(4,"doc-wireframe",3)(5,"doc-wireframe",3)(6,"doc-wireframe",3)(7,"doc-wireframe",3)(8,"doc-wireframe",3)(9,"doc-wireframe",3)(10,"doc-wireframe",3),e(),i(11,"div",4)(12,"div",5)(13,"h3",6),t(14,"Stuck Content"),e(),r(15,"doc-wireframe",7),e()()()),a&2){let c=k(1);d(12),l("suiContext",c)("suiOffset",50)}},dependencies:[N,b,F,Ct,ht],encapsulation:2})}}return n})(),id=(()=>{class n extends mt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sticky-events-example"]],standalone:!1,features:[x],decls:15,vars:2,consts:[["context",""],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","",3,"suiOnStick","suiOnUnstick","suiContext"],["sui-header",""]],template:function(a,s){if(a&1&&(i(0,"div",1,0)(2,"div",2),r(3,"doc-wireframe",3)(4,"doc-wireframe",3)(5,"doc-wireframe",3)(6,"doc-wireframe",3)(7,"doc-wireframe",3)(8,"doc-wireframe",3)(9,"doc-wireframe",3)(10,"doc-wireframe",3),e(),i(11,"div",4)(12,"div",5),f("suiOnStick",function(){return s.stuck=!0})("suiOnUnstick",function(){return s.stuck=!1}),i(13,"h3",6),t(14),e()()()()),a&2){let c=k(1);d(12),l("suiContext",c),d(2),nt(s.stuck?"Stuck":"Not stuck")}},dependencies:[N,b,F,Ct,ht],encapsulation:2})}}return n})(),nd=(()=>{class n extends mt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=S(n)))(s||n)}})()}static{this.\u0275cmp=u({type:n,selectors:[["doc-sticky-scroll-context-example"]],standalone:!1,features:[x],decls:16,vars:1,consts:[["context",""],["id","sticky-scroll-example",1,"sticky-scroll"],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","","suiScrollContext","#sticky-scroll-example",3,"suiContext"],["sui-header",""]],template:function(a,s){if(a&1&&(i(0,"div",1)(1,"div",2,0)(3,"div",3),r(4,"doc-wireframe",4)(5,"doc-wireframe",4)(6,"doc-wireframe",4)(7,"doc-wireframe",4)(8,"doc-wireframe",4)(9,"doc-wireframe",4)(10,"doc-wireframe",4)(11,"doc-wireframe",4),e(),i(12,"div",5)(13,"div",6)(14,"h3",7),t(15,"Stuck Content"),e()()()()()),a&2){let c=k(2);d(13),l("suiContext",c)}},dependencies:[N,b,F,Ct,ht],encapsulation:2})}}return n})();function b1(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-sticky-example"),e())}function y1(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-pushing-example"),e())}function C1(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-offset-example"),e())}function w1(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-events-example"),e())}function D1(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-scroll-context-example"),e())}function _1(n,m){if(n&1&&(i(0,"div")(1,"h2",2),t(2,"Types"),e(),i(3,"doc-code-sample",3)(4,"h3",4),t(5,"Sticky"),e(),i(6,"p"),t(7,"Sticky content stays fixed to the viewport while its context is visible"),e(),i(8,"div",5),t(9," Scroll the page to see the content stick. A sticky is usually placed in a "),i(10,"code"),t(11,"rail"),e(),t(12,", and its "),i(13,"code"),t(14,"suiContext"),e(),t(15," is the element whose bounds it stays within. "),e(),h(16,b1,2,0,"ng-template",6),e(),r(17,"br"),i(18,"h2",2),t(19,"Variations"),e(),i(20,"doc-code-sample",3)(21,"h3",4),t(22,"Pushing"),e(),i(23,"p"),t(24,"Sticky content can push the page up when you scroll back, instead of returning to its original position straight away"),e(),h(25,y1,2,0,"ng-template",6),e(),i(26,"doc-code-sample",3)(27,"h3",4),t(28,"Offset"),e(),i(29,"p"),t(30,"Sticky content can be offset from the top of the viewport, for example to sit below a fixed menu"),e(),h(31,C1,2,0,"ng-template",6),e(),i(32,"doc-code-sample",3)(33,"h3",4),t(34,"Events"),e(),i(35,"p"),t(36,"A sticky element reports when it sticks and unsticks"),e(),h(37,w1,2,0,"ng-template",6),e(),i(38,"doc-code-sample",3)(39,"h3",4),t(40,"Scroll Context"),e(),i(41,"p"),t(42,"A sticky can stick inside a scrolling element instead of the page"),e(),i(43,"div",5)(44,"code"),t(45,"suiScrollContext"),e(),t(46," takes a CSS selector for the scrolling element. "),e(),h(47,D1,2,0,"ng-template",6),e()()),n&2){let o=E();d(3),l("templateCode",o.snippetSticky),d(17),l("templateCode",o.snippetPushing),d(6),l("templateCode",o.snippetOffset),d(6),l("templateCode",o.snippetEvents),d(6),l("templateCode",o.snippetScrollContext)}}function T1(n,m){n&1&&(i(0,"div")(1,"h2",2),t(2,"suiSticky"),e(),i(3,"h4",4),t(4,"Properties"),e(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),t(9,"Property"),e(),i(10,"th"),t(11,"Description"),e(),i(12,"th"),t(13,"Type"),e(),i(14,"th"),t(15,"Default"),e()()(),i(16,"tbody")(17,"tr")(18,"td"),t(19," suiContext "),e(),i(20,"td"),t(21," The element (or CSS selector) the sticky stays within. Defaults to the sticky's offset parent "),e(),i(22,"td")(23,"div",9),t(24," string | HTMLElement "),e()(),i(25,"td")(26,"div",10),t(27," null "),e()()(),i(28,"tr")(29,"td"),t(30," suiScrollContext "),e(),i(31,"td"),t(32," The scrolling element, as a CSS selector, or "),i(33,"code"),t(34,"'window'"),e()(),i(35,"td")(36,"div",9),t(37," string "),e()(),i(38,"td")(39,"div",10),t(40," 'window' "),e()()(),i(41,"tr")(42,"td"),t(43," suiOffset "),e(),i(44,"td"),t(45," Pixels between the sticky and the top of the scroll context when stuck "),e(),i(46,"td")(47,"div",9),t(48," number "),e()(),i(49,"td")(50,"div",10),t(51," 0 "),e()()(),i(52,"tr")(53,"td"),t(54," suiBottomOffset "),e(),i(55,"td"),t(56," Pixels between the sticky and the bottom of the scroll context when pushing "),e(),i(57,"td")(58,"div",9),t(59," number "),e()(),i(60,"td")(61,"div",10),t(62," 0 "),e()()(),i(63,"tr")(64,"td"),t(65," suiPushing "),e(),i(66,"td"),t(67," Push the page up when scrolling back instead of returning to its position "),e(),i(68,"td")(69,"div",9),t(70," boolean "),e()(),i(71,"td")(72,"div",10),t(73," false "),e()()(),i(74,"tr")(75,"td"),t(76," suiSetSize "),e(),i(77,"td"),t(78," Keep the sticky's width and height when it becomes fixed "),e(),i(79,"td")(80,"div",9),t(81," boolean "),e()(),i(82,"td")(83,"div",10),t(84," true "),e()()(),i(85,"tr")(86,"td"),t(87," suiJitter "),e(),i(88,"td"),t(89," Pixel tolerance before the container height is corrected "),e(),i(90,"td")(91,"div",9),t(92," number "),e()(),i(93,"td")(94,"div",10),t(95," 5 "),e()()(),i(96,"tr")(97,"td"),t(98," suiObserveChanges "),e(),i(99,"td"),t(100," Recalculate positions when the content of the sticky or its context changes "),e(),i(101,"td")(102,"div",9),t(103," boolean "),e()(),i(104,"td")(105,"div",10),t(106," false "),e()()()()(),i(107,"h4",4),t(108,"Events"),e(),i(109,"table",8)(110,"thead")(111,"tr")(112,"th"),t(113,"Event"),e(),i(114,"th"),t(115,"Description"),e(),i(116,"th"),t(117,"Type"),e()()(),i(118,"tbody")(119,"tr")(120,"td"),t(121," suiOnStick "),e(),i(122,"td"),t(123," Emitted when the element becomes fixed to the viewport "),e(),i(124,"td")(125,"div",9),t(126," EventEmitter<void> "),e()()(),i(127,"tr")(128,"td"),t(129," suiOnUnstick "),e(),i(130,"td"),t(131," Emitted when the element is no longer fixed "),e(),i(132,"td")(133,"div",9),t(134," EventEmitter<void> "),e()()(),i(135,"tr")(136,"td"),t(137," suiOnTop "),e(),i(138,"td"),t(139," Emitted when the element returns to the top of its context "),e(),i(140,"td")(141,"div",9),t(142," EventEmitter<void> "),e()()(),i(143,"tr")(144,"td"),t(145," suiOnBottom "),e(),i(146,"td"),t(147," Emitted when the element is bound to the bottom of its context "),e(),i(148,"td")(149,"div",9),t(150," EventEmitter<void> "),e()()(),i(151,"tr")(152,"td"),t(153," suiOnScroll "),e(),i(154,"td"),t(155," Emitted on every scroll of the scroll context "),e(),i(156,"td")(157,"div",9),t(158," EventEmitter<void> "),e()()(),i(159,"tr")(160,"td"),t(161," suiOnReposition "),e(),i(162,"td"),t(163," Emitted when positions are recalculated "),e(),i(164,"td")(165,"div",9),t(166," EventEmitter<void> "),e()()()()(),i(167,"h4",4),t(168,"Methods"),e(),i(169,"table",8)(170,"thead")(171,"tr")(172,"th"),t(173,"Method"),e(),i(174,"th"),t(175,"Description"),e()()(),i(176,"tbody")(177,"tr")(178,"td"),t(179," refresh(hard?) "),e(),i(180,"td"),t(181," Recalculates the sticky positions, e.g. after the page layout changes "),e()()()()())}var od=(()=>{class n{constructor(o){this.snippetSticky=Jl,this.snippetPushing=Xl,this.snippetOffset=ql,this.snippetEvents=Kl,this.snippetScrollContext=Zl,o.setTitle("Sticky | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(V(B))}}static{this.\u0275cmp=u({type:n,selectors:[["doc-sticky"]],standalone:!1,decls:3,vars:2,consts:[["header","Sticky","subHeader","Sticky content stays fixed to the browser viewport while another column of content is visible on the page","semanticUrl","https://semantic-ui.com/modules/sticky.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[1,"sticky-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,_1,48,5,"div",1)(2,T1,182,0,"div",1),e()),a&2&&(d(),l("docPageContent","definition"),d(),l("docPageContent","api"))},dependencies:[R,O,L,H,A,W,b,re,Ql,ed,td,id,nd],styles:["[_nghost-%COMP%]     .sticky-demo .sticky-content{width:60%}[_nghost-%COMP%]     .sticky-demo .sticky-scroll{height:22rem;overflow-y:auto}"]})}}return n})();var M1=[{path:"accordion",component:Lo},{path:"checkbox",component:ma},{path:"dimmer",component:In},{path:"dropdown",component:ul},{path:"embed",component:sn},{path:"modal",component:gr},{path:"popup",component:us},{path:"progress",component:Ga},{path:"rating",component:Wn},{path:"search",component:ro},{path:"select",component:Xs},{path:"shape",component:Dl},{path:"sidebar",component:Yl},{path:"sticky",component:od},{path:"tab",component:Do}],ad=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[Gt.forChild(M1),Gt]})}}return n})();var YC=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=X({imports:[J,Vi,ad,Ii,wi,Bi,ji,en,Gi,_i,Vn,xo,Hi,Ji,Ni,bi,Di,Ti,Ei,mr,Ci,Xi,Ui,Mi,Oi,Ta,qi,ko,Yi,gl,yi,gi,$l,Ri]})}}return n})();export{YC as ModulesModule};
