import{n as U,t as P}from"./chunk-L47WARh9.js";import{c as pi$1,i as Oe,l as qe,n as Ee,o as We,r as He,s as me,u as ze}from"./chunk-C-XTa8CP.js";import{_ as ui$1,a as Pe,b as xe,d as ci$1,h as hi$1,i as Oi$1,o as Ri$1,p as fi$1,r as Ni$1,s as Si$1}from"./chunk-DIbEhThR.js";import{a as K,c as bi$1,d as pi$2,f as q,i as J,l as ci$2,n as G,o as U$1,p as ri$1,r as Ii$1,s as ai$1,u as li$1}from"./chunk-CnOM7_1X.js";import{A as ze$1,D as wr,E as we,G as Ks$1,J as Qt$1,K as On$1,O as yi$1,T as vr,U as Is$1,X as ve,Y as Ws$1,_ as fi$2,a as Dr,b as ln$1,d as Ri$2,g as cn$1,h as bi$2,j as zs$1,n as Bt$1,o as Ft$1,p as Tt$1,s as Kr$1,t as At$1,u as Oi$2,v as gi$1,w as vi$1,x as mi$1}from"./main-D6LCLMRS.js";import{D as Gh,En as no,Gn as ss,Hn as sC,I as KD,N as Ie,Rt as bt$1,Ut as dS,Wn as sl$1,X as Ph,Xt as ew,an as hC,cn as hg,dt as Uh,ht as WC,it as RI,m as Cn$1,nt as Qh,p as Ce,pt as Ve,tn as g$1,u as Bu,un as iC,vn as lo,zt as cV}from"./chunk-BCndbQi5.js";var tt=`<form sui-form>
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
`;var g=class{constructor(){this.states=[{text:`Alabama`,value:`al`}],this.countries=[{text:`Albania`,value:`al`,flag:`al`},{text:`Nigeria`,value:`ng`,flag:`ng`}],this.months=[{text:`January`,value:`jan`}],this.cards=[{text:`Visa`,value:`visa`}],this.contacts=[{text:`Justen Kitsune`,image:{avatar:!0,src:`https://semantic-ui.com/images/avatar/small/stevie.jpg`}}],this.gender=[{text:`Male`},{text:`Female`}]}};var Jt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-basic-example`]],standalone:!1,features:[lo],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``],[`type`,`text`,`name`,`first-name`,`placeholder`,`First Name`],[`type`,`text`,`name`,`last-name`,`placeholder`,`Last Name`],[`sui-button`,``,`type`,`submit`]],template:function(l,d){l&1&&(ss(0,`form`,0)(1,`div`,1)(2,`label`),WC(3,`First Name`),Bu(),Gh(4,`input`,2),Bu(),ss(5,`div`,1)(6,`label`),WC(7,`Last Name`),Bu(),Gh(8,`input`,3),Bu(),ss(9,`div`,1)(10,`sui-checkbox`),WC(11,`I agree to the terms and conditions`),Bu()(),ss(12,`button`,4),WC(13,`Submit`),Bu()())},dependencies:[ci$1,ui$1,xe,Si$1,Oi$1,P,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var Lt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-basic-alt-example`]],standalone:!1,features:[lo],decls:63,vars:5,consts:[[`sui-form`,``],[`sui-header`,``,`suiDividing`,``],[`suiFormField`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`type`,`text`,`name`,`shipping[first-name]`,`placeholder`,`First Name`],[`type`,`text`,`name`,`shipping[last-name]`,`placeholder`,`Last Name`],[`suiFormFields`,``],[`suiFormField`,``,`suiWidth`,`twelve`],[`type`,`text`,`name`,`shipping[address]`,`placeholder`,`Street Address`],[`suiFormField`,``,`suiWidth`,`four`],[`type`,`text`,`name`,`shipping[address-2]`,`placeholder`,`Apt #`],[`suiPlaceholder`,`State`,3,`suiOptions`],[`suiPlaceholder`,`Country`,3,`suiOptions`],[`suiPlaceholder`,`Type`,3,`suiOptions`],[`suiFormField`,``,`suiWidth`,`seven`],[`type`,`text`,`name`,`card[number]`,`maxlength`,`16`,`placeholder`,`Card #`],[`suiFormField`,``,`suiWidth`,`three`],[`type`,`text`,`name`,`card[cvc]`,`maxlength`,`3`,`placeholder`,`CVC`],[`suiFormField`,``,`suiWidth`,`six`],[`suiPlaceholder`,`Month`,3,`suiOptions`],[`type`,`text`,`name`,`card[expire-year]`,`maxlength`,`4`,`placeholder`,`Year`],[`suiPlaceholder`,`Saved Contacts`,3,`suiOptions`],[`sui-segment`,``],[`suiType`,`toggle`],[`sui-button`,``,`tabindex`,`0`]],template:function(l,d){l&1&&(ss(0,`form`,0)(1,`h4`,1),WC(2,`Shipping Information`),Bu(),ss(3,`div`,2)(4,`label`),WC(5,`Name`),Bu(),ss(6,`div`,3)(7,`div`,2),Gh(8,`input`,4),Bu(),ss(9,`div`,2),Gh(10,`input`,5),Bu()()(),ss(11,`div`,2)(12,`label`),WC(13,`Billing Address`),Bu(),ss(14,`div`,6)(15,`div`,7),Gh(16,`input`,8),Bu(),ss(17,`div`,9),Gh(18,`input`,10),Bu()()(),ss(19,`div`,3)(20,`div`,2)(21,`label`),WC(22,`State`),Bu(),Gh(23,`sui-select`,11),Bu(),ss(24,`div`,2)(25,`label`),WC(26,`Country`),Bu(),Gh(27,`sui-select`,12),Bu()(),ss(28,`h4`,1),WC(29,`Billing Information`),Bu(),ss(30,`div`,2)(31,`label`),WC(32,`Card Type`),Bu(),Gh(33,`sui-select`,13),Bu(),ss(34,`div`,6)(35,`div`,14)(36,`label`),WC(37,`Card Number`),Bu(),Gh(38,`input`,15),Bu(),ss(39,`div`,16)(40,`label`),WC(41,`CVC`),Bu(),Gh(42,`input`,17),Bu(),ss(43,`div`,18)(44,`label`),WC(45,`Expiration`),Bu(),ss(46,`div`,3)(47,`div`,2),Gh(48,`sui-select`,19),Bu(),ss(49,`div`,2),Gh(50,`input`,20),Bu()()()(),ss(51,`h4`,1),WC(52,`Receipt`),Bu(),ss(53,`div`,2)(54,`label`),WC(55,`Send Receipt To:`),Bu(),Gh(56,`sui-select`,21),Bu(),ss(57,`div`,22)(58,`div`,2)(59,`sui-checkbox`,23),WC(60,`Do not include a receipt in the package`),Bu()()(),ss(61,`div`,24),WC(62,`Submit Order`),Bu()()),l&2&&(KD(23),Uh(`suiOptions`,d.states),KD(4),Uh(`suiOptions`,d.countries),KD(6),Uh(`suiOptions`,d.cards),KD(15),Uh(`suiOptions`,d.months),KD(8),Uh(`suiOptions`,d.contacts))},dependencies:[ci$1,ui$1,xe,Si$1,Oi$1,Ni$1,Ws$1,P,Ii$1,ze$1,Oe],encapsulation:2,changeDetection:1})}}return n})();var Ht=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-user-input-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``],[`type`,`text`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`User Input`),Bu(),Gh(4,`input`,2),Bu()())},dependencies:[Si$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var Vt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-fields-example`]],standalone:!1,features:[lo],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``],[`suiFormField`,``],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Middle name`),Bu(),Gh(9,`input`,4),Bu(),ss(10,`div`,2)(11,`label`),WC(12,`Last name`),Bu(),Gh(13,`input`,5),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var qt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-fields-width-example`]],standalone:!1,features:[lo],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`three`],[`suiFormField`,``],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Middle name`),Bu(),Gh(9,`input`,4),Bu(),ss(10,`div`,2)(11,`label`),WC(12,`Last name`),Bu(),Gh(13,`input`,5),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var Ot=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-fields-inline-example`]],standalone:!1,features:[lo],decls:10,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiInline`,``],[`suiFormField`,``,`suiWidth`,`eight`],[`type`,`text`,`placeholder`,`First Name`],[`suiFormField`,``,`suiWidth`,`three`],[`type`,`text`,`placeholder`,`Middle Name`],[`suiFormField`,``,`suiWidth`,`five`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,4),Gh(7,`input`,5),Bu(),ss(8,`div`,6),Gh(9,`input`,7),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var Ut=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-text-area-example`]],standalone:!1,features:[lo],decls:9,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``],[`rows`,`2`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Text`),Bu(),Gh(4,`textarea`),Bu(),ss(5,`div`,1)(6,`label`),WC(7,`Short Text`),Bu(),Gh(8,`textarea`,2),Bu()())},dependencies:[Si$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var jt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-checkbox-example`]],standalone:!1,features:[lo],decls:11,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``,`suiInline`,``],[`suiType`,`slider`],[`suiType`,`toggle`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`sui-checkbox`),WC(3,`Checkbox`),Bu()(),ss(4,`div`,1)(5,`sui-checkbox`,2),WC(6,`Slider`),Bu(),Gh(7,`label`),Bu(),ss(8,`div`,1)(9,`sui-checkbox`,3),WC(10,`Toggle`),Bu()()())},dependencies:[Si$1,Oi$1,P],encapsulation:2,changeDetection:1})}}return n})();var Yt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-radio-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``],[`suiFormField`,``],[`suiType`,`radio`],[`suiFormFields`,``,`suiGrouped`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Select your favorite fruit:`),Bu(),ss(4,`div`,2)(5,`sui-checkbox`,3),WC(6,`Apples`),Bu()(),ss(7,`div`,2)(8,`sui-checkbox`,3),WC(9,`Oranges`),Bu()(),ss(10,`div`,2)(11,`sui-checkbox`,3),WC(12,`Pears`),Bu()(),ss(13,`div`,2)(14,`sui-checkbox`,3),WC(15,`Grapefruit`),Bu()()(),ss(16,`div`,4)(17,`label`),WC(18,`Select your second favorite fruit:`),Bu(),ss(19,`div`,2)(20,`sui-checkbox`,3),WC(21,`Apples`),Bu()(),ss(22,`div`,2)(23,`sui-checkbox`,3),WC(24,`Oranges`),Bu()(),ss(25,`div`,2)(26,`sui-checkbox`,3),WC(27,`Pears`),Bu()(),ss(28,`div`,2)(29,`sui-checkbox`,3),WC(30,`Grapefruit`),Bu()()()())},dependencies:[Si$1,Oi$1,Ni$1,P],encapsulation:2,changeDetection:1})}}return n})();var Xt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-dropdown-example`]],standalone:!1,features:[lo],decls:5,vars:1,consts:[[`sui-form`,``],[`suiFormField`,``],[`suiPlaceholder`,`Gender`,3,`suiOptions`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Gender`),Bu(),Gh(4,`sui-select`,2),Bu()()),l&2&&(KD(4),Uh(`suiOptions`,d.gender))},dependencies:[Si$1,Oi$1,Oe],encapsulation:2,changeDetection:1})}}return n})();var $t=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-dropdown-alt-example`]],standalone:!1,features:[lo],decls:5,vars:1,consts:[[`sui-form`,``],[`suiFormField`,``],[`suiSearch`,``,`suiPlaceholder`,`Country`,3,`suiOptions`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Country`),Bu(),Gh(4,`sui-select`,2),Bu()()),l&2&&(KD(4),Uh(`suiOptions`,d.countries))},dependencies:[Si$1,Oi$1,Oe],encapsulation:2,changeDetection:1})}}return n})();var Kt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-multiple-select-example`]],standalone:!1,features:[lo],decls:5,vars:1,consts:[[`sui-form`,``],[`suiFormField`,``],[`suiMultiple`,``,`suiPlaceholder`,`Country`,3,`suiOptions`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Country`),Bu(),Gh(4,`sui-select`,2),Bu()()),l&2&&(KD(4),Uh(`suiOptions`,d.countries))},dependencies:[Si$1,Oi$1,Oe],encapsulation:2,changeDetection:1})}}return n})();var Qt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-html-select-example`]],standalone:!1,features:[lo],decls:9,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``],[`value`,``],[`value`,`1`],[`value`,`0`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`select`)(3,`option`,2),WC(4,`Gender`),Bu(),ss(5,`option`,3),WC(6,`Male`),Bu(),ss(7,`option`,4),WC(8,`Female`),Bu()()()())},dependencies:[hi$1,fi$1,Si$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var Zt=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-message-example`]],standalone:!1,features:[lo],decls:9,vars:0,consts:[[`sui-form`,``],[`sui-message`,``],[1,`header`],[1,`list`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),WC(3,`We had some issues`),Bu(),ss(4,`ul`,3)(5,`li`),WC(6,`Please enter your first name`),Bu(),ss(7,`li`),WC(8,`Please enter your last name`),Bu()()()())},dependencies:[Oi$1,li$1],encapsulation:2,changeDetection:1})}}return n})();var ei=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-loading-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-form`,``,`suiLoading`,``],[`suiFormField`,``],[`type`,`email`,`placeholder`,`joe@schmoe.com`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`E-mail`),Bu(),Gh(4,`input`,2),Bu(),ss(5,`div`,3),WC(6,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ti=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-success-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiState`,`success`],[`suiFormField`,``],[`type`,`email`,`placeholder`,`joe@schmoe.com`],[`sui-message`,``,`suiState`,`success`],[`suiMessageHeader`,``],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`E-mail`),Bu(),Gh(4,`input`,2),Bu(),ss(5,`div`,3)(6,`div`,4),WC(7,`Form Completed`),Bu(),ss(8,`p`),WC(9,`Youre all signed up for the newsletter.`),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,li$1,ri$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ii=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-error-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiState`,`error`],[`suiFormField`,``],[`type`,`email`,`placeholder`,`joe@schmoe.com`],[`sui-message`,``,`suiState`,`error`],[`suiMessageHeader`,``],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`E-mail`),Bu(),Gh(4,`input`,2),Bu(),ss(5,`div`,3)(6,`div`,4),WC(7,`Action Forbidden`),Bu(),ss(8,`p`),WC(9,`You can only sign up for an account once with a given e-mail address.`),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,li$1,ri$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ni=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-warning-example`]],standalone:!1,features:[lo],decls:13,vars:0,consts:[[`sui-form`,``,`suiState`,`warning`],[`suiFormField`,``],[`type`,`email`,`placeholder`,`joe@schmoe.com`],[`sui-message`,``,`suiState`,`warning`],[`suiMessageHeader`,``],[`suiMessageList`,``],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`E-mail`),Bu(),Gh(4,`input`,2),Bu(),ss(5,`div`,3)(6,`div`,4),WC(7,`Action Forbidden`),Bu(),ss(8,`ul`,5)(9,`li`),WC(10,`That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail. `),Bu()()(),ss(11,`div`,6),WC(12,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,li$1,ri$1,pi$2,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ai=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-field-error-example`]],standalone:!1,features:[lo],decls:17,vars:1,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``,`suiError`,``],[`placeholder`,`First Name`,`type`,`text`],[`suiFormField`,``],[`placeholder`,`Last Name`,`type`,`text`],[`suiPlaceholder`,`Gender`,3,`suiOptions`],[`suiFormField`,``,`suiError`,``,`suiInline`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,4)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,5),Bu()(),ss(10,`div`,2)(11,`label`),WC(12,`Gender`),Bu(),Gh(13,`sui-select`,6),Bu(),ss(14,`div`,7)(15,`sui-checkbox`),WC(16,` I agree to the Terms and Conditions `),Bu()()()),l&2&&(KD(13),Uh(`suiOptions`,d.gender))},dependencies:[Si$1,Oi$1,Ni$1,P,Oe],encapsulation:2,changeDetection:1})}}return n})();var li=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-disabled-example`]],standalone:!1,features:[lo],decls:10,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``,`disabled`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,4),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var di=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-read-only-example`]],standalone:!1,features:[lo],decls:10,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`Read Only`,`readonly`,``,`type`,`text`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,3),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var ri=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-size-mini-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`mini`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,Ni$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var mi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-size-tiny-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`tiny`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,Ni$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var oi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-size-small-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`small`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,Ni$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var si=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-size-large-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`large`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,Ni$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ci=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-size-big-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`big`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,Ni$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var pi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-size-huge-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`huge`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,Ni$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var ui=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-size-massive-example`]],standalone:!1,features:[lo],decls:12,vars:0,consts:[[`sui-form`,``,`suiSize`,`massive`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First Name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Last Name`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,5),WC(11,`Submit`),Bu()())},dependencies:[Si$1,Oi$1,Ni$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var vi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-equal-width-example`]],standalone:!1,features:[lo],decls:23,vars:0,consts:[[`sui-form`,``,`suiEqualWidth`,``],[`suiFormFields`,``],[`suiFormField`,``],[`type`,`text`,`placeholder`,`Username`],[`type`,`password`],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`Username`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Password`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,1)(11,`div`,2)(12,`label`),WC(13,`First name`),Bu(),Gh(14,`input`,5),Bu(),ss(15,`div`,2)(16,`label`),WC(17,`Middle name`),Bu(),Gh(18,`input`,6),Bu(),ss(19,`div`,2)(20,`label`),WC(21,`Last name`),Bu(),Gh(22,`input`,7),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var xi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-inverted-example`]],standalone:!1,features:[lo],decls:16,vars:0,consts:[[`sui-segment`,``,`suiInverted`,``],[`sui-form`,``,`suiInverted`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`type`,`text`,`placeholder`,`Username`],[`type`,`password`],[`suiFormField`,``,`suiInline`,``],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`label`),WC(5,`Username`),Bu(),Gh(6,`input`,4),Bu(),ss(7,`div`,3)(8,`label`),WC(9,`Password`),Bu(),Gh(10,`input`,5),Bu()(),ss(11,`div`,6)(12,`sui-checkbox`),WC(13,`I agree to terms and conditions`),Bu()(),ss(14,`div`,7),WC(15,`Submit`),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1,P,Ii$1,ze$1],encapsulation:2,changeDetection:1})}}return n})();var Si=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-inline-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``,`suiInline`,``],[`type`,`text`,`placeholder`,`Full Name`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Last name`),Bu(),Gh(4,`input`,2),Bu()())},dependencies:[Si$1,Oi$1],encapsulation:2,changeDetection:1})}}return n})();var hi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-width-example`]],standalone:!1,features:[lo],decls:28,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``],[`suiFormField`,``,`suiWidth`,`six`],[`type`,`text`,`placeholder`,`First Name`],[`suiFormField`,``,`suiWidth`,`four`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`],[`suiFormField`,``,`suiWidth`,`two`],[`type`,`text`,`placeholder`,`2 Wide`],[`suiFormField`,``,`suiWidth`,`twelve`],[`type`,`text`,`placeholder`,`12 Wide`],[`suiFormField`,``,`suiWidth`,`eight`],[`type`,`text`,`placeholder`,`8 Wide`],[`type`,`text`,`placeholder`,`6 Wide`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,4)(7,`label`),WC(8,`Middle`),Bu(),Gh(9,`input`,5),Bu(),ss(10,`div`,2)(11,`label`),WC(12,`Last name`),Bu(),Gh(13,`input`,6),Bu()(),ss(14,`div`,1)(15,`div`,7),Gh(16,`input`,8),Bu(),ss(17,`div`,9),Gh(18,`input`,10),Bu(),ss(19,`div`,7),Gh(20,`input`,8),Bu()(),ss(21,`div`,1)(22,`div`,11),Gh(23,`input`,12),Bu(),ss(24,`div`,2),Gh(25,`input`,13),Bu(),ss(26,`div`,7),Gh(27,`input`,8),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var fi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-required-example`]],standalone:!1,features:[lo],decls:8,vars:0,consts:[[`sui-form`,``],[`suiFormField`,``,`suiRequired`,``],[`type`,`text`,`placeholder`,`Full Name`],[`suiFormField`,``,`suiInline`,``,`suiRequired`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Last name`),Bu(),Gh(4,`input`,2),Bu(),ss(5,`div`,3)(6,`sui-checkbox`),WC(7,`I agree to terms and conditions`),Bu()()())},dependencies:[Si$1,Oi$1,P],encapsulation:2,changeDetection:1})}}return n})();var Ei=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-evenly-divided-example`]],standalone:!1,features:[lo],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiWidth`,`three`],[`suiFormField`,``],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`First name`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Middle name`),Bu(),Gh(9,`input`,4),Bu(),ss(10,`div`,2)(11,`label`),WC(12,`Last name`),Bu(),Gh(13,`input`,5),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var gi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-grouped-example`]],standalone:!1,features:[lo],decls:14,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiGrouped`,``],[`suiFormField`,``],[`suiType`,`radio`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`sui-checkbox`,3),WC(4,` Apples `),Bu()(),ss(5,`div`,2)(6,`sui-checkbox`,3),WC(7,` Oranges `),Bu()(),ss(8,`div`,2)(9,`sui-checkbox`,3),WC(10,` Pears `),Bu()(),ss(11,`div`,2)(12,`sui-checkbox`,3),WC(13,` Grapefruit `),Bu()()()())},dependencies:[Si$1,Oi$1,Ni$1,P],encapsulation:2,changeDetection:1})}}return n})();var bi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-equal-width-group-example`]],standalone:!1,features:[lo],decls:23,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``],[`suiFormField`,``],[`type`,`text`,`placeholder`,`Username`],[`type`,`password`],[`suiFormFields`,``,`suiEqualWidth`,``],[`type`,`text`,`placeholder`,`First Name`],[`type`,`text`,`placeholder`,`Middle Name`],[`type`,`text`,`placeholder`,`Last Name`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`label`),WC(4,`Username`),Bu(),Gh(5,`input`,3),Bu(),ss(6,`div`,2)(7,`label`),WC(8,`Password`),Bu(),Gh(9,`input`,4),Bu()(),ss(10,`div`,5)(11,`div`,2)(12,`label`),WC(13,`First name`),Bu(),Gh(14,`input`,6),Bu(),ss(15,`div`,2)(16,`label`),WC(17,`Middle name`),Bu(),Gh(18,`input`,7),Bu(),ss(19,`div`,2)(20,`label`),WC(21,`Last name`),Bu(),Gh(22,`input`,8),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var yi=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-inline-group-example`]],standalone:!1,features:[lo],decls:10,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiInline`,``],[`suiFormField`,``],[`type`,`text`,`placeholder`,`(xxx)`],[`type`,`text`,`placeholder`,`xxx`],[`type`,`text`,`placeholder`,`xxxx`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`Phone Number`),Bu(),ss(4,`div`,2),Gh(5,`input`,3),Bu(),ss(6,`div`,2),Gh(7,`input`,4),Bu(),ss(8,`div`,2),Gh(9,`input`,5),Bu()()())},dependencies:[Si$1,Oi$1,Ni$1],encapsulation:2,changeDetection:1})}}return n})();var Ci=(()=>{class n extends g{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-inline-group-alt-example`]],standalone:!1,features:[lo],decls:16,vars:0,consts:[[`sui-form`,``],[`suiFormFields`,``,`suiInline`,``],[`suiFormField`,``],[`suiType`,`radio`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`label`),WC(3,`What's your favourite fruit?`),Bu(),ss(4,`div`,2)(5,`sui-checkbox`,3),WC(6,` Apples `),Bu()(),ss(7,`div`,2)(8,`sui-checkbox`,3),WC(9,` Oranges `),Bu()(),ss(10,`div`,2)(11,`sui-checkbox`,3),WC(12,` Pears `),Bu()(),ss(13,`div`,2)(14,`sui-checkbox`,3),WC(15,` Grapefruit `),Bu()()()())},dependencies:[Si$1,Oi$1,Ni$1,P],encapsulation:2,changeDetection:1})}}return n})();function $r(n,s){n&1&&Gh(0,`doc-form-basic-example`)}function Kr(n,s){n&1&&Gh(0,`doc-form-basic-alt-example`)}function Qr(n,s){n&1&&Gh(0,`doc-form-user-input-example`)}function Zr(n,s){n&1&&Gh(0,`doc-form-fields-example`)}function em(n,s){n&1&&Gh(0,`doc-form-fields-width-example`)}function tm(n,s){n&1&&Gh(0,`doc-form-fields-inline-example`)}function im(n,s){n&1&&Gh(0,`doc-form-text-area-example`)}function nm(n,s){n&1&&Gh(0,`doc-form-checkbox-example`)}function am(n,s){n&1&&Gh(0,`doc-form-radio-example`)}function lm(n,s){n&1&&Gh(0,`doc-form-dropdown-example`)}function dm(n,s){n&1&&Gh(0,`doc-form-dropdown-alt-example`)}function rm(n,s){n&1&&Gh(0,`doc-form-multiple-select-example`)}function mm(n,s){n&1&&Gh(0,`doc-form-html-select-example`)}function om(n,s){n&1&&Gh(0,`doc-form-message-example`)}function sm(n,s){n&1&&Gh(0,`doc-form-loading-example`)}function cm(n,s){n&1&&Gh(0,`doc-form-success-example`)}function pm(n,s){n&1&&Gh(0,`doc-form-error-example`)}function um(n,s){n&1&&Gh(0,`doc-form-warning-example`)}function vm(n,s){n&1&&Gh(0,`doc-form-field-error-example`)}function xm(n,s){n&1&&Gh(0,`doc-form-disabled-example`)}function Sm(n,s){n&1&&Gh(0,`doc-form-read-only-example`)}function hm(n,s){n&1&&Gh(0,`doc-form-size-mini-example`)}function fm(n,s){n&1&&Gh(0,`doc-form-size-tiny-example`)}function Em(n,s){n&1&&Gh(0,`doc-form-size-small-example`)}function gm(n,s){n&1&&Gh(0,`doc-form-size-large-example`)}function bm(n,s){n&1&&Gh(0,`doc-form-size-big-example`)}function ym(n,s){n&1&&Gh(0,`doc-form-size-huge-example`)}function Cm(n,s){n&1&&Gh(0,`doc-form-size-massive-example`)}function Fm(n,s){n&1&&Gh(0,`doc-form-equal-width-example`)}function Dm(n,s){n&1&&Gh(0,`doc-form-inverted-example`)}function Mm(n,s){n&1&&Gh(0,`doc-form-inline-example`)}function _m(n,s){n&1&&Gh(0,`doc-form-width-example`)}function wm(n,s){n&1&&Gh(0,`doc-form-required-example`)}function Tm(n,s){n&1&&Gh(0,`doc-form-evenly-divided-example`)}function Im(n,s){n&1&&Gh(0,`doc-form-grouped-example`)}function Am(n,s){n&1&&Gh(0,`doc-form-equal-width-group-example`)}function km(n,s){n&1&&Gh(0,`doc-form-inline-group-example`)}function Bm(n,s){n&1&&Gh(0,`doc-form-inline-group-alt-example`)}function Gm(n,s){if(n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Form`),Bu(),ss(6,`p`),WC(7,`A form`),Bu(),Ph(8,$r,1,0,`ng-template`,5),Bu(),ss(9,`doc-code-sample`,3),Ph(10,Kr,1,0,`ng-template`,5),Bu(),Gh(11,`br`),ss(12,`h2`,2),WC(13,`Content`),Bu(),ss(14,`doc-code-sample`,3)(15,`h3`,4),WC(16,`Field`),Bu(),ss(17,`p`),WC(18,`A field is a form element containing a label and an input`),Bu(),Ph(19,Qr,1,0,`ng-template`,5),Bu(),ss(20,`doc-code-sample`,3)(21,`h3`,4),WC(22,`Fields`),Bu(),ss(23,`p`),WC(24,`A set of fields can appear grouped together`),Bu(),ss(25,`div`,6),WC(26,` Field groups automatically receive responsive styling, swapping to one field per row on mobile devices. `),Bu(),Ph(27,Zr,1,0,`ng-template`,5),Bu(),ss(28,`doc-code-sample`,3),Ph(29,em,1,0,`ng-template`,5),Bu(),ss(30,`doc-code-sample`,3),Ph(31,tm,1,0,`ng-template`,5),Bu(),ss(32,`doc-code-sample`,3)(33,`h3`,4),WC(34,`Text Area`),Bu(),ss(35,`p`),WC(36,`A textarea can be used to allow for extended user input.`),Bu(),ss(37,`div`,7),WC(38,` To specify an approximate text area size use the rows attribute. `),Bu(),Ph(39,im,1,0,`ng-template`,5),Bu(),ss(40,`doc-code-sample`,3)(41,`h3`,4),WC(42,`Checkbox`),Bu(),ss(43,`p`),WC(44,`A form can contain a `),ss(45,`a`,8),WC(46,`checkbox`),Bu()(),ss(47,`div`,7),WC(48,` UI checkbox are special, styled versions of standard HTML checkboxes `),Bu(),Ph(49,nm,1,0,`ng-template`,5),Bu(),ss(50,`doc-code-sample`,3)(51,`h3`,4),WC(52,`Radio Checkbox`),Bu(),ss(53,`p`),WC(54,`A form can contain a `),ss(55,`a`,8),WC(56,`radio checkbox`),Bu()(),Ph(57,am,1,0,`ng-template`,5),Bu(),ss(58,`doc-code-sample`,3)(59,`h3`,4),WC(60,`Dropdown`),Bu(),ss(61,`p`),WC(62,`A form can contain a `),ss(63,`a`,9),WC(64,`dropdown`),Bu()(),Ph(65,lm,1,0,`ng-template`,5),Bu(),ss(66,`doc-code-sample`,3),Ph(67,dm,1,0,`ng-template`,5),Bu(),ss(68,`doc-code-sample`,3)(69,`h3`,4),WC(70,`Multiple Select`),Bu(),ss(71,`p`),WC(72,`A multiple select is used to include several choices with one form field`),Bu(),Ph(73,rm,1,0,`ng-template`,5),Bu(),ss(74,`doc-code-sample`,3)(75,`h3`,4),WC(76,`HTML Select`),Bu(),ss(77,`p`),WC(78,`A multiple select is used to include several choices with one form field`),Bu(),Ph(79,mm,1,0,`ng-template`,5),Bu(),ss(80,`doc-code-sample`,3)(81,`h3`,4),WC(82,`Message`),Bu(),ss(83,`p`),WC(84,`A form can contain a `),ss(85,`a`,10),WC(86,`message`),Bu()(),ss(87,`div`,7),WC(88,` Any `),ss(89,`code`),WC(90,`info`),Bu(),WC(91,`, `),ss(92,`code`),WC(93,`error`),Bu(),WC(94,`, `),ss(95,`code`),WC(96,`success`),Bu(),WC(97,`, or `),ss(98,`code`),WC(99,`warning`),Bu(),WC(100,` message blocks found inside a form are hidden by default. `),Bu(),Ph(101,om,1,0,`ng-template`,5),Bu(),Gh(102,`br`),ss(103,`h2`,2),WC(104,`State`),Bu(),ss(105,`doc-code-sample`,3)(106,`h3`,4),WC(107,`Loading`),Bu(),ss(108,`p`),WC(109,`If a form is in loading state, it will automatically show a loading indicator.`),Bu(),Ph(110,sm,1,0,`ng-template`,5),Bu(),ss(111,`doc-code-sample`,3)(112,`h3`,4),WC(113,`Success`),Bu(),ss(114,`p`),WC(115,`If a form is in an success state, it will automatically show any success message blocks.`),Bu(),Ph(116,cm,1,0,`ng-template`,5),Bu(),ss(117,`doc-code-sample`,3)(118,`h3`,4),WC(119,`Error`),Bu(),ss(120,`p`),WC(121,`If a form is in an error state, it will automatically show any error message blocks.`),Bu(),Ph(122,pm,1,0,`ng-template`,5),Bu(),ss(123,`doc-code-sample`,3)(124,`h3`,4),WC(125,`Warning`),Bu(),ss(126,`p`),WC(127,`If a form is in warning state, it will automatically show any warning message block.`),Bu(),Ph(128,um,1,0,`ng-template`,5),Bu(),ss(129,`doc-code-sample`,3)(130,`h3`,4),WC(131,`Field Error`),Bu(),ss(132,`p`),WC(133,`Individual fields may display an error state`),Bu(),Ph(134,vm,1,0,`ng-template`,5),Bu(),ss(135,`doc-code-sample`,3)(136,`h3`,4),WC(137,`Disabled Field`),Bu(),ss(138,`p`),WC(139,`Individual fields may be disabled`),Bu(),Ph(140,xm,1,0,`ng-template`,5),Bu(),ss(141,`doc-code-sample`,3)(142,`h3`,4),WC(143,`Read-Only Field`),Bu(),ss(144,`p`),WC(145,`Individual fields may be read only`),Bu(),Ph(146,Sm,1,0,`ng-template`,5),Bu(),Gh(147,`br`),ss(148,`h2`,2),WC(149,`Form Variations`),Bu(),ss(150,`doc-code-sample`,3)(151,`h3`,4),WC(152,`Size`),Bu(),ss(153,`p`),WC(154,`A form can vary in size`),Bu(),Ph(155,hm,1,0,`ng-template`,5),Bu(),ss(156,`doc-code-sample`,3),Ph(157,fm,1,0,`ng-template`,5),Bu(),ss(158,`doc-code-sample`,3),Ph(159,Em,1,0,`ng-template`,5),Bu(),ss(160,`doc-code-sample`,3),Ph(161,gm,1,0,`ng-template`,5),Bu(),ss(162,`doc-code-sample`,3),Ph(163,bm,1,0,`ng-template`,5),Bu(),ss(164,`doc-code-sample`,3),Ph(165,ym,1,0,`ng-template`,5),Bu(),ss(166,`doc-code-sample`,3),Ph(167,Cm,1,0,`ng-template`,5),Bu(),ss(168,`doc-code-sample`,3)(169,`h3`,4),WC(170,`Equal Width Form`),Bu(),ss(171,`p`),WC(172,`Forms can automatically divide fields to be equal width`),Bu(),Ph(173,Fm,1,0,`ng-template`,5),Bu(),ss(174,`doc-code-sample`,3)(175,`h3`,4),WC(176,`Inverted`),Bu(),ss(177,`p`),WC(178,`A form on a dark background may have to invert its colour scheme`),Bu(),Ph(179,Dm,1,0,`ng-template`,5),Bu(),Gh(180,`br`),ss(181,`h2`,2),WC(182,`Field Variations`),Bu(),ss(183,`doc-code-sample`,3)(184,`h3`,4),WC(185,`Inline Field`),Bu(),ss(186,`p`),WC(187,`A field can have its label next to instead of above it.`),Bu(),Ph(188,Mm,1,0,`ng-template`,5),Bu(),ss(189,`doc-code-sample`,3)(190,`h3`,4),WC(191,`Width`),Bu(),ss(192,`p`),WC(193,`A field can specify its width in grid columns`),Bu(),Ph(194,_m,1,0,`ng-template`,5),Bu(),ss(195,`doc-code-sample`,3)(196,`h3`,4),WC(197,`Required`),Bu(),ss(198,`p`),WC(199,`A field can show that input is mandatory`),Bu(),Ph(200,wm,1,0,`ng-template`,5),Bu(),Gh(201,`br`),ss(202,`h2`,2),WC(203,`Group Variations`),Bu(),ss(204,`doc-code-sample`,3)(205,`h3`,4),WC(206,`Evenly Divided`),Bu(),ss(207,`p`),WC(208,`Fields can have their widths divided evenly.`),Bu(),Ph(209,Tm,1,0,`ng-template`,5),Bu(),ss(210,`doc-code-sample`,3)(211,`h3`,4),WC(212,`Grouped Fields`),Bu(),ss(213,`p`),WC(214,`Fields can show related choices.`),Bu(),Ph(215,Im,1,0,`ng-template`,5),Bu(),ss(216,`doc-code-sample`,3)(217,`h3`,4),WC(218,`Equal Width Fields`),Bu(),ss(219,`p`),WC(220,`Fields can automatically divide fields to be equal width.`),Bu(),Ph(221,Am,1,0,`ng-template`,5),Bu(),ss(222,`doc-code-sample`,3)(223,`h3`,4),WC(224,`Inline Fields`),Bu(),ss(225,`p`),WC(226,`Multiple fields may be inline in a row.`),Bu(),Ph(227,km,1,0,`ng-template`,5),Bu(),ss(228,`doc-code-sample`,3),Ph(229,Bm,1,0,`ng-template`,5),Bu()()),n&2){let a=hC();KD(3),Uh(`templateCode`,a.snippetBasic),KD(6),Uh(`templateCode`,a.snippetBasicAlt),KD(5),Uh(`templateCode`,a.snippetUserInput),KD(6),Uh(`templateCode`,a.snippetFields),KD(8),Uh(`templateCode`,a.snippetFieldsWidth),KD(2),Uh(`templateCode`,a.snippetFieldsInline),KD(2),Uh(`templateCode`,a.snippetTextArea),KD(8),Uh(`templateCode`,a.snippetCheckbox),KD(10),Uh(`templateCode`,a.snippetRadio),KD(8),Uh(`templateCode`,a.snippetDropdown),KD(8),Uh(`templateCode`,a.snippetDropdownAlt),KD(2),Uh(`templateCode`,a.snippetMultipleSelect),KD(6),Uh(`templateCode`,a.snippetHtmlSelect),KD(6),Uh(`templateCode`,a.snippetMessage),KD(25),Uh(`templateCode`,a.snippetLoading),KD(6),Uh(`templateCode`,a.snippetSuccess),KD(6),Uh(`templateCode`,a.snippetError),KD(6),Uh(`templateCode`,a.snippetWarning),KD(6),Uh(`templateCode`,a.snippetFieldError),KD(6),Uh(`templateCode`,a.snippetDisabled),KD(6),Uh(`templateCode`,a.snippetReadOnly),KD(9),Uh(`templateCode`,a.snippetSizeMini),KD(6),Uh(`templateCode`,a.snippetSizeTiny),KD(2),Uh(`templateCode`,a.snippetSizeSmall),KD(2),Uh(`templateCode`,a.snippetSizeLarge),KD(2),Uh(`templateCode`,a.snippetSizeBig),KD(2),Uh(`templateCode`,a.snippetSizeHuge),KD(2),Uh(`templateCode`,a.snippetSizeMassive),KD(2),Uh(`templateCode`,a.snippetEqualWidth),KD(6),Uh(`templateCode`,a.snippetInverted),KD(9),Uh(`templateCode`,a.snippetInline),KD(6),Uh(`templateCode`,a.snippetWidth),KD(6),Uh(`templateCode`,a.snippetRequired),KD(9),Uh(`templateCode`,a.snippetEvenlyDivided),KD(6),Uh(`templateCode`,a.snippetGrouped),KD(6),Uh(`templateCode`,a.snippetEqualWidthGroup),KD(6),Uh(`templateCode`,a.snippetInlineGroup),KD(6),Uh(`templateCode`,a.snippetInlineGroupAlt)}}function Nm(n,s){n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`sui-form`),Bu(),ss(3,`h4`,4),WC(4,`Properties`),Bu(),ss(5,`table`,11)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss(10,`th`),WC(11,`Description`),Bu(),ss(12,`th`),WC(13,`Type`),Bu(),ss(14,`th`),WC(15,`Default`),Bu()()(),ss(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiState`),Bu(),ss(20,`td`),WC(21,`Set the form state. Allowed values could be `),ss(22,`span`,12),WC(23,`success`),Bu(),WC(24,` | `),ss(25,`span`,12),WC(26,`warning`),Bu(),WC(27,` | `),ss(28,`span`,12),WC(29,`error`),Bu(),WC(30,` | `),ss(31,`span`,12),WC(32,`null`),Bu()(),ss(33,`td`)(34,`div`,13),WC(35,` string `),Bu()(),ss(36,`td`)(37,`div`,14),WC(38,` null `),Bu()()(),ss(39,`tr`)(40,`td`),WC(41,`suiSize`),Bu(),ss(42,`td`),WC(43,`Set the form size. Allowed values could be `),ss(44,`span`,12),WC(45,`mini`),Bu(),WC(46,` | `),ss(47,`span`,12),WC(48,`tiny`),Bu(),WC(49,` | `),ss(50,`span`,12),WC(51,`small`),Bu(),WC(52,` | `),ss(53,`span`,12),WC(54,`medium`),Bu(),WC(55,` | `),ss(56,`span`,12),WC(57,`big`),Bu(),WC(58,` | `),ss(59,`span`,12),WC(60,`huge`),Bu(),WC(61,` | `),ss(62,`span`,12),WC(63,`massive`),Bu(),WC(64,` | `),ss(65,`span`,12),WC(66,`null`),Bu()(),ss(67,`td`)(68,`div`,13),WC(69,` string `),Bu()(),ss(70,`td`)(71,`div`,14),WC(72,` null `),Bu()()(),ss(73,`tr`)(74,`td`),WC(75,`suiLoading`),Bu(),ss(76,`td`),WC(77,`Whether or not the form is a loading state. `),Bu(),ss(78,`td`)(79,`div`,13),WC(80,` boolean `),Bu()(),ss(81,`td`)(82,`div`,14),WC(83,` false `),Bu()()(),ss(84,`tr`)(85,`td`),WC(86,`suiEqualWidth`),Bu(),ss(87,`td`),WC(88,`Whether or not the form fields are of equal width. `),Bu(),ss(89,`td`)(90,`div`,13),WC(91,` boolean `),Bu()(),ss(92,`td`)(93,`div`,14),WC(94,` false `),Bu()()(),ss(95,`tr`)(96,`td`),WC(97,`suiInverted`),Bu(),ss(98,`td`),WC(99,`Whether or not the form has inverted colours. `),Bu(),ss(100,`td`)(101,`div`,13),WC(102,` boolean `),Bu()(),ss(103,`td`)(104,`div`,14),WC(105,` false `),Bu()()()()(),Gh(106,`br`),ss(107,`h2`,2),WC(108,`suiFormFields`),Bu(),ss(109,`h4`,4),WC(110,`Properties`),Bu(),ss(111,`table`,11)(112,`thead`)(113,`tr`)(114,`th`),WC(115,`Property`),Bu(),ss(116,`th`),WC(117,`Description`),Bu(),ss(118,`th`),WC(119,`Type`),Bu(),ss(120,`th`),WC(121,`Default`),Bu()()(),ss(122,`tbody`)(123,`tr`)(124,`td`),WC(125,`suiWidth`),Bu(),ss(126,`td`),WC(127,`Set the fields width. Allowed values could be `),ss(128,`span`,12),WC(129,`one`),Bu(),WC(130,` | `),ss(131,`span`,12),WC(132,`two`),Bu(),WC(133,` | `),ss(134,`span`,12),WC(135,`three`),Bu(),WC(136,` | `),ss(137,`span`,12),WC(138,`four`),Bu(),WC(139,` | `),ss(140,`span`,12),WC(141,`five`),Bu(),WC(142,` | `),ss(143,`span`,12),WC(144,`six`),Bu(),WC(145,` | `),ss(146,`span`,12),WC(147,`seven`),Bu(),WC(148,` | `),ss(149,`span`,12),WC(150,`eight`),Bu(),WC(151,` | `),ss(152,`span`,12),WC(153,`nine`),Bu(),WC(154,` | `),ss(155,`span`,12),WC(156,`ten`),Bu(),WC(157,` | `),ss(158,`span`,12),WC(159,`eleven`),Bu(),WC(160,` | `),ss(161,`span`,12),WC(162,`twelve`),Bu(),WC(163,` | `),ss(164,`span`,12),WC(165,`thirteen`),Bu(),WC(166,` | `),ss(167,`span`,12),WC(168,`fourteen`),Bu(),WC(169,`| `),ss(170,`span`,12),WC(171,`fifteen`),Bu(),WC(172,` | `),ss(173,`span`,12),WC(174,`sixteen`),Bu(),WC(175,` | `),ss(176,`span`,12),WC(177,`null`),Bu()(),ss(178,`td`)(179,`div`,13),WC(180,` string`),Bu()(),ss(181,`td`)(182,`div`,14),WC(183,` null`),Bu()()(),ss(184,`tr`)(185,`td`),WC(186,`suiInline`),Bu(),ss(187,`td`),WC(188,` Determine whether or not the field group is inline `),Bu(),ss(189,`td`)(190,`div`,13),WC(191,` boolean `),Bu()(),ss(192,`td`)(193,`div`,14),WC(194,` false `),Bu()()(),ss(195,`tr`)(196,`td`),WC(197,`suiGrouped`),Bu(),ss(198,`td`),WC(199,` Determine whether or not the fields are grouped `),Bu(),ss(200,`td`)(201,`div`,13),WC(202,` boolean `),Bu()(),ss(203,`td`)(204,`div`,14),WC(205,` false `),Bu()()(),ss(206,`tr`)(207,`td`),WC(208,`suiEqualWidth`),Bu(),ss(209,`td`),WC(210,` Determine whether or not the field contents are equal width `),Bu(),ss(211,`td`)(212,`div`,13),WC(213,` boolean `),Bu()(),ss(214,`td`)(215,`div`,14),WC(216,` false `),Bu()()()()(),Gh(217,`br`),ss(218,`h2`,2),WC(219,`suiFormField`),Bu(),ss(220,`h4`,4),WC(221,`Properties`),Bu(),ss(222,`table`,11)(223,`thead`)(224,`tr`)(225,`th`),WC(226,`Property`),Bu(),ss(227,`th`),WC(228,`Description`),Bu(),ss(229,`th`),WC(230,`Type`),Bu(),ss(231,`th`),WC(232,`Default`),Bu()()(),ss(233,`tbody`)(234,`tr`)(235,`td`),WC(236,`suiWidth`),Bu(),ss(237,`td`),WC(238,`Set the fields width. Allowed values could be `),ss(239,`span`,12),WC(240,`one`),Bu(),WC(241,` | `),ss(242,`span`,12),WC(243,`two`),Bu(),WC(244,` | `),ss(245,`span`,12),WC(246,`three`),Bu(),WC(247,` | `),ss(248,`span`,12),WC(249,`four`),Bu(),WC(250,` | `),ss(251,`span`,12),WC(252,`five`),Bu(),WC(253,` | `),ss(254,`span`,12),WC(255,`six`),Bu(),WC(256,` | `),ss(257,`span`,12),WC(258,`seven`),Bu(),WC(259,` | `),ss(260,`span`,12),WC(261,`eight`),Bu(),WC(262,` | `),ss(263,`span`,12),WC(264,`nine`),Bu(),WC(265,` | `),ss(266,`span`,12),WC(267,`ten`),Bu(),WC(268,` | `),ss(269,`span`,12),WC(270,`eleven`),Bu(),WC(271,` | `),ss(272,`span`,12),WC(273,`twelve`),Bu(),WC(274,` | `),ss(275,`span`,12),WC(276,`thirteen`),Bu(),WC(277,` | `),ss(278,`span`,12),WC(279,`fourteen`),Bu(),WC(280,`| `),ss(281,`span`,12),WC(282,`fifteen`),Bu(),WC(283,` | `),ss(284,`span`,12),WC(285,`sixteen`),Bu(),WC(286,` | `),ss(287,`span`,12),WC(288,`null`),Bu()(),ss(289,`td`)(290,`div`,13),WC(291,` string`),Bu()(),ss(292,`td`)(293,`div`,14),WC(294,` null`),Bu()()(),ss(295,`tr`)(296,`td`),WC(297,`suiError`),Bu(),ss(298,`td`),WC(299,` Determine whether or not the field is in an error state `),Bu(),ss(300,`td`)(301,`div`,13),WC(302,` boolean `),Bu()(),ss(303,`td`)(304,`div`,14),WC(305,` false `),Bu()()(),ss(306,`tr`)(307,`td`),WC(308,`suiInline`),Bu(),ss(309,`td`),WC(310,` Determine whether or not the field is inline `),Bu(),ss(311,`td`)(312,`div`,13),WC(313,` boolean `),Bu()(),ss(314,`td`)(315,`div`,14),WC(316,` false `),Bu()()(),ss(317,`tr`)(318,`td`),WC(319,`disabled`),Bu(),ss(320,`td`),WC(321,` Determine whether or not the field is disabled `),Bu(),ss(322,`td`)(323,`div`,13),WC(324,` boolean `),Bu()(),ss(325,`td`)(326,`div`,14),WC(327,` false `),Bu()()(),ss(328,`tr`)(329,`td`),WC(330,`suiRequired`),Bu(),ss(331,`td`),WC(332,` Determine whether or not the field is required `),Bu(),ss(333,`td`)(334,`div`,13),WC(335,` boolean `),Bu()(),ss(336,`td`)(337,`div`,14),WC(338,` false `),Bu()()()()()())}var Fi=(()=>{class n{constructor(a){this.snippetBasic=tt,this.snippetBasicAlt=it,this.snippetUserInput=nt,this.snippetFields=at,this.snippetFieldsWidth=lt,this.snippetFieldsInline=dt,this.snippetTextArea=rt,this.snippetCheckbox=mt,this.snippetRadio=ot,this.snippetDropdown=st,this.snippetDropdownAlt=ct,this.snippetMultipleSelect=pt,this.snippetHtmlSelect=ut,this.snippetMessage=vt,this.snippetLoading=xt,this.snippetSuccess=St,this.snippetError=ht,this.snippetWarning=ft,this.snippetFieldError=Et,this.snippetDisabled=gt,this.snippetReadOnly=bt,this.snippetSizeMini=yt,this.snippetSizeTiny=Ct,this.snippetSizeSmall=Ft,this.snippetSizeLarge=Dt,this.snippetSizeBig=Mt,this.snippetSizeHuge=_t,this.snippetSizeMassive=wt,this.snippetEqualWidth=Tt,this.snippetInverted=It,this.snippetInline=At,this.snippetWidth=kt,this.snippetRequired=Bt,this.snippetEvenlyDivided=Gt,this.snippetGrouped=Nt,this.snippetEqualWidthGroup=Wt,this.snippetInlineGroup=Rt,this.snippetInlineGroupAlt=Pt,this.states=[{text:`Alabama`,value:`al`}],this.countries=[{text:`Albania`,value:`al`,flag:`al`},{text:`Nigeria`,value:`ng`,flag:`ng`}],this.months=[{text:`January`,value:`jan`}],this.cards=[{text:`Visa`,value:`visa`}],this.contacts=[{text:`Justen Kitsune`,image:{avatar:!0,src:`https://semantic-ui.com/images/avatar/small/stevie.jpg`}}],this.gender=[{text:`Male`},{text:`Female`}],a.setTitle(`Form | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Form`,`subHeader`,`A form displays a set of related user input fields in a structured way`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-message`,``,`suiState`,`success`],[`sui-message`,``,`suiState`,`info`],[`routerLink`,`/modules/checkbox`],[`routerLink`,`/modules/dropdown`],[`routerLink`,`/collections/message`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(ss(0,`doc-page`,0),Ph(1,Gm,230,38,`div`,1)(2,Nm,339,0,`div`,1),Bu()),l&2&&(KD(),Uh(`docPageContent`,`definition`),KD(),Uh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$2,Oi$2,Ws$1,li$1,Qt$1,U$1,fi$2,Jt,Lt,Ht,Vt,qt,Ot,Ut,jt,Yt,Xt,$t,Kt,Qt,Zt,ei,ti,ii,ni,ai,li,di,ri,mi,oi,si,ci,pi,ui,vi,xi,Si,hi,fi,Ei,gi,bi,yi,Ci],encapsulation:2,changeDetection:1})}}return n})();var Di=`<div sui-grid>
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
`;var ro=()=>[`tablet reversed`,`mobile reversed`];var Yi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-grid-example`]],standalone:!1,decls:17,vars:0,consts:[[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`four`],[`type`,`image`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,1),Gh(4,`doc-wireframe`,2),Bu(),ss(5,`div`,1),Gh(6,`doc-wireframe`,2),Bu(),ss(7,`div`,1),Gh(8,`doc-wireframe`,2),Bu(),ss(9,`div`,1),Gh(10,`doc-wireframe`,2),Bu(),ss(11,`div`,1),Gh(12,`doc-wireframe`,2),Bu(),ss(13,`div`,1),Gh(14,`doc-wireframe`,2),Bu(),ss(15,`div`,1),Gh(16,`doc-wireframe`,2),Bu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var Xi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-divided-example`]],standalone:!1,decls:15,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`three`,`suiDivided`,`divided`],[`suiGridRow`,``],[`suiGridColumn`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),Gh(3,`doc-wireframe`,3),Bu(),ss(4,`div`,2),Gh(5,`doc-wireframe`,3),Bu(),ss(6,`div`,2),Gh(7,`doc-wireframe`,3),Bu()(),ss(8,`div`,1)(9,`div`,2),Gh(10,`doc-wireframe`,3),Bu(),ss(11,`div`,2),Gh(12,`doc-wireframe`,3),Bu(),ss(13,`div`,2),Gh(14,`doc-wireframe`,3),Bu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var $i=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-vertically-divided-example`]],standalone:!1,decls:13,vars:0,consts:[[`sui-grid`,``,`suiDivided`,`vertically divided`],[`suiGridRow`,``,`suiWidth`,`two`],[`suiGridColumn`,``],[`type`,`paragraph`],[`suiGridRow`,``,`suiWidth`,`three`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),Gh(3,`doc-wireframe`,3),Bu(),ss(4,`div`,2),Gh(5,`doc-wireframe`,3),Bu()(),ss(6,`div`,4)(7,`div`,2),Gh(8,`doc-wireframe`,3),Bu(),ss(9,`div`,2),Gh(10,`doc-wireframe`,3),Bu(),ss(11,`div`,2),Gh(12,`doc-wireframe`,3),Bu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var Ki=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-celled-example`]],standalone:!1,decls:13,vars:0,consts:[[`sui-grid`,``,`suiCelled`,`celled`],[`suiGridRow`,``],[`suiGridColumn`,``,`suiWidth`,`three`],[`type`,`image`],[`suiGridColumn`,``,`suiWidth`,`thirteen`],[`type`,`paragraph`],[`suiGridColumn`,``,`suiWidth`,`ten`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),Gh(3,`doc-wireframe`,3),Bu(),ss(4,`div`,4),Gh(5,`doc-wireframe`,5),Bu()(),ss(6,`div`,1)(7,`div`,2),Gh(8,`doc-wireframe`,3),Bu(),ss(9,`div`,6),Gh(10,`doc-wireframe`,5),Bu(),ss(11,`div`,2),Gh(12,`doc-wireframe`,3),Bu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var Qi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-internally-celled-example`]],standalone:!1,decls:15,vars:0,consts:[[`sui-grid`,``,`suiCelled`,`internally celled`],[`suiGridRow`,``],[`suiGridColumn`,``,`suiWidth`,`three`],[`type`,`image`],[`suiGridColumn`,``,`suiWidth`,`ten`],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),Gh(3,`doc-wireframe`,3),Bu(),ss(4,`div`,4),Gh(5,`doc-wireframe`,5),Bu(),ss(6,`div`,2),Gh(7,`doc-wireframe`,3),Bu()(),ss(8,`div`,1)(9,`div`,2),Gh(10,`doc-wireframe`,3),Bu(),ss(11,`div`,4),Gh(12,`doc-wireframe`,5),Bu(),ss(13,`div`,2),Gh(14,`doc-wireframe`,3),Bu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var Zi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-rows-example`]],standalone:!1,decls:13,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`four`],[`suiGridRow`,``],[`suiGridColumn`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),Gh(3,`doc-wireframe`,3),Bu(),ss(4,`div`,2),Gh(5,`doc-wireframe`,3),Bu(),ss(6,`div`,2),Gh(7,`doc-wireframe`,3),Bu()(),ss(8,`div`,1)(9,`div`,2),Gh(10,`doc-wireframe`,3),Bu(),ss(11,`div`,2),Gh(12,`doc-wireframe`,3),Bu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var en=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-columns-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`four`],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,1),Gh(4,`doc-wireframe`,2),Bu(),ss(5,`div`,1),Gh(6,`doc-wireframe`,2),Bu(),ss(7,`div`,1),Gh(8,`doc-wireframe`,2),Bu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var tn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-floated-example`]],standalone:!1,decls:5,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`three`],[`suiGridColumn`,``,`suiFloated`,`left floated`],[`type`,`paragraph`],[`suiGridColumn`,``,`suiFloated`,`right floated`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,3),Gh(4,`doc-wireframe`,2),Bu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var nn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-column-width-example`]],standalone:!1,decls:7,vars:0,consts:[[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`four`],[`type`,`image`],[`suiGridColumn`,``,`suiWidth`,`nine`],[`type`,`paragraph`],[`suiGridColumn`,``,`suiWidth`,`three`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,3),Gh(4,`doc-wireframe`,4),Bu(),ss(5,`div`,5),Gh(6,`doc-wireframe`,2),Bu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var an=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-column-count-example`]],standalone:!1,decls:28,vars:0,consts:[[`sui-grid`,``],[`suiGridRow`,``,`suiWidth`,`four`],[`suiGridColumn`,``],[`type`,`image`],[`suiGridRow`,``,`suiWidth`,`three`],[`suiGridRow`,``,`suiWidth`,`five`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),Gh(3,`doc-wireframe`,3),Bu(),ss(4,`div`,2),Gh(5,`doc-wireframe`,3),Bu(),ss(6,`div`,2),Gh(7,`doc-wireframe`,3),Bu(),ss(8,`div`,2),Gh(9,`doc-wireframe`,3),Bu()(),ss(10,`div`,4)(11,`div`,2),Gh(12,`doc-wireframe`,3),Bu(),ss(13,`div`,2),Gh(14,`doc-wireframe`,3),Bu(),ss(15,`div`,2),Gh(16,`doc-wireframe`,3),Bu()(),ss(17,`div`,5)(18,`div`,2),Gh(19,`doc-wireframe`,3),Bu(),ss(20,`div`,2),Gh(21,`doc-wireframe`,3),Bu(),ss(22,`div`,2),Gh(23,`doc-wireframe`,3),Bu(),ss(24,`div`,2),Gh(25,`doc-wireframe`,3),Bu(),ss(26,`div`,2),Gh(27,`doc-wireframe`,3),Bu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var ln=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-equal-width-example`]],standalone:!1,decls:34,vars:0,consts:[[`sui-grid`,``,`suiEqual`,``],[`suiGridColumn`,``],[`sui-segment`,``],[`suiGridColumn`,``,`suiWidth`,`eight`],[`sui-grid`,``],[`suiGridRow`,``,`suiEqual`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),WC(3,`1`),Bu()(),ss(4,`div`,3)(5,`div`,2),WC(6,`2`),Bu()(),ss(7,`div`,1)(8,`div`,2),WC(9,`3`),Bu()()(),ss(10,`div`,4)(11,`div`,5)(12,`div`,1)(13,`div`,2),WC(14,`1`),Bu()(),ss(15,`div`,1)(16,`div`,2),WC(17,`2`),Bu()(),ss(18,`div`,1)(19,`div`,2),WC(20,`3`),Bu()()(),ss(21,`div`,5)(22,`div`,1)(23,`div`,2),WC(24,`1`),Bu()(),ss(25,`div`,1)(26,`div`,2),WC(27,`2`),Bu()(),ss(28,`div`,1)(29,`div`,2),WC(30,`3`),Bu()(),ss(31,`div`,1)(32,`div`,2),WC(33,`4`),Bu()()()())},dependencies:[ze$1,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var dn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-stretched-example`]],standalone:!1,decls:17,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`three`,`suiDivided`,`divided`],[`suiGridRow`,``,`suiStretched`,``],[`suiGridColumn`,``],[`sui-segment`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3),WC(4,`1`),Bu()(),ss(5,`div`,2)(6,`div`,3),WC(7,`1`),Bu(),ss(8,`div`,3),WC(9,`2`),Bu()(),ss(10,`div`,2)(11,`div`,3),WC(12,`1`),Bu(),ss(13,`div`,3),WC(14,`2`),Bu(),ss(15,`div`,3),WC(16,`3`),Bu()()()())},dependencies:[ze$1,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var rn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-padded-example`]],standalone:!1,decls:21,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`two`,`suiPadded`,`padded`],[`suiGridColumn`,``],[`type`,`paragraph`],[`sui-grid`,``,`suiWidth`,`two`,`suiPadded`,`vertically padded`],[`sui-grid`,``,`suiWidth`,`two`,`suiPadded`,`horizontally padded`]],template:function(l,d){l&1&&(ss(0,`p`),WC(1,`The following grid has vertical and horizontal gutters.`),Bu(),ss(2,`div`,0)(3,`div`,1),Gh(4,`doc-wireframe`,2),Bu(),ss(5,`div`,1),Gh(6,`doc-wireframe`,2),Bu()(),ss(7,`p`),WC(8,`The following grid has vertical gutters.`),Bu(),ss(9,`div`,3)(10,`div`,1),Gh(11,`doc-wireframe`,2),Bu(),ss(12,`div`,1),Gh(13,`doc-wireframe`,2),Bu()(),ss(14,`p`),WC(15,`The following grid has horizontal gutters.`),Bu(),ss(16,`div`,4)(17,`div`,1),Gh(18,`doc-wireframe`,2),Bu(),ss(19,`div`,1),Gh(20,`doc-wireframe`,2),Bu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var mn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-relaxed-example`]],standalone:!1,decls:18,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`four`,`suiRelaxation`,`relaxed`],[`suiGridColumn`,``],[`type`,`image`],[`sui-grid`,``,`suiWidth`,`four`,`suiRelaxation`,`very relaxed`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,1),Gh(4,`doc-wireframe`,2),Bu(),ss(5,`div`,1),Gh(6,`doc-wireframe`,2),Bu(),ss(7,`div`,1),Gh(8,`doc-wireframe`,2),Bu()(),ss(9,`div`,3)(10,`div`,1),Gh(11,`doc-wireframe`,2),Bu(),ss(12,`div`,1),Gh(13,`doc-wireframe`,2),Bu(),ss(14,`div`,1),Gh(15,`doc-wireframe`,2),Bu(),ss(16,`div`,1),Gh(17,`doc-wireframe`,2),Bu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var on=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-colored-example`]],standalone:!1,decls:40,vars:0,consts:[[`sui-grid`,``,`suiWidth`,`five`,`suiPadded`,`padded`],[`suiGridColumn`,``,`suiColour`,`red`],[`suiGridColumn`,``,`suiColour`,`orange`],[`suiGridColumn`,``,`suiColour`,`yellow`],[`suiGridColumn`,``,`suiColour`,`olive`],[`suiGridColumn`,``,`suiColour`,`green`],[`suiGridColumn`,``,`suiColour`,`teal`],[`suiGridColumn`,``,`suiColour`,`blue`],[`suiGridColumn`,``,`suiColour`,`violet`],[`suiGridColumn`,``,`suiColour`,`purple`],[`suiGridColumn`,``,`suiColour`,`pink`],[`suiGridColumn`,``,`suiColour`,`brown`],[`suiGridColumn`,``,`suiColour`,`grey`],[`suiGridColumn`,``,`suiColour`,`black`],[`sui-grid`,``,`suiPadded`,`padded`],[`suiGridRow`,``,`suiColour`,`red`],[`suiGridColumn`,``],[`suiGridRow`,``,`suiColour`,`orange`],[`suiGridRow`,``,`suiColour`,`yellow`],[`suiGridRow`,``,`suiColour`,`olive`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` Red `),Bu(),ss(3,`div`,2),WC(4,` Orange `),Bu(),ss(5,`div`,3),WC(6,` Yellow `),Bu(),ss(7,`div`,4),WC(8,` Olive `),Bu(),ss(9,`div`,5),WC(10,` Green `),Bu(),ss(11,`div`,6),WC(12,` Teal `),Bu(),ss(13,`div`,7),WC(14,` Blue `),Bu(),ss(15,`div`,8),WC(16,` Violet `),Bu(),ss(17,`div`,9),WC(18,` Purple `),Bu(),ss(19,`div`,10),WC(20,` Pink `),Bu(),ss(21,`div`,11),WC(22,` Brown `),Bu(),ss(23,`div`,12),WC(24,` Grey `),Bu(),ss(25,`div`,13),WC(26,` Black `),Bu()(),ss(27,`div`,14)(28,`div`,15)(29,`div`,16),WC(30,` Red `),Bu()(),ss(31,`div`,17)(32,`div`,16),WC(33,` Orange `),Bu()(),ss(34,`div`,18)(35,`div`,16),WC(36,` Yellow `),Bu()(),ss(37,`div`,19)(38,`div`,16),WC(39,` Olive `),Bu()()())},dependencies:[mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var sn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-centered-example`]],standalone:!1,decls:10,vars:0,consts:[[`sui-grid`,``,`suiCentered`,``,`suiWidth`,`two`],[`suiGridColumn`,``],[`type`,`image`],[`suiGridRow`,``,`suiCentered`,``,`suiWidth`,`four`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,3)(4,`div`,1),Gh(5,`doc-wireframe`,2),Bu(),ss(6,`div`,1),Gh(7,`doc-wireframe`,2),Bu(),ss(8,`div`,1),Gh(9,`doc-wireframe`,2),Bu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var cn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-text-alignment-example`]],standalone:!1,decls:26,vars:0,consts:[[`sui-grid`,``,`suiAlignment`,`center aligned`,`suiWidth`,`three`],[`suiGridRow`,``],[`suiGridColumn`,``],[`sui-segment`,``],[`sui-grid`,``],[`suiGridRow`,``,`suiWidth`,`three`],[`suiGridColumn`,``,`suiAlignment`,`left aligned`],[`suiGridColumn`,``,`suiAlignment`,`center aligned`],[`suiGridColumn`,``,`suiAlignment`,`right aligned`],[`suiGridColumn`,``,`suiAlignment`,`justified`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3),WC(4,`Cats`),Bu()(),ss(5,`div`,2)(6,`div`,3),WC(7,`Dogs`),Bu()(),ss(8,`div`,2)(9,`div`,3),WC(10,`Monkeys`),Bu()()()(),ss(11,`div`,4)(12,`div`,5)(13,`div`,6)(14,`div`,3),WC(15,`Left aligned column`),Bu()(),ss(16,`div`,7)(17,`div`,3),WC(18,`Center aligned column`),Bu()(),ss(19,`div`,8)(20,`div`,3),WC(21,`Right aligned column`),Bu()()(),ss(22,`div`,1)(23,`div`,9)(24,`div`,3),WC(25,`Justified content fits exactly inside the grid column, taking up the entire width from one side to the other. Justified content fits exactly inside the grid column, taking up the entire width from one side to the other.`),Bu()()()())},dependencies:[ze$1,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var pn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-vertical-alignment-example`]],standalone:!1,decls:31,vars:0,consts:[[`sui-grid`,``,`suiVerticalAlignment`,`middle aligned`,`suiWidth`,`four`],[`suiGridColumn`,``],[`type`,`image`],[`sui-grid`,``,`suiWidth`,`four`],[`suiGridRow`,``,`suiVerticalAlignment`,`bottom aligned`],[`suiGridRow`,``],[`suiGridColumn`,``,`suiVerticalAlignment`,`top aligned`],[`suiGridColumn`,``,`suiVerticalAlignment`,`middle aligned`],[`suiGridColumn`,``,`suiVerticalAlignment`,`bottom aligned`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,1),Gh(4,`doc-wireframe`,2)(5,`doc-wireframe`,2),Bu(),ss(6,`div`,1),Gh(7,`doc-wireframe`,2),Bu(),ss(8,`div`,1),Gh(9,`doc-wireframe`,2),Bu()(),ss(10,`div`,3)(11,`div`,4)(12,`div`,1),Gh(13,`doc-wireframe`,2),Bu(),ss(14,`div`,1),Gh(15,`doc-wireframe`,2)(16,`doc-wireframe`,2),Bu(),ss(17,`div`,1),Gh(18,`doc-wireframe`,2),Bu(),ss(19,`div`,1),Gh(20,`doc-wireframe`,2),Bu()(),ss(21,`div`,5)(22,`div`,6),Gh(23,`doc-wireframe`,2),Bu(),ss(24,`div`,1),Gh(25,`doc-wireframe`,2)(26,`doc-wireframe`,2),Bu(),ss(27,`div`,7),Gh(28,`doc-wireframe`,2),Bu(),ss(29,`div`,8),Gh(30,`doc-wireframe`,2),Bu()()())},dependencies:[Dr,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var un=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-doubling-example`]],standalone:!1,decls:11,vars:0,consts:[[`sui-grid`,``,`suiDoubling`,``,`suiWidth`,`five`],[`suiGridColumn`,``],[`type`,`image`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,1),Gh(4,`doc-wireframe`,2),Bu(),ss(5,`div`,1),Gh(6,`doc-wireframe`,2),Bu(),ss(7,`div`,1),Gh(8,`doc-wireframe`,2),Bu(),ss(9,`div`,1),Gh(10,`doc-wireframe`,2),Bu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var vn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-stackable-example`]],standalone:!1,decls:7,vars:0,consts:[[`sui-grid`,``,`suiStackable`,``,`suiWidth`,`two`],[`suiGridColumn`,``],[`sui-segment`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),Gh(3,`doc-wireframe`,3),Bu()(),ss(4,`div`,1)(5,`div`,2),Gh(6,`doc-wireframe`,3),Bu()()())},dependencies:[Dr,ze$1,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();var xn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-reversed-example`]],standalone:!1,decls:28,vars:2,consts:[[`sui-grid`,``,`suiWidth`,`four`,`suiDivided`,`divided`,`suiReversed`,`computer reversed`],[`suiGridRow`,``],[`suiGridColumn`,``],[`sui-grid`,``,`suiWidth`,`three`,`suiDivided`,`divided`],[`suiGridRow`,``,3,`suiReversed`],[`sui-grid`,``,`suiWidth`,`one`,`suiDivided`,`vertically divided`,`suiReversed`,`computer vertically reversed`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),WC(3,` Computer First `),Bu(),ss(4,`div`,2),WC(5,` Computer Second `),Bu(),ss(6,`div`,2),WC(7,` Computer Third `),Bu(),ss(8,`div`,2),WC(9,` Computer Fourth `),Bu()()(),ss(10,`div`,3)(11,`div`,4)(12,`div`,2),WC(13,` Tablet & Mobile First `),Bu(),ss(14,`div`,2),WC(15,` Tablet & Mobile Second `),Bu(),ss(16,`div`,2),WC(17,` Tablet & Mobile Third `),Bu()()(),ss(18,`div`,5)(19,`div`,1)(20,`div`,2),WC(21,` Computer Row 1 `),Bu()(),ss(22,`div`,1)(23,`div`,2),WC(24,` Computer Row 2 `),Bu()(),ss(25,`div`,1)(26,`div`,2),WC(27,` Computer Row 3 `),Bu()()()),l&2&&(KD(11),Uh(`suiReversed`,ew(1,ro)))},dependencies:[mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var Sn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-device-visibility-example`]],standalone:!1,decls:39,vars:0,consts:[[`sui-grid`,``],[`suiGridRow`,``,`suiWidth`,`two`],[`suiGridColumn`,``,`suiDeviceVisibility`,`large screen only`],[`sui-segment`,``],[`suiGridColumn`,``,`suiDeviceVisibility`,`widescreen only`],[`suiGridRow`,``,`suiWidth`,`two`,`suiDeviceVisibility`,`mobile only`],[`suiGridColumn`,``],[`suiGridRow`,``,`suiWidth`,`two`,`suiDeviceVisibility`,`tablet only`],[`suiGridRow`,``,`suiWidth`,`three`,`suiDeviceVisibility`,`computer only`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3),WC(4,`Large Screen`),Bu()(),ss(5,`div`,4)(6,`div`,3),WC(7,`Widescreen`),Bu()()(),ss(8,`div`,5)(9,`div`,6)(10,`div`,3),WC(11,`Mobile`),Bu()(),ss(12,`div`,6)(13,`div`,3),WC(14,`Mobile`),Bu()()(),ss(15,`div`,7)(16,`div`,6)(17,`div`,3),WC(18,`Tablet`),Bu()(),ss(19,`div`,6)(20,`div`,3),WC(21,`Tablet`),Bu()()(),ss(22,`div`,8)(23,`div`,6)(24,`div`,3),WC(25,`Computer`),Bu()(),ss(26,`div`,6)(27,`div`,3),WC(28,`Computer`),Bu()(),ss(29,`div`,6)(30,`div`,3),WC(31,`Computer`),Bu()()(),ss(32,`div`,1)(33,`div`,6)(34,`div`,3),WC(35,`All Sizes`),Bu()(),ss(36,`div`,6)(37,`div`,3),WC(38,`All Sizes`),Bu()()()())},dependencies:[ze$1,mi$1,vi$1,zs$1],encapsulation:2,changeDetection:1})}}return n})();var hn=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid-responsive-width-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-grid`,``],[`suiGridColumn`,``,`suiMobileWidth`,`sixteen`,`suiTabletWidth`,`eight`,`suiComputerWidth`,`four`],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`doc-wireframe`,2),Bu(),ss(3,`div`,1),Gh(4,`doc-wireframe`,2),Bu(),ss(5,`div`,1),Gh(6,`doc-wireframe`,2),Bu(),ss(7,`div`,1),Gh(8,`doc-wireframe`,2),Bu()())},dependencies:[Dr,mi$1,vi$1],encapsulation:2,changeDetection:1})}}return n})();function oo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-grid-example`),Bu())}function so(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-divided-example`),Bu())}function co(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-vertically-divided-example`),Bu())}function po(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-celled-example`),Bu())}function uo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-internally-celled-example`),Bu())}function vo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-rows-example`),Bu())}function xo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-columns-example`),Bu())}function So(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-floated-example`),Bu())}function ho(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-column-width-example`),Bu())}function fo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-column-count-example`),Bu())}function Eo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-equal-width-example`),Bu())}function go(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-stretched-example`),Bu())}function bo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-padded-example`),Bu())}function yo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-relaxed-example`),Bu())}function Co(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-colored-example`),Bu())}function Fo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-centered-example`),Bu())}function Do(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-text-alignment-example`),Bu())}function Mo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-vertical-alignment-example`),Bu())}function _o(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-doubling-example`),Bu())}function wo(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-stackable-example`),Bu())}function To(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-reversed-example`),Bu())}function Io(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-device-visibility-example`),Bu())}function Ao(n,s){n&1&&(ss(0,`div`,9),Gh(1,`doc-grid-responsive-width-example`),Bu())}function ko(n,s){if(n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Grid`),Bu(),ss(6,`p`),WC(7,`A basic grid`),Bu(),ss(8,`div`,5),WC(9,` Grids divide horizontal space into `),ss(10,`b`),WC(11,`16 columns`),Bu(),WC(12,`. Four `),ss(13,`code`),WC(14,`four wide`),Bu(),WC(15,` columns fit in a single row, `),ss(16,`code`),WC(17,`16 / 4 = 4`),Bu(),WC(18,`. `),Bu(),Ph(19,oo,2,0,`ng-template`,6),Bu(),ss(20,`doc-code-sample`,3)(21,`h3`,4),WC(22,` Divided `),ss(23,`div`,7),WC(24,`Requires Rows`),Bu()(),ss(25,`p`),WC(26,`A grid can have dividers between its columns`),Bu(),Ph(27,so,2,0,`ng-template`,6),Bu(),ss(28,`doc-code-sample`,3)(29,`h3`,4),WC(30,` Vertically Divided `),ss(31,`div`,7),WC(32,`Requires Rows`),Bu()(),ss(33,`p`),WC(34,`A grid can have dividers between rows`),Bu(),Ph(35,co,2,0,`ng-template`,6),Bu(),ss(36,`doc-code-sample`,3)(37,`h3`,4),WC(38,` Celled `),ss(39,`div`,7),WC(40,`Requires Rows`),Bu()(),ss(41,`p`),WC(42,`A grid can have rows divided into cells`),Bu(),Ph(43,po,2,0,`ng-template`,6),Bu(),ss(44,`doc-code-sample`,3)(45,`h3`,4),WC(46,` Internally Celled `),ss(47,`div`,7),WC(48,`Requires Rows`),Bu()(),ss(49,`p`),WC(50,`A grid can have rows divisions only between internal rows`),Bu(),Ph(51,uo,2,0,`ng-template`,6),Bu(),Gh(52,`br`),ss(53,`h2`,2),WC(54,`Content`),Bu(),ss(55,`doc-code-sample`,3)(56,`h3`,4),WC(57,`Rows`),Bu(),ss(58,`p`),WC(59,`A row is a horizontal grouping of columns`),Bu(),ss(60,`div`,5),WC(61,` Row wrappers automatically clear previous columns and allow you to apply variations to a group of columns. `),Bu(),Ph(62,vo,2,0,`ng-template`,6),Bu(),ss(63,`doc-code-sample`,3)(64,`h3`,4),WC(65,`Columns`),Bu(),ss(66,`p`),WC(67,`Columns each contain gutters giving them equal spacing from other columns`),Bu(),ss(68,`div`,8),WC(69,` Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns. `),Bu(),Ph(70,xo,2,0,`ng-template`,6),Bu(),Gh(71,`br`),ss(72,`h2`,2),WC(73,`Variations`),Bu(),ss(74,`doc-code-sample`,3)(75,`h3`,4),WC(76,`Floated`),Bu(),ss(77,`p`),WC(78,`A column can sit flush against the left or right edge of a row`),Bu(),Ph(79,So,2,0,`ng-template`,6),Bu(),ss(80,`doc-code-sample`,3)(81,`h3`,4),WC(82,`Column Width`),Bu(),ss(83,`p`),WC(84,`A column can vary in width taking up more than a single grid column`),Bu(),ss(85,`div`,5),WC(86,` If a column cannot fit in a row it will automatically flow to the next row. `),Bu(),Ph(87,ho,2,0,`ng-template`,6),Bu(),ss(88,`doc-code-sample`,3)(89,`h3`,4),WC(90,`Column Count`),Bu(),ss(91,`p`),WC(92,`A grid can have a different number of columns per row`),Bu(),Ph(93,fo,2,0,`ng-template`,6),Bu(),ss(94,`doc-code-sample`,3)(95,`h3`,4),WC(96,`Equal Width`),Bu(),ss(97,`p`),WC(98,`A grid can automatically resize all elements to split the available width evenly`),Bu(),Ph(99,Eo,2,0,`ng-template`,6),Bu(),ss(100,`doc-code-sample`,3)(101,`h3`,4),WC(102,`Stretched`),Bu(),ss(103,`p`),WC(104,`A row can stretch its contents to take up the entire column height`),Bu(),Ph(105,go,2,0,`ng-template`,6),Bu(),ss(106,`doc-code-sample`,3)(107,`h3`,4),WC(108,`Padded`),Bu(),ss(109,`p`),WC(110,`A grid can preserve its vertical and horizontal gutters on first and last columns`),Bu(),Ph(111,bo,2,0,`ng-template`,6),Bu(),ss(112,`doc-code-sample`,3)(113,`h3`,4),WC(114,`Relaxed`),Bu(),ss(115,`p`),WC(116,`A grid can increase its gutters to allow for more negative space`),Bu(),Ph(117,yo,2,0,`ng-template`,6),Bu(),ss(118,`doc-code-sample`,3)(119,`h3`,4),WC(120,`Colored`),Bu(),ss(121,`p`),WC(122,`A row or column can be colored`),Bu(),ss(123,`div`,8),WC(124,` Colored rows or columns should be used with a `),ss(125,`code`),WC(126,`padded`),Bu(),WC(127,` grid, which does not include negative margins. `),Bu(),Ph(128,Co,2,0,`ng-template`,6),Bu(),ss(129,`doc-code-sample`,3)(130,`h3`,4),WC(131,`Centered`),Bu(),ss(132,`p`),WC(133,`A grid can have its columns centered`),Bu(),Ph(134,Fo,2,0,`ng-template`,6),Bu(),ss(135,`doc-code-sample`,3)(136,`h3`,4),WC(137,`Text Alignment`),Bu(),ss(138,`p`),WC(139,`A grid, row, or column can specify its text alignment`),Bu(),Ph(140,Do,2,0,`ng-template`,6),Bu(),ss(141,`doc-code-sample`,3)(142,`h3`,4),WC(143,`Vertical Alignment`),Bu(),ss(144,`p`),WC(145,`A grid, row, or column can specify its vertical alignment to have all its columns vertically centered`),Bu(),ss(146,`div`,5),WC(147,` Use `),ss(148,`code`),WC(149,`suiVerticalAlignment`),Bu(),WC(150,` when you need to combine a vertical alignment with a text alignment set through `),ss(151,`code`),WC(152,`suiAlignment`),Bu(),WC(153,`. `),Bu(),Ph(154,Mo,2,0,`ng-template`,6),Bu(),Gh(155,`br`),ss(156,`h2`,2),WC(157,`Responsive Variations`),Bu(),ss(158,`doc-code-sample`,3)(159,`h3`,4),WC(160,`Doubling`),Bu(),ss(161,`p`),WC(162,`A grid can double its column width on tablet and mobile sizes`),Bu(),ss(163,`div`,5),WC(164,` A grid will round its columns to the closest reasonable value when doubling, for example a `),ss(165,`code`),WC(166,`five column grid`),Bu(),WC(167,` will use `),ss(168,`code`),WC(169,`2 mobile, 3 tablet, 5 desktop`),Bu(),WC(170,`. To force 1 column on mobile you can add `),ss(171,`code`),WC(172,`suiStackable`),Bu(),WC(173,`. `),Bu(),Ph(174,_o,2,0,`ng-template`,6),Bu(),ss(175,`doc-code-sample`,3)(176,`h3`,4),WC(177,`Stackable`),Bu(),ss(178,`p`),WC(179,`A grid can have its columns stack on-top of each other after reaching mobile breakpoints`),Bu(),ss(180,`div`,5),WC(181,` To see a grid stack, try resizing your browser to a small width. `),Bu(),Ph(182,wo,2,0,`ng-template`,6),Bu(),ss(183,`doc-code-sample`,3)(184,`h3`,4),WC(185,`Reversed`),Bu(),ss(186,`p`),WC(187,`A grid or row can specify that its columns should reverse order at different device sizes`),Bu(),ss(188,`div`,5),WC(189,` Reversed grids are compatible with `),ss(190,`code`),WC(191,`divided`),Bu(),WC(192,` grids and other complex grid types. Bind an array to `),ss(193,`code`),WC(194,`suiReversed`),Bu(),WC(195,` to reverse on more than one device. `),Bu(),Ph(196,To,2,0,`ng-template`,6),Bu(),ss(197,`doc-code-sample`,3)(198,`h3`,4),WC(199,`Device Visibility`),Bu(),ss(200,`p`),WC(201,`A column or row can appear only for a specific device, or screen sizes`),Bu(),ss(202,`div`,5),WC(203,` See the container documentation for information on breakpoint calculations. `),Bu(),Ph(204,Io,2,0,`ng-template`,6),Bu(),ss(205,`doc-code-sample`,3)(206,`h3`,4),WC(207,`Responsive Width`),Bu(),ss(208,`p`),WC(209,`A column can specify a width for a specific device`),Bu(),ss(210,`div`,8),WC(211,` It's recommended to use a responsive pattern like `),ss(212,`code`),WC(213,`doubling`),Bu(),WC(214,` or `),ss(215,`code`),WC(216,`stackable`),Bu(),WC(217,` to reduce complexity when designing responsively, however in some circumstances specifying exact widths for screen sizes may be necessary. `),Bu(),Ph(218,Ao,2,0,`ng-template`,6),Bu()()),n&2){let a=hC();KD(3),Uh(`templateCode`,a.snippetGrid),KD(17),Uh(`templateCode`,a.snippetDivided),KD(8),Uh(`templateCode`,a.snippetVerticallyDivided),KD(8),Uh(`templateCode`,a.snippetCelled),KD(8),Uh(`templateCode`,a.snippetInternallyCelled),KD(11),Uh(`templateCode`,a.snippetRows),KD(8),Uh(`templateCode`,a.snippetColumns),KD(11),Uh(`templateCode`,a.snippetFloated),KD(6),Uh(`templateCode`,a.snippetColumnWidth),KD(8),Uh(`templateCode`,a.snippetColumnCount),KD(6),Uh(`templateCode`,a.snippetEqualWidth),KD(6),Uh(`templateCode`,a.snippetStretched),KD(6),Uh(`templateCode`,a.snippetPadded),KD(6),Uh(`templateCode`,a.snippetRelaxed),KD(6),Uh(`templateCode`,a.snippetColored),KD(11),Uh(`templateCode`,a.snippetCentered),KD(6),Uh(`templateCode`,a.snippetTextAlignment),KD(6),Uh(`templateCode`,a.snippetVerticalAlignment),KD(17),Uh(`templateCode`,a.snippetDoubling),KD(17),Uh(`templateCode`,a.snippetStackable),KD(8),Uh(`templateCode`,a.snippetReversed),KD(14),Uh(`templateCode`,a.snippetDeviceVisibility),KD(8),Uh(`templateCode`,a.snippetResponsiveWidth)}}function Bo(n,s){n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`sui-grid`),Bu(),ss(3,`h4`,4),WC(4,`Properties`),Bu(),ss(5,`table`,10)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss(10,`th`),WC(11,`Description`),Bu(),ss(12,`th`),WC(13,`Type`),Bu(),ss(14,`th`),WC(15,`Default`),Bu()()(),ss(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiWidth`),Bu(),ss(20,`td`),WC(21,` Set the number of columns in the grid. Allowed values are `),ss(22,`span`,11),WC(23,`'one'`),Bu(),WC(24,` through `),ss(25,`span`,11),WC(26,`'sixteen'`),Bu(),WC(27,` | `),ss(28,`span`,11),WC(29,`null`),Bu()(),ss(30,`td`)(31,`div`,12),WC(32,` string `),Bu()(),ss(33,`td`)(34,`div`,13),WC(35,` null `),Bu()()(),ss(36,`tr`)(37,`td`),WC(38,`suiAlignment`),Bu(),ss(39,`td`),WC(40,` Set the text alignment of the grid. Allowed values are `),ss(41,`span`,11),WC(42,`'left aligned'`),Bu(),WC(43,` | `),ss(44,`span`,11),WC(45,`'center aligned'`),Bu(),WC(46,` | `),ss(47,`span`,11),WC(48,`'right aligned'`),Bu(),WC(49,` | `),ss(50,`span`,11),WC(51,`'justified'`),Bu(),WC(52,` | `),ss(53,`span`,11),WC(54,`null`),Bu()(),ss(55,`td`)(56,`div`,12),WC(57,` string `),Bu()(),ss(58,`td`)(59,`div`,13),WC(60,` null `),Bu()()(),ss(61,`tr`)(62,`td`),WC(63,`suiVerticalAlignment`),Bu(),ss(64,`td`),WC(65,` Set the vertical alignment of the grid. Allowed values are `),ss(66,`span`,11),WC(67,`'top aligned'`),Bu(),WC(68,` | `),ss(69,`span`,11),WC(70,`'middle aligned'`),Bu(),WC(71,` | `),ss(72,`span`,11),WC(73,`'bottom aligned'`),Bu(),WC(74,` | `),ss(75,`span`,11),WC(76,`null`),Bu()(),ss(77,`td`)(78,`div`,12),WC(79,` string `),Bu()(),ss(80,`td`)(81,`div`,13),WC(82,` null `),Bu()()(),ss(83,`tr`)(84,`td`),WC(85,`suiDivided`),Bu(),ss(86,`td`),WC(87,` Set dividers between columns or rows. Allowed values are `),ss(88,`span`,11),WC(89,`'divided'`),Bu(),WC(90,` | `),ss(91,`span`,11),WC(92,`'vertically divided'`),Bu(),WC(93,` | `),ss(94,`span`,11),WC(95,`null`),Bu()(),ss(96,`td`)(97,`div`,12),WC(98,` string `),Bu()(),ss(99,`td`)(100,`div`,13),WC(101,` null `),Bu()()(),ss(102,`tr`)(103,`td`),WC(104,`suiCelled`),Bu(),ss(105,`td`),WC(106,` Divide rows into cells. Allowed values are `),ss(107,`span`,11),WC(108,`'celled'`),Bu(),WC(109,` | `),ss(110,`span`,11),WC(111,`'internally celled'`),Bu(),WC(112,` | `),ss(113,`span`,11),WC(114,`null`),Bu()(),ss(115,`td`)(116,`div`,12),WC(117,` string `),Bu()(),ss(118,`td`)(119,`div`,13),WC(120,` null `),Bu()()(),ss(121,`tr`)(122,`td`),WC(123,`suiPadded`),Bu(),ss(124,`td`),WC(125,` Preserve gutters on first and last columns. Allowed values are `),ss(126,`span`,11),WC(127,`'padded'`),Bu(),WC(128,` | `),ss(129,`span`,11),WC(130,`'vertically padded'`),Bu(),WC(131,` | `),ss(132,`span`,11),WC(133,`'horizontally padded'`),Bu(),WC(134,` | `),ss(135,`span`,11),WC(136,`null`),Bu()(),ss(137,`td`)(138,`div`,12),WC(139,` string `),Bu()(),ss(140,`td`)(141,`div`,13),WC(142,` null `),Bu()()(),ss(143,`tr`)(144,`td`),WC(145,`suiRelaxation`),Bu(),ss(146,`td`),WC(147,` Increase the size of the gutters. Allowed values are `),ss(148,`span`,11),WC(149,`'relaxed'`),Bu(),WC(150,` | `),ss(151,`span`,11),WC(152,`'very relaxed'`),Bu(),WC(153,` | `),ss(154,`span`,11),WC(155,`null`),Bu()(),ss(156,`td`)(157,`div`,12),WC(158,` string `),Bu()(),ss(159,`td`)(160,`div`,13),WC(161,` null `),Bu()()(),ss(162,`tr`)(163,`td`),WC(164,`suiReversed`),Bu(),ss(165,`td`),WC(166,` Reverse the order of columns or rows by device. Accepts one value or an array of `),ss(167,`span`,11),WC(168,`'computer reversed'`),Bu(),WC(169,` | `),ss(170,`span`,11),WC(171,`'tablet reversed'`),Bu(),WC(172,` | `),ss(173,`span`,11),WC(174,`'mobile reversed'`),Bu(),WC(175,` | `),ss(176,`span`,11),WC(177,`'computer vertically reversed'`),Bu(),WC(178,` | `),ss(179,`span`,11),WC(180,`'tablet vertically reversed'`),Bu(),WC(181,` | `),ss(182,`span`,11),WC(183,`'mobile vertically reversed'`),Bu(),WC(184,` | `),ss(185,`span`,11),WC(186,`null`),Bu()(),ss(187,`td`)(188,`div`,12),WC(189,` string | string[] `),Bu()(),ss(190,`td`)(191,`div`,13),WC(192,` null `),Bu()()(),ss(193,`tr`)(194,`td`),WC(195,`suiEqual`),Bu(),ss(196,`td`),WC(197,` Set whether columns should automatically split the available width evenly `),Bu(),ss(198,`td`)(199,`div`,12),WC(200,` boolean `),Bu()(),ss(201,`td`)(202,`div`,13),WC(203,` false `),Bu()()(),ss(204,`tr`)(205,`td`),WC(206,`suiCentered`),Bu(),ss(207,`td`),WC(208,` Set whether the columns should be centered `),Bu(),ss(209,`td`)(210,`div`,12),WC(211,` boolean `),Bu()(),ss(212,`td`)(213,`div`,13),WC(214,` false `),Bu()()(),ss(215,`tr`)(216,`td`),WC(217,`suiStretched`),Bu(),ss(218,`td`),WC(219,` Set whether columns should stretch to take up the entire row height `),Bu(),ss(220,`td`)(221,`div`,12),WC(222,` boolean `),Bu()(),ss(223,`td`)(224,`div`,13),WC(225,` false `),Bu()()(),ss(226,`tr`)(227,`td`),WC(228,`suiStackable`),Bu(),ss(229,`td`),WC(230,` Set whether columns should stack on mobile devices `),Bu(),ss(231,`td`)(232,`div`,12),WC(233,` boolean `),Bu()(),ss(234,`td`)(235,`div`,13),WC(236,` false `),Bu()()(),ss(237,`tr`)(238,`td`),WC(239,`suiDoubling`),Bu(),ss(240,`td`),WC(241,` Set whether column widths should double for each device jump `),Bu(),ss(242,`td`)(243,`div`,12),WC(244,` boolean `),Bu()(),ss(245,`td`)(246,`div`,13),WC(247,` false `),Bu()()(),ss(248,`tr`)(249,`td`),WC(250,`suiContainer`),Bu(),ss(251,`td`),WC(252,` Set whether the grid should also be a responsive container `),Bu(),ss(253,`td`)(254,`div`,12),WC(255,` boolean `),Bu()(),ss(256,`td`)(257,`div`,13),WC(258,` false `),Bu()()()()(),ss(259,`h2`,2),WC(260,`suiGridRow`),Bu(),ss(261,`h4`,4),WC(262,`Properties`),Bu(),ss(263,`table`,10)(264,`thead`)(265,`tr`)(266,`th`),WC(267,`Property`),Bu(),ss(268,`th`),WC(269,`Description`),Bu(),ss(270,`th`),WC(271,`Type`),Bu(),ss(272,`th`),WC(273,`Default`),Bu()()(),ss(274,`tbody`)(275,`tr`)(276,`td`),WC(277,`suiWidth`),Bu(),ss(278,`td`),WC(279,` Set the number of columns in the row. Allowed values are `),ss(280,`span`,11),WC(281,`'one'`),Bu(),WC(282,` through `),ss(283,`span`,11),WC(284,`'sixteen'`),Bu(),WC(285,` | `),ss(286,`span`,11),WC(287,`null`),Bu()(),ss(288,`td`)(289,`div`,12),WC(290,` string `),Bu()(),ss(291,`td`)(292,`div`,13),WC(293,` null `),Bu()()(),ss(294,`tr`)(295,`td`),WC(296,`suiAlignment`),Bu(),ss(297,`td`),WC(298,` Set the text (or vertical) alignment of the row. Allowed values are `),ss(299,`span`,11),WC(300,`'left aligned'`),Bu(),WC(301,` | `),ss(302,`span`,11),WC(303,`'center aligned'`),Bu(),WC(304,` | `),ss(305,`span`,11),WC(306,`'right aligned'`),Bu(),WC(307,` | `),ss(308,`span`,11),WC(309,`'justified'`),Bu(),WC(310,` | `),ss(311,`span`,11),WC(312,`'top aligned'`),Bu(),WC(313,` | `),ss(314,`span`,11),WC(315,`'middle aligned'`),Bu(),WC(316,` | `),ss(317,`span`,11),WC(318,`'bottom aligned'`),Bu(),WC(319,` | `),ss(320,`span`,11),WC(321,`null`),Bu()(),ss(322,`td`)(323,`div`,12),WC(324,` string `),Bu()(),ss(325,`td`)(326,`div`,13),WC(327,` null `),Bu()()(),ss(328,`tr`)(329,`td`),WC(330,`suiVerticalAlignment`),Bu(),ss(331,`td`),WC(332,` Set the vertical alignment of the row. Allowed values are `),ss(333,`span`,11),WC(334,`'top aligned'`),Bu(),WC(335,` | `),ss(336,`span`,11),WC(337,`'middle aligned'`),Bu(),WC(338,` | `),ss(339,`span`,11),WC(340,`'bottom aligned'`),Bu(),WC(341,` | `),ss(342,`span`,11),WC(343,`null`),Bu()(),ss(344,`td`)(345,`div`,12),WC(346,` string `),Bu()(),ss(347,`td`)(348,`div`,13),WC(349,` null `),Bu()()(),ss(350,`tr`)(351,`td`),WC(352,`suiColour`),Bu(),ss(353,`td`),WC(354,` Set the background colour of the row. Allowed values are `),ss(355,`span`,11),WC(356,`'red'`),Bu(),WC(357,` | `),ss(358,`span`,11),WC(359,`'orange'`),Bu(),WC(360,` | `),ss(361,`span`,11),WC(362,`'yellow'`),Bu(),WC(363,` | `),ss(364,`span`,11),WC(365,`'olive'`),Bu(),WC(366,` | `),ss(367,`span`,11),WC(368,`'green'`),Bu(),WC(369,` | `),ss(370,`span`,11),WC(371,`'teal'`),Bu(),WC(372,` | `),ss(373,`span`,11),WC(374,`'blue'`),Bu(),WC(375,` | `),ss(376,`span`,11),WC(377,`'violet'`),Bu(),WC(378,` | `),ss(379,`span`,11),WC(380,`'purple'`),Bu(),WC(381,` | `),ss(382,`span`,11),WC(383,`'pink'`),Bu(),WC(384,` | `),ss(385,`span`,11),WC(386,`'brown'`),Bu(),WC(387,` | `),ss(388,`span`,11),WC(389,`'grey'`),Bu(),WC(390,` | `),ss(391,`span`,11),WC(392,`'black'`),Bu(),WC(393,` | `),ss(394,`span`,11),WC(395,`null`),Bu()(),ss(396,`td`)(397,`div`,12),WC(398,` string `),Bu()(),ss(399,`td`)(400,`div`,13),WC(401,` null `),Bu()()(),ss(402,`tr`)(403,`td`),WC(404,`suiReversed`),Bu(),ss(405,`td`),WC(406,` Reverse the order of columns by device. Accepts one value or an array of `),ss(407,`span`,11),WC(408,`'computer reversed'`),Bu(),WC(409,` | `),ss(410,`span`,11),WC(411,`'tablet reversed'`),Bu(),WC(412,` | `),ss(413,`span`,11),WC(414,`'mobile reversed'`),Bu(),WC(415,` | `),ss(416,`span`,11),WC(417,`'computer vertically reversed'`),Bu(),WC(418,` | `),ss(419,`span`,11),WC(420,`'tablet vertically reversed'`),Bu(),WC(421,` | `),ss(422,`span`,11),WC(423,`'mobile vertically reversed'`),Bu(),WC(424,` | `),ss(425,`span`,11),WC(426,`null`),Bu()(),ss(427,`td`)(428,`div`,12),WC(429,` string | string[] `),Bu()(),ss(430,`td`)(431,`div`,13),WC(432,` null `),Bu()()(),ss(433,`tr`)(434,`td`),WC(435,`suiDeviceVisibility`),Bu(),ss(436,`td`),WC(437,` Only show the row on specific devices. Allowed values are `),ss(438,`span`,11),WC(439,`'mobile only'`),Bu(),WC(440,` | `),ss(441,`span`,11),WC(442,`'tablet only'`),Bu(),WC(443,` | `),ss(444,`span`,11),WC(445,`'computer only'`),Bu(),WC(446,` | `),ss(447,`span`,11),WC(448,`'large screen only'`),Bu(),WC(449,` | `),ss(450,`span`,11),WC(451,`'widescreen only'`),Bu(),WC(452,` | `),ss(453,`span`,11),WC(454,`'tablet mobile only'`),Bu(),WC(455,` | `),ss(456,`span`,11),WC(457,`null`),Bu()(),ss(458,`td`)(459,`div`,12),WC(460,` string `),Bu()(),ss(461,`td`)(462,`div`,13),WC(463,` null `),Bu()()(),ss(464,`tr`)(465,`td`),WC(466,`suiEqual`),Bu(),ss(467,`td`),WC(468,` Set whether columns should automatically split the available width evenly `),Bu(),ss(469,`td`)(470,`div`,12),WC(471,` boolean `),Bu()(),ss(472,`td`)(473,`div`,13),WC(474,` false `),Bu()()(),ss(475,`tr`)(476,`td`),WC(477,`suiCentered`),Bu(),ss(478,`td`),WC(479,` Set whether the columns should be centered `),Bu(),ss(480,`td`)(481,`div`,12),WC(482,` boolean `),Bu()(),ss(483,`td`)(484,`div`,13),WC(485,` false `),Bu()()(),ss(486,`tr`)(487,`td`),WC(488,`suiStretched`),Bu(),ss(489,`td`),WC(490,` Set whether columns should stretch to take up the entire row height `),Bu(),ss(491,`td`)(492,`div`,12),WC(493,` boolean `),Bu()(),ss(494,`td`)(495,`div`,13),WC(496,` false `),Bu()()(),ss(497,`tr`)(498,`td`),WC(499,`suiDoubling`),Bu(),ss(500,`td`),WC(501,` Set whether column widths should double for each device jump `),Bu(),ss(502,`td`)(503,`div`,12),WC(504,` boolean `),Bu()(),ss(505,`td`)(506,`div`,13),WC(507,` false `),Bu()()()()(),ss(508,`h2`,2),WC(509,`suiGridColumn`),Bu(),ss(510,`h4`,4),WC(511,`Properties`),Bu(),ss(512,`table`,10)(513,`thead`)(514,`tr`)(515,`th`),WC(516,`Property`),Bu(),ss(517,`th`),WC(518,`Description`),Bu(),ss(519,`th`),WC(520,`Type`),Bu(),ss(521,`th`),WC(522,`Default`),Bu()()(),ss(523,`tbody`)(524,`tr`)(525,`td`),WC(526,`suiWidth`),Bu(),ss(527,`td`),WC(528,` Set the width of the column. Allowed values are `),ss(529,`span`,11),WC(530,`'one'`),Bu(),WC(531,` through `),ss(532,`span`,11),WC(533,`'sixteen'`),Bu(),WC(534,` | `),ss(535,`span`,11),WC(536,`null`),Bu()(),ss(537,`td`)(538,`div`,12),WC(539,` string `),Bu()(),ss(540,`td`)(541,`div`,13),WC(542,` null `),Bu()()(),ss(543,`tr`)(544,`td`),WC(545,`suiMobileWidth`),Bu(),ss(546,`td`),WC(547,` Set the width of the column on mobile devices. Allowed values are `),ss(548,`span`,11),WC(549,`'one'`),Bu(),WC(550,` through `),ss(551,`span`,11),WC(552,`'sixteen'`),Bu(),WC(553,` | `),ss(554,`span`,11),WC(555,`null`),Bu()(),ss(556,`td`)(557,`div`,12),WC(558,` string `),Bu()(),ss(559,`td`)(560,`div`,13),WC(561,` null `),Bu()()(),ss(562,`tr`)(563,`td`),WC(564,`suiTabletWidth`),Bu(),ss(565,`td`),WC(566,` Set the width of the column on tablets. Allowed values are `),ss(567,`span`,11),WC(568,`'one'`),Bu(),WC(569,` through `),ss(570,`span`,11),WC(571,`'sixteen'`),Bu(),WC(572,` | `),ss(573,`span`,11),WC(574,`null`),Bu()(),ss(575,`td`)(576,`div`,12),WC(577,` string `),Bu()(),ss(578,`td`)(579,`div`,13),WC(580,` null `),Bu()()(),ss(581,`tr`)(582,`td`),WC(583,`suiComputerWidth`),Bu(),ss(584,`td`),WC(585,` Set the width of the column on computers. Allowed values are `),ss(586,`span`,11),WC(587,`'one'`),Bu(),WC(588,` through `),ss(589,`span`,11),WC(590,`'sixteen'`),Bu(),WC(591,` | `),ss(592,`span`,11),WC(593,`null`),Bu()(),ss(594,`td`)(595,`div`,12),WC(596,` string `),Bu()(),ss(597,`td`)(598,`div`,13),WC(599,` null `),Bu()()(),ss(600,`tr`)(601,`td`),WC(602,`suiLargeScreenWidth`),Bu(),ss(603,`td`),WC(604,` Set the width of the column on large screens. Allowed values are `),ss(605,`span`,11),WC(606,`'one'`),Bu(),WC(607,` through `),ss(608,`span`,11),WC(609,`'sixteen'`),Bu(),WC(610,` | `),ss(611,`span`,11),WC(612,`null`),Bu()(),ss(613,`td`)(614,`div`,12),WC(615,` string `),Bu()(),ss(616,`td`)(617,`div`,13),WC(618,` null `),Bu()()(),ss(619,`tr`)(620,`td`),WC(621,`suiWidescreenWidth`),Bu(),ss(622,`td`),WC(623,` Set the width of the column on widescreens. Allowed values are `),ss(624,`span`,11),WC(625,`'one'`),Bu(),WC(626,` through `),ss(627,`span`,11),WC(628,`'sixteen'`),Bu(),WC(629,` | `),ss(630,`span`,11),WC(631,`null`),Bu()(),ss(632,`td`)(633,`div`,12),WC(634,` string `),Bu()(),ss(635,`td`)(636,`div`,13),WC(637,` null `),Bu()()(),ss(638,`tr`)(639,`td`),WC(640,`suiFloated`),Bu(),ss(641,`td`),WC(642,` Float the column to the edge of the row. Allowed values are `),ss(643,`span`,11),WC(644,`'left floated'`),Bu(),WC(645,` | `),ss(646,`span`,11),WC(647,`'right floated'`),Bu(),WC(648,` | `),ss(649,`span`,11),WC(650,`null`),Bu()(),ss(651,`td`)(652,`div`,12),WC(653,` string `),Bu()(),ss(654,`td`)(655,`div`,13),WC(656,` null `),Bu()()(),ss(657,`tr`)(658,`td`),WC(659,`suiAlignment`),Bu(),ss(660,`td`),WC(661,` Set the text (or vertical) alignment of the column. Allowed values are `),ss(662,`span`,11),WC(663,`'left aligned'`),Bu(),WC(664,` | `),ss(665,`span`,11),WC(666,`'center aligned'`),Bu(),WC(667,` | `),ss(668,`span`,11),WC(669,`'right aligned'`),Bu(),WC(670,` | `),ss(671,`span`,11),WC(672,`'justified'`),Bu(),WC(673,` | `),ss(674,`span`,11),WC(675,`'top aligned'`),Bu(),WC(676,` | `),ss(677,`span`,11),WC(678,`'middle aligned'`),Bu(),WC(679,` | `),ss(680,`span`,11),WC(681,`'bottom aligned'`),Bu(),WC(682,` | `),ss(683,`span`,11),WC(684,`null`),Bu()(),ss(685,`td`)(686,`div`,12),WC(687,` string `),Bu()(),ss(688,`td`)(689,`div`,13),WC(690,` null `),Bu()()(),ss(691,`tr`)(692,`td`),WC(693,`suiVerticalAlignment`),Bu(),ss(694,`td`),WC(695,` Set the vertical alignment of the column. Allowed values are `),ss(696,`span`,11),WC(697,`'top aligned'`),Bu(),WC(698,` | `),ss(699,`span`,11),WC(700,`'middle aligned'`),Bu(),WC(701,` | `),ss(702,`span`,11),WC(703,`'bottom aligned'`),Bu(),WC(704,` | `),ss(705,`span`,11),WC(706,`null`),Bu()(),ss(707,`td`)(708,`div`,12),WC(709,` string `),Bu()(),ss(710,`td`)(711,`div`,13),WC(712,` null `),Bu()()(),ss(713,`tr`)(714,`td`),WC(715,`suiColour`),Bu(),ss(716,`td`),WC(717,` Set the background colour of the column. Allowed values are `),ss(718,`span`,11),WC(719,`'red'`),Bu(),WC(720,` | `),ss(721,`span`,11),WC(722,`'orange'`),Bu(),WC(723,` | `),ss(724,`span`,11),WC(725,`'yellow'`),Bu(),WC(726,` | `),ss(727,`span`,11),WC(728,`'olive'`),Bu(),WC(729,` | `),ss(730,`span`,11),WC(731,`'green'`),Bu(),WC(732,` | `),ss(733,`span`,11),WC(734,`'teal'`),Bu(),WC(735,` | `),ss(736,`span`,11),WC(737,`'blue'`),Bu(),WC(738,` | `),ss(739,`span`,11),WC(740,`'violet'`),Bu(),WC(741,` | `),ss(742,`span`,11),WC(743,`'purple'`),Bu(),WC(744,` | `),ss(745,`span`,11),WC(746,`'pink'`),Bu(),WC(747,` | `),ss(748,`span`,11),WC(749,`'brown'`),Bu(),WC(750,` | `),ss(751,`span`,11),WC(752,`'grey'`),Bu(),WC(753,` | `),ss(754,`span`,11),WC(755,`'black'`),Bu(),WC(756,` | `),ss(757,`span`,11),WC(758,`null`),Bu()(),ss(759,`td`)(760,`div`,12),WC(761,` string `),Bu()(),ss(762,`td`)(763,`div`,13),WC(764,` null `),Bu()()(),ss(765,`tr`)(766,`td`),WC(767,`suiDeviceVisibility`),Bu(),ss(768,`td`),WC(769,` Only show the column on specific devices. Allowed values are `),ss(770,`span`,11),WC(771,`'mobile only'`),Bu(),WC(772,` | `),ss(773,`span`,11),WC(774,`'tablet only'`),Bu(),WC(775,` | `),ss(776,`span`,11),WC(777,`'computer only'`),Bu(),WC(778,` | `),ss(779,`span`,11),WC(780,`'large screen only'`),Bu(),WC(781,` | `),ss(782,`span`,11),WC(783,`'widescreen only'`),Bu(),WC(784,` | `),ss(785,`span`,11),WC(786,`'tablet mobile only'`),Bu(),WC(787,` | `),ss(788,`span`,11),WC(789,`null`),Bu()(),ss(790,`td`)(791,`div`,12),WC(792,` string `),Bu()(),ss(793,`td`)(794,`div`,13),WC(795,` null `),Bu()()(),ss(796,`tr`)(797,`td`),WC(798,`suiStretched`),Bu(),ss(799,`td`),WC(800,` Set whether the column contents should stretch to the column height `),Bu(),ss(801,`td`)(802,`div`,12),WC(803,` boolean `),Bu()(),ss(804,`td`)(805,`div`,13),WC(806,` false `),Bu()()()()()())}var fn=(()=>{class n{constructor(a){this.snippetGrid=Di,this.snippetDivided=Mi,this.snippetVerticallyDivided=_i,this.snippetCelled=wi,this.snippetInternallyCelled=Ti,this.snippetRows=Ii,this.snippetColumns=Ai,this.snippetFloated=ki,this.snippetColumnWidth=Bi,this.snippetColumnCount=Gi,this.snippetEqualWidth=Ni,this.snippetStretched=Wi,this.snippetPadded=Ri,this.snippetRelaxed=Pi,this.snippetColored=zi,this.snippetCentered=Ji,this.snippetTextAlignment=Li,this.snippetVerticalAlignment=Hi,this.snippetDoubling=Vi,this.snippetStackable=qi,this.snippetReversed=Oi,this.snippetDeviceVisibility=Ui,this.snippetResponsiveWidth=ji,a.setTitle(`Grid | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-grid`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Grid`,`subHeader`,`A grid is used to harmonize negative space in a layout`,`semanticUrl`,`https://semantic-ui.com/collections/grid.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[`sui-label`,``,`suiColour`,`teal`,`suiSize`,`tiny`],[`sui-message`,``,`suiState`,`warning`],[1,`grid-demo`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(ss(0,`doc-page`,0),Ph(1,ko,219,23,`div`,1)(2,Bo,807,0,`div`,1),Bu()),l&2&&(KD(),Uh(`docPageContent`,`definition`),KD(),Uh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$2,Oi$2,Ws$1,li$1,U$1,fi$2,Yi,Xi,$i,Ki,Qi,Zi,en,tn,nn,an,ln,dn,rn,mn,on,sn,cn,pn,un,vn,xn,Sn,hn],styles:[`[_nghost-%COMP%]     .grid-demo .ui.grid:not(.divided):not(.celled):not(.padded)>.column:not(.row), [_nghost-%COMP%]     .grid-demo .ui.grid:not(.divided):not(.celled):not(.padded)>.row>.column{box-shadow:inset 0 0 0 1px #2224261a}[_nghost-%COMP%]     .grid-demo .ui.grid+.ui.grid, [_nghost-%COMP%]     .grid-demo .ui.grid+p{margin-top:1.5rem}`],changeDetection:1})}}return n})();var En=`<div sui-menu>
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
`;var C=class{constructor(){this.activeItem=`home`}select(s){this.activeItem=s}};var sa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-menu-example`]],standalone:!1,features:[lo],decls:9,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``,`suiHeader`,``],[`suiMenuItem`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,`Our Company`),Bu(),ss(3,`a`,2),WC(4,`About Us`),Bu(),ss(5,`a`,2),WC(6,`Jobs`),Bu(),ss(7,`a`,2),WC(8,`Locations`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var ca=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-menu-evenly-example`]],standalone:!1,features:[lo],decls:7,vars:3,consts:[[`sui-menu`,``,`suiWidth`,`three`],[`suiMenuItem`,``,3,`click`,`suiActive`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(2,` Home `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(4,` Messages `),Bu(),ss(5,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(6,` Friends `),Bu()()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var pa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-secondary-example`]],standalone:!1,features:[lo],decls:14,vars:3,consts:[[`sui-menu`,``,`suiSecondary`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`suiSubMenu`,``,`suiRight`,``],[`suiMenuItem`,``],[`sui-input`,``,`suiIcon`,`icon`],[`type`,`text`,`placeholder`,`Search...`],[`sui-icon`,``,`suiIconType`,`search link`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(2,` Home `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(4,` Messages `),Bu(),ss(5,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(6,` Friends `),Bu(),ss(7,`div`,2)(8,`div`,3)(9,`div`,4),Gh(10,`input`,5)(11,`i`,6),Bu()(),ss(12,`a`,3),WC(13,`Logout`),Bu()()()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`))},dependencies:[we,Ft$1,Tt$1,ln$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var ua=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-pointing-example`]],standalone:!1,features:[lo],decls:14,vars:3,consts:[[`sui-menu`,``,`suiPointing`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`suiSubMenu`,``,`suiRight`,``],[`suiMenuItem`,``],[`sui-input`,``,`suiIcon`,`icon`,`suiTransparent`,``],[`type`,`text`,`placeholder`,`Search...`],[`sui-icon`,``,`suiIconType`,`search link`],[`sui-segment`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(2,` Home `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(4,` Messages `),Bu(),ss(5,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(6,` Friends `),Bu(),ss(7,`div`,2)(8,`div`,3)(9,`div`,4),Gh(10,`input`,5)(11,`i`,6),Bu()()()(),ss(12,`div`,7),Gh(13,`doc-wireframe`,8),Bu()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`))},dependencies:[Dr,we,ze$1,Ft$1,Tt$1,ln$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var va=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-secondary-pointing-example`]],standalone:!1,features:[lo],decls:12,vars:3,consts:[[`sui-menu`,``,`suiSecondary`,``,`suiPointing`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`suiSubMenu`,``,`suiRight`,``],[`suiMenuItem`,``],[`sui-segment`,``],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(2,` Home `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(4,` Messages `),Bu(),ss(5,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(6,` Friends `),Bu(),ss(7,`div`,2)(8,`a`,3),WC(9,`Logout`),Bu()()(),ss(10,`div`,4),Gh(11,`doc-wireframe`,5),Bu()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`))},dependencies:[Dr,ze$1,Ft$1,Tt$1,ln$1],encapsulation:2,changeDetection:1})}}return n})();var xa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-tabular-example`]],standalone:!1,features:[lo],decls:5,vars:2,consts:[[`sui-menu`,``,`suiTabular`,``],[`suiMenuItem`,``,3,`click`,`suiActive`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`bio`)}),WC(2,` Bio `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`photos`)}),WC(4,` Photos `),Bu()()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`bio`),KD(2),Uh(`suiActive`,d.activeItem===`photos`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Sa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-tabular-attached-example`]],standalone:!1,features:[lo],decls:12,vars:2,consts:[[`sui-menu`,``,`suiTabular`,``,`suiAttached`,`top`],[`suiMenuItem`,``,3,`click`,`suiActive`],[`suiSubMenu`,``,`suiRight`,``],[`suiMenuItem`,``],[`sui-input`,``,`suiIcon`,`icon`,`suiTransparent`,``],[`type`,`text`,`placeholder`,`Search users...`],[`sui-icon`,``,`suiIconType`,`search link`],[`sui-segment`,``,`suiAttached`,`bottom attached`],[`type`,`paragraph`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`bio`)}),WC(2,` Bio `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`photos`)}),WC(4,` Photos `),Bu(),ss(5,`div`,2)(6,`div`,3)(7,`div`,4),Gh(8,`input`,5)(9,`i`,6),Bu()()()(),ss(10,`div`,7),Gh(11,`doc-wireframe`,8),Bu()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`bio`),KD(2),Uh(`suiActive`,d.activeItem===`photos`))},dependencies:[Dr,we,ze$1,Ft$1,Tt$1,ln$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var ha=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-text-example`]],standalone:!1,features:[lo],decls:9,vars:3,consts:[[`sui-menu`,``,`suiText`,``],[`suiMenuItem`,``,`suiHeader`,``],[`suiMenuItem`,``,3,`click`,`suiActive`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,`Sort By`),Bu(),ss(3,`a`,2),Qh(`click`,function(){return d.select(`closest`)}),WC(4,` Closest `),Bu(),ss(5,`a`,2),Qh(`click`,function(){return d.select(`most-comments`)}),WC(6,` Most Comments `),Bu(),ss(7,`a`,2),Qh(`click`,function(){return d.select(`most-popular`)}),WC(8,` Most Popular `),Bu()()),l&2&&(KD(3),Uh(`suiActive`,d.activeItem===`closest`),KD(2),Uh(`suiActive`,d.activeItem===`most-comments`),KD(2),Uh(`suiActive`,d.activeItem===`most-popular`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var fa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-vertical-example`]],standalone:!1,features:[lo],decls:17,vars:0,consts:[[`sui-menu`,``,`suiVertical`,``],[`suiMenuItem`,``,`suiActive`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`teal`,`suiPointing`,`left`],[`suiMenuItem`,``],[`sui-label`,``],[`sui-input`,``,`suiIcon`,`icon`,`suiTransparent`,``],[`type`,`text`,`placeholder`,`Search mail...`],[`sui-icon`,``,`suiIconType`,`search`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,` Inbox `),ss(3,`div`,2),WC(4,`1`),Bu()(),ss(5,`a`,3),WC(6,` Spam `),ss(7,`div`,4),WC(8,`51`),Bu()(),ss(9,`a`,3),WC(10,` Updates `),ss(11,`div`,4),WC(12,`1`),Bu()(),ss(13,`div`,3)(14,`div`,5),Gh(15,`input`,6)(16,`i`,7),Bu()()())},dependencies:[we,fi$2,Ft$1,Tt$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var Ea=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-vertical-secondary-example`]],standalone:!1,features:[lo],decls:14,vars:6,consts:[[`sui-menu`,``,`suiVertical`,``,`suiSecondary`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`sui-menu`,``,`suiVertical`,``,`suiPointing`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`account`)}),WC(2,` Account `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`settings`)}),WC(4,` Settings `),Bu(),ss(5,`a`,1),Qh(`click`,function(){return d.select(`display-options`)}),WC(6,` Display Options `),Bu()(),ss(7,`div`,2)(8,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(9,` Home `),Bu(),ss(10,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(11,` Messages `),Bu(),ss(12,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(13,` Friends `),Bu()()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`account`),KD(2),Uh(`suiActive`,d.activeItem===`settings`),KD(2),Uh(`suiActive`,d.activeItem===`display-options`),KD(3),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var ga=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-pagination-example`]],standalone:!1,features:[lo],decls:11,vars:0,consts:[[`sui-menu`,``,`suiPagination`,``],[`suiMenuItem`,``,`suiActive`,``],[`suiMenuItem`,``,`disabled`,``],[`suiMenuItem`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`1`),Bu(),ss(3,`div`,2),WC(4,`...`),Bu(),ss(5,`a`,3),WC(6,`10`),Bu(),ss(7,`a`,3),WC(8,`11`),Bu(),ss(9,`a`,3),WC(10,`12`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var ba=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-header-example`]],standalone:!1,features:[lo],decls:24,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``,`suiHeader`,``],[`suiMenuItem`,``],[`sui-menu`,``,`suiVertical`,``],[`suiMenuHeader`,``],[`suiSubMenu`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,`Our Company`),Bu(),ss(3,`a`,2),WC(4,`About Us`),Bu(),ss(5,`a`,2),WC(6,`Jobs`),Bu()(),ss(7,`div`,3)(8,`div`,2)(9,`div`,4),WC(10,`Products`),Bu(),ss(11,`div`,5)(12,`a`,2),WC(13,`Enterprise`),Bu(),ss(14,`a`,2),WC(15,`Consumer`),Bu()()(),ss(16,`div`,2)(17,`div`,4),WC(18,`Hosting`),Bu(),ss(19,`div`,5)(20,`a`,2),WC(21,`Shared`),Bu(),ss(22,`a`,2),WC(23,`Dedicated`),Bu()()()())},dependencies:[Ft$1,Tt$1,ln$1,cn$1],encapsulation:2,changeDetection:1})}}return n})();var ya=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-text-content-example`]],standalone:!1,features:[lo],decls:11,vars:0,consts:[[`sui-menu`,``,`suiVertical`,``],[`suiMenuItem`,``],[`sui-header`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`h4`,2),WC(3,`Promotions`),Bu(),ss(4,`p`),WC(5,`Check out our new promotions`),Bu()(),ss(6,`div`,1)(7,`h4`,2),WC(8,`Coupons`),Bu(),ss(9,`p`),WC(10,`Check out our collection of coupons`),Bu()()())},dependencies:[Ws$1,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ca=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-input-example`]],standalone:!1,features:[lo],decls:11,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``],[`sui-input`,``,`suiIcon`,`icon`],[`type`,`text`,`placeholder`,`Search...`],[`sui-icon`,``,`suiIconType`,`search`],[`suiSubMenu`,``,`suiRight`,``],[`sui-input`,``,`suiAction`,`action`],[`type`,`text`,`placeholder`,`Navigate to...`],[`sui-button`,``,`suiColour`,`blue`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),Gh(3,`input`,3)(4,`i`,4),Bu()(),ss(5,`div`,5)(6,`div`,1)(7,`div`,6),Gh(8,`input`,7),ss(9,`div`,8),WC(10,`Go`),Bu()()()()())},dependencies:[we,Ii$1,Ft$1,Tt$1,ln$1,Ee],encapsulation:2,changeDetection:1})}}return n})();var Fa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-button-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``],[`sui-button`,``,`suiEmphasis`,`primary`],[`sui-button`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1)(2,`div`,2),WC(3,`Sign up`),Bu()(),ss(4,`div`,1)(5,`div`,3),WC(6,`Log-in`),Bu()()())},dependencies:[Ii$1,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Da=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-link-item-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-menu`,``,`suiVertical`,``],[`suiMenuItem`,``,`href`,`https://www.google.com`,`target`,`_blank`],[`suiMenuItem`,``,`suiLink`,``],[`suiMenuItem`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Visit Google`),Bu(),ss(3,`div`,2),WC(4,`Link via class`),Bu(),ss(5,`div`,3),WC(6,`Not a link`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ma=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-dropdown-item-example`]],standalone:!1,features:[lo],decls:14,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``],[1,`text`],[`sui-icon`,``,`suiIconType`,`dropdown`],[`suiDropdownMenu`,``],[`suiDropdownMenuItem`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),ss(3,`sui-dropdown`,1)(4,`span`,2),WC(5,`More`),Bu(),Gh(6,`i`,3),ss(7,`div`,4)(8,`div`,5),WC(9,`Edit Profile`),Bu(),ss(10,`div`,5),WC(11,`Choose Language`),Bu(),ss(12,`div`,5),WC(13,`Account Settings`),Bu()()()())},dependencies:[we,Ft$1,Tt$1,qe,me,ze],encapsulation:2,changeDetection:1})}}return n})();var _a=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-sub-menu-example`]],standalone:!1,features:[lo],decls:10,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``],[`suiSubMenu`,``,`suiRight`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Browse`),Bu(),ss(3,`a`,1),WC(4,`Submit`),Bu(),ss(5,`div`,2)(6,`a`,1),WC(7,`Sign Up`),Bu(),ss(8,`a`,1),WC(9,`Help`),Bu()()())},dependencies:[Ft$1,Tt$1,ln$1],encapsulation:2,changeDetection:1})}}return n})();var wa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-hover-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-menu`,``,`suiCompact`,``],[`suiMenuItem`,``],[`suiMenuItem`,``,`suiLink`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`A link`),Bu(),ss(3,`div`,2),WC(4,`div Link`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ta=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-active-example`]],standalone:!1,features:[lo],decls:3,vars:0,consts:[[`sui-menu`,``,`suiCompact`,``],[`suiMenuItem`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Link`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ia=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-disabled-example`]],standalone:!1,features:[lo],decls:3,vars:0,consts:[[`sui-menu`,``,`suiCompact`,``],[`suiMenuItem`,``,`disabled`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,`Link`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Aa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-stackable-example`]],standalone:!1,features:[lo],decls:9,vars:0,consts:[[`sui-menu`,``,`suiStackable`,``],[`suiMenuItem`,``],[`src`,`assets/images/logo.png`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),Gh(2,`img`,2),Bu(),ss(3,`a`,1),WC(4,`Features`),Bu(),ss(5,`a`,1),WC(6,`Testimonials`),Bu(),ss(7,`a`,1),WC(8,`Sign-in`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var ka=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-inverted-example`]],standalone:!1,features:[lo],decls:14,vars:6,consts:[[`sui-menu`,``,`suiInverted`,``],[`suiMenuItem`,``,3,`click`,`suiActive`],[`sui-menu`,``,`suiInverted`,``,`suiVertical`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(2,` Home `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(4,` Messages `),Bu(),ss(5,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(6,` Friends `),Bu()(),ss(7,`div`,2)(8,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(9,` Home `),Bu(),ss(10,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(11,` Messages `),Bu(),ss(12,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(13,` Friends `),Bu()()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`),KD(3),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ba=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-colored-example`]],standalone:!1,features:[lo],decls:27,vars:13,consts:[[`sui-menu`,``,`suiWidth`,`thirteen`],[`suiMenuItem`,``,`suiColour`,`red`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`orange`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`yellow`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`olive`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`green`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`teal`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`blue`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`violet`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`purple`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`pink`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`brown`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`grey`,3,`click`,`suiActive`],[`suiMenuItem`,``,`suiColour`,`black`,3,`click`,`suiActive`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`red`)}),WC(2,`Red`),Bu(),ss(3,`a`,2),Qh(`click`,function(){return d.select(`orange`)}),WC(4,`Orange`),Bu(),ss(5,`a`,3),Qh(`click`,function(){return d.select(`yellow`)}),WC(6,`Yellow`),Bu(),ss(7,`a`,4),Qh(`click`,function(){return d.select(`olive`)}),WC(8,`Olive`),Bu(),ss(9,`a`,5),Qh(`click`,function(){return d.select(`green`)}),WC(10,`Green`),Bu(),ss(11,`a`,6),Qh(`click`,function(){return d.select(`teal`)}),WC(12,`Teal`),Bu(),ss(13,`a`,7),Qh(`click`,function(){return d.select(`blue`)}),WC(14,`Blue`),Bu(),ss(15,`a`,8),Qh(`click`,function(){return d.select(`violet`)}),WC(16,`Violet`),Bu(),ss(17,`a`,9),Qh(`click`,function(){return d.select(`purple`)}),WC(18,`Purple`),Bu(),ss(19,`a`,10),Qh(`click`,function(){return d.select(`pink`)}),WC(20,`Pink`),Bu(),ss(21,`a`,11),Qh(`click`,function(){return d.select(`brown`)}),WC(22,`Brown`),Bu(),ss(23,`a`,12),Qh(`click`,function(){return d.select(`grey`)}),WC(24,`Grey`),Bu(),ss(25,`a`,13),Qh(`click`,function(){return d.select(`black`)}),WC(26,`Black`),Bu()()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`red`),KD(2),Uh(`suiActive`,d.activeItem===`orange`),KD(2),Uh(`suiActive`,d.activeItem===`yellow`),KD(2),Uh(`suiActive`,d.activeItem===`olive`),KD(2),Uh(`suiActive`,d.activeItem===`green`),KD(2),Uh(`suiActive`,d.activeItem===`teal`),KD(2),Uh(`suiActive`,d.activeItem===`blue`),KD(2),Uh(`suiActive`,d.activeItem===`violet`),KD(2),Uh(`suiActive`,d.activeItem===`purple`),KD(2),Uh(`suiActive`,d.activeItem===`pink`),KD(2),Uh(`suiActive`,d.activeItem===`brown`),KD(2),Uh(`suiActive`,d.activeItem===`grey`),KD(2),Uh(`suiActive`,d.activeItem===`black`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ga=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-colored-menu-example`]],standalone:!1,features:[lo],decls:14,vars:6,consts:[[`sui-menu`,``,`suiColour`,`blue`,`suiWidth`,`three`],[`suiMenuItem`,``,3,`click`,`suiActive`],[`sui-menu`,``,`suiColour`,`teal`,`suiInverted`,``,`suiWidth`,`three`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(2,` Home `),Bu(),ss(3,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(4,` Messages `),Bu(),ss(5,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(6,` Friends `),Bu()(),ss(7,`div`,2)(8,`a`,1),Qh(`click`,function(){return d.select(`home`)}),WC(9,` Home `),Bu(),ss(10,`a`,1),Qh(`click`,function(){return d.select(`messages`)}),WC(11,` Messages `),Bu(),ss(12,`a`,1),Qh(`click`,function(){return d.select(`friends`)}),WC(13,` Friends `),Bu()()),l&2&&(KD(),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`),KD(3),Uh(`suiActive`,d.activeItem===`home`),KD(2),Uh(`suiActive`,d.activeItem===`messages`),KD(2),Uh(`suiActive`,d.activeItem===`friends`))},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Na=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-icons-example`]],standalone:!1,features:[lo],decls:14,vars:0,consts:[[`sui-menu`,``,`suiIcon`,`icon`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`gamepad`],[`sui-icon`,``,`suiIconType`,`video camera`],[`sui-icon`,``,`suiIconType`,`video play`],[`sui-menu`,``,`suiIcon`,`icon`,`suiVertical`,``,`suiCompact`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Gh(2,`i`,2),Bu(),ss(3,`a`,1),Gh(4,`i`,3),Bu(),ss(5,`a`,1),Gh(6,`i`,4),Bu()(),ss(7,`div`,5)(8,`a`,1),Gh(9,`i`,2),Bu(),ss(10,`a`,1),Gh(11,`i`,3),Bu(),ss(12,`a`,1),Gh(13,`i`,4),Bu()())},dependencies:[we,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Wa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-labeled-icon-example`]],standalone:!1,features:[lo],decls:10,vars:0,consts:[[`sui-menu`,``,`suiIcon`,`labeled icon`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`gamepad`],[`sui-icon`,``,`suiIconType`,`video camera`],[`sui-icon`,``,`suiIconType`,`video play`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Gh(2,`i`,2),WC(3,`Games`),Bu(),ss(4,`a`,1),Gh(5,`i`,3),WC(6,`Channels`),Bu(),ss(7,`a`,1),Gh(8,`i`,4),WC(9,`Videos`),Bu()())},dependencies:[we,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ra=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-fluid-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-menu`,``,`suiVertical`,``,`suiFluid`,``],[`suiMenuItem`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Run`),Bu(),ss(3,`a`,1),WC(4,`Walk`),Bu(),ss(5,`a`,1),WC(6,`Bike`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Pa=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-compact-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-menu`,``,`suiCompact`,``,`suiIcon`,`labeled icon`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`gamepad`],[`sui-icon`,``,`suiIconType`,`video camera`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),Gh(2,`i`,2),WC(3,`Games`),Bu(),ss(4,`a`,1),Gh(5,`i`,3),WC(6,`Channels`),Bu()())},dependencies:[we,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var za=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-evenly-divided-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-menu`,``,`suiWidth`,`three`],[`suiMenuItem`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Buy`),Bu(),ss(3,`a`,1),WC(4,`Sell`),Bu(),ss(5,`a`,1),WC(6,`Rent`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ja=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-attached-example`]],standalone:!1,features:[lo],decls:13,vars:0,consts:[[`sui-menu`,``,`suiAttached`,`top`],[`suiMenuItem`,``],[`sui-segment`,``,`suiAttached`,`attached`],[`type`,`paragraph`],[`sui-menu`,``,`suiAttached`,`attached`],[`type`,`short-paragraph`],[`sui-menu`,``,`suiAttached`,`bottom`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,`Top attached`),Bu()(),ss(3,`div`,2),Gh(4,`doc-wireframe`,3),Bu(),ss(5,`div`,4)(6,`div`,1),WC(7,`Attached`),Bu()(),ss(8,`div`,2),Gh(9,`doc-wireframe`,5),Bu(),ss(10,`div`,6)(11,`div`,1),WC(12,`Bottom attached`),Bu()())},dependencies:[Dr,ze$1,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var La=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-size-example`]],standalone:!1,features:[lo],decls:30,vars:0,consts:[[`sui-menu`,``,`suiSize`,`mini`,`suiCompact`,``],[`suiMenuItem`,``,`suiActive`,``],[`suiMenuItem`,``],[`sui-menu`,``,`suiSize`,`tiny`,`suiCompact`,``],[`sui-menu`,``,`suiSize`,`small`,`suiCompact`,``],[`sui-menu`,``,`suiSize`,`large`,`suiCompact`,``],[`sui-menu`,``,`suiSize`,`huge`,`suiCompact`,``],[`sui-menu`,``,`suiSize`,`massive`,`suiCompact`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Mini`),Bu(),ss(3,`a`,2),WC(4,`Messages`),Bu()(),ss(5,`div`,3)(6,`a`,1),WC(7,`Tiny`),Bu(),ss(8,`a`,2),WC(9,`Messages`),Bu()(),ss(10,`div`,4)(11,`a`,1),WC(12,`Small`),Bu(),ss(13,`a`,2),WC(14,`Messages`),Bu()(),ss(15,`div`,5)(16,`a`,1),WC(17,`Large`),Bu(),ss(18,`a`,2),WC(19,`Messages`),Bu()(),ss(20,`div`,6)(21,`a`,1),WC(22,`Huge`),Bu(),ss(23,`a`,2),WC(24,`Messages`),Bu()(),ss(25,`div`,7)(26,`a`,1),WC(27,`Massive`),Bu(),ss(28,`a`,2),WC(29,`Messages`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Ha=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-fitted-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-menu`,``],[`suiMenuItem`,``,`suiFitted`,`fitted`],[`suiMenuItem`,``,`suiFitted`,`horizontally fitted`],[`suiMenuItem`,``,`suiFitted`,`vertically fitted`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`No padding whatsoever`),Bu(),ss(3,`a`,2),WC(4,`No horizontal padding`),Bu(),ss(5,`a`,3),WC(6,`No vertical padding`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Va=(()=>{class n extends C{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu-borderless-example`]],standalone:!1,features:[lo],decls:11,vars:0,consts:[[`sui-menu`,``,`suiBorderless`,``,`suiWidth`,`five`],[`suiMenuItem`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`1`),Bu(),ss(3,`a`,1),WC(4,`2`),Bu(),ss(5,`a`,1),WC(6,`3`),Bu(),ss(7,`a`,1),WC(8,`4`),Bu(),ss(9,`a`,1),WC(10,`5`),Bu()())},dependencies:[Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();function _s(n,s){n&1&&Gh(0,`doc-menu-menu-example`)}function ws(n,s){n&1&&Gh(0,`doc-menu-menu-evenly-example`)}function Ts(n,s){n&1&&Gh(0,`doc-menu-secondary-example`)}function Is(n,s){n&1&&Gh(0,`doc-menu-pointing-example`)}function As(n,s){n&1&&Gh(0,`doc-menu-secondary-pointing-example`)}function ks(n,s){n&1&&Gh(0,`doc-menu-tabular-example`)}function Bs(n,s){n&1&&Gh(0,`doc-menu-tabular-attached-example`)}function Gs(n,s){n&1&&Gh(0,`doc-menu-text-example`)}function Ns(n,s){n&1&&Gh(0,`doc-menu-vertical-example`)}function Ws(n,s){n&1&&Gh(0,`doc-menu-vertical-secondary-example`)}function Rs(n,s){n&1&&Gh(0,`doc-menu-pagination-example`)}function Ps(n,s){n&1&&Gh(0,`doc-menu-header-example`)}function zs(n,s){n&1&&Gh(0,`doc-menu-text-content-example`)}function Js(n,s){n&1&&Gh(0,`doc-menu-input-example`)}function Ls(n,s){n&1&&Gh(0,`doc-menu-button-example`)}function Hs(n,s){n&1&&Gh(0,`doc-menu-link-item-example`)}function Vs(n,s){n&1&&Gh(0,`doc-menu-dropdown-item-example`)}function qs(n,s){n&1&&Gh(0,`doc-menu-sub-menu-example`)}function Os(n,s){n&1&&Gh(0,`doc-menu-hover-example`)}function Us(n,s){n&1&&Gh(0,`doc-menu-active-example`)}function js(n,s){n&1&&Gh(0,`doc-menu-disabled-example`)}function Ys(n,s){n&1&&Gh(0,`doc-menu-stackable-example`)}function Xs(n,s){n&1&&Gh(0,`doc-menu-inverted-example`)}function $s(n,s){n&1&&Gh(0,`doc-menu-colored-example`)}function Ks(n,s){n&1&&Gh(0,`doc-menu-colored-menu-example`)}function Qs(n,s){n&1&&Gh(0,`doc-menu-icons-example`)}function Zs(n,s){n&1&&Gh(0,`doc-menu-labeled-icon-example`)}function e0(n,s){n&1&&Gh(0,`doc-menu-fluid-example`)}function t0(n,s){n&1&&Gh(0,`doc-menu-compact-example`)}function i0(n,s){n&1&&Gh(0,`doc-menu-evenly-divided-example`)}function n0(n,s){n&1&&Gh(0,`doc-menu-attached-example`)}function a0(n,s){n&1&&Gh(0,`doc-menu-size-example`)}function l0(n,s){n&1&&Gh(0,`doc-menu-fitted-example`)}function d0(n,s){n&1&&Gh(0,`doc-menu-borderless-example`)}function r0(n,s){if(n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Menu`),Bu(),ss(6,`p`),WC(7,`A menu`),Bu(),Ph(8,_s,1,0,`ng-template`,5),Bu(),ss(9,`doc-code-sample`,6)(10,`p`),WC(11,`A menu can have its items divided evenly`),Bu(),Ph(12,ws,1,0,`ng-template`,5),Bu(),ss(13,`doc-code-sample`,6)(14,`h3`,4),WC(15,`Secondary Menu`),Bu(),ss(16,`p`),WC(17,`A menu can adjust its appearance to de-emphasize its contents`),Bu(),Ph(18,Ts,1,0,`ng-template`,5),Bu(),ss(19,`doc-code-sample`,6)(20,`h3`,4),WC(21,`Pointing`),Bu(),ss(22,`p`),WC(23,`A menu can point to show its relationship to nearby content`),Bu(),Ph(24,Is,1,0,`ng-template`,5),Bu(),ss(25,`doc-code-sample`,6)(26,`p`),WC(27,`A secondary menu can also point`),Bu(),Ph(28,As,1,0,`ng-template`,5),Bu(),ss(29,`doc-code-sample`,6)(30,`h3`,4),WC(31,`Tabular`),Bu(),ss(32,`p`),WC(33,`A menu can be formatted to show tabs of information`),Bu(),Ph(34,ks,1,0,`ng-template`,5),Bu(),ss(35,`doc-code-sample`,6)(36,`p`),WC(37,`A tabular menu can be attached to a segment`),Bu(),Ph(38,Bs,1,0,`ng-template`,5),Bu(),ss(39,`doc-code-sample`,6)(40,`h3`,4),WC(41,`Text`),Bu(),ss(42,`p`),WC(43,`A menu can be formatted for text content`),Bu(),Ph(44,Gs,1,0,`ng-template`,5),Bu(),ss(45,`doc-code-sample`,3)(46,`h3`,4),WC(47,`Vertical Menu`),Bu(),ss(48,`p`),WC(49,`A vertical menu displays elements vertically`),Bu(),Ph(50,Ns,1,0,`ng-template`,5),Bu(),ss(51,`doc-code-sample`,6)(52,`p`),WC(53,`Vertical menus can be secondary, pointing or text menus`),Bu(),Ph(54,Ws,1,0,`ng-template`,5),Bu(),ss(55,`doc-code-sample`,3)(56,`h3`,4),WC(57,`Pagination`),Bu(),ss(58,`p`),WC(59,`A pagination menu is specially formatted to present links to pages of content`),Bu(),Ph(60,Rs,1,0,`ng-template`,5),Bu(),Gh(61,`br`),ss(62,`h2`,2),WC(63,`Content`),Bu(),ss(64,`doc-code-sample`,3)(65,`h3`,4),WC(66,`Header`),Bu(),ss(67,`p`),WC(68,`A menu item may include a header or may itself be a header`),Bu(),ss(69,`div`,7),WC(70,` Use `),ss(71,`code`),WC(72,`suiHeader`),Bu(),WC(73,` on an item, or `),ss(74,`code`),WC(75,`suiMenuHeader`),Bu(),WC(76,` inside an item, to add a header. `),Bu(),Ph(77,Ps,1,0,`ng-template`,5),Bu(),ss(78,`doc-code-sample`,3)(79,`h3`,4),WC(80,`Text`),Bu(),ss(81,`p`),WC(82,`A vertical menu item can include any type of text content`),Bu(),Ph(83,zs,1,0,`ng-template`,5),Bu(),ss(84,`doc-code-sample`,3)(85,`h3`,4),WC(86,`Input`),Bu(),ss(87,`p`),WC(88,`A menu item can contain an input inside of it`),Bu(),Ph(89,Js,1,0,`ng-template`,5),Bu(),ss(90,`doc-code-sample`,3)(91,`h3`,4),WC(92,`Button`),Bu(),ss(93,`p`),WC(94,`A menu item can contain a button inside of it`),Bu(),Ph(95,Ls,1,0,`ng-template`,5),Bu(),ss(96,`doc-code-sample`,3)(97,`h3`,4),WC(98,`Link Item`),Bu(),ss(99,`p`),WC(100,`A menu may contain a link item, or an item formatted as if it is a link`),Bu(),Ph(101,Hs,1,0,`ng-template`,5),Bu(),ss(102,`doc-code-sample`,3)(103,`h3`,4),WC(104,`Dropdown Item`),Bu(),ss(105,`p`),WC(106,`An item may contain a nested menu in a dropdown`),Bu(),Ph(107,Vs,1,0,`ng-template`,5),Bu(),ss(108,`doc-code-sample`,3)(109,`h3`,4),WC(110,`Menu`),Bu(),ss(111,`p`),WC(112,`A menu may contain another menu group in the same level as menu items`),Bu(),ss(113,`div`,7),WC(114,` Use `),ss(115,`code`),WC(116,`suiSubMenu`),Bu(),WC(117,` with `),ss(118,`code`),WC(119,`suiRight`),Bu(),WC(120,` to float a group of items to the right of the menu. `),Bu(),Ph(121,qs,1,0,`ng-template`,5),Bu(),Gh(122,`br`),ss(123,`h2`,2),WC(124,`States`),Bu(),ss(125,`doc-code-sample`,3)(126,`h3`,4),WC(127,`Hover`),Bu(),ss(128,`p`),WC(129,`A menu item can be hovered`),Bu(),ss(130,`div`,7),WC(131,` Menu items are only hoverable if they are links, `),ss(132,`code`),WC(133,`<a>`),Bu(),WC(134,` or `),ss(135,`code`),WC(136,`suiLink`),Bu(),WC(137,`. `),Bu(),Ph(138,Os,1,0,`ng-template`,5),Bu(),ss(139,`doc-code-sample`,3)(140,`h3`,4),WC(141,`Active`),Bu(),ss(142,`p`),WC(143,`A menu item can be active`),Bu(),Ph(144,Us,1,0,`ng-template`,5),Bu(),ss(145,`doc-code-sample`,3)(146,`h3`,4),WC(147,`Disabled`),Bu(),ss(148,`p`),WC(149,`A menu item can be disabled`),Bu(),Ph(150,js,1,0,`ng-template`,5),Bu(),Gh(151,`br`),ss(152,`h2`,2),WC(153,`Variations`),Bu(),ss(154,`doc-code-sample`,3)(155,`h3`,4),WC(156,`Stackable`),Bu(),ss(157,`p`),WC(158,`A menu can stack at mobile resolutions`),Bu(),Ph(159,Ys,1,0,`ng-template`,5),Bu(),ss(160,`doc-code-sample`,6)(161,`h3`,4),WC(162,`Inverted`),Bu(),ss(163,`p`),WC(164,`A menu may have its colors inverted to show greater contrast`),Bu(),Ph(165,Xs,1,0,`ng-template`,5),Bu(),ss(166,`doc-code-sample`,6)(167,`h3`,4),WC(168,`Colored`),Bu(),ss(169,`p`),WC(170,`Additional colors can be specified`),Bu(),Ph(171,$s,1,0,`ng-template`,5),Bu(),ss(172,`doc-code-sample`,6)(173,`p`),WC(174,`A whole menu can also be coloured, or coloured and inverted`),Bu(),Ph(175,Ks,1,0,`ng-template`,5),Bu(),ss(176,`doc-code-sample`,3)(177,`h3`,4),WC(178,`Icons`),Bu(),ss(179,`p`),WC(180,`A menu may have just icons`),Bu(),Ph(181,Qs,1,0,`ng-template`,5),Bu(),ss(182,`doc-code-sample`,3)(183,`h3`,4),WC(184,`Labeled Icon`),Bu(),ss(185,`p`),WC(186,`A menu may have labeled icons`),Bu(),Ph(187,Zs,1,0,`ng-template`,5),Bu(),ss(188,`doc-code-sample`,3)(189,`h3`,4),WC(190,`Fluid`),Bu(),ss(191,`p`),WC(192,`A vertical menu may take the size of its container`),Bu(),ss(193,`div`,7),WC(194,` A horizontal menu will be fluid by default. `),Bu(),Ph(195,e0,1,0,`ng-template`,5),Bu(),ss(196,`doc-code-sample`,3)(197,`h3`,4),WC(198,`Compact`),Bu(),ss(199,`p`),WC(200,`A menu can take up only the space necessary to fit its content`),Bu(),Ph(201,t0,1,0,`ng-template`,5),Bu(),ss(202,`doc-code-sample`,3)(203,`h3`,4),WC(204,`Evenly Divided`),Bu(),ss(205,`p`),WC(206,`A menu can have its items divided evenly`),Bu(),Ph(207,i0,1,0,`ng-template`,5),Bu(),ss(208,`doc-code-sample`,3)(209,`h3`,4),WC(210,`Attached`),Bu(),ss(211,`p`),WC(212,`A menu may be attached to other content segments`),Bu(),Ph(213,n0,1,0,`ng-template`,5),Bu(),ss(214,`doc-code-sample`,3)(215,`h3`,4),WC(216,`Size`),Bu(),ss(217,`p`),WC(218,`A menu can vary in size`),Bu(),Ph(219,a0,1,0,`ng-template`,5),Bu(),ss(220,`doc-code-sample`,3)(221,`h3`,4),WC(222,`Fitted`),Bu(),ss(223,`p`),WC(224,`A menu item or menu can remove element padding, vertically or horizontally`),Bu(),Ph(225,l0,1,0,`ng-template`,5),Bu(),ss(226,`doc-code-sample`,3)(227,`h3`,4),WC(228,`Borderless`),Bu(),ss(229,`p`),WC(230,`A menu item or menu can have no borders`),Bu(),Ph(231,d0,1,0,`ng-template`,5),Bu()()),n&2){let a=hC();KD(3),Uh(`templateCode`,a.snippetMenu),KD(6),Uh(`templateCode`,a.snippetMenuEvenly)(`componentCode`,a.snippetMenuEvenlyTs),KD(4),Uh(`templateCode`,a.snippetSecondary)(`componentCode`,a.snippetSecondaryTs),KD(6),Uh(`templateCode`,a.snippetPointing)(`componentCode`,a.snippetPointingTs),KD(6),Uh(`templateCode`,a.snippetSecondaryPointing)(`componentCode`,a.snippetSecondaryPointingTs),KD(4),Uh(`templateCode`,a.snippetTabular)(`componentCode`,a.snippetTabularTs),KD(6),Uh(`templateCode`,a.snippetTabularAttached)(`componentCode`,a.snippetTabularAttachedTs),KD(4),Uh(`templateCode`,a.snippetText)(`componentCode`,a.snippetTextTs),KD(6),Uh(`templateCode`,a.snippetVertical),KD(6),Uh(`templateCode`,a.snippetVerticalSecondary)(`componentCode`,a.snippetVerticalSecondaryTs),KD(4),Uh(`templateCode`,a.snippetPagination),KD(9),Uh(`templateCode`,a.snippetHeader),KD(14),Uh(`templateCode`,a.snippetTextContent),KD(6),Uh(`templateCode`,a.snippetInput),KD(6),Uh(`templateCode`,a.snippetButton),KD(6),Uh(`templateCode`,a.snippetLinkItem),KD(6),Uh(`templateCode`,a.snippetDropdownItem),KD(6),Uh(`templateCode`,a.snippetSubMenu),KD(17),Uh(`templateCode`,a.snippetHover),KD(14),Uh(`templateCode`,a.snippetActive),KD(6),Uh(`templateCode`,a.snippetDisabled),KD(9),Uh(`templateCode`,a.snippetStackable),KD(6),Uh(`templateCode`,a.snippetInverted)(`componentCode`,a.snippetInvertedTs),KD(6),Uh(`templateCode`,a.snippetColored)(`componentCode`,a.snippetColoredTs),KD(6),Uh(`templateCode`,a.snippetColoredMenu)(`componentCode`,a.snippetColoredMenuTs),KD(4),Uh(`templateCode`,a.snippetIcons),KD(6),Uh(`templateCode`,a.snippetLabeledIcon),KD(6),Uh(`templateCode`,a.snippetFluid),KD(8),Uh(`templateCode`,a.snippetCompact),KD(6),Uh(`templateCode`,a.snippetEvenlyDivided),KD(6),Uh(`templateCode`,a.snippetAttached),KD(6),Uh(`templateCode`,a.snippetSize),KD(6),Uh(`templateCode`,a.snippetFitted),KD(6),Uh(`templateCode`,a.snippetBorderless)}}function m0(n,s){n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`sui-menu`),Bu(),ss(3,`h4`,4),WC(4,`Properties`),Bu(),ss(5,`table`,8)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss(10,`th`),WC(11,`Description`),Bu(),ss(12,`th`),WC(13,`Type`),Bu(),ss(14,`th`),WC(15,`Default`),Bu()()(),ss(16,`tbody`)(17,`tr`)(18,`td`),WC(19,` suiWidth `),Bu(),ss(20,`td`),WC(21,` Divide the menu into a number of evenly sized items. Allowed values are `),ss(22,`span`,9),WC(23,`'one'`),Bu(),WC(24,` through `),ss(25,`span`,9),WC(26,`'sixteen'`),Bu(),WC(27,` | `),ss(28,`span`,9),WC(29,`null`),Bu()(),ss(30,`td`)(31,`div`,10),WC(32,` string `),Bu()(),ss(33,`td`)(34,`div`,11),WC(35,` null `),Bu()()(),ss(36,`tr`)(37,`td`),WC(38,` suiColour `),Bu(),ss(39,`td`),WC(40,` Set the colour of the menu. Allowed values are `),ss(41,`span`,9),WC(42,`'red'`),Bu(),WC(43,` | `),ss(44,`span`,9),WC(45,`'orange'`),Bu(),WC(46,` | `),ss(47,`span`,9),WC(48,`'yellow'`),Bu(),WC(49,` | `),ss(50,`span`,9),WC(51,`'olive'`),Bu(),WC(52,` | `),ss(53,`span`,9),WC(54,`'green'`),Bu(),WC(55,` | `),ss(56,`span`,9),WC(57,`'teal'`),Bu(),WC(58,` | `),ss(59,`span`,9),WC(60,`'blue'`),Bu(),WC(61,` | `),ss(62,`span`,9),WC(63,`'violet'`),Bu(),WC(64,` | `),ss(65,`span`,9),WC(66,`'purple'`),Bu(),WC(67,` | `),ss(68,`span`,9),WC(69,`'pink'`),Bu(),WC(70,` | `),ss(71,`span`,9),WC(72,`'brown'`),Bu(),WC(73,` | `),ss(74,`span`,9),WC(75,`'grey'`),Bu(),WC(76,` | `),ss(77,`span`,9),WC(78,`'black'`),Bu(),WC(79,` | `),ss(80,`span`,9),WC(81,`null`),Bu()(),ss(82,`td`)(83,`div`,10),WC(84,` string `),Bu()(),ss(85,`td`)(86,`div`,11),WC(87,` null `),Bu()()(),ss(88,`tr`)(89,`td`),WC(90,` suiSize `),Bu(),ss(91,`td`),WC(92,` Set the size of the menu. Allowed values are `),ss(93,`span`,9),WC(94,`'mini'`),Bu(),WC(95,` | `),ss(96,`span`,9),WC(97,`'tiny'`),Bu(),WC(98,` | `),ss(99,`span`,9),WC(100,`'small'`),Bu(),WC(101,` | `),ss(102,`span`,9),WC(103,`'large'`),Bu(),WC(104,` | `),ss(105,`span`,9),WC(106,`'huge'`),Bu(),WC(107,` | `),ss(108,`span`,9),WC(109,`'massive'`),Bu(),WC(110,` | `),ss(111,`span`,9),WC(112,`null`),Bu()(),ss(113,`td`)(114,`div`,10),WC(115,` string `),Bu()(),ss(116,`td`)(117,`div`,11),WC(118,` null `),Bu()()(),ss(119,`tr`)(120,`td`),WC(121,` suiAttached `),Bu(),ss(122,`td`),WC(123,` Attach the menu to other content. Allowed values are `),ss(124,`span`,9),WC(125,`'top'`),Bu(),WC(126,` | `),ss(127,`span`,9),WC(128,`'bottom'`),Bu(),WC(129,` | `),ss(130,`span`,9),WC(131,`'attached'`),Bu(),WC(132,` | `),ss(133,`span`,9),WC(134,`null`),Bu()(),ss(135,`td`)(136,`div`,10),WC(137,` string `),Bu()(),ss(138,`td`)(139,`div`,11),WC(140,` null `),Bu()()(),ss(141,`tr`)(142,`td`),WC(143,` suiFixed `),Bu(),ss(144,`td`),WC(145,` Fix the menu to a side of the viewport. Allowed values are `),ss(146,`span`,9),WC(147,`'top'`),Bu(),WC(148,` | `),ss(149,`span`,9),WC(150,`'bottom'`),Bu(),WC(151,` | `),ss(152,`span`,9),WC(153,`'left'`),Bu(),WC(154,` | `),ss(155,`span`,9),WC(156,`'right'`),Bu(),WC(157,` | `),ss(158,`span`,9),WC(159,`null`),Bu()(),ss(160,`td`)(161,`div`,10),WC(162,` string `),Bu()(),ss(163,`td`)(164,`div`,11),WC(165,` null `),Bu()()(),ss(166,`tr`)(167,`td`),WC(168,` suiIcon `),Bu(),ss(169,`td`),WC(170,` Format the menu for icon items. Allowed values are `),ss(171,`span`,9),WC(172,`'icon'`),Bu(),WC(173,` | `),ss(174,`span`,9),WC(175,`'labeled icon'`),Bu(),WC(176,` | `),ss(177,`span`,9),WC(178,`null`),Bu()(),ss(179,`td`)(180,`div`,10),WC(181,` string `),Bu()(),ss(182,`td`)(183,`div`,11),WC(184,` null `),Bu()()(),ss(185,`tr`)(186,`td`),WC(187,` suiSecondary `),Bu(),ss(188,`td`),WC(189,` De-emphasize the contents of the menu `),Bu(),ss(190,`td`)(191,`div`,10),WC(192,` boolean `),Bu()(),ss(193,`td`)(194,`div`,11),WC(195,` false `),Bu()()(),ss(196,`tr`)(197,`td`),WC(198,` suiPointing `),Bu(),ss(199,`td`),WC(200,` Point to show the relationship to nearby content `),Bu(),ss(201,`td`)(202,`div`,10),WC(203,` boolean `),Bu()(),ss(204,`td`)(205,`div`,11),WC(206,` false `),Bu()()(),ss(207,`tr`)(208,`td`),WC(209,` suiTabular `),Bu(),ss(210,`td`),WC(211,` Format the menu as tabs `),Bu(),ss(212,`td`)(213,`div`,10),WC(214,` boolean `),Bu()(),ss(215,`td`)(216,`div`,11),WC(217,` false `),Bu()()(),ss(218,`tr`)(219,`td`),WC(220,` suiText `),Bu(),ss(221,`td`),WC(222,` Format the menu for text content `),Bu(),ss(223,`td`)(224,`div`,10),WC(225,` boolean `),Bu()(),ss(226,`td`)(227,`div`,11),WC(228,` false `),Bu()()(),ss(229,`tr`)(230,`td`),WC(231,` suiVertical `),Bu(),ss(232,`td`),WC(233,` Display the items vertically `),Bu(),ss(234,`td`)(235,`div`,10),WC(236,` boolean `),Bu()(),ss(237,`td`)(238,`div`,11),WC(239,` false `),Bu()()(),ss(240,`tr`)(241,`td`),WC(242,` suiPagination `),Bu(),ss(243,`td`),WC(244,` Format the menu for pagination links `),Bu(),ss(245,`td`)(246,`div`,10),WC(247,` boolean `),Bu()(),ss(248,`td`)(249,`div`,11),WC(250,` false `),Bu()()(),ss(251,`tr`)(252,`td`),WC(253,` suiInverted `),Bu(),ss(254,`td`),WC(255,` Invert the colours of the menu `),Bu(),ss(256,`td`)(257,`div`,10),WC(258,` boolean `),Bu()(),ss(259,`td`)(260,`div`,11),WC(261,` false `),Bu()()(),ss(262,`tr`)(263,`td`),WC(264,` suiFluid `),Bu(),ss(265,`td`),WC(266,` Make a vertical menu take the width of its container `),Bu(),ss(267,`td`)(268,`div`,10),WC(269,` boolean `),Bu()(),ss(270,`td`)(271,`div`,11),WC(272,` false `),Bu()()(),ss(273,`tr`)(274,`td`),WC(275,` suiCompact `),Bu(),ss(276,`td`),WC(277,` Only take up the space needed to fit the items `),Bu(),ss(278,`td`)(279,`div`,10),WC(280,` boolean `),Bu()(),ss(281,`td`)(282,`div`,11),WC(283,` false `),Bu()()(),ss(284,`tr`)(285,`td`),WC(286,` suiStackable `),Bu(),ss(287,`td`),WC(288,` Stack the items at mobile resolutions `),Bu(),ss(289,`td`)(290,`div`,10),WC(291,` boolean `),Bu()(),ss(292,`td`)(293,`div`,11),WC(294,` false `),Bu()()(),ss(295,`tr`)(296,`td`),WC(297,` suiBorderless `),Bu(),ss(298,`td`),WC(299,` Remove the item borders `),Bu(),ss(300,`td`)(301,`div`,10),WC(302,` boolean `),Bu()(),ss(303,`td`)(304,`div`,11),WC(305,` false `),Bu()()(),ss(306,`tr`)(307,`td`),WC(308,` suiRight `),Bu(),ss(309,`td`),WC(310,` Position the menu on the right `),Bu(),ss(311,`td`)(312,`div`,10),WC(313,` boolean `),Bu()(),ss(314,`td`)(315,`div`,11),WC(316,` false `),Bu()()()()(),ss(317,`h2`,2),WC(318,`suiMenuItem`),Bu(),ss(319,`h4`,4),WC(320,`Properties`),Bu(),ss(321,`table`,8)(322,`thead`)(323,`tr`)(324,`th`),WC(325,`Property`),Bu(),ss(326,`th`),WC(327,`Description`),Bu(),ss(328,`th`),WC(329,`Type`),Bu(),ss(330,`th`),WC(331,`Default`),Bu()()(),ss(332,`tbody`)(333,`tr`)(334,`td`),WC(335,` suiColour `),Bu(),ss(336,`td`),WC(337,` Set the colour of the item. Allowed values are `),ss(338,`span`,9),WC(339,`'red'`),Bu(),WC(340,` | `),ss(341,`span`,9),WC(342,`'orange'`),Bu(),WC(343,` | `),ss(344,`span`,9),WC(345,`'yellow'`),Bu(),WC(346,` | `),ss(347,`span`,9),WC(348,`'olive'`),Bu(),WC(349,` | `),ss(350,`span`,9),WC(351,`'green'`),Bu(),WC(352,` | `),ss(353,`span`,9),WC(354,`'teal'`),Bu(),WC(355,` | `),ss(356,`span`,9),WC(357,`'blue'`),Bu(),WC(358,` | `),ss(359,`span`,9),WC(360,`'violet'`),Bu(),WC(361,` | `),ss(362,`span`,9),WC(363,`'purple'`),Bu(),WC(364,` | `),ss(365,`span`,9),WC(366,`'pink'`),Bu(),WC(367,` | `),ss(368,`span`,9),WC(369,`'brown'`),Bu(),WC(370,` | `),ss(371,`span`,9),WC(372,`'grey'`),Bu(),WC(373,` | `),ss(374,`span`,9),WC(375,`'black'`),Bu(),WC(376,` | `),ss(377,`span`,9),WC(378,`null`),Bu()(),ss(379,`td`)(380,`div`,10),WC(381,` string `),Bu()(),ss(382,`td`)(383,`div`,11),WC(384,` null `),Bu()()(),ss(385,`tr`)(386,`td`),WC(387,` suiFitted `),Bu(),ss(388,`td`),WC(389,` Remove the padding from the item. Allowed values are `),ss(390,`span`,9),WC(391,`'fitted'`),Bu(),WC(392,` | `),ss(393,`span`,9),WC(394,`'horizontally fitted'`),Bu(),WC(395,` | `),ss(396,`span`,9),WC(397,`'vertically fitted'`),Bu(),WC(398,` | `),ss(399,`span`,9),WC(400,`null`),Bu()(),ss(401,`td`)(402,`div`,10),WC(403,` string `),Bu()(),ss(404,`td`)(405,`div`,11),WC(406,` null `),Bu()()(),ss(407,`tr`)(408,`td`),WC(409,` suiActive `),Bu(),ss(410,`td`),WC(411,` Mark the item as active `),Bu(),ss(412,`td`)(413,`div`,10),WC(414,` boolean `),Bu()(),ss(415,`td`)(416,`div`,11),WC(417,` false `),Bu()()(),ss(418,`tr`)(419,`td`),WC(420,` suiHeader `),Bu(),ss(421,`td`),WC(422,` Format the item as a header `),Bu(),ss(423,`td`)(424,`div`,10),WC(425,` boolean `),Bu()(),ss(426,`td`)(427,`div`,11),WC(428,` false `),Bu()()(),ss(429,`tr`)(430,`td`),WC(431,` suiLink `),Bu(),ss(432,`td`),WC(433,` Format the item as a link `),Bu(),ss(434,`td`)(435,`div`,10),WC(436,` boolean `),Bu()(),ss(437,`td`)(438,`div`,11),WC(439,` false `),Bu()()(),ss(440,`tr`)(441,`td`),WC(442,` suiBrowser `),Bu(),ss(443,`td`),WC(444,` Format the item as a browser item `),Bu(),ss(445,`td`)(446,`div`,10),WC(447,` boolean `),Bu()(),ss(448,`td`)(449,`div`,11),WC(450,` false `),Bu()()(),ss(451,`tr`)(452,`td`),WC(453,` disabled `),Bu(),ss(454,`td`),WC(455,` Disable the item `),Bu(),ss(456,`td`)(457,`div`,10),WC(458,` boolean `),Bu()(),ss(459,`td`)(460,`div`,11),WC(461,` false `),Bu()()()()(),ss(462,`h2`,2),WC(463,`suiSubMenu`),Bu(),ss(464,`h4`,4),WC(465,`Properties`),Bu(),ss(466,`table`,8)(467,`thead`)(468,`tr`)(469,`th`),WC(470,`Property`),Bu(),ss(471,`th`),WC(472,`Description`),Bu(),ss(473,`th`),WC(474,`Type`),Bu(),ss(475,`th`),WC(476,`Default`),Bu()()(),ss(477,`tbody`)(478,`tr`)(479,`td`),WC(480,` suiRight `),Bu(),ss(481,`td`),WC(482,` Float the group of items to the right of the parent menu `),Bu(),ss(483,`td`)(484,`div`,10),WC(485,` boolean `),Bu()(),ss(486,`td`)(487,`div`,11),WC(488,` false `),Bu()()()()()())}var qa=(()=>{class n{constructor(a){this.snippetMenu=En,this.snippetMenuEvenly=gn,this.snippetMenuEvenlyTs=bn,this.snippetSecondary=yn,this.snippetSecondaryTs=Cn,this.snippetPointing=Fn,this.snippetPointingTs=Dn,this.snippetSecondaryPointing=Mn,this.snippetSecondaryPointingTs=_n,this.snippetTabular=wn,this.snippetTabularTs=Tn,this.snippetTabularAttached=In,this.snippetTabularAttachedTs=An,this.snippetText=kn,this.snippetTextTs=Bn,this.snippetVertical=Gn,this.snippetVerticalSecondary=Nn,this.snippetVerticalSecondaryTs=Wn,this.snippetPagination=Rn,this.snippetHeader=Pn,this.snippetTextContent=zn,this.snippetInput=Jn,this.snippetButton=Ln,this.snippetLinkItem=Hn,this.snippetDropdownItem=Vn,this.snippetSubMenu=qn,this.snippetHover=On,this.snippetActive=Un,this.snippetDisabled=jn,this.snippetStackable=Yn,this.snippetInverted=Xn,this.snippetInvertedTs=$n,this.snippetColored=Kn,this.snippetColoredTs=Qn,this.snippetColoredMenu=Zn,this.snippetColoredMenuTs=ea,this.snippetIcons=ta,this.snippetLabeledIcon=ia,this.snippetFluid=na,this.snippetCompact=aa,this.snippetEvenlyDivided=la,this.snippetAttached=da,this.snippetSize=ra,this.snippetFitted=ma,this.snippetBorderless=oa,a.setTitle(`Menu | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-menu`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Menu`,`subHeader`,`A menu displays grouped navigation actions`,`semanticUrl`,`https://semantic-ui.com/collections/menu.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[3,`templateCode`,`componentCode`],[`sui-message`,``,`suiState`,`info`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(ss(0,`doc-page`,0),Ph(1,r0,232,45,`div`,1)(2,m0,489,0,`div`,1),Bu()),l&2&&(KD(),Uh(`docPageContent`,`definition`),KD(),Uh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$2,Oi$2,Ws$1,li$1,U$1,fi$2,sa,ca,pa,ua,va,xa,Sa,ha,fa,Ea,ga,ba,ya,Ca,Fa,Da,Ma,_a,wa,Ta,Ia,Aa,ka,Ba,Ga,Na,Wa,Ra,Pa,za,Ja,La,Ha,Va],encapsulation:2,changeDetection:1})}}return n})();var Oa=`<table sui-table
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
`;var J0=(n,s)=>s.name;function L0(n,s){if(n&1&&(ss(0,`tr`)(1,`td`),WC(2),Bu(),ss(3,`td`),WC(4),Bu(),ss(5,`td`),WC(6),Bu()()),n&2){let a=s.$implicit;KD(2),hg(a.name),KD(2),hg(a.age),KD(2),hg(a.job)}}var F=class{constructor(){this.people=[{name:`John`,age:15,job:`Student`},{name:`Jamie`,age:42,job:`Engineer`},{name:`Jill`,age:29,job:`Designer`},{name:`Ahmed`,age:34,job:`Accountant`}],this.sortColumn=null,this.sortDirection=`ascending`}sort(s){this.sortDirection=this.sortColumn===s&&this.sortDirection===`ascending`?`descending`:`ascending`,this.sortColumn=s;let a=this.sortDirection===`ascending`?1:-1;this.people=[...this.people].sort((l,d)=>(l[s]>d[s]?1:l[s]<d[s]?-1:0)*a)}sortedBy(s){return this.sortColumn===s?this.sortDirection:null}};var yl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-table-example`]],standalone:!1,features:[lo],decls:45,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`colspan`,`3`],[`sui-menu`,``,`suiPagination`,``,1,`right`,`floated`],[`suiMenuItem`,``],[`sui-icon`,``,`suiIconType`,`chevron left`],[`sui-icon`,``,`suiIconType`,`chevron right`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Header`),Bu(),ss(5,`th`),WC(6,`Header`),Bu(),ss(7,`th`),WC(8,`Header`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`Cell`),Bu(),ss(13,`td`),WC(14,`Cell`),Bu(),ss(15,`td`),WC(16,`Cell`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Cell`),Bu(),ss(20,`td`),WC(21,`Cell`),Bu(),ss(22,`td`),WC(23,`Cell`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Cell`),Bu(),ss(27,`td`),WC(28,`Cell`),Bu(),ss(29,`td`),WC(30,`Cell`),Bu()()(),ss(31,`tfoot`)(32,`tr`)(33,`th`,1)(34,`div`,2)(35,`a`,3),Gh(36,`i`,4),Bu(),ss(37,`a`,3),WC(38,`1`),Bu(),ss(39,`a`,3),WC(40,`2`),Bu(),ss(41,`a`,3),WC(42,`3`),Bu(),ss(43,`a`,3),Gh(44,`i`,5),Bu()()()()()())},dependencies:[we,U$1,Ft$1,Tt$1],encapsulation:2,changeDetection:1})}}return n})();var Cl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-definition-example`]],standalone:!1,features:[lo],decls:23,vars:0,consts:[[`sui-table`,``,`suiDefinition`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`),Gh(3,`th`),ss(4,`th`),WC(5,`Arguments`),Bu(),ss(6,`th`),WC(7,`Description`),Bu()()(),ss(8,`tbody`)(9,`tr`)(10,`td`),WC(11,`reset rating`),Bu(),ss(12,`td`),WC(13,`None`),Bu(),ss(14,`td`),WC(15,`Resets rating to default value`),Bu()(),ss(16,`tr`)(17,`td`),WC(18,`set rating`),Bu(),ss(19,`td`),WC(20,`rating (integer)`),Bu(),ss(21,`td`),WC(22,`Sets the current star rating to specified value`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Fl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-structured-example`]],standalone:!1,features:[lo],decls:50,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiStructured`,``],[`rowspan`,`2`],[`colspan`,`3`],[`suiTableCell`,``,`suiTextAlignment`,`right`],[`suiTableCell`,``,`suiTextAlignment`,`center`],[`sui-icon`,``,`suiIconType`,`large green checkmark`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`,1),WC(4,`Name`),Bu(),ss(5,`th`,1),WC(6,`Type`),Bu(),ss(7,`th`,1),WC(8,`Files`),Bu(),ss(9,`th`,2),WC(10,`Languages`),Bu()(),ss(11,`tr`)(12,`th`),WC(13,`Ruby`),Bu(),ss(14,`th`),WC(15,`JavaScript`),Bu(),ss(16,`th`),WC(17,`Python`),Bu()()(),ss(18,`tbody`)(19,`tr`)(20,`td`),WC(21,`Alpha Team`),Bu(),ss(22,`td`),WC(23,`Project 1`),Bu(),ss(24,`td`,3),WC(25,`2`),Bu(),ss(26,`td`,4),Gh(27,`i`,5),Bu(),Gh(28,`td`)(29,`td`),Bu(),ss(30,`tr`)(31,`td`,1),WC(32,`Beta Team`),Bu(),ss(33,`td`),WC(34,`Project 1`),Bu(),ss(35,`td`,3),WC(36,`52`),Bu(),ss(37,`td`,4),Gh(38,`i`,5),Bu(),Gh(39,`td`)(40,`td`),Bu(),ss(41,`tr`)(42,`td`),WC(43,`Project 2`),Bu(),ss(44,`td`,3),WC(45,`12`),Bu(),Gh(46,`td`),ss(47,`td`,4),Gh(48,`i`,5),Bu(),Gh(49,`td`),Bu()()())},dependencies:[we,U$1,G],encapsulation:2,changeDetection:1})}}return n})();var Dl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-positive-negative-example`]],standalone:!1,features:[lo],decls:38,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`suiState`,`positive`],[`suiTableCell`,``,`suiState`,`negative`],[`suiTableRow`,``,`suiState`,`negative`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`No Name Specified`),Bu(),ss(13,`td`),WC(14,`Unknown`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`,1)(18,`td`),WC(19,`Jimmy`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`None`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jamie`),Bu(),ss(27,`td`,2),WC(28,`Unknown`),Bu(),ss(29,`td`),WC(30,`Requires call`),Bu()(),ss(31,`tr`,3)(32,`td`),WC(33,`Jill`),Bu(),ss(34,`td`),WC(35,`Unknown`),Bu(),ss(36,`td`),WC(37,`None`),Bu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Ml=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-error-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`suiState`,`error`],[`suiTableCell`,``,`suiState`,`error`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`,1)(11,`td`),WC(12,`No Name Specified`),Bu(),ss(13,`td`),WC(14,`Unknown`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jimmy`),Bu(),ss(20,`td`,2),WC(21,`Cannot pull data`),Bu(),ss(22,`td`),WC(23,`None`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jamie`),Bu(),ss(27,`td`),WC(28,`Unknown`),Bu(),ss(29,`td`),WC(30,`Requires call`),Bu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var _l=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-warning-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`suiState`,`warning`],[`suiTableCell`,``,`suiState`,`warning`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`,1)(11,`td`),WC(12,`No Name Specified`),Bu(),ss(13,`td`),WC(14,`Unknown`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jimmy`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`,2),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jamie`),Bu(),ss(27,`td`),WC(28,`Unknown`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var wl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-active-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`suiActive`,``],[`suiTableCell`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`,1)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Selected`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`,2),WC(28,`Approved`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Tl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-disabled-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableRow`,``,`disabled`,``],[`suiTableCell`,``,`disabled`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`,1)(11,`td`),WC(12,`Jamie`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`Requires call`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`John`),Bu(),ss(20,`td`),WC(21,`Selected`),Bu(),ss(22,`td`),WC(23,`None`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`,2),WC(28,`Approved`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Il=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-single-line-example`]],standalone:!1,features:[lo],decls:30,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiSingleLine`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Registration Date`),Bu(),ss(7,`th`),WC(8,`E-mail address`),Bu(),ss(9,`th`),WC(10,`Premium Plan`),Bu()()(),ss(11,`tbody`)(12,`tr`)(13,`td`),WC(14,`John Lilki`),Bu(),ss(15,`td`),WC(16,`September 14, 2013`),Bu(),ss(17,`td`),WC(18,`jhlilk22@yahoo.com`),Bu(),ss(19,`td`),WC(20,`No`),Bu()(),ss(21,`tr`)(22,`td`),WC(23,`Jamie Harington`),Bu(),ss(24,`td`),WC(25,`January 11, 2014`),Bu(),ss(26,`td`),WC(27,`jamieharingonton@yahoo.com`),Bu(),ss(28,`td`),WC(29,`Yes`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Al=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-fixed-example`]],standalone:!1,features:[lo],decls:24,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiFixed`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Description`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var kl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-stacking-example`]],standalone:!1,features:[lo],decls:62,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiStacking`,`unstackable`],[`sui-table`,``,`suiCelled`,``,`suiStacking`,`tablet stackable`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()(),ss(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),WC(35,`Name`),Bu(),ss(36,`th`),WC(37,`Status`),Bu(),ss(38,`th`),WC(39,`Notes`),Bu()()(),ss(40,`tbody`)(41,`tr`)(42,`td`),WC(43,`John`),Bu(),ss(44,`td`),WC(45,`Approved`),Bu(),ss(46,`td`),WC(47,`None`),Bu()(),ss(48,`tr`)(49,`td`),WC(50,`Jamie`),Bu(),ss(51,`td`),WC(52,`Approved`),Bu(),ss(53,`td`),WC(54,`Requires call`),Bu()(),ss(55,`tr`)(56,`td`),WC(57,`Jill`),Bu(),ss(58,`td`),WC(59,`Denied`),Bu(),ss(60,`td`),WC(61,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Bl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-selectable-row-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiSelectable`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Gl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-selectable-cell-example`]],standalone:!1,features:[lo],decls:26,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableCell`,``,`suiSelectable`,``],[`href`,`#`],[`suiTableRow`,``,`suiState`,`warning`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`No Action`),Bu(),ss(15,`td`,1)(16,`a`,2),WC(17,`Edit`),Bu()()(),ss(18,`tr`,3)(19,`td`),WC(20,`Jimmy`),Bu(),ss(21,`td`),WC(22,`Requires Action`),Bu(),ss(23,`td`,1)(24,`a`,2),WC(25,`Edit`),Bu()()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Nl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-vertical-alignment-example`]],standalone:!1,features:[lo],decls:34,vars:0,consts:[[`sui-table`,``,`suiStriped`,``],[`suiTableCell`,``,`suiVerticalAlignment`,`top`],[`suiTableRow`,``,`suiVerticalAlignment`,`bottom`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`,1),WC(16,`Notes`),Gh(17,`br`),WC(18,`1`),Gh(19,`br`),WC(20,`2`),Gh(21,`br`),Bu()(),ss(22,`tr`,2)(23,`td`),WC(24,`Jamie`),Bu(),ss(25,`td`),WC(26,`Approved`),Bu(),ss(27,`td`),WC(28,`Notes`),Gh(29,`br`),WC(30,`1`),Gh(31,`br`),WC(32,`2`),Gh(33,`br`),Bu()()()())},dependencies:[U$1,q,G],encapsulation:2,changeDetection:1})}}return n})();var Wl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-text-alignment-example`]],standalone:!1,features:[lo],decls:24,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableHeaderCell`,``,`suiTextAlignment`,`right`],[`suiTableCell`,``,`suiTextAlignment`,`right`],[`suiTableRow`,``,`suiTextAlignment`,`center`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`,1),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`,2),WC(16,`None`),Bu()(),ss(17,`tr`,3)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`,2),WC(23,`Requires call`),Bu()()()())},dependencies:[U$1,q,G,J],encapsulation:2,changeDetection:1})}}return n})();var Rl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-striped-example`]],standalone:!1,features:[lo],decls:52,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiStriped`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()(),ss(31,`tr`)(32,`td`),WC(33,`John`),Bu(),ss(34,`td`),WC(35,`Approved`),Bu(),ss(36,`td`),WC(37,`None`),Bu()(),ss(38,`tr`)(39,`td`),WC(40,`Jamie`),Bu(),ss(41,`td`),WC(42,`Approved`),Bu(),ss(43,`td`),WC(44,`Requires call`),Bu()(),ss(45,`tr`)(46,`td`),WC(47,`Jill`),Bu(),ss(48,`td`),WC(49,`Denied`),Bu(),ss(50,`td`),WC(51,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Pl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-celled-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var zl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-basic-example`]],standalone:!1,features:[lo],decls:62,vars:0,consts:[[`sui-table`,``,`suiBasic`,`basic`],[`sui-table`,``,`suiBasic`,`very basic`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()(),ss(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),WC(35,`Name`),Bu(),ss(36,`th`),WC(37,`Status`),Bu(),ss(38,`th`),WC(39,`Notes`),Bu()()(),ss(40,`tbody`)(41,`tr`)(42,`td`),WC(43,`John`),Bu(),ss(44,`td`),WC(45,`Approved`),Bu(),ss(46,`td`),WC(47,`None`),Bu()(),ss(48,`tr`)(49,`td`),WC(50,`Jamie`),Bu(),ss(51,`td`),WC(52,`Approved`),Bu(),ss(53,`td`),WC(54,`Requires call`),Bu()(),ss(55,`tr`)(56,`td`),WC(57,`Jill`),Bu(),ss(58,`td`),WC(59,`Denied`),Bu(),ss(60,`td`),WC(61,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Jl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-collapsing-cell-example`]],standalone:!1,features:[lo],decls:26,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableCell`,``,`suiCollapsing`,``],[`sui-icon`,``,`suiIconType`,`folder`],[`sui-icon`,``,`suiIconType`,`file outline`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Notes`),Bu()()(),ss(7,`tbody`)(8,`tr`)(9,`td`,1),Gh(10,`i`,2),WC(11,` node_modules`),Bu(),ss(12,`td`),WC(13,`Initial commit`),Bu()(),ss(14,`tr`)(15,`td`,1),Gh(16,`i`,2),WC(17,` test`),Bu(),ss(18,`td`),WC(19,`Initial commit`),Bu()(),ss(20,`tr`)(21,`td`,1),Gh(22,`i`,3),WC(23,` Makefile`),Bu(),ss(24,`td`),WC(25,`Initial commit`),Bu()()()())},dependencies:[we,U$1,G],encapsulation:2,changeDetection:1})}}return n})();var Ll=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-column-width-example`]],standalone:!1,features:[lo],decls:23,vars:0,consts:[[`sui-table`,``,`suiCelled`,``],[`suiTableHeaderCell`,``,`suiWidth`,`ten`],[`suiTableHeaderCell`,``,`suiWidth`,`six`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`,1),WC(4,`Name`),Bu(),ss(5,`th`,2),WC(6,`Status`),Bu()()(),ss(7,`tbody`)(8,`tr`)(9,`td`),WC(10,`John`),Bu(),ss(11,`td`),WC(12,`Approved`),Bu()(),ss(13,`tr`)(14,`td`),WC(15,`Jamie`),Bu(),ss(16,`td`),WC(17,`Approved`),Bu()(),ss(18,`tr`)(19,`td`),WC(20,`Jill`),Bu(),ss(21,`td`),WC(22,`Denied`),Bu()()()())},dependencies:[U$1,J],encapsulation:2,changeDetection:1})}}return n})();var Hl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-column-count-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiWidth`,`three`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Vl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-collapsing-example`]],standalone:!1,features:[lo],decls:31,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiCollapsing`,``]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var ql=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-colored-example`]],standalone:!1,features:[lo],decls:144,vars:0,consts:[[`sui-table`,``,`suiColour`,`red`],[`sui-table`,``,`suiColour`,`orange`],[`sui-table`,``,`suiColour`,`yellow`],[`sui-table`,``,`suiColour`,`green`],[`sui-table`,``,`suiColour`,`teal`],[`sui-table`,``,`suiColour`,`blue`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()()()(),ss(24,`table`,1)(25,`thead`)(26,`tr`)(27,`th`),WC(28,`Name`),Bu(),ss(29,`th`),WC(30,`Status`),Bu(),ss(31,`th`),WC(32,`Notes`),Bu()()(),ss(33,`tbody`)(34,`tr`)(35,`td`),WC(36,`John`),Bu(),ss(37,`td`),WC(38,`Approved`),Bu(),ss(39,`td`),WC(40,`None`),Bu()(),ss(41,`tr`)(42,`td`),WC(43,`Jamie`),Bu(),ss(44,`td`),WC(45,`Approved`),Bu(),ss(46,`td`),WC(47,`Requires call`),Bu()()()(),ss(48,`table`,2)(49,`thead`)(50,`tr`)(51,`th`),WC(52,`Name`),Bu(),ss(53,`th`),WC(54,`Status`),Bu(),ss(55,`th`),WC(56,`Notes`),Bu()()(),ss(57,`tbody`)(58,`tr`)(59,`td`),WC(60,`John`),Bu(),ss(61,`td`),WC(62,`Approved`),Bu(),ss(63,`td`),WC(64,`None`),Bu()(),ss(65,`tr`)(66,`td`),WC(67,`Jamie`),Bu(),ss(68,`td`),WC(69,`Approved`),Bu(),ss(70,`td`),WC(71,`Requires call`),Bu()()()(),ss(72,`table`,3)(73,`thead`)(74,`tr`)(75,`th`),WC(76,`Name`),Bu(),ss(77,`th`),WC(78,`Status`),Bu(),ss(79,`th`),WC(80,`Notes`),Bu()()(),ss(81,`tbody`)(82,`tr`)(83,`td`),WC(84,`John`),Bu(),ss(85,`td`),WC(86,`Approved`),Bu(),ss(87,`td`),WC(88,`None`),Bu()(),ss(89,`tr`)(90,`td`),WC(91,`Jamie`),Bu(),ss(92,`td`),WC(93,`Approved`),Bu(),ss(94,`td`),WC(95,`Requires call`),Bu()()()(),ss(96,`table`,4)(97,`thead`)(98,`tr`)(99,`th`),WC(100,`Name`),Bu(),ss(101,`th`),WC(102,`Status`),Bu(),ss(103,`th`),WC(104,`Notes`),Bu()()(),ss(105,`tbody`)(106,`tr`)(107,`td`),WC(108,`John`),Bu(),ss(109,`td`),WC(110,`Approved`),Bu(),ss(111,`td`),WC(112,`None`),Bu()(),ss(113,`tr`)(114,`td`),WC(115,`Jamie`),Bu(),ss(116,`td`),WC(117,`Approved`),Bu(),ss(118,`td`),WC(119,`Requires call`),Bu()()()(),ss(120,`table`,5)(121,`thead`)(122,`tr`)(123,`th`),WC(124,`Name`),Bu(),ss(125,`th`),WC(126,`Status`),Bu(),ss(127,`th`),WC(128,`Notes`),Bu()()(),ss(129,`tbody`)(130,`tr`)(131,`td`),WC(132,`John`),Bu(),ss(133,`td`),WC(134,`Approved`),Bu(),ss(135,`td`),WC(136,`None`),Bu()(),ss(137,`tr`)(138,`td`),WC(139,`Jamie`),Bu(),ss(140,`td`),WC(141,`Approved`),Bu(),ss(142,`td`),WC(143,`Requires call`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Ol=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-inverted-example`]],standalone:!1,features:[lo],decls:62,vars:0,consts:[[`sui-table`,``,`suiInverted`,``],[`sui-table`,``,`suiInverted`,``,`suiColour`,`teal`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()(),ss(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),WC(35,`Name`),Bu(),ss(36,`th`),WC(37,`Status`),Bu(),ss(38,`th`),WC(39,`Notes`),Bu()()(),ss(40,`tbody`)(41,`tr`)(42,`td`),WC(43,`John`),Bu(),ss(44,`td`),WC(45,`Approved`),Bu(),ss(46,`td`),WC(47,`None`),Bu()(),ss(48,`tr`)(49,`td`),WC(50,`Jamie`),Bu(),ss(51,`td`),WC(52,`Approved`),Bu(),ss(53,`td`),WC(54,`Requires call`),Bu()(),ss(55,`tr`)(56,`td`),WC(57,`Jill`),Bu(),ss(58,`td`),WC(59,`Denied`),Bu(),ss(60,`td`),WC(61,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Ul=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-sortable-example`]],standalone:!1,features:[lo],decls:12,vars:3,consts:[[`sui-table`,``,`suiCelled`,``,`suiSortable`,``],[`suiTableHeaderCell`,``,3,`click`,`suiSorted`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`,1),Qh(`click`,function(){return d.sort(`name`)}),WC(4,`Name`),Bu(),ss(5,`th`,1),Qh(`click`,function(){return d.sort(`age`)}),WC(6,`Age`),Bu(),ss(7,`th`,1),Qh(`click`,function(){return d.sort(`job`)}),WC(8,`Job`),Bu()()(),ss(9,`tbody`),iC(10,L0,7,3,`tr`,null,J0),Bu()()),l&2&&(KD(3),Uh(`suiSorted`,d.sortedBy(`name`)),KD(2),Uh(`suiSorted`,d.sortedBy(`age`)),KD(2),Uh(`suiSorted`,d.sortedBy(`job`)),KD(3),sC(d.people))},dependencies:[U$1,J],encapsulation:2,changeDetection:1})}}return n})();var jl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-full-width-example`]],standalone:!1,features:[lo],decls:29,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``,`suiCompact`,`compact`],[1,`full-width`],[`suiTableCell`,``,`suiCollapsing`,``],[`colspan`,`2`],[`sui-button`,``,`suiSize`,`small`,`suiEmphasis`,`primary`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`,1)(2,`tr`),Gh(3,`th`),ss(4,`th`),WC(5,`Name`),Bu(),ss(6,`th`),WC(7,`Registration Date`),Bu()()(),ss(8,`tbody`)(9,`tr`)(10,`td`,2),WC(11,`1`),Bu(),ss(12,`td`),WC(13,`John Lilki`),Bu(),ss(14,`td`),WC(15,`September 14, 2013`),Bu()(),ss(16,`tr`)(17,`td`,2),WC(18,`2`),Bu(),ss(19,`td`),WC(20,`Jamie Harington`),Bu(),ss(21,`td`),WC(22,`January 11, 2014`),Bu()()(),ss(23,`tfoot`,1)(24,`tr`),Gh(25,`th`),ss(26,`th`,3)(27,`div`,4),WC(28,`Approve`),Bu()()()()())},dependencies:[U$1,G,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var Yl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-padded-example`]],standalone:!1,features:[lo],decls:62,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiPadded`,`padded`],[`sui-table`,``,`suiCelled`,``,`suiPadded`,`very padded`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()(),ss(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),WC(35,`Name`),Bu(),ss(36,`th`),WC(37,`Status`),Bu(),ss(38,`th`),WC(39,`Notes`),Bu()()(),ss(40,`tbody`)(41,`tr`)(42,`td`),WC(43,`John`),Bu(),ss(44,`td`),WC(45,`Approved`),Bu(),ss(46,`td`),WC(47,`None`),Bu()(),ss(48,`tr`)(49,`td`),WC(50,`Jamie`),Bu(),ss(51,`td`),WC(52,`Approved`),Bu(),ss(53,`td`),WC(54,`Requires call`),Bu()(),ss(55,`tr`)(56,`td`),WC(57,`Jill`),Bu(),ss(58,`td`),WC(59,`Denied`),Bu(),ss(60,`td`),WC(61,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Xl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-compact-example`]],standalone:!1,features:[lo],decls:62,vars:0,consts:[[`sui-table`,``,`suiCelled`,``,`suiCompact`,`compact`],[`sui-table`,``,`suiCelled`,``,`suiCompact`,`very compact`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()(),ss(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),WC(35,`Name`),Bu(),ss(36,`th`),WC(37,`Status`),Bu(),ss(38,`th`),WC(39,`Notes`),Bu()()(),ss(40,`tbody`)(41,`tr`)(42,`td`),WC(43,`John`),Bu(),ss(44,`td`),WC(45,`Approved`),Bu(),ss(46,`td`),WC(47,`None`),Bu()(),ss(48,`tr`)(49,`td`),WC(50,`Jamie`),Bu(),ss(51,`td`),WC(52,`Approved`),Bu(),ss(53,`td`),WC(54,`Requires call`),Bu()(),ss(55,`tr`)(56,`td`),WC(57,`Jill`),Bu(),ss(58,`td`),WC(59,`Denied`),Bu(),ss(60,`td`),WC(61,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var $l=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-size-example`]],standalone:!1,features:[lo],decls:62,vars:0,consts:[[`sui-table`,``,`suiSize`,`small`],[`sui-table`,``,`suiSize`,`large`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()(),ss(17,`tr`)(18,`td`),WC(19,`Jamie`),Bu(),ss(20,`td`),WC(21,`Approved`),Bu(),ss(22,`td`),WC(23,`Requires call`),Bu()(),ss(24,`tr`)(25,`td`),WC(26,`Jill`),Bu(),ss(27,`td`),WC(28,`Denied`),Bu(),ss(29,`td`),WC(30,`None`),Bu()()()(),ss(31,`table`,1)(32,`thead`)(33,`tr`)(34,`th`),WC(35,`Name`),Bu(),ss(36,`th`),WC(37,`Status`),Bu(),ss(38,`th`),WC(39,`Notes`),Bu()()(),ss(40,`tbody`)(41,`tr`)(42,`td`),WC(43,`John`),Bu(),ss(44,`td`),WC(45,`Approved`),Bu(),ss(46,`td`),WC(47,`None`),Bu()(),ss(48,`tr`)(49,`td`),WC(50,`Jamie`),Bu(),ss(51,`td`),WC(52,`Approved`),Bu(),ss(53,`td`),WC(54,`Requires call`),Bu()(),ss(55,`tr`)(56,`td`),WC(57,`Jill`),Bu(),ss(58,`td`),WC(59,`Denied`),Bu(),ss(60,`td`),WC(61,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();var Kl=(()=>{class n extends F{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table-attached-example`]],standalone:!1,features:[lo],decls:51,vars:0,consts:[[`sui-table`,``,`suiAttached`,`top attached`],[`sui-table`,``,`suiAttached`,`attached`],[`sui-table`,``,`suiAttached`,`bottom attached`]],template:function(l,d){l&1&&(ss(0,`table`,0)(1,`thead`)(2,`tr`)(3,`th`),WC(4,`Name`),Bu(),ss(5,`th`),WC(6,`Status`),Bu(),ss(7,`th`),WC(8,`Notes`),Bu()()(),ss(9,`tbody`)(10,`tr`)(11,`td`),WC(12,`John`),Bu(),ss(13,`td`),WC(14,`Approved`),Bu(),ss(15,`td`),WC(16,`None`),Bu()()()(),ss(17,`table`,1)(18,`thead`)(19,`tr`)(20,`th`),WC(21,`Name`),Bu(),ss(22,`th`),WC(23,`Status`),Bu(),ss(24,`th`),WC(25,`Notes`),Bu()()(),ss(26,`tbody`)(27,`tr`)(28,`td`),WC(29,`Jamie`),Bu(),ss(30,`td`),WC(31,`Approved`),Bu(),ss(32,`td`),WC(33,`Requires call`),Bu()()()(),ss(34,`table`,2)(35,`thead`)(36,`tr`)(37,`th`),WC(38,`Name`),Bu(),ss(39,`th`),WC(40,`Status`),Bu(),ss(41,`th`),WC(42,`Notes`),Bu()()(),ss(43,`tbody`)(44,`tr`)(45,`td`),WC(46,`Jill`),Bu(),ss(47,`td`),WC(48,`Denied`),Bu(),ss(49,`td`),WC(50,`None`),Bu()()()())},dependencies:[U$1],encapsulation:2,changeDetection:1})}}return n})();function V0(n,s){n&1&&Gh(0,`doc-table-table-example`)}function q0(n,s){n&1&&Gh(0,`doc-table-definition-example`)}function O0(n,s){n&1&&Gh(0,`doc-table-structured-example`)}function U0(n,s){n&1&&Gh(0,`doc-table-positive-negative-example`)}function j0(n,s){n&1&&Gh(0,`doc-table-error-example`)}function Y0(n,s){n&1&&Gh(0,`doc-table-warning-example`)}function X0(n,s){n&1&&Gh(0,`doc-table-active-example`)}function $0(n,s){n&1&&Gh(0,`doc-table-disabled-example`)}function K0(n,s){n&1&&Gh(0,`doc-table-single-line-example`)}function Q0(n,s){n&1&&Gh(0,`doc-table-fixed-example`)}function Z0(n,s){n&1&&Gh(0,`doc-table-stacking-example`)}function ec(n,s){n&1&&Gh(0,`doc-table-selectable-row-example`)}function tc(n,s){n&1&&Gh(0,`doc-table-selectable-cell-example`)}function ic(n,s){n&1&&Gh(0,`doc-table-vertical-alignment-example`)}function nc(n,s){n&1&&Gh(0,`doc-table-text-alignment-example`)}function ac(n,s){n&1&&Gh(0,`doc-table-striped-example`)}function lc(n,s){n&1&&Gh(0,`doc-table-celled-example`)}function dc(n,s){n&1&&Gh(0,`doc-table-basic-example`)}function rc(n,s){n&1&&Gh(0,`doc-table-collapsing-cell-example`)}function mc(n,s){n&1&&Gh(0,`doc-table-column-width-example`)}function oc(n,s){n&1&&Gh(0,`doc-table-column-count-example`)}function sc(n,s){n&1&&Gh(0,`doc-table-collapsing-example`)}function cc(n,s){n&1&&Gh(0,`doc-table-colored-example`)}function pc(n,s){n&1&&Gh(0,`doc-table-inverted-example`)}function uc(n,s){n&1&&Gh(0,`doc-table-sortable-example`)}function vc(n,s){n&1&&Gh(0,`doc-table-full-width-example`)}function xc(n,s){n&1&&Gh(0,`doc-table-padded-example`)}function Sc(n,s){n&1&&Gh(0,`doc-table-compact-example`)}function hc(n,s){n&1&&Gh(0,`doc-table-size-example`)}function fc(n,s){n&1&&Gh(0,`doc-table-attached-example`)}function Ec(n,s){if(n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Table`),Bu(),ss(6,`p`),WC(7,`A standard table`),Bu(),Ph(8,V0,1,0,`ng-template`,5),Bu(),ss(9,`doc-code-sample`,3)(10,`h3`,4),WC(11,`Definition`),Bu(),ss(12,`p`),WC(13,`A table may be formatted to emphasize a first column that defines a rows content`),Bu(),Ph(14,q0,1,0,`ng-template`,5),Bu(),ss(15,`doc-code-sample`,3)(16,`h3`,4),WC(17,`Structured`),Bu(),ss(18,`p`),WC(19,`A table can be formatted to display complex structured data`),Bu(),Ph(20,O0,1,0,`ng-template`,5),Bu(),Gh(21,`br`),ss(22,`h2`,2),WC(23,`States`),Bu(),ss(24,`doc-code-sample`,3)(25,`h3`,4),WC(26,`Positive / Negative`),Bu(),ss(27,`p`),WC(28,`A cell or row may let a user know whether a value is good or bad`),Bu(),Ph(29,U0,1,0,`ng-template`,5),Bu(),ss(30,`doc-code-sample`,3)(31,`h3`,4),WC(32,`Error`),Bu(),ss(33,`p`),WC(34,`A cell or row may call attention to an error or a negative value`),Bu(),Ph(35,j0,1,0,`ng-template`,5),Bu(),ss(36,`doc-code-sample`,3)(37,`h3`,4),WC(38,`Warning`),Bu(),ss(39,`p`),WC(40,`A cell or row may warn a user`),Bu(),Ph(41,Y0,1,0,`ng-template`,5),Bu(),ss(42,`doc-code-sample`,3)(43,`h3`,4),WC(44,`Active`),Bu(),ss(45,`p`),WC(46,`A cell or row can be active or selected by a user`),Bu(),Ph(47,X0,1,0,`ng-template`,5),Bu(),ss(48,`doc-code-sample`,3)(49,`h3`,4),WC(50,`Disabled`),Bu(),ss(51,`p`),WC(52,`A cell can be disabled`),Bu(),Ph(53,$0,1,0,`ng-template`,5),Bu(),Gh(54,`br`),ss(55,`h2`,2),WC(56,`Variations`),Bu(),ss(57,`doc-code-sample`,3)(58,`h3`,4),WC(59,`Single Line`),Bu(),ss(60,`p`),WC(61,`A table can specify that its cell contents should remain on a single line and not wrap`),Bu(),Ph(62,K0,1,0,`ng-template`,5),Bu(),ss(63,`doc-code-sample`,3)(64,`h3`,4),WC(65,`Fixed`),Bu(),ss(66,`p`),WC(67,`A table can use table-layout: fixed a special faster form of table rendering that does not resize table cells based on content`),Bu(),ss(68,`div`,6),WC(69,` Fixed tables will automatically ellipsis overflowing text. Use `),ss(70,`code`),WC(71,`suiSingleLine`),Bu(),WC(72,` to prevent wrapping. `),Bu(),Ph(73,Q0,1,0,`ng-template`,5),Bu(),ss(74,`doc-code-sample`,3)(75,`h3`,4),WC(76,`Stacking`),Bu(),ss(77,`p`),WC(78,`A table can specify how it stacks table content responsively`),Bu(),ss(79,`div`,6),WC(80,` Tables are stackable on mobile by default. Use `),ss(81,`code`),WC(82,`unstackable`),Bu(),WC(83,` to prevent this, or `),ss(84,`code`),WC(85,`tablet stackable`),Bu(),WC(86,` to also stack on tablets. `),Bu(),Ph(87,Z0,1,0,`ng-template`,5),Bu(),ss(88,`doc-code-sample`,3)(89,`h3`,4),WC(90,`Selectable Row`),Bu(),ss(91,`p`),WC(92,`A table can have its rows appear selectable`),Bu(),Ph(93,ec,1,0,`ng-template`,5),Bu(),ss(94,`doc-code-sample`,3)(95,`h3`,4),WC(96,`Selectable Cell`),Bu(),ss(97,`p`),WC(98,`A table cell can be selectable`),Bu(),ss(99,`div`,6),WC(100,` A selectable cell requires a link inside it to size the click area. `),Bu(),Ph(101,tc,1,0,`ng-template`,5),Bu(),ss(102,`doc-code-sample`,3)(103,`h3`,4),WC(104,`Vertical Alignment`),Bu(),ss(105,`p`),WC(106,`A table header, row, or cell can adjust its vertical alignment`),Bu(),Ph(107,ic,1,0,`ng-template`,5),Bu(),ss(108,`doc-code-sample`,3)(109,`h3`,4),WC(110,`Text Alignment`),Bu(),ss(111,`p`),WC(112,`A table header, row, or cell can adjust its text alignment`),Bu(),Ph(113,nc,1,0,`ng-template`,5),Bu(),ss(114,`doc-code-sample`,3)(115,`h3`,4),WC(116,`Striped`),Bu(),ss(117,`p`),WC(118,`A table can stripe alternate rows of content with a darker color to increase contrast`),Bu(),Ph(119,ac,1,0,`ng-template`,5),Bu(),ss(120,`doc-code-sample`,3)(121,`h3`,4),WC(122,`Celled`),Bu(),ss(123,`p`),WC(124,`A table may be divided each row into separate cells`),Bu(),Ph(125,lc,1,0,`ng-template`,5),Bu(),ss(126,`doc-code-sample`,3)(127,`h3`,4),WC(128,`Basic`),Bu(),ss(129,`p`),WC(130,`A table can reduce its complexity to increase readability`),Bu(),Ph(131,dc,1,0,`ng-template`,5),Bu(),ss(132,`doc-code-sample`,3)(133,`h3`,4),WC(134,`Collapsing Cell`),Bu(),ss(135,`p`),WC(136,`A cell can be collapsing so that it only uses as much space as required`),Bu(),Ph(137,rc,1,0,`ng-template`,5),Bu(),ss(138,`doc-code-sample`,3)(139,`h3`,4),WC(140,`Column Width`),Bu(),ss(141,`p`),WC(142,`A table can specify the width of individual columns independently`),Bu(),Ph(143,mc,1,0,`ng-template`,5),Bu(),ss(144,`doc-code-sample`,3)(145,`h3`,4),WC(146,`Column Count`),Bu(),ss(147,`p`),WC(148,`A table can specify its column count to divide its content evenly`),Bu(),Ph(149,oc,1,0,`ng-template`,5),Bu(),ss(150,`doc-code-sample`,3)(151,`h3`,4),WC(152,`Collapsing`),Bu(),ss(153,`p`),WC(154,`A table can be collapsing, taking up only as much space as its rows`),Bu(),Ph(155,sc,1,0,`ng-template`,5),Bu(),ss(156,`doc-code-sample`,3)(157,`h3`,4),WC(158,`Colored`),Bu(),ss(159,`p`),WC(160,`A table can be given a color to distinguish it from other tables`),Bu(),ss(161,`div`,6),WC(162,` Any of the colours `),ss(163,`span`,7),WC(164,`'red'`),Bu(),WC(165,` | `),ss(166,`span`,7),WC(167,`'orange'`),Bu(),WC(168,` | `),ss(169,`span`,7),WC(170,`'yellow'`),Bu(),WC(171,` | `),ss(172,`span`,7),WC(173,`'olive'`),Bu(),WC(174,` | `),ss(175,`span`,7),WC(176,`'green'`),Bu(),WC(177,` | `),ss(178,`span`,7),WC(179,`'teal'`),Bu(),WC(180,` | `),ss(181,`span`,7),WC(182,`'blue'`),Bu(),WC(183,` | `),ss(184,`span`,7),WC(185,`'violet'`),Bu(),WC(186,` | `),ss(187,`span`,7),WC(188,`'purple'`),Bu(),WC(189,` | `),ss(190,`span`,7),WC(191,`'pink'`),Bu(),WC(192,` | `),ss(193,`span`,7),WC(194,`'brown'`),Bu(),WC(195,` | `),ss(196,`span`,7),WC(197,`'grey'`),Bu(),WC(198,` | `),ss(199,`span`,7),WC(200,`'black'`),Bu(),WC(201,` can be used. `),Bu(),Ph(202,cc,1,0,`ng-template`,5),Bu(),ss(203,`doc-code-sample`,3)(204,`h3`,4),WC(205,`Inverted`),Bu(),ss(206,`p`),WC(207,`A table's colors can be inverted`),Bu(),Ph(208,pc,1,0,`ng-template`,5),Bu(),ss(209,`doc-code-sample`,8)(210,`h3`,4),WC(211,`Sortable`),Bu(),ss(212,`p`),WC(213,`A table may allow a user to sort contents by clicking on a table header`),Bu(),ss(214,`div`,6),WC(215,` Sorting is done by your component; `),ss(216,`code`),WC(217,`suiSorted`),Bu(),WC(218,` only shows the current sort direction on the header. `),Bu(),Ph(219,uc,1,0,`ng-template`,5),Bu(),ss(220,`doc-code-sample`,3)(221,`h3`,4),WC(222,`Full-Width Header / Footer`),Bu(),ss(223,`p`),WC(224,`A definition table can have a full width header or footer, filling in the gap left by the first column`),Bu(),ss(225,`div`,6),WC(226,` Add the `),ss(227,`code`),WC(228,`full-width`),Bu(),WC(229,` class to a `),ss(230,`code`),WC(231,`thead`),Bu(),WC(232,` or `),ss(233,`code`),WC(234,`tfoot`),Bu(),WC(235,`. `),Bu(),Ph(236,vc,1,0,`ng-template`,5),Bu(),ss(237,`doc-code-sample`,3)(238,`h3`,4),WC(239,`Padded`),Bu(),ss(240,`p`),WC(241,`A table may sometimes need to be more padded for legibility`),Bu(),Ph(242,xc,1,0,`ng-template`,5),Bu(),ss(243,`doc-code-sample`,3)(244,`h3`,4),WC(245,`Compact`),Bu(),ss(246,`p`),WC(247,`A table may sometimes need to be more compact to make more rows visible at a time`),Bu(),Ph(248,Sc,1,0,`ng-template`,5),Bu(),ss(249,`doc-code-sample`,3)(250,`h3`,4),WC(251,`Size`),Bu(),ss(252,`p`),WC(253,`A table can also be small or large`),Bu(),Ph(254,hc,1,0,`ng-template`,5),Bu(),ss(255,`doc-code-sample`,3)(256,`h3`,4),WC(257,`Attached`),Bu(),ss(258,`p`),WC(259,`A table can be attached to other content on a page`),Bu(),Ph(260,fc,1,0,`ng-template`,5),Bu()()),n&2){let a=hC();KD(3),Uh(`templateCode`,a.snippetTable),KD(6),Uh(`templateCode`,a.snippetDefinition),KD(6),Uh(`templateCode`,a.snippetStructured),KD(9),Uh(`templateCode`,a.snippetPositiveNegative),KD(6),Uh(`templateCode`,a.snippetError),KD(6),Uh(`templateCode`,a.snippetWarning),KD(6),Uh(`templateCode`,a.snippetActive),KD(6),Uh(`templateCode`,a.snippetDisabled),KD(9),Uh(`templateCode`,a.snippetSingleLine),KD(6),Uh(`templateCode`,a.snippetFixed),KD(11),Uh(`templateCode`,a.snippetStacking),KD(14),Uh(`templateCode`,a.snippetSelectableRow),KD(6),Uh(`templateCode`,a.snippetSelectableCell),KD(8),Uh(`templateCode`,a.snippetVerticalAlignment),KD(6),Uh(`templateCode`,a.snippetTextAlignment),KD(6),Uh(`templateCode`,a.snippetStriped),KD(6),Uh(`templateCode`,a.snippetCelled),KD(6),Uh(`templateCode`,a.snippetBasic),KD(6),Uh(`templateCode`,a.snippetCollapsingCell),KD(6),Uh(`templateCode`,a.snippetColumnWidth),KD(6),Uh(`templateCode`,a.snippetColumnCount),KD(6),Uh(`templateCode`,a.snippetCollapsing),KD(6),Uh(`templateCode`,a.snippetColored),KD(47),Uh(`templateCode`,a.snippetInverted),KD(6),Uh(`templateCode`,a.snippetSortable)(`componentCode`,a.snippetSortableTs),KD(11),Uh(`templateCode`,a.snippetFullWidth),KD(17),Uh(`templateCode`,a.snippetPadded),KD(6),Uh(`templateCode`,a.snippetCompact),KD(6),Uh(`templateCode`,a.snippetSize),KD(6),Uh(`templateCode`,a.snippetAttached)}}function gc(n,s){n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`sui-table`),Bu(),ss(3,`h4`,4),WC(4,`Properties`),Bu(),ss(5,`table`,9)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss(10,`th`),WC(11,`Description`),Bu(),ss(12,`th`),WC(13,`Type`),Bu(),ss(14,`th`),WC(15,`Default`),Bu()()(),ss(16,`tbody`)(17,`tr`)(18,`td`),WC(19,` suiBasic `),Bu(),ss(20,`td`),WC(21,` Reduce the complexity of the table. Allowed values are `),ss(22,`span`,7),WC(23,`'basic'`),Bu(),WC(24,` | `),ss(25,`span`,7),WC(26,`'very basic'`),Bu(),WC(27,` | `),ss(28,`span`,7),WC(29,`null`),Bu()(),ss(30,`td`)(31,`div`,10),WC(32,` string `),Bu()(),ss(33,`td`)(34,`div`,11),WC(35,` null `),Bu()()(),ss(36,`tr`)(37,`td`),WC(38,` suiWidth `),Bu(),ss(39,`td`),WC(40,` Divide the table into a number of equal columns. Allowed values are `),ss(41,`span`,7),WC(42,`'one'`),Bu(),WC(43,` through `),ss(44,`span`,7),WC(45,`'sixteen'`),Bu(),WC(46,` | `),ss(47,`span`,7),WC(48,`null`),Bu()(),ss(49,`td`)(50,`div`,10),WC(51,` string `),Bu()(),ss(52,`td`)(53,`div`,11),WC(54,` null `),Bu()()(),ss(55,`tr`)(56,`td`),WC(57,` suiColour `),Bu(),ss(58,`td`),WC(59,` Set the colour of the table. Allowed values are `),ss(60,`span`,7),WC(61,`'red'`),Bu(),WC(62,` | `),ss(63,`span`,7),WC(64,`'orange'`),Bu(),WC(65,` | `),ss(66,`span`,7),WC(67,`'yellow'`),Bu(),WC(68,` | `),ss(69,`span`,7),WC(70,`'olive'`),Bu(),WC(71,` | `),ss(72,`span`,7),WC(73,`'green'`),Bu(),WC(74,` | `),ss(75,`span`,7),WC(76,`'teal'`),Bu(),WC(77,` | `),ss(78,`span`,7),WC(79,`'blue'`),Bu(),WC(80,` | `),ss(81,`span`,7),WC(82,`'violet'`),Bu(),WC(83,` | `),ss(84,`span`,7),WC(85,`'purple'`),Bu(),WC(86,` | `),ss(87,`span`,7),WC(88,`'pink'`),Bu(),WC(89,` | `),ss(90,`span`,7),WC(91,`'brown'`),Bu(),WC(92,` | `),ss(93,`span`,7),WC(94,`'grey'`),Bu(),WC(95,` | `),ss(96,`span`,7),WC(97,`'black'`),Bu(),WC(98,` | `),ss(99,`span`,7),WC(100,`null`),Bu()(),ss(101,`td`)(102,`div`,10),WC(103,` string `),Bu()(),ss(104,`td`)(105,`div`,11),WC(106,` null `),Bu()()(),ss(107,`tr`)(108,`td`),WC(109,` suiPadded `),Bu(),ss(110,`td`),WC(111,` Increase the padding of the cells. Allowed values are `),ss(112,`span`,7),WC(113,`'padded'`),Bu(),WC(114,` | `),ss(115,`span`,7),WC(116,`'very padded'`),Bu(),WC(117,` | `),ss(118,`span`,7),WC(119,`null`),Bu()(),ss(120,`td`)(121,`div`,10),WC(122,` string `),Bu()(),ss(123,`td`)(124,`div`,11),WC(125,` null `),Bu()()(),ss(126,`tr`)(127,`td`),WC(128,` suiCompact `),Bu(),ss(129,`td`),WC(130,` Reduce the padding of the cells. Allowed values are `),ss(131,`span`,7),WC(132,`'compact'`),Bu(),WC(133,` | `),ss(134,`span`,7),WC(135,`'very compact'`),Bu(),WC(136,` | `),ss(137,`span`,7),WC(138,`null`),Bu()(),ss(139,`td`)(140,`div`,10),WC(141,` string `),Bu()(),ss(142,`td`)(143,`div`,11),WC(144,` null `),Bu()()(),ss(145,`tr`)(146,`td`),WC(147,` suiSize `),Bu(),ss(148,`td`),WC(149,` Set the size of the table. Allowed values are `),ss(150,`span`,7),WC(151,`'small'`),Bu(),WC(152,` | `),ss(153,`span`,7),WC(154,`'large'`),Bu(),WC(155,` | `),ss(156,`span`,7),WC(157,`null`),Bu()(),ss(158,`td`)(159,`div`,10),WC(160,` string `),Bu()(),ss(161,`td`)(162,`div`,11),WC(163,` null `),Bu()()(),ss(164,`tr`)(165,`td`),WC(166,` suiStacking `),Bu(),ss(167,`td`),WC(168,` Control how the table stacks responsively. Allowed values are `),ss(169,`span`,7),WC(170,`'unstackable'`),Bu(),WC(171,` | `),ss(172,`span`,7),WC(173,`'tablet stackable'`),Bu(),WC(174,` | `),ss(175,`span`,7),WC(176,`'mobile stackable'`),Bu(),WC(177,` | `),ss(178,`span`,7),WC(179,`'computer stackable'`),Bu(),WC(180,` | `),ss(181,`span`,7),WC(182,`'large screen stackable'`),Bu(),WC(183,` | `),ss(184,`span`,7),WC(185,`'tablet mobile stackable'`),Bu(),WC(186,` | `),ss(187,`span`,7),WC(188,`null`),Bu()(),ss(189,`td`)(190,`div`,10),WC(191,` string `),Bu()(),ss(192,`td`)(193,`div`,11),WC(194,` null `),Bu()()(),ss(195,`tr`)(196,`td`),WC(197,` suiAttached `),Bu(),ss(198,`td`),WC(199,` Attach the table to other content. Allowed values are `),ss(200,`span`,7),WC(201,`'top attached'`),Bu(),WC(202,` | `),ss(203,`span`,7),WC(204,`'attached'`),Bu(),WC(205,` | `),ss(206,`span`,7),WC(207,`'bottom attached'`),Bu(),WC(208,` | `),ss(209,`span`,7),WC(210,`null`),Bu()(),ss(211,`td`)(212,`div`,10),WC(213,` string `),Bu()(),ss(214,`td`)(215,`div`,11),WC(216,` null `),Bu()()(),ss(217,`tr`)(218,`td`),WC(219,` suiCelled `),Bu(),ss(220,`td`),WC(221,` Divide each row into separate cells `),Bu(),ss(222,`td`)(223,`div`,10),WC(224,` boolean `),Bu()(),ss(225,`td`)(226,`div`,11),WC(227,` false `),Bu()()(),ss(228,`tr`)(229,`td`),WC(230,` suiStriped `),Bu(),ss(231,`td`),WC(232,` Stripe alternate rows `),Bu(),ss(233,`td`)(234,`div`,10),WC(235,` boolean `),Bu()(),ss(236,`td`)(237,`div`,11),WC(238,` false `),Bu()()(),ss(239,`tr`)(240,`td`),WC(241,` suiDefinition `),Bu(),ss(242,`td`),WC(243,` Emphasize the first column `),Bu(),ss(244,`td`)(245,`div`,10),WC(246,` boolean `),Bu()(),ss(247,`td`)(248,`div`,11),WC(249,` false `),Bu()()(),ss(250,`tr`)(251,`td`),WC(252,` suiStructured `),Bu(),ss(253,`td`),WC(254,` Format the table for complex structured data `),Bu(),ss(255,`td`)(256,`div`,10),WC(257,` boolean `),Bu()(),ss(258,`td`)(259,`div`,11),WC(260,` false `),Bu()()(),ss(261,`tr`)(262,`td`),WC(263,` suiSingleLine `),Bu(),ss(264,`td`),WC(265,` Prevent cell contents from wrapping `),Bu(),ss(266,`td`)(267,`div`,10),WC(268,` boolean `),Bu()(),ss(269,`td`)(270,`div`,11),WC(271,` false `),Bu()()(),ss(272,`tr`)(273,`td`),WC(274,` suiFixed `),Bu(),ss(275,`td`),WC(276,` Use a fixed table layout `),Bu(),ss(277,`td`)(278,`div`,10),WC(279,` boolean `),Bu()(),ss(280,`td`)(281,`div`,11),WC(282,` false `),Bu()()(),ss(283,`tr`)(284,`td`),WC(285,` suiSelectable `),Bu(),ss(286,`td`),WC(287,` Make the rows appear selectable `),Bu(),ss(288,`td`)(289,`div`,10),WC(290,` boolean `),Bu()(),ss(291,`td`)(292,`div`,11),WC(293,` false `),Bu()()(),ss(294,`tr`)(295,`td`),WC(296,` suiSortable `),Bu(),ss(297,`td`),WC(298,` Format the headers as sortable `),Bu(),ss(299,`td`)(300,`div`,10),WC(301,` boolean `),Bu()(),ss(302,`td`)(303,`div`,11),WC(304,` false `),Bu()()(),ss(305,`tr`)(306,`td`),WC(307,` suiInverted `),Bu(),ss(308,`td`),WC(309,` Invert the colours of the table `),Bu(),ss(310,`td`)(311,`div`,10),WC(312,` boolean `),Bu()(),ss(313,`td`)(314,`div`,11),WC(315,` false `),Bu()()(),ss(316,`tr`)(317,`td`),WC(318,` suiCollapsing `),Bu(),ss(319,`td`),WC(320,` Only take up as much space as the rows need `),Bu(),ss(321,`td`)(322,`div`,10),WC(323,` boolean `),Bu()(),ss(324,`td`)(325,`div`,11),WC(326,` false `),Bu()()()()(),ss(327,`h2`,2),WC(328,`suiTableRow`),Bu(),ss(329,`h4`,4),WC(330,`Properties`),Bu(),ss(331,`table`,9)(332,`thead`)(333,`tr`)(334,`th`),WC(335,`Property`),Bu(),ss(336,`th`),WC(337,`Description`),Bu(),ss(338,`th`),WC(339,`Type`),Bu(),ss(340,`th`),WC(341,`Default`),Bu()()(),ss(342,`tbody`)(343,`tr`)(344,`td`),WC(345,` suiState `),Bu(),ss(346,`td`),WC(347,` Set the state of the row. Allowed values are `),ss(348,`span`,7),WC(349,`'positive'`),Bu(),WC(350,` | `),ss(351,`span`,7),WC(352,`'negative'`),Bu(),WC(353,` | `),ss(354,`span`,7),WC(355,`'warning'`),Bu(),WC(356,` | `),ss(357,`span`,7),WC(358,`'error'`),Bu(),WC(359,` | `),ss(360,`span`,7),WC(361,`null`),Bu()(),ss(362,`td`)(363,`div`,10),WC(364,` string `),Bu()(),ss(365,`td`)(366,`div`,11),WC(367,` null `),Bu()()(),ss(368,`tr`)(369,`td`),WC(370,` suiTextAlignment `),Bu(),ss(371,`td`),WC(372,` Set the text alignment of the row. Allowed values are `),ss(373,`span`,7),WC(374,`'left'`),Bu(),WC(375,` | `),ss(376,`span`,7),WC(377,`'center'`),Bu(),WC(378,` | `),ss(379,`span`,7),WC(380,`'right'`),Bu(),WC(381,` | `),ss(382,`span`,7),WC(383,`null`),Bu()(),ss(384,`td`)(385,`div`,10),WC(386,` string `),Bu()(),ss(387,`td`)(388,`div`,11),WC(389,` null `),Bu()()(),ss(390,`tr`)(391,`td`),WC(392,` suiVerticalAlignment `),Bu(),ss(393,`td`),WC(394,` Set the vertical alignment of the row. Allowed values are `),ss(395,`span`,7),WC(396,`'top'`),Bu(),WC(397,` | `),ss(398,`span`,7),WC(399,`'middle'`),Bu(),WC(400,` | `),ss(401,`span`,7),WC(402,`'bottom'`),Bu(),WC(403,` | `),ss(404,`span`,7),WC(405,`null`),Bu()(),ss(406,`td`)(407,`div`,10),WC(408,` string `),Bu()(),ss(409,`td`)(410,`div`,11),WC(411,` null `),Bu()()(),ss(412,`tr`)(413,`td`),WC(414,` suiActive `),Bu(),ss(415,`td`),WC(416,` Mark the row as active `),Bu(),ss(417,`td`)(418,`div`,10),WC(419,` boolean `),Bu()(),ss(420,`td`)(421,`div`,11),WC(422,` false `),Bu()()(),ss(423,`tr`)(424,`td`),WC(425,` disabled `),Bu(),ss(426,`td`),WC(427,` Disable the row `),Bu(),ss(428,`td`)(429,`div`,10),WC(430,` boolean `),Bu()(),ss(431,`td`)(432,`div`,11),WC(433,` false `),Bu()()()()(),ss(434,`h2`,2),WC(435,`suiTableHeaderCell`),Bu(),ss(436,`h4`,4),WC(437,`Properties`),Bu(),ss(438,`table`,9)(439,`thead`)(440,`tr`)(441,`th`),WC(442,`Property`),Bu(),ss(443,`th`),WC(444,`Description`),Bu(),ss(445,`th`),WC(446,`Type`),Bu(),ss(447,`th`),WC(448,`Default`),Bu()()(),ss(449,`tbody`)(450,`tr`)(451,`td`),WC(452,` suiWidth `),Bu(),ss(453,`td`),WC(454,` Set the width of the column. Allowed values are `),ss(455,`span`,7),WC(456,`'one'`),Bu(),WC(457,` through `),ss(458,`span`,7),WC(459,`'sixteen'`),Bu(),WC(460,` | `),ss(461,`span`,7),WC(462,`null`),Bu()(),ss(463,`td`)(464,`div`,10),WC(465,` string `),Bu()(),ss(466,`td`)(467,`div`,11),WC(468,` null `),Bu()()(),ss(469,`tr`)(470,`td`),WC(471,` suiTextAlignment `),Bu(),ss(472,`td`),WC(473,` Set the text alignment of the header. Allowed values are `),ss(474,`span`,7),WC(475,`'left'`),Bu(),WC(476,` | `),ss(477,`span`,7),WC(478,`'center'`),Bu(),WC(479,` | `),ss(480,`span`,7),WC(481,`'right'`),Bu(),WC(482,` | `),ss(483,`span`,7),WC(484,`null`),Bu()(),ss(485,`td`)(486,`div`,10),WC(487,` string `),Bu()(),ss(488,`td`)(489,`div`,11),WC(490,` null `),Bu()()(),ss(491,`tr`)(492,`td`),WC(493,` suiVerticalAlignment `),Bu(),ss(494,`td`),WC(495,` Set the vertical alignment of the header. Allowed values are `),ss(496,`span`,7),WC(497,`'top'`),Bu(),WC(498,` | `),ss(499,`span`,7),WC(500,`'middle'`),Bu(),WC(501,` | `),ss(502,`span`,7),WC(503,`'bottom'`),Bu(),WC(504,` | `),ss(505,`span`,7),WC(506,`null`),Bu()(),ss(507,`td`)(508,`div`,10),WC(509,` string `),Bu()(),ss(510,`td`)(511,`div`,11),WC(512,` null `),Bu()()(),ss(513,`tr`)(514,`td`),WC(515,` suiSorted `),Bu(),ss(516,`td`),WC(517,` Show the current sort direction. Allowed values are `),ss(518,`span`,7),WC(519,`'ascending'`),Bu(),WC(520,` | `),ss(521,`span`,7),WC(522,`'descending'`),Bu(),WC(523,` | `),ss(524,`span`,7),WC(525,`null`),Bu()(),ss(526,`td`)(527,`div`,10),WC(528,` string `),Bu()(),ss(529,`td`)(530,`div`,11),WC(531,` null `),Bu()()(),ss(532,`tr`)(533,`td`),WC(534,` suiSingleLine `),Bu(),ss(535,`td`),WC(536,` Prevent the header contents from wrapping `),Bu(),ss(537,`td`)(538,`div`,10),WC(539,` boolean `),Bu()(),ss(540,`td`)(541,`div`,11),WC(542,` false `),Bu()()(),ss(543,`tr`)(544,`td`),WC(545,` suiCollapsing `),Bu(),ss(546,`td`),WC(547,` Only take up as much space as the contents need `),Bu(),ss(548,`td`)(549,`div`,10),WC(550,` boolean `),Bu()(),ss(551,`td`)(552,`div`,11),WC(553,` false `),Bu()()()()(),ss(554,`h2`,2),WC(555,`suiTableCell`),Bu(),ss(556,`h4`,4),WC(557,`Properties`),Bu(),ss(558,`table`,9)(559,`thead`)(560,`tr`)(561,`th`),WC(562,`Property`),Bu(),ss(563,`th`),WC(564,`Description`),Bu(),ss(565,`th`),WC(566,`Type`),Bu(),ss(567,`th`),WC(568,`Default`),Bu()()(),ss(569,`tbody`)(570,`tr`)(571,`td`),WC(572,` suiState `),Bu(),ss(573,`td`),WC(574,` Set the state of the cell. Allowed values are `),ss(575,`span`,7),WC(576,`'positive'`),Bu(),WC(577,` | `),ss(578,`span`,7),WC(579,`'negative'`),Bu(),WC(580,` | `),ss(581,`span`,7),WC(582,`'warning'`),Bu(),WC(583,` | `),ss(584,`span`,7),WC(585,`'error'`),Bu(),WC(586,` | `),ss(587,`span`,7),WC(588,`null`),Bu()(),ss(589,`td`)(590,`div`,10),WC(591,` string `),Bu()(),ss(592,`td`)(593,`div`,11),WC(594,` null `),Bu()()(),ss(595,`tr`)(596,`td`),WC(597,` suiTextAlignment `),Bu(),ss(598,`td`),WC(599,` Set the text alignment of the cell. Allowed values are `),ss(600,`span`,7),WC(601,`'left'`),Bu(),WC(602,` | `),ss(603,`span`,7),WC(604,`'center'`),Bu(),WC(605,` | `),ss(606,`span`,7),WC(607,`'right'`),Bu(),WC(608,` | `),ss(609,`span`,7),WC(610,`null`),Bu()(),ss(611,`td`)(612,`div`,10),WC(613,` string `),Bu()(),ss(614,`td`)(615,`div`,11),WC(616,` null `),Bu()()(),ss(617,`tr`)(618,`td`),WC(619,` suiVerticalAlignment `),Bu(),ss(620,`td`),WC(621,` Set the vertical alignment of the cell. Allowed values are `),ss(622,`span`,7),WC(623,`'top'`),Bu(),WC(624,` | `),ss(625,`span`,7),WC(626,`'middle'`),Bu(),WC(627,` | `),ss(628,`span`,7),WC(629,`'bottom'`),Bu(),WC(630,` | `),ss(631,`span`,7),WC(632,`null`),Bu()(),ss(633,`td`)(634,`div`,10),WC(635,` string `),Bu()(),ss(636,`td`)(637,`div`,11),WC(638,` null `),Bu()()(),ss(639,`tr`)(640,`td`),WC(641,` suiActive `),Bu(),ss(642,`td`),WC(643,` Mark the cell as active `),Bu(),ss(644,`td`)(645,`div`,10),WC(646,` boolean `),Bu()(),ss(647,`td`)(648,`div`,11),WC(649,` false `),Bu()()(),ss(650,`tr`)(651,`td`),WC(652,` suiCollapsing `),Bu(),ss(653,`td`),WC(654,` Only take up as much space as the contents need `),Bu(),ss(655,`td`)(656,`div`,10),WC(657,` boolean `),Bu()(),ss(658,`td`)(659,`div`,11),WC(660,` false `),Bu()()(),ss(661,`tr`)(662,`td`),WC(663,` suiSelectable `),Bu(),ss(664,`td`),WC(665,` Make the cell selectable `),Bu(),ss(666,`td`)(667,`div`,10),WC(668,` boolean `),Bu()(),ss(669,`td`)(670,`div`,11),WC(671,` false `),Bu()()(),ss(672,`tr`)(673,`td`),WC(674,` suiSingleLine `),Bu(),ss(675,`td`),WC(676,` Prevent the cell contents from wrapping `),Bu(),ss(677,`td`)(678,`div`,10),WC(679,` boolean `),Bu()(),ss(680,`td`)(681,`div`,11),WC(682,` false `),Bu()()(),ss(683,`tr`)(684,`td`),WC(685,` disabled `),Bu(),ss(686,`td`),WC(687,` Disable the cell `),Bu(),ss(688,`td`)(689,`div`,10),WC(690,` boolean `),Bu()(),ss(691,`td`)(692,`div`,11),WC(693,` false `),Bu()()()()()())}var Ql=(()=>{class n{constructor(a){this.snippetTable=Oa,this.snippetDefinition=Ua,this.snippetStructured=ja,this.snippetPositiveNegative=Ya,this.snippetError=Xa,this.snippetWarning=$a,this.snippetActive=Ka,this.snippetDisabled=Qa,this.snippetSingleLine=Za,this.snippetFixed=el,this.snippetStacking=tl,this.snippetSelectableRow=il,this.snippetSelectableCell=nl,this.snippetVerticalAlignment=al,this.snippetTextAlignment=ll,this.snippetStriped=dl,this.snippetCelled=rl,this.snippetBasic=ml,this.snippetCollapsingCell=ol,this.snippetColumnWidth=sl,this.snippetColumnCount=cl,this.snippetCollapsing=pl,this.snippetColored=ul,this.snippetInverted=vl,this.snippetSortable=xl,this.snippetSortableTs=Sl,this.snippetFullWidth=hl,this.snippetPadded=fl,this.snippetCompact=El,this.snippetSize=gl,this.snippetAttached=bl,a.setTitle(`Table | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-table`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Table`,`subHeader`,`A table displays a collections of data grouped into rows`,`semanticUrl`,`https://semantic-ui.com/collections/table.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-message`,``,`suiState`,`info`],[`sui-label`,``],[3,`templateCode`,`componentCode`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(ss(0,`doc-page`,0),Ph(1,Ec,261,31,`div`,1)(2,gc,694,0,`div`,1),Bu()),l&2&&(KD(),Uh(`docPageContent`,`definition`),KD(),Uh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$2,Oi$2,Ws$1,li$1,U$1,fi$2,yl,Cl,Fl,Dl,Ml,_l,wl,Tl,Il,Al,kl,Bl,Gl,Nl,Wl,Rl,Pl,zl,Jl,Ll,Hl,Vl,ql,Ol,Ul,jl,Yl,Xl,$l,Kl],encapsulation:2,changeDetection:1})}}return n})();var Zl=`<div sui-message suiSize="small">
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
`;var B=class{constructor(){this.isDefinitionsActive=!0}};var xd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-std-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-message`,``,`suiSize`,`small`],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` Changes in Service `),Bu(),ss(3,`p`),WC(4,`We updated our privacy policy here to better service our customers. We recommend reviewing the changes.`),Bu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var Sd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-list-example`]],standalone:!1,features:[lo],decls:8,vars:0,consts:[[`sui-message`,``],[`suiMessageHeader`,``],[`suiMessageList`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` New Site Features `),Bu(),ss(3,`ul`,2)(4,`li`),WC(5,`You can now have cover images on blog pages`),Bu(),ss(6,`li`),WC(7,`Drafts will now auto-save while writing`),Bu()()())},dependencies:[li$1,ri$1,pi$2],encapsulation:2,changeDetection:1})}}return n})();var hd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-icon-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-message`,``,`suiIcon`,``],[`suiIconType`,`inbox`,`sui-icon`,``],[`suiMessageContent`,``],[`sui-header`,``]],template:function(l,d){l&1&&(ss(0,`div`,0),Gh(1,`i`,1),ss(2,`div`,2)(3,`div`,3),WC(4,` Have you heard about our mailing list? `),Bu(),ss(5,`p`),WC(6,`Get the best news in your e-mail every day.`),Bu()()())},dependencies:[we,Ws$1,li$1,ai$1],encapsulation:2,changeDetection:1})}}return n})();var fd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-icon2-example`]],standalone:!1,features:[lo],decls:7,vars:0,consts:[[`sui-message`,``,`suiIcon`,``],[`suiIconType`,`notched circle`,`suiLoading`,``,`sui-icon`,``],[`suiMessageContent`,``],[`sui-header`,``]],template:function(l,d){l&1&&(ss(0,`div`,0),Gh(1,`i`,1),ss(2,`div`,2)(3,`div`,3),WC(4,` Just one second `),Bu(),ss(5,`p`),WC(6,`We're fetching that content for you.`),Bu()()())},dependencies:[we,Ws$1,li$1,ai$1],encapsulation:2,changeDetection:1})}}return n})();var Ed=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-dissmisable-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-message`,``,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` Welcome back! `),Bu(),ss(3,`p`),WC(4,`This is a special notification which you can dismiss if you're bored with it.`),Bu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var gd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-hidden-example`]],standalone:!1,features:[lo],decls:3,vars:0,consts:[[`sui-message`,``,`suiHidden`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`p`),WC(2,`You can't see me`),Bu()())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var bd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-visible-example`]],standalone:!1,features:[lo],decls:3,vars:0,consts:[[`sui-message`,``,`suiVisible`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`p`),WC(2,`You can always see me`),Bu()())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var yd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-floating-example`]],standalone:!1,features:[lo],decls:3,vars:0,consts:[[`sui-message`,``,`suiFloating`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`p`),WC(2,`Way to go!`),Bu()())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var Cd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-compact-example`]],standalone:!1,features:[lo],decls:3,vars:0,consts:[[`sui-message`,``,`suiCompact`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`p`),WC(2,`Get all the best inventions in your e-mail every day. Sign up now!`),Bu()())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var Fd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-attached-example`]],standalone:!1,features:[lo],decls:36,vars:0,consts:[[`sui-message`,``,`suiAttached`,`attached`],[`sui-header`,``],[`sui-form`,``,1,`attached`,`fluid`,`segment`],[`suiFormFields`,``,1,`two`],[`suiFormField`,``],[`placeholder`,`First Name`,`type`,`text`],[`placeholder`,`Last Name`,`type`,`text`],[`placeholder`,`Username`,`type`,`text`],[`type`,`password`],[`suiFormField`,``,`suiInline`,``],[1,`ui`,`checkbox`],[`type`,`checkbox`,`id`,`terms`],[`for`,`terms`],[`sui-button`,``,`suiColour`,`blue`],[`sui-message`,``,`suiAttached`,`bottom attached`,`suiColour`,`warning`],[`suiIconType`,`help`,`sui-icon`,``],[`href`,`#`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` Welcome to our site! `),Bu(),ss(3,`p`),WC(4,`Fill out the form below to sign-up for a new account`),Bu()(),ss(5,`form`,2)(6,`div`,3)(7,`div`,4)(8,`label`),WC(9,`First Name`),Bu(),Gh(10,`input`,5),Bu(),ss(11,`div`,4)(12,`label`),WC(13,`Last Name`),Bu(),Gh(14,`input`,6),Bu()(),ss(15,`div`,4)(16,`label`),WC(17,`Username`),Bu(),Gh(18,`input`,7),Bu(),ss(19,`div`,4)(20,`label`),WC(21,`Password`),Bu(),Gh(22,`input`,8),Bu(),ss(23,`div`,9)(24,`div`,10),Gh(25,`input`,11),ss(26,`label`,12),WC(27,`I agree to the terms and conditions`),Bu()()(),ss(28,`div`,13),WC(29,`Submit`),Bu()(),ss(30,`div`,14),Gh(31,`i`,15),WC(32,` Already signed up? `),ss(33,`a`,16),WC(34,`Login here`),Bu(),WC(35,` instead.
`),Bu())},dependencies:[ci$1,ui$1,xe,Si$1,Oi$1,Ni$1,we,Ws$1,li$1,Ii$1],encapsulation:2,changeDetection:1})}}return n})();var Dd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-warning-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-message`,``,`suiColour`,`warning`,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` You must register before you can do that! `),Bu(),ss(3,`p`),WC(4,`Visit our registration page, then try again`),Bu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var Md=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-info-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-message`,``,`suiColour`,`info`,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` Was this what you wanted? `),Bu(),ss(3,`p`),WC(4,`It's good to see you again`),Bu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var _d=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-success-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-message`,``,`suiColour`,`positive`,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` You are eligible for a reward `),Bu(),ss(3,`p`),WC(4,`Go to your special offers page to see now`),Bu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var wd=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-error-example`]],standalone:!1,features:[lo],decls:5,vars:0,consts:[[`sui-message`,``,`suiColour`,`negative`,`suiDismissible`,``],[`suiMessageHeader`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`div`,1),WC(2,` We're sorry we can't apply that discount `),Bu(),ss(3,`p`),WC(4,`That offer has expired`),Bu()())},dependencies:[li$1,ri$1],encapsulation:2,changeDetection:1})}}return n})();var Td=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-coloured-example`]],standalone:!1,features:[lo],decls:24,vars:0,consts:[[`sui-message`,``,`suiColour`,`red`],[`sui-message`,``,`suiColour`,`orange`],[`sui-message`,``,`suiColour`,`yellow`],[`sui-message`,``,`suiColour`,`olive`],[`sui-message`,``,`suiColour`,`green`],[`sui-message`,``,`suiColour`,`teal`],[`sui-message`,``,`suiColour`,`blue`],[`sui-message`,``,`suiColour`,`violet`],[`sui-message`,``,`suiColour`,`purple`],[`sui-message`,``,`suiColour`,`pink`],[`sui-message`,``,`suiColour`,`brown`],[`sui-message`,``,`suiColour`,`black`]],template:function(l,d){l&1&&(ss(0,`div`,0),WC(1,`Red`),Bu(),ss(2,`div`,1),WC(3,`Orange`),Bu(),ss(4,`div`,2),WC(5,`Yellow`),Bu(),ss(6,`div`,3),WC(7,`Olive`),Bu(),ss(8,`div`,4),WC(9,`Green`),Bu(),ss(10,`div`,5),WC(11,`Teal`),Bu(),ss(12,`div`,6),WC(13,`Blue`),Bu(),ss(14,`div`,7),WC(15,`Violet`),Bu(),ss(16,`div`,8),WC(17,`Purple`),Bu(),ss(18,`div`,9),WC(19,`Pink`),Bu(),ss(20,`div`,10),WC(21,`Brown`),Bu(),ss(22,`div`,11),WC(23,`Black`),Bu())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();var Id=(()=>{class n extends B{static{this.ɵfac=(()=>{let a;return function(d){return(a||(a=no(n)))(d||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages-msg-sizes-example`]],standalone:!1,features:[lo],decls:14,vars:0,consts:[[`sui-message`,``,`suiSize`,`mini`],[`sui-message`,``,`suiSize`,`tiny`],[`sui-message`,``,`suiSize`,`small`],[`sui-message`,``,`suiSize`,`large`],[`sui-message`,``,`suiSize`,`big`],[`sui-message`,``,`suiSize`,`huge`],[`sui-message`,``,`suiSize`,`massive`]],template:function(l,d){l&1&&(ss(0,`div`,0),WC(1,`This is a mini message`),Bu(),ss(2,`div`,1),WC(3,`This is a tiny message`),Bu(),ss(4,`div`,2),WC(5,`This is a small message`),Bu(),ss(6,`div`,3),WC(7,`This is a large message`),Bu(),ss(8,`div`,4),WC(9,`This is a big message`),Bu(),ss(10,`div`,5),WC(11,`This is a huge message`),Bu(),ss(12,`div`,6),WC(13,`This is a massive message`),Bu())},dependencies:[li$1],encapsulation:2,changeDetection:1})}}return n})();function Pc(n,s){n&1&&Gh(0,`doc-messages-msg-std-example`)}function zc(n,s){n&1&&Gh(0,`doc-messages-msg-list-example`)}function Jc(n,s){n&1&&Gh(0,`doc-messages-msg-icon-example`)}function Lc(n,s){n&1&&Gh(0,`doc-messages-msg-icon2-example`)}function Hc(n,s){n&1&&Gh(0,`doc-messages-msg-dissmisable-example`)}function Vc(n,s){n&1&&Gh(0,`doc-messages-msg-hidden-example`)}function qc(n,s){n&1&&Gh(0,`doc-messages-msg-visible-example`)}function Oc(n,s){n&1&&Gh(0,`doc-messages-msg-floating-example`)}function Uc(n,s){n&1&&Gh(0,`doc-messages-msg-compact-example`)}function jc(n,s){n&1&&Gh(0,`doc-messages-msg-attached-example`)}function Yc(n,s){n&1&&Gh(0,`doc-messages-msg-warning-example`)}function Xc(n,s){n&1&&Gh(0,`doc-messages-msg-info-example`)}function $c(n,s){n&1&&Gh(0,`doc-messages-msg-success-example`)}function Kc(n,s){n&1&&Gh(0,`doc-messages-msg-error-example`)}function Qc(n,s){n&1&&Gh(0,`doc-messages-msg-coloured-example`)}function Zc(n,s){n&1&&Gh(0,`doc-messages-msg-sizes-example`)}function ep(n,s){if(n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Message`),Bu(),ss(6,`p`),WC(7,`A basic message`),Bu(),Ph(8,Pc,1,0,`ng-template`,5),Bu(),ss(9,`doc-code-sample`,3)(10,`h3`,4),WC(11,`List Message`),Bu(),ss(12,`p`),WC(13,`A message with a list`),Bu(),Ph(14,zc,1,0,`ng-template`,5),Bu(),ss(15,`doc-code-sample`,3)(16,`h3`,4),WC(17,`Icon Message`),Bu(),ss(18,`p`),WC(19,`A message can contain an icon`),Bu(),Ph(20,Jc,1,0,`ng-template`,5),Bu(),ss(21,`doc-code-sample`,3),Ph(22,Lc,1,0,`ng-template`,5),Bu(),ss(23,`doc-code-sample`,3)(24,`h3`,4),WC(25,`Dissmissable Block`),Bu(),ss(26,`p`),WC(27,`A message that the user can choose to hide`),Bu(),Ph(28,Hc,1,0,`ng-template`,5),Bu(),ss(29,`h2`,2),WC(30,`States`),Bu(),ss(31,`doc-code-sample`,3)(32,`h3`,4),WC(33,`Hidden`),Bu(),ss(34,`p`),WC(35,`A message can be hidden`),Bu(),Ph(36,Vc,1,0,`ng-template`,5),Bu(),ss(37,`doc-code-sample`,3)(38,`h3`,4),WC(39,`Visible`),Bu(),ss(40,`p`),WC(41,`A message can be set to visible to force itself to be shown`),Bu(),Ph(42,qc,1,0,`ng-template`,5),Bu(),ss(43,`h2`,2),WC(44,`Variations`),Bu(),Gh(45,`br`),ss(46,`doc-code-sample`,3)(47,`h3`,4),WC(48,`Floating`),Bu(),ss(49,`p`),WC(50,`A message can float above content that it is related to`),Bu(),Ph(51,Oc,1,0,`ng-template`,5),Bu(),ss(52,`doc-code-sample`,3)(53,`h3`,4),WC(54,`Compact`),Bu(),ss(55,`p`),WC(56,`A message can only take up the width of its content`),Bu(),Ph(57,Uc,1,0,`ng-template`,5),Bu(),ss(58,`doc-code-sample`,3)(59,`h3`,4),WC(60,`Attached`),Bu(),ss(61,`p`),WC(62,`A message can be formatted to attach itself to other content`),Bu(),Ph(63,jc,1,0,`ng-template`,5),Bu(),ss(64,`doc-code-sample`,3)(65,`h3`,4),WC(66,`Warning`),Bu(),ss(67,`p`),WC(68,`A message may be formatted to display warning messages.`),Bu(),Ph(69,Yc,1,0,`ng-template`,5),Bu(),ss(70,`doc-code-sample`,3)(71,`h3`,4),WC(72,`Info`),Bu(),ss(73,`p`),WC(74,`A message may be formatted to display information`),Bu(),Ph(75,Xc,1,0,`ng-template`,5),Bu(),ss(76,`doc-code-sample`,3)(77,`h3`,4),WC(78,`Positive/Success`),Bu(),ss(79,`p`),WC(80,`A message may be formatted to display a positive message`),Bu(),Ph(81,$c,1,0,`ng-template`,5),Bu(),ss(82,`doc-code-sample`,3)(83,`h3`,4),WC(84,`Negative/Error`),Bu(),ss(85,`p`),WC(86,`A message may be formatted to display a negative message`),Bu(),Ph(87,Kc,1,0,`ng-template`,5),Bu(),ss(88,`doc-code-sample`,3)(89,`h3`,4),WC(90,`Coloured`),Bu(),ss(91,`p`),WC(92,`A message can be formatted to be different colours`),Bu(),Ph(93,Qc,1,0,`ng-template`,5),Bu(),ss(94,`doc-code-sample`,3)(95,`h3`,4),WC(96,`Size`),Bu(),ss(97,`p`),WC(98,`A message can have different sizes`),Bu(),Ph(99,Zc,1,0,`ng-template`,5),Bu()()),n&2){let a=hC();KD(3),Uh(`templateCode`,a.snippetBasic),KD(6),Uh(`templateCode`,a.snippetList),KD(6),Uh(`templateCode`,a.snippetIcon1),KD(6),Uh(`templateCode`,a.snippetIcon2),KD(2),Uh(`templateCode`,a.snippetDismissable),KD(8),Uh(`templateCode`,a.snippetHidden),KD(6),Uh(`templateCode`,a.snippetVisible),KD(9),Uh(`templateCode`,a.snippetFloating),KD(6),Uh(`templateCode`,a.snippetCompact),KD(6),Uh(`templateCode`,a.snippetAttached),KD(6),Uh(`templateCode`,a.snippettWarning),KD(6),Uh(`templateCode`,a.snippetInfo),KD(6),Uh(`templateCode`,a.snippetSuccess),KD(6),Uh(`templateCode`,a.snippetError),KD(6),Uh(`templateCode`,a.snippetColoured),KD(6),Uh(`templateCode`,a.snippetSizes)}}function tp(n,s){n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`sui-message`),Bu(),ss(3,`h4`,4),WC(4,`Properties`),Bu(),ss(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss(10,`th`),WC(11,`Description`),Bu(),ss(12,`th`),WC(13,`Type`),Bu(),ss(14,`th`),WC(15,`Default`),Bu()()(),ss(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiAttached`),Bu(),ss(20,`td`),WC(21,` Attach a message to other content. Allowed values could be `),ss(22,`span`,7),WC(23,`attached`),Bu(),WC(24,` | `),ss(25,`span`,7),WC(26,`bottom attached`),Bu(),WC(27,` | `),ss(28,`span`,7),WC(29,`null`),Bu()(),ss(30,`td`)(31,`div`,8),WC(32,` string `),Bu()(),ss(33,`td`)(34,`div`,9),WC(35,` null `),Bu()()(),ss(36,`tr`)(37,`td`),WC(38,`suiColour`),Bu(),ss(39,`td`),WC(40,`Set the message colour. Allowed values could be `),ss(41,`span`,7),WC(42,`'red'`),Bu(),WC(43,` | `),ss(44,`span`,7),WC(45,`'orange'`),Bu(),WC(46,` | `),ss(47,`span`,7),WC(48,`'yellow'`),Bu(),WC(49,` | `),ss(50,`span`,7),WC(51,`'olive'`),Bu(),WC(52,` | `),ss(53,`span`,7),WC(54,`'green'`),Bu(),WC(55,` | `),ss(56,`span`,7),WC(57,`'teal'`),Bu(),WC(58,` | `),ss(59,`span`,7),WC(60,`'blue'`),Bu(),WC(61,` | `),ss(62,`span`,7),WC(63,`'violet'`),Bu(),WC(64,` | `),ss(65,`span`,7),WC(66,`'purple'`),Bu(),WC(67,` | `),ss(68,`span`,7),WC(69,`'pink'`),Bu(),WC(70,` | `),ss(71,`span`,7),WC(72,`'brown'`),Bu(),WC(73,` | `),ss(74,`span`,7),WC(75,`'grey'`),Bu(),WC(76,` | `),ss(77,`span`,7),WC(78,`'black'`),Bu(),WC(79,` | `),ss(80,`span`,7),WC(81,`null`),Bu()(),ss(82,`td`)(83,`div`,8),WC(84,` string `),Bu()(),ss(85,`td`)(86,`div`,9),WC(87,` null `),Bu()()(),ss(88,`tr`)(89,`td`),WC(90,`suiState`),Bu(),ss(91,`td`),WC(92,`Set a message to either visible or hidden states.`),Bu(),ss(93,`td`)(94,`div`,8),WC(95,` string `),Bu()(),ss(96,`td`)(97,`div`,9),WC(98,` null `),Bu()()(),ss(99,`tr`)(100,`td`),WC(101,`suiSize`),Bu(),ss(102,`td`),WC(103,`Set the breadcrumb size. Allowed values could be `),ss(104,`span`,7),WC(105,`mini`),Bu(),WC(106,` | `),ss(107,`span`,7),WC(108,`tiny`),Bu(),WC(109,` | `),ss(110,`span`,7),WC(111,`small`),Bu(),WC(112,` | `),ss(113,`span`,7),WC(114,`medium`),Bu(),WC(115,` | `),ss(116,`span`,7),WC(117,`big`),Bu(),WC(118,` | `),ss(119,`span`,7),WC(120,`huge`),Bu(),WC(121,` | `),ss(122,`span`,7),WC(123,`massive`),Bu(),WC(124,` | `),ss(125,`span`,7),WC(126,`null`),Bu()(),ss(127,`td`)(128,`div`,8),WC(129,` string `),Bu()(),ss(130,`td`)(131,`div`,9),WC(132,` null `),Bu()()(),ss(133,`tr`)(134,`td`),WC(135,`suiDismissable`),Bu(),ss(136,`td`),WC(137,` Determine whether or not a message can be dismissed `),Bu(),ss(138,`td`)(139,`div`,8),WC(140,` boolean `),Bu()(),ss(141,`td`)(142,`div`,9),WC(143,` false `),Bu()()(),ss(144,`tr`)(145,`td`),WC(146,`suiIcon`),Bu(),ss(147,`td`),WC(148,` Determine whether or not a message can contain an icon `),Bu(),ss(149,`td`)(150,`div`,8),WC(151,` boolean `),Bu()(),ss(152,`td`)(153,`div`,9),WC(154,` false `),Bu()()(),ss(155,`tr`)(156,`td`),WC(157,`suiHidden`),Bu(),ss(158,`td`),WC(159,` Prevent a message from displaying. `),Bu(),ss(160,`td`)(161,`div`,8),WC(162,` boolean `),Bu()(),ss(163,`td`)(164,`div`,9),WC(165,` false `),Bu()()(),ss(166,`tr`)(167,`td`),WC(168,`suiVisible`),Bu(),ss(169,`td`),WC(170,` Present the message to the display `),Bu(),ss(171,`td`)(172,`div`,8),WC(173,` boolean `),Bu()(),ss(174,`td`)(175,`div`,9),WC(176,` false `),Bu()()(),ss(177,`tr`)(178,`td`),WC(179,`suiFloating`),Bu(),ss(180,`td`),WC(181,` Determine whether or not a message will float over the content it is related to `),Bu(),ss(182,`td`)(183,`div`,8),WC(184,` boolean `),Bu()(),ss(185,`td`)(186,`div`,9),WC(187,` false `),Bu()()(),ss(188,`tr`)(189,`td`),WC(190,`suiCompact`),Bu(),ss(191,`td`),WC(192,` Setup the message to take up just as much space as its content `),Bu(),ss(193,`td`)(194,`div`,8),WC(195,` boolean `),Bu()(),ss(196,`td`)(197,`div`,9),WC(198,` false `),Bu()()()()(),Gh(199,`br`),ss(200,`h2`,2),WC(201,`suiMessageHeader`),Bu(),ss(202,`h4`,4),WC(203,`Properties`),Bu(),ss(204,`table`,6)(205,`thead`)(206,`tr`)(207,`th`),WC(208,`Property`),Bu(),ss(209,`th`),WC(210,`Description`),Bu(),ss(211,`th`),WC(212,`Type`),Bu(),ss(213,`th`),WC(214,`Default`),Bu()()(),Gh(215,`tbody`),ss(216,`tfoot`,10)(217,`tr`)(218,`th`,11)(219,`div`,12),WC(220,`No properties for this directive`),Bu()()()()(),Gh(221,`br`),ss(222,`h2`,2),WC(223,`suiMessageContent`),Bu(),ss(224,`h4`,4),WC(225,`Properties`),Bu(),ss(226,`table`,6)(227,`thead`)(228,`tr`)(229,`th`),WC(230,`Property`),Bu(),ss(231,`th`),WC(232,`Description`),Bu(),ss(233,`th`),WC(234,`Type`),Bu(),ss(235,`th`),WC(236,`Default`),Bu()()(),Gh(237,`tbody`),ss(238,`tfoot`,10)(239,`tr`)(240,`th`,11)(241,`div`,12),WC(242,`No properties for this directive`),Bu()()()()(),Gh(243,`br`),ss(244,`h2`,2),WC(245,`suiMessageList`),Bu(),ss(246,`h4`,4),WC(247,`Properties`),Bu(),ss(248,`table`,6)(249,`thead`)(250,`tr`)(251,`th`),WC(252,`Property`),Bu(),ss(253,`th`),WC(254,`Description`),Bu(),ss(255,`th`),WC(256,`Type`),Bu(),ss(257,`th`),WC(258,`Default`),Bu()()(),Gh(259,`tbody`),ss(260,`tfoot`,10)(261,`tr`)(262,`th`,11)(263,`div`,12),WC(264,`No properties for this directive`),Bu()()()()()())}var Ad=(()=>{class n{constructor(a){this.snippetBasic=Zl,this.snippetList=ed,this.snippetIcon1=td,this.snippetIcon2=id,this.snippetDismissable=nd,this.snippetHidden=ad,this.snippetVisible=ld,this.snippetFloating=dd,this.snippetCompact=rd,this.snippetAttached=md,this.snippettWarning=od,this.snippetInfo=sd,this.snippetSuccess=cd,this.snippetError=pd,this.snippetColoured=ud,this.snippetSizes=vd,this.isDefinitionsActive=!0,a.setTitle(`Message | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-messages`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Message`,`subHeader`,`A message displays information that explains nearby content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`],[1,`full-width`],[`colspan`,`4`],[2,`text-align`,`center`]],template:function(l,d){l&1&&(ss(0,`doc-page`,0),Ph(1,ep,100,16,`div`,1)(2,tp,265,0,`div`,1),Bu()),l&2&&(KD(),Uh(`docPageContent`,`definition`),KD(),Uh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$2,Oi$2,Ws$1,U$1,fi$2,xd,Sd,hd,fd,Ed,gd,bd,yd,Cd,Fd,Dd,Md,_d,wd,Td,Id],styles:[`div[_ngcontent-%COMP%]   [class*="right floated"][_ngcontent-%COMP%]{float:right;margin-right:.25em}`],changeDetection:1})}}return n})();var kd=`<div sui-breadcrumb>
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
`;var N=(()=>{class n extends On$1{constructor(){let a=g$1(Ie);super(a),this.suiIcon=``}get classes(){return[this.getIcon(),`divider`].join(` `)}getIcon(){return this.suiIcon?`${this.suiIcon} icon`:this.suiIcon}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiBreadcrumbDivider`,``]],inputs:{suiIcon:`suiIcon`},exportAs:[`suiBreadcrumbDivider`],features:[lo]})}}return n})();var W=(()=>{class n extends On$1{constructor(){let a=g$1(Ie);super(a),this.suiActive=!1}get classes(){return[this.getActive(),`section`].join(` `)}getActive(){return this.suiActive?`active`:``}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiBreadcrumbSection`,``]],inputs:{suiActive:`suiActive`},exportAs:[`suiBreadcrumbSection`],features:[lo]})}}return dS([ve()],n.prototype,`suiActive`,void 0),n})();var R=(()=>{class n extends On$1{constructor(){let a=g$1(Ie);super(a),this.suiSize=null}get classes(){return[`ui`,this.suiSize,`breadcrumb`].join(` `)}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`sui-breadcrumb`,``]],inputs:{suiSize:`suiSize`},exportAs:[`suiBreadcrumb`],features:[lo]})}}return n})();var Ud=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[sl$1]})}}return n})();var jd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-std-example`]],standalone:!1,decls:11,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),ss(3,`div`,2),WC(4,` /`),Bu(),ss(5,`a`,1),WC(6,`Store`),Bu(),ss(7,`div`,2),WC(8,` /`),Bu(),ss(9,`div`,3),WC(10,`T-Shirt`),Bu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Yd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-std1-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiIcon`,`right angle`,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Store`),Bu(),Gh(6,`i`,2),ss(7,`div`,3),WC(8,`T-Shirt`),Bu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Xd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-content-example`]],standalone:!1,decls:11,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),ss(3,`div`,2),WC(4,` /`),Bu(),ss(5,`a`,1),WC(6,`Registration`),Bu(),ss(7,`div`,2),WC(8,` /`),Bu(),ss(9,`div`,3),WC(10,`Personal Information`),Bu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var $d=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-content1-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Registration`),Bu(),Gh(6,`i`,3),ss(7,`div`,4),WC(8,`Personal Information`),Bu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Kd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-section-example`]],standalone:!1,decls:7,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`span`,1),WC(2,`Home`),Bu(),ss(3,`div`,2),WC(4,` /`),Bu(),ss(5,`div`,3),WC(6,`Search`),Bu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Qd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-link-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``],[`href`,`#`]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),ss(3,`div`,2),WC(4,` /`),Bu(),ss(5,`div`,3),WC(6,`Search for: `),ss(7,`a`,4),WC(8,`paper towels`),Bu()()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var Zd=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-active-example`]],standalone:!1,decls:7,vars:0,consts:[[`sui-breadcrumb`,``],[`suiBreadcrumbSection`,``],[`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Products`),Bu(),ss(3,`div`,2),WC(4,` /`),Bu(),ss(5,`div`,3),WC(6,`Paper Towels`),Bu()())},dependencies:[N,W,R],encapsulation:2,changeDetection:1})}}return n})();var er=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`mini`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Registration`),Bu(),Gh(6,`i`,3),ss(7,`div`,4),WC(8,`Personal Information`),Bu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var tr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size1-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`tiny`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Registration`),Bu(),Gh(6,`i`,3),ss(7,`div`,4),WC(8,`Personal Information`),Bu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var ir=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size2-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`small`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Registration`),Bu(),Gh(6,`i`,3),ss(7,`div`,4),WC(8,`Personal Information`),Bu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var nr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size3-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`large`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Registration`),Bu(),Gh(6,`i`,3),ss(7,`div`,4),WC(8,`Personal Information`),Bu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var ar=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size4-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`big`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Registration`),Bu(),Gh(6,`i`,3),ss(7,`div`,4),WC(8,`Personal Information`),Bu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var lr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size5-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`huge`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Registration`),Bu(),Gh(6,`i`,3),ss(7,`div`,4),WC(8,`Personal Information`),Bu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();var dr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb-breadcrumb-size6-example`]],standalone:!1,decls:9,vars:0,consts:[[`sui-breadcrumb`,``,`suiSize`,`massive`],[`suiBreadcrumbSection`,``],[`suiIcon`,`right chevron`,`suiBreadcrumbDivider`,``],[`suiIconType`,`right arrow`,`sui-icon`,``,`suiBreadcrumbDivider`,``],[`suiBreadcrumbSection`,``,`suiActive`,``]],template:function(l,d){l&1&&(ss(0,`div`,0)(1,`a`,1),WC(2,`Home`),Bu(),Gh(3,`i`,2),ss(4,`a`,1),WC(5,`Registration`),Bu(),Gh(6,`i`,3),ss(7,`div`,4),WC(8,`Personal Information`),Bu()())},dependencies:[we,N,W,R],encapsulation:2,changeDetection:1})}}return n})();function fp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-std-example`)}function Ep(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-std1-example`)}function gp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-content-example`)}function bp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-content1-example`)}function yp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-section-example`)}function Cp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-link-example`)}function Fp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-active-example`)}function Dp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-size-example`)}function Mp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-size1-example`)}function _p(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-size2-example`)}function wp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-size3-example`)}function Tp(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-size4-example`)}function Ip(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-size5-example`)}function Ap(n,s){n&1&&Gh(0,`doc-breadcrumb-breadcrumb-size6-example`)}function kp(n,s){if(n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`Types`),Bu(),ss(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Breadcrumb`),Bu(),ss(6,`p`),WC(7,`A standard breadcrumb`),Bu(),Ph(8,fp,1,0,`ng-template`,5),Bu(),ss(9,`doc-code-sample`,3),Ph(10,Ep,1,0,`ng-template`,5),Bu(),Gh(11,`br`),ss(12,`h2`,2),WC(13,`Content`),Bu(),ss(14,`doc-code-sample`,3)(15,`h3`,4),WC(16,`Divider`),Bu(),ss(17,`p`),WC(18,`A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text`),Bu(),Ph(19,gp,1,0,`ng-template`,5),Bu(),ss(20,`doc-code-sample`,3),Ph(21,bp,1,0,`ng-template`,5),Bu(),ss(22,`doc-code-sample`,3)(23,`h3`,4),WC(24,`Section`),Bu(),ss(25,`p`),WC(26,`A breadcrumb can contain sections that can either be formatted as a link or text`),Bu(),Ph(27,yp,1,0,`ng-template`,5),Bu(),ss(28,`doc-code-sample`,3)(29,`h3`,4),WC(30,`Link`),Bu(),ss(31,`p`),WC(32,`A section may be linkable or contain a link`),Bu(),Ph(33,Cp,1,0,`ng-template`,5),Bu(),Gh(34,`br`),ss(35,`h2`,2),WC(36,`States`),Bu(),ss(37,`doc-code-sample`,3)(38,`h3`,4),WC(39,`Active`),Bu(),ss(40,`p`),WC(41,`A section can be active`),Bu(),Ph(42,Fp,1,0,`ng-template`,5),Bu(),Gh(43,`br`),ss(44,`h2`,2),WC(45,`Variations`),Bu(),ss(46,`doc-code-sample`,3)(47,`h3`,4),WC(48,`Size`),Bu(),ss(49,`p`),WC(50,`A breadcrumb can vary in size`),Bu(),Ph(51,Dp,1,0,`ng-template`,5),Bu(),ss(52,`doc-code-sample`,3),Ph(53,Mp,1,0,`ng-template`,5),Bu(),ss(54,`doc-code-sample`,3),Ph(55,_p,1,0,`ng-template`,5),Bu(),ss(56,`doc-code-sample`,3),Ph(57,wp,1,0,`ng-template`,5),Bu(),ss(58,`doc-code-sample`,3),Ph(59,Tp,1,0,`ng-template`,5),Bu(),ss(60,`doc-code-sample`,3),Ph(61,Ip,1,0,`ng-template`,5),Bu(),ss(62,`doc-code-sample`,3),Ph(63,Ap,1,0,`ng-template`,5),Bu()()),n&2){let a=hC();KD(3),Uh(`templateCode`,a.snippetStd),KD(6),Uh(`templateCode`,a.snippetStd1),KD(5),Uh(`templateCode`,a.snippetContent1),KD(6),Uh(`templateCode`,a.snippetContent2),KD(2),Uh(`templateCode`,a.snippetSection),KD(6),Uh(`templateCode`,a.snippetLink),KD(9),Uh(`templateCode`,a.snippetActive),KD(9),Uh(`templateCode`,a.snippetSize),KD(6),Uh(`templateCode`,a.snippetSize1),KD(2),Uh(`templateCode`,a.snippetSize2),KD(2),Uh(`templateCode`,a.snippetSize3),KD(2),Uh(`templateCode`,a.snippetSize4),KD(2),Uh(`templateCode`,a.snippetSize5),KD(2),Uh(`templateCode`,a.snippetSize6)}}function Bp(n,s){n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`sui-breadcrumb`),Bu(),ss(3,`h4`,4),WC(4,`Properties`),Bu(),ss(5,`table`,6)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss(10,`th`),WC(11,`Description`),Bu(),ss(12,`th`),WC(13,`Type`),Bu(),ss(14,`th`),WC(15,`Default`),Bu()()(),ss(16,`tbody`)(17,`tr`)(18,`td`),WC(19,`suiSize`),Bu(),ss(20,`td`),WC(21,`Set the breadcrumb size. Allowed values could be `),ss(22,`span`,7),WC(23,`mini`),Bu(),WC(24,` | `),ss(25,`span`,7),WC(26,`tiny`),Bu(),WC(27,` | `),ss(28,`span`,7),WC(29,`small`),Bu(),WC(30,` | `),ss(31,`span`,7),WC(32,`medium`),Bu(),WC(33,` | `),ss(34,`span`,7),WC(35,`big`),Bu(),WC(36,` | `),ss(37,`span`,7),WC(38,`huge`),Bu(),WC(39,` | `),ss(40,`span`,7),WC(41,`massive`),Bu(),WC(42,` | `),ss(43,`span`,7),WC(44,`null`),Bu()(),ss(45,`td`)(46,`div`,8),WC(47,` string `),Bu()(),ss(48,`td`)(49,`div`,9),WC(50,` null `),Bu()()()()(),Gh(51,`br`),ss(52,`h2`,2),WC(53,`suiBreadcrumbDivider`),Bu(),ss(54,`h4`,4),WC(55,`Properties`),Bu(),ss(56,`table`,6)(57,`thead`)(58,`tr`)(59,`th`),WC(60,`Property`),Bu(),ss(61,`th`),WC(62,`Description`),Bu(),ss(63,`th`),WC(64,`Type`),Bu(),ss(65,`th`),WC(66,`Default`),Bu()()(),ss(67,`tbody`)(68,`tr`)(69,`td`),WC(70,`suiIcon`),Bu(),ss(71,`td`),WC(72,` Determine the icon to be used as the divider `),Bu(),ss(73,`td`)(74,`div`,8),WC(75,` string `),Bu()(),ss(76,`td`)(77,`div`,9),WC(78,` '' `),Bu()()()()(),Gh(79,`br`),ss(80,`h2`,2),WC(81,`suiBreadcrumbSection`),Bu(),ss(82,`h4`,4),WC(83,`Properties`),Bu(),ss(84,`table`,6)(85,`thead`)(86,`tr`)(87,`th`),WC(88,`Property`),Bu(),ss(89,`th`),WC(90,`Description`),Bu(),ss(91,`th`),WC(92,`Type`),Bu(),ss(93,`th`),WC(94,`Default`),Bu()()(),ss(95,`tbody`)(96,`tr`)(97,`td`),WC(98,`suiActive`),Bu(),ss(99,`td`),WC(100,` Determine whether or not the breadcrumb section is active `),Bu(),ss(101,`td`)(102,`div`,8),WC(103,` boolean `),Bu()(),ss(104,`td`)(105,`div`,9),WC(106,` false `),Bu()()()()()())}var rr=(()=>{class n{constructor(a){this.snippetStd=kd,this.snippetStd1=Bd,this.snippetContent1=Gd,this.snippetContent2=Nd,this.snippetSection=Wd,this.snippetLink=Rd,this.snippetActive=Pd,this.snippetSize=zd,this.snippetSize1=Jd,this.snippetSize2=Ld,this.snippetSize3=Hd,this.snippetSize4=Vd,this.snippetSize5=qd,this.snippetSize6=Od,a.setTitle(`Breadcrumb | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-breadcrumb`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Breadcrumb`,`subHeader`,`A breadcrumb is used to show hierarchy between content`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`],[`sui-header`,``],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,d){l&1&&(ss(0,`doc-page`,0),Ph(1,kp,64,14,`div`,1)(2,Bp,107,0,`div`,1),Bu()),l&2&&(KD(),Uh(`docPageContent`,`definition`),KD(),Uh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$2,Oi$2,Ws$1,U$1,fi$2,jd,Yd,Xd,$d,Kd,Qd,Zd,er,tr,ir,nr,ar,lr,dr],encapsulation:2,changeDetection:1})}}return n})();var Gp=[{path:`messages`,component:Ad},{path:`breadcrumb`,component:rr},{path:`grid`,component:fn},{path:`form`,component:Fi},{path:`menu`,component:qa},{path:`table`,component:Ql}];var mr=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[Is$1.forChild(Gp),Is$1]})}}return n})();var s2=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[sl$1,Pe,Kr$1,Ri$1,Bt$1,Ks$1,ci$2,mr,Ud,K,gi$1,U,bi$1,bi$2,pi$1,yi$1,At$1,He,We]})}}return n})();export{s2 as CollectionsModule};