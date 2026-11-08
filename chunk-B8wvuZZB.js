import{_ as ui$1,b as xe,c as Te,d as ci$1,f as ct$1,g as li$1,h as hi$1,i as Oi,m as he,n as En$1,o as Ri,p as fi$1,r as Ni,s as Si$1,v as wi,y as wt$1}from"./chunk-DIbEhThR.js";import{A as ze,D as wr,G as Ks,M as B,O as yi$1,P as z,T as vr,U as Is,X as ve,Y as Ws,_ as fi$2,a as Dr,d as Ri$1,h as bi$1,s as Kr,t as At$1,u as Oi$1,v as gi$1,w as vi$1,x as mi$1}from"./main-D6LCLMRS.js";import{a as K,c as bi$2,l as ci$2,o as U,r as Ii,t as Di,u as li$2}from"./chunk-CnOM7_1X.js";import{Bn as rw,D as Gh,Dn as nt$1,E as G$1,En as no,F as Jw,Gn as ss,Gt as eC,Hn as sC,I as KD,Kt as ea$1,M as IC,N as Ie,Rn as rC,Rt as bt$1,St as Y,Ut as dS,Wn as sl,X as Ph,Xt as ew,Zt as fC,an as hC,cn as hg,dn as ig,dt as Uh,fn as iw,ht as WC,it as RI,kn as oC,l as BE,m as Cn$1,mn as jd,mr as yn,nn as gg,nt as Qh,p as Ce,pt as Ve,q as Pd,r as $h,rt as Qw,sn as he$1,t as $E,tn as g,u as Bu,un as iC,vn as lo,wn as nC,yn as ly,yr as zu,zt as cV}from"./chunk-BCndbQi5.js";var nt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <h4 sui-header
      suiDividing>Tell Us About Yourself</h4>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="rules-name">Name</label>
      <input id="rules-name"
             name="name"
             type="text"
             placeholder="Name">
    </div>
    <div suiFormField>
      <label for="rules-gender">Gender</label>
      <select id="rules-gender"
              name="gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  </div>
  <div suiFormField>
    <label for="rules-username">Username</label>
    <input id="rules-username"
           name="username"
           type="text"
           placeholder="Username">
  </div>
  <div suiFormField>
    <label for="rules-password">Password</label>
    <input id="rules-password"
           name="password"
           type="password"
           placeholder="Password">
  </div>
  <div suiFormField>
    <label for="rules-skills">Skills</label>
    <select id="rules-skills"
            name="skills"
            multiple>
      <option value="css">CSS</option>
      <option value="html">HTML</option>
      <option value="javascript">Javascript</option>
      <option value="design">Graphic Design</option>
      <option value="plumbing">Plumbing</option>
      <option value="engineering">Mechanical Engineering</option>
      <option value="repair">Kitchen Repair</option>
    </select>
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="rules-terms"
             name="terms"
             type="checkbox">
      <label for="rules-terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var at=`state: 'success' | 'error' | null = null;
fields = {
  name: 'empty',
  gender: 'empty',
  username: 'empty',
  password: ['minLength[6]', 'empty'],
  skills: ['minCount[2]', 'empty'],
  terms: 'checked'
};
`;var lt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="longhand-name">Name</label>
    <input id="longhand-name"
           name="name"
           type="text"
           placeholder="Name">
  </div>
  <div suiFormField>
    <label for="longhand-username">Username</label>
    <input id="longhand-username"
           name="username"
           type="text"
           placeholder="Username">
  </div>
  <div suiFormField>
    <label for="longhand-password">Password</label>
    <input id="longhand-password"
           name="password"
           type="password"
           placeholder="Password">
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="longhand-terms"
             name="terms"
             type="checkbox">
      <label for="longhand-terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var rt=`state: 'success' | 'error' | null = null;
fields = {
  name: {
    identifier: 'name',
    rules: [{ type: 'empty', prompt: 'Please enter your name' }]
  },
  username: {
    identifier: 'username',
    rules: [{ type: 'empty', prompt: 'Please enter a username' }]
  },
  password: {
    identifier: 'password',
    rules: [
      { type: 'empty', prompt: 'Please enter a password' },
      { type: 'minLength[6]', prompt: 'Your password must be at least {ruleValue} characters' }
    ]
  },
  terms: {
    identifier: 'terms',
    rules: [{ type: 'checked', prompt: 'You must agree to the terms and conditions' }]
  }
};
`;var ot=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="params-color">Color</label>
    <input id="params-color"
           name="color"
           type="text"
           placeholder="rgb(255, 255, 255)">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var st=`state: 'success' | 'error' | null = null;
fields = {
  color: {
    identifier: 'color',
    rules: [{
      type: 'regExp',
      value: /rgb\\((\\d{1,3}), (\\d{1,3}), (\\d{1,3})\\)/i,
      prompt: 'Please enter a colour like rgb(255, 255, 255)'
    }]
  }
};
`;var mt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="prompts-field1">Field 1</label>
    <input id="prompts-field1"
           name="field1"
           type="text"
           placeholder="Field 1">
  </div>
  <div suiFormField>
    <label for="prompts-field2">Field 2</label>
    <input id="prompts-field2"
           name="field2"
           type="text"
           placeholder="Field 2">
  </div>
  <div suiFormField>
    <label for="prompts-field3">Field 3</label>
    <input id="prompts-field3"
           name="field3"
           type="text"
           placeholder="Field 3">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var dt=`state: 'success' | 'error' | null = null;
fields = {
  field1: {
    rules: [{ type: 'empty' }]
  },
  field2: {
    rules: [{
      type: 'exactly[dog]',
      prompt: '{name} is set to "{value}" that is totally wrong. It should be {ruleValue}'
    }]
  },
  field3: {
    rules: [{
      type: 'exactly[cat]',
      prompt: (value: unknown) => value === 'dog' ? 'I told you to put cat, not dog!' : 'That is not cat'
    }]
  }
};
`;var ut=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="match-special-name">Special Field</label>
    <input id="match-special-name"
           name="special-name"
           type="text"
           placeholder="Special Field">
  </div>
  <div suiFormField>
    <label for="match-server">Server Name</label>
    <input id="match-server"
           name="user[name]"
           data-validate="serverName"
           type="text"
           placeholder="Server Name">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var pt=`state: 'success' | 'error' | null = null;
fields = {
  // fields are matched by id, then name, then data-validate
  name: {
    identifier: 'special-name',
    rules: [{ type: 'empty' }]
  },
  serverName: 'empty'
};
`;var ct=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="inline-first-name">First Name</label>
      <input id="inline-first-name"
             name="first-name"
             type="text"
             placeholder="First Name">
    </div>
    <div suiFormField>
      <label for="inline-last-name">Last Name</label>
      <input id="inline-last-name"
             name="last-name"
             type="text"
             placeholder="Last Name">
    </div>
  </div>
  <div suiFormField>
    <label for="inline-username">Username</label>
    <input id="inline-username"
           name="username"
           type="text"
           placeholder="Username">
  </div>
  <div suiFormField>
    <label for="inline-password">Password</label>
    <input id="inline-password"
           name="password"
           type="password"
           placeholder="Password">
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="inline-terms"
             name="terms"
             type="checkbox">
      <label for="inline-terms">I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var ft=`state: 'success' | 'error' | null = null;
fields = {
  'first-name': 'empty',
  'last-name': 'empty',
  username: 'empty',
  password: ['minLength[6]', 'empty'],
  terms: 'checked'
};
`;var ht=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <div class="ui checkbox">
      <input id="depends-isDoctor"
             name="isDoctor"
             type="checkbox">
      <label for="depends-isDoctor">Are you a doctor?</label>
    </div>
  </div>
  <div suiFormField>
    <label for="depends-yearsPracticed">How long have you been a medical professional</label>
    <input id="depends-yearsPracticed"
           name="yearsPracticed"
           type="text"
           placeholder="Years">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var vt=`state: 'success' | 'error' | null = null;
