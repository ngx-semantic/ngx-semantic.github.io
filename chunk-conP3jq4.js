import{n as U,t as P}from"./chunk-CUMJU09s.js";import{c as pi$1,i as Oe,l as qe,n as Ee,o as We,r as He,s as me,u as ze}from"./chunk-DyRSh2x5.js";import{_ as wi$1,a as Pe,b as xi$1,d as di$1,f as fi$1,h as pi$2,i as Oi$1,m as hi$1,r as Ni$1,y as xe}from"./chunk-EQIuFzLr.js";import{a as K,c as bi$1,d as pi$3,f as q,i as J,l as ci$1,n as G,o as U$1,p as ri$1,r as Ii$1,s as ai$1,u as li$1}from"./chunk-fkCr07Hl.js";import{A as ze$1,D as wr,E as we,G as Ks$1,J as Qt$1,K as On$1,O as yi$1,T as vr,U as Is$1,X as ve,Y as Ws$1,_ as fi$2,a as Ft$1,b as ln$1,f as Tt$1,g as cn$1,h as bi$2,i as Dr,j as zs$1,l as Oi$2,o as Kr$1,p as Vt$1,t as At$1,u as Ri$1,v as gi$1,w as vi$1,x as mi$1}from"./main-5L4GMCOS.js";import{Bn as sl$1,D as KD,Kn as to,Ln as sV,Lt as bt$1,M as Kh,On as pC,R as OI,S as Ie,Xn as uo$1,Yn as uS,Yt as g$1,Zt as gg,_ as Gh,_r as zh,an as jh,c as Cn$1,gr as zC,ht as XC,lt as Vu,nn as iC,rn as is,s as Ce,st as Ve,wn as oC}from"./chunk-8go5I85o.js";var tt=`<form sui-form>
  <div suiFormField>
    <label>First Name</label>
    <input type="text" name="first-name" placeholder="First Name">
  </div>
  <div suiFormField>
    <label>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name">
  </div>
  <div suiFormField>
    <sui-checkbox>I agree to the terms and conditions</sui-checkbox>
  </div>
  <button sui-button type="submit">Submit</button>
</form>
`;var it=`<form sui-form>
  <h4 sui-header suiDividing>Shipping Information</h4>
  <div suiFormField>
    <label>Name</label>
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <input type="text" name="shipping[first-name]" placeholder="First Name">
      </div>
      <div suiFormField>
        <input type="text" name="shipping[last-name]" placeholder="Last Name">
      </div>
    </div>
  </div>
  <div suiFormField>
    <label>Billing Address</label>
    <div suiFormFields>
      <div suiFormField suiWidth="twelve">
        <input type="text" name="shipping[address]" placeholder="Street Address">
      </div>
      <div suiFormField suiWidth="four">
        <input type="text" name="shipping[address-2]" placeholder="Apt #">
      </div>
    </div>
  </div>
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>State</label>
      <sui-select suiPlaceholder="State" [suiOptions]="states"></sui-select>
    </div>
    <div suiFormField>
      <label>Country</label>
      <sui-select suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
    </div>
  </div>
  <h4 sui-header suiDividing>Billing Information</h4>
  <div suiFormField>
    <label>Card Type</label>
    <sui-select suiPlaceholder="Type" [suiOptions]="cards"></sui-select>
  </div>
  <div suiFormFields>
    <div suiFormField suiWidth="seven">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #">
    </div>
    <div suiFormField suiWidth="three">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC">
    </div>
    <div suiFormField suiWidth="six">
      <label>Expiration</label>
      <div suiFormFields suiWidth="two">
        <div suiFormField>
          <sui-select suiPlaceholder="Month" [suiOptions]="months"></sui-select>
        </div>
        <div suiFormField>
          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year">
        </div>
      </div>
    </div>
  </div>
  <h4 sui-header suiDividing>Receipt</h4>
  <div suiFormField>
    <label>Send Receipt To:</label>
    <sui-select suiPlaceholder="Saved Contacts" [suiOptions]="contacts"></sui-select>
  </div>
  <div sui-segment>
    <div suiFormField>
      <sui-checkbox suiType="toggle">Do not include a receipt in the package</sui-checkbox>
    </div>
  </div>
  <div sui-button tabindex="0">Submit Order</div>
</form>
`;var nt=`<div sui-form>
  <div suiFormField>
    <label>User Input</label>
    <input type="text">
  </div>
</div>
`;var at=`<div sui-form>
  <div suiFormFields>
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var lt=`<div sui-form>
  <div suiFormFields suiWidth="three">
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var dt=`<div sui-form>
  <div suiFormFields suiInline>
    <div suiFormField suiWidth="eight">
      <label>Name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField suiWidth="three">
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField suiWidth="five">
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var rt=`<div sui-form>
  <div suiFormField>
    <label>Text</label>
    <textarea></textarea>
  </div>
  <div suiFormField>
    <label>Short Text</label>
    <textarea rows="2"></textarea>
  </div>
</div>
`;var mt=`<div sui-form>
  <div suiFormField suiInline>
    <sui-checkbox>Checkbox</sui-checkbox>
  </div>
  <div suiFormField suiInline>
    <sui-checkbox suiType="slider">Slider</sui-checkbox>
    <label></label>
  </div>
  <div suiFormField suiInline>
    <sui-checkbox suiType="toggle">Toggle</sui-checkbox>
  </div>
</div>
`;var ot=`<div sui-form>
  <div suiFormFields>
    <label>Select your favorite fruit:</label>
    <div suiFormField>
      <sui-checkbox suiType="radio">Apples</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Oranges</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Pears</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Grapefruit</sui-checkbox>
    </div>
  </div>
  <div suiFormFields suiGrouped>
    <label>Select your second favorite fruit:</label>
    <div suiFormField>
      <sui-checkbox suiType="radio">Apples</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Oranges</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Pears</sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">Grapefruit</sui-checkbox>
    </div>
  </div>
</div>
`;var st=`<div sui-form>
  <div suiFormField>
    <label>Gender</label>
    <sui-select suiPlaceholder="Gender" [suiOptions]="gender"></sui-select>
  </div>
</div>
`;var ct=`<div sui-form>
  <div suiFormField>
    <label>Country</label>
    <sui-select suiSearch suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
  </div>
</div>
`;var pt=`<div sui-form>
  <div suiFormField>
    <label>Country</label>
    <sui-select suiMultiple suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
  </div>
</div>
`;var ut=`<div sui-form>
  <div suiFormField>
    <select>
      <option value="">Gender</option>
      <option value="1">Male</option>
      <option value="0">Female</option>
    </select>
  </div>
</div>
`;var vt=`<div sui-form>
  <div sui-message>
    <div class="header">We had some issues</div>
    <ul class="list">
      <li>Please enter your first name</li>
      <li>Please enter your last name</li>
    </ul>
  </div>
</div>
`;var xt=`<div sui-form suiLoading>
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-button>Submit</div>
</div>
`;var St=`<div sui-form suiState="success">
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-message suiState="success">
    <div suiMessageHeader>Form Completed</div>
    <p>Youre all signed up for the newsletter.</p>
  </div>
  <div sui-button>Submit</div>
</div>
`;var ht=`<div sui-form suiState="error">
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-message suiState="error">
    <div suiMessageHeader>Action Forbidden</div>
    <p>You can only sign up for an account once with a given e-mail address.</p>
  </div>
  <div sui-button>Submit</div>
</div>
`;var ft=`<div sui-form suiState="warning">
  <div suiFormField>
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com">
  </div>
  <div sui-message suiState="warning">
    <div suiMessageHeader>Action Forbidden</div>
    <ul suiMessageList>
      <li>That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.
      </li>
    </ul>
  </div>
  <div sui-button>Submit</div>
</div>
`;var Et=`<div sui-form>
  <div suiFormFields suiWidth="two">
    <div suiFormField suiError>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div suiFormField suiError>
    <label>Gender</label>
    <sui-select suiPlaceholder="Gender" [suiOptions]="gender"></sui-select>
  </div>
  <div suiFormField suiError suiInline>
    <sui-checkbox>
      I agree to the Terms and Conditions
    </sui-checkbox>
  </div>
</div>
`;var gt=`<div sui-form>
  <div suiFormFields suiWidth="two">
    <div suiFormField disabled>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField disabled>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
</div>
`;var bt=`<div sui-form>
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="Read Only" readonly="" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Read Only" readonly="" type="text">
    </div>
  </div>
</div>
`;var yt=`<div sui-form suiSize="mini">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var Ct=`<div sui-form suiSize="tiny">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var Ft=`<div sui-form suiSize="small">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var Dt=`<div sui-form suiSize="large">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var Mt=`<div sui-form suiSize="big">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var _t=`<div sui-form suiSize="huge">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var wt=`<div sui-form suiSize="massive">
  <div suiFormFields suiWidth="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div sui-button>Submit</div>
</div>
`;var Tt=`<div sui-form suiEqualWidth>
  <div suiFormFields>
    <div suiFormField>
      <label>Username</label>
      <input type="text" placeholder="Username">
    </div>
    <div suiFormField>
      <label>Password</label>
      <input type="password">
    </div>
  </div>
  <div suiFormFields>
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var It=`<div sui-segment suiInverted>
  <div sui-form suiInverted>
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>Username</label>
        <input type="text" placeholder="Username">
      </div>
      <div suiFormField>
        <label>Password</label>
        <input type="password">
      </div>
    </div>
    <div suiFormField suiInline>
      <sui-checkbox>I agree to terms and conditions</sui-checkbox>
    </div>
    <div sui-button>Submit</div>
  </div>
</div>
`;var At=`<div sui-form>
  <div suiFormField suiInline>
    <label>Last name</label>
    <input type="text" placeholder="Full Name">
  </div>
</div>
`;var kt=`<div sui-form>
  <div suiFormFields>
    <div suiFormField suiWidth="six">
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField suiWidth="four">
      <label>Middle</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField suiWidth="six">
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
  <div suiFormFields>
    <div suiFormField suiWidth="two">
      <input type="text" placeholder="2 Wide">
    </div>
    <div suiFormField suiWidth="twelve">
      <input type="text" placeholder="12 Wide">
    </div>
    <div suiFormField suiWidth="two">
      <input type="text" placeholder="2 Wide">
    </div>
  </div>
  <div suiFormFields>
    <div suiFormField suiWidth="eight">
      <input type="text" placeholder="8 Wide">
    </div>
    <div suiFormField suiWidth="six">
      <input type="text" placeholder="6 Wide">
    </div>
    <div suiFormField suiWidth="two">
      <input type="text" placeholder="2 Wide">
    </div>
  </div>
</div>
`;var Bt=`<div sui-form>
  <div suiFormField suiRequired>
    <label>Last name</label>
    <input type="text" placeholder="Full Name">
  </div>
  <div suiFormField suiInline suiRequired>
    <sui-checkbox>I agree to terms and conditions</sui-checkbox>
  </div>
</div>
`;var Gt=`<div sui-form>
  <div suiFormFields suiWidth="three">
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var Nt=`<div sui-form>
  <div suiFormFields suiGrouped>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Apples
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Oranges
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Pears
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Grapefruit
      </sui-checkbox>
    </div>
  </div>
</div>
`;var Wt=`<div sui-form>
  <div suiFormFields>
    <div suiFormField>
      <label>Username</label>
      <input type="text" placeholder="Username">
    </div>
    <div suiFormField>
      <label>Password</label>
      <input type="password">
    </div>
  </div>
  <div suiFormFields suiEqualWidth>
    <div suiFormField>
      <label>First name</label>
      <input type="text" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Middle name</label>
      <input type="text" placeholder="Middle Name">
    </div>
    <div suiFormField>
      <label>Last name</label>
      <input type="text" placeholder="Last Name">
    </div>
  </div>
</div>
`;var Rt=`<div sui-form>
  <div suiFormFields suiInline>
    <label>Phone Number</label>
    <div suiFormField>
      <input type="text" placeholder="(xxx)">
    </div>
    <div suiFormField>
      <input type="text" placeholder="xxx">
    </div>
    <div suiFormField>
      <input type="text" placeholder="xxxx">
    </div>
  </div>
</div>
`;var Pt=`<div sui-form>
  <div suiFormFields suiInline>
    <label>What's your favourite fruit?</label>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Apples
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Oranges
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Pears
      </sui-checkbox>
    </div>
    <div suiFormField>
      <sui-checkbox suiType="radio">
        Grapefruit
      </sui-checkbox>
    </div>
  </div>
</div>
`;var g=class{constructor(){this.states=[{text:`Alabama`,value:`al`}],this.countries=[{text:`Albania`,value:`al`,flag:`al`},{text:`Nigeria`,value:`ng`,flag:`ng`}],this.months=[{text:`January`,value:`jan`}],this.cards=[{text:`Visa`,value:`visa`}],this.contacts=[{text:`Justen Kitsune`,image:{avatar:!0,src:`https://semantic-ui.com/images/avatar/small/stevie.jpg`}}],this.gender=[{text:`Male`},{text:`Female`}]}};var Jt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-basic-example`]],standalone:!1,features:[uo$1],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``],[`type`,`text`,`name`,`first-name`,`placeholder`,`First Name`],[`type`,`text`,`name`,`last-name`,`placeholder`,`Last Name`],[`sui-button`,``,`type`,`submit`]],template:function(l,d){l&1&&(is(0,`form`,0)(1,`div`,1)(2,`label`),zC(3,`First Name`),Vu(),zh(4,`input`,2),Vu(),is(5,`div`,1)(6,`label`),zC(7,`Last Name`),Vu(),zh(8,`input`,3),Vu(),is(9,`div`,1)(10,`sui-checkbox`),zC(11,`I agree to the terms and conditions`),Vu()(),is(12,`button`,4),zC(13,`Submit`),Vu()())},dependencies:[hi$1,di$1,xe,Ni$1,wi$1,P,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var Lt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-basic-alt-example`]],standalone:!1,features:[uo$1],decls:63,vars:5,consts:[[`sui-form`,``],[`sui-header`,``,`suiDividing`,``],[`suiFormField`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`type`,`text`,`name`,`shipping[first-name]`,`placeholder`,`First Name`],[`type`,`text`,`name`,`shipping[last-name]`,`placeholder`,`Last Name`],[`suiFormFields`,``],[`suiFormField`,``,`suiWidth`,`twelve`],[`type`,`text`,`name`,`shipping[address]`,`placeholder`,`Street Address`],[`suiFormField`,``,`suiWidth`,`four`],[`type`,`text`,`name`,`shipping[address-2]`,`placeholder`,`Apt #`],[`suiPlaceholder`,`State`,3,`suiOptions`],[`suiPlaceholder`,`Country`,3,`suiOptions`],[`suiPlaceholder`,`Type`,3,`suiOptions`],[`suiFormField`,``,`suiWidth`,`seven`],[`type`,`text`,`name`,`card[number]`,`maxlength`,`16`,`placeholder`,`Card #`],[`suiFormField`,``,`suiWidth`,`three`],[`type`,`text`,`name`,`card[cvc]`,`maxlength`,`3`,`placeholder`,`CVC`],[`suiFormField`,``,`suiWidth`,`six`],[`suiPlaceholder`,`Month`,3,`suiOptions`],[`type`,`text`,`name`,`card[expire-year]`,`maxlength`,`4`,`placeholder`,`Year`],[`suiPlaceholder`,`Saved Contacts`,3,`suiOptions`],[`sui-segment`,``],[`suiType`,`toggle`],[`sui-button`,``,`tabindex`,`0`]],template:function(l,d){l&1&&(is(0,`form`,0)(1,`h4`,1),zC(2,`Shipping Information`),Vu(),is(3,`div`,2)(4,`label`),zC(5,`Name`),Vu(),is(6,`div`,3)(7,`div`,2),zh(8,`input`,4),Vu(),is(9,`div`,2),zh(10,`input`,5),Vu()()(),is(11,`div`,2)(12,`label`),zC(13,`Billing Address`),Vu(),is(14,`div`,6)(15,`div`,7),zh(16,`input`,8),Vu(),is(17,`div`,9),zh(18,`input`,10),Vu()()(),is(19,`div`,3)(20,`div`,2)(21,`label`),zC(22,`State`),Vu(),zh(23,`sui-select`,11),Vu(),is(24,`div`,2)(25,`label`),zC(26,`Country`),Vu(),zh(27,`sui-select`,12),Vu()(),is(28,`h4`,1),zC(29,`Billing Information`),Vu(),is(30,`div`,2)(31,`label`),zC(32,`Card Type`),Vu(),zh(33,`sui-select`,13),Vu(),is(34,`div`,6)(35,`div`,14)(36,`label`),zC(37,`Card Number`),Vu(),zh(38,`input`,15),Vu(),is(39,`div`,16)(40,`label`),zC(41,`CVC`),Vu(),zh(42,`input`,17),Vu(),is(43,`div`,18)(44,`label`),zC(45,`Expiration`),Vu(),is(46,`div`,3)(47,`div`,2),zh(48,`sui-select`,19),Vu(),is(49,`div`,2),zh(50,`input`,20),Vu()()()(),is(51,`h4`,1),zC(52,`Receipt`),Vu(),is(53,`div`,2)(54,`label`),zC(55,`Send Receipt To:`),Vu(),zh(56,`sui-select`,21),Vu(),is(57,`div`,22)(58,`div`,2)(59,`sui-checkbox`,23),zC(60,`Do not include a receipt in the package`),Vu()()(),is(61,`div`,24),zC(62,`Submit Order`),Vu()()),l&2&&(KD(23),Gh(`suiOptions`,d.states),KD(4),Gh(`suiOptions`,d.countries),KD(6),Gh(`suiOptions`,d.cards),KD(15),Gh(`suiOptions`,d.months),KD(8),Gh(`suiOptions`,d.contacts))},dependencies:[hi$1,di$1,xe,Ni$1,wi$1,Oi$1,Ws$1,P,Ii$1,ze$1,Oe],encapsulation:2,changeDetection:1})}}return n})();var Ht=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-user-input-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``],[`type`,`text`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`User Input`),Vu(),zh(4,`input`,2),Vu()())},dependencies:[Ni$1,wi$1],encapsulation:2,changeDetection:1})}}return n})();var Vt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-fields-example`]],standalone:!1,features:[uo$1],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``],[`suiFormField`,``],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Middle name`),Vu(),zh(9,`input`,4),Vu(),is(10,`div`,2)(11,`label`),zC(12,`Last name`),Vu(),zh(13,`input`,5),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var qt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-fields-width-example`]],standalone:!1,features:[uo$1],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`three`],[`suiFormField`,``],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Middle name`),Vu(),zh(9,`input`,4),Vu(),is(10,`div`,2)(11,`label`),zC(12,`Last name`),Vu(),zh(13,`input`,5),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var Ot=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-fields-inline-example`]],standalone:!1,features:[uo$1],decls:10,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiInline`,``],[`suiFormField`,``,`suiWidth`,`eight`],[`type`,`text`,`placeholder`,`First Name`],[`suiFormField`,``,`suiWidth`,`three`],[`type`,`text`,`placeholder`,`Middle Name`],[`suiFormField`,``,`suiWidth`,`five`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,4),zh(7,`input`,5),Vu(),is(8,`div`,6),zh(9,`input`,7),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var Ut=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-text-area-example`]],standalone:!1,features:[uo$1],decls:9,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``],[`rows`,`2`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Text`),Vu(),zh(4,`textarea`),Vu(),is(5,`div`,1)(6,`label`),zC(7,`Short Text`),Vu(),zh(8,`textarea`,2),Vu()())},dependencies:[Ni$1,wi$1],encapsulation:2,changeDetection:1})}}return n})();var jt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-checkbox-example`]],standalone:!1,features:[uo$1],decls:11,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``,`suiInline`,``],[`suiType`,`slider`],[`suiType`,`toggle`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`sui-checkbox`),zC(3,`Checkbox`),Vu()(),is(4,`div`,1)(5,`sui-checkbox`,2),zC(6,`Slider`),Vu(),zh(7,`label`),Vu(),is(8,`div`,1)(9,`sui-checkbox`,3),zC(10,`Toggle`),Vu()()())},dependencies:[Ni$1,wi$1,P],encapsulation:2,changeDetection:1})}}return n})();var Yt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-radio-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``],[`suiFormField`,``],[`suiType`,`radio`],[`suiFormFields`,``,`suiGrouped`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Select your favorite fruit:`),Vu(),is(4,`div`,2)(5,`sui-checkbox`,3),zC(6,`Apples`),Vu()(),is(7,`div`,2)(8,`sui-checkbox`,3),zC(9,`Oranges`),Vu()(),is(10,`div`,2)(11,`sui-checkbox`,3),zC(12,`Pears`),Vu()(),is(13,`div`,2)(14,`sui-checkbox`,3),zC(15,`Grapefruit`),Vu()()(),is(16,`div`,4)(17,`label`),zC(18,`Select your second favorite fruit:`),Vu(),is(19,`div`,2)(20,`sui-checkbox`,3),zC(21,`Apples`),Vu()(),is(22,`div`,2)(23,`sui-checkbox`,3),zC(24,`Oranges`),Vu()(),is(25,`div`,2)(26,`sui-checkbox`,3),zC(27,`Pears`),Vu()(),is(28,`div`,2)(29,`sui-checkbox`,3),zC(30,`Grapefruit`),Vu()()()())},dependencies:[Ni$1,wi$1,Oi$1,P],encapsulation:2,changeDetection:1})}}return n})();var Xt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-dropdown-example`]],standalone:!1,features:[uo$1],decls:5,vars:1,consts:[[`sui-form`,``],[`suiFormField`,``],[`suiPlaceholder`,`Gender`,3,`suiOptions`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Gender`),Vu(),zh(4,`sui-select`,2),Vu()()),l&2&&(KD(4),Gh(`suiOptions`,d.gender))},dependencies:[Ni$1,wi$1,Oe],encapsulation:2,changeDetection:1})}}return n})();var $t=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-dropdown-alt-example`]],standalone:!1,features:[uo$1],decls:5,vars:1,consts:[[`sui-form`,``],[`suiFormField`,``],[`suiSearch`,``,`suiPlaceholder`,`Country`,3,`suiOptions`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Country`),Vu(),zh(4,`sui-select`,2),Vu()()),l&2&&(KD(4),Gh(`suiOptions`,d.countries))},dependencies:[Ni$1,wi$1,Oe],encapsulation:2,changeDetection:1})}}return n})();var Kt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-multiple-select-example`]],standalone:!1,features:[uo$1],decls:5,vars:1,consts:[[`sui-form`,``],[`suiFormField`,``],[`suiMultiple`,``,`suiPlaceholder`,`Country`,3,`suiOptions`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Country`),Vu(),zh(4,`sui-select`,2),Vu()()),l&2&&(KD(4),Gh(`suiOptions`,d.countries))},dependencies:[Ni$1,wi$1,Oe],encapsulation:2,changeDetection:1})}}return n})();var Qt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-html-select-example`]],standalone:!1,features:[uo$1],decls:9,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``],[`value`,``],[`value`,`1`],[`value`,`0`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`select`)(3,`option`,2),zC(4,`Gender`),Vu(),is(5,`option`,3),zC(6,`Male`),Vu(),is(7,`option`,4),zC(8,`Female`),Vu()()()())},dependencies:[fi$1,pi$2,Ni$1,wi$1],encapsulation:2,changeDetection:1})}}return n})();var Zt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-message-example`]],standalone:!1,features:[uo$1],decls:9,vars:0,consts:[[`sui-form`,``],[`sui-message`,``],[1,`header`],[1,`list`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zC(3,`We had some issues`),Vu(),is(4,`ul`,3)(5,`li`),zC(6,`Please enter your first name`),Vu(),is(7,`li`),zC(8,`Please enter your last name`),Vu()()()())},dependencies:[wi$1,li$1],encapsulation:2,changeDetection:1})}}return n})();var ei=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-loading-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-form`,``,`suiLoading`,``],[`suiFormField`,``],[`type`,`email`,`placeholder`,`joe@schmoe.com`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`E-mail`),Vu(),zh(4,`input`,2),Vu(),is(5,`div`,3),zC(6,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ti=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-success-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiState`,`success`],[`suiFormField`,``],[`type`,`email`,`placeholder`,`joe@schmoe.com`],[`sui-message`,``,`suiState`,`success`],[`suiMessageHeader`,``],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`E-mail`),Vu(),zh(4,`input`,2),Vu(),is(5,`div`,3)(6,`div`,4),zC(7,`Form Completed`),Vu(),is(8,`p`),zC(9,`Youre all signed up for the newsletter.`),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,li$1,ri$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ii=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-error-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiState`,`error`],[`suiFormField`,``],[`type`,`email`,`placeholder`,`joe@schmoe.com`],[`sui-message`,``,`suiState`,`error`],[`suiMessageHeader`,``],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`E-mail`),Vu(),zh(4,`input`,2),Vu(),is(5,`div`,3)(6,`div`,4),zC(7,`Action Forbidden`),Vu(),is(8,`p`),zC(9,`You can only sign up for an account once with a given e-mail address.`),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,li$1,ri$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ni=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-warning-example`]],standalone:!1,features:[uo$1],decls:13,vars:0,consts:[[`sui-form`,``,`suiState`,`warning`],[`suiFormField`,``],[`type`,`email`,`placeholder`,`joe@schmoe.com`],[`sui-message`,``,`suiState`,`warning`],[`suiMessageHeader`,``],[`suiMessageList`,``],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`E-mail`),Vu(),zh(4,`input`,2),Vu(),is(5,`div`,3)(6,`div`,4),zC(7,`Action Forbidden`),Vu(),is(8,`ul`,5)(9,`li`),zC(10,`That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail. `),Vu()()(),is(11,`div`,6),zC(12,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,li$1,ri$1,pi$3,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ai=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-field-error-example`]],standalone:!1,features:[uo$1],decls:17,vars:1,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``,`suiError`,``],[`placeholder`,`First Name`,`type`,`text`],[`suiFormField`,``],[`placeholder`,`Last Name`,`type`,`text`],[`suiPlaceholder`,`Gender`,3,`suiOptions`],[`suiFormField`,``,`suiError`,``,`suiInline`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,4)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,5),Vu()(),is(10,`div`,2)(11,`label`),zC(12,`Gender`),Vu(),zh(13,`sui-select`,6),Vu(),is(14,`div`,7)(15,`sui-checkbox`),zC(16,` I agree to the Terms and Conditions `),Vu()()()),l&2&&(KD(13),Gh(`suiOptions`,d.gender))},dependencies:[Ni$1,wi$1,Oi$1,P,Oe],encapsulation:2,changeDetection:1})}}return n})();var li=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-disabled-example`]],standalone:!1,features:[uo$1],decls:10,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``,`disabled`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,4),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var di=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-read-only-example`]],standalone:!1,features:[uo$1],decls:10,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`Read Only`,`readonly`,``,`type`,`text`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,3),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var ri=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-size-mini-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`mini`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,Oi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var mi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-size-tiny-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`tiny`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,Oi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var oi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-size-small-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`small`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,Oi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var si=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-size-large-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`large`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,Oi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ci=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-size-big-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`big`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,Oi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var pi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-size-huge-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`huge`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,Oi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ui=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-size-massive-example`]],standalone:!1,features:[uo$1],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`massive`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First Name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Last Name`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,5),zC(11,`Submit`),Vu()())},dependencies:[Ni$1,wi$1,Oi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var vi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-equal-width-example`]],standalone:!1,features:[uo$1],decls:23,vars:0,consts:[[`sui-form`,``,`suiEqualWidth`,``],[`suiFormFields`,``],[`suiFormField`,``],[`type`,`text`,`placeholder`,`Username`],[`type`,`password`],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`Username`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Password`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,1)(11,`div`,2)(12,`label`),zC(13,`First name`),Vu(),zh(14,`input`,5),Vu(),is(15,`div`,2)(16,`label`),zC(17,`Middle name`),Vu(),zh(18,`input`,6),Vu(),is(19,`div`,2)(20,`label`),zC(21,`Last name`),Vu(),zh(22,`input`,7),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var xi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-inverted-example`]],standalone:!1,features:[uo$1],decls:16,vars:0,consts:[[`sui-segment`,``,`suiInverted`,``],[`sui-form`,``,`suiInverted`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`type`,`text`,`placeholder`,`Username`],[`type`,`password`],[`suiFormField`,``,`suiInline`,``],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`label`),zC(5,`Username`),Vu(),zh(6,`input`,4),Vu(),is(7,`div`,3)(8,`label`),zC(9,`Password`),Vu(),zh(10,`input`,5),Vu()(),is(11,`div`,6)(12,`sui-checkbox`),zC(13,`I agree to terms and conditions`),Vu()(),is(14,`div`,7),zC(15,`Submit`),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1,P,Ii$1,ze$1],encapsulation:2,changeDetection:1})}}return n})();var Si=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-inline-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``,`suiInline`,``],[`type`,`text`,`placeholder`,`Full Name`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Last name`),Vu(),zh(4,`input`,2),Vu()())},dependencies:[Ni$1,wi$1],encapsulation:2,changeDetection:1})}}return n})();var hi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-width-example`]],standalone:!1,features:[uo$1],decls:28,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``],[`suiFormField`,``,`suiWidth`,`six`],[`type`,`text`,`placeholder`,`First Name`],[`suiFormField`,``,`suiWidth`,`four`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`],[`suiFormField`,``,`suiWidth`,`two`],[`type`,`text`,`placeholder`,`2 Wide`],[`suiFormField`,``,`suiWidth`,`twelve`],[`type`,`text`,`placeholder`,`12 Wide`],[`suiFormField`,``,`suiWidth`,`eight`],[`type`,`text`,`placeholder`,`8 Wide`],[`type`,`text`,`placeholder`,`6 Wide`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,4)(7,`label`),zC(8,`Middle`),Vu(),zh(9,`input`,5),Vu(),is(10,`div`,2)(11,`label`),zC(12,`Last name`),Vu(),zh(13,`input`,6),Vu()(),is(14,`div`,1)(15,`div`,7),zh(16,`input`,8),Vu(),is(17,`div`,9),zh(18,`input`,10),Vu(),is(19,`div`,7),zh(20,`input`,8),Vu()(),is(21,`div`,1)(22,`div`,11),zh(23,`input`,12),Vu(),is(24,`div`,2),zh(25,`input`,13),Vu(),is(26,`div`,7),zh(27,`input`,8),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var fi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-required-example`]],standalone:!1,features:[uo$1],decls:8,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``,`suiRequired`,``],[`type`,`text`,`placeholder`,`Full Name`],[`suiFormField`,``,`suiInline`,``,`suiRequired`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Last name`),Vu(),zh(4,`input`,2),Vu(),is(5,`div`,3)(6,`sui-checkbox`),zC(7,`I agree to terms and conditions`),Vu()()())},dependencies:[Ni$1,wi$1,P],encapsulation:2,changeDetection:1})}}return n})();var Ei=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-evenly-divided-example`]],standalone:!1,features:[uo$1],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`three`],[`suiFormField`,``],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`First name`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Middle name`),Vu(),zh(9,`input`,4),Vu(),is(10,`div`,2)(11,`label`),zC(12,`Last name`),Vu(),zh(13,`input`,5),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var gi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-grouped-example`]],standalone:!1,features:[uo$1],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiGrouped`,``],[`suiFormField`,``],[`suiType`,`radio`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`sui-checkbox`,3),zC(4,` Apples `),Vu()(),is(5,`div`,2)(6,`sui-checkbox`,3),zC(7,` Oranges `),Vu()(),is(8,`div`,2)(9,`sui-checkbox`,3),zC(10,` Pears `),Vu()(),is(11,`div`,2)(12,`sui-checkbox`,3),zC(13,` Grapefruit `),Vu()()()())},dependencies:[Ni$1,wi$1,Oi$1,P],encapsulation:2,changeDetection:1})}}return n})();var bi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-equal-width-group-example`]],standalone:!1,features:[uo$1],decls:23,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``],[`suiFormField`,``],[`type`,`text`,`placeholder`,`Username`],[`type`,`password`],[`suiFormFields`,``,`suiEqualWidth`,``],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),zC(4,`Username`),Vu(),zh(5,`input`,3),Vu(),is(6,`div`,2)(7,`label`),zC(8,`Password`),Vu(),zh(9,`input`,4),Vu()(),is(10,`div`,5)(11,`div`,2)(12,`label`),zC(13,`First name`),Vu(),zh(14,`input`,6),Vu(),is(15,`div`,2)(16,`label`),zC(17,`Middle name`),Vu(),zh(18,`input`,7),Vu(),is(19,`div`,2)(20,`label`),zC(21,`Last name`),Vu(),zh(22,`input`,8),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var yi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-inline-group-example`]],standalone:!1,features:[uo$1],decls:10,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiInline`,``],[`suiFormField`,``],[`type`,`text`,`placeholder`,`(xxx)`],[`type`,`text`,`placeholder`,`xxx`],[`type`,`text`,`placeholder`,`xxxx`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`Phone Number`),Vu(),is(4,`div`,2),zh(5,`input`,3),Vu(),is(6,`div`,2),zh(7,`input`,4),Vu(),is(8,`div`,2),zh(9,`input`,5),Vu()()())},dependencies:[Ni$1,wi$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var Ci=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form-inline-group-alt-example`]],standalone:!1,features:[uo$1],decls:16,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiInline`,``],[`suiFormField`,``],[`suiType`,`radio`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`label`),zC(3,`What's your favourite fruit?`),Vu(),is(4,`div`,2)(5,`sui-checkbox`,3),zC(6,` Apples `),Vu()(),is(7,`div`,2)(8,`sui-checkbox`,3),zC(9,` Oranges `),Vu()(),is(10,`div`,2)(11,`sui-checkbox`,3),zC(12,` Pears `),Vu()(),is(13,`div`,2)(14,`sui-checkbox`,3),zC(15,` Grapefruit `),Vu()()()())},dependencies:[Ni$1,wi$1,Oi$1,P],encapsulation:2,changeDetection:1})}}return n})();function $r(n,s){n&1&&zh(0,`doc-form-basic-example`)}function Kr(n,s){n&1&&zh(0,`doc-form-basic-alt-example`)}function Qr(n,s){n&1&&zh(0,`doc-form-user-input-example`)}function Zr(n,s){n&1&&zh(0,`doc-form-fields-example`)}function em(n,s){n&1&&zh(0,`doc-form-fields-width-example`)}function tm(n,s){n&1&&zh(0,`doc-form-fields-inline-example`)}function im(n,s){n&1&&zh(0,`doc-form-text-area-example`)}function nm(n,s){n&1&&zh(0,`doc-form-checkbox-example`)}function am(n,s){n&1&&zh(0,`doc-form-radio-example`)}function lm(n,s){n&1&&zh(0,`doc-form-dropdown-example`)}function dm(n,s){n&1&&zh(0,`doc-form-dropdown-alt-example`)}function rm(n,s){n&1&&zh(0,`doc-form-multiple-select-example`)}function mm(n,s){n&1&&zh(0,`doc-form-html-select-example`)}function om(n,s){n&1&&zh(0,`doc-form-message-example`)}function sm(n,s){n&1&&zh(0,`doc-form-loading-example`)}function cm(n,s){n&1&&zh(0,`doc-form-success-example`)}function pm(n,s){n&1&&zh(0,`doc-form-error-example`)}function um(n,s){n&1&&zh(0,`doc-form-warning-example`)}function vm(n,s){n&1&&zh(0,`doc-form-field-error-example`)}function xm(n,s){n&1&&zh(0,`doc-form-disabled-example`)}function Sm(n,s){n&1&&zh(0,`doc-form-read-only-example`)}function hm(n,s){n&1&&zh(0,`doc-form-size-mini-example`)}function fm(n,s){n&1&&zh(0,`doc-form-size-tiny-example`)}function Em(n,s){n&1&&zh(0,`doc-form-size-small-example`)}function gm(n,s){n&1&&zh(0,`doc-form-size-large-example`)}function bm(n,s){n&1&&zh(0,`doc-form-size-big-example`)}function ym(n,s){n&1&&zh(0,`doc-form-size-huge-example`)}function Cm(n,s){n&1&&zh(0,`doc-form-size-massive-example`)}function Fm(n,s){n&1&&zh(0,`doc-form-equal-width-example`)}function Dm(n,s){n&1&&zh(0,`doc-form-inverted-example`)}function Mm(n,s){n&1&&zh(0,`doc-form-inline-example`)}function _m(n,s){n&1&&zh(0,`doc-form-width-example`)}function wm(n,s){n&1&&zh(0,`doc-form-required-example`)}function Tm(n,s){n&1&&zh(0,`doc-form-evenly-divided-example`)}function Im(n,s){n&1&&zh(0,`doc-form-grouped-example`)}function Am(n,s){n&1&&zh(0,`doc-form-equal-width-group-example`)}function km(n,s){n&1&&zh(0,`doc-form-inline-group-example`)}function Bm(n,s){n&1&&zh(0,`doc-form-inline-group-alt-example`)}function Gm(n,s){if(n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Form`),Vu(),is(6,`p`),zC(7,`A form`),Vu(),jh(8,$r,1,0,`ng-template`,5),Vu(),is(9,`doc-code-sample`,3),jh(10,Kr,1,0,`ng-template`,5),Vu(),zh(11,`br`),is(12,`h2`,2),zC(13,`Content`),Vu(),is(14,`doc-code-sample`,3)(15,`h3`,4),zC(16,`Field`),Vu(),is(17,`p`),zC(18,`A field is a form element containing a label and an input`),Vu(),jh(19,Qr,1,0,`ng-template`,5),Vu(),is(20,`doc-code-sample`,3)(21,`h3`,4),zC(22,`Fields`),Vu(),is(23,`p`),zC(24,`A set of fields can appear grouped together`),Vu(),is(25,`div`,6),zC(26,` Field groups automatically receive responsive styling, swapping to one field per row on mobile devices. `),Vu(),jh(27,Zr,1,0,`ng-template`,5),Vu(),is(28,`doc-code-sample`,3),jh(29,em,1,0,`ng-template`,5),Vu(),is(30,`doc-code-sample`,3),jh(31,tm,1,0,`ng-template`,5),Vu(),is(32,`doc-code-sample`,3)(33,`h3`,4),zC(34,`Text Area`),Vu(),is(35,`p`),zC(36,`A textarea can be used to allow for extended user input.`),Vu(),is(37,`div`,7),zC(38,` To specify an approximate text area size use the rows attribute. `),Vu(),jh(39,im,1,0,`ng-template`,5),Vu(),is(40,`doc-code-sample`,3)(41,`h3`,4),zC(42,`Checkbox`),Vu(),is(43,`p`),zC(44,`A form can contain a `),is(45,`a`,8),zC(46,`checkbox`),Vu()(),is(47,`div`,7),zC(48,` UI checkbox are special, styled versions of standard HTML checkboxes `),Vu(),jh(49,nm,1,0,`ng-template`,5),Vu(),is(50,`doc-code-sample`,3)(51,`h3`,4),zC(52,`Radio Checkbox`),Vu(),is(53,`p`),zC(54,`A form can contain a `),is(55,`a`,8),zC(56,`radio checkbox`),Vu()(),jh(57,am,1,0,`ng-template`,5),Vu(),is(58,`doc-code-sample`,3)(59,`h3`,4),zC(60,`Dropdown`),Vu(),is(61,`p`),zC(62,`A form can contain a `),is(63,`a`,9),zC(64,`dropdown`),Vu()(),jh(65,lm,1,0,`ng-template`,5),Vu(),is(66,`doc-code-sample`,3),jh(67,dm,1,0,`ng-template`,5),Vu(),is(68,`doc-code-sample`,3)(69,`h3`,4),zC(70,`Multiple Select`),Vu(),is(71,`p`),zC(72,`A multiple select is used to include several choices with one form field`),Vu(),jh(73,rm,1,0,`ng-template`,5),Vu(),is(74,`doc-code-sample`,3)(75,`h3`,4),zC(76,`HTML Select`),Vu(),is(77,`p`),zC(78,`A multiple select is used to include several choices with one form field`),Vu(),jh(79,mm,1,0,`ng-template`,5),Vu(),is(80,`doc-code-sample`,3)(81,`h3`,4),zC(82,`Message`),Vu(),is(83,`p`),zC(84,`A form can contain a `),is(85,`a`,10),zC(86,`message`),Vu()(),is(87,`div`,7),zC(88,` Any `),is(89,`code`),zC(90,`info`),Vu(),zC(91,`, `),is(92,`code`),zC(93,`error`),Vu(),zC(94,`, `),is(95,`code`),zC(96,`success`),Vu(),zC(97,`, or `),is(98,`code`),zC(99,`warning`),Vu(),zC(100,` message blocks found inside a form are hidden by default. `),Vu(),jh(101,om,1,0,`ng-template`,5),Vu(),zh(102,`br`),is(103,`h2`,2),zC(104,`State`),Vu(),is(105,`doc-code-sample`,3)(106,`h3`,4),zC(107,`Loading`),Vu(),is(108,`p`),zC(109,`If a form is in loading state, it will automatically show a loading indicator.`),Vu(),jh(110,sm,1,0,`ng-template`,5),Vu(),is(111,`doc-code-sample`,3)(112,`h3`,4),zC(113,`Success`),Vu(),is(114,`p`),zC(115,`If a form is in an success state, it will automatically show any success message blocks.`),Vu(),jh(116,cm,1,0,`ng-template`,5),Vu(),is(117,`doc-code-sample`,3)(118,`h3`,4),zC(119,`Error`),Vu(),is(120,`p`),zC(121,`If a form is in an error state, it will automatically show any error message blocks.`),Vu(),jh(122,pm,1,0,`ng-template`,5),Vu(),is(123,`doc-code-sample`,3)(124,`h3`,4),zC(125,`Warning`),Vu(),is(126,`p`),zC(127,`If a form is in warning state, it will automatically show any warning message block.`),Vu(),jh(128,um,1,0,`ng-template`,5),Vu(),is(129,`doc-code-sample`,3)(130,`h3`,4),zC(131,`Field Error`),Vu(),is(132,`p`),zC(133,`Individual fields may display an error state`),Vu(),jh(134,vm,1,0,`ng-template`,5),Vu(),is(135,`doc-code-sample`,3)(136,`h3`,4),zC(137,`Disabled Field`),Vu(),is(138,`p`),zC(139,`Individual fields may be disabled`),Vu(),jh(140,xm,1,0,`ng-template`,5),Vu(),is(141,`doc-code-sample`,3)(142,`h3`,4),zC(143,`Read-Only Field`),Vu(),is(144,`p`),zC(145,`Individual fields may be read only`),Vu(),jh(146,Sm,1,0,`ng-template`,5),Vu(),zh(147,`br`),is(148,`h2`,2),zC(149,`Form Variations`),Vu(),is(150,`doc-code-sample`,3)(151,`h3`,4),zC(152,`Size`),Vu(),is(153,`p`),zC(154,`A form can vary in size`),Vu(),jh(155,hm,1,0,`ng-template`,5),Vu(),is(156,`doc-code-sample`,3),jh(157,fm,1,0,`ng-template`,5),Vu(),is(158,`doc-code-sample`,3),jh(159,Em,1,0,`ng-template`,5),Vu(),is(160,`doc-code-sample`,3),jh(161,gm,1,0,`ng-template`,5),Vu(),is(162,`doc-code-sample`,3),jh(163,bm,1,0,`ng-template`,5),Vu(),is(164,`doc-code-sample`,3),jh(165,ym,1,0,`ng-template`,5),Vu(),is(166,`doc-code-sample`,3),jh(167,Cm,1,0,`ng-template`,5),Vu(),is(168,`doc-code-sample`,3)(169,`h3`,4),zC(170,`Equal Width Form`),Vu(),is(171,`p`),zC(172,`Forms can automatically divide fields to be equal width`),Vu(),jh(173,Fm,1,0,`ng-template`,5),Vu(),is(174,`doc-code-sample`,3)(175,`h3`,4),zC(176,`Inverted`),Vu(),is(177,`p`),zC(178,`A form on a dark background may have to invert its colour scheme`),Vu(),jh(179,Dm,1,0,`ng-template`,5),Vu(),zh(180,`br`),is(181,`h2`,2),zC(182,`Field Variations`),Vu(),is(183,`doc-code-sample`,3)(184,`h3`,4),zC(185,`Inline Field`),Vu(),is(186,`p`),zC(187,`A field can have its label next to instead of above it.`),Vu(),jh(188,Mm,1,0,`ng-template`,5),Vu(),is(189,`doc-code-sample`,3)(190,`h3`,4),zC(191,`Width`),Vu(),is(192,`p`),zC(193,`A field can specify its width in grid columns`),Vu(),jh(194,_m,1,0,`ng-template`,5),Vu(),is(195,`doc-code-sample`,3)(196,`h3`,4),zC(197,`Required`),Vu(),is(198,`p`),zC(199,`A field can show that input is mandatory`),Vu(),jh(200,wm,1,0,`ng-template`,5),Vu(),zh(201,`br`),is(202,`h2`,2),zC(203,`Group Variations`),Vu(),is(204,`doc-code-sample`,3)(205,`h3`,4),zC(206,`Evenly Divided`),Vu(),is(207,`p`),zC(208,`Fields can have their widths divided evenly.`),Vu(),jh(209,Tm,1,0,`ng-template`,5),Vu(),is(210,`doc-code-sample`,3)(211,`h3`,4),zC(212,`Grouped Fields`),Vu(),is(213,`p`),zC(214,`Fields can show related choices.`),Vu(),jh(215,Im,1,0,`ng-template`,5),Vu(),is(216,`doc-code-sample`,3)(217,`h3`,4),zC(218,`Equal Width Fields`),Vu(),is(219,`p`),zC(220,`Fields can automatically divide fields to be equal width.`),Vu(),jh(221,Am,1,0,`ng-template`,5),Vu(),is(222,`doc-code-sample`,3)(223,`h3`,4),zC(224,`Inline Fields`),Vu(),is(225,`p`),zC(226,`Multiple fields may be inline in a row.`),Vu(),jh(227,km,1,0,`ng-template`,5),Vu(),is(228,`doc-code-sample`,3),jh(229,Bm,1,0,`ng-template`,5),Vu()()),n&2){let a=pC();KD(3),Gh(`templateCode`,a.snippetBasic),KD(6),Gh(`templateCode`,a.snippetBasicAlt),KD(5),Gh(`templateCode`,a.snippetUserInput),KD(6),Gh(`templateCode`,a.snippetFields),KD(8),Gh(`templateCode`,a.snippetFieldsWidth),KD(2),Gh(`templateCode`,a.snippetFieldsInline),KD(2),Gh(`templateCode`,a.snippetTextArea),KD(8),Gh(`templateCode`,a.snippetCheckbox),KD(10),Gh(`templateCode`,a.snippetRadio),KD(8),Gh(`templateCode`,a.snippetDropdown),KD(8),Gh(`templateCode`,a.snippetDropdownAlt),KD(2),Gh(`templateCode`,a.snippetMultipleSelect),KD(6),Gh(`templateCode`,a.snippetHtmlSelect),KD(6),Gh(`templateCode`,a.snippetMessage),KD(25),Gh(`templateCode`,a.snippetLoading),KD(6),Gh(`templateCode`,a.snippetSuccess),KD(6),Gh(`templateCode`,a.snippetError),KD(6),Gh(`templateCode`,a.snippetWarning),KD(6),Gh(`templateCode`,a.snippetFieldError),KD(6),Gh(`templateCode`,a.snippetDisabled),KD(6),Gh(`templateCode`,a.snippetReadOnly),KD(9),Gh(`templateCode`,a.snippetSizeMini),KD(6),Gh(`templateCode`,a.snippetSizeTiny),KD(2),Gh(`templateCode`,a.snippetSizeSmall),KD(2),Gh(`templateCode`,a.snippetSizeLarge),KD(2),Gh(`templateCode`,a.snippetSizeBig),KD(2),Gh(`templateCode`,a.snippetSizeHuge),KD(2),Gh(`templateCode`,a.snippetSizeMassive),KD(2),Gh(`templateCode`,a.snippetEqualWidth),KD(6),Gh(`templateCode`,a.snippetInverted),KD(9),Gh(`templateCode`,a.snippetInline),KD(6),Gh(`templateCode`,a.snippetWidth),KD(6),Gh(`templateCode`,a.snippetRequired),KD(9),Gh(`templateCode`,a.snippetEvenlyDivided),KD(6),Gh(`templateCode`,a.snippetGrouped),KD(6),Gh(`templateCode`,a.snippetEqualWidthGroup),KD(6),Gh(`templateCode`,a.snippetInlineGroup),KD(6),Gh(`templateCode`,a.snippetInlineGroupAlt)}}function Nm(n,s){n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`sui-form`),Vu(),is(3,`h4`,4),zC(4,`Properties`),Vu(),is(5,`table`,11)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is(10,`th`),zC(11,`Description`),Vu(),is(12,`th`),zC(13,`Type`),Vu(),is(14,`th`),zC(15,`Default`),Vu()()(),is(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiState`),Vu(),is(20,`td`),zC(21,`Set the form state. Allowed values could be `),is(22,`span`,12),zC(23,`success`),Vu(),zC(24,` | `),is(25,`span`,12),zC(26,`warning`),Vu(),zC(27,` | `),is(28,`span`,12),zC(29,`error`),Vu(),zC(30,` | `),is(31,`span`,12),zC(32,`null`),Vu()(),is(33,`td`)(34,`div`,13),zC(35,` string `),Vu()(),is(36,`td`)(37,`div`,14),zC(38,` null `),Vu()()(),is(39,`tr`)(40,`td`),zC(41,`suiSize`),Vu(),is(42,`td`),zC(43,`Set the form size. Allowed values could be `),is(44,`span`,12),zC(45,`mini`),Vu(),zC(46,` | `),is(47,`span`,12),zC(48,`tiny`),Vu(),zC(49,` | `),is(50,`span`,12),zC(51,`small`),Vu(),zC(52,` | `),is(53,`span`,12),zC(54,`medium`),Vu(),zC(55,` | `),is(56,`span`,12),zC(57,`big`),Vu(),zC(58,` | `),is(59,`span`,12),zC(60,`huge`),Vu(),zC(61,` | `),is(62,`span`,12),zC(63,`massive`),Vu(),zC(64,` | `),is(65,`span`,12),zC(66,`null`),Vu()(),is(67,`td`)(68,`div`,13),zC(69,` string `),Vu()(),is(70,`td`)(71,`div`,14),zC(72,` null `),Vu()()(),is(73,`tr`)(74,`td`),zC(75,`suiLoading`),Vu(),is(76,`td`),zC(77,`Whether or not the form is a loading state. `),Vu(),is(78,`td`)(79,`div`,13),zC(80,` boolean `),Vu()(),is(81,`td`)(82,`div`,14),zC(83,` false `),Vu()()(),is(84,`tr`)(85,`td`),zC(86,`suiEqualWidth`),Vu(),is(87,`td`),zC(88,`Whether or not the form fields are of equal width. `),Vu(),is(89,`td`)(90,`div`,13),zC(91,` boolean `),Vu()(),is(92,`td`)(93,`div`,14),zC(94,` false `),Vu()()(),is(95,`tr`)(96,`td`),zC(97,`suiInverted`),Vu(),is(98,`td`),zC(99,`Whether or not the form has inverted colours. `),Vu(),is(100,`td`)(101,`div`,13),zC(102,` boolean `),Vu()(),is(103,`td`)(104,`div`,14),zC(105,` false `),Vu()()()()(),zh(106,`br`),is(107,`h2`,2),zC(108,`suiFormFields`),Vu(),is(109,`h4`,4),zC(110,`Properties`),Vu(),is(111,`table`,11)(112,`thead`)(113,`tr`)(114,`th`),zC(115,`Property`),Vu(),is(116,`th`),zC(117,`Description`),Vu(),is(118,`th`),zC(119,`Type`),Vu(),is(120,`th`),zC(121,`Default`),Vu()()(),is(122,`tbody`)(123,`tr`)(124,`td`),zC(125,`suiWidth`),Vu(),is(126,`td`),zC(127,`Set the fields width. Allowed values could be `),is(128,`span`,12),zC(129,`one`),Vu(),zC(130,` | `),is(131,`span`,12),zC(132,`two`),Vu(),zC(133,` | `),is(134,`span`,12),zC(135,`three`),Vu(),zC(136,` | `),is(137,`span`,12),zC(138,`four`),Vu(),zC(139,` | `),is(140,`span`,12),zC(141,`five`),Vu(),zC(142,` | `),is(143,`span`,12),zC(144,`six`),Vu(),zC(145,` | `),is(146,`span`,12),zC(147,`seven`),Vu(),zC(148,` | `),is(149,`span`,12),zC(150,`eight`),Vu(),zC(151,` | `),is(152,`span`,12),zC(153,`nine`),Vu(),zC(154,` | `),is(155,`span`,12),zC(156,`ten`),Vu(),zC(157,` | `),is(158,`span`,12),zC(159,`eleven`),Vu(),zC(160,` | `),is(161,`span`,12),zC(162,`twelve`),Vu(),zC(163,` | `),is(164,`span`,12),zC(165,`thirteen`),Vu(),zC(166,` | `),is(167,`span`,12),zC(168,`fourteen`),Vu(),zC(169,`| `),is(170,`span`,12),zC(171,`fifteen`),Vu(),zC(172,` | `),is(173,`span`,12),zC(174,`sixteen`),Vu(),zC(175,` | `),is(176,`span`,12),zC(177,`null`),Vu()(),is(178,`td`)(179,`div`,13),zC(180,` string`),Vu()(),is(181,`td`)(182,`div`,14),zC(183,` null`),Vu()()(),is(184,`tr`)(185,`td`),zC(186,`suiInline`),Vu(),is(187,`td`),zC(188,` Determine whether or not the field group is inline `),Vu(),is(189,`td`)(190,`div`,13),zC(191,` boolean `),Vu()(),is(192,`td`)(193,`div`,14),zC(194,` false `),Vu()()(),is(195,`tr`)(196,`td`),zC(197,`suiGrouped`),Vu(),is(198,`td`),zC(199,` Determine whether or not the fields are grouped `),Vu(),is(200,`td`)(201,`div`,13),zC(202,` boolean `),Vu()(),is(203,`td`)(204,`div`,14),zC(205,` false `),Vu()()(),is(206,`tr`)(207,`td`),zC(208,`suiEqualWidth`),Vu(),is(209,`td`),zC(210,` Determine whether or not the field contents are equal width `),Vu(),is(211,`td`)(212,`div`,13),zC(213,` boolean `),Vu()(),is(214,`td`)(215,`div`,14),zC(216,` false `),Vu()()()()(),zh(217,`br`),is(218,`h2`,2),zC(219,`suiFormField`),Vu(),is(220,`h4`,4),zC(221,`Properties`),Vu(),is(222,`table`,11)(223,`thead`)(224,`tr`)(225,`th`),zC(226,`Property`),Vu(),is(227,`th`),zC(228,`Description`),Vu(),is(229,`th`),zC(230,`Type`),Vu(),is(231,`th`),zC(232,`Default`),Vu()()(),is(233,`tbody`)(234,`tr`)(235,`td`),zC(236,`suiWidth`),Vu(),is(237,`td`),zC(238,`Set the fields width. Allowed values could be `),is(239,`span`,12),zC(240,`one`),Vu(),zC(241,` | `),is(242,`span`,12),zC(243,`two`),Vu(),zC(244,` | `),is(245,`span`,12),zC(246,`three`),Vu(),zC(247,` | `),is(248,`span`,12),zC(249,`four`),Vu(),zC(250,` | `),is(251,`span`,12),zC(252,`five`),Vu(),zC(253,` | `),is(254,`span`,12),zC(255,`six`),Vu(),zC(256,` | `),is(257,`span`,12),zC(258,`seven`),Vu(),zC(259,` | `),is(260,`span`,12),zC(261,`eight`),Vu(),zC(262,` | `),is(263,`span`,12),zC(264,`nine`),Vu(),zC(265,` | `),is(266,`span`,12),zC(267,`ten`),Vu(),zC(268,` | `),is(269,`span`,12),zC(270,`eleven`),Vu(),zC(271,` | `),is(272,`span`,12),zC(273,`twelve`),Vu(),zC(274,` | `),is(275,`span`,12),zC(276,`thirteen`),Vu(),zC(277,` | `),is(278,`span`,12),zC(279,`fourteen`),Vu(),zC(280,`| `),is(281,`span`,12),zC(282,`fifteen`),Vu(),zC(283,` | `),is(284,`span`,12),zC(285,`sixteen`),Vu(),zC(286,` | `),is(287,`span`,12),zC(288,`null`),Vu()(),is(289,`td`)(290,`div`,13),zC(291,` string`),Vu()(),is(292,`td`)(293,`div`,14),zC(294,` null`),Vu()()(),is(295,`tr`)(296,`td`),zC(297,`suiError`),Vu(),is(298,`td`),zC(299,` Determine whether or not the field is in an error state `),Vu(),is(300,`td`)(301,`div`,13),zC(302,` boolean `),Vu()(),is(303,`td`)(304,`div`,14),zC(305,` false `),Vu()()(),is(306,`tr`)(307,`td`),zC(308,`suiInline`),Vu(),is(309,`td`),zC(310,` Determine whether or not the field is inline `),Vu(),is(311,`td`)(312,`div`,13),zC(313,` boolean `),Vu()(),is(314,`td`)(315,`div`,14),zC(316,` false `),Vu()()(),is(317,`tr`)(318,`td`),zC(319,`disabled`),Vu(),is(320,`td`),zC(321,` Determine whether or not the field is disabled `),Vu(),is(322,`td`)(323,`div`,13),zC(324,` boolean `),Vu()(),is(325,`td`)(326,`div`,14),zC(327,` false `),Vu()()(),is(328,`tr`)(329,`td`),zC(330,`suiRequired`),Vu(),is(331,`td`),zC(332,` Determine whether or not the field is required `),Vu(),is(333,`td`)(334,`div`,13),zC(335,` boolean `),Vu()(),is(336,`td`)(337,`div`,14),zC(338,` false `),Vu()()()()()())}var Fi=(()=>{class n{constructor(a){this.snippetBasic=tt,this.snippetBasicAlt=it,this.snippetUserInput=nt,this.snippetFields=at,this.snippetFieldsWidth=lt,this.snippetFieldsInline=dt,this.snippetTextArea=rt,this.snippetCheckbox=mt,this.snippetRadio=ot,this.snippetDropdown=st,this.snippetDropdownAlt=ct,this.snippetMultipleSelect=pt,this.snippetHtmlSelect=ut,this.snippetMessage=vt,this.snippetLoading=xt,this.snippetSuccess=St,this.snippetError=ht,this.snippetWarning=ft,this.snippetFieldError=Et,this.snippetDisabled=gt,this.snippetReadOnly=bt,this.snippetSizeMini=yt,this.snippetSizeTiny=Ct,this.snippetSizeSmall=Ft,this.snippetSizeLarge=Dt,this.snippetSizeBig=Mt,this.snippetSizeHuge=_t,this.snippetSizeMassive=wt,this.snippetEqualWidth=Tt,this.snippetInverted=It,this.snippetInline=At,this.snippetWidth=kt,this.snippetRequired=Bt,this.snippetEvenlyDivided=Gt,this.snippetGrouped=Nt,this.snippetEqualWidthGroup=Wt,this.snippetInlineGroup=Rt,this.snippetInlineGroupAlt=Pt,this.states=[{text:`Alabama`,value:`al`}],this.countries=[{text:`Albania`,value:`al`,flag:`al`},{text:`Nigeria`,value:`ng`,flag:`ng`}],this.months=[{text:`January`,value:`jan`}],this.cards=[{text:`Visa`,value:`visa`}],this.contacts=[{text:`Justen Kitsune`,image:{avatar:!0,src:`https://semantic-ui.com/images/avatar/small/stevie.jpg`}}],this.gender=[{text:`Male`},{text:`Female`}],a.setTitle(`Form | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-form`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Form`,`subHeader`,`A form displays a set of related user input fields in a structured way`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-message`,``,`suiState`,`success`],[`sui-message`,``,`suiState`,`info`],[`routerLink`,`/modules/checkbox`],[`routerLink`,`/modules/dropdown`],[`routerLink`,`/collections/message`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(is(0,`doc-page`,0),jh(1,Gm,230,38,`div`,1)(2,Nm,339,0,`div`,1),Vu()),l&2&&(KD(),Gh(`docPageContent`,`definition`),KD(),Gh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$2,Ws$1,li$1,Qt$1,U$1,fi$2,Jt,Lt,Ht,Vt,qt,Ot,Ut,jt,Yt,Xt,$t,Kt,Qt,Zt,ei,ti,ii,ni,ai,li,di,ri,mi,oi,si,ci,pi,ui,vi,xi,Si,hi,fi,Ei,gi,bi,yi,Ci],encapsulation:2,changeDetection:1})}}return n})();var Di=`<div sui-grid>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
`;var Mi=`<div sui-grid
     suiWidth="three"
     suiDivided="divided">
  <div suiGridRow>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
