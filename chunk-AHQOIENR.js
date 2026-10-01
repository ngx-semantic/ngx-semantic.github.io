import{c as T,d as Wi,e as f,f as Ye,j as nt,k as ot,l as at,m as Ni}from"./chunk-ELTUIT5I.js";import{a as _t,b as rn,h as hn,i as Bt,j as Ve,k as fn,l as Ne,m as Sn}from"./chunk-EOEMLIK2.js";import{a as Se,b as gn}from"./chunk-XCCQIJUX.js";import{c as Vt,d as ut,e as J,f as K,g as q,h as pn,i as Me,j as un}from"./chunk-VN3CWBZ6.js";import{a as Zi,c as st,h as rt,l as Ki,m as Qi,n as en,o as tn,p as Dt,q as Gt,r as Tt,t as cn}from"./chunk-4YNBY6EH.js";import{a as jt,b as Nt,c as Ut,d as $t,e as ln,f as dn,h as Yt,i as mn}from"./chunk-LZRGUPXO.js";import{a as G,c as zi}from"./chunk-25SB76LU.js";import{a as N,e as nn,f as se,g as zt,h as on,j as an,k as C,l as U,m as sn}from"./chunk-GCI4NWXM.js";import{A as W,B as R,C as z,D as j,E as Z,F as qi,b as ze,c as je,f as Ri,h as E,i as ji,j as Ae,k as Ui,l as O,n as $i,o as ii,p as ni,r as Yi,s as Ie,t as Xi,w as B,x as Ji}from"./chunk-F6ELRBYT.js";import{b as Wt,d as ti,h as A,i as $,j as y,k as Rt,l as Gi}from"./chunk-V5BQNQ4C.js";import{$ as xt,$a as Ii,Ab as Ai,Da as c,Db as Vi,Ea as te,Eb as Bi,Fa as yt,Fb as $e,G as Kt,Ga as wi,Ha as v,I as hi,Ia as h,Ja as _i,K as fi,L as Qt,M as ee,Nb as Re,P as ei,Pa as Di,Q as Y,Qa as me,Ra as pe,Sa as Ti,T as I,Ta as tt,U as k,Ua as Le,Va as He,Wa as d,X as vt,Xa as i,Xb as it,Ya as t,Yb as Oi,Za as r,Zb as Li,_ as X,_a as Mi,bb as Ht,bc as ie,ca as Si,cb as ae,d as ci,da as g,eb as S,fa as bt,fb as ki,g as F,ga as gi,gb as b,hb as we,hc as H,ib as _e,ic as Hi,ja as vi,jb as Ct,kb as wt,lb as Pe,ma as xi,mb as Fe,na as bi,nb as V,oa as Ei,ob as Pi,pb as De,qb as Fi,ra as l,rb as We,sb as e,t as Zt,tb as Ue,ub as Te,va as yi,wa as Et,wb as w,xa as L,xb as _,yb as D,za as Ci}from"./chunk-2A3CABIM.js";import{a as Q,b as he,f as et}from"./chunk-OSQMNGTH.js";var vn=`<sui-embed
    suiSource="youtube"
    suiId="O6Xo21L0ybE"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var xn=`<sui-embed
    suiSource="vimeo"
    suiId="125292332"
    suiPlaceHolder="https://semantic-ui.com/images/vimeo-example.jpg"></sui-embed>
`;var bn=`<sui-embed
    suiIcon="right circle arrow"
    suiSourceUrl="http://www.myfav.es/jack"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var En=`<sui-embed
    suiAspectRatio="4:3"
    suiSource="youtube"
    suiId="HTZudKi36bo"
    suiPlaceHolder="https://semantic-ui.com/images/4by3.jpg"></sui-embed>
`;function wm(n,m){if(n&1&&r(0,"img",2),n&2){let o=b();d("src",o.suiPlaceHolder,bi)}}function _m(n,m){if(n&1&&(i(0,"div",3),r(1,"iframe",4),Vi(2,"safeUrl"),t()),n&2){let o=b();l(),d("src",Bi(2,1,o.videoUrl),Ei)}}var Dm=(()=>{class n{constructor(){this.sanitizer=Y(Hi)}transform(o,...a){return this.sanitizer.bypassSecurityTrustResourceUrl(o)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275pipe=wi({name:"safeUrl",type:n,pure:!0})}}return n})(),Mt=(()=>{class n{constructor(){this.cdr=Y(Re),this.suiSource=null,this.suiAspectRatio=null,this.suiIcon="video play",this.suiId=null,this.suiPlaceHolder=null,this.suiSourceUrl=null,this.suiAutoplay=!1,this.isPLaying=!1,this.videoUrl=""}ngAfterViewInit(){this.suiAutoplay&&this.playVideo()}get classes(){return["ui",this.suiAspectRatio,"embed",$.getPropClass(this.isPLaying,"active")].join(" ")}playVideo(){this.suiSourceUrl&&(this.videoUrl=this.suiSourceUrl),this.suiSource==="vimeo"&&(this.videoUrl=`//player.vimeo.com/video/${this.suiId}?api=false&autoplay=true&byline=false&color=%23444444&portrait=false&title=false`),this.suiSource==="youtube"&&(this.videoUrl=`//www.youtube.com/embed/${this.suiId}?autohide=true&autoplay=true&color=%23444444&hq=true&jsapi=false&modestbranding=true`),this.isPLaying=!0,this.cdr.detectChanges()}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-embed"]],inputs:{suiSource:"suiSource",suiAspectRatio:"suiAspectRatio",suiIcon:"suiIcon",suiId:"suiId",suiPlaceHolder:"suiPlaceHolder",suiSourceUrl:"suiSourceUrl",suiAutoplay:"suiAutoplay"},decls:4,vars:4,consts:[[3,"ngClass"],["sui-icon","",3,"click","suiIconType"],[1,"placeholder",3,"src"],[1,"embed"],["scrolling","no","webkitallowfullscreen","","mozallowfullscreen","","allowfullscreen","","width","100%","height","100%","frameborder","0",3,"src"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"i",1),S("click",function(){return s.playVideo()}),t(),me(2,wm,1,1,"img",2),me(3,_m,3,3,"div",3),t()),a&2&&(d("ngClass",s.classes),l(),d("suiIconType",s.suiIcon),l(),pe(s.suiPlaceHolder?2:-1),l(),pe(s.isPLaying?3:-1))},dependencies:[ie,it,E,Dm],encapsulation:2,changeDetection:0})}}return F([A()],n.prototype,"suiAutoplay",void 0),n})(),yn=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[ie,Mt]})}}return n})();var It=class{constructor(){this.isDefinitionsActive=!0}},Cn=(()=>{class n extends It{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-embed-youtube-example"]],standalone:!1,features:[v],decls:1,vars:0,consts:[["suiSource","youtube","suiId","O6Xo21L0ybE","suiPlaceHolder","https://semantic-ui.com/images/image-16by9.png"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[Mt],encapsulation:2})}}return n})(),wn=(()=>{class n extends It{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-embed-vimeo-example"]],standalone:!1,features:[v],decls:1,vars:0,consts:[["suiSource","vimeo","suiId","125292332","suiPlaceHolder","https://semantic-ui.com/images/vimeo-example.jpg"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[Mt],encapsulation:2})}}return n})(),_n=(()=>{class n extends It{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-embed-custom-content-example"]],standalone:!1,features:[v],decls:1,vars:0,consts:[["suiIcon","right circle arrow","suiSourceUrl","http://www.myfav.es/jack","suiPlaceHolder","https://semantic-ui.com/images/image-16by9.png"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[Mt],encapsulation:2})}}return n})(),Dn=(()=>{class n extends It{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-embed-aspect-ratio-example"]],standalone:!1,features:[v],decls:1,vars:0,consts:[["suiAspectRatio","4:3","suiSource","youtube","suiId","HTZudKi36bo","suiPlaceHolder","https://semantic-ui.com/images/4by3.jpg"]],template:function(a,s){a&1&&r(0,"sui-embed",0)},dependencies:[Mt],encapsulation:2})}}return n})();function Im(n,m){n&1&&r(0,"doc-embed-youtube-example")}function km(n,m){n&1&&r(0,"doc-embed-vimeo-example")}function Pm(n,m){n&1&&r(0,"doc-embed-custom-content-example")}function Fm(n,m){n&1&&r(0,"doc-embed-aspect-ratio-example")}function Am(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"States"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"YouTube"),t(),i(6,"p"),e(7,"An embed can be used to display YouTube Content"),t(),h(8,Im,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Vimeo"),t(),i(12,"p"),e(13,"An embed can be used to display Vimeo content."),t(),h(14,km,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Custom Content"),t(),i(18,"p"),e(19,"An embed can display any web content"),t(),h(20,Pm,1,0,"ng-template",5),t(),i(21,"h2",2),e(22,"Variations"),t(),i(23,"doc-code-sample",3)(24,"h3",4),e(25,"Aspect Ratio"),t(),i(26,"p"),e(27,"An embed can specify an alternative aspect ratio"),t(),h(28,Fm,1,0,"ng-template",5),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetYoutube),l(6),d("templateCode",o.snippetVimeo),l(6),d("templateCode",o.snippetCustomContent),l(8),d("templateCode",o.snippetAspectRatio)}}function Vm(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-embed"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiSource"),t(),i(20,"td"),e(21,"Specifies a source to use. Cannot be used together with url. Allowed values could be "),i(22,"span",7),e(23,"'youtube'"),t(),e(24," | "),i(25,"span",7),e(26,"'vimeo'"),t(),e(27," | "),i(28,"span",7),e(29,"null"),t()(),i(30,"td")(31,"div",8),e(32," string"),t()(),i(33,"td")(34,"div",9),e(35," null"),t()()(),i(36,"tr")(37,"td"),e(38,"suiAspectRatio"),t(),i(39,"td"),e(40," An embed can specify an alternative aspect ratio. Allowed values could be "),i(41,"span",7),e(42,"'4:3'"),t(),e(43," | "),i(44,"span",7),e(45,"'16:9'"),t(),e(46," | "),i(47,"span",7),e(48,"'21:9'"),t(),e(49," | "),i(50,"span",7),e(51,"null"),t()(),i(52,"td")(53,"div",8),e(54,"string"),t()(),i(55,"td")(56,"div",9),e(57,"null"),t()()(),i(58,"tr")(59,"td"),e(60,"suiIcon "),t(),i(61,"td"),e(62," Specifies an icon to use with placeholder content. "),t(),i(63,"td")(64,"div",8),e(65,"string"),t()(),i(66,"td")(67,"div",9),e(68,"video play"),t()()(),i(69,"tr")(70,"td"),e(71,"suiId"),t(),i(72,"td"),e(73," Specifies an id for source. "),t(),i(74,"td")(75,"div",8),e(76,"string"),t(),e(77," | "),i(78,"div",8),e(79,"number"),t()(),i(80,"td")(81,"div",9),e(82,"null"),t()()(),i(83,"tr")(84,"td"),e(85,"suiPlaceHolder"),t(),i(86,"td"),e(87," A placeholder image for embed "),t(),i(88,"td")(89,"div",8),e(90,"string"),t()(),i(91,"td")(92,"div",9),e(93,"null"),t()()(),i(94,"tr")(95,"td"),e(96,"suiSourceUrl"),t(),i(97,"td"),e(98," Specifies a url to use for embed. Cannot be used together with source "),t(),i(99,"td")(100,"div",8),e(101,"string"),t()(),i(102,"td")(103,"div",9),e(104,"null"),t()()(),i(105,"tr")(106,"td"),e(107,"suiAutoplay"),t(),i(108,"td"),e(109," Setting to true or false will force autoplay "),t(),i(110,"td")(111,"div",8),e(112," boolean "),t()(),i(113,"td")(114,"div",9),e(115," false "),t()()()()()())}var Tn=(()=>{class n{constructor(o){this.snippetYoutube=vn,this.snippetVimeo=xn,this.snippetCustomContent=bn,this.snippetAspectRatio=En,this.isDefinitionsActive=!0,o.setTitle("Embed | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-embed"]],standalone:!1,decls:3,vars:2,consts:[["header","Embed","subHeader","An embed displays content from other websites like YouTube videos or Google Maps"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Am,29,4,"div",1)(2,Vm,116,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,Cn,wn,_n,Dn],encapsulation:2})}}return n})();var Mn=`<button sui-button
        (click)="simpleDimmerVisible = !simpleDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     [(dimmed)]="simpleDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var In=`dimmerVisible: boolean = false;
`;var kn=`<button sui-button
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
`;var Pn=`<button sui-button
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
`;var Fn=`<div sui-segment
     sui-dimmer
     dimmed="true">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var An=`<div sui-segment
     sui-dimmer
     disabled>
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Vn=`<button sui-button
        (click)="blurringDimmerVisible = !blurringDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerBlurring
     [(dimmed)]="blurringDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Bn=`<button sui-button
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
`;var On=`<button sui-button
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
`;var Ln=`<button sui-button
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
`;var Hn=`<button sui-button
        (click)="invertedDimmerVisible = !invertedDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerInverted
     [(dimmed)]="invertedDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;function Ym(n,m){n&1&&(i(0,"h2",4),r(1,"i",5),e(2," Dimmed Message! "),t())}function Gm(n,m){n&1&&(i(0,"h2",3),r(1,"i",4),e(2," Dimmed Message "),t(),i(3,"div",5),e(4,"Dimmer sub-header"),t())}function Xm(n,m){n&1&&(i(0,"h2",4),e(1," Title "),t(),i(2,"div",5),e(3,"Add "),t(),i(4,"div",6),e(5,"View"),t())}function Jm(n,m){n&1&&(i(0,"h2",4),e(1," Title "),t(),i(2,"div",5),e(3,"Add "),t(),i(4,"div",6),e(5,"View"),t())}var ke=class{constructor(){this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1}},Rn=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-simple-example"]],standalone:!1,features:[v],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.simpleDimmerVisible=!s.simpleDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),D("dimmedChange",function(p){return _(s.simpleDimmerVisible,p)||(s.simpleDimmerVisible=p),p}),r(3,"doc-wireframe",2),t()),a&2&&(l(2),w("dimmed",s.simpleDimmerVisible))},dependencies:[Z,C,Ve,B],encapsulation:2})}}return n})(),zn=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-content-example"]],standalone:!1,features:[v],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiIcon","","suiInverted",""],["sui-icon","","suiIconType","heart"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.contentDimmerVisible=!s.contentDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),D("dimmedChange",function(p){return _(s.contentDimmerVisible,p)||(s.contentDimmerVisible=p),p}),r(3,"doc-wireframe",2),h(4,Ym,3,0,"ng-template",3),t()),a&2&&(l(2),w("dimmed",s.contentDimmerVisible))},dependencies:[Z,y,C,Ve,Bt,E,B],encapsulation:2})}}return n})(),jn=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-page-example"]],standalone:!1,features:[v],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-dimmer","","suiDimmerFullPage","",3,"dimmedChange","dimmed"],["suiDimmerContent",""],["sui-header","","suiIcon","","suiInverted",""],["sui-icon","","suiIconType","mail"],["suiSubHeader",""]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.pageDimmerVisible=!s.pageDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),D("dimmedChange",function(p){return _(s.pageDimmerVisible,p)||(s.pageDimmerVisible=p),p}),h(3,Gm,5,0,"ng-template",2),t()),a&2&&(l(2),w("dimmed",s.pageDimmerVisible))},dependencies:[y,Rt,C,Ve,Bt,E],encapsulation:2})}}return n})(),Nn=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-active-example"]],standalone:!1,features:[v],decls:2,vars:0,consts:[["sui-segment","","sui-dimmer","","dimmed","true"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"doc-wireframe",1),t())},dependencies:[Z,Ve,B],encapsulation:2})}}return n})(),Un=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-disabled-example"]],standalone:!1,features:[v],decls:2,vars:0,consts:[["sui-segment","","sui-dimmer","","disabled",""],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"doc-wireframe",1),t())},dependencies:[Z,Ve,B],encapsulation:2})}}return n})(),$n=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-blurring-example"]],standalone:!1,features:[v],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerBlurring","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.blurringDimmerVisible=!s.blurringDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),D("dimmedChange",function(p){return _(s.blurringDimmerVisible,p)||(s.blurringDimmerVisible=p),p}),r(3,"doc-wireframe",2),t()),a&2&&(l(2),w("dimmed",s.blurringDimmerVisible))},dependencies:[Z,C,Ve,B],encapsulation:2})}}return n})(),Yn=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-blurring-inverted-example"]],standalone:!1,features:[v],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerBlurring","","suiDimmerInverted","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.blurringDInvertedDimmerVisible=!s.blurringDInvertedDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),D("dimmedChange",function(p){return _(s.blurringDInvertedDimmerVisible,p)||(s.blurringDInvertedDimmerVisible=p),p}),r(3,"doc-wireframe",2),t()),a&2&&(l(2),w("dimmed",s.blurringDInvertedDimmerVisible))},dependencies:[Z,C,Ve,B],encapsulation:2})}}return n})(),Gn=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-top-alignment-example"]],standalone:!1,features:[v],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerAlignment","top",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiInverted",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.topAlignmentDimmerVisible=!s.topAlignmentDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),D("dimmedChange",function(p){return _(s.topAlignmentDimmerVisible,p)||(s.topAlignmentDimmerVisible=p),p}),r(3,"doc-wireframe",2),h(4,Xm,6,0,"ng-template",3),t()),a&2&&(l(2),w("dimmed",s.topAlignmentDimmerVisible))},dependencies:[Z,y,C,Ve,Bt,B],encapsulation:2})}}return n})(),Xn=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-bottom-alignment-example"]],standalone:!1,features:[v],decls:5,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerAlignment","bottom",3,"dimmedChange","dimmed"],["type","short-paragraph"],["suiDimmerContent",""],["sui-header","","suiInverted",""],["sui-button","","suiEmphasis","primary"],["sui-button",""]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.bottomAlignmentDimmerVisible=!s.bottomAlignmentDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),D("dimmedChange",function(p){return _(s.bottomAlignmentDimmerVisible,p)||(s.bottomAlignmentDimmerVisible=p),p}),r(3,"doc-wireframe",2),h(4,Jm,6,0,"ng-template",3),t()),a&2&&(l(2),w("dimmed",s.bottomAlignmentDimmerVisible))},dependencies:[Z,y,C,Ve,Bt,B],encapsulation:2})}}return n})(),Jn=(()=>{class n extends ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer-inverted-example"]],standalone:!1,features:[v],decls:4,vars:1,consts:[["sui-button","",3,"click"],["sui-segment","","sui-dimmer","","suiDimmerInverted","",3,"dimmedChange","dimmed"],["type","short-paragraph"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.invertedDimmerVisible=!s.invertedDimmerVisible}),e(1,` Toggle Dimmer
`),t(),i(2,"div",1),D("dimmedChange",function(p){return _(s.invertedDimmerVisible,p)||(s.invertedDimmerVisible=p),p}),r(3,"doc-wireframe",2),t()),a&2&&(l(2),w("dimmed",s.invertedDimmerVisible))},dependencies:[Z,C,Ve,B],encapsulation:2})}}return n})();function Zm(n,m){n&1&&r(0,"doc-dimmer-simple-example")}function Km(n,m){n&1&&r(0,"doc-dimmer-content-example")}function Qm(n,m){n&1&&r(0,"doc-dimmer-page-example")}function ep(n,m){n&1&&r(0,"doc-dimmer-active-example")}function tp(n,m){n&1&&r(0,"doc-dimmer-disabled-example")}function ip(n,m){n&1&&r(0,"doc-dimmer-blurring-example")}function np(n,m){n&1&&r(0,"doc-dimmer-blurring-inverted-example")}function op(n,m){n&1&&r(0,"doc-dimmer-top-alignment-example")}function ap(n,m){n&1&&r(0,"doc-dimmer-bottom-alignment-example")}function sp(n,m){n&1&&r(0,"doc-dimmer-inverted-example")}function rp(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Dimmer"),t(),i(6,"p"),e(7,"A simple dimmer displays no content"),t(),h(8,Zm,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Content Dimmer"),t(),i(12,"p"),e(13,"A dimmer can display content"),t(),h(14,Km,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Page Dimmer"),t(),i(18,"p"),e(19,"A dimmer can be formatted to be fixed to the page"),t(),h(20,Qm,1,0,"ng-template",5),t(),i(21,"h2",2),e(22,"States"),t(),i(23,"doc-code-sample",6)(24,"h3",4),e(25,"Active"),t(),i(26,"p"),e(27,"An active dimmer will dim its parent container"),t(),h(28,ep,1,0,"ng-template",5),t(),i(29,"doc-code-sample",6)(30,"h3",4),e(31,"Disabled"),t(),i(32,"p"),e(33,"A disabled dimmer cannot be activated"),t(),h(34,tp,1,0,"ng-template",5),t(),i(35,"h2",2),e(36,"Variations"),t(),i(37,"doc-code-sample",3)(38,"h3",4),e(39,"Blurring"),t(),i(40,"p"),e(41,"A dimmable element can blur its contents"),t(),h(42,ip,1,0,"ng-template",5),t(),i(43,"doc-code-sample",3),h(44,np,1,0,"ng-template",5),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Vertical Alignment"),t(),i(48,"p"),e(49,"A dimmer can have its content top or bottom aligned."),t(),h(50,op,1,0,"ng-template",5),t(),i(51,"doc-code-sample",3),h(52,ap,1,0,"ng-template",5),t(),i(53,"doc-code-sample",3)(54,"h3",4),e(55,"Inverted"),t(),i(56,"p"),e(57,"A dimmer can be formatted to have its colours inverted"),t(),h(58,sp,1,0,"ng-template",5),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetSimple)("componentCode",o.snippetSharedTs),l(6),d("templateCode",o.snippetContent)("componentCode",o.snippetSharedTs),l(6),d("templateCode",o.snippetPage)("componentCode",o.snippetSharedTs),l(8),d("templateCode",o.snippetActive),l(6),d("templateCode",o.snippetDisabled),l(8),d("templateCode",o.snippetBlurring)("componentCode",o.snippetSharedTs),l(6),d("templateCode",o.snippetBlurringInverted)("componentCode",o.snippetSharedTs),l(2),d("templateCode",o.snippetTopAligned)("componentCode",o.snippetSharedTs),l(6),d("templateCode",o.snippetBottomAligned)("componentCode",o.snippetSharedTs),l(2),d("templateCode",o.snippetInverted)("componentCode",o.snippetSharedTs)}}function lp(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-dimmer"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiDimmerAlignment"),t(),i(20,"td"),e(21,"Specifies the dimmer content position. Allowed values could be "),i(22,"span",8),e(23,"'top'"),t(),e(24," | "),i(25,"span",8),e(26,"'bottom'"),t(),e(27," | "),i(28,"span",8),e(29,"null"),t()(),i(30,"td")(31,"div",9),e(32,"string"),t()(),i(33,"td")(34,"div",10),e(35,"top"),t()()(),i(36,"tr")(37,"td"),e(38,"suiDimmerBlurring"),t(),i(39,"td"),e(40,"Determine if the dimmer should blur the background"),t(),i(41,"td")(42,"div",9),e(43,"boolean "),t()(),i(44,"td")(45,"div",10),e(46,"false "),t()()(),i(47,"tr")(48,"td"),e(49,"suiDimmerInverted"),t(),i(50,"td"),e(51,"Determine if the dimmer should invert its colours"),t(),i(52,"td")(53,"div",9),e(54,"boolean "),t()(),i(55,"td")(56,"div",10),e(57,"false "),t()()(),i(58,"tr")(59,"td"),e(60,"suiDimmerSimple"),t(),i(61,"td"),e(62,"Show a simple dimmer"),t(),i(63,"td")(64,"div",9),e(65,"boolean "),t()(),i(66,"td")(67,"div",10),e(68,"false "),t()()(),i(69,"tr")(70,"td"),e(71,"suiDimmerFullPage"),t(),i(72,"td"),e(73,"Determine if the dimmer should cover the entire page"),t(),i(74,"td")(75,"div",9),e(76,"boolean "),t()(),i(77,"td")(78,"div",10),e(79,"false "),t()()(),i(80,"tr")(81,"td"),e(82,"suiCloseOnClick"),t(),i(83,"td"),e(84,"Determine if the dimmer should be closed when the mask or any other location is clicked"),t(),i(85,"td")(86,"div",9),e(87,"boolean "),t()(),i(88,"td")(89,"div",10),e(90,"true "),t()()(),i(91,"tr")(92,"td"),e(93,"disabled"),t(),i(94,"td"),e(95,"Stop the dimmer from responding to actions"),t(),i(96,"td")(97,"div",9),e(98,"boolean "),t()(),i(99,"td")(100,"div",10),e(101,"false "),t()()(),i(102,"tr")(103,"td"),e(104,"dimmed"),t(),i(105,"td"),e(106,"Determines if the dimmer is shown or not. This field supports two way binding following the "),i(107,"code"),e(108,"[(dimmed)]"),t(),e(109," syntax. "),t(),i(110,"td")(111,"div",9),e(112,"boolean "),t()(),i(113,"td")(114,"div",10),e(115,"false "),t()()()()(),i(116,"h2",2),e(117,"suiDimmerContent"),t(),i(118,"h4",4),e(119,"Properties"),t(),i(120,"table",7)(121,"thead")(122,"tr")(123,"th"),e(124,"Property"),t(),i(125,"th"),e(126,"Description"),t(),i(127,"th"),e(128,"Type"),t(),i(129,"th"),e(130,"Default"),t()()(),r(131,"tbody"),i(132,"tfoot",11)(133,"tr")(134,"th",12)(135,"div",13),e(136,"No properties for this directive"),t()()()()()())}var qn=(()=>{class n{constructor(o){this.snippetSimple=Mn,this.snippetSharedTs=In,this.snippetContent=kn,this.snippetPage=Pn,this.snippetActive=Fn,this.snippetDisabled=An,this.snippetBlurring=Vn,this.snippetBlurringInverted=Bn,this.snippetTopAligned=On,this.snippetBottomAligned=Ln,this.snippetInverted=Hn,this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1,o.setTitle("Dimmer | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dimmer"]],standalone:!1,decls:3,vars:2,consts:[["header","Dimmer","subHeader","A dimmer hides distractions to focus attention on particular content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["docDemo",""],[3,"templateCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,rp,59,18,"div",1)(2,lp,137,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,Rn,zn,jn,Nn,Un,$n,Yn,Gn,Xn,Jn],styles:["button[_ngcontent-%COMP%]{margin-bottom:1.2rem!important}"]})}}return n})();var Zn=`<sui-rating suiMaxValue="1"></sui-rating>
`;var Kn=`<sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
`;var Qn=`<sui-rating
    suiType="heart"
    suiValue="1"
    suiMaxValue="3"></sui-rating>
`;var eo=`<sui-rating
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
`;function cp(n,m){if(n&1){let o=ae();Mi(0,"i",1),ki("click",function(){let s=I(o).$implicit,u=b();return k(u.onClick(s))})("mouseover",function(){let s=I(o).$implicit,u=b();return k(u.onHover(s))})("mouseout",function(){I(o);let s=b();return k(s.onUnhover())}),Ii()}if(n&2){let o=m.$implicit,a=b();De("active",o<=a.suiValue)("selected",o<=a.hoverValue)}}var ht=(()=>{class n{set suiValue(o){this.value!==o&&(this.value=+o)}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.generateRatingsArray()}get suiMaxValue(){return this.maxValue}get classes(){return["ui",this.suiSize,this.suiType,$.getPropClass(this.suiReadOnly,"read-only"),"rating",$.getPropClass(this.hoverValue>0,"selected")].join(" ")}constructor(){this.changeDetectorRef=Y(Re),this.valueChanged=new X,this.suiSize=null,this.suiType=null,this.suiReadOnly=!1,this.suiClearable=!1,this.ratingsArray=[],this.hoverValue=0,this.value=0,this.maxValue=5,this.controlValueChangeFn=()=>{},this.generateRatingsArray()}onClick(o){this.suiReadOnly||(this.suiClearable&&this.suiValue===o&&(o=0),this.suiValue!==o&&(this.controlValueChangeFn(o),this.valueChanged.emit(o)),this.suiValue=o)}onHover(o){this.suiReadOnly?this.hoverValue=0:this.hoverValue=o}onUnhover(){this.suiReadOnly||(this.hoverValue=0)}writeValue(o){this.suiValue=o,this.changeDetectorRef.markForCheck()}registerOnChange(o){this.controlValueChangeFn=o}registerOnTouched(o){}setDisabledState(o){}generateRatingsArray(){this.ratingsArray=Array(this.maxValue).fill(0).map((o,a)=>a+1)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-rating"]],hostVars:2,hostBindings:function(a,s){a&2&&We(s.classes)},inputs:{suiSize:"suiSize",suiType:"suiType",suiReadOnly:"suiReadOnly",suiClearable:"suiClearable",suiValue:"suiValue",suiMaxValue:"suiMaxValue"},outputs:{valueChanged:"valueChanged"},features:[Ai([{provide:Zi,useExisting:fi(()=>n),multi:!0}])],decls:2,vars:0,consts:[[1,"icon",3,"active","selected"],[1,"icon",3,"click","mouseover","mouseout"]],template:function(a,s){a&1&&Le(0,cp,1,4,"i",0,tt),a&2&&He(s.ratingsArray)},styles:[`:host.read-only .icon{cursor:auto}
`],encapsulation:2})}}return F([A()],n.prototype,"suiReadOnly",void 0),F([A()],n.prototype,"suiClearable",void 0),n})(),to=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({})}}return n})();var kt=class{constructor(){this.isDefinitionsActive=!0}},no=(()=>{class n extends kt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-rating-basic-example"]],standalone:!1,features:[v],decls:1,vars:0,consts:[["suiMaxValue","1"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[ht],encapsulation:2})}}return n})(),oo=(()=>{class n extends kt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-rating-star-example"]],standalone:!1,features:[v],decls:1,vars:0,consts:[["suiType","star","suiValue","3","suiMaxValue","4"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[ht],encapsulation:2})}}return n})(),ao=(()=>{class n extends kt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-rating-heart-example"]],standalone:!1,features:[v],decls:1,vars:0,consts:[["suiType","heart","suiValue","1","suiMaxValue","3"]],template:function(a,s){a&1&&r(0,"sui-rating",0)},dependencies:[ht],encapsulation:2})}}return n})(),so=(()=>{class n extends kt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-rating-sizes-example"]],standalone:!1,features:[v],decls:22,vars:0,consts:[["suiSize","mini","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","tiny","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","small","suiType","star","suiValue","3","suiMaxValue","4"],["suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","large","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","huge","suiType","star","suiValue","3","suiMaxValue","4"],["suiSize","massive","suiType","star","suiValue","3","suiMaxValue","4"]],template:function(a,s){a&1&&r(0,"sui-rating",0)(1,"br")(2,"br")(3,"sui-rating",1)(4,"br")(5,"br")(6,"sui-rating",2)(7,"br")(8,"br")(9,"sui-rating",3)(10,"br")(11,"br")(12,"sui-rating",4)(13,"br")(14,"br")(15,"sui-rating",5)(16,"br")(17,"br")(18,"sui-rating",5)(19,"br")(20,"br")(21,"sui-rating",6)},dependencies:[ht],encapsulation:2})}}return n})();function fp(n,m){n&1&&r(0,"doc-rating-basic-example")}function Sp(n,m){n&1&&r(0,"doc-rating-star-example")}function gp(n,m){n&1&&r(0,"doc-rating-heart-example")}function vp(n,m){n&1&&r(0,"doc-rating-sizes-example")}function xp(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"States"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Rating "),i(6,"span",5),e(7,"Flexbox"),t()(),i(8,"p"),e(9,"A basic rating"),t(),h(10,fp,1,0,"ng-template",6),t(),i(11,"doc-code-sample",3)(12,"h3",4),e(13,"Star"),t(),i(14,"p"),e(15,"A rating can use a set of star icons"),t(),h(16,Sp,1,0,"ng-template",6),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Heart"),t(),i(20,"p"),e(21,"A rating can use a set of heart icons"),t(),h(22,gp,1,0,"ng-template",6),t(),i(23,"h2",2),e(24,"Variations"),t(),i(25,"doc-code-sample",3)(26,"h3",4),e(27,"Size"),t(),i(28,"p"),e(29,"A rating can vary in size"),t(),h(30,vp,1,0,"ng-template",6),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetBasic),l(8),d("templateCode",o.snippetStar),l(6),d("templateCode",o.snippetHeart),l(8),d("templateCode",o.snippetSizes)}}function bp(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-rating"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiSize"),t(),i(20,"td"),e(21,"Set the rating size. Allowed values could be "),i(22,"span",8),e(23,"mini"),t(),e(24," | "),i(25,"span",8),e(26,"tiny"),t(),e(27," | "),i(28,"span",8),e(29,"small"),t(),e(30," | "),i(31,"span",8),e(32,"medium"),t(),e(33," | "),i(34,"span",8),e(35,"big"),t(),e(36," | "),i(37,"span",8),e(38,"huge"),t(),e(39," | "),i(40,"span",8),e(41,"massive"),t(),e(42," | "),i(43,"span",8),e(44,"null"),t()(),i(45,"td")(46,"div",5),e(47," string "),t()(),i(48,"td")(49,"div",9),e(50," null "),t()()(),i(51,"tr")(52,"td"),e(53,"suiType"),t(),i(54,"td"),e(55,"Specifies a icon to use. Cannot be used together with url. Allowed values could be "),i(56,"span",8),e(57,"star"),t(),e(58," | "),i(59,"span",8),e(60,"heart"),t(),e(61," | "),i(62,"span",8),e(63,"null"),t()(),i(64,"td")(65,"div",5),e(66," string"),t()(),i(67,"td")(68,"div",9),e(69," null"),t()()(),i(70,"tr")(71,"td"),e(72,"suiReadOnly "),t(),i(73,"td"),e(74," Setting to true or false will determine if users can change the rating value "),t(),i(75,"td")(76,"div",5),e(77," boolean "),t()(),i(78,"td")(79,"div",9),e(80," false "),t()()(),i(81,"tr")(82,"td"),e(83,"suiClearable"),t(),i(84,"td"),e(85," Setting to true or false will determine if clicking on the value would reset it "),t(),i(86,"td")(87,"div",5),e(88," boolean "),t()(),i(89,"td")(90,"div",9),e(91," false "),t()()()()(),i(92,"h4",4),e(93,"Events"),t(),i(94,"table",7)(95,"thead")(96,"tr")(97,"th"),e(98,"Event"),t(),i(99,"th"),e(100,"Description"),t(),i(101,"th"),e(102,"Type"),t()()(),i(103,"tbody")(104,"tr")(105,"td"),e(106,"valueChanged "),t(),i(107,"td"),e(108,"Fired when the rating value is changed. Also supports "),i(109,"code"),e(110,"[(ngModel)]"),t(),e(111," syntax"),t(),i(112,"td")(113,"div",5),e(114," number "),t()()()()()())}var ro=(()=>{class n{constructor(o){this.snippetBasic=Zn,this.snippetStar=Kn,this.snippetHeart=Qn,this.snippetSizes=eo,this.isDefinitionsActive=!0,o.setTitle("Rating | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-rating"]],standalone:!1,decls:3,vars:2,consts:[["header","Rating","subHeader","A rating indicates user interest in content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-label","","suiColour","teal"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,xp,31,4,"div",1)(2,bp,115,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,no,oo,ao,so],encapsulation:2})}}return n})();var lo=`<sui-search
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var mo=`<sui-search
    suiShowIcon
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var po=`<sui-search
    suiShowIcon
    suiPlaceholder="Common animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var uo=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="countries">
</sui-search>
`;var co=`countries = [
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
`;var ho=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="categoryContent">
</sui-search>
`;var fo=`categoryContent = [
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
`;var So=`<sui-search
    suiLoading
    suiPlaceholder="Search..."
    [suiOptions]="blankOptions">
</sui-search>
`;var go=`<sui-search
    disabled
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptions]="blankOptions">
</sui-search>
`;var vo=`<sui-search
    suiFluid
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var xo=`<sui-search
    suiShowIcon
    suiAlignment="right"
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Be=class n{constructor(){this.blankOptions=[],this.countries=[{title:"Andorra"},{title:"United Arab Emirates"},{title:"Afghanistan"},{title:"Antigua"},{title:"Anguilla"},{title:"Albania"},{title:"Armenia"},{title:"Netherlands Antilles"},{title:"Angola"},{title:"Argentina"},{title:"American Samoa"},{title:"Austria"},{title:"Australia"},{title:"Aruba"},{title:"Aland Islands"},{title:"Azerbaijan"},{title:"Bosnia"},{title:"Barbados"},{title:"Bangladesh"},{title:"Belgium"},{title:"Burkina Faso"},{title:"Bulgaria"},{title:"Bahrain"},{title:"Burundi"}],this.categoryContent=[{category:"South America",title:"Brazil"},{category:"South America",title:"Peru"},{category:"North America",title:"Canada"},{category:"Asia",title:"South Korea"},{category:"Asia",title:"Japan"},{category:"Asia",title:"China"},{category:"Europe",title:"Denmark"},{category:"Europe",title:"England"},{category:"Europe",title:"France"},{category:"Europe",title:"Germany"},{category:"Africa",title:"Ethiopia"},{category:"Africa",title:"Nigeria"},{category:"Africa",title:"Zimbabwe"}]}searchText(m){return et(this,null,function*(){let o=`https://api.semantic-ui.com/search/${m}`;return n.callUrl(o)})}searchCategories(m){return et(this,null,function*(){let o=`https://api.semantic-ui.com/search/category/${m}`;return n.callUrl(o)})}static callUrl(m){return et(this,null,function*(){try{return(yield(yield fetch(m)).json()).results}catch(o){return[]}})}},bo=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-basic-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiPlaceholder","Common passwords...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptionsLookup",s.searchText)},dependencies:[Ne],encapsulation:2})}}return n})(),Eo=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-basic-alt-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Common passwords...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptionsLookup",s.searchText)},dependencies:[Ne],encapsulation:2})}}return n})(),yo=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-category-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Common animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptionsLookup",s.searchCategories)},dependencies:[Ne],encapsulation:2})}}return n})(),Co=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-local-search-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Search countries...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptions",s.countries)},dependencies:[Ne],encapsulation:2})}}return n})(),wo=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-local-category-search-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiShowIcon","","suiPlaceholder","Search countries...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptions",s.categoryContent)},dependencies:[Ne],encapsulation:2})}}return n})(),_o=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-loading-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiLoading","","suiPlaceholder","Search...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptions",s.blankOptions)},dependencies:[Ne],encapsulation:2})}}return n})(),Do=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-disabled-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["disabled","","suiShowIcon","","suiPlaceholder","Search animals...",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptions",s.blankOptions)},dependencies:[Ne],encapsulation:2})}}return n})(),To=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-fluid-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiFluid","","suiShowIcon","","suiPlaceholder","Search animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptionsLookup",s.searchCategories)},dependencies:[Ne],encapsulation:2})}}return n})(),Mo=(()=>{class n extends Be{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-search-aligned-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiShowIcon","","suiAlignment","right","suiPlaceholder","Search animals...",3,"suiOptionsLookup"]],template:function(a,s){a&1&&r(0,"sui-search",0),a&2&&d("suiOptionsLookup",s.searchCategories)},dependencies:[Ne],encapsulation:2})}}return n})();function Ap(n,m){n&1&&r(0,"doc-search-basic-example")}function Vp(n,m){n&1&&r(0,"doc-search-basic-alt-example")}function Bp(n,m){n&1&&r(0,"doc-search-category-example")}function Op(n,m){n&1&&r(0,"doc-search-local-search-example")}function Lp(n,m){n&1&&r(0,"doc-search-local-category-search-example")}function Hp(n,m){n&1&&r(0,"doc-search-loading-example")}function Wp(n,m){n&1&&r(0,"doc-search-disabled-example")}function Rp(n,m){n&1&&r(0,"doc-search-fluid-example")}function zp(n,m){n&1&&r(0,"doc-search-aligned-example")}function jp(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Type"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Search"),t(),i(6,"p"),e(7,"A basic search element"),t(),h(8,Ap,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3),h(10,Vp,1,0,"ng-template",5),t(),i(11,"doc-code-sample",3)(12,"h3",4),e(13,"Category"),t(),i(14,"p"),e(15,"A search can display results from remote content ordered by categories"),t(),h(16,Bp,1,0,"ng-template",5),t(),i(17,"doc-code-sample",6)(18,"h3",4),e(19,"Local Search"),t(),i(20,"p"),e(21,"A search can look for results inside a static local source."),t(),h(22,Op,1,0,"ng-template",5),t(),i(23,"doc-code-sample",6)(24,"h3",4),e(25,"Local Category Search"),t(),i(26,"p"),e(27,"A search can look for category results inside a static local source."),t(),h(28,Lp,1,0,"ng-template",5),t(),r(29,"br"),i(30,"h2",2),e(31,"States"),t(),i(32,"doc-code-sample",3)(33,"h3",4),e(34,"Loading"),t(),i(35,"p"),e(36,"A search can show a loading indicator."),t(),h(37,Hp,1,0,"ng-template",5),t(),r(38,"br"),i(39,"h2",2),e(40,"Variations"),t(),i(41,"doc-code-sample",3)(42,"h3",4),e(43,"Disabled"),t(),i(44,"p"),e(45,"A search can show it is currently unable to be interacted with."),t(),h(46,Wp,1,0,"ng-template",5),t(),i(47,"doc-code-sample",3)(48,"h3",4),e(49,"Fluid"),t(),i(50,"p"),e(51,"A search can have its results take up the width of its container."),t(),h(52,Rp,1,0,"ng-template",5),t(),i(53,"doc-code-sample",3)(54,"h3",4),e(55,"Aligned"),t(),i(56,"p"),e(57,"A search can have its results aligned to its left or right container edge."),t(),h(58,zp,1,0,"ng-template",5),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetBasic),l(6),d("templateCode",o.snippetBasicAlt),l(2),d("templateCode",o.snippetCategory),l(6),d("templateCode",o.snippetLocalSearch)("componentCode",o.snippetLocalSearchTs),l(6),d("templateCode",o.snippetLocalCategorySearch)("componentCode",o.snippetLocalCategorySearchTs),l(9),d("templateCode",o.snippetLoading),l(9),d("templateCode",o.snippetDisabled),l(6),d("templateCode",o.snippetFluid),l(6),d("templateCode",o.snippetAligned)}}function Np(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-search"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiAlignment"),t(),i(20,"td"),e(21,"Set the search result alignment. Allowed values could be "),i(22,"span",8),e(23,"right"),t(),e(24," | "),i(25,"span",8),e(26,"null"),t()(),i(27,"td")(28,"div",9),e(29," string "),t()(),i(30,"td")(31,"div",10),e(32," null "),t()()(),i(33,"tr")(34,"td"),e(35,"suiPlaceholder"),t(),i(36,"td"),e(37,"Set the search input placeholder text. "),t(),i(38,"td")(39,"div",9),e(40," string "),t()(),i(41,"td")(42,"div",10),e(43," null "),t()()(),i(44,"tr")(45,"td"),e(46,"suiSearchDelay"),t(),i(47,"td"),e(48,"Set the delay (in milliseconds) before a search is started. "),t(),i(49,"td")(50,"div",9),e(51," number "),t()(),i(52,"td")(53,"div",10),e(54," 200 "),t()()(),i(55,"tr")(56,"td"),e(57,"suiShowIcon"),t(),i(58,"td"),e(59,"Determine whether or not to show the search icon "),t(),i(60,"td")(61,"div",9),e(62," boolean "),t()(),i(63,"td")(64,"div",10),e(65," false "),t()()(),i(66,"tr")(67,"td"),e(68,"disabled"),t(),i(69,"td"),e(70,"Determine whether or not to disable the search functionality "),t(),i(71,"td")(72,"div",9),e(73," boolean "),t()(),i(74,"td")(75,"div",10),e(76," false "),t()()(),i(77,"tr")(78,"td"),e(79,"suiFluid"),t(),i(80,"td"),e(81,"Determine whether or not the search results fill the width of their container "),t(),i(82,"td")(83,"div",9),e(84," boolean "),t()(),i(85,"td")(86,"div",10),e(87," false "),t()()(),i(88,"tr")(89,"td"),e(90,"suiLoading"),t(),i(91,"td"),e(92,"Determine whether or not to manually override the loading icon display "),t(),i(93,"td")(94,"div",9),e(95," boolean "),t()(),i(96,"td")(97,"div",10),e(98," false "),t()()(),i(99,"tr")(100,"td"),e(101,"suiOptions"),t(),i(102,"td"),e(103,"The options available to search. Cannot be used in conjunction with "),i(104,"code"),e(105,"suiOptionsLookup"),t()(),i(106,"td")(107,"div",9),e(108," Array<{title: string, category: string (optional), description: string (optional)}> "),t()(),i(109,"td")(110,"div",10),e(111," null "),t()()(),i(112,"tr")(113,"td"),e(114,"suiOptionsLookup"),t(),i(115,"td"),e(116,"A function to asynchronously search a remote resource with the provided query. Cannot be used in conjunction with "),i(117,"code"),e(118,"suiOptions"),t()(),i(119,"td")(120,"div",9),e(121," (query: string) => Promise<Array<{title: string, category: string (optional), description: string (optional)}>> "),t()(),i(122,"td")(123,"div",10),e(124," null "),t()()()()(),i(125,"h4",4),e(126,"Events"),t(),i(127,"table",7)(128,"thead")(129,"tr")(130,"th"),e(131,"Property"),t(),i(132,"th"),e(133,"Description"),t(),i(134,"th"),e(135,"Type"),t()()(),i(136,"tbody")(137,"tr")(138,"td"),e(139,"suiResultSelected"),t(),i(140,"td"),e(141,"Fired when a result is selected. "),t(),i(142,"td")(143,"div",9),e(144," {title: string, category: string, description: string} "),t()()()()()())}var Io=(()=>{class n{constructor(o){this.snippetBasic=lo,this.snippetBasicAlt=mo,this.snippetCategory=po,this.snippetLocalSearch=uo,this.snippetLocalSearchTs=co,this.snippetLocalCategorySearch=ho,this.snippetLocalCategorySearchTs=fo,this.snippetLoading=So,this.snippetDisabled=go,this.snippetFluid=vo,this.snippetAligned=xo,this.blankOptions=[],this.countries=[{title:"Andorra"},{title:"United Arab Emirates"},{title:"Afghanistan"},{title:"Antigua"},{title:"Anguilla"},{title:"Albania"},{title:"Armenia"},{title:"Netherlands Antilles"},{title:"Angola"},{title:"Argentina"},{title:"American Samoa"},{title:"Austria"},{title:"Australia"},{title:"Aruba"},{title:"Aland Islands"},{title:"Azerbaijan"},{title:"Bosnia"},{title:"Barbados"},{title:"Bangladesh"},{title:"Belgium"},{title:"Burkina Faso"},{title:"Bulgaria"},{title:"Bahrain"},{title:"Burundi"}],this.categoryContent=[{category:"South America",title:"Brazil"},{category:"South America",title:"Peru"},{category:"North America",title:"Canada"},{category:"Asia",title:"South Korea"},{category:"Asia",title:"Japan"},{category:"Asia",title:"China"},{category:"Europe",title:"Denmark"},{category:"Europe",title:"England"},{category:"Europe",title:"France"},{category:"Europe",title:"Germany"},{category:"Africa",title:"Ethiopia"},{category:"Africa",title:"Nigeria"},{category:"Africa",title:"Zimbabwe"}],o.setTitle("Search | Ngx Semantic")}searchText(o){return et(this,null,function*(){let a=`https://api.semantic-ui.com/search/${o}`;return n.callUrl(a)})}searchCategories(o){return et(this,null,function*(){let a=`https://api.semantic-ui.com/search/category/${o}`;return n.callUrl(a)})}static callUrl(o){return et(this,null,function*(){try{return(yield(yield fetch(o)).json()).results}catch(a){return[]}})}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-search"]],standalone:!1,decls:3,vars:2,consts:[["header","Search","subHeader","A search module allows a user to query for results from a selection of data"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,jp,59,11,"div",1)(2,Np,145,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,bo,Eo,yo,Co,wo,_o,Do,To,Mo],encapsulation:2})}}return n})();var ko=`<sui-tabs>
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
`;var Po=`<sui-tabs
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
`;var Fo=`<sui-tabs
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
`;var Ao=`<sui-tabs>
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
`;var Vo=`<sui-tabs>
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
`;var Bo=`<sui-tabs
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
`;var Oo=`<select name="tab-colour"
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
`;var Zp=["contentTemplate"],Kp=["*"];function Qp(n,m){n&1&&_e(0)}function eu(n,m){n&1&&Ht(0)}function tu(n,m){if(n&1&&h(0,eu,1,0,"ng-container",2),n&2){b(2);let o=V(2);d("ngTemplateOutlet",o)}}function iu(n,m){n&1&&Ht(0)}function nu(n,m){if(n&1&&h(0,iu,1,0,"ng-container",2),n&2){let o=b(2);d("ngTemplateOutlet",o.currentTab.contentTemplate)}}function ou(n,m){n&1&&Ht(0)}function au(n,m){if(n&1&&h(0,ou,1,0,"ng-container",2),n&2){b(2);let o=V(2);d("ngTemplateOutlet",o)}}function su(n,m){if(n&1&&(me(0,tu,1,1,"ng-container"),i(1,"div",1),me(2,nu,1,1,"ng-container"),t(),me(3,au,1,1,"ng-container")),n&2){let o=b();pe(o.isTop?0:-1),l(),De("loading",o.currentTab==null?null:o.currentTab.suiLoading),d("suiAttached",o.segmentAttachment),l(),pe(o.currentTab?2:-1),l(),pe(o.isTop?-1:3)}}function ru(n,m){if(n&1&&r(0,"i",6),n&2){let o=b().$implicit;d("suiIconType",o.suiIcon)}}function lu(n,m){if(n&1&&(i(0,"div",7),e(1),t()),n&2){let o=b().$implicit;d("suiColour",o.suiLabelColour)("suiCircular",o.suiLabelCircular),l(),Te(" ",o.suiLabel," ")}}function du(n,m){if(n&1){let o=ae();i(0,"div",5),S("click",function(){let s=I(o),u=s.$implicit,p=s.$index,x=b(2);return k(x.changeTab(u,p))}),me(1,ru,1,1,"i",6),e(2),me(3,lu,2,3,"div",7),t()}if(n&2){let o=m.$implicit,a=m.$index,s=b(2);d("disabled",o.disabled)("suiActive",s.isTabSelected(a)),l(),pe(o.suiIcon?1:-1),l(),Te(" ",o.suiTitle," "),l(),pe(o.suiLabel?3:-1)}}function mu(n,m){if(n&1&&(i(0,"div",3),Le(1,du,4,5,"div",4,tt),t()),n&2){let o=b();d("suiInverted",o.suiInverted)("suiColour",o.suiColour)("suiAttached",o.menuAttachment)("suiTabular",o.isBasic)("suiSecondary",o.isSecondary)("suiPointing",o.isPointing)("suiText",o.isText)("suiBorderless",o.isBorderless),l(),He(o.tabs)}}var Xe=(()=>{class n{constructor(){this.suiTitle=null,this.suiIcon=null,this.suiLabel=null,this.suiLoading=!1,this.disabled=!1,this.suiLabelColour=null,this.suiLabelCircular=!1}get classes(){return[$.getPropClass(this.suiLoading,"loading"),$.getPropClass(this.disabled,"disabled")].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-tab"]],viewQuery:function(a,s){if(a&1&&wt(Zp,7),a&2){let u;Pe(u=Fe())&&(s.contentTemplate=u.first)}},hostVars:2,hostBindings:function(a,s){a&2&&We(s.classes)},inputs:{suiContent:"suiContent",suiTitle:"suiTitle",suiIcon:"suiIcon",suiLabel:"suiLabel",suiLoading:"suiLoading",disabled:"disabled",suiLabelColour:"suiLabelColour",suiLabelCircular:"suiLabelCircular"},exportAs:["suiTab"],ngContentSelectors:Kp,decls:2,vars:0,consts:[["contentTemplate",""]],template:function(a,s){a&1&&(we(),_i(0,Qp,1,0,"ng-template",null,0,$e))},encapsulation:2})}}return F([A()],n.prototype,"suiLoading",void 0),F([A()],n.prototype,"disabled",void 0),F([A()],n.prototype,"suiLabelCircular",void 0),n})(),Je=(()=>{class n{constructor(){this.tabs=new gi,this.suiTabMenuPosition="top",this.suiTabType="basic",this.suiColour=null,this.suiInverted=!1,this.suiSelectedIndexChanged=new X,this.selectedTabIndex=0,this.hasTabs=!1,this.currentTab=null}get isSecondary(){return this.suiTabType==="secondary"}get isBasic(){return this.suiTabType==="basic"}get isPointing(){return this.suiTabType==="pointing"}get isText(){return this.suiTabType==="text"}get isBorderless(){return this.suiTabType==="borderless"}get isTop(){return this.suiTabMenuPosition==="top"}get menuAttachment(){return this.suiTabType==="basic"?this.isTop?"top":"bottom":null}get segmentAttachment(){return this.suiTabType==="basic"?this.isTop?"bottom attached":"top attached":null}changeTab(o,a){if(o.disabled)return;let s=this.selectedTabIndex!==a;this.selectedTabIndex=a,this.setCurrentTab(),s&&this.suiSelectedIndexChanged.emit(this.selectedTabIndex)}isTabSelected(o){return this.selectedTabIndex===o}ngAfterContentChecked(){this.setCurrentTab()}setCurrentTab(){let o=this.tabs.toArray();this.hasTabs=o.length>0,this.currentTab=o[this.selectedTabIndex]}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-tabs"]],contentQueries:function(a,s,u){if(a&1&&Ct(u,Xe,4),a&2){let p;Pe(p=Fe())&&(s.tabs=p)}},inputs:{suiTabMenuPosition:"suiTabMenuPosition",suiTabType:"suiTabType",suiColour:"suiColour",suiInverted:"suiInverted"},outputs:{suiSelectedIndexChanged:"suiSelectedIndexChanged"},decls:3,vars:1,consts:[["tabMenu",""],["sui-segment","",1,"active","tab",3,"suiAttached"],[4,"ngTemplateOutlet"],["sui-menu","",3,"suiInverted","suiColour","suiAttached","suiTabular","suiSecondary","suiPointing","suiText","suiBorderless"],["suiMenuItem","",3,"disabled","suiActive"],["suiMenuItem","",3,"click","disabled","suiActive"],["sui-icon","",3,"suiIconType"],["sui-label","",3,"suiColour","suiCircular"]],template:function(a,s){a&1&&(me(0,su,4,6),h(1,mu,3,8,"ng-template",null,0,$e)),a&2&&pe(s.hasTabs?0:-1)},dependencies:[ie,Li,B,ze,je,E,O],encapsulation:2,changeDetection:0})}}return F([A()],n.prototype,"suiInverted",void 0),n})(),Lo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[ie,Je]})}}return n})();function uu(n,m){if(n&1&&(i(0,"option",1),e(1),t()),n&2){let o=m.$implicit;d("value",o),l(),Ue(o)}}var qe=class{constructor(){this.isDefinitionsActive=!0,this.colours=["red","orange","green","blue","violet"],this.tabColour="blue",this.isTabDisabled=!1}},Wo=(()=>{class n extends qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-tab-basic-example"]],standalone:!1,features:[v],decls:22,vars:0,consts:[["suiTitle","HTML"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML"],["suiTitle","CSS"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS"],["suiTitle","JavaScript"],["href","https://developer.mozilla.org/en-US/docs/Web/javascript"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0)(2,"h3"),e(3,"HTML"),t(),i(4,"p"),e(5," HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript). "),t(),i(6,"a",1),e(7,"developer.mozilla.org"),t()(),i(8,"sui-tab",2)(9,"h3"),e(10,"CSS"),t(),i(11,"p"),e(12," Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. "),t(),i(13,"a",3),e(14,"developer.mozilla.org"),t()(),i(15,"sui-tab",4)(16,"h3"),e(17,"JavaScript"),t(),i(18,"p"),e(19," JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. "),t(),i(20,"a",5),e(21,"developer.mozilla.org"),t()()())},dependencies:[Xe,Je],encapsulation:2})}}return n})(),Ro=(()=>{class n extends qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-tab-pointing-menu-example"]],standalone:!1,features:[v],decls:7,vars:0,consts:[["suiTabType","pointing"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),e(2," Circle "),t(),i(3,"sui-tab",2),e(4," Box "),t(),i(5,"sui-tab",3),e(6," Triangle "),t()())},dependencies:[Xe,Je],encapsulation:2})}}return n})(),zo=(()=>{class n extends qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-tab-text-menu-example"]],standalone:!1,features:[v],decls:7,vars:0,consts:[["suiTabType","text"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),e(2," Circle "),t(),i(3,"sui-tab",2),e(4," Box "),t(),i(5,"sui-tab",3),e(6," Triangle "),t()())},dependencies:[Xe,Je],encapsulation:2})}}return n})(),jo=(()=>{class n extends qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-tab-loading-example"]],standalone:!1,features:[v],decls:7,vars:0,consts:[["suiLoading","","suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0),e(2," Circle "),t(),i(3,"sui-tab",1),e(4," Box "),t(),i(5,"sui-tab",2),e(6," Triangle "),t()())},dependencies:[Xe,Je],encapsulation:2})}}return n})(),No=(()=>{class n extends qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-tab-disabled-example"]],standalone:!1,features:[v],decls:7,vars:0,consts:[["suiTitle","Circle"],["suiTitle","Box"],["disabled","","suiTitle","Secret Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs")(1,"sui-tab",0),e(2," Circle "),t(),i(3,"sui-tab",1),e(4," Box "),t(),i(5,"sui-tab",2),e(6," Triangle "),t()())},dependencies:[Xe,Je],encapsulation:2})}}return n})(),Uo=(()=>{class n extends qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-tab-positioned-example"]],standalone:!1,features:[v],decls:7,vars:0,consts:[["suiTabType","secondary","suiTabMenuPosition","bottom"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"sui-tabs",0)(1,"sui-tab",1),e(2," Circle "),t(),i(3,"sui-tab",2),e(4," Box "),t(),i(5,"sui-tab",3),e(6," Triangle "),t()())},dependencies:[Xe,Je],encapsulation:2})}}return n})(),$o=(()=>{class n extends qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-tab-coloured-example"]],standalone:!1,features:[v],decls:10,vars:2,consts:[["name","tab-colour",3,"ngModelChange","ngModel"],[3,"value"],["suiTabType","pointing",3,"suiColour"],["suiTitle","Circle"],["suiTitle","Box"],["suiTitle","Triangle"]],template:function(a,s){a&1&&(i(0,"select",0),D("ngModelChange",function(p){return _(s.tabColour,p)||(s.tabColour=p),p}),Le(1,uu,2,2,"option",1,tt),t(),i(3,"sui-tabs",2)(4,"sui-tab",3),e(5," Circle "),t(),i(6,"sui-tab",4),e(7," Box "),t(),i(8,"sui-tab",5),e(9," Triangle "),t()()),a&2&&(w("ngModel",s.tabColour),l(),He(s.colours),l(2),d("suiColour",s.tabColour))},dependencies:[Qi,en,Ki,st,rt,Xe,Je],encapsulation:2})}}return n})();function hu(n,m){n&1&&r(0,"doc-tab-basic-example")}function fu(n,m){n&1&&r(0,"doc-tab-pointing-menu-example")}function Su(n,m){n&1&&r(0,"doc-tab-text-menu-example")}function gu(n,m){n&1&&r(0,"doc-tab-loading-example")}function vu(n,m){n&1&&r(0,"doc-tab-disabled-example")}function xu(n,m){n&1&&r(0,"doc-tab-positioned-example")}function bu(n,m){n&1&&r(0,"doc-tab-coloured-example")}function Eu(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Type"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Tab"),t(),i(6,"p"),e(7,"A basic tab"),t(),h(8,hu,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Pointing Menu"),t(),i(12,"p"),e(13,"A tab menu can point to its tab panes"),t(),h(14,fu,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Text Menu"),t(),i(18,"p"),e(19,"A tab menu can be formatted for text content"),t(),h(20,Su,1,0,"ng-template",5),t(),r(21,"br"),i(22,"h2",2),e(23,"States"),t(),i(24,"doc-code-sample",3)(25,"h3",4),e(26,"Loading"),t(),i(27,"p"),e(28,"A tab can display a loading indicator."),t(),h(29,gu,1,0,"ng-template",5),t(),i(30,"doc-code-sample",3)(31,"h3",4),e(32,"Disabled"),t(),i(33,"p"),e(34,"A tab can be disabled"),t(),h(35,vu,1,0,"ng-template",5),t(),r(36,"br"),i(37,"h2",2),e(38,"Menu Variations"),t(),i(39,"doc-code-sample",3)(40,"h3",4),e(41,"Position"),t(),i(42,"p"),e(43,"A tab can be positioned."),t(),h(44,xu,1,0,"ng-template",5),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Coloured"),t(),i(48,"p"),e(49,"A tab can be coloured."),t(),h(50,bu,1,0,"ng-template",5),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetBasic),l(6),d("templateCode",o.snippetPointing),l(6),d("templateCode",o.snippetText),l(9),d("templateCode",o.snippetLoading),l(6),d("templateCode",o.snippetDisabled),l(9),d("templateCode",o.snippetPositioned),l(6),d("templateCode",o.snippetColoured)}}function yu(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-tabs"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiTabMenuPosition"),t(),i(20,"td"),e(21,"Specifies the menu position. Allowed values could be "),i(22,"span",7),e(23,"'top'"),t(),e(24," | "),i(25,"span",7),e(26,"'bottom'"),t()(),i(27,"td")(28,"div",8),e(29,"string"),t()(),i(30,"td")(31,"div",9),e(32,"top"),t()()(),i(33,"tr")(34,"td"),e(35,"suiTabType"),t(),i(36,"td"),e(37," Determine the styling for the tab menu. Allowed values could be "),i(38,"span",7),e(39,"'basic'"),t(),e(40," | "),i(41,"span",7),e(42,"'pointing'"),t(),e(43," | "),i(44,"span",7),e(45,"'secondary'"),t(),e(46," | "),i(47,"span",7),e(48,"'text'"),t(),e(49," | "),i(50,"span",7),e(51,"null"),t()(),i(52,"td")(53,"div",8),e(54,"string"),t()(),i(55,"td")(56,"div",9),e(57,"basic"),t()()(),i(58,"tr")(59,"td"),e(60,"suiColour"),t(),i(61,"td"),e(62,"Set the menu colour. Allowed values could be "),i(63,"span",7),e(64,"'red'"),t(),e(65," | "),i(66,"span",7),e(67,"'orange'"),t(),e(68," | "),i(69,"span",7),e(70,"'yellow'"),t(),e(71," | "),i(72,"span",7),e(73,"'olive'"),t(),e(74," | "),i(75,"span",7),e(76,"'green'"),t(),e(77," | "),i(78,"span",7),e(79,"'teal'"),t(),e(80," | "),i(81,"span",7),e(82,"'blue'"),t(),e(83," | "),i(84,"span",7),e(85,"'violet'"),t(),e(86," | "),i(87,"span",7),e(88,"'purple'"),t(),e(89," | "),i(90,"span",7),e(91,"'pink'"),t(),e(92," | "),i(93,"span",7),e(94,"'brown'"),t(),e(95," | "),i(96,"span",7),e(97,"'grey'"),t(),e(98," | "),i(99,"span",7),e(100,"'black'"),t(),e(101," | "),i(102,"span",7),e(103,"null"),t()(),i(104,"td")(105,"div",8),e(106," string "),t()(),i(107,"td")(108,"div",9),e(109," null "),t()()()()(),i(110,"h4",4),e(111,"Events"),t(),i(112,"table",6)(113,"thead")(114,"tr")(115,"th"),e(116,"Event"),t(),i(117,"th"),e(118,"Description"),t(),i(119,"th"),e(120,"Type"),t()()(),i(121,"tbody")(122,"tr")(123,"td"),e(124,"suiSelectedIndexChanged"),t(),i(125,"td"),e(126,"Fires when the selected tab is changed. Index starts from 0."),t(),i(127,"td")(128,"div",8),e(129,"number"),t()()()()(),i(130,"h2",2),e(131,"sui-tab"),t(),i(132,"h4",4),e(133,"Properties"),t(),i(134,"table",6)(135,"thead")(136,"tr")(137,"th"),e(138,"Property"),t(),i(139,"th"),e(140,"Description"),t(),i(141,"th"),e(142,"Type"),t(),i(143,"th"),e(144,"Default"),t()()(),i(145,"tbody")(146,"tr")(147,"td"),e(148,"suiTitle"),t(),i(149,"td"),e(150,"Set the tab title"),t(),i(151,"td")(152,"div",8),e(153,"string"),t()(),i(154,"td")(155,"div",9),e(156,"null"),t()()(),i(157,"tr")(158,"td"),e(159,"suiIcon"),t(),i(160,"td"),e(161,"Set the tab icon"),t(),i(162,"td")(163,"div",8),e(164,"string"),t()(),i(165,"td")(166,"div",9),e(167,"null"),t()()(),i(168,"tr")(169,"td"),e(170,"suiLoading"),t(),i(171,"td"),e(172,"Show the loading icon"),t(),i(173,"td")(174,"div",8),e(175," boolean "),t()(),i(176,"td")(177,"div",9),e(178," false "),t()()(),i(179,"tr")(180,"td"),e(181,"disabled"),t(),i(182,"td"),e(183,"Prevent the tab from being activated"),t(),i(184,"td")(185,"div",8),e(186," boolean "),t()(),i(187,"td")(188,"div",9),e(189," false "),t()()()()()())}var Yo=(()=>{class n{constructor(o){this.snippetBasic=ko,this.snippetPointing=Po,this.snippetText=Fo,this.snippetLoading=Ao,this.snippetDisabled=Vo,this.snippetPositioned=Bo,this.snippetColoured=Oo,this.isDefinitionsActive=!0,this.colours=["red","orange","green","blue","violet"],this.tabColour="blue",this.isTabDisabled=!1,o.setTitle("Tab | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-tab"]],standalone:!1,decls:3,vars:2,consts:[["header","Tab","subHeader","A tab is a hidden section of content activated by a menu"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Eu,51,7,"div",1)(2,yu,190,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,Wo,Ro,zo,jo,No,Uo,$o],styles:["select[_ngcontent-%COMP%]{margin-bottom:1rem}"]})}}return n})();var Go=`<sui-accordion>
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
`;var Xo=`<sui-accordion suiStyled>
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
`;var Jo=`<sui-accordion suiStyled suiFluid>
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
`;var qo=`<div sui-segment suiInverted>
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
`;var Zo=["*"],Pt=(()=>{class n{constructor(){this.suiTitle="",this.disabled=!1,this.isOpenChange=new X,this._isOpen=!1}get isOpen(){return this._isOpen}set isOpen(o){this.disabled||(this._isOpen=o,this.isOpenChange.emit(o))}toggle(){this.isOpen=!this.isOpen}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-accordion-panel"]],inputs:{suiTitle:"suiTitle",disabled:"disabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:Zo,decls:5,vars:5,consts:[[1,"title",3,"click"],["sui-icon","","suiIconType","dropdown"],[1,"content"]],template:function(a,s){a&1&&(we(),i(0,"div",0),S("click",function(){return s.toggle()}),r(1,"i",1),e(2),t(),i(3,"div",2),_e(4),t()),a&2&&(De("active",s.isOpen),l(2),Te(" ",s.suiTitle," "),l(),De("active",s.isOpen))},dependencies:[E],encapsulation:2})}}return F([A()],n.prototype,"disabled",void 0),F([A()],n.prototype,"isOpen",null),n})(),Ft=(()=>{class n{constructor(){this.suiStyled=!1,this.suiFluid=!1,this.suiInverted=!1,this.suiCloseOthers=!0}get classes(){return["ui",$.getPropClass(this.suiFluid,"fluid"),$.getPropClass(this.suiStyled,"styled"),$.getPropClass(this.suiInverted,"inverted"),"accordion"].join(" ")}ngAfterContentInit(){this.suiCloseOthers&&this.panels.forEach((o,a)=>o.isOpenChange.subscribe(s=>{s&&this.panels.forEach((u,p)=>{a!==p&&(u.isOpen=!1)})}))}ngOnDestroy(){this.panels.forEach(o=>o.isOpenChange.unsubscribe())}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-accordion"]],contentQueries:function(a,s,u){if(a&1&&Ct(u,Pt,4),a&2){let p;Pe(p=Fe())&&(s.panels=p)}},inputs:{suiStyled:"suiStyled",suiFluid:"suiFluid",suiInverted:"suiInverted",suiCloseOthers:"suiCloseOthers"},ngContentSelectors:Zo,decls:2,vars:1,consts:[[3,"ngClass"]],template:function(a,s){a&1&&(we(),i(0,"div",0),_e(1),t()),a&2&&d("ngClass",s.classes)},dependencies:[ie,it],encapsulation:2})}}return F([A()],n.prototype,"suiStyled",void 0),F([A()],n.prototype,"suiFluid",void 0),F([A()],n.prototype,"suiInverted",void 0),F([A()],n.prototype,"suiCloseOthers",void 0),n})(),Ko=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[ie,Ft]})}}return n})();var Qo=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-accordion-standard-example"]],standalone:!1,decls:12,vars:0,consts:[["isOpen","","suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion")(1,"sui-accordion-panel",0)(2,"p"),e(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),t()(),i(4,"sui-accordion-panel",1)(5,"p"),e(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),t()(),i(7,"sui-accordion-panel",2)(8,"p"),e(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),t(),i(10,"p"),e(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),t()()())},dependencies:[Ft,Pt],encapsulation:2})}}return n})(),ea=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-accordion-styled-example"]],standalone:!1,decls:12,vars:0,consts:[["suiStyled",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion",0)(1,"sui-accordion-panel",1)(2,"p"),e(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),t()(),i(4,"sui-accordion-panel",2)(5,"p"),e(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),t()(),i(7,"sui-accordion-panel",3)(8,"p"),e(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),t(),i(10,"p"),e(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),t()()())},dependencies:[Ft,Pt],encapsulation:2})}}return n})(),ta=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-accordion-styled-fluid-example"]],standalone:!1,decls:12,vars:0,consts:[["suiStyled","","suiFluid",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"sui-accordion",0)(1,"sui-accordion-panel",1)(2,"p"),e(3,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),t()(),i(4,"sui-accordion-panel",2)(5,"p"),e(6,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),t()(),i(7,"sui-accordion-panel",3)(8,"p"),e(9,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),t(),i(10,"p"),e(11,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),t()()())},dependencies:[Ft,Pt],encapsulation:2})}}return n})(),ia=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-accordion-inverted-example"]],standalone:!1,decls:13,vars:0,consts:[["sui-segment","","suiInverted",""],["suiInverted",""],["suiTitle","What is a dog?"],["suiTitle","What kinds of dogs are there?"],["suiTitle","How do you acquire a dog?"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"sui-accordion",1)(2,"sui-accordion-panel",2)(3,"p"),e(4,"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),t()(),i(5,"sui-accordion-panel",3)(6,"p"),e(7,"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."),t()(),i(8,"sui-accordion-panel",4)(9,"p"),e(10,"Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."),t(),i(11,"p"),e(12,"A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."),t()()()())},dependencies:[B,Ft,Pt],encapsulation:2})}}return n})();function Iu(n,m){n&1&&r(0,"doc-accordion-standard-example")}function ku(n,m){n&1&&r(0,"doc-accordion-styled-example")}function Pu(n,m){n&1&&r(0,"doc-accordion-styled-fluid-example")}function Fu(n,m){n&1&&r(0,"doc-accordion-inverted-example")}function Au(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Accordion"),t(),i(6,"p"),e(7,"A standard accordion"),t(),h(8,Iu,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Styled"),t(),i(12,"p"),e(13,"A styled accordion adds basic formatting"),t(),h(14,ku,1,0,"ng-template",5),t(),i(15,"h2",2),e(16,"Variations"),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Fluid"),t(),i(20,"p"),e(21,"An accordion can take up the width of its container"),t(),h(22,Pu,1,0,"ng-template",5),t(),i(23,"doc-code-sample",3)(24,"h3",4),e(25,"Inverted"),t(),i(26,"p"),e(27,"An accordion can be formatted to appear on dark backgrounds"),t(),h(28,Fu,1,0,"ng-template",5),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetStandard),l(6),d("templateCode",o.snippetStyled),l(8),d("templateCode",o.snippetStyledFluid),l(6),d("templateCode",o.snippetInverted)}}function Vu(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-accordion"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",6)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiStyled"),t(),i(20,"td"),e(21," Determines if the styled variation of the accordion is rendered "),t(),i(22,"td")(23,"div",7),e(24,"boolean"),t()(),i(25,"td")(26,"div",8),e(27,"false"),t()()(),i(28,"tr")(29,"td"),e(30,"suiFluid"),t(),i(31,"td"),e(32," Determines if the styled variation of the accordion is rendered "),t(),i(33,"td")(34,"div",7),e(35,"boolean"),t()(),i(36,"td")(37,"div",8),e(38,"false"),t()()(),i(39,"tr")(40,"td"),e(41,"suiFluid"),t(),i(42,"td"),e(43," Determines if the styled variation of the accordion is rendered "),t(),i(44,"td")(45,"div",7),e(46,"boolean"),t()(),i(47,"td")(48,"div",8),e(49,"false"),t()()(),i(50,"tr")(51,"td"),e(52,"suiInverted"),t(),i(53,"td"),e(54,"Determine if the accordion should invert it's colours"),t(),i(55,"td")(56,"div",7),e(57,"boolean "),t()(),i(58,"td")(59,"div",8),e(60,"false "),t()()(),i(61,"tr")(62,"td"),e(63,"suiCloseOthers"),t(),i(64,"td"),e(65,"Determines if the accordion should close other open panels when a panel is open"),t(),i(66,"td")(67,"div",7),e(68,"boolean "),t()(),i(69,"td")(70,"div",8),e(71,"true "),t()()()()(),i(72,"h2",2),e(73,"sui-accordion-panel"),t(),i(74,"h4",4),e(75,"Properties"),t(),i(76,"table",6)(77,"thead")(78,"tr")(79,"th"),e(80,"Property"),t(),i(81,"th"),e(82,"Description"),t(),i(83,"th"),e(84,"Type"),t(),i(85,"th"),e(86,"Default"),t()()(),i(87,"tbody")(88,"tr")(89,"td"),e(90,"suiTitle"),t(),i(91,"td"),e(92," What title the accordion panel should gave "),t(),i(93,"td")(94,"div",7),e(95,"string"),t()(),r(96,"td"),t(),i(97,"tr")(98,"td"),e(99,"disabled"),t(),i(100,"td"),e(101," Determines if a panel should be disabled meaning it cannot be interacted with "),t(),i(102,"td")(103,"div",7),e(104,"boolean"),t()(),i(105,"td")(106,"div",8),e(107,"false"),t()()(),i(108,"tr")(109,"td"),e(110,"isOpen"),t(),i(111,"td"),e(112,"A bindable field to determine and notify whether a panel is open or not"),t(),i(113,"td")(114,"div",7),e(115,"boolean"),t()(),r(116,"td"),t()()()())}var na=(()=>{class n{constructor(o){this.snippetStandard=Go,this.snippetStyled=Xo,this.snippetStyledFluid=Jo,this.snippetInverted=qo,o.setTitle("Accordion | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-accordion"]],standalone:!1,decls:3,vars:2,consts:[["header","Accordion","subHeader","An accordion allows users to toggle the display of sections of content"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Au,29,4,"div",1)(2,Vu,117,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,Qo,ea,ta,ia],encapsulation:2})}}return n})();var oa=`<sui-checkbox>
  Make my profile visible
</sui-checkbox>
`;var aa=`<sui-checkbox
    suiType="radio">
  Radio choice
</sui-checkbox>
`;var sa=`<div sui-form>
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
`;var ra=`inlineRadioValue: string = null;
`;var la=`<div sui-form>
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
`;var da=`groupedRadioValue: string = null;
`;var ma=`<sui-checkbox
    suiType="slider">
  Accept terms and conditions
</sui-checkbox>
`;var pa=`<div sui-form>
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
`;var ua=`groupedSliderValue: string = null;
`;var ca=`<sui-checkbox
    suiType="toggle">
  Subscribe to weekly newsletter
</sui-checkbox>
`;var ha=`<sui-checkbox
    suiReadOnly>
  Read Only
</sui-checkbox>
`;var fa=`<sui-checkbox
    [checked]="true">
  Active
</sui-checkbox>
`;var Sa=`<sui-checkbox>
  Indeterminate
</sui-checkbox>
`;var ga=`<div>
  <sui-checkbox disabled>
    Disabled
  </sui-checkbox>
</div>
<div>
  <sui-checkbox disabled suiType="toggle">
    Disabled
  </sui-checkbox>
</div>
`;var va=`<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="slider"></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="toggle"></sui-checkbox>
</div>
`;var xa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-standard-example"]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(i(0,"sui-checkbox"),e(1,` Make my profile visible
`),t())},dependencies:[Se],encapsulation:2})}}return n})(),ba=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-basic-radio-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","radio"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Radio choice
`),t())},dependencies:[Se],encapsulation:2})}}return n})(),Ea=(()=>{class n{constructor(){this.inlineRadioValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-inline-radio-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiInline",""],["suiFormField",""],["suiType","radio","suiValue","once-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","2-3-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","once-a-day",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","twice-a-day",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"How often do you use checkboxes?"),t(),i(4,"div",2)(5,"sui-checkbox",3),D("ngModelChange",function(p){return _(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),e(6," Once a week "),t()(),i(7,"div",2)(8,"sui-checkbox",4),D("ngModelChange",function(p){return _(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),e(9," 2-3 times a week "),t()(),i(10,"div",2)(11,"sui-checkbox",5),D("ngModelChange",function(p){return _(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),e(12," Once a day "),t()(),i(13,"div",2)(14,"sui-checkbox",6),D("ngModelChange",function(p){return _(s.inlineRadioValue,p)||(s.inlineRadioValue=p),p}),e(15," Twice a day "),t()()()()),a&2&&(l(5),w("ngModel",s.inlineRadioValue),l(3),w("ngModel",s.inlineRadioValue),l(3),w("ngModel",s.inlineRadioValue),l(3),w("ngModel",s.inlineRadioValue))},dependencies:[st,rt,Dt,Tt,Gt,Se],encapsulation:2})}}return n})(),ya=(()=>{class n{constructor(){this.groupedRadioValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-grouped-radio-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","radio","suiValue","once-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","2-3-a-week",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","once-a-day",3,"ngModelChange","ngModel"],["suiType","radio","suiValue","twice-a-day",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"How often do you use checkboxes?"),t(),i(4,"div",2)(5,"sui-checkbox",3),D("ngModelChange",function(p){return _(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),e(6," Once a week "),t()(),i(7,"div",2)(8,"sui-checkbox",4),D("ngModelChange",function(p){return _(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),e(9," 2-3 times a week "),t()(),i(10,"div",2)(11,"sui-checkbox",5),D("ngModelChange",function(p){return _(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),e(12," Once a day "),t()(),i(13,"div",2)(14,"sui-checkbox",6),D("ngModelChange",function(p){return _(s.groupedRadioValue,p)||(s.groupedRadioValue=p),p}),e(15," Twice a day "),t()()()()),a&2&&(l(5),w("ngModel",s.groupedRadioValue),l(3),w("ngModel",s.groupedRadioValue),l(3),w("ngModel",s.groupedRadioValue),l(3),w("ngModel",s.groupedRadioValue))},dependencies:[st,rt,Dt,Tt,Gt,Se],encapsulation:2})}}return n})(),Ca=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-basic-slider-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","slider"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Accept terms and conditions
`),t())},dependencies:[Se],encapsulation:2})}}return n})(),wa=(()=>{class n{constructor(){this.groupedSliderValue=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-grouped-slider-example"]],standalone:!1,decls:16,vars:4,consts:[["sui-form",""],["suiFormFields","","suiGrouped",""],["suiFormField",""],["suiType","slider","suiValue","20mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","10mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","5mb",3,"ngModelChange","ngModel"],["suiType","slider","suiValue","~mb",3,"ngModelChange","ngModel"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1)(2,"label"),e(3,"Outbound Throughput"),t(),i(4,"div",2)(5,"sui-checkbox",3),D("ngModelChange",function(p){return _(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),e(6," 20 mbps max "),t()(),i(7,"div",2)(8,"sui-checkbox",4),D("ngModelChange",function(p){return _(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),e(9," 10 mbps max "),t()(),i(10,"div",2)(11,"sui-checkbox",5),D("ngModelChange",function(p){return _(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),e(12," 5 mbps max "),t()(),i(13,"div",2)(14,"sui-checkbox",6),D("ngModelChange",function(p){return _(s.groupedSliderValue,p)||(s.groupedSliderValue=p),p}),e(15," Unmetered "),t()()()()),a&2&&(l(5),w("ngModel",s.groupedSliderValue),l(3),w("ngModel",s.groupedSliderValue),l(3),w("ngModel",s.groupedSliderValue),l(3),w("ngModel",s.groupedSliderValue))},dependencies:[st,rt,Dt,Tt,Gt,Se],encapsulation:2})}}return n})(),_a=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-toggle-example"]],standalone:!1,decls:2,vars:0,consts:[["suiType","toggle"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Subscribe to weekly newsletter
`),t())},dependencies:[Se],encapsulation:2})}}return n})(),Da=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-read-only-example"]],standalone:!1,decls:2,vars:0,consts:[["suiReadOnly",""]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Read Only
`),t())},dependencies:[Se],encapsulation:2})}}return n})(),Ta=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-checked-example"]],standalone:!1,decls:2,vars:1,consts:[[3,"checked"]],template:function(a,s){a&1&&(i(0,"sui-checkbox",0),e(1,` Active
`),t()),a&2&&d("checked",!0)},dependencies:[Se],encapsulation:2})}}return n})(),Ma=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-indeterminate-example"]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(i(0,"sui-checkbox"),e(1,` Indeterminate
`),t())},dependencies:[Se],encapsulation:2})}}return n})(),Ia=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-disabled-example"]],standalone:!1,decls:6,vars:0,consts:[["disabled",""],["disabled","","suiType","toggle"]],template:function(a,s){a&1&&(i(0,"div")(1,"sui-checkbox",0),e(2," Disabled "),t()(),i(3,"div")(4,"sui-checkbox",1),e(5," Disabled "),t()())},dependencies:[Se],encapsulation:2})}}return n})(),ka=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox-fitted-example"]],standalone:!1,decls:6,vars:0,consts:[["sui-segment","","suiCompact","","suiFloated","left floated"],["suiFitted",""],["suiFitted","","suiType","slider"],["suiFitted","","suiType","toggle"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-checkbox",1),t(),i(2,"div",0),r(3,"sui-checkbox",2),t(),i(4,"div",0),r(5,"sui-checkbox",3),t())},dependencies:[B,Se],encapsulation:2})}}return n})();function Qu(n,m){n&1&&r(0,"doc-checkbox-standard-example")}function e0(n,m){n&1&&r(0,"doc-checkbox-basic-radio-example")}function t0(n,m){n&1&&r(0,"doc-checkbox-inline-radio-example")}function i0(n,m){n&1&&r(0,"doc-checkbox-grouped-radio-example")}function n0(n,m){n&1&&r(0,"doc-checkbox-basic-slider-example")}function o0(n,m){n&1&&r(0,"doc-checkbox-grouped-slider-example")}function a0(n,m){n&1&&r(0,"doc-checkbox-toggle-example")}function s0(n,m){n&1&&r(0,"doc-checkbox-read-only-example")}function r0(n,m){n&1&&r(0,"doc-checkbox-checked-example")}function l0(n,m){n&1&&r(0,"doc-checkbox-indeterminate-example")}function d0(n,m){n&1&&r(0,"doc-checkbox-disabled-example")}function m0(n,m){n&1&&r(0,"doc-checkbox-fitted-example")}function p0(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Checkbox"),t(),i(6,"p"),e(7,"A standard checkbox"),t(),h(8,Qu,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Radio"),t(),i(12,"p"),e(13,"A checkbox can be formatted as a radio element. This means it is an exclusive option"),t(),h(14,e0,1,0,"ng-template",5),t(),i(15,"doc-code-sample",6),h(16,t0,1,0,"ng-template",5),t(),i(17,"doc-code-sample",6),h(18,i0,1,0,"ng-template",5),t(),i(19,"doc-code-sample",3)(20,"h3",4),e(21,"Slider"),t(),i(22,"p"),e(23,"A checkbox can be formatted to emphasize the current selection state"),t(),h(24,n0,1,0,"ng-template",5),t(),i(25,"doc-code-sample",6),h(26,o0,1,0,"ng-template",5),t(),i(27,"doc-code-sample",3)(28,"h3",4),e(29,"Toggle"),t(),i(30,"p"),e(31,"A checkbox can be formatted to show an on or off choice"),t(),h(32,a0,1,0,"ng-template",5),t(),i(33,"h2",2),e(34,"States"),t(),i(35,"doc-code-sample",3)(36,"h3",4),e(37,"Read-only"),t(),i(38,"p"),e(39,"A checkbox can be read-only and unable to change states"),t(),h(40,s0,1,0,"ng-template",5),t(),i(41,"doc-code-sample",3)(42,"h3",4),e(43,"Checked"),t(),i(44,"p"),e(45,"A checkbox can be checked"),t(),h(46,r0,1,0,"ng-template",5),t(),i(47,"doc-code-sample",3)(48,"h3",4),e(49,"Indeterminate"),t(),i(50,"p"),e(51,"A checkbox can be indeterminate"),t(),h(52,l0,1,0,"ng-template",5),t(),i(53,"doc-code-sample",3)(54,"h3",4),e(55,"Disabled"),t(),i(56,"p"),e(57,"A checkbox can be read-only and unable to change states"),t(),h(58,d0,1,0,"ng-template",5),t(),i(59,"h2",2),e(60,"Variations"),t(),i(61,"doc-code-sample",3)(62,"h3",4),e(63,"Fitted"),t(),i(64,"p"),e(65,"A fitted checkbox does not leave padding for a label"),t(),h(66,m0,1,0,"ng-template",5),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetStandard),l(6),d("templateCode",o.snippetBasicRadio),l(6),d("templateCode",o.snippetInlineRadio)("componentCode",o.snippetInlineRadioTs),l(2),d("templateCode",o.snippetGroupedRadio)("componentCode",o.snippetGroupedRadioTs),l(2),d("templateCode",o.snippetBasicSlider),l(6),d("templateCode",o.snippetGroupedSlider)("componentCode",o.snippetGroupedSliderTs),l(2),d("templateCode",o.snippetToggle),l(8),d("templateCode",o.snippetReadOnly),l(6),d("templateCode",o.snippetChecked),l(6),d("templateCode",o.snippetIndeterminate),l(6),d("templateCode",o.snippetDisabled),l(8),d("templateCode",o.snippetFitted)}}function u0(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-checkbox"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiReadOnly"),t(),i(20,"td"),e(21," Determines if the checkbox's state can be modified "),t(),i(22,"td")(23,"div",8),e(24,"boolean"),t()(),i(25,"td")(26,"div",9),e(27,"false"),t()()(),i(28,"tr")(29,"td"),e(30,"suiFitted"),t(),i(31,"td"),e(32," Determines if the fitted variation of the checkbox is rendered "),t(),i(33,"td")(34,"div",8),e(35,"boolean"),t()(),i(36,"td")(37,"div",9),e(38,"false"),t()()(),i(39,"tr")(40,"td"),e(41,"disabled"),t(),i(42,"td"),e(43," Determines if the checkbox is disabled "),t(),i(44,"td")(45,"div",8),e(46,"boolean"),t()(),i(47,"td")(48,"div",9),e(49,"false"),t()()(),i(50,"tr")(51,"td"),e(52,"name"),t(),i(53,"td"),e(54,"Sets the name attribute of the checkbox. Required for form usage"),t(),i(55,"td")(56,"div",8),e(57,"string"),t()(),i(58,"td")(59,"div",9),e(60,"null"),t()()(),i(61,"tr")(62,"td"),e(63,"suiValue"),t(),i(64,"td"),e(65,"Sets the value of the checkbox"),t(),i(66,"td")(67,"div",8),e(68,"any"),t()(),i(69,"td")(70,"div",9),e(71,"null"),t()()(),i(72,"tr")(73,"td"),e(74,"[(value)]"),t(),i(75,"td"),e(76,"Sets and notifies you of changes to the checkbox's value"),t(),i(77,"td")(78,"div",8),e(79,"any"),t()(),i(80,"td")(81,"div",9),e(82,"null"),t()()(),i(83,"tr")(84,"td"),e(85,"[(checked)]"),t(),i(86,"td"),e(87,"Sets and notifies you of changes to the checkbox's check state"),t(),i(88,"td")(89,"div",8),e(90,"boolean"),t()(),i(91,"td")(92,"div",9),e(93,"null"),t()()()()()())}var Pa=(()=>{class n{constructor(o){this.snippetStandard=oa,this.snippetBasicRadio=aa,this.snippetInlineRadio=sa,this.snippetInlineRadioTs=ra,this.snippetGroupedRadio=la,this.snippetGroupedRadioTs=da,this.snippetBasicSlider=ma,this.snippetGroupedSlider=pa,this.snippetGroupedSliderTs=ua,this.snippetToggle=ca,this.snippetReadOnly=ha,this.snippetChecked=fa,this.snippetIndeterminate=Sa,this.snippetDisabled=ga,this.snippetFitted=va,o.setTitle("Checkbox | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-checkbox"]],standalone:!1,decls:3,vars:2,consts:[["header","Checkbox","subHeader","A checkbox allows a user to select a value from a small set of options, often binary"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,p0,67,15,"div",1)(2,u0,94,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,xa,ba,Ea,ya,Ca,wa,_a,Da,Ta,Ma,Ia,ka],encapsulation:2})}}return n})();var Fa=`<sui-progress
    suiShowProgress
    [suiValue]="standardValue">
  Uploading Files
</sui-progress>
`;var Aa=`<sui-progress
    suiIndicating
    suiState="active"
    [suiValue]="indicatingValue">
  {{ indicatingValue }}% Funded
</sui-progress>
`;var Va=`indicatingValue = 40;
`;var Ba=`<sui-progress
    [suiValue]="28">
</sui-progress>
`;var Oa=`<sui-progress
    suiShowProgress
    [suiValue]="35">
</sui-progress>
`;var La=`<sui-progress
    suiState="active"
    [suiValue]="51">
  Uploading Files
</sui-progress>
`;var Ha=`<sui-progress
    suiState="success"
    [suiValue]="100">
  Everything worked, your file is all ready.
</sui-progress>
`;var Wa=`<sui-progress
    suiState="warning"
    [suiValue]="100">
  Your file didn't meet the minimum resolution requirements.
</sui-progress>
`;var Ra=`<sui-progress
    suiState="error"
    [suiValue]="100">
  There was an error.
</sui-progress>
`;var za=`<sui-progress
    disabled
    [suiValue]="38">
</sui-progress>
`;var ja=`<div sui-segment suiInverted>
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
`;var Na=`<div sui-segment>
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
`;var Ua=`<div sui-card>
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
`;var $a=`<sui-progress
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
`;var Ya=`<sui-progress
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
`;var Ga=`<div sui-segment suiInverted>
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
`;var I0=["*"];function k0(n,m){if(n&1&&(i(0,"div",2),e(1),t()),n&2){let o=b();l(),Te("",o.progressPercentage,"%")}}var re=(()=>{class n{constructor(){this.suiAttached=null,this.suiSize=null,this.suiColour=null,this.suiState=null,this.suiIndicating=!1,this.disabled=!1,this.suiInverted=!1,this.suiShowProgress=!1,this.value=0,this.maxValue=100,this.progressPercentage=0}set suiValue(o){this.value=+o,this.calculatePercentage()}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.calculatePercentage()}get suiMaxValue(){return this.maxValue}get classes(){return $.combineToClass(["ui",this.suiSize??"",this.suiColour??"",this.suiAttached?`${this.suiAttached} attached`:"",$.getPropClass(this.suiIndicating,"indicating"),$.getPropClass(this.disabled,"disabled"),$.getPropClass(this.suiInverted,"inverted"),"progress",this.suiState??""])}calculatePercentage(){this.value>this.maxValue||(this.progressPercentage=Math.ceil(this.value*100/this.maxValue))}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-progress"]],inputs:{suiAttached:"suiAttached",suiSize:"suiSize",suiColour:"suiColour",suiState:"suiState",suiIndicating:"suiIndicating",disabled:"disabled",suiInverted:"suiInverted",suiShowProgress:"suiShowProgress",suiValue:"suiValue",suiMaxValue:"suiMaxValue"},ngContentSelectors:I0,decls:5,vars:5,consts:[[3,"ngClass"],[1,"bar"],[1,"progress"],[1,"label"]],template:function(a,s){a&1&&(we(),i(0,"div",0)(1,"div",1),me(2,k0,2,1,"div",2),t(),i(3,"div",3),_e(4),t()()),a&2&&(d("ngClass",s.classes),Di("data-percent",s.progressPercentage),l(),Pi("width",s.progressPercentage,"%"),l(),pe(s.suiShowProgress?2:-1))},dependencies:[ie,it],styles:["[_nghost-%COMP%]{width:100%}"]})}}return F([A()],n.prototype,"suiIndicating",void 0),F([A()],n.prototype,"disabled",void 0),F([A()],n.prototype,"suiInverted",void 0),F([A()],n.prototype,"suiShowProgress",void 0),n})(),Xa=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[re]})}}return n})();var le=class{constructor(){this.standardValue=31,this.indicatingValue=40}addToStandard(m){let o=this.standardValue+m;o>100?o=100:o<0&&(o=0),this.standardValue=o}addToIndicating(m){let o=this.indicatingValue+m;o>100?o=100:o<0&&(o=0),this.indicatingValue=o}},qa=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-standard-example"]],standalone:!1,features:[v],decls:2,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Uploading Files
`),t()),a&2&&d("suiValue",s.standardValue)},dependencies:[re],encapsulation:2})}}return n})(),Za=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-indicating-example"]],standalone:!1,features:[v],decls:2,vars:2,consts:[["suiIndicating","","suiState","active",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1),t()),a&2&&(d("suiValue",s.indicatingValue),l(),Te(" ",s.indicatingValue,`% Funded
`))},dependencies:[re],encapsulation:2})}}return n})(),Ka=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-bar-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[[3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&d("suiValue",28)},dependencies:[re],encapsulation:2})}}return n})(),Qa=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-progress-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&d("suiValue",35)},dependencies:[re],encapsulation:2})}}return n})(),es=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-label-example"]],standalone:!1,features:[v],decls:2,vars:1,consts:[["suiShowProgress","",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Uploading Files
`),t()),a&2&&d("suiValue",45)},dependencies:[re],encapsulation:2})}}return n})(),ts=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-active-example"]],standalone:!1,features:[v],decls:2,vars:1,consts:[["suiState","active",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Uploading Files
`),t()),a&2&&d("suiValue",51)},dependencies:[re],encapsulation:2})}}return n})(),is=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-success-example"]],standalone:!1,features:[v],decls:2,vars:1,consts:[["suiState","success",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Everything worked, your file is all ready.
`),t()),a&2&&d("suiValue",100)},dependencies:[re],encapsulation:2})}}return n})(),ns=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-warning-example"]],standalone:!1,features:[v],decls:2,vars:1,consts:[["suiState","warning",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Your file didn't meet the minimum resolution requirements.
`),t()),a&2&&d("suiValue",100)},dependencies:[re],encapsulation:2})}}return n})(),os=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-error-example"]],standalone:!1,features:[v],decls:2,vars:1,consts:[["suiState","error",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` There was an error.
`),t()),a&2&&d("suiValue",100)},dependencies:[re],encapsulation:2})}}return n})(),as=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-disabled-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["disabled","",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0),a&2&&d("suiValue",38)},dependencies:[re],encapsulation:2})}}return n})(),ss=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-inverted-example"]],standalone:!1,features:[v],decls:9,vars:4,consts:[["sui-segment","","suiInverted",""],["suiInverted","","suiShowProgress","",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","success",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","warning",3,"suiValue"],["suiInverted","","suiShowProgress","","suiState","error",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"sui-progress",1),e(2," Uploading Files "),t(),i(3,"sui-progress",2),e(4," Success "),t(),i(5,"sui-progress",3),e(6," Warning "),t(),i(7,"sui-progress",4),e(8," Error "),t()()),a&2&&(l(),d("suiValue",15),l(2),d("suiValue",100),l(2),d("suiValue",100),l(2),d("suiValue",100))},dependencies:[B,re],encapsulation:2})}}return n})(),rs=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-attached-example"]],standalone:!1,features:[v],decls:5,vars:2,consts:[["sui-segment",""],["suiAttached","top",3,"suiValue"],[2,"margin","20px"],["suiAttached","bottom",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-progress",1),i(2,"p",2),e(3,"La la la la"),t(),r(4,"sui-progress",3),t()),a&2&&(l(),d("suiValue",21),l(3),d("suiValue",31))},dependencies:[B,re],encapsulation:2})}}return n})(),ls=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-card-attached-example"]],standalone:!1,features:[v],decls:14,vars:1,consts:[["sui-card",""],["suiCardImage",""],["src","/assets/images/wireframes/image.png"],["suiCardContent",""],["suiCardHeader",""],["suiCardMeta",""],[1,"date"],["suiCardExtra",""],["sui-icon","","suiIconType","user"],["suiAttached","bottom",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1),r(2,"img",2),t(),i(3,"div",3)(4,"a",4),e(5,"Project"),t(),i(6,"div",5)(7,"span",6),e(8,"Started in 2014"),t()()(),i(9,"div",7)(10,"a"),r(11,"i",8),e(12," 22 Friends "),t()(),r(13,"sui-progress",9),t()),a&2&&(l(13),d("suiValue",31))},dependencies:[Yt,dn,Ut,Nt,ln,$t,E,re],encapsulation:2})}}return n})(),ds=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-size-example"]],standalone:!1,features:[v],decls:10,vars:5,consts:[["suiSize","tiny",3,"suiValue"],["suiSize","small",3,"suiValue"],[3,"suiValue"],["suiSize","large",3,"suiValue"],["suiSize","big",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"sui-progress",0),e(1,` Tiny
`),t(),i(2,"sui-progress",1),e(3,` Small
`),t(),i(4,"sui-progress",2),e(5,` Standard
`),t(),i(6,"sui-progress",3),e(7,` Large
`),t(),i(8,"sui-progress",4),e(9,` Big
`),t()),a&2&&(d("suiValue",61),l(2),d("suiValue",21),l(2),d("suiValue",41),l(2),d("suiValue",5),l(2),d("suiValue",14))},dependencies:[re],encapsulation:2})}}return n})(),ms=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-colour-example"]],standalone:!1,features:[v],decls:13,vars:13,consts:[["suiColour","red",3,"suiValue"],["suiColour","orange",3,"suiValue"],["suiColour","yellow",3,"suiValue"],["suiColour","olive",3,"suiValue"],["suiColour","green",3,"suiValue"],["suiColour","teal",3,"suiValue"],["suiColour","blue",3,"suiValue"],["suiColour","violet",3,"suiValue"],["suiColour","purple",3,"suiValue"],["suiColour","pink",3,"suiValue"],["suiColour","brown",3,"suiValue"],["suiColour","grey",3,"suiValue"],["suiColour","black",3,"suiValue"]],template:function(a,s){a&1&&r(0,"sui-progress",0)(1,"sui-progress",1)(2,"sui-progress",2)(3,"sui-progress",3)(4,"sui-progress",4)(5,"sui-progress",5)(6,"sui-progress",6)(7,"sui-progress",7)(8,"sui-progress",8)(9,"sui-progress",9)(10,"sui-progress",10)(11,"sui-progress",11)(12,"sui-progress",12),a&2&&(d("suiValue",59),l(),d("suiValue",31),l(),d("suiValue",48),l(),d("suiValue",35),l(),d("suiValue",35),l(),d("suiValue",31),l(),d("suiValue",35),l(),d("suiValue",18),l(),d("suiValue",22),l(),d("suiValue",50),l(),d("suiValue",18),l(),d("suiValue",56),l(),d("suiValue",45))},dependencies:[re],encapsulation:2})}}return n})(),ps=(()=>{class n extends le{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress-inverted-colour-example"]],standalone:!1,features:[v],decls:14,vars:13,consts:[["sui-segment","","suiInverted",""],["suiInverted","","suiShowProgress","","suiColour","red",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","orange",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","yellow",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","olive",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","green",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","teal",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","blue",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","violet",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","purple",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","pink",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","brown",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","grey",3,"suiValue"],["suiInverted","","suiShowProgress","","suiColour","black",3,"suiValue"]],template:function(a,s){a&1&&(i(0,"div",0),r(1,"sui-progress",1)(2,"sui-progress",2)(3,"sui-progress",3)(4,"sui-progress",4)(5,"sui-progress",5)(6,"sui-progress",6)(7,"sui-progress",7)(8,"sui-progress",8)(9,"sui-progress",9)(10,"sui-progress",10)(11,"sui-progress",11)(12,"sui-progress",12)(13,"sui-progress",13),t()),a&2&&(l(),d("suiValue",59),l(),d("suiValue",31),l(),d("suiValue",48),l(),d("suiValue",35),l(),d("suiValue",35),l(),d("suiValue",31),l(),d("suiValue",35),l(),d("suiValue",18),l(),d("suiValue",22),l(),d("suiValue",50),l(),d("suiValue",18),l(),d("suiValue",56),l(),d("suiValue",45))},dependencies:[B,re],encapsulation:2})}}return n})();function A0(n,m){n&1&&r(0,"doc-progress-standard-example")}function V0(n,m){n&1&&r(0,"doc-progress-indicating-example")}function B0(n,m){n&1&&r(0,"doc-progress-bar-example")}function O0(n,m){n&1&&r(0,"doc-progress-progress-example")}function L0(n,m){n&1&&r(0,"doc-progress-label-example")}function H0(n,m){n&1&&r(0,"doc-progress-active-example")}function W0(n,m){n&1&&r(0,"doc-progress-success-example")}function R0(n,m){n&1&&r(0,"doc-progress-warning-example")}function z0(n,m){n&1&&r(0,"doc-progress-error-example")}function j0(n,m){n&1&&r(0,"doc-progress-disabled-example")}function N0(n,m){n&1&&r(0,"doc-progress-inverted-example")}function U0(n,m){n&1&&r(0,"doc-progress-attached-example")}function $0(n,m){n&1&&r(0,"doc-progress-card-attached-example")}function Y0(n,m){n&1&&r(0,"doc-progress-size-example")}function G0(n,m){n&1&&r(0,"doc-progress-colour-example")}function X0(n,m){n&1&&r(0,"doc-progress-inverted-colour-example")}function J0(n,m){if(n&1){let o=ae();i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Standard"),t(),i(6,"p"),e(7,"A standard progress bar"),t(),h(8,A0,1,0,"ng-template",5),t(),i(9,"div")(10,"div",6)(11,"button",7),S("click",function(){I(o);let s=b();return k(s.addToStandard(-11))}),r(12,"i",8),t(),i(13,"button",9),S("click",function(){I(o);let s=b();return k(s.addToStandard(11))}),r(14,"i",10),t()()(),i(15,"doc-code-sample",11)(16,"h3",4),e(17,"Indicating"),t(),i(18,"p"),e(19,"An indicating progress bar visually indicates the current level of progress of a task"),t(),h(20,V0,1,0,"ng-template",5),t(),i(21,"div")(22,"div",6)(23,"button",7),S("click",function(){I(o);let s=b();return k(s.addToIndicating(-13))}),r(24,"i",8),t(),i(25,"button",9),S("click",function(){I(o);let s=b();return k(s.addToIndicating(13))}),r(26,"i",10),t()()(),i(27,"h2",2),e(28,"Content"),t(),i(29,"doc-code-sample",3)(30,"h3",4),e(31,"Bar"),t(),i(32,"p"),e(33,"A progress element can contain a bar visually indicating progress"),t(),h(34,B0,1,0,"ng-template",5),t(),i(35,"doc-code-sample",3)(36,"h3",4),e(37,"Progress"),t(),i(38,"p"),e(39,"A progress bar can contain a text value indicating current progress"),t(),h(40,O0,1,0,"ng-template",5),t(),i(41,"doc-code-sample",3)(42,"h3",4),e(43,"Label"),t(),i(44,"p"),e(45,"A progress element can contain a label"),t(),h(46,L0,1,0,"ng-template",5),t(),i(47,"h2",2),e(48,"States"),t(),i(49,"doc-code-sample",3)(50,"h3",4),e(51,"Active"),t(),i(52,"p"),e(53,"A progress bar can show activity"),t(),h(54,H0,1,0,"ng-template",5),t(),i(55,"doc-code-sample",3)(56,"h3",4),e(57,"Success"),t(),i(58,"p"),e(59,"A progress bar can show a success state"),t(),h(60,W0,1,0,"ng-template",5),t(),i(61,"doc-code-sample",3)(62,"h3",4),e(63,"Warning"),t(),i(64,"p"),e(65,"A progress bar can show a warning state"),t(),h(66,R0,1,0,"ng-template",5),t(),i(67,"doc-code-sample",3)(68,"h3",4),e(69,"Error"),t(),i(70,"p"),e(71,"A progress bar can show an error state"),t(),h(72,z0,1,0,"ng-template",5),t(),i(73,"doc-code-sample",3)(74,"h3",4),e(75,"Disabled"),t(),i(76,"p"),e(77,"A progress bar can show an error state"),t(),h(78,j0,1,0,"ng-template",5),t(),i(79,"h2",2),e(80,"Variations"),t(),i(81,"doc-code-sample",3)(82,"h3",4),e(83,"Inverted"),t(),i(84,"p"),e(85,"A progress bar can have its colors inverted"),t(),h(86,N0,1,0,"ng-template",5),t(),i(87,"doc-code-sample",3)(88,"h3",4),e(89,"Attached"),t(),i(90,"p"),e(91,"AA progress bar can show progress of an element"),t(),h(92,U0,1,0,"ng-template",5),t(),i(93,"doc-code-sample",3),h(94,$0,1,0,"ng-template",5),t(),i(95,"doc-code-sample",3)(96,"h3",4),e(97,"Size"),t(),i(98,"p"),e(99,"A progress bar can vary in size"),t(),i(100,"div",12),e(101," Some small sizes may not be able to fit an inlined label "),t(),h(102,Y0,1,0,"ng-template",5),t(),i(103,"doc-code-sample",3)(104,"h3",4),e(105,"Colours"),t(),i(106,"p"),e(107,"Can have different colours"),t(),h(108,G0,1,0,"ng-template",5),t(),i(109,"doc-code-sample",3)(110,"h3",4),e(111,"Inverted Colours"),t(),i(112,"p"),e(113,"These colors can also be inverted for improved contrast on dark backgrounds"),t(),h(114,X0,1,0,"ng-template",5),t()()}if(n&2){let o=b();l(3),d("templateCode",o.snippetStandard),l(12),d("templateCode",o.snippetIndicating)("componentCode",o.snippetIndicatingTs),l(14),d("templateCode",o.snippetBar),l(6),d("templateCode",o.snippetProgress),l(6),d("templateCode",o.snippetStandard),l(8),d("templateCode",o.snippetActive),l(6),d("templateCode",o.snippetSuccess),l(6),d("templateCode",o.snippetWarning),l(6),d("templateCode",o.snippetError),l(6),d("templateCode",o.snippetDisabled),l(8),d("templateCode",o.snippetInverted),l(6),d("templateCode",o.snippetAttached),l(6),d("templateCode",o.snippetCardAttached),l(2),d("templateCode",o.snippetSize),l(8),d("templateCode",o.snippetColour),l(6),d("templateCode",o.snippetInvertedColour)}}function q0(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-progress"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",13)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiColour"),t(),i(20,"td"),e(21,"Set the progress colour. Allowed values could be "),i(22,"span",14),e(23,"'red'"),t(),e(24," | "),i(25,"span",14),e(26,"'orange'"),t(),e(27," | "),i(28,"span",14),e(29,"'yellow'"),t(),e(30," | "),i(31,"span",14),e(32,"'olive'"),t(),e(33," | "),i(34,"span",14),e(35,"'green'"),t(),e(36," | "),i(37,"span",14),e(38,"'teal'"),t(),e(39," | "),i(40,"span",14),e(41,"'blue'"),t(),e(42," | "),i(43,"span",14),e(44,"'violet'"),t(),e(45," | "),i(46,"span",14),e(47,"'purple'"),t(),e(48," | "),i(49,"span",14),e(50,"'pink'"),t(),e(51," | "),i(52,"span",14),e(53,"'brown'"),t(),e(54," | "),i(55,"span",14),e(56,"'grey'"),t(),e(57," | "),i(58,"span",14),e(59,"'black'"),t(),e(60," | "),i(61,"span",14),e(62,"null"),t()(),i(63,"td")(64,"div",15),e(65," string "),t()(),i(66,"td")(67,"div",16),e(68," null "),t()()(),i(69,"tr")(70,"td"),e(71,"suiSize"),t(),i(72,"td"),e(73,"Set the progress size. Allowed values could be "),i(74,"span",14),e(75,"'mini'"),t(),e(76," | "),i(77,"span",14),e(78,"'tiny'"),t(),e(79," | "),i(80,"span",14),e(81,"'small'"),t(),e(82," | "),i(83,"span",14),e(84,"'medium'"),t(),e(85," | "),i(86,"span",14),e(87,"'big'"),t(),e(88," | "),i(89,"span",14),e(90,"'huge'"),t(),e(91," | "),i(92,"span",14),e(93,"'massive'"),t(),e(94," | "),i(95,"span",14),e(96,"null"),t()(),i(97,"td")(98,"div",15),e(99," string "),t()(),i(100,"td")(101,"div",16),e(102," null "),t()()(),i(103,"tr")(104,"td"),e(105,"suiState"),t(),i(106,"td"),e(107," Determines the progress' state. Allowed values could be "),i(108,"span",14),e(109,"'active'"),t(),e(110," | "),i(111,"span",14),e(112,"'success'"),t(),e(113," | "),i(114,"span",14),e(115,"'warning'"),t(),e(116," | "),i(117,"span",14),e(118,"'error'"),t(),e(119," | "),i(120,"span",14),e(121,"null"),t()(),i(122,"td")(123,"div",15),e(124,"string"),t()(),i(125,"td")(126,"div",16),e(127,"null"),t()()(),i(128,"tr")(129,"td"),e(130,"suiAttached"),t(),i(131,"td"),e(132," Determines the progress' attachment position. Allowed values could be "),i(133,"span",14),e(134,"'bottom'"),t(),e(135," | "),i(136,"span",14),e(137,"'top'"),t(),e(138," | "),i(139,"span",14),e(140,"null"),t()(),i(141,"td")(142,"div",15),e(143,"string"),t()(),i(144,"td")(145,"div",16),e(146,"null"),t()()(),i(147,"tr")(148,"td"),e(149,"suiIndicating"),t(),i(150,"td"),e(151," Determines if the progress is indicating "),t(),i(152,"td")(153,"div",15),e(154,"boolean"),t()(),i(155,"td")(156,"div",16),e(157,"false"),t()()(),i(158,"tr")(159,"td"),e(160,"disabled"),t(),i(161,"td"),e(162," Determines if the progress is disabled "),t(),i(163,"td")(164,"div",15),e(165,"boolean"),t()(),i(166,"td")(167,"div",16),e(168,"false"),t()()(),i(169,"tr")(170,"td"),e(171,"suiInverted"),t(),i(172,"td"),e(173,"Determines whether the progress bar uses inverted colours"),t(),i(174,"td")(175,"div",15),e(176,"boolean"),t()(),i(177,"td")(178,"div",16),e(179,"false"),t()()(),i(180,"tr")(181,"td"),e(182,"suiShowProgress"),t(),i(183,"td"),e(184,"Determines whether the progress percentage is displayed"),t(),i(185,"td")(186,"div",15),e(187,"boolean"),t()(),i(188,"td")(189,"div",16),e(190,"false"),t()()()()()())}var us=(()=>{class n{constructor(o){this.snippetStandard=Fa,this.snippetIndicating=Aa,this.snippetIndicatingTs=Va,this.snippetBar=Ba,this.snippetProgress=Oa,this.snippetActive=La,this.snippetSuccess=Ha,this.snippetWarning=Wa,this.snippetError=Ra,this.snippetDisabled=za,this.snippetInverted=ja,this.snippetAttached=Na,this.snippetCardAttached=Ua,this.snippetSize=$a,this.snippetColour=Ya,this.snippetInvertedColour=Ga,this.standardValue=31,this.indicatingValue=40,o.setTitle("Progress | Ngx Semantic")}addToStandard(o){let a=this.standardValue+o;a>100?a=100:a<0&&(a=0),this.standardValue=a}addToIndicating(o){let a=this.indicatingValue+o;a>100?a=100:a<0&&(a=0),this.indicatingValue=a}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-progress"]],standalone:!1,decls:3,vars:2,consts:[["header","Progress","subHeader","A progress bar shows the progression of a task"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],["sui-buttons",""],["sui-button","","suiIcon","","suiBasic","","suiColour","red",3,"click"],["sui-icon","","suiIconType","minus"],["sui-button","","suiIcon","","suiBasic","","suiColour","green",3,"click"],["sui-icon","","suiIconType","plus"],[3,"templateCode","componentCode"],["sui-message","","suiState","info"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,J0,115,17,"div",1)(2,q0,191,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,C,U,E,se,qa,Za,Ka,Qa,es,ts,is,ns,os,as,ss,rs,ls,ds,ms,ps],encapsulation:2})}}return n})();var cs=`<button sui-button suiIcon
        sui-popup suiPopupContent="Add users to your feed">
  <i sui-icon suiIconType="add"></i>
</button>
`;var hs=`<img sui-image suiAvatar
     sui-popup suiPopupTitle="Elliot Fu" suiPopupContent="Elliot has been a member since July 2012"
     src="/assets/images/elliot.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Stevie Feliciano" suiPopupContent="Stevie has been a member since August 2013"
     src="/assets/images/stevie.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Matt" suiPopupContent="Matt has been a member since July 2014"
     src="/assets/images/matt.jpg"/>
`;var fs=`<div sui-card
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
`;var Ss=`<button sui-button suiIcon
        sui-popup suiPopupBasic suiPopupContent="The default theme's basic popup removes the pointing arrow.">
  <i sui-icon suiIconType="add"></i>
</button>
`;var gs=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="wide"
   suiPopupContent="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="very wide"
   suiPopupContent="Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
`;var vs=`<div sui-button
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
`;var xs=`<i sui-icon suiCircular suiLink suiIconType="heart"
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
`;var bs=`<div sui-button
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
`;var Es=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup"></i>
<button sui-button suiIcon
        sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup">
  <i sui-icon suiIconType="add"></i>
</button>
`;var ys=`<i sui-icon suiCircular suiColour="red" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="bottom left" suiPopupContent="This is a bottom left popup"></i>
<i sui-icon suiCircular suiColour="teal" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="top right" suiPopupContent="This is a top right popup"></i>
`;function rc(n,m){n&1&&r(0,"sui-rating",12)}function lc(n,m){n&1&&(i(0,"div",2)(1,"div",3),e(2,"1"),t(),i(3,"div",3),e(4,"2"),t(),i(5,"div",3),e(6,"3"),t(),i(7,"div",3),e(8,"4"),t()())}function dc(n,m){n&1&&(i(0,"div",2)(1,"div",3)(2,"div",4),e(3,"Basic Plan"),t(),i(4,"p")(5,"b"),e(6,"2"),t(),e(7," projects, $10 a month"),t(),i(8,"div",5),e(9,"Choose"),t()(),i(10,"div",3)(11,"div",4),e(12,"Business Plan"),t(),i(13,"p")(14,"b"),e(15,"5"),t(),e(16," projects, $20 a month"),t(),i(17,"div",5),e(18,"Choose"),t()(),i(19,"div",3)(20,"div",4),e(21,"Premium Plan"),t(),i(22,"p")(23,"b"),e(24,"8"),t(),e(25," projects, $25 a month"),t(),i(26,"div",5),e(27,"Choose"),t()()())}var Cs=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-standard-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-button","","suiIcon","","sui-popup","","suiPopupContent","Add users to your feed"],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(i(0,"button",0),r(1,"i",1),t())},dependencies:[C,E,Ae],encapsulation:2})}}return n})(),ws=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-titled-example"]],standalone:!1,decls:3,vars:0,consts:[["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Elliot Fu","suiPopupContent","Elliot has been a member since July 2012","src","/assets/images/elliot.jpg"],["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Stevie Feliciano","suiPopupContent","Stevie has been a member since August 2013","src","/assets/images/stevie.jpg"],["sui-image","","suiAvatar","","sui-popup","","suiPopupTitle","Matt","suiPopupContent","Matt has been a member since July 2014","src","/assets/images/matt.jpg"]],template:function(a,s){a&1&&r(0,"img",0)(1,"img",1)(2,"img",2)},dependencies:[G,Ae],encapsulation:2})}}return n})(),_s=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-html-example"]],standalone:!1,decls:17,vars:1,consts:[["popupContent",""],["sui-card","","sui-popup","","suiPopupTitle","User Rating",3,"suiPopupContent"],["suiCardImage",""],["src","https://semantic-ui.com/images/movies/watchmen-horizontal.jpg"],["suiCardContent",""],["suiCardHeader",""],["suiCardDescription",""],["sui-buttons","","suiAttached","","suiWidth","two","suiAttachedPosition","bottom"],["sui-button",""],["sui-icon","","suiIconType","add"],["sui-button","","suiEmphasis","primary"],["sui-icon","","suiIconType","play"],["suiValue","3","suiMaxValue","5"]],template:function(a,s){if(a&1&&(i(0,"div",1)(1,"div",2),r(2,"img",3),t(),i(3,"div",4)(4,"div",5),e(5,"Watchmen"),t(),i(6,"div",6),e(7," In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. "),t()(),i(8,"div",7)(9,"div",8),r(10,"i",9),e(11," Queue "),t(),i(12,"div",10),r(13,"i",11),e(14," Watch "),t()()(),h(15,rc,1,0,"ng-template",null,0,$e)),a&2){let u=V(16);d("suiPopupContent",u)}},dependencies:[Yt,Ut,Nt,jt,$t,ht,C,U,E,Ae],encapsulation:2})}}return n})(),Ds=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-basic-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-button","","suiIcon","","sui-popup","","suiPopupBasic","","suiPopupContent","The default theme's basic popup removes the pointing arrow."],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(i(0,"button",0),r(1,"i",1),t())},dependencies:[C,E,Ae],encapsulation:2})}}return n})(),Ts=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-width-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupWidth","wide","suiPopupContent","Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupWidth","very wide","suiPopupContent","Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)},dependencies:[E,Ae],encapsulation:2})}}return n})(),Ms=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-fluid-example"]],standalone:!1,decls:4,vars:1,consts:[["fluidPopup",""],["sui-button","","sui-popup","",3,"suiPopupContent"],["sui-grid","","suiDivided","divided","suiAlignment","center aligned","suiWidth","four"],["suiGridColumn",""]],template:function(a,s){if(a&1&&(i(0,"div",1),e(1,` Show fluid popup
`),t(),h(2,lc,9,0,"ng-template",null,0,$e)),a&2){let u=V(3);d("suiPopupContent",u)}},dependencies:[C,ii,ni,Ae],encapsulation:2})}}return n})(),Is=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-size-example"]],standalone:!1,decls:5,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","mini","suiPopupContent","Hello. This is a mini popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","tiny","suiPopupContent","Hello. This is a tiny popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","small","suiPopupContent","Hello. This is a small popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","large","suiPopupContent","Hello. This is a large popup"],["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupSize","huge","suiPopupContent","Hello. This is a huge popup"]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)(2,"i",2)(3,"i",3)(4,"i",4)},dependencies:[E,Ae],encapsulation:2})}}return n})(),ks=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-flowing-example"]],standalone:!1,decls:4,vars:1,consts:[["flowingTemplate",""],["sui-button","","sui-popup","","suiPopupFlowing","",3,"suiPopupContent"],["sui-grid","","suiDivided","divided","suiAlignment","center aligned","suiWidth","three"],["suiGridColumn",""],["sui-header",""],["sui-button",""]],template:function(a,s){if(a&1&&(i(0,"div",1),e(1,` Show flowing popup
`),t(),h(2,dc,28,0,"ng-template",null,0,$e)),a&2){let u=V(3);d("suiPopupContent",u)}},dependencies:[y,C,ii,ni,Ae],encapsulation:2})}}return n})(),Ps=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-inverted-example"]],standalone:!1,decls:3,vars:0,consts:[["sui-icon","","suiCircular","","suiLink","","suiIconType","heart","sui-popup","","suiPopupInverted","","suiPopupContent","Hello. This is an inverted popup"],["sui-button","","suiIcon","","sui-popup","","suiPopupInverted","","suiPopupContent","Hello. This is an inverted popup"],["sui-icon","","suiIconType","add"]],template:function(a,s){a&1&&(r(0,"i",0),i(1,"button",1),r(2,"i",2),t())},dependencies:[C,E,Ae],encapsulation:2})}}return n})(),Fs=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup-position-example"]],standalone:!1,decls:2,vars:0,consts:[["sui-icon","","suiCircular","","suiColour","red","suiSize","big","suiIconType","heart","sui-popup","","suiPopupPlacement","bottom left","suiPopupContent","This is a bottom left popup"],["sui-icon","","suiCircular","","suiColour","teal","suiSize","big","suiIconType","heart","sui-popup","","suiPopupPlacement","top right","suiPopupContent","This is a top right popup"]],template:function(a,s){a&1&&r(0,"i",0)(1,"i",1)},dependencies:[E,Ae],encapsulation:2})}}return n})();function pc(n,m){n&1&&r(0,"doc-popup-standard-example")}function uc(n,m){n&1&&r(0,"doc-popup-titled-example")}function cc(n,m){n&1&&r(0,"doc-popup-html-example")}function hc(n,m){n&1&&r(0,"doc-popup-basic-example")}function fc(n,m){n&1&&r(0,"doc-popup-width-example")}function Sc(n,m){n&1&&r(0,"doc-popup-fluid-example")}function gc(n,m){n&1&&r(0,"doc-popup-size-example")}function vc(n,m){n&1&&r(0,"doc-popup-flowing-example")}function xc(n,m){n&1&&r(0,"doc-popup-inverted-example")}function bc(n,m){n&1&&r(0,"doc-popup-position-example")}function Ec(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Popup"),t(),i(6,"p"),e(7,"An element can specify popup content to appear"),t(),i(8,"div",5),e(9," Popup relies on "),i(10,"a",6),e(11,"Angular CDK"),t(),e(12,". Ensure that you have the latest version compatible with your Angular version "),t(),h(13,pc,1,0,"ng-template",7),t(),i(14,"doc-code-sample",3)(15,"h3",4),e(16,"Titled"),t(),i(17,"p"),e(18,"An element can specify popup content with a title"),t(),h(19,uc,1,0,"ng-template",7),t(),i(20,"doc-code-sample",3)(21,"h3",4),e(22,"HTML"),t(),i(23,"p"),e(24,"An element can specify template HTML for a popup"),t(),h(25,cc,1,0,"ng-template",7),t(),i(26,"h2",2),e(27,"Variations"),t(),i(28,"doc-code-sample",3)(29,"h3",4),e(30,"Basic"),t(),i(31,"p"),e(32,"A popup can provide more basic formatting"),t(),h(33,hc,1,0,"ng-template",7),t(),i(34,"doc-code-sample",3)(35,"h3",4),e(36,"Width"),t(),i(37,"p"),e(38,"A popup can be extra wide to allow for longer content"),t(),h(39,fc,1,0,"ng-template",7),t(),i(40,"doc-code-sample",3)(41,"h3",4),e(42,"Fluid"),t(),i(43,"p"),e(44,"A fluid popup will take up the entire width of its offset container"),t(),h(45,Sc,1,0,"ng-template",7),t(),i(46,"doc-code-sample",3)(47,"h3",4),e(48,"Size"),t(),i(49,"p"),e(50,"A popup can vary in size"),t(),h(51,gc,1,0,"ng-template",7),t(),i(52,"doc-code-sample",3)(53,"h3",4),e(54,"Flowing"),t(),i(55,"p"),e(56,"A popup can have no maximum width and continue to flow to fit its content"),t(),h(57,vc,1,0,"ng-template",7),t(),i(58,"doc-code-sample",3)(59,"h3",4),e(60,"Inverted"),t(),i(61,"p"),e(62,"A popup can have its colors inverted"),t(),h(63,xc,1,0,"ng-template",7),t(),i(64,"doc-code-sample",3)(65,"h3",4),e(66,"Position"),t(),i(67,"p"),e(68,"A popup can be position around its trigger"),t(),h(69,bc,1,0,"ng-template",7),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetStandard),l(11),d("templateCode",o.snippetTitled),l(6),d("templateCode",o.snippetHtml),l(8),d("templateCode",o.snippetBasic),l(6),d("templateCode",o.snippetWidth),l(6),d("templateCode",o.snippetFluid),l(6),d("templateCode",o.snippetSize),l(6),d("templateCode",o.snippetFlowing),l(6),d("templateCode",o.snippetInverted),l(6),d("templateCode",o.snippetPosition)}}function yc(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-popup"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiPopupPlacement"),t(),i(20,"td"),e(21,"Set the popup's position. Allowed values could be "),i(22,"span",9),e(23,"'top left'"),t(),e(24," | "),i(25,"span",9),e(26,"'top center'"),t(),e(27," | "),i(28,"span",9),e(29,"'top right'"),t(),e(30," | "),i(31,"span",9),e(32,"'bottom left'"),t(),e(33," | "),i(34,"span",9),e(35,"'bottom center'"),t(),e(36," | "),i(37,"span",9),e(38,"'bottom right'"),t(),e(39," | "),i(40,"span",9),e(41,"'right center'"),t(),e(42," | "),i(43,"span",9),e(44,"'left center'"),t()(),i(45,"td")(46,"div",10),e(47," string "),t()(),i(48,"td")(49,"div",11),e(50," top left "),t()()(),i(51,"tr")(52,"td"),e(53,"suiPopupSize"),t(),i(54,"td"),e(55,"Set the popup size. Allowed values could be "),i(56,"span",9),e(57,"'mini'"),t(),e(58," | "),i(59,"span",9),e(60,"'tiny'"),t(),e(61," | "),i(62,"span",9),e(63,"'small'"),t(),e(64," | "),i(65,"span",9),e(66,"'medium'"),t(),e(67," | "),i(68,"span",9),e(69,"'big'"),t(),e(70," | "),i(71,"span",9),e(72,"'huge'"),t(),e(73," | "),i(74,"span",9),e(75,"'massive'"),t(),e(76," | "),i(77,"span",9),e(78,"null"),t()(),i(79,"td")(80,"div",10),e(81," string "),t()(),i(82,"td")(83,"div",11),e(84," null "),t()()(),i(85,"tr")(86,"td"),e(87,"suiPopupWidth"),t(),i(88,"td"),e(89," Determines the popup's width. Allowed values could be "),i(90,"span",9),e(91,"'wide'"),t(),e(92," | "),i(93,"span",9),e(94,"'very wide'"),t(),e(95," | "),i(96,"span",9),e(97,"null"),t()(),i(98,"td")(99,"div",10),e(100,"string"),t()(),i(101,"td")(102,"div",11),e(103,"null"),t()()(),i(104,"tr")(105,"td"),e(106,"suiPopupTrigger"),t(),i(107,"td"),e(108," Determines the popup's trigger. Allowed values could be "),i(109,"span",9),e(110,"'hover'"),t(),e(111," | "),i(112,"span",9),e(113,"'click'"),t()(),i(114,"td")(115,"div",10),e(116,"string"),t()(),i(117,"td")(118,"div",11),e(119,"hover"),t()()(),i(120,"tr")(121,"td"),e(122,"suiPopupTitle"),t(),i(123,"td"),e(124," What should get rendered as the popup's title/header "),t(),i(125,"td")(126,"div",10),e(127,"string"),t()(),i(128,"td")(129,"div",11),e(130,"null"),t()()(),i(131,"tr")(132,"td"),e(133,"suiPopupContent"),t(),i(134,"td"),e(135," What should get rendered as the popup's content. Could be a string or a template reference "),t(),i(136,"td")(137,"div",10),e(138,"string"),t(),e(139," | "),i(140,"div",10),e(141,"TemplateRef<any>"),t()(),i(142,"td")(143,"div",11),e(144,"null"),t()()(),i(145,"tr")(146,"td"),e(147,"suiPopupInverted"),t(),i(148,"td"),e(149," Determines if the popup uses inverted colours "),t(),i(150,"td")(151,"div",10),e(152,"boolean"),t()(),i(153,"td")(154,"div",11),e(155,"false"),t()()(),i(156,"tr")(157,"td"),e(158,"suiPopupFluid"),t(),i(159,"td"),e(160," Determines if the popup uses fluid styling "),t(),i(161,"td")(162,"div",10),e(163,"boolean"),t()(),i(164,"td")(165,"div",11),e(166,"false"),t()()(),i(167,"tr")(168,"td"),e(169,"suiPopupFlowing"),t(),i(170,"td"),e(171," Determines if the popup uses flowing styling "),t(),i(172,"td")(173,"div",10),e(174,"boolean"),t()(),i(175,"td")(176,"div",11),e(177,"false"),t()()(),i(178,"tr")(179,"td"),e(180,"suiPopupBasic"),t(),i(181,"td"),e(182,"Determines whether the popup uses basic styling and renders without the arrow"),t(),i(183,"td")(184,"div",10),e(185,"boolean"),t()(),i(186,"td")(187,"div",11),e(188,"false"),t()()()()()())}var As=(()=>{class n{constructor(o){this.snippetStandard=cs,this.snippetTitled=hs,this.snippetHtml=fs,this.snippetBasic=Ss,this.snippetWidth=gs,this.snippetFluid=vs,this.snippetSize=xs,this.snippetFlowing=bs,this.snippetInverted=Es,this.snippetPosition=ys,o.setTitle("Popup | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-popup"]],standalone:!1,decls:3,vars:2,consts:[["header","Popup","subHeader","A popup displays additional information on top of a page"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["href","https://www.npmjs.com/package/@angular/cdk"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Ec,70,10,"div",1)(2,yc,189,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,se,Cs,ws,_s,Ds,Ts,Ms,Is,ks,Ps,Fs],encapsulation:2})}}return n})();var Vs=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var Bs=`<sui-select
    suiFluid
    name="fluid"
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var Os=`<sui-select
    suiSearch
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var Ls=`<sui-select
    suiMultiple
    name="multiple"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var Hs=`<sui-select
    suiSearch
    suiMultiple
    name="multiple-search"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var Ws=`<sui-select
    name="flag"
    suiPlaceholder="Select Country"
    [suiOptions]="countries">
</sui-select>
`;var Rs=`<sui-select
    name="images"
    suiPlaceholder="Select User"
    [suiOptions]="persons">
</sui-select>
`;var zs=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions"
    [(ngModel)]="selectedGender"
    (suiSelectionChanged)="onSelectionChanged($event)">
</sui-select>

<p>
  Selected value: <strong>{{ selectedGender }}</strong><br>
  Last change event: <strong>{{ lastChange }}</strong>
</p>
`;var js=`<sui-select
    suiFluid
    suiMultiple
    suiLoading
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var Ns=`<sui-select
    suiError
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var Us=`<sui-select
    disabled
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var $s=`<sui-select
    suiScrolling
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var Ys=`<sui-select
    suiCompact
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var Gs=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var Xs=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var Js=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var qs=`countries: ISelectOption[] = [
  { text: 'Albania', value: 'al', flag: 'al' },
  { text: 'Angola', value: 'ao', flag: 'ao' },
  { text: 'Azerbaijan', value: 'az', flag: 'az' },
  { text: 'Botswana', value: 'bw', flag: 'bw' },
  { text: 'Nigeria', value: 'ng', flag: 'ng' },
];
`;var Zs=`persons: ISelectOption[] = [
  { text: 'Elliot', value: null, image: { avatar: true, src: '/assets/images/elliot.jpg'} },
  { text: 'Helen', value: null, image: { avatar: true, src: '/assets/images/helen.jpg'} },
  { text: 'Jenny', value: null, image: { avatar: true, src: '/assets/images/jenny.jpg'} },
  { text: 'Joe', value: null, image: { avatar: true, src: '/assets/images/joe.jpg'} },
  { text: 'Justen', value: null, image: { avatar: true, src: '/assets/images/justen.jpg'} },
  { text: 'Laura', value: null, image: { avatar: true, src: '/assets/images/laura.jpg'} },
  { text: 'Matt', value: null, image: { avatar: true, src: '/assets/images/matt.jpg'} },
  { text: 'Stevie', value: null, image: { avatar: true, src: '/assets/images/stevie.jpg'} },
];
`;var Ks=`selectedGender: number | null = 1;
lastChange: number | null = null;

genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];

onSelectionChanged(value: number): void {
  this.lastChange = value;
}
`;var Qs=`options: ISelectOption[] = [
  { text: 'Option 1', value: 'one' },
  { text: 'Option 2', value: 'two' },
  { text: 'Option 3', value: 'three' },
];
`;var er=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var tr=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var Ce=class{constructor(){this.selectedGender=1,this.lastChange=null,this.genderOptions=[{text:"Male",value:0},{text:"Female",value:1}],this.countries=[{text:"Albania",value:"al",flag:"al"},{text:"Angola",value:"ao",flag:"ao"},{text:"Azerbaijan",value:"az",flag:"az"},{text:"Botswana",value:"bw",flag:"bw"},{text:"Nigeria",value:"ng",flag:"ng"}],this.states=[{text:"Alabama",value:"AL"},{text:"Arizona",value:"AZ"},{text:"California",value:"CA"},{text:"District Of Columbia",value:"DC"},{text:"Idaho",value:"ID"},{text:"Indiana",value:"IN"},{text:"Kansas",value:"KS"},{text:"Louisiana",value:"LA"},{text:"Maryland",value:"MD"},{text:"Utah",value:"UT"}],this.persons=[{text:"Elliot",value:null,image:{avatar:!0,src:"/assets/images/elliot.jpg"}},{text:"Helen",value:null,image:{avatar:!0,src:"/assets/images/helen.jpg"}},{text:"Jenny",value:null,image:{avatar:!0,src:"/assets/images/jenny.jpg"}},{text:"Joe",value:null,image:{avatar:!0,src:"/assets/images/joe.jpg"}},{text:"Justen",value:null,image:{avatar:!0,src:"/assets/images/justen.jpg"}},{text:"Laura",value:null,image:{avatar:!0,src:"/assets/images/laura.jpg"}},{text:"Matt",value:null,image:{avatar:!0,src:"/assets/images/matt.jpg"}},{text:"Stevie",value:null,image:{avatar:!0,src:"/assets/images/stevie.jpg"}}],this.options=[{text:"Option 1",value:"one"},{text:"Option 2",value:"two"},{text:"Option 3",value:"three"}]}onSelectionChanged(m){this.lastChange=m}},ir=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-standard-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.genderOptions)},dependencies:[Me],encapsulation:2})}}return n})(),nr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-fluid-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiFluid","","name","fluid","suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.genderOptions)},dependencies:[Me],encapsulation:2})}}return n})(),or=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-multiple-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiMultiple","","name","multiple","suiPlaceholder","State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.states)},dependencies:[Me],encapsulation:2})}}return n})(),ar=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-multiple-search-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiSearch","","suiMultiple","","name","multiple-search","suiPlaceholder","State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.states)},dependencies:[Me],encapsulation:2})}}return n})(),sr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-flag-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["name","flag","suiPlaceholder","Select Country",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.countries)},dependencies:[Me],encapsulation:2})}}return n})(),rr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-images-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["name","images","suiPlaceholder","Select User",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.persons)},dependencies:[Me],encapsulation:2})}}return n})(),lr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-loading-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiFluid","","suiMultiple","","suiLoading","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.options)},dependencies:[Me],encapsulation:2})}}return n})(),dr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-error-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiError","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.options)},dependencies:[Me],encapsulation:2})}}return n})(),mr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-disabled-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["disabled","","suiPlaceholder","Dropdown",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.options)},dependencies:[Me],encapsulation:2})}}return n})(),pr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-search-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiSearch","","suiPlaceholder","Select State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.states)},dependencies:[Me],encapsulation:2})}}return n})(),ur=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-scrolling-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiScrolling","","suiPlaceholder","Select State",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.states)},dependencies:[Me],encapsulation:2})}}return n})(),cr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-compact-example"]],standalone:!1,features:[v],decls:1,vars:1,consts:[["suiCompact","","suiPlaceholder","Gender",3,"suiOptions"]],template:function(a,s){a&1&&r(0,"sui-select",0),a&2&&d("suiOptions",s.genderOptions)},dependencies:[Me],encapsulation:2})}}return n})(),hr=(()=>{class n extends Ce{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-select-two-way-example"]],standalone:!1,features:[v],decls:9,vars:4,consts:[["suiPlaceholder","Gender",3,"ngModelChange","suiSelectionChanged","suiOptions","ngModel"]],template:function(a,s){a&1&&(i(0,"sui-select",0),D("ngModelChange",function(p){return _(s.selectedGender,p)||(s.selectedGender=p),p}),S("suiSelectionChanged",function(p){return s.onSelectionChanged(p)}),t(),i(1,"p"),e(2," Selected value: "),i(3,"strong"),e(4),t(),r(5,"br"),e(6," Last change event: "),i(7,"strong"),e(8),t()()),a&2&&(d("suiOptions",s.genderOptions),w("ngModel",s.selectedGender),l(4),Ue(s.selectedGender),l(4),Ue(s.lastChange))},dependencies:[st,rt,Me],encapsulation:2})}}return n})();function Gc(n,m){n&1&&r(0,"doc-select-standard-example")}function Xc(n,m){n&1&&r(0,"doc-select-fluid-example")}function Jc(n,m){n&1&&r(0,"doc-select-search-example")}function qc(n,m){n&1&&r(0,"doc-select-multiple-example")}function Zc(n,m){n&1&&r(0,"doc-select-multiple-search-example")}function Kc(n,m){n&1&&r(0,"doc-select-flag-example")}function Qc(n,m){n&1&&r(0,"doc-select-images-example")}function eh(n,m){n&1&&r(0,"doc-select-two-way-example")}function th(n,m){n&1&&r(0,"doc-select-loading-example")}function ih(n,m){n&1&&r(0,"doc-select-error-example")}function nh(n,m){n&1&&r(0,"doc-select-disabled-example")}function oh(n,m){n&1&&r(0,"doc-select-scrolling-example")}function ah(n,m){n&1&&r(0,"doc-select-compact-example")}function sh(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Selection"),t(),i(6,"p"),e(7,"A standard select can be used to pick between choices in a form."),t(),h(8,Gc,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3),h(10,Xc,1,0,"ng-template",5),t(),i(11,"doc-code-sample",3)(12,"h3",4),e(13,"Search Selection"),t(),i(14,"p"),e(15,"A selection dropdown can allow a user to search through a large list of choices."),t(),h(16,Jc,1,0,"ng-template",5),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Multiple Selection"),t(),i(20,"p"),e(21,"A selection dropdown can allow multiple selections."),t(),i(22,"div",6),r(23,"i",7),i(24,"div",8)(25,"p"),e(26,"Selected values are emitted as an array."),t()()(),h(27,qc,1,0,"ng-template",5),t(),i(28,"doc-code-sample",3)(29,"h3",4),e(30,"Multiple Search Selection"),t(),i(31,"p"),e(32,"A selection dropdown can allow multiple search selections."),t(),h(33,Zc,1,0,"ng-template",5),t(),i(34,"doc-code-sample",3)(35,"h3",4),e(36,"Flag Selection"),t(),i(37,"p"),e(38,"A selection can include flag icons."),t(),i(39,"div",6),r(40,"i",7),i(41,"div",8)(42,"p"),e(43,"Set "),i(44,"span",9),e(45,"flag"),t(),e(46," on an option to the two-letter country code of the flag to show."),t()()(),h(47,Kc,1,0,"ng-template",5),t(),i(48,"doc-code-sample",3)(49,"h3",4),e(50,"Image Selection"),t(),i(51,"p"),e(52,"A selection can include images."),t(),h(53,Qc,1,0,"ng-template",5),t(),i(54,"h2",2),e(55,"Forms"),t(),i(56,"doc-code-sample",3)(57,"h3",4),e(58,"Form Binding"),t(),i(59,"p"),e(60,"A select is a form control. Use it with "),i(61,"span",9),e(62,"ngModel"),t(),e(63,", or with "),i(64,"span",9),e(65,"formControl"),t(),e(66," / "),i(67,"span",9),e(68,"formControlName"),t(),e(69," in reactive forms. The "),i(70,"span",9),e(71,"suiSelectionChanged"),t(),e(72," event also fires whenever the selection changes."),t(),i(73,"div",6),r(74,"i",7),i(75,"div",8)(76,"p"),e(77,"Form binding with "),i(78,"span",9),e(79,"ngModel"),t(),e(80," and reactive forms requires "),i(81,"span",9),e(82,"FormsModule"),t(),e(83," or "),i(84,"span",9),e(85,"ReactiveFormsModule"),t(),e(86,". Programmatic value writes are supported for single selection."),t()()(),h(87,eh,1,0,"ng-template",5),t(),i(88,"h2",2),e(89,"States"),t(),i(90,"doc-code-sample",3)(91,"h3",4),e(92,"Loading"),t(),i(93,"p"),e(94,"A dropdown can show that it is currently loading data."),t(),h(95,th,1,0,"ng-template",5),t(),i(96,"doc-code-sample",3)(97,"h3",4),e(98,"Error"),t(),i(99,"p"),e(100,"An errored dropdown can alert a user to a problem."),t(),h(101,ih,1,0,"ng-template",5),t(),i(102,"doc-code-sample",3)(103,"h3",4),e(104,"Disabled"),t(),i(105,"p"),e(106,"A disabled dropdown menu or item does not allow user interaction."),t(),h(107,nh,1,0,"ng-template",5),t(),i(108,"h2",2),e(109,"Variations"),t(),i(110,"doc-code-sample",3)(111,"h3",4),e(112,"Scrolling"),t(),i(113,"p"),e(114,"A selection dropdown can have its menu scroll."),t(),h(115,oh,1,0,"ng-template",5),t(),i(116,"doc-code-sample",3)(117,"h3",4),e(118,"Compact"),t(),i(119,"p"),e(120,"A compact selection dropdown has no minimum width."),t(),h(121,ah,1,0,"ng-template",5),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetStandard)("componentCode",o.snippetStandardTs),l(6),d("templateCode",o.snippetFluid)("componentCode",o.snippetStandardTs),l(2),d("templateCode",o.snippetSearch)("componentCode",o.snippetSearchTs),l(6),d("templateCode",o.snippetMultiple)("componentCode",o.snippetMultipleTs),l(11),d("templateCode",o.snippetMultipleSearch)("componentCode",o.snippetMultipleTs),l(6),d("templateCode",o.snippetFlag)("componentCode",o.snippetFlagsTs),l(14),d("templateCode",o.snippetImages)("componentCode",o.snippetImagesTs),l(8),d("templateCode",o.snippetTwoWay)("componentCode",o.snippetTwoWayTs),l(34),d("templateCode",o.snippetLoading)("componentCode",o.snippetStatesTs),l(6),d("templateCode",o.snippetError)("componentCode",o.snippetStatesTs),l(6),d("templateCode",o.snippetDisabled)("componentCode",o.snippetStatesTs),l(8),d("templateCode",o.snippetScrolling)("componentCode",o.snippetScrollingTs),l(6),d("templateCode",o.snippetCompact)("componentCode",o.snippetCompactTs)}}function rh(n,m){n&1&&(i(0,"div")(1,"div",6),r(2,"i",7),i(3,"div",8)(4,"p"),e(5," Import "),i(6,"span",9),e(7,"SuiSelectModule"),t(),e(8," from "),i(9,"span",9),e(10,"ngx-semantic/modules/select"),t(),e(11,". The select builds its own menu from "),i(12,"span",9),e(13,"suiOptions"),t(),e(14,", so you do not need to write menu markup. Looking for a menu of actions? See "),i(15,"a",10),e(16,"Dropdown"),t(),e(17,". "),t()()(),i(18,"h2",2),e(19,"sui-select"),t(),i(20,"p"),e(21,"Selector: "),i(22,"span",9),e(23,"sui-select"),t(),e(24,". Implements "),i(25,"span",9),e(26,"ControlValueAccessor"),t(),e(27," so it can be used with template-driven and reactive forms."),t(),i(28,"h4",4),e(29,"Properties"),t(),i(30,"table",11)(31,"thead")(32,"tr")(33,"th"),e(34,"Property"),t(),i(35,"th"),e(36,"Description"),t(),i(37,"th"),e(38,"Type"),t(),i(39,"th"),e(40,"Default"),t()()(),i(41,"tbody")(42,"tr")(43,"td"),e(44,"suiOptions"),t(),i(45,"td"),e(46,"The options to choose from. See "),i(47,"span",9),e(48,"ISelectOption"),t(),e(49," below."),t(),i(50,"td")(51,"div",12),e(52," ISelectOption[] "),t()(),i(53,"td")(54,"div",13),e(55," [] "),t()()(),i(56,"tr")(57,"td"),e(58,"suiPlaceholder"),t(),i(59,"td"),e(60,"The select\u2019s placeholder text."),t(),i(61,"td")(62,"div",12),e(63," string "),t()(),i(64,"td")(65,"div",13),e(66," null "),t()()(),i(67,"tr")(68,"td"),e(69,"suiSearch"),t(),i(70,"td"),e(71,"Determines if the select supports searching through its options."),t(),i(72,"td")(73,"div",12),e(74," boolean "),t()(),i(75,"td")(76,"div",13),e(77," false "),t()()(),i(78,"tr")(79,"td"),e(80,"suiMultiple"),t(),i(81,"td"),e(82,"Determines if the select allows for multiple selection. The selection is then an array of option values."),t(),i(83,"td")(84,"div",12),e(85," boolean "),t()(),i(86,"td")(87,"div",13),e(88," false "),t()()(),i(89,"tr")(90,"td"),e(91,"suiFluid"),t(),i(92,"td"),e(93,"Determines if the select is rendered as fluid, taking the full width of its parent."),t(),i(94,"td")(95,"div",12),e(96," boolean "),t()(),i(97,"td")(98,"div",13),e(99," false "),t()()(),i(100,"tr")(101,"td"),e(102,"suiInline"),t(),i(103,"td"),e(104,"Determines if the select is rendered inline."),t(),i(105,"td")(106,"div",12),e(107," boolean "),t()(),i(108,"td")(109,"div",13),e(110," false "),t()()(),i(111,"tr")(112,"td"),e(113,"suiLoading"),t(),i(114,"td"),e(115,"Determines if the select is rendered as loading."),t(),i(116,"td")(117,"div",12),e(118," boolean "),t()(),i(119,"td")(120,"div",13),e(121," false "),t()()(),i(122,"tr")(123,"td"),e(124,"suiError"),t(),i(125,"td"),e(126,"Determines if the select is rendered to depict an error."),t(),i(127,"td")(128,"div",12),e(129," boolean "),t()(),i(130,"td")(131,"div",13),e(132," false "),t()()(),i(133,"tr")(134,"td"),e(135,"disabled"),t(),i(136,"td"),e(137,"Determines if the select is disabled."),t(),i(138,"td")(139,"div",12),e(140," boolean "),t()(),i(141,"td")(142,"div",13),e(143," false "),t()()(),i(144,"tr")(145,"td"),e(146,"suiScrolling"),t(),i(147,"td"),e(148,"Determines if the select\u2019s menu is rendered as scrollable."),t(),i(149,"td")(150,"div",12),e(151," boolean "),t()(),i(152,"td")(153,"div",13),e(154," false "),t()()(),i(155,"tr")(156,"td"),e(157,"suiCompact"),t(),i(158,"td"),e(159,"Determines if the select is rendered as compact, with no minimum width."),t(),i(160,"td")(161,"div",12),e(162," boolean "),t()(),i(163,"td")(164,"div",13),e(165," false "),t()()(),i(166,"tr")(167,"td"),e(168,"name"),t(),i(169,"td"),e(170,"The component\u2019s name."),t(),i(171,"td")(172,"div",12),e(173," string "),t()(),i(174,"td")(175,"div",13),e(176," null "),t()()()()(),i(177,"h4",4),e(178,"Events"),t(),i(179,"table",11)(180,"thead")(181,"tr")(182,"th"),e(183,"Event"),t(),i(184,"th"),e(185,"Description"),t(),i(186,"th"),e(187,"Type"),t()()(),i(188,"tbody")(189,"tr")(190,"td"),e(191,"suiSelectionChanged"),t(),i(192,"td"),e(193,"Fired when the selection changes. Emits the selected option value, or an array of values when "),i(194,"span",9),e(195,"suiMultiple"),t(),e(196," is set."),t(),i(197,"td")(198,"div",12),e(199," any | any[] "),t()()()()(),i(200,"h2",2),e(201,"ISelectOption"),t(),i(202,"p"),e(203,"The shape of each entry in "),i(204,"span",9),e(205,"suiOptions"),t(),e(206,". Import it from "),i(207,"span",9),e(208,"ngx-semantic/modules/select"),t(),e(209,"."),t(),i(210,"h4",4),e(211,"Properties"),t(),i(212,"table",11)(213,"thead")(214,"tr")(215,"th"),e(216,"Property"),t(),i(217,"th"),e(218,"Description"),t(),i(219,"th"),e(220,"Type"),t(),i(221,"th"),e(222,"Default"),t()()(),i(223,"tbody")(224,"tr")(225,"td"),e(226,"text"),t(),i(227,"td"),e(228,"The text displayed for the option. This is also what the search filters on."),t(),i(229,"td")(230,"div",12),e(231," string "),t()(),i(232,"td")(233,"div",13),e(234," - "),t()()(),i(235,"tr")(236,"td"),e(237,"value"),t(),i(238,"td"),e(239,"The value emitted when the option is selected."),t(),i(240,"td")(241,"div",12),e(242," any "),t()(),i(243,"td")(244,"div",13),e(245," - "),t()()(),i(246,"tr")(247,"td"),e(248,"image"),t(),i(249,"td"),e(250,"Shows an image next to the option text. See "),i(251,"span",9),e(252,"ISelectOptionImage"),t(),e(253,"."),t(),i(254,"td")(255,"div",12),e(256," ISelectOptionImage "),t()(),i(257,"td")(258,"div",13),e(259," undefined "),t()()(),i(260,"tr")(261,"td"),e(262,"flag"),t(),i(263,"td"),e(264,"The country code of a flag to show next to the option text, for example "),i(265,"span",9),e(266,"ng"),t(),e(267,"."),t(),i(268,"td")(269,"div",12),e(270," string "),t()(),i(271,"td")(272,"div",13),e(273," undefined "),t()()()()(),i(274,"h2",2),e(275,"ISelectOptionImage"),t(),i(276,"p"),e(277,"The shape of "),i(278,"span",9),e(279,"ISelectOption.image"),t(),e(280,"."),t(),i(281,"h4",4),e(282,"Properties"),t(),i(283,"table",11)(284,"thead")(285,"tr")(286,"th"),e(287,"Property"),t(),i(288,"th"),e(289,"Description"),t(),i(290,"th"),e(291,"Type"),t(),i(292,"th"),e(293,"Default"),t()()(),i(294,"tbody")(295,"tr")(296,"td"),e(297,"src"),t(),i(298,"td"),e(299,"The image source."),t(),i(300,"td")(301,"div",12),e(302," string "),t()(),i(303,"td")(304,"div",13),e(305," - "),t()()(),i(306,"tr")(307,"td"),e(308,"avatar"),t(),i(309,"td"),e(310,"When true, renders the image as a small avatar."),t(),i(311,"td")(312,"div",12),e(313," boolean "),t()(),i(314,"td")(315,"div",13),e(316," - "),t()()()()(),i(317,"h2",2),e(318,"suiSelectMenu"),t(),i(319,"p"),e(320,"Selector: "),i(321,"span",9),e(322,"[suiSelectMenu]"),t(),e(323,". The options menu rendered inside "),i(324,"span",9),e(325,"sui-select"),t(),e(326,". You do not normally use this directly."),t(),i(327,"h4",4),e(328,"Properties"),t(),i(329,"table",11)(330,"thead")(331,"tr")(332,"th"),e(333,"Property"),t(),i(334,"th"),e(335,"Description"),t(),i(336,"th"),e(337,"Type"),t(),i(338,"th"),e(339,"Default"),t()()(),i(340,"tbody")(341,"tr")(342,"td"),e(343,"suiDirection"),t(),i(344,"td"),e(345,"Sets the direction the menu opens. Allowed values are "),i(346,"span",9),e(347,"left"),t(),e(348," | "),i(349,"span",9),e(350,"right"),t(),e(351," | "),i(352,"span",9),e(353,"null"),t()(),i(354,"td")(355,"div",12),e(356," string "),t()(),i(357,"td")(358,"div",13),e(359," null "),t()()(),i(360,"tr")(361,"td"),e(362,"suiScrolling"),t(),i(363,"td"),e(364,"Determines if the menu is scrollable or not."),t(),i(365,"td")(366,"div",12),e(367," boolean "),t()(),i(368,"td")(369,"div",13),e(370," false "),t()()(),i(371,"tr")(372,"td"),e(373,"suiIsOpen"),t(),i(374,"td"),e(375,"Sets whether the menu is open. This is managed by the select."),t(),i(376,"td")(377,"div",12),e(378," boolean "),t()(),i(379,"td")(380,"div",13),e(381," false "),t()()()()(),i(382,"h2",2),e(383,"suiSelectMenuItem"),t(),i(384,"p"),e(385,"Selector: "),i(386,"span",9),e(387,"[suiSelectMenuItem]"),t(),e(388,". An option inside the menu rendered by "),i(389,"span",9),e(390,"sui-select"),t(),e(391,". You do not normally use this directly."),t(),i(392,"h4",4),e(393,"Properties"),t(),i(394,"table",11)(395,"thead")(396,"tr")(397,"th"),e(398,"Property"),t(),i(399,"th"),e(400,"Description"),t(),i(401,"th"),e(402,"Type"),t(),i(403,"th"),e(404,"Default"),t()()(),i(405,"tbody")(406,"tr")(407,"td"),e(408,"suiValue"),t(),i(409,"td"),e(410,"The value to be emitted if this menu item is selected."),t(),i(411,"td")(412,"div",12),e(413," any "),t()(),i(414,"td")(415,"div",13),e(416," null "),t()()(),i(417,"tr")(418,"td"),e(419,"suiSelected"),t(),i(420,"td"),e(421,"Determines if the menu item is shown as selected."),t(),i(422,"td")(423,"div",12),e(424," boolean "),t()(),i(425,"td")(426,"div",13),e(427," false "),t()()(),i(428,"tr")(429,"td"),e(430,"suiMultiple"),t(),i(431,"td"),e(432,"Determines if this menu allows for selecting multiple items."),t(),i(433,"td")(434,"div",12),e(435," boolean "),t()(),i(436,"td")(437,"div",13),e(438," false "),t()()()()()())}var fr=(()=>{class n{constructor(o){this.snippetStandard=Vs,this.snippetFluid=Bs,this.snippetSearch=Os,this.snippetMultiple=Ls,this.snippetMultipleSearch=Hs,this.snippetFlag=Ws,this.snippetImages=Rs,this.snippetTwoWay=zs,this.snippetLoading=js,this.snippetError=Ns,this.snippetDisabled=Us,this.snippetScrolling=$s,this.snippetCompact=Ys,this.snippetStandardTs=Gs,this.snippetSearchTs=Xs,this.snippetMultipleTs=Js,this.snippetFlagsTs=qs,this.snippetImagesTs=Zs,this.snippetTwoWayTs=Ks,this.snippetStatesTs=Qs,this.snippetScrollingTs=er,this.snippetCompactTs=tr,o.setTitle("Select | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-select"]],standalone:!1,decls:3,vars:2,consts:[["header","Select","subHeader","A select is a dropdown used to pick one or more values from a list of options"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["docDemo",""],["sui-message","","suiIcon",""],["sui-icon","","suiIconType","info circle"],["suiMessageContent",""],["sui-label",""],["routerLink","/modules/dropdown"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,sh,122,26,"div",1)(2,rh,439,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[Wt,j,R,W,z,O,N,y,E,se,zt,ir,nr,or,ar,sr,rr,lr,dr,mr,pr,ur,cr,hr],encapsulation:2})}}return n})();var Sr=`<sui-modal
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
`;var gr=`isStandardModalVisible = true;
`;var vr=`<sui-modal
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
`;var xr=`isBasicModalVisible = true;
`;var br=`<sui-modal
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
`;var Er=`isFullScreenModalVisible = true;
`;var yr=`<sui-modal
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
`;var Cr=`isSizeModalVisible = true;
`;var wr=`<sui-modal
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
`;var _r=`isScrollingModalVisible = true;
`;var Dr=`<sui-modal
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
`;var Tr=`isClosableModalVisible = true;
`;var Mr=`<sui-modal
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
`;var Ir=`isMaskClosableModalVisible = true;
`;var yh=["contentTemplate"],Ch=["*"];function wh(n,m){if(n&1){let o=ae();i(0,"i",4),S("click",function(){I(o);let s=b(3);return k(s.visible=!1)}),t()}}function _h(n,m){if(n&1&&me(0,wh,1,0,"i",3),n&2){let o=b(2);pe(o.suiBasic?-1:0)}}function Dh(n,m){if(n&1&&r(0,"i",5),n&2){let o=b(3);d("suiIconType",o.suiHeaderIcon)}}function Th(n,m){if(n&1&&(i(0,"div"),me(1,Dh,1,1,"i",5),e(2),t()),n&2){let o=b(2);De("ui",!!o.suiHeaderIcon)("icon",!!o.suiHeaderIcon)("header",!0),l(),pe(o.suiHeaderIcon?1:-1),l(),Te(" ",o.suiHeaderText," ")}}function Mh(n,m){if(n&1&&(i(0,"div",1),me(1,_h,1,1),me(2,Th,3,8,"div",2),_e(3),t()),n&2){let o=b();d("ngClass",o.classes),l(),pe(o.suiClosable?1:-1),l(),pe(o.suiHeaderText||o.suiHeaderIcon?2:-1)}}var mt=(()=>{class n{get classes(){return"actions"}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=yt({type:n,selectors:[["","suiModalActions",""]],hostVars:2,hostBindings:function(a,s){a&2&&We(s.classes)},exportAs:["suiModalActions"]})}}return n})(),pt=(()=>{class n{constructor(){this.suiImage=!1,this.suiScrollable=!1}get classes(){return[$.getPropClass(this.suiScrollable,"scrolling"),$.getPropClass(this.suiImage,"image"),"content"].join(" ")}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=yt({type:n,selectors:[["","suiModalContent",""]],hostVars:2,hostBindings:function(a,s){a&2&&We(s.classes)},inputs:{suiImage:"suiImage",suiScrollable:"suiScrollable"},exportAs:["suiModalContent"]})}}return F([A()],n.prototype,"suiImage",void 0),F([A()],n.prototype,"suiScrollable",void 0),n})(),kr=(()=>{class n{get classes(){return"description"}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=yt({type:n,selectors:[["","suiModalDescription",""]],hostVars:2,hostBindings:function(a,s){a&2&&We(s.classes)},exportAs:["suiModalDescription"]})}}return n})(),Ze=(()=>{class n{get visible(){return this._visible}set visible(o){o?this.showModal():this.hideModal(),this._visible=o,this.visibleChange.emit(o)}get classes(){return["ui",this.suiSize,$.getPropClass(this.suiBasic,"basic"),$.getPropClass(this.suiFullScreen,"fullscreen"),this.scrollClass,"modal","transition","visible","active"].join(" ")}get scrollClass(){return this.suiScroll==="full"?"long":this.suiScroll==="medium"?"longer":""}constructor(){this.document=Y(vt),this.renderer=Y(Et),this.viewRef=Y(Ci),this.suiHeaderText=null,this.suiHeaderIcon=null,this.suiSize=null,this.suiScroll="none",this.suiBasic=!1,this.suiClosable=!0,this.suiCentered=!0,this.suiBlurring=!1,this.suiFullScreen=!1,this.suiMaskClosable=!0,this.visibleChange=new X,this._visible=!1,this._modalDomRef=null,this.clickListener=null,this.uniqueId=Math.ceil(Math.random()*1e8)}ngOnDestroy(){let o=this.getModalFromDom();o&&(this.renderer.removeChild(this.document.body,o),this.suiBlurring&&this.renderer.removeClass(this.document.body,"dimmable"))}showModal(){this.isModalInDom()||this.generateDomElement(),this._modalDomRef&&(this.renderer.setProperty(this._modalDomRef,"style","display: flex !important;"),this.renderer.addClass(this._modalDomRef,"visible"),this.renderer.addClass(this._modalDomRef,"active"),this.suiBlurring&&(this.renderer.addClass(this.document.body,"dimmable"),this.renderer.addClass(this.document.body,"blurring"),this.renderer.addClass(this.document.body,"dimmed")))}hideModal(){this._modalDomRef&&(this.renderer.removeAttribute(this._modalDomRef,"style"),this.renderer.removeClass(this._modalDomRef,"visible"),this.renderer.removeClass(this._modalDomRef,"active"),this.suiBlurring&&(this.renderer.removeClass(this.document.body,"blurring"),this.renderer.removeClass(this.document.body,"dimmed")))}generateDomElement(){let o=this.renderer.createElement("div");this.renderer.setAttribute(o,"id",this.uniqueId.toString());let a="ui dimmer modals page"+(this.suiCentered?"":" top aligned")+" transition";this.renderer.setAttribute(o,"class",a);let s=this.viewRef.createEmbeddedView(this.contentTemplate);s.detectChanges();for(let u of s.rootNodes)this.renderer.appendChild(o,u);this._modalDomRef=o,this.clickListener=this.renderer.listen(this._modalDomRef,"click",u=>{u.target.id===this.uniqueId.toString()&&this.onClick()}),this.renderer.appendChild(this.document.body,this._modalDomRef)}isModalInDom(){return!!this.getModalFromDom()}getModalFromDom(){return this.document.getElementById(String(this.uniqueId))}onClick(){this.suiMaskClosable&&(this.visible=!1)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-modal"]],viewQuery:function(a,s){if(a&1&&wt(yh,7),a&2){let u;Pe(u=Fe())&&(s.contentTemplate=u.first)}},inputs:{suiHeaderText:"suiHeaderText",suiHeaderIcon:"suiHeaderIcon",suiSize:"suiSize",suiScroll:"suiScroll",suiBasic:"suiBasic",suiClosable:"suiClosable",suiCentered:"suiCentered",suiBlurring:"suiBlurring",suiFullScreen:"suiFullScreen",suiMaskClosable:"suiMaskClosable",visible:"visible"},outputs:{visibleChange:"visibleChange"},ngContentSelectors:Ch,decls:2,vars:0,consts:[["contentTemplate",""],[2,"display","block !important",3,"ngClass"],[3,"ui","icon","header"],["sui-icon","","suiIconType","close"],["sui-icon","","suiIconType","close",3,"click"],["sui-icon","",3,"suiIconType"]],template:function(a,s){a&1&&(we(),h(0,Mh,4,3,"ng-template",null,0,$e))},dependencies:[ie,it,E],encapsulation:2,changeDetection:0})}}return F([A()],n.prototype,"suiBasic",void 0),F([A()],n.prototype,"suiClosable",void 0),F([A()],n.prototype,"suiCentered",void 0),F([A()],n.prototype,"suiBlurring",void 0),F([A()],n.prototype,"suiFullScreen",void 0),F([A()],n.prototype,"suiMaskClosable",void 0),n})(),Pr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[ie,Ze]})}}return n})();function kh(n,m){n&1&&r(0,"div",9)(1,"img",6)}var Ke=class{constructor(){this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((m,o)=>o)}},Ar=(()=>{class n extends Ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-modal-standard-example"]],standalone:!1,features:[v],decls:20,vars:1,consts:[["suiHeaderText","Select a Photo",3,"visibleChange","visible"],["sui-image","","suiModalContent",""],["sui-image","","suiSize","medium"],["src","https://semantic-ui.com/images/avatar2/large/rachel.png"],["suiCardDescription",""],["sui-header",""],["href","https://www.gravatar.com","target","_blank"],["suiModalActions",""],["sui-button","","suiEmphasis","secondary","suiColour","black"],["sui-button","","suiEmphasis","positive","suiIcon","","suiLabeled","right labeled"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),D("visibleChange",function(p){return _(s.isStandardModalVisible,p)||(s.isStandardModalVisible=p),p}),i(1,"div",1)(2,"div",2),r(3,"img",3),t(),i(4,"div",4)(5,"div",5),e(6,"We've auto-chosen a profile image for you."),t(),i(7,"p"),e(8,"We've grabbed the following image from the "),i(9,"a",6),e(10,"gravatar"),t(),e(11," image associated with your registered e-mail address."),t(),i(12,"p"),e(13,"Is it okay to use this photo?"),t()()(),i(14,"div",7)(15,"div",8),e(16," Nope "),t(),i(17,"div",9),e(18," Yep, that's me "),r(19,"i",10),t()()()),a&2&&w("visible",s.isStandardModalVisible)},dependencies:[jt,y,C,E,G,Ze,mt,pt],encapsulation:2})}}return n})(),Vr=(()=>{class n extends Ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-modal-basic-example"]],standalone:!1,features:[v],decls:11,vars:1,consts:[["suiBasic","","suiHeaderIcon","archive","suiHeaderText","Archive Old Messages",3,"visibleChange","visible"],["sui-image","","suiModalContent",""],["suiModalActions",""],["sui-button","","suiBasic","","suiInverted","","suiColour","red"],["sui-icon","","suiIconType","remove"],["sui-button","","suiInverted","","suiColour","green",3,"click"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),D("visibleChange",function(p){return _(s.isBasicModalVisible,p)||(s.isBasicModalVisible=p),p}),i(1,"div",1)(2,"p"),e(3,"Your inbox is getting full, would you like us to enable automatic archiving of old messages?"),t()(),i(4,"div",2)(5,"div",3),r(6,"i",4),e(7," No "),t(),i(8,"div",5),S("click",function(){return s.isStandardModalVisible=!1}),r(9,"i",6),e(10," Yes "),t()()()),a&2&&w("visible",s.isBasicModalVisible)},dependencies:[C,E,G,Ze,mt,pt],encapsulation:2})}}return n})(),Br=(()=>{class n extends Ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-modal-full-screen-example"]],standalone:!1,features:[v],decls:17,vars:2,consts:[["suiFullScreen","","suiHeaderText","Update Your Settings",3,"visibleChange","visible"],["suiModalContent",""],["sui-form",""],["sui-header","","suiDividing",""],["suiFormField",""],[3,"checked"],["suiModalActions",""],["sui-button",""],["sui-button","","suiEmphasis","positive"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),D("visibleChange",function(p){return _(s.isFullScreenModalVisible,p)||(s.isFullScreenModalVisible=p),p}),i(1,"div",1)(2,"div",2)(3,"h4",3),e(4,"Give us your feedback"),t(),i(5,"div",4)(6,"label"),e(7,"Feedback"),t(),r(8,"textarea"),t(),i(9,"div",4)(10,"sui-checkbox",5),e(11,"It's okay to contact me."),t()()()(),i(12,"div",6)(13,"div",7),e(14," Cancel "),t(),i(15,"div",8),e(16," Send "),t()()()),a&2&&(w("visible",s.isFullScreenModalVisible),l(10),d("checked",!0))},dependencies:[Dt,Tt,y,C,Ze,mt,pt,Se],encapsulation:2})}}return n})(),Or=(()=>{class n extends Ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-modal-size-example"]],standalone:!1,features:[v],decls:10,vars:1,consts:[["suiSize","mini","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),D("visibleChange",function(p){return _(s.isSizeModalVisible,p)||(s.isSizeModalVisible=p),p}),i(1,"div",1)(2,"p"),e(3,"Are you sure you want to delete your account"),t()(),i(4,"div",2)(5,"div",3),e(6," No "),t(),i(7,"div",4),e(8," Yes "),r(9,"i",5),t()()()),a&2&&w("visible",s.isSizeModalVisible)},dependencies:[C,E,Ze,mt,pt],encapsulation:2})}}return n})(),Lr=(()=>{class n extends Ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-modal-scrolling-example"]],standalone:!1,features:[v],decls:15,vars:1,consts:[["suiHeaderText","Profile Picture",3,"visibleChange","visible"],["suiModalContent","","suiScrollable","","suiImage",""],["sui-image","","suiSize","medium"],["src","/assets/images/wireframes/image.png"],["suiModalDescription",""],["sui-header",""],["sui-image","","src","/assets/images/wireframes/paragraph.png"],["suiModalActions",""],["sui-button","","suiEmphasis","secondary",1,"black","deny",3,"click"],["sui-divider",""]],template:function(a,s){a&1&&(i(0,"sui-modal",0),D("visibleChange",function(p){return _(s.isScrollingModalVisible,p)||(s.isScrollingModalVisible=p),p}),i(1,"div",1)(2,"div",2),r(3,"img",3),t(),i(4,"div",4)(5,"div",5),e(6,"Modal Header"),t(),i(7,"p"),e(8,"This is an example of expanded content that will cause the modal's dimmer to scroll"),t(),r(9,"img",6),Le(10,kh,2,0,null,null,tt),t()(),i(12,"div",7)(13,"div",8),S("click",function(){return s.isScrollingModalVisible=!1}),e(14," Close "),t()()()),a&2&&(w("visible",s.isScrollingModalVisible),l(10),He(s.dummyList))},dependencies:[y,C,Ie,G,Ze,mt,pt,kr],encapsulation:2})}}return n})(),Hr=(()=>{class n extends Ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-modal-closable-example"]],standalone:!1,features:[v],decls:10,vars:1,consts:[["suiClosable","false","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),D("visibleChange",function(p){return _(s.isClosableModalVisible,p)||(s.isClosableModalVisible=p),p}),i(1,"div",1)(2,"p"),e(3,"Are you sure you want to delete your account"),t()(),i(4,"div",2)(5,"div",3),e(6," No "),t(),i(7,"div",4),e(8," Yes "),r(9,"i",5),t()()()),a&2&&w("visible",s.isClosableModalVisible)},dependencies:[C,E,Ze,mt,pt],encapsulation:2})}}return n})(),Wr=(()=>{class n extends Ke{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-modal-mask-closable-example"]],standalone:!1,features:[v],decls:10,vars:1,consts:[["suiMaskClosable","false","suiHeaderText","Delete Your Account",3,"visibleChange","visible"],["suiModalContent",""],["suiModalActions",""],["sui-button","","suiColour","red"],["sui-button","","suiIcon","","suiLabeled","right labeled","suiEmphasis","positive"],["sui-icon","","suiIconType","checkmark"]],template:function(a,s){a&1&&(i(0,"sui-modal",0),D("visibleChange",function(p){return _(s.isMaskClosableModalVisible,p)||(s.isMaskClosableModalVisible=p),p}),i(1,"div",1)(2,"p"),e(3,"Are you sure you want to delete your account"),t()(),i(4,"div",2)(5,"div",3),e(6," No "),t(),i(7,"div",4),e(8," Yes "),r(9,"i",5),t()()()),a&2&&w("visible",s.isMaskClosableModalVisible)},dependencies:[C,E,Ze,mt,pt],encapsulation:2})}}return n})();function Fh(n,m){n&1&&r(0,"doc-modal-standard-example")}function Ah(n,m){n&1&&r(0,"doc-modal-basic-example")}function Vh(n,m){n&1&&r(0,"doc-modal-full-screen-example")}function Bh(n,m){n&1&&r(0,"doc-modal-size-example")}function Oh(n,m){n&1&&r(0,"doc-modal-scrolling-example")}function Lh(n,m){n&1&&r(0,"doc-modal-closable-example")}function Hh(n,m){n&1&&r(0,"doc-modal-mask-closable-example")}function Wh(n,m){if(n&1){let o=ae();i(0,"div")(1,"h2",2),e(2,"States"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Modal"),t(),i(6,"p"),e(7,"A standard modal"),t(),i(8,"button",5),S("click",function(){I(o);let s=b();return k(s.isStandardModalVisible=!0)}),e(9,"Show Modal"),t(),h(10,Fh,1,0,"ng-template",6),t(),i(11,"doc-code-sample",3)(12,"h3",4),e(13,"Basic"),t(),i(14,"p"),e(15,"A modal can reduce its complexity"),t(),i(16,"button",5),S("click",function(){I(o);let s=b();return k(s.isBasicModalVisible=!0)}),e(17,"Show Modal"),t(),h(18,Ah,1,0,"ng-template",6),t(),i(19,"h2",2),e(20,"Variations"),t(),i(21,"doc-code-sample",3)(22,"h3",4),e(23,"Full Screen"),t(),i(24,"p"),e(25,"A modal can use the entire size of the screen"),t(),i(26,"button",5),S("click",function(){I(o);let s=b();return k(s.isFullScreenModalVisible=!0)}),e(27,"Show Modal"),t(),h(28,Vh,1,0,"ng-template",6),t(),i(29,"doc-code-sample",3)(30,"h3",4),e(31,"Size"),t(),i(32,"p"),e(33,"A modal can vary in size"),t(),i(34,"button",5),S("click",function(){I(o);let s=b();return k(s.isSizeModalVisible=!0)}),e(35,"Show Modal"),t(),h(36,Bh,1,0,"ng-template",6),t(),i(37,"doc-code-sample",3)(38,"h3",4),e(39,"Scrolling Content"),t(),i(40,"p"),e(41,"A modal can use the entire size of the screen."),t(),i(42,"button",5),S("click",function(){I(o);let s=b();return k(s.isScrollingModalVisible=!0)}),e(43,"Show Modal"),t(),h(44,Oh,1,0,"ng-template",6),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Closable"),t(),i(48,"p"),e(49,"By default, a modal is rendered with a close icon in the top right corner. The modal can be rendered without the close button"),t(),i(50,"button",5),S("click",function(){I(o);let s=b();return k(s.isClosableModalVisible=!0)}),e(51,"Show Modal"),t(),h(52,Lh,1,0,"ng-template",6),t(),i(53,"doc-code-sample",3)(54,"h3",4),e(55,"Mask Closable"),t(),i(56,"p"),e(57,"By default, a modal can be closed by clicking on the background. If that isn't the desired behaviour, that is configurable"),t(),i(58,"button",5),S("click",function(){I(o);let s=b();return k(s.isMaskClosableModalVisible=!0)}),e(59,"Show Modal"),t(),h(60,Hh,1,0,"ng-template",6),t()()}if(n&2){let o=b();l(3),d("templateCode",o.snippetStandard)("componentCode",o.snippetStandardTs),l(8),d("templateCode",o.snippetBasic)("componentCode",o.snippetBasicTs),l(10),d("templateCode",o.snippetFullScreen)("componentCode",o.snippetFullScreenTs),l(8),d("templateCode",o.snippetSize)("componentCode",o.snippetSizeTs),l(8),d("templateCode",o.snippetScrolling)("componentCode",o.snippetScrollingTs),l(8),d("templateCode",o.snippetClosable)("componentCode",o.snippetClosableTs),l(8),d("templateCode",o.snippetMaskClosable)("componentCode",o.snippetMaskClosableTs)}}function Rh(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-modal"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",7)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19,"suiHeaderText"),t(),i(20,"td"),e(21,"The modal header"),t(),i(22,"td")(23,"div",8),e(24," string "),t()(),i(25,"td")(26,"div",9),e(27," null "),t()()(),i(28,"tr")(29,"td"),e(30,"suiHeaderIcon"),t(),i(31,"td"),e(32,"The modal header icon type"),t(),i(33,"td")(34,"div",8),e(35," string "),t()(),i(36,"td")(37,"div",9),e(38," null "),t()()(),i(39,"tr")(40,"td"),e(41,"suiSize"),t(),i(42,"td"),e(43," Set the modal's size. Allowed values could be "),i(44,"span",10),e(45,"mini"),t(),e(46," | "),i(47,"span",10),e(48,"tiny"),t(),e(49," | "),i(50,"span",10),e(51,"small"),t(),e(52," | "),i(53,"span",10),e(54,"large"),t(),e(55," | "),i(56,"span",10),e(57,"null"),t()(),i(58,"td")(59,"div",8),e(60," string "),t()(),i(61,"td")(62,"div",9),e(63," null "),t()()(),i(64,"tr")(65,"td"),e(66,"suiScroll"),t(),i(67,"td"),e(68," Determines if the modal is scrollable. Allowed values could be "),i(69,"span",10),e(70,"full"),t(),e(71," | "),i(72,"span",10),e(73,"medium"),t(),e(74," | "),i(75,"span",10),e(76,"none"),t()(),i(77,"td")(78,"div",8),e(79," string "),t()(),i(80,"td")(81,"div",9),e(82," none "),t()()(),i(83,"tr")(84,"td"),e(85,"suiBasic"),t(),i(86,"td"),e(87,"Determines if the modal is rendered as basic"),t(),i(88,"td")(89,"div",8),e(90," boolean "),t()(),i(91,"td")(92,"div",9),e(93," false "),t()()(),i(94,"tr")(95,"td"),e(96,"suiClosable"),t(),i(97,"td"),e(98,"Determines if the close icon is rendered on the modal"),t(),i(99,"td")(100,"div",8),e(101," boolean "),t()(),i(102,"td")(103,"div",9),e(104," true "),t()()(),i(105,"tr")(106,"td"),e(107,"suiCentered"),t(),i(108,"td"),e(109,"Determines if the modal is rendered vertically centered"),t(),i(110,"td")(111,"div",8),e(112," boolean "),t()(),i(113,"td")(114,"div",9),e(115," true "),t()()(),i(116,"tr")(117,"td"),e(118,"suiBlurring"),t(),i(119,"td"),e(120,"Determines if the modal uses a dimmer background"),t(),i(121,"td")(122,"div",8),e(123," boolean "),t()(),i(124,"td")(125,"div",9),e(126," false "),t()()(),i(127,"tr")(128,"td"),e(129,"suiFullScreen"),t(),i(130,"td"),e(131,"Determines if the modal is rendered to fill the screen horizontally"),t(),i(132,"td")(133,"div",8),e(134," boolean "),t()(),i(135,"td")(136,"div",9),e(137," false "),t()()(),i(138,"tr")(139,"td"),e(140,"suiMaskClosable"),t(),i(141,"td"),e(142,"Determines if the modal is dismissable by clicking on the background"),t(),i(143,"td")(144,"div",8),e(145," boolean "),t()(),i(146,"td")(147,"div",9),e(148," true "),t()()(),i(149,"tr")(150,"td"),e(151,"visible"),t(),i(152,"td"),e(153,"Determines if the modal is visible or not"),t(),i(154,"td")(155,"div",8),e(156," boolean "),t()(),i(157,"td")(158,"div",9),e(159," false "),t()()()()(),i(160,"h4",4),e(161,"Events"),t(),i(162,"table",7)(163,"thead")(164,"tr")(165,"th"),e(166,"Property"),t(),i(167,"th"),e(168,"Description"),t(),i(169,"th"),e(170,"Type"),t()()(),i(171,"tbody")(172,"tr")(173,"td"),e(174,"visibleChange"),t(),i(175,"td"),e(176,"Fired when a the modal's visibility changes "),t(),i(177,"td")(178,"div",8),e(179," boolean "),t()()()()(),i(180,"h2",2),e(181,"suiModalContent"),t(),i(182,"h4",4),e(183,"Properties"),t(),i(184,"table",7)(185,"thead")(186,"tr")(187,"th"),e(188,"Property"),t(),i(189,"th"),e(190,"Description"),t(),i(191,"th"),e(192,"Type"),t(),i(193,"th"),e(194,"Default"),t()()(),i(195,"tbody")(196,"tr")(197,"td"),e(198,"suiImage"),t(),i(199,"td"),e(200,"Determines if the content can contain an image "),t(),i(201,"td")(202,"div",8),e(203," boolean "),t()(),i(204,"td")(205,"div",9),e(206," false "),t()()(),i(207,"tr")(208,"td"),e(209,"suiScrollable"),t(),i(210,"td"),e(211,"Determines if the content is scrollable or not "),t(),i(212,"td")(213,"div",8),e(214," boolean "),t()(),i(215,"td")(216,"div",9),e(217," false "),t()()()()(),i(218,"h2",2),e(219,"suiModalActions"),t(),i(220,"h4",4),e(221,"Properties"),t(),i(222,"table",7)(223,"thead")(224,"tr")(225,"th"),e(226,"Property"),t(),i(227,"th"),e(228,"Description"),t(),i(229,"th"),e(230,"Type"),t(),i(231,"th"),e(232,"Default"),t()()(),r(233,"tbody"),i(234,"tfoot",11)(235,"tr")(236,"th",12)(237,"div",13),e(238,"No properties for this directive"),t()()()()(),i(239,"h2",2),e(240,"suiModalDescription"),t(),i(241,"h4",4),e(242,"Properties"),t(),i(243,"table",7)(244,"thead")(245,"tr")(246,"th"),e(247,"Property"),t(),i(248,"th"),e(249,"Description"),t(),i(250,"th"),e(251,"Type"),t(),i(252,"th"),e(253,"Default"),t()()(),r(254,"tbody"),i(255,"tfoot",11)(256,"tr")(257,"th",12)(258,"div",13),e(259,"No properties for this directive"),t()()()()()())}var Rr=(()=>{class n{constructor(o){this.snippetStandard=Sr,this.snippetStandardTs=gr,this.snippetBasic=vr,this.snippetBasicTs=xr,this.snippetFullScreen=br,this.snippetFullScreenTs=Er,this.snippetSize=yr,this.snippetSizeTs=Cr,this.snippetScrolling=wr,this.snippetScrollingTs=_r,this.snippetClosable=Dr,this.snippetClosableTs=Tr,this.snippetMaskClosable=Mr,this.snippetMaskClosableTs=Ir,this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((a,s)=>s),o.setTitle("Modal | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-modal"]],standalone:!1,decls:3,vars:2,consts:[["header","Modal","subHeader","Modals display content that temporarily blocks interactions with the main view of a site."],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-button","",3,"click"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Wh,61,14,"div",1)(2,Rh,260,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,C,Ar,Vr,Br,Or,Lr,Hr,Wr],encapsulation:2})}}return n})();var zr=`<sui-dropdown>
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
`;var jr=`<span>
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
`;var Nr=`<sui-dropdown suiPointing
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
`;var Ur=`<sui-dropdown suiFloating
              class="labeled icon button">
  <i sui-icon suiIconType="filter"></i>
  <span class="text">Filter Posts</span>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Edit Post</div>
    <div suiDropdownMenuItem>Remove Post</div>
    <div suiDropdownMenuItem>Hide Post</div>
  </div>
</sui-dropdown>
`;var $r=`<sui-dropdown suiSimple>
  Dropdown
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var Yr=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var Gr=`<sui-dropdown>
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
`;var Xr=`<sui-dropdown>
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
`;var Jr=`<sui-dropdown>
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
`;var qr=`<sui-dropdown>
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
`;var Zr=`<sui-dropdown>
  <span class="text">Login</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div sui-message suiState="error">
      <div suiMessageHeader>Error</div>
      <p>You must log-in to see all categories</p>
    </div>
  </div>
</sui-dropdown>
`;var Kr=`<sui-dropdown suiFluid
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
`;var Qr=`<sui-dropdown>
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
`;var el=`<sui-dropdown>
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
`;var tl=`<sui-dropdown suiLoading>
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var il=`<sui-dropdown suiError
              class="selection">
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var nl=`<sui-dropdown disabled>
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
`;var ol=`<sui-dropdown>
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
`;var al=`<sui-dropdown suiCompact
              class="selection">
  <span class="text">Compact</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>A</div>
    <div suiDropdownMenuItem>B</div>
    <div suiDropdownMenuItem>C</div>
  </div>
</sui-dropdown>
`;var sl=`<sui-dropdown suiFluid
              class="selection">
  <span class="text">All Sections</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var rl=`<sui-dropdown>
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
`;var ll=`<sui-dropdown>
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
`;var dl=`<div sui-buttons suiColour="teal">
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
`;var ml=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-dropdown-example"]],standalone:!1,decls:48,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],[1,"description"],["sui-icon","","suiIconType","folder"],["sui-icon","","suiIconType","trash"],["suiDropdownMenuDivider",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"div",0),e(2,"File"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"New"),t(),i(7,"div",3)(8,"span",4),e(9,"ctrl + o"),t(),e(10," Open... "),t(),i(11,"div",3)(12,"span",4),e(13,"ctrl + s"),t(),e(14," Save as... "),t(),i(15,"div",3)(16,"span",4),e(17,"ctrl + r"),t(),e(18," Rename "),t(),i(19,"div",3),e(20,"Make a copy"),t(),i(21,"div",3),r(22,"i",5),e(23," Move to folder "),t(),i(24,"div",3),r(25,"i",6),e(26," Move to trash "),t(),r(27,"div",7),i(28,"div",3),e(29,"Download As..."),t(),i(30,"div",3),r(31,"i",1),e(32," Publish To Web "),i(33,"div",2)(34,"div",3),e(35,"Google Docs"),t(),i(36,"div",3),e(37,"Google Drive"),t(),i(38,"div",3),e(39,"Dropbox"),t(),i(40,"div",3),e(41,"Adobe Creative Cloud"),t(),i(42,"div",3),e(43,"Private FTP"),t(),i(44,"div",3),e(45,"Another Service..."),t()()(),i(46,"div",3),e(47,"E-mail Collaborators"),t()()())},dependencies:[q,J,K,Vt,E],encapsulation:2})}}return n})(),pl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-inline-example"]],standalone:!1,decls:23,vars:0,consts:[["suiInline",""],[1,"text"],["sui-image","","suiAvatar","","src","/assets/images/jenny.jpg","alt","Jenny Hess"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["sui-image","","suiAvatar","","src","/assets/images/elliot.jpg","alt","Elliot Fu"],["sui-image","","suiAvatar","","src","/assets/images/stevie.jpg","alt","Stevie Feliciano"],["sui-image","","suiAvatar","","src","/assets/images/matt.jpg","alt","Matt"],["sui-image","","suiAvatar","","src","/assets/images/justen.jpg","alt","Justen Kitsune"]],template:function(a,s){a&1&&(i(0,"span"),e(1," Show me posts by "),i(2,"sui-dropdown",0)(3,"div",1),r(4,"img",2),e(5," Jenny Hess "),t(),r(6,"i",3),i(7,"div",4)(8,"div",5),r(9,"img",2),e(10," Jenny Hess "),t(),i(11,"div",5),r(12,"img",6),e(13," Elliot Fu "),t(),i(14,"div",5),r(15,"img",7),e(16," Stevie Feliciano "),t(),i(17,"div",5),r(18,"img",8),e(19," Matt "),t(),i(20,"div",5),r(21,"img",9),e(22," Justen Kitsune "),t()()()())},dependencies:[q,J,K,E,G],encapsulation:2})}}return n})(),ul=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-pointing-example"]],standalone:!1,decls:55,vars:0,consts:[["suiPointing","",1,"link","item"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiPointing","","suiPointingDirection","top left",1,"button"],["suiPointing","","suiPointingDirection","top right",1,"button"],["suiPointing","","suiPointingDirection","left",1,"button"],["suiPointing","","suiPointingDirection","right",1,"button"]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Home"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Shopping"),t(),i(7,"div",4),e(8,"Categories"),t(),i(9,"div",4),e(10,"Order"),t()()(),i(11,"sui-dropdown",5)(12,"span",1),e(13,"Top Left"),t(),r(14,"i",2),i(15,"div",3)(16,"div",4),e(17,"New"),t(),i(18,"div",4),e(19,"Open..."),t(),i(20,"div",4),e(21,"Save as..."),t()()(),i(22,"sui-dropdown",6)(23,"span",1),e(24,"Top Right"),t(),r(25,"i",2),i(26,"div",3)(27,"div",4),e(28,"New"),t(),i(29,"div",4),e(30,"Open..."),t(),i(31,"div",4),e(32,"Save as..."),t()()(),i(33,"sui-dropdown",7)(34,"span",1),e(35,"Left"),t(),r(36,"i",2),i(37,"div",3)(38,"div",4),e(39,"New"),t(),i(40,"div",4),e(41,"Open..."),t(),i(42,"div",4),e(43,"Save as..."),t()()(),i(44,"sui-dropdown",8)(45,"span",1),e(46,"Right"),t(),r(47,"i",2),i(48,"div",3)(49,"div",4),e(50,"New"),t(),i(51,"div",4),e(52,"Open..."),t(),i(53,"div",4),e(54,"Save as..."),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),cl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-floating-example"]],standalone:!1,decls:11,vars:0,consts:[["suiFloating","",1,"labeled","icon","button"],["sui-icon","","suiIconType","filter"],[1,"text"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0),r(1,"i",1),i(2,"span",2),e(3,"Filter Posts"),t(),i(4,"div",3)(5,"div",4),e(6,"Edit Post"),t(),i(7,"div",4),e(8,"Remove Post"),t(),i(9,"div",4),e(10,"Hide Post"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),hl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-simple-example"]],standalone:!1,decls:10,vars:0,consts:[["suiSimple",""],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0),e(1," Dropdown "),r(2,"i",1),i(3,"div",2)(4,"div",3),e(5,"Choice 1"),t(),i(6,"div",3),e(7,"Choice 2"),t(),i(8,"div",3),e(9,"Choice 3"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),fl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-header-example"]],standalone:!1,decls:13,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Filter by tag"),t(),i(7,"div",4),e(8,"Important"),t(),i(9,"div",4),e(10,"Announcement"),t(),i(11,"div",4),e(12,"Discussion"),t()()())},dependencies:[q,J,K,ut,E],encapsulation:2})}}return n})(),Sl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-divider-example"]],standalone:!1,decls:13,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuDivider",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Important"),t(),r(7,"div",4),i(8,"div",3),e(9,"Announcement"),t(),r(10,"div",4),i(11,"div",3),e(12,"Discussion"),t()()())},dependencies:[q,J,K,Vt,E],encapsulation:2})}}return n})(),gl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-icon-example"]],standalone:!1,decls:14,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["sui-icon","","suiIconType","tags"],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",4),e(7," Filter by tag "),t(),i(8,"div",5),e(9,"Important"),t(),i(10,"div",5),e(11,"Announcement"),t(),i(12,"div",5),e(13,"Discussion"),t()()())},dependencies:[q,J,K,ut,E],encapsulation:2})}}return n})(),vl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-description-example"]],standalone:!1,decls:19,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu","",2,"min-width","15rem"],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],[1,"description"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter Tags"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Filter by tag"),t(),i(7,"div",4)(8,"span",5),e(9,"2 new"),t(),e(10," Important "),t(),i(11,"div",4)(12,"span",5),e(13,"10 new"),t(),e(14," Hopper "),t(),i(15,"div",4)(16,"span",5),e(17,"5 new"),t(),e(18," Discussion "),t()()())},dependencies:[q,J,K,ut,E],encapsulation:2})}}return n})(),xl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-label-example"]],standalone:!1,decls:16,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],["sui-label","","suiColour","red","suiEmpty","","suiCircular",""],["sui-label","","suiColour","blue","suiEmpty","","suiCircular",""],["sui-label","","suiColour","black","suiEmpty","","suiCircular",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Filter by tag"),t(),i(7,"div",4),r(8,"div",5),e(9," Important "),t(),i(10,"div",4),r(11,"div",6),e(12," Announcement "),t(),i(13,"div",4),r(14,"div",7),e(15," Discussion "),t()()())},dependencies:[O,q,J,K,ut,E],encapsulation:2})}}return n})(),bl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-message-example"]],standalone:!1,decls:10,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["sui-message","","suiState","error"],["suiMessageHeader",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Login"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3)(6,"div",4),e(7,"Error"),t(),i(8,"p"),e(9,"You must log-in to see all categories"),t()()()())},dependencies:[q,J,E,se,on],encapsulation:2})}}return n})(),El=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-floated-example"]],standalone:!1,decls:17,vars:0,consts:[["suiFluid","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],[1,"right","floated"],["sui-icon","","suiIconType","exclamation"],["sui-icon","","suiIconType","bullhorn"],["sui-icon","","suiIconType","comments"]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Select Type"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4)(6,"span",5),r(7,"i",6),t(),e(8," Important "),t(),i(9,"div",4)(10,"span",5),r(11,"i",7),t(),e(12," Announcement "),t(),i(13,"div",4)(14,"span",5),r(15,"i",8),t(),e(16," Discussion "),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),yl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-input-example"]],standalone:!1,decls:17,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],[1,"ui","icon","search","input",3,"click"],["sui-icon","","suiIconType","search"],["type","text","placeholder","Search issues..."],["suiDropdownMenuDivider",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),S("click",function(p){return p.stopPropagation()}),r(6,"i",4)(7,"input",5),t(),r(8,"div",6),i(9,"div",7),e(10,"Filter by tag"),t(),i(11,"div",8),e(12,"Important"),t(),i(13,"div",8),e(14,"Announcement"),t(),i(15,"div",8),e(16,"Discussion"),t()()())},dependencies:[q,J,K,ut,Vt,E],encapsulation:2})}}return n})(),Cl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-image-example"]],standalone:!1,decls:25,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuHeader",""],["suiDropdownMenuItem",""],["sui-image","","suiAvatar","","src","/assets/images/jenny.jpg","alt","Jenny Hess"],["sui-image","","suiAvatar","","src","/assets/images/elliot.jpg","alt","Elliot Fu"],["sui-image","","suiAvatar","","src","/assets/images/stevie.jpg","alt","Stevie Feliciano"],["suiDropdownMenuDivider",""],["sui-image","","suiAvatar","","src","/assets/images/matt.jpg","alt","Matt"],["sui-image","","suiAvatar","","src","/assets/images/justen.jpg","alt","Justen Kitsune"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Add User"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"People You Might Know"),t(),i(7,"div",4),r(8,"img",5),e(9," Jenny Hess "),t(),i(10,"div",4),r(11,"img",6),e(12," Elliot Fu "),t(),i(13,"div",4),r(14,"img",7),e(15," Stevie Feliciano "),t(),r(16,"div",8),i(17,"div",3),e(18,"Your Friends' Friends"),t(),i(19,"div",4),r(20,"img",9),e(21," Matt "),t(),i(22,"div",4),r(23,"img",10),e(24," Justen Kitsune "),t()()())},dependencies:[q,J,K,ut,Vt,E,G],encapsulation:2})}}return n})(),wl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-loading-example"]],standalone:!1,decls:11,vars:0,consts:[["suiLoading",""],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Dropdown"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Choice 1"),t(),i(7,"div",4),e(8,"Choice 2"),t(),i(9,"div",4),e(10,"Choice 3"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),_l=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-error-example"]],standalone:!1,decls:11,vars:0,consts:[["suiError","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Dropdown"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Choice 1"),t(),i(7,"div",4),e(8,"Choice 2"),t(),i(9,"div",4),e(10,"Choice 3"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),Dl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-disabled-example"]],standalone:!1,decls:22,vars:0,consts:[["disabled",""],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuItem","","disabled",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Disabled Dropdown"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Choice 1"),t(),i(7,"div",4),e(8,"Choice 2"),t(),i(9,"div",4),e(10,"Choice 3"),t()()(),i(11,"sui-dropdown")(12,"span",1),e(13,"Disabled Item"),t(),r(14,"i",2),i(15,"div",3)(16,"div",4),e(17,"Choice 1"),t(),i(18,"div",5),e(19,"Disabled"),t(),i(20,"div",4),e(21,"Choice 3"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),Tl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-scrolling-example"]],standalone:!1,decls:35,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu","","suiScrolling",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Select choice"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),e(6,"Choice 1"),t(),i(7,"div",3),e(8,"Choice 2"),t(),i(9,"div",3),e(10,"Choice 3"),t(),i(11,"div",3),e(12,"Choice 4"),t(),i(13,"div",3),e(14,"Choice 5"),t(),i(15,"div",3),e(16,"Choice 6"),t(),i(17,"div",3),e(18,"Choice 7"),t(),i(19,"div",3),e(20,"Choice 8"),t(),i(21,"div",3),e(22,"Choice 9"),t(),i(23,"div",3),e(24,"Choice 10"),t(),i(25,"div",3),e(26,"Choice 11"),t(),i(27,"div",3),e(28,"Choice 12"),t(),i(29,"div",3),e(30,"Choice 13"),t(),i(31,"div",3),e(32,"Choice 14"),t(),i(33,"div",3),e(34,"Choice 15"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),Ml=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-compact-example"]],standalone:!1,decls:11,vars:0,consts:[["suiCompact","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"Compact"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"A"),t(),i(7,"div",4),e(8,"B"),t(),i(9,"div",4),e(10,"C"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),Il=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-fluid-example"]],standalone:!1,decls:11,vars:0,consts:[["suiFluid","",1,"selection"],[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown",0)(1,"span",1),e(2,"All Sections"),t(),r(3,"i",2),i(4,"div",3)(5,"div",4),e(6,"Choice 1"),t(),i(7,"div",4),e(8,"Choice 2"),t(),i(9,"div",4),e(10,"Choice 3"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),kl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-menu-direction-example"]],standalone:!1,decls:36,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["suiDropdownMenuItem","","suiDirection","left"],["suiDropdownMenu","","suiDirection","left"]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Menu"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",1),e(7," Right "),i(8,"div",2)(9,"div",3),e(10,"1"),t(),i(11,"div",3),e(12,"2"),t(),i(13,"div",3),e(14,"3"),t()()(),i(15,"div",4),r(16,"i",1),e(17," Left "),i(18,"div",5)(19,"div",3),e(20,"1"),t(),i(21,"div",3),e(22,"2"),t(),i(23,"div",3),e(24,"3"),t()()()()(),i(25,"sui-dropdown")(26,"span",0),e(27,"Left Menu"),t(),r(28,"i",1),i(29,"div",5)(30,"div",3),e(31,"1"),t(),i(32,"div",3),e(33,"2"),t(),i(34,"div",3),e(35,"3"),t()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),Pl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-multiple-levels-example"]],standalone:!1,decls:25,vars:0,consts:[[1,"text"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""]],template:function(a,s){a&1&&(i(0,"sui-dropdown")(1,"span",0),e(2,"Filter Posts"),t(),r(3,"i",1),i(4,"div",2)(5,"div",3),r(6,"i",1),e(7," Filter by tag "),i(8,"div",2)(9,"div",3),e(10,"Important"),t(),i(11,"div",3),e(12,"Announcement"),t(),i(13,"div",3),e(14,"Discussion"),t()()(),i(15,"div",3),r(16,"i",1),e(17," Filter by date "),i(18,"div",2)(19,"div",3),e(20,"This Week"),t(),i(21,"div",3),e(22,"This Month"),t(),i(23,"div",3),e(24,"This Year"),t()()()()())},dependencies:[q,J,K,E],encapsulation:2})}}return n})(),Fl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown-button-group-example"]],standalone:!1,decls:15,vars:0,consts:[["sui-buttons","","suiColour","teal"],["sui-button",""],["suiFloating","",1,"button","icon"],["sui-icon","","suiIconType","dropdown"],["suiDropdownMenu",""],["suiDropdownMenuItem",""],["sui-icon","","suiIconType","edit"],["sui-icon","","suiIconType","delete"],["sui-icon","","suiIconType","hide"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"div",1),e(2,"Save"),t(),i(3,"sui-dropdown",2),r(4,"i",3),i(5,"div",4)(6,"div",5),r(7,"i",6),e(8," Edit Post "),t(),i(9,"div",5),r(10,"i",7),e(11," Remove Post "),t(),i(12,"div",5),r(13,"i",8),e(14," Hide Post "),t()()()())},dependencies:[C,U,q,J,K,E],encapsulation:2})}}return n})();function p1(n,m){n&1&&r(0,"doc-dropdown-dropdown-example")}function u1(n,m){n&1&&r(0,"doc-dropdown-inline-example")}function c1(n,m){n&1&&r(0,"doc-dropdown-pointing-example")}function h1(n,m){n&1&&r(0,"doc-dropdown-floating-example")}function f1(n,m){n&1&&r(0,"doc-dropdown-simple-example")}function S1(n,m){n&1&&r(0,"doc-dropdown-header-example")}function g1(n,m){n&1&&r(0,"doc-dropdown-divider-example")}function v1(n,m){n&1&&r(0,"doc-dropdown-icon-example")}function x1(n,m){n&1&&r(0,"doc-dropdown-description-example")}function b1(n,m){n&1&&r(0,"doc-dropdown-label-example")}function E1(n,m){n&1&&r(0,"doc-dropdown-message-example")}function y1(n,m){n&1&&r(0,"doc-dropdown-floated-example")}function C1(n,m){n&1&&r(0,"doc-dropdown-input-example")}function w1(n,m){n&1&&r(0,"doc-dropdown-image-example")}function _1(n,m){n&1&&r(0,"doc-dropdown-loading-example")}function D1(n,m){n&1&&r(0,"doc-dropdown-error-example")}function T1(n,m){n&1&&r(0,"doc-dropdown-disabled-example")}function M1(n,m){n&1&&r(0,"doc-dropdown-scrolling-example")}function I1(n,m){n&1&&r(0,"doc-dropdown-compact-example")}function k1(n,m){n&1&&r(0,"doc-dropdown-fluid-example")}function P1(n,m){n&1&&r(0,"doc-dropdown-menu-direction-example")}function F1(n,m){n&1&&r(0,"doc-dropdown-multiple-levels-example")}function A1(n,m){n&1&&r(0,"doc-dropdown-button-group-example")}function V1(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Dropdown"),t(),i(6,"p"),e(7,"A dropdown."),t(),i(8,"div",5),r(9,"i",6),i(10,"div",7)(11,"p"),e(12,"A dropdown opens its menu when clicked. To pick a value in a form, use the selection dropdown provided by "),i(13,"a",8),e(14,"sui-select"),t(),e(15," instead."),t()()(),h(16,p1,1,0,"ng-template",9),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Inline"),t(),i(20,"p"),e(21,"A dropdown can be formatted to appear inline in other content."),t(),h(22,u1,1,0,"ng-template",9),t(),i(23,"doc-code-sample",3)(24,"h3",4),e(25,"Pointing"),t(),i(26,"p"),e(27,"A dropdown can be formatted so that its menu is pointing."),t(),i(28,"div",5),r(29,"i",6),i(30,"div",7)(31,"p"),e(32,"Set "),i(33,"span",10),e(34,"suiPointing"),t(),e(35," to enable the pointing arrow, and optionally "),i(36,"span",10),e(37,"suiPointingDirection"),t(),e(38," to choose where the arrow sits."),t()()(),h(39,c1,1,0,"ng-template",9),t(),i(40,"doc-code-sample",3)(41,"h3",4),e(42,"Floating"),t(),i(43,"p"),e(44,"A dropdown menu can appear to be floating below an element."),t(),h(45,h1,1,0,"ng-template",9),t(),i(46,"doc-code-sample",3)(47,"h3",4),e(48,"Simple"),t(),i(49,"p"),e(50,"A simple dropdown can open on hover using only CSS."),t(),h(51,f1,1,0,"ng-template",9),t(),i(52,"h2",2),e(53,"Content"),t(),i(54,"doc-code-sample",3)(55,"h3",4),e(56,"Header"),t(),i(57,"p"),e(58,"A dropdown menu can contain a header."),t(),h(59,S1,1,0,"ng-template",9),t(),i(60,"doc-code-sample",3)(61,"h3",4),e(62,"Divider"),t(),i(63,"p"),e(64,"A dropdown menu can contain dividers to separate related content."),t(),h(65,g1,1,0,"ng-template",9),t(),i(66,"doc-code-sample",3)(67,"h3",4),e(68,"Icon"),t(),i(69,"p"),e(70,"A dropdown menu can contain an "),i(71,"a",11),e(72,"icon"),t(),e(73,"."),t(),h(74,v1,1,0,"ng-template",9),t(),i(75,"doc-code-sample",3)(76,"h3",4),e(77,"Description"),t(),i(78,"p"),e(79,"A dropdown menu can contain a description."),t(),i(80,"div",5),r(81,"i",6),i(82,"div",7)(83,"p"),e(84,"Using a description may require setting a minimum width on the menu to prevent content overlap."),t()()(),h(85,x1,1,0,"ng-template",9),t(),i(86,"doc-code-sample",3)(87,"h3",4),e(88,"Label"),t(),i(89,"p"),e(90,"A dropdown menu can contain a "),i(91,"a",12),e(92,"label"),t(),e(93,"."),t(),h(94,b1,1,0,"ng-template",9),t(),i(95,"doc-code-sample",3)(96,"h3",4),e(97,"Message"),t(),i(98,"p"),e(99,"A dropdown menu can contain a "),i(100,"a",13),e(101,"message"),t(),e(102,"."),t(),h(103,E1,1,0,"ng-template",9),t(),i(104,"doc-code-sample",3)(105,"h3",4),e(106,"Floated Content"),t(),i(107,"p"),e(108,"A dropdown menu can contain floated content."),t(),i(109,"div",5),r(110,"i",6),i(111,"div",7)(112,"p"),e(113,"Floated content may stack to two lines without manually setting a width or using a fluid dropdown."),t()()(),h(114,y1,1,0,"ng-template",9),t(),i(115,"doc-code-sample",3)(116,"h3",4),e(117,"Input"),t(),i(118,"p"),e(119,"A dropdown menu can contain an "),i(120,"a",14),e(121,"input"),t(),e(122,"."),t(),i(123,"div",5),r(124,"i",6),i(125,"div",7)(126,"p"),e(127,"Stop click propagation on the input so that typing or clicking it does not close the menu."),t()()(),h(128,C1,1,0,"ng-template",9),t(),i(129,"doc-code-sample",3)(130,"h3",4),e(131,"Image"),t(),i(132,"p"),e(133,"A dropdown menu can contain an "),i(134,"a",15),e(135,"image"),t(),e(136,"."),t(),h(137,w1,1,0,"ng-template",9),t(),i(138,"h2",2),e(139,"States"),t(),i(140,"doc-code-sample",3)(141,"h3",4),e(142,"Loading"),t(),i(143,"p"),e(144,"A dropdown can show that it is currently loading data."),t(),h(145,_1,1,0,"ng-template",9),t(),i(146,"doc-code-sample",3)(147,"h3",4),e(148,"Error"),t(),i(149,"p"),e(150,"An errored dropdown can alert a user to a problem."),t(),h(151,D1,1,0,"ng-template",9),t(),i(152,"doc-code-sample",3)(153,"h3",4),e(154,"Disabled"),t(),i(155,"p"),e(156,"A disabled dropdown menu or item does not allow user interaction."),t(),h(157,T1,1,0,"ng-template",9),t(),i(158,"h2",2),e(159,"Variations"),t(),i(160,"doc-code-sample",3)(161,"h3",4),e(162,"Scrolling"),t(),i(163,"p"),e(164,"A dropdown can have its menu scroll."),t(),i(165,"div",5),r(166,"i",6),i(167,"div",7)(168,"p"),e(169,"Scrolling dropdowns are incompatible with the usage of sub menus."),t()()(),h(170,M1,1,0,"ng-template",9),t(),i(171,"doc-code-sample",3)(172,"h3",4),e(173,"Compact"),t(),i(174,"p"),e(175,"A compact dropdown has no minimum width."),t(),h(176,I1,1,0,"ng-template",9),t(),i(177,"doc-code-sample",3)(178,"h3",4),e(179,"Fluid"),t(),i(180,"p"),e(181,"A dropdown can take the full width of its parent."),t(),h(182,k1,1,0,"ng-template",9),t(),i(183,"doc-code-sample",3)(184,"h3",4),e(185,"Menu Direction"),t(),i(186,"p"),e(187,"A dropdown menu or sub-menu can specify the direction it should open."),t(),i(188,"div",5),r(189,"i",6),i(190,"div",7)(191,"p"),e(192,"Specifying "),i(193,"span",10),e(194,"left"),t(),e(195," on a menu makes all child menus open in the same direction implicitly. To have the dropdown icon appear on the left side of a child item, set "),i(196,"span",10),e(197,"suiDirection"),t(),e(198," on the item as well."),t()()(),h(199,P1,1,0,"ng-template",9),t(),i(200,"h2",2),e(201,"Menus"),t(),i(202,"doc-code-sample",3)(203,"h3",4),e(204,"Multiple Levels"),t(),i(205,"p"),e(206,"A dropdown menu can contain multiple levels."),t(),i(207,"div",5),r(208,"i",6),i(209,"div",7)(210,"p"),e(211,"Nest a "),i(212,"span",10),e(213,"suiDropdownMenu"),t(),e(214," inside a "),i(215,"span",10),e(216,"suiDropdownMenuItem"),t(),e(217,". The sub menu opens when the item is hovered."),t()()(),h(218,F1,1,0,"ng-template",9),t(),i(219,"h2",2),e(220,"Coupling"),t(),i(221,"doc-code-sample",3)(222,"h3",4),e(223,"Button Group"),t(),i(224,"p"),e(225,"A dropdown can be attached to a "),i(226,"a",16),e(227,"button group"),t(),e(228,"."),t(),h(229,A1,1,0,"ng-template",9),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetDropdown),l(14),d("templateCode",o.snippetInline),l(6),d("templateCode",o.snippetPointing),l(17),d("templateCode",o.snippetFloating),l(6),d("templateCode",o.snippetSimple),l(8),d("templateCode",o.snippetHeader),l(6),d("templateCode",o.snippetDivider),l(6),d("templateCode",o.snippetIcon),l(9),d("templateCode",o.snippetDescription),l(11),d("templateCode",o.snippetLabel),l(9),d("templateCode",o.snippetMessage),l(9),d("templateCode",o.snippetFloated),l(11),d("templateCode",o.snippetInput),l(14),d("templateCode",o.snippetImage),l(11),d("templateCode",o.snippetLoading),l(6),d("templateCode",o.snippetError),l(6),d("templateCode",o.snippetDisabled),l(8),d("templateCode",o.snippetScrolling),l(11),d("templateCode",o.snippetCompact),l(6),d("templateCode",o.snippetFluid),l(6),d("templateCode",o.snippetMenuDirection),l(19),d("templateCode",o.snippetMultipleLevels),l(19),d("templateCode",o.snippetButtonGroup)}}function B1(n,m){n&1&&(i(0,"div")(1,"div",5),r(2,"i",6),i(3,"div",7)(4,"p"),e(5," Import "),i(6,"span",10),e(7,"SuiDropdownModule"),t(),e(8," from "),i(9,"span",10),e(10,"ngx-semantic/modules/dropdown"),t(),e(11," to use the component and every directive below. Looking for the selection dropdown? See "),i(12,"a",8),e(13,"Select"),t(),e(14,". "),t()()(),i(15,"h2",2),e(16,"sui-dropdown"),t(),i(17,"p"),e(18,"Selector: "),i(19,"span",10),e(20,"sui-dropdown, [sui-dropdown]"),t(),e(21,". Clicking the dropdown toggles its "),i(22,"span",10),e(23,"suiDropdownMenu"),t(),e(24,". The dropdown is focusable and does nothing when disabled."),t(),i(25,"h4",4),e(26,"Properties"),t(),i(27,"table",17)(28,"thead")(29,"tr")(30,"th"),e(31,"Property"),t(),i(32,"th"),e(33,"Description"),t(),i(34,"th"),e(35,"Type"),t(),i(36,"th"),e(37,"Default"),t()()(),i(38,"tbody")(39,"tr")(40,"td"),e(41,"suiPointing"),t(),i(42,"td"),e(43,"When true, renders the dropdown menu with a pointing arrow."),t(),i(44,"td")(45,"div",18),e(46," boolean "),t()(),i(47,"td")(48,"div",19),e(49," false "),t()()(),i(50,"tr")(51,"td"),e(52,"suiPointingDirection"),t(),i(53,"td"),e(54,"Sets where the pointing arrow sits. Use together with "),i(55,"span",10),e(56,"suiPointing"),t(),e(57,". Allowed values are "),i(58,"span",10),e(59,"top left"),t(),e(60," | "),i(61,"span",10),e(62,"top right"),t(),e(63," | "),i(64,"span",10),e(65,"left"),t(),e(66," | "),i(67,"span",10),e(68,"right"),t(),e(69," | "),i(70,"span",10),e(71,"bottom left"),t(),e(72," | "),i(73,"span",10),e(74,"bottom right"),t(),e(75," | "),i(76,"span",10),e(77,"null"),t()(),i(78,"td")(79,"div",18),e(80," string "),t()(),i(81,"td")(82,"div",19),e(83," null "),t()()(),i(84,"tr")(85,"td"),e(86,"suiFluid"),t(),i(87,"td"),e(88,"When true, the dropdown takes the full width of its parent."),t(),i(89,"td")(90,"div",18),e(91," boolean "),t()(),i(92,"td")(93,"div",19),e(94," false "),t()()(),i(95,"tr")(96,"td"),e(97,"suiInline"),t(),i(98,"td"),e(99,"When true, the dropdown appears inline with surrounding content."),t(),i(100,"td")(101,"div",18),e(102," boolean "),t()(),i(103,"td")(104,"div",19),e(105," false "),t()()(),i(106,"tr")(107,"td"),e(108,"suiLoading"),t(),i(109,"td"),e(110,"When true, shows that the dropdown is loading data."),t(),i(111,"td")(112,"div",18),e(113," boolean "),t()(),i(114,"td")(115,"div",19),e(116," false "),t()()(),i(117,"tr")(118,"td"),e(119,"suiError"),t(),i(120,"td"),e(121,"When true, renders the dropdown in an error state."),t(),i(122,"td")(123,"div",18),e(124," boolean "),t()(),i(125,"td")(126,"div",19),e(127," false "),t()()(),i(128,"tr")(129,"td"),e(130,"disabled"),t(),i(131,"td"),e(132,"When true, the dropdown cannot be opened."),t(),i(133,"td")(134,"div",18),e(135," boolean "),t()(),i(136,"td")(137,"div",19),e(138," false "),t()()(),i(139,"tr")(140,"td"),e(141,"suiScrolling"),t(),i(142,"td"),e(143,"When true, applies the scrolling style to the dropdown. You can also set "),i(144,"span",10),e(145,"suiScrolling"),t(),e(146," on the menu."),t(),i(147,"td")(148,"div",18),e(149," boolean "),t()(),i(150,"td")(151,"div",19),e(152," false "),t()()(),i(153,"tr")(154,"td"),e(155,"suiCompact"),t(),i(156,"td"),e(157,"When true, removes the minimum width of the dropdown."),t(),i(158,"td")(159,"div",18),e(160," boolean "),t()(),i(161,"td")(162,"div",19),e(163," false "),t()()(),i(164,"tr")(165,"td"),e(166,"suiFloating"),t(),i(167,"td"),e(168,"When true, the menu appears to float below the element."),t(),i(169,"td")(170,"div",18),e(171," boolean "),t()(),i(172,"td")(173,"div",19),e(174," false "),t()()(),i(175,"tr")(176,"td"),e(177,"suiSimple"),t(),i(178,"td"),e(179,"When true, the dropdown opens on hover using CSS only."),t(),i(180,"td")(181,"div",18),e(182," boolean "),t()(),i(183,"td")(184,"div",19),e(185," false "),t()()()()(),i(186,"h2",2),e(187,"suiDropdownMenu"),t(),i(188,"p"),e(189,"Selector: "),i(190,"span",10),e(191,"[suiDropdownMenu]"),t(),e(192,". The menu of a dropdown or of a dropdown menu item (sub menu)."),t(),i(193,"h4",4),e(194,"Properties"),t(),i(195,"table",17)(196,"thead")(197,"tr")(198,"th"),e(199,"Property"),t(),i(200,"th"),e(201,"Description"),t(),i(202,"th"),e(203,"Type"),t(),i(204,"th"),e(205,"Default"),t()()(),i(206,"tbody")(207,"tr")(208,"td"),e(209,"suiDirection"),t(),i(210,"td"),e(211,"Sets the direction the menu opens. Allowed values are "),i(212,"span",10),e(213,"left"),t(),e(214," | "),i(215,"span",10),e(216,"right"),t(),e(217," | "),i(218,"span",10),e(219,"null"),t()(),i(220,"td")(221,"div",18),e(222," string "),t()(),i(223,"td")(224,"div",19),e(225," null "),t()()(),i(226,"tr")(227,"td"),e(228,"suiScrolling"),t(),i(229,"td"),e(230,"When true, the menu scrolls when it has many items."),t(),i(231,"td")(232,"div",18),e(233," boolean "),t()(),i(234,"td")(235,"div",19),e(236," false "),t()()(),i(237,"tr")(238,"td"),e(239,"suiIsOpen"),t(),i(240,"td"),e(241,"Sets whether the menu is open. This is managed by the parent dropdown or menu item but can be bound to if needed."),t(),i(242,"td")(243,"div",18),e(244," boolean "),t()(),i(245,"td")(246,"div",19),e(247," false "),t()()()()(),i(248,"h2",2),e(249,"suiDropdownMenuItem"),t(),i(250,"p"),e(251,"Selector: "),i(252,"span",10),e(253,"[suiDropdownMenuItem]"),t(),e(254,". An item in a dropdown menu. If it contains a "),i(255,"span",10),e(256,"suiDropdownMenu"),t(),e(257,", that sub menu opens while the item is hovered."),t(),i(258,"h4",4),e(259,"Properties"),t(),i(260,"table",17)(261,"thead")(262,"tr")(263,"th"),e(264,"Property"),t(),i(265,"th"),e(266,"Description"),t(),i(267,"th"),e(268,"Type"),t(),i(269,"th"),e(270,"Default"),t()()(),i(271,"tbody")(272,"tr")(273,"td"),e(274,"suiDirection"),t(),i(275,"td"),e(276,"Sets the side the item\u2019s sub menu icon appears on. Allowed values are "),i(277,"span",10),e(278,"left"),t(),e(279," | "),i(280,"span",10),e(281,"right"),t(),e(282," | "),i(283,"span",10),e(284,"null"),t()(),i(285,"td")(286,"div",18),e(287," string "),t()(),i(288,"td")(289,"div",19),e(290," null "),t()()(),i(291,"tr")(292,"td"),e(293,"disabled"),t(),i(294,"td"),e(295,"When true, the item does not allow user interaction."),t(),i(296,"td")(297,"div",18),e(298," boolean "),t()(),i(299,"td")(300,"div",19),e(301," false "),t()()()()(),i(302,"h2",2),e(303,"suiDropdownMenuHeader"),t(),i(304,"p"),e(305,"Selector: "),i(306,"span",10),e(307,"[suiDropdownMenuHeader]"),t(),e(308,". A header that groups the items below it."),t(),i(309,"h4",4),e(310,"Properties"),t(),i(311,"table",17)(312,"thead")(313,"tr")(314,"th"),e(315,"Property"),t(),i(316,"th"),e(317,"Description"),t(),i(318,"th"),e(319,"Type"),t(),i(320,"th"),e(321,"Default"),t()()(),r(322,"tbody"),i(323,"tfoot",20)(324,"tr")(325,"th",21)(326,"div",22),e(327,"No properties for this directive"),t()()()()(),i(328,"h2",2),e(329,"suiDropdownMenuDivider"),t(),i(330,"p"),e(331,"Selector: "),i(332,"span",10),e(333,"[suiDropdownMenuDivider]"),t(),e(334,". A divider that separates related items."),t(),i(335,"h4",4),e(336,"Properties"),t(),i(337,"table",17)(338,"thead")(339,"tr")(340,"th"),e(341,"Property"),t(),i(342,"th"),e(343,"Description"),t(),i(344,"th"),e(345,"Type"),t(),i(346,"th"),e(347,"Default"),t()()(),r(348,"tbody"),i(349,"tfoot",20)(350,"tr")(351,"th",21)(352,"div",22),e(353,"No properties for this directive"),t()()()()()())}var Al=(()=>{class n{constructor(o){this.snippetDropdown=zr,this.snippetInline=jr,this.snippetPointing=Nr,this.snippetFloating=Ur,this.snippetSimple=$r,this.snippetHeader=Yr,this.snippetDivider=Gr,this.snippetIcon=Xr,this.snippetDescription=Jr,this.snippetLabel=qr,this.snippetMessage=Zr,this.snippetFloated=Kr,this.snippetInput=Qr,this.snippetImage=el,this.snippetLoading=tl,this.snippetError=il,this.snippetDisabled=nl,this.snippetScrolling=ol,this.snippetCompact=al,this.snippetFluid=sl,this.snippetMenuDirection=rl,this.snippetMultipleLevels=ll,this.snippetButtonGroup=dl,o.setTitle("Dropdown | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-dropdown"]],standalone:!1,decls:3,vars:2,consts:[["header","Dropdown","subHeader","A dropdown allows a user to select a value from a series of options"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiIcon",""],["sui-icon","","suiIconType","info circle"],["suiMessageContent",""],["routerLink","/modules/select"],["docDemo",""],["sui-label",""],["routerLink","/elements/icon"],["routerLink","/elements/label"],["routerLink","/collections/messages"],["routerLink","/elements/input"],["routerLink","/elements/image"],["routerLink","/elements/button"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],[1,"full-width"],["colspan","4"],[2,"text-align","center"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,V1,230,23,"div",1)(2,B1,354,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[Wt,j,R,W,z,O,N,y,E,se,zt,ml,pl,ul,cl,hl,fl,Sl,gl,vl,xl,bl,El,yl,Cl,wl,_l,Dl,Tl,Ml,Il,kl,Pl,Fl],encapsulation:2})}}return n})();var Vl=`<div sui-buttons
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
`;var Bl=`<div sui-buttons
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
`;var Ol=`<div sui-buttons
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
`;var Ll=`<div sui-buttons
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
`;var Hl=`<button sui-button
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
`;var Wl=["*"],z1=["shapeEl"],j1=["sidesEl"],ft=(()=>{class n{constructor(){this.element=Y(bt),this.styleActive=!1,this.styleHidden=!1,this.styleAnimating=!1,this.inlineStyles={},this.sideClass=!0}get nativeElement(){return this.element.nativeElement}clearInlineStyles(){this.inlineStyles={}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-shape-side"]],hostVars:10,hostBindings:function(a,s){a&2&&(Fi(s.inlineStyles),De("active",s.styleActive)("hidden",s.styleHidden)("animating",s.styleAnimating)("side",s.sideClass))},exportAs:["suiShapeSide"],ngContentSelectors:Wl,decls:1,vars:0,template:function(a,s){a&1&&(we(),_e(0))},encapsulation:2})}}return n})();function Oe(n){let m=n.getBoundingClientRect(),o=getComputedStyle(n);return m.height+parseFloat(o.marginTop)+parseFloat(o.marginBottom)}function ue(n){let m=n.getBoundingClientRect(),o=getComputedStyle(n);return m.width+parseFloat(o.marginLeft)+parseFloat(o.marginRight)}function N1(){let n=document.createElement("div"),m={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(let o of Object.keys(m))if(n.style[o]!==void 0)return m[o];return"transitionend"}var St=(()=>{class n{constructor(){this.cdr=Y(Re),this.zone=Y(xt),this.suiDuration=null,this.suiWidth="initial",this.suiHeight="initial",this.suiJitter=0,this.suiAllowRepeats=!1,this.suiCube=!1,this.suiText=!1,this.suiBeforeChange=new X,this.suiOnChange=new X,this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={},this.transitionEnd=N1(),this.activeSide=null,this.nextSide=null,this.manualNextIndex=null,this.queue=[],this.sidesChangeSub=null}ngAfterContentInit(){this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.sidesChangeSub=this.sideList.changes.subscribe(()=>{this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.cdr.markForCheck()})}ngOnDestroy(){this.sidesChangeSub?.unsubscribe()}flipUp(){this.runFlip("flip up",()=>{this.setStageSize(),this.stageAbove(),this.animate(this.getTransformUp())})}flipDown(){this.runFlip("flip down",()=>{this.setStageSize(),this.stageBelow(),this.animate(this.getTransformDown())})}flipLeft(){this.runFlip("flip left",()=>{this.setStageSize(),this.stageLeft(),this.animate(this.getTransformLeft())})}flipRight(){this.runFlip("flip right",()=>{this.setStageSize(),this.stageRight(),this.animate(this.getTransformRight())})}flipOver(){this.runFlip("flip over",()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformOver())})}flipBack(){this.runFlip("flip back",()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformBack())})}setNextSide(o){let a=this.sideList.toArray(),s=a.filter(u=>u.nativeElement.matches(o));if(s.length===0){this.setDefaultSide();return}this.nextSide=s[0],this.manualNextIndex=a.indexOf(this.nextSide)}isAnimating(){return this.animating}reset(){this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={};for(let o of this.sideList.toArray())o.styleHidden=!1,o.styleAnimating=!1,o.clearInlineStyles();this.cdr.markForCheck()}repaint(){let o=this.sidesEl?.nativeElement;o&&o.offsetWidth}refresh(){this.setDefaultSide()}flip(o){switch(o){case"flip up":this.flipUp();break;case"flip down":this.flipDown();break;case"flip left":this.flipLeft();break;case"flip right":this.flipRight();break;case"flip over":this.flipOver();break;case"flip back":this.flipBack();break}}runFlip(o,a){this.sideList.length<2||(this.setDefaultSide(),!(!this.activeSide||!this.nextSide)&&(this.isComplete()&&!this.animating&&!this.suiAllowRepeats||(this.animating?this.queue.push(o):a())))}isComplete(){return this.activeSide!==null&&this.nextSide!==null&&this.activeSide===this.nextSide}ensureFirstSideActive(){let o=this.sideList.toArray();o.length!==0&&(o.some(a=>a.styleActive)||(o[0].styleActive=!0))}setDefaultSide(){let o=this.sideList.toArray();if(o.length===0){this.activeSide=null,this.nextSide=null;return}let a=o.findIndex(s=>s.styleActive);if(this.activeSide=a>=0?o[a]:o[0],this.manualNextIndex!==null&&this.manualNextIndex>=0&&this.manualNextIndex<o.length)this.nextSide=o[this.manualNextIndex];else{let s=o.indexOf(this.activeSide);this.nextSide=s<o.length-1?o[s+1]:o[0]}}applyDurationToSides(){if(this.suiDuration===null||this.suiDuration===void 0)return;let o=`${this.suiDuration}ms`,a={transitionDuration:o,WebkitTransitionDuration:o,MozTransitionDuration:o,OTransitionDuration:o};this.sidesInlineStyle=Q(Q({},this.sidesInlineStyle),a);for(let s of this.sideList.toArray())s.inlineStyles=Q(Q({},s.inlineStyles),a)}setStageSize(){if(!this.activeSide||!this.nextSide)return;let o=this.shapeEl.nativeElement,a=this.suiWidth,s=this.suiHeight,u,p;a==="next"?u=ue(this.nextSide.nativeElement):a==="initial"?u=o.offsetWidth:u=a,s==="next"?p=Oe(this.nextSide.nativeElement):s==="initial"?p=o.offsetHeight:p=s,this.shapeInlineStyle=he(Q({},this.shapeInlineStyle),{width:`${u+this.suiJitter}px`,height:`${p+this.suiJitter}px`})}animate(o){if(!this.activeSide||!this.nextSide)return;let a=this.activeSide,s=this.nextSide;this.suiBeforeChange.emit(s);let u=this.sidesEl.nativeElement,p=x=>{if(x.target!==u){u.addEventListener(this.transitionEnd,p,{once:!0});return}this.zone.run(()=>{this.finishAnimation()})};setTimeout(()=>{this.zone.run(()=>{this.animating=!0,u.addEventListener(this.transitionEnd,p,{once:!0}),this.sidesInlineStyle=Q(Q({},this.sidesInlineStyle),o),a.styleHidden=!0,this.cdr.markForCheck()})})}finishAnimation(){this.reset(),this.setActive(),this.processQueue(),this.cdr.markForCheck()}setActive(){let o=this.sideList.toArray();if(this.nextSide){for(let a of o)a.styleActive=!1;this.nextSide.styleActive=!0,this.suiOnChange.emit(this.nextSide),this.manualNextIndex=null,this.setDefaultSide()}}processQueue(){let o=this.queue.shift();o&&this.flip(o)}getTransformUp(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(Oe(o)-Oe(a))/2,u=-Oe(o)/2;return{transform:`translateY(${s}px) translateZ(${u}px) rotateX(-90deg)`}}getTransformDown(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(Oe(o)-Oe(a))/2,u=-Oe(o)/2;return{transform:`translateY(${s}px) translateZ(${u}px) rotateX(90deg)`}}getTransformLeft(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(ue(o)-ue(a))/2,u=-ue(o)/2;return{transform:`translateX(${s}px) translateZ(${u}px) rotateY(90deg)`}}getTransformRight(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement,s=-(ue(o)-ue(a))/2,u=-ue(o)/2;return{transform:`translateX(${s}px) translateZ(${u}px) rotateY(-90deg)`}}getTransformOver(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(ue(o)-ue(a))/2}px) rotateY(180deg)`}}getTransformBack(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(ue(o)-ue(a))/2}px) rotateY(-180deg)`}}stageAbove(){let o=this.activeSide,a=this.nextSide,s=Oe(o.nativeElement),u=Oe(a.nativeElement),p=(s-u)/2,x=u/2,oe=s/2;this.sidesInlineStyle=he(Q({},this.sidesInlineStyle),{transform:`translateZ(-${x}px)`}),o.inlineStyles=he(Q({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${x}px)`}),a.styleAnimating=!0,a.inlineStyles=he(Q({},a.inlineStyles),{top:`${p}px`,transform:`rotateX(90deg) translateZ(${oe}px)`})}stageBelow(){let o=this.activeSide,a=this.nextSide,s=Oe(o.nativeElement),u=Oe(a.nativeElement),p=(s-u)/2,x=u/2,oe=s/2;this.sidesInlineStyle=he(Q({},this.sidesInlineStyle),{transform:`translateZ(-${x}px)`}),o.inlineStyles=he(Q({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${x}px)`}),a.styleAnimating=!0,a.inlineStyles=he(Q({},a.inlineStyles),{top:`${p}px`,transform:`rotateX(-90deg) translateZ(${oe}px)`})}stageLeft(){let o=this.activeSide,a=this.nextSide,s=ue(o.nativeElement),u=ue(a.nativeElement),p=(s-u)/2,x=u/2,oe=s/2;this.sidesInlineStyle=he(Q({},this.sidesInlineStyle),{transform:`translateZ(-${x}px)`}),o.inlineStyles=he(Q({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${x}px)`}),a.styleAnimating=!0,a.inlineStyles=he(Q({},a.inlineStyles),{left:`${p}px`,transform:`rotateY(-90deg) translateZ(${oe}px)`})}stageRight(){let o=this.activeSide,a=this.nextSide,s=ue(o.nativeElement),u=ue(a.nativeElement),p=(s-u)/2,x=u/2,oe=s/2;this.sidesInlineStyle=he(Q({},this.sidesInlineStyle),{transform:`translateZ(-${x}px)`}),o.inlineStyles=he(Q({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${x}px)`}),a.styleAnimating=!0,a.inlineStyles=he(Q({},a.inlineStyles),{left:`${p}px`,transform:`rotateY(90deg) translateZ(${oe}px)`})}stageBehind(){let o=this.activeSide,a=this.nextSide,s=ue(o.nativeElement),u=ue(a.nativeElement),p=(s-u)/2;o.inlineStyles=he(Q({},o.inlineStyles),{transform:"rotateY(0deg)"}),a.styleAnimating=!0,a.inlineStyles=he(Q({},a.inlineStyles),{left:`${p}px`,transform:"rotateY(-180deg)"})}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-shape"]],contentQueries:function(a,s,u){if(a&1&&Ct(u,ft,4),a&2){let p;Pe(p=Fe())&&(s.sideList=p)}},viewQuery:function(a,s){if(a&1&&wt(z1,7)(j1,7),a&2){let u;Pe(u=Fe())&&(s.shapeEl=u.first),Pe(u=Fe())&&(s.sidesEl=u.first)}},inputs:{suiDuration:"suiDuration",suiWidth:"suiWidth",suiHeight:"suiHeight",suiJitter:"suiJitter",suiAllowRepeats:"suiAllowRepeats",suiCube:"suiCube",suiText:"suiText"},outputs:{suiBeforeChange:"suiBeforeChange",suiOnChange:"suiOnChange"},exportAs:["suiShape"],ngContentSelectors:Wl,decls:5,vars:8,consts:[["shapeEl",""],["sidesEl",""],[1,"ui","shape",3,"ngStyle"],[1,"sides",3,"ngStyle"]],template:function(a,s){a&1&&(we(),i(0,"div",2,0)(2,"div",3,1),_e(4),t()()),a&2&&(De("animating",s.animating)("cube",s.suiCube)("text",s.suiText),d("ngStyle",s.shapeInlineStyle),l(2),d("ngStyle",s.sidesInlineStyle))},dependencies:[ie,Oi],encapsulation:2})}}return F([A()],n.prototype,"suiAllowRepeats",void 0),F([A()],n.prototype,"suiCube",void 0),F([A()],n.prototype,"suiText",void 0),n})(),Rl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[ie,St]})}}return n})();var zl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-shape-shape-example"]],standalone:!1,decls:41,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["sui-segment",""],["sui-image","","src","https://semantic-ui.com/images/avatar/large/steve.jpg"],["sui-header",""],["suiSubHeader",""],["sui-image","","src","https://semantic-ui.com/images/avatar/large/elliot.jpg"],["sui-image","","src","https://semantic-ui.com/images/avatar/large/stevie.jpg"]],template:function(a,s){if(a&1){let u=ae();i(0,"div",1)(1,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipLeft())}),r(2,"i",3),e(3," Left"),t(),i(4,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipUp())}),r(5,"i",4),e(6," Up"),t(),i(7,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipDown())}),r(8,"i",5),e(9," Down"),t(),i(10,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipRight())}),r(11,"i",6),e(12," Right"),t(),i(13,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipOver())}),e(14,"Over"),t(),i(15,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipBack())}),e(16,"Back"),t()(),r(17,"div",7),i(18,"sui-shape",null,0)(20,"sui-shape-side")(21,"div",8),r(22,"img",9),i(23,"h4",10),e(24," Steve "),i(25,"div",11),e(26,"Steve is a creative professional"),t()()()(),i(27,"sui-shape-side")(28,"div",8),r(29,"img",12),i(30,"h4",10),e(31," Elliot "),i(32,"div",11),e(33,"Elliot is a sound engineer"),t()()()(),i(34,"sui-shape-side")(35,"div",8),r(36,"img",13),i(37,"h4",10),e(38," Stevie "),i(39,"div",11),e(40,"Stevie is a writer"),t()()()()()}},dependencies:[y,Rt,C,U,E,Ie,G,B,St,ft],encapsulation:2})}}return n})(),jl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-shape-cube-example"]],standalone:!1,decls:44,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["suiCube",""],[1,"content"],[1,"center"]],template:function(a,s){if(a&1){let u=ae();i(0,"div",1)(1,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipLeft())}),r(2,"i",3),e(3," Left"),t(),i(4,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipUp())}),r(5,"i",4),e(6," Up"),t(),i(7,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipDown())}),r(8,"i",5),e(9," Down"),t(),i(10,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipRight())}),r(11,"i",6),e(12," Right"),t(),i(13,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipOver())}),e(14,"Over"),t(),i(15,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipBack())}),e(16,"Back"),t()(),r(17,"div",7),i(18,"sui-shape",8,0)(20,"sui-shape-side")(21,"div",9)(22,"div",10),e(23,"1"),t()()(),i(24,"sui-shape-side")(25,"div",9)(26,"div",10),e(27,"2"),t()()(),i(28,"sui-shape-side")(29,"div",9)(30,"div",10),e(31,"3"),t()()(),i(32,"sui-shape-side")(33,"div",9)(34,"div",10),e(35,"4"),t()()(),i(36,"sui-shape-side")(37,"div",9)(38,"div",10),e(39,"5"),t()()(),i(40,"sui-shape-side")(41,"div",9)(42,"div",10),e(43,"6"),t()()()()}},dependencies:[C,U,E,Ie,St,ft],encapsulation:2})}}return n})(),Nl=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-shape-text-example"]],standalone:!1,decls:32,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-icon","","suiIconType","left long arrow"],["sui-icon","","suiIconType","up long arrow"],["sui-icon","","suiIconType","down long arrow"],["sui-icon","","suiIconType","right long arrow"],["sui-divider","","suiHidden",""],["suiText",""],["sui-header",""]],template:function(a,s){if(a&1){let u=ae();i(0,"div",1)(1,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipLeft())}),r(2,"i",3),e(3," Left"),t(),i(4,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipUp())}),r(5,"i",4),e(6," Up"),t(),i(7,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipDown())}),r(8,"i",5),e(9," Down"),t(),i(10,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipRight())}),r(11,"i",6),e(12," Right"),t(),i(13,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipOver())}),e(14,"Over"),t(),i(15,"button",2),S("click",function(){I(u);let x=V(19);return k(x.flipBack())}),e(16,"Back"),t()(),r(17,"div",7),i(18,"sui-shape",8,0)(20,"sui-shape-side")(21,"h2",9),e(22,"Hello there!"),t()(),i(23,"sui-shape-side")(24,"h2",9),e(25,"Flip me"),t()(),i(26,"sui-shape-side")(27,"h2",9),e(28,"Shapes can hold text"),t()(),i(29,"sui-shape-side")(30,"h2",9),e(31,"Have a nice day"),t()()()}},dependencies:[y,C,U,E,Ie,St,ft],encapsulation:2})}}return n})(),Ul=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-shape-next-side-example"]],standalone:!1,decls:19,vars:0,consts:[["shape","suiShape"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiText",""],[1,"first"],["sui-header",""],[1,"second"],[1,"third"]],template:function(a,s){if(a&1){let u=ae();i(0,"div",1)(1,"button",2),S("click",function(){I(u);let x=V(9);return x.setNextSide(".first"),k(x.flipUp())}),e(2,"First"),t(),i(3,"button",2),S("click",function(){I(u);let x=V(9);return x.setNextSide(".second"),k(x.flipUp())}),e(4,"Second"),t(),i(5,"button",2),S("click",function(){I(u);let x=V(9);return x.setNextSide(".third"),k(x.flipUp())}),e(6,"Third"),t()(),r(7,"div",3),i(8,"sui-shape",4,0)(10,"sui-shape-side",5)(11,"h2",6),e(12,"First side"),t()(),i(13,"sui-shape-side",7)(14,"h2",6),e(15,"Second side"),t()(),i(16,"sui-shape-side",8)(17,"h2",6),e(18,"Third side"),t()()()}},dependencies:[y,C,U,Ie,St,ft],encapsulation:2})}}return n})(),$l=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["doc-shape-settings-example"]],standalone:!1,decls:11,vars:1,consts:[["shape","suiShape"],["sui-button","","suiSize","small",3,"click"],["sui-divider","","suiHidden",""],["suiText","","suiWidth","next",3,"suiDuration"],["sui-header",""]],template:function(a,s){if(a&1){let u=ae();i(0,"button",1),S("click",function(){I(u);let x=V(4);return k(x.flipRight())}),e(1,"Flip Right"),t(),r(2,"div",2),i(3,"sui-shape",3,0)(5,"sui-shape-side")(6,"h2",4),e(7,"Short"),t()(),i(8,"sui-shape-side")(9,"h2",4),e(10,"A much longer side of text"),t()()()}a&2&&(l(3),d("suiDuration",1500))},dependencies:[y,C,Ie,St,ft],encapsulation:2})}}return n})();function Y1(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-shape-example"),t())}function G1(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-cube-example"),t())}function X1(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-text-example"),t())}function J1(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-next-side-example"),t())}function q1(n,m){n&1&&(i(0,"div",7),r(1,"doc-shape-settings-example"),t())}function Z1(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Shape"),t(),i(6,"p"),e(7,"A shape can contain any content on each of its sides"),t(),i(8,"div",5),e(9," Get a reference to the shape with "),i(10,"code"),e(11,'#shape="suiShape"'),t(),e(12," to call its flip methods. "),t(),h(13,Y1,2,0,"ng-template",6),t(),i(14,"doc-code-sample",3)(15,"h3",4),e(16,"Cube"),t(),i(17,"p"),e(18,"A shape can be the size of a cube"),t(),h(19,G1,2,0,"ng-template",6),t(),i(20,"doc-code-sample",3)(21,"h3",4),e(22,"Text"),t(),i(23,"p"),e(24,"A shape can be formatted for text content"),t(),h(25,X1,2,0,"ng-template",6),t(),r(26,"br"),i(27,"h2",2),e(28,"Content"),t(),i(29,"doc-code-sample",3)(30,"h3",4),e(31,"Side"),t(),i(32,"p"),e(33,"A shape displays one side at a time; you can choose the next side before flipping"),t(),i(34,"div",5)(35,"code"),e(36,"setNextSide"),t(),e(37," takes a CSS selector that is matched against each side. "),t(),h(38,J1,2,0,"ng-template",6),t(),r(39,"br"),i(40,"h2",2),e(41,"Settings"),t(),i(42,"doc-code-sample",3)(43,"h3",4),e(44,"Duration and Size"),t(),i(45,"p"),e(46,"A shape can change its animation duration, and resize to fit the next side while animating"),t(),h(47,q1,2,0,"ng-template",6),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetShape),l(11),d("templateCode",o.snippetCube),l(6),d("templateCode",o.snippetText),l(9),d("templateCode",o.snippetNextSide),l(13),d("templateCode",o.snippetSettings)}}function K1(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-shape"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19," suiCube "),t(),i(20,"td"),e(21," Format the shape as a cube "),t(),i(22,"td")(23,"div",9),e(24," boolean "),t()(),i(25,"td")(26,"div",10),e(27," false "),t()()(),i(28,"tr")(29,"td"),e(30," suiText "),t(),i(31,"td"),e(32," Format the shape for text content "),t(),i(33,"td")(34,"div",9),e(35," boolean "),t()(),i(36,"td")(37,"div",10),e(38," false "),t()()(),i(39,"tr")(40,"td"),e(41," suiDuration "),t(),i(42,"td"),e(43," Animation duration in milliseconds. Uses the Semantic UI CSS duration when not set "),t(),i(44,"td")(45,"div",9),e(46," number "),t()(),i(47,"td")(48,"div",10),e(49," null "),t()()(),i(50,"tr")(51,"td"),e(52," suiWidth "),t(),i(53,"td"),e(54," Width of the shape while animating: the initial width, the next side's width or a pixel value. Allowed values are "),i(55,"span",11),e(56,"'initial'"),t(),e(57," | "),i(58,"span",11),e(59,"'next'"),t(),e(60," | "),i(61,"span",11),e(62,"number"),t()(),i(63,"td")(64,"div",9),e(65," string | number "),t()(),i(66,"td")(67,"div",10),e(68," 'initial' "),t()()(),i(69,"tr")(70,"td"),e(71," suiHeight "),t(),i(72,"td"),e(73," Height of the shape while animating: the initial height, the next side's height or a pixel value. Allowed values are "),i(74,"span",11),e(75,"'initial'"),t(),e(76," | "),i(77,"span",11),e(78,"'next'"),t(),e(79," | "),i(80,"span",11),e(81,"number"),t()(),i(82,"td")(83,"div",9),e(84," string | number "),t()(),i(85,"td")(86,"div",10),e(87," 'initial' "),t()()(),i(88,"tr")(89,"td"),e(90," suiJitter "),t(),i(91,"td"),e(92," Pixels added to the stage size to avoid rounding issues "),t(),i(93,"td")(94,"div",9),e(95," number "),t()(),i(96,"td")(97,"div",10),e(98," 0 "),t()()(),i(99,"tr")(100,"td"),e(101," suiAllowRepeats "),t(),i(102,"td"),e(103," Allow flipping to the side that is already visible "),t(),i(104,"td")(105,"div",9),e(106," boolean "),t()(),i(107,"td")(108,"div",10),e(109," false "),t()()()()(),i(110,"h4",4),e(111,"Events"),t(),i(112,"table",8)(113,"thead")(114,"tr")(115,"th"),e(116,"Event"),t(),i(117,"th"),e(118,"Description"),t(),i(119,"th"),e(120,"Type"),t()()(),i(121,"tbody")(122,"tr")(123,"td"),e(124," suiBeforeChange "),t(),i(125,"td"),e(126," Emitted with the next side before the shape starts animating "),t(),i(127,"td")(128,"div",9),e(129," EventEmitter<SuiShapeSideComponent> "),t()()(),i(130,"tr")(131,"td"),e(132," suiOnChange "),t(),i(133,"td"),e(134," Emitted with the new active side once the animation completes "),t(),i(135,"td")(136,"div",9),e(137," EventEmitter<SuiShapeSideComponent> "),t()()()()(),i(138,"h4",4),e(139,"Methods"),t(),i(140,"table",8)(141,"thead")(142,"tr")(143,"th"),e(144,"Method"),t(),i(145,"th"),e(146,"Description"),t()()(),i(147,"tbody")(148,"tr")(149,"td"),e(150," flipUp() "),t(),i(151,"td"),e(152," Flips the shape upward "),t()(),i(153,"tr")(154,"td"),e(155," flipDown() "),t(),i(156,"td"),e(157," Flips the shape downward "),t()(),i(158,"tr")(159,"td"),e(160," flipLeft() "),t(),i(161,"td"),e(162," Flips the shape to the left "),t()(),i(163,"tr")(164,"td"),e(165," flipRight() "),t(),i(166,"td"),e(167," Flips the shape to the right "),t()(),i(168,"tr")(169,"td"),e(170," flipOver() "),t(),i(171,"td"),e(172," Flips the shape over clock-wise "),t()(),i(173,"tr")(174,"td"),e(175," flipBack() "),t(),i(176,"td"),e(177," Flips the shape back counter-clockwise "),t()(),i(178,"tr")(179,"td"),e(180," flip(behavior) "),t(),i(181,"td"),e(182," Runs a named flip such as "),i(183,"code"),e(184,"'flip up'"),t()()(),i(185,"tr")(186,"td"),e(187," setNextSide(selector) "),t(),i(188,"td"),e(189," Sets the side to show on the next flip "),t()(),i(190,"tr")(191,"td"),e(192," isAnimating() "),t(),i(193,"td"),e(194," Returns whether the shape is animating "),t()(),i(195,"tr")(196,"td"),e(197," reset() "),t(),i(198,"td"),e(199," Removes all inline animation styles "),t()(),i(200,"tr")(201,"td"),e(202," repaint() "),t(),i(203,"td"),e(204," Forces the browser to repaint the shape "),t()(),i(205,"tr")(206,"td"),e(207," refresh() "),t(),i(208,"td"),e(209," Re-reads the sides, e.g. after changing them "),t()()()()())}var Yl=(()=>{class n{constructor(o){this.snippetShape=Vl,this.snippetCube=Bl,this.snippetText=Ol,this.snippetNextSide=Ll,this.snippetSettings=Hl,o.setTitle("Shape | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-shape"]],standalone:!1,decls:3,vars:2,consts:[["header","Shape","subHeader","A shape is a three dimensional object displayed on a two dimensional plane","semanticUrl","https://semantic-ui.com/modules/shape.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[1,"shape-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Z1,48,5,"div",1)(2,K1,210,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,se,zl,jl,Nl,Ul,$l],styles:["[_nghost-%COMP%]     .shape-demo .ui.shape .side>.ui.segment{width:15rem;margin:0}"]})}}return n})();var Gl=`<div sui-menu
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
`;var Xl=`import { Component } from '@angular/core';
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
`;var Jl=`<sui-sidebar-container suiPushable
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
`;var ql=`<div sui-menu
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
`;var Zl=`import { Component } from '@angular/core';
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
`;var Kl=`<div sui-buttons
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
`;var Ql=`import { Component } from '@angular/core';
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
`;var ed=`<div sui-buttons
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
`;var td=`import { Component } from '@angular/core';
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
`;var id=`<div sui-buttons
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
`;var nd=`import { Component } from '@angular/core';
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
`;var od=`<sui-sidebar-container>
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
`;var ad=`import { Component } from '@angular/core';
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
`;var Qe=class{constructor(){this.visible=!1,this.direction="left",this.animation="overlay",this.width=null}show(m,o="overlay"){this.direction=m,this.animation=o,this.visible=!0}get isVertical(){return this.direction==="left"||this.direction==="right"}},sd=(()=>{class n extends Qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sidebar-sidebar-example"]],standalone:!1,features:[v],decls:21,vars:1,consts:[["sui-menu","","suiAttached","top"],["suiMenuItem","",3,"click"],["sui-icon","","suiIconType","sidebar"],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiIcon","labeled icon","suiSidebarWidth","thin","suiSidebarAnimation","overlay",3,"visibleChange","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"a",1),S("click",function(){return s.visible=!s.visible}),r(2,"i",2),e(3," Menu "),t()(),i(4,"sui-sidebar-container",3)(5,"div",4),D("visibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),i(6,"a",5),r(7,"i",6),e(8," Home"),t(),i(9,"a",5),r(10,"i",7),e(11," Topics"),t(),i(12,"a",5),r(13,"i",8),e(14," Friends"),t()(),i(15,"sui-sidebar-pusher")(16,"div",9)(17,"h3",10),e(18,"Application Content"),t(),r(19,"doc-wireframe",11)(20,"doc-wireframe",11),t()()()),a&2&&(l(5),w("visible",s.visible))},dependencies:[Z,y,E,B,nt,ot,at,ze,je],encapsulation:2})}}return n})(),rd=(()=>{class n extends Qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sidebar-visible-example"]],standalone:!1,features:[v],decls:17,vars:1,consts:[["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarWidth","thin",3,"visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"sui-sidebar-container",0)(1,"div",1)(2,"a",2),r(3,"i",3),e(4," Home"),t(),i(5,"a",2),r(6,"i",4),e(7," Topics"),t(),i(8,"a",2),r(9,"i",5),e(10," Friends"),t()(),i(11,"sui-sidebar-pusher")(12,"div",6)(13,"h3",7),e(14,"Application Content"),t(),r(15,"doc-wireframe",8)(16,"doc-wireframe",8),t()()()),a&2&&(l(),d("visible",!0))},dependencies:[Z,y,E,B,nt,ot,at,ze,je],encapsulation:2})}}return n})(),ld=(()=>{class n extends Qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sidebar-dimmed-example"]],standalone:!1,features:[v],decls:21,vars:1,consts:[["sui-menu","","suiAttached","top"],["suiMenuItem","",3,"click"],["sui-icon","","suiIconType","sidebar"],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarAnimation","overlay",3,"visibleChange","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["suiDimmable",""],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"a",1),S("click",function(){return s.visible=!s.visible}),r(2,"i",2),e(3," Menu "),t()(),i(4,"sui-sidebar-container",3)(5,"div",4),D("visibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),i(6,"a",5),r(7,"i",6),e(8," Home"),t(),i(9,"a",5),r(10,"i",7),e(11," Topics"),t(),i(12,"a",5),r(13,"i",8),e(14," Friends"),t()(),i(15,"sui-sidebar-pusher",9)(16,"div",10)(17,"h3",11),e(18,"Application Content"),t(),r(19,"doc-wireframe",12)(20,"doc-wireframe",12),t()()()),a&2&&(l(5),w("visible",s.visible))},dependencies:[Z,y,E,B,nt,ot,at,ze,je],encapsulation:2})}}return n})(),dd=(()=>{class n extends Qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sidebar-direction-example"]],standalone:!1,features:[v],decls:27,vars:3,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiSidebarAnimation","overlay",3,"visibleChange","suiVertical","suiSidebarPosition","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.show("left")}),e(2,"Left"),t(),i(3,"button",1),S("click",function(){return s.show("right")}),e(4,"Right"),t(),i(5,"button",1),S("click",function(){return s.show("top")}),e(6,"Top"),t(),i(7,"button",1),S("click",function(){return s.show("bottom")}),e(8,"Bottom"),t()(),r(9,"div",2),i(10,"sui-sidebar-container",3)(11,"div",4),D("visibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),i(12,"a",5),r(13,"i",6),e(14," Home"),t(),i(15,"a",5),r(16,"i",7),e(17," Topics"),t(),i(18,"a",5),r(19,"i",8),e(20," Friends"),t()(),i(21,"sui-sidebar-pusher")(22,"div",9)(23,"h3",10),e(24,"Application Content"),t(),r(25,"doc-wireframe",11)(26,"doc-wireframe",11),t()()()),a&2&&(l(11),d("suiVertical",s.isVertical)("suiSidebarPosition",s.direction),w("visible",s.visible))},dependencies:[Z,y,C,U,E,Ie,B,nt,ot,at,ze,je],encapsulation:2})}}return n})(),md=(()=>{class n extends Qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sidebar-width-example"]],standalone:!1,features:[v],decls:29,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarAnimation","overlay",3,"visibleChange","suiSidebarWidth","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.width="very thin",s.visible=!0}),e(2,"Very Thin"),t(),i(3,"button",1),S("click",function(){return s.width="thin",s.visible=!0}),e(4,"Thin"),t(),i(5,"button",1),S("click",function(){return s.width=null,s.visible=!0}),e(6,"Default"),t(),i(7,"button",1),S("click",function(){return s.width="wide",s.visible=!0}),e(8,"Wide"),t(),i(9,"button",1),S("click",function(){return s.width="very wide",s.visible=!0}),e(10,"Very Wide"),t()(),r(11,"div",2),i(12,"sui-sidebar-container",3)(13,"div",4),D("visibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),i(14,"a",5),r(15,"i",6),e(16," Home"),t(),i(17,"a",5),r(18,"i",7),e(19," Topics"),t(),i(20,"a",5),r(21,"i",8),e(22," Friends"),t()(),i(23,"sui-sidebar-pusher")(24,"div",9)(25,"h3",10),e(26,"Application Content"),t(),r(27,"doc-wireframe",11)(28,"doc-wireframe",11),t()()()),a&2&&(l(13),d("suiSidebarWidth",s.width),w("visible",s.visible))},dependencies:[Z,y,C,U,E,Ie,B,nt,ot,at,ze,je],encapsulation:2})}}return n})(),pd=(()=>{class n extends Qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sidebar-transitions-example"]],standalone:!1,features:[v],decls:31,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-divider","","suiHidden",""],["suiPushable","",1,"ui","bottom","attached","segment"],["sui-sidebar","","sui-menu","","suiInverted","","suiVertical","","suiSidebarWidth","thin",3,"visibleChange","suiSidebarAnimation","visible"],["suiMenuItem",""],["sui-icon","","suiIconType","home"],["sui-icon","","suiIconType","block layout"],["sui-icon","","suiIconType","smile"],["sui-segment","","suiBasic",""],["sui-header",""],["type","paragraph"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.show("left","overlay")}),e(2,"Overlay"),t(),i(3,"button",1),S("click",function(){return s.show("left","push")}),e(4,"Push"),t(),i(5,"button",1),S("click",function(){return s.show("left","scale down")}),e(6,"Scale Down"),t(),i(7,"button",1),S("click",function(){return s.show("left","uncover")}),e(8,"Uncover"),t(),i(9,"button",1),S("click",function(){return s.show("left","slide along")}),e(10,"Slide Along"),t(),i(11,"button",1),S("click",function(){return s.show("left","slide out")}),e(12,"Slide Out"),t()(),r(13,"div",2),i(14,"sui-sidebar-container",3)(15,"div",4),D("visibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),i(16,"a",5),r(17,"i",6),e(18," Home"),t(),i(19,"a",5),r(20,"i",7),e(21," Topics"),t(),i(22,"a",5),r(23,"i",8),e(24," Friends"),t()(),i(25,"sui-sidebar-pusher")(26,"div",9)(27,"h3",10),e(28,"Application Content"),t(),r(29,"doc-wireframe",11)(30,"doc-wireframe",11),t()()()),a&2&&(l(15),d("suiSidebarAnimation",s.animation),w("visible",s.visible))},dependencies:[Z,y,C,U,E,Ie,B,nt,ot,at,ze,je],encapsulation:2})}}return n})(),ud=(()=>{class n extends Qe{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sidebar-page-example"]],standalone:!1,features:[v],decls:9,vars:1,consts:[["sui-sidebar","","sui-menu","","suiVertical","","suiInverted","",3,"visibleChange","visible"],["suiMenuItem",""],["sui-button","",3,"click"]],template:function(a,s){a&1&&(i(0,"sui-sidebar-container")(1,"div",0),D("visibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),i(2,"a",1),e(3,"Item 1"),t(),i(4,"a",1),e(5,"Item 2"),t()(),i(6,"sui-sidebar-pusher")(7,"button",2),S("click",function(){return s.visible=!s.visible}),e(8,"Toggle Sidebar"),t()()()),a&2&&(l(),w("visible",s.visible))},dependencies:[C,nt,ot,at,ze,je],encapsulation:2})}}return n})();function hf(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-sidebar-example"),t())}function ff(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-visible-example"),t())}function Sf(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-dimmed-example"),t())}function gf(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-direction-example"),t())}function vf(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-width-example"),t())}function xf(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-transitions-example"),t())}function bf(n,m){n&1&&(i(0,"div",9),r(1,"doc-sidebar-page-example"),t())}function Ef(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Sidebar"),t(),i(6,"p"),e(7,"A sidebar, usually an inverted vertical menu"),t(),i(8,"div",5),e(9," Bind "),i(10,"code"),e(11,"[(visible)]"),t(),e(12," to show and hide the sidebar. When it is two-way bound, clicking the page content hides the sidebar. "),t(),h(13,hf,2,0,"ng-template",6),t(),r(14,"br"),i(15,"h2",2),e(16,"States"),t(),i(17,"doc-code-sample",7)(18,"h3",4),e(19,"Visible"),t(),i(20,"p"),e(21,"A sidebar can be visible on the page"),t(),i(22,"div",5),e(23," A sidebar that is not two-way bound stays visible when the page is clicked. "),t(),h(24,ff,2,0,"ng-template",6),t(),i(25,"doc-code-sample",3)(26,"h3",4),e(27,"Dimmed"),t(),i(28,"p"),e(29,"A pusher can be dimmed while the sidebar is visible"),t(),h(30,Sf,2,0,"ng-template",6),t(),r(31,"br"),i(32,"h2",2),e(33,"Variations"),t(),i(34,"doc-code-sample",3)(35,"h3",4),e(36,"Direction"),t(),i(37,"p"),e(38,"A sidebar can appear on different sides of the page"),t(),i(39,"div",5),e(40," Top and bottom sidebars should be horizontal menus, so "),i(41,"code"),e(42,"suiVertical"),t(),e(43," is only set for left and right sidebars. "),t(),h(44,gf,2,0,"ng-template",6),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Width"),t(),i(48,"p"),e(49,"A sidebar can specify its width"),t(),h(50,vf,2,0,"ng-template",6),t(),i(51,"doc-code-sample",3)(52,"h3",4),e(53,"Transitions"),t(),i(54,"p"),e(55,"A sidebar can use different transitions to appear"),t(),i(56,"div",8)(57,"code"),e(58,"uncover"),t(),e(59,", "),i(60,"code"),e(61,"slide along"),t(),e(62," and "),i(63,"code"),e(64,"slide out"),t(),e(65," only support left and right sidebars. "),t(),h(66,xf,2,0,"ng-template",6),t(),r(67,"br"),i(68,"h2",2),e(69,"Usage"),t(),i(70,"doc-code-sample",3)(71,"h3",4),e(72,"Page Structure"),t(),i(73,"p"),e(74,"A sidebar requires a container with a sidebar and a pusher holding the page content"),t(),i(75,"div",5),e(76," Without "),i(77,"code"),e(78,"suiPushable"),t(),e(79," the page body is the context and the sidebar is fixed to the viewport. Add "),i(80,"code"),e(81,"suiPushable"),t(),e(82," to keep the sidebar inside the container, as in the examples above. "),t(),i(83,"div",8),e(84," A pushable container cannot have padding. "),t(),h(85,bf,2,0,"ng-template",6),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetSidebar)("componentCode",o.snippetSidebarTs),l(14),d("templateCode",o.snippetVisible),l(8),d("templateCode",o.snippetDimmed)("componentCode",o.snippetDimmedTs),l(9),d("templateCode",o.snippetDirection)("componentCode",o.snippetDirectionTs),l(11),d("templateCode",o.snippetWidth)("componentCode",o.snippetWidthTs),l(6),d("templateCode",o.snippetTransitions)("componentCode",o.snippetTransitionsTs),l(19),d("templateCode",o.snippetPage)("componentCode",o.snippetPageTs)}}function yf(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"sui-sidebar-container"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",10)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19," suiPushable "),t(),i(20,"td"),e(21," Make the container the sidebar's context instead of the page. Always applied when the pusher is dimmable "),t(),i(22,"td")(23,"div",11),e(24," boolean "),t()(),i(25,"td")(26,"div",12),e(27," false "),t()()()()(),i(28,"h2",2),e(29,"sui-sidebar"),t(),i(30,"h4",4),e(31,"Properties"),t(),i(32,"table",10)(33,"thead")(34,"tr")(35,"th"),e(36,"Property"),t(),i(37,"th"),e(38,"Description"),t(),i(39,"th"),e(40,"Type"),t(),i(41,"th"),e(42,"Default"),t()()(),i(43,"tbody")(44,"tr")(45,"td"),e(46," visible "),t(),i(47,"td"),e(48," Whether the sidebar is shown. Supports two-way binding with "),i(49,"code"),e(50,"[(visible)]"),t()(),i(51,"td")(52,"div",11),e(53," boolean "),t()(),i(54,"td")(55,"div",12),e(56," true "),t()()(),i(57,"tr")(58,"td"),e(59," suiSidebarPosition "),t(),i(60,"td"),e(61," The side of the page the sidebar appears on. Allowed values are "),i(62,"span",13),e(63,"'left'"),t(),e(64," | "),i(65,"span",13),e(66,"'right'"),t(),e(67," | "),i(68,"span",13),e(69,"'top'"),t(),e(70," | "),i(71,"span",13),e(72,"'bottom'"),t()(),i(73,"td")(74,"div",11),e(75," string "),t()(),i(76,"td")(77,"div",12),e(78," 'left' "),t()()(),i(79,"tr")(80,"td"),e(81," suiSidebarWidth "),t(),i(82,"td"),e(83," Set the width of the sidebar. Allowed values are "),i(84,"span",13),e(85,"'very thin'"),t(),e(86," | "),i(87,"span",13),e(88,"'thin'"),t(),e(89," | "),i(90,"span",13),e(91,"'wide'"),t(),e(92," | "),i(93,"span",13),e(94,"'very wide'"),t(),e(95," | "),i(96,"span",13),e(97,"null"),t()(),i(98,"td")(99,"div",11),e(100," string "),t()(),i(101,"td")(102,"div",12),e(103," null "),t()()(),i(104,"tr")(105,"td"),e(106," suiSidebarAnimation "),t(),i(107,"td"),e(108," Set the transition used to show the sidebar. Allowed values are "),i(109,"span",13),e(110,"'overlay'"),t(),e(111," | "),i(112,"span",13),e(113,"'push'"),t(),e(114," | "),i(115,"span",13),e(116,"'scale down'"),t(),e(117," | "),i(118,"span",13),e(119,"'uncover'"),t(),e(120," | "),i(121,"span",13),e(122,"'slide along'"),t(),e(123," | "),i(124,"span",13),e(125,"'slide out'"),t(),e(126," | "),i(127,"span",13),e(128,"null"),t()(),i(129,"td")(130,"div",11),e(131," string "),t()(),i(132,"td")(133,"div",12),e(134," null "),t()()(),i(135,"tr")(136,"td"),e(137," suiInverted "),t(),i(138,"td"),e(139," Invert the colours of the sidebar "),t(),i(140,"td")(141,"div",11),e(142," boolean "),t()(),i(143,"td")(144,"div",12),e(145," false "),t()()(),i(146,"tr")(147,"td"),e(148," suiClosable "),t(),i(149,"td"),e(150," Hide a two-way bound sidebar when the pusher is clicked "),t(),i(151,"td")(152,"div",11),e(153," boolean "),t()(),i(154,"td")(155,"div",12),e(156," true "),t()()()()(),i(157,"h4",4),e(158,"Events"),t(),i(159,"table",10)(160,"thead")(161,"tr")(162,"th"),e(163,"Event"),t(),i(164,"th"),e(165,"Description"),t(),i(166,"th"),e(167,"Type"),t()()(),i(168,"tbody")(169,"tr")(170,"td"),e(171," visibleChange "),t(),i(172,"td"),e(173," Emitted when the sidebar is shown or hidden "),t(),i(174,"td")(175,"div",11),e(176," EventEmitter<boolean> "),t()()()()(),i(177,"h4",4),e(178,"Methods"),t(),i(179,"table",10)(180,"thead")(181,"tr")(182,"th"),e(183,"Method"),t(),i(184,"th"),e(185,"Description"),t()()(),i(186,"tbody")(187,"tr")(188,"td"),e(189," show() "),t(),i(190,"td"),e(191," Shows the sidebar "),t()(),i(192,"tr")(193,"td"),e(194," hide() "),t(),i(195,"td"),e(196," Hides the sidebar "),t()(),i(197,"tr")(198,"td"),e(199," toggle() "),t(),i(200,"td"),e(201," Toggles the visibility of the sidebar "),t()()()(),i(202,"h2",2),e(203,"sui-sidebar-pusher"),t(),i(204,"h4",4),e(205,"Properties"),t(),i(206,"table",10)(207,"thead")(208,"tr")(209,"th"),e(210,"Property"),t(),i(211,"th"),e(212,"Description"),t(),i(213,"th"),e(214,"Type"),t(),i(215,"th"),e(216,"Default"),t()()(),i(217,"tbody")(218,"tr")(219,"td"),e(220," suiDimmable "),t(),i(221,"td"),e(222," Dim the page content while the sidebar is visible "),t(),i(223,"td")(224,"div",11),e(225," boolean "),t()(),i(226,"td")(227,"div",12),e(228," false "),t()()()()()())}var cd=(()=>{class n{constructor(o){this.snippetSidebar=Gl,this.snippetSidebarTs=Xl,this.snippetVisible=Jl,this.snippetDimmed=ql,this.snippetDimmedTs=Zl,this.snippetDirection=Kl,this.snippetDirectionTs=Ql,this.snippetWidth=ed,this.snippetWidthTs=td,this.snippetTransitions=id,this.snippetTransitionsTs=nd,this.snippetPage=od,this.snippetPageTs=ad,o.setTitle("Sidebar | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-sidebar"]],standalone:!1,decls:3,vars:2,consts:[["header","Sidebar","subHeader","A sidebar hides additional content beside a page","semanticUrl","https://semantic-ui.com/modules/sidebar.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[3,"templateCode"],["sui-message","","suiState","warning"],[1,"sidebar-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"],["sui-label",""]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Ef,86,13,"div",1)(2,yf,229,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,se,sd,rd,ld,dd,md,pd,ud],styles:["[_nghost-%COMP%]     .sidebar-demo sui-sidebar-container.ui.segment{height:22rem;margin-top:0}"]})}}return n})();var hd=`<div sui-segment
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
`;var fd=`<div sui-segment
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
`;var Sd=`<div sui-segment
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
`;var gd=`<div sui-segment
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
`;var vd=`<div class="sticky-scroll"
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
`;var At=(()=>{class n{constructor(){this.document=Y(vt),this.el=Y(bt),this.renderer=Y(Et),this.zone=Y(xt),this.cdr=Y(Re),this.suiContext=null,this.suiScrollContext="window",this.suiOffset=0,this.suiBottomOffset=0,this.suiPushing=!1,this.suiSetSize=!0,this.suiJitter=5,this.suiObserveChanges=!1,this.suiOnReposition=new X,this.suiOnScroll=new X,this.suiOnStick=new X,this.suiOnUnstick=new X,this.suiOnTop=new X,this.suiOnBottom=new X,this.cache=null,this.classUi=!0,this.classSticky=!0,this.fixed=!1,this.bound=!1,this.topState=!1,this.bottomState=!1,this.destroy$=new ci,this.elementScroll=0,this.scrollEl=window,this.contextEl=null,this.containerEl=null,this.mutationObserver=null,this.refreshTimer=null}ngOnInit(){this.scrollEl=this.resolveScrollElement();let o=this.document.defaultView;this.zone.runOutsideAngular(()=>{let a=this.scrollEl===window?o:this.scrollEl;Zt(a,"scroll",{passive:!0}).pipe(Kt(this.destroy$)).subscribe(()=>{requestAnimationFrame(()=>{let s=this.readScrollTop();this.zone.run(()=>{this.stick(s),this.suiOnScroll.emit()})})}),Zt(o,"resize",{passive:!0}).pipe(Kt(this.destroy$)).subscribe(()=>{requestAnimationFrame(()=>this.zone.run(()=>this.refresh(!1)))})})}ngAfterViewInit(){queueMicrotask(()=>this.refresh(!0))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.mutationObserver?.disconnect(),this.refreshTimer&&clearTimeout(this.refreshTimer),this.reset()}refresh(o=!1){this.resetLayout(),this.determineContainer(),this.determineContext(),this.contextEl&&(o&&this.determineContainer(),this.savePositions(),this.suiOnReposition.emit(),this.cdr.markForCheck(),this.suiObserveChanges&&typeof MutationObserver<"u"&&!this.mutationObserver&&(this.mutationObserver=new MutationObserver(()=>this.scheduleRefresh()),this.mutationObserver.observe(this.contextEl,{childList:!0,subtree:!0}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,subtree:!0})))}scheduleRefresh(){this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.refreshTimer=null,this.refresh(!1)},100)}resolveScrollElement(){return this.suiScrollContext==="window"?window:this.document.querySelector(this.suiScrollContext)||window}readScrollTop(){return this.scrollEl===window?window.scrollY:this.scrollEl.scrollTop}determineContainer(){let o=this.el.nativeElement;this.containerEl=o.offsetParent||o.parentElement}determineContext(){if(this.suiContext===null){this.contextEl=this.containerEl;return}if(typeof this.suiContext=="string"){this.contextEl=this.document.querySelector(this.suiContext);return}this.contextEl=this.suiContext}savePositions(){let o=this.el.nativeElement,a=this.contextEl,s=this.scrollEl===window?window.innerHeight:this.scrollEl.clientHeight,u=getComputedStyle(o),p=parseInt(u.marginTop,10)||0,x=parseInt(u.marginBottom,10)||0,oe=this.scrollEl===window?null:this.scrollEl,hm=oe?oe.getBoundingClientRect().top:0,di=oe?oe.scrollTop-hm:window.scrollY,fm=window.scrollX,mi=o.getBoundingClientRect(),Sm=a.getBoundingClientRect(),pi=mi.top+di,ui=Sm.top+di,gm=mi.left+fm,Lt=o.offsetHeight,qt=a.offsetHeight,vm=pi-p,xm=ui+qt;if(this.cache={fits:Lt+this.suiOffset<=s,sameHeight:Lt===qt,scrollContext:{height:s},element:{margin:{top:p,bottom:x},top:vm,left:gm,width:o.offsetWidth,height:Lt,bottom:pi+Lt},context:{top:ui,height:qt,bottom:xm}},this.setContainerSize(),!this.isCacheValid()){this.cache=null,this.resetLayout();return}this.stick(this.readScrollTop())}isCacheValid(){if(!this.cache)return!1;let o=getComputedStyle(this.el.nativeElement);return o.display==="none"||o.visibility==="hidden"?!1:this.cache.element.height<=this.cache.context.height}setContainerSize(){if(!this.cache||!this.containerEl)return;let o=this.containerEl.tagName;if(o==="HTML"||o==="BODY")return;let a=this.containerEl.offsetHeight,s=this.cache.context.height;Math.abs(a-s)>this.suiJitter&&this.renderer.setStyle(this.containerEl,"height",`${s}px`)}stick(o){let a=this.cache;if(!a||a.sameHeight)return;let s=this.bottomState&&this.suiPushing?this.suiBottomOffset:this.suiOffset,u={top:o+s,bottom:o+s+a.scrollContext.height},p=a.element,x=a.context,oe=a.fits?0:this.computeElementScroll(o);this.isInitialPosition()?u.top>=x.bottom?this.bindBottom():u.top>p.top&&(p.height+u.top-oe>=x.bottom?this.bindBottom():this.fixTop()):this.fixed?this.topState?u.top<=p.top?this.setInitialPosition():p.height+u.top-oe>=x.bottom?this.bindBottom():a.fits||(this.applyElementScroll(oe),this.lastScroll=u.top):this.bottomState&&(u.bottom-p.height<=p.top?this.setInitialPosition():u.bottom>=x.bottom?this.bindBottom():a.fits||(this.applyElementScroll(oe),this.lastScroll=u.top)):this.bound&&this.bottomState&&(u.top<=p.top?this.setInitialPosition():this.suiPushing?this.bound&&u.bottom<=x.bottom&&this.fixBottom():this.bound&&u.top<=x.bottom-p.height&&this.fixTop()),this.lastScroll=o,this.cdr.markForCheck()}isInitialPosition(){return!this.fixed&&!this.bound}computeElementScroll(o){let a=this.cache,s=this.lastScroll===void 0?0:o-this.lastScroll,u=a.element.height-a.scrollContext.height+this.suiOffset,p=this.elementScroll;this.topState?p=Math.abs(parseInt(this.el.nativeElement.style.top||"0",10))||0:this.bottomState&&(p=Math.abs(parseInt(this.el.nativeElement.style.bottom||"0",10))||0);let x=p+s;return a.fits||x<0?0:x>u?u:x}applyElementScroll(o){this.elementScroll=o,this.topState&&(this.renderer.setStyle(this.el.nativeElement,"bottom",""),this.renderer.setStyle(this.el.nativeElement,"top",`${-o}px`)),this.bottomState&&(this.renderer.setStyle(this.el.nativeElement,"top",""),this.renderer.setStyle(this.el.nativeElement,"bottom",`${o}px`))}bindBottom(){this.unfix(),this.unbind(),this.clearPositionStyles(),this.renderer.removeStyle(this.el.nativeElement,"margin-top"),this.fixed=!1,this.bound=!0,this.topState=!1,this.bottomState=!0,this.suiOnBottom.emit(),this.suiOnUnstick.emit()}fixTop(){this.unfix(),this.unbind();let o=this.cache;this.suiSetSize&&(this.renderer.setStyle(this.el.nativeElement,"width",`${o.element.width}px`,2),this.renderer.setStyle(this.el.nativeElement,"height",`${o.element.height}px`,2)),this.containerEl&&this.renderer.setStyle(this.containerEl,"min-height",`${o.element.height}px`),this.renderer.setStyle(this.el.nativeElement,"margin-top",`${this.suiOffset}px`),this.renderer.setStyle(this.el.nativeElement,"left",`${o.element.left}px`),this.renderer.setStyle(this.el.nativeElement,"bottom",""),this.renderer.setStyle(this.el.nativeElement,"margin-bottom",""),this.scrollEl!==window&&this.renderer.setStyle(this.el.nativeElement,"top",`${this.scrollEl.getBoundingClientRect().top}px`),this.fixed=!0,this.bound=!1,this.topState=!0,this.bottomState=!1,this.suiOnStick.emit()}fixBottom(){this.unfix(),this.unbind();let o=this.cache;if(this.suiSetSize&&(this.renderer.setStyle(this.el.nativeElement,"width",`${o.element.width}px`,2),this.renderer.setStyle(this.el.nativeElement,"height",`${o.element.height}px`,2)),this.containerEl&&this.renderer.setStyle(this.containerEl,"min-height",`${o.element.height}px`),this.renderer.setStyle(this.el.nativeElement,"margin-top",`${this.suiOffset}px`),this.renderer.setStyle(this.el.nativeElement,"left",`${o.element.left}px`),this.scrollEl!==window){let a=window.innerHeight-this.scrollEl.getBoundingClientRect().bottom;this.renderer.setStyle(this.el.nativeElement,"bottom",`${a}px`)}this.fixed=!0,this.bound=!1,this.topState=!1,this.bottomState=!0,this.suiOnStick.emit()}setInitialPosition(){let o=this.fixed||this.bound;this.unfix(),this.unbind(),this.lastScroll=void 0,this.elementScroll=0,o&&(this.suiOnTop.emit(),this.suiOnUnstick.emit())}unbind(){this.bound&&(this.bound=!1,this.topState=!1,this.bottomState=!1)}unfix(){this.fixed&&(this.containerEl&&this.renderer.removeStyle(this.containerEl,"min-height"),this.renderer.removeStyle(this.el.nativeElement,"margin-top"),this.renderer.removeStyle(this.el.nativeElement,"left"),this.renderer.removeStyle(this.el.nativeElement,"width"),this.renderer.removeStyle(this.el.nativeElement,"height"),this.renderer.removeStyle(this.el.nativeElement,"top"),this.renderer.removeStyle(this.el.nativeElement,"bottom"),this.fixed=!1,this.topState=!1,this.bottomState=!1)}clearPositionStyles(){this.renderer.removeStyle(this.el.nativeElement,"left"),this.renderer.removeStyle(this.el.nativeElement,"top"),this.renderer.removeStyle(this.el.nativeElement,"bottom"),this.renderer.removeStyle(this.el.nativeElement,"margin-bottom")}resetLayout(){this.unfix(),this.unbind(),this.clearPositionStyles(),this.renderer.removeStyle(this.el.nativeElement,"margin-top"),this.containerEl&&(this.renderer.removeStyle(this.containerEl,"height"),this.renderer.removeStyle(this.containerEl,"min-height")),this.renderer.removeStyle(this.el.nativeElement,"width"),this.renderer.removeStyle(this.el.nativeElement,"height"),this.fixed=!1,this.bound=!1,this.topState=!1,this.bottomState=!1}reset(){this.resetLayout(),this.cache=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=yt({type:n,selectors:[["","suiSticky",""]],hostVars:12,hostBindings:function(a,s){a&2&&De("ui",s.classUi)("sticky",s.classSticky)("fixed",s.fixed)("bound",s.bound)("top",s.topState)("bottom",s.bottomState)},inputs:{suiContext:"suiContext",suiScrollContext:"suiScrollContext",suiOffset:"suiOffset",suiBottomOffset:"suiBottomOffset",suiPushing:"suiPushing",suiSetSize:"suiSetSize",suiJitter:"suiJitter",suiObserveChanges:"suiObserveChanges"},outputs:{suiOnReposition:"suiOnReposition",suiOnScroll:"suiOnScroll",suiOnStick:"suiOnStick",suiOnUnstick:"suiOnUnstick",suiOnTop:"suiOnTop",suiOnBottom:"suiOnBottom"},exportAs:["suiSticky"]})}}return F([A()],n.prototype,"suiPushing",void 0),F([A()],n.prototype,"suiSetSize",void 0),F([A()],n.prototype,"suiObserveChanges",void 0),n})(),xd=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[ie]})}}return n})();var gt=class{constructor(){this.stuck=!1}},bd=(()=>{class n extends gt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sticky-sticky-example"]],standalone:!1,features:[v],decls:16,vars:1,consts:[["context",""],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","",3,"suiContext"],["sui-header",""],["type","image"]],template:function(a,s){if(a&1&&(i(0,"div",1,0)(2,"div",2),r(3,"doc-wireframe",3)(4,"doc-wireframe",3)(5,"doc-wireframe",3)(6,"doc-wireframe",3)(7,"doc-wireframe",3)(8,"doc-wireframe",3)(9,"doc-wireframe",3)(10,"doc-wireframe",3),t(),i(11,"div",4)(12,"div",5)(13,"h3",6),e(14,"Stuck Content"),t(),r(15,"doc-wireframe",7),t()()()),a&2){let u=V(1);l(12),d("suiContext",u)}},dependencies:[Z,y,B,At,_t],encapsulation:2})}}return n})(),Ed=(()=>{class n extends gt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sticky-pushing-example"]],standalone:!1,features:[v],decls:16,vars:1,consts:[["context",""],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","","suiPushing","",3,"suiContext"],["sui-header",""],["type","image"]],template:function(a,s){if(a&1&&(i(0,"div",1,0)(2,"div",2),r(3,"doc-wireframe",3)(4,"doc-wireframe",3)(5,"doc-wireframe",3)(6,"doc-wireframe",3)(7,"doc-wireframe",3)(8,"doc-wireframe",3)(9,"doc-wireframe",3)(10,"doc-wireframe",3),t(),i(11,"div",4)(12,"div",5)(13,"h3",6),e(14,"Stuck Content"),t(),r(15,"doc-wireframe",7),t()()()),a&2){let u=V(1);l(12),d("suiContext",u)}},dependencies:[Z,y,B,At,_t],encapsulation:2})}}return n})(),yd=(()=>{class n extends gt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sticky-offset-example"]],standalone:!1,features:[v],decls:16,vars:2,consts:[["context",""],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","",3,"suiContext","suiOffset"],["sui-header",""],["type","image"]],template:function(a,s){if(a&1&&(i(0,"div",1,0)(2,"div",2),r(3,"doc-wireframe",3)(4,"doc-wireframe",3)(5,"doc-wireframe",3)(6,"doc-wireframe",3)(7,"doc-wireframe",3)(8,"doc-wireframe",3)(9,"doc-wireframe",3)(10,"doc-wireframe",3),t(),i(11,"div",4)(12,"div",5)(13,"h3",6),e(14,"Stuck Content"),t(),r(15,"doc-wireframe",7),t()()()),a&2){let u=V(1);l(12),d("suiContext",u)("suiOffset",50)}},dependencies:[Z,y,B,At,_t],encapsulation:2})}}return n})(),Cd=(()=>{class n extends gt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sticky-events-example"]],standalone:!1,features:[v],decls:15,vars:2,consts:[["context",""],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","",3,"suiOnStick","suiOnUnstick","suiContext"],["sui-header",""]],template:function(a,s){if(a&1&&(i(0,"div",1,0)(2,"div",2),r(3,"doc-wireframe",3)(4,"doc-wireframe",3)(5,"doc-wireframe",3)(6,"doc-wireframe",3)(7,"doc-wireframe",3)(8,"doc-wireframe",3)(9,"doc-wireframe",3)(10,"doc-wireframe",3),t(),i(11,"div",4)(12,"div",5),S("suiOnStick",function(){return s.stuck=!0})("suiOnUnstick",function(){return s.stuck=!1}),i(13,"h3",6),e(14),t()()()()),a&2){let u=V(1);l(12),d("suiContext",u),l(2),Ue(s.stuck?"Stuck":"Not stuck")}},dependencies:[Z,y,B,At,_t],encapsulation:2})}}return n})(),wd=(()=>{class n extends gt{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-sticky-scroll-context-example"]],standalone:!1,features:[v],decls:16,vars:1,consts:[["context",""],["id","sticky-scroll-example",1,"sticky-scroll"],["sui-segment",""],[1,"sticky-content"],["type","paragraph"],["sui-rail","","suiLocation","right","suiInternal",""],["sui-segment","","suiSticky","","suiScrollContext","#sticky-scroll-example",3,"suiContext"],["sui-header",""]],template:function(a,s){if(a&1&&(i(0,"div",1)(1,"div",2,0)(3,"div",3),r(4,"doc-wireframe",4)(5,"doc-wireframe",4)(6,"doc-wireframe",4)(7,"doc-wireframe",4)(8,"doc-wireframe",4)(9,"doc-wireframe",4)(10,"doc-wireframe",4)(11,"doc-wireframe",4),t(),i(12,"div",5)(13,"div",6)(14,"h3",7),e(15,"Stuck Content"),t()()()()()),a&2){let u=V(2);l(13),d("suiContext",u)}},dependencies:[Z,y,B,At,_t],encapsulation:2})}}return n})();function kf(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-sticky-example"),t())}function Pf(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-pushing-example"),t())}function Ff(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-offset-example"),t())}function Af(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-events-example"),t())}function Vf(n,m){n&1&&(i(0,"div",7),r(1,"doc-sticky-scroll-context-example"),t())}function Bf(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Types"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Sticky"),t(),i(6,"p"),e(7,"Sticky content stays fixed to the viewport while its context is visible"),t(),i(8,"div",5),e(9," Scroll the page to see the content stick. A sticky is usually placed in a "),i(10,"code"),e(11,"rail"),t(),e(12,", and its "),i(13,"code"),e(14,"suiContext"),t(),e(15," is the element whose bounds it stays within. "),t(),h(16,kf,2,0,"ng-template",6),t(),r(17,"br"),i(18,"h2",2),e(19,"Variations"),t(),i(20,"doc-code-sample",3)(21,"h3",4),e(22,"Pushing"),t(),i(23,"p"),e(24,"Sticky content can push the page up when you scroll back, instead of returning to its original position straight away"),t(),h(25,Pf,2,0,"ng-template",6),t(),i(26,"doc-code-sample",3)(27,"h3",4),e(28,"Offset"),t(),i(29,"p"),e(30,"Sticky content can be offset from the top of the viewport, for example to sit below a fixed menu"),t(),h(31,Ff,2,0,"ng-template",6),t(),i(32,"doc-code-sample",3)(33,"h3",4),e(34,"Events"),t(),i(35,"p"),e(36,"A sticky element reports when it sticks and unsticks"),t(),h(37,Af,2,0,"ng-template",6),t(),i(38,"doc-code-sample",3)(39,"h3",4),e(40,"Scroll Context"),t(),i(41,"p"),e(42,"A sticky can stick inside a scrolling element instead of the page"),t(),i(43,"div",5)(44,"code"),e(45,"suiScrollContext"),t(),e(46," takes a CSS selector for the scrolling element. "),t(),h(47,Vf,2,0,"ng-template",6),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetSticky),l(17),d("templateCode",o.snippetPushing),l(6),d("templateCode",o.snippetOffset),l(6),d("templateCode",o.snippetEvents),l(6),d("templateCode",o.snippetScrollContext)}}function Of(n,m){n&1&&(i(0,"div")(1,"h2",2),e(2,"suiSticky"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",8)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19," suiContext "),t(),i(20,"td"),e(21," The element (or CSS selector) the sticky stays within. Defaults to the sticky's offset parent "),t(),i(22,"td")(23,"div",9),e(24," string | HTMLElement "),t()(),i(25,"td")(26,"div",10),e(27," null "),t()()(),i(28,"tr")(29,"td"),e(30," suiScrollContext "),t(),i(31,"td"),e(32," The scrolling element, as a CSS selector, or "),i(33,"code"),e(34,"'window'"),t()(),i(35,"td")(36,"div",9),e(37," string "),t()(),i(38,"td")(39,"div",10),e(40," 'window' "),t()()(),i(41,"tr")(42,"td"),e(43," suiOffset "),t(),i(44,"td"),e(45," Pixels between the sticky and the top of the scroll context when stuck "),t(),i(46,"td")(47,"div",9),e(48," number "),t()(),i(49,"td")(50,"div",10),e(51," 0 "),t()()(),i(52,"tr")(53,"td"),e(54," suiBottomOffset "),t(),i(55,"td"),e(56," Pixels between the sticky and the bottom of the scroll context when pushing "),t(),i(57,"td")(58,"div",9),e(59," number "),t()(),i(60,"td")(61,"div",10),e(62," 0 "),t()()(),i(63,"tr")(64,"td"),e(65," suiPushing "),t(),i(66,"td"),e(67," Push the page up when scrolling back instead of returning to its position "),t(),i(68,"td")(69,"div",9),e(70," boolean "),t()(),i(71,"td")(72,"div",10),e(73," false "),t()()(),i(74,"tr")(75,"td"),e(76," suiSetSize "),t(),i(77,"td"),e(78," Keep the sticky's width and height when it becomes fixed "),t(),i(79,"td")(80,"div",9),e(81," boolean "),t()(),i(82,"td")(83,"div",10),e(84," true "),t()()(),i(85,"tr")(86,"td"),e(87," suiJitter "),t(),i(88,"td"),e(89," Pixel tolerance before the container height is corrected "),t(),i(90,"td")(91,"div",9),e(92," number "),t()(),i(93,"td")(94,"div",10),e(95," 5 "),t()()(),i(96,"tr")(97,"td"),e(98," suiObserveChanges "),t(),i(99,"td"),e(100," Recalculate positions when the content of the sticky or its context changes "),t(),i(101,"td")(102,"div",9),e(103," boolean "),t()(),i(104,"td")(105,"div",10),e(106," false "),t()()()()(),i(107,"h4",4),e(108,"Events"),t(),i(109,"table",8)(110,"thead")(111,"tr")(112,"th"),e(113,"Event"),t(),i(114,"th"),e(115,"Description"),t(),i(116,"th"),e(117,"Type"),t()()(),i(118,"tbody")(119,"tr")(120,"td"),e(121," suiOnStick "),t(),i(122,"td"),e(123," Emitted when the element becomes fixed to the viewport "),t(),i(124,"td")(125,"div",9),e(126," EventEmitter<void> "),t()()(),i(127,"tr")(128,"td"),e(129," suiOnUnstick "),t(),i(130,"td"),e(131," Emitted when the element is no longer fixed "),t(),i(132,"td")(133,"div",9),e(134," EventEmitter<void> "),t()()(),i(135,"tr")(136,"td"),e(137," suiOnTop "),t(),i(138,"td"),e(139," Emitted when the element returns to the top of its context "),t(),i(140,"td")(141,"div",9),e(142," EventEmitter<void> "),t()()(),i(143,"tr")(144,"td"),e(145," suiOnBottom "),t(),i(146,"td"),e(147," Emitted when the element is bound to the bottom of its context "),t(),i(148,"td")(149,"div",9),e(150," EventEmitter<void> "),t()()(),i(151,"tr")(152,"td"),e(153," suiOnScroll "),t(),i(154,"td"),e(155," Emitted on every scroll of the scroll context "),t(),i(156,"td")(157,"div",9),e(158," EventEmitter<void> "),t()()(),i(159,"tr")(160,"td"),e(161," suiOnReposition "),t(),i(162,"td"),e(163," Emitted when positions are recalculated "),t(),i(164,"td")(165,"div",9),e(166," EventEmitter<void> "),t()()()()(),i(167,"h4",4),e(168,"Methods"),t(),i(169,"table",8)(170,"thead")(171,"tr")(172,"th"),e(173,"Method"),t(),i(174,"th"),e(175,"Description"),t()()(),i(176,"tbody")(177,"tr")(178,"td"),e(179," refresh(hard?) "),t(),i(180,"td"),e(181," Recalculates the sticky positions, e.g. after the page layout changes "),t()()()()())}var _d=(()=>{class n{constructor(o){this.snippetSticky=hd,this.snippetPushing=fd,this.snippetOffset=Sd,this.snippetEvents=gd,this.snippetScrollContext=vd,o.setTitle("Sticky | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-sticky"]],standalone:!1,decls:3,vars:2,consts:[["header","Sticky","subHeader","Sticky content stays fixed to the browser viewport while another column of content is visible on the page","semanticUrl","https://semantic-ui.com/modules/sticky.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[1,"sticky-demo"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,Bf,48,5,"div",1)(2,Of,182,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,se,bd,Ed,yd,Cd,wd],styles:["[_nghost-%COMP%]     .sticky-demo .sticky-content{width:60%}[_nghost-%COMP%]     .sticky-demo .sticky-scroll{height:22rem;overflow-y:auto}"]})}}return n})();var Dd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('scale')">Scale</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Td=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('zoom')">Zoom</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Md=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('fade')">Fade</button>
  <button sui-button (click)="run('fade up')">Fade Up</button>
  <button sui-button (click)="run('fade down')">Fade Down</button>
  <button sui-button (click)="run('fade left')">Fade Left</button>
  <button sui-button (click)="run('fade right')">Fade Right</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Id=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('horizontal flip')">Horizontal Flip</button>
  <button sui-button (click)="run('vertical flip')">Vertical Flip</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var kd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('drop')">Drop</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Pd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('fly left')">Fly Left</button>
  <button sui-button (click)="run('fly right')">Fly Right</button>
  <button sui-button (click)="run('fly up')">Fly Up</button>
  <button sui-button (click)="run('fly down')">Fly Down</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Fd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('swing left')">Swing Left</button>
  <button sui-button (click)="run('swing right')">Swing Right</button>
  <button sui-button (click)="run('swing up')">Swing Up</button>
  <button sui-button (click)="run('swing down')">Swing Down</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Ad=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('browse')">Browse</button>
  <button sui-button (click)="run('browse right')">Browse Right</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Vd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('slide down')">Slide Down</button>
  <button sui-button (click)="run('slide up')">Slide Up</button>
  <button sui-button (click)="run('slide left')">Slide Left</button>
  <button sui-button (click)="run('slide right')">Slide Right</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Bd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="play('jiggle')">Jiggle</button>
  <button sui-button (click)="play('flash')">Flash</button>
  <button sui-button (click)="play('shake')">Shake</button>
  <button sui-button (click)="play('pulse')">Pulse</button>
  <button sui-button (click)="play('tada')">Tada</button>
  <button sui-button (click)="play('bounce')">Bounce</button>
  <button sui-button (click)="play('glow')">Glow</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [suiPlay]="playCount">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Od=`animation = 'pulse';
playCount = 0;

play(animation: string): void {
  this.animation = animation;
  // incrementing suiPlay replays the current static animation
  this.playCount++;
}
`;var Ld=`<button sui-button
        (click)="visible = !visible">
  {{ visible ? 'Hide' : 'Show' }}
</button>
<div class="transition-stage">
  <sui-transition
      suiAnimation="scale"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Hd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="run('horizontal flip in')">Horizontal Flip In</button>
  <button sui-button (click)="run('vertical flip out')">Vertical Flip Out</button>
</div>
<div class="transition-stage">
  <sui-transition
      [suiAnimation]="animation"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Wd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="duration = 200; visible = !visible">200ms</button>
  <button sui-button (click)="duration = '1s'; visible = !visible">1s</button>
  <button sui-button (click)="duration = '3s'; visible = !visible">3s</button>
</div>
<div class="transition-stage">
  <sui-transition
      suiAnimation="fade up"
      [suiDuration]="duration"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var Rd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="leaf.show()">Show</button>
  <button sui-button (click)="leaf.hide()">Hide</button>
  <button sui-button (click)="leaf.toggle()">Toggle</button>
  <button sui-button (click)="leaf.stop()">Stop</button>
</div>
<div class="transition-stage">
  <sui-transition
      #leaf="suiTransition"
      suiAnimation="swing down"
      suiDuration="2s"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var zd=`<button sui-button
        (click)="visible = !visible">
  Toggle
</button>
<div class="transition-stage">
  <sui-transition
      suiAnimation="drop"
      [(suiVisible)]="visible"
      (suiAnimationStart)="log('Animation started')"
      (suiAnimationComplete)="log('Animation complete')"
      (suiOnShow)="log('Shown')"
      (suiOnHide)="log('Hidden')">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
<div sui-segment>
  @for (entry of events; track $index) {
    <div>{{ entry }}</div>
  } @empty {
    <em>No events yet</em>
  }
</div>
`;var jd=`visible = true;
events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 6);
}
`;var Nd=`<div sui-buttons
     suiSize="small">
  <button sui-button (click)="visible = !visible">Toggle</button>
  <button sui-button
          [suiActive]="disabled"
          suiToggle
          (click)="disabled = !disabled">
    {{ disabled ? 'Animations disabled' : 'Animations enabled' }}
  </button>
</div>
<div class="transition-stage">
  <sui-transition
      suiAnimation="fly left"
      [suiDisabled]="disabled"
      [(suiVisible)]="visible">
    <img sui-image
         suiSize="small"
         src="assets/images/wireframes/image.png">
  </sui-transition>
</div>
`;var ri=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275prov=Qt({token:n,factory:()=>Y(tS),providedIn:"root"})}return n})(),oi=class{},tS=(()=>{class n extends ri{animationModuleType=Y(vi,{optional:!0});_nextAnimationId=0;_renderer;constructor(o,a){super();let s={id:"0",encapsulation:xi.None,styles:[],data:{animation:[]}};if(this._renderer=o.createRenderer(a.body,s),this.animationModuleType===null&&!nS(this._renderer))throw new hi(3600,!1)}build(o){let a=this._nextAnimationId;this._nextAnimationId++;let s=Array.isArray(o)?Wi(o):o;return Ud(this._renderer,null,a,"register",[s]),new ai(a,this._renderer)}static \u0275fac=function(a){return new(a||n)(ei(yi),ei(vt))};static \u0275prov=Qt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ai=class extends oi{_id;_renderer;constructor(m,o){super(),this._id=m,this._renderer=o}create(m,o){return new si(this._id,m,o||{},this._renderer)}},si=class{id;element;_renderer;parentPlayer=null;_started=!1;constructor(m,o,a,s){this.id=m,this.element=o,this._renderer=s,this._command("create",a)}_listen(m,o){return this._renderer.listen(this.element,`@@${this.id}:${m}`,o)}_command(m,...o){Ud(this._renderer,this.element,this.id,m,o)}onDone(m){this._listen("done",m)}onStart(m){this._listen("start",m)}onDestroy(m){this._listen("destroy",m)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(m){this._command("setPosition",m)}getPosition(){return iS(this._renderer)?.engine?.players[this.id]?.getPosition()??0}totalTime=0};function Ud(n,m,o,a,s){n.setProperty(m,`@@${o}:${a}`,s)}function iS(n){let m=n.\u0275type;return m===0?n:m===1?n.animationRenderer:null}function nS(n){let m=n.\u0275type;return m===0||m===1}var oS=["*"];function $d(n){if(typeof n=="number")return Number.isFinite(n)?`${n}ms`:"500ms";let m=String(n).trim();return m?/^\d+(\.\d+)?(ms|s)$/i.test(m)?m:/^\d+(\.\d+)?$/.test(m)?`${m}ms`:m:"500ms"}function li(n){let m=n.trim().toLowerCase().replace(/\s+/g," "),o=null,a=m;return a.endsWith(" in")?(o="in",a=a.slice(0,-3).trim()):a.endsWith(" out")&&(o="out",a=a.slice(0,-4).trim()),{baseName:a,explicitDirection:o}}function aS(n,m,o){return n==="in"||n==="out"?n:m==="in"?"in":m==="out"?"out":o?"in":"out"}var sS=new Set(["jiggle","flash","shake","pulse","tada","bounce","glow"]);function Jt(n){return sS.has(n)}var M="cubic-bezier(0.4, 0, 0.2, 1)",Gd={scale:{enter:n=>[f({opacity:0,transform:"scale(0)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"scale(1)"}))],leave:n=>[f({opacity:1,transform:"scale(1)",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"scale(0)"}))]},zoom:{enter:n=>[f({opacity:0,transform:"scale(0.35)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"scale(1)"}))],leave:n=>[f({opacity:1,transform:"scale(1)",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"scale(0.35)"}))]},fade:{enter:n=>[f({opacity:0,offset:0}),T(`${n} ${M}`,f({opacity:1}))],leave:n=>[f({opacity:1,offset:0}),T(`${n} ${M}`,f({opacity:0}))]},"fade up":{enter:n=>[f({opacity:0,transform:"translateY(0.75rem)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateY(0.75rem)"}))]},"fade down":{enter:n=>[f({opacity:0,transform:"translateY(-0.75rem)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateY(-0.75rem)"}))]},"fade left":{enter:n=>[f({opacity:0,transform:"translateX(0.75rem)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateX(0.75rem)"}))]},"fade right":{enter:n=>[f({opacity:0,transform:"translateX(-0.75rem)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateX(-0.75rem)"}))]},"horizontal flip":{enter:n=>[f({opacity:0,transform:"perspective(600px) rotateY(-90deg)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"perspective(600px) rotateY(0deg)"}))],leave:n=>[f({opacity:1,transform:"perspective(600px) rotateY(0deg)",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"perspective(600px) rotateY(90deg)"}))]},"vertical flip":{enter:n=>[f({opacity:0,transform:"perspective(600px) rotateX(-90deg)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"perspective(600px) rotateX(0deg)"}))],leave:n=>[f({opacity:1,transform:"perspective(600px) rotateX(0deg)",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"perspective(600px) rotateX(90deg)"}))]},drop:{enter:n=>[f({opacity:0,transform:"translateY(-120%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateY(-120%)"}))]},"fly left":{enter:n=>[f({opacity:0,transform:"translateX(120%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateX(-120%)"}))]},"fly right":{enter:n=>[f({opacity:0,transform:"translateX(-120%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateX(120%)"}))]},"fly up":{enter:n=>[f({opacity:0,transform:"translateY(120%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateY(-120%)"}))]},"fly down":{enter:n=>[f({opacity:0,transform:"translateY(-120%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateY(120%)"}))]},"swing left":{enter:n=>[f({opacity:0,transform:"rotate(-12deg)",transformOrigin:"top center",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"rotate(12deg)",transformOrigin:"top center"}))]},"swing right":{enter:n=>[f({opacity:0,transform:"rotate(12deg)",transformOrigin:"top center",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"rotate(-12deg)",transformOrigin:"top center"}))]},"swing up":{enter:n=>[f({opacity:0,transform:"rotate(-10deg)",transformOrigin:"bottom center",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"rotate(10deg)",transformOrigin:"bottom center"}))]},"swing down":{enter:n=>[f({opacity:0,transform:"rotate(10deg)",transformOrigin:"top center",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"rotate(-10deg)",transformOrigin:"top center"}))]},browse:{enter:n=>[f({opacity:0,transform:"translateX(-1rem) skewX(-6deg)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateX(1rem) skewX(6deg)"}))]},"browse right":{enter:n=>[f({opacity:0,transform:"translateX(1rem) skewX(6deg)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateX(-1rem) skewX(-6deg)"}))]},"slide down":{enter:n=>[f({opacity:0,transform:"translateY(-100%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateY(-100%)"}))]},"slide up":{enter:n=>[f({opacity:0,transform:"translateY(100%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateY(100%)"}))]},"slide left":{enter:n=>[f({opacity:0,transform:"translateX(100%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateX(-100%)"}))]},"slide right":{enter:n=>[f({opacity:0,transform:"translateX(-100%)",offset:0}),T(`${n} ${M}`,f({opacity:1,transform:"none"}))],leave:n=>[f({opacity:1,transform:"none",offset:0}),T(`${n} ${M}`,f({opacity:0,transform:"translateX(100%)"}))]}},Yd=Gd.fade;function Xd(n){return Jt(n)?Yd:Gd[n]??Yd}function rS(n,m){return Xd(n).enter(m)}function lS(n,m){return Xd(n).leave(m)}function dS(n,m){if(!Jt(n))return null;switch(n){case"pulse":return[f({transform:"scale(1)",offset:0}),T(`${m} ${M}`,Ye([f({transform:"scale(1)",offset:0}),f({transform:"scale(1.06)",offset:.5}),f({transform:"scale(1)",offset:1})]))];case"shake":return[T(`${m} ${M}`,Ye([f({transform:"translateX(0)",offset:0}),f({transform:"translateX(-0.5rem)",offset:.2}),f({transform:"translateX(0.5rem)",offset:.4}),f({transform:"translateX(-0.35rem)",offset:.6}),f({transform:"translateX(0.35rem)",offset:.8}),f({transform:"translateX(0)",offset:1})]))];case"jiggle":return[T(`${m} ${M}`,Ye([f({transform:"rotate(0deg)",offset:0}),f({transform:"rotate(-2.5deg)",offset:.25}),f({transform:"rotate(2.5deg)",offset:.5}),f({transform:"rotate(-1.5deg)",offset:.75}),f({transform:"rotate(0deg)",offset:1})]))];case"flash":return[T(`${m} linear`,Ye([f({opacity:1,offset:0}),f({opacity:.2,offset:.5}),f({opacity:1,offset:1})]))];case"tada":return[T(`${m} ${M}`,Ye([f({transform:"scale(1) rotate(0deg)",offset:0}),f({transform:"scale(0.92) rotate(-2deg)",offset:.1}),f({transform:"scale(1.08) rotate(2deg)",offset:.3}),f({transform:"scale(1.02) rotate(-1deg)",offset:.5}),f({transform:"scale(1) rotate(0deg)",offset:1})]))];case"bounce":return[T(`${m} ${M}`,Ye([f({transform:"translateY(0)",offset:0}),f({transform:"translateY(-0.6rem)",offset:.35}),f({transform:"translateY(0)",offset:.55}),f({transform:"translateY(-0.25rem)",offset:.7}),f({transform:"translateY(0)",offset:.85}),f({transform:"translateY(0)",offset:1})]))];case"glow":return[T(`${m} ${M}`,Ye([f({boxShadow:"0 0 0 0 rgba(100, 180, 255, 0)",offset:0}),f({boxShadow:"0 0 1.25rem 0.25rem rgba(100, 180, 255, 0.45)",offset:.5}),f({boxShadow:"0 0 0 0 rgba(100, 180, 255, 0)",offset:1})]))];default:return null}}var ce=(()=>{class n{constructor(){this.builder=Y(ri),this.el=Y(bt),this.renderer=Y(Et),this.zone=Y(xt),this.cdr=Y(Re),this.suiAnimation="fade",this.suiDuration=500,this.suiDirection="auto",this.suiVisible=!0,this.suiPlay=0,this.suiDisabled=!1,this.suiVisibleChange=new X,this.suiAnimationStart=new X,this.suiAnimationComplete=new X,this.suiOnShow=new X,this.suiOnHide=new X,this.animating=!1,this.hidden=!1,this.hostClassList="",this.player=null,this.initialized=!1,this.lastVisible=!0,this.lastPlay=0}ngOnChanges(o){if(o.suiPlay&&(o.suiPlay.firstChange?this.lastPlay=this.suiPlay:this.suiPlay!==this.lastPlay&&(this.lastPlay=this.suiPlay,this.runStaticAnimation())),o.suiVisible){let a=this.suiVisible;if(!this.initialized){this.initialized=!0,this.lastVisible=a,this.applyImmediateVisibility(a),this.syncHostClasses();return}a!==this.lastVisible&&(this.lastVisible=a,this.runVisibilityTransition(a))}(o.suiAnimation||o.suiDuration||o.suiDirection||o.suiDisabled)&&this.syncHostClasses()}ngOnDestroy(){this.destroyPlayer()}show(){this.setVisible(!0)}hide(){this.setVisible(!1)}toggle(){this.setVisible(!this.suiVisible)}stop(){this.destroyPlayer(),this.animating=!1,this.syncHostClasses(),this.cdr.markForCheck()}playStatic(){this.runStaticAnimation()}setVisible(o){if(this.suiVisible!==o){if(this.suiVisible=o,this.suiVisibleChange.emit(o),!this.initialized){this.initialized=!0,this.lastVisible=o,this.applyImmediateVisibility(o),this.syncHostClasses(),this.cdr.markForCheck();return}this.lastVisible=o,this.runVisibilityTransition(o),this.cdr.markForCheck()}}runVisibilityTransition(o){if(this.suiDisabled){this.suiAnimationStart.emit(),this.applyImmediateVisibility(o),this.emitVisibilityCallbacks(o),this.cdr.markForCheck();return}let{baseName:a,explicitDirection:s}=li(this.suiAnimation),u=aS(s,this.suiDirection,o),p=Jt(a)?"fade":a,x=$d(this.suiDuration),oe=u==="in"?rS(p,x):lS(p,x);this.playSteps(oe,o)}runStaticAnimation(){let{baseName:o}=li(this.suiAnimation);if(!Jt(o)||this.suiDisabled)return;let a=dS(o,$d(this.suiDuration));a&&this.playSteps(a,!0,!0)}playSteps(o,a,s=!1){this.destroyPlayer(),this.animating=!0,a&&(this.hidden=!1),this.suiAnimationStart.emit(),this.syncHostClasses(),this.cdr.markForCheck();let p=this.builder.build(o).create(this.el.nativeElement);this.player=p,p.onDone(()=>{this.zone.run(()=>{this.player=null,this.animating=!1,a?(this.applyVisibleEndState(),this.hidden=!1):(this.applyHiddenEndState(),this.hidden=!0),this.suiAnimationComplete.emit(),s||(a?this.suiOnShow.emit():this.suiOnHide.emit()),this.syncHostClasses(),this.cdr.markForCheck()})}),p.play()}emitVisibilityCallbacks(o){this.suiAnimationComplete.emit(),o?this.suiOnShow.emit():this.suiOnHide.emit()}applyImmediateVisibility(o){this.destroyPlayer(),this.animating=!1,o?(this.applyVisibleEndState(),this.hidden=!1):(this.applyHiddenEndState(),this.hidden=!0),this.syncHostClasses()}applyVisibleEndState(){let o=this.el.nativeElement;this.renderer.setStyle(o,"opacity","1"),this.renderer.setStyle(o,"visibility","visible"),this.renderer.removeStyle(o,"transform"),this.renderer.removeStyle(o,"transform-origin"),this.renderer.removeStyle(o,"box-shadow")}applyHiddenEndState(){let o=this.el.nativeElement;this.renderer.setStyle(o,"opacity","0"),this.renderer.setStyle(o,"visibility","hidden"),this.renderer.removeStyle(o,"transform"),this.renderer.removeStyle(o,"transform-origin")}destroyPlayer(){this.player&&(this.player.destroy(),this.player=null)}syncHostClasses(){let{baseName:o}=li(this.suiAnimation),a=$.combineToClass(["transition",...o.split(" "),$.getPropClass(this.animating,"animating"),$.getPropClass(this.suiDisabled,"disabled"),$.getPropClass(!this.hidden,"visible"),$.getPropClass(this.hidden,"hidden")]);this.hostClassList=$.removeExcessWhitespace(a)}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=c({type:n,selectors:[["sui-transition"]],hostVars:2,hostBindings:function(a,s){a&2&&We(s.hostClassList)},inputs:{suiAnimation:"suiAnimation",suiDuration:"suiDuration",suiDirection:"suiDirection",suiVisible:"suiVisible",suiPlay:"suiPlay",suiDisabled:"suiDisabled"},outputs:{suiVisibleChange:"suiVisibleChange",suiAnimationStart:"suiAnimationStart",suiAnimationComplete:"suiAnimationComplete",suiOnShow:"suiOnShow",suiOnHide:"suiOnHide"},exportAs:["suiTransition"],features:[Si],ngContentSelectors:oS,decls:1,vars:0,template:function(a,s){a&1&&(we(),_e(0))},encapsulation:2,changeDetection:0})}}return F([A()],n.prototype,"suiVisible",void 0),F([A()],n.prototype,"suiDisabled",void 0),n})(),Jd=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({})}}return n})();function pS(n,m){if(n&1&&(i(0,"div"),e(1),t()),n&2){let o=m.$implicit;l(),Ue(o)}}function uS(n,m){n&1&&(i(0,"em"),e(1,"No events yet"),t())}var de=class{constructor(){this.animation="fade",this.visible=!0,this.duration=500,this.disabled=!1,this.playCount=0,this.events=[]}run(m){this.animation=m,this.visible=!this.visible}play(m){this.animation=m,this.playCount++}log(m){this.events=[m,...this.events].slice(0,6)}},qd=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-scale-example"]],standalone:!1,features:[v],decls:6,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("scale")}),e(2,"Scale"),t()(),i(3,"div",2)(4,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(5,"img",4),t()()),a&2&&(l(4),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),Zd=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-zoom-example"]],standalone:!1,features:[v],decls:6,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("zoom")}),e(2,"Zoom"),t()(),i(3,"div",2)(4,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(5,"img",4),t()()),a&2&&(l(4),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),Kd=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-fade-example"]],standalone:!1,features:[v],decls:14,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("fade")}),e(2,"Fade"),t(),i(3,"button",1),S("click",function(){return s.run("fade up")}),e(4,"Fade Up"),t(),i(5,"button",1),S("click",function(){return s.run("fade down")}),e(6,"Fade Down"),t(),i(7,"button",1),S("click",function(){return s.run("fade left")}),e(8,"Fade Left"),t(),i(9,"button",1),S("click",function(){return s.run("fade right")}),e(10,"Fade Right"),t()(),i(11,"div",2)(12,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(13,"img",4),t()()),a&2&&(l(12),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),Qd=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-flip-example"]],standalone:!1,features:[v],decls:8,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("horizontal flip")}),e(2,"Horizontal Flip"),t(),i(3,"button",1),S("click",function(){return s.run("vertical flip")}),e(4,"Vertical Flip"),t()(),i(5,"div",2)(6,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(7,"img",4),t()()),a&2&&(l(6),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),em=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-drop-example"]],standalone:!1,features:[v],decls:6,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("drop")}),e(2,"Drop"),t()(),i(3,"div",2)(4,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(5,"img",4),t()()),a&2&&(l(4),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),tm=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-fly-example"]],standalone:!1,features:[v],decls:12,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("fly left")}),e(2,"Fly Left"),t(),i(3,"button",1),S("click",function(){return s.run("fly right")}),e(4,"Fly Right"),t(),i(5,"button",1),S("click",function(){return s.run("fly up")}),e(6,"Fly Up"),t(),i(7,"button",1),S("click",function(){return s.run("fly down")}),e(8,"Fly Down"),t()(),i(9,"div",2)(10,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(11,"img",4),t()()),a&2&&(l(10),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),im=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-swing-example"]],standalone:!1,features:[v],decls:12,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("swing left")}),e(2,"Swing Left"),t(),i(3,"button",1),S("click",function(){return s.run("swing right")}),e(4,"Swing Right"),t(),i(5,"button",1),S("click",function(){return s.run("swing up")}),e(6,"Swing Up"),t(),i(7,"button",1),S("click",function(){return s.run("swing down")}),e(8,"Swing Down"),t()(),i(9,"div",2)(10,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(11,"img",4),t()()),a&2&&(l(10),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),nm=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-browse-example"]],standalone:!1,features:[v],decls:8,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("browse")}),e(2,"Browse"),t(),i(3,"button",1),S("click",function(){return s.run("browse right")}),e(4,"Browse Right"),t()(),i(5,"div",2)(6,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(7,"img",4),t()()),a&2&&(l(6),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),om=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-slide-example"]],standalone:!1,features:[v],decls:12,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("slide down")}),e(2,"Slide Down"),t(),i(3,"button",1),S("click",function(){return s.run("slide up")}),e(4,"Slide Up"),t(),i(5,"button",1),S("click",function(){return s.run("slide left")}),e(6,"Slide Left"),t(),i(7,"button",1),S("click",function(){return s.run("slide right")}),e(8,"Slide Right"),t()(),i(9,"div",2)(10,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(11,"img",4),t()()),a&2&&(l(10),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),am=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-static-example"]],standalone:!1,features:[v],decls:18,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiAnimation","suiPlay"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.play("jiggle")}),e(2,"Jiggle"),t(),i(3,"button",1),S("click",function(){return s.play("flash")}),e(4,"Flash"),t(),i(5,"button",1),S("click",function(){return s.play("shake")}),e(6,"Shake"),t(),i(7,"button",1),S("click",function(){return s.play("pulse")}),e(8,"Pulse"),t(),i(9,"button",1),S("click",function(){return s.play("tada")}),e(10,"Tada"),t(),i(11,"button",1),S("click",function(){return s.play("bounce")}),e(12,"Bounce"),t(),i(13,"button",1),S("click",function(){return s.play("glow")}),e(14,"Glow"),t()(),i(15,"div",2)(16,"sui-transition",3),r(17,"img",4),t()()),a&2&&(l(16),d("suiAnimation",s.animation)("suiPlay",s.playCount))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),sm=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-visibility-example"]],standalone:!1,features:[v],decls:5,vars:2,consts:[["sui-button","",3,"click"],[1,"transition-stage"],["suiAnimation","scale",3,"suiVisibleChange","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.visible=!s.visible}),e(1),t(),i(2,"div",1)(3,"sui-transition",2),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(4,"img",3),t()()),a&2&&(l(),Te(" ",s.visible?"Hide":"Show",`
`),l(2),w("suiVisible",s.visible))},dependencies:[C,G,ce],encapsulation:2})}}return n})(),rm=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-direction-example"]],standalone:!1,features:[v],decls:8,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],[3,"suiVisibleChange","suiAnimation","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.run("horizontal flip in")}),e(2,"Horizontal Flip In"),t(),i(3,"button",1),S("click",function(){return s.run("vertical flip out")}),e(4,"Vertical Flip Out"),t()(),i(5,"div",2)(6,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(7,"img",4),t()()),a&2&&(l(6),d("suiAnimation",s.animation),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),lm=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-duration-example"]],standalone:!1,features:[v],decls:10,vars:2,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],["suiAnimation","fade up",3,"suiVisibleChange","suiDuration","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.duration=200,s.visible=!s.visible}),e(2,"200ms"),t(),i(3,"button",1),S("click",function(){return s.duration="1s",s.visible=!s.visible}),e(4,"1s"),t(),i(5,"button",1),S("click",function(){return s.duration="3s",s.visible=!s.visible}),e(6,"3s"),t()(),i(7,"div",2)(8,"sui-transition",3),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(9,"img",4),t()()),a&2&&(l(8),d("suiDuration",s.duration),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),dm=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-methods-example"]],standalone:!1,features:[v],decls:13,vars:1,consts:[["leaf","suiTransition"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],[1,"transition-stage"],["suiAnimation","swing down","suiDuration","2s",3,"suiVisibleChange","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){if(a&1){let u=ae();i(0,"div",1)(1,"button",2),S("click",function(){I(u);let x=V(11);return k(x.show())}),e(2,"Show"),t(),i(3,"button",2),S("click",function(){I(u);let x=V(11);return k(x.hide())}),e(4,"Hide"),t(),i(5,"button",2),S("click",function(){I(u);let x=V(11);return k(x.toggle())}),e(6,"Toggle"),t(),i(7,"button",2),S("click",function(){I(u);let x=V(11);return k(x.stop())}),e(8,"Stop"),t()(),i(9,"div",3)(10,"sui-transition",4,0),D("suiVisibleChange",function(x){return I(u),_(s.visible,x)||(s.visible=x),k(x)}),r(12,"img",5),t()()}a&2&&(l(10),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})(),mm=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-events-example"]],standalone:!1,features:[v],decls:9,vars:2,consts:[["sui-button","",3,"click"],[1,"transition-stage"],["suiAnimation","drop",3,"suiVisibleChange","suiAnimationStart","suiAnimationComplete","suiOnShow","suiOnHide","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"],["sui-segment",""]],template:function(a,s){a&1&&(i(0,"button",0),S("click",function(){return s.visible=!s.visible}),e(1,` Toggle
`),t(),i(2,"div",1)(3,"sui-transition",2),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),S("suiAnimationStart",function(){return s.log("Animation started")})("suiAnimationComplete",function(){return s.log("Animation complete")})("suiOnShow",function(){return s.log("Shown")})("suiOnHide",function(){return s.log("Hidden")}),r(4,"img",3),t()(),i(5,"div",4),Le(6,pS,2,1,"div",null,Ti,!1,uS,2,0,"em"),t()),a&2&&(l(3),w("suiVisible",s.visible),l(3),He(s.events))},dependencies:[C,G,B,ce],encapsulation:2})}}return n})(),pm=(()=>{class n extends de{static{this.\u0275fac=(()=>{let o;return function(s){return(o||(o=g(n)))(s||n)}})()}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition-disabled-example"]],standalone:!1,features:[v],decls:8,vars:4,consts:[["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-button","","suiToggle","",3,"click","suiActive"],[1,"transition-stage"],["suiAnimation","fly left",3,"suiVisibleChange","suiDisabled","suiVisible"],["sui-image","","suiSize","small","src","assets/images/wireframes/image.png"]],template:function(a,s){a&1&&(i(0,"div",0)(1,"button",1),S("click",function(){return s.visible=!s.visible}),e(2,"Toggle"),t(),i(3,"button",2),S("click",function(){return s.disabled=!s.disabled}),e(4),t()(),i(5,"div",3)(6,"sui-transition",4),D("suiVisibleChange",function(p){return _(s.visible,p)||(s.visible=p),p}),r(7,"img",5),t()()),a&2&&(l(3),d("suiActive",s.disabled),l(),Te(" ",s.disabled?"Animations disabled":"Animations enabled"," "),l(2),d("suiDisabled",s.disabled),w("suiVisible",s.visible))},dependencies:[C,U,G,ce],encapsulation:2})}}return n})();function hS(n,m){n&1&&r(0,"doc-transition-scale-example")}function fS(n,m){n&1&&r(0,"doc-transition-zoom-example")}function SS(n,m){n&1&&r(0,"doc-transition-fade-example")}function gS(n,m){n&1&&r(0,"doc-transition-flip-example")}function vS(n,m){n&1&&r(0,"doc-transition-drop-example")}function xS(n,m){n&1&&r(0,"doc-transition-fly-example")}function bS(n,m){n&1&&r(0,"doc-transition-swing-example")}function ES(n,m){n&1&&r(0,"doc-transition-browse-example")}function yS(n,m){n&1&&r(0,"doc-transition-slide-example")}function CS(n,m){n&1&&r(0,"doc-transition-static-example")}function wS(n,m){n&1&&r(0,"doc-transition-visibility-example")}function _S(n,m){n&1&&r(0,"doc-transition-direction-example")}function DS(n,m){n&1&&r(0,"doc-transition-duration-example")}function TS(n,m){n&1&&r(0,"doc-transition-methods-example")}function MS(n,m){n&1&&r(0,"doc-transition-events-example")}function IS(n,m){n&1&&r(0,"doc-transition-disabled-example")}function kS(n,m){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Transitions"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Scale"),t(),i(6,"p"),e(7,"An element can scale into or out of view"),t(),h(8,hS,1,0,"ng-template",5),t(),i(9,"doc-code-sample",3)(10,"h3",4),e(11,"Zoom"),t(),i(12,"p"),e(13,"An element can zoom into view from far away"),t(),h(14,fS,1,0,"ng-template",5),t(),i(15,"doc-code-sample",3)(16,"h3",4),e(17,"Fade"),t(),i(18,"p"),e(19,"An element can fade into or out of view descending and ascending"),t(),h(20,SS,1,0,"ng-template",5),t(),i(21,"doc-code-sample",3)(22,"h3",4),e(23,"Flip"),t(),i(24,"p"),e(25,"An element can flip into or out of view vertically or horizontally"),t(),h(26,gS,1,0,"ng-template",5),t(),i(27,"doc-code-sample",3)(28,"h3",4),e(29,"Drop"),t(),i(30,"p"),e(31,"An element can drop into view from above"),t(),h(32,vS,1,0,"ng-template",5),t(),i(33,"doc-code-sample",3)(34,"h3",4),e(35,"Fly"),t(),i(36,"p"),e(37,"An element can fly in from off canvas"),t(),h(38,xS,1,0,"ng-template",5),t(),i(39,"doc-code-sample",3)(40,"h3",4),e(41,"Swing"),t(),i(42,"p"),e(43,"An element can swing into view"),t(),h(44,bS,1,0,"ng-template",5),t(),i(45,"doc-code-sample",3)(46,"h3",4),e(47,"Browse"),t(),i(48,"p"),e(49,"An element can appear and disappear as part of a series"),t(),h(50,ES,1,0,"ng-template",5),t(),i(51,"doc-code-sample",3)(52,"h3",4),e(53,"Slide"),t(),i(54,"p"),e(55,"An element can appear to slide in from above or below"),t(),h(56,yS,1,0,"ng-template",5),t(),r(57,"br"),i(58,"h2",2),e(59,"Static Animations"),t(),i(60,"doc-code-sample",6)(61,"h3",4),e(62,"Static Animations"),t(),i(63,"p"),e(64,"Jiggle, flash, shake, pulse, tada, bounce and glow draw attention to an element without changing its visibility"),t(),i(65,"div",7),e(66," Static animations run each time the value bound to "),i(67,"code"),e(68,"suiPlay"),t(),e(69," changes, so increment a counter to replay one. "),t(),h(70,CS,1,0,"ng-template",5),t(),r(71,"br"),i(72,"h2",2),e(73,"Usage"),t(),i(74,"doc-code-sample",3)(75,"h3",4),e(76,"Visibility"),t(),i(77,"p"),e(78,"After an animation finishes, the element keeps its final state. An outward transition leaves it hidden, an inward transition leaves it visible"),t(),i(79,"div",7)(80,"code"),e(81,"suiVisible"),t(),e(82," supports two-way binding with "),i(83,"code"),e(84,"[(suiVisible)]"),t(),e(85,". "),t(),h(86,wS,1,0,"ng-template",5),t(),i(87,"doc-code-sample",3)(88,"h3",4),e(89,"Specifying a Direction"),t(),i(90,"p"),e(91,"To force an animation direction, add either "),i(92,"code"),e(93,"in"),t(),e(94," or "),i(95,"code"),e(96,"out"),t(),e(97," to the animation name"),t(),i(98,"div",7),e(99," Without a suffix the direction is chosen automatically: showing an element plays the inward animation and hiding it plays the outward one. You can also force it with "),i(100,"code"),e(101,"suiDirection"),t(),e(102,". "),t(),h(103,_S,1,0,"ng-template",5),t(),i(104,"doc-code-sample",3)(105,"h3",4),e(106,"Duration"),t(),i(107,"p"),e(108,"The duration can be a number of milliseconds or a CSS time string such as "),i(109,"code"),e(110,"500ms"),t(),e(111," or "),i(112,"code"),e(113,"2s"),t()(),h(114,DS,1,0,"ng-template",5),t(),i(115,"doc-code-sample",3)(116,"h3",4),e(117,"Controlling Programmatically"),t(),i(118,"p"),e(119,"Export the component with "),i(120,"code"),e(121,'#ref="suiTransition"'),t(),e(122," to show, hide, toggle or stop it from the template or a component"),t(),h(123,TS,1,0,"ng-template",5),t(),i(124,"doc-code-sample",6)(125,"h3",4),e(126,"Callbacks"),t(),i(127,"p"),e(128,"A transition reports when an animation starts and completes, and when the element is shown or hidden"),t(),h(129,MS,1,0,"ng-template",5),t(),i(130,"doc-code-sample",3)(131,"h3",4),e(132,"Disabled"),t(),i(133,"p"),e(134,"A disabled transition changes visibility straight away without animating"),t(),h(135,IS,1,0,"ng-template",5),t()()),n&2){let o=b();l(3),d("templateCode",o.snippetScale),l(6),d("templateCode",o.snippetZoom),l(6),d("templateCode",o.snippetFade),l(6),d("templateCode",o.snippetFlip),l(6),d("templateCode",o.snippetDrop),l(6),d("templateCode",o.snippetFly),l(6),d("templateCode",o.snippetSwing),l(6),d("templateCode",o.snippetBrowse),l(6),d("templateCode",o.snippetSlide),l(9),d("templateCode",o.snippetStatic)("componentCode",o.snippetStaticTs),l(14),d("templateCode",o.snippetVisibility),l(13),d("templateCode",o.snippetDirection),l(17),d("templateCode",o.snippetDuration),l(11),d("templateCode",o.snippetMethods),l(9),d("templateCode",o.snippetEvents)("componentCode",o.snippetEventsTs),l(6),d("templateCode",o.snippetDisabled)}}function PS(n,m){n&1&&(i(0,"div")(1,"div",7)(2,"code"),e(3,"sui-transition"),t(),e(4," animates with "),i(5,"code"),e(6,"@angular/animations"),t(),e(7,", so your application must enable animations, for example by importing "),i(8,"code"),e(9,"BrowserAnimationsModule"),t(),e(10," or adding "),i(11,"code"),e(12,"provideAnimations()"),t(),e(13,". "),t(),i(14,"h2",2),e(15,"sui-transition"),t(),i(16,"h4",4),e(17,"Properties"),t(),i(18,"table",8)(19,"thead")(20,"tr")(21,"th"),e(22,"Property"),t(),i(23,"th"),e(24,"Description"),t(),i(25,"th"),e(26,"Type"),t(),i(27,"th"),e(28,"Default"),t()()(),i(29,"tbody")(30,"tr")(31,"td"),e(32," suiAnimation "),t(),i(33,"td"),e(34," The named animation, e.g. "),i(35,"code"),e(36,"fade up"),t(),e(37,", "),i(38,"code"),e(39,"horizontal flip"),t(),e(40," or "),i(41,"code"),e(42,"pulse"),t(),e(43,". Add "),i(44,"code"),e(45,"in"),t(),e(46," or "),i(47,"code"),e(48,"out"),t(),e(49," to force a direction "),t(),i(50,"td")(51,"div",9),e(52," string "),t()(),i(53,"td")(54,"div",10),e(55," 'fade' "),t()()(),i(56,"tr")(57,"td"),e(58," suiDuration "),t(),i(59,"td"),e(60," Animation duration in milliseconds, or a CSS time string "),t(),i(61,"td")(62,"div",9),e(63," number | string "),t()(),i(64,"td")(65,"div",10),e(66," 500 "),t()()(),i(67,"tr")(68,"td"),e(69," suiDirection "),t(),i(70,"td"),e(71," Whether showing and hiding pick the inward or outward animation automatically, or always use one "),t(),i(72,"td")(73,"div",9),e(74," 'auto' | 'in' | 'out' "),t()(),i(75,"td")(76,"div",10),e(77," 'auto' "),t()()(),i(78,"tr")(79,"td"),e(80," suiVisible "),t(),i(81,"td"),e(82," Whether the element is visible. Changing it runs the transition. Supports two-way binding "),t(),i(83,"td")(84,"div",9),e(85," boolean "),t()(),i(86,"td")(87,"div",10),e(88," true "),t()()(),i(89,"tr")(90,"td"),e(91," suiPlay "),t(),i(92,"td"),e(93," Change this value (for example, increment a counter) to replay the current static animation "),t(),i(94,"td")(95,"div",9),e(96," number "),t()(),i(97,"td")(98,"div",10),e(99," 0 "),t()()(),i(100,"tr")(101,"td"),e(102," suiDisabled "),t(),i(103,"td"),e(104," Turn animations off so visibility changes apply straight away "),t(),i(105,"td")(106,"div",9),e(107," boolean "),t()(),i(108,"td")(109,"div",10),e(110," false "),t()()()()(),i(111,"h4",4),e(112,"Events"),t(),i(113,"table",8)(114,"thead")(115,"tr")(116,"th"),e(117,"Event"),t(),i(118,"th"),e(119,"Description"),t(),i(120,"th"),e(121,"Type"),t()()(),i(122,"tbody")(123,"tr")(124,"td"),e(125," suiVisibleChange "),t(),i(126,"td"),e(127," Emitted when visibility is changed through a method call such as "),i(128,"code"),e(129,"show()"),t(),e(130,", "),i(131,"code"),e(132,"hide()"),t(),e(133," or "),i(134,"code"),e(135,"toggle()"),t()(),i(136,"td")(137,"div",9),e(138," EventEmitter&lt;boolean&gt; "),t()()(),i(139,"tr")(140,"td"),e(141," suiAnimationStart "),t(),i(142,"td"),e(143," Emitted when a transition or static animation begins "),t(),i(144,"td")(145,"div",9),e(146," EventEmitter&lt;void&gt; "),t()()(),i(147,"tr")(148,"td"),e(149," suiAnimationComplete "),t(),i(150,"td"),e(151," Emitted when a transition or static animation finishes "),t(),i(152,"td")(153,"div",9),e(154," EventEmitter&lt;void&gt; "),t()()(),i(155,"tr")(156,"td"),e(157," suiOnShow "),t(),i(158,"td"),e(159," Emitted after an inward transition leaves the element visible "),t(),i(160,"td")(161,"div",9),e(162," EventEmitter&lt;void&gt; "),t()()(),i(163,"tr")(164,"td"),e(165," suiOnHide "),t(),i(166,"td"),e(167," Emitted after an outward transition leaves the element hidden "),t(),i(168,"td")(169,"div",9),e(170," EventEmitter&lt;void&gt; "),t()()()()(),i(171,"h4",4),e(172,"Methods"),t(),i(173,"table",8)(174,"thead")(175,"tr")(176,"th"),e(177,"Method"),t(),i(178,"th"),e(179,"Description"),t()()(),i(180,"tbody")(181,"tr")(182,"td"),e(183," show() "),t(),i(184,"td"),e(185," Shows the element with the current animation "),t()(),i(186,"tr")(187,"td"),e(188," hide() "),t(),i(189,"td"),e(190," Hides the element with the current animation "),t()(),i(191,"tr")(192,"td"),e(193," toggle() "),t(),i(194,"td"),e(195," Toggles between hidden and visible "),t()(),i(196,"tr")(197,"td"),e(198," setVisible(visible) "),t(),i(199,"td"),e(200," Shows or hides the element "),t()(),i(201,"tr")(202,"td"),e(203," playStatic() "),t(),i(204,"td"),e(205," Runs the current animation if it is a static one; does nothing otherwise "),t()(),i(206,"tr")(207,"td"),e(208," stop() "),t(),i(209,"td"),e(210," Stops the animation that is running "),t()()()(),i(211,"h4",4),e(212,"Animations"),t(),i(213,"table",8)(214,"thead")(215,"tr")(216,"th"),e(217,"Type"),t(),i(218,"th"),e(219,"Names"),t()()(),i(220,"tbody")(221,"tr")(222,"td"),e(223," Inward / outward "),t(),i(224,"td")(225,"code"),e(226,"scale"),t(),e(227,", "),i(228,"code"),e(229,"zoom"),t(),e(230,", "),i(231,"code"),e(232,"fade"),t(),e(233,", "),i(234,"code"),e(235,"fade up"),t(),e(236,", "),i(237,"code"),e(238,"fade down"),t(),e(239,", "),i(240,"code"),e(241,"fade left"),t(),e(242,", "),i(243,"code"),e(244,"fade right"),t(),e(245,", "),i(246,"code"),e(247,"horizontal flip"),t(),e(248,", "),i(249,"code"),e(250,"vertical flip"),t(),e(251,", "),i(252,"code"),e(253,"drop"),t(),e(254,", "),i(255,"code"),e(256,"fly left"),t(),e(257,", "),i(258,"code"),e(259,"fly right"),t(),e(260,", "),i(261,"code"),e(262,"fly up"),t(),e(263,", "),i(264,"code"),e(265,"fly down"),t(),e(266,", "),i(267,"code"),e(268,"swing left"),t(),e(269,", "),i(270,"code"),e(271,"swing right"),t(),e(272,", "),i(273,"code"),e(274,"swing up"),t(),e(275,", "),i(276,"code"),e(277,"swing down"),t(),e(278,", "),i(279,"code"),e(280,"browse"),t(),e(281,", "),i(282,"code"),e(283,"browse right"),t(),e(284,", "),i(285,"code"),e(286,"slide down"),t(),e(287,", "),i(288,"code"),e(289,"slide up"),t(),e(290,", "),i(291,"code"),e(292,"slide left"),t(),e(293,", "),i(294,"code"),e(295,"slide right"),t()()(),i(296,"tr")(297,"td"),e(298," Static "),t(),i(299,"td")(300,"code"),e(301,"jiggle"),t(),e(302,", "),i(303,"code"),e(304,"flash"),t(),e(305,", "),i(306,"code"),e(307,"shake"),t(),e(308,", "),i(309,"code"),e(310,"pulse"),t(),e(311,", "),i(312,"code"),e(313,"tada"),t(),e(314,", "),i(315,"code"),e(316,"bounce"),t(),e(317,", "),i(318,"code"),e(319,"glow"),t()()()()()())}var um=(()=>{class n{constructor(o){this.snippetScale=Dd,this.snippetZoom=Td,this.snippetFade=Md,this.snippetFlip=Id,this.snippetDrop=kd,this.snippetFly=Pd,this.snippetSwing=Fd,this.snippetBrowse=Ad,this.snippetSlide=Vd,this.snippetStatic=Bd,this.snippetStaticTs=Od,this.snippetVisibility=Ld,this.snippetDirection=Hd,this.snippetDuration=Wd,this.snippetMethods=Rd,this.snippetEvents=zd,this.snippetEventsTs=jd,this.snippetDisabled=Nd,o.setTitle("Transition | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(L(H))}}static{this.\u0275cmp=c({type:n,selectors:[["doc-transition"]],standalone:!1,decls:3,vars:2,consts:[["header","Transition","subHeader","A transition is an animation usually used to move content in or out of view","semanticUrl","https://semantic-ui.com/modules/transition.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode"],["sui-header",""],["docDemo",""],[3,"templateCode","componentCode"],["sui-message","","suiState","info"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,s){a&1&&(i(0,"doc-page",0),h(1,kS,136,18,"div",1)(2,PS,320,0,"div",1),t()),a&2&&(l(),d("docPageContent","definition"),l(),d("docPageContent","api"))},dependencies:[j,R,W,z,O,N,y,se,qd,Zd,Kd,Qd,em,tm,im,nm,om,am,sm,rm,lm,dm,mm,pm],styles:["[_nghost-%COMP%]     .transition-stage{min-height:170px;padding-top:1rem}"]})}}return n})();var FS=[{path:"accordion",component:na},{path:"checkbox",component:Pa},{path:"dimmer",component:qn},{path:"dropdown",component:Al},{path:"embed",component:Tn},{path:"modal",component:Rr},{path:"popup",component:As},{path:"progress",component:us},{path:"rating",component:ro},{path:"search",component:Io},{path:"select",component:fr},{path:"shape",component:Yl},{path:"sidebar",component:cd},{path:"sticky",component:_d},{path:"tab",component:Yo},{path:"transition",component:um}],cm=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[ti.forChild(FS),ti]})}}return n})();var hD=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=te({type:n})}static{this.\u0275inj=ee({imports:[ie,tn,cm,qi,$i,nn,mn,yn,cn,Gi,to,Lo,sn,fn,pn,ji,Yi,Xi,zi,Pr,Ui,Sn,un,Ji,an,Xa,gn,Ko,hn,Rl,Ni,Ri,xd,rn,Jd]})}}return n})();export{hD as ModulesModule};
