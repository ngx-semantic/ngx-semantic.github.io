import{A as ze,B as ri$1,C as pi,D as wr$1,E as we,F as $,G as Ks$1,H as ti,I as B,J as Qt,K as On$1,L as R,M as B$1,O as yi$1,P as z,R as Z,T as vr$1,U as Is$1,V as si,W as J,X as ve,Y as Ws$1,_ as fi,a as Dr$1,c as Le,d as Ri,h as bi$1,m as _i,n as Bt,o as Ft,p as Tt$1,q as Qs$1,r as Ci,s as Kr$1,t as At,u as Oi,v as gi,w as vi$1,x as mi,z as ni}from"./main-D6LCLMRS.js";import{d as vi$2,f as wi,n as Ne,p as ze$1,r as Qe,s as be$1,t as Ci$1,u as ti$1}from"./chunk-B7xryoFq.js";import{n as U,t as P}from"./chunk-L47WARh9.js";import{a as Ue$1,c as pi$1,i as Oe,l as qe,o as We$1,s as me,t as $e$1,u as ze$2}from"./chunk-C-XTa8CP.js";import{a as Pe$1,g as li,h as hi,i as Oi$1,l as Tt$2,o as Ri$1,p as fi$1,r as Ni,s as Si$1,t as An$1,u as X}from"./chunk-DIbEhThR.js";import{a as P$1,i as L,l as w,n as E,o as R$1,r as F,s as b,t as A}from"./chunk-D15VXVbi.js";import{a as K,c as bi$2,l as ci,o as U$1,p as ri$2,r as Ii,s as ai,t as Di,u as li$1}from"./chunk-CnOM7_1X.js";import{$n as ur$1,B as Kh$1,Bn as rw,Cn as mn,Ct as YC,D as Gh$1,Dn as nt$1,Dt as Ze,E as G,En as no$1,Ft as aw,Gn as ss$1,Gt as eC,Hn as sC,I as KD,J as Pe$2,Jt as eg,Kt as ea$1,Ln as qw,M as IC,N as Ie,P as Jc$1,Pn as qh$1,Pt as ai$1,Q as Pp,Qn as uo$1,Rn as rC,Rt as bt,St as Y,Ut as dS,V as LC,Wn as sl$1,X as Ph,Y as Pg$1,Zt as fC,an as hC,b as Ds$1,bn as mC,br as zw,cn as hg,dn as ig,dt as Uh$1,fn as iw,fr as yg,ft as Uy,g as DC,h as D,hn as jh$1,ht as WC,i as $u$1,it as RI,j as Hu$1,kn as oC,l as BE,lt as T,m as Cn,mn as jd$1,mr as yn,nr as vg,nt as Qh$1,or as x,p as Ce,pr as yl$1,pt as Ve,q as Pd$1,r as $h$1,rn as go$1,sn as he$1,t as $E,tn as g,u as Bu,un as iC,ur as yC,vn as lo$1,vt as Ww,w as FC,wn as nC,wt as Yi,x as EC,yn as ly,yr as zu$1,yt as Xh$1,zt as cV}from"./chunk-BCndbQi5.js";import{i as x$1,n as B$2,r as w$1}from"./chunk-B03JrT7s.js";var Mn=`<sui-embed
    suiSource="youtube"
    suiId="O6Xo21L0ybE"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var In=`<sui-embed
    suiSource="vimeo"
    suiId="125292332"
    suiPlaceHolder="https://semantic-ui.com/images/vimeo-example.jpg"></sui-embed>
`;var Pn=`<sui-embed
    suiIcon="right circle arrow"
    suiSourceUrl="http://www.myfav.es/jack"
    suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>
`;var kn=`<sui-embed
    suiAspectRatio="4:3"
    suiSource="youtube"
    suiId="HTZudKi36bo"
    suiPlaceHolder="https://semantic-ui.com/images/4by3.jpg"></sui-embed>
`;var _m=(()=>{class n{constructor(){this.sanitizer=g(yl$1)}transform(o,...a){return this.sanitizer.bypassSecurityTrustResourceUrl(o)}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵpipe=uo$1({name:`safeUrl`,type:n,pure:!0})}}return n})();var Rt=(()=>{class n{constructor(){this.cdr=g(Pg$1),this.suiSource=null,this.suiAspectRatio=null,this.suiIcon=`video play`,this.suiId=null,this.suiPlaceHolder=null,this.suiSourceUrl=null,this.suiAutoplay=!1,this.isPLaying=!1,this.videoUrl=``}ngAfterViewInit(){this.suiAutoplay&&this.playVideo()}get classes(){return[`ui`,this.suiAspectRatio,`embed`,J.getPropClass(this.isPLaying,`active`)].join(` `)}playVideo(){this.suiSourceUrl&&(this.videoUrl=this.suiSourceUrl),this.suiSource===`vimeo`&&(this.videoUrl=`//player.vimeo.com/video/${this.suiId}?api=false&autoplay=true&byline=false&color=%23444444&portrait=false&title=false`),this.suiSource===`youtube`&&(this.videoUrl=`//www.youtube.com/embed/${this.suiId}?autohide=true&autoplay=true&color=%23444444&hq=true&jsapi=false&modestbranding=true`),this.isPLaying=!0,this.cdr.detectChanges()}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){function o(s,p){if(s&1&&Gh$1(0,`img`,2),s&2){let m=hC();Uh$1(`src`,m.suiPlaceHolder)}}function a(s,p){if(s&1&&(ss$1(0,`div`,3),Gh$1(1,`iframe`,4),rw(2,`safeUrl`),Bu()),s&2){let m=hC();KD(),Uh$1(`src`,iw(2,1,m.videoUrl),Pp)}}return RI({type:n,selectors:[[`sui-embed`]],inputs:{suiSource:`suiSource`,suiAspectRatio:`suiAspectRatio`,suiIcon:`suiIcon`,suiId:`suiId`,suiPlaceHolder:`suiPlaceHolder`,suiSourceUrl:`suiSourceUrl`,suiAutoplay:`suiAutoplay`},decls:4,vars:4,consts:[[3,`ngClass`],[`sui-icon`,``,3,`click`,`suiIconType`],[1,`placeholder`,3,`src`],[1,`embed`],[`scrolling`,`no`,`webkitallowfullscreen`,``,`mozallowfullscreen`,``,`allowfullscreen`,``,`width`,`100%`,`height`,`100%`,`frameborder`,`0`,3,`src`]],template:function(p,m){p&1&&(ss$1(0,`div`,0)(1,`i`,1),Qh$1(`click`,function(){return m.playVideo()}),Bu(),eC(2,o,1,1,`img`,2),eC(3,a,3,3,`div`,3),Bu()),p&2&&(Uh$1(`ngClass`,m.classes),KD(),Uh$1(`suiIconType`,m.suiIcon),KD(),nC(m.suiPlaceHolder?2:-1),KD(),nC(m.isPLaying?3:-1))},dependencies:[sl$1,zw,we,_m],encapsulation:2})})()}}return dS([ve()],n.prototype,`suiAutoplay`,void 0),n})();var Fn=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,Rt]})}}return n})();var zt=class{constructor(){this.isDefinitionsActive=!0}};var An=(()=>{class n extends zt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-embed-youtube-example`]],standalone:!1,features:[lo$1],decls:1,vars:0,consts:[[`suiSource`,`youtube`,`suiId`,`O6Xo21L0ybE`,`suiPlaceHolder`,`https://semantic-ui.com/images/image-16by9.png`]],template:function(a,s){a&1&&Gh$1(0,`sui-embed`,0)},dependencies:[Rt],encapsulation:2,changeDetection:1})}}return n})();var Vn=(()=>{class n extends zt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-embed-vimeo-example`]],standalone:!1,features:[lo$1],decls:1,vars:0,consts:[[`suiSource`,`vimeo`,`suiId`,`125292332`,`suiPlaceHolder`,`https://semantic-ui.com/images/vimeo-example.jpg`]],template:function(a,s){a&1&&Gh$1(0,`sui-embed`,0)},dependencies:[Rt],encapsulation:2,changeDetection:1})}}return n})();var Bn=(()=>{class n extends zt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-embed-custom-content-example`]],standalone:!1,features:[lo$1],decls:1,vars:0,consts:[[`suiIcon`,`right circle arrow`,`suiSourceUrl`,`http://www.myfav.es/jack`,`suiPlaceHolder`,`https://semantic-ui.com/images/image-16by9.png`]],template:function(a,s){a&1&&Gh$1(0,`sui-embed`,0)},dependencies:[Rt],encapsulation:2,changeDetection:1})}}return n})();var On=(()=>{class n extends zt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-embed-aspect-ratio-example`]],standalone:!1,features:[lo$1],decls:1,vars:0,consts:[[`suiAspectRatio`,`4:3`,`suiSource`,`youtube`,`suiId`,`HTZudKi36bo`,`suiPlaceHolder`,`https://semantic-ui.com/images/4by3.jpg`]],template:function(a,s){a&1&&Gh$1(0,`sui-embed`,0)},dependencies:[Rt],encapsulation:2,changeDetection:1})}}return n})();function Im(n,u){n&1&&Gh$1(0,`doc-embed-youtube-example`)}function Pm(n,u){n&1&&Gh$1(0,`doc-embed-vimeo-example`)}function km(n,u){n&1&&Gh$1(0,`doc-embed-custom-content-example`)}function Fm(n,u){n&1&&Gh$1(0,`doc-embed-aspect-ratio-example`)}function Am(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`States`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`YouTube`),Bu(),ss$1(6,`p`),WC(7,`An embed can be used to display YouTube Content`),Bu(),Ph(8,Im,1,0,`ng-template`,5),Bu(),ss$1(9,`doc-code-sample`,3)(10,`h3`,4),WC(11,`Vimeo`),Bu(),ss$1(12,`p`),WC(13,`An embed can be used to display Vimeo content.`),Bu(),Ph(14,Pm,1,0,`ng-template`,5),Bu(),ss$1(15,`doc-code-sample`,3)(16,`h3`,4),WC(17,`Custom Content`),Bu(),ss$1(18,`p`),WC(19,`An embed can display any web content`),Bu(),Ph(20,km,1,0,`ng-template`,5),Bu(),ss$1(21,`h2`,2),WC(22,`Variations`),Bu(),ss$1(23,`doc-code-sample`,3)(24,`h3`,4),WC(25,`Aspect Ratio`),Bu(),ss$1(26,`p`),WC(27,`An embed can specify an alternative aspect ratio`),Bu(),Ph(28,Fm,1,0,`ng-template`,5),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetYoutube),KD(6),Uh$1(`templateCode`,o.snippetVimeo),KD(6),Uh$1(`templateCode`,o.snippetCustomContent),KD(8),Uh$1(`templateCode`,o.snippetAspectRatio)}}function Vm(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-embed`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiSource`),Bu(),ss$1(20,`td`),WC(21,`Specifies a source to use. Cannot be used together with url. Allowed values could be `),ss$1(22,`span`,7),WC(23,`'youtube'`),Bu(),WC(24,` | `),ss$1(25,`span`,7),WC(26,`'vimeo'`),Bu(),WC(27,` | `),ss$1(28,`span`,7),WC(29,`null`),Bu()(),ss$1(30,`td`)(31,`div`,8),WC(32,` string`),Bu()(),ss$1(33,`td`)(34,`div`,9),WC(35,` null`),Bu()()(),ss$1(36,`tr`)(37,`td`),WC(38,`suiAspectRatio`),Bu(),ss$1(39,`td`),WC(40,` An embed can specify an alternative aspect ratio. Allowed values could be `),ss$1(41,`span`,7),WC(42,`'4:3'`),Bu(),WC(43,` | `),ss$1(44,`span`,7),WC(45,`'16:9'`),Bu(),WC(46,` | `),ss$1(47,`span`,7),WC(48,`'21:9'`),Bu(),WC(49,` | `),ss$1(50,`span`,7),WC(51,`null`),Bu()(),ss$1(52,`td`)(53,`div`,8),WC(54,`string`),Bu()(),ss$1(55,`td`)(56,`div`,9),WC(57,`null`),Bu()()(),ss$1(58,`tr`)(59,`td`),WC(60,`suiIcon `),Bu(),ss$1(61,`td`),WC(62,` Specifies an icon to use with placeholder content. `),Bu(),ss$1(63,`td`)(64,`div`,8),WC(65,`string`),Bu()(),ss$1(66,`td`)(67,`div`,9),WC(68,`video play`),Bu()()(),ss$1(69,`tr`)(70,`td`),WC(71,`suiId`),Bu(),ss$1(72,`td`),WC(73,` Specifies an id for source. `),Bu(),ss$1(74,`td`)(75,`div`,8),WC(76,`string`),Bu(),WC(77,` | `),ss$1(78,`div`,8),WC(79,`number`),Bu()(),ss$1(80,`td`)(81,`div`,9),WC(82,`null`),Bu()()(),ss$1(83,`tr`)(84,`td`),WC(85,`suiPlaceHolder`),Bu(),ss$1(86,`td`),WC(87,` A placeholder image for embed `),Bu(),ss$1(88,`td`)(89,`div`,8),WC(90,`string`),Bu()(),ss$1(91,`td`)(92,`div`,9),WC(93,`null`),Bu()()(),ss$1(94,`tr`)(95,`td`),WC(96,`suiSourceUrl`),Bu(),ss$1(97,`td`),WC(98,` Specifies a url to use for embed. Cannot be used together with source `),Bu(),ss$1(99,`td`)(100,`div`,8),WC(101,`string`),Bu()(),ss$1(102,`td`)(103,`div`,9),WC(104,`null`),Bu()()(),ss$1(105,`tr`)(106,`td`),WC(107,`suiAutoplay`),Bu(),ss$1(108,`td`),WC(109,` Setting to true or false will force autoplay `),Bu(),ss$1(110,`td`)(111,`div`,8),WC(112,` boolean `),Bu()(),ss$1(113,`td`)(114,`div`,9),WC(115,` false `),Bu()()()()()())}var Ln=(()=>{class n{constructor(o){this.snippetYoutube=Mn,this.snippetVimeo=In,this.snippetCustomContent=Pn,this.snippetAspectRatio=kn,this.isDefinitionsActive=!0,o.setTitle(`Embed | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-embed`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Embed`,`subHeader`,`An embed displays content from other websites like YouTube videos or Google Maps`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,Am,29,4,`div`,1)(2,Vm,116,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,An,Vn,Bn,On],encapsulation:2,changeDetection:1})}}return n})();var Hn=`<button sui-button
        (click)="simpleDimmerVisible = !simpleDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     [(dimmed)]="simpleDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Wn=`dimmerVisible: boolean = false;
`;var Rn=`<button sui-button
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
`;var zn=`<button sui-button
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
`;var jn=`<div sui-segment
     sui-dimmer
     dimmed="true">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Nn=`<div sui-segment
     sui-dimmer
     disabled>
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var Un=`<button sui-button
        (click)="blurringDimmerVisible = !blurringDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerBlurring
     [(dimmed)]="blurringDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;var $n=`<button sui-button
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
`;var Yn=`<button sui-button
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
`;var Gn=`<button sui-button
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
`;var Xn=`<button sui-button
        (click)="invertedDimmerVisible = !invertedDimmerVisible">
  Toggle Dimmer
</button>

<div sui-segment
     sui-dimmer
     suiDimmerInverted
     [(dimmed)]="invertedDimmerVisible">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
`;function Ym(n,u){n&1&&(ss$1(0,`h2`,4),Gh$1(1,`i`,5),WC(2,` Dimmed Message! `),Bu())}function Gm(n,u){n&1&&(ss$1(0,`h2`,3),Gh$1(1,`i`,4),WC(2,` Dimmed Message `),Bu(),ss$1(3,`div`,5),WC(4,`Dimmer sub-header`),Bu())}function Xm(n,u){n&1&&(ss$1(0,`h2`,4),WC(1,` Title `),Bu(),ss$1(2,`div`,5),WC(3,`Add `),Bu(),ss$1(4,`div`,6),WC(5,`View`),Bu())}function Jm(n,u){n&1&&(ss$1(0,`h2`,4),WC(1,` Title `),Bu(),ss$1(2,`div`,5),WC(3,`Add `),Bu(),ss$1(4,`div`,6),WC(5,`View`),Bu())}var We=class{constructor(){this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1}};var qn=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-simple-example`]],standalone:!1,features:[lo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.simpleDimmerVisible=!s.simpleDimmerVisible}),WC(1,` Toggle Dimmer
`),Bu(),ss$1(2,`div`,1),vg(`dimmedChange`,function(m){return YC(s.simpleDimmerVisible,m)||(s.simpleDimmerVisible=m),m}),Gh$1(3,`doc-wireframe`,2),Bu()),a&2&&(KD(2),yg(`dimmed`,s.simpleDimmerVisible))},dependencies:[Dr$1,Ii,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var Zn=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-content-example`]],standalone:!1,features:[lo$1],decls:5,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`],[`suiDimmerContent`,``],[`sui-header`,``,`suiIcon`,``,`suiInverted`,``],[`sui-icon`,``,`suiIconType`,`heart`]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.contentDimmerVisible=!s.contentDimmerVisible}),WC(1,` Toggle Dimmer
`),Bu(),ss$1(2,`div`,1),vg(`dimmedChange`,function(m){return YC(s.contentDimmerVisible,m)||(s.contentDimmerVisible=m),m}),Gh$1(3,`doc-wireframe`,2),Ph(4,Ym,3,0,`ng-template`,3),Bu()),a&2&&(KD(2),yg(`dimmed`,s.contentDimmerVisible))},dependencies:[Dr$1,Ws$1,Ii,Ci$1,be$1,we,ze],encapsulation:2,changeDetection:1})}}return n})();var Kn=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-page-example`]],standalone:!1,features:[lo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-dimmer`,``,`suiDimmerFullPage`,``,3,`dimmedChange`,`dimmed`],[`suiDimmerContent`,``],[`sui-header`,``,`suiIcon`,``,`suiInverted`,``],[`sui-icon`,``,`suiIconType`,`mail`],[`suiSubHeader`,``]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.pageDimmerVisible=!s.pageDimmerVisible}),WC(1,` Toggle Dimmer
`),Bu(),ss$1(2,`div`,1),vg(`dimmedChange`,function(m){return YC(s.pageDimmerVisible,m)||(s.pageDimmerVisible=m),m}),Ph(3,Gm,5,0,`ng-template`,2),Bu()),a&2&&(KD(2),yg(`dimmed`,s.pageDimmerVisible))},dependencies:[Ws$1,Qs$1,Ii,Ci$1,be$1,we],encapsulation:2,changeDetection:1})}}return n})();var Qn=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-active-example`]],standalone:!1,features:[lo$1],decls:2,vars:0,consts:[[`sui-segment`,``,`sui-dimmer`,``,`dimmed`,`true`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(ss$1(0,`div`,0),Gh$1(1,`doc-wireframe`,1),Bu())},dependencies:[Dr$1,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var eo=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-disabled-example`]],standalone:!1,features:[lo$1],decls:2,vars:0,consts:[[`sui-segment`,``,`sui-dimmer`,``,`disabled`,``],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(ss$1(0,`div`,0),Gh$1(1,`doc-wireframe`,1),Bu())},dependencies:[Dr$1,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var to=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-blurring-example`]],standalone:!1,features:[lo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerBlurring`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.blurringDimmerVisible=!s.blurringDimmerVisible}),WC(1,` Toggle Dimmer
`),Bu(),ss$1(2,`div`,1),vg(`dimmedChange`,function(m){return YC(s.blurringDimmerVisible,m)||(s.blurringDimmerVisible=m),m}),Gh$1(3,`doc-wireframe`,2),Bu()),a&2&&(KD(2),yg(`dimmed`,s.blurringDimmerVisible))},dependencies:[Dr$1,Ii,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var io=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-blurring-inverted-example`]],standalone:!1,features:[lo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerBlurring`,``,`suiDimmerInverted`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.blurringDInvertedDimmerVisible=!s.blurringDInvertedDimmerVisible}),WC(1,` Toggle Dimmer
`),Bu(),ss$1(2,`div`,1),vg(`dimmedChange`,function(m){return YC(s.blurringDInvertedDimmerVisible,m)||(s.blurringDInvertedDimmerVisible=m),m}),Gh$1(3,`doc-wireframe`,2),Bu()),a&2&&(KD(2),yg(`dimmed`,s.blurringDInvertedDimmerVisible))},dependencies:[Dr$1,Ii,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();var no=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-top-alignment-example`]],standalone:!1,features:[lo$1],decls:5,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerAlignment`,`top`,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`],[`suiDimmerContent`,``],[`sui-header`,``,`suiInverted`,``],[`sui-button`,``,`suiEmphasis`,`primary`],[`sui-button`,``]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.topAlignmentDimmerVisible=!s.topAlignmentDimmerVisible}),WC(1,` Toggle Dimmer
`),Bu(),ss$1(2,`div`,1),vg(`dimmedChange`,function(m){return YC(s.topAlignmentDimmerVisible,m)||(s.topAlignmentDimmerVisible=m),m}),Gh$1(3,`doc-wireframe`,2),Ph(4,Xm,6,0,`ng-template`,3),Bu()),a&2&&(KD(2),yg(`dimmed`,s.topAlignmentDimmerVisible))},dependencies:[Dr$1,Ws$1,Ii,Ci$1,be$1,ze],encapsulation:2,changeDetection:1})}}return n})();var oo=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-bottom-alignment-example`]],standalone:!1,features:[lo$1],decls:5,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerAlignment`,`bottom`,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`],[`suiDimmerContent`,``],[`sui-header`,``,`suiInverted`,``],[`sui-button`,``,`suiEmphasis`,`primary`],[`sui-button`,``]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.bottomAlignmentDimmerVisible=!s.bottomAlignmentDimmerVisible}),WC(1,` Toggle Dimmer
`),Bu(),ss$1(2,`div`,1),vg(`dimmedChange`,function(m){return YC(s.bottomAlignmentDimmerVisible,m)||(s.bottomAlignmentDimmerVisible=m),m}),Gh$1(3,`doc-wireframe`,2),Ph(4,Jm,6,0,`ng-template`,3),Bu()),a&2&&(KD(2),yg(`dimmed`,s.bottomAlignmentDimmerVisible))},dependencies:[Dr$1,Ws$1,Ii,Ci$1,be$1,ze],encapsulation:2,changeDetection:1})}}return n})();var ao=(()=>{class n extends We{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer-inverted-example`]],standalone:!1,features:[lo$1],decls:4,vars:1,consts:[[`sui-button`,``,3,`click`],[`sui-segment`,``,`sui-dimmer`,``,`suiDimmerInverted`,``,3,`dimmedChange`,`dimmed`],[`type`,`short-paragraph`]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.invertedDimmerVisible=!s.invertedDimmerVisible}),WC(1,` Toggle Dimmer
`),Bu(),ss$1(2,`div`,1),vg(`dimmedChange`,function(m){return YC(s.invertedDimmerVisible,m)||(s.invertedDimmerVisible=m),m}),Gh$1(3,`doc-wireframe`,2),Bu()),a&2&&(KD(2),yg(`dimmed`,s.invertedDimmerVisible))},dependencies:[Dr$1,Ii,Ci$1,ze],encapsulation:2,changeDetection:1})}}return n})();function Zm(n,u){n&1&&Gh$1(0,`doc-dimmer-simple-example`)}function Km(n,u){n&1&&Gh$1(0,`doc-dimmer-content-example`)}function Qm(n,u){n&1&&Gh$1(0,`doc-dimmer-page-example`)}function ep(n,u){n&1&&Gh$1(0,`doc-dimmer-active-example`)}function tp(n,u){n&1&&Gh$1(0,`doc-dimmer-disabled-example`)}function ip(n,u){n&1&&Gh$1(0,`doc-dimmer-blurring-example`)}function np(n,u){n&1&&Gh$1(0,`doc-dimmer-blurring-inverted-example`)}function op(n,u){n&1&&Gh$1(0,`doc-dimmer-top-alignment-example`)}function ap(n,u){n&1&&Gh$1(0,`doc-dimmer-bottom-alignment-example`)}function sp(n,u){n&1&&Gh$1(0,`doc-dimmer-inverted-example`)}function rp(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Dimmer`),Bu(),ss$1(6,`p`),WC(7,`A simple dimmer displays no content`),Bu(),Ph(8,Zm,1,0,`ng-template`,5),Bu(),ss$1(9,`doc-code-sample`,3)(10,`h3`,4),WC(11,`Content Dimmer`),Bu(),ss$1(12,`p`),WC(13,`A dimmer can display content`),Bu(),Ph(14,Km,1,0,`ng-template`,5),Bu(),ss$1(15,`doc-code-sample`,3)(16,`h3`,4),WC(17,`Page Dimmer`),Bu(),ss$1(18,`p`),WC(19,`A dimmer can be formatted to be fixed to the page`),Bu(),Ph(20,Qm,1,0,`ng-template`,5),Bu(),ss$1(21,`h2`,2),WC(22,`States`),Bu(),ss$1(23,`doc-code-sample`,6)(24,`h3`,4),WC(25,`Active`),Bu(),ss$1(26,`p`),WC(27,`An active dimmer will dim its parent container`),Bu(),Ph(28,ep,1,0,`ng-template`,5),Bu(),ss$1(29,`doc-code-sample`,6)(30,`h3`,4),WC(31,`Disabled`),Bu(),ss$1(32,`p`),WC(33,`A disabled dimmer cannot be activated`),Bu(),Ph(34,tp,1,0,`ng-template`,5),Bu(),ss$1(35,`h2`,2),WC(36,`Variations`),Bu(),ss$1(37,`doc-code-sample`,3)(38,`h3`,4),WC(39,`Blurring`),Bu(),ss$1(40,`p`),WC(41,`A dimmable element can blur its contents`),Bu(),Ph(42,ip,1,0,`ng-template`,5),Bu(),ss$1(43,`doc-code-sample`,3),Ph(44,np,1,0,`ng-template`,5),Bu(),ss$1(45,`doc-code-sample`,3)(46,`h3`,4),WC(47,`Vertical Alignment`),Bu(),ss$1(48,`p`),WC(49,`A dimmer can have its content top or bottom aligned.`),Bu(),Ph(50,op,1,0,`ng-template`,5),Bu(),ss$1(51,`doc-code-sample`,3),Ph(52,ap,1,0,`ng-template`,5),Bu(),ss$1(53,`doc-code-sample`,3)(54,`h3`,4),WC(55,`Inverted`),Bu(),ss$1(56,`p`),WC(57,`A dimmer can be formatted to have its colours inverted`),Bu(),Ph(58,sp,1,0,`ng-template`,5),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetSimple)(`componentCode`,o.snippetSharedTs),KD(6),Uh$1(`templateCode`,o.snippetContent)(`componentCode`,o.snippetSharedTs),KD(6),Uh$1(`templateCode`,o.snippetPage)(`componentCode`,o.snippetSharedTs),KD(8),Uh$1(`templateCode`,o.snippetActive),KD(6),Uh$1(`templateCode`,o.snippetDisabled),KD(8),Uh$1(`templateCode`,o.snippetBlurring)(`componentCode`,o.snippetSharedTs),KD(6),Uh$1(`templateCode`,o.snippetBlurringInverted)(`componentCode`,o.snippetSharedTs),KD(2),Uh$1(`templateCode`,o.snippetTopAligned)(`componentCode`,o.snippetSharedTs),KD(6),Uh$1(`templateCode`,o.snippetBottomAligned)(`componentCode`,o.snippetSharedTs),KD(2),Uh$1(`templateCode`,o.snippetInverted)(`componentCode`,o.snippetSharedTs)}}function lp(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-dimmer`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiDimmerAlignment`),Bu(),ss$1(20,`td`),WC(21,`Specifies the dimmer content position. Allowed values could be `),ss$1(22,`span`,8),WC(23,`'top'`),Bu(),WC(24,` | `),ss$1(25,`span`,8),WC(26,`'bottom'`),Bu(),WC(27,` | `),ss$1(28,`span`,8),WC(29,`null`),Bu()(),ss$1(30,`td`)(31,`div`,9),WC(32,`string`),Bu()(),ss$1(33,`td`)(34,`div`,10),WC(35,`top`),Bu()()(),ss$1(36,`tr`)(37,`td`),WC(38,`suiDimmerBlurring`),Bu(),ss$1(39,`td`),WC(40,`Determine if the dimmer should blur the background`),Bu(),ss$1(41,`td`)(42,`div`,9),WC(43,`boolean `),Bu()(),ss$1(44,`td`)(45,`div`,10),WC(46,`false `),Bu()()(),ss$1(47,`tr`)(48,`td`),WC(49,`suiDimmerInverted`),Bu(),ss$1(50,`td`),WC(51,`Determine if the dimmer should invert its colours`),Bu(),ss$1(52,`td`)(53,`div`,9),WC(54,`boolean `),Bu()(),ss$1(55,`td`)(56,`div`,10),WC(57,`false `),Bu()()(),ss$1(58,`tr`)(59,`td`),WC(60,`suiDimmerSimple`),Bu(),ss$1(61,`td`),WC(62,`Show a simple dimmer`),Bu(),ss$1(63,`td`)(64,`div`,9),WC(65,`boolean `),Bu()(),ss$1(66,`td`)(67,`div`,10),WC(68,`false `),Bu()()(),ss$1(69,`tr`)(70,`td`),WC(71,`suiDimmerFullPage`),Bu(),ss$1(72,`td`),WC(73,`Determine if the dimmer should cover the entire page`),Bu(),ss$1(74,`td`)(75,`div`,9),WC(76,`boolean `),Bu()(),ss$1(77,`td`)(78,`div`,10),WC(79,`false `),Bu()()(),ss$1(80,`tr`)(81,`td`),WC(82,`suiCloseOnClick`),Bu(),ss$1(83,`td`),WC(84,`Determine if the dimmer should be closed when the mask or any other location is clicked`),Bu(),ss$1(85,`td`)(86,`div`,9),WC(87,`boolean `),Bu()(),ss$1(88,`td`)(89,`div`,10),WC(90,`true `),Bu()()(),ss$1(91,`tr`)(92,`td`),WC(93,`disabled`),Bu(),ss$1(94,`td`),WC(95,`Stop the dimmer from responding to actions`),Bu(),ss$1(96,`td`)(97,`div`,9),WC(98,`boolean `),Bu()(),ss$1(99,`td`)(100,`div`,10),WC(101,`false `),Bu()()(),ss$1(102,`tr`)(103,`td`),WC(104,`dimmed`),Bu(),ss$1(105,`td`),WC(106,`Determines if the dimmer is shown or not. This field supports two way binding following the `),ss$1(107,`code`),WC(108,`[(dimmed)]`),Bu(),WC(109,` syntax. `),Bu(),ss$1(110,`td`)(111,`div`,9),WC(112,`boolean `),Bu()(),ss$1(113,`td`)(114,`div`,10),WC(115,`false `),Bu()()()()(),ss$1(116,`h2`,2),WC(117,`suiDimmerContent`),Bu(),ss$1(118,`h4`,4),WC(119,`Properties`),Bu(),ss$1(120,`table`,7)(121,`thead`)(122,`tr`)(123,`th`),WC(124,`Property`),Bu(),ss$1(125,`th`),WC(126,`Description`),Bu(),ss$1(127,`th`),WC(128,`Type`),Bu(),ss$1(129,`th`),WC(130,`Default`),Bu()()(),Gh$1(131,`tbody`),ss$1(132,`tfoot`,11)(133,`tr`)(134,`th`,12)(135,`div`,13),WC(136,`No properties for this directive`),Bu()()()()()())}var so=(()=>{class n{constructor(o){this.snippetSimple=Hn,this.snippetSharedTs=Wn,this.snippetContent=Rn,this.snippetPage=zn,this.snippetActive=jn,this.snippetDisabled=Nn,this.snippetBlurring=Un,this.snippetBlurringInverted=$n,this.snippetTopAligned=Yn,this.snippetBottomAligned=Gn,this.snippetInverted=Xn,this.simpleDimmerVisible=!1,this.contentDimmerVisible=!1,this.pageDimmerVisible=!1,this.blurringDimmerVisible=!1,this.blurringDInvertedDimmerVisible=!1,this.topAlignmentDimmerVisible=!1,this.bottomAlignmentDimmerVisible=!1,this.invertedDimmerVisible=!1,o.setTitle(`Dimmer | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dimmer`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Dimmer`,`subHeader`,`A dimmer hides distractions to focus attention on particular content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[1,`full-width`],[`colspan`,`4`],[2,`text-align`,`center`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,rp,59,18,`div`,1)(2,lp,137,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,qn,Zn,Kn,Qn,eo,to,io,no,oo,ao],styles:[`button[_ngcontent-%COMP%]{margin-bottom:1.2rem!important}`],changeDetection:1})}}return n})();var ro=`<sui-rating suiMaxValue="1"></sui-rating>
`;var lo=`<sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>
`;var mo=`<sui-rating
    suiType="heart"
    suiValue="1"
    suiMaxValue="3"></sui-rating>
`;var po=`<sui-rating
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
`;var wt=(()=>{class n extends On$1{set suiValue(o){this.value!==o&&(this.value=+o)}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.generateRatingsArray()}get suiMaxValue(){return this.maxValue}get classes(){return[`ui`,this.suiSize,this.suiType,J.getPropClass(this.suiReadOnly,`read-only`),`rating`,J.getPropClass(this.hoverValue>0,`selected`)].join(` `)}constructor(){super(),this.changeDetectorRef=g(Pg$1),this.valueChanged=new nt$1,this.suiSize=null,this.suiType=null,this.suiReadOnly=!1,this.suiClearable=!1,this.ratingsArray=[],this.hoverValue=0,this.value=0,this.maxValue=5,this.controlValueChangeFn=()=>{},this.generateRatingsArray()}onClick(o){this.suiReadOnly||(this.suiClearable&&this.suiValue===o&&(o=0),this.suiValue!==o&&(this.controlValueChangeFn(o),this.valueChanged.emit(o)),this.suiValue=o)}onHover(o){this.suiReadOnly?this.hoverValue=0:this.hoverValue=o}onUnhover(){this.suiReadOnly||(this.hoverValue=0)}writeValue(o){this.suiValue=o,this.changeDetectorRef.markForCheck()}registerOnChange(o){this.controlValueChangeFn=o}registerOnTouched(o){}setDisabledState(o){}generateRatingsArray(){this.ratingsArray=Array(this.maxValue).fill(0).map((o,a)=>a+1)}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){function o(a,s){if(a&1){let p=fC();Hu$1(0,`i`,1),Kh$1(`click`,function(){let v=Pd$1(p).$implicit,O=hC();return jd$1(O.onClick(v))})(`mouseover`,function(){let v=Pd$1(p).$implicit,O=hC();return jd$1(O.onHover(v))})(`mouseout`,function(){Pd$1(p);let v=hC();return jd$1(v.onUnhover())}),$u$1()}if(a&2){let p=s.$implicit,m=hC();go$1(`active`,p<=m.suiValue)(`selected`,p<=m.hoverValue)}}return RI({type:n,selectors:[[`sui-rating`]],inputs:{suiSize:`suiSize`,suiType:`suiType`,suiReadOnly:`suiReadOnly`,suiClearable:`suiClearable`,suiValue:`suiValue`,suiMaxValue:`suiMaxValue`},outputs:{valueChanged:`valueChanged`},features:[Ds$1([{provide:X,useExisting:ai$1(()=>n),multi:!0}]),lo$1],decls:2,vars:0,consts:[[1,`icon`,3,`active`,`selected`],[1,`icon`,3,`click`,`mouseover`,`mouseout`]],template:function(s,p){s&1&&iC(0,o,1,4,`i`,0,oC),s&2&&sC(p.ratingsArray)},styles:[`:host.read-only .icon{cursor:auto}
`],encapsulation:2,changeDetection:1})})()}}return dS([ve()],n.prototype,`suiReadOnly`,void 0),dS([ve()],n.prototype,`suiClearable`,void 0),n})();var uo=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({})}}return n})();var jt=class{constructor(){this.isDefinitionsActive=!0}};var ho=(()=>{class n extends jt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-rating-basic-example`]],standalone:!1,features:[lo$1],decls:1,vars:0,consts:[[`suiMaxValue`,`1`]],template:function(a,s){a&1&&Gh$1(0,`sui-rating`,0)},dependencies:[wt],encapsulation:2,changeDetection:1})}}return n})();var go=(()=>{class n extends jt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-rating-star-example`]],standalone:!1,features:[lo$1],decls:1,vars:0,consts:[[`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`]],template:function(a,s){a&1&&Gh$1(0,`sui-rating`,0)},dependencies:[wt],encapsulation:2,changeDetection:1})}}return n})();var fo=(()=>{class n extends jt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-rating-heart-example`]],standalone:!1,features:[lo$1],decls:1,vars:0,consts:[[`suiType`,`heart`,`suiValue`,`1`,`suiMaxValue`,`3`]],template:function(a,s){a&1&&Gh$1(0,`sui-rating`,0)},dependencies:[wt],encapsulation:2,changeDetection:1})}}return n})();var So=(()=>{class n extends jt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-rating-sizes-example`]],standalone:!1,features:[lo$1],decls:22,vars:0,consts:[[`suiSize`,`mini`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`tiny`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`small`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`large`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`huge`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`],[`suiSize`,`massive`,`suiType`,`star`,`suiValue`,`3`,`suiMaxValue`,`4`]],template:function(a,s){a&1&&Gh$1(0,`sui-rating`,0)(1,`br`)(2,`br`)(3,`sui-rating`,1)(4,`br`)(5,`br`)(6,`sui-rating`,2)(7,`br`)(8,`br`)(9,`sui-rating`,3)(10,`br`)(11,`br`)(12,`sui-rating`,4)(13,`br`)(14,`br`)(15,`sui-rating`,5)(16,`br`)(17,`br`)(18,`sui-rating`,5)(19,`br`)(20,`br`)(21,`sui-rating`,6)},dependencies:[wt],encapsulation:2,changeDetection:1})}}return n})();function hp(n,u){n&1&&Gh$1(0,`doc-rating-basic-example`)}function gp(n,u){n&1&&Gh$1(0,`doc-rating-star-example`)}function fp(n,u){n&1&&Gh$1(0,`doc-rating-heart-example`)}function Sp(n,u){n&1&&Gh$1(0,`doc-rating-sizes-example`)}function vp(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`States`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Rating `),ss$1(6,`span`,5),WC(7,`Flexbox`),Bu()(),ss$1(8,`p`),WC(9,`A basic rating`),Bu(),Ph(10,hp,1,0,`ng-template`,6),Bu(),ss$1(11,`doc-code-sample`,3)(12,`h3`,4),WC(13,`Star`),Bu(),ss$1(14,`p`),WC(15,`A rating can use a set of star icons`),Bu(),Ph(16,gp,1,0,`ng-template`,6),Bu(),ss$1(17,`doc-code-sample`,3)(18,`h3`,4),WC(19,`Heart`),Bu(),ss$1(20,`p`),WC(21,`A rating can use a set of heart icons`),Bu(),Ph(22,fp,1,0,`ng-template`,6),Bu(),ss$1(23,`h2`,2),WC(24,`Variations`),Bu(),ss$1(25,`doc-code-sample`,3)(26,`h3`,4),WC(27,`Size`),Bu(),ss$1(28,`p`),WC(29,`A rating can vary in size`),Bu(),Ph(30,Sp,1,0,`ng-template`,6),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetBasic),KD(8),Uh$1(`templateCode`,o.snippetStar),KD(6),Uh$1(`templateCode`,o.snippetHeart),KD(8),Uh$1(`templateCode`,o.snippetSizes)}}function xp(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-rating`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiSize`),Bu(),ss$1(20,`td`),WC(21,`Set the rating size. Allowed values could be `),ss$1(22,`span`,8),WC(23,`mini`),Bu(),WC(24,` | `),ss$1(25,`span`,8),WC(26,`tiny`),Bu(),WC(27,` | `),ss$1(28,`span`,8),WC(29,`small`),Bu(),WC(30,` | `),ss$1(31,`span`,8),WC(32,`medium`),Bu(),WC(33,` | `),ss$1(34,`span`,8),WC(35,`big`),Bu(),WC(36,` | `),ss$1(37,`span`,8),WC(38,`huge`),Bu(),WC(39,` | `),ss$1(40,`span`,8),WC(41,`massive`),Bu(),WC(42,` | `),ss$1(43,`span`,8),WC(44,`null`),Bu()(),ss$1(45,`td`)(46,`div`,5),WC(47,` string `),Bu()(),ss$1(48,`td`)(49,`div`,9),WC(50,` null `),Bu()()(),ss$1(51,`tr`)(52,`td`),WC(53,`suiType`),Bu(),ss$1(54,`td`),WC(55,`Specifies a icon to use. Cannot be used together with url. Allowed values could be `),ss$1(56,`span`,8),WC(57,`star`),Bu(),WC(58,` | `),ss$1(59,`span`,8),WC(60,`heart`),Bu(),WC(61,` | `),ss$1(62,`span`,8),WC(63,`null`),Bu()(),ss$1(64,`td`)(65,`div`,5),WC(66,` string`),Bu()(),ss$1(67,`td`)(68,`div`,9),WC(69,` null`),Bu()()(),ss$1(70,`tr`)(71,`td`),WC(72,`suiReadOnly `),Bu(),ss$1(73,`td`),WC(74,` Setting to true or false will determine if users can change the rating value `),Bu(),ss$1(75,`td`)(76,`div`,5),WC(77,` boolean `),Bu()(),ss$1(78,`td`)(79,`div`,9),WC(80,` false `),Bu()()(),ss$1(81,`tr`)(82,`td`),WC(83,`suiClearable`),Bu(),ss$1(84,`td`),WC(85,` Setting to true or false will determine if clicking on the value would reset it `),Bu(),ss$1(86,`td`)(87,`div`,5),WC(88,` boolean `),Bu()(),ss$1(89,`td`)(90,`div`,9),WC(91,` false `),Bu()()()()(),ss$1(92,`h4`,4),WC(93,`Events`),Bu(),ss$1(94,`table`,7)(95,`thead`)(96,`tr`)(97,`th`),WC(98,`Event`),Bu(),ss$1(99,`th`),WC(100,`Description`),Bu(),ss$1(101,`th`),WC(102,`Type`),Bu()()(),ss$1(103,`tbody`)(104,`tr`)(105,`td`),WC(106,`valueChanged `),Bu(),ss$1(107,`td`),WC(108,`Fired when the rating value is changed. Also supports `),ss$1(109,`code`),WC(110,`[(ngModel)]`),Bu(),WC(111,` syntax`),Bu(),ss$1(112,`td`)(113,`div`,5),WC(114,` number `),Bu()()()()()())}var vo=(()=>{class n{constructor(o){this.snippetBasic=ro,this.snippetStar=lo,this.snippetHeart=mo,this.snippetSizes=po,this.isDefinitionsActive=!0,o.setTitle(`Rating | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-rating`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Rating`,`subHeader`,`A rating indicates user interest in content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-label`,``,`suiColour`,`teal`],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,vp,31,4,`div`,1)(2,xp,115,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,ho,go,fo,So],encapsulation:2,changeDetection:1})}}return n})();var xo=`<sui-search
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var bo=`<sui-search
    suiShowIcon
    suiPlaceholder="Common passwords..."
    [suiOptionsLookup]="searchText">
</sui-search>
`;var yo=`<sui-search
    suiShowIcon
    suiPlaceholder="Common animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Eo=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="countries">
</sui-search>
`;var Co=`countries = [
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
`;var Do=`<sui-search
    suiShowIcon
    suiPlaceholder="Search countries..."
    [suiOptions]="categoryContent">
</sui-search>
`;var wo=`categoryContent = [
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
`;var _o=`<sui-search
    suiLoading
    suiPlaceholder="Search..."
    [suiOptions]="blankOptions">
</sui-search>
`;var To=`<sui-search
    disabled
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptions]="blankOptions">
</sui-search>
`;var Mo=`<sui-search
    suiFluid
    suiShowIcon
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Io=`<sui-search
    suiShowIcon
    suiAlignment="right"
    suiPlaceholder="Search animals..."
    [suiOptionsLookup]="searchCategories">
</sui-search>
`;var Ue=class n{constructor(){this.blankOptions=[],this.countries=[{title:`Andorra`},{title:`United Arab Emirates`},{title:`Afghanistan`},{title:`Antigua`},{title:`Anguilla`},{title:`Albania`},{title:`Armenia`},{title:`Netherlands Antilles`},{title:`Angola`},{title:`Argentina`},{title:`American Samoa`},{title:`Austria`},{title:`Australia`},{title:`Aruba`},{title:`Aland Islands`},{title:`Azerbaijan`},{title:`Bosnia`},{title:`Barbados`},{title:`Bangladesh`},{title:`Belgium`},{title:`Burkina Faso`},{title:`Bulgaria`},{title:`Bahrain`},{title:`Burundi`}],this.categoryContent=[{category:`South America`,title:`Brazil`},{category:`South America`,title:`Peru`},{category:`North America`,title:`Canada`},{category:`Asia`,title:`South Korea`},{category:`Asia`,title:`Japan`},{category:`Asia`,title:`China`},{category:`Europe`,title:`Denmark`},{category:`Europe`,title:`England`},{category:`Europe`,title:`France`},{category:`Europe`,title:`Germany`},{category:`Africa`,title:`Ethiopia`},{category:`Africa`,title:`Nigeria`},{category:`Africa`,title:`Zimbabwe`}]}searchText(u){return B$2(this,null,function*(){let o=`https://api.semantic-ui.com/search/${u}`;return n.callUrl(o)})}searchCategories(u){return B$2(this,null,function*(){let o=`https://api.semantic-ui.com/search/category/${u}`;return n.callUrl(o)})}static callUrl(u){return B$2(this,null,function*(){try{return(yield(yield fetch(u)).json()).results}catch(o){return[]}})}};var Po=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-basic-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiPlaceholder`,`Common passwords...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptionsLookup`,s.searchText)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var ko=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-basic-alt-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiPlaceholder`,`Common passwords...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptionsLookup`,s.searchText)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Fo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-category-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiPlaceholder`,`Common animals...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptionsLookup`,s.searchCategories)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Ao=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-local-search-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiPlaceholder`,`Search countries...`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptions`,s.countries)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Vo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-local-category-search-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiPlaceholder`,`Search countries...`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptions`,s.categoryContent)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Bo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-loading-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiLoading`,``,`suiPlaceholder`,`Search...`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptions`,s.blankOptions)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Oo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-disabled-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`disabled`,``,`suiShowIcon`,``,`suiPlaceholder`,`Search animals...`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptions`,s.blankOptions)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Lo=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-fluid-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiFluid`,``,`suiShowIcon`,``,`suiPlaceholder`,`Search animals...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptionsLookup`,s.searchCategories)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();var Ho=(()=>{class n extends Ue{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search-aligned-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiShowIcon`,``,`suiAlignment`,`right`,`suiPlaceholder`,`Search animals...`,3,`suiOptionsLookup`]],template:function(a,s){a&1&&Gh$1(0,`sui-search`,0),a&2&&Uh$1(`suiOptionsLookup`,s.searchCategories)},dependencies:[Ne],encapsulation:2,changeDetection:1})}}return n})();function Fp(n,u){n&1&&Gh$1(0,`doc-search-basic-example`)}function Ap(n,u){n&1&&Gh$1(0,`doc-search-basic-alt-example`)}function Vp(n,u){n&1&&Gh$1(0,`doc-search-category-example`)}function Bp(n,u){n&1&&Gh$1(0,`doc-search-local-search-example`)}function Op(n,u){n&1&&Gh$1(0,`doc-search-local-category-search-example`)}function Lp(n,u){n&1&&Gh$1(0,`doc-search-loading-example`)}function Hp(n,u){n&1&&Gh$1(0,`doc-search-disabled-example`)}function Wp(n,u){n&1&&Gh$1(0,`doc-search-fluid-example`)}function Rp(n,u){n&1&&Gh$1(0,`doc-search-aligned-example`)}function zp(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Type`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Search`),Bu(),ss$1(6,`p`),WC(7,`A basic search element`),Bu(),Ph(8,Fp,1,0,`ng-template`,5),Bu(),ss$1(9,`doc-code-sample`,3),Ph(10,Ap,1,0,`ng-template`,5),Bu(),ss$1(11,`doc-code-sample`,3)(12,`h3`,4),WC(13,`Category`),Bu(),ss$1(14,`p`),WC(15,`A search can display results from remote content ordered by categories`),Bu(),Ph(16,Vp,1,0,`ng-template`,5),Bu(),ss$1(17,`doc-code-sample`,6)(18,`h3`,4),WC(19,`Local Search`),Bu(),ss$1(20,`p`),WC(21,`A search can look for results inside a static local source.`),Bu(),Ph(22,Bp,1,0,`ng-template`,5),Bu(),ss$1(23,`doc-code-sample`,6)(24,`h3`,4),WC(25,`Local Category Search`),Bu(),ss$1(26,`p`),WC(27,`A search can look for category results inside a static local source.`),Bu(),Ph(28,Op,1,0,`ng-template`,5),Bu(),Gh$1(29,`br`),ss$1(30,`h2`,2),WC(31,`States`),Bu(),ss$1(32,`doc-code-sample`,3)(33,`h3`,4),WC(34,`Loading`),Bu(),ss$1(35,`p`),WC(36,`A search can show a loading indicator.`),Bu(),Ph(37,Lp,1,0,`ng-template`,5),Bu(),Gh$1(38,`br`),ss$1(39,`h2`,2),WC(40,`Variations`),Bu(),ss$1(41,`doc-code-sample`,3)(42,`h3`,4),WC(43,`Disabled`),Bu(),ss$1(44,`p`),WC(45,`A search can show it is currently unable to be interacted with.`),Bu(),Ph(46,Hp,1,0,`ng-template`,5),Bu(),ss$1(47,`doc-code-sample`,3)(48,`h3`,4),WC(49,`Fluid`),Bu(),ss$1(50,`p`),WC(51,`A search can have its results take up the width of its container.`),Bu(),Ph(52,Wp,1,0,`ng-template`,5),Bu(),ss$1(53,`doc-code-sample`,3)(54,`h3`,4),WC(55,`Aligned`),Bu(),ss$1(56,`p`),WC(57,`A search can have its results aligned to its left or right container edge.`),Bu(),Ph(58,Rp,1,0,`ng-template`,5),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetBasic),KD(6),Uh$1(`templateCode`,o.snippetBasicAlt),KD(2),Uh$1(`templateCode`,o.snippetCategory),KD(6),Uh$1(`templateCode`,o.snippetLocalSearch)(`componentCode`,o.snippetLocalSearchTs),KD(6),Uh$1(`templateCode`,o.snippetLocalCategorySearch)(`componentCode`,o.snippetLocalCategorySearchTs),KD(9),Uh$1(`templateCode`,o.snippetLoading),KD(9),Uh$1(`templateCode`,o.snippetDisabled),KD(6),Uh$1(`templateCode`,o.snippetFluid),KD(6),Uh$1(`templateCode`,o.snippetAligned)}}function jp(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-search`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiAlignment`),Bu(),ss$1(20,`td`),WC(21,`Set the search result alignment. Allowed values could be `),ss$1(22,`span`,8),WC(23,`right`),Bu(),WC(24,` | `),ss$1(25,`span`,8),WC(26,`null`),Bu()(),ss$1(27,`td`)(28,`div`,9),WC(29,` string `),Bu()(),ss$1(30,`td`)(31,`div`,10),WC(32,` null `),Bu()()(),ss$1(33,`tr`)(34,`td`),WC(35,`suiPlaceholder`),Bu(),ss$1(36,`td`),WC(37,`Set the search input placeholder text. `),Bu(),ss$1(38,`td`)(39,`div`,9),WC(40,` string `),Bu()(),ss$1(41,`td`)(42,`div`,10),WC(43,` null `),Bu()()(),ss$1(44,`tr`)(45,`td`),WC(46,`suiSearchDelay`),Bu(),ss$1(47,`td`),WC(48,`Set the delay (in milliseconds) before a search is started. `),Bu(),ss$1(49,`td`)(50,`div`,9),WC(51,` number `),Bu()(),ss$1(52,`td`)(53,`div`,10),WC(54,` 200 `),Bu()()(),ss$1(55,`tr`)(56,`td`),WC(57,`suiShowIcon`),Bu(),ss$1(58,`td`),WC(59,`Determine whether or not to show the search icon `),Bu(),ss$1(60,`td`)(61,`div`,9),WC(62,` boolean `),Bu()(),ss$1(63,`td`)(64,`div`,10),WC(65,` false `),Bu()()(),ss$1(66,`tr`)(67,`td`),WC(68,`disabled`),Bu(),ss$1(69,`td`),WC(70,`Determine whether or not to disable the search functionality `),Bu(),ss$1(71,`td`)(72,`div`,9),WC(73,` boolean `),Bu()(),ss$1(74,`td`)(75,`div`,10),WC(76,` false `),Bu()()(),ss$1(77,`tr`)(78,`td`),WC(79,`suiFluid`),Bu(),ss$1(80,`td`),WC(81,`Determine whether or not the search results fill the width of their container `),Bu(),ss$1(82,`td`)(83,`div`,9),WC(84,` boolean `),Bu()(),ss$1(85,`td`)(86,`div`,10),WC(87,` false `),Bu()()(),ss$1(88,`tr`)(89,`td`),WC(90,`suiLoading`),Bu(),ss$1(91,`td`),WC(92,`Determine whether or not to manually override the loading icon display `),Bu(),ss$1(93,`td`)(94,`div`,9),WC(95,` boolean `),Bu()(),ss$1(96,`td`)(97,`div`,10),WC(98,` false `),Bu()()(),ss$1(99,`tr`)(100,`td`),WC(101,`suiOptions`),Bu(),ss$1(102,`td`),WC(103,`The options available to search. Cannot be used in conjunction with `),ss$1(104,`code`),WC(105,`suiOptionsLookup`),Bu()(),ss$1(106,`td`)(107,`div`,9),WC(108,` Array<{title: string, category: string (optional), description: string (optional)}> `),Bu()(),ss$1(109,`td`)(110,`div`,10),WC(111,` null `),Bu()()(),ss$1(112,`tr`)(113,`td`),WC(114,`suiOptionsLookup`),Bu(),ss$1(115,`td`),WC(116,`A function to asynchronously search a remote resource with the provided query. Cannot be used in conjunction with `),ss$1(117,`code`),WC(118,`suiOptions`),Bu()(),ss$1(119,`td`)(120,`div`,9),WC(121,` (query: string) => Promise<Array<{title: string, category: string (optional), description: string (optional)}>> `),Bu()(),ss$1(122,`td`)(123,`div`,10),WC(124,` null `),Bu()()()()(),ss$1(125,`h4`,4),WC(126,`Events`),Bu(),ss$1(127,`table`,7)(128,`thead`)(129,`tr`)(130,`th`),WC(131,`Property`),Bu(),ss$1(132,`th`),WC(133,`Description`),Bu(),ss$1(134,`th`),WC(135,`Type`),Bu()()(),ss$1(136,`tbody`)(137,`tr`)(138,`td`),WC(139,`suiResultSelected`),Bu(),ss$1(140,`td`),WC(141,`Fired when a result is selected. `),Bu(),ss$1(142,`td`)(143,`div`,9),WC(144,` {title: string, category: string, description: string} `),Bu()()()()()())}var Wo=(()=>{class n{constructor(o){this.snippetBasic=xo,this.snippetBasicAlt=bo,this.snippetCategory=yo,this.snippetLocalSearch=Eo,this.snippetLocalSearchTs=Co,this.snippetLocalCategorySearch=Do,this.snippetLocalCategorySearchTs=wo,this.snippetLoading=_o,this.snippetDisabled=To,this.snippetFluid=Mo,this.snippetAligned=Io,this.blankOptions=[],this.countries=[{title:`Andorra`},{title:`United Arab Emirates`},{title:`Afghanistan`},{title:`Antigua`},{title:`Anguilla`},{title:`Albania`},{title:`Armenia`},{title:`Netherlands Antilles`},{title:`Angola`},{title:`Argentina`},{title:`American Samoa`},{title:`Austria`},{title:`Australia`},{title:`Aruba`},{title:`Aland Islands`},{title:`Azerbaijan`},{title:`Bosnia`},{title:`Barbados`},{title:`Bangladesh`},{title:`Belgium`},{title:`Burkina Faso`},{title:`Bulgaria`},{title:`Bahrain`},{title:`Burundi`}],this.categoryContent=[{category:`South America`,title:`Brazil`},{category:`South America`,title:`Peru`},{category:`North America`,title:`Canada`},{category:`Asia`,title:`South Korea`},{category:`Asia`,title:`Japan`},{category:`Asia`,title:`China`},{category:`Europe`,title:`Denmark`},{category:`Europe`,title:`England`},{category:`Europe`,title:`France`},{category:`Europe`,title:`Germany`},{category:`Africa`,title:`Ethiopia`},{category:`Africa`,title:`Nigeria`},{category:`Africa`,title:`Zimbabwe`}],o.setTitle(`Search | Ngx Semantic`)}searchText(o){return B$2(this,null,function*(){let a=`https://api.semantic-ui.com/search/${o}`;return n.callUrl(a)})}searchCategories(o){return B$2(this,null,function*(){let a=`https://api.semantic-ui.com/search/category/${o}`;return n.callUrl(a)})}static callUrl(o){return B$2(this,null,function*(){try{return(yield(yield fetch(o)).json()).results}catch(a){return[]}})}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-search`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Search`,`subHeader`,`A search module allows a user to query for results from a selection of data`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`,`componentCode`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,zp,59,11,`div`,1)(2,jp,145,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Po,ko,Fo,Ao,Vo,Bo,Oo,Lo,Ho],encapsulation:2,changeDetection:1})}}return n})();var Ro=`<sui-tabs>
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
`;var zo=`<sui-tabs
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
`;var jo=`<sui-tabs
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
`;var No=`<sui-tabs>
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
`;var Uo=`<sui-tabs>
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
`;var $o=`<sui-tabs
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
`;var Yo=`<select name="tab-colour"
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
`;var nt=(()=>{class n extends On$1{constructor(){super(...arguments),this.suiTitle=null,this.suiIcon=null,this.suiLabel=null,this.suiLoading=!1,this.disabled=!1,this.suiLabelColour=null,this.suiLabelCircular=!1}get classes(){return[J.getPropClass(this.suiLoading,`loading`),J.getPropClass(this.disabled,`disabled`)].join(` `)}static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=(function(){let o=[`contentTemplate`],a=[`*`];function s(p,m){p&1&&yC(0)}return RI({type:n,selectors:[[`sui-tab`]],viewQuery:function(m,v){if(m&1&&eg(o,7),m&2){let O;DC(O=EC())&&(v.contentTemplate=O.first)}},inputs:{suiContent:`suiContent`,suiTitle:`suiTitle`,suiIcon:`suiIcon`,suiLabel:`suiLabel`,suiLoading:`suiLoading`,disabled:`disabled`,suiLabelColour:`suiLabelColour`,suiLabelCircular:`suiLabelCircular`},exportAs:[`suiTab`],features:[lo$1],ngContentSelectors:a,decls:2,vars:0,consts:[[`contentTemplate`,``]],template:function(m,v){m&1&&(mC(),jh$1(0,s,1,0,`ng-template`,null,0,aw))},encapsulation:2,changeDetection:1})})()}}return dS([ve()],n.prototype,`suiLoading`,void 0),dS([ve()],n.prototype,`disabled`,void 0),dS([ve()],n.prototype,`suiLabelCircular`,void 0),n})();var ot=(()=>{class n{constructor(){this.tabs=new Yi,this.suiTabMenuPosition=`top`,this.suiTabType=`basic`,this.suiColour=null,this.suiInverted=!1,this.suiSelectedIndexChanged=new nt$1,this.selectedTabIndex=0,this.hasTabs=!1,this.currentTab=null}get isSecondary(){return this.suiTabType===`secondary`}get isBasic(){return this.suiTabType===`basic`}get isPointing(){return this.suiTabType===`pointing`}get isText(){return this.suiTabType===`text`}get isBorderless(){return this.suiTabType===`borderless`}get isTop(){return this.suiTabMenuPosition===`top`}get menuAttachment(){return this.suiTabType===`basic`?this.isTop?`top`:`bottom`:null}get segmentAttachment(){return this.suiTabType===`basic`?this.isTop?`bottom attached`:`top attached`:null}changeTab(o,a){if(o.disabled)return;let s=this.selectedTabIndex!==a;this.selectedTabIndex=a,this.setCurrentTab(),s&&this.suiSelectedIndexChanged.emit(this.selectedTabIndex)}isTabSelected(o){return this.selectedTabIndex===o}ngAfterContentChecked(){this.setCurrentTab()}setCurrentTab(){let o=this.tabs.toArray();this.hasTabs=o.length>0,this.currentTab=o[this.selectedTabIndex]}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){function o(W,re){W&1&&qh$1(0)}function a(W,re){if(W&1&&Ph(0,o,1,0,`ng-container`,2),W&2){hC(2);let F=IC(2);Uh$1(`ngTemplateOutlet`,F)}}function s(W,re){W&1&&qh$1(0)}function p(W,re){if(W&1&&Ph(0,s,1,0,`ng-container`,2),W&2){let F=hC(2);Uh$1(`ngTemplateOutlet`,F.currentTab.contentTemplate)}}function m(W,re){W&1&&qh$1(0)}function v(W,re){if(W&1&&Ph(0,m,1,0,`ng-container`,2),W&2){hC(2);let F=IC(2);Uh$1(`ngTemplateOutlet`,F)}}function O(W,re){if(W&1&&(eC(0,a,1,1,`ng-container`),ss$1(1,`div`,1),eC(2,p,1,1,`ng-container`),Bu(),eC(3,v,1,1,`ng-container`)),W&2){let F=hC();nC(F.isTop?0:-1),KD(),go$1(`loading`,F.currentTab==null?null:F.currentTab.suiLoading),Uh$1(`suiAttached`,F.segmentAttachment),KD(),nC(F.currentTab?2:-1),KD(),nC(F.isTop?-1:3)}}function ie(W,re){if(W&1&&Gh$1(0,`i`,6),W&2){let F=hC().$implicit;Uh$1(`suiIconType`,F.suiIcon)}}function ke(W,re){if(W&1&&(ss$1(0,`div`,7),WC(1),Bu()),W&2){let F=hC().$implicit;Uh$1(`suiColour`,F.suiLabelColour)(`suiCircular`,F.suiLabelCircular),KD(),zu$1(` `,F.suiLabel,` `)}}function ne(W,re){if(W&1){let F=fC();ss$1(0,`div`,5),Qh$1(`click`,function(){let Le=Pd$1(F),Yt=Le.$implicit,li=Le.$index,di=hC(2);return jd$1(di.changeTab(Yt,li))}),eC(1,ie,1,1,`i`,6),WC(2),eC(3,ke,2,3,`div`,7),Bu()}if(W&2){let F=re.$implicit,It=re.$index,Le=hC(2);Uh$1(`disabled`,F.disabled)(`suiActive`,Le.isTabSelected(It)),KD(),nC(F.suiIcon?1:-1),KD(),zu$1(` `,F.suiTitle,` `),KD(),nC(F.suiLabel?3:-1)}}function dt(W,re){if(W&1&&(ss$1(0,`div`,3),iC(1,ne,4,5,`div`,4,oC),Bu()),W&2){let F=hC();Uh$1(`suiInverted`,F.suiInverted)(`suiColour`,F.suiColour)(`suiAttached`,F.menuAttachment)(`suiTabular`,F.isBasic)(`suiSecondary`,F.isSecondary)(`suiPointing`,F.isPointing)(`suiText`,F.isText)(`suiBorderless`,F.isBorderless),KD(),sC(F.tabs)}}return RI({type:n,selectors:[[`sui-tabs`]],contentQueries:function(re,F,It){if(re&1&&Xh$1(It,nt,4),re&2){let Le;DC(Le=EC())&&(F.tabs=Le)}},inputs:{suiTabMenuPosition:`suiTabMenuPosition`,suiTabType:`suiTabType`,suiColour:`suiColour`,suiInverted:`suiInverted`},outputs:{suiSelectedIndexChanged:`suiSelectedIndexChanged`},decls:3,vars:1,consts:[[`tabMenu`,``],[`sui-segment`,``,1,`active`,`tab`,3,`suiAttached`],[4,`ngTemplateOutlet`],[`sui-menu`,``,3,`suiInverted`,`suiColour`,`suiAttached`,`suiTabular`,`suiSecondary`,`suiPointing`,`suiText`,`suiBorderless`],[`suiMenuItem`,``,3,`disabled`,`suiActive`],[`suiMenuItem`,``,3,`click`,`disabled`,`suiActive`],[`sui-icon`,``,3,`suiIconType`],[`sui-label`,``,3,`suiColour`,`suiCircular`]],template:function(re,F){re&1&&(eC(0,O,4,6),Ph(1,dt,3,8,`ng-template`,null,0,aw)),re&2&&nC(F.hasTabs?0:-1)},dependencies:[sl$1,qw,ze,Ft,Tt$1,we,fi],encapsulation:2})})()}}return dS([ve()],n.prototype,`suiInverted`,void 0),n})();var Go=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,ot]})}}return n})();function Zp(n,u){if(n&1&&(ss$1(0,`option`,1),WC(1),Bu()),n&2){let o=u.$implicit;Uh$1(`value`,o),KD(),hg(o)}}var at=class{constructor(){this.isDefinitionsActive=!0,this.colours=[`red`,`orange`,`green`,`blue`,`violet`],this.tabColour=`blue`,this.isTabDisabled=!1}};var Jo=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-tab-basic-example`]],standalone:!1,features:[lo$1],decls:22,vars:0,consts:[[`suiTitle`,`HTML`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML`],[`suiTitle`,`CSS`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/CSS`],[`suiTitle`,`JavaScript`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/javascript`]],template:function(a,s){a&1&&(ss$1(0,`sui-tabs`)(1,`sui-tab`,0)(2,`h3`),WC(3,`HTML`),Bu(),ss$1(4,`p`),WC(5,` HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/ behavior (JavaScript). `),Bu(),ss$1(6,`a`,1),WC(7,`developer.mozilla.org`),Bu()(),ss$1(8,`sui-tab`,2)(9,`h3`),WC(10,`CSS`),Bu(),ss$1(11,`p`),WC(12,` Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. `),Bu(),ss$1(13,`a`,3),WC(14,`developer.mozilla.org`),Bu()(),ss$1(15,`sui-tab`,4)(16,`h3`),WC(17,`JavaScript`),Bu(),ss$1(18,`p`),WC(19,` JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. `),Bu(),ss$1(20,`a`,5),WC(21,`developer.mozilla.org`),Bu()()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var qo=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-tab-pointing-menu-example`]],standalone:!1,features:[lo$1],decls:7,vars:0,consts:[[`suiTabType`,`pointing`],[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(ss$1(0,`sui-tabs`,0)(1,`sui-tab`,1),WC(2,` Circle `),Bu(),ss$1(3,`sui-tab`,2),WC(4,` Box `),Bu(),ss$1(5,`sui-tab`,3),WC(6,` Triangle `),Bu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var Zo=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-tab-text-menu-example`]],standalone:!1,features:[lo$1],decls:7,vars:0,consts:[[`suiTabType`,`text`],[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(ss$1(0,`sui-tabs`,0)(1,`sui-tab`,1),WC(2,` Circle `),Bu(),ss$1(3,`sui-tab`,2),WC(4,` Box `),Bu(),ss$1(5,`sui-tab`,3),WC(6,` Triangle `),Bu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var Ko=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-tab-loading-example`]],standalone:!1,features:[lo$1],decls:7,vars:0,consts:[[`suiLoading`,``,`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(ss$1(0,`sui-tabs`)(1,`sui-tab`,0),WC(2,` Circle `),Bu(),ss$1(3,`sui-tab`,1),WC(4,` Box `),Bu(),ss$1(5,`sui-tab`,2),WC(6,` Triangle `),Bu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var Qo=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-tab-disabled-example`]],standalone:!1,features:[lo$1],decls:7,vars:0,consts:[[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`disabled`,``,`suiTitle`,`Secret Triangle`]],template:function(a,s){a&1&&(ss$1(0,`sui-tabs`)(1,`sui-tab`,0),WC(2,` Circle `),Bu(),ss$1(3,`sui-tab`,1),WC(4,` Box `),Bu(),ss$1(5,`sui-tab`,2),WC(6,` Triangle `),Bu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var ea=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-tab-positioned-example`]],standalone:!1,features:[lo$1],decls:7,vars:0,consts:[[`suiTabType`,`secondary`,`suiTabMenuPosition`,`bottom`],[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(ss$1(0,`sui-tabs`,0)(1,`sui-tab`,1),WC(2,` Circle `),Bu(),ss$1(3,`sui-tab`,2),WC(4,` Box `),Bu(),ss$1(5,`sui-tab`,3),WC(6,` Triangle `),Bu()())},dependencies:[nt,ot],encapsulation:2,changeDetection:1})}}return n})();var ta=(()=>{class n extends at{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-tab-coloured-example`]],standalone:!1,features:[lo$1],decls:10,vars:2,consts:[[`name`,`tab-colour`,3,`ngModelChange`,`ngModel`],[3,`value`],[`suiTabType`,`pointing`,3,`suiColour`],[`suiTitle`,`Circle`],[`suiTitle`,`Box`],[`suiTitle`,`Triangle`]],template:function(a,s){a&1&&(ss$1(0,`select`,0),BE(),vg(`ngModelChange`,function(m){return YC(s.tabColour,m)||(s.tabColour=m),m}),iC(1,Zp,2,2,`option`,1,oC),Bu(),ss$1(3,`sui-tabs`,2)(4,`sui-tab`,3),WC(5,` Circle `),Bu(),ss$1(6,`sui-tab`,4),WC(7,` Box `),Bu(),ss$1(8,`sui-tab`,5),WC(9,` Triangle `),Bu()()),a&2&&(yg(`ngModel`,s.tabColour),$E(),KD(),sC(s.colours),KD(2),Uh$1(`suiColour`,s.tabColour))},dependencies:[hi,fi$1,Tt$2,li,An$1,nt,ot],encapsulation:2,changeDetection:1})}}return n})();function Qp(n,u){n&1&&Gh$1(0,`doc-tab-basic-example`)}function eu(n,u){n&1&&Gh$1(0,`doc-tab-pointing-menu-example`)}function tu(n,u){n&1&&Gh$1(0,`doc-tab-text-menu-example`)}function iu(n,u){n&1&&Gh$1(0,`doc-tab-loading-example`)}function nu(n,u){n&1&&Gh$1(0,`doc-tab-disabled-example`)}function ou(n,u){n&1&&Gh$1(0,`doc-tab-positioned-example`)}function au(n,u){n&1&&Gh$1(0,`doc-tab-coloured-example`)}function su(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Type`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Tab`),Bu(),ss$1(6,`p`),WC(7,`A basic tab`),Bu(),Ph(8,Qp,1,0,`ng-template`,5),Bu(),ss$1(9,`doc-code-sample`,3)(10,`h3`,4),WC(11,`Pointing Menu`),Bu(),ss$1(12,`p`),WC(13,`A tab menu can point to its tab panes`),Bu(),Ph(14,eu,1,0,`ng-template`,5),Bu(),ss$1(15,`doc-code-sample`,3)(16,`h3`,4),WC(17,`Text Menu`),Bu(),ss$1(18,`p`),WC(19,`A tab menu can be formatted for text content`),Bu(),Ph(20,tu,1,0,`ng-template`,5),Bu(),Gh$1(21,`br`),ss$1(22,`h2`,2),WC(23,`States`),Bu(),ss$1(24,`doc-code-sample`,3)(25,`h3`,4),WC(26,`Loading`),Bu(),ss$1(27,`p`),WC(28,`A tab can display a loading indicator.`),Bu(),Ph(29,iu,1,0,`ng-template`,5),Bu(),ss$1(30,`doc-code-sample`,3)(31,`h3`,4),WC(32,`Disabled`),Bu(),ss$1(33,`p`),WC(34,`A tab can be disabled`),Bu(),Ph(35,nu,1,0,`ng-template`,5),Bu(),Gh$1(36,`br`),ss$1(37,`h2`,2),WC(38,`Menu Variations`),Bu(),ss$1(39,`doc-code-sample`,3)(40,`h3`,4),WC(41,`Position`),Bu(),ss$1(42,`p`),WC(43,`A tab can be positioned.`),Bu(),Ph(44,ou,1,0,`ng-template`,5),Bu(),ss$1(45,`doc-code-sample`,3)(46,`h3`,4),WC(47,`Coloured`),Bu(),ss$1(48,`p`),WC(49,`A tab can be coloured.`),Bu(),Ph(50,au,1,0,`ng-template`,5),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetBasic),KD(6),Uh$1(`templateCode`,o.snippetPointing),KD(6),Uh$1(`templateCode`,o.snippetText),KD(9),Uh$1(`templateCode`,o.snippetLoading),KD(6),Uh$1(`templateCode`,o.snippetDisabled),KD(9),Uh$1(`templateCode`,o.snippetPositioned),KD(6),Uh$1(`templateCode`,o.snippetColoured)}}function ru(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-tabs`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiTabMenuPosition`),Bu(),ss$1(20,`td`),WC(21,`Specifies the menu position. Allowed values could be `),ss$1(22,`span`,7),WC(23,`'top'`),Bu(),WC(24,` | `),ss$1(25,`span`,7),WC(26,`'bottom'`),Bu()(),ss$1(27,`td`)(28,`div`,8),WC(29,`string`),Bu()(),ss$1(30,`td`)(31,`div`,9),WC(32,`top`),Bu()()(),ss$1(33,`tr`)(34,`td`),WC(35,`suiTabType`),Bu(),ss$1(36,`td`),WC(37,` Determine the styling for the tab menu. Allowed values could be `),ss$1(38,`span`,7),WC(39,`'basic'`),Bu(),WC(40,` | `),ss$1(41,`span`,7),WC(42,`'pointing'`),Bu(),WC(43,` | `),ss$1(44,`span`,7),WC(45,`'secondary'`),Bu(),WC(46,` | `),ss$1(47,`span`,7),WC(48,`'text'`),Bu(),WC(49,` | `),ss$1(50,`span`,7),WC(51,`null`),Bu()(),ss$1(52,`td`)(53,`div`,8),WC(54,`string`),Bu()(),ss$1(55,`td`)(56,`div`,9),WC(57,`basic`),Bu()()(),ss$1(58,`tr`)(59,`td`),WC(60,`suiColour`),Bu(),ss$1(61,`td`),WC(62,`Set the menu colour. Allowed values could be `),ss$1(63,`span`,7),WC(64,`'red'`),Bu(),WC(65,` | `),ss$1(66,`span`,7),WC(67,`'orange'`),Bu(),WC(68,` | `),ss$1(69,`span`,7),WC(70,`'yellow'`),Bu(),WC(71,` | `),ss$1(72,`span`,7),WC(73,`'olive'`),Bu(),WC(74,` | `),ss$1(75,`span`,7),WC(76,`'green'`),Bu(),WC(77,` | `),ss$1(78,`span`,7),WC(79,`'teal'`),Bu(),WC(80,` | `),ss$1(81,`span`,7),WC(82,`'blue'`),Bu(),WC(83,` | `),ss$1(84,`span`,7),WC(85,`'violet'`),Bu(),WC(86,` | `),ss$1(87,`span`,7),WC(88,`'purple'`),Bu(),WC(89,` | `),ss$1(90,`span`,7),WC(91,`'pink'`),Bu(),WC(92,` | `),ss$1(93,`span`,7),WC(94,`'brown'`),Bu(),WC(95,` | `),ss$1(96,`span`,7),WC(97,`'grey'`),Bu(),WC(98,` | `),ss$1(99,`span`,7),WC(100,`'black'`),Bu(),WC(101,` | `),ss$1(102,`span`,7),WC(103,`null`),Bu()(),ss$1(104,`td`)(105,`div`,8),WC(106,` string `),Bu()(),ss$1(107,`td`)(108,`div`,9),WC(109,` null `),Bu()()()()(),ss$1(110,`h4`,4),WC(111,`Events`),Bu(),ss$1(112,`table`,6)(113,`thead`)(114,`tr`)(115,`th`),WC(116,`Event`),Bu(),ss$1(117,`th`),WC(118,`Description`),Bu(),ss$1(119,`th`),WC(120,`Type`),Bu()()(),ss$1(121,`tbody`)(122,`tr`)(123,`td`),WC(124,`suiSelectedIndexChanged`),Bu(),ss$1(125,`td`),WC(126,`Fires when the selected tab is changed. Index starts from 0.`),Bu(),ss$1(127,`td`)(128,`div`,8),WC(129,`number`),Bu()()()()(),ss$1(130,`h2`,2),WC(131,`sui-tab`),Bu(),ss$1(132,`h4`,4),WC(133,`Properties`),Bu(),ss$1(134,`table`,6)(135,`thead`)(136,`tr`)(137,`th`),WC(138,`Property`),Bu(),ss$1(139,`th`),WC(140,`Description`),Bu(),ss$1(141,`th`),WC(142,`Type`),Bu(),ss$1(143,`th`),WC(144,`Default`),Bu()()(),ss$1(145,`tbody`)(146,`tr`)(147,`td`),WC(148,`suiTitle`),Bu(),ss$1(149,`td`),WC(150,`Set the tab title`),Bu(),ss$1(151,`td`)(152,`div`,8),WC(153,`string`),Bu()(),ss$1(154,`td`)(155,`div`,9),WC(156,`null`),Bu()()(),ss$1(157,`tr`)(158,`td`),WC(159,`suiIcon`),Bu(),ss$1(160,`td`),WC(161,`Set the tab icon`),Bu(),ss$1(162,`td`)(163,`div`,8),WC(164,`string`),Bu()(),ss$1(165,`td`)(166,`div`,9),WC(167,`null`),Bu()()(),ss$1(168,`tr`)(169,`td`),WC(170,`suiLoading`),Bu(),ss$1(171,`td`),WC(172,`Show the loading icon`),Bu(),ss$1(173,`td`)(174,`div`,8),WC(175,` boolean `),Bu()(),ss$1(176,`td`)(177,`div`,9),WC(178,` false `),Bu()()(),ss$1(179,`tr`)(180,`td`),WC(181,`disabled`),Bu(),ss$1(182,`td`),WC(183,`Prevent the tab from being activated`),Bu(),ss$1(184,`td`)(185,`div`,8),WC(186,` boolean `),Bu()(),ss$1(187,`td`)(188,`div`,9),WC(189,` false `),Bu()()()()()())}var ia=(()=>{class n{constructor(o){this.snippetBasic=Ro,this.snippetPointing=zo,this.snippetText=jo,this.snippetLoading=No,this.snippetDisabled=Uo,this.snippetPositioned=$o,this.snippetColoured=Yo,this.isDefinitionsActive=!0,this.colours=[`red`,`orange`,`green`,`blue`,`violet`],this.tabColour=`blue`,this.isTabDisabled=!1,o.setTitle(`Tab | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-tab`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Tab`,`subHeader`,`A tab is a hidden section of content activated by a menu`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,su,51,7,`div`,1)(2,ru,190,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Jo,qo,Zo,Ko,Qo,ea,ta],styles:[`select[_ngcontent-%COMP%]{margin-bottom:1rem}`],changeDetection:1})}}return n})();var na=`<sui-accordion>
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
`;var oa=`<sui-accordion suiStyled>
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
`;var aa=`<sui-accordion suiStyled suiFluid>
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
`;var sa=`<div sui-segment suiInverted>
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
`;var Nt=(()=>{class n{constructor(){this.suiTitle=``,this.disabled=!1,this.isOpenChange=new nt$1,this._isOpen=!1}get isOpen(){return this._isOpen}set isOpen(o){this.disabled||(this._isOpen=o,this.isOpenChange.emit(o))}toggle(){this.isOpen=!this.isOpen}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){return RI({type:n,selectors:[[`sui-accordion-panel`]],inputs:{suiTitle:`suiTitle`,disabled:`disabled`,isOpen:`isOpen`},outputs:{isOpenChange:`isOpenChange`},ngContentSelectors:[`*`],decls:5,vars:5,consts:[[1,`title`,3,`click`],[`sui-icon`,``,`suiIconType`,`dropdown`],[1,`content`]],template:function(s,p){s&1&&(mC(),ss$1(0,`div`,0),Qh$1(`click`,function(){return p.toggle()}),Gh$1(1,`i`,1),WC(2),Bu(),ss$1(3,`div`,2),yC(4),Bu()),s&2&&(go$1(`active`,p.isOpen),KD(2),zu$1(` `,p.suiTitle,` `),KD(),go$1(`active`,p.isOpen))},dependencies:[we],encapsulation:2,changeDetection:1})})()}}return dS([ve()],n.prototype,`disabled`,void 0),dS([ve()],n.prototype,`isOpen`,null),n})();var Ut=(()=>{class n{constructor(){this.suiStyled=!1,this.suiFluid=!1,this.suiInverted=!1,this.suiCloseOthers=!0}get classes(){return[`ui`,J.getPropClass(this.suiFluid,`fluid`),J.getPropClass(this.suiStyled,`styled`),J.getPropClass(this.suiInverted,`inverted`),`accordion`].join(` `)}ngAfterContentInit(){this.suiCloseOthers&&this.panels.forEach((o,a)=>o.isOpenChange.subscribe(s=>{s&&this.panels.forEach((p,m)=>{a!==m&&(p.isOpen=!1)})}))}ngOnDestroy(){this.panels.forEach(o=>o.isOpenChange.unsubscribe())}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){return RI({type:n,selectors:[[`sui-accordion`]],contentQueries:function(s,p,m){if(s&1&&Xh$1(m,Nt,4),s&2){let v;DC(v=EC())&&(p.panels=v)}},inputs:{suiStyled:`suiStyled`,suiFluid:`suiFluid`,suiInverted:`suiInverted`,suiCloseOthers:`suiCloseOthers`},ngContentSelectors:[`*`],decls:2,vars:1,consts:[[3,`ngClass`]],template:function(s,p){s&1&&(mC(),ss$1(0,`div`,0),yC(1),Bu()),s&2&&Uh$1(`ngClass`,p.classes)},dependencies:[sl$1,zw],encapsulation:2,changeDetection:1})})()}}return dS([ve()],n.prototype,`suiStyled`,void 0),dS([ve()],n.prototype,`suiFluid`,void 0),dS([ve()],n.prototype,`suiInverted`,void 0),dS([ve()],n.prototype,`suiCloseOthers`,void 0),n})();var ra=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,Ut]})}}return n})();var la=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-accordion-standard-example`]],standalone:!1,decls:12,vars:0,consts:[[`isOpen`,``,`suiTitle`,`What is a dog?`],[`suiTitle`,`What kinds of dogs are there?`],[`suiTitle`,`How do you acquire a dog?`]],template:function(a,s){a&1&&(ss$1(0,`sui-accordion`)(1,`sui-accordion-panel`,0)(2,`p`),WC(3,`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`),Bu()(),ss$1(4,`sui-accordion-panel`,1)(5,`p`),WC(6,`There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`),Bu()(),ss$1(7,`sui-accordion-panel`,2)(8,`p`),WC(9,`Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.`),Bu(),ss$1(10,`p`),WC(11,`A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.`),Bu()()())},dependencies:[Ut,Nt],encapsulation:2,changeDetection:1})}}return n})();var da=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-accordion-styled-example`]],standalone:!1,decls:12,vars:0,consts:[[`suiStyled`,``],[`suiTitle`,`What is a dog?`],[`suiTitle`,`What kinds of dogs are there?`],[`suiTitle`,`How do you acquire a dog?`]],template:function(a,s){a&1&&(ss$1(0,`sui-accordion`,0)(1,`sui-accordion-panel`,1)(2,`p`),WC(3,`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`),Bu()(),ss$1(4,`sui-accordion-panel`,2)(5,`p`),WC(6,`There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`),Bu()(),ss$1(7,`sui-accordion-panel`,3)(8,`p`),WC(9,`Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.`),Bu(),ss$1(10,`p`),WC(11,`A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.`),Bu()()())},dependencies:[Ut,Nt],encapsulation:2,changeDetection:1})}}return n})();var ma=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-accordion-styled-fluid-example`]],standalone:!1,decls:12,vars:0,consts:[[`suiStyled`,``,`suiFluid`,``],[`suiTitle`,`What is a dog?`],[`suiTitle`,`What kinds of dogs are there?`],[`suiTitle`,`How do you acquire a dog?`]],template:function(a,s){a&1&&(ss$1(0,`sui-accordion`,0)(1,`sui-accordion-panel`,1)(2,`p`),WC(3,`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`),Bu()(),ss$1(4,`sui-accordion-panel`,2)(5,`p`),WC(6,`There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`),Bu()(),ss$1(7,`sui-accordion-panel`,3)(8,`p`),WC(9,`Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.`),Bu(),ss$1(10,`p`),WC(11,`A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.`),Bu()()())},dependencies:[Ut,Nt],encapsulation:2,changeDetection:1})}}return n})();var pa=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-accordion-inverted-example`]],standalone:!1,decls:13,vars:0,consts:[[`sui-segment`,``,`suiInverted`,``],[`suiInverted`,``],[`suiTitle`,`What is a dog?`],[`suiTitle`,`What kinds of dogs are there?`],[`suiTitle`,`How do you acquire a dog?`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`sui-accordion`,1)(2,`sui-accordion-panel`,2)(3,`p`),WC(4,`A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`),Bu()(),ss$1(5,`sui-accordion-panel`,3)(6,`p`),WC(7,`There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`),Bu()(),ss$1(8,`sui-accordion-panel`,4)(9,`p`),WC(10,`Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.`),Bu(),ss$1(11,`p`),WC(12,`A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.`),Bu()()()())},dependencies:[ze,Ut,Nt],encapsulation:2,changeDetection:1})}}return n})();function hu(n,u){n&1&&Gh$1(0,`doc-accordion-standard-example`)}function gu(n,u){n&1&&Gh$1(0,`doc-accordion-styled-example`)}function fu(n,u){n&1&&Gh$1(0,`doc-accordion-styled-fluid-example`)}function Su(n,u){n&1&&Gh$1(0,`doc-accordion-inverted-example`)}function vu(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Accordion`),Bu(),ss$1(6,`p`),WC(7,`A standard accordion`),Bu(),Ph(8,hu,1,0,`ng-template`,5),Bu(),ss$1(9,`doc-code-sample`,3)(10,`h3`,4),WC(11,`Styled`),Bu(),ss$1(12,`p`),WC(13,`A styled accordion adds basic formatting`),Bu(),Ph(14,gu,1,0,`ng-template`,5),Bu(),ss$1(15,`h2`,2),WC(16,`Variations`),Bu(),ss$1(17,`doc-code-sample`,3)(18,`h3`,4),WC(19,`Fluid`),Bu(),ss$1(20,`p`),WC(21,`An accordion can take up the width of its container`),Bu(),Ph(22,fu,1,0,`ng-template`,5),Bu(),ss$1(23,`doc-code-sample`,3)(24,`h3`,4),WC(25,`Inverted`),Bu(),ss$1(26,`p`),WC(27,`An accordion can be formatted to appear on dark backgrounds`),Bu(),Ph(28,Su,1,0,`ng-template`,5),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetStandard),KD(6),Uh$1(`templateCode`,o.snippetStyled),KD(8),Uh$1(`templateCode`,o.snippetStyledFluid),KD(6),Uh$1(`templateCode`,o.snippetInverted)}}function xu(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-accordion`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiStyled`),Bu(),ss$1(20,`td`),WC(21,` Determines if the styled variation of the accordion is rendered `),Bu(),ss$1(22,`td`)(23,`div`,7),WC(24,`boolean`),Bu()(),ss$1(25,`td`)(26,`div`,8),WC(27,`false`),Bu()()(),ss$1(28,`tr`)(29,`td`),WC(30,`suiFluid`),Bu(),ss$1(31,`td`),WC(32,` Determines if the styled variation of the accordion is rendered `),Bu(),ss$1(33,`td`)(34,`div`,7),WC(35,`boolean`),Bu()(),ss$1(36,`td`)(37,`div`,8),WC(38,`false`),Bu()()(),ss$1(39,`tr`)(40,`td`),WC(41,`suiFluid`),Bu(),ss$1(42,`td`),WC(43,` Determines if the styled variation of the accordion is rendered `),Bu(),ss$1(44,`td`)(45,`div`,7),WC(46,`boolean`),Bu()(),ss$1(47,`td`)(48,`div`,8),WC(49,`false`),Bu()()(),ss$1(50,`tr`)(51,`td`),WC(52,`suiInverted`),Bu(),ss$1(53,`td`),WC(54,`Determine if the accordion should invert it's colours`),Bu(),ss$1(55,`td`)(56,`div`,7),WC(57,`boolean `),Bu()(),ss$1(58,`td`)(59,`div`,8),WC(60,`false `),Bu()()(),ss$1(61,`tr`)(62,`td`),WC(63,`suiCloseOthers`),Bu(),ss$1(64,`td`),WC(65,`Determines if the accordion should close other open panels when a panel is open`),Bu(),ss$1(66,`td`)(67,`div`,7),WC(68,`boolean `),Bu()(),ss$1(69,`td`)(70,`div`,8),WC(71,`true `),Bu()()()()(),ss$1(72,`h2`,2),WC(73,`sui-accordion-panel`),Bu(),ss$1(74,`h4`,4),WC(75,`Properties`),Bu(),ss$1(76,`table`,6)(77,`thead`)(78,`tr`)(79,`th`),WC(80,`Property`),Bu(),ss$1(81,`th`),WC(82,`Description`),Bu(),ss$1(83,`th`),WC(84,`Type`),Bu(),ss$1(85,`th`),WC(86,`Default`),Bu()()(),ss$1(87,`tbody`)(88,`tr`)(89,`td`),WC(90,`suiTitle`),Bu(),ss$1(91,`td`),WC(92,` What title the accordion panel should gave `),Bu(),ss$1(93,`td`)(94,`div`,7),WC(95,`string`),Bu()(),Gh$1(96,`td`),Bu(),ss$1(97,`tr`)(98,`td`),WC(99,`disabled`),Bu(),ss$1(100,`td`),WC(101,` Determines if a panel should be disabled meaning it cannot be interacted with `),Bu(),ss$1(102,`td`)(103,`div`,7),WC(104,`boolean`),Bu()(),ss$1(105,`td`)(106,`div`,8),WC(107,`false`),Bu()()(),ss$1(108,`tr`)(109,`td`),WC(110,`isOpen`),Bu(),ss$1(111,`td`),WC(112,`A bindable field to determine and notify whether a panel is open or not`),Bu(),ss$1(113,`td`)(114,`div`,7),WC(115,`boolean`),Bu()(),Gh$1(116,`td`),Bu()()()())}var ua=(()=>{class n{constructor(o){this.snippetStandard=na,this.snippetStyled=oa,this.snippetStyledFluid=aa,this.snippetInverted=sa,o.setTitle(`Accordion | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-accordion`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Accordion`,`subHeader`,`An accordion allows users to toggle the display of sections of content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,vu,29,4,`div`,1)(2,xu,117,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,la,da,ma,pa],encapsulation:2,changeDetection:1})}}return n})();var ca=`<sui-checkbox>
  Make my profile visible
</sui-checkbox>
`;var ha=`<sui-checkbox
    suiType="radio">
  Radio choice
</sui-checkbox>
`;var ga=`<div sui-form>
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
`;var fa=`inlineRadioValue: string = null;
`;var Sa=`<div sui-form>
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
`;var va=`groupedRadioValue: string = null;
`;var xa=`<sui-checkbox
    suiType="slider">
  Accept terms and conditions
</sui-checkbox>
`;var ba=`<div sui-form>
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
`;var ya=`groupedSliderValue: string = null;
`;var Ea=`<sui-checkbox
    suiType="toggle">
  Subscribe to weekly newsletter
</sui-checkbox>
`;var Ca=`<sui-checkbox
    suiReadOnly>
  Read Only
</sui-checkbox>
`;var Da=`<sui-checkbox
    [checked]="true">
  Active
</sui-checkbox>
`;var wa=`<sui-checkbox>
  Indeterminate
</sui-checkbox>
`;var _a=`<div>
  <sui-checkbox disabled>
    Disabled
  </sui-checkbox>
</div>
<div>
  <sui-checkbox disabled suiType="toggle">
    Disabled
  </sui-checkbox>
</div>
`;var Ta=`<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="slider"></sui-checkbox>
</div>
<div sui-segment suiCompact suiFloated="left floated">
  <sui-checkbox suiFitted suiType="toggle"></sui-checkbox>
</div>
`;var Ma=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-standard-example`]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(ss$1(0,`sui-checkbox`),WC(1,` Make my profile visible
`),Bu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Ia=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-basic-radio-example`]],standalone:!1,decls:2,vars:0,consts:[[`suiType`,`radio`]],template:function(a,s){a&1&&(ss$1(0,`sui-checkbox`,0),WC(1,` Radio choice
`),Bu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Pa=(()=>{class n{constructor(){this.inlineRadioValue=null}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-inline-radio-example`]],standalone:!1,decls:16,vars:4,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiInline`,``],[`suiFormField`,``],[`suiType`,`radio`,`suiValue`,`once-a-week`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`2-3-a-week`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`once-a-day`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`twice-a-day`,3,`ngModelChange`,`ngModel`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`How often do you use checkboxes?`),Bu(),ss$1(4,`div`,2)(5,`sui-checkbox`,3),BE(),vg(`ngModelChange`,function(m){return YC(s.inlineRadioValue,m)||(s.inlineRadioValue=m),m}),WC(6,` Once a week `),Bu()(),ss$1(7,`div`,2)(8,`sui-checkbox`,4),BE(),vg(`ngModelChange`,function(m){return YC(s.inlineRadioValue,m)||(s.inlineRadioValue=m),m}),WC(9,` 2-3 times a week `),Bu()(),ss$1(10,`div`,2)(11,`sui-checkbox`,5),BE(),vg(`ngModelChange`,function(m){return YC(s.inlineRadioValue,m)||(s.inlineRadioValue=m),m}),WC(12,` Once a day `),Bu()(),ss$1(13,`div`,2)(14,`sui-checkbox`,6),BE(),vg(`ngModelChange`,function(m){return YC(s.inlineRadioValue,m)||(s.inlineRadioValue=m),m}),WC(15,` Twice a day `),Bu()()()()),a&2&&(KD(5),yg(`ngModel`,s.inlineRadioValue),$E(),KD(3),yg(`ngModel`,s.inlineRadioValue),$E(),KD(3),yg(`ngModel`,s.inlineRadioValue),$E(),KD(3),yg(`ngModel`,s.inlineRadioValue),$E())},dependencies:[li,An$1,Si$1,Oi$1,Ni,P],encapsulation:2,changeDetection:1})}}return n})();var ka=(()=>{class n{constructor(){this.groupedRadioValue=null}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-grouped-radio-example`]],standalone:!1,decls:16,vars:4,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiGrouped`,``],[`suiFormField`,``],[`suiType`,`radio`,`suiValue`,`once-a-week`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`2-3-a-week`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`once-a-day`,3,`ngModelChange`,`ngModel`],[`suiType`,`radio`,`suiValue`,`twice-a-day`,3,`ngModelChange`,`ngModel`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`How often do you use checkboxes?`),Bu(),ss$1(4,`div`,2)(5,`sui-checkbox`,3),BE(),vg(`ngModelChange`,function(m){return YC(s.groupedRadioValue,m)||(s.groupedRadioValue=m),m}),WC(6,` Once a week `),Bu()(),ss$1(7,`div`,2)(8,`sui-checkbox`,4),BE(),vg(`ngModelChange`,function(m){return YC(s.groupedRadioValue,m)||(s.groupedRadioValue=m),m}),WC(9,` 2-3 times a week `),Bu()(),ss$1(10,`div`,2)(11,`sui-checkbox`,5),BE(),vg(`ngModelChange`,function(m){return YC(s.groupedRadioValue,m)||(s.groupedRadioValue=m),m}),WC(12,` Once a day `),Bu()(),ss$1(13,`div`,2)(14,`sui-checkbox`,6),BE(),vg(`ngModelChange`,function(m){return YC(s.groupedRadioValue,m)||(s.groupedRadioValue=m),m}),WC(15,` Twice a day `),Bu()()()()),a&2&&(KD(5),yg(`ngModel`,s.groupedRadioValue),$E(),KD(3),yg(`ngModel`,s.groupedRadioValue),$E(),KD(3),yg(`ngModel`,s.groupedRadioValue),$E(),KD(3),yg(`ngModel`,s.groupedRadioValue),$E())},dependencies:[li,An$1,Si$1,Oi$1,Ni,P],encapsulation:2,changeDetection:1})}}return n})();var Fa=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-basic-slider-example`]],standalone:!1,decls:2,vars:0,consts:[[`suiType`,`slider`]],template:function(a,s){a&1&&(ss$1(0,`sui-checkbox`,0),WC(1,` Accept terms and conditions
`),Bu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Aa=(()=>{class n{constructor(){this.groupedSliderValue=null}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-grouped-slider-example`]],standalone:!1,decls:16,vars:4,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiGrouped`,``],[`suiFormField`,``],[`suiType`,`slider`,`suiValue`,`20mb`,3,`ngModelChange`,`ngModel`],[`suiType`,`slider`,`suiValue`,`10mb`,3,`ngModelChange`,`ngModel`],[`suiType`,`slider`,`suiValue`,`5mb`,3,`ngModelChange`,`ngModel`],[`suiType`,`slider`,`suiValue`,`~mb`,3,`ngModelChange`,`ngModel`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Outbound Throughput`),Bu(),ss$1(4,`div`,2)(5,`sui-checkbox`,3),BE(),vg(`ngModelChange`,function(m){return YC(s.groupedSliderValue,m)||(s.groupedSliderValue=m),m}),WC(6,` 20 mbps max `),Bu()(),ss$1(7,`div`,2)(8,`sui-checkbox`,4),BE(),vg(`ngModelChange`,function(m){return YC(s.groupedSliderValue,m)||(s.groupedSliderValue=m),m}),WC(9,` 10 mbps max `),Bu()(),ss$1(10,`div`,2)(11,`sui-checkbox`,5),BE(),vg(`ngModelChange`,function(m){return YC(s.groupedSliderValue,m)||(s.groupedSliderValue=m),m}),WC(12,` 5 mbps max `),Bu()(),ss$1(13,`div`,2)(14,`sui-checkbox`,6),BE(),vg(`ngModelChange`,function(m){return YC(s.groupedSliderValue,m)||(s.groupedSliderValue=m),m}),WC(15,` Unmetered `),Bu()()()()),a&2&&(KD(5),yg(`ngModel`,s.groupedSliderValue),$E(),KD(3),yg(`ngModel`,s.groupedSliderValue),$E(),KD(3),yg(`ngModel`,s.groupedSliderValue),$E(),KD(3),yg(`ngModel`,s.groupedSliderValue),$E())},dependencies:[li,An$1,Si$1,Oi$1,Ni,P],encapsulation:2,changeDetection:1})}}return n})();var Va=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-toggle-example`]],standalone:!1,decls:2,vars:0,consts:[[`suiType`,`toggle`]],template:function(a,s){a&1&&(ss$1(0,`sui-checkbox`,0),WC(1,` Subscribe to weekly newsletter
`),Bu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Ba=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-read-only-example`]],standalone:!1,decls:2,vars:0,consts:[[`suiReadOnly`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-checkbox`,0),WC(1,` Read Only
`),Bu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Oa=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-checked-example`]],standalone:!1,decls:2,vars:1,consts:[[3,`checked`]],template:function(a,s){a&1&&(ss$1(0,`sui-checkbox`,0),WC(1,` Active
`),Bu()),a&2&&Uh$1(`checked`,!0)},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var La=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-indeterminate-example`]],standalone:!1,decls:2,vars:0,template:function(a,s){a&1&&(ss$1(0,`sui-checkbox`),WC(1,` Indeterminate
`),Bu())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Ha=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-disabled-example`]],standalone:!1,decls:6,vars:0,consts:[[`disabled`,``],[`disabled`,``,`suiType`,`toggle`]],template:function(a,s){a&1&&(ss$1(0,`div`)(1,`sui-checkbox`,0),WC(2,` Disabled `),Bu()(),ss$1(3,`div`)(4,`sui-checkbox`,1),WC(5,` Disabled `),Bu()())},dependencies:[P],encapsulation:2,changeDetection:1})}}return n})();var Wa=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox-fitted-example`]],standalone:!1,decls:6,vars:0,consts:[[`sui-segment`,``,`suiCompact`,``,`suiFloated`,`left floated`],[`suiFitted`,``],[`suiFitted`,``,`suiType`,`slider`],[`suiFitted`,``,`suiType`,`toggle`]],template:function(a,s){a&1&&(ss$1(0,`div`,0),Gh$1(1,`sui-checkbox`,1),Bu(),ss$1(2,`div`,0),Gh$1(3,`sui-checkbox`,2),Bu(),ss$1(4,`div`,0),Gh$1(5,`sui-checkbox`,3),Bu())},dependencies:[ze,P],encapsulation:2,changeDetection:1})}}return n})();function Hu(n,u){n&1&&Gh$1(0,`doc-checkbox-standard-example`)}function Wu(n,u){n&1&&Gh$1(0,`doc-checkbox-basic-radio-example`)}function Ru(n,u){n&1&&Gh$1(0,`doc-checkbox-inline-radio-example`)}function zu(n,u){n&1&&Gh$1(0,`doc-checkbox-grouped-radio-example`)}function ju(n,u){n&1&&Gh$1(0,`doc-checkbox-basic-slider-example`)}function Nu(n,u){n&1&&Gh$1(0,`doc-checkbox-grouped-slider-example`)}function Uu(n,u){n&1&&Gh$1(0,`doc-checkbox-toggle-example`)}function $u(n,u){n&1&&Gh$1(0,`doc-checkbox-read-only-example`)}function Yu(n,u){n&1&&Gh$1(0,`doc-checkbox-checked-example`)}function Gu(n,u){n&1&&Gh$1(0,`doc-checkbox-indeterminate-example`)}function Xu(n,u){n&1&&Gh$1(0,`doc-checkbox-disabled-example`)}function Ju(n,u){n&1&&Gh$1(0,`doc-checkbox-fitted-example`)}function qu(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Checkbox`),Bu(),ss$1(6,`p`),WC(7,`A standard checkbox`),Bu(),Ph(8,Hu,1,0,`ng-template`,5),Bu(),ss$1(9,`doc-code-sample`,3)(10,`h3`,4),WC(11,`Radio`),Bu(),ss$1(12,`p`),WC(13,`A checkbox can be formatted as a radio element. This means it is an exclusive option`),Bu(),Ph(14,Wu,1,0,`ng-template`,5),Bu(),ss$1(15,`doc-code-sample`,6),Ph(16,Ru,1,0,`ng-template`,5),Bu(),ss$1(17,`doc-code-sample`,6),Ph(18,zu,1,0,`ng-template`,5),Bu(),ss$1(19,`doc-code-sample`,3)(20,`h3`,4),WC(21,`Slider`),Bu(),ss$1(22,`p`),WC(23,`A checkbox can be formatted to emphasize the current selection state`),Bu(),Ph(24,ju,1,0,`ng-template`,5),Bu(),ss$1(25,`doc-code-sample`,6),Ph(26,Nu,1,0,`ng-template`,5),Bu(),ss$1(27,`doc-code-sample`,3)(28,`h3`,4),WC(29,`Toggle`),Bu(),ss$1(30,`p`),WC(31,`A checkbox can be formatted to show an on or off choice`),Bu(),Ph(32,Uu,1,0,`ng-template`,5),Bu(),ss$1(33,`h2`,2),WC(34,`States`),Bu(),ss$1(35,`doc-code-sample`,3)(36,`h3`,4),WC(37,`Read-only`),Bu(),ss$1(38,`p`),WC(39,`A checkbox can be read-only and unable to change states`),Bu(),Ph(40,$u,1,0,`ng-template`,5),Bu(),ss$1(41,`doc-code-sample`,3)(42,`h3`,4),WC(43,`Checked`),Bu(),ss$1(44,`p`),WC(45,`A checkbox can be checked`),Bu(),Ph(46,Yu,1,0,`ng-template`,5),Bu(),ss$1(47,`doc-code-sample`,3)(48,`h3`,4),WC(49,`Indeterminate`),Bu(),ss$1(50,`p`),WC(51,`A checkbox can be indeterminate`),Bu(),Ph(52,Gu,1,0,`ng-template`,5),Bu(),ss$1(53,`doc-code-sample`,3)(54,`h3`,4),WC(55,`Disabled`),Bu(),ss$1(56,`p`),WC(57,`A checkbox can be read-only and unable to change states`),Bu(),Ph(58,Xu,1,0,`ng-template`,5),Bu(),ss$1(59,`h2`,2),WC(60,`Variations`),Bu(),ss$1(61,`doc-code-sample`,3)(62,`h3`,4),WC(63,`Fitted`),Bu(),ss$1(64,`p`),WC(65,`A fitted checkbox does not leave padding for a label`),Bu(),Ph(66,Ju,1,0,`ng-template`,5),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetStandard),KD(6),Uh$1(`templateCode`,o.snippetBasicRadio),KD(6),Uh$1(`templateCode`,o.snippetInlineRadio)(`componentCode`,o.snippetInlineRadioTs),KD(2),Uh$1(`templateCode`,o.snippetGroupedRadio)(`componentCode`,o.snippetGroupedRadioTs),KD(2),Uh$1(`templateCode`,o.snippetBasicSlider),KD(6),Uh$1(`templateCode`,o.snippetGroupedSlider)(`componentCode`,o.snippetGroupedSliderTs),KD(2),Uh$1(`templateCode`,o.snippetToggle),KD(8),Uh$1(`templateCode`,o.snippetReadOnly),KD(6),Uh$1(`templateCode`,o.snippetChecked),KD(6),Uh$1(`templateCode`,o.snippetIndeterminate),KD(6),Uh$1(`templateCode`,o.snippetDisabled),KD(8),Uh$1(`templateCode`,o.snippetFitted)}}function Zu(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-checkbox`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiReadOnly`),Bu(),ss$1(20,`td`),WC(21,` Determines if the checkbox's state can be modified `),Bu(),ss$1(22,`td`)(23,`div`,8),WC(24,`boolean`),Bu()(),ss$1(25,`td`)(26,`div`,9),WC(27,`false`),Bu()()(),ss$1(28,`tr`)(29,`td`),WC(30,`suiFitted`),Bu(),ss$1(31,`td`),WC(32,` Determines if the fitted variation of the checkbox is rendered `),Bu(),ss$1(33,`td`)(34,`div`,8),WC(35,`boolean`),Bu()(),ss$1(36,`td`)(37,`div`,9),WC(38,`false`),Bu()()(),ss$1(39,`tr`)(40,`td`),WC(41,`disabled`),Bu(),ss$1(42,`td`),WC(43,` Determines if the checkbox is disabled `),Bu(),ss$1(44,`td`)(45,`div`,8),WC(46,`boolean`),Bu()(),ss$1(47,`td`)(48,`div`,9),WC(49,`false`),Bu()()(),ss$1(50,`tr`)(51,`td`),WC(52,`name`),Bu(),ss$1(53,`td`),WC(54,`Sets the name attribute of the checkbox. Required for form usage`),Bu(),ss$1(55,`td`)(56,`div`,8),WC(57,`string`),Bu()(),ss$1(58,`td`)(59,`div`,9),WC(60,`null`),Bu()()(),ss$1(61,`tr`)(62,`td`),WC(63,`suiValue`),Bu(),ss$1(64,`td`),WC(65,`Sets the value of the checkbox`),Bu(),ss$1(66,`td`)(67,`div`,8),WC(68,`any`),Bu()(),ss$1(69,`td`)(70,`div`,9),WC(71,`null`),Bu()()(),ss$1(72,`tr`)(73,`td`),WC(74,`[(value)]`),Bu(),ss$1(75,`td`),WC(76,`Sets and notifies you of changes to the checkbox's value`),Bu(),ss$1(77,`td`)(78,`div`,8),WC(79,`any`),Bu()(),ss$1(80,`td`)(81,`div`,9),WC(82,`null`),Bu()()(),ss$1(83,`tr`)(84,`td`),WC(85,`[(checked)]`),Bu(),ss$1(86,`td`),WC(87,`Sets and notifies you of changes to the checkbox's check state`),Bu(),ss$1(88,`td`)(89,`div`,8),WC(90,`boolean`),Bu()(),ss$1(91,`td`)(92,`div`,9),WC(93,`null`),Bu()()()()()())}var Ra=(()=>{class n{constructor(o){this.snippetStandard=ca,this.snippetBasicRadio=ha,this.snippetInlineRadio=ga,this.snippetInlineRadioTs=fa,this.snippetGroupedRadio=Sa,this.snippetGroupedRadioTs=va,this.snippetBasicSlider=xa,this.snippetGroupedSlider=ba,this.snippetGroupedSliderTs=ya,this.snippetToggle=Ea,this.snippetReadOnly=Ca,this.snippetChecked=Da,this.snippetIndeterminate=wa,this.snippetDisabled=_a,this.snippetFitted=Ta,o.setTitle(`Checkbox | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-checkbox`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Checkbox`,`subHeader`,`A checkbox allows a user to select a value from a small set of options, often binary`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`,`componentCode`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,qu,67,15,`div`,1)(2,Zu,94,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Ma,Ia,Pa,ka,Fa,Aa,Va,Ba,Oa,La,Ha,Wa],encapsulation:2,changeDetection:1})}}return n})();var za=`<sui-progress
    suiShowProgress
    [suiValue]="standardValue">
  Uploading Files
</sui-progress>
`;var ja=`<sui-progress
    suiIndicating
    suiState="active"
    [suiValue]="indicatingValue">
  {{ indicatingValue }}% Funded
</sui-progress>
`;var Na=`indicatingValue = 40;
`;var Ua=`<sui-progress
    [suiValue]="28">
</sui-progress>
`;var $a=`<sui-progress
    suiShowProgress
    [suiValue]="35">
</sui-progress>
`;var Ya=`<sui-progress
    suiState="active"
    [suiValue]="51">
  Uploading Files
</sui-progress>
`;var Ga=`<sui-progress
    suiState="success"
    [suiValue]="100">
  Everything worked, your file is all ready.
</sui-progress>
`;var Xa=`<sui-progress
    suiState="warning"
    [suiValue]="100">
  Your file didn't meet the minimum resolution requirements.
</sui-progress>
`;var Ja=`<sui-progress
    suiState="error"
    [suiValue]="100">
  There was an error.
</sui-progress>
`;var qa=`<sui-progress
    disabled
    [suiValue]="38">
</sui-progress>
`;var Za=`<div sui-segment suiInverted>
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
`;var Ka=`<div sui-segment>
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
`;var Qa=`<div sui-card>
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
`;var es=`<sui-progress
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
`;var ts=`<sui-progress
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
`;var is=`<div sui-segment suiInverted>
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
`;var ue=(()=>{class n{constructor(){this.suiAttached=null,this.suiSize=null,this.suiColour=null,this.suiState=null,this.suiIndicating=!1,this.disabled=!1,this.suiInverted=!1,this.suiShowProgress=!1,this.value=0,this.maxValue=100,this.progressPercentage=0}set suiValue(o){this.value=+o,this.calculatePercentage()}get suiValue(){return this.value}set suiMaxValue(o){this.maxValue=+o,this.calculatePercentage()}get suiMaxValue(){return this.maxValue}get classes(){return J.combineToClass([`ui`,this.suiSize??``,this.suiColour??``,this.suiAttached?`${this.suiAttached} attached`:``,J.getPropClass(this.suiIndicating,`indicating`),J.getPropClass(this.disabled,`disabled`),J.getPropClass(this.suiInverted,`inverted`),`progress`,this.suiState??``])}calculatePercentage(){this.value>this.maxValue||(this.progressPercentage=Math.ceil(this.value*100/this.maxValue))}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){let o=[`*`];function a(s,p){if(s&1&&(ss$1(0,`div`,2),WC(1),Bu()),s&2){let m=hC();KD(),zu$1(``,m.progressPercentage,`%`)}}return RI({type:n,selectors:[[`sui-progress`]],inputs:{suiAttached:`suiAttached`,suiSize:`suiSize`,suiColour:`suiColour`,suiState:`suiState`,suiIndicating:`suiIndicating`,disabled:`disabled`,suiInverted:`suiInverted`,suiShowProgress:`suiShowProgress`,suiValue:`suiValue`,suiMaxValue:`suiMaxValue`},ngContentSelectors:o,decls:5,vars:5,consts:[[3,`ngClass`],[1,`bar`],[1,`progress`],[1,`label`]],template:function(p,m){p&1&&(mC(),ss$1(0,`div`,0)(1,`div`,1),eC(2,a,2,1,`div`,2),Bu(),ss$1(3,`div`,3),yC(4),Bu()()),p&2&&(Uh$1(`ngClass`,m.classes),$h$1(`data-percent`,m.progressPercentage),KD(),ig(`width`,m.progressPercentage,`%`),KD(),nC(m.suiShowProgress?2:-1))},dependencies:[sl$1,zw],styles:[`[_nghost-%COMP%]{width:100%}`],changeDetection:1})})()}}return dS([ve()],n.prototype,`suiIndicating`,void 0),dS([ve()],n.prototype,`disabled`,void 0),dS([ve()],n.prototype,`suiInverted`,void 0),dS([ve()],n.prototype,`suiShowProgress`,void 0),n})();var ns=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[ue]})}}return n})();var ce=class{constructor(){this.standardValue=31,this.indicatingValue=40}addToStandard(u){let o=this.standardValue+u;o>100?o=100:o<0&&(o=0),this.standardValue=o}addToIndicating(u){let o=this.indicatingValue+u;o>100?o=100:o<0&&(o=0),this.indicatingValue=o}};var as=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-standard-example`]],standalone:!1,features:[lo$1],decls:2,vars:1,consts:[[`suiShowProgress`,``,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`sui-progress`,0),WC(1,` Uploading Files
`),Bu()),a&2&&Uh$1(`suiValue`,s.standardValue)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ss=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-indicating-example`]],standalone:!1,features:[lo$1],decls:2,vars:2,consts:[[`suiIndicating`,``,`suiState`,`active`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`sui-progress`,0),WC(1),Bu()),a&2&&(Uh$1(`suiValue`,s.indicatingValue),KD(),zu$1(` `,s.indicatingValue,`% Funded
`))},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var rs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-bar-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[3,`suiValue`]],template:function(a,s){a&1&&Gh$1(0,`sui-progress`,0),a&2&&Uh$1(`suiValue`,28)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ls=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-progress-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiShowProgress`,``,3,`suiValue`]],template:function(a,s){a&1&&Gh$1(0,`sui-progress`,0),a&2&&Uh$1(`suiValue`,35)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ds=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-label-example`]],standalone:!1,features:[lo$1],decls:2,vars:1,consts:[[`suiShowProgress`,``,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`sui-progress`,0),WC(1,` Uploading Files
`),Bu()),a&2&&Uh$1(`suiValue`,45)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ms=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-active-example`]],standalone:!1,features:[lo$1],decls:2,vars:1,consts:[[`suiState`,`active`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`sui-progress`,0),WC(1,` Uploading Files
`),Bu()),a&2&&Uh$1(`suiValue`,51)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var ps=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-success-example`]],standalone:!1,features:[lo$1],decls:2,vars:1,consts:[[`suiState`,`success`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`sui-progress`,0),WC(1,` Everything worked, your file is all ready.
`),Bu()),a&2&&Uh$1(`suiValue`,100)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var us=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-warning-example`]],standalone:!1,features:[lo$1],decls:2,vars:1,consts:[[`suiState`,`warning`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`sui-progress`,0),WC(1,` Your file didn't meet the minimum resolution requirements.
`),Bu()),a&2&&Uh$1(`suiValue`,100)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var cs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-error-example`]],standalone:!1,features:[lo$1],decls:2,vars:1,consts:[[`suiState`,`error`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`sui-progress`,0),WC(1,` There was an error.
`),Bu()),a&2&&Uh$1(`suiValue`,100)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var hs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-disabled-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`disabled`,``,3,`suiValue`]],template:function(a,s){a&1&&Gh$1(0,`sui-progress`,0),a&2&&Uh$1(`suiValue`,38)},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var gs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-inverted-example`]],standalone:!1,features:[lo$1],decls:9,vars:4,consts:[[`sui-segment`,``,`suiInverted`,``],[`suiInverted`,``,`suiShowProgress`,``,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiState`,`success`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiState`,`warning`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiState`,`error`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`sui-progress`,1),WC(2,` Uploading Files `),Bu(),ss$1(3,`sui-progress`,2),WC(4,` Success `),Bu(),ss$1(5,`sui-progress`,3),WC(6,` Warning `),Bu(),ss$1(7,`sui-progress`,4),WC(8,` Error `),Bu()()),a&2&&(KD(),Uh$1(`suiValue`,15),KD(2),Uh$1(`suiValue`,100),KD(2),Uh$1(`suiValue`,100),KD(2),Uh$1(`suiValue`,100))},dependencies:[ze,ue],encapsulation:2,changeDetection:1})}}return n})();var fs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-attached-example`]],standalone:!1,features:[lo$1],decls:5,vars:2,consts:[[`sui-segment`,``],[`suiAttached`,`top`,3,`suiValue`],[2,`margin`,`20px`],[`suiAttached`,`bottom`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`div`,0),Gh$1(1,`sui-progress`,1),ss$1(2,`p`,2),WC(3,`La la la la`),Bu(),Gh$1(4,`sui-progress`,3),Bu()),a&2&&(KD(),Uh$1(`suiValue`,21),KD(3),Uh$1(`suiValue`,31))},dependencies:[ze,ue],encapsulation:2,changeDetection:1})}}return n})();var Ss=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-card-attached-example`]],standalone:!1,features:[lo$1],decls:14,vars:1,consts:[[`sui-card`,``],[`suiCardImage`,``],[`src`,`/assets/images/wireframes/image.png`],[`suiCardContent`,``],[`suiCardHeader`,``],[`suiCardMeta`,``],[1,`date`],[`suiCardExtra`,``],[`sui-icon`,``,`suiIconType`,`user`],[`suiAttached`,`bottom`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`div`,1),Gh$1(2,`img`,2),Bu(),ss$1(3,`div`,3)(4,`a`,4),WC(5,`Project`),Bu(),ss$1(6,`div`,5)(7,`span`,6),WC(8,`Started in 2014`),Bu()()(),ss$1(9,`div`,7)(10,`a`),Gh$1(11,`i`,8),WC(12,` 22 Friends `),Bu()(),Gh$1(13,`sui-progress`,9),Bu()),a&2&&(KD(13),Uh$1(`suiValue`,31))},dependencies:[P$1,w,b,A,E,L,we,ue],encapsulation:2,changeDetection:1})}}return n})();var vs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-size-example`]],standalone:!1,features:[lo$1],decls:10,vars:5,consts:[[`suiSize`,`tiny`,3,`suiValue`],[`suiSize`,`small`,3,`suiValue`],[3,`suiValue`],[`suiSize`,`large`,3,`suiValue`],[`suiSize`,`big`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`sui-progress`,0),WC(1,` Tiny
`),Bu(),ss$1(2,`sui-progress`,1),WC(3,` Small
`),Bu(),ss$1(4,`sui-progress`,2),WC(5,` Standard
`),Bu(),ss$1(6,`sui-progress`,3),WC(7,` Large
`),Bu(),ss$1(8,`sui-progress`,4),WC(9,` Big
`),Bu()),a&2&&(Uh$1(`suiValue`,61),KD(2),Uh$1(`suiValue`,21),KD(2),Uh$1(`suiValue`,41),KD(2),Uh$1(`suiValue`,5),KD(2),Uh$1(`suiValue`,14))},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var xs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-colour-example`]],standalone:!1,features:[lo$1],decls:13,vars:13,consts:[[`suiColour`,`red`,3,`suiValue`],[`suiColour`,`orange`,3,`suiValue`],[`suiColour`,`yellow`,3,`suiValue`],[`suiColour`,`olive`,3,`suiValue`],[`suiColour`,`green`,3,`suiValue`],[`suiColour`,`teal`,3,`suiValue`],[`suiColour`,`blue`,3,`suiValue`],[`suiColour`,`violet`,3,`suiValue`],[`suiColour`,`purple`,3,`suiValue`],[`suiColour`,`pink`,3,`suiValue`],[`suiColour`,`brown`,3,`suiValue`],[`suiColour`,`grey`,3,`suiValue`],[`suiColour`,`black`,3,`suiValue`]],template:function(a,s){a&1&&Gh$1(0,`sui-progress`,0)(1,`sui-progress`,1)(2,`sui-progress`,2)(3,`sui-progress`,3)(4,`sui-progress`,4)(5,`sui-progress`,5)(6,`sui-progress`,6)(7,`sui-progress`,7)(8,`sui-progress`,8)(9,`sui-progress`,9)(10,`sui-progress`,10)(11,`sui-progress`,11)(12,`sui-progress`,12),a&2&&(Uh$1(`suiValue`,59),KD(),Uh$1(`suiValue`,31),KD(),Uh$1(`suiValue`,48),KD(),Uh$1(`suiValue`,35),KD(),Uh$1(`suiValue`,35),KD(),Uh$1(`suiValue`,31),KD(),Uh$1(`suiValue`,35),KD(),Uh$1(`suiValue`,18),KD(),Uh$1(`suiValue`,22),KD(),Uh$1(`suiValue`,50),KD(),Uh$1(`suiValue`,18),KD(),Uh$1(`suiValue`,56),KD(),Uh$1(`suiValue`,45))},dependencies:[ue],encapsulation:2,changeDetection:1})}}return n})();var bs=(()=>{class n extends ce{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress-inverted-colour-example`]],standalone:!1,features:[lo$1],decls:14,vars:13,consts:[[`sui-segment`,``,`suiInverted`,``],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`red`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`orange`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`yellow`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`olive`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`green`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`teal`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`blue`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`violet`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`purple`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`pink`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`brown`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`grey`,3,`suiValue`],[`suiInverted`,``,`suiShowProgress`,``,`suiColour`,`black`,3,`suiValue`]],template:function(a,s){a&1&&(ss$1(0,`div`,0),Gh$1(1,`sui-progress`,1)(2,`sui-progress`,2)(3,`sui-progress`,3)(4,`sui-progress`,4)(5,`sui-progress`,5)(6,`sui-progress`,6)(7,`sui-progress`,7)(8,`sui-progress`,8)(9,`sui-progress`,9)(10,`sui-progress`,10)(11,`sui-progress`,11)(12,`sui-progress`,12)(13,`sui-progress`,13),Bu()),a&2&&(KD(),Uh$1(`suiValue`,59),KD(),Uh$1(`suiValue`,31),KD(),Uh$1(`suiValue`,48),KD(),Uh$1(`suiValue`,35),KD(),Uh$1(`suiValue`,35),KD(),Uh$1(`suiValue`,31),KD(),Uh$1(`suiValue`,35),KD(),Uh$1(`suiValue`,18),KD(),Uh$1(`suiValue`,22),KD(),Uh$1(`suiValue`,50),KD(),Uh$1(`suiValue`,18),KD(),Uh$1(`suiValue`,56),KD(),Uh$1(`suiValue`,45))},dependencies:[ze,ue],encapsulation:2,changeDetection:1})}}return n})();function fc(n,u){n&1&&Gh$1(0,`doc-progress-standard-example`)}function Sc(n,u){n&1&&Gh$1(0,`doc-progress-indicating-example`)}function vc(n,u){n&1&&Gh$1(0,`doc-progress-bar-example`)}function xc(n,u){n&1&&Gh$1(0,`doc-progress-progress-example`)}function bc(n,u){n&1&&Gh$1(0,`doc-progress-label-example`)}function yc(n,u){n&1&&Gh$1(0,`doc-progress-active-example`)}function Ec(n,u){n&1&&Gh$1(0,`doc-progress-success-example`)}function Cc(n,u){n&1&&Gh$1(0,`doc-progress-warning-example`)}function Dc(n,u){n&1&&Gh$1(0,`doc-progress-error-example`)}function wc(n,u){n&1&&Gh$1(0,`doc-progress-disabled-example`)}function _c(n,u){n&1&&Gh$1(0,`doc-progress-inverted-example`)}function Tc(n,u){n&1&&Gh$1(0,`doc-progress-attached-example`)}function Mc(n,u){n&1&&Gh$1(0,`doc-progress-card-attached-example`)}function Ic(n,u){n&1&&Gh$1(0,`doc-progress-size-example`)}function Pc(n,u){n&1&&Gh$1(0,`doc-progress-colour-example`)}function kc(n,u){n&1&&Gh$1(0,`doc-progress-inverted-colour-example`)}function Fc(n,u){if(n&1){let o=fC();ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Standard`),Bu(),ss$1(6,`p`),WC(7,`A standard progress bar`),Bu(),Ph(8,fc,1,0,`ng-template`,5),Bu(),ss$1(9,`div`)(10,`div`,6)(11,`button`,7),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.addToStandard(-11))}),Gh$1(12,`i`,8),Bu(),ss$1(13,`button`,9),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.addToStandard(11))}),Gh$1(14,`i`,10),Bu()()(),ss$1(15,`doc-code-sample`,11)(16,`h3`,4),WC(17,`Indicating`),Bu(),ss$1(18,`p`),WC(19,`An indicating progress bar visually indicates the current level of progress of a task`),Bu(),Ph(20,Sc,1,0,`ng-template`,5),Bu(),ss$1(21,`div`)(22,`div`,6)(23,`button`,7),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.addToIndicating(-13))}),Gh$1(24,`i`,8),Bu(),ss$1(25,`button`,9),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.addToIndicating(13))}),Gh$1(26,`i`,10),Bu()()(),ss$1(27,`h2`,2),WC(28,`Content`),Bu(),ss$1(29,`doc-code-sample`,3)(30,`h3`,4),WC(31,`Bar`),Bu(),ss$1(32,`p`),WC(33,`A progress element can contain a bar visually indicating progress`),Bu(),Ph(34,vc,1,0,`ng-template`,5),Bu(),ss$1(35,`doc-code-sample`,3)(36,`h3`,4),WC(37,`Progress`),Bu(),ss$1(38,`p`),WC(39,`A progress bar can contain a text value indicating current progress`),Bu(),Ph(40,xc,1,0,`ng-template`,5),Bu(),ss$1(41,`doc-code-sample`,3)(42,`h3`,4),WC(43,`Label`),Bu(),ss$1(44,`p`),WC(45,`A progress element can contain a label`),Bu(),Ph(46,bc,1,0,`ng-template`,5),Bu(),ss$1(47,`h2`,2),WC(48,`States`),Bu(),ss$1(49,`doc-code-sample`,3)(50,`h3`,4),WC(51,`Active`),Bu(),ss$1(52,`p`),WC(53,`A progress bar can show activity`),Bu(),Ph(54,yc,1,0,`ng-template`,5),Bu(),ss$1(55,`doc-code-sample`,3)(56,`h3`,4),WC(57,`Success`),Bu(),ss$1(58,`p`),WC(59,`A progress bar can show a success state`),Bu(),Ph(60,Ec,1,0,`ng-template`,5),Bu(),ss$1(61,`doc-code-sample`,3)(62,`h3`,4),WC(63,`Warning`),Bu(),ss$1(64,`p`),WC(65,`A progress bar can show a warning state`),Bu(),Ph(66,Cc,1,0,`ng-template`,5),Bu(),ss$1(67,`doc-code-sample`,3)(68,`h3`,4),WC(69,`Error`),Bu(),ss$1(70,`p`),WC(71,`A progress bar can show an error state`),Bu(),Ph(72,Dc,1,0,`ng-template`,5),Bu(),ss$1(73,`doc-code-sample`,3)(74,`h3`,4),WC(75,`Disabled`),Bu(),ss$1(76,`p`),WC(77,`A progress bar can show an error state`),Bu(),Ph(78,wc,1,0,`ng-template`,5),Bu(),ss$1(79,`h2`,2),WC(80,`Variations`),Bu(),ss$1(81,`doc-code-sample`,3)(82,`h3`,4),WC(83,`Inverted`),Bu(),ss$1(84,`p`),WC(85,`A progress bar can have its colors inverted`),Bu(),Ph(86,_c,1,0,`ng-template`,5),Bu(),ss$1(87,`doc-code-sample`,3)(88,`h3`,4),WC(89,`Attached`),Bu(),ss$1(90,`p`),WC(91,`AA progress bar can show progress of an element`),Bu(),Ph(92,Tc,1,0,`ng-template`,5),Bu(),ss$1(93,`doc-code-sample`,3),Ph(94,Mc,1,0,`ng-template`,5),Bu(),ss$1(95,`doc-code-sample`,3)(96,`h3`,4),WC(97,`Size`),Bu(),ss$1(98,`p`),WC(99,`A progress bar can vary in size`),Bu(),ss$1(100,`div`,12),WC(101,` Some small sizes may not be able to fit an inlined label `),Bu(),Ph(102,Ic,1,0,`ng-template`,5),Bu(),ss$1(103,`doc-code-sample`,3)(104,`h3`,4),WC(105,`Colours`),Bu(),ss$1(106,`p`),WC(107,`Can have different colours`),Bu(),Ph(108,Pc,1,0,`ng-template`,5),Bu(),ss$1(109,`doc-code-sample`,3)(110,`h3`,4),WC(111,`Inverted Colours`),Bu(),ss$1(112,`p`),WC(113,`These colors can also be inverted for improved contrast on dark backgrounds`),Bu(),Ph(114,kc,1,0,`ng-template`,5),Bu()()}if(n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetStandard),KD(12),Uh$1(`templateCode`,o.snippetIndicating)(`componentCode`,o.snippetIndicatingTs),KD(14),Uh$1(`templateCode`,o.snippetBar),KD(6),Uh$1(`templateCode`,o.snippetProgress),KD(6),Uh$1(`templateCode`,o.snippetStandard),KD(8),Uh$1(`templateCode`,o.snippetActive),KD(6),Uh$1(`templateCode`,o.snippetSuccess),KD(6),Uh$1(`templateCode`,o.snippetWarning),KD(6),Uh$1(`templateCode`,o.snippetError),KD(6),Uh$1(`templateCode`,o.snippetDisabled),KD(8),Uh$1(`templateCode`,o.snippetInverted),KD(6),Uh$1(`templateCode`,o.snippetAttached),KD(6),Uh$1(`templateCode`,o.snippetCardAttached),KD(2),Uh$1(`templateCode`,o.snippetSize),KD(8),Uh$1(`templateCode`,o.snippetColour),KD(6),Uh$1(`templateCode`,o.snippetInvertedColour)}}function Ac(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-progress`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,13)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiColour`),Bu(),ss$1(20,`td`),WC(21,`Set the progress colour. Allowed values could be `),ss$1(22,`span`,14),WC(23,`'red'`),Bu(),WC(24,` | `),ss$1(25,`span`,14),WC(26,`'orange'`),Bu(),WC(27,` | `),ss$1(28,`span`,14),WC(29,`'yellow'`),Bu(),WC(30,` | `),ss$1(31,`span`,14),WC(32,`'olive'`),Bu(),WC(33,` | `),ss$1(34,`span`,14),WC(35,`'green'`),Bu(),WC(36,` | `),ss$1(37,`span`,14),WC(38,`'teal'`),Bu(),WC(39,` | `),ss$1(40,`span`,14),WC(41,`'blue'`),Bu(),WC(42,` | `),ss$1(43,`span`,14),WC(44,`'violet'`),Bu(),WC(45,` | `),ss$1(46,`span`,14),WC(47,`'purple'`),Bu(),WC(48,` | `),ss$1(49,`span`,14),WC(50,`'pink'`),Bu(),WC(51,` | `),ss$1(52,`span`,14),WC(53,`'brown'`),Bu(),WC(54,` | `),ss$1(55,`span`,14),WC(56,`'grey'`),Bu(),WC(57,` | `),ss$1(58,`span`,14),WC(59,`'black'`),Bu(),WC(60,` | `),ss$1(61,`span`,14),WC(62,`null`),Bu()(),ss$1(63,`td`)(64,`div`,15),WC(65,` string `),Bu()(),ss$1(66,`td`)(67,`div`,16),WC(68,` null `),Bu()()(),ss$1(69,`tr`)(70,`td`),WC(71,`suiSize`),Bu(),ss$1(72,`td`),WC(73,`Set the progress size. Allowed values could be `),ss$1(74,`span`,14),WC(75,`'mini'`),Bu(),WC(76,` | `),ss$1(77,`span`,14),WC(78,`'tiny'`),Bu(),WC(79,` | `),ss$1(80,`span`,14),WC(81,`'small'`),Bu(),WC(82,` | `),ss$1(83,`span`,14),WC(84,`'medium'`),Bu(),WC(85,` | `),ss$1(86,`span`,14),WC(87,`'big'`),Bu(),WC(88,` | `),ss$1(89,`span`,14),WC(90,`'huge'`),Bu(),WC(91,` | `),ss$1(92,`span`,14),WC(93,`'massive'`),Bu(),WC(94,` | `),ss$1(95,`span`,14),WC(96,`null`),Bu()(),ss$1(97,`td`)(98,`div`,15),WC(99,` string `),Bu()(),ss$1(100,`td`)(101,`div`,16),WC(102,` null `),Bu()()(),ss$1(103,`tr`)(104,`td`),WC(105,`suiState`),Bu(),ss$1(106,`td`),WC(107,` Determines the progress' state. Allowed values could be `),ss$1(108,`span`,14),WC(109,`'active'`),Bu(),WC(110,` | `),ss$1(111,`span`,14),WC(112,`'success'`),Bu(),WC(113,` | `),ss$1(114,`span`,14),WC(115,`'warning'`),Bu(),WC(116,` | `),ss$1(117,`span`,14),WC(118,`'error'`),Bu(),WC(119,` | `),ss$1(120,`span`,14),WC(121,`null`),Bu()(),ss$1(122,`td`)(123,`div`,15),WC(124,`string`),Bu()(),ss$1(125,`td`)(126,`div`,16),WC(127,`null`),Bu()()(),ss$1(128,`tr`)(129,`td`),WC(130,`suiAttached`),Bu(),ss$1(131,`td`),WC(132,` Determines the progress' attachment position. Allowed values could be `),ss$1(133,`span`,14),WC(134,`'bottom'`),Bu(),WC(135,` | `),ss$1(136,`span`,14),WC(137,`'top'`),Bu(),WC(138,` | `),ss$1(139,`span`,14),WC(140,`null`),Bu()(),ss$1(141,`td`)(142,`div`,15),WC(143,`string`),Bu()(),ss$1(144,`td`)(145,`div`,16),WC(146,`null`),Bu()()(),ss$1(147,`tr`)(148,`td`),WC(149,`suiIndicating`),Bu(),ss$1(150,`td`),WC(151,` Determines if the progress is indicating `),Bu(),ss$1(152,`td`)(153,`div`,15),WC(154,`boolean`),Bu()(),ss$1(155,`td`)(156,`div`,16),WC(157,`false`),Bu()()(),ss$1(158,`tr`)(159,`td`),WC(160,`disabled`),Bu(),ss$1(161,`td`),WC(162,` Determines if the progress is disabled `),Bu(),ss$1(163,`td`)(164,`div`,15),WC(165,`boolean`),Bu()(),ss$1(166,`td`)(167,`div`,16),WC(168,`false`),Bu()()(),ss$1(169,`tr`)(170,`td`),WC(171,`suiInverted`),Bu(),ss$1(172,`td`),WC(173,`Determines whether the progress bar uses inverted colours`),Bu(),ss$1(174,`td`)(175,`div`,15),WC(176,`boolean`),Bu()(),ss$1(177,`td`)(178,`div`,16),WC(179,`false`),Bu()()(),ss$1(180,`tr`)(181,`td`),WC(182,`suiShowProgress`),Bu(),ss$1(183,`td`),WC(184,`Determines whether the progress percentage is displayed`),Bu(),ss$1(185,`td`)(186,`div`,15),WC(187,`boolean`),Bu()(),ss$1(188,`td`)(189,`div`,16),WC(190,`false`),Bu()()()()()())}var ys=(()=>{class n{constructor(o){this.snippetStandard=za,this.snippetIndicating=ja,this.snippetIndicatingTs=Na,this.snippetBar=Ua,this.snippetProgress=$a,this.snippetActive=Ya,this.snippetSuccess=Ga,this.snippetWarning=Xa,this.snippetError=Ja,this.snippetDisabled=qa,this.snippetInverted=Za,this.snippetAttached=Ka,this.snippetCardAttached=Qa,this.snippetSize=es,this.snippetColour=ts,this.snippetInvertedColour=is,this.standardValue=31,this.indicatingValue=40,o.setTitle(`Progress | Ngx Semantic`)}addToStandard(o){let a=this.standardValue+o;a>100?a=100:a<0&&(a=0),this.standardValue=a}addToIndicating(o){let a=this.indicatingValue+o;a>100?a=100:a<0&&(a=0),this.indicatingValue=a}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-progress`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Progress`,`subHeader`,`A progress bar shows the progression of a task`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-buttons`,``],[`sui-button`,``,`suiIcon`,``,`suiBasic`,``,`suiColour`,`red`,3,`click`],[`sui-icon`,``,`suiIconType`,`minus`],[`sui-button`,``,`suiIcon`,``,`suiBasic`,``,`suiColour`,`green`,3,`click`],[`sui-icon`,``,`suiIconType`,`plus`],[3,`templateCode`,`componentCode`],[`sui-message`,``,`suiState`,`info`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,Fc,115,17,`div`,1)(2,Ac,191,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Ii,Di,we,li$1,as,ss,rs,ls,ds,ms,ps,us,cs,hs,gs,fs,Ss,vs,xs,bs],encapsulation:2,changeDetection:1})}}return n})();var Es=`<button sui-button suiIcon
        sui-popup suiPopupContent="Add users to your feed">
  <i sui-icon suiIconType="add"></i>
</button>
`;var Cs=`<img sui-image suiAvatar
     sui-popup suiPopupTitle="Elliot Fu" suiPopupContent="Elliot has been a member since July 2012"
     src="/assets/images/elliot.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Stevie Feliciano" suiPopupContent="Stevie has been a member since August 2013"
     src="/assets/images/stevie.jpg"/>
<img sui-image suiAvatar
     sui-popup suiPopupTitle="Matt" suiPopupContent="Matt has been a member since July 2014"
     src="/assets/images/matt.jpg"/>
`;var Ds=`<div sui-card
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
`;var ws=`<button sui-button suiIcon
        sui-popup suiPopupBasic suiPopupContent="The default theme's basic popup removes the pointing arrow.">
  <i sui-icon suiIconType="add"></i>
</button>
`;var _s=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="wide"
   suiPopupContent="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupWidth="very wide"
   suiPopupContent="Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
`;var Ts=`<div sui-button
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
`;var Ms=`<i sui-icon suiCircular suiLink suiIconType="heart"
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
`;var Is=`<div sui-button
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
`;var Ps=`<i sui-icon suiCircular suiLink suiIconType="heart"
   sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup"></i>
<button sui-button suiIcon
        sui-popup suiPopupInverted suiPopupContent="Hello. This is an inverted popup">
  <i sui-icon suiIconType="add"></i>
</button>
`;var ks=`<i sui-icon suiCircular suiColour="red" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="bottom left" suiPopupContent="This is a bottom left popup"></i>
<i sui-icon suiCircular suiColour="teal" suiSize="big" suiIconType="heart"
   sui-popup suiPopupPlacement="top right" suiPopupContent="This is a top right popup"></i>
`;function Uc(n,u){n&1&&Gh$1(0,`sui-rating`,12)}function $c(n,u){n&1&&(ss$1(0,`div`,2)(1,`div`,3),WC(2,`1`),Bu(),ss$1(3,`div`,3),WC(4,`2`),Bu(),ss$1(5,`div`,3),WC(6,`3`),Bu(),ss$1(7,`div`,3),WC(8,`4`),Bu()())}function Yc(n,u){n&1&&(ss$1(0,`div`,2)(1,`div`,3)(2,`div`,4),WC(3,`Basic Plan`),Bu(),ss$1(4,`p`)(5,`b`),WC(6,`2`),Bu(),WC(7,` projects, $10 a month`),Bu(),ss$1(8,`div`,5),WC(9,`Choose`),Bu()(),ss$1(10,`div`,3)(11,`div`,4),WC(12,`Business Plan`),Bu(),ss$1(13,`p`)(14,`b`),WC(15,`5`),Bu(),WC(16,` projects, $20 a month`),Bu(),ss$1(17,`div`,5),WC(18,`Choose`),Bu()(),ss$1(19,`div`,3)(20,`div`,4),WC(21,`Premium Plan`),Bu(),ss$1(22,`p`)(23,`b`),WC(24,`8`),Bu(),WC(25,` projects, $25 a month`),Bu(),ss$1(26,`div`,5),WC(27,`Choose`),Bu()()())}var Fs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-standard-example`]],standalone:!1,decls:2,vars:0,consts:[[`sui-button`,``,`suiIcon`,``,`sui-popup`,``,`suiPopupContent`,`Add users to your feed`],[`sui-icon`,``,`suiIconType`,`add`]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Gh$1(1,`i`,1),Bu())},dependencies:[Ii,we,Le],encapsulation:2,changeDetection:1})}}return n})();var As=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-titled-example`]],standalone:!1,decls:3,vars:0,consts:[[`sui-image`,``,`suiAvatar`,``,`sui-popup`,``,`suiPopupTitle`,`Elliot Fu`,`suiPopupContent`,`Elliot has been a member since July 2012`,`src`,`/assets/images/elliot.jpg`],[`sui-image`,``,`suiAvatar`,``,`sui-popup`,``,`suiPopupTitle`,`Stevie Feliciano`,`suiPopupContent`,`Stevie has been a member since August 2013`,`src`,`/assets/images/stevie.jpg`],[`sui-image`,``,`suiAvatar`,``,`sui-popup`,``,`suiPopupTitle`,`Matt`,`suiPopupContent`,`Matt has been a member since July 2014`,`src`,`/assets/images/matt.jpg`]],template:function(a,s){a&1&&Gh$1(0,`img`,0)(1,`img`,1)(2,`img`,2)},dependencies:[z,Le],encapsulation:2,changeDetection:1})}}return n})();var Vs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-html-example`]],standalone:!1,decls:17,vars:1,consts:[[`popupContent`,``],[`sui-card`,``,`sui-popup`,``,`suiPopupTitle`,`User Rating`,3,`suiPopupContent`],[`suiCardImage`,``],[`src`,`https://semantic-ui.com/images/movies/watchmen-horizontal.jpg`],[`suiCardContent`,``],[`suiCardHeader`,``],[`suiCardDescription`,``],[`sui-buttons`,``,`suiAttached`,``,`suiWidth`,`two`,`suiAttachedPosition`,`bottom`],[`sui-button`,``],[`sui-icon`,``,`suiIconType`,`add`],[`sui-button`,``,`suiEmphasis`,`primary`],[`sui-icon`,``,`suiIconType`,`play`],[`suiValue`,`3`,`suiMaxValue`,`5`]],template:function(a,s){if(a&1&&(ss$1(0,`div`,1)(1,`div`,2),Gh$1(2,`img`,3),Bu(),ss$1(3,`div`,4)(4,`div`,5),WC(5,`Watchmen`),Bu(),ss$1(6,`div`,6),WC(7,` In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. `),Bu()(),ss$1(8,`div`,7)(9,`div`,8),Gh$1(10,`i`,9),WC(11,` Queue `),Bu(),ss$1(12,`div`,10),Gh$1(13,`i`,11),WC(14,` Watch `),Bu()()(),Ph(15,Uc,1,0,`ng-template`,null,0,aw)),a&2){let p=IC(16);Uh$1(`suiPopupContent`,p)}},dependencies:[P$1,b,A,F,L,wt,Ii,Di,we,Le],encapsulation:2,changeDetection:1})}}return n})();var Bs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-basic-example`]],standalone:!1,decls:2,vars:0,consts:[[`sui-button`,``,`suiIcon`,``,`sui-popup`,``,`suiPopupBasic`,``,`suiPopupContent`,`The default theme's basic popup removes the pointing arrow.`],[`sui-icon`,``,`suiIconType`,`add`]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Gh$1(1,`i`,1),Bu())},dependencies:[Ii,we,Le],encapsulation:2,changeDetection:1})}}return n})();var Os=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-width-example`]],standalone:!1,decls:2,vars:0,consts:[[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupWidth`,`wide`,`suiPopupContent`,`Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide.`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupWidth`,`very wide`,`suiPopupContent`,`Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide.`]],template:function(a,s){a&1&&Gh$1(0,`i`,0)(1,`i`,1)},dependencies:[we,Le],encapsulation:2,changeDetection:1})}}return n})();var Ls=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-fluid-example`]],standalone:!1,decls:4,vars:1,consts:[[`fluidPopup`,``],[`sui-button`,``,`sui-popup`,``,3,`suiPopupContent`],[`sui-grid`,``,`suiDivided`,`divided`,`suiAlignment`,`center aligned`,`suiWidth`,`four`],[`suiGridColumn`,``]],template:function(a,s){if(a&1&&(ss$1(0,`div`,1),WC(1,` Show fluid popup
`),Bu(),Ph(2,$c,9,0,`ng-template`,null,0,aw)),a&2){let p=IC(3);Uh$1(`suiPopupContent`,p)}},dependencies:[Ii,mi,vi$1,Le],encapsulation:2,changeDetection:1})}}return n})();var Hs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-size-example`]],standalone:!1,decls:5,vars:0,consts:[[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`mini`,`suiPopupContent`,`Hello. This is a mini popup`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`tiny`,`suiPopupContent`,`Hello. This is a tiny popup`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`small`,`suiPopupContent`,`Hello. This is a small popup`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`large`,`suiPopupContent`,`Hello. This is a large popup`],[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupSize`,`huge`,`suiPopupContent`,`Hello. This is a huge popup`]],template:function(a,s){a&1&&Gh$1(0,`i`,0)(1,`i`,1)(2,`i`,2)(3,`i`,3)(4,`i`,4)},dependencies:[we,Le],encapsulation:2,changeDetection:1})}}return n})();var Ws=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-flowing-example`]],standalone:!1,decls:4,vars:1,consts:[[`flowingTemplate`,``],[`sui-button`,``,`sui-popup`,``,`suiPopupFlowing`,``,3,`suiPopupContent`],[`sui-grid`,``,`suiDivided`,`divided`,`suiAlignment`,`center aligned`,`suiWidth`,`three`],[`suiGridColumn`,``],[`sui-header`,``],[`sui-button`,``]],template:function(a,s){if(a&1&&(ss$1(0,`div`,1),WC(1,` Show flowing popup
`),Bu(),Ph(2,Yc,28,0,`ng-template`,null,0,aw)),a&2){let p=IC(3);Uh$1(`suiPopupContent`,p)}},dependencies:[Ws$1,Ii,mi,vi$1,Le],encapsulation:2,changeDetection:1})}}return n})();var Rs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-inverted-example`]],standalone:!1,decls:3,vars:0,consts:[[`sui-icon`,``,`suiCircular`,``,`suiLink`,``,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupInverted`,``,`suiPopupContent`,`Hello. This is an inverted popup`],[`sui-button`,``,`suiIcon`,``,`sui-popup`,``,`suiPopupInverted`,``,`suiPopupContent`,`Hello. This is an inverted popup`],[`sui-icon`,``,`suiIconType`,`add`]],template:function(a,s){a&1&&(Gh$1(0,`i`,0),ss$1(1,`button`,1),Gh$1(2,`i`,2),Bu())},dependencies:[Ii,we,Le],encapsulation:2,changeDetection:1})}}return n})();var zs=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup-position-example`]],standalone:!1,decls:2,vars:0,consts:[[`sui-icon`,``,`suiCircular`,``,`suiColour`,`red`,`suiSize`,`big`,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupPlacement`,`bottom left`,`suiPopupContent`,`This is a bottom left popup`],[`sui-icon`,``,`suiCircular`,``,`suiColour`,`teal`,`suiSize`,`big`,`suiIconType`,`heart`,`sui-popup`,``,`suiPopupPlacement`,`top right`,`suiPopupContent`,`This is a top right popup`]],template:function(a,s){a&1&&Gh$1(0,`i`,0)(1,`i`,1)},dependencies:[we,Le],encapsulation:2,changeDetection:1})}}return n})();function Xc(n,u){n&1&&Gh$1(0,`doc-popup-standard-example`)}function Jc(n,u){n&1&&Gh$1(0,`doc-popup-titled-example`)}function qc(n,u){n&1&&Gh$1(0,`doc-popup-html-example`)}function Zc(n,u){n&1&&Gh$1(0,`doc-popup-basic-example`)}function Kc(n,u){n&1&&Gh$1(0,`doc-popup-width-example`)}function Qc(n,u){n&1&&Gh$1(0,`doc-popup-fluid-example`)}function e0(n,u){n&1&&Gh$1(0,`doc-popup-size-example`)}function t0(n,u){n&1&&Gh$1(0,`doc-popup-flowing-example`)}function i0(n,u){n&1&&Gh$1(0,`doc-popup-inverted-example`)}function n0(n,u){n&1&&Gh$1(0,`doc-popup-position-example`)}function o0(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Popup`),Bu(),ss$1(6,`p`),WC(7,`An element can specify popup content to appear`),Bu(),ss$1(8,`div`,5),WC(9,` Popup relies on `),ss$1(10,`a`,6),WC(11,`Angular CDK`),Bu(),WC(12,`. Ensure that you have the latest version compatible with your Angular version `),Bu(),Ph(13,Xc,1,0,`ng-template`,7),Bu(),ss$1(14,`doc-code-sample`,3)(15,`h3`,4),WC(16,`Titled`),Bu(),ss$1(17,`p`),WC(18,`An element can specify popup content with a title`),Bu(),Ph(19,Jc,1,0,`ng-template`,7),Bu(),ss$1(20,`doc-code-sample`,3)(21,`h3`,4),WC(22,`HTML`),Bu(),ss$1(23,`p`),WC(24,`An element can specify template HTML for a popup`),Bu(),Ph(25,qc,1,0,`ng-template`,7),Bu(),ss$1(26,`h2`,2),WC(27,`Variations`),Bu(),ss$1(28,`doc-code-sample`,3)(29,`h3`,4),WC(30,`Basic`),Bu(),ss$1(31,`p`),WC(32,`A popup can provide more basic formatting`),Bu(),Ph(33,Zc,1,0,`ng-template`,7),Bu(),ss$1(34,`doc-code-sample`,3)(35,`h3`,4),WC(36,`Width`),Bu(),ss$1(37,`p`),WC(38,`A popup can be extra wide to allow for longer content`),Bu(),Ph(39,Kc,1,0,`ng-template`,7),Bu(),ss$1(40,`doc-code-sample`,3)(41,`h3`,4),WC(42,`Fluid`),Bu(),ss$1(43,`p`),WC(44,`A fluid popup will take up the entire width of its offset container`),Bu(),Ph(45,Qc,1,0,`ng-template`,7),Bu(),ss$1(46,`doc-code-sample`,3)(47,`h3`,4),WC(48,`Size`),Bu(),ss$1(49,`p`),WC(50,`A popup can vary in size`),Bu(),Ph(51,e0,1,0,`ng-template`,7),Bu(),ss$1(52,`doc-code-sample`,3)(53,`h3`,4),WC(54,`Flowing`),Bu(),ss$1(55,`p`),WC(56,`A popup can have no maximum width and continue to flow to fit its content`),Bu(),Ph(57,t0,1,0,`ng-template`,7),Bu(),ss$1(58,`doc-code-sample`,3)(59,`h3`,4),WC(60,`Inverted`),Bu(),ss$1(61,`p`),WC(62,`A popup can have its colors inverted`),Bu(),Ph(63,i0,1,0,`ng-template`,7),Bu(),ss$1(64,`doc-code-sample`,3)(65,`h3`,4),WC(66,`Position`),Bu(),ss$1(67,`p`),WC(68,`A popup can be position around its trigger`),Bu(),Ph(69,n0,1,0,`ng-template`,7),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetStandard),KD(11),Uh$1(`templateCode`,o.snippetTitled),KD(6),Uh$1(`templateCode`,o.snippetHtml),KD(8),Uh$1(`templateCode`,o.snippetBasic),KD(6),Uh$1(`templateCode`,o.snippetWidth),KD(6),Uh$1(`templateCode`,o.snippetFluid),KD(6),Uh$1(`templateCode`,o.snippetSize),KD(6),Uh$1(`templateCode`,o.snippetFlowing),KD(6),Uh$1(`templateCode`,o.snippetInverted),KD(6),Uh$1(`templateCode`,o.snippetPosition)}}function a0(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-popup`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,8)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiPopupPlacement`),Bu(),ss$1(20,`td`),WC(21,`Set the popup's position. Allowed values could be `),ss$1(22,`span`,9),WC(23,`'top left'`),Bu(),WC(24,` | `),ss$1(25,`span`,9),WC(26,`'top center'`),Bu(),WC(27,` | `),ss$1(28,`span`,9),WC(29,`'top right'`),Bu(),WC(30,` | `),ss$1(31,`span`,9),WC(32,`'bottom left'`),Bu(),WC(33,` | `),ss$1(34,`span`,9),WC(35,`'bottom center'`),Bu(),WC(36,` | `),ss$1(37,`span`,9),WC(38,`'bottom right'`),Bu(),WC(39,` | `),ss$1(40,`span`,9),WC(41,`'right center'`),Bu(),WC(42,` | `),ss$1(43,`span`,9),WC(44,`'left center'`),Bu()(),ss$1(45,`td`)(46,`div`,10),WC(47,` string `),Bu()(),ss$1(48,`td`)(49,`div`,11),WC(50,` top left `),Bu()()(),ss$1(51,`tr`)(52,`td`),WC(53,`suiPopupSize`),Bu(),ss$1(54,`td`),WC(55,`Set the popup size. Allowed values could be `),ss$1(56,`span`,9),WC(57,`'mini'`),Bu(),WC(58,` | `),ss$1(59,`span`,9),WC(60,`'tiny'`),Bu(),WC(61,` | `),ss$1(62,`span`,9),WC(63,`'small'`),Bu(),WC(64,` | `),ss$1(65,`span`,9),WC(66,`'medium'`),Bu(),WC(67,` | `),ss$1(68,`span`,9),WC(69,`'big'`),Bu(),WC(70,` | `),ss$1(71,`span`,9),WC(72,`'huge'`),Bu(),WC(73,` | `),ss$1(74,`span`,9),WC(75,`'massive'`),Bu(),WC(76,` | `),ss$1(77,`span`,9),WC(78,`null`),Bu()(),ss$1(79,`td`)(80,`div`,10),WC(81,` string `),Bu()(),ss$1(82,`td`)(83,`div`,11),WC(84,` null `),Bu()()(),ss$1(85,`tr`)(86,`td`),WC(87,`suiPopupWidth`),Bu(),ss$1(88,`td`),WC(89,` Determines the popup's width. Allowed values could be `),ss$1(90,`span`,9),WC(91,`'wide'`),Bu(),WC(92,` | `),ss$1(93,`span`,9),WC(94,`'very wide'`),Bu(),WC(95,` | `),ss$1(96,`span`,9),WC(97,`null`),Bu()(),ss$1(98,`td`)(99,`div`,10),WC(100,`string`),Bu()(),ss$1(101,`td`)(102,`div`,11),WC(103,`null`),Bu()()(),ss$1(104,`tr`)(105,`td`),WC(106,`suiPopupTrigger`),Bu(),ss$1(107,`td`),WC(108,` Determines the popup's trigger. Allowed values could be `),ss$1(109,`span`,9),WC(110,`'hover'`),Bu(),WC(111,` | `),ss$1(112,`span`,9),WC(113,`'click'`),Bu()(),ss$1(114,`td`)(115,`div`,10),WC(116,`string`),Bu()(),ss$1(117,`td`)(118,`div`,11),WC(119,`hover`),Bu()()(),ss$1(120,`tr`)(121,`td`),WC(122,`suiPopupTitle`),Bu(),ss$1(123,`td`),WC(124,` What should get rendered as the popup's title/header `),Bu(),ss$1(125,`td`)(126,`div`,10),WC(127,`string`),Bu()(),ss$1(128,`td`)(129,`div`,11),WC(130,`null`),Bu()()(),ss$1(131,`tr`)(132,`td`),WC(133,`suiPopupContent`),Bu(),ss$1(134,`td`),WC(135,` What should get rendered as the popup's content. Could be a string or a template reference `),Bu(),ss$1(136,`td`)(137,`div`,10),WC(138,`string`),Bu(),WC(139,` | `),ss$1(140,`div`,10),WC(141,`TemplateRef<any>`),Bu()(),ss$1(142,`td`)(143,`div`,11),WC(144,`null`),Bu()()(),ss$1(145,`tr`)(146,`td`),WC(147,`suiPopupInverted`),Bu(),ss$1(148,`td`),WC(149,` Determines if the popup uses inverted colours `),Bu(),ss$1(150,`td`)(151,`div`,10),WC(152,`boolean`),Bu()(),ss$1(153,`td`)(154,`div`,11),WC(155,`false`),Bu()()(),ss$1(156,`tr`)(157,`td`),WC(158,`suiPopupFluid`),Bu(),ss$1(159,`td`),WC(160,` Determines if the popup uses fluid styling `),Bu(),ss$1(161,`td`)(162,`div`,10),WC(163,`boolean`),Bu()(),ss$1(164,`td`)(165,`div`,11),WC(166,`false`),Bu()()(),ss$1(167,`tr`)(168,`td`),WC(169,`suiPopupFlowing`),Bu(),ss$1(170,`td`),WC(171,` Determines if the popup uses flowing styling `),Bu(),ss$1(172,`td`)(173,`div`,10),WC(174,`boolean`),Bu()(),ss$1(175,`td`)(176,`div`,11),WC(177,`false`),Bu()()(),ss$1(178,`tr`)(179,`td`),WC(180,`suiPopupBasic`),Bu(),ss$1(181,`td`),WC(182,`Determines whether the popup uses basic styling and renders without the arrow`),Bu(),ss$1(183,`td`)(184,`div`,10),WC(185,`boolean`),Bu()(),ss$1(186,`td`)(187,`div`,11),WC(188,`false`),Bu()()()()()())}var js=(()=>{class n{constructor(o){this.snippetStandard=Es,this.snippetTitled=Cs,this.snippetHtml=Ds,this.snippetBasic=ws,this.snippetWidth=_s,this.snippetFluid=Ts,this.snippetSize=Ms,this.snippetFlowing=Is,this.snippetInverted=Ps,this.snippetPosition=ks,o.setTitle(`Popup | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-popup`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Popup`,`subHeader`,`A popup displays additional information on top of a page`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`href`,`https://www.npmjs.com/package/@angular/cdk`],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,o0,70,10,`div`,1)(2,a0,189,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li$1,Fs,As,Vs,Bs,Os,Ls,Hs,Ws,Rs,zs],encapsulation:2,changeDetection:1})}}return n})();var Ns=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var Us=`<sui-select
    suiFluid
    name="fluid"
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var $s=`<sui-select
    suiSearch
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var Ys=`<sui-select
    suiMultiple
    name="multiple"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var Gs=`<sui-select
    suiSearch
    suiMultiple
    name="multiple-search"
    suiPlaceholder="State"
    [suiOptions]="states">
</sui-select>
`;var Xs=`<sui-select
    name="flag"
    suiPlaceholder="Select Country"
    [suiOptions]="countries">
</sui-select>
`;var Js=`<sui-select
    name="images"
    suiPlaceholder="Select User"
    [suiOptions]="persons">
</sui-select>
`;var qs=`<sui-select
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions"
    [(ngModel)]="selectedGender"
    (suiSelectionChanged)="onSelectionChanged($event)">
</sui-select>

<p>
  Selected value: <strong>{{ selectedGender }}</strong><br>
  Last change event: <strong>{{ lastChange }}</strong>
</p>
`;var Zs=`<sui-select
    suiFluid
    suiMultiple
    suiLoading
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var Ks=`<sui-select
    suiError
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var Qs=`<sui-select
    disabled
    suiPlaceholder="Dropdown"
    [suiOptions]="options">
</sui-select>
`;var er=`<sui-select
    suiScrolling
    suiPlaceholder="Select State"
    [suiOptions]="states">
</sui-select>
`;var tr=`<sui-select
    suiCompact
    suiPlaceholder="Gender"
    [suiOptions]="genderOptions">
</sui-select>
`;var ir=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var nr=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var or=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var ar=`countries: ISelectOption[] = [
  { text: 'Albania', value: 'al', flag: 'al' },
  { text: 'Angola', value: 'ao', flag: 'ao' },
  { text: 'Azerbaijan', value: 'az', flag: 'az' },
  { text: 'Botswana', value: 'bw', flag: 'bw' },
  { text: 'Nigeria', value: 'ng', flag: 'ng' },
];
`;var sr=`persons: ISelectOption[] = [
  { text: 'Elliot', value: null, image: { avatar: true, src: '/assets/images/elliot.jpg'} },
  { text: 'Helen', value: null, image: { avatar: true, src: '/assets/images/helen.jpg'} },
  { text: 'Jenny', value: null, image: { avatar: true, src: '/assets/images/jenny.jpg'} },
  { text: 'Joe', value: null, image: { avatar: true, src: '/assets/images/joe.jpg'} },
  { text: 'Justen', value: null, image: { avatar: true, src: '/assets/images/justen.jpg'} },
  { text: 'Laura', value: null, image: { avatar: true, src: '/assets/images/laura.jpg'} },
  { text: 'Matt', value: null, image: { avatar: true, src: '/assets/images/matt.jpg'} },
  { text: 'Stevie', value: null, image: { avatar: true, src: '/assets/images/stevie.jpg'} },
];
`;var rr=`selectedGender: number | null = 1;
lastChange: number | null = null;

genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];

onSelectionChanged(value: number): void {
  this.lastChange = value;
}
`;var lr=`options: ISelectOption[] = [
  { text: 'Option 1', value: 'one' },
  { text: 'Option 2', value: 'two' },
  { text: 'Option 3', value: 'three' },
];
`;var dr=`states: ISelectOption[] = [
  { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
  { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
  { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
  { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
  { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
];
`;var mr=`genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
`;var Pe=class{constructor(){this.selectedGender=1,this.lastChange=null,this.genderOptions=[{text:`Male`,value:0},{text:`Female`,value:1}],this.countries=[{text:`Albania`,value:`al`,flag:`al`},{text:`Angola`,value:`ao`,flag:`ao`},{text:`Azerbaijan`,value:`az`,flag:`az`},{text:`Botswana`,value:`bw`,flag:`bw`},{text:`Nigeria`,value:`ng`,flag:`ng`}],this.states=[{text:`Alabama`,value:`AL`},{text:`Arizona`,value:`AZ`},{text:`California`,value:`CA`},{text:`District Of Columbia`,value:`DC`},{text:`Idaho`,value:`ID`},{text:`Indiana`,value:`IN`},{text:`Kansas`,value:`KS`},{text:`Louisiana`,value:`LA`},{text:`Maryland`,value:`MD`},{text:`Utah`,value:`UT`}],this.persons=[{text:`Elliot`,value:null,image:{avatar:!0,src:`/assets/images/elliot.jpg`}},{text:`Helen`,value:null,image:{avatar:!0,src:`/assets/images/helen.jpg`}},{text:`Jenny`,value:null,image:{avatar:!0,src:`/assets/images/jenny.jpg`}},{text:`Joe`,value:null,image:{avatar:!0,src:`/assets/images/joe.jpg`}},{text:`Justen`,value:null,image:{avatar:!0,src:`/assets/images/justen.jpg`}},{text:`Laura`,value:null,image:{avatar:!0,src:`/assets/images/laura.jpg`}},{text:`Matt`,value:null,image:{avatar:!0,src:`/assets/images/matt.jpg`}},{text:`Stevie`,value:null,image:{avatar:!0,src:`/assets/images/stevie.jpg`}}],this.options=[{text:`Option 1`,value:`one`},{text:`Option 2`,value:`two`},{text:`Option 3`,value:`three`}]}onSelectionChanged(u){this.lastChange=u}};var pr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-standard-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiPlaceholder`,`Gender`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.genderOptions)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var ur=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-fluid-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiFluid`,``,`name`,`fluid`,`suiPlaceholder`,`Gender`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.genderOptions)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var cr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-multiple-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiMultiple`,``,`name`,`multiple`,`suiPlaceholder`,`State`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.states)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var hr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-multiple-search-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiSearch`,``,`suiMultiple`,``,`name`,`multiple-search`,`suiPlaceholder`,`State`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.states)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var gr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-flag-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`name`,`flag`,`suiPlaceholder`,`Select Country`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.countries)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var fr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-images-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`name`,`images`,`suiPlaceholder`,`Select User`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.persons)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var Sr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-loading-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiFluid`,``,`suiMultiple`,``,`suiLoading`,``,`suiPlaceholder`,`Dropdown`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.options)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var vr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-error-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiError`,``,`suiPlaceholder`,`Dropdown`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.options)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var xr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-disabled-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`disabled`,``,`suiPlaceholder`,`Dropdown`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.options)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var br=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-search-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiSearch`,``,`suiPlaceholder`,`Select State`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.states)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var yr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-scrolling-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiScrolling`,``,`suiPlaceholder`,`Select State`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.states)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var Er=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-compact-example`]],standalone:!1,features:[lo$1],decls:1,vars:1,consts:[[`suiCompact`,``,`suiPlaceholder`,`Gender`,3,`suiOptions`]],template:function(a,s){a&1&&Gh$1(0,`sui-select`,0),a&2&&Uh$1(`suiOptions`,s.genderOptions)},dependencies:[Oe],encapsulation:2,changeDetection:1})}}return n})();var Cr=(()=>{class n extends Pe{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select-two-way-example`]],standalone:!1,features:[lo$1],decls:9,vars:4,consts:[[`suiPlaceholder`,`Gender`,3,`ngModelChange`,`suiSelectionChanged`,`suiOptions`,`ngModel`]],template:function(a,s){a&1&&(ss$1(0,`sui-select`,0),BE(),vg(`ngModelChange`,function(m){return YC(s.selectedGender,m)||(s.selectedGender=m),m}),Qh$1(`suiSelectionChanged`,function(m){return s.onSelectionChanged(m)}),Bu(),ss$1(1,`p`),WC(2,` Selected value: `),ss$1(3,`strong`),WC(4),Bu(),Gh$1(5,`br`),WC(6,` Last change event: `),ss$1(7,`strong`),WC(8),Bu()()),a&2&&(Uh$1(`suiOptions`,s.genderOptions),yg(`ngModel`,s.selectedGender),$E(),KD(4),hg(s.selectedGender),KD(4),hg(s.lastChange))},dependencies:[li,An$1,Oe],encapsulation:2,changeDetection:1})}}return n})();function P0(n,u){n&1&&Gh$1(0,`doc-select-standard-example`)}function k0(n,u){n&1&&Gh$1(0,`doc-select-fluid-example`)}function F0(n,u){n&1&&Gh$1(0,`doc-select-search-example`)}function A0(n,u){n&1&&Gh$1(0,`doc-select-multiple-example`)}function V0(n,u){n&1&&Gh$1(0,`doc-select-multiple-search-example`)}function B0(n,u){n&1&&Gh$1(0,`doc-select-flag-example`)}function O0(n,u){n&1&&Gh$1(0,`doc-select-images-example`)}function L0(n,u){n&1&&Gh$1(0,`doc-select-two-way-example`)}function H0(n,u){n&1&&Gh$1(0,`doc-select-loading-example`)}function W0(n,u){n&1&&Gh$1(0,`doc-select-error-example`)}function R0(n,u){n&1&&Gh$1(0,`doc-select-disabled-example`)}function z0(n,u){n&1&&Gh$1(0,`doc-select-scrolling-example`)}function j0(n,u){n&1&&Gh$1(0,`doc-select-compact-example`)}function N0(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Selection`),Bu(),ss$1(6,`p`),WC(7,`A standard select can be used to pick between choices in a form.`),Bu(),Ph(8,P0,1,0,`ng-template`,5),Bu(),ss$1(9,`doc-code-sample`,3),Ph(10,k0,1,0,`ng-template`,5),Bu(),ss$1(11,`doc-code-sample`,3)(12,`h3`,4),WC(13,`Search Selection`),Bu(),ss$1(14,`p`),WC(15,`A selection dropdown can allow a user to search through a large list of choices.`),Bu(),Ph(16,F0,1,0,`ng-template`,5),Bu(),ss$1(17,`doc-code-sample`,3)(18,`h3`,4),WC(19,`Multiple Selection`),Bu(),ss$1(20,`p`),WC(21,`A selection dropdown can allow multiple selections.`),Bu(),ss$1(22,`div`,6),Gh$1(23,`i`,7),ss$1(24,`div`,8)(25,`p`),WC(26,`Selected values are emitted as an array.`),Bu()()(),Ph(27,A0,1,0,`ng-template`,5),Bu(),ss$1(28,`doc-code-sample`,3)(29,`h3`,4),WC(30,`Multiple Search Selection`),Bu(),ss$1(31,`p`),WC(32,`A selection dropdown can allow multiple search selections.`),Bu(),Ph(33,V0,1,0,`ng-template`,5),Bu(),ss$1(34,`doc-code-sample`,3)(35,`h3`,4),WC(36,`Flag Selection`),Bu(),ss$1(37,`p`),WC(38,`A selection can include flag icons.`),Bu(),ss$1(39,`div`,6),Gh$1(40,`i`,7),ss$1(41,`div`,8)(42,`p`),WC(43,`Set `),ss$1(44,`span`,9),WC(45,`flag`),Bu(),WC(46,` on an option to the two-letter country code of the flag to show.`),Bu()()(),Ph(47,B0,1,0,`ng-template`,5),Bu(),ss$1(48,`doc-code-sample`,3)(49,`h3`,4),WC(50,`Image Selection`),Bu(),ss$1(51,`p`),WC(52,`A selection can include images.`),Bu(),Ph(53,O0,1,0,`ng-template`,5),Bu(),ss$1(54,`h2`,2),WC(55,`Forms`),Bu(),ss$1(56,`doc-code-sample`,3)(57,`h3`,4),WC(58,`Form Binding`),Bu(),ss$1(59,`p`),WC(60,`A select is a form control. Use it with `),ss$1(61,`span`,9),WC(62,`ngModel`),Bu(),WC(63,`, or with `),ss$1(64,`span`,9),WC(65,`formControl`),Bu(),WC(66,` / `),ss$1(67,`span`,9),WC(68,`formControlName`),Bu(),WC(69,` in reactive forms. The `),ss$1(70,`span`,9),WC(71,`suiSelectionChanged`),Bu(),WC(72,` event also fires whenever the selection changes.`),Bu(),ss$1(73,`div`,6),Gh$1(74,`i`,7),ss$1(75,`div`,8)(76,`p`),WC(77,`Form binding with `),ss$1(78,`span`,9),WC(79,`ngModel`),Bu(),WC(80,` and reactive forms requires `),ss$1(81,`span`,9),WC(82,`FormsModule`),Bu(),WC(83,` or `),ss$1(84,`span`,9),WC(85,`ReactiveFormsModule`),Bu(),WC(86,`. Programmatic value writes are supported for single selection.`),Bu()()(),Ph(87,L0,1,0,`ng-template`,5),Bu(),ss$1(88,`h2`,2),WC(89,`States`),Bu(),ss$1(90,`doc-code-sample`,3)(91,`h3`,4),WC(92,`Loading`),Bu(),ss$1(93,`p`),WC(94,`A dropdown can show that it is currently loading data.`),Bu(),Ph(95,H0,1,0,`ng-template`,5),Bu(),ss$1(96,`doc-code-sample`,3)(97,`h3`,4),WC(98,`Error`),Bu(),ss$1(99,`p`),WC(100,`An errored dropdown can alert a user to a problem.`),Bu(),Ph(101,W0,1,0,`ng-template`,5),Bu(),ss$1(102,`doc-code-sample`,3)(103,`h3`,4),WC(104,`Disabled`),Bu(),ss$1(105,`p`),WC(106,`A disabled dropdown menu or item does not allow user interaction.`),Bu(),Ph(107,R0,1,0,`ng-template`,5),Bu(),ss$1(108,`h2`,2),WC(109,`Variations`),Bu(),ss$1(110,`doc-code-sample`,3)(111,`h3`,4),WC(112,`Scrolling`),Bu(),ss$1(113,`p`),WC(114,`A selection dropdown can have its menu scroll.`),Bu(),Ph(115,z0,1,0,`ng-template`,5),Bu(),ss$1(116,`doc-code-sample`,3)(117,`h3`,4),WC(118,`Compact`),Bu(),ss$1(119,`p`),WC(120,`A compact selection dropdown has no minimum width.`),Bu(),Ph(121,j0,1,0,`ng-template`,5),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetStandard)(`componentCode`,o.snippetStandardTs),KD(6),Uh$1(`templateCode`,o.snippetFluid)(`componentCode`,o.snippetStandardTs),KD(2),Uh$1(`templateCode`,o.snippetSearch)(`componentCode`,o.snippetSearchTs),KD(6),Uh$1(`templateCode`,o.snippetMultiple)(`componentCode`,o.snippetMultipleTs),KD(11),Uh$1(`templateCode`,o.snippetMultipleSearch)(`componentCode`,o.snippetMultipleTs),KD(6),Uh$1(`templateCode`,o.snippetFlag)(`componentCode`,o.snippetFlagsTs),KD(14),Uh$1(`templateCode`,o.snippetImages)(`componentCode`,o.snippetImagesTs),KD(8),Uh$1(`templateCode`,o.snippetTwoWay)(`componentCode`,o.snippetTwoWayTs),KD(34),Uh$1(`templateCode`,o.snippetLoading)(`componentCode`,o.snippetStatesTs),KD(6),Uh$1(`templateCode`,o.snippetError)(`componentCode`,o.snippetStatesTs),KD(6),Uh$1(`templateCode`,o.snippetDisabled)(`componentCode`,o.snippetStatesTs),KD(8),Uh$1(`templateCode`,o.snippetScrolling)(`componentCode`,o.snippetScrollingTs),KD(6),Uh$1(`templateCode`,o.snippetCompact)(`componentCode`,o.snippetCompactTs)}}function U0(n,u){n&1&&(ss$1(0,`div`)(1,`div`,6),Gh$1(2,`i`,7),ss$1(3,`div`,8)(4,`p`),WC(5,` Import `),ss$1(6,`span`,9),WC(7,`SuiSelectModule`),Bu(),WC(8,` from `),ss$1(9,`span`,9),WC(10,`ngx-semantic/modules/select`),Bu(),WC(11,`. The select builds its own menu from `),ss$1(12,`span`,9),WC(13,`suiOptions`),Bu(),WC(14,`, so you do not need to write menu markup. Looking for a menu of actions? See `),ss$1(15,`a`,10),WC(16,`Dropdown`),Bu(),WC(17,`. `),Bu()()(),ss$1(18,`h2`,2),WC(19,`sui-select`),Bu(),ss$1(20,`p`),WC(21,`Selector: `),ss$1(22,`span`,9),WC(23,`sui-select`),Bu(),WC(24,`. Implements `),ss$1(25,`span`,9),WC(26,`ControlValueAccessor`),Bu(),WC(27,` so it can be used with template-driven and reactive forms.`),Bu(),ss$1(28,`h4`,4),WC(29,`Properties`),Bu(),ss$1(30,`table`,11)(31,`thead`)(32,`tr`)(33,`th`),WC(34,`Property`),Bu(),ss$1(35,`th`),WC(36,`Description`),Bu(),ss$1(37,`th`),WC(38,`Type`),Bu(),ss$1(39,`th`),WC(40,`Default`),Bu()()(),ss$1(41,`tbody`)(42,`tr`)(43,`td`),WC(44,`suiOptions`),Bu(),ss$1(45,`td`),WC(46,`The options to choose from. See `),ss$1(47,`span`,9),WC(48,`ISelectOption`),Bu(),WC(49,` below.`),Bu(),ss$1(50,`td`)(51,`div`,12),WC(52,` ISelectOption[] `),Bu()(),ss$1(53,`td`)(54,`div`,13),WC(55,` [] `),Bu()()(),ss$1(56,`tr`)(57,`td`),WC(58,`suiPlaceholder`),Bu(),ss$1(59,`td`),WC(60,`The select’s placeholder text.`),Bu(),ss$1(61,`td`)(62,`div`,12),WC(63,` string `),Bu()(),ss$1(64,`td`)(65,`div`,13),WC(66,` null `),Bu()()(),ss$1(67,`tr`)(68,`td`),WC(69,`suiSearch`),Bu(),ss$1(70,`td`),WC(71,`Determines if the select supports searching through its options.`),Bu(),ss$1(72,`td`)(73,`div`,12),WC(74,` boolean `),Bu()(),ss$1(75,`td`)(76,`div`,13),WC(77,` false `),Bu()()(),ss$1(78,`tr`)(79,`td`),WC(80,`suiMultiple`),Bu(),ss$1(81,`td`),WC(82,`Determines if the select allows for multiple selection. The selection is then an array of option values.`),Bu(),ss$1(83,`td`)(84,`div`,12),WC(85,` boolean `),Bu()(),ss$1(86,`td`)(87,`div`,13),WC(88,` false `),Bu()()(),ss$1(89,`tr`)(90,`td`),WC(91,`suiFluid`),Bu(),ss$1(92,`td`),WC(93,`Determines if the select is rendered as fluid, taking the full width of its parent.`),Bu(),ss$1(94,`td`)(95,`div`,12),WC(96,` boolean `),Bu()(),ss$1(97,`td`)(98,`div`,13),WC(99,` false `),Bu()()(),ss$1(100,`tr`)(101,`td`),WC(102,`suiInline`),Bu(),ss$1(103,`td`),WC(104,`Determines if the select is rendered inline.`),Bu(),ss$1(105,`td`)(106,`div`,12),WC(107,` boolean `),Bu()(),ss$1(108,`td`)(109,`div`,13),WC(110,` false `),Bu()()(),ss$1(111,`tr`)(112,`td`),WC(113,`suiLoading`),Bu(),ss$1(114,`td`),WC(115,`Determines if the select is rendered as loading.`),Bu(),ss$1(116,`td`)(117,`div`,12),WC(118,` boolean `),Bu()(),ss$1(119,`td`)(120,`div`,13),WC(121,` false `),Bu()()(),ss$1(122,`tr`)(123,`td`),WC(124,`suiError`),Bu(),ss$1(125,`td`),WC(126,`Determines if the select is rendered to depict an error.`),Bu(),ss$1(127,`td`)(128,`div`,12),WC(129,` boolean `),Bu()(),ss$1(130,`td`)(131,`div`,13),WC(132,` false `),Bu()()(),ss$1(133,`tr`)(134,`td`),WC(135,`disabled`),Bu(),ss$1(136,`td`),WC(137,`Determines if the select is disabled.`),Bu(),ss$1(138,`td`)(139,`div`,12),WC(140,` boolean `),Bu()(),ss$1(141,`td`)(142,`div`,13),WC(143,` false `),Bu()()(),ss$1(144,`tr`)(145,`td`),WC(146,`suiScrolling`),Bu(),ss$1(147,`td`),WC(148,`Determines if the select’s menu is rendered as scrollable.`),Bu(),ss$1(149,`td`)(150,`div`,12),WC(151,` boolean `),Bu()(),ss$1(152,`td`)(153,`div`,13),WC(154,` false `),Bu()()(),ss$1(155,`tr`)(156,`td`),WC(157,`suiCompact`),Bu(),ss$1(158,`td`),WC(159,`Determines if the select is rendered as compact, with no minimum width.`),Bu(),ss$1(160,`td`)(161,`div`,12),WC(162,` boolean `),Bu()(),ss$1(163,`td`)(164,`div`,13),WC(165,` false `),Bu()()(),ss$1(166,`tr`)(167,`td`),WC(168,`name`),Bu(),ss$1(169,`td`),WC(170,`The component’s name.`),Bu(),ss$1(171,`td`)(172,`div`,12),WC(173,` string `),Bu()(),ss$1(174,`td`)(175,`div`,13),WC(176,` null `),Bu()()()()(),ss$1(177,`h4`,4),WC(178,`Events`),Bu(),ss$1(179,`table`,11)(180,`thead`)(181,`tr`)(182,`th`),WC(183,`Event`),Bu(),ss$1(184,`th`),WC(185,`Description`),Bu(),ss$1(186,`th`),WC(187,`Type`),Bu()()(),ss$1(188,`tbody`)(189,`tr`)(190,`td`),WC(191,`suiSelectionChanged`),Bu(),ss$1(192,`td`),WC(193,`Fired when the selection changes. Emits the selected option value, or an array of values when `),ss$1(194,`span`,9),WC(195,`suiMultiple`),Bu(),WC(196,` is set.`),Bu(),ss$1(197,`td`)(198,`div`,12),WC(199,` any | any[] `),Bu()()()()(),ss$1(200,`h2`,2),WC(201,`ISelectOption`),Bu(),ss$1(202,`p`),WC(203,`The shape of each entry in `),ss$1(204,`span`,9),WC(205,`suiOptions`),Bu(),WC(206,`. Import it from `),ss$1(207,`span`,9),WC(208,`ngx-semantic/modules/select`),Bu(),WC(209,`.`),Bu(),ss$1(210,`h4`,4),WC(211,`Properties`),Bu(),ss$1(212,`table`,11)(213,`thead`)(214,`tr`)(215,`th`),WC(216,`Property`),Bu(),ss$1(217,`th`),WC(218,`Description`),Bu(),ss$1(219,`th`),WC(220,`Type`),Bu(),ss$1(221,`th`),WC(222,`Default`),Bu()()(),ss$1(223,`tbody`)(224,`tr`)(225,`td`),WC(226,`text`),Bu(),ss$1(227,`td`),WC(228,`The text displayed for the option. This is also what the search filters on.`),Bu(),ss$1(229,`td`)(230,`div`,12),WC(231,` string `),Bu()(),ss$1(232,`td`)(233,`div`,13),WC(234,` - `),Bu()()(),ss$1(235,`tr`)(236,`td`),WC(237,`value`),Bu(),ss$1(238,`td`),WC(239,`The value emitted when the option is selected.`),Bu(),ss$1(240,`td`)(241,`div`,12),WC(242,` any `),Bu()(),ss$1(243,`td`)(244,`div`,13),WC(245,` - `),Bu()()(),ss$1(246,`tr`)(247,`td`),WC(248,`image`),Bu(),ss$1(249,`td`),WC(250,`Shows an image next to the option text. See `),ss$1(251,`span`,9),WC(252,`ISelectOptionImage`),Bu(),WC(253,`.`),Bu(),ss$1(254,`td`)(255,`div`,12),WC(256,` ISelectOptionImage `),Bu()(),ss$1(257,`td`)(258,`div`,13),WC(259,` undefined `),Bu()()(),ss$1(260,`tr`)(261,`td`),WC(262,`flag`),Bu(),ss$1(263,`td`),WC(264,`The country code of a flag to show next to the option text, for example `),ss$1(265,`span`,9),WC(266,`ng`),Bu(),WC(267,`.`),Bu(),ss$1(268,`td`)(269,`div`,12),WC(270,` string `),Bu()(),ss$1(271,`td`)(272,`div`,13),WC(273,` undefined `),Bu()()()()(),ss$1(274,`h2`,2),WC(275,`ISelectOptionImage`),Bu(),ss$1(276,`p`),WC(277,`The shape of `),ss$1(278,`span`,9),WC(279,`ISelectOption.image`),Bu(),WC(280,`.`),Bu(),ss$1(281,`h4`,4),WC(282,`Properties`),Bu(),ss$1(283,`table`,11)(284,`thead`)(285,`tr`)(286,`th`),WC(287,`Property`),Bu(),ss$1(288,`th`),WC(289,`Description`),Bu(),ss$1(290,`th`),WC(291,`Type`),Bu(),ss$1(292,`th`),WC(293,`Default`),Bu()()(),ss$1(294,`tbody`)(295,`tr`)(296,`td`),WC(297,`src`),Bu(),ss$1(298,`td`),WC(299,`The image source.`),Bu(),ss$1(300,`td`)(301,`div`,12),WC(302,` string `),Bu()(),ss$1(303,`td`)(304,`div`,13),WC(305,` - `),Bu()()(),ss$1(306,`tr`)(307,`td`),WC(308,`avatar`),Bu(),ss$1(309,`td`),WC(310,`When true, renders the image as a small avatar.`),Bu(),ss$1(311,`td`)(312,`div`,12),WC(313,` boolean `),Bu()(),ss$1(314,`td`)(315,`div`,13),WC(316,` - `),Bu()()()()(),ss$1(317,`h2`,2),WC(318,`suiSelectMenu`),Bu(),ss$1(319,`p`),WC(320,`Selector: `),ss$1(321,`span`,9),WC(322,`[suiSelectMenu]`),Bu(),WC(323,`. The options menu rendered inside `),ss$1(324,`span`,9),WC(325,`sui-select`),Bu(),WC(326,`. You do not normally use this directly.`),Bu(),ss$1(327,`h4`,4),WC(328,`Properties`),Bu(),ss$1(329,`table`,11)(330,`thead`)(331,`tr`)(332,`th`),WC(333,`Property`),Bu(),ss$1(334,`th`),WC(335,`Description`),Bu(),ss$1(336,`th`),WC(337,`Type`),Bu(),ss$1(338,`th`),WC(339,`Default`),Bu()()(),ss$1(340,`tbody`)(341,`tr`)(342,`td`),WC(343,`suiDirection`),Bu(),ss$1(344,`td`),WC(345,`Sets the direction the menu opens. Allowed values are `),ss$1(346,`span`,9),WC(347,`left`),Bu(),WC(348,` | `),ss$1(349,`span`,9),WC(350,`right`),Bu(),WC(351,` | `),ss$1(352,`span`,9),WC(353,`null`),Bu()(),ss$1(354,`td`)(355,`div`,12),WC(356,` string `),Bu()(),ss$1(357,`td`)(358,`div`,13),WC(359,` null `),Bu()()(),ss$1(360,`tr`)(361,`td`),WC(362,`suiScrolling`),Bu(),ss$1(363,`td`),WC(364,`Determines if the menu is scrollable or not.`),Bu(),ss$1(365,`td`)(366,`div`,12),WC(367,` boolean `),Bu()(),ss$1(368,`td`)(369,`div`,13),WC(370,` false `),Bu()()(),ss$1(371,`tr`)(372,`td`),WC(373,`suiIsOpen`),Bu(),ss$1(374,`td`),WC(375,`Sets whether the menu is open. This is managed by the select.`),Bu(),ss$1(376,`td`)(377,`div`,12),WC(378,` boolean `),Bu()(),ss$1(379,`td`)(380,`div`,13),WC(381,` false `),Bu()()()()(),ss$1(382,`h2`,2),WC(383,`suiSelectMenuItem`),Bu(),ss$1(384,`p`),WC(385,`Selector: `),ss$1(386,`span`,9),WC(387,`[suiSelectMenuItem]`),Bu(),WC(388,`. An option inside the menu rendered by `),ss$1(389,`span`,9),WC(390,`sui-select`),Bu(),WC(391,`. You do not normally use this directly.`),Bu(),ss$1(392,`h4`,4),WC(393,`Properties`),Bu(),ss$1(394,`table`,11)(395,`thead`)(396,`tr`)(397,`th`),WC(398,`Property`),Bu(),ss$1(399,`th`),WC(400,`Description`),Bu(),ss$1(401,`th`),WC(402,`Type`),Bu(),ss$1(403,`th`),WC(404,`Default`),Bu()()(),ss$1(405,`tbody`)(406,`tr`)(407,`td`),WC(408,`suiValue`),Bu(),ss$1(409,`td`),WC(410,`The value to be emitted if this menu item is selected.`),Bu(),ss$1(411,`td`)(412,`div`,12),WC(413,` any `),Bu()(),ss$1(414,`td`)(415,`div`,13),WC(416,` null `),Bu()()(),ss$1(417,`tr`)(418,`td`),WC(419,`suiSelected`),Bu(),ss$1(420,`td`),WC(421,`Determines if the menu item is shown as selected.`),Bu(),ss$1(422,`td`)(423,`div`,12),WC(424,` boolean `),Bu()(),ss$1(425,`td`)(426,`div`,13),WC(427,` false `),Bu()()(),ss$1(428,`tr`)(429,`td`),WC(430,`suiMultiple`),Bu(),ss$1(431,`td`),WC(432,`Determines if this menu allows for selecting multiple items.`),Bu(),ss$1(433,`td`)(434,`div`,12),WC(435,` boolean `),Bu()(),ss$1(436,`td`)(437,`div`,13),WC(438,` false `),Bu()()()()()())}var Dr=(()=>{class n{constructor(o){this.snippetStandard=Ns,this.snippetFluid=Us,this.snippetSearch=$s,this.snippetMultiple=Ys,this.snippetMultipleSearch=Gs,this.snippetFlag=Xs,this.snippetImages=Js,this.snippetTwoWay=qs,this.snippetLoading=Zs,this.snippetError=Ks,this.snippetDisabled=Qs,this.snippetScrolling=er,this.snippetCompact=tr,this.snippetStandardTs=ir,this.snippetSearchTs=nr,this.snippetMultipleTs=or,this.snippetFlagsTs=ar,this.snippetImagesTs=sr,this.snippetTwoWayTs=rr,this.snippetStatesTs=lr,this.snippetScrollingTs=dr,this.snippetCompactTs=mr,o.setTitle(`Select | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-select`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Select`,`subHeader`,`A select is a dropdown used to pick one or more values from a list of options`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`docDemo`,``],[`sui-message`,``,`suiIcon`,``],[`sui-icon`,``,`suiIconType`,`info circle`],[`suiMessageContent`,``],[`sui-label`,``],[`routerLink`,`/modules/dropdown`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,N0,122,26,`div`,1)(2,U0,439,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[Qt,wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,we,li$1,ai,pr,ur,cr,hr,gr,fr,Sr,vr,xr,br,yr,Er,Cr],encapsulation:2,changeDetection:1})}}return n})();var wr=`<sui-modal
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
`;var _r=`isStandardModalVisible = true;
`;var Tr=`<sui-modal
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
`;var Mr=`isBasicModalVisible = true;
`;var Ir=`<sui-modal
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
`;var Pr=`isFullScreenModalVisible = true;
`;var kr=`<sui-modal
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
`;var Fr=`isSizeModalVisible = true;
`;var Ar=`<sui-modal
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
`;var Vr=`isScrollingModalVisible = true;
`;var Br=`<sui-modal
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
`;var Or=`isClosableModalVisible = true;
`;var Lr=`<sui-modal
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
`;var Hr=`isMaskClosableModalVisible = true;
`;var yt=(()=>{class n{get classes(){return`actions`}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiModalActions`,``]],hostVars:2,hostBindings:function(a,s){a&2&&FC(s.classes)},exportAs:[`suiModalActions`]})}}return n})();var Et=(()=>{class n extends On$1{constructor(){super(...arguments),this.suiImage=!1,this.suiScrollable=!1}get classes(){return[J.getPropClass(this.suiScrollable,`scrolling`),J.getPropClass(this.suiImage,`image`),`content`].join(` `)}static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiModalContent`,``]],inputs:{suiImage:`suiImage`,suiScrollable:`suiScrollable`},exportAs:[`suiModalContent`],features:[lo$1]})}}return dS([ve()],n.prototype,`suiImage`,void 0),dS([ve()],n.prototype,`suiScrollable`,void 0),n})();var Wr=(()=>{class n{get classes(){return`description`}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiModalDescription`,``]],hostVars:2,hostBindings:function(a,s){a&2&&FC(s.classes)},exportAs:[`suiModalDescription`]})}}return n})();var st=(()=>{class n{get visible(){return this._visible}set visible(o){o?this.showModal():this.hideModal(),this._visible=o,this.visibleChange.emit(o)}get classes(){return[`ui`,this.suiSize,J.getPropClass(this.suiBasic,`basic`),J.getPropClass(this.suiFullScreen,`fullscreen`),this.scrollClass,`modal`,`transition`,`visible`,`active`].join(` `)}get scrollClass(){return this.suiScroll===`full`?`long`:this.suiScroll===`medium`?`longer`:``}constructor(){this.document=g(Y),this.renderer=g(yn),this.viewRef=g(ur$1),this.suiHeaderText=null,this.suiHeaderIcon=null,this.suiSize=null,this.suiScroll=`none`,this.suiBasic=!1,this.suiClosable=!0,this.suiCentered=!0,this.suiBlurring=!1,this.suiFullScreen=!1,this.suiMaskClosable=!0,this.visibleChange=new nt$1,this._visible=!1,this._modalDomRef=null,this.clickListener=null,this.uniqueId=Math.ceil(Math.random()*1e8)}ngOnDestroy(){let o=this.getModalFromDom();o&&(this.renderer.removeChild(this.document.body,o),this.suiBlurring&&this.renderer.removeClass(this.document.body,`dimmable`))}showModal(){this.isModalInDom()||this.generateDomElement(),this._modalDomRef&&(this.renderer.setProperty(this._modalDomRef,`style`,`display: flex !important;`),this.renderer.addClass(this._modalDomRef,`visible`),this.renderer.addClass(this._modalDomRef,`active`),this.suiBlurring&&(this.renderer.addClass(this.document.body,`dimmable`),this.renderer.addClass(this.document.body,`blurring`),this.renderer.addClass(this.document.body,`dimmed`)))}hideModal(){this._modalDomRef&&(this.renderer.removeAttribute(this._modalDomRef,`style`),this.renderer.removeClass(this._modalDomRef,`visible`),this.renderer.removeClass(this._modalDomRef,`active`),this.suiBlurring&&(this.renderer.removeClass(this.document.body,`blurring`),this.renderer.removeClass(this.document.body,`dimmed`)))}generateDomElement(){let o=this.renderer.createElement(`div`);this.renderer.setAttribute(o,`id`,this.uniqueId.toString());let a=`ui dimmer modals page`+(this.suiCentered?``:` top aligned`)+` transition`;this.renderer.setAttribute(o,`class`,a);let s=this.viewRef.createEmbeddedView(this.contentTemplate);s.detectChanges();for(let p of s.rootNodes)this.renderer.appendChild(o,p);this._modalDomRef=o,this.clickListener=this.renderer.listen(this._modalDomRef,`click`,p=>{p.target.id===this.uniqueId.toString()&&this.onClick()}),this.renderer.appendChild(this.document.body,this._modalDomRef)}isModalInDom(){return!!this.getModalFromDom()}getModalFromDom(){return this.document.getElementById(String(this.uniqueId))}onClick(){this.suiMaskClosable&&(this.visible=!1)}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){let o=[`contentTemplate`],a=[`*`];function s(ie,ke){if(ie&1){let ne=fC();ss$1(0,`i`,4),Qh$1(`click`,function(){Pd$1(ne);let W=hC(3);return jd$1(W.visible=!1)}),Bu()}}function p(ie,ke){if(ie&1&&eC(0,s,1,0,`i`,3),ie&2){let ne=hC(2);nC(ne.suiBasic?-1:0)}}function m(ie,ke){if(ie&1&&Gh$1(0,`i`,5),ie&2){let ne=hC(3);Uh$1(`suiIconType`,ne.suiHeaderIcon)}}function v(ie,ke){if(ie&1&&(ss$1(0,`div`),eC(1,m,1,1,`i`,5),WC(2),Bu()),ie&2){let ne=hC(2);go$1(`ui`,!!ne.suiHeaderIcon)(`icon`,!!ne.suiHeaderIcon)(`header`,!0),KD(),nC(ne.suiHeaderIcon?1:-1),KD(),zu$1(` `,ne.suiHeaderText,` `)}}function O(ie,ke){if(ie&1&&(ss$1(0,`div`,1),eC(1,p,1,1),eC(2,v,3,8,`div`,2),yC(3),Bu()),ie&2){let ne=hC();Uh$1(`ngClass`,ne.classes),KD(),nC(ne.suiClosable?1:-1),KD(),nC(ne.suiHeaderText||ne.suiHeaderIcon?2:-1)}}return RI({type:n,selectors:[[`sui-modal`]],viewQuery:function(ke,ne){if(ke&1&&eg(o,7),ke&2){let dt;DC(dt=EC())&&(ne.contentTemplate=dt.first)}},inputs:{suiHeaderText:`suiHeaderText`,suiHeaderIcon:`suiHeaderIcon`,suiSize:`suiSize`,suiScroll:`suiScroll`,suiBasic:`suiBasic`,suiClosable:`suiClosable`,suiCentered:`suiCentered`,suiBlurring:`suiBlurring`,suiFullScreen:`suiFullScreen`,suiMaskClosable:`suiMaskClosable`,visible:`visible`},outputs:{visibleChange:`visibleChange`},ngContentSelectors:a,decls:2,vars:0,consts:[[`contentTemplate`,``],[2,`display`,`block !important`,3,`ngClass`],[3,`ui`,`icon`,`header`],[`sui-icon`,``,`suiIconType`,`close`],[`sui-icon`,``,`suiIconType`,`close`,3,`click`],[`sui-icon`,``,3,`suiIconType`]],template:function(ke,ne){ke&1&&(mC(),Ph(0,O,4,3,`ng-template`,null,0,aw))},dependencies:[sl$1,zw,we],encapsulation:2})})()}}return dS([ve()],n.prototype,`suiBasic`,void 0),dS([ve()],n.prototype,`suiClosable`,void 0),dS([ve()],n.prototype,`suiCentered`,void 0),dS([ve()],n.prototype,`suiBlurring`,void 0),dS([ve()],n.prototype,`suiFullScreen`,void 0),dS([ve()],n.prototype,`suiMaskClosable`,void 0),n})();var Rr=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,st]})}}return n})();function sh(n,u){n&1&&Gh$1(0,`div`,9)(1,`img`,6)}var rt=class{constructor(){this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((u,o)=>o)}};var jr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-modal-standard-example`]],standalone:!1,features:[lo$1],decls:20,vars:1,consts:[[`suiHeaderText`,`Select a Photo`,3,`visibleChange`,`visible`],[`sui-image`,``,`suiModalContent`,``],[`sui-image`,``,`suiSize`,`medium`],[`src`,`https://semantic-ui.com/images/avatar2/large/rachel.png`],[`suiCardDescription`,``],[`sui-header`,``],[`href`,`https://www.gravatar.com`,`target`,`_blank`],[`suiModalActions`,``],[`sui-button`,``,`suiEmphasis`,`secondary`,`suiColour`,`black`],[`sui-button`,``,`suiEmphasis`,`positive`,`suiIcon`,``,`suiLabeled`,`right labeled`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(ss$1(0,`sui-modal`,0),vg(`visibleChange`,function(m){return YC(s.isStandardModalVisible,m)||(s.isStandardModalVisible=m),m}),ss$1(1,`div`,1)(2,`div`,2),Gh$1(3,`img`,3),Bu(),ss$1(4,`div`,4)(5,`div`,5),WC(6,`We've auto-chosen a profile image for you.`),Bu(),ss$1(7,`p`),WC(8,`We've grabbed the following image from the `),ss$1(9,`a`,6),WC(10,`gravatar`),Bu(),WC(11,` image associated with your registered e-mail address.`),Bu(),ss$1(12,`p`),WC(13,`Is it okay to use this photo?`),Bu()()(),ss$1(14,`div`,7)(15,`div`,8),WC(16,` Nope `),Bu(),ss$1(17,`div`,9),WC(18,` Yep, that's me `),Gh$1(19,`i`,10),Bu()()()),a&2&&yg(`visible`,s.isStandardModalVisible)},dependencies:[F,Ws$1,Ii,we,z,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();var Nr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-modal-basic-example`]],standalone:!1,features:[lo$1],decls:11,vars:1,consts:[[`suiBasic`,``,`suiHeaderIcon`,`archive`,`suiHeaderText`,`Archive Old Messages`,3,`visibleChange`,`visible`],[`sui-image`,``,`suiModalContent`,``],[`suiModalActions`,``],[`sui-button`,``,`suiBasic`,``,`suiInverted`,``,`suiColour`,`red`],[`sui-icon`,``,`suiIconType`,`remove`],[`sui-button`,``,`suiInverted`,``,`suiColour`,`green`,3,`click`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(ss$1(0,`sui-modal`,0),vg(`visibleChange`,function(m){return YC(s.isBasicModalVisible,m)||(s.isBasicModalVisible=m),m}),ss$1(1,`div`,1)(2,`p`),WC(3,`Your inbox is getting full, would you like us to enable automatic archiving of old messages?`),Bu()(),ss$1(4,`div`,2)(5,`div`,3),Gh$1(6,`i`,4),WC(7,` No `),Bu(),ss$1(8,`div`,5),Qh$1(`click`,function(){return s.isStandardModalVisible=!1}),Gh$1(9,`i`,6),WC(10,` Yes `),Bu()()()),a&2&&yg(`visible`,s.isBasicModalVisible)},dependencies:[Ii,we,z,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();var Ur=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-modal-full-screen-example`]],standalone:!1,features:[lo$1],decls:17,vars:2,consts:[[`suiFullScreen`,``,`suiHeaderText`,`Update Your Settings`,3,`visibleChange`,`visible`],[`suiModalContent`,``],[`sui-form`,``],[`sui-header`,``,`suiDividing`,``],[`suiFormField`,``],[3,`checked`],[`suiModalActions`,``],[`sui-button`,``],[`sui-button`,``,`suiEmphasis`,`positive`]],template:function(a,s){a&1&&(ss$1(0,`sui-modal`,0),vg(`visibleChange`,function(m){return YC(s.isFullScreenModalVisible,m)||(s.isFullScreenModalVisible=m),m}),ss$1(1,`div`,1)(2,`div`,2)(3,`h4`,3),WC(4,`Give us your feedback`),Bu(),ss$1(5,`div`,4)(6,`label`),WC(7,`Feedback`),Bu(),Gh$1(8,`textarea`),Bu(),ss$1(9,`div`,4)(10,`sui-checkbox`,5),WC(11,`It's okay to contact me.`),Bu()()()(),ss$1(12,`div`,6)(13,`div`,7),WC(14,` Cancel `),Bu(),ss$1(15,`div`,8),WC(16,` Send `),Bu()()()),a&2&&(yg(`visible`,s.isFullScreenModalVisible),KD(10),Uh$1(`checked`,!0))},dependencies:[Si$1,Oi$1,Ws$1,Ii,st,yt,Et,P],encapsulation:2,changeDetection:1})}}return n})();var $r=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-modal-size-example`]],standalone:!1,features:[lo$1],decls:10,vars:1,consts:[[`suiSize`,`mini`,`suiHeaderText`,`Delete Your Account`,3,`visibleChange`,`visible`],[`suiModalContent`,``],[`suiModalActions`,``],[`sui-button`,``,`suiColour`,`red`],[`sui-button`,``,`suiIcon`,``,`suiLabeled`,`right labeled`,`suiEmphasis`,`positive`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(ss$1(0,`sui-modal`,0),vg(`visibleChange`,function(m){return YC(s.isSizeModalVisible,m)||(s.isSizeModalVisible=m),m}),ss$1(1,`div`,1)(2,`p`),WC(3,`Are you sure you want to delete your account`),Bu()(),ss$1(4,`div`,2)(5,`div`,3),WC(6,` No `),Bu(),ss$1(7,`div`,4),WC(8,` Yes `),Gh$1(9,`i`,5),Bu()()()),a&2&&yg(`visible`,s.isSizeModalVisible)},dependencies:[Ii,we,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();var Yr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-modal-scrolling-example`]],standalone:!1,features:[lo$1],decls:15,vars:1,consts:[[`suiHeaderText`,`Profile Picture`,3,`visibleChange`,`visible`],[`suiModalContent`,``,`suiScrollable`,``,`suiImage`,``],[`sui-image`,``,`suiSize`,`medium`],[`src`,`/assets/images/wireframes/image.png`],[`suiModalDescription`,``],[`sui-header`,``],[`sui-image`,``,`src`,`/assets/images/wireframes/paragraph.png`],[`suiModalActions`,``],[`sui-button`,``,`suiEmphasis`,`secondary`,1,`black`,`deny`,3,`click`],[`sui-divider`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-modal`,0),vg(`visibleChange`,function(m){return YC(s.isScrollingModalVisible,m)||(s.isScrollingModalVisible=m),m}),ss$1(1,`div`,1)(2,`div`,2),Gh$1(3,`img`,3),Bu(),ss$1(4,`div`,4)(5,`div`,5),WC(6,`Modal Header`),Bu(),ss$1(7,`p`),WC(8,`This is an example of expanded content that will cause the modal's dimmer to scroll`),Bu(),Gh$1(9,`img`,6),iC(10,sh,2,0,null,null,oC),Bu()(),ss$1(12,`div`,7)(13,`div`,8),Qh$1(`click`,function(){return s.isScrollingModalVisible=!1}),WC(14,` Close `),Bu()()()),a&2&&(yg(`visible`,s.isScrollingModalVisible),KD(10),sC(s.dummyList))},dependencies:[Ws$1,Ii,_i,z,st,yt,Et,Wr],encapsulation:2,changeDetection:1})}}return n})();var Gr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-modal-closable-example`]],standalone:!1,features:[lo$1],decls:10,vars:1,consts:[[`suiClosable`,`false`,`suiHeaderText`,`Delete Your Account`,3,`visibleChange`,`visible`],[`suiModalContent`,``],[`suiModalActions`,``],[`sui-button`,``,`suiColour`,`red`],[`sui-button`,``,`suiIcon`,``,`suiLabeled`,`right labeled`,`suiEmphasis`,`positive`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(ss$1(0,`sui-modal`,0),vg(`visibleChange`,function(m){return YC(s.isClosableModalVisible,m)||(s.isClosableModalVisible=m),m}),ss$1(1,`div`,1)(2,`p`),WC(3,`Are you sure you want to delete your account`),Bu()(),ss$1(4,`div`,2)(5,`div`,3),WC(6,` No `),Bu(),ss$1(7,`div`,4),WC(8,` Yes `),Gh$1(9,`i`,5),Bu()()()),a&2&&yg(`visible`,s.isClosableModalVisible)},dependencies:[Ii,we,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();var Xr=(()=>{class n extends rt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-modal-mask-closable-example`]],standalone:!1,features:[lo$1],decls:10,vars:1,consts:[[`suiMaskClosable`,`false`,`suiHeaderText`,`Delete Your Account`,3,`visibleChange`,`visible`],[`suiModalContent`,``],[`suiModalActions`,``],[`sui-button`,``,`suiColour`,`red`],[`sui-button`,``,`suiIcon`,``,`suiLabeled`,`right labeled`,`suiEmphasis`,`positive`],[`sui-icon`,``,`suiIconType`,`checkmark`]],template:function(a,s){a&1&&(ss$1(0,`sui-modal`,0),vg(`visibleChange`,function(m){return YC(s.isMaskClosableModalVisible,m)||(s.isMaskClosableModalVisible=m),m}),ss$1(1,`div`,1)(2,`p`),WC(3,`Are you sure you want to delete your account`),Bu()(),ss$1(4,`div`,2)(5,`div`,3),WC(6,` No `),Bu(),ss$1(7,`div`,4),WC(8,` Yes `),Gh$1(9,`i`,5),Bu()()()),a&2&&yg(`visible`,s.isMaskClosableModalVisible)},dependencies:[Ii,we,st,yt,Et],encapsulation:2,changeDetection:1})}}return n})();function lh(n,u){n&1&&Gh$1(0,`doc-modal-standard-example`)}function dh(n,u){n&1&&Gh$1(0,`doc-modal-basic-example`)}function mh(n,u){n&1&&Gh$1(0,`doc-modal-full-screen-example`)}function ph(n,u){n&1&&Gh$1(0,`doc-modal-size-example`)}function uh(n,u){n&1&&Gh$1(0,`doc-modal-scrolling-example`)}function ch(n,u){n&1&&Gh$1(0,`doc-modal-closable-example`)}function hh(n,u){n&1&&Gh$1(0,`doc-modal-mask-closable-example`)}function gh(n,u){if(n&1){let o=fC();ss$1(0,`div`)(1,`h2`,2),WC(2,`States`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Modal`),Bu(),ss$1(6,`p`),WC(7,`A standard modal`),Bu(),ss$1(8,`button`,5),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.isStandardModalVisible=!0)}),WC(9,`Show Modal`),Bu(),Ph(10,lh,1,0,`ng-template`,6),Bu(),ss$1(11,`doc-code-sample`,3)(12,`h3`,4),WC(13,`Basic`),Bu(),ss$1(14,`p`),WC(15,`A modal can reduce its complexity`),Bu(),ss$1(16,`button`,5),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.isBasicModalVisible=!0)}),WC(17,`Show Modal`),Bu(),Ph(18,dh,1,0,`ng-template`,6),Bu(),ss$1(19,`h2`,2),WC(20,`Variations`),Bu(),ss$1(21,`doc-code-sample`,3)(22,`h3`,4),WC(23,`Full Screen`),Bu(),ss$1(24,`p`),WC(25,`A modal can use the entire size of the screen`),Bu(),ss$1(26,`button`,5),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.isFullScreenModalVisible=!0)}),WC(27,`Show Modal`),Bu(),Ph(28,mh,1,0,`ng-template`,6),Bu(),ss$1(29,`doc-code-sample`,3)(30,`h3`,4),WC(31,`Size`),Bu(),ss$1(32,`p`),WC(33,`A modal can vary in size`),Bu(),ss$1(34,`button`,5),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.isSizeModalVisible=!0)}),WC(35,`Show Modal`),Bu(),Ph(36,ph,1,0,`ng-template`,6),Bu(),ss$1(37,`doc-code-sample`,3)(38,`h3`,4),WC(39,`Scrolling Content`),Bu(),ss$1(40,`p`),WC(41,`A modal can use the entire size of the screen.`),Bu(),ss$1(42,`button`,5),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.isScrollingModalVisible=!0)}),WC(43,`Show Modal`),Bu(),Ph(44,uh,1,0,`ng-template`,6),Bu(),ss$1(45,`doc-code-sample`,3)(46,`h3`,4),WC(47,`Closable`),Bu(),ss$1(48,`p`),WC(49,`By default, a modal is rendered with a close icon in the top right corner. The modal can be rendered without the close button`),Bu(),ss$1(50,`button`,5),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.isClosableModalVisible=!0)}),WC(51,`Show Modal`),Bu(),Ph(52,ch,1,0,`ng-template`,6),Bu(),ss$1(53,`doc-code-sample`,3)(54,`h3`,4),WC(55,`Mask Closable`),Bu(),ss$1(56,`p`),WC(57,`By default, a modal can be closed by clicking on the background. If that isn't the desired behaviour, that is configurable`),Bu(),ss$1(58,`button`,5),Qh$1(`click`,function(){Pd$1(o);let s=hC();return jd$1(s.isMaskClosableModalVisible=!0)}),WC(59,`Show Modal`),Bu(),Ph(60,hh,1,0,`ng-template`,6),Bu()()}if(n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetStandard)(`componentCode`,o.snippetStandardTs),KD(8),Uh$1(`templateCode`,o.snippetBasic)(`componentCode`,o.snippetBasicTs),KD(10),Uh$1(`templateCode`,o.snippetFullScreen)(`componentCode`,o.snippetFullScreenTs),KD(8),Uh$1(`templateCode`,o.snippetSize)(`componentCode`,o.snippetSizeTs),KD(8),Uh$1(`templateCode`,o.snippetScrolling)(`componentCode`,o.snippetScrollingTs),KD(8),Uh$1(`templateCode`,o.snippetClosable)(`componentCode`,o.snippetClosableTs),KD(8),Uh$1(`templateCode`,o.snippetMaskClosable)(`componentCode`,o.snippetMaskClosableTs)}}function fh(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-modal`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,7)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiHeaderText`),Bu(),ss$1(20,`td`),WC(21,`The modal header`),Bu(),ss$1(22,`td`)(23,`div`,8),WC(24,` string `),Bu()(),ss$1(25,`td`)(26,`div`,9),WC(27,` null `),Bu()()(),ss$1(28,`tr`)(29,`td`),WC(30,`suiHeaderIcon`),Bu(),ss$1(31,`td`),WC(32,`The modal header icon type`),Bu(),ss$1(33,`td`)(34,`div`,8),WC(35,` string `),Bu()(),ss$1(36,`td`)(37,`div`,9),WC(38,` null `),Bu()()(),ss$1(39,`tr`)(40,`td`),WC(41,`suiSize`),Bu(),ss$1(42,`td`),WC(43,` Set the modal's size. Allowed values could be `),ss$1(44,`span`,10),WC(45,`mini`),Bu(),WC(46,` | `),ss$1(47,`span`,10),WC(48,`tiny`),Bu(),WC(49,` | `),ss$1(50,`span`,10),WC(51,`small`),Bu(),WC(52,` | `),ss$1(53,`span`,10),WC(54,`large`),Bu(),WC(55,` | `),ss$1(56,`span`,10),WC(57,`null`),Bu()(),ss$1(58,`td`)(59,`div`,8),WC(60,` string `),Bu()(),ss$1(61,`td`)(62,`div`,9),WC(63,` null `),Bu()()(),ss$1(64,`tr`)(65,`td`),WC(66,`suiScroll`),Bu(),ss$1(67,`td`),WC(68,` Determines if the modal is scrollable. Allowed values could be `),ss$1(69,`span`,10),WC(70,`full`),Bu(),WC(71,` | `),ss$1(72,`span`,10),WC(73,`medium`),Bu(),WC(74,` | `),ss$1(75,`span`,10),WC(76,`none`),Bu()(),ss$1(77,`td`)(78,`div`,8),WC(79,` string `),Bu()(),ss$1(80,`td`)(81,`div`,9),WC(82,` none `),Bu()()(),ss$1(83,`tr`)(84,`td`),WC(85,`suiBasic`),Bu(),ss$1(86,`td`),WC(87,`Determines if the modal is rendered as basic`),Bu(),ss$1(88,`td`)(89,`div`,8),WC(90,` boolean `),Bu()(),ss$1(91,`td`)(92,`div`,9),WC(93,` false `),Bu()()(),ss$1(94,`tr`)(95,`td`),WC(96,`suiClosable`),Bu(),ss$1(97,`td`),WC(98,`Determines if the close icon is rendered on the modal`),Bu(),ss$1(99,`td`)(100,`div`,8),WC(101,` boolean `),Bu()(),ss$1(102,`td`)(103,`div`,9),WC(104,` true `),Bu()()(),ss$1(105,`tr`)(106,`td`),WC(107,`suiCentered`),Bu(),ss$1(108,`td`),WC(109,`Determines if the modal is rendered vertically centered`),Bu(),ss$1(110,`td`)(111,`div`,8),WC(112,` boolean `),Bu()(),ss$1(113,`td`)(114,`div`,9),WC(115,` true `),Bu()()(),ss$1(116,`tr`)(117,`td`),WC(118,`suiBlurring`),Bu(),ss$1(119,`td`),WC(120,`Determines if the modal uses a dimmer background`),Bu(),ss$1(121,`td`)(122,`div`,8),WC(123,` boolean `),Bu()(),ss$1(124,`td`)(125,`div`,9),WC(126,` false `),Bu()()(),ss$1(127,`tr`)(128,`td`),WC(129,`suiFullScreen`),Bu(),ss$1(130,`td`),WC(131,`Determines if the modal is rendered to fill the screen horizontally`),Bu(),ss$1(132,`td`)(133,`div`,8),WC(134,` boolean `),Bu()(),ss$1(135,`td`)(136,`div`,9),WC(137,` false `),Bu()()(),ss$1(138,`tr`)(139,`td`),WC(140,`suiMaskClosable`),Bu(),ss$1(141,`td`),WC(142,`Determines if the modal is dismissable by clicking on the background`),Bu(),ss$1(143,`td`)(144,`div`,8),WC(145,` boolean `),Bu()(),ss$1(146,`td`)(147,`div`,9),WC(148,` true `),Bu()()(),ss$1(149,`tr`)(150,`td`),WC(151,`visible`),Bu(),ss$1(152,`td`),WC(153,`Determines if the modal is visible or not`),Bu(),ss$1(154,`td`)(155,`div`,8),WC(156,` boolean `),Bu()(),ss$1(157,`td`)(158,`div`,9),WC(159,` false `),Bu()()()()(),ss$1(160,`h4`,4),WC(161,`Events`),Bu(),ss$1(162,`table`,7)(163,`thead`)(164,`tr`)(165,`th`),WC(166,`Property`),Bu(),ss$1(167,`th`),WC(168,`Description`),Bu(),ss$1(169,`th`),WC(170,`Type`),Bu()()(),ss$1(171,`tbody`)(172,`tr`)(173,`td`),WC(174,`visibleChange`),Bu(),ss$1(175,`td`),WC(176,`Fired when a the modal's visibility changes `),Bu(),ss$1(177,`td`)(178,`div`,8),WC(179,` boolean `),Bu()()()()(),ss$1(180,`h2`,2),WC(181,`suiModalContent`),Bu(),ss$1(182,`h4`,4),WC(183,`Properties`),Bu(),ss$1(184,`table`,7)(185,`thead`)(186,`tr`)(187,`th`),WC(188,`Property`),Bu(),ss$1(189,`th`),WC(190,`Description`),Bu(),ss$1(191,`th`),WC(192,`Type`),Bu(),ss$1(193,`th`),WC(194,`Default`),Bu()()(),ss$1(195,`tbody`)(196,`tr`)(197,`td`),WC(198,`suiImage`),Bu(),ss$1(199,`td`),WC(200,`Determines if the content can contain an image `),Bu(),ss$1(201,`td`)(202,`div`,8),WC(203,` boolean `),Bu()(),ss$1(204,`td`)(205,`div`,9),WC(206,` false `),Bu()()(),ss$1(207,`tr`)(208,`td`),WC(209,`suiScrollable`),Bu(),ss$1(210,`td`),WC(211,`Determines if the content is scrollable or not `),Bu(),ss$1(212,`td`)(213,`div`,8),WC(214,` boolean `),Bu()(),ss$1(215,`td`)(216,`div`,9),WC(217,` false `),Bu()()()()(),ss$1(218,`h2`,2),WC(219,`suiModalActions`),Bu(),ss$1(220,`h4`,4),WC(221,`Properties`),Bu(),ss$1(222,`table`,7)(223,`thead`)(224,`tr`)(225,`th`),WC(226,`Property`),Bu(),ss$1(227,`th`),WC(228,`Description`),Bu(),ss$1(229,`th`),WC(230,`Type`),Bu(),ss$1(231,`th`),WC(232,`Default`),Bu()()(),Gh$1(233,`tbody`),ss$1(234,`tfoot`,11)(235,`tr`)(236,`th`,12)(237,`div`,13),WC(238,`No properties for this directive`),Bu()()()()(),ss$1(239,`h2`,2),WC(240,`suiModalDescription`),Bu(),ss$1(241,`h4`,4),WC(242,`Properties`),Bu(),ss$1(243,`table`,7)(244,`thead`)(245,`tr`)(246,`th`),WC(247,`Property`),Bu(),ss$1(248,`th`),WC(249,`Description`),Bu(),ss$1(250,`th`),WC(251,`Type`),Bu(),ss$1(252,`th`),WC(253,`Default`),Bu()()(),Gh$1(254,`tbody`),ss$1(255,`tfoot`,11)(256,`tr`)(257,`th`,12)(258,`div`,13),WC(259,`No properties for this directive`),Bu()()()()()())}var Jr=(()=>{class n{constructor(o){this.snippetStandard=wr,this.snippetStandardTs=_r,this.snippetBasic=Tr,this.snippetBasicTs=Mr,this.snippetFullScreen=Ir,this.snippetFullScreenTs=Pr,this.snippetSize=kr,this.snippetSizeTs=Fr,this.snippetScrolling=Ar,this.snippetScrollingTs=Vr,this.snippetClosable=Br,this.snippetClosableTs=Or,this.snippetMaskClosable=Lr,this.snippetMaskClosableTs=Hr,this.isStandardModalVisible=!1,this.isBasicModalVisible=!1,this.isFullScreenModalVisible=!1,this.isSizeModalVisible=!1,this.isScrollingModalVisible=!1,this.isClosableModalVisible=!1,this.isMaskClosableModalVisible=!1,this.dummyList=Array(10).fill(0).map((a,s)=>s),o.setTitle(`Modal | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-modal`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Modal`,`subHeader`,`Modals display content that temporarily blocks interactions with the main view of a site.`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`sui-button`,``,3,`click`],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[`sui-label`,``],[1,`full-width`],[`colspan`,`4`],[2,`text-align`,`center`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,gh,61,14,`div`,1)(2,fh,260,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,Ii,jr,Nr,Ur,$r,Yr,Gr,Xr],encapsulation:2,changeDetection:1})}}return n})();var qr=`<sui-dropdown>
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
`;var Zr=`<span>
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
`;var Kr=`<sui-dropdown suiPointing
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
`;var Qr=`<sui-dropdown suiFloating
              class="labeled icon button">
  <i sui-icon suiIconType="filter"></i>
  <span class="text">Filter Posts</span>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Edit Post</div>
    <div suiDropdownMenuItem>Remove Post</div>
    <div suiDropdownMenuItem>Hide Post</div>
  </div>
</sui-dropdown>
`;var el=`<sui-dropdown suiSimple>
  Dropdown
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var tl=`<sui-dropdown>
  <span class="text">Filter</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuHeader>Filter by tag</div>
    <div suiDropdownMenuItem>Important</div>
    <div suiDropdownMenuItem>Announcement</div>
    <div suiDropdownMenuItem>Discussion</div>
  </div>
</sui-dropdown>
`;var il=`<sui-dropdown>
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
`;var nl=`<sui-dropdown>
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
`;var ol=`<sui-dropdown>
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
`;var al=`<sui-dropdown>
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
`;var sl=`<sui-dropdown>
  <span class="text">Login</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div sui-message suiState="error">
      <div suiMessageHeader>Error</div>
      <p>You must log-in to see all categories</p>
    </div>
  </div>
</sui-dropdown>
`;var rl=`<sui-dropdown suiFluid
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
`;var ll=`<sui-dropdown>
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
`;var dl=`<sui-dropdown>
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
`;var ml=`<sui-dropdown suiLoading>
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var pl=`<sui-dropdown suiError
              class="selection">
  <span class="text">Dropdown</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var ul=`<sui-dropdown disabled>
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
`;var cl=`<sui-dropdown>
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
`;var hl=`<sui-dropdown suiCompact
              class="selection">
  <span class="text">Compact</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>A</div>
    <div suiDropdownMenuItem>B</div>
    <div suiDropdownMenuItem>C</div>
  </div>
</sui-dropdown>
`;var gl=`<sui-dropdown suiFluid
              class="selection">
  <span class="text">All Sections</span>
  <i sui-icon suiIconType="dropdown"></i>
  <div suiDropdownMenu>
    <div suiDropdownMenuItem>Choice 1</div>
    <div suiDropdownMenuItem>Choice 2</div>
    <div suiDropdownMenuItem>Choice 3</div>
  </div>
</sui-dropdown>
`;var fl=`<sui-dropdown>
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
`;var Sl=`<sui-dropdown>
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
`;var vl=`<div sui-buttons suiColour="teal">
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
`;var xl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-dropdown-example`]],standalone:!1,decls:48,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[1,`description`],[`sui-icon`,``,`suiIconType`,`folder`],[`sui-icon`,``,`suiIconType`,`trash`],[`suiDropdownMenuDivider`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`div`,0),WC(2,`File`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),WC(6,`New`),Bu(),ss$1(7,`div`,3)(8,`span`,4),WC(9,`ctrl + o`),Bu(),WC(10,` Open... `),Bu(),ss$1(11,`div`,3)(12,`span`,4),WC(13,`ctrl + s`),Bu(),WC(14,` Save as... `),Bu(),ss$1(15,`div`,3)(16,`span`,4),WC(17,`ctrl + r`),Bu(),WC(18,` Rename `),Bu(),ss$1(19,`div`,3),WC(20,`Make a copy`),Bu(),ss$1(21,`div`,3),Gh$1(22,`i`,5),WC(23,` Move to folder `),Bu(),ss$1(24,`div`,3),Gh$1(25,`i`,6),WC(26,` Move to trash `),Bu(),Gh$1(27,`div`,7),ss$1(28,`div`,3),WC(29,`Download As...`),Bu(),ss$1(30,`div`,3),Gh$1(31,`i`,1),WC(32,` Publish To Web `),ss$1(33,`div`,2)(34,`div`,3),WC(35,`Google Docs`),Bu(),ss$1(36,`div`,3),WC(37,`Google Drive`),Bu(),ss$1(38,`div`,3),WC(39,`Dropbox`),Bu(),ss$1(40,`div`,3),WC(41,`Adobe Creative Cloud`),Bu(),ss$1(42,`div`,3),WC(43,`Private FTP`),Bu(),ss$1(44,`div`,3),WC(45,`Another Service...`),Bu()()(),ss$1(46,`div`,3),WC(47,`E-mail Collaborators`),Bu()()())},dependencies:[qe,me,ze$2,$e$1,we],encapsulation:2,changeDetection:1})}}return n})();var bl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-inline-example`]],standalone:!1,decls:23,vars:0,consts:[[`suiInline`,``],[1,`text`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/jenny.jpg`,`alt`,`Jenny Hess`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/elliot.jpg`,`alt`,`Elliot Fu`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/stevie.jpg`,`alt`,`Stevie Feliciano`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/matt.jpg`,`alt`,`Matt`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/justen.jpg`,`alt`,`Justen Kitsune`]],template:function(a,s){a&1&&(ss$1(0,`span`),WC(1,` Show me posts by `),ss$1(2,`sui-dropdown`,0)(3,`div`,1),Gh$1(4,`img`,2),WC(5,` Jenny Hess `),Bu(),Gh$1(6,`i`,3),ss$1(7,`div`,4)(8,`div`,5),Gh$1(9,`img`,2),WC(10,` Jenny Hess `),Bu(),ss$1(11,`div`,5),Gh$1(12,`img`,6),WC(13,` Elliot Fu `),Bu(),ss$1(14,`div`,5),Gh$1(15,`img`,7),WC(16,` Stevie Feliciano `),Bu(),ss$1(17,`div`,5),Gh$1(18,`img`,8),WC(19,` Matt `),Bu(),ss$1(20,`div`,5),Gh$1(21,`img`,9),WC(22,` Justen Kitsune `),Bu()()()())},dependencies:[qe,me,ze$2,we,z],encapsulation:2,changeDetection:1})}}return n})();var yl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-pointing-example`]],standalone:!1,decls:55,vars:0,consts:[[`suiPointing`,``,1,`link`,`item`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`suiPointing`,``,`suiPointingDirection`,`top left`,1,`button`],[`suiPointing`,``,`suiPointingDirection`,`top right`,1,`button`],[`suiPointing`,``,`suiPointingDirection`,`left`,1,`button`],[`suiPointing`,``,`suiPointingDirection`,`right`,1,`button`]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0)(1,`span`,1),WC(2,`Home`),Bu(),Gh$1(3,`i`,2),ss$1(4,`div`,3)(5,`div`,4),WC(6,`Shopping`),Bu(),ss$1(7,`div`,4),WC(8,`Categories`),Bu(),ss$1(9,`div`,4),WC(10,`Order`),Bu()()(),ss$1(11,`sui-dropdown`,5)(12,`span`,1),WC(13,`Top Left`),Bu(),Gh$1(14,`i`,2),ss$1(15,`div`,3)(16,`div`,4),WC(17,`New`),Bu(),ss$1(18,`div`,4),WC(19,`Open...`),Bu(),ss$1(20,`div`,4),WC(21,`Save as...`),Bu()()(),ss$1(22,`sui-dropdown`,6)(23,`span`,1),WC(24,`Top Right`),Bu(),Gh$1(25,`i`,2),ss$1(26,`div`,3)(27,`div`,4),WC(28,`New`),Bu(),ss$1(29,`div`,4),WC(30,`Open...`),Bu(),ss$1(31,`div`,4),WC(32,`Save as...`),Bu()()(),ss$1(33,`sui-dropdown`,7)(34,`span`,1),WC(35,`Left`),Bu(),Gh$1(36,`i`,2),ss$1(37,`div`,3)(38,`div`,4),WC(39,`New`),Bu(),ss$1(40,`div`,4),WC(41,`Open...`),Bu(),ss$1(42,`div`,4),WC(43,`Save as...`),Bu()()(),ss$1(44,`sui-dropdown`,8)(45,`span`,1),WC(46,`Right`),Bu(),Gh$1(47,`i`,2),ss$1(48,`div`,3)(49,`div`,4),WC(50,`New`),Bu(),ss$1(51,`div`,4),WC(52,`Open...`),Bu(),ss$1(53,`div`,4),WC(54,`Save as...`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var El=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-floating-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiFloating`,``,1,`labeled`,`icon`,`button`],[`sui-icon`,``,`suiIconType`,`filter`],[1,`text`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0),Gh$1(1,`i`,1),ss$1(2,`span`,2),WC(3,`Filter Posts`),Bu(),ss$1(4,`div`,3)(5,`div`,4),WC(6,`Edit Post`),Bu(),ss$1(7,`div`,4),WC(8,`Remove Post`),Bu(),ss$1(9,`div`,4),WC(10,`Hide Post`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Cl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-simple-example`]],standalone:!1,decls:10,vars:0,consts:[[`suiSimple`,``],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0),WC(1,` Dropdown `),Gh$1(2,`i`,1),ss$1(3,`div`,2)(4,`div`,3),WC(5,`Choice 1`),Bu(),ss$1(6,`div`,3),WC(7,`Choice 2`),Bu(),ss$1(8,`div`,3),WC(9,`Choice 3`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Dl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-header-example`]],standalone:!1,decls:13,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Filter`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),WC(6,`Filter by tag`),Bu(),ss$1(7,`div`,4),WC(8,`Important`),Bu(),ss$1(9,`div`,4),WC(10,`Announcement`),Bu(),ss$1(11,`div`,4),WC(12,`Discussion`),Bu()()())},dependencies:[qe,me,ze$2,Ue$1,we],encapsulation:2,changeDetection:1})}}return n})();var wl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-divider-example`]],standalone:!1,decls:13,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`suiDropdownMenuDivider`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Filter`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),WC(6,`Important`),Bu(),Gh$1(7,`div`,4),ss$1(8,`div`,3),WC(9,`Announcement`),Bu(),Gh$1(10,`div`,4),ss$1(11,`div`,3),WC(12,`Discussion`),Bu()()())},dependencies:[qe,me,ze$2,$e$1,we],encapsulation:2,changeDetection:1})}}return n})();var _l=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-icon-example`]],standalone:!1,decls:14,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuHeader`,``],[`sui-icon`,``,`suiIconType`,`tags`],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Filter`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),Gh$1(6,`i`,4),WC(7,` Filter by tag `),Bu(),ss$1(8,`div`,5),WC(9,`Important`),Bu(),ss$1(10,`div`,5),WC(11,`Announcement`),Bu(),ss$1(12,`div`,5),WC(13,`Discussion`),Bu()()())},dependencies:[qe,me,ze$2,Ue$1,we],encapsulation:2,changeDetection:1})}}return n})();var Tl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-description-example`]],standalone:!1,decls:19,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``,2,`min-width`,`15rem`],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``],[1,`description`]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Filter Tags`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),WC(6,`Filter by tag`),Bu(),ss$1(7,`div`,4)(8,`span`,5),WC(9,`2 new`),Bu(),WC(10,` Important `),Bu(),ss$1(11,`div`,4)(12,`span`,5),WC(13,`10 new`),Bu(),WC(14,` Hopper `),Bu(),ss$1(15,`div`,4)(16,`span`,5),WC(17,`5 new`),Bu(),WC(18,` Discussion `),Bu()()())},dependencies:[qe,me,ze$2,Ue$1,we],encapsulation:2,changeDetection:1})}}return n})();var Ml=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-label-example`]],standalone:!1,decls:16,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``],[`sui-label`,``,`suiColour`,`red`,`suiEmpty`,``,`suiCircular`,``],[`sui-label`,``,`suiColour`,`blue`,`suiEmpty`,``,`suiCircular`,``],[`sui-label`,``,`suiColour`,`black`,`suiEmpty`,``,`suiCircular`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Filter`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),WC(6,`Filter by tag`),Bu(),ss$1(7,`div`,4),Gh$1(8,`div`,5),WC(9,` Important `),Bu(),ss$1(10,`div`,4),Gh$1(11,`div`,6),WC(12,` Announcement `),Bu(),ss$1(13,`div`,4),Gh$1(14,`div`,7),WC(15,` Discussion `),Bu()()())},dependencies:[fi,qe,me,ze$2,Ue$1,we],encapsulation:2,changeDetection:1})}}return n})();var Il=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-message-example`]],standalone:!1,decls:10,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`sui-message`,``,`suiState`,`error`],[`suiMessageHeader`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Login`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3)(6,`div`,4),WC(7,`Error`),Bu(),ss$1(8,`p`),WC(9,`You must log-in to see all categories`),Bu()()()())},dependencies:[qe,me,we,li$1,ri$2],encapsulation:2,changeDetection:1})}}return n})();var Pl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-floated-example`]],standalone:!1,decls:17,vars:0,consts:[[`suiFluid`,``,1,`selection`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[1,`right`,`floated`],[`sui-icon`,``,`suiIconType`,`exclamation`],[`sui-icon`,``,`suiIconType`,`bullhorn`],[`sui-icon`,``,`suiIconType`,`comments`]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0)(1,`span`,1),WC(2,`Select Type`),Bu(),Gh$1(3,`i`,2),ss$1(4,`div`,3)(5,`div`,4)(6,`span`,5),Gh$1(7,`i`,6),Bu(),WC(8,` Important `),Bu(),ss$1(9,`div`,4)(10,`span`,5),Gh$1(11,`i`,7),Bu(),WC(12,` Announcement `),Bu(),ss$1(13,`div`,4)(14,`span`,5),Gh$1(15,`i`,8),Bu(),WC(16,` Discussion `),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var kl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-input-example`]],standalone:!1,decls:17,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[1,`ui`,`icon`,`search`,`input`,3,`click`],[`sui-icon`,``,`suiIconType`,`search`],[`type`,`text`,`placeholder`,`Search issues...`],[`suiDropdownMenuDivider`,``],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Filter`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),Qh$1(`click`,function(m){return m.stopPropagation()}),Gh$1(6,`i`,4)(7,`input`,5),Bu(),Gh$1(8,`div`,6),ss$1(9,`div`,7),WC(10,`Filter by tag`),Bu(),ss$1(11,`div`,8),WC(12,`Important`),Bu(),ss$1(13,`div`,8),WC(14,`Announcement`),Bu(),ss$1(15,`div`,8),WC(16,`Discussion`),Bu()()())},dependencies:[qe,me,ze$2,Ue$1,$e$1,we],encapsulation:2,changeDetection:1})}}return n})();var Fl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-image-example`]],standalone:!1,decls:25,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuHeader`,``],[`suiDropdownMenuItem`,``],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/jenny.jpg`,`alt`,`Jenny Hess`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/elliot.jpg`,`alt`,`Elliot Fu`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/stevie.jpg`,`alt`,`Stevie Feliciano`],[`suiDropdownMenuDivider`,``],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/matt.jpg`,`alt`,`Matt`],[`sui-image`,``,`suiAvatar`,``,`src`,`/assets/images/justen.jpg`,`alt`,`Justen Kitsune`]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Add User`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),WC(6,`People You Might Know`),Bu(),ss$1(7,`div`,4),Gh$1(8,`img`,5),WC(9,` Jenny Hess `),Bu(),ss$1(10,`div`,4),Gh$1(11,`img`,6),WC(12,` Elliot Fu `),Bu(),ss$1(13,`div`,4),Gh$1(14,`img`,7),WC(15,` Stevie Feliciano `),Bu(),Gh$1(16,`div`,8),ss$1(17,`div`,3),WC(18,`Your Friends' Friends`),Bu(),ss$1(19,`div`,4),Gh$1(20,`img`,9),WC(21,` Matt `),Bu(),ss$1(22,`div`,4),Gh$1(23,`img`,10),WC(24,` Justen Kitsune `),Bu()()())},dependencies:[qe,me,ze$2,Ue$1,$e$1,we,z],encapsulation:2,changeDetection:1})}}return n})();var Al=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-loading-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiLoading`,``],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0)(1,`span`,1),WC(2,`Dropdown`),Bu(),Gh$1(3,`i`,2),ss$1(4,`div`,3)(5,`div`,4),WC(6,`Choice 1`),Bu(),ss$1(7,`div`,4),WC(8,`Choice 2`),Bu(),ss$1(9,`div`,4),WC(10,`Choice 3`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Vl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-error-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiError`,``,1,`selection`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0)(1,`span`,1),WC(2,`Dropdown`),Bu(),Gh$1(3,`i`,2),ss$1(4,`div`,3)(5,`div`,4),WC(6,`Choice 1`),Bu(),ss$1(7,`div`,4),WC(8,`Choice 2`),Bu(),ss$1(9,`div`,4),WC(10,`Choice 3`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Bl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-disabled-example`]],standalone:!1,decls:22,vars:0,consts:[[`disabled`,``],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`suiDropdownMenuItem`,``,`disabled`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0)(1,`span`,1),WC(2,`Disabled Dropdown`),Bu(),Gh$1(3,`i`,2),ss$1(4,`div`,3)(5,`div`,4),WC(6,`Choice 1`),Bu(),ss$1(7,`div`,4),WC(8,`Choice 2`),Bu(),ss$1(9,`div`,4),WC(10,`Choice 3`),Bu()()(),ss$1(11,`sui-dropdown`)(12,`span`,1),WC(13,`Disabled Item`),Bu(),Gh$1(14,`i`,2),ss$1(15,`div`,3)(16,`div`,4),WC(17,`Choice 1`),Bu(),ss$1(18,`div`,5),WC(19,`Disabled`),Bu(),ss$1(20,`div`,4),WC(21,`Choice 3`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Ol=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-scrolling-example`]],standalone:!1,decls:35,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``,`suiScrolling`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Select choice`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),WC(6,`Choice 1`),Bu(),ss$1(7,`div`,3),WC(8,`Choice 2`),Bu(),ss$1(9,`div`,3),WC(10,`Choice 3`),Bu(),ss$1(11,`div`,3),WC(12,`Choice 4`),Bu(),ss$1(13,`div`,3),WC(14,`Choice 5`),Bu(),ss$1(15,`div`,3),WC(16,`Choice 6`),Bu(),ss$1(17,`div`,3),WC(18,`Choice 7`),Bu(),ss$1(19,`div`,3),WC(20,`Choice 8`),Bu(),ss$1(21,`div`,3),WC(22,`Choice 9`),Bu(),ss$1(23,`div`,3),WC(24,`Choice 10`),Bu(),ss$1(25,`div`,3),WC(26,`Choice 11`),Bu(),ss$1(27,`div`,3),WC(28,`Choice 12`),Bu(),ss$1(29,`div`,3),WC(30,`Choice 13`),Bu(),ss$1(31,`div`,3),WC(32,`Choice 14`),Bu(),ss$1(33,`div`,3),WC(34,`Choice 15`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Ll=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-compact-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiCompact`,``,1,`selection`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0)(1,`span`,1),WC(2,`Compact`),Bu(),Gh$1(3,`i`,2),ss$1(4,`div`,3)(5,`div`,4),WC(6,`A`),Bu(),ss$1(7,`div`,4),WC(8,`B`),Bu(),ss$1(9,`div`,4),WC(10,`C`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Hl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-fluid-example`]],standalone:!1,decls:11,vars:0,consts:[[`suiFluid`,``,1,`selection`],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`,0)(1,`span`,1),WC(2,`All Sections`),Bu(),Gh$1(3,`i`,2),ss$1(4,`div`,3)(5,`div`,4),WC(6,`Choice 1`),Bu(),ss$1(7,`div`,4),WC(8,`Choice 2`),Bu(),ss$1(9,`div`,4),WC(10,`Choice 3`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Wl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-menu-direction-example`]],standalone:!1,decls:36,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`suiDropdownMenuItem`,``,`suiDirection`,`left`],[`suiDropdownMenu`,``,`suiDirection`,`left`]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Menu`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),Gh$1(6,`i`,1),WC(7,` Right `),ss$1(8,`div`,2)(9,`div`,3),WC(10,`1`),Bu(),ss$1(11,`div`,3),WC(12,`2`),Bu(),ss$1(13,`div`,3),WC(14,`3`),Bu()()(),ss$1(15,`div`,4),Gh$1(16,`i`,1),WC(17,` Left `),ss$1(18,`div`,5)(19,`div`,3),WC(20,`1`),Bu(),ss$1(21,`div`,3),WC(22,`2`),Bu(),ss$1(23,`div`,3),WC(24,`3`),Bu()()()()(),ss$1(25,`sui-dropdown`)(26,`span`,0),WC(27,`Left Menu`),Bu(),Gh$1(28,`i`,1),ss$1(29,`div`,5)(30,`div`,3),WC(31,`1`),Bu(),ss$1(32,`div`,3),WC(33,`2`),Bu(),ss$1(34,`div`,3),WC(35,`3`),Bu()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var Rl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-multiple-levels-example`]],standalone:!1,decls:25,vars:0,consts:[[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(a,s){a&1&&(ss$1(0,`sui-dropdown`)(1,`span`,0),WC(2,`Filter Posts`),Bu(),Gh$1(3,`i`,1),ss$1(4,`div`,2)(5,`div`,3),Gh$1(6,`i`,1),WC(7,` Filter by tag `),ss$1(8,`div`,2)(9,`div`,3),WC(10,`Important`),Bu(),ss$1(11,`div`,3),WC(12,`Announcement`),Bu(),ss$1(13,`div`,3),WC(14,`Discussion`),Bu()()(),ss$1(15,`div`,3),Gh$1(16,`i`,1),WC(17,` Filter by date `),ss$1(18,`div`,2)(19,`div`,3),WC(20,`This Week`),Bu(),ss$1(21,`div`,3),WC(22,`This Month`),Bu(),ss$1(23,`div`,3),WC(24,`This Year`),Bu()()()()())},dependencies:[qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();var zl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown-button-group-example`]],standalone:!1,decls:15,vars:0,consts:[[`sui-buttons`,``,`suiColour`,`teal`],[`sui-button`,``],[`suiFloating`,``,1,`button`,`icon`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``],[`sui-icon`,``,`suiIconType`,`edit`],[`sui-icon`,``,`suiIconType`,`delete`],[`sui-icon`,``,`suiIconType`,`hide`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`div`,1),WC(2,`Save`),Bu(),ss$1(3,`sui-dropdown`,2),Gh$1(4,`i`,3),ss$1(5,`div`,4)(6,`div`,5),Gh$1(7,`i`,6),WC(8,` Edit Post `),Bu(),ss$1(9,`div`,5),Gh$1(10,`i`,7),WC(11,` Remove Post `),Bu(),ss$1(12,`div`,5),Gh$1(13,`i`,8),WC(14,` Hide Post `),Bu()()()())},dependencies:[Ii,Di,qe,me,ze$2,we],encapsulation:2,changeDetection:1})}}return n})();function zh(n,u){n&1&&Gh$1(0,`doc-dropdown-dropdown-example`)}function jh(n,u){n&1&&Gh$1(0,`doc-dropdown-inline-example`)}function Nh(n,u){n&1&&Gh$1(0,`doc-dropdown-pointing-example`)}function Uh(n,u){n&1&&Gh$1(0,`doc-dropdown-floating-example`)}function $h(n,u){n&1&&Gh$1(0,`doc-dropdown-simple-example`)}function Yh(n,u){n&1&&Gh$1(0,`doc-dropdown-header-example`)}function Gh(n,u){n&1&&Gh$1(0,`doc-dropdown-divider-example`)}function Xh(n,u){n&1&&Gh$1(0,`doc-dropdown-icon-example`)}function Jh(n,u){n&1&&Gh$1(0,`doc-dropdown-description-example`)}function qh(n,u){n&1&&Gh$1(0,`doc-dropdown-label-example`)}function Zh(n,u){n&1&&Gh$1(0,`doc-dropdown-message-example`)}function Kh(n,u){n&1&&Gh$1(0,`doc-dropdown-floated-example`)}function Qh(n,u){n&1&&Gh$1(0,`doc-dropdown-input-example`)}function e1(n,u){n&1&&Gh$1(0,`doc-dropdown-image-example`)}function t1(n,u){n&1&&Gh$1(0,`doc-dropdown-loading-example`)}function i1(n,u){n&1&&Gh$1(0,`doc-dropdown-error-example`)}function n1(n,u){n&1&&Gh$1(0,`doc-dropdown-disabled-example`)}function o1(n,u){n&1&&Gh$1(0,`doc-dropdown-scrolling-example`)}function a1(n,u){n&1&&Gh$1(0,`doc-dropdown-compact-example`)}function s1(n,u){n&1&&Gh$1(0,`doc-dropdown-fluid-example`)}function r1(n,u){n&1&&Gh$1(0,`doc-dropdown-menu-direction-example`)}function l1(n,u){n&1&&Gh$1(0,`doc-dropdown-multiple-levels-example`)}function d1(n,u){n&1&&Gh$1(0,`doc-dropdown-button-group-example`)}function m1(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Dropdown`),Bu(),ss$1(6,`p`),WC(7,`A dropdown.`),Bu(),ss$1(8,`div`,5),Gh$1(9,`i`,6),ss$1(10,`div`,7)(11,`p`),WC(12,`A dropdown opens its menu when clicked. To pick a value in a form, use the selection dropdown provided by `),ss$1(13,`a`,8),WC(14,`sui-select`),Bu(),WC(15,` instead.`),Bu()()(),Ph(16,zh,1,0,`ng-template`,9),Bu(),ss$1(17,`doc-code-sample`,3)(18,`h3`,4),WC(19,`Inline`),Bu(),ss$1(20,`p`),WC(21,`A dropdown can be formatted to appear inline in other content.`),Bu(),Ph(22,jh,1,0,`ng-template`,9),Bu(),ss$1(23,`doc-code-sample`,3)(24,`h3`,4),WC(25,`Pointing`),Bu(),ss$1(26,`p`),WC(27,`A dropdown can be formatted so that its menu is pointing.`),Bu(),ss$1(28,`div`,5),Gh$1(29,`i`,6),ss$1(30,`div`,7)(31,`p`),WC(32,`Set `),ss$1(33,`span`,10),WC(34,`suiPointing`),Bu(),WC(35,` to enable the pointing arrow, and optionally `),ss$1(36,`span`,10),WC(37,`suiPointingDirection`),Bu(),WC(38,` to choose where the arrow sits.`),Bu()()(),Ph(39,Nh,1,0,`ng-template`,9),Bu(),ss$1(40,`doc-code-sample`,3)(41,`h3`,4),WC(42,`Floating`),Bu(),ss$1(43,`p`),WC(44,`A dropdown menu can appear to be floating below an element.`),Bu(),Ph(45,Uh,1,0,`ng-template`,9),Bu(),ss$1(46,`doc-code-sample`,3)(47,`h3`,4),WC(48,`Simple`),Bu(),ss$1(49,`p`),WC(50,`A simple dropdown can open on hover using only CSS.`),Bu(),Ph(51,$h,1,0,`ng-template`,9),Bu(),ss$1(52,`h2`,2),WC(53,`Content`),Bu(),ss$1(54,`doc-code-sample`,3)(55,`h3`,4),WC(56,`Header`),Bu(),ss$1(57,`p`),WC(58,`A dropdown menu can contain a header.`),Bu(),Ph(59,Yh,1,0,`ng-template`,9),Bu(),ss$1(60,`doc-code-sample`,3)(61,`h3`,4),WC(62,`Divider`),Bu(),ss$1(63,`p`),WC(64,`A dropdown menu can contain dividers to separate related content.`),Bu(),Ph(65,Gh,1,0,`ng-template`,9),Bu(),ss$1(66,`doc-code-sample`,3)(67,`h3`,4),WC(68,`Icon`),Bu(),ss$1(69,`p`),WC(70,`A dropdown menu can contain an `),ss$1(71,`a`,11),WC(72,`icon`),Bu(),WC(73,`.`),Bu(),Ph(74,Xh,1,0,`ng-template`,9),Bu(),ss$1(75,`doc-code-sample`,3)(76,`h3`,4),WC(77,`Description`),Bu(),ss$1(78,`p`),WC(79,`A dropdown menu can contain a description.`),Bu(),ss$1(80,`div`,5),Gh$1(81,`i`,6),ss$1(82,`div`,7)(83,`p`),WC(84,`Using a description may require setting a minimum width on the menu to prevent content overlap.`),Bu()()(),Ph(85,Jh,1,0,`ng-template`,9),Bu(),ss$1(86,`doc-code-sample`,3)(87,`h3`,4),WC(88,`Label`),Bu(),ss$1(89,`p`),WC(90,`A dropdown menu can contain a `),ss$1(91,`a`,12),WC(92,`label`),Bu(),WC(93,`.`),Bu(),Ph(94,qh,1,0,`ng-template`,9),Bu(),ss$1(95,`doc-code-sample`,3)(96,`h3`,4),WC(97,`Message`),Bu(),ss$1(98,`p`),WC(99,`A dropdown menu can contain a `),ss$1(100,`a`,13),WC(101,`message`),Bu(),WC(102,`.`),Bu(),Ph(103,Zh,1,0,`ng-template`,9),Bu(),ss$1(104,`doc-code-sample`,3)(105,`h3`,4),WC(106,`Floated Content`),Bu(),ss$1(107,`p`),WC(108,`A dropdown menu can contain floated content.`),Bu(),ss$1(109,`div`,5),Gh$1(110,`i`,6),ss$1(111,`div`,7)(112,`p`),WC(113,`Floated content may stack to two lines without manually setting a width or using a fluid dropdown.`),Bu()()(),Ph(114,Kh,1,0,`ng-template`,9),Bu(),ss$1(115,`doc-code-sample`,3)(116,`h3`,4),WC(117,`Input`),Bu(),ss$1(118,`p`),WC(119,`A dropdown menu can contain an `),ss$1(120,`a`,14),WC(121,`input`),Bu(),WC(122,`.`),Bu(),ss$1(123,`div`,5),Gh$1(124,`i`,6),ss$1(125,`div`,7)(126,`p`),WC(127,`Stop click propagation on the input so that typing or clicking it does not close the menu.`),Bu()()(),Ph(128,Qh,1,0,`ng-template`,9),Bu(),ss$1(129,`doc-code-sample`,3)(130,`h3`,4),WC(131,`Image`),Bu(),ss$1(132,`p`),WC(133,`A dropdown menu can contain an `),ss$1(134,`a`,15),WC(135,`image`),Bu(),WC(136,`.`),Bu(),Ph(137,e1,1,0,`ng-template`,9),Bu(),ss$1(138,`h2`,2),WC(139,`States`),Bu(),ss$1(140,`doc-code-sample`,3)(141,`h3`,4),WC(142,`Loading`),Bu(),ss$1(143,`p`),WC(144,`A dropdown can show that it is currently loading data.`),Bu(),Ph(145,t1,1,0,`ng-template`,9),Bu(),ss$1(146,`doc-code-sample`,3)(147,`h3`,4),WC(148,`Error`),Bu(),ss$1(149,`p`),WC(150,`An errored dropdown can alert a user to a problem.`),Bu(),Ph(151,i1,1,0,`ng-template`,9),Bu(),ss$1(152,`doc-code-sample`,3)(153,`h3`,4),WC(154,`Disabled`),Bu(),ss$1(155,`p`),WC(156,`A disabled dropdown menu or item does not allow user interaction.`),Bu(),Ph(157,n1,1,0,`ng-template`,9),Bu(),ss$1(158,`h2`,2),WC(159,`Variations`),Bu(),ss$1(160,`doc-code-sample`,3)(161,`h3`,4),WC(162,`Scrolling`),Bu(),ss$1(163,`p`),WC(164,`A dropdown can have its menu scroll.`),Bu(),ss$1(165,`div`,5),Gh$1(166,`i`,6),ss$1(167,`div`,7)(168,`p`),WC(169,`Scrolling dropdowns are incompatible with the usage of sub menus.`),Bu()()(),Ph(170,o1,1,0,`ng-template`,9),Bu(),ss$1(171,`doc-code-sample`,3)(172,`h3`,4),WC(173,`Compact`),Bu(),ss$1(174,`p`),WC(175,`A compact dropdown has no minimum width.`),Bu(),Ph(176,a1,1,0,`ng-template`,9),Bu(),ss$1(177,`doc-code-sample`,3)(178,`h3`,4),WC(179,`Fluid`),Bu(),ss$1(180,`p`),WC(181,`A dropdown can take the full width of its parent.`),Bu(),Ph(182,s1,1,0,`ng-template`,9),Bu(),ss$1(183,`doc-code-sample`,3)(184,`h3`,4),WC(185,`Menu Direction`),Bu(),ss$1(186,`p`),WC(187,`A dropdown menu or sub-menu can specify the direction it should open.`),Bu(),ss$1(188,`div`,5),Gh$1(189,`i`,6),ss$1(190,`div`,7)(191,`p`),WC(192,`Specifying `),ss$1(193,`span`,10),WC(194,`left`),Bu(),WC(195,` on a menu makes all child menus open in the same direction implicitly. To have the dropdown icon appear on the left side of a child item, set `),ss$1(196,`span`,10),WC(197,`suiDirection`),Bu(),WC(198,` on the item as well.`),Bu()()(),Ph(199,r1,1,0,`ng-template`,9),Bu(),ss$1(200,`h2`,2),WC(201,`Menus`),Bu(),ss$1(202,`doc-code-sample`,3)(203,`h3`,4),WC(204,`Multiple Levels`),Bu(),ss$1(205,`p`),WC(206,`A dropdown menu can contain multiple levels.`),Bu(),ss$1(207,`div`,5),Gh$1(208,`i`,6),ss$1(209,`div`,7)(210,`p`),WC(211,`Nest a `),ss$1(212,`span`,10),WC(213,`suiDropdownMenu`),Bu(),WC(214,` inside a `),ss$1(215,`span`,10),WC(216,`suiDropdownMenuItem`),Bu(),WC(217,`. The sub menu opens when the item is hovered.`),Bu()()(),Ph(218,l1,1,0,`ng-template`,9),Bu(),ss$1(219,`h2`,2),WC(220,`Coupling`),Bu(),ss$1(221,`doc-code-sample`,3)(222,`h3`,4),WC(223,`Button Group`),Bu(),ss$1(224,`p`),WC(225,`A dropdown can be attached to a `),ss$1(226,`a`,16),WC(227,`button group`),Bu(),WC(228,`.`),Bu(),Ph(229,d1,1,0,`ng-template`,9),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetDropdown),KD(14),Uh$1(`templateCode`,o.snippetInline),KD(6),Uh$1(`templateCode`,o.snippetPointing),KD(17),Uh$1(`templateCode`,o.snippetFloating),KD(6),Uh$1(`templateCode`,o.snippetSimple),KD(8),Uh$1(`templateCode`,o.snippetHeader),KD(6),Uh$1(`templateCode`,o.snippetDivider),KD(6),Uh$1(`templateCode`,o.snippetIcon),KD(9),Uh$1(`templateCode`,o.snippetDescription),KD(11),Uh$1(`templateCode`,o.snippetLabel),KD(9),Uh$1(`templateCode`,o.snippetMessage),KD(9),Uh$1(`templateCode`,o.snippetFloated),KD(11),Uh$1(`templateCode`,o.snippetInput),KD(14),Uh$1(`templateCode`,o.snippetImage),KD(11),Uh$1(`templateCode`,o.snippetLoading),KD(6),Uh$1(`templateCode`,o.snippetError),KD(6),Uh$1(`templateCode`,o.snippetDisabled),KD(8),Uh$1(`templateCode`,o.snippetScrolling),KD(11),Uh$1(`templateCode`,o.snippetCompact),KD(6),Uh$1(`templateCode`,o.snippetFluid),KD(6),Uh$1(`templateCode`,o.snippetMenuDirection),KD(19),Uh$1(`templateCode`,o.snippetMultipleLevels),KD(19),Uh$1(`templateCode`,o.snippetButtonGroup)}}function p1(n,u){n&1&&(ss$1(0,`div`)(1,`div`,5),Gh$1(2,`i`,6),ss$1(3,`div`,7)(4,`p`),WC(5,` Import `),ss$1(6,`span`,10),WC(7,`SuiDropdownModule`),Bu(),WC(8,` from `),ss$1(9,`span`,10),WC(10,`ngx-semantic/modules/dropdown`),Bu(),WC(11,` to use the component and every directive below. Looking for the selection dropdown? See `),ss$1(12,`a`,8),WC(13,`Select`),Bu(),WC(14,`. `),Bu()()(),ss$1(15,`h2`,2),WC(16,`sui-dropdown`),Bu(),ss$1(17,`p`),WC(18,`Selector: `),ss$1(19,`span`,10),WC(20,`sui-dropdown, [sui-dropdown]`),Bu(),WC(21,`. Clicking the dropdown toggles its `),ss$1(22,`span`,10),WC(23,`suiDropdownMenu`),Bu(),WC(24,`. The dropdown is focusable and does nothing when disabled.`),Bu(),ss$1(25,`h4`,4),WC(26,`Properties`),Bu(),ss$1(27,`table`,17)(28,`thead`)(29,`tr`)(30,`th`),WC(31,`Property`),Bu(),ss$1(32,`th`),WC(33,`Description`),Bu(),ss$1(34,`th`),WC(35,`Type`),Bu(),ss$1(36,`th`),WC(37,`Default`),Bu()()(),ss$1(38,`tbody`)(39,`tr`)(40,`td`),WC(41,`suiPointing`),Bu(),ss$1(42,`td`),WC(43,`When true, renders the dropdown menu with a pointing arrow.`),Bu(),ss$1(44,`td`)(45,`div`,18),WC(46,` boolean `),Bu()(),ss$1(47,`td`)(48,`div`,19),WC(49,` false `),Bu()()(),ss$1(50,`tr`)(51,`td`),WC(52,`suiPointingDirection`),Bu(),ss$1(53,`td`),WC(54,`Sets where the pointing arrow sits. Use together with `),ss$1(55,`span`,10),WC(56,`suiPointing`),Bu(),WC(57,`. Allowed values are `),ss$1(58,`span`,10),WC(59,`top left`),Bu(),WC(60,` | `),ss$1(61,`span`,10),WC(62,`top right`),Bu(),WC(63,` | `),ss$1(64,`span`,10),WC(65,`left`),Bu(),WC(66,` | `),ss$1(67,`span`,10),WC(68,`right`),Bu(),WC(69,` | `),ss$1(70,`span`,10),WC(71,`bottom left`),Bu(),WC(72,` | `),ss$1(73,`span`,10),WC(74,`bottom right`),Bu(),WC(75,` | `),ss$1(76,`span`,10),WC(77,`null`),Bu()(),ss$1(78,`td`)(79,`div`,18),WC(80,` string `),Bu()(),ss$1(81,`td`)(82,`div`,19),WC(83,` null `),Bu()()(),ss$1(84,`tr`)(85,`td`),WC(86,`suiFluid`),Bu(),ss$1(87,`td`),WC(88,`When true, the dropdown takes the full width of its parent.`),Bu(),ss$1(89,`td`)(90,`div`,18),WC(91,` boolean `),Bu()(),ss$1(92,`td`)(93,`div`,19),WC(94,` false `),Bu()()(),ss$1(95,`tr`)(96,`td`),WC(97,`suiInline`),Bu(),ss$1(98,`td`),WC(99,`When true, the dropdown appears inline with surrounding content.`),Bu(),ss$1(100,`td`)(101,`div`,18),WC(102,` boolean `),Bu()(),ss$1(103,`td`)(104,`div`,19),WC(105,` false `),Bu()()(),ss$1(106,`tr`)(107,`td`),WC(108,`suiLoading`),Bu(),ss$1(109,`td`),WC(110,`When true, shows that the dropdown is loading data.`),Bu(),ss$1(111,`td`)(112,`div`,18),WC(113,` boolean `),Bu()(),ss$1(114,`td`)(115,`div`,19),WC(116,` false `),Bu()()(),ss$1(117,`tr`)(118,`td`),WC(119,`suiError`),Bu(),ss$1(120,`td`),WC(121,`When true, renders the dropdown in an error state.`),Bu(),ss$1(122,`td`)(123,`div`,18),WC(124,` boolean `),Bu()(),ss$1(125,`td`)(126,`div`,19),WC(127,` false `),Bu()()(),ss$1(128,`tr`)(129,`td`),WC(130,`disabled`),Bu(),ss$1(131,`td`),WC(132,`When true, the dropdown cannot be opened.`),Bu(),ss$1(133,`td`)(134,`div`,18),WC(135,` boolean `),Bu()(),ss$1(136,`td`)(137,`div`,19),WC(138,` false `),Bu()()(),ss$1(139,`tr`)(140,`td`),WC(141,`suiScrolling`),Bu(),ss$1(142,`td`),WC(143,`When true, applies the scrolling style to the dropdown. You can also set `),ss$1(144,`span`,10),WC(145,`suiScrolling`),Bu(),WC(146,` on the menu.`),Bu(),ss$1(147,`td`)(148,`div`,18),WC(149,` boolean `),Bu()(),ss$1(150,`td`)(151,`div`,19),WC(152,` false `),Bu()()(),ss$1(153,`tr`)(154,`td`),WC(155,`suiCompact`),Bu(),ss$1(156,`td`),WC(157,`When true, removes the minimum width of the dropdown.`),Bu(),ss$1(158,`td`)(159,`div`,18),WC(160,` boolean `),Bu()(),ss$1(161,`td`)(162,`div`,19),WC(163,` false `),Bu()()(),ss$1(164,`tr`)(165,`td`),WC(166,`suiFloating`),Bu(),ss$1(167,`td`),WC(168,`When true, the menu appears to float below the element.`),Bu(),ss$1(169,`td`)(170,`div`,18),WC(171,` boolean `),Bu()(),ss$1(172,`td`)(173,`div`,19),WC(174,` false `),Bu()()(),ss$1(175,`tr`)(176,`td`),WC(177,`suiSimple`),Bu(),ss$1(178,`td`),WC(179,`When true, the dropdown opens on hover using CSS only.`),Bu(),ss$1(180,`td`)(181,`div`,18),WC(182,` boolean `),Bu()(),ss$1(183,`td`)(184,`div`,19),WC(185,` false `),Bu()()()()(),ss$1(186,`h2`,2),WC(187,`suiDropdownMenu`),Bu(),ss$1(188,`p`),WC(189,`Selector: `),ss$1(190,`span`,10),WC(191,`[suiDropdownMenu]`),Bu(),WC(192,`. The menu of a dropdown or of a dropdown menu item (sub menu).`),Bu(),ss$1(193,`h4`,4),WC(194,`Properties`),Bu(),ss$1(195,`table`,17)(196,`thead`)(197,`tr`)(198,`th`),WC(199,`Property`),Bu(),ss$1(200,`th`),WC(201,`Description`),Bu(),ss$1(202,`th`),WC(203,`Type`),Bu(),ss$1(204,`th`),WC(205,`Default`),Bu()()(),ss$1(206,`tbody`)(207,`tr`)(208,`td`),WC(209,`suiDirection`),Bu(),ss$1(210,`td`),WC(211,`Sets the direction the menu opens. Allowed values are `),ss$1(212,`span`,10),WC(213,`left`),Bu(),WC(214,` | `),ss$1(215,`span`,10),WC(216,`right`),Bu(),WC(217,` | `),ss$1(218,`span`,10),WC(219,`null`),Bu()(),ss$1(220,`td`)(221,`div`,18),WC(222,` string `),Bu()(),ss$1(223,`td`)(224,`div`,19),WC(225,` null `),Bu()()(),ss$1(226,`tr`)(227,`td`),WC(228,`suiScrolling`),Bu(),ss$1(229,`td`),WC(230,`When true, the menu scrolls when it has many items.`),Bu(),ss$1(231,`td`)(232,`div`,18),WC(233,` boolean `),Bu()(),ss$1(234,`td`)(235,`div`,19),WC(236,` false `),Bu()()(),ss$1(237,`tr`)(238,`td`),WC(239,`suiIsOpen`),Bu(),ss$1(240,`td`),WC(241,`Sets whether the menu is open. This is managed by the parent dropdown or menu item but can be bound to if needed.`),Bu(),ss$1(242,`td`)(243,`div`,18),WC(244,` boolean `),Bu()(),ss$1(245,`td`)(246,`div`,19),WC(247,` false `),Bu()()()()(),ss$1(248,`h2`,2),WC(249,`suiDropdownMenuItem`),Bu(),ss$1(250,`p`),WC(251,`Selector: `),ss$1(252,`span`,10),WC(253,`[suiDropdownMenuItem]`),Bu(),WC(254,`. An item in a dropdown menu. If it contains a `),ss$1(255,`span`,10),WC(256,`suiDropdownMenu`),Bu(),WC(257,`, that sub menu opens while the item is hovered.`),Bu(),ss$1(258,`h4`,4),WC(259,`Properties`),Bu(),ss$1(260,`table`,17)(261,`thead`)(262,`tr`)(263,`th`),WC(264,`Property`),Bu(),ss$1(265,`th`),WC(266,`Description`),Bu(),ss$1(267,`th`),WC(268,`Type`),Bu(),ss$1(269,`th`),WC(270,`Default`),Bu()()(),ss$1(271,`tbody`)(272,`tr`)(273,`td`),WC(274,`suiDirection`),Bu(),ss$1(275,`td`),WC(276,`Sets the side the item’s sub menu icon appears on. Allowed values are `),ss$1(277,`span`,10),WC(278,`left`),Bu(),WC(279,` | `),ss$1(280,`span`,10),WC(281,`right`),Bu(),WC(282,` | `),ss$1(283,`span`,10),WC(284,`null`),Bu()(),ss$1(285,`td`)(286,`div`,18),WC(287,` string `),Bu()(),ss$1(288,`td`)(289,`div`,19),WC(290,` null `),Bu()()(),ss$1(291,`tr`)(292,`td`),WC(293,`disabled`),Bu(),ss$1(294,`td`),WC(295,`When true, the item does not allow user interaction.`),Bu(),ss$1(296,`td`)(297,`div`,18),WC(298,` boolean `),Bu()(),ss$1(299,`td`)(300,`div`,19),WC(301,` false `),Bu()()()()(),ss$1(302,`h2`,2),WC(303,`suiDropdownMenuHeader`),Bu(),ss$1(304,`p`),WC(305,`Selector: `),ss$1(306,`span`,10),WC(307,`[suiDropdownMenuHeader]`),Bu(),WC(308,`. A header that groups the items below it.`),Bu(),ss$1(309,`h4`,4),WC(310,`Properties`),Bu(),ss$1(311,`table`,17)(312,`thead`)(313,`tr`)(314,`th`),WC(315,`Property`),Bu(),ss$1(316,`th`),WC(317,`Description`),Bu(),ss$1(318,`th`),WC(319,`Type`),Bu(),ss$1(320,`th`),WC(321,`Default`),Bu()()(),Gh$1(322,`tbody`),ss$1(323,`tfoot`,20)(324,`tr`)(325,`th`,21)(326,`div`,22),WC(327,`No properties for this directive`),Bu()()()()(),ss$1(328,`h2`,2),WC(329,`suiDropdownMenuDivider`),Bu(),ss$1(330,`p`),WC(331,`Selector: `),ss$1(332,`span`,10),WC(333,`[suiDropdownMenuDivider]`),Bu(),WC(334,`. A divider that separates related items.`),Bu(),ss$1(335,`h4`,4),WC(336,`Properties`),Bu(),ss$1(337,`table`,17)(338,`thead`)(339,`tr`)(340,`th`),WC(341,`Property`),Bu(),ss$1(342,`th`),WC(343,`Description`),Bu(),ss$1(344,`th`),WC(345,`Type`),Bu(),ss$1(346,`th`),WC(347,`Default`),Bu()()(),Gh$1(348,`tbody`),ss$1(349,`tfoot`,20)(350,`tr`)(351,`th`,21)(352,`div`,22),WC(353,`No properties for this directive`),Bu()()()()()())}var jl=(()=>{class n{constructor(o){this.snippetDropdown=qr,this.snippetInline=Zr,this.snippetPointing=Kr,this.snippetFloating=Qr,this.snippetSimple=el,this.snippetHeader=tl,this.snippetDivider=il,this.snippetIcon=nl,this.snippetDescription=ol,this.snippetLabel=al,this.snippetMessage=sl,this.snippetFloated=rl,this.snippetInput=ll,this.snippetImage=dl,this.snippetLoading=ml,this.snippetError=pl,this.snippetDisabled=ul,this.snippetScrolling=cl,this.snippetCompact=hl,this.snippetFluid=gl,this.snippetMenuDirection=fl,this.snippetMultipleLevels=Sl,this.snippetButtonGroup=vl,o.setTitle(`Dropdown | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-dropdown`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Dropdown`,`subHeader`,`A dropdown allows a user to select a value from a series of options`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiIcon`,``],[`sui-icon`,``,`suiIconType`,`info circle`],[`suiMessageContent`,``],[`routerLink`,`/modules/select`],[`docDemo`,``],[`sui-label`,``],[`routerLink`,`/elements/icon`],[`routerLink`,`/elements/label`],[`routerLink`,`/collections/messages`],[`routerLink`,`/elements/input`],[`routerLink`,`/elements/image`],[`routerLink`,`/elements/button`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[1,`full-width`],[`colspan`,`4`],[2,`text-align`,`center`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,m1,230,23,`div`,1)(2,p1,354,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[Qt,wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,we,li$1,ai,xl,bl,yl,El,Cl,Dl,wl,_l,Tl,Ml,Il,Pl,kl,Fl,Al,Vl,Bl,Ol,Ll,Hl,Wl,Rl,zl],encapsulation:2,changeDetection:1})}}return n})();var Nl=`<div sui-buttons
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
`;var Ul=`<div sui-buttons
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
`;var $l=`<div sui-buttons
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
`;var Yl=`<div sui-buttons
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
`;var Gl=`<button sui-button
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
`;var _t=(()=>{class n{constructor(){this.element=g(Ie),this.styleActive=!1,this.styleHidden=!1,this.styleAnimating=!1,this.inlineStyles={},this.sideClass=!0}get nativeElement(){return this.element.nativeElement}clearInlineStyles(){this.inlineStyles={}}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){return RI({type:n,selectors:[[`sui-shape-side`]],hostVars:10,hostBindings:function(s,p){s&2&&(LC(p.inlineStyles),go$1(`active`,p.styleActive)(`hidden`,p.styleHidden)(`animating`,p.styleAnimating)(`side`,p.sideClass))},exportAs:[`suiShapeSide`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(s,p){s&1&&(mC(),yC(0))},encapsulation:2,changeDetection:1})})()}}return n})();function $e(n){let u=n.getBoundingClientRect(),o=getComputedStyle(n);return u.height+parseFloat(o.marginTop)+parseFloat(o.marginBottom)}function xe(n){let u=n.getBoundingClientRect(),o=getComputedStyle(n);return u.width+parseFloat(o.marginLeft)+parseFloat(o.marginRight)}function S1(){let n=document.createElement(`div`),u={transition:`transitionend`,OTransition:`oTransitionEnd`,MozTransition:`transitionend`,WebkitTransition:`webkitTransitionEnd`};for(let o of Object.keys(u))if(n.style[o]!==void 0)return u[o];return`transitionend`}var Tt=(()=>{class n{constructor(){this.cdr=g(Pg$1),this.zone=g(G),this.suiDuration=null,this.suiWidth=`initial`,this.suiHeight=`initial`,this.suiJitter=0,this.suiAllowRepeats=!1,this.suiCube=!1,this.suiText=!1,this.suiBeforeChange=new nt$1,this.suiOnChange=new nt$1,this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={},this.transitionEnd=S1(),this.activeSide=null,this.nextSide=null,this.manualNextIndex=null,this.queue=[],this.sidesChangeSub=null}ngAfterContentInit(){this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.sidesChangeSub=this.sideList.changes.subscribe(()=>{this.ensureFirstSideActive(),this.setDefaultSide(),this.applyDurationToSides(),this.cdr.markForCheck()})}ngOnDestroy(){this.sidesChangeSub?.unsubscribe()}flipUp(){this.runFlip(`flip up`,()=>{this.setStageSize(),this.stageAbove(),this.animate(this.getTransformUp())})}flipDown(){this.runFlip(`flip down`,()=>{this.setStageSize(),this.stageBelow(),this.animate(this.getTransformDown())})}flipLeft(){this.runFlip(`flip left`,()=>{this.setStageSize(),this.stageLeft(),this.animate(this.getTransformLeft())})}flipRight(){this.runFlip(`flip right`,()=>{this.setStageSize(),this.stageRight(),this.animate(this.getTransformRight())})}flipOver(){this.runFlip(`flip over`,()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformOver())})}flipBack(){this.runFlip(`flip back`,()=>{this.setStageSize(),this.stageBehind(),this.animate(this.getTransformBack())})}setNextSide(o){let a=this.sideList.toArray(),s=a.filter(p=>p.nativeElement.matches(o));if(s.length===0){this.setDefaultSide();return}this.nextSide=s[0],this.manualNextIndex=a.indexOf(this.nextSide)}isAnimating(){return this.animating}reset(){this.animating=!1,this.shapeInlineStyle={},this.sidesInlineStyle={};for(let o of this.sideList.toArray())o.styleHidden=!1,o.styleAnimating=!1,o.clearInlineStyles();this.cdr.markForCheck()}repaint(){let o=this.sidesEl?.nativeElement;o&&o.offsetWidth}refresh(){this.setDefaultSide()}flip(o){switch(o){case`flip up`:this.flipUp();break;case`flip down`:this.flipDown();break;case`flip left`:this.flipLeft();break;case`flip right`:this.flipRight();break;case`flip over`:this.flipOver();break;case`flip back`:this.flipBack()}}runFlip(o,a){this.sideList.length<2||(this.setDefaultSide(),this.activeSide&&this.nextSide&&(this.isComplete()&&!this.animating&&!this.suiAllowRepeats||(this.animating?this.queue.push(o):a())))}isComplete(){return this.activeSide!==null&&this.nextSide!==null&&this.activeSide===this.nextSide}ensureFirstSideActive(){let o=this.sideList.toArray();o.length!==0&&(o.some(a=>a.styleActive)||(o[0].styleActive=!0))}setDefaultSide(){let o=this.sideList.toArray();if(o.length===0){this.activeSide=null,this.nextSide=null;return}let a=o.findIndex(s=>s.styleActive);if(this.activeSide=a>=0?o[a]:o[0],this.manualNextIndex!==null&&this.manualNextIndex>=0&&this.manualNextIndex<o.length)this.nextSide=o[this.manualNextIndex];else{let s=o.indexOf(this.activeSide);this.nextSide=s<o.length-1?o[s+1]:o[0]}}applyDurationToSides(){if(this.suiDuration===null||this.suiDuration===void 0)return;let o=`${this.suiDuration}ms`,a={transitionDuration:o,WebkitTransitionDuration:o,MozTransitionDuration:o,OTransitionDuration:o};this.sidesInlineStyle=w$1(w$1({},this.sidesInlineStyle),a);for(let s of this.sideList.toArray())s.inlineStyles=w$1(w$1({},s.inlineStyles),a)}setStageSize(){if(!this.activeSide||!this.nextSide)return;let o=this.shapeEl.nativeElement,a=this.suiWidth,s=this.suiHeight,p,m;a===`next`?p=xe(this.nextSide.nativeElement):a===`initial`?p=o.offsetWidth:p=a,s===`next`?m=$e(this.nextSide.nativeElement):s===`initial`?m=o.offsetHeight:m=s,this.shapeInlineStyle=x$1(w$1({},this.shapeInlineStyle),{width:`${p+this.suiJitter}px`,height:`${m+this.suiJitter}px`})}animate(o){if(!this.activeSide||!this.nextSide)return;let a=this.activeSide,s=this.nextSide;this.suiBeforeChange.emit(s);let p=this.sidesEl.nativeElement,m=v=>{if(v.target!==p){p.addEventListener(this.transitionEnd,m,{once:!0});return}this.zone.run(()=>{this.finishAnimation()})};setTimeout(()=>{this.zone.run(()=>{this.animating=!0,p.addEventListener(this.transitionEnd,m,{once:!0}),this.sidesInlineStyle=w$1(w$1({},this.sidesInlineStyle),o),a.styleHidden=!0,this.cdr.markForCheck()})})}finishAnimation(){this.reset(),this.setActive(),this.processQueue(),this.cdr.markForCheck()}setActive(){let o=this.sideList.toArray();if(this.nextSide){for(let a of o)a.styleActive=!1;this.nextSide.styleActive=!0,this.suiOnChange.emit(this.nextSide),this.manualNextIndex=null,this.setDefaultSide()}}processQueue(){let o=this.queue.shift();o&&this.flip(o)}getTransformUp(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateY(${-($e(o)-$e(a))/2}px) translateZ(${-$e(o)/2}px) rotateX(-90deg)`}}getTransformDown(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateY(${-($e(o)-$e(a))/2}px) translateZ(${-$e(o)/2}px) rotateX(90deg)`}}getTransformLeft(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(xe(o)-xe(a))/2}px) translateZ(${-xe(o)/2}px) rotateY(90deg)`}}getTransformRight(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(xe(o)-xe(a))/2}px) translateZ(${-xe(o)/2}px) rotateY(-90deg)`}}getTransformOver(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(xe(o)-xe(a))/2}px) rotateY(180deg)`}}getTransformBack(){let o=this.activeSide.nativeElement,a=this.nextSide.nativeElement;return{transform:`translateX(${-(xe(o)-xe(a))/2}px) rotateY(-180deg)`}}stageAbove(){let o=this.activeSide,a=this.nextSide,s=$e(o.nativeElement),p=$e(a.nativeElement),m=(s-p)/2,v=p/2,O=s/2;this.sidesInlineStyle=x$1(w$1({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{top:`${m}px`,transform:`rotateX(90deg) translateZ(${O}px)`})}stageBelow(){let o=this.activeSide,a=this.nextSide,s=$e(o.nativeElement),p=$e(a.nativeElement),m=(s-p)/2,v=p/2,O=s/2;this.sidesInlineStyle=x$1(w$1({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{top:`${m}px`,transform:`rotateX(-90deg) translateZ(${O}px)`})}stageLeft(){let o=this.activeSide,a=this.nextSide,s=xe(o.nativeElement),p=xe(a.nativeElement),m=(s-p)/2,v=p/2,O=s/2;this.sidesInlineStyle=x$1(w$1({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{left:`${m}px`,transform:`rotateY(-90deg) translateZ(${O}px)`})}stageRight(){let o=this.activeSide,a=this.nextSide,s=xe(o.nativeElement),p=xe(a.nativeElement),m=(s-p)/2,v=p/2,O=s/2;this.sidesInlineStyle=x$1(w$1({},this.sidesInlineStyle),{transform:`translateZ(-${v}px)`}),o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg) translateZ(${v}px)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{left:`${m}px`,transform:`rotateY(90deg) translateZ(${O}px)`})}stageBehind(){let o=this.activeSide,a=this.nextSide,m=(xe(o.nativeElement)-xe(a.nativeElement))/2;o.inlineStyles=x$1(w$1({},o.inlineStyles),{transform:`rotateY(0deg)`}),a.styleAnimating=!0,a.inlineStyles=x$1(w$1({},a.inlineStyles),{left:`${m}px`,transform:`rotateY(-180deg)`})}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=(function(){let o=[`shapeEl`],a=[`sidesEl`];return RI({type:n,selectors:[[`sui-shape`]],contentQueries:function(m,v,O){if(m&1&&Xh$1(O,_t,4),m&2){let ie;DC(ie=EC())&&(v.sideList=ie)}},viewQuery:function(m,v){if(m&1&&eg(o,7)(a,7),m&2){let O;DC(O=EC())&&(v.shapeEl=O.first),DC(O=EC())&&(v.sidesEl=O.first)}},inputs:{suiDuration:`suiDuration`,suiWidth:`suiWidth`,suiHeight:`suiHeight`,suiJitter:`suiJitter`,suiAllowRepeats:`suiAllowRepeats`,suiCube:`suiCube`,suiText:`suiText`},outputs:{suiBeforeChange:`suiBeforeChange`,suiOnChange:`suiOnChange`},exportAs:[`suiShape`],ngContentSelectors:[`*`],decls:5,vars:8,consts:[[`shapeEl`,``],[`sidesEl`,``],[1,`ui`,`shape`,3,`ngStyle`],[1,`sides`,3,`ngStyle`]],template:function(m,v){m&1&&(mC(),ss$1(0,`div`,2,0)(2,`div`,3,1),yC(4),Bu()()),m&2&&(go$1(`animating`,v.animating)(`cube`,v.suiCube)(`text`,v.suiText),Uh$1(`ngStyle`,v.shapeInlineStyle),KD(2),Uh$1(`ngStyle`,v.sidesInlineStyle))},dependencies:[sl$1,Ww],encapsulation:2,changeDetection:1})})()}}return dS([ve()],n.prototype,`suiAllowRepeats`,void 0),dS([ve()],n.prototype,`suiCube`,void 0),dS([ve()],n.prototype,`suiText`,void 0),n})();var Xl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,Tt]})}}return n})();var Jl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-shape-shape-example`]],standalone:!1,decls:41,vars:0,consts:[[`shape`,`suiShape`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`left long arrow`],[`sui-icon`,``,`suiIconType`,`up long arrow`],[`sui-icon`,``,`suiIconType`,`down long arrow`],[`sui-icon`,``,`suiIconType`,`right long arrow`],[`sui-divider`,``,`suiHidden`,``],[`sui-segment`,``],[`sui-image`,``,`src`,`https://semantic-ui.com/images/avatar/large/steve.jpg`],[`sui-header`,``],[`suiSubHeader`,``],[`sui-image`,``,`src`,`https://semantic-ui.com/images/avatar/large/elliot.jpg`],[`sui-image`,``,`src`,`https://semantic-ui.com/images/avatar/large/stevie.jpg`]],template:function(a,s){if(a&1){let p=fC();ss$1(0,`div`,1)(1,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipLeft())}),Gh$1(2,`i`,3),WC(3,` Left`),Bu(),ss$1(4,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipUp())}),Gh$1(5,`i`,4),WC(6,` Up`),Bu(),ss$1(7,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipDown())}),Gh$1(8,`i`,5),WC(9,` Down`),Bu(),ss$1(10,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipRight())}),Gh$1(11,`i`,6),WC(12,` Right`),Bu(),ss$1(13,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipOver())}),WC(14,`Over`),Bu(),ss$1(15,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipBack())}),WC(16,`Back`),Bu()(),Gh$1(17,`div`,7),ss$1(18,`sui-shape`,null,0)(20,`sui-shape-side`)(21,`div`,8),Gh$1(22,`img`,9),ss$1(23,`h4`,10),WC(24,` Steve `),ss$1(25,`div`,11),WC(26,`Steve is a creative professional`),Bu()()()(),ss$1(27,`sui-shape-side`)(28,`div`,8),Gh$1(29,`img`,12),ss$1(30,`h4`,10),WC(31,` Elliot `),ss$1(32,`div`,11),WC(33,`Elliot is a sound engineer`),Bu()()()(),ss$1(34,`sui-shape-side`)(35,`div`,8),Gh$1(36,`img`,13),ss$1(37,`h4`,10),WC(38,` Stevie `),ss$1(39,`div`,11),WC(40,`Stevie is a writer`),Bu()()()()()}},dependencies:[Ws$1,Qs$1,Ii,Di,we,_i,z,ze,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();var ql=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-shape-cube-example`]],standalone:!1,decls:44,vars:0,consts:[[`shape`,`suiShape`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`left long arrow`],[`sui-icon`,``,`suiIconType`,`up long arrow`],[`sui-icon`,``,`suiIconType`,`down long arrow`],[`sui-icon`,``,`suiIconType`,`right long arrow`],[`sui-divider`,``,`suiHidden`,``],[`suiCube`,``],[1,`content`],[1,`center`]],template:function(a,s){if(a&1){let p=fC();ss$1(0,`div`,1)(1,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipLeft())}),Gh$1(2,`i`,3),WC(3,` Left`),Bu(),ss$1(4,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipUp())}),Gh$1(5,`i`,4),WC(6,` Up`),Bu(),ss$1(7,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipDown())}),Gh$1(8,`i`,5),WC(9,` Down`),Bu(),ss$1(10,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipRight())}),Gh$1(11,`i`,6),WC(12,` Right`),Bu(),ss$1(13,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipOver())}),WC(14,`Over`),Bu(),ss$1(15,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipBack())}),WC(16,`Back`),Bu()(),Gh$1(17,`div`,7),ss$1(18,`sui-shape`,8,0)(20,`sui-shape-side`)(21,`div`,9)(22,`div`,10),WC(23,`1`),Bu()()(),ss$1(24,`sui-shape-side`)(25,`div`,9)(26,`div`,10),WC(27,`2`),Bu()()(),ss$1(28,`sui-shape-side`)(29,`div`,9)(30,`div`,10),WC(31,`3`),Bu()()(),ss$1(32,`sui-shape-side`)(33,`div`,9)(34,`div`,10),WC(35,`4`),Bu()()(),ss$1(36,`sui-shape-side`)(37,`div`,9)(38,`div`,10),WC(39,`5`),Bu()()(),ss$1(40,`sui-shape-side`)(41,`div`,9)(42,`div`,10),WC(43,`6`),Bu()()()()}},dependencies:[Ii,Di,we,_i,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();var Zl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-shape-text-example`]],standalone:!1,decls:32,vars:0,consts:[[`shape`,`suiShape`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`left long arrow`],[`sui-icon`,``,`suiIconType`,`up long arrow`],[`sui-icon`,``,`suiIconType`,`down long arrow`],[`sui-icon`,``,`suiIconType`,`right long arrow`],[`sui-divider`,``,`suiHidden`,``],[`suiText`,``],[`sui-header`,``]],template:function(a,s){if(a&1){let p=fC();ss$1(0,`div`,1)(1,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipLeft())}),Gh$1(2,`i`,3),WC(3,` Left`),Bu(),ss$1(4,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipUp())}),Gh$1(5,`i`,4),WC(6,` Up`),Bu(),ss$1(7,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipDown())}),Gh$1(8,`i`,5),WC(9,` Down`),Bu(),ss$1(10,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipRight())}),Gh$1(11,`i`,6),WC(12,` Right`),Bu(),ss$1(13,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipOver())}),WC(14,`Over`),Bu(),ss$1(15,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(19);return jd$1(v.flipBack())}),WC(16,`Back`),Bu()(),Gh$1(17,`div`,7),ss$1(18,`sui-shape`,8,0)(20,`sui-shape-side`)(21,`h2`,9),WC(22,`Hello there!`),Bu()(),ss$1(23,`sui-shape-side`)(24,`h2`,9),WC(25,`Flip me`),Bu()(),ss$1(26,`sui-shape-side`)(27,`h2`,9),WC(28,`Shapes can hold text`),Bu()(),ss$1(29,`sui-shape-side`)(30,`h2`,9),WC(31,`Have a nice day`),Bu()()()}},dependencies:[Ws$1,Ii,Di,we,_i,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();var Kl=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-shape-next-side-example`]],standalone:!1,decls:19,vars:0,consts:[[`shape`,`suiShape`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiText`,``],[1,`first`],[`sui-header`,``],[1,`second`],[1,`third`]],template:function(a,s){if(a&1){let p=fC();ss$1(0,`div`,1)(1,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(9);return v.setNextSide(`.first`),jd$1(v.flipUp())}),WC(2,`First`),Bu(),ss$1(3,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(9);return v.setNextSide(`.second`),jd$1(v.flipUp())}),WC(4,`Second`),Bu(),ss$1(5,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(9);return v.setNextSide(`.third`),jd$1(v.flipUp())}),WC(6,`Third`),Bu()(),Gh$1(7,`div`,3),ss$1(8,`sui-shape`,4,0)(10,`sui-shape-side`,5)(11,`h2`,6),WC(12,`First side`),Bu()(),ss$1(13,`sui-shape-side`,7)(14,`h2`,6),WC(15,`Second side`),Bu()(),ss$1(16,`sui-shape-side`,8)(17,`h2`,6),WC(18,`Third side`),Bu()()()}},dependencies:[Ws$1,Ii,Di,_i,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();var Ql=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-shape-settings-example`]],standalone:!1,decls:11,vars:1,consts:[[`shape`,`suiShape`],[`sui-button`,``,`suiSize`,`small`,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiText`,``,`suiWidth`,`next`,3,`suiDuration`],[`sui-header`,``]],template:function(a,s){if(a&1){let p=fC();ss$1(0,`button`,1),Qh$1(`click`,function(){Pd$1(p);let v=IC(4);return jd$1(v.flipRight())}),WC(1,`Flip Right`),Bu(),Gh$1(2,`div`,2),ss$1(3,`sui-shape`,3,0)(5,`sui-shape-side`)(6,`h2`,4),WC(7,`Short`),Bu()(),ss$1(8,`sui-shape-side`)(9,`h2`,4),WC(10,`A much longer side of text`),Bu()()()}a&2&&(KD(3),Uh$1(`suiDuration`,1500))},dependencies:[Ws$1,Ii,_i,Tt,_t],encapsulation:2,changeDetection:1})}}return n})();function b1(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-shape-shape-example`),Bu())}function y1(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-shape-cube-example`),Bu())}function E1(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-shape-text-example`),Bu())}function C1(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-shape-next-side-example`),Bu())}function D1(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-shape-settings-example`),Bu())}function w1(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Shape`),Bu(),ss$1(6,`p`),WC(7,`A shape can contain any content on each of its sides`),Bu(),ss$1(8,`div`,5),WC(9,` Get a reference to the shape with `),ss$1(10,`code`),WC(11,`#shape="suiShape"`),Bu(),WC(12,` to call its flip methods. `),Bu(),Ph(13,b1,2,0,`ng-template`,6),Bu(),ss$1(14,`doc-code-sample`,3)(15,`h3`,4),WC(16,`Cube`),Bu(),ss$1(17,`p`),WC(18,`A shape can be the size of a cube`),Bu(),Ph(19,y1,2,0,`ng-template`,6),Bu(),ss$1(20,`doc-code-sample`,3)(21,`h3`,4),WC(22,`Text`),Bu(),ss$1(23,`p`),WC(24,`A shape can be formatted for text content`),Bu(),Ph(25,E1,2,0,`ng-template`,6),Bu(),Gh$1(26,`br`),ss$1(27,`h2`,2),WC(28,`Content`),Bu(),ss$1(29,`doc-code-sample`,3)(30,`h3`,4),WC(31,`Side`),Bu(),ss$1(32,`p`),WC(33,`A shape displays one side at a time; you can choose the next side before flipping`),Bu(),ss$1(34,`div`,5)(35,`code`),WC(36,`setNextSide`),Bu(),WC(37,` takes a CSS selector that is matched against each side. `),Bu(),Ph(38,C1,2,0,`ng-template`,6),Bu(),Gh$1(39,`br`),ss$1(40,`h2`,2),WC(41,`Settings`),Bu(),ss$1(42,`doc-code-sample`,3)(43,`h3`,4),WC(44,`Duration and Size`),Bu(),ss$1(45,`p`),WC(46,`A shape can change its animation duration, and resize to fit the next side while animating`),Bu(),Ph(47,D1,2,0,`ng-template`,6),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetShape),KD(11),Uh$1(`templateCode`,o.snippetCube),KD(6),Uh$1(`templateCode`,o.snippetText),KD(9),Uh$1(`templateCode`,o.snippetNextSide),KD(13),Uh$1(`templateCode`,o.snippetSettings)}}function _1(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-shape`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,8)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,` suiCube `),Bu(),ss$1(20,`td`),WC(21,` Format the shape as a cube `),Bu(),ss$1(22,`td`)(23,`div`,9),WC(24,` boolean `),Bu()(),ss$1(25,`td`)(26,`div`,10),WC(27,` false `),Bu()()(),ss$1(28,`tr`)(29,`td`),WC(30,` suiText `),Bu(),ss$1(31,`td`),WC(32,` Format the shape for text content `),Bu(),ss$1(33,`td`)(34,`div`,9),WC(35,` boolean `),Bu()(),ss$1(36,`td`)(37,`div`,10),WC(38,` false `),Bu()()(),ss$1(39,`tr`)(40,`td`),WC(41,` suiDuration `),Bu(),ss$1(42,`td`),WC(43,` Animation duration in milliseconds. Uses the Semantic UI CSS duration when not set `),Bu(),ss$1(44,`td`)(45,`div`,9),WC(46,` number `),Bu()(),ss$1(47,`td`)(48,`div`,10),WC(49,` null `),Bu()()(),ss$1(50,`tr`)(51,`td`),WC(52,` suiWidth `),Bu(),ss$1(53,`td`),WC(54,` Width of the shape while animating: the initial width, the next side's width or a pixel value. Allowed values are `),ss$1(55,`span`,11),WC(56,`'initial'`),Bu(),WC(57,` | `),ss$1(58,`span`,11),WC(59,`'next'`),Bu(),WC(60,` | `),ss$1(61,`span`,11),WC(62,`number`),Bu()(),ss$1(63,`td`)(64,`div`,9),WC(65,` string | number `),Bu()(),ss$1(66,`td`)(67,`div`,10),WC(68,` 'initial' `),Bu()()(),ss$1(69,`tr`)(70,`td`),WC(71,` suiHeight `),Bu(),ss$1(72,`td`),WC(73,` Height of the shape while animating: the initial height, the next side's height or a pixel value. Allowed values are `),ss$1(74,`span`,11),WC(75,`'initial'`),Bu(),WC(76,` | `),ss$1(77,`span`,11),WC(78,`'next'`),Bu(),WC(79,` | `),ss$1(80,`span`,11),WC(81,`number`),Bu()(),ss$1(82,`td`)(83,`div`,9),WC(84,` string | number `),Bu()(),ss$1(85,`td`)(86,`div`,10),WC(87,` 'initial' `),Bu()()(),ss$1(88,`tr`)(89,`td`),WC(90,` suiJitter `),Bu(),ss$1(91,`td`),WC(92,` Pixels added to the stage size to avoid rounding issues `),Bu(),ss$1(93,`td`)(94,`div`,9),WC(95,` number `),Bu()(),ss$1(96,`td`)(97,`div`,10),WC(98,` 0 `),Bu()()(),ss$1(99,`tr`)(100,`td`),WC(101,` suiAllowRepeats `),Bu(),ss$1(102,`td`),WC(103,` Allow flipping to the side that is already visible `),Bu(),ss$1(104,`td`)(105,`div`,9),WC(106,` boolean `),Bu()(),ss$1(107,`td`)(108,`div`,10),WC(109,` false `),Bu()()()()(),ss$1(110,`h4`,4),WC(111,`Events`),Bu(),ss$1(112,`table`,8)(113,`thead`)(114,`tr`)(115,`th`),WC(116,`Event`),Bu(),ss$1(117,`th`),WC(118,`Description`),Bu(),ss$1(119,`th`),WC(120,`Type`),Bu()()(),ss$1(121,`tbody`)(122,`tr`)(123,`td`),WC(124,` suiBeforeChange `),Bu(),ss$1(125,`td`),WC(126,` Emitted with the next side before the shape starts animating `),Bu(),ss$1(127,`td`)(128,`div`,9),WC(129,` EventEmitter<SuiShapeSideComponent> `),Bu()()(),ss$1(130,`tr`)(131,`td`),WC(132,` suiOnChange `),Bu(),ss$1(133,`td`),WC(134,` Emitted with the new active side once the animation completes `),Bu(),ss$1(135,`td`)(136,`div`,9),WC(137,` EventEmitter<SuiShapeSideComponent> `),Bu()()()()(),ss$1(138,`h4`,4),WC(139,`Methods`),Bu(),ss$1(140,`table`,8)(141,`thead`)(142,`tr`)(143,`th`),WC(144,`Method`),Bu(),ss$1(145,`th`),WC(146,`Description`),Bu()()(),ss$1(147,`tbody`)(148,`tr`)(149,`td`),WC(150,` flipUp() `),Bu(),ss$1(151,`td`),WC(152,` Flips the shape upward `),Bu()(),ss$1(153,`tr`)(154,`td`),WC(155,` flipDown() `),Bu(),ss$1(156,`td`),WC(157,` Flips the shape downward `),Bu()(),ss$1(158,`tr`)(159,`td`),WC(160,` flipLeft() `),Bu(),ss$1(161,`td`),WC(162,` Flips the shape to the left `),Bu()(),ss$1(163,`tr`)(164,`td`),WC(165,` flipRight() `),Bu(),ss$1(166,`td`),WC(167,` Flips the shape to the right `),Bu()(),ss$1(168,`tr`)(169,`td`),WC(170,` flipOver() `),Bu(),ss$1(171,`td`),WC(172,` Flips the shape over clock-wise `),Bu()(),ss$1(173,`tr`)(174,`td`),WC(175,` flipBack() `),Bu(),ss$1(176,`td`),WC(177,` Flips the shape back counter-clockwise `),Bu()(),ss$1(178,`tr`)(179,`td`),WC(180,` flip(behavior) `),Bu(),ss$1(181,`td`),WC(182,` Runs a named flip such as `),ss$1(183,`code`),WC(184,`'flip up'`),Bu()()(),ss$1(185,`tr`)(186,`td`),WC(187,` setNextSide(selector) `),Bu(),ss$1(188,`td`),WC(189,` Sets the side to show on the next flip `),Bu()(),ss$1(190,`tr`)(191,`td`),WC(192,` isAnimating() `),Bu(),ss$1(193,`td`),WC(194,` Returns whether the shape is animating `),Bu()(),ss$1(195,`tr`)(196,`td`),WC(197,` reset() `),Bu(),ss$1(198,`td`),WC(199,` Removes all inline animation styles `),Bu()(),ss$1(200,`tr`)(201,`td`),WC(202,` repaint() `),Bu(),ss$1(203,`td`),WC(204,` Forces the browser to repaint the shape `),Bu()(),ss$1(205,`tr`)(206,`td`),WC(207,` refresh() `),Bu(),ss$1(208,`td`),WC(209,` Re-reads the sides, e.g. after changing them `),Bu()()()()())}var ed=(()=>{class n{constructor(o){this.snippetShape=Nl,this.snippetCube=Ul,this.snippetText=$l,this.snippetNextSide=Yl,this.snippetSettings=Gl,o.setTitle(`Shape | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-shape`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Shape`,`subHeader`,`A shape is a three dimensional object displayed on a two dimensional plane`,`semanticUrl`,`https://semantic-ui.com/modules/shape.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[1,`shape-demo`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[`sui-label`,``]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,w1,48,5,`div`,1)(2,_1,210,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li$1,Jl,ql,Zl,Kl,Ql],styles:[`[_nghost-%COMP%]     .shape-demo .ui.shape .side>.ui.segment{width:15rem;margin:0}`],changeDetection:1})}}return n})();var td=`<div sui-menu
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
`;var id=`import { Component } from '@angular/core';
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
`;var nd=`<sui-sidebar-container suiPushable
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
`;var od=`<div sui-menu
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
`;var sd=`<div sui-buttons
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
`;var rd=`import { Component } from '@angular/core';
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
`;var ld=`<div sui-buttons
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
`;var dd=`import { Component } from '@angular/core';
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
`;var md=`<div sui-buttons
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
`;var pd=`import { Component } from '@angular/core';
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
`;var ud=`<sui-sidebar-container>
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
`;var cd=`import { Component } from '@angular/core';
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
`;var lt=class{constructor(){this.visible=!1,this.direction=`left`,this.animation=`overlay`,this.width=null}show(u,o=`overlay`){this.direction=u,this.animation=o,this.visible=!0}get isVertical(){return this.direction===`left`||this.direction===`right`}};var hd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sidebar-sidebar-example`]],standalone:!1,features:[lo$1],decls:21,vars:1,consts:[[`sui-menu`,``,`suiAttached`,`top`],[`suiMenuItem`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`sidebar`],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiIcon`,`labeled icon`,`suiSidebarWidth`,`thin`,`suiSidebarAnimation`,`overlay`,3,`visibleChange`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`a`,1),Qh$1(`click`,function(){return s.visible=!s.visible}),Gh$1(2,`i`,2),WC(3,` Menu `),Bu()(),ss$1(4,`sui-sidebar-container`,3)(5,`div`,4),vg(`visibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),ss$1(6,`a`,5),Gh$1(7,`i`,6),WC(8,` Home`),Bu(),ss$1(9,`a`,5),Gh$1(10,`i`,7),WC(11,` Topics`),Bu(),ss$1(12,`a`,5),Gh$1(13,`i`,8),WC(14,` Friends`),Bu()(),ss$1(15,`sui-sidebar-pusher`)(16,`div`,9)(17,`h3`,10),WC(18,`Application Content`),Bu(),Gh$1(19,`doc-wireframe`,11)(20,`doc-wireframe`,11),Bu()()()),a&2&&(KD(5),yg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,we,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var gd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sidebar-visible-example`]],standalone:!1,features:[lo$1],decls:17,vars:1,consts:[[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiSidebarWidth`,`thin`,3,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(ss$1(0,`sui-sidebar-container`,0)(1,`div`,1)(2,`a`,2),Gh$1(3,`i`,3),WC(4,` Home`),Bu(),ss$1(5,`a`,2),Gh$1(6,`i`,4),WC(7,` Topics`),Bu(),ss$1(8,`a`,2),Gh$1(9,`i`,5),WC(10,` Friends`),Bu()(),ss$1(11,`sui-sidebar-pusher`)(12,`div`,6)(13,`h3`,7),WC(14,`Application Content`),Bu(),Gh$1(15,`doc-wireframe`,8)(16,`doc-wireframe`,8),Bu()()()),a&2&&(KD(),Uh$1(`visible`,!0))},dependencies:[Dr$1,Ws$1,we,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var fd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sidebar-dimmed-example`]],standalone:!1,features:[lo$1],decls:21,vars:1,consts:[[`sui-menu`,``,`suiAttached`,`top`],[`suiMenuItem`,``,3,`click`],[`sui-icon`,``,`suiIconType`,`sidebar`],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiSidebarAnimation`,`overlay`,3,`visibleChange`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`suiDimmable`,``],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`a`,1),Qh$1(`click`,function(){return s.visible=!s.visible}),Gh$1(2,`i`,2),WC(3,` Menu `),Bu()(),ss$1(4,`sui-sidebar-container`,3)(5,`div`,4),vg(`visibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),ss$1(6,`a`,5),Gh$1(7,`i`,6),WC(8,` Home`),Bu(),ss$1(9,`a`,5),Gh$1(10,`i`,7),WC(11,` Topics`),Bu(),ss$1(12,`a`,5),Gh$1(13,`i`,8),WC(14,` Friends`),Bu()(),ss$1(15,`sui-sidebar-pusher`,9)(16,`div`,10)(17,`h3`,11),WC(18,`Application Content`),Bu(),Gh$1(19,`doc-wireframe`,12)(20,`doc-wireframe`,12),Bu()()()),a&2&&(KD(5),yg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,we,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Sd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sidebar-direction-example`]],standalone:!1,features:[lo$1],decls:27,vars:3,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiSidebarAnimation`,`overlay`,3,`visibleChange`,`suiVertical`,`suiSidebarPosition`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.show(`left`)}),WC(2,`Left`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.show(`right`)}),WC(4,`Right`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.show(`top`)}),WC(6,`Top`),Bu(),ss$1(7,`button`,1),Qh$1(`click`,function(){return s.show(`bottom`)}),WC(8,`Bottom`),Bu()(),Gh$1(9,`div`,2),ss$1(10,`sui-sidebar-container`,3)(11,`div`,4),vg(`visibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),ss$1(12,`a`,5),Gh$1(13,`i`,6),WC(14,` Home`),Bu(),ss$1(15,`a`,5),Gh$1(16,`i`,7),WC(17,` Topics`),Bu(),ss$1(18,`a`,5),Gh$1(19,`i`,8),WC(20,` Friends`),Bu()(),ss$1(21,`sui-sidebar-pusher`)(22,`div`,9)(23,`h3`,10),WC(24,`Application Content`),Bu(),Gh$1(25,`doc-wireframe`,11)(26,`doc-wireframe`,11),Bu()()()),a&2&&(KD(11),Uh$1(`suiVertical`,s.isVertical)(`suiSidebarPosition`,s.direction),yg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,Ii,Di,we,_i,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var vd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sidebar-width-example`]],standalone:!1,features:[lo$1],decls:29,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiSidebarAnimation`,`overlay`,3,`visibleChange`,`suiSidebarWidth`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.width=`very thin`,s.visible=!0}),WC(2,`Very Thin`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.width=`thin`,s.visible=!0}),WC(4,`Thin`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.width=null,s.visible=!0}),WC(6,`Default`),Bu(),ss$1(7,`button`,1),Qh$1(`click`,function(){return s.width=`wide`,s.visible=!0}),WC(8,`Wide`),Bu(),ss$1(9,`button`,1),Qh$1(`click`,function(){return s.width=`very wide`,s.visible=!0}),WC(10,`Very Wide`),Bu()(),Gh$1(11,`div`,2),ss$1(12,`sui-sidebar-container`,3)(13,`div`,4),vg(`visibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),ss$1(14,`a`,5),Gh$1(15,`i`,6),WC(16,` Home`),Bu(),ss$1(17,`a`,5),Gh$1(18,`i`,7),WC(19,` Topics`),Bu(),ss$1(20,`a`,5),Gh$1(21,`i`,8),WC(22,` Friends`),Bu()(),ss$1(23,`sui-sidebar-pusher`)(24,`div`,9)(25,`h3`,10),WC(26,`Application Content`),Bu(),Gh$1(27,`doc-wireframe`,11)(28,`doc-wireframe`,11),Bu()()()),a&2&&(KD(13),Uh$1(`suiSidebarWidth`,s.width),yg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,Ii,Di,we,_i,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var xd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sidebar-transitions-example`]],standalone:!1,features:[lo$1],decls:31,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-divider`,``,`suiHidden`,``],[`suiPushable`,``,1,`ui`,`bottom`,`attached`,`segment`],[`sui-sidebar`,``,`sui-menu`,``,`suiInverted`,``,`suiVertical`,``,`suiSidebarWidth`,`thin`,3,`visibleChange`,`suiSidebarAnimation`,`visible`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`home`],[`sui-icon`,``,`suiIconType`,`block layout`],[`sui-icon`,``,`suiIconType`,`smile`],[`sui-segment`,``,`suiBasic`,``],[`sui-header`,``],[`type`,`paragraph`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.show(`left`,`overlay`)}),WC(2,`Overlay`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.show(`left`,`push`)}),WC(4,`Push`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.show(`left`,`scale down`)}),WC(6,`Scale Down`),Bu(),ss$1(7,`button`,1),Qh$1(`click`,function(){return s.show(`left`,`uncover`)}),WC(8,`Uncover`),Bu(),ss$1(9,`button`,1),Qh$1(`click`,function(){return s.show(`left`,`slide along`)}),WC(10,`Slide Along`),Bu(),ss$1(11,`button`,1),Qh$1(`click`,function(){return s.show(`left`,`slide out`)}),WC(12,`Slide Out`),Bu()(),Gh$1(13,`div`,2),ss$1(14,`sui-sidebar-container`,3)(15,`div`,4),vg(`visibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),ss$1(16,`a`,5),Gh$1(17,`i`,6),WC(18,` Home`),Bu(),ss$1(19,`a`,5),Gh$1(20,`i`,7),WC(21,` Topics`),Bu(),ss$1(22,`a`,5),Gh$1(23,`i`,8),WC(24,` Friends`),Bu()(),ss$1(25,`sui-sidebar-pusher`)(26,`div`,9)(27,`h3`,10),WC(28,`Application Content`),Bu(),Gh$1(29,`doc-wireframe`,11)(30,`doc-wireframe`,11),Bu()()()),a&2&&(KD(15),Uh$1(`suiSidebarAnimation`,s.animation),yg(`visible`,s.visible))},dependencies:[Dr$1,Ws$1,Ii,Di,we,_i,ze,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var bd=(()=>{class n extends lt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sidebar-page-example`]],standalone:!1,features:[lo$1],decls:9,vars:1,consts:[[`sui-sidebar`,``,`sui-menu`,``,`suiVertical`,``,`suiInverted`,``,3,`visibleChange`,`visible`],[`suiMenuItem`,``],[`sui-button`,``,3,`click`]],template:function(a,s){a&1&&(ss$1(0,`sui-sidebar-container`)(1,`div`,0),vg(`visibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),ss$1(2,`a`,1),WC(3,`Item 1`),Bu(),ss$1(4,`a`,1),WC(5,`Item 2`),Bu()(),ss$1(6,`sui-sidebar-pusher`)(7,`button`,2),Qh$1(`click`,function(){return s.visible=!s.visible}),WC(8,`Toggle Sidebar`),Bu()()()),a&2&&(KD(),yg(`visible`,s.visible))},dependencies:[Ii,B,R,Z,Ft,Tt$1],encapsulation:2,changeDetection:1})}}return n})();function z1(n,u){n&1&&(ss$1(0,`div`,9),Gh$1(1,`doc-sidebar-sidebar-example`),Bu())}function j1(n,u){n&1&&(ss$1(0,`div`,9),Gh$1(1,`doc-sidebar-visible-example`),Bu())}function N1(n,u){n&1&&(ss$1(0,`div`,9),Gh$1(1,`doc-sidebar-dimmed-example`),Bu())}function U1(n,u){n&1&&(ss$1(0,`div`,9),Gh$1(1,`doc-sidebar-direction-example`),Bu())}function $1(n,u){n&1&&(ss$1(0,`div`,9),Gh$1(1,`doc-sidebar-width-example`),Bu())}function Y1(n,u){n&1&&(ss$1(0,`div`,9),Gh$1(1,`doc-sidebar-transitions-example`),Bu())}function G1(n,u){n&1&&(ss$1(0,`div`,9),Gh$1(1,`doc-sidebar-page-example`),Bu())}function X1(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Sidebar`),Bu(),ss$1(6,`p`),WC(7,`A sidebar, usually an inverted vertical menu`),Bu(),ss$1(8,`div`,5),WC(9,` Bind `),ss$1(10,`code`),WC(11,`[(visible)]`),Bu(),WC(12,` to show and hide the sidebar. When it is two-way bound, clicking the page content hides the sidebar. `),Bu(),Ph(13,z1,2,0,`ng-template`,6),Bu(),Gh$1(14,`br`),ss$1(15,`h2`,2),WC(16,`States`),Bu(),ss$1(17,`doc-code-sample`,7)(18,`h3`,4),WC(19,`Visible`),Bu(),ss$1(20,`p`),WC(21,`A sidebar can be visible on the page`),Bu(),ss$1(22,`div`,5),WC(23,` A sidebar that is not two-way bound stays visible when the page is clicked. `),Bu(),Ph(24,j1,2,0,`ng-template`,6),Bu(),ss$1(25,`doc-code-sample`,3)(26,`h3`,4),WC(27,`Dimmed`),Bu(),ss$1(28,`p`),WC(29,`A pusher can be dimmed while the sidebar is visible`),Bu(),Ph(30,N1,2,0,`ng-template`,6),Bu(),Gh$1(31,`br`),ss$1(32,`h2`,2),WC(33,`Variations`),Bu(),ss$1(34,`doc-code-sample`,3)(35,`h3`,4),WC(36,`Direction`),Bu(),ss$1(37,`p`),WC(38,`A sidebar can appear on different sides of the page`),Bu(),ss$1(39,`div`,5),WC(40,` Top and bottom sidebars should be horizontal menus, so `),ss$1(41,`code`),WC(42,`suiVertical`),Bu(),WC(43,` is only set for left and right sidebars. `),Bu(),Ph(44,U1,2,0,`ng-template`,6),Bu(),ss$1(45,`doc-code-sample`,3)(46,`h3`,4),WC(47,`Width`),Bu(),ss$1(48,`p`),WC(49,`A sidebar can specify its width`),Bu(),Ph(50,$1,2,0,`ng-template`,6),Bu(),ss$1(51,`doc-code-sample`,3)(52,`h3`,4),WC(53,`Transitions`),Bu(),ss$1(54,`p`),WC(55,`A sidebar can use different transitions to appear`),Bu(),ss$1(56,`div`,8)(57,`code`),WC(58,`uncover`),Bu(),WC(59,`, `),ss$1(60,`code`),WC(61,`slide along`),Bu(),WC(62,` and `),ss$1(63,`code`),WC(64,`slide out`),Bu(),WC(65,` only support left and right sidebars. `),Bu(),Ph(66,Y1,2,0,`ng-template`,6),Bu(),Gh$1(67,`br`),ss$1(68,`h2`,2),WC(69,`Usage`),Bu(),ss$1(70,`doc-code-sample`,3)(71,`h3`,4),WC(72,`Page Structure`),Bu(),ss$1(73,`p`),WC(74,`A sidebar requires a container with a sidebar and a pusher holding the page content`),Bu(),ss$1(75,`div`,5),WC(76,` Without `),ss$1(77,`code`),WC(78,`suiPushable`),Bu(),WC(79,` the page body is the context and the sidebar is fixed to the viewport. Add `),ss$1(80,`code`),WC(81,`suiPushable`),Bu(),WC(82,` to keep the sidebar inside the container, as in the examples above. `),Bu(),ss$1(83,`div`,8),WC(84,` A pushable container cannot have padding. `),Bu(),Ph(85,G1,2,0,`ng-template`,6),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetSidebar)(`componentCode`,o.snippetSidebarTs),KD(14),Uh$1(`templateCode`,o.snippetVisible),KD(8),Uh$1(`templateCode`,o.snippetDimmed)(`componentCode`,o.snippetDimmedTs),KD(9),Uh$1(`templateCode`,o.snippetDirection)(`componentCode`,o.snippetDirectionTs),KD(11),Uh$1(`templateCode`,o.snippetWidth)(`componentCode`,o.snippetWidthTs),KD(6),Uh$1(`templateCode`,o.snippetTransitions)(`componentCode`,o.snippetTransitionsTs),KD(19),Uh$1(`templateCode`,o.snippetPage)(`componentCode`,o.snippetPageTs)}}function J1(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`sui-sidebar-container`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,10)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,` suiPushable `),Bu(),ss$1(20,`td`),WC(21,` Make the container the sidebar's context instead of the page. Always applied when the pusher is dimmable `),Bu(),ss$1(22,`td`)(23,`div`,11),WC(24,` boolean `),Bu()(),ss$1(25,`td`)(26,`div`,12),WC(27,` false `),Bu()()()()(),ss$1(28,`h2`,2),WC(29,`sui-sidebar`),Bu(),ss$1(30,`h4`,4),WC(31,`Properties`),Bu(),ss$1(32,`table`,10)(33,`thead`)(34,`tr`)(35,`th`),WC(36,`Property`),Bu(),ss$1(37,`th`),WC(38,`Description`),Bu(),ss$1(39,`th`),WC(40,`Type`),Bu(),ss$1(41,`th`),WC(42,`Default`),Bu()()(),ss$1(43,`tbody`)(44,`tr`)(45,`td`),WC(46,` visible `),Bu(),ss$1(47,`td`),WC(48,` Whether the sidebar is shown. Supports two-way binding with `),ss$1(49,`code`),WC(50,`[(visible)]`),Bu()(),ss$1(51,`td`)(52,`div`,11),WC(53,` boolean `),Bu()(),ss$1(54,`td`)(55,`div`,12),WC(56,` true `),Bu()()(),ss$1(57,`tr`)(58,`td`),WC(59,` suiSidebarPosition `),Bu(),ss$1(60,`td`),WC(61,` The side of the page the sidebar appears on. Allowed values are `),ss$1(62,`span`,13),WC(63,`'left'`),Bu(),WC(64,` | `),ss$1(65,`span`,13),WC(66,`'right'`),Bu(),WC(67,` | `),ss$1(68,`span`,13),WC(69,`'top'`),Bu(),WC(70,` | `),ss$1(71,`span`,13),WC(72,`'bottom'`),Bu()(),ss$1(73,`td`)(74,`div`,11),WC(75,` string `),Bu()(),ss$1(76,`td`)(77,`div`,12),WC(78,` 'left' `),Bu()()(),ss$1(79,`tr`)(80,`td`),WC(81,` suiSidebarWidth `),Bu(),ss$1(82,`td`),WC(83,` Set the width of the sidebar. Allowed values are `),ss$1(84,`span`,13),WC(85,`'very thin'`),Bu(),WC(86,` | `),ss$1(87,`span`,13),WC(88,`'thin'`),Bu(),WC(89,` | `),ss$1(90,`span`,13),WC(91,`'wide'`),Bu(),WC(92,` | `),ss$1(93,`span`,13),WC(94,`'very wide'`),Bu(),WC(95,` | `),ss$1(96,`span`,13),WC(97,`null`),Bu()(),ss$1(98,`td`)(99,`div`,11),WC(100,` string `),Bu()(),ss$1(101,`td`)(102,`div`,12),WC(103,` null `),Bu()()(),ss$1(104,`tr`)(105,`td`),WC(106,` suiSidebarAnimation `),Bu(),ss$1(107,`td`),WC(108,` Set the transition used to show the sidebar. Allowed values are `),ss$1(109,`span`,13),WC(110,`'overlay'`),Bu(),WC(111,` | `),ss$1(112,`span`,13),WC(113,`'push'`),Bu(),WC(114,` | `),ss$1(115,`span`,13),WC(116,`'scale down'`),Bu(),WC(117,` | `),ss$1(118,`span`,13),WC(119,`'uncover'`),Bu(),WC(120,` | `),ss$1(121,`span`,13),WC(122,`'slide along'`),Bu(),WC(123,` | `),ss$1(124,`span`,13),WC(125,`'slide out'`),Bu(),WC(126,` | `),ss$1(127,`span`,13),WC(128,`null`),Bu()(),ss$1(129,`td`)(130,`div`,11),WC(131,` string `),Bu()(),ss$1(132,`td`)(133,`div`,12),WC(134,` null `),Bu()()(),ss$1(135,`tr`)(136,`td`),WC(137,` suiInverted `),Bu(),ss$1(138,`td`),WC(139,` Invert the colours of the sidebar `),Bu(),ss$1(140,`td`)(141,`div`,11),WC(142,` boolean `),Bu()(),ss$1(143,`td`)(144,`div`,12),WC(145,` false `),Bu()()(),ss$1(146,`tr`)(147,`td`),WC(148,` suiClosable `),Bu(),ss$1(149,`td`),WC(150,` Hide a two-way bound sidebar when the pusher is clicked `),Bu(),ss$1(151,`td`)(152,`div`,11),WC(153,` boolean `),Bu()(),ss$1(154,`td`)(155,`div`,12),WC(156,` true `),Bu()()()()(),ss$1(157,`h4`,4),WC(158,`Events`),Bu(),ss$1(159,`table`,10)(160,`thead`)(161,`tr`)(162,`th`),WC(163,`Event`),Bu(),ss$1(164,`th`),WC(165,`Description`),Bu(),ss$1(166,`th`),WC(167,`Type`),Bu()()(),ss$1(168,`tbody`)(169,`tr`)(170,`td`),WC(171,` visibleChange `),Bu(),ss$1(172,`td`),WC(173,` Emitted when the sidebar is shown or hidden `),Bu(),ss$1(174,`td`)(175,`div`,11),WC(176,` EventEmitter<boolean> `),Bu()()()()(),ss$1(177,`h4`,4),WC(178,`Methods`),Bu(),ss$1(179,`table`,10)(180,`thead`)(181,`tr`)(182,`th`),WC(183,`Method`),Bu(),ss$1(184,`th`),WC(185,`Description`),Bu()()(),ss$1(186,`tbody`)(187,`tr`)(188,`td`),WC(189,` show() `),Bu(),ss$1(190,`td`),WC(191,` Shows the sidebar `),Bu()(),ss$1(192,`tr`)(193,`td`),WC(194,` hide() `),Bu(),ss$1(195,`td`),WC(196,` Hides the sidebar `),Bu()(),ss$1(197,`tr`)(198,`td`),WC(199,` toggle() `),Bu(),ss$1(200,`td`),WC(201,` Toggles the visibility of the sidebar `),Bu()()()(),ss$1(202,`h2`,2),WC(203,`sui-sidebar-pusher`),Bu(),ss$1(204,`h4`,4),WC(205,`Properties`),Bu(),ss$1(206,`table`,10)(207,`thead`)(208,`tr`)(209,`th`),WC(210,`Property`),Bu(),ss$1(211,`th`),WC(212,`Description`),Bu(),ss$1(213,`th`),WC(214,`Type`),Bu(),ss$1(215,`th`),WC(216,`Default`),Bu()()(),ss$1(217,`tbody`)(218,`tr`)(219,`td`),WC(220,` suiDimmable `),Bu(),ss$1(221,`td`),WC(222,` Dim the page content while the sidebar is visible `),Bu(),ss$1(223,`td`)(224,`div`,11),WC(225,` boolean `),Bu()(),ss$1(226,`td`)(227,`div`,12),WC(228,` false `),Bu()()()()()())}var yd=(()=>{class n{constructor(o){this.snippetSidebar=td,this.snippetSidebarTs=id,this.snippetVisible=nd,this.snippetDimmed=od,this.snippetDimmedTs=ad,this.snippetDirection=sd,this.snippetDirectionTs=rd,this.snippetWidth=ld,this.snippetWidthTs=dd,this.snippetTransitions=md,this.snippetTransitionsTs=pd,this.snippetPage=ud,this.snippetPageTs=cd,o.setTitle(`Sidebar | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sidebar`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Sidebar`,`subHeader`,`A sidebar hides additional content beside a page`,`semanticUrl`,`https://semantic-ui.com/modules/sidebar.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[3,`templateCode`],[`sui-message`,``,`suiState`,`warning`],[1,`sidebar-demo`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[`sui-label`,``]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,X1,86,13,`div`,1)(2,J1,229,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li$1,hd,gd,fd,Sd,vd,xd,bd],styles:[`[_nghost-%COMP%]     .sidebar-demo sui-sidebar-container.ui.segment{height:22rem;margin-top:0}`],changeDetection:1})}}return n})();var Ed=`<div sui-segment
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
`;var Cd=`<div sui-segment
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
`;var Dd=`<div sui-segment
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
`;var wd=`<div sui-segment
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
`;var _d=`<div class="sticky-scroll"
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
`;var $t=(()=>{class n{constructor(){this.document=g(Y),this.el=g(Ie),this.renderer=g(yn),this.zone=g(G),this.cdr=g(Pg$1),this.suiContext=null,this.suiScrollContext=`window`,this.suiOffset=0,this.suiBottomOffset=0,this.suiPushing=!1,this.suiSetSize=!0,this.suiJitter=5,this.suiObserveChanges=!1,this.suiOnReposition=new nt$1,this.suiOnScroll=new nt$1,this.suiOnStick=new nt$1,this.suiOnUnstick=new nt$1,this.suiOnTop=new nt$1,this.suiOnBottom=new nt$1,this.cache=null,this.classUi=!0,this.classSticky=!0,this.fixed=!1,this.bound=!1,this.topState=!1,this.bottomState=!1,this.destroy$=new he$1,this.elementScroll=0,this.scrollEl=window,this.contextEl=null,this.containerEl=null,this.mutationObserver=null,this.refreshTimer=null}ngOnInit(){this.scrollEl=this.resolveScrollElement();let o=this.document.defaultView;this.zone.runOutsideAngular(()=>{let a=this.scrollEl===window?o:this.scrollEl;ea$1(a,`scroll`,{passive:!0}).pipe(ly(this.destroy$)).subscribe(()=>{requestAnimationFrame(()=>{let s=this.readScrollTop();this.zone.run(()=>{this.stick(s),this.suiOnScroll.emit()})})}),ea$1(o,`resize`,{passive:!0}).pipe(ly(this.destroy$)).subscribe(()=>{requestAnimationFrame(()=>this.zone.run(()=>this.refresh(!1)))})})}ngAfterViewInit(){queueMicrotask(()=>this.refresh(!0))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.mutationObserver?.disconnect(),this.refreshTimer&&clearTimeout(this.refreshTimer),this.reset()}refresh(o=!1){this.resetLayout(),this.determineContainer(),this.determineContext(),this.contextEl&&(o&&this.determineContainer(),this.savePositions(),this.suiOnReposition.emit(),this.cdr.markForCheck(),this.suiObserveChanges&&typeof MutationObserver<`u`&&!this.mutationObserver&&(this.mutationObserver=new MutationObserver(()=>this.scheduleRefresh()),this.mutationObserver.observe(this.contextEl,{childList:!0,subtree:!0}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,subtree:!0})))}scheduleRefresh(){this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.refreshTimer=null,this.refresh(!1)},100)}resolveScrollElement(){return this.suiScrollContext===`window`?window:this.document.querySelector(this.suiScrollContext)||window}readScrollTop(){return this.scrollEl===window?window.scrollY:this.scrollEl.scrollTop}determineContainer(){let o=this.el.nativeElement;this.containerEl=o.offsetParent||o.parentElement}determineContext(){if(this.suiContext===null){this.contextEl=this.containerEl;return}if(typeof this.suiContext==`string`){this.contextEl=this.document.querySelector(this.suiContext);return}this.contextEl=this.suiContext}savePositions(){let o=this.el.nativeElement,a=this.contextEl,s=this.scrollEl===window?window.innerHeight:this.scrollEl.clientHeight,p=getComputedStyle(o),m=parseInt(p.marginTop,10)||0,v=parseInt(p.marginBottom,10)||0,O=this.scrollEl===window?null:this.scrollEl,ie=O?O.getBoundingClientRect().top:0,ke=O?O.scrollTop-ie:window.scrollY,ne=window.scrollX,dt=o.getBoundingClientRect(),W=a.getBoundingClientRect(),re=dt.top+ke,F=W.top+ke,It=dt.left+ne,Le=o.offsetHeight,Yt=a.offsetHeight,li=re-m,di=F+Yt;if(this.cache={fits:Le+this.suiOffset<=s,sameHeight:Le===Yt,scrollContext:{height:s},element:{margin:{top:m,bottom:v},top:li,left:It,width:o.offsetWidth,height:Le,bottom:re+Le},context:{top:F,height:Yt,bottom:di}},this.setContainerSize(),!this.isCacheValid()){this.cache=null,this.resetLayout();return}this.stick(this.readScrollTop())}isCacheValid(){if(!this.cache)return!1;let o=getComputedStyle(this.el.nativeElement);return o.display===`none`||o.visibility===`hidden`?!1:this.cache.element.height<=this.cache.context.height}setContainerSize(){if(!this.cache||!this.containerEl)return;let o=this.containerEl.tagName;if(o===`HTML`||o===`BODY`)return;let a=this.containerEl.offsetHeight,s=this.cache.context.height;Math.abs(a-s)>this.suiJitter&&this.renderer.setStyle(this.containerEl,`height`,`${s}px`)}stick(o){let a=this.cache;if(!a||a.sameHeight)return;let s=this.bottomState&&this.suiPushing?this.suiBottomOffset:this.suiOffset,p={top:o+s,bottom:o+s+a.scrollContext.height},m=a.element,v=a.context,O=a.fits?0:this.computeElementScroll(o);this.isInitialPosition()?p.top>=v.bottom?this.bindBottom():p.top>m.top&&(m.height+p.top-O>=v.bottom?this.bindBottom():this.fixTop()):this.fixed?this.topState?p.top<=m.top?this.setInitialPosition():m.height+p.top-O>=v.bottom?this.bindBottom():a.fits||(this.applyElementScroll(O),this.lastScroll=p.top):this.bottomState&&(p.bottom-m.height<=m.top?this.setInitialPosition():p.bottom>=v.bottom?this.bindBottom():a.fits||(this.applyElementScroll(O),this.lastScroll=p.top)):this.bound&&this.bottomState&&(p.top<=m.top?this.setInitialPosition():this.suiPushing?this.bound&&p.bottom<=v.bottom&&this.fixBottom():this.bound&&p.top<=v.bottom-m.height&&this.fixTop()),this.lastScroll=o,this.cdr.markForCheck()}isInitialPosition(){return!this.fixed&&!this.bound}computeElementScroll(o){let a=this.cache,s=this.lastScroll===void 0?0:o-this.lastScroll,p=a.element.height-a.scrollContext.height+this.suiOffset,m=this.elementScroll;this.topState?m=Math.abs(parseInt(this.el.nativeElement.style.top||`0`,10))||0:this.bottomState&&(m=Math.abs(parseInt(this.el.nativeElement.style.bottom||`0`,10))||0);let v=m+s;return a.fits||v<0?0:v>p?p:v}applyElementScroll(o){this.elementScroll=o,this.topState&&(this.renderer.setStyle(this.el.nativeElement,`bottom`,``),this.renderer.setStyle(this.el.nativeElement,`top`,`${-o}px`)),this.bottomState&&(this.renderer.setStyle(this.el.nativeElement,`top`,``),this.renderer.setStyle(this.el.nativeElement,`bottom`,`${o}px`))}bindBottom(){this.unfix(),this.unbind(),this.clearPositionStyles(),this.renderer.removeStyle(this.el.nativeElement,`margin-top`),this.fixed=!1,this.bound=!0,this.topState=!1,this.bottomState=!0,this.suiOnBottom.emit(),this.suiOnUnstick.emit()}fixTop(){this.unfix(),this.unbind();let o=this.cache;this.suiSetSize&&(this.renderer.setStyle(this.el.nativeElement,`width`,`${o.element.width}px`,2),this.renderer.setStyle(this.el.nativeElement,`height`,`${o.element.height}px`,2)),this.containerEl&&this.renderer.setStyle(this.containerEl,`min-height`,`${o.element.height}px`),this.renderer.setStyle(this.el.nativeElement,`margin-top`,`${this.suiOffset}px`),this.renderer.setStyle(this.el.nativeElement,`left`,`${o.element.left}px`),this.renderer.setStyle(this.el.nativeElement,`bottom`,``),this.renderer.setStyle(this.el.nativeElement,`margin-bottom`,``),this.scrollEl!==window&&this.renderer.setStyle(this.el.nativeElement,`top`,`${this.scrollEl.getBoundingClientRect().top}px`),this.fixed=!0,this.bound=!1,this.topState=!0,this.bottomState=!1,this.suiOnStick.emit()}fixBottom(){this.unfix(),this.unbind();let o=this.cache;if(this.suiSetSize&&(this.renderer.setStyle(this.el.nativeElement,`width`,`${o.element.width}px`,2),this.renderer.setStyle(this.el.nativeElement,`height`,`${o.element.height}px`,2)),this.containerEl&&this.renderer.setStyle(this.containerEl,`min-height`,`${o.element.height}px`),this.renderer.setStyle(this.el.nativeElement,`margin-top`,`${this.suiOffset}px`),this.renderer.setStyle(this.el.nativeElement,`left`,`${o.element.left}px`),this.scrollEl!==window){let a=window.innerHeight-this.scrollEl.getBoundingClientRect().bottom;this.renderer.setStyle(this.el.nativeElement,`bottom`,`${a}px`)}this.fixed=!0,this.bound=!1,this.topState=!1,this.bottomState=!0,this.suiOnStick.emit()}setInitialPosition(){let o=this.fixed||this.bound;this.unfix(),this.unbind(),this.lastScroll=void 0,this.elementScroll=0,o&&(this.suiOnTop.emit(),this.suiOnUnstick.emit())}unbind(){this.bound&&(this.bound=!1,this.topState=!1,this.bottomState=!1)}unfix(){this.fixed&&(this.containerEl&&this.renderer.removeStyle(this.containerEl,`min-height`),this.renderer.removeStyle(this.el.nativeElement,`margin-top`),this.renderer.removeStyle(this.el.nativeElement,`left`),this.renderer.removeStyle(this.el.nativeElement,`width`),this.renderer.removeStyle(this.el.nativeElement,`height`),this.renderer.removeStyle(this.el.nativeElement,`top`),this.renderer.removeStyle(this.el.nativeElement,`bottom`),this.fixed=!1,this.topState=!1,this.bottomState=!1)}clearPositionStyles(){this.renderer.removeStyle(this.el.nativeElement,`left`),this.renderer.removeStyle(this.el.nativeElement,`top`),this.renderer.removeStyle(this.el.nativeElement,`bottom`),this.renderer.removeStyle(this.el.nativeElement,`margin-bottom`)}resetLayout(){this.unfix(),this.unbind(),this.clearPositionStyles(),this.renderer.removeStyle(this.el.nativeElement,`margin-top`),this.containerEl&&(this.renderer.removeStyle(this.containerEl,`height`),this.renderer.removeStyle(this.containerEl,`min-height`)),this.renderer.removeStyle(this.el.nativeElement,`width`),this.renderer.removeStyle(this.el.nativeElement,`height`),this.fixed=!1,this.bound=!1,this.topState=!1,this.bottomState=!1}reset(){this.resetLayout(),this.cache=null}static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiSticky`,``]],hostVars:12,hostBindings:function(a,s){a&2&&go$1(`ui`,s.classUi)(`sticky`,s.classSticky)(`fixed`,s.fixed)(`bound`,s.bound)(`top`,s.topState)(`bottom`,s.bottomState)},inputs:{suiContext:`suiContext`,suiScrollContext:`suiScrollContext`,suiOffset:`suiOffset`,suiBottomOffset:`suiBottomOffset`,suiPushing:`suiPushing`,suiSetSize:`suiSetSize`,suiJitter:`suiJitter`,suiObserveChanges:`suiObserveChanges`},outputs:{suiOnReposition:`suiOnReposition`,suiOnScroll:`suiOnScroll`,suiOnStick:`suiOnStick`,suiOnUnstick:`suiOnUnstick`,suiOnTop:`suiOnTop`,suiOnBottom:`suiOnBottom`},exportAs:[`suiSticky`]})}}return dS([ve()],n.prototype,`suiPushing`,void 0),dS([ve()],n.prototype,`suiSetSize`,void 0),dS([ve()],n.prototype,`suiObserveChanges`,void 0),n})();var Td=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1]})}}return n})();var Mt=class{constructor(){this.stuck=!1}};var Md=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sticky-sticky-example`]],standalone:!1,features:[lo$1],decls:16,vars:1,consts:[[`context`,``],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,3,`suiContext`],[`sui-header`,``],[`type`,`image`]],template:function(a,s){if(a&1&&(ss$1(0,`div`,1,0)(2,`div`,2),Gh$1(3,`doc-wireframe`,3)(4,`doc-wireframe`,3)(5,`doc-wireframe`,3)(6,`doc-wireframe`,3)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3)(9,`doc-wireframe`,3)(10,`doc-wireframe`,3),Bu(),ss$1(11,`div`,4)(12,`div`,5)(13,`h3`,6),WC(14,`Stuck Content`),Bu(),Gh$1(15,`doc-wireframe`,7),Bu()()()),a&2){let p=IC(1);KD(12),Uh$1(`suiContext`,p)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();var Id=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sticky-pushing-example`]],standalone:!1,features:[lo$1],decls:16,vars:1,consts:[[`context`,``],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,`suiPushing`,``,3,`suiContext`],[`sui-header`,``],[`type`,`image`]],template:function(a,s){if(a&1&&(ss$1(0,`div`,1,0)(2,`div`,2),Gh$1(3,`doc-wireframe`,3)(4,`doc-wireframe`,3)(5,`doc-wireframe`,3)(6,`doc-wireframe`,3)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3)(9,`doc-wireframe`,3)(10,`doc-wireframe`,3),Bu(),ss$1(11,`div`,4)(12,`div`,5)(13,`h3`,6),WC(14,`Stuck Content`),Bu(),Gh$1(15,`doc-wireframe`,7),Bu()()()),a&2){let p=IC(1);KD(12),Uh$1(`suiContext`,p)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();var Pd=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sticky-offset-example`]],standalone:!1,features:[lo$1],decls:16,vars:2,consts:[[`context`,``],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,3,`suiContext`,`suiOffset`],[`sui-header`,``],[`type`,`image`]],template:function(a,s){if(a&1&&(ss$1(0,`div`,1,0)(2,`div`,2),Gh$1(3,`doc-wireframe`,3)(4,`doc-wireframe`,3)(5,`doc-wireframe`,3)(6,`doc-wireframe`,3)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3)(9,`doc-wireframe`,3)(10,`doc-wireframe`,3),Bu(),ss$1(11,`div`,4)(12,`div`,5)(13,`h3`,6),WC(14,`Stuck Content`),Bu(),Gh$1(15,`doc-wireframe`,7),Bu()()()),a&2){let p=IC(1);KD(12),Uh$1(`suiContext`,p)(`suiOffset`,50)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();var kd=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sticky-events-example`]],standalone:!1,features:[lo$1],decls:15,vars:2,consts:[[`context`,``],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,3,`suiOnStick`,`suiOnUnstick`,`suiContext`],[`sui-header`,``]],template:function(a,s){if(a&1&&(ss$1(0,`div`,1,0)(2,`div`,2),Gh$1(3,`doc-wireframe`,3)(4,`doc-wireframe`,3)(5,`doc-wireframe`,3)(6,`doc-wireframe`,3)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3)(9,`doc-wireframe`,3)(10,`doc-wireframe`,3),Bu(),ss$1(11,`div`,4)(12,`div`,5),Qh$1(`suiOnStick`,function(){return s.stuck=!0})(`suiOnUnstick`,function(){return s.stuck=!1}),ss$1(13,`h3`,6),WC(14),Bu()()()()),a&2){let p=IC(1);KD(12),Uh$1(`suiContext`,p),KD(2),hg(s.stuck?`Stuck`:`Not stuck`)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();var Fd=(()=>{class n extends Mt{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sticky-scroll-context-example`]],standalone:!1,features:[lo$1],decls:16,vars:1,consts:[[`context`,``],[`id`,`sticky-scroll-example`,1,`sticky-scroll`],[`sui-segment`,``],[1,`sticky-content`],[`type`,`paragraph`],[`sui-rail`,``,`suiLocation`,`right`,`suiInternal`,``],[`sui-segment`,``,`suiSticky`,``,`suiScrollContext`,`#sticky-scroll-example`,3,`suiContext`],[`sui-header`,``]],template:function(a,s){if(a&1&&(ss$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Gh$1(4,`doc-wireframe`,4)(5,`doc-wireframe`,4)(6,`doc-wireframe`,4)(7,`doc-wireframe`,4)(8,`doc-wireframe`,4)(9,`doc-wireframe`,4)(10,`doc-wireframe`,4)(11,`doc-wireframe`,4),Bu(),ss$1(12,`div`,5)(13,`div`,6)(14,`h3`,7),WC(15,`Stuck Content`),Bu()()()()()),a&2){let p=IC(2);KD(13),Uh$1(`suiContext`,p)}},dependencies:[Dr$1,Ws$1,ze,$t,ze$1],encapsulation:2,changeDetection:1})}}return n})();function ng(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-sticky-sticky-example`),Bu())}function og(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-sticky-pushing-example`),Bu())}function ag(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-sticky-offset-example`),Bu())}function sg(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-sticky-events-example`),Bu())}function rg(n,u){n&1&&(ss$1(0,`div`,7),Gh$1(1,`doc-sticky-scroll-context-example`),Bu())}function lg(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Sticky`),Bu(),ss$1(6,`p`),WC(7,`Sticky content stays fixed to the viewport while its context is visible`),Bu(),ss$1(8,`div`,5),WC(9,` Scroll the page to see the content stick. A sticky is usually placed in a `),ss$1(10,`code`),WC(11,`rail`),Bu(),WC(12,`, and its `),ss$1(13,`code`),WC(14,`suiContext`),Bu(),WC(15,` is the element whose bounds it stays within. `),Bu(),Ph(16,ng,2,0,`ng-template`,6),Bu(),Gh$1(17,`br`),ss$1(18,`h2`,2),WC(19,`Variations`),Bu(),ss$1(20,`doc-code-sample`,3)(21,`h3`,4),WC(22,`Pushing`),Bu(),ss$1(23,`p`),WC(24,`Sticky content can push the page up when you scroll back, instead of returning to its original position straight away`),Bu(),Ph(25,og,2,0,`ng-template`,6),Bu(),ss$1(26,`doc-code-sample`,3)(27,`h3`,4),WC(28,`Offset`),Bu(),ss$1(29,`p`),WC(30,`Sticky content can be offset from the top of the viewport, for example to sit below a fixed menu`),Bu(),Ph(31,ag,2,0,`ng-template`,6),Bu(),ss$1(32,`doc-code-sample`,3)(33,`h3`,4),WC(34,`Events`),Bu(),ss$1(35,`p`),WC(36,`A sticky element reports when it sticks and unsticks`),Bu(),Ph(37,sg,2,0,`ng-template`,6),Bu(),ss$1(38,`doc-code-sample`,3)(39,`h3`,4),WC(40,`Scroll Context`),Bu(),ss$1(41,`p`),WC(42,`A sticky can stick inside a scrolling element instead of the page`),Bu(),ss$1(43,`div`,5)(44,`code`),WC(45,`suiScrollContext`),Bu(),WC(46,` takes a CSS selector for the scrolling element. `),Bu(),Ph(47,rg,2,0,`ng-template`,6),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetSticky),KD(17),Uh$1(`templateCode`,o.snippetPushing),KD(6),Uh$1(`templateCode`,o.snippetOffset),KD(6),Uh$1(`templateCode`,o.snippetEvents),KD(6),Uh$1(`templateCode`,o.snippetScrollContext)}}function dg(n,u){n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`suiSticky`),Bu(),ss$1(3,`h4`,4),WC(4,`Properties`),Bu(),ss$1(5,`table`,8)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss$1(10,`th`),WC(11,`Description`),Bu(),ss$1(12,`th`),WC(13,`Type`),Bu(),ss$1(14,`th`),WC(15,`Default`),Bu()()(),ss$1(16,`tbody`)(17,`tr`)(18,`td`),WC(19,` suiContext `),Bu(),ss$1(20,`td`),WC(21,` The element (or CSS selector) the sticky stays within. Defaults to the sticky's offset parent `),Bu(),ss$1(22,`td`)(23,`div`,9),WC(24,` string | HTMLElement `),Bu()(),ss$1(25,`td`)(26,`div`,10),WC(27,` null `),Bu()()(),ss$1(28,`tr`)(29,`td`),WC(30,` suiScrollContext `),Bu(),ss$1(31,`td`),WC(32,` The scrolling element, as a CSS selector, or `),ss$1(33,`code`),WC(34,`'window'`),Bu()(),ss$1(35,`td`)(36,`div`,9),WC(37,` string `),Bu()(),ss$1(38,`td`)(39,`div`,10),WC(40,` 'window' `),Bu()()(),ss$1(41,`tr`)(42,`td`),WC(43,` suiOffset `),Bu(),ss$1(44,`td`),WC(45,` Pixels between the sticky and the top of the scroll context when stuck `),Bu(),ss$1(46,`td`)(47,`div`,9),WC(48,` number `),Bu()(),ss$1(49,`td`)(50,`div`,10),WC(51,` 0 `),Bu()()(),ss$1(52,`tr`)(53,`td`),WC(54,` suiBottomOffset `),Bu(),ss$1(55,`td`),WC(56,` Pixels between the sticky and the bottom of the scroll context when pushing `),Bu(),ss$1(57,`td`)(58,`div`,9),WC(59,` number `),Bu()(),ss$1(60,`td`)(61,`div`,10),WC(62,` 0 `),Bu()()(),ss$1(63,`tr`)(64,`td`),WC(65,` suiPushing `),Bu(),ss$1(66,`td`),WC(67,` Push the page up when scrolling back instead of returning to its position `),Bu(),ss$1(68,`td`)(69,`div`,9),WC(70,` boolean `),Bu()(),ss$1(71,`td`)(72,`div`,10),WC(73,` false `),Bu()()(),ss$1(74,`tr`)(75,`td`),WC(76,` suiSetSize `),Bu(),ss$1(77,`td`),WC(78,` Keep the sticky's width and height when it becomes fixed `),Bu(),ss$1(79,`td`)(80,`div`,9),WC(81,` boolean `),Bu()(),ss$1(82,`td`)(83,`div`,10),WC(84,` true `),Bu()()(),ss$1(85,`tr`)(86,`td`),WC(87,` suiJitter `),Bu(),ss$1(88,`td`),WC(89,` Pixel tolerance before the container height is corrected `),Bu(),ss$1(90,`td`)(91,`div`,9),WC(92,` number `),Bu()(),ss$1(93,`td`)(94,`div`,10),WC(95,` 5 `),Bu()()(),ss$1(96,`tr`)(97,`td`),WC(98,` suiObserveChanges `),Bu(),ss$1(99,`td`),WC(100,` Recalculate positions when the content of the sticky or its context changes `),Bu(),ss$1(101,`td`)(102,`div`,9),WC(103,` boolean `),Bu()(),ss$1(104,`td`)(105,`div`,10),WC(106,` false `),Bu()()()()(),ss$1(107,`h4`,4),WC(108,`Events`),Bu(),ss$1(109,`table`,8)(110,`thead`)(111,`tr`)(112,`th`),WC(113,`Event`),Bu(),ss$1(114,`th`),WC(115,`Description`),Bu(),ss$1(116,`th`),WC(117,`Type`),Bu()()(),ss$1(118,`tbody`)(119,`tr`)(120,`td`),WC(121,` suiOnStick `),Bu(),ss$1(122,`td`),WC(123,` Emitted when the element becomes fixed to the viewport `),Bu(),ss$1(124,`td`)(125,`div`,9),WC(126,` EventEmitter<void> `),Bu()()(),ss$1(127,`tr`)(128,`td`),WC(129,` suiOnUnstick `),Bu(),ss$1(130,`td`),WC(131,` Emitted when the element is no longer fixed `),Bu(),ss$1(132,`td`)(133,`div`,9),WC(134,` EventEmitter<void> `),Bu()()(),ss$1(135,`tr`)(136,`td`),WC(137,` suiOnTop `),Bu(),ss$1(138,`td`),WC(139,` Emitted when the element returns to the top of its context `),Bu(),ss$1(140,`td`)(141,`div`,9),WC(142,` EventEmitter<void> `),Bu()()(),ss$1(143,`tr`)(144,`td`),WC(145,` suiOnBottom `),Bu(),ss$1(146,`td`),WC(147,` Emitted when the element is bound to the bottom of its context `),Bu(),ss$1(148,`td`)(149,`div`,9),WC(150,` EventEmitter<void> `),Bu()()(),ss$1(151,`tr`)(152,`td`),WC(153,` suiOnScroll `),Bu(),ss$1(154,`td`),WC(155,` Emitted on every scroll of the scroll context `),Bu(),ss$1(156,`td`)(157,`div`,9),WC(158,` EventEmitter<void> `),Bu()()(),ss$1(159,`tr`)(160,`td`),WC(161,` suiOnReposition `),Bu(),ss$1(162,`td`),WC(163,` Emitted when positions are recalculated `),Bu(),ss$1(164,`td`)(165,`div`,9),WC(166,` EventEmitter<void> `),Bu()()()()(),ss$1(167,`h4`,4),WC(168,`Methods`),Bu(),ss$1(169,`table`,8)(170,`thead`)(171,`tr`)(172,`th`),WC(173,`Method`),Bu(),ss$1(174,`th`),WC(175,`Description`),Bu()()(),ss$1(176,`tbody`)(177,`tr`)(178,`td`),WC(179,` refresh(hard?) `),Bu(),ss$1(180,`td`),WC(181,` Recalculates the sticky positions, e.g. after the page layout changes `),Bu()()()()())}var Ad=(()=>{class n{constructor(o){this.snippetSticky=Ed,this.snippetPushing=Cd,this.snippetOffset=Dd,this.snippetEvents=wd,this.snippetScrollContext=_d,o.setTitle(`Sticky | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-sticky`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Sticky`,`subHeader`,`Sticky content stays fixed to the browser viewport while another column of content is visible on the page`,`semanticUrl`,`https://semantic-ui.com/modules/sticky.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[1,`sticky-demo`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,lg,48,5,`div`,1)(2,dg,182,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li$1,Md,Id,Pd,kd,Fd],styles:[`[_nghost-%COMP%]     .sticky-demo .sticky-content{width:60%}[_nghost-%COMP%]     .sticky-demo .sticky-scroll{height:22rem;overflow-y:auto}`],changeDetection:1})}}return n})();var Vd=`<div sui-buttons
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
`;var Bd=`<div sui-buttons
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
`;var Od=`<div sui-buttons
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
`;var Ld=`<div sui-buttons
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
`;var Hd=`<div sui-buttons
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
`;var Wd=`<div sui-buttons
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
`;var Rd=`<div sui-buttons
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
`;var zd=`<div sui-buttons
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
`;var jd=`<div sui-buttons
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
`;var Nd=`<div sui-buttons
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
`;var Ud=`animation = 'pulse';
playCount = 0;

play(animation: string): void {
  this.animation = animation;
  // incrementing suiPlay replays the current static animation
  this.playCount++;
}
`;var $d=`<button sui-button
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
`;var Yd=`<div sui-buttons
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
`;var Gd=`<div sui-buttons
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
`;var Xd=`<div sui-buttons
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
`;var Jd=`<button sui-button
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
`;var qd=`visible = true;
events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 6);
}
`;var Zd=`<div sui-buttons
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
`;var bi=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵprov=Ze({token:n,factory:()=>g(Mg)})}return n})();var Si=class{};var Mg=(()=>{class n extends bi{animationModuleType=g(Uy,{optional:!0});_nextAnimationId=0;_renderer;constructor(o,a){super();let s={id:`0`,encapsulation:Pe$2.None,styles:[],data:{animation:[]}};if(this._renderer=o.createRenderer(a.body,s),this.animationModuleType===null&&!Pg(this._renderer))throw new D(3600,!1)}build(o){let a=this._nextAnimationId;this._nextAnimationId++;let s=Array.isArray(o)?si(o):o;return Kd(this._renderer,null,a,`register`,[s]),new vi(a,this._renderer)}static ɵfac=function(a){return new(a||n)(T(mn),T(Y))};static ɵprov=x({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var vi=class extends Si{_id;_renderer;constructor(u,o){super(),this._id=u,this._renderer=o}create(u,o){return new xi(this._id,u,o||{},this._renderer)}};var xi=class{id;element;_renderer;parentPlayer=null;_started=!1;constructor(u,o,a,s){this.id=u,this.element=o,this._renderer=s,this._command(`create`,a)}_listen(u,o){return this._renderer.listen(this.element,`@@${this.id}:${u}`,o)}_command(u,...o){Kd(this._renderer,this.element,this.id,u,o)}onDone(u){this._listen(`done`,u)}onStart(u){this._listen(`start`,u)}onDestroy(u){this._listen(`destroy`,u)}init(){this._command(`init`)}hasStarted(){return this._started}play(){this._command(`play`),this._started=!0}pause(){this._command(`pause`)}restart(){this._command(`restart`)}finish(){this._command(`finish`)}destroy(){this._command(`destroy`)}reset(){this._command(`reset`),this._started=!1}setPosition(u){this._command(`setPosition`,u)}getPosition(){return Ig(this._renderer)?.engine?.players[this.id]?.getPosition()??0}totalTime=0};function Kd(n,u,o,a,s){n.setProperty(u,`@@${o}:${a}`,s)}function Ig(n){let u=n.ɵtype;return u===0?n:u===1?n.animationRenderer:null}function Pg(n){let u=n.ɵtype;return u===0||u===1}function Qd(n){if(typeof n==`number`)return Number.isFinite(n)?`${n}ms`:`500ms`;let u=String(n).trim();return u?/^\d+(\.\d+)?(ms|s)$/i.test(u)?u:/^\d+(\.\d+)?$/.test(u)?`${u}ms`:u:`500ms`}function yi(n){let u=n.trim().toLowerCase().replace(/\s+/g,` `),o=null,a=u;return a.endsWith(` in`)?(o=`in`,a=a.slice(0,-3).trim()):a.endsWith(` out`)&&(o=`out`,a=a.slice(0,-4).trim()),{baseName:a,explicitDirection:o}}function kg(n,u,o){return n===`in`||n===`out`?n:u===`in`?`in`:u===`out`?`out`:o?`in`:`out`}var Fg=/* @__PURE__ */ new Set([`jiggle`,`flash`,`shake`,`pulse`,`tada`,`bounce`,`glow`]);function ri(n){return Fg.has(n)}var M=`cubic-bezier(0.4, 0, 0.2, 1)`;var tm={scale:{enter:n=>[ni({opacity:0,transform:`scale(0)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`scale(1)`}))],leave:n=>[ni({opacity:1,transform:`scale(1)`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`scale(0)`}))]},zoom:{enter:n=>[ni({opacity:0,transform:`scale(0.35)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`scale(1)`}))],leave:n=>[ni({opacity:1,transform:`scale(1)`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`scale(0.35)`}))]},fade:{enter:n=>[ni({opacity:0,offset:0}),ti(`${n} ${M}`,ni({opacity:1}))],leave:n=>[ni({opacity:1,offset:0}),ti(`${n} ${M}`,ni({opacity:0}))]},"fade up":{enter:n=>[ni({opacity:0,transform:`translateY(0.75rem)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(0.75rem)`}))]},"fade down":{enter:n=>[ni({opacity:0,transform:`translateY(-0.75rem)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(-0.75rem)`}))]},"fade left":{enter:n=>[ni({opacity:0,transform:`translateX(0.75rem)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(0.75rem)`}))]},"fade right":{enter:n=>[ni({opacity:0,transform:`translateX(-0.75rem)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(-0.75rem)`}))]},"horizontal flip":{enter:n=>[ni({opacity:0,transform:`perspective(600px) rotateY(-90deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`perspective(600px) rotateY(0deg)`}))],leave:n=>[ni({opacity:1,transform:`perspective(600px) rotateY(0deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`perspective(600px) rotateY(90deg)`}))]},"vertical flip":{enter:n=>[ni({opacity:0,transform:`perspective(600px) rotateX(-90deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`perspective(600px) rotateX(0deg)`}))],leave:n=>[ni({opacity:1,transform:`perspective(600px) rotateX(0deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`perspective(600px) rotateX(90deg)`}))]},drop:{enter:n=>[ni({opacity:0,transform:`translateY(-120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(-120%)`}))]},"fly left":{enter:n=>[ni({opacity:0,transform:`translateX(120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(-120%)`}))]},"fly right":{enter:n=>[ni({opacity:0,transform:`translateX(-120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(120%)`}))]},"fly up":{enter:n=>[ni({opacity:0,transform:`translateY(120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(-120%)`}))]},"fly down":{enter:n=>[ni({opacity:0,transform:`translateY(-120%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(120%)`}))]},"swing left":{enter:n=>[ni({opacity:0,transform:`rotate(-12deg)`,transformOrigin:`top center`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`rotate(12deg)`,transformOrigin:`top center`}))]},"swing right":{enter:n=>[ni({opacity:0,transform:`rotate(12deg)`,transformOrigin:`top center`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`rotate(-12deg)`,transformOrigin:`top center`}))]},"swing up":{enter:n=>[ni({opacity:0,transform:`rotate(-10deg)`,transformOrigin:`bottom center`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`rotate(10deg)`,transformOrigin:`bottom center`}))]},"swing down":{enter:n=>[ni({opacity:0,transform:`rotate(10deg)`,transformOrigin:`top center`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`rotate(-10deg)`,transformOrigin:`top center`}))]},browse:{enter:n=>[ni({opacity:0,transform:`translateX(-1rem) skewX(-6deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(1rem) skewX(6deg)`}))]},"browse right":{enter:n=>[ni({opacity:0,transform:`translateX(1rem) skewX(6deg)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(-1rem) skewX(-6deg)`}))]},"slide down":{enter:n=>[ni({opacity:0,transform:`translateY(-100%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(-100%)`}))]},"slide up":{enter:n=>[ni({opacity:0,transform:`translateY(100%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateY(100%)`}))]},"slide left":{enter:n=>[ni({opacity:0,transform:`translateX(100%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(-100%)`}))]},"slide right":{enter:n=>[ni({opacity:0,transform:`translateX(-100%)`,offset:0}),ti(`${n} ${M}`,ni({opacity:1,transform:`none`}))],leave:n=>[ni({opacity:1,transform:`none`,offset:0}),ti(`${n} ${M}`,ni({opacity:0,transform:`translateX(100%)`}))]}};var em=tm.fade;function im(n){return ri(n)?em:tm[n]??em}function Ag(n,u){return im(n).enter(u)}function Vg(n,u){return im(n).leave(u)}function Bg(n,u){if(!ri(n))return null;switch(n){case`pulse`:return[ni({transform:`scale(1)`,offset:0}),ti(`${u} ${M}`,ri$1([ni({transform:`scale(1)`,offset:0}),ni({transform:`scale(1.06)`,offset:.5}),ni({transform:`scale(1)`,offset:1})]))];case`shake`:return[ti(`${u} ${M}`,ri$1([ni({transform:`translateX(0)`,offset:0}),ni({transform:`translateX(-0.5rem)`,offset:.2}),ni({transform:`translateX(0.5rem)`,offset:.4}),ni({transform:`translateX(-0.35rem)`,offset:.6}),ni({transform:`translateX(0.35rem)`,offset:.8}),ni({transform:`translateX(0)`,offset:1})]))];case`jiggle`:return[ti(`${u} ${M}`,ri$1([ni({transform:`rotate(0deg)`,offset:0}),ni({transform:`rotate(-2.5deg)`,offset:.25}),ni({transform:`rotate(2.5deg)`,offset:.5}),ni({transform:`rotate(-1.5deg)`,offset:.75}),ni({transform:`rotate(0deg)`,offset:1})]))];case`flash`:return[ti(`${u} linear`,ri$1([ni({opacity:1,offset:0}),ni({opacity:.2,offset:.5}),ni({opacity:1,offset:1})]))];case`tada`:return[ti(`${u} ${M}`,ri$1([ni({transform:`scale(1) rotate(0deg)`,offset:0}),ni({transform:`scale(0.92) rotate(-2deg)`,offset:.1}),ni({transform:`scale(1.08) rotate(2deg)`,offset:.3}),ni({transform:`scale(1.02) rotate(-1deg)`,offset:.5}),ni({transform:`scale(1) rotate(0deg)`,offset:1})]))];case`bounce`:return[ti(`${u} ${M}`,ri$1([ni({transform:`translateY(0)`,offset:0}),ni({transform:`translateY(-0.6rem)`,offset:.35}),ni({transform:`translateY(0)`,offset:.55}),ni({transform:`translateY(-0.25rem)`,offset:.7}),ni({transform:`translateY(0)`,offset:.85}),ni({transform:`translateY(0)`,offset:1})]))];case`glow`:return[ti(`${u} ${M}`,ri$1([ni({boxShadow:`0 0 0 0 rgba(100, 180, 255, 0)`,offset:0}),ni({boxShadow:`0 0 1.25rem 0.25rem rgba(100, 180, 255, 0.45)`,offset:.5}),ni({boxShadow:`0 0 0 0 rgba(100, 180, 255, 0)`,offset:1})]))];default:return null}}var be=(()=>{class n extends On$1{constructor(){super(...arguments),this.builder=g(bi),this.el=g(Ie),this.renderer=g(yn),this.zone=g(G),this.cdr=g(Pg$1),this.suiAnimation=`fade`,this.suiDuration=500,this.suiDirection=`auto`,this.suiVisible=!0,this.suiPlay=0,this.suiDisabled=!1,this.suiVisibleChange=new nt$1,this.suiAnimationStart=new nt$1,this.suiAnimationComplete=new nt$1,this.suiOnShow=new nt$1,this.suiOnHide=new nt$1,this.animating=!1,this.hidden=!1,this.hostClassList=``,this.player=null,this.initialized=!1,this.lastVisible=!0,this.lastPlay=0}get classes(){return this.hostClassList}ngOnChanges(o){if(o.suiPlay&&(o.suiPlay.firstChange?this.lastPlay=this.suiPlay:this.suiPlay!==this.lastPlay&&(this.lastPlay=this.suiPlay,this.runStaticAnimation())),o.suiVisible){let a=this.suiVisible;if(!this.initialized){this.initialized=!0,this.lastVisible=a,this.applyImmediateVisibility(a),this.syncHostClasses();return}a!==this.lastVisible&&(this.lastVisible=a,this.runVisibilityTransition(a))}(o.suiAnimation||o.suiDuration||o.suiDirection||o.suiDisabled)&&this.syncHostClasses()}ngOnDestroy(){this.destroyPlayer()}show(){this.setVisible(!0)}hide(){this.setVisible(!1)}toggle(){this.setVisible(!this.suiVisible)}stop(){this.destroyPlayer(),this.animating=!1,this.syncHostClasses(),this.cdr.markForCheck()}playStatic(){this.runStaticAnimation()}setVisible(o){if(this.suiVisible!==o){if(this.suiVisible=o,this.suiVisibleChange.emit(o),!this.initialized){this.initialized=!0,this.lastVisible=o,this.applyImmediateVisibility(o),this.syncHostClasses(),this.cdr.markForCheck();return}this.lastVisible=o,this.runVisibilityTransition(o),this.cdr.markForCheck()}}runVisibilityTransition(o){if(this.suiDisabled){this.suiAnimationStart.emit(),this.applyImmediateVisibility(o),this.emitVisibilityCallbacks(o),this.cdr.markForCheck();return}let{baseName:a,explicitDirection:s}=yi(this.suiAnimation),p=kg(s,this.suiDirection,o),m=ri(a)?`fade`:a,v=Qd(this.suiDuration),O=p===`in`?Ag(m,v):Vg(m,v);this.playSteps(O,o)}runStaticAnimation(){let{baseName:o}=yi(this.suiAnimation);if(!ri(o)||this.suiDisabled)return;let a=Bg(o,Qd(this.suiDuration));a&&this.playSteps(a,!0,!0)}playSteps(o,a,s=!1){this.destroyPlayer(),this.animating=!0,a&&(this.hidden=!1),this.suiAnimationStart.emit(),this.syncHostClasses(),this.cdr.markForCheck();let m=this.builder.build(o).create(this.el.nativeElement);this.player=m,m.onDone(()=>{this.zone.run(()=>{this.player=null,this.animating=!1,a?(this.applyVisibleEndState(),this.hidden=!1):(this.applyHiddenEndState(),this.hidden=!0),this.suiAnimationComplete.emit(),s||(a?this.suiOnShow.emit():this.suiOnHide.emit()),this.syncHostClasses(),this.cdr.markForCheck()})}),m.play()}emitVisibilityCallbacks(o){this.suiAnimationComplete.emit(),o?this.suiOnShow.emit():this.suiOnHide.emit()}applyImmediateVisibility(o){this.destroyPlayer(),this.animating=!1,o?(this.applyVisibleEndState(),this.hidden=!1):(this.applyHiddenEndState(),this.hidden=!0),this.syncHostClasses()}applyVisibleEndState(){let o=this.el.nativeElement;this.renderer.setStyle(o,`opacity`,`1`),this.renderer.setStyle(o,`visibility`,`visible`),this.renderer.removeStyle(o,`transform`),this.renderer.removeStyle(o,`transform-origin`),this.renderer.removeStyle(o,`box-shadow`)}applyHiddenEndState(){let o=this.el.nativeElement;this.renderer.setStyle(o,`opacity`,`0`),this.renderer.setStyle(o,`visibility`,`hidden`),this.renderer.removeStyle(o,`transform`),this.renderer.removeStyle(o,`transform-origin`)}destroyPlayer(){this.player&&(this.player.destroy(),this.player=null)}syncHostClasses(){let{baseName:o}=yi(this.suiAnimation),a=J.combineToClass([`transition`,...o.split(` `),J.getPropClass(this.animating,`animating`),J.getPropClass(this.suiDisabled,`disabled`),J.getPropClass(!this.hidden,`visible`),J.getPropClass(this.hidden,`hidden`)]);this.hostClassList=J.removeExcessWhitespace(a),this.syncClasses()}static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=(function(){return RI({type:n,selectors:[[`sui-transition`]],inputs:{suiAnimation:`suiAnimation`,suiDuration:`suiDuration`,suiDirection:`suiDirection`,suiVisible:`suiVisible`,suiPlay:`suiPlay`,suiDisabled:`suiDisabled`},outputs:{suiVisibleChange:`suiVisibleChange`,suiAnimationStart:`suiAnimationStart`,suiAnimationComplete:`suiAnimationComplete`,suiOnShow:`suiOnShow`,suiOnHide:`suiOnHide`},exportAs:[`suiTransition`],features:[lo$1,Jc$1],ngContentSelectors:[`*`],decls:1,vars:0,template:function(s,p){s&1&&(mC(),yC(0))},encapsulation:2})})()}}return dS([ve()],n.prototype,`suiVisible`,void 0),dS([ve()],n.prototype,`suiDisabled`,void 0),n})();var nm=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({})}}return n})();function Lg(n,u){if(n&1&&(ss$1(0,`div`),WC(1),Bu()),n&2){let o=u.$implicit;KD(),hg(o)}}function Hg(n,u){n&1&&(ss$1(0,`em`),WC(1,`No events yet`),Bu())}var he=class{constructor(){this.animation=`fade`,this.visible=!0,this.duration=500,this.disabled=!1,this.playCount=0,this.events=[]}run(u){this.animation=u,this.visible=!this.visible}play(u){this.animation=u,this.playCount++}log(u){this.events=[u,...this.events].slice(0,6)}};var om=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-scale-example`]],standalone:!1,features:[lo$1],decls:6,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`scale`)}),WC(2,`Scale`),Bu()(),ss$1(3,`div`,2)(4,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(5,`img`,4),Bu()()),a&2&&(KD(4),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var am=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-zoom-example`]],standalone:!1,features:[lo$1],decls:6,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`zoom`)}),WC(2,`Zoom`),Bu()(),ss$1(3,`div`,2)(4,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(5,`img`,4),Bu()()),a&2&&(KD(4),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var sm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-fade-example`]],standalone:!1,features:[lo$1],decls:14,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`fade`)}),WC(2,`Fade`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.run(`fade up`)}),WC(4,`Fade Up`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.run(`fade down`)}),WC(6,`Fade Down`),Bu(),ss$1(7,`button`,1),Qh$1(`click`,function(){return s.run(`fade left`)}),WC(8,`Fade Left`),Bu(),ss$1(9,`button`,1),Qh$1(`click`,function(){return s.run(`fade right`)}),WC(10,`Fade Right`),Bu()(),ss$1(11,`div`,2)(12,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(13,`img`,4),Bu()()),a&2&&(KD(12),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var rm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-flip-example`]],standalone:!1,features:[lo$1],decls:8,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`horizontal flip`)}),WC(2,`Horizontal Flip`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.run(`vertical flip`)}),WC(4,`Vertical Flip`),Bu()(),ss$1(5,`div`,2)(6,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(7,`img`,4),Bu()()),a&2&&(KD(6),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var lm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-drop-example`]],standalone:!1,features:[lo$1],decls:6,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`drop`)}),WC(2,`Drop`),Bu()(),ss$1(3,`div`,2)(4,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(5,`img`,4),Bu()()),a&2&&(KD(4),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var dm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-fly-example`]],standalone:!1,features:[lo$1],decls:12,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`fly left`)}),WC(2,`Fly Left`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.run(`fly right`)}),WC(4,`Fly Right`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.run(`fly up`)}),WC(6,`Fly Up`),Bu(),ss$1(7,`button`,1),Qh$1(`click`,function(){return s.run(`fly down`)}),WC(8,`Fly Down`),Bu()(),ss$1(9,`div`,2)(10,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(11,`img`,4),Bu()()),a&2&&(KD(10),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var mm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-swing-example`]],standalone:!1,features:[lo$1],decls:12,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`swing left`)}),WC(2,`Swing Left`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.run(`swing right`)}),WC(4,`Swing Right`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.run(`swing up`)}),WC(6,`Swing Up`),Bu(),ss$1(7,`button`,1),Qh$1(`click`,function(){return s.run(`swing down`)}),WC(8,`Swing Down`),Bu()(),ss$1(9,`div`,2)(10,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(11,`img`,4),Bu()()),a&2&&(KD(10),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var pm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-browse-example`]],standalone:!1,features:[lo$1],decls:8,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`browse`)}),WC(2,`Browse`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.run(`browse right`)}),WC(4,`Browse Right`),Bu()(),ss$1(5,`div`,2)(6,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(7,`img`,4),Bu()()),a&2&&(KD(6),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var um=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-slide-example`]],standalone:!1,features:[lo$1],decls:12,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`slide down`)}),WC(2,`Slide Down`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.run(`slide up`)}),WC(4,`Slide Up`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.run(`slide left`)}),WC(6,`Slide Left`),Bu(),ss$1(7,`button`,1),Qh$1(`click`,function(){return s.run(`slide right`)}),WC(8,`Slide Right`),Bu()(),ss$1(9,`div`,2)(10,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(11,`img`,4),Bu()()),a&2&&(KD(10),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var cm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-static-example`]],standalone:!1,features:[lo$1],decls:18,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiAnimation`,`suiPlay`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.play(`jiggle`)}),WC(2,`Jiggle`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.play(`flash`)}),WC(4,`Flash`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.play(`shake`)}),WC(6,`Shake`),Bu(),ss$1(7,`button`,1),Qh$1(`click`,function(){return s.play(`pulse`)}),WC(8,`Pulse`),Bu(),ss$1(9,`button`,1),Qh$1(`click`,function(){return s.play(`tada`)}),WC(10,`Tada`),Bu(),ss$1(11,`button`,1),Qh$1(`click`,function(){return s.play(`bounce`)}),WC(12,`Bounce`),Bu(),ss$1(13,`button`,1),Qh$1(`click`,function(){return s.play(`glow`)}),WC(14,`Glow`),Bu()(),ss$1(15,`div`,2)(16,`sui-transition`,3),Gh$1(17,`img`,4),Bu()()),a&2&&(KD(16),Uh$1(`suiAnimation`,s.animation)(`suiPlay`,s.playCount))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var hm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-visibility-example`]],standalone:!1,features:[lo$1],decls:5,vars:2,consts:[[`sui-button`,``,3,`click`],[1,`transition-stage`],[`suiAnimation`,`scale`,3,`suiVisibleChange`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.visible=!s.visible}),WC(1),Bu(),ss$1(2,`div`,1)(3,`sui-transition`,2),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(4,`img`,3),Bu()()),a&2&&(KD(),zu$1(` `,s.visible?`Hide`:`Show`,`
`),KD(2),yg(`suiVisible`,s.visible))},dependencies:[Ii,z,be],encapsulation:2,changeDetection:1})}}return n})();var gm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-direction-example`]],standalone:!1,features:[lo$1],decls:8,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[3,`suiVisibleChange`,`suiAnimation`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.run(`horizontal flip in`)}),WC(2,`Horizontal Flip In`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.run(`vertical flip out`)}),WC(4,`Vertical Flip Out`),Bu()(),ss$1(5,`div`,2)(6,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(7,`img`,4),Bu()()),a&2&&(KD(6),Uh$1(`suiAnimation`,s.animation),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var fm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-duration-example`]],standalone:!1,features:[lo$1],decls:10,vars:2,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[`suiAnimation`,`fade up`,3,`suiVisibleChange`,`suiDuration`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.duration=200,s.visible=!s.visible}),WC(2,`200ms`),Bu(),ss$1(3,`button`,1),Qh$1(`click`,function(){return s.duration=`1s`,s.visible=!s.visible}),WC(4,`1s`),Bu(),ss$1(5,`button`,1),Qh$1(`click`,function(){return s.duration=`3s`,s.visible=!s.visible}),WC(6,`3s`),Bu()(),ss$1(7,`div`,2)(8,`sui-transition`,3),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(9,`img`,4),Bu()()),a&2&&(KD(8),Uh$1(`suiDuration`,s.duration),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var Sm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-methods-example`]],standalone:!1,features:[lo$1],decls:13,vars:1,consts:[[`leaf`,`suiTransition`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[1,`transition-stage`],[`suiAnimation`,`swing down`,`suiDuration`,`2s`,3,`suiVisibleChange`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){if(a&1){let p=fC();ss$1(0,`div`,1)(1,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(11);return jd$1(v.show())}),WC(2,`Show`),Bu(),ss$1(3,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(11);return jd$1(v.hide())}),WC(4,`Hide`),Bu(),ss$1(5,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(11);return jd$1(v.toggle())}),WC(6,`Toggle`),Bu(),ss$1(7,`button`,2),Qh$1(`click`,function(){Pd$1(p);let v=IC(11);return jd$1(v.stop())}),WC(8,`Stop`),Bu()(),ss$1(9,`div`,3)(10,`sui-transition`,4,0),vg(`suiVisibleChange`,function(v){return Pd$1(p),YC(s.visible,v)||(s.visible=v),jd$1(v)}),Gh$1(12,`img`,5),Bu()()}a&2&&(KD(10),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();var vm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-events-example`]],standalone:!1,features:[lo$1],decls:9,vars:2,consts:[[`sui-button`,``,3,`click`],[1,`transition-stage`],[`suiAnimation`,`drop`,3,`suiVisibleChange`,`suiAnimationStart`,`suiAnimationComplete`,`suiOnShow`,`suiOnHide`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`],[`sui-segment`,``]],template:function(a,s){a&1&&(ss$1(0,`button`,0),Qh$1(`click`,function(){return s.visible=!s.visible}),WC(1,` Toggle
`),Bu(),ss$1(2,`div`,1)(3,`sui-transition`,2),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Qh$1(`suiAnimationStart`,function(){return s.log(`Animation started`)})(`suiAnimationComplete`,function(){return s.log(`Animation complete`)})(`suiOnShow`,function(){return s.log(`Shown`)})(`suiOnHide`,function(){return s.log(`Hidden`)}),Gh$1(4,`img`,3),Bu()(),ss$1(5,`div`,4),iC(6,Lg,2,1,`div`,null,rC,!1,Hg,2,0,`em`),Bu()),a&2&&(KD(3),yg(`suiVisible`,s.visible),KD(3),sC(s.events))},dependencies:[Ii,z,ze,be],encapsulation:2,changeDetection:1})}}return n})();var xm=(()=>{class n extends he{static{this.ɵfac=(()=>{let o;return function(s){return(o||(o=no$1(n)))(s||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition-disabled-example`]],standalone:!1,features:[lo$1],decls:8,vars:4,consts:[[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-button`,``,`suiToggle`,``,3,`click`,`suiActive`],[1,`transition-stage`],[`suiAnimation`,`fly left`,3,`suiVisibleChange`,`suiDisabled`,`suiVisible`],[`sui-image`,``,`suiSize`,`small`,`src`,`assets/images/wireframes/image.png`]],template:function(a,s){a&1&&(ss$1(0,`div`,0)(1,`button`,1),Qh$1(`click`,function(){return s.visible=!s.visible}),WC(2,`Toggle`),Bu(),ss$1(3,`button`,2),Qh$1(`click`,function(){return s.disabled=!s.disabled}),WC(4),Bu()(),ss$1(5,`div`,3)(6,`sui-transition`,4),vg(`suiVisibleChange`,function(m){return YC(s.visible,m)||(s.visible=m),m}),Gh$1(7,`img`,5),Bu()()),a&2&&(KD(3),Uh$1(`suiActive`,s.disabled),KD(),zu$1(` `,s.disabled?`Animations disabled`:`Animations enabled`,` `),KD(2),Uh$1(`suiDisabled`,s.disabled),yg(`suiVisible`,s.visible))},dependencies:[Ii,Di,z,be],encapsulation:2,changeDetection:1})}}return n})();function Rg(n,u){n&1&&Gh$1(0,`doc-transition-scale-example`)}function zg(n,u){n&1&&Gh$1(0,`doc-transition-zoom-example`)}function jg(n,u){n&1&&Gh$1(0,`doc-transition-fade-example`)}function Ng(n,u){n&1&&Gh$1(0,`doc-transition-flip-example`)}function Ug(n,u){n&1&&Gh$1(0,`doc-transition-drop-example`)}function $g(n,u){n&1&&Gh$1(0,`doc-transition-fly-example`)}function Yg(n,u){n&1&&Gh$1(0,`doc-transition-swing-example`)}function Gg(n,u){n&1&&Gh$1(0,`doc-transition-browse-example`)}function Xg(n,u){n&1&&Gh$1(0,`doc-transition-slide-example`)}function Jg(n,u){n&1&&Gh$1(0,`doc-transition-static-example`)}function qg(n,u){n&1&&Gh$1(0,`doc-transition-visibility-example`)}function Zg(n,u){n&1&&Gh$1(0,`doc-transition-direction-example`)}function Kg(n,u){n&1&&Gh$1(0,`doc-transition-duration-example`)}function Qg(n,u){n&1&&Gh$1(0,`doc-transition-methods-example`)}function ef(n,u){n&1&&Gh$1(0,`doc-transition-events-example`)}function tf(n,u){n&1&&Gh$1(0,`doc-transition-disabled-example`)}function nf(n,u){if(n&1&&(ss$1(0,`div`)(1,`h2`,2),WC(2,`Transitions`),Bu(),ss$1(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Scale`),Bu(),ss$1(6,`p`),WC(7,`An element can scale into or out of view`),Bu(),Ph(8,Rg,1,0,`ng-template`,5),Bu(),ss$1(9,`doc-code-sample`,3)(10,`h3`,4),WC(11,`Zoom`),Bu(),ss$1(12,`p`),WC(13,`An element can zoom into view from far away`),Bu(),Ph(14,zg,1,0,`ng-template`,5),Bu(),ss$1(15,`doc-code-sample`,3)(16,`h3`,4),WC(17,`Fade`),Bu(),ss$1(18,`p`),WC(19,`An element can fade into or out of view descending and ascending`),Bu(),Ph(20,jg,1,0,`ng-template`,5),Bu(),ss$1(21,`doc-code-sample`,3)(22,`h3`,4),WC(23,`Flip`),Bu(),ss$1(24,`p`),WC(25,`An element can flip into or out of view vertically or horizontally`),Bu(),Ph(26,Ng,1,0,`ng-template`,5),Bu(),ss$1(27,`doc-code-sample`,3)(28,`h3`,4),WC(29,`Drop`),Bu(),ss$1(30,`p`),WC(31,`An element can drop into view from above`),Bu(),Ph(32,Ug,1,0,`ng-template`,5),Bu(),ss$1(33,`doc-code-sample`,3)(34,`h3`,4),WC(35,`Fly`),Bu(),ss$1(36,`p`),WC(37,`An element can fly in from off canvas`),Bu(),Ph(38,$g,1,0,`ng-template`,5),Bu(),ss$1(39,`doc-code-sample`,3)(40,`h3`,4),WC(41,`Swing`),Bu(),ss$1(42,`p`),WC(43,`An element can swing into view`),Bu(),Ph(44,Yg,1,0,`ng-template`,5),Bu(),ss$1(45,`doc-code-sample`,3)(46,`h3`,4),WC(47,`Browse`),Bu(),ss$1(48,`p`),WC(49,`An element can appear and disappear as part of a series`),Bu(),Ph(50,Gg,1,0,`ng-template`,5),Bu(),ss$1(51,`doc-code-sample`,3)(52,`h3`,4),WC(53,`Slide`),Bu(),ss$1(54,`p`),WC(55,`An element can appear to slide in from above or below`),Bu(),Ph(56,Xg,1,0,`ng-template`,5),Bu(),Gh$1(57,`br`),ss$1(58,`h2`,2),WC(59,`Static Animations`),Bu(),ss$1(60,`doc-code-sample`,6)(61,`h3`,4),WC(62,`Static Animations`),Bu(),ss$1(63,`p`),WC(64,`Jiggle, flash, shake, pulse, tada, bounce and glow draw attention to an element without changing its visibility`),Bu(),ss$1(65,`div`,7),WC(66,` Static animations run each time the value bound to `),ss$1(67,`code`),WC(68,`suiPlay`),Bu(),WC(69,` changes, so increment a counter to replay one. `),Bu(),Ph(70,Jg,1,0,`ng-template`,5),Bu(),Gh$1(71,`br`),ss$1(72,`h2`,2),WC(73,`Usage`),Bu(),ss$1(74,`doc-code-sample`,3)(75,`h3`,4),WC(76,`Visibility`),Bu(),ss$1(77,`p`),WC(78,`After an animation finishes, the element keeps its final state. An outward transition leaves it hidden, an inward transition leaves it visible`),Bu(),ss$1(79,`div`,7)(80,`code`),WC(81,`suiVisible`),Bu(),WC(82,` supports two-way binding with `),ss$1(83,`code`),WC(84,`[(suiVisible)]`),Bu(),WC(85,`. `),Bu(),Ph(86,qg,1,0,`ng-template`,5),Bu(),ss$1(87,`doc-code-sample`,3)(88,`h3`,4),WC(89,`Specifying a Direction`),Bu(),ss$1(90,`p`),WC(91,`To force an animation direction, add either `),ss$1(92,`code`),WC(93,`in`),Bu(),WC(94,` or `),ss$1(95,`code`),WC(96,`out`),Bu(),WC(97,` to the animation name`),Bu(),ss$1(98,`div`,7),WC(99,` Without a suffix the direction is chosen automatically: showing an element plays the inward animation and hiding it plays the outward one. You can also force it with `),ss$1(100,`code`),WC(101,`suiDirection`),Bu(),WC(102,`. `),Bu(),Ph(103,Zg,1,0,`ng-template`,5),Bu(),ss$1(104,`doc-code-sample`,3)(105,`h3`,4),WC(106,`Duration`),Bu(),ss$1(107,`p`),WC(108,`The duration can be a number of milliseconds or a CSS time string such as `),ss$1(109,`code`),WC(110,`500ms`),Bu(),WC(111,` or `),ss$1(112,`code`),WC(113,`2s`),Bu()(),Ph(114,Kg,1,0,`ng-template`,5),Bu(),ss$1(115,`doc-code-sample`,3)(116,`h3`,4),WC(117,`Controlling Programmatically`),Bu(),ss$1(118,`p`),WC(119,`Export the component with `),ss$1(120,`code`),WC(121,`#ref="suiTransition"`),Bu(),WC(122,` to show, hide, toggle or stop it from the template or a component`),Bu(),Ph(123,Qg,1,0,`ng-template`,5),Bu(),ss$1(124,`doc-code-sample`,6)(125,`h3`,4),WC(126,`Callbacks`),Bu(),ss$1(127,`p`),WC(128,`A transition reports when an animation starts and completes, and when the element is shown or hidden`),Bu(),Ph(129,ef,1,0,`ng-template`,5),Bu(),ss$1(130,`doc-code-sample`,3)(131,`h3`,4),WC(132,`Disabled`),Bu(),ss$1(133,`p`),WC(134,`A disabled transition changes visibility straight away without animating`),Bu(),Ph(135,tf,1,0,`ng-template`,5),Bu()()),n&2){let o=hC();KD(3),Uh$1(`templateCode`,o.snippetScale),KD(6),Uh$1(`templateCode`,o.snippetZoom),KD(6),Uh$1(`templateCode`,o.snippetFade),KD(6),Uh$1(`templateCode`,o.snippetFlip),KD(6),Uh$1(`templateCode`,o.snippetDrop),KD(6),Uh$1(`templateCode`,o.snippetFly),KD(6),Uh$1(`templateCode`,o.snippetSwing),KD(6),Uh$1(`templateCode`,o.snippetBrowse),KD(6),Uh$1(`templateCode`,o.snippetSlide),KD(9),Uh$1(`templateCode`,o.snippetStatic)(`componentCode`,o.snippetStaticTs),KD(14),Uh$1(`templateCode`,o.snippetVisibility),KD(13),Uh$1(`templateCode`,o.snippetDirection),KD(17),Uh$1(`templateCode`,o.snippetDuration),KD(11),Uh$1(`templateCode`,o.snippetMethods),KD(9),Uh$1(`templateCode`,o.snippetEvents)(`componentCode`,o.snippetEventsTs),KD(6),Uh$1(`templateCode`,o.snippetDisabled)}}function of(n,u){n&1&&(ss$1(0,`div`)(1,`div`,7)(2,`code`),WC(3,`sui-transition`),Bu(),WC(4,` animates with `),ss$1(5,`code`),WC(6,`@angular/animations`),Bu(),WC(7,`, so your application must enable animations, for example by importing `),ss$1(8,`code`),WC(9,`BrowserAnimationsModule`),Bu(),WC(10,` or adding `),ss$1(11,`code`),WC(12,`provideAnimations()`),Bu(),WC(13,`. `),Bu(),ss$1(14,`h2`,2),WC(15,`sui-transition`),Bu(),ss$1(16,`h4`,4),WC(17,`Properties`),Bu(),ss$1(18,`table`,8)(19,`thead`)(20,`tr`)(21,`th`),WC(22,`Property`),Bu(),ss$1(23,`th`),WC(24,`Description`),Bu(),ss$1(25,`th`),WC(26,`Type`),Bu(),ss$1(27,`th`),WC(28,`Default`),Bu()()(),ss$1(29,`tbody`)(30,`tr`)(31,`td`),WC(32,` suiAnimation `),Bu(),ss$1(33,`td`),WC(34,` The named animation, e.g. `),ss$1(35,`code`),WC(36,`fade up`),Bu(),WC(37,`, `),ss$1(38,`code`),WC(39,`horizontal flip`),Bu(),WC(40,` or `),ss$1(41,`code`),WC(42,`pulse`),Bu(),WC(43,`. Add `),ss$1(44,`code`),WC(45,`in`),Bu(),WC(46,` or `),ss$1(47,`code`),WC(48,`out`),Bu(),WC(49,` to force a direction `),Bu(),ss$1(50,`td`)(51,`div`,9),WC(52,` string `),Bu()(),ss$1(53,`td`)(54,`div`,10),WC(55,` 'fade' `),Bu()()(),ss$1(56,`tr`)(57,`td`),WC(58,` suiDuration `),Bu(),ss$1(59,`td`),WC(60,` Animation duration in milliseconds, or a CSS time string `),Bu(),ss$1(61,`td`)(62,`div`,9),WC(63,` number | string `),Bu()(),ss$1(64,`td`)(65,`div`,10),WC(66,` 500 `),Bu()()(),ss$1(67,`tr`)(68,`td`),WC(69,` suiDirection `),Bu(),ss$1(70,`td`),WC(71,` Whether showing and hiding pick the inward or outward animation automatically, or always use one `),Bu(),ss$1(72,`td`)(73,`div`,9),WC(74,` 'auto' | 'in' | 'out' `),Bu()(),ss$1(75,`td`)(76,`div`,10),WC(77,` 'auto' `),Bu()()(),ss$1(78,`tr`)(79,`td`),WC(80,` suiVisible `),Bu(),ss$1(81,`td`),WC(82,` Whether the element is visible. Changing it runs the transition. Supports two-way binding `),Bu(),ss$1(83,`td`)(84,`div`,9),WC(85,` boolean `),Bu()(),ss$1(86,`td`)(87,`div`,10),WC(88,` true `),Bu()()(),ss$1(89,`tr`)(90,`td`),WC(91,` suiPlay `),Bu(),ss$1(92,`td`),WC(93,` Change this value (for example, increment a counter) to replay the current static animation `),Bu(),ss$1(94,`td`)(95,`div`,9),WC(96,` number `),Bu()(),ss$1(97,`td`)(98,`div`,10),WC(99,` 0 `),Bu()()(),ss$1(100,`tr`)(101,`td`),WC(102,` suiDisabled `),Bu(),ss$1(103,`td`),WC(104,` Turn animations off so visibility changes apply straight away `),Bu(),ss$1(105,`td`)(106,`div`,9),WC(107,` boolean `),Bu()(),ss$1(108,`td`)(109,`div`,10),WC(110,` false `),Bu()()()()(),ss$1(111,`h4`,4),WC(112,`Events`),Bu(),ss$1(113,`table`,8)(114,`thead`)(115,`tr`)(116,`th`),WC(117,`Event`),Bu(),ss$1(118,`th`),WC(119,`Description`),Bu(),ss$1(120,`th`),WC(121,`Type`),Bu()()(),ss$1(122,`tbody`)(123,`tr`)(124,`td`),WC(125,` suiVisibleChange `),Bu(),ss$1(126,`td`),WC(127,` Emitted when visibility is changed through a method call such as `),ss$1(128,`code`),WC(129,`show()`),Bu(),WC(130,`, `),ss$1(131,`code`),WC(132,`hide()`),Bu(),WC(133,` or `),ss$1(134,`code`),WC(135,`toggle()`),Bu()(),ss$1(136,`td`)(137,`div`,9),WC(138,` EventEmitter&lt;boolean&gt; `),Bu()()(),ss$1(139,`tr`)(140,`td`),WC(141,` suiAnimationStart `),Bu(),ss$1(142,`td`),WC(143,` Emitted when a transition or static animation begins `),Bu(),ss$1(144,`td`)(145,`div`,9),WC(146,` EventEmitter&lt;void&gt; `),Bu()()(),ss$1(147,`tr`)(148,`td`),WC(149,` suiAnimationComplete `),Bu(),ss$1(150,`td`),WC(151,` Emitted when a transition or static animation finishes `),Bu(),ss$1(152,`td`)(153,`div`,9),WC(154,` EventEmitter&lt;void&gt; `),Bu()()(),ss$1(155,`tr`)(156,`td`),WC(157,` suiOnShow `),Bu(),ss$1(158,`td`),WC(159,` Emitted after an inward transition leaves the element visible `),Bu(),ss$1(160,`td`)(161,`div`,9),WC(162,` EventEmitter&lt;void&gt; `),Bu()()(),ss$1(163,`tr`)(164,`td`),WC(165,` suiOnHide `),Bu(),ss$1(166,`td`),WC(167,` Emitted after an outward transition leaves the element hidden `),Bu(),ss$1(168,`td`)(169,`div`,9),WC(170,` EventEmitter&lt;void&gt; `),Bu()()()()(),ss$1(171,`h4`,4),WC(172,`Methods`),Bu(),ss$1(173,`table`,8)(174,`thead`)(175,`tr`)(176,`th`),WC(177,`Method`),Bu(),ss$1(178,`th`),WC(179,`Description`),Bu()()(),ss$1(180,`tbody`)(181,`tr`)(182,`td`),WC(183,` show() `),Bu(),ss$1(184,`td`),WC(185,` Shows the element with the current animation `),Bu()(),ss$1(186,`tr`)(187,`td`),WC(188,` hide() `),Bu(),ss$1(189,`td`),WC(190,` Hides the element with the current animation `),Bu()(),ss$1(191,`tr`)(192,`td`),WC(193,` toggle() `),Bu(),ss$1(194,`td`),WC(195,` Toggles between hidden and visible `),Bu()(),ss$1(196,`tr`)(197,`td`),WC(198,` setVisible(visible) `),Bu(),ss$1(199,`td`),WC(200,` Shows or hides the element `),Bu()(),ss$1(201,`tr`)(202,`td`),WC(203,` playStatic() `),Bu(),ss$1(204,`td`),WC(205,` Runs the current animation if it is a static one; does nothing otherwise `),Bu()(),ss$1(206,`tr`)(207,`td`),WC(208,` stop() `),Bu(),ss$1(209,`td`),WC(210,` Stops the animation that is running `),Bu()()()(),ss$1(211,`h4`,4),WC(212,`Animations`),Bu(),ss$1(213,`table`,8)(214,`thead`)(215,`tr`)(216,`th`),WC(217,`Type`),Bu(),ss$1(218,`th`),WC(219,`Names`),Bu()()(),ss$1(220,`tbody`)(221,`tr`)(222,`td`),WC(223,` Inward / outward `),Bu(),ss$1(224,`td`)(225,`code`),WC(226,`scale`),Bu(),WC(227,`, `),ss$1(228,`code`),WC(229,`zoom`),Bu(),WC(230,`, `),ss$1(231,`code`),WC(232,`fade`),Bu(),WC(233,`, `),ss$1(234,`code`),WC(235,`fade up`),Bu(),WC(236,`, `),ss$1(237,`code`),WC(238,`fade down`),Bu(),WC(239,`, `),ss$1(240,`code`),WC(241,`fade left`),Bu(),WC(242,`, `),ss$1(243,`code`),WC(244,`fade right`),Bu(),WC(245,`, `),ss$1(246,`code`),WC(247,`horizontal flip`),Bu(),WC(248,`, `),ss$1(249,`code`),WC(250,`vertical flip`),Bu(),WC(251,`, `),ss$1(252,`code`),WC(253,`drop`),Bu(),WC(254,`, `),ss$1(255,`code`),WC(256,`fly left`),Bu(),WC(257,`, `),ss$1(258,`code`),WC(259,`fly right`),Bu(),WC(260,`, `),ss$1(261,`code`),WC(262,`fly up`),Bu(),WC(263,`, `),ss$1(264,`code`),WC(265,`fly down`),Bu(),WC(266,`, `),ss$1(267,`code`),WC(268,`swing left`),Bu(),WC(269,`, `),ss$1(270,`code`),WC(271,`swing right`),Bu(),WC(272,`, `),ss$1(273,`code`),WC(274,`swing up`),Bu(),WC(275,`, `),ss$1(276,`code`),WC(277,`swing down`),Bu(),WC(278,`, `),ss$1(279,`code`),WC(280,`browse`),Bu(),WC(281,`, `),ss$1(282,`code`),WC(283,`browse right`),Bu(),WC(284,`, `),ss$1(285,`code`),WC(286,`slide down`),Bu(),WC(287,`, `),ss$1(288,`code`),WC(289,`slide up`),Bu(),WC(290,`, `),ss$1(291,`code`),WC(292,`slide left`),Bu(),WC(293,`, `),ss$1(294,`code`),WC(295,`slide right`),Bu()()(),ss$1(296,`tr`)(297,`td`),WC(298,` Static `),Bu(),ss$1(299,`td`)(300,`code`),WC(301,`jiggle`),Bu(),WC(302,`, `),ss$1(303,`code`),WC(304,`flash`),Bu(),WC(305,`, `),ss$1(306,`code`),WC(307,`shake`),Bu(),WC(308,`, `),ss$1(309,`code`),WC(310,`pulse`),Bu(),WC(311,`, `),ss$1(312,`code`),WC(313,`tada`),Bu(),WC(314,`, `),ss$1(315,`code`),WC(316,`bounce`),Bu(),WC(317,`, `),ss$1(318,`code`),WC(319,`glow`),Bu()()()()()())}var bm=(()=>{class n{constructor(o){this.snippetScale=Vd,this.snippetZoom=Bd,this.snippetFade=Od,this.snippetFlip=Ld,this.snippetDrop=Hd,this.snippetFly=Wd,this.snippetSwing=Rd,this.snippetBrowse=zd,this.snippetSlide=jd,this.snippetStatic=Nd,this.snippetStaticTs=Ud,this.snippetVisibility=$d,this.snippetDirection=Yd,this.snippetDuration=Gd,this.snippetMethods=Xd,this.snippetEvents=Jd,this.snippetEventsTs=qd,this.snippetDisabled=Zd,o.setTitle(`Transition | Ngx Semantic`)}static{this.ɵfac=function(a){return new(a||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-transition`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Transition`,`subHeader`,`A transition is an animation usually used to move content in or out of view`,`semanticUrl`,`https://semantic-ui.com/modules/transition.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`,`componentCode`],[`sui-message`,``,`suiState`,`info`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(a,s){a&1&&(ss$1(0,`doc-page`,0),Ph(1,nf,136,18,`div`,1)(2,of,320,0,`div`,1),Bu()),a&2&&(KD(),Uh$1(`docPageContent`,`definition`),KD(),Uh$1(`docPageContent`,`api`))},dependencies:[wr$1,vr$1,Ri,Oi,fi,U$1,Ws$1,li$1,om,am,sm,rm,lm,dm,mm,pm,um,cm,hm,gm,fm,Sm,vm,xm],styles:[`[_nghost-%COMP%]     .transition-stage{min-height:170px;padding-top:1rem}`],changeDetection:1})}}return n})();var af=[{path:`accordion`,component:ua},{path:`checkbox`,component:Ra},{path:`dimmer`,component:so},{path:`dropdown`,component:jl},{path:`embed`,component:Ln},{path:`modal`,component:Jr},{path:`popup`,component:js},{path:`progress`,component:ys},{path:`rating`,component:vo},{path:`search`,component:Wo},{path:`select`,component:Dr},{path:`shape`,component:ed},{path:`sidebar`,component:yd},{path:`sticky`,component:Ad},{path:`tab`,component:ia},{path:`transition`,component:bm}];var ym=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[Is$1.forChild(af),Is$1]})}}return n})();var U3=(()=>{class n{static{this.ɵfac=function(a){return new(a||n)}}static{this.ɵmod=Cn({type:n})}static{this.ɵinj=bt({imports:[sl$1,Pe$1,ym,Kr$1,gi,K,R$1,Fn,Ri$1,Ks$1,uo,Go,bi$2,vi$2,We$1,Bt,yi$1,Ci,B$1,Rr,pi,wi,pi$1,bi$1,ci,ns,U,ra,ti$1,Xl,$,At,Td,Qe,nm]})}}return n})();export{U3 as ModulesModule};