</div>
`;var _i=`<div sui-grid
     suiDivided="vertically divided">
  <div suiGridRow
       suiWidth="two">
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow
       suiWidth="three">
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
</div>
`;var wi=`<div sui-grid
     suiCelled="celled">
  <div suiGridRow>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="thirteen">
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="ten">
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Ti=`<div sui-grid
     suiCelled="internally celled">
  <div suiGridRow>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="ten">
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="ten">
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiWidth="three">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Ii=`<div sui-grid
     suiWidth="four">
  <div suiGridRow>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
</div>
`;var Ai=`<div sui-grid>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
`;var ki=`<div sui-grid
     suiWidth="three">
  <div suiGridColumn
       suiFloated="left floated">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiFloated="right floated">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
`;var Bi=`<div sui-grid>
  <div suiGridColumn
       suiWidth="four">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="nine">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiWidth="three">
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
`;var Gi=`<div sui-grid>
  <div suiGridRow
       suiWidth="four">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow
       suiWidth="three">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow
       suiWidth="five">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Ni=`<div sui-grid
     suiEqual>
  <div suiGridColumn>
    <div sui-segment>1</div>
  </div>
  <div suiGridColumn
       suiWidth="eight">
    <div sui-segment>2</div>
  </div>
  <div suiGridColumn>
    <div sui-segment>3</div>
  </div>
</div>
<div sui-grid>
  <div suiGridRow
       suiEqual>
    <div suiGridColumn>
      <div sui-segment>1</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>2</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>3</div>
    </div>
  </div>
  <div suiGridRow
       suiEqual>
    <div suiGridColumn>
      <div sui-segment>1</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>2</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>3</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>4</div>
    </div>
  </div>
</div>
`;var Wi=`<div sui-grid
     suiWidth="three"
     suiDivided="divided">
  <div suiGridRow
       suiStretched>
    <div suiGridColumn>
      <div sui-segment>1</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>1</div>
      <div sui-segment>2</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>1</div>
      <div sui-segment>2</div>
      <div sui-segment>3</div>
    </div>
  </div>
</div>
`;var Ri=`<p>The following grid has vertical and horizontal gutters.</p>
<div sui-grid
     suiWidth="two"
     suiPadded="padded">
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
<p>The following grid has vertical gutters.</p>
<div sui-grid
     suiWidth="two"
     suiPadded="vertically padded">
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
<p>The following grid has horizontal gutters.</p>
<div sui-grid
     suiWidth="two"
     suiPadded="horizontally padded">
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
`;var Pi=`<div sui-grid
     suiWidth="four"
     suiRelaxation="relaxed">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
<div sui-grid
     suiWidth="four"
     suiRelaxation="very relaxed">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
`;var zi=`<div sui-grid
     suiWidth="five"
     suiPadded="padded">
  <div suiGridColumn
       suiColour="red">
    Red
  </div>
  <div suiGridColumn
       suiColour="orange">
    Orange
  </div>
  <div suiGridColumn
       suiColour="yellow">
    Yellow
  </div>
  <div suiGridColumn
       suiColour="olive">
    Olive
  </div>
  <div suiGridColumn
       suiColour="green">
    Green
  </div>
  <div suiGridColumn
       suiColour="teal">
    Teal
  </div>
  <div suiGridColumn
       suiColour="blue">
    Blue
  </div>
  <div suiGridColumn
       suiColour="violet">
    Violet
  </div>
  <div suiGridColumn
       suiColour="purple">
    Purple
  </div>
  <div suiGridColumn
       suiColour="pink">
    Pink
  </div>
  <div suiGridColumn
       suiColour="brown">
    Brown
  </div>
  <div suiGridColumn
       suiColour="grey">
    Grey
  </div>
  <div suiGridColumn
       suiColour="black">
    Black
  </div>
</div>
<div sui-grid
     suiPadded="padded">
  <div suiGridRow
       suiColour="red">
    <div suiGridColumn>
      Red
    </div>
  </div>
  <div suiGridRow
       suiColour="orange">
    <div suiGridColumn>
      Orange
    </div>
  </div>
  <div suiGridRow
       suiColour="yellow">
    <div suiGridColumn>
      Yellow
    </div>
  </div>
  <div suiGridRow
       suiColour="olive">
    <div suiGridColumn>
      Olive
    </div>
  </div>
</div>
`;var Ji=`<div sui-grid
     suiCentered
     suiWidth="two">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridRow
       suiCentered
       suiWidth="four">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Li=`<div sui-grid
     suiAlignment="center aligned"
     suiWidth="three">
  <div suiGridRow>
    <div suiGridColumn>
      <div sui-segment>Cats</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Dogs</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Monkeys</div>
    </div>
  </div>
</div>
<div sui-grid>
  <div suiGridRow
       suiWidth="three">
    <div suiGridColumn
         suiAlignment="left aligned">
      <div sui-segment>Left aligned column</div>
    </div>
    <div suiGridColumn
         suiAlignment="center aligned">
      <div sui-segment>Center aligned column</div>
    </div>
    <div suiGridColumn
         suiAlignment="right aligned">
      <div sui-segment>Right aligned column</div>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn
         suiAlignment="justified">
      <div sui-segment>Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other.</div>
    </div>
  </div>
</div>
`;var Hi=`<div sui-grid
     suiVerticalAlignment="middle aligned"
     suiWidth="four">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
<div sui-grid
     suiWidth="four">
  <div suiGridRow
       suiVerticalAlignment="bottom aligned">
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn
         suiVerticalAlignment="top aligned">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn>
      <doc-wireframe type="image"></doc-wireframe>
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiVerticalAlignment="middle aligned">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
    <div suiGridColumn
         suiVerticalAlignment="bottom aligned">
      <doc-wireframe type="image"></doc-wireframe>
    </div>
  </div>
</div>
`;var Vi=`<div sui-grid
     suiDoubling
     suiWidth="five">
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
  <div suiGridColumn>
    <doc-wireframe type="image"></doc-wireframe>
  </div>
</div>
`;var qi=`<div sui-grid
     suiStackable
     suiWidth="two">
  <div suiGridColumn>
    <div sui-segment><doc-wireframe type="paragraph"></doc-wireframe></div>
  </div>
  <div suiGridColumn>
    <div sui-segment><doc-wireframe type="paragraph"></doc-wireframe></div>
  </div>
</div>
`;var Oi=`<div sui-grid
     suiWidth="four"
     suiDivided="divided"
     suiReversed="computer reversed">
  <div suiGridRow>
    <div suiGridColumn>
      Computer First
    </div>
    <div suiGridColumn>
      Computer Second
    </div>
    <div suiGridColumn>
      Computer Third
    </div>
    <div suiGridColumn>
      Computer Fourth
    </div>
  </div>
</div>
<div sui-grid
     suiWidth="three"
     suiDivided="divided">
  <div suiGridRow
       [suiReversed]="['tablet reversed', 'mobile reversed']">
    <div suiGridColumn>
      Tablet &amp; Mobile First
    </div>
    <div suiGridColumn>
      Tablet &amp; Mobile Second
    </div>
    <div suiGridColumn>
      Tablet &amp; Mobile Third
    </div>
  </div>
</div>
<div sui-grid
     suiWidth="one"
     suiDivided="vertically divided"
     suiReversed="computer vertically reversed">
  <div suiGridRow>
    <div suiGridColumn>
      Computer Row 1
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn>
      Computer Row 2
    </div>
  </div>
  <div suiGridRow>
    <div suiGridColumn>
      Computer Row 3
    </div>
  </div>
</div>
`;var Ui=`<div sui-grid>
  <div suiGridRow
       suiWidth="two">
    <div suiGridColumn
         suiDeviceVisibility="large screen only">
      <div sui-segment>Large Screen</div>
    </div>
    <div suiGridColumn
         suiDeviceVisibility="widescreen only">
      <div sui-segment>Widescreen</div>
    </div>
  </div>
  <div suiGridRow
       suiWidth="two"
       suiDeviceVisibility="mobile only">
    <div suiGridColumn>
      <div sui-segment>Mobile</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Mobile</div>
    </div>
  </div>
  <div suiGridRow
       suiWidth="two"
       suiDeviceVisibility="tablet only">
    <div suiGridColumn>
      <div sui-segment>Tablet</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Tablet</div>
    </div>
  </div>
  <div suiGridRow
       suiWidth="three"
       suiDeviceVisibility="computer only">
    <div suiGridColumn>
      <div sui-segment>Computer</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Computer</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>Computer</div>
    </div>
  </div>
  <div suiGridRow
       suiWidth="two">
    <div suiGridColumn>
      <div sui-segment>All Sizes</div>
    </div>
    <div suiGridColumn>
      <div sui-segment>All Sizes</div>
    </div>
  </div>
</div>
`;var ji=`<div sui-grid>
  <div suiGridColumn
       suiMobileWidth="sixteen"
       suiTabletWidth="eight"
       suiComputerWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiMobileWidth="sixteen"
       suiTabletWidth="eight"
       suiComputerWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiMobileWidth="sixteen"
       suiTabletWidth="eight"
       suiComputerWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div suiGridColumn
       suiMobileWidth="sixteen"
       suiTabletWidth="eight"
       suiComputerWidth="four">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