fields = {
  yearsPracticed: {
    identifier: 'yearsPracticed',
    depends: 'isDoctor',
    rules: [{ type: 'empty', prompt: 'Please enter the number of years you have been a doctor' }]
  }
};
`;var xt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <p>Your tickets are all ready to print. Where would you like to send a receipt?</p>
  <div suiFormField>
    <label for="optional-email">E-mail</label>
    <input id="optional-email"
           name="email"
           type="text"
           placeholder="joe@schmoe.com">
  </div>
  <div suiFormField>
    <label for="optional-cc-email">Additional E-mail</label>
    <input id="optional-cc-email"
           name="cc-email"
           type="text"
           placeholder="mom@schmoe.com">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
</form>
`;var St=`state: 'success' | 'error' | null = null;
fields = {
  email: {
    identifier: 'email',
    rules: [{ type: 'email', prompt: 'Please enter a valid e-mail' }]
  },
  ccEmail: {
    identifier: 'cc-email',
    optional: true,
    rules: [{ type: 'email', prompt: 'Please enter a valid second e-mail' }]
  }
};
`;var yt=`<form sui-form
      suiFormValidation
      #validation="suiFormValidation"
      [suiState]="state"
      [suiFields]="fields"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="prog-name">Name</label>
      <input id="prog-name"
             name="name"
             type="text"
             placeholder="Name">
    </div>
    <div suiFormField>
      <label for="prog-gender">Gender</label>
      <select id="prog-gender"
              name="gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  </div>
  <div suiFormField>
    <label for="prog-username">Username</label>
    <input id="prog-username"
           name="username"
           type="text"
           placeholder="Username">
  </div>
  <div suiFormField>
    <label for="prog-colors">Favorite Colors</label>
    <select id="prog-colors"
            name="colors"
            multiple>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="grey">Grey</option>
    </select>
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="prog-terms"
             name="terms"
             type="checkbox">
      <label for="prog-terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <div sui-buttons
       suiSize="small">
    <button sui-button
            type="button"
            (click)="validation.validateForm()">
      Validate Form
    </button>
    <button sui-button
            type="button"
            (click)="output = validation.isValid('name') ? 'Name is valid' : 'Name is invalid'">
      Is Name Valid?
    </button>
    <button sui-button
            type="button"
            (click)="validation.setValues(sample)">
      Set Values
    </button>
    <button sui-button
            type="button"
            (click)="output = validation.getValues()">
      Get Values
    </button>
    <button sui-button
            type="button"
            (click)="validation.reset(); state = null">
      Reset
    </button>
    <button sui-button
            type="button"
            (click)="validation.clear(); state = null">
      Clear
    </button>
  </div>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
  <div class="ui error message"></div>
  @if (output) {
    <pre>{{ output | json }}</pre>
  }
</form>
`;var gt=`state: 'success' | 'error' | null = null;
output: unknown = null;
fields = {
  name: 'empty',
  gender: 'empty',
  username: 'empty',
  terms: 'checked'
};
sample = {
  name: 'Jack',
  gender: 'male',
  username: 'jlukic',
  colors: ['red', 'grey'],
  terms: true
};
`;var Et=`<form sui-form
      suiFormValidation
      suiInline
      [formGroup]="profile"
      [suiFields]="fields"
      (suiOnSuccess)="submitted = profile.value">
  <div suiFormField>
    <label for="email">E-mail</label>
    <input id="email"
           formControlName="email"
           placeholder="joe@schmoe.com">
  </div>
  <div suiFormField>
    <label for="age">Age</label>
    <input id="age"
           formControlName="age"
           placeholder="18 to 120">
  </div>
  @if (profile.controls.email.errors?.['suiFormValidation']; as message) {
    <div sui-message
         suiState="warning">
      The e-mail control has the error: {{ message }}
    </div>
  }
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  @if (submitted) {
    <pre>{{ submitted | json }}</pre>
  }
</form>
`;var bt=`import { FormControl, FormGroup } from '@angular/forms';

submitted: unknown = null;
profile = new FormGroup({
  email: new FormControl(''),
  age: new FormControl('')
});
fields = {
  email: ['empty', 'email'],
  age: 'integer[18..120]'
};
`;var Ft=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="empty-empty">Empty</label>
    <input id="empty-empty"
           name="empty"
           type="text"
           placeholder="Empty">
  </div>
  <div suiFormField>
    <label for="empty-dropdown">Dropdown</label>
    <select id="empty-dropdown"
            name="dropdown">
      <option value="">Select</option>
      <option value="1">Choice 1</option>
      <option value="2">Choice 2</option>
    </select>
  </div>
  <div suiFormField>
    <div class="ui checkbox">
      <input id="empty-checkbox"
             name="checkbox"
             type="checkbox">
      <label for="empty-checkbox">Checkbox</label>
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Ct=`state: 'success' | 'error' | null = null;
fields = {
  empty: { rules: [{ type: 'empty', prompt: 'Please enter a value' }] },
  dropdown: { rules: [{ type: 'empty', prompt: 'Please select a dropdown value' }] },
  checkbox: { rules: [{ type: 'checked', prompt: 'Please check the checkbox' }] }
};
`;var _t=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="type-integer">Integer</label>
      <input id="type-integer"
             name="integer"
             type="text"
             placeholder="1 to 100">
    </div>
    <div suiFormField>
      <label for="type-email">E-mail</label>
      <input id="type-email"
             name="email"
             type="text"
             placeholder="E-mail">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="type-decimal">Decimal</label>
      <input id="type-decimal"
             name="decimal"
             type="text"
             placeholder="Decimal">
    </div>
    <div suiFormField>
      <label for="type-number">Number</label>
      <input id="type-number"
             name="number"
             type="text"
             placeholder="Number">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="type-url">URL</label>
      <input id="type-url"
             name="url"
             type="text"
             placeholder="URL">
    </div>
    <div suiFormField>
      <label for="type-regex">RegEx</label>
      <input id="type-regex"
             name="regex"
             type="text"
             placeholder="4-16 letter username">
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var wt=`state: 'success' | 'error' | null = null;
fields = {
  integer: { rules: [{ type: 'integer[1..100]', prompt: 'Please enter an integer value' }] },
  decimal: { rules: [{ type: 'decimal', prompt: 'Please enter a valid decimal' }] },
  number: { rules: [{ type: 'number', prompt: 'Please enter a valid number' }] },
  email: { rules: [{ type: 'email', prompt: 'Please enter a valid e-mail' }] },
  url: { rules: [{ type: 'url', prompt: 'Please enter a url' }] },
  regex: { rules: [{ type: 'regExp[/^[a-z0-9_-]{4,16}$/]', prompt: 'Please enter a 4-16 letter username' }] }
};
`;var Ot=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="pay-card">Credit Card</label>
      <input id="pay-card"
             name="card"
             type="text"
             placeholder="4565340519181845">
    </div>
    <div suiFormField>
      <label for="pay-exact-card">Certain Type</label>
      <input id="pay-exact-card"
             name="exact-card"
             type="text"
             placeholder="Visa or American Express">
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Vt=`state: 'success' | 'error' | null = null;
fields = {
  card: { rules: [{ type: 'creditCard', prompt: 'Please enter a valid credit card' }] },
  exactCard: {
    identifier: 'exact-card',
    rules: [{ type: 'creditCard[visa,amex]', prompt: 'Please enter a visa or amex card' }]
  }
};
`;var Tt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="m-match1">Match 1</label>
      <input id="m-match1"
             name="match1"
             type="text"
             placeholder="Match 1">
    </div>
    <div suiFormField>
      <label for="m-match2">Match 2</label>
      <input id="m-match2"
             name="match2"
             type="text"
             placeholder="Match 2">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="m-different1">Different 1</label>
      <input id="m-different1"
             name="different1"
             type="text"
             placeholder="Different 1">
    </div>
    <div suiFormField>
      <label for="m-different2">Different 2</label>
      <input id="m-different2"
             name="different2"
             type="text"
             placeholder="Different 2">
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Pt=`state: 'success' | 'error' | null = null;
fields = {
  match: {
    identifier: 'match2',
    rules: [{ type: 'match[match1]', prompt: 'Please put the same value in both fields' }]
  },
  different: {
    identifier: 'different2',
    rules: [{ type: 'different[different1]', prompt: 'Please put different values for each field' }]
  }
};
`;var Dt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="len-minLength">minLength</label>
    <input id="len-minLength"
           name="minLength"
           type="text"
           placeholder="At least 10 characters">
  </div>
  <div suiFormField>
    <label for="len-exactLength">Exact Length</label>
    <input id="len-exactLength"
           name="exactLength"
           type="text"
           placeholder="Exactly 6 characters">
  </div>
  <div suiFormField>
    <label for="len-maxLength">maxLength</label>
    <input id="len-maxLength"
           name="maxLength"
           type="text"
           placeholder="At most 10 characters">
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Rt=`state: 'success' | 'error' | null = null;
fields = {
  minLength: { rules: [{ type: 'minLength[10]', prompt: 'Please enter at least 10 characters' }] },
  exactLength: { rules: [{ type: 'exactLength[6]', prompt: 'Please enter exactly 6 characters' }] },
  maxLength: { rules: [{ type: 'maxLength[10]', prompt: 'Please enter at most 10 characters' }] }
};
`;var kt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="blur"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="content-is">is</label>
      <input id="content-is"
             name="is"
             type="text"
             placeholder="is">
    </div>
    <div suiFormField>
      <label for="content-isExactly">isExactly</label>
      <input id="content-isExactly"
             name="isExactly"
             type="text"
             placeholder="isExactly">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="content-not">not</label>
      <input id="content-not"
             name="not"
             type="text"
             placeholder="not">
    </div>
    <div suiFormField>
      <label for="content-notExactly">notExactly</label>
      <input id="content-notExactly"
             name="notExactly"
             type="text"
             placeholder="notExactly">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="content-contains">contains</label>
      <input id="content-contains"
             name="contains"
             type="text"
             placeholder="contains">
    </div>
    <div suiFormField>
      <label for="content-containsExactly">containsExactly</label>
      <input id="content-containsExactly"
             name="containsExactly"
             type="text"
             placeholder="containsExactly">
    </div>
  </div>
  <div suiFormFields
       suiWidth="two">
    <div suiFormField>
      <label for="content-doesntContain">doesntContain</label>
      <input id="content-doesntContain"
             name="doesntContain"
             type="text"
             placeholder="doesntContain">
    </div>
    <div suiFormField>
      <label for="content-doesntContainExactly">doesntContainExactly</label>
      <input id="content-doesntContainExactly"
             name="doesntContainExactly"
             type="text"
             placeholder="doesntContainExactly">
    </div>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var It=`state: 'success' | 'error' | null = null;
fields = {
  is: { rules: [{ type: 'is[dog]', prompt: 'Please enter exactly "dog"' }] },
  isExactly: { rules: [{ type: 'isExactly[dog]', prompt: 'Please enter exactly "dog"' }] },
  not: { rules: [{ type: 'not[dog]', prompt: 'Please enter a value, but not "dog"' }] },
  notExactly: { rules: [{ type: 'notExactly[dog]', prompt: 'Please enter a value, but not exactly "dog"' }] },
  contains: { rules: [{ type: 'contains[dog]', prompt: 'Please enter a value containing "dog"' }] },
  containsExactly: { rules: [{ type: 'containsExactly[dog]', prompt: 'Please enter a value containing exactly "dog"' }] },
  doesntContain: { rules: [{ type: 'doesntContain[dog]', prompt: 'Please enter a value not containing "dog"' }] },
  doesntContainExactly: { rules: [{ type: 'doesntContainExactly[dog]', prompt: 'Please enter a value not containing exactly "dog"' }] }
};
`;var Mt=`<form sui-form
      suiFormValidation
      [suiState]="state"
      [suiFields]="fields"
      suiInline
      suiOn="change"
      (suiOnSuccess)="state = 'success'"
      (suiOnFailure)="state = 'error'">
  <div suiFormField>
    <label for="count-exactCount">Exact Count</label>
    <select id="count-exactCount"
            name="exactCount"
            multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div suiFormField>
    <label for="count-minCount">Minimum Count</label>
    <select id="count-minCount"
            name="minCount"
            multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div suiFormField>
    <label for="count-maxCount">Maximum Count</label>
    <select id="count-maxCount"
            name="maxCount"
            multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <button sui-button
          suiColour="primary"
          type="submit">
    Submit
  </button>
  <div class="ui success message">
    <div class="header">Form Submitted</div>
    <p>Every field passed validation.</p>
  </div>
</form>
`;var Nt=`state: 'success' | 'error' | null = null;
fields = {
  minCount: { rules: [{ type: 'minCount[2]', prompt: 'Please select at least 2 values' }] },
  maxCount: { rules: [{ type: 'maxCount[2]', prompt: 'Please select a max of 2 values' }] },
  exactCount: { rules: [{ type: 'exactCount[2]', prompt: 'Please select 2 values' }] }
};
`;function dn(n,u){if(n&1&&(ss(0,`pre`),WC(1),rw(2,`json`),Bu()),n&2){let a=hC();KD(),hg(iw(2,1,a.output))}}function un(n,u){n&1&&(ss(0,`div`,6),WC(1),Bu()),n&2&&(KD(),zu(` The e-mail control has the error: `,u,` `))}function pn(n,u){if(n&1&&(ss(0,`pre`),WC(1),rw(2,`json`),Bu()),n&2){let a=hC();KD(),hg(iw(2,1,a.submitted))}}var Lt=(()=>{class n{constructor(){this.state=null,this.fields={name:`empty`,gender:`empty`,username:`empty`,password:[`minLength[6]`,`empty`],skills:[`minCount[2]`,`empty`],terms:`checked`}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-specifying-rules-example`]],standalone:!1,decls:57,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`sui-header`,``,`suiDividing`,``],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`rules-name`],[`id`,`rules-name`,`name`,`name`,`type`,`text`,`placeholder`,`Name`],[`for`,`rules-gender`],[`id`,`rules-gender`,`name`,`gender`],[`value`,``],[`value`,`male`],[`value`,`female`],[`for`,`rules-username`],[`id`,`rules-username`,`name`,`username`,`type`,`text`,`placeholder`,`Username`],[`for`,`rules-password`],[`id`,`rules-password`,`name`,`password`,`type`,`password`,`placeholder`,`Password`],[`for`,`rules-skills`],[`id`,`rules-skills`,`name`,`skills`,`multiple`,``],[`value`,`css`],[`value`,`html`],[`value`,`javascript`],[`value`,`design`],[`value`,`plumbing`],[`value`,`engineering`],[`value`,`repair`],[1,`ui`,`checkbox`],[`id`,`rules-terms`,`name`,`terms`,`type`,`checkbox`],[`for`,`rules-terms`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`h4`,1),WC(2,`Tell Us About Yourself`),Bu(),ss(3,`div`,2)(4,`div`,3)(5,`label`,4),WC(6,`Name`),Bu(),Gh(7,`input`,5),Bu(),ss(8,`div`,3)(9,`label`,6),WC(10,`Gender`),Bu(),ss(11,`select`,7)(12,`option`,8),WC(13,`Gender`),Bu(),ss(14,`option`,9),WC(15,`Male`),Bu(),ss(16,`option`,10),WC(17,`Female`),Bu()()()(),ss(18,`div`,3)(19,`label`,11),WC(20,`Username`),Bu(),Gh(21,`input`,12),Bu(),ss(22,`div`,3)(23,`label`,13),WC(24,`Password`),Bu(),Gh(25,`input`,14),Bu(),ss(26,`div`,3)(27,`label`,15),WC(28,`Skills`),Bu(),ss(29,`select`,16)(30,`option`,17),WC(31,`CSS`),Bu(),ss(32,`option`,18),WC(33,`HTML`),Bu(),ss(34,`option`,19),WC(35,`Javascript`),Bu(),ss(36,`option`,20),WC(37,`Graphic Design`),Bu(),ss(38,`option`,21),WC(39,`Plumbing`),Bu(),ss(40,`option`,22),WC(41,`Mechanical Engineering`),Bu(),ss(42,`option`,23),WC(43,`Kitchen Repair`),Bu()()(),ss(44,`div`,3)(45,`div`,24),Gh(46,`input`,25),ss(47,`label`,26),WC(48,`I agree to the terms and conditions`),Bu()()(),ss(49,`button`,27),WC(50,` Submit `),Bu(),ss(51,`div`,28)(52,`div`,29),WC(53,`Form Submitted`),Bu(),ss(54,`p`),WC(55,`Every field passed validation.`),Bu()(),Gh(56,`div`,30),Bu()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,hi$1,fi$1,ui$1,xe,Si$1,Oi,Ni,wi,Ii,Ws],encapsulation:2,changeDetection:1})}}return n})();var Bt=(()=>{class n{constructor(){this.state=null,this.fields={name:{identifier:`name`,rules:[{type:`empty`,prompt:`Please enter your name`}]},username:{identifier:`username`,rules:[{type:`empty`,prompt:`Please enter a username`}]},password:{identifier:`password`,rules:[{type:`empty`,prompt:`Please enter a password`},{type:`minLength[6]`,prompt:`Your password must be at least {ruleValue} characters`}]},terms:{identifier:`terms`,rules:[{type:`checked`,prompt:`You must agree to the terms and conditions`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-longhand-example`]],standalone:!1,decls:26,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`longhand-name`],[`id`,`longhand-name`,`name`,`name`,`type`,`text`,`placeholder`,`Name`],[`for`,`longhand-username`],[`id`,`longhand-username`,`name`,`username`,`type`,`text`,`placeholder`,`Username`],[`for`,`longhand-password`],[`id`,`longhand-password`,`name`,`password`,`type`,`password`,`placeholder`,`Password`],[1,`ui`,`checkbox`],[`id`,`longhand-terms`,`name`,`terms`,`type`,`checkbox`],[`for`,`longhand-terms`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`label`,2),WC(3,`Name`),Bu(),Gh(4,`input`,3),Bu(),ss(5,`div`,1)(6,`label`,4),WC(7,`Username`),Bu(),Gh(8,`input`,5),Bu(),ss(9,`div`,1)(10,`label`,6),WC(11,`Password`),Bu(),Gh(12,`input`,7),Bu(),ss(13,`div`,1)(14,`div`,8),Gh(15,`input`,9),ss(16,`label`,10),WC(17,`I agree to the terms and conditions`),Bu()()(),ss(18,`button`,11),WC(19,` Submit `),Bu(),ss(20,`div`,12)(21,`div`,13),WC(22,`Form Submitted`),Bu(),ss(23,`p`),WC(24,`Every field passed validation.`),Bu()(),Gh(25,`div`,14),Bu()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Gt=(()=>{class n{constructor(){this.state=null,this.fields={color:{identifier:`color`,rules:[{type:`regExp`,value:/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/i,prompt:`Please enter a colour like rgb(255, 255, 255)`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-parameters-example`]],standalone:!1,decls:13,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`params-color`],[`id`,`params-color`,`name`,`color`,`type`,`text`,`placeholder`,`rgb(255, 255, 255)`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`label`,2),WC(3,`Color`),Bu(),Gh(4,`input`,3),Bu(),ss(5,`button`,4),WC(6,` Submit `),Bu(),ss(7,`div`,5)(8,`div`,6),WC(9,`Form Submitted`),Bu(),ss(10,`p`),WC(11,`Every field passed validation.`),Bu()(),Gh(12,`div`,7),Bu()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var At=(()=>{class n{constructor(){this.state=null,this.fields={field1:{rules:[{type:`empty`}]},field2:{rules:[{type:`exactly[dog]`,prompt:`{name} is set to "{value}" that is totally wrong. It should be {ruleValue}`}]},field3:{rules:[{type:`exactly[cat]`,prompt:a=>a===`dog`?`I told you to put cat, not dog!`:`That is not cat`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-prompts-example`]],standalone:!1,decls:21,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`prompts-field1`],[`id`,`prompts-field1`,`name`,`field1`,`type`,`text`,`placeholder`,`Field 1`],[`for`,`prompts-field2`],[`id`,`prompts-field2`,`name`,`field2`,`type`,`text`,`placeholder`,`Field 2`],[`for`,`prompts-field3`],[`id`,`prompts-field3`,`name`,`field3`,`type`,`text`,`placeholder`,`Field 3`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`label`,2),WC(3,`Field 1`),Bu(),Gh(4,`input`,3),Bu(),ss(5,`div`,1)(6,`label`,4),WC(7,`Field 2`),Bu(),Gh(8,`input`,5),Bu(),ss(9,`div`,1)(10,`label`,6),WC(11,`Field 3`),Bu(),Gh(12,`input`,7),Bu(),ss(13,`button`,8),WC(14,` Submit `),Bu(),ss(15,`div`,9)(16,`div`,10),WC(17,`Form Submitted`),Bu(),ss(18,`p`),WC(19,`Every field passed validation.`),Bu()(),Gh(20,`div`,11),Bu()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Ut=(()=>{class n{constructor(){this.state=null,this.fields={name:{identifier:`special-name`,rules:[{type:`empty`}]},serverName:`empty`}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-matching-fields-example`]],standalone:!1,decls:17,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`match-special-name`],[`id`,`match-special-name`,`name`,`special-name`,`type`,`text`,`placeholder`,`Special Field`],[`for`,`match-server`],[`id`,`match-server`,`name`,`user[name]`,`data-validate`,`serverName`,`type`,`text`,`placeholder`,`Server Name`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`label`,2),WC(3,`Special Field`),Bu(),Gh(4,`input`,3),Bu(),ss(5,`div`,1)(6,`label`,4),WC(7,`Server Name`),Bu(),Gh(8,`input`,5),Bu(),ss(9,`button`,6),WC(10,` Submit `),Bu(),ss(11,`div`,7)(12,`div`,8),WC(13,`Form Submitted`),Bu(),ss(14,`p`),WC(15,`Every field passed validation.`),Bu()(),Gh(16,`div`,9),Bu()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Wt=(()=>{class n{constructor(){this.state=null,this.fields={"first-name":`empty`,"last-name":`empty`,username:`empty`,password:[`minLength[6]`,`empty`],terms:`checked`}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-inline-example`]],standalone:!1,decls:30,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`inline-first-name`],[`id`,`inline-first-name`,`name`,`first-name`,`type`,`text`,`placeholder`,`First Name`],[`for`,`inline-last-name`],[`id`,`inline-last-name`,`name`,`last-name`,`type`,`text`,`placeholder`,`Last Name`],[`for`,`inline-username`],[`id`,`inline-username`,`name`,`username`,`type`,`text`,`placeholder`,`Username`],[`for`,`inline-password`],[`id`,`inline-password`,`name`,`password`,`type`,`password`,`placeholder`,`Password`],[1,`ui`,`checkbox`],[`id`,`inline-terms`,`name`,`terms`,`type`,`checkbox`],[`for`,`inline-terms`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`div`,2)(3,`label`,3),WC(4,`First Name`),Bu(),Gh(5,`input`,4),Bu(),ss(6,`div`,2)(7,`label`,5),WC(8,`Last Name`),Bu(),Gh(9,`input`,6),Bu()(),ss(10,`div`,2)(11,`label`,7),WC(12,`Username`),Bu(),Gh(13,`input`,8),Bu(),ss(14,`div`,2)(15,`label`,9),WC(16,`Password`),Bu(),Gh(17,`input`,10),Bu(),ss(18,`div`,2)(19,`div`,11),Gh(20,`input`,12),ss(21,`label`,13),WC(22,`I agree to the Terms and Conditions`),Bu()()(),ss(23,`button`,14),WC(24,` Submit `),Bu(),ss(25,`div`,15)(26,`div`,16),WC(27,`Form Submitted`),Bu(),ss(28,`p`),WC(29,`Every field passed validation.`),Bu()()()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,Ni,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var jt=(()=>{class n{constructor(){this.state=null,this.fields={yearsPracticed:{identifier:`yearsPracticed`,depends:`isDoctor`,rules:[{type:`empty`,prompt:`Please enter the number of years you have been a doctor`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-dependent-example`]],standalone:!1,decls:18,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[1,`ui`,`checkbox`],[`id`,`depends-isDoctor`,`name`,`isDoctor`,`type`,`checkbox`],[`for`,`depends-isDoctor`],[`for`,`depends-yearsPracticed`],[`id`,`depends-yearsPracticed`,`name`,`yearsPracticed`,`type`,`text`,`placeholder`,`Years`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`div`,2),Gh(3,`input`,3),ss(4,`label`,4),WC(5,`Are you a doctor?`),Bu()()(),ss(6,`div`,1)(7,`label`,5),WC(8,`How long have you been a medical professional`),Bu(),Gh(9,`input`,6),Bu(),ss(10,`button`,7),WC(11,` Submit `),Bu(),ss(12,`div`,8)(13,`div`,9),WC(14,`Form Submitted`),Bu(),ss(15,`p`),WC(16,`Every field passed validation.`),Bu()(),Gh(17,`div`,10),Bu()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var zt=(()=>{class n{constructor(){this.state=null,this.fields={email:{identifier:`email`,rules:[{type:`email`,prompt:`Please enter a valid e-mail`}]},ccEmail:{identifier:`cc-email`,optional:!0,rules:[{type:`email`,prompt:`Please enter a valid second e-mail`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-optional-example`]],standalone:!1,decls:19,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`optional-email`],[`id`,`optional-email`,`name`,`email`,`type`,`text`,`placeholder`,`joe@schmoe.com`],[`for`,`optional-cc-email`],[`id`,`optional-cc-email`,`name`,`cc-email`,`type`,`text`,`placeholder`,`mom@schmoe.com`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`p`),WC(2,`Your tickets are all ready to print. Where would you like to send a receipt?`),Bu(),ss(3,`div`,1)(4,`label`,2),WC(5,`E-mail`),Bu(),Gh(6,`input`,3),Bu(),ss(7,`div`,1)(8,`label`,4),WC(9,`Additional E-mail`),Bu(),Gh(10,`input`,5),Bu(),ss(11,`button`,6),WC(12,` Submit `),Bu(),ss(13,`div`,7)(14,`div`,8),WC(15,`Form Submitted`),Bu(),ss(16,`p`),WC(17,`Every field passed validation.`),Bu()(),Gh(18,`div`,9),Bu()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var qt=(()=>{class n{constructor(){this.state=null,this.output=null,this.fields={name:`empty`,gender:`empty`,username:`empty`,terms:`checked`},this.sample={name:`Jack`,gender:`male`,username:`jlukic`,colors:[`red`,`grey`],terms:!0}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-programmatic-example`]],standalone:!1,decls:58,vars:3,consts:[[`validation`,`suiFormValidation`],[`sui-form`,``,`suiFormValidation`,``,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`prog-name`],[`id`,`prog-name`,`name`,`name`,`type`,`text`,`placeholder`,`Name`],[`for`,`prog-gender`],[`id`,`prog-gender`,`name`,`gender`],[`value`,``],[`value`,`male`],[`value`,`female`],[`for`,`prog-username`],[`id`,`prog-username`,`name`,`username`,`type`,`text`,`placeholder`,`Username`],[`for`,`prog-colors`],[`id`,`prog-colors`,`name`,`colors`,`multiple`,``],[`value`,`red`],[`value`,`blue`],[`value`,`green`],[`value`,`grey`],[1,`ui`,`checkbox`],[`id`,`prog-terms`,`name`,`terms`,`type`,`checkbox`],[`for`,`prog-terms`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,`type`,`button`,3,`click`],[1,`ui`,`success`,`message`],[1,`header`],[1,`ui`,`error`,`message`]],template:function(l,r){if(l&1){let s=fC();ss(0,`form`,1,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(2,`div`,2)(3,`div`,3)(4,`label`,4),WC(5,`Name`),Bu(),Gh(6,`input`,5),Bu(),ss(7,`div`,3)(8,`label`,6),WC(9,`Gender`),Bu(),ss(10,`select`,7)(11,`option`,8),WC(12,`Gender`),Bu(),ss(13,`option`,9),WC(14,`Male`),Bu(),ss(15,`option`,10),WC(16,`Female`),Bu()()()(),ss(17,`div`,3)(18,`label`,11),WC(19,`Username`),Bu(),Gh(20,`input`,12),Bu(),ss(21,`div`,3)(22,`label`,13),WC(23,`Favorite Colors`),Bu(),ss(24,`select`,14)(25,`option`,15),WC(26,`Red`),Bu(),ss(27,`option`,16),WC(28,`Blue`),Bu(),ss(29,`option`,17),WC(30,`Green`),Bu(),ss(31,`option`,18),WC(32,`Grey`),Bu()()(),ss(33,`div`,3)(34,`div`,19),Gh(35,`input`,20),ss(36,`label`,21),WC(37,`I agree to the terms and conditions`),Bu()()(),ss(38,`div`,22)(39,`button`,23),Qh(`click`,function(){Pd(s);let F=IC(1);return jd(F.validateForm())}),WC(40,` Validate Form `),Bu(),ss(41,`button`,23),Qh(`click`,function(){Pd(s);let F=IC(1);return jd(r.output=F.isValid(`name`)?`Name is valid`:`Name is invalid`)}),WC(42,` Is Name Valid? `),Bu(),ss(43,`button`,23),Qh(`click`,function(){Pd(s);let F=IC(1);return jd(F.setValues(r.sample))}),WC(44,` Set Values `),Bu(),ss(45,`button`,23),Qh(`click`,function(){Pd(s);let F=IC(1);return jd(r.output=F.getValues())}),WC(46,` Get Values `),Bu(),ss(47,`button`,23),Qh(`click`,function(){return Pd(s),IC(1).reset(),jd(r.state=null)}),WC(48,` Reset `),Bu(),ss(49,`button`,23),Qh(`click`,function(){return Pd(s),IC(1).clear(),jd(r.state=null)}),WC(50,` Clear `),Bu()(),ss(51,`div`,24)(52,`div`,25),WC(53,`Form Submitted`),Bu(),ss(54,`p`),WC(55,`Every field passed validation.`),Bu()(),Gh(56,`div`,26),eC(57,dn,3,3,`pre`),Bu()}l&2&&(Uh(`suiState`,r.state)(`suiFields`,r.fields),KD(57),nC(r.output?57:-1))},dependencies:[ci$1,hi$1,fi$1,ui$1,xe,Si$1,Oi,Ni,wi,Ii,Di,Jw],encapsulation:2,changeDetection:1})}}return n})();var $t=(()=>{class n{constructor(){this.submitted=null,this.profile=new he({email:new wt$1(``),age:new wt$1(``)}),this.fields={email:[`empty`,`email`],age:`integer[18..120]`}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-reactive-example`]],standalone:!1,decls:13,vars:4,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,3,`suiOnSuccess`,`formGroup`,`suiFields`],[`suiFormField`,``],[`for`,`email`],[`id`,`email`,`formControlName`,`email`,`placeholder`,`joe@schmoe.com`],[`for`,`age`],[`id`,`age`,`formControlName`,`age`,`placeholder`,`18 to 120`],[`sui-message`,``,`suiState`,`warning`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`]],template:function(l,r){if(l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.submitted=r.profile.value}),ss(1,`div`,1)(2,`label`,2),WC(3,`E-mail`),Bu(),ss(4,`input`,3),BE(),Bu()(),ss(5,`div`,1)(6,`label`,4),WC(7,`Age`),Bu(),ss(8,`input`,5),BE(),Bu()(),eC(9,un,2,1,`div`,6),ss(10,`button`,7),WC(11,` Submit `),Bu(),eC(12,pn,3,3,`pre`),Bu()),l&2){let s;Uh(`formGroup`,r.profile)(`suiFields`,r.fields),KD(4),$E(),KD(4),$E(),KD(),nC((s=r.profile.controls.email.errors?.suiFormValidation)?9:-1,s),KD(3),nC(r.submitted?12:-1)}},dependencies:[ci$1,ct$1,li$1,ui$1,Te,En$1,Si$1,Oi,wi,li$2,Ii,Jw],encapsulation:2,changeDetection:1})}}return n})();var Ht=(()=>{class n{constructor(){this.state=null,this.fields={empty:{rules:[{type:`empty`,prompt:`Please enter a value`}]},dropdown:{rules:[{type:`empty`,prompt:`Please select a dropdown value`}]},checkbox:{rules:[{type:`checked`,prompt:`Please check the checkbox`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-rule-empty-example`]],standalone:!1,decls:27,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`empty-empty`],[`id`,`empty-empty`,`name`,`empty`,`type`,`text`,`placeholder`,`Empty`],[`for`,`empty-dropdown`],[`id`,`empty-dropdown`,`name`,`dropdown`],[`value`,``],[`value`,`1`],[`value`,`2`],[1,`ui`,`checkbox`],[`id`,`empty-checkbox`,`name`,`checkbox`,`type`,`checkbox`],[`for`,`empty-checkbox`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`label`,2),WC(3,`Empty`),Bu(),Gh(4,`input`,3),Bu(),ss(5,`div`,1)(6,`label`,4),WC(7,`Dropdown`),Bu(),ss(8,`select`,5)(9,`option`,6),WC(10,`Select`),Bu(),ss(11,`option`,7),WC(12,`Choice 1`),Bu(),ss(13,`option`,8),WC(14,`Choice 2`),Bu()()(),ss(15,`div`,1)(16,`div`,9),Gh(17,`input`,10),ss(18,`label`,11),WC(19,`Checkbox`),Bu()()(),ss(20,`button`,12),WC(21,` Submit `),Bu(),ss(22,`div`,13)(23,`div`,14),WC(24,`Form Submitted`),Bu(),ss(25,`p`),WC(26,`Every field passed validation.`),Bu()()()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,hi$1,fi$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Yt=(()=>{class n{constructor(){this.state=null,this.fields={integer:{rules:[{type:`integer[1..100]`,prompt:`Please enter an integer value`}]},decimal:{rules:[{type:`decimal`,prompt:`Please enter a valid decimal`}]},number:{rules:[{type:`number`,prompt:`Please enter a valid number`}]},email:{rules:[{type:`email`,prompt:`Please enter a valid e-mail`}]},url:{rules:[{type:`url`,prompt:`Please enter a url`}]},regex:{rules:[{type:`regExp[/^[a-z0-9_-]{4,16}$/]`,prompt:`Please enter a 4-16 letter username`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-rule-content-type-example`]],standalone:!1,decls:35,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`type-integer`],[`id`,`type-integer`,`name`,`integer`,`type`,`text`,`placeholder`,`1 to 100`],[`for`,`type-email`],[`id`,`type-email`,`name`,`email`,`type`,`text`,`placeholder`,`E-mail`],[`for`,`type-decimal`],[`id`,`type-decimal`,`name`,`decimal`,`type`,`text`,`placeholder`,`Decimal`],[`for`,`type-number`],[`id`,`type-number`,`name`,`number`,`type`,`text`,`placeholder`,`Number`],[`for`,`type-url`],[`id`,`type-url`,`name`,`url`,`type`,`text`,`placeholder`,`URL`],[`for`,`type-regex`],[`id`,`type-regex`,`name`,`regex`,`type`,`text`,`placeholder`,`4-16 letter username`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`div`,2)(3,`label`,3),WC(4,`Integer`),Bu(),Gh(5,`input`,4),Bu(),ss(6,`div`,2)(7,`label`,5),WC(8,`E-mail`),Bu(),Gh(9,`input`,6),Bu()(),ss(10,`div`,1)(11,`div`,2)(12,`label`,7),WC(13,`Decimal`),Bu(),Gh(14,`input`,8),Bu(),ss(15,`div`,2)(16,`label`,9),WC(17,`Number`),Bu(),Gh(18,`input`,10),Bu()(),ss(19,`div`,1)(20,`div`,2)(21,`label`,11),WC(22,`URL`),Bu(),Gh(23,`input`,12),Bu(),ss(24,`div`,2)(25,`label`,13),WC(26,`RegEx`),Bu(),Gh(27,`input`,14),Bu()(),ss(28,`button`,15),WC(29,` Submit `),Bu(),ss(30,`div`,16)(31,`div`,17),WC(32,`Form Submitted`),Bu(),ss(33,`p`),WC(34,`Every field passed validation.`),Bu()()()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,Ni,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Zt=(()=>{class n{constructor(){this.state=null,this.fields={card:{rules:[{type:`creditCard`,prompt:`Please enter a valid credit card`}]},exactCard:{identifier:`exact-card`,rules:[{type:`creditCard[visa,amex]`,prompt:`Please enter a visa or amex card`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-rule-payment-example`]],standalone:!1,decls:17,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`pay-card`],[`id`,`pay-card`,`name`,`card`,`type`,`text`,`placeholder`,`4565340519181845`],[`for`,`pay-exact-card`],[`id`,`pay-exact-card`,`name`,`exact-card`,`type`,`text`,`placeholder`,`Visa or American Express`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`div`,2)(3,`label`,3),WC(4,`Credit Card`),Bu(),Gh(5,`input`,4),Bu(),ss(6,`div`,2)(7,`label`,5),WC(8,`Certain Type`),Bu(),Gh(9,`input`,6),Bu()(),ss(10,`button`,7),WC(11,` Submit `),Bu(),ss(12,`div`,8)(13,`div`,9),WC(14,`Form Submitted`),Bu(),ss(15,`p`),WC(16,`Every field passed validation.`),Bu()()()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,Ni,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Kt=(()=>{class n{constructor(){this.state=null,this.fields={match:{identifier:`match2`,rules:[{type:`match[match1]`,prompt:`Please put the same value in both fields`}]},different:{identifier:`different2`,rules:[{type:`different[different1]`,prompt:`Please put different values for each field`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-rule-matching-example`]],standalone:!1,decls:26,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`m-match1`],[`id`,`m-match1`,`name`,`match1`,`type`,`text`,`placeholder`,`Match 1`],[`for`,`m-match2`],[`id`,`m-match2`,`name`,`match2`,`type`,`text`,`placeholder`,`Match 2`],[`for`,`m-different1`],[`id`,`m-different1`,`name`,`different1`,`type`,`text`,`placeholder`,`Different 1`],[`for`,`m-different2`],[`id`,`m-different2`,`name`,`different2`,`type`,`text`,`placeholder`,`Different 2`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`div`,2)(3,`label`,3),WC(4,`Match 1`),Bu(),Gh(5,`input`,4),Bu(),ss(6,`div`,2)(7,`label`,5),WC(8,`Match 2`),Bu(),Gh(9,`input`,6),Bu()(),ss(10,`div`,1)(11,`div`,2)(12,`label`,7),WC(13,`Different 1`),Bu(),Gh(14,`input`,8),Bu(),ss(15,`div`,2)(16,`label`,9),WC(17,`Different 2`),Bu(),Gh(18,`input`,10),Bu()(),ss(19,`button`,11),WC(20,` Submit `),Bu(),ss(21,`div`,12)(22,`div`,13),WC(23,`Form Submitted`),Bu(),ss(24,`p`),WC(25,`Every field passed validation.`),Bu()()()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,Ni,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Jt=(()=>{class n{constructor(){this.state=null,this.fields={minLength:{rules:[{type:`minLength[10]`,prompt:`Please enter at least 10 characters`}]},exactLength:{rules:[{type:`exactLength[6]`,prompt:`Please enter exactly 6 characters`}]},maxLength:{rules:[{type:`maxLength[10]`,prompt:`Please enter at most 10 characters`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-rule-length-example`]],standalone:!1,decls:20,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`len-minLength`],[`id`,`len-minLength`,`name`,`minLength`,`type`,`text`,`placeholder`,`At least 10 characters`],[`for`,`len-exactLength`],[`id`,`len-exactLength`,`name`,`exactLength`,`type`,`text`,`placeholder`,`Exactly 6 characters`],[`for`,`len-maxLength`],[`id`,`len-maxLength`,`name`,`maxLength`,`type`,`text`,`placeholder`,`At most 10 characters`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`label`,2),WC(3,`minLength`),Bu(),Gh(4,`input`,3),Bu(),ss(5,`div`,1)(6,`label`,4),WC(7,`Exact Length`),Bu(),Gh(8,`input`,5),Bu(),ss(9,`div`,1)(10,`label`,6),WC(11,`maxLength`),Bu(),Gh(12,`input`,7),Bu(),ss(13,`button`,8),WC(14,` Submit `),Bu(),ss(15,`div`,9)(16,`div`,10),WC(17,`Form Submitted`),Bu(),ss(18,`p`),WC(19,`Every field passed validation.`),Bu()()()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Xt=(()=>{class n{constructor(){this.state=null,this.fields={is:{rules:[{type:`is[dog]`,prompt:`Please enter exactly "dog"`}]},isExactly:{rules:[{type:`isExactly[dog]`,prompt:`Please enter exactly "dog"`}]},not:{rules:[{type:`not[dog]`,prompt:`Please enter a value, but not "dog"`}]},notExactly:{rules:[{type:`notExactly[dog]`,prompt:`Please enter a value, but not exactly "dog"`}]},contains:{rules:[{type:`contains[dog]`,prompt:`Please enter a value containing "dog"`}]},containsExactly:{rules:[{type:`containsExactly[dog]`,prompt:`Please enter a value containing exactly "dog"`}]},doesntContain:{rules:[{type:`doesntContain[dog]`,prompt:`Please enter a value not containing "dog"`}]},doesntContainExactly:{rules:[{type:`doesntContainExactly[dog]`,prompt:`Please enter a value not containing exactly "dog"`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-rule-specified-content-example`]],standalone:!1,decls:44,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`blur`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormFields`,``,`suiWidth`,`two`],[`suiFormField`,``],[`for`,`content-is`],[`id`,`content-is`,`name`,`is`,`type`,`text`,`placeholder`,`is`],[`for`,`content-isExactly`],[`id`,`content-isExactly`,`name`,`isExactly`,`type`,`text`,`placeholder`,`isExactly`],[`for`,`content-not`],[`id`,`content-not`,`name`,`not`,`type`,`text`,`placeholder`,`not`],[`for`,`content-notExactly`],[`id`,`content-notExactly`,`name`,`notExactly`,`type`,`text`,`placeholder`,`notExactly`],[`for`,`content-contains`],[`id`,`content-contains`,`name`,`contains`,`type`,`text`,`placeholder`,`contains`],[`for`,`content-containsExactly`],[`id`,`content-containsExactly`,`name`,`containsExactly`,`type`,`text`,`placeholder`,`containsExactly`],[`for`,`content-doesntContain`],[`id`,`content-doesntContain`,`name`,`doesntContain`,`type`,`text`,`placeholder`,`doesntContain`],[`for`,`content-doesntContainExactly`],[`id`,`content-doesntContainExactly`,`name`,`doesntContainExactly`,`type`,`text`,`placeholder`,`doesntContainExactly`],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`div`,2)(3,`label`,3),WC(4,`is`),Bu(),Gh(5,`input`,4),Bu(),ss(6,`div`,2)(7,`label`,5),WC(8,`isExactly`),Bu(),Gh(9,`input`,6),Bu()(),ss(10,`div`,1)(11,`div`,2)(12,`label`,7),WC(13,`not`),Bu(),Gh(14,`input`,8),Bu(),ss(15,`div`,2)(16,`label`,9),WC(17,`notExactly`),Bu(),Gh(18,`input`,10),Bu()(),ss(19,`div`,1)(20,`div`,2)(21,`label`,11),WC(22,`contains`),Bu(),Gh(23,`input`,12),Bu(),ss(24,`div`,2)(25,`label`,13),WC(26,`containsExactly`),Bu(),Gh(27,`input`,14),Bu()(),ss(28,`div`,1)(29,`div`,2)(30,`label`,15),WC(31,`doesntContain`),Bu(),Gh(32,`input`,16),Bu(),ss(33,`div`,2)(34,`label`,17),WC(35,`doesntContainExactly`),Bu(),Gh(36,`input`,18),Bu()(),ss(37,`button`,19),WC(38,` Submit `),Bu(),ss(39,`div`,20)(40,`div`,21),WC(41,`Form Submitted`),Bu(),ss(42,`p`),WC(43,`Every field passed validation.`),Bu()()()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,ui$1,xe,Si$1,Oi,Ni,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();var Qt=(()=>{class n{constructor(){this.state=null,this.fields={minCount:{rules:[{type:`minCount[2]`,prompt:`Please select at least 2 values`}]},maxCount:{rules:[{type:`maxCount[2]`,prompt:`Please select a max of 2 values`}]},exactCount:{rules:[{type:`exactCount[2]`,prompt:`Please select 2 values`}]}}}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation-rule-selection-count-example`]],standalone:!1,decls:50,vars:2,consts:[[`sui-form`,``,`suiFormValidation`,``,`suiInline`,``,`suiOn`,`change`,3,`suiOnSuccess`,`suiOnFailure`,`suiState`,`suiFields`],[`suiFormField`,``],[`for`,`count-exactCount`],[`id`,`count-exactCount`,`name`,`exactCount`,`multiple`,``],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`value`,`4`],[`value`,`5`],[`for`,`count-minCount`],[`id`,`count-minCount`,`name`,`minCount`,`multiple`,``],[`for`,`count-maxCount`],[`id`,`count-maxCount`,`name`,`maxCount`,`multiple`,``],[`sui-button`,``,`suiColour`,`primary`,`type`,`submit`],[1,`ui`,`success`,`message`],[1,`header`]],template:function(l,r){l&1&&(ss(0,`form`,0),Qh(`suiOnSuccess`,function(){return r.state=`success`})(`suiOnFailure`,function(){return r.state=`error`}),ss(1,`div`,1)(2,`label`,2),WC(3,`Exact Count`),Bu(),ss(4,`select`,3)(5,`option`,4),WC(6,`1`),Bu(),ss(7,`option`,5),WC(8,`2`),Bu(),ss(9,`option`,6),WC(10,`3`),Bu(),ss(11,`option`,7),WC(12,`4`),Bu(),ss(13,`option`,8),WC(14,`5`),Bu()()(),ss(15,`div`,1)(16,`label`,9),WC(17,`Minimum Count`),Bu(),ss(18,`select`,10)(19,`option`,4),WC(20,`1`),Bu(),ss(21,`option`,5),WC(22,`2`),Bu(),ss(23,`option`,6),WC(24,`3`),Bu(),ss(25,`option`,7),WC(26,`4`),Bu(),ss(27,`option`,8),WC(28,`5`),Bu()()(),ss(29,`div`,1)(30,`label`,11),WC(31,`Maximum Count`),Bu(),ss(32,`select`,12)(33,`option`,4),WC(34,`1`),Bu(),ss(35,`option`,5),WC(36,`2`),Bu(),ss(37,`option`,6),WC(38,`3`),Bu(),ss(39,`option`,7),WC(40,`4`),Bu(),ss(41,`option`,8),WC(42,`5`),Bu()()(),ss(43,`button`,13),WC(44,` Submit `),Bu(),ss(45,`div`,14)(46,`div`,15),WC(47,`Form Submitted`),Bu(),ss(48,`p`),WC(49,`Every field passed validation.`),Bu()()()),l&2&&Uh(`suiState`,r.state)(`suiFields`,r.fields)},dependencies:[ci$1,hi$1,fi$1,ui$1,xe,Si$1,Oi,wi,Ii],encapsulation:2,changeDetection:1})}}return n})();function gn(n,u){n&1&&Gh(0,`doc-form-validation-specifying-rules-example`)}function En(n,u){n&1&&Gh(0,`doc-form-validation-longhand-example`)}function bn(n,u){n&1&&Gh(0,`doc-form-validation-parameters-example`)}function Fn(n,u){n&1&&Gh(0,`doc-form-validation-prompts-example`)}function Cn(n,u){n&1&&Gh(0,`doc-form-validation-matching-fields-example`)}function _n(n,u){n&1&&Gh(0,`doc-form-validation-inline-example`)}function wn(n,u){n&1&&Gh(0,`doc-form-validation-dependent-example`)}function On(n,u){n&1&&Gh(0,`doc-form-validation-optional-example`)}function Vn(n,u){n&1&&Gh(0,`doc-form-validation-programmatic-example`)}function Tn(n,u){n&1&&Gh(0,`doc-form-validation-reactive-example`)}function Pn(n,u){n&1&&Gh(0,`doc-form-validation-rule-empty-example`)}function Dn(n,u){n&1&&Gh(0,`doc-form-validation-rule-content-type-example`)}function Rn(n,u){n&1&&Gh(0,`doc-form-validation-rule-payment-example`)}function kn(n,u){n&1&&Gh(0,`doc-form-validation-rule-matching-example`)}function In(n,u){n&1&&Gh(0,`doc-form-validation-rule-length-example`)}function Mn(n,u){n&1&&Gh(0,`doc-form-validation-rule-specified-content-example`)}function Nn(n,u){n&1&&Gh(0,`doc-form-validation-rule-selection-count-example`)}function Ln(n,u){if(n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`Usage`),Bu(),ss(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`Specifying Validation Rules`),Bu(),ss(6,`p`),WC(7,`Pass validation rules for each field to `),ss(8,`code`),WC(9,`suiFields`),Bu(),WC(10,`. Fields are matched by their `),ss(11,`code`),WC(12,`id`),Bu(),WC(13,`, `),ss(14,`code`),WC(15,`name`),Bu(),WC(16,` or `),ss(17,`code`),WC(18,`data-validate`),Bu(),WC(19,` attribute, in that order`),Bu(),ss(20,`div`,5),WC(21,` Rules can be written in shorthand, as a rule name or a list of rule names. `),Bu(),Ph(22,gn,1,0,`ng-template`,6),Bu(),ss(23,`doc-code-sample`,3)(24,`h3`,4),WC(25,`Longhand Rules`),Bu(),ss(26,`p`),WC(27,`Rules can also be written in longhand, which lets you set the identifier and a custom prompt for each rule`),Bu(),Ph(28,En,1,0,`ng-template`,6),Bu(),ss(29,`doc-code-sample`,3)(30,`h3`,4),WC(31,`Passing Parameters to Rules`),Bu(),ss(32,`p`),WC(33,`Rules usually take a parameter in brackets, like `),ss(34,`code`),WC(35,`minLength[2]`),Bu(),WC(36,`. If brackets are awkward, pass the parameter as `),ss(37,`code`),WC(38,`value`),Bu(),WC(39,` instead`),Bu(),Ph(40,bn,1,0,`ng-template`,6),Bu(),ss(41,`doc-code-sample`,3)(42,`h3`,4),WC(43,`Customizing Prompts`),Bu(),ss(44,`p`),WC(45,`Set `),ss(46,`code`),WC(47,`prompt`),Bu(),WC(48,` on a rule to replace the default message. Prompts can use the templates `),ss(49,`code`),WC(50,`{name}`),Bu(),WC(51,`, `),ss(52,`code`),WC(53,`{identifier}`),Bu(),WC(54,`, `),ss(55,`code`),WC(56,`{value}`),Bu(),WC(57,` and `),ss(58,`code`),WC(59,`{ruleValue}`),Bu(),WC(60,`, or be a function of the field value`),Bu(),Ph(61,Fn,1,0,`ng-template`,6),Bu(),ss(62,`doc-code-sample`,3)(63,`h3`,4),WC(64,`Matching Fields`),Bu(),ss(65,`p`),WC(66,`Use `),ss(67,`code`),WC(68,`identifier`),Bu(),WC(69,` when a field's key should not be used to find it, or match fields with a `),ss(70,`code`),WC(71,`data-validate`),Bu(),WC(72,` attribute when the server needs a specific `),ss(73,`code`),WC(74,`name`),Bu()(),Ph(75,Cn,1,0,`ng-template`,6),Bu(),ss(76,`doc-code-sample`,3)(77,`h3`,4),WC(78,`Validating on Blur and Other Events`),Bu(),ss(79,`p`),WC(80,`Set `),ss(81,`code`),WC(82,`suiInline`),Bu(),WC(83,` to show errors in a label next to each field, and `),ss(84,`code`),WC(85,`suiOn`),Bu(),WC(86,` to validate on `),ss(87,`code`),WC(88,`blur`),Bu(),WC(89,` or `),ss(90,`code`),WC(91,`change`),Bu(),WC(92,` instead of submit`),Bu(),Ph(93,_n,1,0,`ng-template`,6),Bu(),ss(94,`doc-code-sample`,3)(95,`h3`,4),WC(96,`Dependent Fields`),Bu(),ss(97,`p`),WC(98,`Add `),ss(99,`code`),WC(100,`depends`),Bu(),WC(101,` with the identifier of another field to only validate a field when that other field has a value`),Bu(),Ph(102,wn,1,0,`ng-template`,6),Bu(),ss(103,`doc-code-sample`,3)(104,`h3`,4),WC(105,`Optional Fields`),Bu(),ss(106,`p`),WC(107,`Add `),ss(108,`code`),WC(109,`optional: true`),Bu(),WC(110,` to only validate a field when it is not empty`),Bu(),Ph(111,On,1,0,`ng-template`,6),Bu(),ss(112,`doc-code-sample`,3)(113,`h3`,4),WC(114,`Validating Programmatically`),Bu(),ss(115,`p`),WC(116,`Export the directive with `),ss(117,`code`),WC(118,`#ref="suiFormValidation"`),Bu(),WC(119,` to validate, read and write values, reset or clear the form`),Bu(),ss(120,`div`,5)(121,`code`),WC(122,`reset()`),Bu(),WC(123,` restores the values the fields had when the form was first validated. `),Bu(),Ph(124,Vn,1,0,`ng-template`,6),Bu(),ss(125,`doc-code-sample`,3)(126,`h3`,4),WC(127,`Reactive Forms`),Bu(),ss(128,`p`)(129,`code`),WC(130,`suiFormValidation`),Bu(),WC(131,` works with `),ss(132,`code`),WC(133,`[formGroup]`),Bu(),WC(134,` and `),ss(135,`code`),WC(136,`ngModel`),Bu(),WC(137,`. Rule failures are added to the matching control's errors under the `),ss(138,`code`),WC(139,`suiFormValidation`),Bu(),WC(140,` key, next to any Angular validator errors`),Bu(),ss(141,`div`,5),WC(142,` With reactive forms, the input's `),ss(143,`code`),WC(144,`id`),Bu(),WC(145,` or `),ss(146,`code`),WC(147,`name`),Bu(),WC(148,` must match the field identifier so errors can be shown next to it. `),Bu(),Ph(149,Tn,1,0,`ng-template`,6),Bu(),Gh(150,`br`),ss(151,`h2`,2),WC(152,`Rules`),Bu(),ss(153,`doc-code-sample`,3)(154,`h3`,4),WC(155,`Empty`),Bu(),ss(156,`p`),WC(157,`Check that a field has a value, or that a checkbox is checked`),Bu(),Ph(158,Pn,1,0,`ng-template`,6),Bu(),ss(159,`doc-code-sample`,3)(160,`h3`,4),WC(161,`Content Type`),Bu(),ss(162,`p`),WC(163,`Inputs can match common content types, or your own regular expression`),Bu(),Ph(164,Dn,1,0,`ng-template`,6),Bu(),ss(165,`doc-code-sample`,3)(166,`h3`,4),WC(167,`Payment`),Bu(),ss(168,`p`),WC(169,`Inputs can validate credit card numbers, optionally limited to some card types`),Bu(),ss(170,`div`,5),WC(171,` Supported types are `),ss(172,`code`),WC(173,`visa`),Bu(),WC(174,`, `),ss(175,`code`),WC(176,`amex`),Bu(),WC(177,`, `),ss(178,`code`),WC(179,`mastercard`),Bu(),WC(180,`, `),ss(181,`code`),WC(182,`discover`),Bu(),WC(183,`, `),ss(184,`code`),WC(185,`unionpay`),Bu(),WC(186,`, `),ss(187,`code`),WC(188,`jcb`),Bu(),WC(189,`, `),ss(190,`code`),WC(191,`dinersClub`),Bu(),WC(192,`, `),ss(193,`code`),WC(194,`maestro`),Bu(),WC(195,`, `),ss(196,`code`),WC(197,`laser`),Bu(),WC(198,` and `),ss(199,`code`),WC(200,`visaElectron`),Bu(),WC(201,`. `),Bu(),Ph(202,Rn,1,0,`ng-template`,6),Bu(),ss(203,`doc-code-sample`,3)(204,`h3`,4),WC(205,`Matching Fields`),Bu(),ss(206,`p`),WC(207,`Fields can be required to match, or differ from, other fields`),Bu(),Ph(208,kn,1,0,`ng-template`,6),Bu(),ss(209,`doc-code-sample`,3)(210,`h3`,4),WC(211,`Length`),Bu(),ss(212,`p`),WC(213,`Inputs can match against the length of their content`),Bu(),Ph(214,In,1,0,`ng-template`,6),Bu(),ss(215,`doc-code-sample`,3)(216,`h3`,4),WC(217,`Specified Content`),Bu(),ss(218,`p`),WC(219,`Rules can specify content that should or should not appear in an input`),Bu(),Ph(220,Mn,1,0,`ng-template`,6),Bu(),ss(221,`doc-code-sample`,3)(222,`h3`,4),WC(223,`Selection Count`),Bu(),ss(224,`p`),WC(225,`Multiple selects can specify how many options should be chosen`),Bu(),Ph(226,Nn,1,0,`ng-template`,6),Bu()()),n&2){let a=hC();KD(3),Uh(`templateCode`,a.snippetSpecifyingRules)(`componentCode`,a.snippetSpecifyingRulesTs),KD(20),Uh(`templateCode`,a.snippetLonghand)(`componentCode`,a.snippetLonghandTs),KD(6),Uh(`templateCode`,a.snippetParameters)(`componentCode`,a.snippetParametersTs),KD(12),Uh(`templateCode`,a.snippetPrompts)(`componentCode`,a.snippetPromptsTs),KD(21),Uh(`templateCode`,a.snippetMatchingFields)(`componentCode`,a.snippetMatchingFieldsTs),KD(14),Uh(`templateCode`,a.snippetInline)(`componentCode`,a.snippetInlineTs),KD(18),Uh(`templateCode`,a.snippetDependent)(`componentCode`,a.snippetDependentTs),KD(9),Uh(`templateCode`,a.snippetOptional)(`componentCode`,a.snippetOptionalTs),KD(9),Uh(`templateCode`,a.snippetProgrammatic)(`componentCode`,a.snippetProgrammaticTs),KD(13),Uh(`templateCode`,a.snippetReactive)(`componentCode`,a.snippetReactiveTs),KD(28),Uh(`templateCode`,a.snippetRuleEmpty)(`componentCode`,a.snippetRuleEmptyTs),KD(6),Uh(`templateCode`,a.snippetRuleContentType)(`componentCode`,a.snippetRuleContentTypeTs),KD(6),Uh(`templateCode`,a.snippetRulePayment)(`componentCode`,a.snippetRulePaymentTs),KD(38),Uh(`templateCode`,a.snippetRuleMatching)(`componentCode`,a.snippetRuleMatchingTs),KD(6),Uh(`templateCode`,a.snippetRuleLength)(`componentCode`,a.snippetRuleLengthTs),KD(6),Uh(`templateCode`,a.snippetRuleSpecifiedContent)(`componentCode`,a.snippetRuleSpecifiedContentTs),KD(6),Uh(`templateCode`,a.snippetRuleSelectionCount)(`componentCode`,a.snippetRuleSelectionCountTs)}}function Bn(n,u){n&1&&(ss(0,`div`)(1,`div`,5)(2,`code`),WC(3,`suiFormValidation`),Bu(),WC(4,` is part of `),ss(5,`code`),WC(6,`SuiFormModule`),Bu(),WC(7,` from `),ss(8,`code`),WC(9,`ngx-semantic/collections/form`),Bu(),WC(10,`. Use it on a `),ss(11,`code`),WC(12,`<form>`),Bu(),WC(13,` together with `),ss(14,`code`),WC(15,`sui-form`),Bu(),WC(16,`. `),Bu(),ss(17,`h2`,2),WC(18,`suiFormValidation`),Bu(),ss(19,`h4`,4),WC(20,`Properties`),Bu(),ss(21,`table`,7)(22,`thead`)(23,`tr`)(24,`th`),WC(25,`Property`),Bu(),ss(26,`th`),WC(27,`Description`),Bu(),ss(28,`th`),WC(29,`Type`),Bu(),ss(30,`th`),WC(31,`Default`),Bu()()(),ss(32,`tbody`)(33,`tr`)(34,`td`),WC(35,` suiFields `),Bu(),ss(36,`td`),WC(37,` Validation rules keyed by field. Each value is a rule, a list of rules, or a longhand field definition `),Bu(),ss(38,`td`)(39,`div`,8),WC(40,` SuiFormValidationFieldsInput `),Bu()(),ss(41,`td`)(42,`div`,9),WC(43,` null `),Bu()()(),ss(44,`tr`)(45,`td`),WC(46,` suiOn `),Bu(),ss(47,`td`),WC(48,` When fields are validated `),Bu(),ss(49,`td`)(50,`div`,8),WC(51,` 'submit' | 'blur' | 'change' `),Bu()(),ss(52,`td`)(53,`div`,9),WC(54,` 'submit' `),Bu()()(),ss(55,`tr`)(56,`td`),WC(57,` suiInline `),Bu(),ss(58,`td`),WC(59,` Show each error in a label next to its field `),Bu(),ss(60,`td`)(61,`div`,8),WC(62,` boolean `),Bu()(),ss(63,`td`)(64,`div`,9),WC(65,` false `),Bu()()(),ss(66,`tr`)(67,`td`),WC(68,` suiRevalidate `),Bu(),ss(69,`td`),WC(70,` Revalidate fields with errors as their value changes `),Bu(),ss(71,`td`)(72,`div`,8),WC(73,` boolean `),Bu()(),ss(74,`td`)(75,`div`,9),WC(76,` true `),Bu()()(),ss(77,`tr`)(78,`td`),WC(79,` suiDelay `),Bu(),ss(80,`td`),WC(81,` Milliseconds to wait after typing before validating with `),ss(82,`code`),WC(83,`change`),Bu(),WC(84,` or revalidation. `),ss(85,`code`),WC(86,`true`),Bu(),WC(87,` uses 300ms `),Bu(),ss(88,`td`)(89,`div`,8),WC(90,` number | boolean `),Bu()(),ss(91,`td`)(92,`div`,9),WC(93,` true `),Bu()()(),ss(94,`tr`)(95,`td`),WC(96,` suiKeyboardShortcuts `),Bu(),ss(97,`td`),WC(98,` Blur the focused field when `),ss(99,`code`),WC(100,`Escape`),Bu(),WC(101,` is pressed `),Bu(),ss(102,`td`)(103,`div`,8),WC(104,` boolean `),Bu()(),ss(105,`td`)(106,`div`,9),WC(107,` true `),Bu()()(),ss(108,`tr`)(109,`td`),WC(110,` suiMarkControlsTouchedOnInvalid `),Bu(),ss(111,`td`),WC(112,` With `),ss(113,`code`),WC(114,`NgForm`),Bu(),WC(115,` or `),ss(116,`code`),WC(117,`[formGroup]`),Bu(),WC(118,`, mark every control as touched after a failed submit `),Bu(),ss(119,`td`)(120,`div`,8),WC(121,` boolean `),Bu()(),ss(122,`td`)(123,`div`,9),WC(124,` true `),Bu()()()()(),ss(125,`h4`,4),WC(126,`Events`),Bu(),ss(127,`table`,7)(128,`thead`)(129,`tr`)(130,`th`),WC(131,`Event`),Bu(),ss(132,`th`),WC(133,`Description`),Bu(),ss(134,`th`),WC(135,`Type`),Bu()()(),ss(136,`tbody`)(137,`tr`)(138,`td`),WC(139,` suiOnSuccess `),Bu(),ss(140,`td`),WC(141,` Emitted when the form is submitted or validated and every field is valid `),Bu(),ss(142,`td`)(143,`div`,8),WC(144,` EventEmitter&lt;Event&gt; `),Bu()()(),ss(145,`tr`)(146,`td`),WC(147,` suiOnFailure `),Bu(),ss(148,`td`),WC(149,` Emitted when validation fails, with the error messages and the identifiers of the invalid fields `),Bu(),ss(150,`td`)(151,`div`,8),WC(152,` EventEmitter&lt;{errors: string[]; fields: string[]}&gt; `),Bu()()()()(),ss(153,`h4`,4),WC(154,`Methods`),Bu(),ss(155,`table`,7)(156,`thead`)(157,`tr`)(158,`th`),WC(159,`Method`),Bu(),ss(160,`th`),WC(161,`Description`),Bu()()(),ss(162,`tbody`)(163,`tr`)(164,`td`),WC(165,` validateForm() `),Bu(),ss(166,`td`),WC(167,` Validates the whole form, shows errors and emits `),ss(168,`code`),WC(169,`suiOnSuccess`),Bu(),WC(170,` or `),ss(171,`code`),WC(172,`suiOnFailure`),Bu(),WC(173,`. Returns whether the form is valid `),Bu()(),ss(174,`tr`)(175,`td`),WC(176,` validateField(identifier) `),Bu(),ss(177,`td`),WC(178,` Validates one field and shows its error. Returns whether it is valid `),Bu()(),ss(179,`tr`)(180,`td`),WC(181,` isValid(identifier?) `),Bu(),ss(182,`td`),WC(183,` Returns whether the form, or one field, passes its rules without updating the UI `),Bu()(),ss(184,`tr`)(185,`td`),WC(186,` getFieldElement(identifier) `),Bu(),ss(187,`td`),WC(188,` Returns the element matching an id, name or `),ss(189,`code`),WC(190,`data-validate`),Bu(),WC(191,` value `),Bu()(),ss(192,`tr`)(193,`td`),WC(194,` getValue(identifier) `),Bu(),ss(195,`td`),WC(196,` Returns the value of a field `),Bu()(),ss(197,`tr`)(198,`td`),WC(199,` getValues(identifiers?) `),Bu(),ss(200,`td`),WC(201,` Returns the values of the given fields, or of every validated field `),Bu()(),ss(202,`tr`)(203,`td`),WC(204,` setValue(identifier, value) `),Bu(),ss(205,`td`),WC(206,` Sets the value of a field `),Bu()(),ss(207,`tr`)(208,`td`),WC(209,` setValues(values) `),Bu(),ss(210,`td`),WC(211,` Sets several field values from an object `),Bu()(),ss(212,`tr`)(213,`td`),WC(214,` reset() `),Bu(),ss(215,`td`),WC(216,` Restores every field to the value it had when the form was first validated `),Bu()(),ss(217,`tr`)(218,`td`),WC(219,` clear() `),Bu(),ss(220,`td`),WC(221,` Clears every field in the form `),Bu()(),ss(222,`tr`)(223,`td`),WC(224,` getAngularForm() `),Bu(),ss(225,`td`),WC(226,` Returns the `),ss(227,`code`),WC(228,`FormGroup`),Bu(),WC(229,` of a `),ss(230,`code`),WC(231,`[formGroup]`),Bu(),WC(232,` or `),ss(233,`code`),WC(234,`NgForm`),Bu(),WC(235,` on the form, if there is one `),Bu()()()(),ss(236,`h4`,4),WC(237,`Field Definition`),Bu(),ss(238,`table`,7)(239,`thead`)(240,`tr`)(241,`th`),WC(242,`Property`),Bu(),ss(243,`th`),WC(244,`Description`),Bu(),ss(245,`th`),WC(246,`Type`),Bu()()(),ss(247,`tbody`)(248,`tr`)(249,`td`),WC(250,` identifier `),Bu(),ss(251,`td`),WC(252,` The id, name or `),ss(253,`code`),WC(254,`data-validate`),Bu(),WC(255,` value of the field. Defaults to the key in `),ss(256,`code`),WC(257,`suiFields`),Bu()(),ss(258,`td`)(259,`div`,8),WC(260,` string `),Bu()()(),ss(261,`tr`)(262,`td`),WC(263,` rules `),Bu(),ss(264,`td`),WC(265,` The rules to check, as rule names or `),ss(266,`code`),WC(267,`{ type, prompt, value }`),Bu(),WC(268,` objects `),Bu(),ss(269,`td`)(270,`div`,8),WC(271,` SuiFormValidationRuleSpec[] | string | string[] `),Bu()()(),ss(272,`tr`)(273,`td`),WC(274,` optional `),Bu(),ss(275,`td`),WC(276,` Only validate the field when it is not empty `),Bu(),ss(277,`td`)(278,`div`,8),WC(279,` boolean `),Bu()()(),ss(280,`tr`)(281,`td`),WC(282,` depends `),Bu(),ss(283,`td`),WC(284,` Only validate the field when this other field has a value `),Bu(),ss(285,`td`)(286,`div`,8),WC(287,` string `),Bu()()()()(),ss(288,`h4`,4),WC(289,`Rules`),Bu(),ss(290,`table`,7)(291,`thead`)(292,`tr`)(293,`th`),WC(294,`Rule`),Bu(),ss(295,`th`),WC(296,`Description`),Bu()()(),ss(297,`tbody`)(298,`tr`)(299,`td`),WC(300,` empty `),Bu(),ss(301,`td`),WC(302,` A field is not empty `),Bu()(),ss(303,`tr`)(304,`td`),WC(305,` checked `),Bu(),ss(306,`td`),WC(307,` A checkbox field is checked `),Bu()(),ss(308,`tr`)(309,`td`),WC(310,` email `),Bu(),ss(311,`td`),WC(312,` A field is a valid e-mail address `),Bu()(),ss(313,`tr`)(314,`td`),WC(315,` url `),Bu(),ss(316,`td`),WC(317,` A field is a url `),Bu()(),ss(318,`tr`)(319,`td`),WC(320,` integer `),Bu(),ss(321,`td`),WC(322,` A field is an integer, or in a range: `),ss(323,`code`),WC(324,`integer[1..10]`),Bu()()(),ss(325,`tr`)(326,`td`),WC(327,` decimal `),Bu(),ss(328,`td`),WC(329,` A field is a decimal number `),Bu()(),ss(330,`tr`)(331,`td`),WC(332,` number `),Bu(),ss(333,`td`),WC(334,` A field is any number, decimal or not `),Bu()(),ss(335,`tr`)(336,`td`),WC(337,` regExp[expression] `),Bu(),ss(338,`td`),WC(339,` A field matches a regular expression: `),ss(340,`code`),WC(341,`regExp[/^[a-z0-9_-]{3,16}$/]`),Bu()()(),ss(342,`tr`)(343,`td`),WC(344,` creditCard `),Bu(),ss(345,`td`),WC(346,` A field is a valid credit card, optionally of some types: `),ss(347,`code`),WC(348,`creditCard[visa,mastercard]`),Bu()()(),ss(349,`tr`)(350,`td`),WC(351,` contains / containsExactly `),Bu(),ss(352,`td`),WC(353,` A field contains text, case insensitive or sensitive: `),ss(354,`code`),WC(355,`contains[foo]`),Bu()()(),ss(356,`tr`)(357,`td`),WC(358,` doesntContain / doesntContainExactly `),Bu(),ss(359,`td`),WC(360,` A field does not contain text: `),ss(361,`code`),WC(362,`doesntContain[foo]`),Bu()()(),ss(363,`tr`)(364,`td`),WC(365,` is / isExactly `),Bu(),ss(366,`td`),WC(367,` A field is a value: `),ss(368,`code`),WC(369,`is[foo]`),Bu()()(),ss(370,`tr`)(371,`td`),WC(372,` not / notExactly `),Bu(),ss(373,`td`),WC(374,` A field is not a value: `),ss(375,`code`),WC(376,`not[foo]`),Bu()()(),ss(377,`tr`)(378,`td`),WC(379,` minLength / exactLength / maxLength `),Bu(),ss(380,`td`),WC(381,` A field's length: `),ss(382,`code`),WC(383,`minLength[5]`),Bu()()(),ss(384,`tr`)(385,`td`),WC(386,` match / different `),Bu(),ss(387,`td`),WC(388,` A field matches, or differs from, another field: `),ss(389,`code`),WC(390,`match[password]`),Bu()()(),ss(391,`tr`)(392,`td`),WC(393,` minCount / exactCount / maxCount `),Bu(),ss(394,`td`),WC(395,` A multiple select has a number of selections: `),ss(396,`code`),WC(397,`minCount[2]`),Bu()()()()()())}var ti=(()=>{class n{constructor(a){this.snippetSpecifyingRules=nt,this.snippetSpecifyingRulesTs=at,this.snippetLonghand=lt,this.snippetLonghandTs=rt,this.snippetParameters=ot,this.snippetParametersTs=st,this.snippetPrompts=mt,this.snippetPromptsTs=dt,this.snippetMatchingFields=ut,this.snippetMatchingFieldsTs=pt,this.snippetInline=ct,this.snippetInlineTs=ft,this.snippetDependent=ht,this.snippetDependentTs=vt,this.snippetOptional=xt,this.snippetOptionalTs=St,this.snippetProgrammatic=yt,this.snippetProgrammaticTs=gt,this.snippetReactive=Et,this.snippetReactiveTs=bt,this.snippetRuleEmpty=Ft,this.snippetRuleEmptyTs=Ct,this.snippetRuleContentType=_t,this.snippetRuleContentTypeTs=wt,this.snippetRulePayment=Ot,this.snippetRulePaymentTs=Vt,this.snippetRuleMatching=Tt,this.snippetRuleMatchingTs=Pt,this.snippetRuleLength=Dt,this.snippetRuleLengthTs=Rt,this.snippetRuleSpecifiedContent=kt,this.snippetRuleSpecifiedContentTs=It,this.snippetRuleSelectionCount=Mt,this.snippetRuleSelectionCountTs=Nt,a.setTitle(`Form Validation | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-form-validation`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Form Validation`,`subHeader`,`A form validation behavior checks data against a set of criteria before passing it along to the server`,`semanticUrl`,`https://semantic-ui.com/behaviors/form.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,r){l&1&&(ss(0,`doc-page`,0),Ph(1,Ln,227,34,`div`,1)(2,Bn,398,0,`div`,1),Bu()),l&2&&(KD(),Uh(`docPageContent`,`definition`),KD(),Uh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$1,li$2,U,Ws,fi$2,Lt,Bt,Gt,At,Ut,Wt,jt,zt,qt,$t,Ht,Yt,Zt,Kt,Jt,Xt,Qt],encapsulation:2,changeDetection:1})}}return n})();var ii=`<div sui-grid>
  <div suiGridColumn
       suiWidth="ten">
    <div class="visibility-scroller"
         #scroller>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <div sui-segment
           suiVisibility
           [suiContext]="scroller"
           [suiOnce]="false"
           (suiOnUpdate)="calculations = $event">
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
      </div>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridColumn
       suiWidth="six">
    <table sui-table
           suiCelled
           suiCompact="very compact">
      <thead>
      <tr>
        <th>Calculation</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
        @for (key of keys; track key) {
          <tr>
            <td>{{ key }}</td>
            <td>{{ calculations?.[key] }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>
</div>
`;var ni=`import { SuiVisibilityCalculations } from 'ngx-semantic/modules/visibility';

calculations: SuiVisibilityCalculations | null = null;
keys: (keyof SuiVisibilityCalculations)[] = [
  'pixelsPassed', 'percentagePassed', 'fits', 'width', 'height', 'direction',
  'onScreen', 'offScreen', 'passing', 'topVisible', 'bottomVisible', 'topPassed', 'bottomPassed'
];
`;var ai=`<div sui-buttons
     suiSize="small">
  <button sui-button
          (click)="events = []; tracker.refresh()">
    Clear
  </button>
  <button sui-button
          suiToggle
          [suiActive]="once"
          (click)="once = !once">
    Once
  </button>
  <button sui-button
          suiToggle
          [suiActive]="continuous"
          (click)="continuous = !continuous">
    Continuous
  </button>
</div>
<div sui-grid>
  <div suiGridColumn
       suiWidth="ten">
    <div class="visibility-scroller"
         #scroller>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <div sui-segment
           suiVisibility
           #tracker="suiVisibility"
           [suiContext]="scroller"
           [suiOnce]="once"
           [suiContinuous]="continuous"
           (suiOnTopVisible)="log('Top visible')"
           (suiOnTopPassed)="log('Top passed')"
           (suiOnBottomVisible)="log('Bottom visible')"
           (suiOnBottomPassed)="log('Bottom passed')"
           (suiOnTopVisibleReverse)="log('Top not visible')"
           (suiOnBottomPassedReverse)="log('Bottom not passed')">
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
      </div>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridColumn
       suiWidth="six">
    <div sui-segment>
      <h4 sui-header>Event Log</h4>
      @for (event of events; track $index) {
        <div>{{ event }}</div>
      } @empty {
        <em>Scroll the content to log events</em>
      }
    </div>
  </div>
</div>
`;var li=`once = true;
continuous = false;
events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 10);
}
`;var ri=`<div sui-grid>
  <div suiGridColumn
       suiWidth="ten">
    <div class="visibility-scroller"
         #scroller>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <div sui-segment
           suiVisibility
           [suiContext]="scroller"
           [suiPassed]="['25%', '50%', '75%', '100%']"
           (suiOnPassed)="log($event.amount + ' passed')">
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
      </div>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
    </div>
  </div>
  <div suiGridColumn
       suiWidth="six">
    <div sui-segment>
      <h4 sui-header>Event Log</h4>
      @for (event of events; track $index) {
        <div>{{ event }}</div>
      } @empty {
        <em>Scroll the content to log events</em>
      }
    </div>
  </div>
</div>
`;var oi=`events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 10);
}
`;var si=`<div class="visibility-scroller"
     #scroller>
  <div sui-segment
       suiVisibility
       [suiContext]="scroller"
       [suiOnce]="false"
       suiObserveChanges
       (suiOnBottomVisible)="loadMore()">
    @for (item of items; track $index) {
      <doc-wireframe [type]="item"></doc-wireframe>
    }
    @if (loading) {
      <div sui-message
           suiState="info">
        Adding more content...
      </div>
    }
    @if (loads >= maxLoads) {
      <div sui-message>
        That's everything.
      </div>
    }
  </div>
</div>
`;var mi=`items: string[] = ['paragraph', 'short-paragraph', 'paragraph', 'short-paragraph'];
loading = false;
loads = 0;
maxLoads = 5;

loadMore(): void {
  if (this.loading || this.loads >= this.maxLoads) {
    return;
  }
  this.loading = true;
  // simulate a request for more content
  setTimeout(() => {
    this.items = [...this.items, 'paragraph', 'short-paragraph', 'paragraph'];
    this.loads++;
    this.loading = false;
  }, 800);
}
`;var di=`<div class="visibility-scroller"
     #scroller>
  @for (person of people; track person) {
    <h4 sui-header>
      <img sui-image
           suiSize="tiny"
           suiRounded
           suiVisibility
           suiType="image"
           [suiContext]="scroller"
           src="assets/images/wireframes/image.png"
           [attr.data-src]="'assets/images/' + person + '.jpg'"
           (suiOnLoad)="loaded = loaded + 1">
      {{ person | titlecase }}
    </h4>
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  }
</div>
<p>Images loaded: {{ loaded }} / {{ people.length }}</p>
`;var ui=`people = ['elliot', 'helen', 'jenny', 'joe', 'justen', 'laura', 'matt', 'stevie'];
loaded = 0;
`;var pi=`<div class="visibility-scroller"
     #scroller>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
  <div sui-segment
       suiVisibility
       [suiContext]="scroller"
       [suiOnce]="false"
       suiContinuous
       (suiOnPassing)="shade = $event.percentagePassed"
       (suiOnTopPassedReverse)="shade = 0"
       [style.background-color]="'rgba(0, 0, 0, ' + shade + ')'">
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="short-paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
        <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
      <doc-wireframe type="paragraph"></doc-wireframe>
      <doc-wireframe type="short-paragraph"></doc-wireframe>
      <doc-wireframe type="paragraph"></doc-wireframe>
</div>
`;var ci=`<div sui-menu
     class="overlay"
     suiVisibility
     suiType="fixed"
     [suiOffset]="15"
     [suiZIndex]="10"
     (suiOnFixed)="fixed = true"
     (suiOnUnfixed)="fixed = false">
  <div suiMenuItem>Menu</div>
  <a suiMenuItem>Option 1</a>
  <a suiMenuItem>Option 2</a>
  <a suiMenuItem>Option 3</a>
</div>
<doc-wireframe type="paragraph"></doc-wireframe>
<doc-wireframe type="short-paragraph"></doc-wireframe>
<doc-wireframe type="paragraph"></doc-wireframe>
`;function Jn(n){let u=n.offset||0,a=n.element.top,l=n.element.bottom,r=n.element.height;n.includeMargin&&(a-=n.marginTop,l+=n.marginBottom,r+=n.marginTop+n.marginBottom);let s=n.screen.top+u,p=n.screen.top+n.screen.height+u,F=p>=a,ie=s>=a,ve=p>=l,A=s>=l,Oe=F&&!A,Ci=ie&&!A,Ve=Math.max(0,s-a),_i=r>0?Ve/r:0,wi=n.scrollTop<n.lastScrollTop?`up`:`down`;return{topVisible:F,topPassed:ie,bottomVisible:ve,bottomPassed:A,passing:Ci,onScreen:Oe,offScreen:!Oe,fits:r<n.screen.height,width:n.element.width,height:r,pixelsPassed:Ve,percentagePassed:_i,direction:wi}}function Xn(n){return n?Array.isArray(n)?n:Object.keys(n):[]}function Qn(n,u){let a=n.trim();return a.endsWith(`%`)?parseFloat(a)/100*u:parseFloat(a)}function fi(n,u,a,l,r){return n?r?!0:l?!a:!u:!1}function ea(n,u,a,l,r,s){return n||!(a||u)?!1:s?!0:r?!l:u}var ta=[`onScreen`,`offScreen`,`topVisible`,`topPassed`,`bottomVisible`,`bottomPassed`,`passing`];var ia={topVisible:`topVisibleReverse`,topPassed:`topPassedReverse`,bottomVisible:`bottomVisibleReverse`,bottomPassed:`bottomPassedReverse`,passing:`passingReverse`};var G=(()=>{class n{constructor(){this.document=g(Y),this.el=g(Ie),this.renderer=g(yn),this.zone=g(G$1),this.suiOnce=!0,this.suiContinuous=!1,this.suiContext=`window`,this.suiScrollContext=null,this.suiOffset=0,this.suiIncludeMargin=!1,this.suiInitialCheck=!0,this.suiObserveChanges=!1,this.suiThrottle=!1,this.suiType=!1,this.suiPassed=null,this.suiZIndex=1,this.suiOnOnScreen=new nt$1,this.suiOnOffScreen=new nt$1,this.suiOnTopVisible=new nt$1,this.suiOnTopPassed=new nt$1,this.suiOnBottomVisible=new nt$1,this.suiOnBottomPassed=new nt$1,this.suiOnPassing=new nt$1,this.suiOnTopVisibleReverse=new nt$1,this.suiOnTopPassedReverse=new nt$1,this.suiOnBottomVisibleReverse=new nt$1,this.suiOnBottomPassedReverse=new nt$1,this.suiOnPassingReverse=new nt$1,this.suiOnUpdate=new nt$1,this.suiOnPassed=new nt$1,this.suiOnRefresh=new nt$1,this.suiOnFixed=new nt$1,this.suiOnUnfixed=new nt$1,this.suiOnLoad=new nt$1,this.lastCalculations=null,this.destroy$=new he$1,this.occurred={},this.previous={},this.scrollEl=window,this.lastScrollTop=0,this.disabled=!1,this.mutationObserver=null,this.refreshTimer=null,this.throttleTimer=null,this.rafId=null,this.imageLoaded=!1,this.isFixed=!1,this.placeholder=null,this.emitters={onScreen:this.suiOnOnScreen,offScreen:this.suiOnOffScreen,topVisible:this.suiOnTopVisible,topPassed:this.suiOnTopPassed,bottomVisible:this.suiOnBottomVisible,bottomPassed:this.suiOnBottomPassed,passing:this.suiOnPassing,topVisibleReverse:this.suiOnTopVisibleReverse,topPassedReverse:this.suiOnTopPassedReverse,bottomVisibleReverse:this.suiOnBottomVisibleReverse,bottomPassedReverse:this.suiOnBottomPassedReverse,passingReverse:this.suiOnPassingReverse}}ngOnInit(){this.bindListeners()}ngAfterViewInit(){this.suiObserveChanges&&typeof MutationObserver<`u`&&(this.mutationObserver=new MutationObserver(()=>this.scheduleRefresh()),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,subtree:!0,attributes:!0})),this.suiInitialCheck&&queueMicrotask(()=>this.check())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.mutationObserver?.disconnect(),this.refreshTimer&&clearTimeout(this.refreshTimer),this.throttleTimer&&clearTimeout(this.throttleTimer),this.rafId!=null&&cancelAnimationFrame(this.rafId),this.removePlaceholder()}refresh(){Object.keys(this.occurred).forEach(a=>{delete this.occurred[a]}),Object.keys(this.previous).forEach(a=>{delete this.previous[a]}),this.suiOnRefresh.emit(),this.check()}disable(){this.disabled=!0}enable(){this.disabled=!1,this.check()}check(){if(this.disabled)return;this.scrollEl=this.resolveScrollElement();let a=this.readCalculations();this.lastCalculations=a,this.suiOnUpdate.emit(a),this.emitConditions(a),this.emitPassed(a),this.applyImageType(a),this.applyFixedType(a)}bindListeners(){let a=this.document.defaultView;this.scrollEl=this.resolveScrollElement(),this.zone.runOutsideAngular(()=>{let l=this.scrollEl===window?a:this.scrollEl;ea$1(l,`scroll`,{passive:!0}).pipe(ly(this.destroy$)).subscribe(()=>this.scheduleCheck()),ea$1(a,`resize`,{passive:!0}).pipe(ly(this.destroy$)).subscribe(()=>this.scheduleCheck())})}scheduleCheck(){if(!this.disabled){if(typeof this.suiThrottle==`number`&&this.suiThrottle>0){this.throttleTimer!=null&&clearTimeout(this.throttleTimer),this.throttleTimer=setTimeout(()=>{this.throttleTimer=null,this.zone.run(()=>this.check())},this.suiThrottle);return}this.rafId??=requestAnimationFrame(()=>{this.rafId=null,this.zone.run(()=>this.check())})}}scheduleRefresh(){this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.refreshTimer=null,this.refresh()},100)}resolveScrollElement(){let a=this.suiScrollContext??this.suiContext;return!a||a===`window`?window:typeof a!=`string`?a:this.document.querySelector(a)||window}readScrollTop(){return this.scrollEl===window?window.scrollY:this.scrollEl.scrollTop}readCalculations(){let a=this.el.nativeElement,l=a.getBoundingClientRect(),r=getComputedStyle(a),s=parseFloat(r.marginTop)||0,p=parseFloat(r.marginBottom)||0,F=this.readScrollTop(),ie=this.scrollEl===window?{top:0,height:window.innerHeight}:(()=>{let A=this.scrollEl.getBoundingClientRect();return{top:A.top,height:A.height}})(),ve=Jn({element:{top:l.top,bottom:l.bottom,width:l.width,height:l.height},screen:ie,offset:this.suiOffset,includeMargin:this.suiIncludeMargin,marginTop:s,marginBottom:p,lastScrollTop:this.lastScrollTop,scrollTop:F});return this.lastScrollTop=F,ve}emitConditions(a){for(let l of ta){let r=a[l],s=!!this.previous[l],p=ia[l];fi(r,s,!!this.occurred[l],this.suiOnce,this.suiContinuous)&&this.emitters[l].emit(a),p&&ea(r,s,!!this.occurred[l],!!this.occurred[p],this.suiOnce,this.suiContinuous)&&(this.emitters[p].emit(a),this.occurred[p]=!0),r?(this.occurred[l]=!0,!this.suiOnce&&p&&(this.occurred[p]=!1)):this.suiOnce||(this.occurred[l]=!1),this.previous[l]=r}}emitPassed(a){if(!(!a.topPassed&&!a.passing))for(let l of Xn(this.suiPassed)){let r=Qn(l,a.height);if(Number.isNaN(r)||a.pixelsPassed<r)continue;let s=`passed:${l}`;fi(!0,!!this.previous[s],!!this.occurred[s],this.suiOnce,this.suiContinuous)&&this.suiOnPassed.emit({amount:l,calculations:a}),this.occurred[s]=!0,this.previous[s]=!0}}applyImageType(a){if(this.suiType!==`image`||this.imageLoaded||!a.topVisible)return;let l=this.el.nativeElement,r=l.getAttribute(`data-src`);r&&(this.renderer.setAttribute(l,`src`,r),this.renderer.removeAttribute(l,`data-src`),this.imageLoaded=!0,this.suiOnLoad.emit(a))}applyFixedType(a){this.suiType===`fixed`&&(a.topPassed?this.fixElement(a):this.unfixElement(a))}fixElement(a){if(this.isFixed)return;let l=this.el.nativeElement,r=l.getBoundingClientRect(),s=l.parentNode;s&&(this.placeholder=this.renderer.createElement(`div`),this.renderer.setStyle(this.placeholder,`display`,`block`),this.renderer.setStyle(this.placeholder,`width`,`${r.width}px`),this.renderer.setStyle(this.placeholder,`height`,`${r.height}px`),this.renderer.insertBefore(s,this.placeholder,l)),this.renderer.addClass(l,`fixed`),this.renderer.setStyle(l,`position`,`fixed`),this.renderer.setStyle(l,`top`,`${this.suiOffset}px`),this.renderer.setStyle(l,`z-index`,String(this.suiZIndex)),this.isFixed=!0,this.suiOnFixed.emit(a)}unfixElement(a){if(!this.isFixed)return;let l=this.el.nativeElement;this.renderer.removeClass(l,`fixed`),this.renderer.removeStyle(l,`position`),this.renderer.removeStyle(l,`top`),this.renderer.removeStyle(l,`z-index`),this.removePlaceholder(),this.isFixed=!1,this.suiOnUnfixed.emit(a)}removePlaceholder(){if(!this.placeholder)return;let a=this.placeholder.parentNode;a&&this.renderer.removeChild(a,this.placeholder),this.placeholder=null}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵdir=Ve({type:n,selectors:[[``,`suiVisibility`,``]],inputs:{suiOnce:`suiOnce`,suiContinuous:`suiContinuous`,suiContext:`suiContext`,suiScrollContext:`suiScrollContext`,suiOffset:`suiOffset`,suiIncludeMargin:`suiIncludeMargin`,suiInitialCheck:`suiInitialCheck`,suiObserveChanges:`suiObserveChanges`,suiThrottle:`suiThrottle`,suiType:`suiType`,suiPassed:`suiPassed`,suiZIndex:`suiZIndex`},outputs:{suiOnOnScreen:`suiOnOnScreen`,suiOnOffScreen:`suiOnOffScreen`,suiOnTopVisible:`suiOnTopVisible`,suiOnTopPassed:`suiOnTopPassed`,suiOnBottomVisible:`suiOnBottomVisible`,suiOnBottomPassed:`suiOnBottomPassed`,suiOnPassing:`suiOnPassing`,suiOnTopVisibleReverse:`suiOnTopVisibleReverse`,suiOnTopPassedReverse:`suiOnTopPassedReverse`,suiOnBottomVisibleReverse:`suiOnBottomVisibleReverse`,suiOnBottomPassedReverse:`suiOnBottomPassedReverse`,suiOnPassingReverse:`suiOnPassingReverse`,suiOnUpdate:`suiOnUpdate`,suiOnPassed:`suiOnPassed`,suiOnRefresh:`suiOnRefresh`,suiOnFixed:`suiOnFixed`,suiOnUnfixed:`suiOnUnfixed`,suiOnLoad:`suiOnLoad`},exportAs:[`suiVisibility`]})}}return dS([ve()],n.prototype,`suiOnce`,void 0),dS([ve()],n.prototype,`suiContinuous`,void 0),dS([ve()],n.prototype,`suiIncludeMargin`,void 0),dS([ve()],n.prototype,`suiInitialCheck`,void 0),dS([ve()],n.prototype,`suiObserveChanges`,void 0),n})();var hi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[sl]})}}return n})();function aa(n,u){if(n&1&&(ss(0,`tr`)(1,`td`),WC(2),Bu(),ss(3,`td`),WC(4),Bu()()),n&2){let a=u.$implicit,l=hC();KD(2),hg(a),KD(2),hg(l.calculations?.[a])}}function la(n,u){if(n&1&&(ss(0,`div`),WC(1),Bu()),n&2){let a=u.$implicit;KD(),hg(a)}}function ra(n,u){n&1&&(ss(0,`em`),WC(1,`Scroll the content to log events`),Bu())}var oa=()=>[`25%`,`50%`,`75%`,`100%`];function sa(n,u){if(n&1&&(ss(0,`div`),WC(1),Bu()),n&2){let a=u.$implicit;KD(),hg(a)}}function ma(n,u){n&1&&(ss(0,`em`),WC(1,`Scroll the content to log events`),Bu())}function da(n,u){if(n&1&&Gh(0,`doc-wireframe`,3),n&2){let a=u.$implicit;Uh(`type`,a)}}function ua(n,u){n&1&&(ss(0,`div`,4),WC(1,` Adding more content... `),Bu())}function pa(n,u){n&1&&(ss(0,`div`,5),WC(1,` That's everything. `),Bu())}function ca(n,u){if(n&1){let a=fC();ss(0,`h4`,2)(1,`img`,3),Qh(`suiOnLoad`,function(){Pd(a);let r=hC();return jd(r.loaded=r.loaded+1)}),Bu(),WC(2),rw(3,`titlecase`),Bu(),Gh(4,`doc-wireframe`,4)}if(n&2){let a=u.$implicit;hC();let l=IC(1);KD(),Uh(`suiContext`,l),$h(`data-src`,`assets/images/`+a+`.jpg`),KD(),zu(` `,iw(3,3,a),` `)}}var k=class{constructor(){this.calculations=null,this.keys=[`pixelsPassed`,`percentagePassed`,`fits`,`width`,`height`,`direction`,`onScreen`,`offScreen`,`passing`,`topVisible`,`bottomVisible`,`topPassed`,`bottomPassed`],this.once=!0,this.continuous=!1,this.events=[],this.items=[`paragraph`,`short-paragraph`,`paragraph`,`short-paragraph`],this.loading=!1,this.loads=0,this.maxLoads=5,this.people=[`elliot`,`helen`,`jenny`,`joe`,`justen`,`laura`,`matt`,`stevie`],this.loaded=0,this.shade=0,this.fixed=!1}log(u){this.events=[u,...this.events].slice(0,10)}loadMore(){this.loading||this.loads>=this.maxLoads||(this.loading=!0,setTimeout(()=>{this.items=[...this.items,`paragraph`,`short-paragraph`,`paragraph`],this.loads++,this.loading=!1},800))}};var vi=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=no(n)))(r||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-visibility-usage-example`]],standalone:!1,features:[lo],decls:27,vars:2,consts:[[`scroller`,``],[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`ten`],[1,`visibility-scroller`],[`type`,`short-paragraph`],[`type`,`paragraph`],[`sui-segment`,``,`suiVisibility`,``,3,`suiOnUpdate`,`suiContext`,`suiOnce`],[`suiGridColumn`,``,`suiWidth`,`six`],[`sui-table`,``,`suiCelled`,``,`suiCompact`,`very compact`]],template:function(l,r){if(l&1&&(ss(0,`div`,1)(1,`div`,2)(2,`div`,3,0),Gh(4,`doc-wireframe`,4)(5,`doc-wireframe`,5),ss(6,`div`,6),Qh(`suiOnUpdate`,function(p){return r.calculations=p}),Gh(7,`doc-wireframe`,5)(8,`doc-wireframe`,4)(9,`doc-wireframe`,5)(10,`doc-wireframe`,5)(11,`doc-wireframe`,4)(12,`doc-wireframe`,5),Bu(),Gh(13,`doc-wireframe`,5)(14,`doc-wireframe`,4)(15,`doc-wireframe`,5),Bu()(),ss(16,`div`,7)(17,`table`,8)(18,`thead`)(19,`tr`)(20,`th`),WC(21,`Calculation`),Bu(),ss(22,`th`),WC(23,`Value`),Bu()()(),ss(24,`tbody`),iC(25,aa,5,2,`tr`,null,oC),Bu()()()()),l&2){let s=IC(3);KD(6),Uh(`suiContext`,s)(`suiOnce`,!1),KD(19),sC(r.keys)}},dependencies:[Dr,mi$1,vi$1,U,ze,G],encapsulation:2,changeDetection:1})}}return n})();var xi=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=no(n)))(r||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-visibility-frequency-example`]],standalone:!1,features:[lo],decls:30,vars:6,consts:[[`scroller`,``],[`tracker`,`suiVisibility`],[`sui-buttons`,``,`suiSize`,`small`],[`sui-button`,``,3,`click`],[`sui-button`,``,`suiToggle`,``,3,`click`,`suiActive`],[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`ten`],[1,`visibility-scroller`],[`type`,`short-paragraph`],[`type`,`paragraph`],[`sui-segment`,``,`suiVisibility`,``,3,`suiOnTopVisible`,`suiOnTopPassed`,`suiOnBottomVisible`,`suiOnBottomPassed`,`suiOnTopVisibleReverse`,`suiOnBottomPassedReverse`,`suiContext`,`suiOnce`,`suiContinuous`],[`suiGridColumn`,``,`suiWidth`,`six`],[`sui-segment`,``],[`sui-header`,``]],template:function(l,r){if(l&1){let s=fC();ss(0,`div`,2)(1,`button`,3),Qh(`click`,function(){Pd(s);let F=IC(14);return r.events=[],jd(F.refresh())}),WC(2,` Clear `),Bu(),ss(3,`button`,4),Qh(`click`,function(){return r.once=!r.once}),WC(4,` Once `),Bu(),ss(5,`button`,4),Qh(`click`,function(){return r.continuous=!r.continuous}),WC(6,` Continuous `),Bu()(),ss(7,`div`,5)(8,`div`,6)(9,`div`,7,0),Gh(11,`doc-wireframe`,8)(12,`doc-wireframe`,9),ss(13,`div`,10,1),Qh(`suiOnTopVisible`,function(){return r.log(`Top visible`)})(`suiOnTopPassed`,function(){return r.log(`Top passed`)})(`suiOnBottomVisible`,function(){return r.log(`Bottom visible`)})(`suiOnBottomPassed`,function(){return r.log(`Bottom passed`)})(`suiOnTopVisibleReverse`,function(){return r.log(`Top not visible`)})(`suiOnBottomPassedReverse`,function(){return r.log(`Bottom not passed`)}),Gh(15,`doc-wireframe`,9)(16,`doc-wireframe`,8)(17,`doc-wireframe`,9)(18,`doc-wireframe`,9)(19,`doc-wireframe`,8),Bu(),Gh(20,`doc-wireframe`,9)(21,`doc-wireframe`,8)(22,`doc-wireframe`,9),Bu()(),ss(23,`div`,11)(24,`div`,12)(25,`h4`,13),WC(26,`Event Log`),Bu(),iC(27,la,2,1,`div`,null,rC,!1,ra,2,0,`em`),Bu()()()}if(l&2){let s=IC(10);KD(3),Uh(`suiActive`,r.once),KD(2),Uh(`suiActive`,r.continuous),KD(8),Uh(`suiContext`,s)(`suiOnce`,r.once)(`suiContinuous`,r.continuous),KD(14),sC(r.events)}},dependencies:[Dr,mi$1,vi$1,Ii,Di,Ws,ze,G],encapsulation:2,changeDetection:1})}}return n})();var Si=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=no(n)))(r||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-visibility-passed-example`]],standalone:!1,features:[lo],decls:22,vars:4,consts:[[`scroller`,``],[`sui-grid`,``],[`suiGridColumn`,``,`suiWidth`,`ten`],[1,`visibility-scroller`],[`type`,`short-paragraph`],[`type`,`paragraph`],[`sui-segment`,``,`suiVisibility`,``,3,`suiOnPassed`,`suiContext`,`suiPassed`],[`suiGridColumn`,``,`suiWidth`,`six`],[`sui-segment`,``],[`sui-header`,``]],template:function(l,r){if(l&1&&(ss(0,`div`,1)(1,`div`,2)(2,`div`,3,0),Gh(4,`doc-wireframe`,4)(5,`doc-wireframe`,5),ss(6,`div`,6),Qh(`suiOnPassed`,function(p){return r.log(p.amount+` passed`)}),Gh(7,`doc-wireframe`,5)(8,`doc-wireframe`,4)(9,`doc-wireframe`,5)(10,`doc-wireframe`,5)(11,`doc-wireframe`,4),Bu(),Gh(12,`doc-wireframe`,5)(13,`doc-wireframe`,4)(14,`doc-wireframe`,5),Bu()(),ss(15,`div`,7)(16,`div`,8)(17,`h4`,9),WC(18,`Event Log`),Bu(),iC(19,sa,2,1,`div`,null,rC,!1,ma,2,0,`em`),Bu()()()),l&2){let s=IC(3);KD(6),Uh(`suiContext`,s)(`suiPassed`,ew(3,oa)),KD(13),sC(r.events)}},dependencies:[Dr,mi$1,vi$1,Ws,ze,G],encapsulation:2,changeDetection:1})}}return n})();var yi=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=no(n)))(r||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-visibility-infinite-example`]],standalone:!1,features:[lo],decls:7,vars:4,consts:[[`scroller`,``],[1,`visibility-scroller`],[`sui-segment`,``,`suiVisibility`,``,`suiObserveChanges`,``,3,`suiOnBottomVisible`,`suiContext`,`suiOnce`],[3,`type`],[`sui-message`,``,`suiState`,`info`],[`sui-message`,``]],template:function(l,r){if(l&1&&(ss(0,`div`,1,0)(2,`div`,2),Qh(`suiOnBottomVisible`,function(){return r.loadMore()}),iC(3,da,1,1,`doc-wireframe`,3,rC),eC(5,ua,2,0,`div`,4),eC(6,pa,2,0,`div`,5),Bu()()),l&2){let s=IC(1);KD(2),Uh(`suiContext`,s)(`suiOnce`,!1),KD(),sC(r.items),KD(2),nC(r.loading?5:-1),KD(),nC(r.loads>=r.maxLoads?6:-1)}},dependencies:[Dr,li$2,ze,G],encapsulation:2,changeDetection:1})}}return n})();var gi=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=no(n)))(r||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-visibility-lazy-images-example`]],standalone:!1,features:[lo],decls:6,vars:2,consts:[[`scroller`,``],[1,`visibility-scroller`],[`sui-header`,``],[`sui-image`,``,`suiSize`,`tiny`,`suiRounded`,``,`suiVisibility`,``,`suiType`,`image`,`src`,`assets/images/wireframes/image.png`,3,`suiOnLoad`,`suiContext`],[`type`,`short-paragraph`]],template:function(l,r){l&1&&(ss(0,`div`,1,0),iC(2,ca,5,5,null,null,oC),Bu(),ss(4,`p`),WC(5),Bu()),l&2&&(KD(2),sC(r.people),KD(3),gg(`Images loaded: `,r.loaded,` / `,r.people.length))},dependencies:[Dr,Ws,z,G,Qw],encapsulation:2,changeDetection:1})}}return n})();var Ei=(()=>{class n extends k{static{this.ɵfac=(()=>{let a;return function(r){return(a||(a=no(n)))(r||n)}})()}static{this.ɵcmp=RI({type:n,selectors:[[`doc-visibility-gradual-example`]],standalone:!1,features:[lo],decls:12,vars:4,consts:[[`scroller`,``],[1,`visibility-scroller`],[`type`,`short-paragraph`],[`type`,`paragraph`],[`sui-segment`,``,`suiVisibility`,``,`suiContinuous`,``,3,`suiOnPassing`,`suiOnTopPassedReverse`,`suiContext`,`suiOnce`]],template:function(l,r){if(l&1&&(ss(0,`div`,1,0),Gh(2,`doc-wireframe`,2)(3,`doc-wireframe`,3),ss(4,`div`,4),Qh(`suiOnPassing`,function(p){return r.shade=p.percentagePassed})(`suiOnTopPassedReverse`,function(){return r.shade=0}),Gh(5,`doc-wireframe`,3)(6,`doc-wireframe`,2)(7,`doc-wireframe`,3)(8,`doc-wireframe`,3),Bu(),Gh(9,`doc-wireframe`,3)(10,`doc-wireframe`,2)(11,`doc-wireframe`,3),Bu()),l&2){let s=IC(1);KD(4),ig(`background-color`,`rgba(0, 0, 0, `+r.shade+`)`),Uh(`suiContext`,s)(`suiOnce`,!1)}},dependencies:[Dr,ze,G],encapsulation:2,changeDetection:1})}}return n})();function ha(n,u){n&1&&Gh(0,`doc-visibility-usage-example`)}function va(n,u){n&1&&Gh(0,`doc-visibility-frequency-example`)}function xa(n,u){n&1&&Gh(0,`doc-visibility-passed-example`)}function Sa(n,u){n&1&&Gh(0,`doc-visibility-infinite-example`)}function ya(n,u){n&1&&Gh(0,`doc-visibility-lazy-images-example`)}function ga(n,u){n&1&&Gh(0,`doc-visibility-gradual-example`)}function Ea(n,u){if(n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`Usage`),Bu(),ss(3,`doc-code-sample`,3)(4,`h3`,4),WC(5,`How To Use`),Bu(),ss(6,`p`),WC(7,`Add `),ss(8,`code`),WC(9,`suiVisibility`),Bu(),WC(10,` to any element to receive events as it moves through the viewport. Every event receives the element calculations`),Bu(),ss(11,`div`,5),WC(12,` These examples scroll inside a container passed to `),ss(13,`code`),WC(14,`suiContext`),Bu(),WC(15,`. Leave it out to track scrolling of the whole page. `),Bu(),Ph(16,ha,1,0,`ng-template`,6),Bu(),ss(17,`doc-code-sample`,3)(18,`h3`,4),WC(19,`Changing Callback Frequency`),Bu(),ss(20,`p`),WC(21,`By default each event only fires `),ss(22,`b`),WC(23,`the first time`),Bu(),WC(24,` its condition is met. Set `),ss(25,`code`),WC(26,`suiOnce`),Bu(),WC(27,` to `),ss(28,`code`),WC(29,`false`),Bu(),WC(30,` to fire each time a condition `),ss(31,`b`),WC(32,`becomes true`),Bu(),WC(33,`, or `),ss(34,`code`),WC(35,`suiContinuous`),Bu(),WC(36,` to fire on `),ss(37,`b`),WC(38,`every scroll`),Bu(),WC(39,` while it holds`),Bu(),ss(40,`div`,5),WC(41,` Call `),ss(42,`code`),WC(43,`refresh()`),Bu(),WC(44,` to reset which events have already fired. `),Bu(),Ph(45,va,1,0,`ng-template`,6),Bu(),ss(46,`doc-code-sample`,3)(47,`h3`,4),WC(48,`Passed Amounts`),Bu(),ss(49,`p`)(50,`code`),WC(51,`suiPassed`),Bu(),WC(52,` takes a list of distances, as percentages or pixels, and `),ss(53,`code`),WC(54,`suiOnPassed`),Bu(),WC(55,` fires as each one is scrolled past`),Bu(),Ph(56,xa,1,0,`ng-template`,6),Bu(),Gh(57,`br`),ss(58,`h2`,2),WC(59,`Examples`),Bu(),ss(60,`doc-code-sample`,3)(61,`h3`,4),WC(62,`Infinite Scroll`),Bu(),ss(63,`p`),WC(64,`As an alternative to pagination you can use `),ss(65,`code`),WC(66,`suiOnBottomVisible`),Bu(),WC(67,` to load content when the bottom of a container is reached`),Bu(),ss(68,`div`,5)(69,`code`),WC(70,`suiObserveChanges`),Bu(),WC(71,` recalculates positions after new content is added. `),Bu(),Ph(72,Sa,1,0,`ng-template`,6),Bu(),ss(73,`doc-code-sample`,3)(74,`h3`,4),WC(75,`Lazy Loading Images`),Bu(),ss(76,`p`),WC(77,`Setting `),ss(78,`code`),WC(79,`suiType`),Bu(),WC(80,` to `),ss(81,`code`),WC(82,`image`),Bu(),WC(83,` swaps an image's `),ss(84,`code`),WC(85,`data-src`),Bu(),WC(86,` into its `),ss(87,`code`),WC(88,`src`),Bu(),WC(89,` once its top is visible. Keep a placeholder in `),ss(90,`code`),WC(91,`src`),Bu(),WC(92,` so the layout does not jump when the image loads`),Bu(),Ph(93,ya,1,0,`ng-template`,6),Bu(),ss(94,`doc-code-sample`,7)(95,`h3`,4),WC(96,`Gradual Changes`),Bu(),ss(97,`p`),WC(98,`Each event receives the calculated values, so you can adjust an element as it is scrolled past`),Bu(),Ph(99,ga,1,0,`ng-template`,6),Bu(),ss(100,`doc-code-sample`,7)(101,`h3`,4),WC(102,`Fixing Content To Viewport`),Bu(),ss(103,`p`),WC(104,`Setting `),ss(105,`code`),WC(106,`suiType`),Bu(),WC(107,` to `),ss(108,`code`),WC(109,`fixed`),Bu(),WC(110,` fixes an element to the viewport once its top is passed, adds the class `),ss(111,`code`),WC(112,`fixed`),Bu(),WC(113,`, and inserts a placeholder so the page does not shift. It is unfixed when you scroll back`),Bu(),ss(114,`div`,8),WC(115,` This example is not run here because this site is wrapped in a sidebar container, and a transformed ancestor stops `),ss(116,`code`),WC(117,`position: fixed`),Bu(),WC(118,` from attaching to the viewport. Use `),ss(119,`code`),WC(120,`suiZIndex`),Bu(),WC(121,` to keep fixed content above the rest of the page. `),Bu()()()),n&2){let a=hC();KD(3),Uh(`templateCode`,a.snippetUsage)(`componentCode`,a.snippetUsageTs),KD(14),Uh(`templateCode`,a.snippetFrequency)(`componentCode`,a.snippetFrequencyTs),KD(29),Uh(`templateCode`,a.snippetPassed)(`componentCode`,a.snippetPassedTs),KD(14),Uh(`templateCode`,a.snippetInfinite)(`componentCode`,a.snippetInfiniteTs),KD(13),Uh(`templateCode`,a.snippetLazyImages)(`componentCode`,a.snippetLazyImagesTs),KD(21),Uh(`templateCode`,a.snippetGradual),KD(6),Uh(`templateCode`,a.snippetFixed)}}function ba(n,u){n&1&&(ss(0,`div`)(1,`h2`,2),WC(2,`suiVisibility`),Bu(),ss(3,`h4`,4),WC(4,`Properties`),Bu(),ss(5,`table`,9)(6,`thead`)(7,`tr`)(8,`th`),WC(9,`Property`),Bu(),ss(10,`th`),WC(11,`Description`),Bu(),ss(12,`th`),WC(13,`Type`),Bu(),ss(14,`th`),WC(15,`Default`),Bu()()(),ss(16,`tbody`)(17,`tr`)(18,`td`),WC(19,` suiOnce `),Bu(),ss(20,`td`),WC(21,` Fire each event only the first time its condition is met, until `),ss(22,`code`),WC(23,`refresh()`),Bu(),WC(24,` is called `),Bu(),ss(25,`td`)(26,`div`,10),WC(27,` boolean `),Bu()(),ss(28,`td`)(29,`div`,11),WC(30,` true `),Bu()()(),ss(31,`tr`)(32,`td`),WC(33,` suiContinuous `),Bu(),ss(34,`td`),WC(35,` Fire events on every check while their condition holds `),Bu(),ss(36,`td`)(37,`div`,10),WC(38,` boolean `),Bu()(),ss(39,`td`)(40,`div`,11),WC(41,` false `),Bu()()(),ss(42,`tr`)(43,`td`),WC(44,` suiType `),Bu(),ss(45,`td`)(46,`code`),WC(47,`image`),Bu(),WC(48,` loads `),ss(49,`code`),WC(50,`data-src`),Bu(),WC(51,` into `),ss(52,`code`),WC(53,`src`),Bu(),WC(54,` when visible. `),ss(55,`code`),WC(56,`fixed`),Bu(),WC(57,` fixes the element to the viewport once passed `),Bu(),ss(58,`td`)(59,`div`,10),WC(60,` false | 'image' | 'fixed' `),Bu()(),ss(61,`td`)(62,`div`,11),WC(63,` false `),Bu()()(),ss(64,`tr`)(65,`td`),WC(66,` suiContext `),Bu(),ss(67,`td`),WC(68,` The scroll context: `),ss(69,`code`),WC(70,`'window'`),Bu(),WC(71,`, a CSS selector or an element `),Bu(),ss(72,`td`)(73,`div`,10),WC(74,` 'window' | string | HTMLElement `),Bu()(),ss(75,`td`)(76,`div`,11),WC(77,` 'window' `),Bu()()(),ss(78,`tr`)(79,`td`),WC(80,` suiScrollContext `),Bu(),ss(81,`td`),WC(82,` Alias of `),ss(83,`code`),WC(84,`suiContext`),Bu(),WC(85,`; takes precedence when set `),Bu(),ss(86,`td`)(87,`div`,10),WC(88,` 'window' | string | HTMLElement `),Bu()(),ss(89,`td`)(90,`div`,11),WC(91,` null `),Bu()()(),ss(92,`tr`)(93,`td`),WC(94,` suiOffset `),Bu(),ss(95,`td`),WC(96,` Pixels to adjust the scroll position by, e.g. to account for a fixed menu. Also the top offset for `),ss(97,`code`),WC(98,`fixed`),Bu()(),ss(99,`td`)(100,`div`,10),WC(101,` number `),Bu()(),ss(102,`td`)(103,`div`,11),WC(104,` 0 `),Bu()()(),ss(105,`tr`)(106,`td`),WC(107,` suiIncludeMargin `),Bu(),ss(108,`td`),WC(109,` Include the element's margins in its calculations `),Bu(),ss(110,`td`)(111,`div`,10),WC(112,` boolean `),Bu()(),ss(113,`td`)(114,`div`,11),WC(115,` false `),Bu()()(),ss(116,`tr`)(117,`td`),WC(118,` suiInitialCheck `),Bu(),ss(119,`td`),WC(120,` Check visibility conditions as soon as the element initializes `),Bu(),ss(121,`td`)(122,`div`,10),WC(123,` boolean `),Bu()(),ss(124,`td`)(125,`div`,11),WC(126,` true `),Bu()()(),ss(127,`tr`)(128,`td`),WC(129,` suiObserveChanges `),Bu(),ss(130,`td`),WC(131,` Refresh automatically when the element's content changes `),Bu(),ss(132,`td`)(133,`div`,10),WC(134,` boolean `),Bu()(),ss(135,`td`)(136,`div`,11),WC(137,` false `),Bu()()(),ss(138,`tr`)(139,`td`),WC(140,` suiThrottle `),Bu(),ss(141,`td`),WC(142,` Debounce scroll checks by this many milliseconds. `),ss(143,`code`),WC(144,`false`),Bu(),WC(145,` uses `),ss(146,`code`),WC(147,`requestAnimationFrame`),Bu()(),ss(148,`td`)(149,`div`,10),WC(150,` number | false `),Bu()(),ss(151,`td`)(152,`div`,11),WC(153,` false `),Bu()()(),ss(154,`tr`)(155,`td`),WC(156,` suiPassed `),Bu(),ss(157,`td`),WC(158,` Distances, as percentages or pixels, that fire `),ss(159,`code`),WC(160,`suiOnPassed`),Bu(),WC(161,` when scrolled past, e.g. `),ss(162,`code`),WC(163,`['50%', '200px']`),Bu()(),ss(164,`td`)(165,`div`,10),WC(166,` string[] | Record&lt;string, unknown&gt; `),Bu()(),ss(167,`td`)(168,`div`,11),WC(169,` null `),Bu()()(),ss(170,`tr`)(171,`td`),WC(172,` suiZIndex `),Bu(),ss(173,`td`),WC(174,` The z-index applied when using `),ss(175,`code`),WC(176,`suiType="fixed"`),Bu()(),ss(177,`td`)(178,`div`,10),WC(179,` number `),Bu()(),ss(180,`td`)(181,`div`,11),WC(182,` 1 `),Bu()()()()(),ss(183,`h4`,4),WC(184,`Events`),Bu(),ss(185,`table`,9)(186,`thead`)(187,`tr`)(188,`th`),WC(189,`Event`),Bu(),ss(190,`th`),WC(191,`Description`),Bu(),ss(192,`th`),WC(193,`Type`),Bu()()(),ss(194,`tbody`)(195,`tr`)(196,`td`),WC(197,` suiOnOnScreen `),Bu(),ss(198,`td`),WC(199,` Any part of the element is in the scroll viewport `),Bu(),ss(200,`td`)(201,`div`,10),WC(202,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(203,`tr`)(204,`td`),WC(205,` suiOnOffScreen `),Bu(),ss(206,`td`),WC(207,` No part of the element is in the scroll viewport `),Bu(),ss(208,`td`)(209,`div`,10),WC(210,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(211,`tr`)(212,`td`),WC(213,` suiOnTopVisible `),Bu(),ss(214,`td`),WC(215,` The element's top edge has passed the bottom of the screen `),Bu(),ss(216,`td`)(217,`div`,10),WC(218,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(219,`tr`)(220,`td`),WC(221,` suiOnTopPassed `),Bu(),ss(222,`td`),WC(223,` The element's top edge has passed the top of the screen `),Bu(),ss(224,`td`)(225,`div`,10),WC(226,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(227,`tr`)(228,`td`),WC(229,` suiOnBottomVisible `),Bu(),ss(230,`td`),WC(231,` The element's bottom edge has passed the bottom of the screen `),Bu(),ss(232,`td`)(233,`div`,10),WC(234,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(235,`tr`)(236,`td`),WC(237,` suiOnBottomPassed `),Bu(),ss(238,`td`),WC(239,` The element's bottom edge has passed the top of the screen `),Bu(),ss(240,`td`)(241,`div`,10),WC(242,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(243,`tr`)(244,`td`),WC(245,` suiOnPassing `),Bu(),ss(246,`td`),WC(247,` The element's top has passed the top of the screen but its bottom has not `),Bu(),ss(248,`td`)(249,`div`,10),WC(250,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(251,`tr`)(252,`td`),WC(253,` suiOnTopVisibleReverse `),Bu(),ss(254,`td`),WC(255,` Scrolling back up, the element's top edge is no longer visible `),Bu(),ss(256,`td`)(257,`div`,10),WC(258,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(259,`tr`)(260,`td`),WC(261,` suiOnTopPassedReverse `),Bu(),ss(262,`td`),WC(263,` Scrolling back up, the element's top edge is no longer passed `),Bu(),ss(264,`td`)(265,`div`,10),WC(266,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(267,`tr`)(268,`td`),WC(269,` suiOnBottomVisibleReverse `),Bu(),ss(270,`td`),WC(271,` Scrolling back up, the element's bottom edge is no longer visible `),Bu(),ss(272,`td`)(273,`div`,10),WC(274,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(275,`tr`)(276,`td`),WC(277,` suiOnBottomPassedReverse `),Bu(),ss(278,`td`),WC(279,` Scrolling back up, the element's bottom edge is no longer passed `),Bu(),ss(280,`td`)(281,`div`,10),WC(282,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(283,`tr`)(284,`td`),WC(285,` suiOnPassingReverse `),Bu(),ss(286,`td`),WC(287,` Scrolling back up, the element is no longer being passed `),Bu(),ss(288,`td`)(289,`div`,10),WC(290,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(291,`tr`)(292,`td`),WC(293,` suiOnPassed `),Bu(),ss(294,`td`),WC(295,` A distance listed in `),ss(296,`code`),WC(297,`suiPassed`),Bu(),WC(298,` has been scrolled past `),Bu(),ss(299,`td`)(300,`div`,10),WC(301,` EventEmitter&lt;SuiVisibilityPassedEvent&gt; `),Bu()()(),ss(302,`tr`)(303,`td`),WC(304,` suiOnUpdate `),Bu(),ss(305,`td`),WC(306,` Emitted every time the calculations are updated `),Bu(),ss(307,`td`)(308,`div`,10),WC(309,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(310,`tr`)(311,`td`),WC(312,` suiOnRefresh `),Bu(),ss(313,`td`),WC(314,` Emitted when the directive is refreshed `),Bu(),ss(315,`td`)(316,`div`,10),WC(317,` EventEmitter&lt;void&gt; `),Bu()()(),ss(318,`tr`)(319,`td`),WC(320,` suiOnLoad `),Bu(),ss(321,`td`),WC(322,` With `),ss(323,`code`),WC(324,`suiType="image"`),Bu(),WC(325,`, emitted when the image source is swapped in `),Bu(),ss(326,`td`)(327,`div`,10),WC(328,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(329,`tr`)(330,`td`),WC(331,` suiOnFixed `),Bu(),ss(332,`td`),WC(333,` With `),ss(334,`code`),WC(335,`suiType="fixed"`),Bu(),WC(336,`, emitted when the element becomes fixed `),Bu(),ss(337,`td`)(338,`div`,10),WC(339,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()(),ss(340,`tr`)(341,`td`),WC(342,` suiOnUnfixed `),Bu(),ss(343,`td`),WC(344,` With `),ss(345,`code`),WC(346,`suiType="fixed"`),Bu(),WC(347,`, emitted when the element returns to its position `),Bu(),ss(348,`td`)(349,`div`,10),WC(350,` EventEmitter&lt;SuiVisibilityCalculations&gt; `),Bu()()()()(),ss(351,`h4`,4),WC(352,`Methods`),Bu(),ss(353,`table`,9)(354,`thead`)(355,`tr`)(356,`th`),WC(357,`Method`),Bu(),ss(358,`th`),WC(359,`Description`),Bu()()(),ss(360,`tbody`)(361,`tr`)(362,`td`),WC(363,` check() `),Bu(),ss(364,`td`),WC(365,` Recalculates and fires any events whose conditions are met `),Bu()(),ss(366,`tr`)(367,`td`),WC(368,` refresh() `),Bu(),ss(369,`td`),WC(370,` Resets which events have fired, then checks again `),Bu()(),ss(371,`tr`)(372,`td`),WC(373,` disable() `),Bu(),ss(374,`td`),WC(375,` Stops events temporarily, e.g. while you adjust the scroll position `),Bu()(),ss(376,`tr`)(377,`td`),WC(378,` enable() `),Bu(),ss(379,`td`),WC(380,` Turns events back on and checks again `),Bu()()()(),ss(381,`h4`,4),WC(382,`SuiVisibilityCalculations`),Bu(),ss(383,`table`,9)(384,`thead`)(385,`tr`)(386,`th`),WC(387,`Field`),Bu(),ss(388,`th`),WC(389,`Description`),Bu(),ss(390,`th`),WC(391,`Type`),Bu()()(),ss(392,`tbody`)(393,`tr`)(394,`td`),WC(395,` pixelsPassed `),Bu(),ss(396,`td`),WC(397,` Pixels of the element scrolled past the top of the screen `),Bu(),ss(398,`td`)(399,`div`,10),WC(400,` number `),Bu()()(),ss(401,`tr`)(402,`td`),WC(403,` percentagePassed `),Bu(),ss(404,`td`),WC(405,` Fraction of the element scrolled past, from 0 to 1 `),Bu(),ss(406,`td`)(407,`div`,10),WC(408,` number `),Bu()()(),ss(409,`tr`)(410,`td`),WC(411,` fits `),Bu(),ss(412,`td`),WC(413,` Whether the element is shorter than the screen `),Bu(),ss(414,`td`)(415,`div`,10),WC(416,` boolean `),Bu()()(),ss(417,`tr`)(418,`td`),WC(419,` width / height `),Bu(),ss(420,`td`),WC(421,` Size of the element `),Bu(),ss(422,`td`)(423,`div`,10),WC(424,` number `),Bu()()(),ss(425,`tr`)(426,`td`),WC(427,` direction `),Bu(),ss(428,`td`),WC(429,` Scroll direction since the last check `),Bu(),ss(430,`td`)(431,`div`,10),WC(432,` 'up' | 'down' `),Bu()()(),ss(433,`tr`)(434,`td`),WC(435,` onScreen / offScreen `),Bu(),ss(436,`td`),WC(437,` Whether any part of the element is in the viewport `),Bu(),ss(438,`td`)(439,`div`,10),WC(440,` boolean `),Bu()()(),ss(441,`tr`)(442,`td`),WC(443,` passing `),Bu(),ss(444,`td`),WC(445,` Whether the element is being scrolled past `),Bu(),ss(446,`td`)(447,`div`,10),WC(448,` boolean `),Bu()()(),ss(449,`tr`)(450,`td`),WC(451,` topVisible / bottomVisible `),Bu(),ss(452,`td`),WC(453,` Whether the top or bottom edge has passed the bottom of the screen `),Bu(),ss(454,`td`)(455,`div`,10),WC(456,` boolean `),Bu()()(),ss(457,`tr`)(458,`td`),WC(459,` topPassed / bottomPassed `),Bu(),ss(460,`td`),WC(461,` Whether the top or bottom edge has passed the top of the screen `),Bu(),ss(462,`td`)(463,`div`,10),WC(464,` boolean `),Bu()()()()()())}var bi=(()=>{class n{constructor(a){this.snippetUsage=ii,this.snippetUsageTs=ni,this.snippetFrequency=ai,this.snippetFrequencyTs=li,this.snippetPassed=ri,this.snippetPassedTs=oi,this.snippetInfinite=si,this.snippetInfiniteTs=mi,this.snippetLazyImages=di,this.snippetLazyImagesTs=ui,this.snippetGradual=pi,this.snippetFixed=ci,a.setTitle(`Visibility | Ngx Semantic`)}static{this.ɵfac=function(l){return new(l||n)(Ce(cV))}}static{this.ɵcmp=RI({type:n,selectors:[[`doc-visibility`]],standalone:!1,decls:3,vars:2,consts:[[`header`,`Visibility`,`subHeader`,`Visibility provides a set of callbacks for when a content appears in the viewport`,`semanticUrl`,`https://semantic-ui.com/behaviors/visibility.html`],[4,`docPageContent`],[`sui-header`,``,`suiDividing`,``],[3,`templateCode`,`componentCode`],[`sui-header`,``],[`sui-message`,``,`suiState`,`info`],[`docDemo`,``],[3,`templateCode`],[`sui-message`,``,`suiState`,`warning`],[`sui-table`,``,`suiCelled`,``,`suiDefinition`,``],[`sui-label`,``,`suiColour`,`teal`],[`sui-label`,``,`suiColour`,`grey`]],template:function(l,r){l&1&&(ss(0,`doc-page`,0),Ph(1,Ea,122,12,`div`,1)(2,ba,465,0,`div`,1),Bu()),l&2&&(KD(),Uh(`docPageContent`,`definition`),KD(),Uh(`docPageContent`,`api`))},dependencies:[wr,vr,Ri$1,Oi$1,li$2,U,Ws,fi$2,vi,xi,Si,yi,gi,Ei],styles:[`[_nghost-%COMP%]     .visibility-scroller{height:22rem;overflow-y:auto;padding-right:.5rem}`],changeDetection:1})}}return n})();var Fa=[{path:`form`,component:ti},{path:`visibility`,component:bi}];var Fi=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[Is.forChild(Fa),Is]})}}return n})();var eo=(()=>{class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵmod=Cn$1({type:n})}static{this.ɵinj=bt$1({imports:[sl,Kr,Fi,Ri,yi$1,At$1,ci$2,K,bi$2,Ks,B,gi$1,bi$1,hi]})}}return n})();export{eo as BehaviorsModule};