</div>
`;var ro=()=>[`tablet reversed`,`mobile reversed`];var Yi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-grid-example`]],standalone:!1,decls:17,vars:0,consts:[[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`four`],[`type`,`image`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,1),zh(4,`doc-wireframe`,2),Vu(),is(5,`div`,1),zh(6,`doc-wireframe`,2),Vu(),is(7,`div`,1),zh(8,`doc-wireframe`,2),Vu(),is(9,`div`,1),zh(10,`doc-wireframe`,2),Vu(),is(11,`div`,1),zh(12,`doc-wireframe`,2),Vu(),is(13,`div`,1),zh(14,`doc-wireframe`,2),Vu(),is(15,`div`,1),zh(16,`doc-wireframe`,2),Vu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var Xi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-divided-example`]],standalone:!1,decls:15,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`three`,`suiDivided`,`divided`],[`suiGridRow`,``],[`suiGridColumn`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zh(3,`doc-wireframe`,3),Vu(),is(4,`div`,2),zh(5,`doc-wireframe`,3),Vu(),is(6,`div`,2),zh(7,`doc-wireframe`,3),Vu()(),is(8,`div`,1)(9,`div`,2),zh(10,`doc-wireframe`,3),Vu(),is(11,`div`,2),zh(12,`doc-wireframe`,3),Vu(),is(13,`div`,2),zh(14,`doc-wireframe`,3),Vu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var $i=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-vertically-divided-example`]],standalone:!1,decls:13,vars:0,consts:[[`sui-grid`,``,`suiDivided`,`vertically divided`],[`suiGridRow`,``,`suiWidth`,`two`],[`suiGridColumn`,``],[`type`,`paragraph`],[`suiGridRow`,``,`suiWidth`,`three`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zh(3,`doc-wireframe`,3),Vu(),is(4,`div`,2),zh(5,`doc-wireframe`,3),Vu()(),is(6,`div`,4)(7,`div`,2),zh(8,`doc-wireframe`,3),Vu(),is(9,`div`,2),zh(10,`doc-wireframe`,3),Vu(),is(11,`div`,2),zh(12,`doc-wireframe`,3),Vu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var Ki=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-celled-example`]],standalone:!1,decls:13,vars:0,consts:[[`sui-grid`,``,`suiCelled`,`celled`],[`suiGridRow`,``],[`suiGridColumn`,``,`suiWidth`,`three`],[`type`,`image`],[`suiGridColumn`,``,`suiWidth`,`thirteen`],[`type`,`paragraph`],[`suiGridColumn`,``,`suiWidth`,`ten`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zh(3,`doc-wireframe`,3),Vu(),is(4,`div`,4),zh(5,`doc-wireframe`,5),Vu()(),is(6,`div`,1)(7,`div`,2),zh(8,`doc-wireframe`,3),Vu(),is(9,`div`,6),zh(10,`doc-wireframe`,5),Vu(),is(11,`div`,2),zh(12,`doc-wireframe`,3),Vu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var Qi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-internally-celled-example`]],standalone:!1,decls:15,vars:0,consts:[[`sui-grid`,``,`suiCelled`,`internally celled`],[`suiGridRow`,``],[`suiGridColumn`,``,`suiWidth`,`three`],[`type`,`image`],[`suiGridColumn`,``,`suiWidth`,`ten`],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zh(3,`doc-wireframe`,3),Vu(),is(4,`div`,4),zh(5,`doc-wireframe`,5),Vu(),is(6,`div`,2),zh(7,`doc-wireframe`,3),Vu()(),is(8,`div`,1)(9,`div`,2),zh(10,`doc-wireframe`,3),Vu(),is(11,`div`,4),zh(12,`doc-wireframe`,5),Vu(),is(13,`div`,2),zh(14,`doc-wireframe`,3),Vu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var Zi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-rows-example`]],standalone:!1,decls:13,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`four`],[`suiGridRow`,``],[`suiGridColumn`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zh(3,`doc-wireframe`,3),Vu(),is(4,`div`,2),zh(5,`doc-wireframe`,3),Vu(),is(6,`div`,2),zh(7,`doc-wireframe`,3),Vu()(),is(8,`div`,1)(9,`div`,2),zh(10,`doc-wireframe`,3),Vu(),is(11,`div`,2),zh(12,`doc-wireframe`,3),Vu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var en=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-columns-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`four`],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,1),zh(4,`doc-wireframe`,2),Vu(),is(5,`div`,1),zh(6,`doc-wireframe`,2),Vu(),is(7,`div`,1),zh(8,`doc-wireframe`,2),Vu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var tn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-floated-example`]],standalone:!1,decls:5,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`three`],[`suiGridColumn`,``,`suiFloated`,`left floated`],[`type`,`paragraph`],[`suiGridColumn`,``,`suiFloated`,`right floated`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,3),zh(4,`doc-wireframe`,2),Vu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var nn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-column-width-example`]],standalone:!1,decls:7,vars:0,consts:[[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`four`],[`type`,`image`],[`suiGridColumn`,``,`suiWidth`,`nine`],[`type`,`paragraph`],[`suiGridColumn`,``,`suiWidth`,`three`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,3),zh(4,`doc-wireframe`,4),Vu(),is(5,`div`,5),zh(6,`doc-wireframe`,2),Vu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var an=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-column-count-example`]],standalone:!1,decls:28,vars:0,consts:[[`sui-grid`,``],[`suiGridRow`,``,`suiWidth`,`four`],[`suiGridColumn`,``],[`type`,`image`],[`suiGridRow`,``,`suiWidth`,`three`],[`suiGridRow`,``,`suiWidth`,`five`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zh(3,`doc-wireframe`,3),Vu(),is(4,`div`,2),zh(5,`doc-wireframe`,3),Vu(),is(6,`div`,2),zh(7,`doc-wireframe`,3),Vu(),is(8,`div`,2),zh(9,`doc-wireframe`,3),Vu()(),is(10,`div`,4)(11,`div`,2),zh(12,`doc-wireframe`,3),Vu(),is(13,`div`,2),zh(14,`doc-wireframe`,3),Vu(),is(15,`div`,2),zh(16,`doc-wireframe`,3),Vu()(),is(17,`div`,5)(18,`div`,2),zh(19,`doc-wireframe`,3),Vu(),is(20,`div`,2),zh(21,`doc-wireframe`,3),Vu(),is(22,`div`,2),zh(23,`doc-wireframe`,3),Vu(),is(24,`div`,2),zh(25,`doc-wireframe`,3),Vu(),is(26,`div`,2),zh(27,`doc-wireframe`,3),Vu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var ln=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-equal-width-example`]],standalone:!1,decls:34,vars:0,consts:[[`sui-grid`,``,`suiEqual`,``],[`suiGridColumn`,``],[`sui-segment`,``],[`suiGridColumn`,``,`suiWidth`,`eight`],[`sui-grid`,``],[`suiGridRow`,``,`suiEqual`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zC(3,`1`),Vu()(),is(4,`div`,3)(5,`div`,2),zC(6,`2`),Vu()(),is(7,`div`,1)(8,`div`,2),zC(9,`3`),Vu()()(),is(10,`div`,4)(11,`div`,5)(12,`div`,1)(13,`div`,2),zC(14,`1`),Vu()(),is(15,`div`,1)(16,`div`,2),zC(17,`2`),Vu()(),is(18,`div`,1)(19,`div`,2),zC(20,`3`),Vu()()(),is(21,`div`,5)(22,`div`,1)(23,`div`,2),zC(24,`1`),Vu()(),is(25,`div`,1)(26,`div`,2),zC(27,`2`),Vu()(),is(28,`div`,1)(29,`div`,2),zC(30,`3`),Vu()(),is(31,`div`,1)(32,`div`,2),zC(33,`4`),Vu()()()())},dependencies:[ze$1,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var dn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-stretched-example`]],standalone:!1,decls:17,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`three`,`suiDivided`,`divided`],[`suiGridRow`,``,`suiStretched`,``],[`suiGridColumn`,``],[`sui-segment`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3),zC(4,`1`),Vu()(),is(5,`div`,2)(6,`div`,3),zC(7,`1`),Vu(),is(8,`div`,3),zC(9,`2`),Vu()(),is(10,`div`,2)(11,`div`,3),zC(12,`1`),Vu(),is(13,`div`,3),zC(14,`2`),Vu(),is(15,`div`,3),zC(16,`3`),Vu()()()())},dependencies:[ze$1,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var rn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-padded-example`]],standalone:!1,decls:21,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`two`,`suiPadded`,`padded`],[`suiGridColumn`,``],[`type`,`paragraph`],[`sui-grid`,``,`suiWidth`,`two`,`suiPadded`,`vertically padded`],[`sui-grid`,``,`suiWidth`,`two`,`suiPadded`,`horizontally padded`]],template:function(l,d){l&1&&(is(0,`p`),zC(1,`The following grid has vertical and horizontal gutters.`),Vu(),is(2,`div`,0)(3,`div`,1),zh(4,`doc-wireframe`,2),Vu(),is(5,`div`,1),zh(6,`doc-wireframe`,2),Vu()(),is(7,`p`),zC(8,`The following grid has vertical gutters.`),Vu(),is(9,`div`,3)(10,`div`,1),zh(11,`doc-wireframe`,2),Vu(),is(12,`div`,1),zh(13,`doc-wireframe`,2),Vu()(),is(14,`p`),zC(15,`The following grid has horizontal gutters.`),Vu(),is(16,`div`,4)(17,`div`,1),zh(18,`doc-wireframe`,2),Vu(),is(19,`div`,1),zh(20,`doc-wireframe`,2),Vu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var mn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-relaxed-example`]],standalone:!1,decls:18,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`four`,`suiRelaxation`,`relaxed`],[`suiGridColumn`,``],[`type`,`image`],[`sui-grid`,``,`suiWidth`,`four`,`suiRelaxation`,`very relaxed`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,1),zh(4,`doc-wireframe`,2),Vu(),is(5,`div`,1),zh(6,`doc-wireframe`,2),Vu(),is(7,`div`,1),zh(8,`doc-wireframe`,2),Vu()(),is(9,`div`,3)(10,`div`,1),zh(11,`doc-wireframe`,2),Vu(),is(12,`div`,1),zh(13,`doc-wireframe`,2),Vu(),is(14,`div`,1),zh(15,`doc-wireframe`,2),Vu(),is(16,`div`,1),zh(17,`doc-wireframe`,2),Vu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var on=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-colored-example`]],standalone:!1,decls:40,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`five`,`suiPadded`,`padded`],[`suiGridColumn`,``,`suiColour`,`red`],[`suiGridColumn`,``,`suiColour`,`orange`],[`suiGridColumn`,``,`suiColour`,`yellow`],[`suiGridColumn`,``,`suiColour`,`olive`],[`suiGridColumn`,``,`suiColour`,`green`],[`suiGridColumn`,``,`suiColour`,`teal`],[`suiGridColumn`,``,`suiColour`,`blue`],[`suiGridColumn`,``,`suiColour`,`violet`],[`suiGridColumn`,``,`suiColour`,`purple`],[`suiGridColumn`,``,`suiColour`,`pink`],[`suiGridColumn`,``,`suiColour`,`brown`],[`suiGridColumn`,``,`suiColour`,`grey`],[`suiGridColumn`,``,`suiColour`,`black`],[`sui-grid`,``,`suiPadded`,`padded`],[`suiGridRow`,``,`suiColour`,`red`],[`suiGridColumn`,``],[`suiGridRow`,``,`suiColour`,`orange`],[`suiGridRow`,``,`suiColour`,`yellow`],[`suiGridRow`,``,`suiColour`,`olive`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` Red `),Vu(),is(3,`div`,2),zC(4,` Orange `),Vu(),is(5,`div`,3),zC(6,` Yellow `),Vu(),is(7,`div`,4),zC(8,` Olive `),Vu(),is(9,`div`,5),zC(10,` Green `),Vu(),is(11,`div`,6),zC(12,` Teal `),Vu(),is(13,`div`,7),zC(14,` Blue `),Vu(),is(15,`div`,8),zC(16,` Violet `),Vu(),is(17,`div`,9),zC(18,` Purple `),Vu(),is(19,`div`,10),zC(20,` Pink `),Vu(),is(21,`div`,11),zC(22,` Brown `),Vu(),is(23,`div`,12),zC(24,` Grey `),Vu(),is(25,`div`,13),zC(26,` Black `),Vu()(),is(27,`div`,14)(28,`div`,15)(29,`div`,16),zC(30,` Red `),Vu()(),is(31,`div`,17)(32,`div`,16),zC(33,` Orange `),Vu()(),is(34,`div`,18)(35,`div`,16),zC(36,` Yellow `),Vu()(),is(37,`div`,19)(38,`div`,16),zC(39,` Olive `),Vu()()())},dependencies:[mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var sn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-centered-example`]],standalone:!1,decls:10,vars:0,consts:[[`sui-grid`,``,`suiCentered`,``,`suiWidth`,`two`],[`suiGridColumn`,``],[`type`,`image`],[`suiGridRow`,``,`suiCentered`,``,`suiWidth`,`four`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,3)(4,`div`,1),zh(5,`doc-wireframe`,2),Vu(),is(6,`div`,1),zh(7,`doc-wireframe`,2),Vu(),is(8,`div`,1),zh(9,`doc-wireframe`,2),Vu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var cn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-text-alignment-example`]],standalone:!1,decls:26,vars:0,consts:[[`sui-grid`,``,`suiAlignment`,`center aligned`,`suiWidth`,`three`],[`suiGridRow`,``],[`suiGridColumn`,``],[`sui-segment`,``],[`sui-grid`,``],[`suiGridRow`,``,`suiWidth`,`three`],[`suiGridColumn`,``,`suiAlignment`,`left aligned`],[`suiGridColumn`,``,`suiAlignment`,`center aligned`],[`suiGridColumn`,``,`suiAlignment`,`right aligned`],[`suiGridColumn`,``,`suiAlignment`,`justified`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3),zC(4,`Cats`),Vu()(),is(5,`div`,2)(6,`div`,3),zC(7,`Dogs`),Vu()(),is(8,`div`,2)(9,`div`,3),zC(10,`Monkeys`),Vu()()()(),is(11,`div`,4)(12,`div`,5)(13,`div`,6)(14,`div`,3),zC(15,`Left aligned column`),Vu()(),is(16,`div`,7)(17,`div`,3),zC(18,`Center aligned column`),Vu()(),is(19,`div`,8)(20,`div`,3),zC(21,`Right aligned column`),Vu()()(),is(22,`div`,1)(23,`div`,9)(24,`div`,3),zC(25,`Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other.`),Vu()()()())},dependencies:[ze$1,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var pn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-vertical-alignment-example`]],standalone:!1,decls:31,vars:0,consts:[[`sui-grid`,``,`suiVerticalAlignment`,`middle aligned`,`suiWidth`,`four`],[`suiGridColumn`,``],[`type`,`image`],[`sui-grid`,``,`suiWidth`,`four`],[`suiGridRow`,``,`suiVerticalAlignment`,`bottom aligned`],[`suiGridRow`,``],[`suiGridColumn`,``,`suiVerticalAlignment`,`top aligned`],[`suiGridColumn`,``,`suiVerticalAlignment`,`middle aligned`],[`suiGridColumn`,``,`suiVerticalAlignment`,`bottom aligned`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,1),zh(4,`doc-wireframe`,2)(5,`doc-wireframe`,2),Vu(),is(6,`div`,1),zh(7,`doc-wireframe`,2),Vu(),is(8,`div`,1),zh(9,`doc-wireframe`,2),Vu()(),is(10,`div`,3)(11,`div`,4)(12,`div`,1),zh(13,`doc-wireframe`,2),Vu(),is(14,`div`,1),zh(15,`doc-wireframe`,2)(16,`doc-wireframe`,2),Vu(),is(17,`div`,1),zh(18,`doc-wireframe`,2),Vu(),is(19,`div`,1),zh(20,`doc-wireframe`,2),Vu()(),is(21,`div`,5)(22,`div`,6),zh(23,`doc-wireframe`,2),Vu(),is(24,`div`,1),zh(25,`doc-wireframe`,2)(26,`doc-wireframe`,2),Vu(),is(27,`div`,7),zh(28,`doc-wireframe`,2),Vu(),is(29,`div`,8),zh(30,`doc-wireframe`,2),Vu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var un=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-doubling-example`]],standalone:!1,decls:11,vars:0,consts:[[`sui-grid`,``,`suiDoubling`,``,`suiWidth`,`five`],[`suiGridColumn`,``],[`type`,`image`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,1),zh(4,`doc-wireframe`,2),Vu(),is(5,`div`,1),zh(6,`doc-wireframe`,2),Vu(),is(7,`div`,1),zh(8,`doc-wireframe`,2),Vu(),is(9,`div`,1),zh(10,`doc-wireframe`,2),Vu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var vn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-stackable-example`]],standalone:!1,decls:7,vars:0,consts:[[`sui-grid`,``,`suiStackable`,``,`suiWidth`,`two`],[`suiGridColumn`,``],[`sui-segment`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zh(3,`doc-wireframe`,3),Vu()(),is(4,`div`,1)(5,`div`,2),zh(6,`doc-wireframe`,3),Vu()()())},dependencies:[Dr,ze$1,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var xn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-reversed-example`]],standalone:!1,decls:28,vars:2,consts:[[`sui-grid`,``,`suiWidth`,`four`,`suiDivided`,`divided`,`suiReversed`,`computer reversed`],[`suiGridRow`,``],[`suiGridColumn`,``],[`sui-grid`,``,`suiWidth`,`three`,`suiDivided`,`divided`],[`suiGridRow`,``,3,`suiReversed`],[`sui-grid`,``,`suiWidth`,`one`,`suiDivided`,`vertically divided`,`suiReversed`,`computer vertically reversed`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zC(3,` Computer First `),Vu(),is(4,`div`,2),zC(5,` Computer Second `),Vu(),is(6,`div`,2),zC(7,` Computer Third `),Vu(),is(8,`div`,2),zC(9,` Computer Fourth `),Vu()()(),is(10,`div`,3)(11,`div`,4)(12,`div`,2),zC(13,` Tablet & Mobile First `),Vu(),is(14,`div`,2),zC(15,` Tablet & Mobile Second `),Vu(),is(16,`div`,2),zC(17,` Tablet & Mobile Third `),Vu()()(),is(18,`div`,5)(19,`div`,1)(20,`div`,2),zC(21,` Computer Row 1 `),Vu()(),is(22,`div`,1)(23,`div`,2),zC(24,` Computer Row 2 `),Vu()(),is(25,`div`,1)(26,`div`,2),zC(27,` Computer Row 3 `),Vu()()()),l&2&&(KD(11),Gh(`suiReversed`,XC(1,ro)))},dependencies:[mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var Sn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-device-visibility-example`]],standalone:!1,decls:39,vars:0,consts:[[`sui-grid`,``],[`suiGridRow`,``,`suiWidth`,`two`],[`suiGridColumn`,``,`suiDeviceVisibility`,`large screen only`],[`sui-segment`,``],[`suiGridColumn`,``,`suiDeviceVisibility`,`widescreen only`],[`suiGridRow`,``,`suiWidth`,`two`,`suiDeviceVisibility`,`mobile only`],[`suiGridColumn`,``],[`suiGridRow`,``,`suiWidth`,`two`,`suiDeviceVisibility`,`tablet only`],[`suiGridRow`,``,`suiWidth`,`three`,`suiDeviceVisibility`,`computer only`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3),zC(4,`Large Screen`),Vu()(),is(5,`div`,4)(6,`div`,3),zC(7,`Widescreen`),Vu()()(),is(8,`div`,5)(9,`div`,6)(10,`div`,3),zC(11,`Mobile`),Vu()(),is(12,`div`,6)(13,`div`,3),zC(14,`Mobile`),Vu()()(),is(15,`div`,7)(16,`div`,6)(17,`div`,3),zC(18,`Tablet`),Vu()(),is(19,`div`,6)(20,`div`,3),zC(21,`Tablet`),Vu()()(),is(22,`div`,8)(23,`div`,6)(24,`div`,3),zC(25,`Computer`),Vu()(),is(26,`div`,6)(27,`div`,3),zC(28,`Computer`),Vu()(),is(29,`div`,6)(30,`div`,3),zC(31,`Computer`),Vu()()(),is(32,`div`,1)(33,`div`,6)(34,`div`,3),zC(35,`All Sizes`),Vu()(),is(36,`div`,6)(37,`div`,3),zC(38,`All Sizes`),Vu()()()())},dependencies:[ze$1,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var hn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid-responsive-width-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-grid`,``],[`suiGridColumn`,``,`suiMobileWidth`,`sixteen`,`suiTabletWidth`,`eight`,`suiComputerWidth`,`four`],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`doc-wireframe`,2),Vu(),is(3,`div`,1),zh(4,`doc-wireframe`,2),Vu(),is(5,`div`,1),zh(6,`doc-wireframe`,2),Vu(),is(7,`div`,1),zh(8,`doc-wireframe`,2),Vu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();function oo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-grid-example`),Vu())}function so(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-divided-example`),Vu())}function co(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-vertically-divided-example`),Vu())}function po(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-celled-example`),Vu())}function uo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-internally-celled-example`),Vu())}function vo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-rows-example`),Vu())}function xo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-columns-example`),Vu())}function So(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-floated-example`),Vu())}function ho(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-column-width-example`),Vu())}function fo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-column-count-example`),Vu())}function Eo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-equal-width-example`),Vu())}function go(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-stretched-example`),Vu())}function bo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-padded-example`),Vu())}function yo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-relaxed-example`),Vu())}function Co(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-colored-example`),Vu())}function Fo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-centered-example`),Vu())}function Do(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-text-alignment-example`),Vu())}function Mo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-vertical-alignment-example`),Vu())}function _o(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-doubling-example`),Vu())}function wo(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-stackable-example`),Vu())}function To(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-reversed-example`),Vu())}function Io(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-device-visibility-example`),Vu())}function Ao(n,s){n&1&&(is(0,`div`,9),zh(1,`doc-grid-responsive-width-example`),Vu())}function ko(n,s){if(n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Grid`),Vu(),is(6,`p`),zC(7,`A basic grid`),Vu(),is(8,`div`,5),zC(9,` Grids divide horizontal space into `),is(10,`b`),zC(11,`16 columns`),Vu(),zC(12,`. Four `),is(13,`code`),zC(14,`four wide`),Vu(),zC(15,` columns fit in a single row, `),is(16,`code`),zC(17,`16 / 4 = 4`),Vu(),zC(18,`. `),Vu(),jh(19,oo,2,0,`ng-template`,6),Vu(),is(20,`doc-code-sample`,3)(21,`h3`,4),zC(22,` Divided `),is(23,`div`,7),zC(24,`Requires Rows`),Vu()(),is(25,`p`),zC(26,`A grid can have dividers between its columns`),Vu(),jh(27,so,2,0,`ng-template`,6),Vu(),is(28,`doc-code-sample`,3)(29,`h3`,4),zC(30,` Vertically Divided `),is(31,`div`,7),zC(32,`Requires Rows`),Vu()(),is(33,`p`),zC(34,`A grid can have dividers between rows`),Vu(),jh(35,co,2,0,`ng-template`,6),Vu(),is(36,`doc-code-sample`,3)(37,`h3`,4),zC(38,` Celled `),is(39,`div`,7),zC(40,`Requires Rows`),Vu()(),is(41,`p`),zC(42,`A grid can have rows divided into cells`),Vu(),jh(43,po,2,0,`ng-template`,6),Vu(),is(44,`doc-code-sample`,3)(45,`h3`,4),zC(46,` Internally Celled `),is(47,`div`,7),zC(48,`Requires Rows`),Vu()(),is(49,`p`),zC(50,`A grid can have rows divisions only between internal rows`),Vu(),jh(51,uo,2,0,`ng-template`,6),Vu(),zh(52,`br`),is(53,`h2`,2),zC(54,`Content`),Vu(),is(55,`doc-code-sample`,3)(56,`h3`,4),zC(57,`Rows`),Vu(),is(58,`p`),zC(59,`A row is a horizontal grouping of columns`),Vu(),is(60,`div`,5),zC(61,` Row wrappers automatically clear previous columns and allow you to apply variations to a group of columns. `),Vu(),jh(62,vo,2,0,`ng-template`,6),Vu(),is(63,`doc-code-sample`,3)(64,`h3`,4),zC(65,`Columns`),Vu(),is(66,`p`),zC(67,`Columns each contain gutters giving them equal spacing from other columns`),Vu(),is(68,`div`,8),zC(69,` Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns. `),Vu(),jh(70,xo,2,0,`ng-template`,6),Vu(),zh(71,`br`),is(72,`h2`,2),zC(73,`Variations`),Vu(),is(74,`doc-code-sample`,3)(75,`h3`,4),zC(76,`Floated`),Vu(),is(77,`p`),zC(78,`A column can sit flush against the left or right edge of a row`),Vu(),jh(79,So,2,0,`ng-template`,6),Vu(),is(80,`doc-code-sample`,3)(81,`h3`,4),zC(82,`Column Width`),Vu(),is(83,`p`),zC(84,`A column can vary in width taking up more than a single grid column`),Vu(),is(85,`div`,5),zC(86,` If a column cannot fit in a row it will automatically flow to the next row. `),Vu(),jh(87,ho,2,0,`ng-template`,6),Vu(),is(88,`doc-code-sample`,3)(89,`h3`,4),zC(90,`Column Count`),Vu(),is(91,`p`),zC(92,`A grid can have a different number of columns per row`),Vu(),jh(93,fo,2,0,`ng-template`,6),Vu(),is(94,`doc-code-sample`,3)(95,`h3`,4),zC(96,`Equal Width`),Vu(),is(97,`p`),zC(98,`A grid can automatically resize all elements to split the available width evenly`),Vu(),jh(99,Eo,2,0,`ng-template`,6),Vu(),is(100,`doc-code-sample`,3)(101,`h3`,4),zC(102,`Stretched`),Vu(),is(103,`p`),zC(104,`A row can stretch its contents to take up the entire column height`),Vu(),jh(105,go,2,0,`ng-template`,6),Vu(),is(106,`doc-code-sample`,3)(107,`h3`,4),zC(108,`Padded`),Vu(),is(109,`p`),zC(110,`A grid can preserve its vertical and horizontal gutters on first and last columns`),Vu(),jh(111,bo,2,0,`ng-template`,6),Vu(),is(112,`doc-code-sample`,3)(113,`h3`,4),zC(114,`Relaxed`),Vu(),is(115,`p`),zC(116,`A grid can increase its gutters to allow for more negative space`),Vu(),jh(117,yo,2,0,`ng-template`,6),Vu(),is(118,`doc-code-sample`,3)(119,`h3`,4),zC(120,`Colored`),Vu(),is(121,`p`),zC(122,`A row or column can be colored`),Vu(),is(123,`div`,8),zC(124,` Colored rows or columns should be used with a `),is(125,`code`),zC(126,`padded`),Vu(),zC(127,` grid, which does not include negative margins. `),Vu(),jh(128,Co,2,0,`ng-template`,6),Vu(),is(129,`doc-code-sample`,3)(130,`h3`,4),zC(131,`Centered`),Vu(),is(132,`p`),zC(133,`A grid can have its columns centered`),Vu(),jh(134,Fo,2,0,`ng-template`,6),Vu(),is(135,`doc-code-sample`,3)(136,`h3`,4),zC(137,`Text Alignment`),Vu(),is(138,`p`),zC(139,`A grid, row, or column can specify its text alignment`),Vu(),jh(140,Do,2,0,`ng-template`,6),Vu(),is(141,`doc-code-sample`,3)(142,`h3`,4),zC(143,`Vertical Alignment`),Vu(),is(144,`p`),zC(145,`A grid, row, or column can specify its vertical alignment to have all its columns vertically centered`),Vu(),is(146,`div`,5),zC(147,` Use `),is(148,`code`),zC(149,`suiVerticalAlignment`),Vu(),zC(150,` when you need to combine a vertical alignment with a text alignment set through `),is(151,`code`),zC(152,`suiAlignment`),Vu(),zC(153,`. `),Vu(),jh(154,Mo,2,0,`ng-template`,6),Vu(),zh(155,`br`),is(156,`h2`,2),zC(157,`Responsive Variations`),Vu(),is(158,`doc-code-sample`,3)(159,`h3`,4),zC(160,`Doubling`),Vu(),is(161,`p`),zC(162,`A grid can double its column width on tablet and mobile sizes`),Vu(),is(163,`div`,5),zC(164,` A grid will round its columns to the closest reasonable value when doubling, for example a `),is(165,`code`),zC(166,`five column grid`),Vu(),zC(167,` will use `),is(168,`code`),zC(169,`2 mobile, 3 tablet, 5 desktop`),Vu(),zC(170,`. To force 1 column on mobile you can add `),is(171,`code`),zC(172,`suiStackable`),Vu(),zC(173,`. `),Vu(),jh(174,_o,2,0,`ng-template`,6),Vu(),is(175,`doc-code-sample`,3)(176,`h3`,4),zC(177,`Stackable`),Vu(),is(178,`p`),zC(179,`A grid can have its columns stack on-top of each other after reaching mobile breakpoints`),Vu(),is(180,`div`,5),zC(181,` To see a grid stack, try resizing your browser to a small width. `),Vu(),jh(182,wo,2,0,`ng-template`,6),Vu(),is(183,`doc-code-sample`,3)(184,`h3`,4),zC(185,`Reversed`),Vu(),is(186,`p`),zC(187,`A grid or row can specify that its columns should reverse order at different device sizes`),Vu(),is(188,`div`,5),zC(189,` Reversed grids are compatible with `),is(190,`code`),zC(191,`divided`),Vu(),zC(192,` grids and other complex grid types. Bind an array to `),is(193,`code`),zC(194,`suiReversed`),Vu(),zC(195,` to reverse on more than one device. `),Vu(),jh(196,To,2,0,`ng-template`,6),Vu(),is(197,`doc-code-sample`,3)(198,`h3`,4),zC(199,`Device Visibility`),Vu(),is(200,`p`),zC(201,`A column or row can appear only for a specific device, or screen sizes`),Vu(),is(202,`div`,5),zC(203,` See the container documentation for information on breakpoint calculations. `),Vu(),jh(204,Io,2,0,`ng-template`,6),Vu(),is(205,`doc-code-sample`,3)(206,`h3`,4),zC(207,`Responsive Width`),Vu(),is(208,`p`),zC(209,`A column can specify a width for a specific device`),Vu(),is(210,`div`,8),zC(211,` It's recommended to use a responsive pattern like `),is(212,`code`),zC(213,`doubling`),Vu(),zC(214,` or `),is(215,`code`),zC(216,`stackable`),Vu(),zC(217,` to reduce complexity when designing responsively, however in some circumstances specifying exact widths for screen sizes may be necessary. `),Vu(),jh(218,Ao,2,0,`ng-template`,6),Vu()()),n&2){let a=pC();KD(3),Gh(`templateCode`,a.snippetGrid),KD(17),Gh(`templateCode`,a.snippetDivided),KD(8),Gh(`templateCode`,a.snippetVerticallyDivided),KD(8),Gh(`templateCode`,a.snippetCelled),KD(8),Gh(`templateCode`,a.snippetInternallyCelled),KD(11),Gh(`templateCode`,a.snippetRows),KD(8),Gh(`templateCode`,a.snippetColumns),KD(11),Gh(`templateCode`,a.snippetFloated),KD(6),Gh(`templateCode`,a.snippetColumnWidth),KD(8),Gh(`templateCode`,a.snippetColumnCount),KD(6),Gh(`templateCode`,a.snippetEqualWidth),KD(6),Gh(`templateCode`,a.snippetStretched),KD(6),Gh(`templateCode`,a.snippetPadded),KD(6),Gh(`templateCode`,a.snippetRelaxed),KD(6),Gh(`templateCode`,a.snippetColored),KD(11),Gh(`templateCode`,a.snippetCentered),KD(6),Gh(`templateCode`,a.snippetTextAlignment),KD(6),Gh(`templateCode`,a.snippetVerticalAlignment),KD(17),Gh(`templateCode`,a.snippetDoubling),KD(17),Gh(`templateCode`,a.snippetStackable),KD(8),Gh(`templateCode`,a.snippetReversed),KD(14),Gh(`templateCode`,a.snippetDeviceVisibility),KD(8),Gh(`templateCode`,a.snippetResponsiveWidth)}}function Bo(n,s){n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`sui-grid`),Vu(),is(3,`h4`,4),zC(4,`Properties`),Vu(),is(5,`table`,10)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is(10,`th`),zC(11,`Description`),Vu(),is(12,`th`),zC(13,`Type`),Vu(),is(14,`th`),zC(15,`Default`),Vu()()(),is(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiWidth`),Vu(),is(20,`td`),zC(21,` Set the number of columns in the grid. Allowed values are `),is(22,`span`,11),zC(23,`'one'`),Vu(),zC(24,` through `),is(25,`span`,11),zC(26,`'sixteen'`),Vu(),zC(27,` | `),is(28,`span`,11),zC(29,`null`),Vu()(),is(30,`td`)(31,`div`,12),zC(32,` string `),Vu()(),is(33,`td`)(34,`div`,13),zC(35,` null `),Vu()()(),is(36,`tr`)(37,`td`),zC(38,`suiAlignment`),Vu(),is(39,`td`),zC(40,` Set the text alignment of the grid. Allowed values are `),is(41,`span`,11),zC(42,`'left aligned'`),Vu(),zC(43,` | `),is(44,`span`,11),zC(45,`'center aligned'`),Vu(),zC(46,` | `),is(47,`span`,11),zC(48,`'right aligned'`),Vu(),zC(49,` | `),is(50,`span`,11),zC(51,`'justified'`),Vu(),zC(52,` | `),is(53,`span`,11),zC(54,`null`),Vu()(),is(55,`td`)(56,`div`,12),zC(57,` string `),Vu()(),is(58,`td`)(59,`div`,13),zC(60,` null `),Vu()()(),is(61,`tr`)(62,`td`),zC(63,`suiVerticalAlignment`),Vu(),is(64,`td`),zC(65,` Set the vertical alignment of the grid. Allowed values are `),is(66,`span`,11),zC(67,`'top aligned'`),Vu(),zC(68,` | `),is(69,`span`,11),zC(70,`'middle aligned'`),Vu(),zC(71,` | `),is(72,`span`,11),zC(73,`'bottom aligned'`),Vu(),zC(74,` | `),is(75,`span`,11),zC(76,`null`),Vu()(),is(77,`td`)(78,`div`,12),zC(79,` string `),Vu()(),is(80,`td`)(81,`div`,13),zC(82,` null `),Vu()()(),is(83,`tr`)(84,`td`),zC(85,`suiDivided`),Vu(),is(86,`td`),zC(87,` Set dividers between columns or rows. Allowed values are `),is(88,`span`,11),zC(89,`'divided'`),Vu(),zC(90,` | `),is(91,`span`,11),zC(92,`'vertically divided'`),Vu(),zC(93,` | `),is(94,`span`,11),zC(95,`null`),Vu()(),is(96,`td`)(97,`div`,12),zC(98,` string `),Vu()(),is(99,`td`)(100,`div`,13),zC(101,` null `),Vu()()(),is(102,`tr`)(103,`td`),zC(104,`suiCelled`),Vu(),is(105,`td`),zC(106,` Divide rows into cells. Allowed values are `),is(107,`span`,11),zC(108,`'celled'`),Vu(),zC(109,` | `),is(110,`span`,11),zC(111,`'internally celled'`),Vu(),zC(112,` | `),is(113,`span`,11),zC(114,`null`),Vu()(),is(115,`td`)(116,`div`,12),zC(117,` string `),Vu()(),is(118,`td`)(119,`div`,13),zC(120,` null `),Vu()()(),is(121,`tr`)(122,`td`),zC(123,`suiPadded`),Vu(),is(124,`td`),zC(125,` Preserve gutters on first and last columns. Allowed values are `),is(126,`span`,11),zC(127,`'padded'`),Vu(),zC(128,` | `),is(129,`span`,11),zC(130,`'vertically padded'`),Vu(),zC(131,` | `),is(132,`span`,11),zC(133,`'horizontally padded'`),Vu(),zC(134,` | `),is(135,`span`,11),zC(136,`null`),Vu()(),is(137,`td`)(138,`div`,12),zC(139,` string `),Vu()(),is(140,`td`)(141,`div`,13),zC(142,` null `),Vu()()(),is(143,`tr`)(144,`td`),zC(145,`suiRelaxation`),Vu(),is(146,`td`),zC(147,` Increase the size of the gutters. Allowed values are `),is(148,`span`,11),zC(149,`'relaxed'`),Vu(),zC(150,` | `),is(151,`span`,11),zC(152,`'very relaxed'`),Vu(),zC(153,` | `),is(154,`span`,11),zC(155,`null`),Vu()(),is(156,`td`)(157,`div`,12),zC(158,` string `),Vu()(),is(159,`td`)(160,`div`,13),zC(161,` null `),Vu()()(),is(162,`tr`)(163,`td`),zC(164,`suiReversed`),Vu(),is(165,`td`),zC(166,` Reverse the order of columns or rows by device. Accepts one value or an array of `),is(167,`span`,11),zC(168,`'computer reversed'`),Vu(),zC(169,` | `),is(170,`span`,11),zC(171,`'tablet reversed'`),Vu(),zC(172,` | `),is(173,`span`,11),zC(174,`'mobile reversed'`),Vu(),zC(175,` | `),is(176,`span`,11),zC(177,`'computer vertically reversed'`),Vu(),zC(178,` | `),is(179,`span`,11),zC(180,`'tablet vertically reversed'`),Vu(),zC(181,` | `),is(182,`span`,11),zC(183,`'mobile vertically reversed'`),Vu(),zC(184,` | `),is(185,`span`,11),zC(186,`null`),Vu()(),is(187,`td`)(188,`div`,12),zC(189,` string | string[] `),Vu()(),is(190,`td`)(191,`div`,13),zC(192,` null `),Vu()()(),is(193,`tr`)(194,`td`),zC(195,`suiEqual`),Vu(),is(196,`td`),zC(197,` Set whether columns should automatically split the available width evenly `),Vu(),is(198,`td`)(199,`div`,12),zC(200,` boolean `),Vu()(),is(201,`td`)(202,`div`,13),zC(203,` false `),Vu()()(),is(204,`tr`)(205,`td`),zC(206,`suiCentered`),Vu(),is(207,`td`),zC(208,` Set whether the columns should be centered `),Vu(),is(209,`td`)(210,`div`,12),zC(211,` boolean `),Vu()(),is(212,`td`)(213,`div`,13),zC(214,` false `),Vu()()(),is(215,`tr`)(216,`td`),zC(217,`suiStretched`),Vu(),is(218,`td`),zC(219,` Set whether columns should stretch to take up the entire row height `),Vu(),is(220,`td`)(221,`div`,12),zC(222,` boolean `),Vu()(),is(223,`td`)(224,`div`,13),zC(225,` false `),Vu()()(),is(226,`tr`)(227,`td`),zC(228,`suiStackable`),Vu(),is(229,`td`),zC(230,` Set whether columns should stack on mobile devices `),Vu(),is(231,`td`)(232,`div`,12),zC(233,` boolean `),Vu()(),is(234,`td`)(235,`div`,13),zC(236,` false `),Vu()()(),is(237,`tr`)(238,`td`),zC(239,`suiDoubling`),Vu(),is(240,`td`),zC(241,` Set whether column widths should double for each device jump `),Vu(),is(242,`td`)(243,`div`,12),zC(244,` boolean `),Vu()(),is(245,`td`)(246,`div`,13),zC(247,` false `),Vu()()(),is(248,`tr`)(249,`td`),zC(250,`suiContainer`),Vu(),is(251,`td`),zC(252,` Set whether the grid should also be a responsive container `),Vu(),is(253,`td`)(254,`div`,12),zC(255,` boolean `),Vu()(),is(256,`td`)(257,`div`,13),zC(258,` false `),Vu()()()()(),is(259,`h2`,2),zC(260,`suiGridRow`),Vu(),is(261,`h4`,4),zC(262,`Properties`),Vu(),is(263,`table`,10)(264,`thead`)(265,`tr`)(266,`th`),zC(267,`Property`),Vu(),is(268,`th`),zC(269,`Description`),Vu(),is(270,`th`),zC(271,`Type`),Vu(),is(272,`th`),zC(273,`Default`),Vu()()(),is(274,`tbody`)(275,`tr`)(276,`td`),zC(277,`suiWidth`),Vu(),is(278,`td`),zC(279,` Set the number of columns in the row. Allowed values are `),is(280,`span`,11),zC(281,`'one'`),Vu(),zC(282,` through `),is(283,`span`,11),zC(284,`'sixteen'`),Vu(),zC(285,` | `),is(286,`span`,11),zC(287,`null`),Vu()(),is(288,`td`)(289,`div`,12),zC(290,` string `),Vu()(),is(291,`td`)(292,`div`,13),zC(293,` null `),Vu()()(),is(294,`tr`)(295,`td`),zC(296,`suiAlignment`),Vu(),is(297,`td`),zC(298,` Set the text (or vertical) alignment of the row. Allowed values are `),is(299,`span`,11),zC(300,`'left aligned'`),Vu(),zC(301,` | `),is(302,`span`,11),zC(303,`'center aligned'`),Vu(),zC(304,` | `),is(305,`span`,11),zC(306,`'right aligned'`),Vu(),zC(307,` | `),is(308,`span`,11),zC(309,`'justified'`),Vu(),zC(310,` | `),is(311,`span`,11),zC(312,`'top aligned'`),Vu(),zC(313,` | `),is(314,`span`,11),zC(315,`'middle aligned'`),Vu(),zC(316,` | `),is(317,`span`,11),zC(318,`'bottom aligned'`),Vu(),zC(319,` | `),is(320,`span`,11),zC(321,`null`),Vu()(),is(322,`td`)(323,`div`,12),zC(324,` string `),Vu()(),is(325,`td`)(326,`div`,13),zC(327,` null `),Vu()()(),is(328,`tr`)(329,`td`),zC(330,`suiVerticalAlignment`),Vu(),is(331,`td`),zC(332,` Set the vertical alignment of the row. Allowed values are `),is(333,`span`,11),zC(334,`'top aligned'`),Vu(),zC(335,` | `),is(336,`span`,11),zC(337,`'middle aligned'`),Vu(),zC(338,` | `),is(339,`span`,11),zC(340,`'bottom aligned'`),Vu(),zC(341,` | `),is(342,`span`,11),zC(343,`null`),Vu()(),is(344,`td`)(345,`div`,12),zC(346,` string `),Vu()(),is(347,`td`)(348,`div`,13),zC(349,` null `),Vu()()(),is(350,`tr`)(351,`td`),zC(352,`suiColour`),Vu(),is(353,`td`),zC(354,` Set the background colour of the row. Allowed values are `),is(355,`span`,11),zC(356,`'red'`),Vu(),zC(357,` | `),is(358,`span`,11),zC(359,`'orange'`),Vu(),zC(360,` | `),is(361,`span`,11),zC(362,`'yellow'`),Vu(),zC(363,` | `),is(364,`span`,11),zC(365,`'olive'`),Vu(),zC(366,` | `),is(367,`span`,11),zC(368,`'green'`),Vu(),zC(369,` | `),is(370,`span`,11),zC(371,`'teal'`),Vu(),zC(372,` | `),is(373,`span`,11),zC(374,`'blue'`),Vu(),zC(375,` | `),is(376,`span`,11),zC(377,`'violet'`),Vu(),zC(378,` | `),is(379,`span`,11),zC(380,`'purple'`),Vu(),zC(381,` | `),is(382,`span`,11),zC(383,`'pink'`),Vu(),zC(384,` | `),is(385,`span`,11),zC(386,`'brown'`),Vu(),zC(387,` | `),is(388,`span`,11),zC(389,`'grey'`),Vu(),zC(390,` | `),is(391,`span`,11),zC(392,`'black'`),Vu(),zC(393,` | `),is(394,`span`,11),zC(395,`null`),Vu()(),is(396,`td`)(397,`div`,12),zC(398,` string `),Vu()(),is(399,`td`)(400,`div`,13),zC(401,` null `),Vu()()(),is(402,`tr`)(403,`td`),zC(404,`suiReversed`),Vu(),is(405,`td`),zC(406,` Reverse the order of columns by device. Accepts one value or an array of `),is(407,`span`,11),zC(408,`'computer reversed'`),Vu(),zC(409,` | `),is(410,`span`,11),zC(411,`'tablet reversed'`),Vu(),zC(412,` | `),is(413,`span`,11),zC(414,`'mobile reversed'`),Vu(),zC(415,` | `),is(416,`span`,11),zC(417,`'computer vertically reversed'`),Vu(),zC(418,` | `),is(419,`span`,11),zC(420,`'tablet vertically reversed'`),Vu(),zC(421,` | `),is(422,`span`,11),zC(423,`'mobile vertically reversed'`),Vu(),zC(424,` | `),is(425,`span`,11),zC(426,`null`),Vu()(),is(427,`td`)(428,`div`,12),zC(429,` string | string[] `),Vu()(),is(430,`td`)(431,`div`,13),zC(432,` null `),Vu()()(),is(433,`tr`)(434,`td`),zC(435,`suiDeviceVisibility`),Vu(),is(436,`td`),zC(437,` Only show the row on specific devices. Allowed values are `),is(438,`span`,11),zC(439,`'mobile only'`),Vu(),zC(440,` | `),is(441,`span`,11),zC(442,`'tablet only'`),Vu(),zC(443,` | `),is(444,`span`,11),zC(445,`'computer only'`),Vu(),zC(446,` | `),is(447,`span`,11),zC(448,`'large screen only'`),Vu(),zC(449,` | `),is(450,`span`,11),zC(451,`'widescreen only'`),Vu(),zC(452,` | `),is(453,`span`,11),zC(454,`'tablet mobile only'`),Vu(),zC(455,` | `),is(456,`span`,11),zC(457,`null`),Vu()(),is(458,`td`)(459,`div`,12),zC(460,` string `),Vu()(),is(461,`td`)(462,`div`,13),zC(463,` null `),Vu()()(),is(464,`tr`)(465,`td`),zC(466,`suiEqual`),Vu(),is(467,`td`),zC(468,` Set whether columns should automatically split the available width evenly `),Vu(),is(469,`td`)(470,`div`,12),zC(471,` boolean `),Vu()(),is(472,`td`)(473,`div`,13),zC(474,` false `),Vu()()(),is(475,`tr`)(476,`td`),zC(477,`suiCentered`),Vu(),is(478,`td`),zC(479,` Set whether the columns should be centered `),Vu(),is(480,`td`)(481,`div`,12),zC(482,` boolean `),Vu()(),is(483,`td`)(484,`div`,13),zC(485,` false `),Vu()()(),is(486,`tr`)(487,`td`),zC(488,`suiStretched`),Vu(),is(489,`td`),zC(490,` Set whether columns should stretch to take up the entire row height `),Vu(),is(491,`td`)(492,`div`,12),zC(493,` boolean `),Vu()(),is(494,`td`)(495,`div`,13),zC(496,` false `),Vu()()(),is(497,`tr`)(498,`td`),zC(499,`suiDoubling`),Vu(),is(500,`td`),zC(501,` Set whether column widths should double for each device jump `),Vu(),is(502,`td`)(503,`div`,12),zC(504,` boolean `),Vu()(),is(505,`td`)(506,`div`,13),zC(507,` false `),Vu()()()()(),is(508,`h2`,2),zC(509,`suiGridColumn`),Vu(),is(510,`h4`,4),zC(511,`Properties`),Vu(),is(512,`table`,10)(513,`thead`)(514,`tr`)(515,`th`),zC(516,`Property`),Vu(),is(517,`th`),zC(518,`Description`),Vu(),is(519,`th`),zC(520,`Type`),Vu(),is(521,`th`),zC(522,`Default`),Vu()()(),is(523,`tbody`)(524,`tr`)(525,`td`),zC(526,`suiWidth`),Vu(),is(527,`td`),zC(528,` Set the width of the column. Allowed values are `),is(529,`span`,11),zC(530,`'one'`),Vu(),zC(531,` through `),is(532,`span`,11),zC(533,`'sixteen'`),Vu(),zC(534,` | `),is(535,`span`,11),zC(536,`null`),Vu()(),is(537,`td`)(538,`div`,12),zC(539,` string `),Vu()(),is(540,`td`)(541,`div`,13),zC(542,` null `),Vu()()(),is(543,`tr`)(544,`td`),zC(545,`suiMobileWidth`),Vu(),is(546,`td`),zC(547,` Set the width of the column on mobile devices. Allowed values are `),is(548,`span`,11),zC(549,`'one'`),Vu(),zC(550,` through `),is(551,`span`,11),zC(552,`'sixteen'`),Vu(),zC(553,` | `),is(554,`span`,11),zC(555,`null`),Vu()(),is(556,`td`)(557,`div`,12),zC(558,` string `),Vu()(),is(559,`td`)(560,`div`,13),zC(561,` null `),Vu()()(),is(562,`tr`)(563,`td`),zC(564,`suiTabletWidth`),Vu(),is(565,`td`),zC(566,` Set the width of the column on tablets. Allowed values are `),is(567,`span`,11),zC(568,`'one'`),Vu(),zC(569,` through `),is(570,`span`,11),zC(571,`'sixteen'`),Vu(),zC(572,` | `),is(573,`span`,11),zC(574,`null`),Vu()(),is(575,`td`)(576,`div`,12),zC(577,` string `),Vu()(),is(578,`td`)(579,`div`,13),zC(580,` null `),Vu()()(),is(581,`tr`)(582,`td`),zC(583,`suiComputerWidth`),Vu(),is(584,`td`),zC(585,` Set the width of the column on computers. Allowed values are `),is(586,`span`,11),zC(587,`'one'`),Vu(),zC(588,` through `),is(589,`span`,11),zC(590,`'sixteen'`),Vu(),zC(591,` | `),is(592,`span`,11),zC(593,`null`),Vu()(),is(594,`td`)(595,`div`,12),zC(596,` string `),Vu()(),is(597,`td`)(598,`div`,13),zC(599,` null `),Vu()()(),is(600,`tr`)(601,`td`),zC(602,`suiLargeScreenWidth`),Vu(),is(603,`td`),zC(604,` Set the width of the column on large screens. Allowed values are `),is(605,`span`,11),zC(606,`'one'`),Vu(),zC(607,` through `),is(608,`span`,11),zC(609,`'sixteen'`),Vu(),zC(610,` | `),is(611,`span`,11),zC(612,`null`),Vu()(),is(613,`td`)(614,`div`,12),zC(615,` string `),Vu()(),is(616,`td`)(617,`div`,13),zC(618,` null `),Vu()()(),is(619,`tr`)(620,`td`),zC(621,`suiWidescreenWidth`),Vu(),is(622,`td`),zC(623,` Set the width of the column on widescreens. Allowed values are `),is(624,`span`,11),zC(625,`'one'`),Vu(),zC(626,` through `),is(627,`span`,11),zC(628,`'sixteen'`),Vu(),zC(629,` | `),is(630,`span`,11),zC(631,`null`),Vu()(),is(632,`td`)(633,`div`,12),zC(634,` string `),Vu()(),is(635,`td`)(636,`div`,13),zC(637,` null `),Vu()()(),is(638,`tr`)(639,`td`),zC(640,`suiFloated`),Vu(),is(641,`td`),zC(642,` Float the column to the edge of the row. Allowed values are `),is(643,`span`,11),zC(644,`'left floated'`),Vu(),zC(645,` | `),is(646,`span`,11),zC(647,`'right floated'`),Vu(),zC(648,` | `),is(649,`span`,11),zC(650,`null`),Vu()(),is(651,`td`)(652,`div`,12),zC(653,` string `),Vu()(),is(654,`td`)(655,`div`,13),zC(656,` null `),Vu()()(),is(657,`tr`)(658,`td`),zC(659,`suiAlignment`),Vu(),is(660,`td`),zC(661,` Set the text (or vertical) alignment of the column. Allowed values are `),is(662,`span`,11),zC(663,`'left aligned'`),Vu(),zC(664,` | `),is(665,`span`,11),zC(666,`'center aligned'`),Vu(),zC(667,` | `),is(668,`span`,11),zC(669,`'right aligned'`),Vu(),zC(670,` | `),is(671,`span`,11),zC(672,`'justified'`),Vu(),zC(673,` | `),is(674,`span`,11),zC(675,`'top aligned'`),Vu(),zC(676,` | `),is(677,`span`,11),zC(678,`'middle aligned'`),Vu(),zC(679,` | `),is(680,`span`,11),zC(681,`'bottom aligned'`),Vu(),zC(682,` | `),is(683,`span`,11),zC(684,`null`),Vu()(),is(685,`td`)(686,`div`,12),zC(687,` string `),Vu()(),is(688,`td`)(689,`div`,13),zC(690,` null `),Vu()()(),is(691,`tr`)(692,`td`),zC(693,`suiVerticalAlignment`),Vu(),is(694,`td`),zC(695,` Set the vertical alignment of the column. Allowed values are `),is(696,`span`,11),zC(697,`'top aligned'`),Vu(),zC(698,` | `),is(699,`span`,11),zC(700,`'middle aligned'`),Vu(),zC(701,` | `),is(702,`span`,11),zC(703,`'bottom aligned'`),Vu(),zC(704,` | `),is(705,`span`,11),zC(706,`null`),Vu()(),is(707,`td`)(708,`div`,12),zC(709,` string `),Vu()(),is(710,`td`)(711,`div`,13),zC(712,` null `),Vu()()(),is(713,`tr`)(714,`td`),zC(715,`suiColour`),Vu(),is(716,`td`),zC(717,` Set the background colour of the column. Allowed values are `),is(718,`span`,11),zC(719,`'red'`),Vu(),zC(720,` | `),is(721,`span`,11),zC(722,`'orange'`),Vu(),zC(723,` | `),is(724,`span`,11),zC(725,`'yellow'`),Vu(),zC(726,` | `),is(727,`span`,11),zC(728,`'olive'`),Vu(),zC(729,` | `),is(730,`span`,11),zC(731,`'green'`),Vu(),zC(732,` | `),is(733,`span`,11),zC(734,`'teal'`),Vu(),zC(735,` | `),is(736,`span`,11),zC(737,`'blue'`),Vu(),zC(738,` | `),is(739,`span`,11),zC(740,`'violet'`),Vu(),zC(741,` | `),is(742,`span`,11),zC(743,`'purple'`),Vu(),zC(744,` | `),is(745,`span`,11),zC(746,`'pink'`),Vu(),zC(747,` | `),is(748,`span`,11),zC(749,`'brown'`),Vu(),zC(750,` | `),is(751,`span`,11),zC(752,`'grey'`),Vu(),zC(753,` | `),is(754,`span`,11),zC(755,`'black'`),Vu(),zC(756,` | `),is(757,`span`,11),zC(758,`null`),Vu()(),is(759,`td`)(760,`div`,12),zC(761,` string `),Vu()(),is(762,`td`)(763,`div`,13),zC(764,` null `),Vu()()(),is(765,`tr`)(766,`td`),zC(767,`suiDeviceVisibility`),Vu(),is(768,`td`),zC(769,` Only show the column on specific devices. Allowed values are `),is(770,`span`,11),zC(771,`'mobile only'`),Vu(),zC(772,` | `),is(773,`span`,11),zC(774,`'tablet only'`),Vu(),zC(775,` | `),is(776,`span`,11),zC(777,`'computer only'`),Vu(),zC(778,` | `),is(779,`span`,11),zC(780,`'large screen only'`),Vu(),zC(781,` | `),is(782,`span`,11),zC(783,`'widescreen only'`),Vu(),zC(784,` | `),is(785,`span`,11),zC(786,`'tablet mobile only'`),Vu(),zC(787,` | `),is(788,`span`,11),zC(789,`null`),Vu()(),is(790,`td`)(791,`div`,12),zC(792,` string `),Vu()(),is(793,`td`)(794,`div`,13),zC(795,` null `),Vu()()(),is(796,`tr`)(797,`td`),zC(798,`suiStretched`),Vu(),is(799,`td`),zC(800,` Set whether the column contents should stretch to the column height `),Vu(),is(801,`td`)(802,`div`,12),zC(803,` boolean `),Vu()(),is(804,`td`)(805,`div`,13),zC(806,` false `),Vu()()()()()())}var fn=(()=>{class n{constructor(a){this.snippetGrid=Di,this.snippetDivided=Mi,this.snippetVerticallyDivided=_i,this.snippetCelled=wi,this.snippetInternallyCelled=Ti,this.snippetRows=Ii,this.snippetColumns=Ai,this.snippetFloated=ki,this.snippetColumnWidth=Bi,this.snippetColumnCount=Gi,this.snippetEqualWidth=Ni,this.snippetStretched=Wi,this.snippetPadded=Ri,this.snippetRelaxed=Pi,this.snippetColored=zi,this.snippetCentered=Ji,this.snippetTextAlignment=Li,this.snippetVerticalAlignment=Hi,this.snippetDoubling=Vi,this.snippetStackable=qi,this.snippetReversed=Oi,this.snippetDeviceVisibility=Ui,this.snippetResponsiveWidth=ji,a.setTitle(`Grid | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-grid`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Grid`,`subHeader`,`A grid is used to harmonize negative space in a layout`,`semanticUrl`,`https://semantic-ui.com/collections/grid.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[`sui-label`,``,`suiColour`,`teal`,`suiSize`,`tiny`],[`sui-message`,``,`suiState`,`warning`],[1,`grid-demo`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(is(0,`doc-page`,0),jh(1,ko,219,23,`div`,1)(2,Bo,807,0,`div`,1),Vu()),l&2&&(KD(),Gh(`docPageContent`,`definition`),KD(),Gh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$2,Ws$1,li$1,U$1,fi$2,Yi,Xi,$i,Ki,Qi,Zi,en,tn,nn,an,ln,dn,rn,mn,on,sn,cn,pn,un,vn,xn,Sn,hn],styles:[`[_nghost-%COMP%]     .grid-demo .ui.grid:not(.divided):not(.celled):not(.padded)>.column:not(.row), [_nghost-%COMP%]     .grid-demo .ui.grid:not(.divided):not(.celled):not(.padded)>.row>.column{box-shadow:inset 0 0 0 1px #2224261a}[_nghost-%COMP%]     .grid-demo .ui.grid+.ui.grid, [_nghost-%COMP%]     .grid-demo .ui.grid+p{margin-top:1.5rem}`],changeDetection:1})}}return n})();var En=`<div sui-menu>
  <div suiMenuItem suiHeader>Our Company</div>
  <a suiMenuItem>About Us</a>
  <a suiMenuItem>Jobs</a>
  <a suiMenuItem>Locations</a>
</div>
`;var gn=`<div sui-menu
     suiWidth="three">
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
`;var bn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var yn=`<div sui-menu
     suiSecondary>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
  <div suiSubMenu
       suiRight>
    <div suiMenuItem>
      <div sui-input
           suiIcon="icon">
        <input type="text" placeholder="Search...">
        <i sui-icon suiIconType="search link"></i>
      </div>
    </div>
    <a suiMenuItem>Logout</a>
  </div>
</div>
`;var Cn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Fn=`<div sui-menu
     suiPointing>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
  <div suiSubMenu
       suiRight>
    <div suiMenuItem>
      <div sui-input
           suiIcon="icon"
           suiTransparent>
        <input type="text" placeholder="Search...">
        <i sui-icon suiIconType="search link"></i>
      </div>
    </div>
  </div>
</div>
<div sui-segment>
  <doc-wireframe type="paragraph"></doc-wireframe>
</div>
`;var Dn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Mn=`<div sui-menu
     suiSecondary
     suiPointing>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
  <div suiSubMenu
       suiRight>
    <a suiMenuItem>Logout</a>
  </div>
</div>
<div sui-segment>
  <doc-wireframe type="paragraph"></doc-wireframe>
</div>
`;var _n=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var wn=`<div sui-menu
     suiTabular>
  <a suiMenuItem
     [suiActive]="activeItem === 'bio'"
     (click)="select('bio')">
    Bio
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'photos'"
     (click)="select('photos')">
    Photos
  </a>
</div>
`;var Tn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var In=`<div sui-menu
     suiTabular
     suiAttached="top">
  <a suiMenuItem
     [suiActive]="activeItem === 'bio'"
     (click)="select('bio')">
    Bio
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'photos'"
     (click)="select('photos')">
    Photos
  </a>
  <div suiSubMenu
       suiRight>
    <div suiMenuItem>
      <div sui-input
           suiIcon="icon"
           suiTransparent>
        <input type="text" placeholder="Search users...">
        <i sui-icon suiIconType="search link"></i>
      </div>
    </div>
  </div>
</div>
<div sui-segment
     suiAttached="bottom attached">
  <doc-wireframe type="paragraph"></doc-wireframe>
</div>
`;var An=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var kn=`<div sui-menu
     suiText>
  <div suiMenuItem suiHeader>Sort By</div>
  <a suiMenuItem
     [suiActive]="activeItem === 'closest'"
     (click)="select('closest')">
    Closest
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'most-comments'"
     (click)="select('most-comments')">
    Most Comments
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'most-popular'"
     (click)="select('most-popular')">
    Most Popular
  </a>
</div>
`;var Bn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Gn=`<div sui-menu
     suiVertical>
  <a suiMenuItem
     suiActive
     suiColour="teal">
    Inbox
    <div sui-label
         suiColour="teal"
         suiPointing="left">1</div>
  </a>
  <a suiMenuItem>
    Spam
    <div sui-label>51</div>
  </a>
  <a suiMenuItem>
    Updates
    <div sui-label>1</div>
  </a>
  <div suiMenuItem>
    <div sui-input
         suiIcon="icon"
         suiTransparent>
      <input type="text" placeholder="Search mail...">
      <i sui-icon suiIconType="search"></i>
    </div>
  </div>
</div>
`;var Nn=`<div sui-menu
     suiVertical
     suiSecondary>
  <a suiMenuItem
     [suiActive]="activeItem === 'account'"
     (click)="select('account')">
    Account
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'settings'"
     (click)="select('settings')">
    Settings
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'display-options'"
     (click)="select('display-options')">
    Display Options
  </a>
</div>
<div sui-menu
     suiVertical
     suiPointing>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
`;var Wn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Rn=`<div sui-menu
     suiPagination>
  <a suiMenuItem suiActive>1</a>
  <div suiMenuItem disabled>...</div>
  <a suiMenuItem>10</a>
  <a suiMenuItem>11</a>
  <a suiMenuItem>12</a>
</div>
`;var Pn=`<div sui-menu>
  <div suiMenuItem suiHeader>Our Company</div>
  <a suiMenuItem>About Us</a>
  <a suiMenuItem>Jobs</a>
</div>
<div sui-menu
     suiVertical>
  <div suiMenuItem>
    <div suiMenuHeader>Products</div>
    <div suiSubMenu>
      <a suiMenuItem>Enterprise</a>
      <a suiMenuItem>Consumer</a>
    </div>
  </div>
  <div suiMenuItem>
    <div suiMenuHeader>Hosting</div>
    <div suiSubMenu>
      <a suiMenuItem>Shared</a>
      <a suiMenuItem>Dedicated</a>
    </div>
  </div>
</div>
`;var zn=`<div sui-menu
     suiVertical>
  <div suiMenuItem>
    <h4 sui-header>Promotions</h4>
    <p>Check out our new promotions</p>
  </div>
  <div suiMenuItem>
    <h4 sui-header>Coupons</h4>
    <p>Check out our collection of coupons</p>
  </div>
</div>
`;var Jn=`<div sui-menu>
  <div suiMenuItem>
    <div sui-input
         suiIcon="icon">
      <input type="text" placeholder="Search...">
      <i sui-icon suiIconType="search"></i>
    </div>
  </div>
  <div suiSubMenu
       suiRight>
    <div suiMenuItem>
      <div sui-input
           suiAction="action">
        <input type="text" placeholder="Navigate to...">
        <div sui-button suiColour="blue">Go</div>
      </div>
    </div>
  </div>
</div>
`;var Ln=`<div sui-menu>
  <div suiMenuItem>
    <div sui-button suiEmphasis="primary">Sign up</div>
  </div>
  <div suiMenuItem>
    <div sui-button>Log-in</div>
  </div>
</div>
`;var Hn=`<div sui-menu
     suiVertical>
  <a suiMenuItem href="https://www.google.com" target="_blank">Visit Google</a>
  <div suiMenuItem suiLink>Link via class</div>
  <div suiMenuItem>Not a link</div>
</div>
`;var Vn=`<div sui-menu>
  <a suiMenuItem>Home</a>
  <sui-dropdown suiMenuItem>
    <span class="text">More</span>
    <i sui-icon suiIconType="dropdown"></i>
    <div suiDropdownMenu>
      <div suiDropdownMenuItem>Edit Profile</div>
      <div suiDropdownMenuItem>Choose Language</div>
      <div suiDropdownMenuItem>Account Settings</div>
    </div>
  </sui-dropdown>
</div>
`;var qn=`<div sui-menu>
  <a suiMenuItem>Browse</a>
  <a suiMenuItem>Submit</a>
  <div suiSubMenu
       suiRight>
    <a suiMenuItem>Sign Up</a>
    <a suiMenuItem>Help</a>
  </div>
</div>
`;var On=`<div sui-menu
     suiCompact>
  <a suiMenuItem>A link</a>
  <div suiMenuItem suiLink>div Link</div>
</div>
`;var Un=`<div sui-menu
     suiCompact>
  <a suiMenuItem suiActive>Link</a>
</div>
`;var jn=`<div sui-menu
     suiCompact>
  <div suiMenuItem disabled>Link</div>
</div>
`;var Yn=`<div sui-menu
     suiStackable>
  <div suiMenuItem>
    <img src="assets/images/logo.png">
  </div>
  <a suiMenuItem>Features</a>
  <a suiMenuItem>Testimonials</a>
  <a suiMenuItem>Sign-in</a>
</div>
`;var Xn=`<div sui-menu
     suiInverted>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
<div sui-menu
     suiInverted
     suiVertical>
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
`;var $n=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Kn=`<div sui-menu
     suiWidth="thirteen">
  <a suiMenuItem
     suiColour="red"
     [suiActive]="activeItem === 'red'"
     (click)="select('red')">Red</a>
  <a suiMenuItem
     suiColour="orange"
     [suiActive]="activeItem === 'orange'"
     (click)="select('orange')">Orange</a>
  <a suiMenuItem
     suiColour="yellow"
     [suiActive]="activeItem === 'yellow'"
     (click)="select('yellow')">Yellow</a>
  <a suiMenuItem
     suiColour="olive"
     [suiActive]="activeItem === 'olive'"
     (click)="select('olive')">Olive</a>
  <a suiMenuItem
     suiColour="green"
     [suiActive]="activeItem === 'green'"
     (click)="select('green')">Green</a>
  <a suiMenuItem
     suiColour="teal"
     [suiActive]="activeItem === 'teal'"
     (click)="select('teal')">Teal</a>
  <a suiMenuItem
     suiColour="blue"
     [suiActive]="activeItem === 'blue'"
     (click)="select('blue')">Blue</a>
  <a suiMenuItem
     suiColour="violet"
     [suiActive]="activeItem === 'violet'"
     (click)="select('violet')">Violet</a>
  <a suiMenuItem
     suiColour="purple"
     [suiActive]="activeItem === 'purple'"
     (click)="select('purple')">Purple</a>
  <a suiMenuItem
     suiColour="pink"
     [suiActive]="activeItem === 'pink'"
     (click)="select('pink')">Pink</a>
  <a suiMenuItem
     suiColour="brown"
     [suiActive]="activeItem === 'brown'"
     (click)="select('brown')">Brown</a>
  <a suiMenuItem
     suiColour="grey"
     [suiActive]="activeItem === 'grey'"
     (click)="select('grey')">Grey</a>
  <a suiMenuItem
     suiColour="black"
     [suiActive]="activeItem === 'black'"
     (click)="select('black')">Black</a>
</div>
`;var Qn=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var Zn=`<div sui-menu
     suiColour="blue"
     suiWidth="three">
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
<div sui-menu
     suiColour="teal"
     suiInverted
     suiWidth="three">
  <a suiMenuItem
     [suiActive]="activeItem === 'home'"
     (click)="select('home')">
    Home
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'messages'"
     (click)="select('messages')">
    Messages
  </a>
  <a suiMenuItem
     [suiActive]="activeItem === 'friends'"
     (click)="select('friends')">
    Friends
  </a>
</div>
`;var ea=`import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html'
})
export class MenuExampleComponent {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}
`;var ta=`<div sui-menu
     suiIcon="icon">
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i></a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i></a>
  <a suiMenuItem><i sui-icon suiIconType="video play"></i></a>
</div>
<div sui-menu
     suiIcon="icon"
     suiVertical
     suiCompact>
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i></a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i></a>
  <a suiMenuItem><i sui-icon suiIconType="video play"></i></a>
</div>
`;var ia=`<div sui-menu
     suiIcon="labeled icon">
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i>Games</a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i>Channels</a>
  <a suiMenuItem><i sui-icon suiIconType="video play"></i>Videos</a>
</div>
`;var na=`<div sui-menu
     suiVertical
     suiFluid>
  <a suiMenuItem>Run</a>
  <a suiMenuItem>Walk</a>
  <a suiMenuItem>Bike</a>
</div>
`;var aa=`<div sui-menu
     suiCompact
     suiIcon="labeled icon">
  <a suiMenuItem><i sui-icon suiIconType="gamepad"></i>Games</a>
  <a suiMenuItem><i sui-icon suiIconType="video camera"></i>Channels</a>
</div>
`;var la=`<div sui-menu
     suiWidth="three">
  <a suiMenuItem>Buy</a>
  <a suiMenuItem>Sell</a>
  <a suiMenuItem>Rent</a>
</div>
`;var da=`<div sui-menu
     suiAttached="top">
  <div suiMenuItem>Top attached</div>
</div>
<div sui-segment
     suiAttached="attached">
  <doc-wireframe type="paragraph"></doc-wireframe>
</div>
<div sui-menu
     suiAttached="attached">
  <div suiMenuItem>Attached</div>
</div>
<div sui-segment
     suiAttached="attached">
  <doc-wireframe type="short-paragraph"></doc-wireframe>
</div>
<div sui-menu
     suiAttached="bottom">
  <div suiMenuItem>Bottom attached</div>
</div>
`;var ra=`<div sui-menu
     suiSize="mini"
     suiCompact>
  <a suiMenuItem suiActive>Mini</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="tiny"
     suiCompact>
  <a suiMenuItem suiActive>Tiny</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="small"
     suiCompact>
  <a suiMenuItem suiActive>Small</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="large"
     suiCompact>
  <a suiMenuItem suiActive>Large</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="huge"
     suiCompact>
  <a suiMenuItem suiActive>Huge</a>
  <a suiMenuItem>Messages</a>
</div>
<div sui-menu
     suiSize="massive"
     suiCompact>
  <a suiMenuItem suiActive>Massive</a>
  <a suiMenuItem>Messages</a>
</div>
`;var ma=`<div sui-menu>
  <a suiMenuItem suiFitted="fitted">No padding whatsoever</a>
  <a suiMenuItem suiFitted="horizontally fitted">No horizontal padding</a>
  <a suiMenuItem suiFitted="vertically fitted">No vertical padding</a>
</div>
`;var oa=`<div sui-menu
     suiBorderless
     suiWidth="five">
  <a suiMenuItem>1</a>
  <a suiMenuItem>2</a>
  <a suiMenuItem>3</a>
  <a suiMenuItem>4</a>
  <a suiMenuItem>5</a>
</div>
`;var C=class{constructor(){this.activeItem=`home`}select(s){this.activeItem=s}};var sa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-menu-example`]],standalone:!1,features:[uo$1],decls:9,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``,`suiHeader`,``],[`suiMenuItem`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,`Our Company`),Vu(),is(3,`a`,2),zC(4,`About Us`),Vu(),is(5,`a`,2),zC(6,`Jobs`),Vu(),is(7,`a`,2),zC(8,`Locations`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var ca=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-menu-evenly-example`]],standalone:!1,features:[uo$1],decls:7,vars:3,consts:[[`sui-menu`,``,`suiWidth`,`three`],[`suiMenuItem`,``,3,`click`,`suiActive`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(2,` Home `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(4,` Messages `),Vu(),is(5,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(6,` Friends `),Vu()()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var pa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-secondary-example`]],standalone:!1,features:[uo$1],decls:14,vars:3,consts:[[`sui-menu`,``,`suiSecondary`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`suiSubMenu`,``,`suiRight`,``],[`suiMenuItem`,``],[`sui-input`,``,`suiIcon`,`icon`],[`type`,`text`,`placeholder`,`Search...`],[`sui-icon`,``,`suiIconType`,`search link`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(2,` Home `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(4,` Messages `),Vu(),is(5,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(6,` Friends `),Vu(),is(7,`div`,2)(8,`div`,3)(9,`div`,4),zh(10,`input`,5)(11,`i`,6),Vu()(),is(12,`a`,3),zC(13,`Logout`),Vu()()()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`))},dependencies:[we,Ft$1,Tt$1,ln$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var ua=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-pointing-example`]],standalone:!1,features:[uo$1],decls:14,vars:3,consts:[[`sui-menu`,``,`suiPointing`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`suiSubMenu`,``,`suiRight`,``],[`suiMenuItem`,``],[`sui-input`,``,`suiIcon`,`icon`,`suiTransparent`,``],[`type`,`text`,`placeholder`,`Search...`],[`sui-icon`,``,`suiIconType`,`search link`],[`sui-segment`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(2,` Home `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(4,` Messages `),Vu(),is(5,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(6,` Friends `),Vu(),is(7,`div`,2)(8,`div`,3)(9,`div`,4),zh(10,`input`,5)(11,`i`,6),Vu()()()(),is(12,`div`,7),zh(13,`doc-wireframe`,8),Vu()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`))},dependencies:[Dr,we,ze$1,Ft$1,Tt$1,ln$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var va=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-secondary-pointing-example`]],standalone:!1,features:[uo$1],decls:12,vars:3,consts:[[`sui-menu`,``,`suiSecondary`,``,`suiPointing`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`suiSubMenu`,``,`suiRight`,``],[`suiMenuItem`,``],[`sui-segment`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(2,` Home `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(4,` Messages `),Vu(),is(5,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(6,` Friends `),Vu(),is(7,`div`,2)(8,`a`,3),zC(9,`Logout`),Vu()()(),is(10,`div`,4),zh(11,`doc-wireframe`,5),Vu()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`))},dependencies:[Dr,ze$1,Ft$1,Tt$1,ln$1],encapsulation:2,changeDetection:1})}}return n})();var xa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-tabular-example`]],standalone:!1,features:[uo$1],decls:5,vars:2,consts:[[`sui-menu`,``,`suiTabular`,``],[`suiMenuItem`,``,3,`click`,`suiActive`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`bio`)}),zC(2,` Bio `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`photos`)}),zC(4,` Photos `),Vu()()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`bio`),KD(2),Gh(`suiActive`,d.activeItem===`photos`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Sa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-tabular-attached-example`]],standalone:!1,features:[uo$1],decls:12,vars:2,consts:[[`sui-menu`,``,`suiTabular`,``,`suiAttached`,`top`],[`suiMenuItem`,``,3,`click`,`suiActive`],[`suiSubMenu`,``,`suiRight`,``],[`suiMenuItem`,``],[`sui-input`,``,`suiIcon`,`icon`,`suiTransparent`,``],[`type`,`text`,`placeholder`,`Search users...`],[`sui-icon`,``,`suiIconType`,`search link`],[`sui-segment`,``,`suiAttached`,`bottom attached`],[`type`,`paragraph`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`bio`)}),zC(2,` Bio `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`photos`)}),zC(4,` Photos `),Vu(),is(5,`div`,2)(6,`div`,3)(7,`div`,4),zh(8,`input`,5)(9,`i`,6),Vu()()()(),is(10,`div`,7),zh(11,`doc-wireframe`,8),Vu()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`bio`),KD(2),Gh(`suiActive`,d.activeItem===`photos`))},dependencies:[Dr,we,ze$1,Ft$1,Tt$1,ln$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var ha=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-text-example`]],standalone:!1,features:[uo$1],decls:9,vars:3,consts:[[`sui-menu`,``,`suiText`,``],[`suiMenuItem`,``,`suiHeader`,``],[`suiMenuItem`,``,3,`click`,`suiActive`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,`Sort By`),Vu(),is(3,`a`,2),Kh(`click`,function(){return d.select(`closest`)}),zC(4,` Closest `),Vu(),is(5,`a`,2),Kh(`click`,function(){return d.select(`most-comments`)}),zC(6,` Most Comments `),Vu(),is(7,`a`,2),Kh(`click`,function(){return d.select(`most-popular`)}),zC(8,` Most Popular `),Vu()()),l&2&&(KD(3),Gh(`suiActive`,d.activeItem===`closest`),KD(2),Gh(`suiActive`,d.activeItem===`most-comments`),KD(2),Gh(`suiActive`,d.activeItem===`most-popular`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var fa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-vertical-example`]],standalone:!1,features:[uo$1],decls:17,vars:0,consts:[[`sui-menu`,``,`suiVertical`,``],[`suiMenuItem`,``,`suiActive`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`teal`,`suiPointing`,`left`],[`suiMenuItem`,``],[`sui-label`,``],[`sui-input`,``,`suiIcon`,`icon`,`suiTransparent`,``],[`type`,`text`,`placeholder`,`Search mail...`],[`sui-icon`,``,`suiIconType`,`search`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,` Inbox `),is(3,`div`,2),zC(4,`1`),Vu()(),is(5,`a`,3),zC(6,` Spam `),is(7,`div`,4),zC(8,`51`),Vu()(),is(9,`a`,3),zC(10,` Updates `),is(11,`div`,4),zC(12,`1`),Vu()(),is(13,`div`,3)(14,`div`,5),zh(15,`input`,6)(16,`i`,7),Vu()()())},dependencies:[we,fi$2,Ft$1,Tt$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var Ea=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-vertical-secondary-example`]],standalone:!1,features:[uo$1],decls:14,vars:6,consts:[[`sui-menu`,``,`suiVertical`,``,`suiSecondary`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`sui-menu`,``,`suiVertical`,``,`suiPointing`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`account`)}),zC(2,` Account `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`settings`)}),zC(4,` Settings `),Vu(),is(5,`a`,1),Kh(`click`,function(){return d.select(`display-options`)}),zC(6,` Display Options `),Vu()(),is(7,`div`,2)(8,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(9,` Home `),Vu(),is(10,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(11,` Messages `),Vu(),is(12,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(13,` Friends `),Vu()()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`account`),KD(2),Gh(`suiActive`,d.activeItem===`settings`),KD(2),Gh(`suiActive`,d.activeItem===`display-options`),KD(3),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var ga=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-pagination-example`]],standalone:!1,features:[uo$1],decls:11,vars:0,consts:[[`sui-menu`,``,`suiPagination`,``],[`suiMenuItem`,``,`suiActive`,``],[`suiMenuItem`,``,`disabled`,``],[`suiMenuItem`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`1`),Vu(),is(3,`div`,2),zC(4,`...`),Vu(),is(5,`a`,3),zC(6,`10`),Vu(),is(7,`a`,3),zC(8,`11`),Vu(),is(9,`a`,3),zC(10,`12`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var ba=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-header-example`]],standalone:!1,features:[uo$1],decls:24,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``,`suiHeader`,``],[`suiMenuItem`,``],[`sui-menu`,``,`suiVertical`,``],[`suiMenuHeader`,``],[`suiSubMenu`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,`Our Company`),Vu(),is(3,`a`,2),zC(4,`About Us`),Vu(),is(5,`a`,2),zC(6,`Jobs`),Vu()(),is(7,`div`,3)(8,`div`,2)(9,`div`,4),zC(10,`Products`),Vu(),is(11,`div`,5)(12,`a`,2),zC(13,`Enterprise`),Vu(),is(14,`a`,2),zC(15,`Consumer`),Vu()()(),is(16,`div`,2)(17,`div`,4),zC(18,`Hosting`),Vu(),is(19,`div`,5)(20,`a`,2),zC(21,`Shared`),Vu(),is(22,`a`,2),zC(23,`Dedicated`),Vu()()()())},dependencies:[Ft$1,Tt$1,ln$1,cn$1],encapsulation:2,changeDetection:1})}}return n})();var ya=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-text-content-example`]],standalone:!1,features:[uo$1],decls:11,vars:0,consts:[[`sui-menu`,``,`suiVertical`,``],[`suiMenuItem`,``],[`sui-header`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`h4`,2),zC(3,`Promotions`),Vu(),is(4,`p`),zC(5,`Check out our new promotions`),Vu()(),is(6,`div`,1)(7,`h4`,2),zC(8,`Coupons`),Vu(),is(9,`p`),zC(10,`Check out our collection of coupons`),Vu()()())},dependencies:[Ws$1,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ca=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-input-example`]],standalone:!1,features:[uo$1],decls:11,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``],[`sui-input`,``,`suiIcon`,`icon`],[`type`,`text`,`placeholder`,`Search...`],[`sui-icon`,``,`suiIconType`,`search`],[`suiSubMenu`,``,`suiRight`,``],[`sui-input`,``,`suiAction`,`action`],[`type`,`text`,`placeholder`,`Navigate to...`],[`sui-button`,``,`suiColour`,`blue`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zh(3,`input`,3)(4,`i`,4),Vu()(),is(5,`div`,5)(6,`div`,1)(7,`div`,6),zh(8,`input`,7),is(9,`div`,8),zC(10,`Go`),Vu()()()()())},dependencies:[we,Ii$1,Ft$1,Tt$1,ln$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var Fa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-button-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``],[`sui-button`,``,`suiEmphasis`,`primary`],[`sui-button`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1)(2,`div`,2),zC(3,`Sign up`),Vu()(),is(4,`div`,1)(5,`div`,3),zC(6,`Log-in`),Vu()()())},dependencies:[Ii$1,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Da=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-link-item-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-menu`,``,`suiVertical`,``],[`suiMenuItem`,``,`href`,`https://www.google.com`,`target`,`_blank`],[`suiMenuItem`,``,`suiLink`,``],[`suiMenuItem`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Visit Google`),Vu(),is(3,`div`,2),zC(4,`Link via class`),Vu(),is(5,`div`,3),zC(6,`Not a link`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ma=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-dropdown-item-example`]],standalone:!1,features:[uo$1],decls:14,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),is(3,`sui-dropdown`,1)(4,`span`,2),zC(5,`More`),Vu(),zh(6,`i`,3),is(7,`div`,4)(8,`div`,5),zC(9,`Edit Profile`),Vu(),is(10,`div`,5),zC(11,`Choose Language`),Vu(),is(12,`div`,5),zC(13,`Account Settings`),Vu()()()())},dependencies:[we,Ft$1,Tt$1,qe,me,ze],encapsulation:2,changeDetection:1})}}return n})();var _a=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-sub-menu-example`]],standalone:!1,features:[uo$1],decls:10,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``],[`suiSubMenu`,``,`suiRight`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Browse`),Vu(),is(3,`a`,1),zC(4,`Submit`),Vu(),is(5,`div`,2)(6,`a`,1),zC(7,`Sign Up`),Vu(),is(8,`a`,1),zC(9,`Help`),Vu()()())},dependencies:[Ft$1,Tt$1,ln$1],encapsulation:2,changeDetection:1})}}return n})();var wa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-hover-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-menu`,``,`suiCompact`,``],[`suiMenuItem`,``],[`suiMenuItem`,``,`suiLink`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`A link`),Vu(),is(3,`div`,2),zC(4,`div Link`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ta=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-active-example`]],standalone:!1,features:[uo$1],decls:3,vars:0,consts:[[`sui-menu`,``,`suiCompact`,``],[`suiMenuItem`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Link`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ia=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-disabled-example`]],standalone:!1,features:[uo$1],decls:3,vars:0,consts:[[`sui-menu`,``,`suiCompact`,``],[`suiMenuItem`,``,`disabled`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,`Link`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Aa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-stackable-example`]],standalone:!1,features:[uo$1],decls:9,vars:0,consts:[[`sui-menu`,``,`suiStackable`,``],[`suiMenuItem`,``],[`src`,`assets/images/logo.png`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zh(2,`img`,2),Vu(),is(3,`a`,1),zC(4,`Features`),Vu(),is(5,`a`,1),zC(6,`Testimonials`),Vu(),is(7,`a`,1),zC(8,`Sign-in`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var ka=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-inverted-example`]],standalone:!1,features:[uo$1],decls:14,vars:6,consts:[[`sui-menu`,``,`suiInverted`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`sui-menu`,``,`suiInverted`,``,`suiVertical`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(2,` Home `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(4,` Messages `),Vu(),is(5,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(6,` Friends `),Vu()(),is(7,`div`,2)(8,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(9,` Home `),Vu(),is(10,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(11,` Messages `),Vu(),is(12,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(13,` Friends `),Vu()()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`),KD(3),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ba=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-colored-example`]],standalone:!1,features:[uo$1],decls:27,vars:13,consts:[[`sui-menu`,``,`suiWidth`,`thirteen`],[`suiMenuItem`,``,`suiColour`,`red`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`orange`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`yellow`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`olive`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`green`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`teal`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`blue`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`violet`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`purple`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`pink`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`brown`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`grey`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`black`,3,`click`,`suiActive`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`red`)}),zC(2,`Red`),Vu(),is(3,`a`,2),Kh(`click`,function(){return d.select(`orange`)}),zC(4,`Orange`),Vu(),is(5,`a`,3),Kh(`click`,function(){return d.select(`yellow`)}),zC(6,`Yellow`),Vu(),is(7,`a`,4),Kh(`click`,function(){return d.select(`olive`)}),zC(8,`Olive`),Vu(),is(9,`a`,5),Kh(`click`,function(){return d.select(`green`)}),zC(10,`Green`),Vu(),is(11,`a`,6),Kh(`click`,function(){return d.select(`teal`)}),zC(12,`Teal`),Vu(),is(13,`a`,7),Kh(`click`,function(){return d.select(`blue`)}),zC(14,`Blue`),Vu(),is(15,`a`,8),Kh(`click`,function(){return d.select(`violet`)}),zC(16,`Violet`),Vu(),is(17,`a`,9),Kh(`click`,function(){return d.select(`purple`)}),zC(18,`Purple`),Vu(),is(19,`a`,10),Kh(`click`,function(){return d.select(`pink`)}),zC(20,`Pink`),Vu(),is(21,`a`,11),Kh(`click`,function(){return d.select(`brown`)}),zC(22,`Brown`),Vu(),is(23,`a`,12),Kh(`click`,function(){return d.select(`grey`)}),zC(24,`Grey`),Vu(),is(25,`a`,13),Kh(`click`,function(){return d.select(`black`)}),zC(26,`Black`),Vu()()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`red`),KD(2),Gh(`suiActive`,d.activeItem===`orange`),KD(2),Gh(`suiActive`,d.activeItem===`yellow`),KD(2),Gh(`suiActive`,d.activeItem===`olive`),KD(2),Gh(`suiActive`,d.activeItem===`green`),KD(2),Gh(`suiActive`,d.activeItem===`teal`),KD(2),Gh(`suiActive`,d.activeItem===`blue`),KD(2),Gh(`suiActive`,d.activeItem===`violet`),KD(2),Gh(`suiActive`,d.activeItem===`purple`),KD(2),Gh(`suiActive`,d.activeItem===`pink`),KD(2),Gh(`suiActive`,d.activeItem===`brown`),KD(2),Gh(`suiActive`,d.activeItem===`grey`),KD(2),Gh(`suiActive`,d.activeItem===`black`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ga=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-colored-menu-example`]],standalone:!1,features:[uo$1],decls:14,vars:6,consts:[[`sui-menu`,``,`suiColour`,`blue`,`suiWidth`,`three`],[`suiMenuItem`,``,3,`click`,`suiActive`],[`sui-menu`,``,`suiColour`,`teal`,`suiInverted`,``,`suiWidth`,`three`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(2,` Home `),Vu(),is(3,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(4,` Messages `),Vu(),is(5,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(6,` Friends `),Vu()(),is(7,`div`,2)(8,`a`,1),Kh(`click`,function(){return d.select(`home`)}),zC(9,` Home `),Vu(),is(10,`a`,1),Kh(`click`,function(){return d.select(`messages`)}),zC(11,` Messages `),Vu(),is(12,`a`,1),Kh(`click`,function(){return d.select(`friends`)}),zC(13,` Friends `),Vu()()),l&2&&(KD(),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`),KD(3),Gh(`suiActive`,d.activeItem===`home`),KD(2),Gh(`suiActive`,d.activeItem===`messages`),KD(2),Gh(`suiActive`,d.activeItem===`friends`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Na=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-icons-example`]],standalone:!1,features:[uo$1],decls:14,vars:0,consts:[[`sui-menu`,``,`suiIcon`,`icon`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`gamepad`],[`sui-icon`,``,`suiIconType`,`video camera`],[`sui-icon`,``,`suiIconType`,`video play`],[`sui-menu`,``,`suiIcon`,`icon`,`suiVertical`,``,`suiCompact`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zh(2,`i`,2),Vu(),is(3,`a`,1),zh(4,`i`,3),Vu(),is(5,`a`,1),zh(6,`i`,4),Vu()(),is(7,`div`,5)(8,`a`,1),zh(9,`i`,2),Vu(),is(10,`a`,1),zh(11,`i`,3),Vu(),is(12,`a`,1),zh(13,`i`,4),Vu()())},dependencies:[we,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Wa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-labeled-icon-example`]],standalone:!1,features:[uo$1],decls:10,vars:0,consts:[[`sui-menu`,``,`suiIcon`,`labeled icon`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`gamepad`],[`sui-icon`,``,`suiIconType`,`video camera`],[`sui-icon`,``,`suiIconType`,`video play`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zh(2,`i`,2),zC(3,`Games`),Vu(),is(4,`a`,1),zh(5,`i`,3),zC(6,`Channels`),Vu(),is(7,`a`,1),zh(8,`i`,4),zC(9,`Videos`),Vu()())},dependencies:[we,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ra=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-fluid-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-menu`,``,`suiVertical`,``,`suiFluid`,``],[`suiMenuItem`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Run`),Vu(),is(3,`a`,1),zC(4,`Walk`),Vu(),is(5,`a`,1),zC(6,`Bike`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Pa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-compact-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-menu`,``,`suiCompact`,``,`suiIcon`,`labeled icon`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`gamepad`],[`sui-icon`,``,`suiIconType`,`video camera`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zh(2,`i`,2),zC(3,`Games`),Vu(),is(4,`a`,1),zh(5,`i`,3),zC(6,`Channels`),Vu()())},dependencies:[we,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var za=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-evenly-divided-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-menu`,``,`suiWidth`,`three`],[`suiMenuItem`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Buy`),Vu(),is(3,`a`,1),zC(4,`Sell`),Vu(),is(5,`a`,1),zC(6,`Rent`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ja=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-attached-example`]],standalone:!1,features:[uo$1],decls:13,vars:0,consts:[[`sui-menu`,``,`suiAttached`,`top`],[`suiMenuItem`,``],[`sui-segment`,``,`suiAttached`,`attached`],[`type`,`paragraph`],[`sui-menu`,``,`suiAttached`,`attached`],[`type`,`short-paragraph`],[`sui-menu`,``,`suiAttached`,`bottom`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,`Top attached`),Vu()(),is(3,`div`,2),zh(4,`doc-wireframe`,3),Vu(),is(5,`div`,4)(6,`div`,1),zC(7,`Attached`),Vu()(),is(8,`div`,2),zh(9,`doc-wireframe`,5),Vu(),is(10,`div`,6)(11,`div`,1),zC(12,`Bottom attached`),Vu()())},dependencies:[Dr,ze$1,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var La=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-size-example`]],standalone:!1,features:[uo$1],decls:30,vars:0,consts:[[`sui-menu`,``,`suiSize`,`mini`,`suiCompact`,``],[`suiMenuItem`,``,`suiActive`,``],[`suiMenuItem`,``],[`sui-menu`,``,`suiSize`,`tiny`,`suiCompact`,``],[`sui-menu`,``,`suiSize`,`small`,`suiCompact`,``],[`sui-menu`,``,`suiSize`,`large`,`suiCompact`,``],[`sui-menu`,``,`suiSize`,`huge`,`suiCompact`,``],[`sui-menu`,``,`suiSize`,`massive`,`suiCompact`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Mini`),Vu(),is(3,`a`,2),zC(4,`Messages`),Vu()(),is(5,`div`,3)(6,`a`,1),zC(7,`Tiny`),Vu(),is(8,`a`,2),zC(9,`Messages`),Vu()(),is(10,`div`,4)(11,`a`,1),zC(12,`Small`),Vu(),is(13,`a`,2),zC(14,`Messages`),Vu()(),is(15,`div`,5)(16,`a`,1),zC(17,`Large`),Vu(),is(18,`a`,2),zC(19,`Messages`),Vu()(),is(20,`div`,6)(21,`a`,1),zC(22,`Huge`),Vu(),is(23,`a`,2),zC(24,`Messages`),Vu()(),is(25,`div`,7)(26,`a`,1),zC(27,`Massive`),Vu(),is(28,`a`,2),zC(29,`Messages`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ha=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-fitted-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``,`suiFitted`,`fitted`],[`suiMenuItem`,``,`suiFitted`,`horizontally fitted`],[`suiMenuItem`,``,`suiFitted`,`vertically fitted`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`No padding whatsoever`),Vu(),is(3,`a`,2),zC(4,`No horizontal padding`),Vu(),is(5,`a`,3),zC(6,`No vertical padding`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Va=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu-borderless-example`]],standalone:!1,features:[uo$1],decls:11,vars:0,consts:[[`sui-menu`,``,`suiBorderless`,``,`suiWidth`,`five`],[`suiMenuItem`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`1`),Vu(),is(3,`a`,1),zC(4,`2`),Vu(),is(5,`a`,1),zC(6,`3`),Vu(),is(7,`a`,1),zC(8,`4`),Vu(),is(9,`a`,1),zC(10,`5`),Vu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();function _s(n,s){n&1&&zh(0,`doc-menu-menu-example`)}function ws(n,s){n&1&&zh(0,`doc-menu-menu-evenly-example`)}function Ts(n,s){n&1&&zh(0,`doc-menu-secondary-example`)}function Is(n,s){n&1&&zh(0,`doc-menu-pointing-example`)}function As(n,s){n&1&&zh(0,`doc-menu-secondary-pointing-example`)}function ks(n,s){n&1&&zh(0,`doc-menu-tabular-example`)}function Bs(n,s){n&1&&zh(0,`doc-menu-tabular-attached-example`)}function Gs(n,s){n&1&&zh(0,`doc-menu-text-example`)}function Ns(n,s){n&1&&zh(0,`doc-menu-vertical-example`)}function Ws(n,s){n&1&&zh(0,`doc-menu-vertical-secondary-example`)}function Rs(n,s){n&1&&zh(0,`doc-menu-pagination-example`)}function Ps(n,s){n&1&&zh(0,`doc-menu-header-example`)}function zs(n,s){n&1&&zh(0,`doc-menu-text-content-example`)}function Js(n,s){n&1&&zh(0,`doc-menu-input-example`)}function Ls(n,s){n&1&&zh(0,`doc-menu-button-example`)}function Hs(n,s){n&1&&zh(0,`doc-menu-link-item-example`)}function Vs(n,s){n&1&&zh(0,`doc-menu-dropdown-item-example`)}function qs(n,s){n&1&&zh(0,`doc-menu-sub-menu-example`)}function Os(n,s){n&1&&zh(0,`doc-menu-hover-example`)}function Us(n,s){n&1&&zh(0,`doc-menu-active-example`)}function js(n,s){n&1&&zh(0,`doc-menu-disabled-example`)}function Ys(n,s){n&1&&zh(0,`doc-menu-stackable-example`)}function Xs(n,s){n&1&&zh(0,`doc-menu-inverted-example`)}function $s(n,s){n&1&&zh(0,`doc-menu-colored-example`)}function Ks(n,s){n&1&&zh(0,`doc-menu-colored-menu-example`)}function Qs(n,s){n&1&&zh(0,`doc-menu-icons-example`)}function Zs(n,s){n&1&&zh(0,`doc-menu-labeled-icon-example`)}function e0(n,s){n&1&&zh(0,`doc-menu-fluid-example`)}function t0(n,s){n&1&&zh(0,`doc-menu-compact-example`)}function i0(n,s){n&1&&zh(0,`doc-menu-evenly-divided-example`)}function n0(n,s){n&1&&zh(0,`doc-menu-attached-example`)}function a0(n,s){n&1&&zh(0,`doc-menu-size-example`)}function l0(n,s){n&1&&zh(0,`doc-menu-fitted-example`)}function d0(n,s){n&1&&zh(0,`doc-menu-borderless-example`)}function r0(n,s){if(n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Menu`),Vu(),is(6,`p`),zC(7,`A menu`),Vu(),jh(8,_s,1,0,`ng-template`,5),Vu(),is(9,`doc-code-sample`,6)(10,`p`),zC(11,`A menu can have its items divided evenly`),Vu(),jh(12,ws,1,0,`ng-template`,5),Vu(),is(13,`doc-code-sample`,6)(14,`h3`,4),zC(15,`Secondary Menu`),Vu(),is(16,`p`),zC(17,`A menu can adjust its appearance to de-emphasize its contents`),Vu(),jh(18,Ts,1,0,`ng-template`,5),Vu(),is(19,`doc-code-sample`,6)(20,`h3`,4),zC(21,`Pointing`),Vu(),is(22,`p`),zC(23,`A menu can point to show its relationship to nearby content`),Vu(),jh(24,Is,1,0,`ng-template`,5),Vu(),is(25,`doc-code-sample`,6)(26,`p`),zC(27,`A secondary menu can also point`),Vu(),jh(28,As,1,0,`ng-template`,5),Vu(),is(29,`doc-code-sample`,6)(30,`h3`,4),zC(31,`Tabular`),Vu(),is(32,`p`),zC(33,`A menu can be formatted to show tabs of information`),Vu(),jh(34,ks,1,0,`ng-template`,5),Vu(),is(35,`doc-code-sample`,6)(36,`p`),zC(37,`A tabular menu can be attached to a segment`),Vu(),jh(38,Bs,1,0,`ng-template`,5),Vu(),is(39,`doc-code-sample`,6)(40,`h3`,4),zC(41,`Text`),Vu(),is(42,`p`),zC(43,`A menu can be formatted for text content`),Vu(),jh(44,Gs,1,0,`ng-template`,5),Vu(),is(45,`doc-code-sample`,3)(46,`h3`,4),zC(47,`Vertical Menu`),Vu(),is(48,`p`),zC(49,`A vertical menu displays elements vertically`),Vu(),jh(50,Ns,1,0,`ng-template`,5),Vu(),is(51,`doc-code-sample`,6)(52,`p`),zC(53,`Vertical menus can be secondary, pointing or text menus`),Vu(),jh(54,Ws,1,0,`ng-template`,5),Vu(),is(55,`doc-code-sample`,3)(56,`h3`,4),zC(57,`Pagination`),Vu(),is(58,`p`),zC(59,`A pagination menu is specially formatted to present links to pages of content`),Vu(),jh(60,Rs,1,0,`ng-template`,5),Vu(),zh(61,`br`),is(62,`h2`,2),zC(63,`Content`),Vu(),is(64,`doc-code-sample`,3)(65,`h3`,4),zC(66,`Header`),Vu(),is(67,`p`),zC(68,`A menu item may include a header or may itself be a header`),Vu(),is(69,`div`,7),zC(70,` Use `),is(71,`code`),zC(72,`suiHeader`),Vu(),zC(73,` on an item, or `),is(74,`code`),zC(75,`suiMenuHeader`),Vu(),zC(76,` inside an item, to add a header. `),Vu(),jh(77,Ps,1,0,`ng-template`,5),Vu(),is(78,`doc-code-sample`,3)(79,`h3`,4),zC(80,`Text`),Vu(),is(81,`p`),zC(82,`A vertical menu item can include any type of text content`),Vu(),jh(83,zs,1,0,`ng-template`,5),Vu(),is(84,`doc-code-sample`,3)(85,`h3`,4),zC(86,`Input`),Vu(),is(87,`p`),zC(88,`A menu item can contain an input inside of it`),Vu(),jh(89,Js,1,0,`ng-template`,5),Vu(),is(90,`doc-code-sample`,3)(91,`h3`,4),zC(92,`Button`),Vu(),is(93,`p`),zC(94,`A menu item can contain a button inside of it`),Vu(),jh(95,Ls,1,0,`ng-template`,5),Vu(),is(96,`doc-code-sample`,3)(97,`h3`,4),zC(98,`Link Item`),Vu(),is(99,`p`),zC(100,`A menu may contain a link item, or an item formatted as if it is a link`),Vu(),jh(101,Hs,1,0,`ng-template`,5),Vu(),is(102,`doc-code-sample`,3)(103,`h3`,4),zC(104,`Dropdown Item`),Vu(),is(105,`p`),zC(106,`An item may contain a nested menu in a dropdown`),Vu(),jh(107,Vs,1,0,`ng-template`,5),Vu(),is(108,`doc-code-sample`,3)(109,`h3`,4),zC(110,`Menu`),Vu(),is(111,`p`),zC(112,`A menu may contain another menu group in the same level as menu items`),Vu(),is(113,`div`,7),zC(114,` Use `),is(115,`code`),zC(116,`suiSubMenu`),Vu(),zC(117,` with `),is(118,`code`),zC(119,`suiRight`),Vu(),zC(120,` to float a group of items to the right of the menu. `),Vu(),jh(121,qs,1,0,`ng-template`,5),Vu(),zh(122,`br`),is(123,`h2`,2),zC(124,`States`),Vu(),is(125,`doc-code-sample`,3)(126,`h3`,4),zC(127,`Hover`),Vu(),is(128,`p`),zC(129,`A menu item can be hovered`),Vu(),is(130,`div`,7),zC(131,` Menu items are only hoverable if they are links, `),is(132,`code`),zC(133,`<a>`),Vu(),zC(134,` or `),is(135,`code`),zC(136,`suiLink`),Vu(),zC(137,`. `),Vu(),jh(138,Os,1,0,`ng-template`,5),Vu(),is(139,`doc-code-sample`,3)(140,`h3`,4),zC(141,`Active`),Vu(),is(142,`p`),zC(143,`A menu item can be active`),Vu(),jh(144,Us,1,0,`ng-template`,5),Vu(),is(145,`doc-code-sample`,3)(146,`h3`,4),zC(147,`Disabled`),Vu(),is(148,`p`),zC(149,`A menu item can be disabled`),Vu(),jh(150,js,1,0,`ng-template`,5),Vu(),zh(151,`br`),is(152,`h2`,2),zC(153,`Variations`),Vu(),is(154,`doc-code-sample`,3)(155,`h3`,4),zC(156,`Stackable`),Vu(),is(157,`p`),zC(158,`A menu can stack at mobile resolutions`),Vu(),jh(159,Ys,1,0,`ng-template`,5),Vu(),is(160,`doc-code-sample`,6)(161,`h3`,4),zC(162,`Inverted`),Vu(),is(163,`p`),zC(164,`A menu may have its colors inverted to show greater contrast`),Vu(),jh(165,Xs,1,0,`ng-template`,5),Vu(),is(166,`doc-code-sample`,6)(167,`h3`,4),zC(168,`Colored`),Vu(),is(169,`p`),zC(170,`Additional colors can be specified`),Vu(),jh(171,$s,1,0,`ng-template`,5),Vu(),is(172,`doc-code-sample`,6)(173,`p`),zC(174,`A whole menu can also be coloured, or coloured and inverted`),Vu(),jh(175,Ks,1,0,`ng-template`,5),Vu(),is(176,`doc-code-sample`,3)(177,`h3`,4),zC(178,`Icons`),Vu(),is(179,`p`),zC(180,`A menu may have just icons`),Vu(),jh(181,Qs,1,0,`ng-template`,5),Vu(),is(182,`doc-code-sample`,3)(183,`h3`,4),zC(184,`Labeled Icon`),Vu(),is(185,`p`),zC(186,`A menu may have labeled icons`),Vu(),jh(187,Zs,1,0,`ng-template`,5),Vu(),is(188,`doc-code-sample`,3)(189,`h3`,4),zC(190,`Fluid`),Vu(),is(191,`p`),zC(192,`A vertical menu may take the size of its container`),Vu(),is(193,`div`,7),zC(194,` A horizontal menu will be fluid by default. `),Vu(),jh(195,e0,1,0,`ng-template`,5),Vu(),is(196,`doc-code-sample`,3)(197,`h3`,4),zC(198,`Compact`),Vu(),is(199,`p`),zC(200,`A menu can take up only the space necessary to fit its content`),Vu(),jh(201,t0,1,0,`ng-template`,5),Vu(),is(202,`doc-code-sample`,3)(203,`h3`,4),zC(204,`Evenly Divided`),Vu(),is(205,`p`),zC(206,`A menu can have its items divided evenly`),Vu(),jh(207,i0,1,0,`ng-template`,5),Vu(),is(208,`doc-code-sample`,3)(209,`h3`,4),zC(210,`Attached`),Vu(),is(211,`p`),zC(212,`A menu may be attached to other content segments`),Vu(),jh(213,n0,1,0,`ng-template`,5),Vu(),is(214,`doc-code-sample`,3)(215,`h3`,4),zC(216,`Size`),Vu(),is(217,`p`),zC(218,`A menu can vary in size`),Vu(),jh(219,a0,1,0,`ng-template`,5),Vu(),is(220,`doc-code-sample`,3)(221,`h3`,4),zC(222,`Fitted`),Vu(),is(223,`p`),zC(224,`A menu item or menu can remove element padding, vertically or horizontally`),Vu(),jh(225,l0,1,0,`ng-template`,5),Vu(),is(226,`doc-code-sample`,3)(227,`h3`,4),zC(228,`Borderless`),Vu(),is(229,`p`),zC(230,`A menu item or menu can have no borders`),Vu(),jh(231,d0,1,0,`ng-template`,5),Vu()()),n&2){let a=pC();KD(3),Gh(`templateCode`,a.snippetMenu),KD(6),Gh(`templateCode`,a.snippetMenuEvenly)(`componentCode`,a.snippetMenuEvenlyTs),KD(4),Gh(`templateCode`,a.snippetSecondary)(`componentCode`,a.snippetSecondaryTs),KD(6),Gh(`templateCode`,a.snippetPointing)(`componentCode`,a.snippetPointingTs),KD(6),Gh(`templateCode`,a.snippetSecondaryPointing)(`componentCode`,a.snippetSecondaryPointingTs),KD(4),Gh(`templateCode`,a.snippetTabular)(`componentCode`,a.snippetTabularTs),KD(6),Gh(`templateCode`,a.snippetTabularAttached)(`componentCode`,a.snippetTabularAttachedTs),KD(4),Gh(`templateCode`,a.snippetText)(`componentCode`,a.snippetTextTs),KD(6),Gh(`templateCode`,a.snippetVertical),KD(6),Gh(`templateCode`,a.snippetVerticalSecondary)(`componentCode`,a.snippetVerticalSecondaryTs),KD(4),Gh(`templateCode`,a.snippetPagination),KD(9),Gh(`templateCode`,a.snippetHeader),KD(14),Gh(`templateCode`,a.snippetTextContent),KD(6),Gh(`templateCode`,a.snippetInput),KD(6),Gh(`templateCode`,a.snippetButton),KD(6),Gh(`templateCode`,a.snippetLinkItem),KD(6),Gh(`templateCode`,a.snippetDropdownItem),KD(6),Gh(`templateCode`,a.snippetSubMenu),KD(17),Gh(`templateCode`,a.snippetHover),KD(14),Gh(`templateCode`,a.snippetActive),KD(6),Gh(`templateCode`,a.snippetDisabled),KD(9),Gh(`templateCode`,a.snippetStackable),KD(6),Gh(`templateCode`,a.snippetInverted)(`componentCode`,a.snippetInvertedTs),KD(6),Gh(`templateCode`,a.snippetColored)(`componentCode`,a.snippetColoredTs),KD(6),Gh(`templateCode`,a.snippetColoredMenu)(`componentCode`,a.snippetColoredMenuTs),KD(4),Gh(`templateCode`,a.snippetIcons),KD(6),Gh(`templateCode`,a.snippetLabeledIcon),KD(6),Gh(`templateCode`,a.snippetFluid),KD(8),Gh(`templateCode`,a.snippetCompact),KD(6),Gh(`templateCode`,a.snippetEvenlyDivided),KD(6),Gh(`templateCode`,a.snippetAttached),KD(6),Gh(`templateCode`,a.snippetSize),KD(6),Gh(`templateCode`,a.snippetFitted),KD(6),Gh(`templateCode`,a.snippetBorderless)}}function m0(n,s){n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`sui-menu`),Vu(),is(3,`h4`,4),zC(4,`Properties`),Vu(),is(5,`table`,8)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is(10,`th`),zC(11,`Description`),Vu(),is(12,`th`),zC(13,`Type`),Vu(),is(14,`th`),zC(15,`Default`),Vu()()(),is(16,`tbody`)(17,`tr`)(18,`td`),zC(19,` suiWidth `),Vu(),is(20,`td`),zC(21,` Divide the menu into a number of evenly sized items. Allowed values are `),is(22,`span`,9),zC(23,`'one'`),Vu(),zC(24,` through `),is(25,`span`,9),zC(26,`'sixteen'`),Vu(),zC(27,` | `),is(28,`span`,9),zC(29,`null`),Vu()(),is(30,`td`)(31,`div`,10),zC(32,` string `),Vu()(),is(33,`td`)(34,`div`,11),zC(35,` null `),Vu()()(),is(36,`tr`)(37,`td`),zC(38,` suiColour `),Vu(),is(39,`td`),zC(40,` Set the colour of the menu. Allowed values are `),is(41,`span`,9),zC(42,`'red'`),Vu(),zC(43,` | `),is(44,`span`,9),zC(45,`'orange'`),Vu(),zC(46,` | `),is(47,`span`,9),zC(48,`'yellow'`),Vu(),zC(49,` | `),is(50,`span`,9),zC(51,`'olive'`),Vu(),zC(52,` | `),is(53,`span`,9),zC(54,`'green'`),Vu(),zC(55,` | `),is(56,`span`,9),zC(57,`'teal'`),Vu(),zC(58,` | `),is(59,`span`,9),zC(60,`'blue'`),Vu(),zC(61,` | `),is(62,`span`,9),zC(63,`'violet'`),Vu(),zC(64,` | `),is(65,`span`,9),zC(66,`'purple'`),Vu(),zC(67,` | `),is(68,`span`,9),zC(69,`'pink'`),Vu(),zC(70,` | `),is(71,`span`,9),zC(72,`'brown'`),Vu(),zC(73,` | `),is(74,`span`,9),zC(75,`'grey'`),Vu(),zC(76,` | `),is(77,`span`,9),zC(78,`'black'`),Vu(),zC(79,` | `),is(80,`span`,9),zC(81,`null`),Vu()(),is(82,`td`)(83,`div`,10),zC(84,` string `),Vu()(),is(85,`td`)(86,`div`,11),zC(87,` null `),Vu()()(),is(88,`tr`)(89,`td`),zC(90,` suiSize `),Vu(),is(91,`td`),zC(92,` Set the size of the menu. Allowed values are `),is(93,`span`,9),zC(94,`'mini'`),Vu(),zC(95,` | `),is(96,`span`,9),zC(97,`'tiny'`),Vu(),zC(98,` | `),is(99,`span`,9),zC(100,`'small'`),Vu(),zC(101,` | `),is(102,`span`,9),zC(103,`'large'`),Vu(),zC(104,` | `),is(105,`span`,9),zC(106,`'huge'`),Vu(),zC(107,` | `),is(108,`span`,9),zC(109,`'massive'`),Vu(),zC(110,` | `),is(111,`span`,9),zC(112,`null`),Vu()(),is(113,`td`)(114,`div`,10),zC(115,` string `),Vu()(),is(116,`td`)(117,`div`,11),zC(118,` null `),Vu()()(),is(119,`tr`)(120,`td`),zC(121,` suiAttached `),Vu(),is(122,`td`),zC(123,` Attach the menu to other content. Allowed values are `),is(124,`span`,9),zC(125,`'top'`),Vu(),zC(126,` | `),is(127,`span`,9),zC(128,`'bottom'`),Vu(),zC(129,` | `),is(130,`span`,9),zC(131,`'attached'`),Vu(),zC(132,` | `),is(133,`span`,9),zC(134,`null`),Vu()(),is(135,`td`)(136,`div`,10),zC(137,` string `),Vu()(),is(138,`td`)(139,`div`,11),zC(140,` null `),Vu()()(),is(141,`tr`)(142,`td`),zC(143,` suiFixed `),Vu(),is(144,`td`),zC(145,` Fix the menu to a side of the viewport. Allowed values are `),is(146,`span`,9),zC(147,`'top'`),Vu(),zC(148,` | `),is(149,`span`,9),zC(150,`'bottom'`),Vu(),zC(151,` | `),is(152,`span`,9),zC(153,`'left'`),Vu(),zC(154,` | `),is(155,`span`,9),zC(156,`'right'`),Vu(),zC(157,` | `),is(158,`span`,9),zC(159,`null`),Vu()(),is(160,`td`)(161,`div`,10),zC(162,` string `),Vu()(),is(163,`td`)(164,`div`,11),zC(165,` null `),Vu()()(),is(166,`tr`)(167,`td`),zC(168,` suiIcon `),Vu(),is(169,`td`),zC(170,` Format the menu for icon items. Allowed values are `),is(171,`span`,9),zC(172,`'icon'`),Vu(),zC(173,` | `),is(174,`span`,9),zC(175,`'labeled icon'`),Vu(),zC(176,` | `),is(177,`span`,9),zC(178,`null`),Vu()(),is(179,`td`)(180,`div`,10),zC(181,` string `),Vu()(),is(182,`td`)(183,`div`,11),zC(184,` null `),Vu()()(),is(185,`tr`)(186,`td`),zC(187,` suiSecondary `),Vu(),is(188,`td`),zC(189,` De-emphasize the contents of the menu `),Vu(),is(190,`td`)(191,`div`,10),zC(192,` boolean `),Vu()(),is(193,`td`)(194,`div`,11),zC(195,` false `),Vu()()(),is(196,`tr`)(197,`td`),zC(198,` suiPointing `),Vu(),is(199,`td`),zC(200,` Point to show the relationship to nearby content `),Vu(),is(201,`td`)(202,`div`,10),zC(203,` boolean `),Vu()(),is(204,`td`)(205,`div`,11),zC(206,` false `),Vu()()(),is(207,`tr`)(208,`td`),zC(209,` suiTabular `),Vu(),is(210,`td`),zC(211,` Format the menu as tabs `),Vu(),is(212,`td`)(213,`div`,10),zC(214,` boolean `),Vu()(),is(215,`td`)(216,`div`,11),zC(217,` false `),Vu()()(),is(218,`tr`)(219,`td`),zC(220,` suiText `),Vu(),is(221,`td`),zC(222,` Format the menu for text content `),Vu(),is(223,`td`)(224,`div`,10),zC(225,` boolean `),Vu()(),is(226,`td`)(227,`div`,11),zC(228,` false `),Vu()()(),is(229,`tr`)(230,`td`),zC(231,` suiVertical `),Vu(),is(232,`td`),zC(233,` Display the items vertically `),Vu(),is(234,`td`)(235,`div`,10),zC(236,` boolean `),Vu()(),is(237,`td`)(238,`div`,11),zC(239,` false `),Vu()()(),is(240,`tr`)(241,`td`),zC(242,` suiPagination `),Vu(),is(243,`td`),zC(244,` Format the menu for pagination links `),Vu(),is(245,`td`)(246,`div`,10),zC(247,` boolean `),Vu()(),is(248,`td`)(249,`div`,11),zC(250,` false `),Vu()()(),is(251,`tr`)(252,`td`),zC(253,` suiInverted `),Vu(),is(254,`td`),zC(255,` Invert the colours of the menu `),Vu(),is(256,`td`)(257,`div`,10),zC(258,` boolean `),Vu()(),is(259,`td`)(260,`div`,11),zC(261,` false `),Vu()()(),is(262,`tr`)(263,`td`),zC(264,` suiFluid `),Vu(),is(265,`td`),zC(266,` Make a vertical menu take the width of its container `),Vu(),is(267,`td`)(268,`div`,10),zC(269,` boolean `),Vu()(),is(270,`td`)(271,`div`,11),zC(272,` false `),Vu()()(),is(273,`tr`)(274,`td`),zC(275,` suiCompact `),Vu(),is(276,`td`),zC(277,` Only take up the space needed to fit the items `),Vu(),is(278,`td`)(279,`div`,10),zC(280,` boolean `),Vu()(),is(281,`td`)(282,`div`,11),zC(283,` false `),Vu()()(),is(284,`tr`)(285,`td`),zC(286,` suiStackable `),Vu(),is(287,`td`),zC(288,` Stack the items at mobile resolutions `),Vu(),is(289,`td`)(290,`div`,10),zC(291,` boolean `),Vu()(),is(292,`td`)(293,`div`,11),zC(294,` false `),Vu()()(),is(295,`tr`)(296,`td`),zC(297,` suiBorderless `),Vu(),is(298,`td`),zC(299,` Remove the item borders `),Vu(),is(300,`td`)(301,`div`,10),zC(302,` boolean `),Vu()(),is(303,`td`)(304,`div`,11),zC(305,` false `),Vu()()(),is(306,`tr`)(307,`td`),zC(308,` suiRight `),Vu(),is(309,`td`),zC(310,` Position the menu on the right `),Vu(),is(311,`td`)(312,`div`,10),zC(313,` boolean `),Vu()(),is(314,`td`)(315,`div`,11),zC(316,` false `),Vu()()()()(),is(317,`h2`,2),zC(318,`suiMenuItem`),Vu(),is(319,`h4`,4),zC(320,`Properties`),Vu(),is(321,`table`,8)(322,`thead`)(323,`tr`)(324,`th`),zC(325,`Property`),Vu(),is(326,`th`),zC(327,`Description`),Vu(),is(328,`th`),zC(329,`Type`),Vu(),is(330,`th`),zC(331,`Default`),Vu()()(),is(332,`tbody`)(333,`tr`)(334,`td`),zC(335,` suiColour `),Vu(),is(336,`td`),zC(337,` Set the colour of the item. Allowed values are `),is(338,`span`,9),zC(339,`'red'`),Vu(),zC(340,` | `),is(341,`span`,9),zC(342,`'orange'`),Vu(),zC(343,` | `),is(344,`span`,9),zC(345,`'yellow'`),Vu(),zC(346,` | `),is(347,`span`,9),zC(348,`'olive'`),Vu(),zC(349,` | `),is(350,`span`,9),zC(351,`'green'`),Vu(),zC(352,` | `),is(353,`span`,9),zC(354,`'teal'`),Vu(),zC(355,` | `),is(356,`span`,9),zC(357,`'blue'`),Vu(),zC(358,` | `),is(359,`span`,9),zC(360,`'violet'`),Vu(),zC(361,` | `),is(362,`span`,9),zC(363,`'purple'`),Vu(),zC(364,` | `),is(365,`span`,9),zC(366,`'pink'`),Vu(),zC(367,` | `),is(368,`span`,9),zC(369,`'brown'`),Vu(),zC(370,` | `),is(371,`span`,9),zC(372,`'grey'`),Vu(),zC(373,` | `),is(374,`span`,9),zC(375,`'black'`),Vu(),zC(376,` | `),is(377,`span`,9),zC(378,`null`),Vu()(),is(379,`td`)(380,`div`,10),zC(381,` string `),Vu()(),is(382,`td`)(383,`div`,11),zC(384,` null `),Vu()()(),is(385,`tr`)(386,`td`),zC(387,` suiFitted `),Vu(),is(388,`td`),zC(389,` Remove the padding from the item. Allowed values are `),is(390,`span`,9),zC(391,`'fitted'`),Vu(),zC(392,` | `),is(393,`span`,9),zC(394,`'horizontally fitted'`),Vu(),zC(395,` | `),is(396,`span`,9),zC(397,`'vertically fitted'`),Vu(),zC(398,` | `),is(399,`span`,9),zC(400,`null`),Vu()(),is(401,`td`)(402,`div`,10),zC(403,` string `),Vu()(),is(404,`td`)(405,`div`,11),zC(406,` null `),Vu()()(),is(407,`tr`)(408,`td`),zC(409,` suiActive `),Vu(),is(410,`td`),zC(411,` Mark the item as active `),Vu(),is(412,`td`)(413,`div`,10),zC(414,` boolean `),Vu()(),is(415,`td`)(416,`div`,11),zC(417,` false `),Vu()()(),is(418,`tr`)(419,`td`),zC(420,` suiHeader `),Vu(),is(421,`td`),zC(422,` Format the item as a header `),Vu(),is(423,`td`)(424,`div`,10),zC(425,` boolean `),Vu()(),is(426,`td`)(427,`div`,11),zC(428,` false `),Vu()()(),is(429,`tr`)(430,`td`),zC(431,` suiLink `),Vu(),is(432,`td`),zC(433,` Format the item as a link `),Vu(),is(434,`td`)(435,`div`,10),zC(436,` boolean `),Vu()(),is(437,`td`)(438,`div`,11),zC(439,` false `),Vu()()(),is(440,`tr`)(441,`td`),zC(442,` suiBrowser `),Vu(),is(443,`td`),zC(444,` Format the item as a browser item `),Vu(),is(445,`td`)(446,`div`,10),zC(447,` boolean `),Vu()(),is(448,`td`)(449,`div`,11),zC(450,` false `),Vu()()(),is(451,`tr`)(452,`td`),zC(453,` disabled `),Vu(),is(454,`td`),zC(455,` Disable the item `),Vu(),is(456,`td`)(457,`div`,10),zC(458,` boolean `),Vu()(),is(459,`td`)(460,`div`,11),zC(461,` false `),Vu()()()()(),is(462,`h2`,2),zC(463,`suiSubMenu`),Vu(),is(464,`h4`,4),zC(465,`Properties`),Vu(),is(466,`table`,8)(467,`thead`)(468,`tr`)(469,`th`),zC(470,`Property`),Vu(),is(471,`th`),zC(472,`Description`),Vu(),is(473,`th`),zC(474,`Type`),Vu(),is(475,`th`),zC(476,`Default`),Vu()()(),is(477,`tbody`)(478,`tr`)(479,`td`),zC(480,` suiRight `),Vu(),is(481,`td`),zC(482,` Float the group of items to the right of the parent menu `),Vu(),is(483,`td`)(484,`div`,10),zC(485,` boolean `),Vu()(),is(486,`td`)(487,`div`,11),zC(488,` false `),Vu()()()()()())}var qa=(()=>{class n{constructor(a){this.snippetMenu=En,this.snippetMenuEvenly=gn,this.snippetMenuEvenlyTs=bn,this.snippetSecondary=yn,this.snippetSecondaryTs=Cn,this.snippetPointing=Fn,this.snippetPointingTs=Dn,this.snippetSecondaryPointing=Mn,this.snippetSecondaryPointingTs=_n,this.snippetTabular=wn,this.snippetTabularTs=Tn,this.snippetTabularAttached=In,this.snippetTabularAttachedTs=An,this.snippetText=kn,this.snippetTextTs=Bn,this.snippetVertical=Gn,this.snippetVerticalSecondary=Nn,this.snippetVerticalSecondaryTs=Wn,this.snippetPagination=Rn,this.snippetHeader=Pn,this.snippetTextContent=zn,this.snippetInput=Jn,this.snippetButton=Ln,this.snippetLinkItem=Hn,this.snippetDropdownItem=Vn,this.snippetSubMenu=qn,this.snippetHover=On,this.snippetActive=Un,this.snippetDisabled=jn,this.snippetStackable=Yn,this.snippetInverted=Xn,this.snippetInvertedTs=$n,this.snippetColored=Kn,this.snippetColoredTs=Qn,this.snippetColoredMenu=Zn,this.snippetColoredMenuTs=ea,this.snippetIcons=ta,this.snippetLabeledIcon=ia,this.snippetFluid=na,this.snippetCompact=aa,this.snippetEvenlyDivided=la,this.snippetAttached=da,this.snippetSize=ra,this.snippetFitted=ma,this.snippetBorderless=oa,a.setTitle(`Menu | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-menu`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Menu`,`subHeader`,`A menu displays grouped navigation actions`,`semanticUrl`,`https://semantic-ui.com/collections/menu.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`,`componentCode`],[`sui-message`,``,`suiState`,`info`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(is(0,`doc-page`,0),jh(1,r0,232,45,`div`,1)(2,m0,489,0,`div`,1),Vu()),l&2&&(KD(),Gh(`docPageContent`,`definition`),KD(),Gh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$2,Ws$1,li$1,U$1,fi$2,sa,ca,pa,ua,va,xa,Sa,ha,fa,Ea,ga,ba,ya,Ca,Fa,Da,Ma,_a,wa,Ta,Ia,Aa,ka,Ba,Ga,Na,Wa,Ra,Pa,za,Ja,La,Ha,Va],encapsulation:2,changeDetection:1})}}return n})();var Oa=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Header</th>
    <th>Header</th>
    <th>Header</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  </tbody>
  <tfoot>
  <tr>
    <th colspan="3">
      <div sui-menu
           suiPagination
           class="right floated">
        <a suiMenuItem><i sui-icon suiIconType="chevron left"></i></a>
        <a suiMenuItem>1</a>
        <a suiMenuItem>2</a>
        <a suiMenuItem>3</a>
        <a suiMenuItem><i sui-icon suiIconType="chevron right"></i></a>
      </div>
    </th>
  </tr>
  </tfoot>
</table>
`;var Ua=`<table sui-table
       suiDefinition>
  <thead>
  <tr>
    <th></th>
    <th>Arguments</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>reset rating</td>
    <td>None</td>
    <td>Resets rating to default value</td>
  </tr>
  <tr>
    <td>set rating</td>
    <td>rating (integer)</td>
    <td>Sets the current star rating to specified value</td>
  </tr>
  </tbody>
</table>
`;var ja=`<table sui-table
       suiCelled
       suiStructured>
  <thead>
  <tr>
    <th rowspan="2">Name</th>
    <th rowspan="2">Type</th>
    <th rowspan="2">Files</th>
    <th colspan="3">Languages</th>
  </tr>
  <tr>
    <th>Ruby</th>
    <th>JavaScript</th>
    <th>Python</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Alpha Team</td>
    <td>Project 1</td>
    <td suiTableCell suiTextAlignment="right">2</td>
    <td suiTableCell suiTextAlignment="center"><i sui-icon suiIconType="large green checkmark"></i></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Beta Team</td>
    <td>Project 1</td>
    <td suiTableCell suiTextAlignment="right">52</td>
    <td suiTableCell suiTextAlignment="center"><i sui-icon suiIconType="large green checkmark"></i></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Project 2</td>
    <td suiTableCell suiTextAlignment="right">12</td>
    <td></td>
    <td suiTableCell suiTextAlignment="center"><i sui-icon suiIconType="large green checkmark"></i></td>
    <td></td>
  </tr>
  </tbody>
</table>
`;var Ya=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>No Name Specified</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  <tr suiTableRow suiState="positive">
    <td>Jimmy</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td suiTableCell suiState="negative">Unknown</td>
    <td>Requires call</td>
  </tr>
  <tr suiTableRow suiState="negative">
    <td>Jill</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Xa=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr suiTableRow suiState="error">
    <td>No Name Specified</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jimmy</td>
    <td suiTableCell suiState="error">Cannot pull data</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Unknown</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
`;var $a=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr suiTableRow suiState="warning">
    <td>No Name Specified</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jimmy</td>
    <td>Approved</td>
    <td suiTableCell suiState="warning">Requires call</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Unknown</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Ka=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr suiTableRow suiActive>
    <td>John</td>
    <td>Selected</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td suiTableCell suiActive>Approved</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Qa=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr suiTableRow disabled>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Selected</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td suiTableCell disabled>Approved</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var Za=`<table sui-table
       suiCelled
       suiSingleLine>
  <thead>
  <tr>
    <th>Name</th>
    <th>Registration Date</th>
    <th>E-mail address</th>
    <th>Premium Plan</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John Lilki</td>
    <td>September 14, 2013</td>
    <td>jhlilk22@yahoo.com</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Jamie Harington</td>
    <td>January 11, 2014</td>
    <td>jamieharingonton@yahoo.com</td>
    <td>Yes</td>
  </tr>
  </tbody>
</table>
`;var el=`<table sui-table
       suiCelled
       suiFixed>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</td>
  </tr>
  </tbody>
</table>
`;var tl=`<table sui-table
       suiCelled
       suiStacking="unstackable">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiCelled
       suiStacking="tablet stackable">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var il=`<table sui-table
       suiCelled
       suiSelectable>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var nl=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>No Action</td>
    <td suiTableCell suiSelectable><a href="#">Edit</a></td>
  </tr>
  <tr suiTableRow suiState="warning">
    <td>Jimmy</td>
    <td>Requires Action</td>
    <td suiTableCell suiSelectable><a href="#">Edit</a></td>
  </tr>
  </tbody>
</table>
`;var al=`<table sui-table
       suiStriped>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td suiTableCell suiVerticalAlignment="top">Notes<br>1<br>2<br></td>
  </tr>
  <tr suiTableRow suiVerticalAlignment="bottom">
    <td>Jamie</td>
    <td>Approved</td>
    <td>Notes<br>1<br>2<br></td>
  </tr>
  </tbody>
</table>
`;var ll=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th suiTableHeaderCell suiTextAlignment="right">Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td suiTableCell suiTextAlignment="right">None</td>
  </tr>
  <tr suiTableRow suiTextAlignment="center">
    <td>Jamie</td>
    <td>Approved</td>
    <td suiTableCell suiTextAlignment="right">Requires call</td>
  </tr>
  </tbody>
</table>
`;var dl=`<table sui-table
       suiCelled
       suiStriped>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var rl=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ml=`<table sui-table
       suiBasic="basic">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiBasic="very basic">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ol=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th>Name</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td suiTableCell suiCollapsing><i sui-icon suiIconType="folder"></i> node_modules</td>
    <td>Initial commit</td>
  </tr>
  <tr>
    <td suiTableCell suiCollapsing><i sui-icon suiIconType="folder"></i> test</td>
    <td>Initial commit</td>
  </tr>
  <tr>
    <td suiTableCell suiCollapsing><i sui-icon suiIconType="file outline"></i> Makefile</td>
    <td>Initial commit</td>
  </tr>
  </tbody>
</table>
`;var sl=`<table sui-table
       suiCelled>
  <thead>
  <tr>
    <th suiTableHeaderCell suiWidth="ten">Name</th>
    <th suiTableHeaderCell suiWidth="six">Status</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
  </tr>
  </tbody>
</table>
`;var cl=`<table sui-table
       suiCelled
       suiWidth="three">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var pl=`<table sui-table
       suiCelled
       suiCollapsing>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var ul=`<table sui-table
       suiColour="red">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="orange">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="yellow">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="green">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="teal">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiColour="blue">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
`;var vl=`<table sui-table
       suiInverted>
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiInverted
       suiColour="teal">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var xl=`<table sui-table
       suiCelled
       suiSortable>
  <thead>
  <tr>
    <th suiTableHeaderCell
        [suiSorted]="sortedBy('name')"
        (click)="sort('name')">Name</th>
    <th suiTableHeaderCell
        [suiSorted]="sortedBy('age')"
        (click)="sort('age')">Age</th>
    <th suiTableHeaderCell
        [suiSorted]="sortedBy('job')"
        (click)="sort('job')">Job</th>
  </tr>
  </thead>
  <tbody>
  @for (person of people; track person.name) {
    <tr>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
      <td>{{ person.job }}</td>
    </tr>
  }
  </tbody>
</table>
`;var Sl=`import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
  job: string;
}

@Component({
  selector: 'app-sortable-table',
  templateUrl: './sortable-table.component.html'
})
export class SortableTableComponent {
  people: Person[] = [
    { name: 'John', age: 15, job: 'Student' },
    { name: 'Jamie', age: 42, job: 'Engineer' },
    { name: 'Jill', age: 29, job: 'Designer' },
    { name: 'Ahmed', age: 34, job: 'Accountant' }
  ];
  sortColumn: keyof Person | null = null;
  sortDirection: 'ascending' | 'descending' = 'ascending';

  sort(column: keyof Person): void {
    this.sortDirection = this.sortColumn === column && this.sortDirection === 'ascending' ? 'descending' : 'ascending';
    this.sortColumn = column;
    const factor = this.sortDirection === 'ascending' ? 1 : -1;
    this.people = [...this.people].sort((a, b) => (a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0) * factor);
  }

  sortedBy(column: keyof Person): 'ascending' | 'descending' | null {
    return this.sortColumn === column ? this.sortDirection : null;
  }
}
`;var hl=`<table sui-table
       suiCelled
       suiDefinition
       suiCompact="compact">
  <thead class="full-width">
  <tr>
    <th></th>
    <th>Name</th>
    <th>Registration Date</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td suiTableCell suiCollapsing>1</td>
    <td>John Lilki</td>
    <td>September 14, 2013</td>
  </tr>
  <tr>
    <td suiTableCell suiCollapsing>2</td>
    <td>Jamie Harington</td>
    <td>January 11, 2014</td>
  </tr>
  </tbody>
  <tfoot class="full-width">
  <tr>
    <th></th>
    <th colspan="2">
      <div sui-button
           suiSize="small"
           suiEmphasis="primary">Approve</div>
    </th>
  </tr>
  </tfoot>
</table>
`;var fl=`<table sui-table
       suiCelled
       suiPadded="padded">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiCelled
       suiPadded="very padded">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var El=`<table sui-table
       suiCelled
       suiCompact="compact">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiCelled
       suiCompact="very compact">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var gl=`<table sui-table
       suiSize="small">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiSize="large">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var bl=`<table sui-table
       suiAttached="top attached">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>John</td>
    <td>Approved</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiAttached="attached">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Jamie</td>
    <td>Approved</td>
    <td>Requires call</td>
  </tr>
  </tbody>
</table>
<table sui-table
       suiAttached="bottom attached">
  <thead>
  <tr>
    <th>Name</th>
    <th>Status</th>
    <th>Notes</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Jill</td>
    <td>Denied</td>
    <td>None</td>
  </tr>
  </tbody>
</table>
`;var J0=(n,s)=>s.name;function L0(n,s){if(n&1&&(is(0,`tr`)(1,`td`),zC(2),Vu(),is(3,`td`),zC(4),Vu(),is(5,`td`),zC(6),Vu()()),n&2){let a=s.$implicit;KD(2),gg(a.name),KD(2),gg(a.age),KD(2),gg(a.job)}}var F=class{constructor(){this.people=[{name:`John`,age:15,job:`Student`},{name:`Jamie`,age:42,job:`Engineer`},{name:`Jill`,age:29,job:`Designer`},{name:`Ahmed`,age:34,job:`Accountant`}],this.sortColumn=null,this.sortDirection=`ascending`}sort(s){this.sortDirection=this.sortColumn===s&&this.sortDirection===`ascending`?`descending`:`ascending`,this.sortColumn=s;let a=this.sortDirection===`ascending`?1:-1;this.people=[...this.people].sort((l,d)=>(l[s]>d[s]?1:l[s]<d[s]?-1:0)*a)}sortedBy(s){return this.sortColumn===s?this.sortDirection:null}};var yl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-table-example`]],standalone:!1,features:[uo$1],decls:45,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`colspan`,`3`],[`sui-menu`,``,`suiPagination`,``,1,`right`,`floated`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`chevron left`],[`sui-icon`,``,`suiIconType`,`chevron right`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Header`),Vu(),is(5,`th`),zC(6,`Header`),Vu(),is(7,`th`),zC(8,`Header`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`Cell`),Vu(),is(13,`td`),zC(14,`Cell`),Vu(),is(15,`td`),zC(16,`Cell`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Cell`),Vu(),is(20,`td`),zC(21,`Cell`),Vu(),is(22,`td`),zC(23,`Cell`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Cell`),Vu(),is(27,`td`),zC(28,`Cell`),Vu(),is(29,`td`),zC(30,`Cell`),Vu()()(),is(31,`tfoot`)(32,`tr`)(33,`th`,1)(34,`div`,2)(35,`a`,3),zh(36,`i`,4),Vu(),is(37,`a`,3),zC(38,`1`),Vu(),is(39,`a`,3),zC(40,`2`),Vu(),is(41,`a`,3),zC(42,`3`),Vu(),is(43,`a`,3),zh(44,`i`,5),Vu()()()()()())},dependencies:[we,U$1,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Cl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-definition-example`]],standalone:!1,features:[uo$1],decls:23,vars:0,consts:[[`sui-table`,``,`suiDefinition`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`),zh(3,`th`),is(4,`th`),zC(5,`Arguments`),Vu(),is(6,`th`),zC(7,`Description`),Vu()()(),is(8,`tbody`)(9,`tr`)(10,`td`),zC(11,`reset rating`),Vu(),is(12,`td`),zC(13,`None`),Vu(),is(14,`td`),zC(15,`Resets rating to default value`),Vu()(),is(16,`tr`)(17,`td`),zC(18,`set rating`),Vu(),is(19,`td`),zC(20,`rating (integer)`),Vu(),is(21,`td`),zC(22,`Sets the current star rating to specified value`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Fl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-structured-example`]],standalone:!1,features:[uo$1],decls:50,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiStructured`,``],[`rowspan`,`2`],[`colspan`,`3`],[`suiTableCell`,``,`suiTextAlignment`,`right`],[`suiTableCell`,``,`suiTextAlignment`,`center`],[`sui-icon`,``,`suiIconType`,`large green checkmark`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`,1),zC(4,`Name`),Vu(),is(5,`th`,1),zC(6,`Type`),Vu(),is(7,`th`,1),zC(8,`Files`),Vu(),is(9,`th`,2),zC(10,`Languages`),Vu()(),is(11,`tr`)(12,`th`),zC(13,`Ruby`),Vu(),is(14,`th`),zC(15,`JavaScript`),Vu(),is(16,`th`),zC(17,`Python`),Vu()()(),is(18,`tbody`)(19,`tr`)(20,`td`),zC(21,`Alpha Team`),Vu(),is(22,`td`),zC(23,`Project 1`),Vu(),is(24,`td`,3),zC(25,`2`),Vu(),is(26,`td`,4),zh(27,`i`,5),Vu(),zh(28,`td`)(29,`td`),Vu(),is(30,`tr`)(31,`td`,1),zC(32,`Beta Team`),Vu(),is(33,`td`),zC(34,`Project 1`),Vu(),is(35,`td`,3),zC(36,`52`),Vu(),is(37,`td`,4),zh(38,`i`,5),Vu(),zh(39,`td`)(40,`td`),Vu(),is(41,`tr`)(42,`td`),zC(43,`Project 2`),Vu(),is(44,`td`,3),zC(45,`12`),Vu(),zh(46,`td`),is(47,`td`,4),zh(48,`i`,5),Vu(),zh(49,`td`),Vu()()())},dependencies:[we,U$1,G],encapsulation:2,changeDetection:1})}}return n})();var Dl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-positive-negative-example`]],standalone:!1,features:[uo$1],decls:38,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`suiState`,`positive`],[`suiTableCell`,``,`suiState`,`negative`],[`suiTableRow`,``,`suiState`,`negative`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`No Name Specified`),Vu(),is(13,`td`),zC(14,`Unknown`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`,1)(18,`td`),zC(19,`Jimmy`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`None`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jamie`),Vu(),is(27,`td`,2),zC(28,`Unknown`),Vu(),is(29,`td`),zC(30,`Requires call`),Vu()(),is(31,`tr`,3)(32,`td`),zC(33,`Jill`),Vu(),is(34,`td`),zC(35,`Unknown`),Vu(),is(36,`td`),zC(37,`None`),Vu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Ml=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-error-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`suiState`,`error`],[`suiTableCell`,``,`suiState`,`error`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`,1)(11,`td`),zC(12,`No Name Specified`),Vu(),is(13,`td`),zC(14,`Unknown`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jimmy`),Vu(),is(20,`td`,2),zC(21,`Cannot pull data`),Vu(),is(22,`td`),zC(23,`None`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jamie`),Vu(),is(27,`td`),zC(28,`Unknown`),Vu(),is(29,`td`),zC(30,`Requires call`),Vu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var _l=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-warning-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`suiState`,`warning`],[`suiTableCell`,``,`suiState`,`warning`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`,1)(11,`td`),zC(12,`No Name Specified`),Vu(),is(13,`td`),zC(14,`Unknown`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jimmy`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`,2),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jamie`),Vu(),is(27,`td`),zC(28,`Unknown`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var wl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-active-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`suiActive`,``],[`suiTableCell`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`,1)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Selected`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`,2),zC(28,`Approved`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Tl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-disabled-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`disabled`,``],[`suiTableCell`,``,`disabled`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`,1)(11,`td`),zC(12,`Jamie`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`Requires call`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`John`),Vu(),is(20,`td`),zC(21,`Selected`),Vu(),is(22,`td`),zC(23,`None`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`,2),zC(28,`Approved`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Il=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-single-line-example`]],standalone:!1,features:[uo$1],decls:30,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiSingleLine`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Registration Date`),Vu(),is(7,`th`),zC(8,`E-mail address`),Vu(),is(9,`th`),zC(10,`Premium Plan`),Vu()()(),is(11,`tbody`)(12,`tr`)(13,`td`),zC(14,`John Lilki`),Vu(),is(15,`td`),zC(16,`September 14, 2013`),Vu(),is(17,`td`),zC(18,`jhlilk22@yahoo.com`),Vu(),is(19,`td`),zC(20,`No`),Vu()(),is(21,`tr`)(22,`td`),zC(23,`Jamie Harington`),Vu(),is(24,`td`),zC(25,`January 11, 2014`),Vu(),is(26,`td`),zC(27,`jamieharingonton@yahoo.com`),Vu(),is(28,`td`),zC(29,`Yes`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Al=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-fixed-example`]],standalone:!1,features:[uo$1],decls:24,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiFixed`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Description`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var kl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-stacking-example`]],standalone:!1,features:[uo$1],decls:62,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiStacking`,`unstackable`],[`sui-table`,``,`suiCelled`,``,`suiStacking`,`tablet stackable`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()(),is(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),zC(35,`Name`),Vu(),is(36,`th`),zC(37,`Status`),Vu(),is(38,`th`),zC(39,`Notes`),Vu()()(),is(40,`tbody`)(41,`tr`)(42,`td`),zC(43,`John`),Vu(),is(44,`td`),zC(45,`Approved`),Vu(),is(46,`td`),zC(47,`None`),Vu()(),is(48,`tr`)(49,`td`),zC(50,`Jamie`),Vu(),is(51,`td`),zC(52,`Approved`),Vu(),is(53,`td`),zC(54,`Requires call`),Vu()(),is(55,`tr`)(56,`td`),zC(57,`Jill`),Vu(),is(58,`td`),zC(59,`Denied`),Vu(),is(60,`td`),zC(61,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Bl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-selectable-row-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiSelectable`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Gl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-selectable-cell-example`]],standalone:!1,features:[uo$1],decls:26,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableCell`,``,`suiSelectable`,``],[`href`,`#`],[`suiTableRow`,``,`suiState`,`warning`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`No Action`),Vu(),is(15,`td`,1)(16,`a`,2),zC(17,`Edit`),Vu()()(),is(18,`tr`,3)(19,`td`),zC(20,`Jimmy`),Vu(),is(21,`td`),zC(22,`Requires Action`),Vu(),is(23,`td`,1)(24,`a`,2),zC(25,`Edit`),Vu()()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Nl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-vertical-alignment-example`]],standalone:!1,features:[uo$1],decls:34,vars:0,consts:[[`sui-table`,``,`suiStriped`,``],[`suiTableCell`,``,`suiVerticalAlignment`,`top`],[`suiTableRow`,``,`suiVerticalAlignment`,`bottom`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`,1),zC(16,`Notes`),zh(17,`br`),zC(18,`1`),zh(19,`br`),zC(20,`2`),zh(21,`br`),Vu()(),is(22,`tr`,2)(23,`td`),zC(24,`Jamie`),Vu(),is(25,`td`),zC(26,`Approved`),Vu(),is(27,`td`),zC(28,`Notes`),zh(29,`br`),zC(30,`1`),zh(31,`br`),zC(32,`2`),zh(33,`br`),Vu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Wl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-text-alignment-example`]],standalone:!1,features:[uo$1],decls:24,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableHeaderCell`,``,`suiTextAlignment`,`right`],[`suiTableCell`,``,`suiTextAlignment`,`right`],[`suiTableRow`,``,`suiTextAlignment`,`center`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`,1),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`,2),zC(16,`None`),Vu()(),is(17,`tr`,3)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`,2),zC(23,`Requires call`),Vu()()()())},dependencies:[U$1,q,G,J],encapsulation:2,changeDetection:1})}}return n})();var Rl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-striped-example`]],standalone:!1,features:[uo$1],decls:52,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiStriped`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()(),is(31,`tr`)(32,`td`),zC(33,`John`),Vu(),is(34,`td`),zC(35,`Approved`),Vu(),is(36,`td`),zC(37,`None`),Vu()(),is(38,`tr`)(39,`td`),zC(40,`Jamie`),Vu(),is(41,`td`),zC(42,`Approved`),Vu(),is(43,`td`),zC(44,`Requires call`),Vu()(),is(45,`tr`)(46,`td`),zC(47,`Jill`),Vu(),is(48,`td`),zC(49,`Denied`),Vu(),is(50,`td`),zC(51,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Pl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-celled-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var zl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-basic-example`]],standalone:!1,features:[uo$1],decls:62,vars:0,consts:[[`sui-table`,``,`suiBasic`,`basic`],[`sui-table`,``,`suiBasic`,`very basic`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()(),is(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),zC(35,`Name`),Vu(),is(36,`th`),zC(37,`Status`),Vu(),is(38,`th`),zC(39,`Notes`),Vu()()(),is(40,`tbody`)(41,`tr`)(42,`td`),zC(43,`John`),Vu(),is(44,`td`),zC(45,`Approved`),Vu(),is(46,`td`),zC(47,`None`),Vu()(),is(48,`tr`)(49,`td`),zC(50,`Jamie`),Vu(),is(51,`td`),zC(52,`Approved`),Vu(),is(53,`td`),zC(54,`Requires call`),Vu()(),is(55,`tr`)(56,`td`),zC(57,`Jill`),Vu(),is(58,`td`),zC(59,`Denied`),Vu(),is(60,`td`),zC(61,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Jl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-collapsing-cell-example`]],standalone:!1,features:[uo$1],decls:26,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableCell`,``,`suiCollapsing`,``],[`sui-icon`,``,`suiIconType`,`folder`],[`sui-icon`,``,`suiIconType`,`file outline`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Notes`),Vu()()(),is(7,`tbody`)(8,`tr`)(9,`td`,1),zh(10,`i`,2),zC(11,` node_modules`),Vu(),is(12,`td`),zC(13,`Initial commit`),Vu()(),is(14,`tr`)(15,`td`,1),zh(16,`i`,2),zC(17,` test`),Vu(),is(18,`td`),zC(19,`Initial commit`),Vu()(),is(20,`tr`)(21,`td`,1),zh(22,`i`,3),zC(23,` Makefile`),Vu(),is(24,`td`),zC(25,`Initial commit`),Vu()()()())},dependencies:[we,U$1,G],encapsulation:2,changeDetection:1})}}return n})();var Ll=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-column-width-example`]],standalone:!1,features:[uo$1],decls:23,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableHeaderCell`,``,`suiWidth`,`ten`],[`suiTableHeaderCell`,``,`suiWidth`,`six`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`,1),zC(4,`Name`),Vu(),is(5,`th`,2),zC(6,`Status`),Vu()()(),is(7,`tbody`)(8,`tr`)(9,`td`),zC(10,`John`),Vu(),is(11,`td`),zC(12,`Approved`),Vu()(),is(13,`tr`)(14,`td`),zC(15,`Jamie`),Vu(),is(16,`td`),zC(17,`Approved`),Vu()(),is(18,`tr`)(19,`td`),zC(20,`Jill`),Vu(),is(21,`td`),zC(22,`Denied`),Vu()()()())},dependencies:[U$1,J],encapsulation:2,changeDetection:1})}}return n})();var Hl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-column-count-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiWidth`,`three`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Vl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-collapsing-example`]],standalone:!1,features:[uo$1],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiCollapsing`,``]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var ql=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-colored-example`]],standalone:!1,features:[uo$1],decls:144,vars:0,consts:[[`sui-table`,``,`suiColour`,`red`],[`sui-table`,``,`suiColour`,`orange`],[`sui-table`,``,`suiColour`,`yellow`],[`sui-table`,``,`suiColour`,`green`],[`sui-table`,``,`suiColour`,`teal`],[`sui-table`,``,`suiColour`,`blue`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()()()(),is(24,`table`,1)(25,`thead`)(26,`tr`)(27,`th`),zC(28,`Name`),Vu(),is(29,`th`),zC(30,`Status`),Vu(),is(31,`th`),zC(32,`Notes`),Vu()()(),is(33,`tbody`)(34,`tr`)(35,`td`),zC(36,`John`),Vu(),is(37,`td`),zC(38,`Approved`),Vu(),is(39,`td`),zC(40,`None`),Vu()(),is(41,`tr`)(42,`td`),zC(43,`Jamie`),Vu(),is(44,`td`),zC(45,`Approved`),Vu(),is(46,`td`),zC(47,`Requires call`),Vu()()()(),is(48,`table`,2)(49,`thead`)(50,`tr`)(51,`th`),zC(52,`Name`),Vu(),is(53,`th`),zC(54,`Status`),Vu(),is(55,`th`),zC(56,`Notes`),Vu()()(),is(57,`tbody`)(58,`tr`)(59,`td`),zC(60,`John`),Vu(),is(61,`td`),zC(62,`Approved`),Vu(),is(63,`td`),zC(64,`None`),Vu()(),is(65,`tr`)(66,`td`),zC(67,`Jamie`),Vu(),is(68,`td`),zC(69,`Approved`),Vu(),is(70,`td`),zC(71,`Requires call`),Vu()()()(),is(72,`table`,3)(73,`thead`)(74,`tr`)(75,`th`),zC(76,`Name`),Vu(),is(77,`th`),zC(78,`Status`),Vu(),is(79,`th`),zC(80,`Notes`),Vu()()(),is(81,`tbody`)(82,`tr`)(83,`td`),zC(84,`John`),Vu(),is(85,`td`),zC(86,`Approved`),Vu(),is(87,`td`),zC(88,`None`),Vu()(),is(89,`tr`)(90,`td`),zC(91,`Jamie`),Vu(),is(92,`td`),zC(93,`Approved`),Vu(),is(94,`td`),zC(95,`Requires call`),Vu()()()(),is(96,`table`,4)(97,`thead`)(98,`tr`)(99,`th`),zC(100,`Name`),Vu(),is(101,`th`),zC(102,`Status`),Vu(),is(103,`th`),zC(104,`Notes`),Vu()()(),is(105,`tbody`)(106,`tr`)(107,`td`),zC(108,`John`),Vu(),is(109,`td`),zC(110,`Approved`),Vu(),is(111,`td`),zC(112,`None`),Vu()(),is(113,`tr`)(114,`td`),zC(115,`Jamie`),Vu(),is(116,`td`),zC(117,`Approved`),Vu(),is(118,`td`),zC(119,`Requires call`),Vu()()()(),is(120,`table`,5)(121,`thead`)(122,`tr`)(123,`th`),zC(124,`Name`),Vu(),is(125,`th`),zC(126,`Status`),Vu(),is(127,`th`),zC(128,`Notes`),Vu()()(),is(129,`tbody`)(130,`tr`)(131,`td`),zC(132,`John`),Vu(),is(133,`td`),zC(134,`Approved`),Vu(),is(135,`td`),zC(136,`None`),Vu()(),is(137,`tr`)(138,`td`),zC(139,`Jamie`),Vu(),is(140,`td`),zC(141,`Approved`),Vu(),is(142,`td`),zC(143,`Requires call`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Ol=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-inverted-example`]],standalone:!1,features:[uo$1],decls:62,vars:0,consts:[[`sui-table`,``,`suiInverted`,``],[`sui-table`,``,`suiInverted`,``,`suiColour`,`teal`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()(),is(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),zC(35,`Name`),Vu(),is(36,`th`),zC(37,`Status`),Vu(),is(38,`th`),zC(39,`Notes`),Vu()()(),is(40,`tbody`)(41,`tr`)(42,`td`),zC(43,`John`),Vu(),is(44,`td`),zC(45,`Approved`),Vu(),is(46,`td`),zC(47,`None`),Vu()(),is(48,`tr`)(49,`td`),zC(50,`Jamie`),Vu(),is(51,`td`),zC(52,`Approved`),Vu(),is(53,`td`),zC(54,`Requires call`),Vu()(),is(55,`tr`)(56,`td`),zC(57,`Jill`),Vu(),is(58,`td`),zC(59,`Denied`),Vu(),is(60,`td`),zC(61,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Ul=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-sortable-example`]],standalone:!1,features:[uo$1],decls:12,vars:3,consts:[[`sui-table`,``,`suiCelled`,``,`suiSortable`,``],[`suiTableHeaderCell`,``,3,`click`,`suiSorted`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`,1),Kh(`click`,function(){return d.sort(`name`)}),zC(4,`Name`),Vu(),is(5,`th`,1),Kh(`click`,function(){return d.sort(`age`)}),zC(6,`Age`),Vu(),is(7,`th`,1),Kh(`click`,function(){return d.sort(`job`)}),zC(8,`Job`),Vu()()(),is(9,`tbody`),oC(10,L0,7,3,`tr`,null,J0),Vu()()),l&2&&(KD(3),Gh(`suiSorted`,d.sortedBy(`name`)),KD(2),Gh(`suiSorted`,d.sortedBy(`age`)),KD(2),Gh(`suiSorted`,d.sortedBy(`job`)),KD(3),iC(d.people))},dependencies:[U$1,J],encapsulation:2,changeDetection:1})}}return n})();var jl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-full-width-example`]],standalone:!1,features:[uo$1],decls:29,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``,`suiCompact`,`compact`],[1,`full-width`],[`suiTableCell`,``,`suiCollapsing`,``],[`colspan`,`2`],[`sui-button`,``,`suiSize`,`small`,`suiEmphasis`,`primary`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`,1)(2,`tr`),zh(3,`th`),is(4,`th`),zC(5,`Name`),Vu(),is(6,`th`),zC(7,`Registration Date`),Vu()()(),is(8,`tbody`)(9,`tr`)(10,`td`,2),zC(11,`1`),Vu(),is(12,`td`),zC(13,`John Lilki`),Vu(),is(14,`td`),zC(15,`September 14, 2013`),Vu()(),is(16,`tr`)(17,`td`,2),zC(18,`2`),Vu(),is(19,`td`),zC(20,`Jamie Harington`),Vu(),is(21,`td`),zC(22,`January 11, 2014`),Vu()()(),is(23,`tfoot`,1)(24,`tr`),zh(25,`th`),is(26,`th`,3)(27,`div`,4),zC(28,`Approve`),Vu()()()()())},dependencies:[U$1,G,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var Yl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-padded-example`]],standalone:!1,features:[uo$1],decls:62,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiPadded`,`padded`],[`sui-table`,``,`suiCelled`,``,`suiPadded`,`very padded`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()(),is(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),zC(35,`Name`),Vu(),is(36,`th`),zC(37,`Status`),Vu(),is(38,`th`),zC(39,`Notes`),Vu()()(),is(40,`tbody`)(41,`tr`)(42,`td`),zC(43,`John`),Vu(),is(44,`td`),zC(45,`Approved`),Vu(),is(46,`td`),zC(47,`None`),Vu()(),is(48,`tr`)(49,`td`),zC(50,`Jamie`),Vu(),is(51,`td`),zC(52,`Approved`),Vu(),is(53,`td`),zC(54,`Requires call`),Vu()(),is(55,`tr`)(56,`td`),zC(57,`Jill`),Vu(),is(58,`td`),zC(59,`Denied`),Vu(),is(60,`td`),zC(61,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Xl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-compact-example`]],standalone:!1,features:[uo$1],decls:62,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiCompact`,`compact`],[`sui-table`,``,`suiCelled`,``,`suiCompact`,`very compact`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()(),is(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),zC(35,`Name`),Vu(),is(36,`th`),zC(37,`Status`),Vu(),is(38,`th`),zC(39,`Notes`),Vu()()(),is(40,`tbody`)(41,`tr`)(42,`td`),zC(43,`John`),Vu(),is(44,`td`),zC(45,`Approved`),Vu(),is(46,`td`),zC(47,`None`),Vu()(),is(48,`tr`)(49,`td`),zC(50,`Jamie`),Vu(),is(51,`td`),zC(52,`Approved`),Vu(),is(53,`td`),zC(54,`Requires call`),Vu()(),is(55,`tr`)(56,`td`),zC(57,`Jill`),Vu(),is(58,`td`),zC(59,`Denied`),Vu(),is(60,`td`),zC(61,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var $l=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-size-example`]],standalone:!1,features:[uo$1],decls:62,vars:0,consts:[[`sui-table`,``,`suiSize`,`small`],[`sui-table`,``,`suiSize`,`large`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()(),is(17,`tr`)(18,`td`),zC(19,`Jamie`),Vu(),is(20,`td`),zC(21,`Approved`),Vu(),is(22,`td`),zC(23,`Requires call`),Vu()(),is(24,`tr`)(25,`td`),zC(26,`Jill`),Vu(),is(27,`td`),zC(28,`Denied`),Vu(),is(29,`td`),zC(30,`None`),Vu()()()(),is(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),zC(35,`Name`),Vu(),is(36,`th`),zC(37,`Status`),Vu(),is(38,`th`),zC(39,`Notes`),Vu()()(),is(40,`tbody`)(41,`tr`)(42,`td`),zC(43,`John`),Vu(),is(44,`td`),zC(45,`Approved`),Vu(),is(46,`td`),zC(47,`None`),Vu()(),is(48,`tr`)(49,`td`),zC(50,`Jamie`),Vu(),is(51,`td`),zC(52,`Approved`),Vu(),is(53,`td`),zC(54,`Requires call`),Vu()(),is(55,`tr`)(56,`td`),zC(57,`Jill`),Vu(),is(58,`td`),zC(59,`Denied`),Vu(),is(60,`td`),zC(61,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Kl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table-attached-example`]],standalone:!1,features:[uo$1],decls:51,vars:0,consts:[[`sui-table`,``,`suiAttached`,`top attached`],[`sui-table`,``,`suiAttached`,`attached`],[`sui-table`,``,`suiAttached`,`bottom attached`]],template:function(l,d){l&1&&(is(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),zC(4,`Name`),Vu(),is(5,`th`),zC(6,`Status`),Vu(),is(7,`th`),zC(8,`Notes`),Vu()()(),is(9,`tbody`)(10,`tr`)(11,`td`),zC(12,`John`),Vu(),is(13,`td`),zC(14,`Approved`),Vu(),is(15,`td`),zC(16,`None`),Vu()()()(),is(17,`table`,1)(18,`thead`)(19,`tr`)(20,`th`),zC(21,`Name`),Vu(),is(22,`th`),zC(23,`Status`),Vu(),is(24,`th`),zC(25,`Notes`),Vu()()(),is(26,`tbody`)(27,`tr`)(28,`td`),zC(29,`Jamie`),Vu(),is(30,`td`),zC(31,`Approved`),Vu(),is(32,`td`),zC(33,`Requires call`),Vu()()()(),is(34,`table`,2)(35,`thead`)(36,`tr`)(37,`th`),zC(38,`Name`),Vu(),is(39,`th`),zC(40,`Status`),Vu(),is(41,`th`),zC(42,`Notes`),Vu()()(),is(43,`tbody`)(44,`tr`)(45,`td`),zC(46,`Jill`),Vu(),is(47,`td`),zC(48,`Denied`),Vu(),is(49,`td`),zC(50,`None`),Vu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();function V0(n,s){n&1&&zh(0,`doc-table-table-example`)}function q0(n,s){n&1&&zh(0,`doc-table-definition-example`)}function O0(n,s){n&1&&zh(0,`doc-table-structured-example`)}function U0(n,s){n&1&&zh(0,`doc-table-positive-negative-example`)}function j0(n,s){n&1&&zh(0,`doc-table-error-example`)}function Y0(n,s){n&1&&zh(0,`doc-table-warning-example`)}function X0(n,s){n&1&&zh(0,`doc-table-active-example`)}function $0(n,s){n&1&&zh(0,`doc-table-disabled-example`)}function K0(n,s){n&1&&zh(0,`doc-table-single-line-example`)}function Q0(n,s){n&1&&zh(0,`doc-table-fixed-example`)}function Z0(n,s){n&1&&zh(0,`doc-table-stacking-example`)}function ec(n,s){n&1&&zh(0,`doc-table-selectable-row-example`)}function tc(n,s){n&1&&zh(0,`doc-table-selectable-cell-example`)}function ic(n,s){n&1&&zh(0,`doc-table-vertical-alignment-example`)}function nc(n,s){n&1&&zh(0,`doc-table-text-alignment-example`)}function ac(n,s){n&1&&zh(0,`doc-table-striped-example`)}function lc(n,s){n&1&&zh(0,`doc-table-celled-example`)}function dc(n,s){n&1&&zh(0,`doc-table-basic-example`)}function rc(n,s){n&1&&zh(0,`doc-table-collapsing-cell-example`)}function mc(n,s){n&1&&zh(0,`doc-table-column-width-example`)}function oc(n,s){n&1&&zh(0,`doc-table-column-count-example`)}function sc(n,s){n&1&&zh(0,`doc-table-collapsing-example`)}function cc(n,s){n&1&&zh(0,`doc-table-colored-example`)}function pc(n,s){n&1&&zh(0,`doc-table-inverted-example`)}function uc(n,s){n&1&&zh(0,`doc-table-sortable-example`)}function vc(n,s){n&1&&zh(0,`doc-table-full-width-example`)}function xc(n,s){n&1&&zh(0,`doc-table-padded-example`)}function Sc(n,s){n&1&&zh(0,`doc-table-compact-example`)}function hc(n,s){n&1&&zh(0,`doc-table-size-example`)}function fc(n,s){n&1&&zh(0,`doc-table-attached-example`)}function Ec(n,s){if(n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Table`),Vu(),is(6,`p`),zC(7,`A standard table`),Vu(),jh(8,V0,1,0,`ng-template`,5),Vu(),is(9,`doc-code-sample`,3)(10,`h3`,4),zC(11,`Definition`),Vu(),is(12,`p`),zC(13,`A table may be formatted to emphasize a first column that defines a rows content`),Vu(),jh(14,q0,1,0,`ng-template`,5),Vu(),is(15,`doc-code-sample`,3)(16,`h3`,4),zC(17,`Structured`),Vu(),is(18,`p`),zC(19,`A table can be formatted to display complex structured data`),Vu(),jh(20,O0,1,0,`ng-template`,5),Vu(),zh(21,`br`),is(22,`h2`,2),zC(23,`States`),Vu(),is(24,`doc-code-sample`,3)(25,`h3`,4),zC(26,`Positive / Negative`),Vu(),is(27,`p`),zC(28,`A cell or row may let a user know whether a value is good or bad`),Vu(),jh(29,U0,1,0,`ng-template`,5),Vu(),is(30,`doc-code-sample`,3)(31,`h3`,4),zC(32,`Error`),Vu(),is(33,`p`),zC(34,`A cell or row may call attention to an error or a negative value`),Vu(),jh(35,j0,1,0,`ng-template`,5),Vu(),is(36,`doc-code-sample`,3)(37,`h3`,4),zC(38,`Warning`),Vu(),is(39,`p`),zC(40,`A cell or row may warn a user`),Vu(),jh(41,Y0,1,0,`ng-template`,5),Vu(),is(42,`doc-code-sample`,3)(43,`h3`,4),zC(44,`Active`),Vu(),is(45,`p`),zC(46,`A cell or row can be active or selected by a user`),Vu(),jh(47,X0,1,0,`ng-template`,5),Vu(),is(48,`doc-code-sample`,3)(49,`h3`,4),zC(50,`Disabled`),Vu(),is(51,`p`),zC(52,`A cell can be disabled`),Vu(),jh(53,$0,1,0,`ng-template`,5),Vu(),zh(54,`br`),is(55,`h2`,2),zC(56,`Variations`),Vu(),is(57,`doc-code-sample`,3)(58,`h3`,4),zC(59,`Single Line`),Vu(),is(60,`p`),zC(61,`A table can specify that its cell contents should remain on a single line and not wrap`),Vu(),jh(62,K0,1,0,`ng-template`,5),Vu(),is(63,`doc-code-sample`,3)(64,`h3`,4),zC(65,`Fixed`),Vu(),is(66,`p`),zC(67,`A table can use table-layout: fixed a special faster form of table rendering that does not resize table cells based on content`),Vu(),is(68,`div`,6),zC(69,` Fixed tables will automatically ellipsis overflowing text. Use `),is(70,`code`),zC(71,`suiSingleLine`),Vu(),zC(72,` to prevent wrapping. `),Vu(),jh(73,Q0,1,0,`ng-template`,5),Vu(),is(74,`doc-code-sample`,3)(75,`h3`,4),zC(76,`Stacking`),Vu(),is(77,`p`),zC(78,`A table can specify how it stacks table content responsively`),Vu(),is(79,`div`,6),zC(80,` Tables are stackable on mobile by default. Use `),is(81,`code`),zC(82,`unstackable`),Vu(),zC(83,` to prevent this, or `),is(84,`code`),zC(85,`tablet stackable`),Vu(),zC(86,` to also stack on tablets. `),Vu(),jh(87,Z0,1,0,`ng-template`,5),Vu(),is(88,`doc-code-sample`,3)(89,`h3`,4),zC(90,`Selectable Row`),Vu(),is(91,`p`),zC(92,`A table can have its rows appear selectable`),Vu(),jh(93,ec,1,0,`ng-template`,5),Vu(),is(94,`doc-code-sample`,3)(95,`h3`,4),zC(96,`Selectable Cell`),Vu(),is(97,`p`),zC(98,`A table cell can be selectable`),Vu(),is(99,`div`,6),zC(100,` A selectable cell requires a link inside it to size the click area. `),Vu(),jh(101,tc,1,0,`ng-template`,5),Vu(),is(102,`doc-code-sample`,3)(103,`h3`,4),zC(104,`Vertical Alignment`),Vu(),is(105,`p`),zC(106,`A table header, row, or cell can adjust its vertical alignment`),Vu(),jh(107,ic,1,0,`ng-template`,5),Vu(),is(108,`doc-code-sample`,3)(109,`h3`,4),zC(110,`Text Alignment`),Vu(),is(111,`p`),zC(112,`A table header, row, or cell can adjust its text alignment`),Vu(),jh(113,nc,1,0,`ng-template`,5),Vu(),is(114,`doc-code-sample`,3)(115,`h3`,4),zC(116,`Striped`),Vu(),is(117,`p`),zC(118,`A table can stripe alternate rows of content with a darker color to increase contrast`),Vu(),jh(119,ac,1,0,`ng-template`,5),Vu(),is(120,`doc-code-sample`,3)(121,`h3`,4),zC(122,`Celled`),Vu(),is(123,`p`),zC(124,`A table may be divided each row into separate cells`),Vu(),jh(125,lc,1,0,`ng-template`,5),Vu(),is(126,`doc-code-sample`,3)(127,`h3`,4),zC(128,`Basic`),Vu(),is(129,`p`),zC(130,`A table can reduce its complexity to increase readability`),Vu(),jh(131,dc,1,0,`ng-template`,5),Vu(),is(132,`doc-code-sample`,3)(133,`h3`,4),zC(134,`Collapsing Cell`),Vu(),is(135,`p`),zC(136,`A cell can be collapsing so that it only uses as much space as required`),Vu(),jh(137,rc,1,0,`ng-template`,5),Vu(),is(138,`doc-code-sample`,3)(139,`h3`,4),zC(140,`Column Width`),Vu(),is(141,`p`),zC(142,`A table can specify the width of individual columns independently`),Vu(),jh(143,mc,1,0,`ng-template`,5),Vu(),is(144,`doc-code-sample`,3)(145,`h3`,4),zC(146,`Column Count`),Vu(),is(147,`p`),zC(148,`A table can specify its column count to divide its content evenly`),Vu(),jh(149,oc,1,0,`ng-template`,5),Vu(),is(150,`doc-code-sample`,3)(151,`h3`,4),zC(152,`Collapsing`),Vu(),is(153,`p`),zC(154,`A table can be collapsing, taking up only as much space as its rows`),Vu(),jh(155,sc,1,0,`ng-template`,5),Vu(),is(156,`doc-code-sample`,3)(157,`h3`,4),zC(158,`Colored`),Vu(),is(159,`p`),zC(160,`A table can be given a color to distinguish it from other tables`),Vu(),is(161,`div`,6),zC(162,` Any of the colours `),is(163,`span`,7),zC(164,`'red'`),Vu(),zC(165,` | `),is(166,`span`,7),zC(167,`'orange'`),Vu(),zC(168,` | `),is(169,`span`,7),zC(170,`'yellow'`),Vu(),zC(171,` | `),is(172,`span`,7),zC(173,`'olive'`),Vu(),zC(174,` | `),is(175,`span`,7),zC(176,`'green'`),Vu(),zC(177,` | `),is(178,`span`,7),zC(179,`'teal'`),Vu(),zC(180,` | `),is(181,`span`,7),zC(182,`'blue'`),Vu(),zC(183,` | `),is(184,`span`,7),zC(185,`'violet'`),Vu(),zC(186,` | `),is(187,`span`,7),zC(188,`'purple'`),Vu(),zC(189,` | `),is(190,`span`,7),zC(191,`'pink'`),Vu(),zC(192,` | `),is(193,`span`,7),zC(194,`'brown'`),Vu(),zC(195,` | `),is(196,`span`,7),zC(197,`'grey'`),Vu(),zC(198,` | `),is(199,`span`,7),zC(200,`'black'`),Vu(),zC(201,` can be used. `),Vu(),jh(202,cc,1,0,`ng-template`,5),Vu(),is(203,`doc-code-sample`,3)(204,`h3`,4),zC(205,`Inverted`),Vu(),is(206,`p`),zC(207,`A table's colors can be inverted`),Vu(),jh(208,pc,1,0,`ng-template`,5),Vu(),is(209,`doc-code-sample`,8)(210,`h3`,4),zC(211,`Sortable`),Vu(),is(212,`p`),zC(213,`A table may allow a user to sort contents by clicking on a table header`),Vu(),is(214,`div`,6),zC(215,` Sorting is done by your component; `),is(216,`code`),zC(217,`suiSorted`),Vu(),zC(218,` only shows the current sort direction on the header. `),Vu(),jh(219,uc,1,0,`ng-template`,5),Vu(),is(220,`doc-code-sample`,3)(221,`h3`,4),zC(222,`Full-Width Header / Footer`),Vu(),is(223,`p`),zC(224,`A definition table can have a full width header or footer, filling in the gap left by the first column`),Vu(),is(225,`div`,6),zC(226,` Add the `),is(227,`code`),zC(228,`full-width`),Vu(),zC(229,` class to a `),is(230,`code`),zC(231,`thead`),Vu(),zC(232,` or `),is(233,`code`),zC(234,`tfoot`),Vu(),zC(235,`. `),Vu(),jh(236,vc,1,0,`ng-template`,5),Vu(),is(237,`doc-code-sample`,3)(238,`h3`,4),zC(239,`Padded`),Vu(),is(240,`p`),zC(241,`A table may sometimes need to be more padded for legibility`),Vu(),jh(242,xc,1,0,`ng-template`,5),Vu(),is(243,`doc-code-sample`,3)(244,`h3`,4),zC(245,`Compact`),Vu(),is(246,`p`),zC(247,`A table may sometimes need to be more compact to make more rows visible at a time`),Vu(),jh(248,Sc,1,0,`ng-template`,5),Vu(),is(249,`doc-code-sample`,3)(250,`h3`,4),zC(251,`Size`),Vu(),is(252,`p`),zC(253,`A table can also be small or large`),Vu(),jh(254,hc,1,0,`ng-template`,5),Vu(),is(255,`doc-code-sample`,3)(256,`h3`,4),zC(257,`Attached`),Vu(),is(258,`p`),zC(259,`A table can be attached to other content on a page`),Vu(),jh(260,fc,1,0,`ng-template`,5),Vu()()),n&2){let a=pC();KD(3),Gh(`templateCode`,a.snippetTable),KD(6),Gh(`templateCode`,a.snippetDefinition),KD(6),Gh(`templateCode`,a.snippetStructured),KD(9),Gh(`templateCode`,a.snippetPositiveNegative),KD(6),Gh(`templateCode`,a.snippetError),KD(6),Gh(`templateCode`,a.snippetWarning),KD(6),Gh(`templateCode`,a.snippetActive),KD(6),Gh(`templateCode`,a.snippetDisabled),KD(9),Gh(`templateCode`,a.snippetSingleLine),KD(6),Gh(`templateCode`,a.snippetFixed),KD(11),Gh(`templateCode`,a.snippetStacking),KD(14),Gh(`templateCode`,a.snippetSelectableRow),KD(6),Gh(`templateCode`,a.snippetSelectableCell),KD(8),Gh(`templateCode`,a.snippetVerticalAlignment),KD(6),Gh(`templateCode`,a.snippetTextAlignment),KD(6),Gh(`templateCode`,a.snippetStriped),KD(6),Gh(`templateCode`,a.snippetCelled),KD(6),Gh(`templateCode`,a.snippetBasic),KD(6),Gh(`templateCode`,a.snippetCollapsingCell),KD(6),Gh(`templateCode`,a.snippetColumnWidth),KD(6),Gh(`templateCode`,a.snippetColumnCount),KD(6),Gh(`templateCode`,a.snippetCollapsing),KD(6),Gh(`templateCode`,a.snippetColored),KD(47),Gh(`templateCode`,a.snippetInverted),KD(6),Gh(`templateCode`,a.snippetSortable)(`componentCode`,a.snippetSortableTs),KD(11),Gh(`templateCode`,a.snippetFullWidth),KD(17),Gh(`templateCode`,a.snippetPadded),KD(6),Gh(`templateCode`,a.snippetCompact),KD(6),Gh(`templateCode`,a.snippetSize),KD(6),Gh(`templateCode`,a.snippetAttached)}}function gc(n,s){n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`sui-table`),Vu(),is(3,`h4`,4),zC(4,`Properties`),Vu(),is(5,`table`,9)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is(10,`th`),zC(11,`Description`),Vu(),is(12,`th`),zC(13,`Type`),Vu(),is(14,`th`),zC(15,`Default`),Vu()()(),is(16,`tbody`)(17,`tr`)(18,`td`),zC(19,` suiBasic `),Vu(),is(20,`td`),zC(21,` Reduce the complexity of the table. Allowed values are `),is(22,`span`,7),zC(23,`'basic'`),Vu(),zC(24,` | `),is(25,`span`,7),zC(26,`'very basic'`),Vu(),zC(27,` | `),is(28,`span`,7),zC(29,`null`),Vu()(),is(30,`td`)(31,`div`,10),zC(32,` string `),Vu()(),is(33,`td`)(34,`div`,11),zC(35,` null `),Vu()()(),is(36,`tr`)(37,`td`),zC(38,` suiWidth `),Vu(),is(39,`td`),zC(40,` Divide the table into a number of equal columns. Allowed values are `),is(41,`span`,7),zC(42,`'one'`),Vu(),zC(43,` through `),is(44,`span`,7),zC(45,`'sixteen'`),Vu(),zC(46,` | `),is(47,`span`,7),zC(48,`null`),Vu()(),is(49,`td`)(50,`div`,10),zC(51,` string `),Vu()(),is(52,`td`)(53,`div`,11),zC(54,` null `),Vu()()(),is(55,`tr`)(56,`td`),zC(57,` suiColour `),Vu(),is(58,`td`),zC(59,` Set the colour of the table. Allowed values are `),is(60,`span`,7),zC(61,`'red'`),Vu(),zC(62,` | `),is(63,`span`,7),zC(64,`'orange'`),Vu(),zC(65,` | `),is(66,`span`,7),zC(67,`'yellow'`),Vu(),zC(68,` | `),is(69,`span`,7),zC(70,`'olive'`),Vu(),zC(71,` | `),is(72,`span`,7),zC(73,`'green'`),Vu(),zC(74,` | `),is(75,`span`,7),zC(76,`'teal'`),Vu(),zC(77,` | `),is(78,`span`,7),zC(79,`'blue'`),Vu(),zC(80,` | `),is(81,`span`,7),zC(82,`'violet'`),Vu(),zC(83,` | `),is(84,`span`,7),zC(85,`'purple'`),Vu(),zC(86,` | `),is(87,`span`,7),zC(88,`'pink'`),Vu(),zC(89,` | `),is(90,`span`,7),zC(91,`'brown'`),Vu(),zC(92,` | `),is(93,`span`,7),zC(94,`'grey'`),Vu(),zC(95,` | `),is(96,`span`,7),zC(97,`'black'`),Vu(),zC(98,` | `),is(99,`span`,7),zC(100,`null`),Vu()(),is(101,`td`)(102,`div`,10),zC(103,` string `),Vu()(),is(104,`td`)(105,`div`,11),zC(106,` null `),Vu()()(),is(107,`tr`)(108,`td`),zC(109,` suiPadded `),Vu(),is(110,`td`),zC(111,` Increase the padding of the cells. Allowed values are `),is(112,`span`,7),zC(113,`'padded'`),Vu(),zC(114,` | `),is(115,`span`,7),zC(116,`'very padded'`),Vu(),zC(117,` | `),is(118,`span`,7),zC(119,`null`),Vu()(),is(120,`td`)(121,`div`,10),zC(122,` string `),Vu()(),is(123,`td`)(124,`div`,11),zC(125,` null `),Vu()()(),is(126,`tr`)(127,`td`),zC(128,` suiCompact `),Vu(),is(129,`td`),zC(130,` Reduce the padding of the cells. Allowed values are `),is(131,`span`,7),zC(132,`'compact'`),Vu(),zC(133,` | `),is(134,`span`,7),zC(135,`'very compact'`),Vu(),zC(136,` | `),is(137,`span`,7),zC(138,`null`),Vu()(),is(139,`td`)(140,`div`,10),zC(141,` string `),Vu()(),is(142,`td`)(143,`div`,11),zC(144,` null `),Vu()()(),is(145,`tr`)(146,`td`),zC(147,` suiSize `),Vu(),is(148,`td`),zC(149,` Set the size of the table. Allowed values are `),is(150,`span`,7),zC(151,`'small'`),Vu(),zC(152,` | `),is(153,`span`,7),zC(154,`'large'`),Vu(),zC(155,` | `),is(156,`span`,7),zC(157,`null`),Vu()(),is(158,`td`)(159,`div`,10),zC(160,` string `),Vu()(),is(161,`td`)(162,`div`,11),zC(163,` null `),Vu()()(),is(164,`tr`)(165,`td`),zC(166,` suiStacking `),Vu(),is(167,`td`),zC(168,` Control how the table stacks responsively. Allowed values are `),is(169,`span`,7),zC(170,`'unstackable'`),Vu(),zC(171,` | `),is(172,`span`,7),zC(173,`'tablet stackable'`),Vu(),zC(174,` | `),is(175,`span`,7),zC(176,`'mobile stackable'`),Vu(),zC(177,` | `),is(178,`span`,7),zC(179,`'computer stackable'`),Vu(),zC(180,` | `),is(181,`span`,7),zC(182,`'large screen stackable'`),Vu(),zC(183,` | `),is(184,`span`,7),zC(185,`'tablet mobile stackable'`),Vu(),zC(186,` | `),is(187,`span`,7),zC(188,`null`),Vu()(),is(189,`td`)(190,`div`,10),zC(191,` string `),Vu()(),is(192,`td`)(193,`div`,11),zC(194,` null `),Vu()()(),is(195,`tr`)(196,`td`),zC(197,` suiAttached `),Vu(),is(198,`td`),zC(199,` Attach the table to other content. Allowed values are `),is(200,`span`,7),zC(201,`'top attached'`),Vu(),zC(202,` | `),is(203,`span`,7),zC(204,`'attached'`),Vu(),zC(205,` | `),is(206,`span`,7),zC(207,`'bottom attached'`),Vu(),zC(208,` | `),is(209,`span`,7),zC(210,`null`),Vu()(),is(211,`td`)(212,`div`,10),zC(213,` string `),Vu()(),is(214,`td`)(215,`div`,11),zC(216,` null `),Vu()()(),is(217,`tr`)(218,`td`),zC(219,` suiCelled `),Vu(),is(220,`td`),zC(221,` Divide each row into separate cells `),Vu(),is(222,`td`)(223,`div`,10),zC(224,` boolean `),Vu()(),is(225,`td`)(226,`div`,11),zC(227,` false `),Vu()()(),is(228,`tr`)(229,`td`),zC(230,` suiStriped `),Vu(),is(231,`td`),zC(232,` Stripe alternate rows `),Vu(),is(233,`td`)(234,`div`,10),zC(235,` boolean `),Vu()(),is(236,`td`)(237,`div`,11),zC(238,` false `),Vu()()(),is(239,`tr`)(240,`td`),zC(241,` suiDefinition `),Vu(),is(242,`td`),zC(243,` Emphasize the first column `),Vu(),is(244,`td`)(245,`div`,10),zC(246,` boolean `),Vu()(),is(247,`td`)(248,`div`,11),zC(249,` false `),Vu()()(),is(250,`tr`)(251,`td`),zC(252,` suiStructured `),Vu(),is(253,`td`),zC(254,` Format the table for complex structured data `),Vu(),is(255,`td`)(256,`div`,10),zC(257,` boolean `),Vu()(),is(258,`td`)(259,`div`,11),zC(260,` false `),Vu()()(),is(261,`tr`)(262,`td`),zC(263,` suiSingleLine `),Vu(),is(264,`td`),zC(265,` Prevent cell contents from wrapping `),Vu(),is(266,`td`)(267,`div`,10),zC(268,` boolean `),Vu()(),is(269,`td`)(270,`div`,11),zC(271,` false `),Vu()()(),is(272,`tr`)(273,`td`),zC(274,` suiFixed `),Vu(),is(275,`td`),zC(276,` Use a fixed table layout `),Vu(),is(277,`td`)(278,`div`,10),zC(279,` boolean `),Vu()(),is(280,`td`)(281,`div`,11),zC(282,` false `),Vu()()(),is(283,`tr`)(284,`td`),zC(285,` suiSelectable `),Vu(),is(286,`td`),zC(287,` Make the rows appear selectable `),Vu(),is(288,`td`)(289,`div`,10),zC(290,` boolean `),Vu()(),is(291,`td`)(292,`div`,11),zC(293,` false `),Vu()()(),is(294,`tr`)(295,`td`),zC(296,` suiSortable `),Vu(),is(297,`td`),zC(298,` Format the headers as sortable `),Vu(),is(299,`td`)(300,`div`,10),zC(301,` boolean `),Vu()(),is(302,`td`)(303,`div`,11),zC(304,` false `),Vu()()(),is(305,`tr`)(306,`td`),zC(307,` suiInverted `),Vu(),is(308,`td`),zC(309,` Invert the colours of the table `),Vu(),is(310,`td`)(311,`div`,10),zC(312,` boolean `),Vu()(),is(313,`td`)(314,`div`,11),zC(315,` false `),Vu()()(),is(316,`tr`)(317,`td`),zC(318,` suiCollapsing `),Vu(),is(319,`td`),zC(320,` Only take up as much space as the rows need `),Vu(),is(321,`td`)(322,`div`,10),zC(323,` boolean `),Vu()(),is(324,`td`)(325,`div`,11),zC(326,` false `),Vu()()()()(),is(327,`h2`,2),zC(328,`suiTableRow`),Vu(),is(329,`h4`,4),zC(330,`Properties`),Vu(),is(331,`table`,9)(332,`thead`)(333,`tr`)(334,`th`),zC(335,`Property`),Vu(),is(336,`th`),zC(337,`Description`),Vu(),is(338,`th`),zC(339,`Type`),Vu(),is(340,`th`),zC(341,`Default`),Vu()()(),is(342,`tbody`)(343,`tr`)(344,`td`),zC(345,` suiState `),Vu(),is(346,`td`),zC(347,` Set the state of the row. Allowed values are `),is(348,`span`,7),zC(349,`'positive'`),Vu(),zC(350,` | `),is(351,`span`,7),zC(352,`'negative'`),Vu(),zC(353,` | `),is(354,`span`,7),zC(355,`'warning'`),Vu(),zC(356,` | `),is(357,`span`,7),zC(358,`'error'`),Vu(),zC(359,` | `),is(360,`span`,7),zC(361,`null`),Vu()(),is(362,`td`)(363,`div`,10),zC(364,` string `),Vu()(),is(365,`td`)(366,`div`,11),zC(367,` null `),Vu()()(),is(368,`tr`)(369,`td`),zC(370,` suiTextAlignment `),Vu(),is(371,`td`),zC(372,` Set the text alignment of the row. Allowed values are `),is(373,`span`,7),zC(374,`'left'`),Vu(),zC(375,` | `),is(376,`span`,7),zC(377,`'center'`),Vu(),zC(378,` | `),is(379,`span`,7),zC(380,`'right'`),Vu(),zC(381,` | `),is(382,`span`,7),zC(383,`null`),Vu()(),is(384,`td`)(385,`div`,10),zC(386,` string `),Vu()(),is(387,`td`)(388,`div`,11),zC(389,` null `),Vu()()(),is(390,`tr`)(391,`td`),zC(392,` suiVerticalAlignment `),Vu(),is(393,`td`),zC(394,` Set the vertical alignment of the row. Allowed values are `),is(395,`span`,7),zC(396,`'top'`),Vu(),zC(397,` | `),is(398,`span`,7),zC(399,`'middle'`),Vu(),zC(400,` | `),is(401,`span`,7),zC(402,`'bottom'`),Vu(),zC(403,` | `),is(404,`span`,7),zC(405,`null`),Vu()(),is(406,`td`)(407,`div`,10),zC(408,` string `),Vu()(),is(409,`td`)(410,`div`,11),zC(411,` null `),Vu()()(),is(412,`tr`)(413,`td`),zC(414,` suiActive `),Vu(),is(415,`td`),zC(416,` Mark the row as active `),Vu(),is(417,`td`)(418,`div`,10),zC(419,` boolean `),Vu()(),is(420,`td`)(421,`div`,11),zC(422,` false `),Vu()()(),is(423,`tr`)(424,`td`),zC(425,` disabled `),Vu(),is(426,`td`),zC(427,` Disable the row `),Vu(),is(428,`td`)(429,`div`,10),zC(430,` boolean `),Vu()(),is(431,`td`)(432,`div`,11),zC(433,` false `),Vu()()()()(),is(434,`h2`,2),zC(435,`suiTableHeaderCell`),Vu(),is(436,`h4`,4),zC(437,`Properties`),Vu(),is(438,`table`,9)(439,`thead`)(440,`tr`)(441,`th`),zC(442,`Property`),Vu(),is(443,`th`),zC(444,`Description`),Vu(),is(445,`th`),zC(446,`Type`),Vu(),is(447,`th`),zC(448,`Default`),Vu()()(),is(449,`tbody`)(450,`tr`)(451,`td`),zC(452,` suiWidth `),Vu(),is(453,`td`),zC(454,` Set the width of the column. Allowed values are `),is(455,`span`,7),zC(456,`'one'`),Vu(),zC(457,` through `),is(458,`span`,7),zC(459,`'sixteen'`),Vu(),zC(460,` | `),is(461,`span`,7),zC(462,`null`),Vu()(),is(463,`td`)(464,`div`,10),zC(465,` string `),Vu()(),is(466,`td`)(467,`div`,11),zC(468,` null `),Vu()()(),is(469,`tr`)(470,`td`),zC(471,` suiTextAlignment `),Vu(),is(472,`td`),zC(473,` Set the text alignment of the header. Allowed values are `),is(474,`span`,7),zC(475,`'left'`),Vu(),zC(476,` | `),is(477,`span`,7),zC(478,`'center'`),Vu(),zC(479,` | `),is(480,`span`,7),zC(481,`'right'`),Vu(),zC(482,` | `),is(483,`span`,7),zC(484,`null`),Vu()(),is(485,`td`)(486,`div`,10),zC(487,` string `),Vu()(),is(488,`td`)(489,`div`,11),zC(490,` null `),Vu()()(),is(491,`tr`)(492,`td`),zC(493,` suiVerticalAlignment `),Vu(),is(494,`td`),zC(495,` Set the vertical alignment of the header. Allowed values are `),is(496,`span`,7),zC(497,`'top'`),Vu(),zC(498,` | `),is(499,`span`,7),zC(500,`'middle'`),Vu(),zC(501,` | `),is(502,`span`,7),zC(503,`'bottom'`),Vu(),zC(504,` | `),is(505,`span`,7),zC(506,`null`),Vu()(),is(507,`td`)(508,`div`,10),zC(509,` string `),Vu()(),is(510,`td`)(511,`div`,11),zC(512,` null `),Vu()()(),is(513,`tr`)(514,`td`),zC(515,` suiSorted `),Vu(),is(516,`td`),zC(517,` Show the current sort direction. Allowed values are `),is(518,`span`,7),zC(519,`'ascending'`),Vu(),zC(520,` | `),is(521,`span`,7),zC(522,`'descending'`),Vu(),zC(523,` | `),is(524,`span`,7),zC(525,`null`),Vu()(),is(526,`td`)(527,`div`,10),zC(528,` string `),Vu()(),is(529,`td`)(530,`div`,11),zC(531,` null `),Vu()()(),is(532,`tr`)(533,`td`),zC(534,` suiSingleLine `),Vu(),is(535,`td`),zC(536,` Prevent the header contents from wrapping `),Vu(),is(537,`td`)(538,`div`,10),zC(539,` boolean `),Vu()(),is(540,`td`)(541,`div`,11),zC(542,` false `),Vu()()(),is(543,`tr`)(544,`td`),zC(545,` suiCollapsing `),Vu(),is(546,`td`),zC(547,` Only take up as much space as the contents need `),Vu(),is(548,`td`)(549,`div`,10),zC(550,` boolean `),Vu()(),is(551,`td`)(552,`div`,11),zC(553,` false `),Vu()()()()(),is(554,`h2`,2),zC(555,`suiTableCell`),Vu(),is(556,`h4`,4),zC(557,`Properties`),Vu(),is(558,`table`,9)(559,`thead`)(560,`tr`)(561,`th`),zC(562,`Property`),Vu(),is(563,`th`),zC(564,`Description`),Vu(),is(565,`th`),zC(566,`Type`),Vu(),is(567,`th`),zC(568,`Default`),Vu()()(),is(569,`tbody`)(570,`tr`)(571,`td`),zC(572,` suiState `),Vu(),is(573,`td`),zC(574,` Set the state of the cell. Allowed values are `),is(575,`span`,7),zC(576,`'positive'`),Vu(),zC(577,` | `),is(578,`span`,7),zC(579,`'negative'`),Vu(),zC(580,` | `),is(581,`span`,7),zC(582,`'warning'`),Vu(),zC(583,` | `),is(584,`span`,7),zC(585,`'error'`),Vu(),zC(586,` | `),is(587,`span`,7),zC(588,`null`),Vu()(),is(589,`td`)(590,`div`,10),zC(591,` string `),Vu()(),is(592,`td`)(593,`div`,11),zC(594,` null `),Vu()()(),is(595,`tr`)(596,`td`),zC(597,` suiTextAlignment `),Vu(),is(598,`td`),zC(599,` Set the text alignment of the cell. Allowed values are `),is(600,`span`,7),zC(601,`'left'`),Vu(),zC(602,` | `),is(603,`span`,7),zC(604,`'center'`),Vu(),zC(605,` | `),is(606,`span`,7),zC(607,`'right'`),Vu(),zC(608,` | `),is(609,`span`,7),zC(610,`null`),Vu()(),is(611,`td`)(612,`div`,10),zC(613,` string `),Vu()(),is(614,`td`)(615,`div`,11),zC(616,` null `),Vu()()(),is(617,`tr`)(618,`td`),zC(619,` suiVerticalAlignment `),Vu(),is(620,`td`),zC(621,` Set the vertical alignment of the cell. Allowed values are `),is(622,`span`,7),zC(623,`'top'`),Vu(),zC(624,` | `),is(625,`span`,7),zC(626,`'middle'`),Vu(),zC(627,` | `),is(628,`span`,7),zC(629,`'bottom'`),Vu(),zC(630,` | `),is(631,`span`,7),zC(632,`null`),Vu()(),is(633,`td`)(634,`div`,10),zC(635,` string `),Vu()(),is(636,`td`)(637,`div`,11),zC(638,` null `),Vu()()(),is(639,`tr`)(640,`td`),zC(641,` suiActive `),Vu(),is(642,`td`),zC(643,` Mark the cell as active `),Vu(),is(644,`td`)(645,`div`,10),zC(646,` boolean `),Vu()(),is(647,`td`)(648,`div`,11),zC(649,` false `),Vu()()(),is(650,`tr`)(651,`td`),zC(652,` suiCollapsing `),Vu(),is(653,`td`),zC(654,` Only take up as much space as the contents need `),Vu(),is(655,`td`)(656,`div`,10),zC(657,` boolean `),Vu()(),is(658,`td`)(659,`div`,11),zC(660,` false `),Vu()()(),is(661,`tr`)(662,`td`),zC(663,` suiSelectable `),Vu(),is(664,`td`),zC(665,` Make the cell selectable `),Vu(),is(666,`td`)(667,`div`,10),zC(668,` boolean `),Vu()(),is(669,`td`)(670,`div`,11),zC(671,` false `),Vu()()(),is(672,`tr`)(673,`td`),zC(674,` suiSingleLine `),Vu(),is(675,`td`),zC(676,` Prevent the cell contents from wrapping `),Vu(),is(677,`td`)(678,`div`,10),zC(679,` boolean `),Vu()(),is(680,`td`)(681,`div`,11),zC(682,` false `),Vu()()(),is(683,`tr`)(684,`td`),zC(685,` disabled `),Vu(),is(686,`td`),zC(687,` Disable the cell `),Vu(),is(688,`td`)(689,`div`,10),zC(690,` boolean `),Vu()(),is(691,`td`)(692,`div`,11),zC(693,` false `),Vu()()()()()())}var Ql=(()=>{class n{constructor(a){this.snippetTable=Oa,this.snippetDefinition=Ua,this.snippetStructured=ja,this.snippetPositiveNegative=Ya,this.snippetError=Xa,this.snippetWarning=$a,this.snippetActive=Ka,this.snippetDisabled=Qa,this.snippetSingleLine=Za,this.snippetFixed=el,this.snippetStacking=tl,this.snippetSelectableRow=il,this.snippetSelectableCell=nl,this.snippetVerticalAlignment=al,this.snippetTextAlignment=ll,this.snippetStriped=dl,this.snippetCelled=rl,this.snippetBasic=ml,this.snippetCollapsingCell=ol,this.snippetColumnWidth=sl,this.snippetColumnCount=cl,this.snippetCollapsing=pl,this.snippetColored=ul,this.snippetInverted=vl,this.snippetSortable=xl,this.snippetSortableTs=Sl,this.snippetFullWidth=hl,this.snippetPadded=fl,this.snippetCompact=El,this.snippetSize=gl,this.snippetAttached=bl,a.setTitle(`Table | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-table`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Table`,`subHeader`,`A table displays a collections of data grouped into rows`,`semanticUrl`,`https://semantic-ui.com/collections/table.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-message`,``,`suiState`,`info`],[`sui-label`,``],[3,`templateCode`,`componentCode`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(is(0,`doc-page`,0),jh(1,Ec,261,31,`div`,1)(2,gc,694,0,`div`,1),Vu()),l&2&&(KD(),Gh(`docPageContent`,`definition`),KD(),Gh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$2,Ws$1,li$1,U$1,fi$2,yl,Cl,Fl,Dl,Ml,_l,wl,Tl,Il,Al,kl,Bl,Gl,Nl,Wl,Rl,Pl,zl,Jl,Ll,Hl,Vl,ql,Ol,Ul,jl,Yl,Xl,$l,Kl],encapsulation:2,changeDetection:1})}}return n})();var Zl=`<div sui-message suiSize="small">
  <div suiMessageHeader>
    Changes in Service
  </div>
  <p>We updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</div>
`;var ed=`<div sui-message>
  <div suiMessageHeader>
    New Site Features
  </div>
  <ul suiMessageList>
    <li>You can now have cover images on blog pages</li>
    <li>Drafts will now auto-save while writing</li>
  </ul>
</div>
`;var td=`<div sui-message suiIcon>
  <i suiIconType="inbox" sui-icon></i>
  <div suiMessageContent>
    <div sui-header>
      Have you heard about our mailing list?
    </div>
    <p>Get the best news in your e-mail every day.</p>
  </div>
</div>
`;var id=`<div sui-message suiIcon>
  <i suiIconType="notched circle" suiLoading sui-icon></i>
  <div suiMessageContent>
    <div sui-header>
      Just one second
    </div>
    <p>We're fetching that content for you.</p>
  </div>
</div>
`;var nd=`<div sui-message suiDismissible>
  <div suiMessageHeader>
    Welcome back!
  </div>
  <p>This is a special notification which you can dismiss if you're bored with it.</p>
</div>
`;var ad=`<div sui-message suiHidden>
  <p>You can't see me</p>
</div>
`;var ld=`<div sui-message suiVisible>
  <p>You can always see me</p>
</div>
`;var dd=`<div sui-message suiFloating>
  <p>Way to go!</p>
</div>
`;var rd=`<div sui-message suiCompact>
  <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
</div>
`;var md=`<div sui-message suiAttached='attached'>
  <div sui-header>
    Welcome to our site!
  </div>
  <p>Fill out the form below to sign-up for a new account</p>
</div>
<form sui-form class="attached fluid segment">
  <div suiFormFields class="two">
    <div suiFormField>
      <label>First Name</label>
      <input placeholder="First Name" type="text">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input placeholder="Last Name" type="text">
    </div>
  </div>
  <div suiFormField>
    <label>Username</label>
    <input placeholder="Username" type="text">
  </div>
  <div suiFormField>
    <label>Password</label>
    <input type="password">
  </div>
  <div suiFormField suiInline>
    <div class="ui checkbox">
      <input type="checkbox" id="terms">
      <label for="terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <div sui-button suiColour='blue'>Submit</div>
</form>
<div sui-message suiAttached='bottom attached' suiColour='warning'>
  <i suiIconType="help" sui-icon></i>
  Already signed up? <a href="#">Login here</a> instead.
</div>
`;var od=`<div sui-message suiColour='warning' suiDismissible>
  <div suiMessageHeader>
    You must register before you can do that!
  </div>
  <p>Visit our registration page, then try again</p>
</div>
`;var sd=`<div sui-message suiColour='info' suiDismissible>
  <div suiMessageHeader>
    Was this what you wanted?
  </div>
  <p>It's good to see you again</p>
</div>
`;var cd=`<div sui-message suiColour='positive' suiDismissible>
  <div suiMessageHeader>
    You are eligible for a reward
  </div>
  <p>Go to your special offers page to see now</p>
</div>
`;var pd=`<div sui-message suiColour='negative' suiDismissible>
  <div suiMessageHeader>
    We're sorry we can't apply that discount
  </div>
  <p>That offer has expired</p>
</div>
`;var ud=`<div sui-message suiColour='red'>Red</div>
<div sui-message suiColour='orange'>Orange</div>
<div sui-message suiColour='yellow'>Yellow</div>
<div sui-message suiColour='olive'>Olive</div>
<div sui-message suiColour='green'>Green</div>
<div sui-message suiColour='teal'>Teal</div>
<div sui-message suiColour='blue'>Blue</div>
<div sui-message suiColour='violet'>Violet</div>
<div sui-message suiColour='purple'>Purple</div>
<div sui-message suiColour='pink'>Pink</div>
<div sui-message suiColour='brown'>Brown</div>
<div sui-message suiColour='black'>Black</div>
`;var vd=`<div sui-message suiSize='mini'>This is a mini message</div>
<div sui-message suiSize='tiny'>This is a tiny message</div>
<div sui-message suiSize='small'>This is a small message</div>
<div sui-message suiSize='large'>This is a large message</div>
<div sui-message suiSize='big'>This is a big message</div>
<div sui-message suiSize='huge'>This is a huge message</div>
<div sui-message suiSize='massive'>This is a massive message</div>
`;var B=class{constructor(){this.isDefinitionsActive=!0}};var xd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-std-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-message`,``,`suiSize`,`small`],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` Changes in Service `),Vu(),is(3,`p`),zC(4,`We updated our privacy policy here to better service our customers. We recommend reviewing the changes.`),Vu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var Sd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-list-example`]],standalone:!1,features:[uo$1],decls:8,vars:0,consts:[[`sui-message`,``],[`suiMessageHeader`,``],[`suiMessageList`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` New Site Features `),Vu(),is(3,`ul`,2)(4,`li`),zC(5,`You can now have cover images on blog pages`),Vu(),is(6,`li`),zC(7,`Drafts will now auto-save while writing`),Vu()()())},dependencies:[li$1,ri$1,pi$3],encapsulation:2,changeDetection:1})}}return n})();var hd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-icon-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-message`,``,`suiIcon`,``],[`suiIconType`,`inbox`,`sui-icon`,``],[`suiMessageContent`,``],[`sui-header`,``]],template:function(l,d){l&1&&(is(0,`div`,0),zh(1,`i`,1),is(2,`div`,2)(3,`div`,3),zC(4,` Have you heard about our mailing list? `),Vu(),is(5,`p`),zC(6,`Get the best news in your e-mail every day.`),Vu()()())},dependencies:[we,Ws$1,li$1,ai$1],encapsulation:2,changeDetection:1})}}return n})();var fd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-icon2-example`]],standalone:!1,features:[uo$1],decls:7,vars:0,consts:[[`sui-message`,``,`suiIcon`,``],[`suiIconType`,`notched circle`,`suiLoading`,``,`sui-icon`,``],[`suiMessageContent`,``],[`sui-header`,``]],template:function(l,d){l&1&&(is(0,`div`,0),zh(1,`i`,1),is(2,`div`,2)(3,`div`,3),zC(4,` Just one second `),Vu(),is(5,`p`),zC(6,`We're fetching that content for you.`),Vu()()())},dependencies:[we,Ws$1,li$1,ai$1],encapsulation:2,changeDetection:1})}}return n})();var Ed=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-dissmisable-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-message`,``,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` Welcome back! `),Vu(),is(3,`p`),zC(4,`This is a special notification which you can dismiss if you're bored with it.`),Vu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var gd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-hidden-example`]],standalone:!1,features:[uo$1],decls:3,vars:0,consts:[[`sui-message`,``,`suiHidden`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`p`),zC(2,`You can't see me`),Vu()())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var bd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-visible-example`]],standalone:!1,features:[uo$1],decls:3,vars:0,consts:[[`sui-message`,``,`suiVisible`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`p`),zC(2,`You can always see me`),Vu()())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var yd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-floating-example`]],standalone:!1,features:[uo$1],decls:3,vars:0,consts:[[`sui-message`,``,`suiFloating`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`p`),zC(2,`Way to go!`),Vu()())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var Cd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-compact-example`]],standalone:!1,features:[uo$1],decls:3,vars:0,consts:[[`sui-message`,``,`suiCompact`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`p`),zC(2,`Get all the best inventions in your e-mail every day. Sign up now!`),Vu()())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var Fd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-attached-example`]],standalone:!1,features:[uo$1],decls:36,vars:0,consts:[[`sui-message`,``,`suiAttached`,`attached`],[`sui-header`,``],[`sui-form`,``,1,`attached`,`fluid`,`segment`],[`suiFormFields`,``,1,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`placeholder`,`Username`,`type`,`text`],[`type`,`password`],[`suiFormField`,``,`suiInline`,``],[1,`ui`,`checkbox`],[`type`,`checkbox`,`id`,`terms`],[`for`,`terms`],[`sui-button`,``,`suiColour`,`blue`],[`sui-message`,``,`suiAttached`,`bottom attached`,`suiColour`,`warning`],[`suiIconType`,`help`,`sui-icon`,``],[`href`,`#`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` Welcome to our site! `),Vu(),is(3,`p`),zC(4,`Fill out the form below to sign-up for a new account`),Vu()(),is(5,`form`,2)(6,`div`,3)(7,`div`,4)(8,`label`),zC(9,`First Name`),Vu(),zh(10,`input`,5),Vu(),is(11,`div`,4)(12,`label`),zC(13,`Last Name`),Vu(),zh(14,`input`,6),Vu()(),is(15,`div`,4)(16,`label`),zC(17,`Username`),Vu(),zh(18,`input`,7),Vu(),is(19,`div`,4)(20,`label`),zC(21,`Password`),Vu(),zh(22,`input`,8),Vu(),is(23,`div`,9)(24,`div`,10),zh(25,`input`,11),is(26,`label`,12),zC(27,`I agree to the terms and conditions`),Vu()()(),is(28,`div`,13),zC(29,`Submit`),Vu()(),is(30,`div`,14),zh(31,`i`,15),zC(32,` Already signed up? `),is(33,`a`,16),zC(34,`Login here`),Vu(),zC(35,` instead.
`),Vu())},dependencies:[hi$1,di$1,xe,Ni$1,wi$1,Oi$1,we,Ws$1,li$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var Dd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-warning-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-message`,``,`suiColour`,`warning`,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` You must register before you can do that! `),Vu(),is(3,`p`),zC(4,`Visit our registration page, then try again`),Vu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var Md=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-info-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-message`,``,`suiColour`,`info`,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` Was this what you wanted? `),Vu(),is(3,`p`),zC(4,`It's good to see you again`),Vu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var _d=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-success-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-message`,``,`suiColour`,`positive`,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` You are eligible for a reward `),Vu(),is(3,`p`),zC(4,`Go to your special offers page to see now`),Vu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var wd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-error-example`]],standalone:!1,features:[uo$1],decls:5,vars:0,consts:[[`sui-message`,``,`suiColour`,`negative`,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`div`,1),zC(2,` We're sorry we can't apply that discount `),Vu(),is(3,`p`),zC(4,`That offer has expired`),Vu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var Td=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-coloured-example`]],standalone:!1,features:[uo$1],decls:24,vars:0,consts:[[`sui-message`,``,`suiColour`,`red`],[`sui-message`,``,`suiColour`,`orange`],[`sui-message`,``,`suiColour`,`yellow`],[`sui-message`,``,`suiColour`,`olive`],[`sui-message`,``,`suiColour`,`green`],[`sui-message`,``,`suiColour`,`teal`],[`sui-message`,``,`suiColour`,`blue`],[`sui-message`,``,`suiColour`,`violet`],[`sui-message`,``,`suiColour`,`purple`],[`sui-message`,``,`suiColour`,`pink`],[`sui-message`,``,`suiColour`,`brown`],[`sui-message`,``,`suiColour`,`black`]],template:function(l,d){l&1&&(is(0,`div`,0),zC(1,`Red`),Vu(),is(2,`div`,1),zC(3,`Orange`),Vu(),is(4,`div`,2),zC(5,`Yellow`),Vu(),is(6,`div`,3),zC(7,`Olive`),Vu(),is(8,`div`,4),zC(9,`Green`),Vu(),is(10,`div`,5),zC(11,`Teal`),Vu(),is(12,`div`,6),zC(13,`Blue`),Vu(),is(14,`div`,7),zC(15,`Violet`),Vu(),is(16,`div`,8),zC(17,`Purple`),Vu(),is(18,`div`,9),zC(19,`Pink`),Vu(),is(20,`div`,10),zC(21,`Brown`),Vu(),is(22,`div`,11),zC(23,`Black`),Vu())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var Id=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=to(n)))(d||n)}})()}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages-msg-sizes-example`]],standalone:!1,features:[uo$1],decls:14,vars:0,consts:[[`sui-message`,``,`suiSize`,`mini`],[`sui-message`,``,`suiSize`,`tiny`],[`sui-message`,``,`suiSize`,`small`],[`sui-message`,``,`suiSize`,`large`],[`sui-message`,``,`suiSize`,`big`],[`sui-message`,``,`suiSize`,`huge`],[`sui-message`,``,`suiSize`,`massive`]],template:function(l,d){l&1&&(is(0,`div`,0),zC(1,`This is a mini message`),Vu(),is(2,`div`,1),zC(3,`This is a tiny message`),Vu(),is(4,`div`,2),zC(5,`This is a small message`),Vu(),is(6,`div`,3),zC(7,`This is a large message`),Vu(),is(8,`div`,4),zC(9,`This is a big message`),Vu(),is(10,`div`,5),zC(11,`This is a huge message`),Vu(),is(12,`div`,6),zC(13,`This is a massive message`),Vu())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();function Pc(n,s){n&1&&zh(0,`doc-messages-msg-std-example`)}function zc(n,s){n&1&&zh(0,`doc-messages-msg-list-example`)}function Jc(n,s){n&1&&zh(0,`doc-messages-msg-icon-example`)}function Lc(n,s){n&1&&zh(0,`doc-messages-msg-icon2-example`)}function Hc(n,s){n&1&&zh(0,`doc-messages-msg-dissmisable-example`)}function Vc(n,s){n&1&&zh(0,`doc-messages-msg-hidden-example`)}function qc(n,s){n&1&&zh(0,`doc-messages-msg-visible-example`)}function Oc(n,s){n&1&&zh(0,`doc-messages-msg-floating-example`)}function Uc(n,s){n&1&&zh(0,`doc-messages-msg-compact-example`)}function jc(n,s){n&1&&zh(0,`doc-messages-msg-attached-example`)}function Yc(n,s){n&1&&zh(0,`doc-messages-msg-warning-example`)}function Xc(n,s){n&1&&zh(0,`doc-messages-msg-info-example`)}function $c(n,s){n&1&&zh(0,`doc-messages-msg-success-example`)}function Kc(n,s){n&1&&zh(0,`doc-messages-msg-error-example`)}function Qc(n,s){n&1&&zh(0,`doc-messages-msg-coloured-example`)}function Zc(n,s){n&1&&zh(0,`doc-messages-msg-sizes-example`)}function ep(n,s){if(n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Message`),Vu(),is(6,`p`),zC(7,`A basic message`),Vu(),jh(8,Pc,1,0,`ng-template`,5),Vu(),is(9,`doc-code-sample`,3)(10,`h3`,4),zC(11,`List Message`),Vu(),is(12,`p`),zC(13,`A message with a list`),Vu(),jh(14,zc,1,0,`ng-template`,5),Vu(),is(15,`doc-code-sample`,3)(16,`h3`,4),zC(17,`Icon Message`),Vu(),is(18,`p`),zC(19,`A message can contain an icon`),Vu(),jh(20,Jc,1,0,`ng-template`,5),Vu(),is(21,`doc-code-sample`,3),jh(22,Lc,1,0,`ng-template`,5),Vu(),is(23,`doc-code-sample`,3)(24,`h3`,4),zC(25,`Dissmissable Block`),Vu(),is(26,`p`),zC(27,`A message that the user can choose to hide`),Vu(),jh(28,Hc,1,0,`ng-template`,5),Vu(),is(29,`h2`,2),zC(30,`States`),Vu(),is(31,`doc-code-sample`,3)(32,`h3`,4),zC(33,`Hidden`),Vu(),is(34,`p`),zC(35,`A message can be hidden`),Vu(),jh(36,Vc,1,0,`ng-template`,5),Vu(),is(37,`doc-code-sample`,3)(38,`h3`,4),zC(39,`Visible`),Vu(),is(40,`p`),zC(41,`A message can be set to visible to force itself to be shown`),Vu(),jh(42,qc,1,0,`ng-template`,5),Vu(),is(43,`h2`,2),zC(44,`Variations`),Vu(),zh(45,`br`),is(46,`doc-code-sample`,3)(47,`h3`,4),zC(48,`Floating`),Vu(),is(49,`p`),zC(50,`A message can float above content that it is related to`),Vu(),jh(51,Oc,1,0,`ng-template`,5),Vu(),is(52,`doc-code-sample`,3)(53,`h3`,4),zC(54,`Compact`),Vu(),is(55,`p`),zC(56,`A message can only take up the width of its content`),Vu(),jh(57,Uc,1,0,`ng-template`,5),Vu(),is(58,`doc-code-sample`,3)(59,`h3`,4),zC(60,`Attached`),Vu(),is(61,`p`),zC(62,`A message can be formatted to attach itself to other content`),Vu(),jh(63,jc,1,0,`ng-template`,5),Vu(),is(64,`doc-code-sample`,3)(65,`h3`,4),zC(66,`Warning`),Vu(),is(67,`p`),zC(68,`A message may be formatted to display warning messages.`),Vu(),jh(69,Yc,1,0,`ng-template`,5),Vu(),is(70,`doc-code-sample`,3)(71,`h3`,4),zC(72,`Info`),Vu(),is(73,`p`),zC(74,`A message may be formatted to display information`),Vu(),jh(75,Xc,1,0,`ng-template`,5),Vu(),is(76,`doc-code-sample`,3)(77,`h3`,4),zC(78,`Positive/Success`),Vu(),is(79,`p`),zC(80,`A message may be formatted to display a positive message`),Vu(),jh(81,$c,1,0,`ng-template`,5),Vu(),is(82,`doc-code-sample`,3)(83,`h3`,4),zC(84,`Negative/Error`),Vu(),is(85,`p`),zC(86,`A message may be formatted to display a negative message`),Vu(),jh(87,Kc,1,0,`ng-template`,5),Vu(),is(88,`doc-code-sample`,3)(89,`h3`,4),zC(90,`Coloured`),Vu(),is(91,`p`),zC(92,`A message can be formatted to be different colours`),Vu(),jh(93,Qc,1,0,`ng-template`,5),Vu(),is(94,`doc-code-sample`,3)(95,`h3`,4),zC(96,`Size`),Vu(),is(97,`p`),zC(98,`A message can have different sizes`),Vu(),jh(99,Zc,1,0,`ng-template`,5),Vu()()),n&2){let a=pC();KD(3),Gh(`templateCode`,a.snippetBasic),KD(6),Gh(`templateCode`,a.snippetList),KD(6),Gh(`templateCode`,a.snippetIcon1),KD(6),Gh(`templateCode`,a.snippetIcon2),KD(2),Gh(`templateCode`,a.snippetDismissable),KD(8),Gh(`templateCode`,a.snippetHidden),KD(6),Gh(`templateCode`,a.snippetVisible),KD(9),Gh(`templateCode`,a.snippetFloating),KD(6),Gh(`templateCode`,a.snippetCompact),KD(6),Gh(`templateCode`,a.snippetAttached),KD(6),Gh(`templateCode`,a.snippettWarning),KD(6),Gh(`templateCode`,a.snippetInfo),KD(6),Gh(`templateCode`,a.snippetSuccess),KD(6),Gh(`templateCode`,a.snippetError),KD(6),Gh(`templateCode`,a.snippetColoured),KD(6),Gh(`templateCode`,a.snippetSizes)}}function tp(n,s){n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`sui-message`),Vu(),is(3,`h4`,4),zC(4,`Properties`),Vu(),is(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is(10,`th`),zC(11,`Description`),Vu(),is(12,`th`),zC(13,`Type`),Vu(),is(14,`th`),zC(15,`Default`),Vu()()(),is(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiAttached`),Vu(),is(20,`td`),zC(21,` Attach a message to other content. Allowed values could be `),is(22,`span`,7),zC(23,`attached`),Vu(),zC(24,` | `),is(25,`span`,7),zC(26,`bottom attached`),Vu(),zC(27,` | `),is(28,`span`,7),zC(29,`null`),Vu()(),is(30,`td`)(31,`div`,8),zC(32,` string `),Vu()(),is(33,`td`)(34,`div`,9),zC(35,` null `),Vu()()(),is(36,`tr`)(37,`td`),zC(38,`suiColour`),Vu(),is(39,`td`),zC(40,`Set the message colour. Allowed values could be `),is(41,`span`,7),zC(42,`'red'`),Vu(),zC(43,` | `),is(44,`span`,7),zC(45,`'orange'`),Vu(),zC(46,` | `),is(47,`span`,7),zC(48,`'yellow'`),Vu(),zC(49,` | `),is(50,`span`,7),zC(51,`'olive'`),Vu(),zC(52,` | `),is(53,`span`,7),zC(54,`'green'`),Vu(),zC(55,` | `),is(56,`span`,7),zC(57,`'teal'`),Vu(),zC(58,` | `),is(59,`span`,7),zC(60,`'blue'`),Vu(),zC(61,` | `),is(62,`span`,7),zC(63,`'violet'`),Vu(),zC(64,` | `),is(65,`span`,7),zC(66,`'purple'`),Vu(),zC(67,` | `),is(68,`span`,7),zC(69,`'pink'`),Vu(),zC(70,` | `),is(71,`span`,7),zC(72,`'brown'`),Vu(),zC(73,` | `),is(74,`span`,7),zC(75,`'grey'`),Vu(),zC(76,` | `),is(77,`span`,7),zC(78,`'black'`),Vu(),zC(79,` | `),is(80,`span`,7),zC(81,`null`),Vu()(),is(82,`td`)(83,`div`,8),zC(84,` string `),Vu()(),is(85,`td`)(86,`div`,9),zC(87,` null `),Vu()()(),is(88,`tr`)(89,`td`),zC(90,`suiState`),Vu(),is(91,`td`),zC(92,`Set a message to either visible or hidden states.`),Vu(),is(93,`td`)(94,`div`,8),zC(95,` string `),Vu()(),is(96,`td`)(97,`div`,9),zC(98,` null `),Vu()()(),is(99,`tr`)(100,`td`),zC(101,`suiSize`),Vu(),is(102,`td`),zC(103,`Set the breadcrumb size. Allowed values could be `),is(104,`span`,7),zC(105,`mini`),Vu(),zC(106,` | `),is(107,`span`,7),zC(108,`tiny`),Vu(),zC(109,` | `),is(110,`span`,7),zC(111,`small`),Vu(),zC(112,` | `),is(113,`span`,7),zC(114,`medium`),Vu(),zC(115,` | `),is(116,`span`,7),zC(117,`big`),Vu(),zC(118,` | `),is(119,`span`,7),zC(120,`huge`),Vu(),zC(121,` | `),is(122,`span`,7),zC(123,`massive`),Vu(),zC(124,` | `),is(125,`span`,7),zC(126,`null`),Vu()(),is(127,`td`)(128,`div`,8),zC(129,` string `),Vu()(),is(130,`td`)(131,`div`,9),zC(132,` null `),Vu()()(),is(133,`tr`)(134,`td`),zC(135,`suiDismissable`),Vu(),is(136,`td`),zC(137,` Determine whether or not a message can be dismissed `),Vu(),is(138,`td`)(139,`div`,8),zC(140,` boolean `),Vu()(),is(141,`td`)(142,`div`,9),zC(143,` false `),Vu()()(),is(144,`tr`)(145,`td`),zC(146,`suiIcon`),Vu(),is(147,`td`),zC(148,` Determine whether or not a message can contain an icon `),Vu(),is(149,`td`)(150,`div`,8),zC(151,` boolean `),Vu()(),is(152,`td`)(153,`div`,9),zC(154,` false `),Vu()()(),is(155,`tr`)(156,`td`),zC(157,`suiHidden`),Vu(),is(158,`td`),zC(159,` Prevent a message from displaying. `),Vu(),is(160,`td`)(161,`div`,8),zC(162,` boolean `),Vu()(),is(163,`td`)(164,`div`,9),zC(165,` false `),Vu()()(),is(166,`tr`)(167,`td`),zC(168,`suiVisible`),Vu(),is(169,`td`),zC(170,` Present the message to the display `),Vu(),is(171,`td`)(172,`div`,8),zC(173,` boolean `),Vu()(),is(174,`td`)(175,`div`,9),zC(176,` false `),Vu()()(),is(177,`tr`)(178,`td`),zC(179,`suiFloating`),Vu(),is(180,`td`),zC(181,` Determine whether or not a message will float over the content it is related to `),Vu(),is(182,`td`)(183,`div`,8),zC(184,` boolean `),Vu()(),is(185,`td`)(186,`div`,9),zC(187,` false `),Vu()()(),is(188,`tr`)(189,`td`),zC(190,`suiCompact`),Vu(),is(191,`td`),zC(192,` Setup the message to take up just as much space as its content `),Vu(),is(193,`td`)(194,`div`,8),zC(195,` boolean `),Vu()(),is(196,`td`)(197,`div`,9),zC(198,` false `),Vu()()()()(),zh(199,`br`),is(200,`h2`,2),zC(201,`suiMessageHeader`),Vu(),is(202,`h4`,4),zC(203,`Properties`),Vu(),is(204,`table`,6)(205,`thead`)(206,`tr`)(207,`th`),zC(208,`Property`),Vu(),is(209,`th`),zC(210,`Description`),Vu(),is(211,`th`),zC(212,`Type`),Vu(),is(213,`th`),zC(214,`Default`),Vu()()(),zh(215,`tbody`),is(216,`tfoot`,10)(217,`tr`)(218,`th`,11)(219,`div`,12),zC(220,`No properties for this directive`),Vu()()()()(),zh(221,`br`),is(222,`h2`,2),zC(223,`suiMessageContent`),Vu(),is(224,`h4`,4),zC(225,`Properties`),Vu(),is(226,`table`,6)(227,`thead`)(228,`tr`)(229,`th`),zC(230,`Property`),Vu(),is(231,`th`),zC(232,`Description`),Vu(),is(233,`th`),zC(234,`Type`),Vu(),is(235,`th`),zC(236,`Default`),Vu()()(),zh(237,`tbody`),is(238,`tfoot`,10)(239,`tr`)(240,`th`,11)(241,`div`,12),zC(242,`No properties for this directive`),Vu()()()()(),zh(243,`br`),is(244,`h2`,2),zC(245,`suiMessageList`),Vu(),is(246,`h4`,4),zC(247,`Properties`),Vu(),is(248,`table`,6)(249,`thead`)(250,`tr`)(251,`th`),zC(252,`Property`),Vu(),is(253,`th`),zC(254,`Description`),Vu(),is(255,`th`),zC(256,`Type`),Vu(),is(257,`th`),zC(258,`Default`),Vu()()(),zh(259,`tbody`),is(260,`tfoot`,10)(261,`tr`)(262,`th`,11)(263,`div`,12),zC(264,`No properties for this directive`),Vu()()()()()())}var Ad=(()=>{class n{constructor(a){this.snippetBasic=Zl,this.snippetList=ed,this.snippetIcon1=td,this.snippetIcon2=id,this.snippetDismissable=nd,this.snippetHidden=ad,this.snippetVisible=ld,this.snippetFloating=dd,this.snippetCompact=rd,this.snippetAttached=md,this.snippettWarning=od,this.snippetInfo=sd,this.snippetSuccess=cd,this.snippetError=pd,this.snippetColoured=ud,this.snippetSizes=vd,this.isDefinitionsActive=!0,a.setTitle(`Message | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-messages`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Message`,`subHeader`,`A message displays information that explains nearby content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[1,`full-width`],[`colspan`,`4`],[2,`text-align`,`center`]],template:function(l,d){l&1&&(is(0,`doc-page`,0),jh(1,ep,100,16,`div`,1)(2,tp,265,0,`div`,1),Vu()),l&2&&(KD(),Gh(`docPageContent`,`definition`),KD(),Gh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$2,Ws$1,U$1,fi$2,xd,Sd,hd,fd,Ed,gd,bd,yd,Cd,Fd,Dd,Md,_d,wd,Td,Id],styles:[`div[_ngcontent-%COMP%]   [class*="right floated"][_ngcontent-%COMP%]{float:right;margin-right:.25em}`],changeDetection:1})}}return n})();var kd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <a suiBreadcrumbSection>Store</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>T-Shirt</div>
</div>
`;var Bd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon="right angle" suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Store</a>
  <i suiIcon="right angle" suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>T-Shirt</div>
</div>
`;var Gd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <a suiBreadcrumbSection>Registration</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Nd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Wd=`<div sui-breadcrumb>
  <span suiBreadcrumbSection>Home</span>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Search</div>
</div>
`;var Rd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Home</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Search for: <a href="#">paper towels</a></div>
</div>
`;var Pd=`<div sui-breadcrumb>
  <a suiBreadcrumbSection>Products</a>
  <div suiBreadcrumbDivider> /</div>
  <div suiBreadcrumbSection suiActive>Paper Towels</div>
</div>
`;var zd=`<div sui-breadcrumb suiSize='mini'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Jd=`<div sui-breadcrumb suiSize='tiny'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Ld=`<div sui-breadcrumb suiSize='small'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Hd=`<div sui-breadcrumb suiSize='large'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Vd=`<div sui-breadcrumb suiSize='big'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var qd=`<div sui-breadcrumb suiSize='huge'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var Od=`<div sui-breadcrumb suiSize='massive'>
  <a suiBreadcrumbSection>Home</a>
  <i suiIcon='right chevron' suiBreadcrumbDivider></i>
  <a suiBreadcrumbSection>Registration</a>
  <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
  <div suiBreadcrumbSection suiActive>Personal Information</div>
</div>
`;var N=(()=>{class n extends On$1{constructor(){let a=g$1(Ie);super(a),this.suiIcon=``}get classes(){return[this.getIcon(),`divider`].join(` `)}getIcon(){return this.suiIcon?`${this.suiIcon} icon`:this.suiIcon}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiBreadcrumbDivider`,``]],inputs:{suiIcon:`suiIcon`},exportAs:[`suiBreadcrumbDivider`],features:[uo$1]})}}return n})();var W=(()=>{class n extends On$1{constructor(){let a=g$1(Ie);super(a),this.suiActive=!1}get classes(){return[this.getActive(),`section`].join(` `)}getActive(){return this.suiActive?`active`:``}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiBreadcrumbSection`,``]],inputs:{suiActive:`suiActive`},exportAs:[`suiBreadcrumbSection`],features:[uo$1]})}}return uS([ve()],n.prototype,`suiActive`,void 0),n})();var R=(()=>{class n extends On$1{constructor(){let a=g$1(Ie);super(a),this.suiSize=null}get classes(){return[`ui`,this.suiSize,`breadcrumb`].join(` `)}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`sui-breadcrumb`,``]],inputs:{suiSize:`suiSize`},exportAs:[`suiBreadcrumb`],features:[uo$1]})}}return n})();var Ud=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[sl$1]})}}return n})();var jd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-std-example`]],standalone:!1,decls:11,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),is(3,`div`,2),zC(4,` /`),Vu(),is(5,`a`,1),zC(6,`Store`),Vu(),is(7,`div`,2),zC(8,` /`),Vu(),is(9,`div`,3),zC(10,`T-Shirt`),Vu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Yd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-std1-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiIcon`,`right angle`,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Store`),Vu(),zh(6,`i`,2),is(7,`div`,3),zC(8,`T-Shirt`),Vu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Xd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-content-example`]],standalone:!1,decls:11,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),is(3,`div`,2),zC(4,` /`),Vu(),is(5,`a`,1),zC(6,`Registration`),Vu(),is(7,`div`,2),zC(8,` /`),Vu(),is(9,`div`,3),zC(10,`Personal Information`),Vu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var $d=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-content1-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Registration`),Vu(),zh(6,`i`,3),is(7,`div`,4),zC(8,`Personal Information`),Vu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Kd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-section-example`]],standalone:!1,decls:7,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`span`,1),zC(2,`Home`),Vu(),is(3,`div`,2),zC(4,` /`),Vu(),is(5,`div`,3),zC(6,`Search`),Vu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Qd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-link-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``],[`href`,`#`]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),is(3,`div`,2),zC(4,` /`),Vu(),is(5,`div`,3),zC(6,`Search for: `),is(7,`a`,4),zC(8,`paper towels`),Vu()()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Zd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-active-example`]],standalone:!1,decls:7,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Products`),Vu(),is(3,`div`,2),zC(4,` /`),Vu(),is(5,`div`,3),zC(6,`Paper Towels`),Vu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var er=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`mini`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Registration`),Vu(),zh(6,`i`,3),is(7,`div`,4),zC(8,`Personal Information`),Vu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var tr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size1-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`tiny`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Registration`),Vu(),zh(6,`i`,3),is(7,`div`,4),zC(8,`Personal Information`),Vu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var ir=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size2-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`small`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Registration`),Vu(),zh(6,`i`,3),is(7,`div`,4),zC(8,`Personal Information`),Vu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var nr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size3-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`large`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Registration`),Vu(),zh(6,`i`,3),is(7,`div`,4),zC(8,`Personal Information`),Vu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var ar=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size4-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`big`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Registration`),Vu(),zh(6,`i`,3),is(7,`div`,4),zC(8,`Personal Information`),Vu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var lr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size5-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`huge`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Registration`),Vu(),zh(6,`i`,3),is(7,`div`,4),zC(8,`Personal Information`),Vu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var dr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size6-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`massive`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(is(0,`div`,0)(1,`a`,1),zC(2,`Home`),Vu(),zh(3,`i`,2),is(4,`a`,1),zC(5,`Registration`),Vu(),zh(6,`i`,3),is(7,`div`,4),zC(8,`Personal Information`),Vu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();function fp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-std-example`)}function Ep(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-std1-example`)}function gp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-content-example`)}function bp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-content1-example`)}function yp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-section-example`)}function Cp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-link-example`)}function Fp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-active-example`)}function Dp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-size-example`)}function Mp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-size1-example`)}function _p(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-size2-example`)}function wp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-size3-example`)}function Tp(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-size4-example`)}function Ip(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-size5-example`)}function Ap(n,s){n&1&&zh(0,`doc-breadcrumb-breadcrumb-size6-example`)}function kp(n,s){if(n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`Types`),Vu(),is(3,`doc-code-sample`,3)(4,`h3`,4),zC(5,`Breadcrumb`),Vu(),is(6,`p`),zC(7,`A standard breadcrumb`),Vu(),jh(8,fp,1,0,`ng-template`,5),Vu(),is(9,`doc-code-sample`,3),jh(10,Ep,1,0,`ng-template`,5),Vu(),zh(11,`br`),is(12,`h2`,2),zC(13,`Content`),Vu(),is(14,`doc-code-sample`,3)(15,`h3`,4),zC(16,`Divider`),Vu(),is(17,`p`),zC(18,`A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text`),Vu(),jh(19,gp,1,0,`ng-template`,5),Vu(),is(20,`doc-code-sample`,3),jh(21,bp,1,0,`ng-template`,5),Vu(),is(22,`doc-code-sample`,3)(23,`h3`,4),zC(24,`Section`),Vu(),is(25,`p`),zC(26,`A breadcrumb can contain sections that can either be formatted as a link or text`),Vu(),jh(27,yp,1,0,`ng-template`,5),Vu(),is(28,`doc-code-sample`,3)(29,`h3`,4),zC(30,`Link`),Vu(),is(31,`p`),zC(32,`A section may be linkable or contain a link`),Vu(),jh(33,Cp,1,0,`ng-template`,5),Vu(),zh(34,`br`),is(35,`h2`,2),zC(36,`States`),Vu(),is(37,`doc-code-sample`,3)(38,`h3`,4),zC(39,`Active`),Vu(),is(40,`p`),zC(41,`A section can be active`),Vu(),jh(42,Fp,1,0,`ng-template`,5),Vu(),zh(43,`br`),is(44,`h2`,2),zC(45,`Variations`),Vu(),is(46,`doc-code-sample`,3)(47,`h3`,4),zC(48,`Size`),Vu(),is(49,`p`),zC(50,`A breadcrumb can vary in size`),Vu(),jh(51,Dp,1,0,`ng-template`,5),Vu(),is(52,`doc-code-sample`,3),jh(53,Mp,1,0,`ng-template`,5),Vu(),is(54,`doc-code-sample`,3),jh(55,_p,1,0,`ng-template`,5),Vu(),is(56,`doc-code-sample`,3),jh(57,wp,1,0,`ng-template`,5),Vu(),is(58,`doc-code-sample`,3),jh(59,Tp,1,0,`ng-template`,5),Vu(),is(60,`doc-code-sample`,3),jh(61,Ip,1,0,`ng-template`,5),Vu(),is(62,`doc-code-sample`,3),jh(63,Ap,1,0,`ng-template`,5),Vu()()),n&2){let a=pC();KD(3),Gh(`templateCode`,a.snippetStd),KD(6),Gh(`templateCode`,a.snippetStd1),KD(5),Gh(`templateCode`,a.snippetContent1),KD(6),Gh(`templateCode`,a.snippetContent2),KD(2),Gh(`templateCode`,a.snippetSection),KD(6),Gh(`templateCode`,a.snippetLink),KD(9),Gh(`templateCode`,a.snippetActive),KD(9),Gh(`templateCode`,a.snippetSize),KD(6),Gh(`templateCode`,a.snippetSize1),KD(2),Gh(`templateCode`,a.snippetSize2),KD(2),Gh(`templateCode`,a.snippetSize3),KD(2),Gh(`templateCode`,a.snippetSize4),KD(2),Gh(`templateCode`,a.snippetSize5),KD(2),Gh(`templateCode`,a.snippetSize6)}}function Bp(n,s){n&1&&(is(0,`div`)(1,`h2`,2),zC(2,`sui-breadcrumb`),Vu(),is(3,`h4`,4),zC(4,`Properties`),Vu(),is(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),zC(9,`Property`),Vu(),is(10,`th`),zC(11,`Description`),Vu(),is(12,`th`),zC(13,`Type`),Vu(),is(14,`th`),zC(15,`Default`),Vu()()(),is(16,`tbody`)(17,`tr`)(18,`td`),zC(19,`suiSize`),Vu(),is(20,`td`),zC(21,`Set the breadcrumb size. Allowed values could be `),is(22,`span`,7),zC(23,`mini`),Vu(),zC(24,` | `),is(25,`span`,7),zC(26,`tiny`),Vu(),zC(27,` | `),is(28,`span`,7),zC(29,`small`),Vu(),zC(30,` | `),is(31,`span`,7),zC(32,`medium`),Vu(),zC(33,` | `),is(34,`span`,7),zC(35,`big`),Vu(),zC(36,` | `),is(37,`span`,7),zC(38,`huge`),Vu(),zC(39,` | `),is(40,`span`,7),zC(41,`massive`),Vu(),zC(42,` | `),is(43,`span`,7),zC(44,`null`),Vu()(),is(45,`td`)(46,`div`,8),zC(47,` string `),Vu()(),is(48,`td`)(49,`div`,9),zC(50,` null `),Vu()()()()(),zh(51,`br`),is(52,`h2`,2),zC(53,`suiBreadcrumbDivider`),Vu(),is(54,`h4`,4),zC(55,`Properties`),Vu(),is(56,`table`,6)(57,`thead`)(58,`tr`)(59,`th`),zC(60,`Property`),Vu(),is(61,`th`),zC(62,`Description`),Vu(),is(63,`th`),zC(64,`Type`),Vu(),is(65,`th`),zC(66,`Default`),Vu()()(),is(67,`tbody`)(68,`tr`)(69,`td`),zC(70,`suiIcon`),Vu(),is(71,`td`),zC(72,` Determine the icon to be used as the divider `),Vu(),is(73,`td`)(74,`div`,8),zC(75,` string `),Vu()(),is(76,`td`)(77,`div`,9),zC(78,` '' `),Vu()()()()(),zh(79,`br`),is(80,`h2`,2),zC(81,`suiBreadcrumbSection`),Vu(),is(82,`h4`,4),zC(83,`Properties`),Vu(),is(84,`table`,6)(85,`thead`)(86,`tr`)(87,`th`),zC(88,`Property`),Vu(),is(89,`th`),zC(90,`Description`),Vu(),is(91,`th`),zC(92,`Type`),Vu(),is(93,`th`),zC(94,`Default`),Vu()()(),is(95,`tbody`)(96,`tr`)(97,`td`),zC(98,`suiActive`),Vu(),is(99,`td`),zC(100,` Determine whether or not the breadcrumb section is active `),Vu(),is(101,`td`)(102,`div`,8),zC(103,` boolean `),Vu()(),is(104,`td`)(105,`div`,9),zC(106,` false `),Vu()()()()()())}var rr=(()=>{class n{constructor(a){this.snippetStd=kd,this.snippetStd1=Bd,this.snippetContent1=Gd,this.snippetContent2=Nd,this.snippetSection=Wd,this.snippetLink=Rd,this.snippetActive=Pd,this.snippetSize=zd,this.snippetSize1=Jd,this.snippetSize2=Ld,this.snippetSize3=Hd,this.snippetSize4=Vd,this.snippetSize5=qd,this.snippetSize6=Od,a.setTitle(`Breadcrumb | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(sV))}}static{this.ɵcmp=OI({type:n,selectors:[[`doc-breadcrumb`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Breadcrumb`,`subHeader`,`A breadcrumb is used to show hierarchy between content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(is(0,`doc-page`,0),jh(1,kp,64,14,`div`,1)(2,Bp,107,0,`div`,1),Vu()),l&2&&(KD(),Gh(`docPageContent`,`definition`),KD(),Gh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$2,Ws$1,U$1,fi$2,jd,Yd,Xd,$d,Kd,Qd,Zd,er,tr,ir,nr,ar,lr,dr],encapsulation:2,changeDetection:1})}}return n})();var Gp=[{path:`messages`,component:Ad},{path:`breadcrumb`,component:rr},{path:`grid`,component:fn},{path:`form`,component:Fi},{path:`menu`,component:qa},{path:`table`,component:Ql}];var mr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[Is$1.forChild(Gp),Is$1]})}}return n})();var s2=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[sl$1,Pe,Kr$1,xi$1,Vt$1,Ks$1,ci$1,mr,Ud,K,gi$1,U,bi$1,bi$2,pi$1,yi$1,At$1,He,We]})}}return n})();export{s2 as CollectionsModule};