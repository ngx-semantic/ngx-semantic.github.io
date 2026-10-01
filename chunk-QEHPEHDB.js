import{b as $e,c as He,d as S,e as Ye,f as C,g as be,i as y,j as Ke,k as Ze,m as ee,n as te,p as E,q as R,r as g,s as b,t as et}from"./chunk-W6MYVGP4.js";import{a as Ge,c as Ae}from"./chunk-R6AOPLEN.js";import{a as Y,e as Je,f as D,j as Xe,k as v,l as he,m as Qe}from"./chunk-DR4HYFGY.js";import{A as ue,B as pe,C as ce,D as fe,E as B,F as qe,f as Be,l as se,n as Ue,o as me,p as de,r as We,w as H,x as ze}from"./chunk-QBLBVBYM.js";import{d as ge,h as $,j as T,l as je}from"./chunk-NBCTIWWJ.js";import{$ as Te,Ab as Ne,Ca as f,Cb as X,Da as j,Db as Q,Ea as Re,G as Se,Ga as I,Ha as h,M as W,Oa as ke,Pa as N,Q as Z,Qa as L,Ra as le,Sa as ye,T as V,Ta as z,U as O,Ua as q,Va as d,Wa as i,X as Oe,Xa as t,Ya as o,Zb as Le,_ as x,_b as Ee,ac as re,bb as J,d as Ve,da as M,db as c,fa as Pe,fb as w,fc as oe,g as U,mb as _,nb as Me,qa as m,rb as e,sb as P,t as xe,tb as ae,ub as Ie,va as De,wa as ne}from"./chunk-LQ7F2QM7.js";import"./chunk-HHHS5ZAZ.js";var tt=`<form sui-form
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
`;var it=`state: 'success' | 'error' | null = null;
fields = {
  name: 'empty',
  gender: 'empty',
  username: 'empty',
  password: ['minLength[6]', 'empty'],
  skills: ['minCount[2]', 'empty'],
  terms: 'checked'
};
`;var nt=`<form sui-form
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
`;var lt=`state: 'success' | 'error' | null = null;
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
`;var at=`<form sui-form
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
`;var rt=`state: 'success' | 'error' | null = null;
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
`;var ot=`<form sui-form
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
`;var st=`state: 'success' | 'error' | null = null;
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
`;var mt=`<form sui-form
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
`;var dt=`state: 'success' | 'error' | null = null;
fields = {
  // fields are matched by id, then name, then data-validate
  name: {
    identifier: 'special-name',
    rules: [{ type: 'empty' }]
  },
  serverName: 'empty'
};
`;var ut=`<form sui-form
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
`;var pt=`state: 'success' | 'error' | null = null;
fields = {
  'first-name': 'empty',
  'last-name': 'empty',
  username: 'empty',
  password: ['minLength[6]', 'empty'],
  terms: 'checked'
};
`;var ct=`<form sui-form
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
`;var ft=`state: 'success' | 'error' | null = null;
fields = {
  yearsPracticed: {
    identifier: 'yearsPracticed',
    depends: 'isDoctor',
    rules: [{ type: 'empty', prompt: 'Please enter the number of years you have been a doctor' }]
  }
};
`;var ht=`<form sui-form
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
`;var vt=`state: 'success' | 'error' | null = null;
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
`;var xt=`<form sui-form
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
`;var St=`state: 'success' | 'error' | null = null;
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
`;var yt=`<form sui-form
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
`;var Et=`import { FormControl, FormGroup } from '@angular/forms';

submitted: unknown = null;
profile = new FormGroup({
  email: new FormControl(''),
  age: new FormControl('')
});
fields = {
  email: ['empty', 'email'],
  age: 'integer[18..120]'
};
`;var gt=`<form sui-form
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
`;var bt=`state: 'success' | 'error' | null = null;
fields = {
  empty: { rules: [{ type: 'empty', prompt: 'Please enter a value' }] },
  dropdown: { rules: [{ type: 'empty', prompt: 'Please select a dropdown value' }] },
  checkbox: { rules: [{ type: 'checked', prompt: 'Please check the checkbox' }] }
};
`;var Ft=`<form sui-form
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
`;var Ct=`state: 'success' | 'error' | null = null;
fields = {
  integer: { rules: [{ type: 'integer[1..100]', prompt: 'Please enter an integer value' }] },
  decimal: { rules: [{ type: 'decimal', prompt: 'Please enter a valid decimal' }] },
  number: { rules: [{ type: 'number', prompt: 'Please enter a valid number' }] },
  email: { rules: [{ type: 'email', prompt: 'Please enter a valid e-mail' }] },
  url: { rules: [{ type: 'url', prompt: 'Please enter a url' }] },
  regex: { rules: [{ type: 'regExp[/^[a-z0-9_-]{4,16}$/]', prompt: 'Please enter a 4-16 letter username' }] }
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
`;var wt=`state: 'success' | 'error' | null = null;
fields = {
  card: { rules: [{ type: 'creditCard', prompt: 'Please enter a valid credit card' }] },
  exactCard: {
    identifier: 'exact-card',
    rules: [{ type: 'creditCard[visa,amex]', prompt: 'Please enter a visa or amex card' }]
  }
};
`;var Vt=`<form sui-form
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
`;var Ot=`state: 'success' | 'error' | null = null;
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
`;var Tt=`<form sui-form
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
`;var Pt=`state: 'success' | 'error' | null = null;
fields = {
  minLength: { rules: [{ type: 'minLength[10]', prompt: 'Please enter at least 10 characters' }] },
  exactLength: { rules: [{ type: 'exactLength[6]', prompt: 'Please enter exactly 6 characters' }] },
  maxLength: { rules: [{ type: 'maxLength[10]', prompt: 'Please enter at most 10 characters' }] }
};
`;var Dt=`<form sui-form
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
`;var Rt=`state: 'success' | 'error' | null = null;
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
`;var kt=`<form sui-form
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
`;var Mt=`state: 'success' | 'error' | null = null;
fields = {
  minCount: { rules: [{ type: 'minCount[2]', prompt: 'Please select at least 2 values' }] },
  maxCount: { rules: [{ type: 'maxCount[2]', prompt: 'Please select a max of 2 values' }] },
  exactCount: { rules: [{ type: 'exactCount[2]', prompt: 'Please select 2 values' }] }
};
`;function sn(n,u){if(n&1&&(i(0,"pre"),e(1),X(2,"json"),t()),n&2){let l=w();m(),P(Q(2,1,l.output))}}function mn(n,u){n&1&&(i(0,"div",6),e(1),t()),n&2&&(m(),ae(" The e-mail control has the error: ",u," "))}function dn(n,u){if(n&1&&(i(0,"pre"),e(1),X(2,"json"),t()),n&2){let l=w();m(),P(Q(2,1,l.submitted))}}var It=(()=>{class n{constructor(){this.state=null,this.fields={name:"empty",gender:"empty",username:"empty",password:["minLength[6]","empty"],skills:["minCount[2]","empty"],terms:"checked"}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-specifying-rules-example"]],standalone:!1,decls:57,vars:2,consts:[["sui-form","","suiFormValidation","",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["sui-header","","suiDividing",""],["suiFormFields","","suiWidth","two"],["suiFormField",""],["for","rules-name"],["id","rules-name","name","name","type","text","placeholder","Name"],["for","rules-gender"],["id","rules-gender","name","gender"],["value",""],["value","male"],["value","female"],["for","rules-username"],["id","rules-username","name","username","type","text","placeholder","Username"],["for","rules-password"],["id","rules-password","name","password","type","password","placeholder","Password"],["for","rules-skills"],["id","rules-skills","name","skills","multiple",""],["value","css"],["value","html"],["value","javascript"],["value","design"],["value","plumbing"],["value","engineering"],["value","repair"],[1,"ui","checkbox"],["id","rules-terms","name","terms","type","checkbox"],["for","rules-terms"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"],[1,"ui","error","message"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"h4",1),e(2,"Tell Us About Yourself"),t(),i(3,"div",2)(4,"div",3)(5,"label",4),e(6,"Name"),t(),o(7,"input",5),t(),i(8,"div",3)(9,"label",6),e(10,"Gender"),t(),i(11,"select",7)(12,"option",8),e(13,"Gender"),t(),i(14,"option",9),e(15,"Male"),t(),i(16,"option",10),e(17,"Female"),t()()()(),i(18,"div",3)(19,"label",11),e(20,"Username"),t(),o(21,"input",12),t(),i(22,"div",3)(23,"label",13),e(24,"Password"),t(),o(25,"input",14),t(),i(26,"div",3)(27,"label",15),e(28,"Skills"),t(),i(29,"select",16)(30,"option",17),e(31,"CSS"),t(),i(32,"option",18),e(33,"HTML"),t(),i(34,"option",19),e(35,"Javascript"),t(),i(36,"option",20),e(37,"Graphic Design"),t(),i(38,"option",21),e(39,"Plumbing"),t(),i(40,"option",22),e(41,"Mechanical Engineering"),t(),i(42,"option",23),e(43,"Kitchen Repair"),t()()(),i(44,"div",3)(45,"div",24),o(46,"input",25),i(47,"label",26),e(48,"I agree to the terms and conditions"),t()()(),i(49,"button",27),e(50," Submit "),t(),i(51,"div",28)(52,"div",29),e(53,"Form Submitted"),t(),i(54,"p"),e(55,"Every field passed validation."),t()(),o(56,"div",30),t()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,ee,te,S,C,E,g,R,b,v,T],encapsulation:2})}}return n})(),Nt=(()=>{class n{constructor(){this.state=null,this.fields={name:{identifier:"name",rules:[{type:"empty",prompt:"Please enter your name"}]},username:{identifier:"username",rules:[{type:"empty",prompt:"Please enter a username"}]},password:{identifier:"password",rules:[{type:"empty",prompt:"Please enter a password"},{type:"minLength[6]",prompt:"Your password must be at least {ruleValue} characters"}]},terms:{identifier:"terms",rules:[{type:"checked",prompt:"You must agree to the terms and conditions"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-longhand-example"]],standalone:!1,decls:26,vars:2,consts:[["sui-form","","suiFormValidation","",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],["for","longhand-name"],["id","longhand-name","name","name","type","text","placeholder","Name"],["for","longhand-username"],["id","longhand-username","name","username","type","text","placeholder","Username"],["for","longhand-password"],["id","longhand-password","name","password","type","password","placeholder","Password"],[1,"ui","checkbox"],["id","longhand-terms","name","terms","type","checkbox"],["for","longhand-terms"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"],[1,"ui","error","message"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"label",2),e(3,"Name"),t(),o(4,"input",3),t(),i(5,"div",1)(6,"label",4),e(7,"Username"),t(),o(8,"input",5),t(),i(9,"div",1)(10,"label",6),e(11,"Password"),t(),o(12,"input",7),t(),i(13,"div",1)(14,"div",8),o(15,"input",9),i(16,"label",10),e(17,"I agree to the terms and conditions"),t()()(),i(18,"button",11),e(19," Submit "),t(),i(20,"div",12)(21,"div",13),e(22,"Form Submitted"),t(),i(23,"p"),e(24,"Every field passed validation."),t()(),o(25,"div",14),t()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,b,v],encapsulation:2})}}return n})(),Lt=(()=>{class n{constructor(){this.state=null,this.fields={color:{identifier:"color",rules:[{type:"regExp",value:/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/i,prompt:"Please enter a colour like rgb(255, 255, 255)"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-parameters-example"]],standalone:!1,decls:13,vars:2,consts:[["sui-form","","suiFormValidation","",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],["for","params-color"],["id","params-color","name","color","type","text","placeholder","rgb(255, 255, 255)"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"],[1,"ui","error","message"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"label",2),e(3,"Color"),t(),o(4,"input",3),t(),i(5,"button",4),e(6," Submit "),t(),i(7,"div",5)(8,"div",6),e(9,"Form Submitted"),t(),i(10,"p"),e(11,"Every field passed validation."),t()(),o(12,"div",7),t()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,b,v],encapsulation:2})}}return n})(),Bt=(()=>{class n{constructor(){this.state=null,this.fields={field1:{rules:[{type:"empty"}]},field2:{rules:[{type:"exactly[dog]",prompt:'{name} is set to "{value}" that is totally wrong. It should be {ruleValue}'}]},field3:{rules:[{type:"exactly[cat]",prompt:l=>l==="dog"?"I told you to put cat, not dog!":"That is not cat"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-prompts-example"]],standalone:!1,decls:21,vars:2,consts:[["sui-form","","suiFormValidation","",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],["for","prompts-field1"],["id","prompts-field1","name","field1","type","text","placeholder","Field 1"],["for","prompts-field2"],["id","prompts-field2","name","field2","type","text","placeholder","Field 2"],["for","prompts-field3"],["id","prompts-field3","name","field3","type","text","placeholder","Field 3"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"],[1,"ui","error","message"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"label",2),e(3,"Field 1"),t(),o(4,"input",3),t(),i(5,"div",1)(6,"label",4),e(7,"Field 2"),t(),o(8,"input",5),t(),i(9,"div",1)(10,"label",6),e(11,"Field 3"),t(),o(12,"input",7),t(),i(13,"button",8),e(14," Submit "),t(),i(15,"div",9)(16,"div",10),e(17,"Form Submitted"),t(),i(18,"p"),e(19,"Every field passed validation."),t()(),o(20,"div",11),t()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,b,v],encapsulation:2})}}return n})(),Gt=(()=>{class n{constructor(){this.state=null,this.fields={name:{identifier:"special-name",rules:[{type:"empty"}]},serverName:"empty"}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-matching-fields-example"]],standalone:!1,decls:17,vars:2,consts:[["sui-form","","suiFormValidation","",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],["for","match-special-name"],["id","match-special-name","name","special-name","type","text","placeholder","Special Field"],["for","match-server"],["id","match-server","name","user[name]","data-validate","serverName","type","text","placeholder","Server Name"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"],[1,"ui","error","message"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"label",2),e(3,"Special Field"),t(),o(4,"input",3),t(),i(5,"div",1)(6,"label",4),e(7,"Server Name"),t(),o(8,"input",5),t(),i(9,"button",6),e(10," Submit "),t(),i(11,"div",7)(12,"div",8),e(13,"Form Submitted"),t(),i(14,"p"),e(15,"Every field passed validation."),t()(),o(16,"div",9),t()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,b,v],encapsulation:2})}}return n})(),At=(()=>{class n{constructor(){this.state=null,this.fields={"first-name":"empty","last-name":"empty",username:"empty",password:["minLength[6]","empty"],terms:"checked"}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-inline-example"]],standalone:!1,decls:30,vars:2,consts:[["sui-form","","suiFormValidation","","suiInline","","suiOn","blur",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["for","inline-first-name"],["id","inline-first-name","name","first-name","type","text","placeholder","First Name"],["for","inline-last-name"],["id","inline-last-name","name","last-name","type","text","placeholder","Last Name"],["for","inline-username"],["id","inline-username","name","username","type","text","placeholder","Username"],["for","inline-password"],["id","inline-password","name","password","type","password","placeholder","Password"],[1,"ui","checkbox"],["id","inline-terms","name","terms","type","checkbox"],["for","inline-terms"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"div",2)(3,"label",3),e(4,"First Name"),t(),o(5,"input",4),t(),i(6,"div",2)(7,"label",5),e(8,"Last Name"),t(),o(9,"input",6),t()(),i(10,"div",2)(11,"label",7),e(12,"Username"),t(),o(13,"input",8),t(),i(14,"div",2)(15,"label",9),e(16,"Password"),t(),o(17,"input",10),t(),i(18,"div",2)(19,"div",11),o(20,"input",12),i(21,"label",13),e(22,"I agree to the Terms and Conditions"),t()()(),i(23,"button",14),e(24," Submit "),t(),i(25,"div",15)(26,"div",16),e(27,"Form Submitted"),t(),i(28,"p"),e(29,"Every field passed validation."),t()()()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,R,b,v],encapsulation:2})}}return n})(),Ut=(()=>{class n{constructor(){this.state=null,this.fields={yearsPracticed:{identifier:"yearsPracticed",depends:"isDoctor",rules:[{type:"empty",prompt:"Please enter the number of years you have been a doctor"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-dependent-example"]],standalone:!1,decls:18,vars:2,consts:[["sui-form","","suiFormValidation","",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],[1,"ui","checkbox"],["id","depends-isDoctor","name","isDoctor","type","checkbox"],["for","depends-isDoctor"],["for","depends-yearsPracticed"],["id","depends-yearsPracticed","name","yearsPracticed","type","text","placeholder","Years"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"],[1,"ui","error","message"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"div",2),o(3,"input",3),i(4,"label",4),e(5,"Are you a doctor?"),t()()(),i(6,"div",1)(7,"label",5),e(8,"How long have you been a medical professional"),t(),o(9,"input",6),t(),i(10,"button",7),e(11," Submit "),t(),i(12,"div",8)(13,"div",9),e(14,"Form Submitted"),t(),i(15,"p"),e(16,"Every field passed validation."),t()(),o(17,"div",10),t()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,b,v],encapsulation:2})}}return n})(),Wt=(()=>{class n{constructor(){this.state=null,this.fields={email:{identifier:"email",rules:[{type:"email",prompt:"Please enter a valid e-mail"}]},ccEmail:{identifier:"cc-email",optional:!0,rules:[{type:"email",prompt:"Please enter a valid second e-mail"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-optional-example"]],standalone:!1,decls:19,vars:2,consts:[["sui-form","","suiFormValidation","",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],["for","optional-email"],["id","optional-email","name","email","type","text","placeholder","joe@schmoe.com"],["for","optional-cc-email"],["id","optional-cc-email","name","cc-email","type","text","placeholder","mom@schmoe.com"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"],[1,"ui","error","message"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"p"),e(2,"Your tickets are all ready to print. Where would you like to send a receipt?"),t(),i(3,"div",1)(4,"label",2),e(5,"E-mail"),t(),o(6,"input",3),t(),i(7,"div",1)(8,"label",4),e(9,"Additional E-mail"),t(),o(10,"input",5),t(),i(11,"button",6),e(12," Submit "),t(),i(13,"div",7)(14,"div",8),e(15,"Form Submitted"),t(),i(16,"p"),e(17,"Every field passed validation."),t()(),o(18,"div",9),t()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,b,v],encapsulation:2})}}return n})(),jt=(()=>{class n{constructor(){this.state=null,this.output=null,this.fields={name:"empty",gender:"empty",username:"empty",terms:"checked"},this.sample={name:"Jack",gender:"male",username:"jlukic",colors:["red","grey"],terms:!0}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-programmatic-example"]],standalone:!1,decls:58,vars:3,consts:[["validation","suiFormValidation"],["sui-form","","suiFormValidation","",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["for","prog-name"],["id","prog-name","name","name","type","text","placeholder","Name"],["for","prog-gender"],["id","prog-gender","name","gender"],["value",""],["value","male"],["value","female"],["for","prog-username"],["id","prog-username","name","username","type","text","placeholder","Username"],["for","prog-colors"],["id","prog-colors","name","colors","multiple",""],["value","red"],["value","blue"],["value","green"],["value","grey"],[1,"ui","checkbox"],["id","prog-terms","name","terms","type","checkbox"],["for","prog-terms"],["sui-buttons","","suiSize","small"],["sui-button","","type","button",3,"click"],[1,"ui","success","message"],[1,"header"],[1,"ui","error","message"]],template:function(a,r){if(a&1){let s=J();i(0,"form",1,0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(2,"div",2)(3,"div",3)(4,"label",4),e(5,"Name"),t(),o(6,"input",5),t(),i(7,"div",3)(8,"label",6),e(9,"Gender"),t(),i(10,"select",7)(11,"option",8),e(12,"Gender"),t(),i(13,"option",9),e(14,"Male"),t(),i(15,"option",10),e(16,"Female"),t()()()(),i(17,"div",3)(18,"label",11),e(19,"Username"),t(),o(20,"input",12),t(),i(21,"div",3)(22,"label",13),e(23,"Favorite Colors"),t(),i(24,"select",14)(25,"option",15),e(26,"Red"),t(),i(27,"option",16),e(28,"Blue"),t(),i(29,"option",17),e(30,"Green"),t(),i(31,"option",18),e(32,"Grey"),t()()(),i(33,"div",3)(34,"div",19),o(35,"input",20),i(36,"label",21),e(37,"I agree to the terms and conditions"),t()()(),i(38,"div",22)(39,"button",23),c("click",function(){V(s);let F=_(1);return O(F.validateForm())}),e(40," Validate Form "),t(),i(41,"button",23),c("click",function(){V(s);let F=_(1);return O(r.output=F.isValid("name")?"Name is valid":"Name is invalid")}),e(42," Is Name Valid? "),t(),i(43,"button",23),c("click",function(){V(s);let F=_(1);return O(F.setValues(r.sample))}),e(44," Set Values "),t(),i(45,"button",23),c("click",function(){V(s);let F=_(1);return O(r.output=F.getValues())}),e(46," Get Values "),t(),i(47,"button",23),c("click",function(){return V(s),_(1).reset(),O(r.state=null)}),e(48," Reset "),t(),i(49,"button",23),c("click",function(){return V(s),_(1).clear(),O(r.state=null)}),e(50," Clear "),t()(),i(51,"div",24)(52,"div",25),e(53,"Form Submitted"),t(),i(54,"p"),e(55,"Every field passed validation."),t()(),o(56,"div",26),N(57,sn,3,3,"pre"),t()}a&2&&(d("suiState",r.state)("suiFields",r.fields),m(57),L(r.output?57:-1))},dependencies:[y,ee,te,S,C,E,g,R,b,v,he,Ee],encapsulation:2})}}return n})(),zt=(()=>{class n{constructor(){this.submitted=null,this.profile=new Ye({email:new be(""),age:new be("")}),this.fields={email:["empty","email"],age:"integer[18..120]"}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-reactive-example"]],standalone:!1,decls:13,vars:4,consts:[["sui-form","","suiFormValidation","","suiInline","",3,"suiOnSuccess","formGroup","suiFields"],["suiFormField",""],["for","email"],["id","email","formControlName","email","placeholder","joe@schmoe.com"],["for","age"],["id","age","formControlName","age","placeholder","18 to 120"],["sui-message","","suiState","warning"],["sui-button","","suiColour","primary","type","submit"]],template:function(a,r){if(a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.submitted=r.profile.value}),i(1,"div",1)(2,"label",2),e(3,"E-mail"),t(),o(4,"input",3),t(),i(5,"div",1)(6,"label",4),e(7,"Age"),t(),o(8,"input",5),t(),N(9,mn,2,1,"div",6),i(10,"button",7),e(11," Submit "),t(),N(12,dn,3,3,"pre"),t()),a&2){let s;d("formGroup",r.profile)("suiFields",r.fields),m(9),L((s=r.profile.controls.email.errors==null?null:r.profile.controls.email.errors.suiFormValidation)?9:-1,s),m(3),L(r.submitted?12:-1)}},dependencies:[y,$e,He,S,Ze,Ke,E,g,b,D,v,Ee],encapsulation:2})}}return n})(),qt=(()=>{class n{constructor(){this.state=null,this.fields={empty:{rules:[{type:"empty",prompt:"Please enter a value"}]},dropdown:{rules:[{type:"empty",prompt:"Please select a dropdown value"}]},checkbox:{rules:[{type:"checked",prompt:"Please check the checkbox"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-rule-empty-example"]],standalone:!1,decls:27,vars:2,consts:[["sui-form","","suiFormValidation","","suiInline","","suiOn","blur",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],["for","empty-empty"],["id","empty-empty","name","empty","type","text","placeholder","Empty"],["for","empty-dropdown"],["id","empty-dropdown","name","dropdown"],["value",""],["value","1"],["value","2"],[1,"ui","checkbox"],["id","empty-checkbox","name","checkbox","type","checkbox"],["for","empty-checkbox"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"label",2),e(3,"Empty"),t(),o(4,"input",3),t(),i(5,"div",1)(6,"label",4),e(7,"Dropdown"),t(),i(8,"select",5)(9,"option",6),e(10,"Select"),t(),i(11,"option",7),e(12,"Choice 1"),t(),i(13,"option",8),e(14,"Choice 2"),t()()(),i(15,"div",1)(16,"div",9),o(17,"input",10),i(18,"label",11),e(19,"Checkbox"),t()()(),i(20,"button",12),e(21," Submit "),t(),i(22,"div",13)(23,"div",14),e(24,"Form Submitted"),t(),i(25,"p"),e(26,"Every field passed validation."),t()()()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,ee,te,S,C,E,g,b,v],encapsulation:2})}}return n})(),$t=(()=>{class n{constructor(){this.state=null,this.fields={integer:{rules:[{type:"integer[1..100]",prompt:"Please enter an integer value"}]},decimal:{rules:[{type:"decimal",prompt:"Please enter a valid decimal"}]},number:{rules:[{type:"number",prompt:"Please enter a valid number"}]},email:{rules:[{type:"email",prompt:"Please enter a valid e-mail"}]},url:{rules:[{type:"url",prompt:"Please enter a url"}]},regex:{rules:[{type:"regExp[/^[a-z0-9_-]{4,16}$/]",prompt:"Please enter a 4-16 letter username"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-rule-content-type-example"]],standalone:!1,decls:35,vars:2,consts:[["sui-form","","suiFormValidation","","suiInline","","suiOn","blur",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["for","type-integer"],["id","type-integer","name","integer","type","text","placeholder","1 to 100"],["for","type-email"],["id","type-email","name","email","type","text","placeholder","E-mail"],["for","type-decimal"],["id","type-decimal","name","decimal","type","text","placeholder","Decimal"],["for","type-number"],["id","type-number","name","number","type","text","placeholder","Number"],["for","type-url"],["id","type-url","name","url","type","text","placeholder","URL"],["for","type-regex"],["id","type-regex","name","regex","type","text","placeholder","4-16 letter username"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"div",2)(3,"label",3),e(4,"Integer"),t(),o(5,"input",4),t(),i(6,"div",2)(7,"label",5),e(8,"E-mail"),t(),o(9,"input",6),t()(),i(10,"div",1)(11,"div",2)(12,"label",7),e(13,"Decimal"),t(),o(14,"input",8),t(),i(15,"div",2)(16,"label",9),e(17,"Number"),t(),o(18,"input",10),t()(),i(19,"div",1)(20,"div",2)(21,"label",11),e(22,"URL"),t(),o(23,"input",12),t(),i(24,"div",2)(25,"label",13),e(26,"RegEx"),t(),o(27,"input",14),t()(),i(28,"button",15),e(29," Submit "),t(),i(30,"div",16)(31,"div",17),e(32,"Form Submitted"),t(),i(33,"p"),e(34,"Every field passed validation."),t()()()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,R,b,v],encapsulation:2})}}return n})(),Ht=(()=>{class n{constructor(){this.state=null,this.fields={card:{rules:[{type:"creditCard",prompt:"Please enter a valid credit card"}]},exactCard:{identifier:"exact-card",rules:[{type:"creditCard[visa,amex]",prompt:"Please enter a visa or amex card"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-rule-payment-example"]],standalone:!1,decls:17,vars:2,consts:[["sui-form","","suiFormValidation","","suiInline","","suiOn","blur",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["for","pay-card"],["id","pay-card","name","card","type","text","placeholder","4565340519181845"],["for","pay-exact-card"],["id","pay-exact-card","name","exact-card","type","text","placeholder","Visa or American Express"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"div",2)(3,"label",3),e(4,"Credit Card"),t(),o(5,"input",4),t(),i(6,"div",2)(7,"label",5),e(8,"Certain Type"),t(),o(9,"input",6),t()(),i(10,"button",7),e(11," Submit "),t(),i(12,"div",8)(13,"div",9),e(14,"Form Submitted"),t(),i(15,"p"),e(16,"Every field passed validation."),t()()()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,R,b,v],encapsulation:2})}}return n})(),Yt=(()=>{class n{constructor(){this.state=null,this.fields={match:{identifier:"match2",rules:[{type:"match[match1]",prompt:"Please put the same value in both fields"}]},different:{identifier:"different2",rules:[{type:"different[different1]",prompt:"Please put different values for each field"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-rule-matching-example"]],standalone:!1,decls:26,vars:2,consts:[["sui-form","","suiFormValidation","","suiInline","","suiOn","blur",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["for","m-match1"],["id","m-match1","name","match1","type","text","placeholder","Match 1"],["for","m-match2"],["id","m-match2","name","match2","type","text","placeholder","Match 2"],["for","m-different1"],["id","m-different1","name","different1","type","text","placeholder","Different 1"],["for","m-different2"],["id","m-different2","name","different2","type","text","placeholder","Different 2"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"div",2)(3,"label",3),e(4,"Match 1"),t(),o(5,"input",4),t(),i(6,"div",2)(7,"label",5),e(8,"Match 2"),t(),o(9,"input",6),t()(),i(10,"div",1)(11,"div",2)(12,"label",7),e(13,"Different 1"),t(),o(14,"input",8),t(),i(15,"div",2)(16,"label",9),e(17,"Different 2"),t(),o(18,"input",10),t()(),i(19,"button",11),e(20," Submit "),t(),i(21,"div",12)(22,"div",13),e(23,"Form Submitted"),t(),i(24,"p"),e(25,"Every field passed validation."),t()()()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,R,b,v],encapsulation:2})}}return n})(),Kt=(()=>{class n{constructor(){this.state=null,this.fields={minLength:{rules:[{type:"minLength[10]",prompt:"Please enter at least 10 characters"}]},exactLength:{rules:[{type:"exactLength[6]",prompt:"Please enter exactly 6 characters"}]},maxLength:{rules:[{type:"maxLength[10]",prompt:"Please enter at most 10 characters"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-rule-length-example"]],standalone:!1,decls:20,vars:2,consts:[["sui-form","","suiFormValidation","","suiInline","","suiOn","blur",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],["for","len-minLength"],["id","len-minLength","name","minLength","type","text","placeholder","At least 10 characters"],["for","len-exactLength"],["id","len-exactLength","name","exactLength","type","text","placeholder","Exactly 6 characters"],["for","len-maxLength"],["id","len-maxLength","name","maxLength","type","text","placeholder","At most 10 characters"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"label",2),e(3,"minLength"),t(),o(4,"input",3),t(),i(5,"div",1)(6,"label",4),e(7,"Exact Length"),t(),o(8,"input",5),t(),i(9,"div",1)(10,"label",6),e(11,"maxLength"),t(),o(12,"input",7),t(),i(13,"button",8),e(14," Submit "),t(),i(15,"div",9)(16,"div",10),e(17,"Form Submitted"),t(),i(18,"p"),e(19,"Every field passed validation."),t()()()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,b,v],encapsulation:2})}}return n})(),Zt=(()=>{class n{constructor(){this.state=null,this.fields={is:{rules:[{type:"is[dog]",prompt:'Please enter exactly "dog"'}]},isExactly:{rules:[{type:"isExactly[dog]",prompt:'Please enter exactly "dog"'}]},not:{rules:[{type:"not[dog]",prompt:'Please enter a value, but not "dog"'}]},notExactly:{rules:[{type:"notExactly[dog]",prompt:'Please enter a value, but not exactly "dog"'}]},contains:{rules:[{type:"contains[dog]",prompt:'Please enter a value containing "dog"'}]},containsExactly:{rules:[{type:"containsExactly[dog]",prompt:'Please enter a value containing exactly "dog"'}]},doesntContain:{rules:[{type:"doesntContain[dog]",prompt:'Please enter a value not containing "dog"'}]},doesntContainExactly:{rules:[{type:"doesntContainExactly[dog]",prompt:'Please enter a value not containing exactly "dog"'}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-rule-specified-content-example"]],standalone:!1,decls:44,vars:2,consts:[["sui-form","","suiFormValidation","","suiInline","","suiOn","blur",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormFields","","suiWidth","two"],["suiFormField",""],["for","content-is"],["id","content-is","name","is","type","text","placeholder","is"],["for","content-isExactly"],["id","content-isExactly","name","isExactly","type","text","placeholder","isExactly"],["for","content-not"],["id","content-not","name","not","type","text","placeholder","not"],["for","content-notExactly"],["id","content-notExactly","name","notExactly","type","text","placeholder","notExactly"],["for","content-contains"],["id","content-contains","name","contains","type","text","placeholder","contains"],["for","content-containsExactly"],["id","content-containsExactly","name","containsExactly","type","text","placeholder","containsExactly"],["for","content-doesntContain"],["id","content-doesntContain","name","doesntContain","type","text","placeholder","doesntContain"],["for","content-doesntContainExactly"],["id","content-doesntContainExactly","name","doesntContainExactly","type","text","placeholder","doesntContainExactly"],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"div",2)(3,"label",3),e(4,"is"),t(),o(5,"input",4),t(),i(6,"div",2)(7,"label",5),e(8,"isExactly"),t(),o(9,"input",6),t()(),i(10,"div",1)(11,"div",2)(12,"label",7),e(13,"not"),t(),o(14,"input",8),t(),i(15,"div",2)(16,"label",9),e(17,"notExactly"),t(),o(18,"input",10),t()(),i(19,"div",1)(20,"div",2)(21,"label",11),e(22,"contains"),t(),o(23,"input",12),t(),i(24,"div",2)(25,"label",13),e(26,"containsExactly"),t(),o(27,"input",14),t()(),i(28,"div",1)(29,"div",2)(30,"label",15),e(31,"doesntContain"),t(),o(32,"input",16),t(),i(33,"div",2)(34,"label",17),e(35,"doesntContainExactly"),t(),o(36,"input",18),t()(),i(37,"button",19),e(38," Submit "),t(),i(39,"div",20)(40,"div",21),e(41,"Form Submitted"),t(),i(42,"p"),e(43,"Every field passed validation."),t()()()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,S,C,E,g,R,b,v],encapsulation:2})}}return n})(),Jt=(()=>{class n{constructor(){this.state=null,this.fields={minCount:{rules:[{type:"minCount[2]",prompt:"Please select at least 2 values"}]},maxCount:{rules:[{type:"maxCount[2]",prompt:"Please select a max of 2 values"}]},exactCount:{rules:[{type:"exactCount[2]",prompt:"Please select 2 values"}]}}}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation-rule-selection-count-example"]],standalone:!1,decls:50,vars:2,consts:[["sui-form","","suiFormValidation","","suiInline","","suiOn","change",3,"suiOnSuccess","suiOnFailure","suiState","suiFields"],["suiFormField",""],["for","count-exactCount"],["id","count-exactCount","name","exactCount","multiple",""],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["for","count-minCount"],["id","count-minCount","name","minCount","multiple",""],["for","count-maxCount"],["id","count-maxCount","name","maxCount","multiple",""],["sui-button","","suiColour","primary","type","submit"],[1,"ui","success","message"],[1,"header"]],template:function(a,r){a&1&&(i(0,"form",0),c("suiOnSuccess",function(){return r.state="success"})("suiOnFailure",function(){return r.state="error"}),i(1,"div",1)(2,"label",2),e(3,"Exact Count"),t(),i(4,"select",3)(5,"option",4),e(6,"1"),t(),i(7,"option",5),e(8,"2"),t(),i(9,"option",6),e(10,"3"),t(),i(11,"option",7),e(12,"4"),t(),i(13,"option",8),e(14,"5"),t()()(),i(15,"div",1)(16,"label",9),e(17,"Minimum Count"),t(),i(18,"select",10)(19,"option",4),e(20,"1"),t(),i(21,"option",5),e(22,"2"),t(),i(23,"option",6),e(24,"3"),t(),i(25,"option",7),e(26,"4"),t(),i(27,"option",8),e(28,"5"),t()()(),i(29,"div",1)(30,"label",11),e(31,"Maximum Count"),t(),i(32,"select",12)(33,"option",4),e(34,"1"),t(),i(35,"option",5),e(36,"2"),t(),i(37,"option",6),e(38,"3"),t(),i(39,"option",7),e(40,"4"),t(),i(41,"option",8),e(42,"5"),t()()(),i(43,"button",13),e(44," Submit "),t(),i(45,"div",14)(46,"div",15),e(47,"Form Submitted"),t(),i(48,"p"),e(49,"Every field passed validation."),t()()()),a&2&&d("suiState",r.state)("suiFields",r.fields)},dependencies:[y,ee,te,S,C,E,g,b,v],encapsulation:2})}}return n})();function Sn(n,u){n&1&&o(0,"doc-form-validation-specifying-rules-example")}function yn(n,u){n&1&&o(0,"doc-form-validation-longhand-example")}function En(n,u){n&1&&o(0,"doc-form-validation-parameters-example")}function gn(n,u){n&1&&o(0,"doc-form-validation-prompts-example")}function bn(n,u){n&1&&o(0,"doc-form-validation-matching-fields-example")}function Fn(n,u){n&1&&o(0,"doc-form-validation-inline-example")}function Cn(n,u){n&1&&o(0,"doc-form-validation-dependent-example")}function _n(n,u){n&1&&o(0,"doc-form-validation-optional-example")}function wn(n,u){n&1&&o(0,"doc-form-validation-programmatic-example")}function Vn(n,u){n&1&&o(0,"doc-form-validation-reactive-example")}function On(n,u){n&1&&o(0,"doc-form-validation-rule-empty-example")}function Tn(n,u){n&1&&o(0,"doc-form-validation-rule-content-type-example")}function Pn(n,u){n&1&&o(0,"doc-form-validation-rule-payment-example")}function Dn(n,u){n&1&&o(0,"doc-form-validation-rule-matching-example")}function Rn(n,u){n&1&&o(0,"doc-form-validation-rule-length-example")}function kn(n,u){n&1&&o(0,"doc-form-validation-rule-specified-content-example")}function Mn(n,u){n&1&&o(0,"doc-form-validation-rule-selection-count-example")}function In(n,u){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Usage"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"Specifying Validation Rules"),t(),i(6,"p"),e(7,"Pass validation rules for each field to "),i(8,"code"),e(9,"suiFields"),t(),e(10,". Fields are matched by their "),i(11,"code"),e(12,"id"),t(),e(13,", "),i(14,"code"),e(15,"name"),t(),e(16," or "),i(17,"code"),e(18,"data-validate"),t(),e(19," attribute, in that order"),t(),i(20,"div",5),e(21," Rules can be written in shorthand, as a rule name or a list of rule names. "),t(),h(22,Sn,1,0,"ng-template",6),t(),i(23,"doc-code-sample",3)(24,"h3",4),e(25,"Longhand Rules"),t(),i(26,"p"),e(27,"Rules can also be written in longhand, which lets you set the identifier and a custom prompt for each rule"),t(),h(28,yn,1,0,"ng-template",6),t(),i(29,"doc-code-sample",3)(30,"h3",4),e(31,"Passing Parameters to Rules"),t(),i(32,"p"),e(33,"Rules usually take a parameter in brackets, like "),i(34,"code"),e(35,"minLength[2]"),t(),e(36,". If brackets are awkward, pass the parameter as "),i(37,"code"),e(38,"value"),t(),e(39," instead"),t(),h(40,En,1,0,"ng-template",6),t(),i(41,"doc-code-sample",3)(42,"h3",4),e(43,"Customizing Prompts"),t(),i(44,"p"),e(45,"Set "),i(46,"code"),e(47,"prompt"),t(),e(48," on a rule to replace the default message. Prompts can use the templates "),i(49,"code"),e(50,"{name}"),t(),e(51,", "),i(52,"code"),e(53,"{identifier}"),t(),e(54,", "),i(55,"code"),e(56,"{value}"),t(),e(57," and "),i(58,"code"),e(59,"{ruleValue}"),t(),e(60,", or be a function of the field value"),t(),h(61,gn,1,0,"ng-template",6),t(),i(62,"doc-code-sample",3)(63,"h3",4),e(64,"Matching Fields"),t(),i(65,"p"),e(66,"Use "),i(67,"code"),e(68,"identifier"),t(),e(69," when a field's key should not be used to find it, or match fields with a "),i(70,"code"),e(71,"data-validate"),t(),e(72," attribute when the server needs a specific "),i(73,"code"),e(74,"name"),t()(),h(75,bn,1,0,"ng-template",6),t(),i(76,"doc-code-sample",3)(77,"h3",4),e(78,"Validating on Blur and Other Events"),t(),i(79,"p"),e(80,"Set "),i(81,"code"),e(82,"suiInline"),t(),e(83," to show errors in a label next to each field, and "),i(84,"code"),e(85,"suiOn"),t(),e(86," to validate on "),i(87,"code"),e(88,"blur"),t(),e(89," or "),i(90,"code"),e(91,"change"),t(),e(92," instead of submit"),t(),h(93,Fn,1,0,"ng-template",6),t(),i(94,"doc-code-sample",3)(95,"h3",4),e(96,"Dependent Fields"),t(),i(97,"p"),e(98,"Add "),i(99,"code"),e(100,"depends"),t(),e(101," with the identifier of another field to only validate a field when that other field has a value"),t(),h(102,Cn,1,0,"ng-template",6),t(),i(103,"doc-code-sample",3)(104,"h3",4),e(105,"Optional Fields"),t(),i(106,"p"),e(107,"Add "),i(108,"code"),e(109,"optional: true"),t(),e(110," to only validate a field when it is not empty"),t(),h(111,_n,1,0,"ng-template",6),t(),i(112,"doc-code-sample",3)(113,"h3",4),e(114,"Validating Programmatically"),t(),i(115,"p"),e(116,"Export the directive with "),i(117,"code"),e(118,'#ref="suiFormValidation"'),t(),e(119," to validate, read and write values, reset or clear the form"),t(),i(120,"div",5)(121,"code"),e(122,"reset()"),t(),e(123," restores the values the fields had when the form was first validated. "),t(),h(124,wn,1,0,"ng-template",6),t(),i(125,"doc-code-sample",3)(126,"h3",4),e(127,"Reactive Forms"),t(),i(128,"p")(129,"code"),e(130,"suiFormValidation"),t(),e(131," works with "),i(132,"code"),e(133,"[formGroup]"),t(),e(134," and "),i(135,"code"),e(136,"ngModel"),t(),e(137,". Rule failures are added to the matching control's errors under the "),i(138,"code"),e(139,"suiFormValidation"),t(),e(140," key, next to any Angular validator errors"),t(),i(141,"div",5),e(142," With reactive forms, the input's "),i(143,"code"),e(144,"id"),t(),e(145," or "),i(146,"code"),e(147,"name"),t(),e(148," must match the field identifier so errors can be shown next to it. "),t(),h(149,Vn,1,0,"ng-template",6),t(),o(150,"br"),i(151,"h2",2),e(152,"Rules"),t(),i(153,"doc-code-sample",3)(154,"h3",4),e(155,"Empty"),t(),i(156,"p"),e(157,"Check that a field has a value, or that a checkbox is checked"),t(),h(158,On,1,0,"ng-template",6),t(),i(159,"doc-code-sample",3)(160,"h3",4),e(161,"Content Type"),t(),i(162,"p"),e(163,"Inputs can match common content types, or your own regular expression"),t(),h(164,Tn,1,0,"ng-template",6),t(),i(165,"doc-code-sample",3)(166,"h3",4),e(167,"Payment"),t(),i(168,"p"),e(169,"Inputs can validate credit card numbers, optionally limited to some card types"),t(),i(170,"div",5),e(171," Supported types are "),i(172,"code"),e(173,"visa"),t(),e(174,", "),i(175,"code"),e(176,"amex"),t(),e(177,", "),i(178,"code"),e(179,"mastercard"),t(),e(180,", "),i(181,"code"),e(182,"discover"),t(),e(183,", "),i(184,"code"),e(185,"unionpay"),t(),e(186,", "),i(187,"code"),e(188,"jcb"),t(),e(189,", "),i(190,"code"),e(191,"dinersClub"),t(),e(192,", "),i(193,"code"),e(194,"maestro"),t(),e(195,", "),i(196,"code"),e(197,"laser"),t(),e(198," and "),i(199,"code"),e(200,"visaElectron"),t(),e(201,". "),t(),h(202,Pn,1,0,"ng-template",6),t(),i(203,"doc-code-sample",3)(204,"h3",4),e(205,"Matching Fields"),t(),i(206,"p"),e(207,"Fields can be required to match, or differ from, other fields"),t(),h(208,Dn,1,0,"ng-template",6),t(),i(209,"doc-code-sample",3)(210,"h3",4),e(211,"Length"),t(),i(212,"p"),e(213,"Inputs can match against the length of their content"),t(),h(214,Rn,1,0,"ng-template",6),t(),i(215,"doc-code-sample",3)(216,"h3",4),e(217,"Specified Content"),t(),i(218,"p"),e(219,"Rules can specify content that should or should not appear in an input"),t(),h(220,kn,1,0,"ng-template",6),t(),i(221,"doc-code-sample",3)(222,"h3",4),e(223,"Selection Count"),t(),i(224,"p"),e(225,"Multiple selects can specify how many options should be chosen"),t(),h(226,Mn,1,0,"ng-template",6),t()()),n&2){let l=w();m(3),d("templateCode",l.snippetSpecifyingRules)("componentCode",l.snippetSpecifyingRulesTs),m(20),d("templateCode",l.snippetLonghand)("componentCode",l.snippetLonghandTs),m(6),d("templateCode",l.snippetParameters)("componentCode",l.snippetParametersTs),m(12),d("templateCode",l.snippetPrompts)("componentCode",l.snippetPromptsTs),m(21),d("templateCode",l.snippetMatchingFields)("componentCode",l.snippetMatchingFieldsTs),m(14),d("templateCode",l.snippetInline)("componentCode",l.snippetInlineTs),m(18),d("templateCode",l.snippetDependent)("componentCode",l.snippetDependentTs),m(9),d("templateCode",l.snippetOptional)("componentCode",l.snippetOptionalTs),m(9),d("templateCode",l.snippetProgrammatic)("componentCode",l.snippetProgrammaticTs),m(13),d("templateCode",l.snippetReactive)("componentCode",l.snippetReactiveTs),m(28),d("templateCode",l.snippetRuleEmpty)("componentCode",l.snippetRuleEmptyTs),m(6),d("templateCode",l.snippetRuleContentType)("componentCode",l.snippetRuleContentTypeTs),m(6),d("templateCode",l.snippetRulePayment)("componentCode",l.snippetRulePaymentTs),m(38),d("templateCode",l.snippetRuleMatching)("componentCode",l.snippetRuleMatchingTs),m(6),d("templateCode",l.snippetRuleLength)("componentCode",l.snippetRuleLengthTs),m(6),d("templateCode",l.snippetRuleSpecifiedContent)("componentCode",l.snippetRuleSpecifiedContentTs),m(6),d("templateCode",l.snippetRuleSelectionCount)("componentCode",l.snippetRuleSelectionCountTs)}}function Nn(n,u){n&1&&(i(0,"div")(1,"div",5)(2,"code"),e(3,"suiFormValidation"),t(),e(4," is part of "),i(5,"code"),e(6,"SuiFormModule"),t(),e(7," from "),i(8,"code"),e(9,"ngx-semantic/collections/form"),t(),e(10,". Use it on a "),i(11,"code"),e(12,"<form>"),t(),e(13," together with "),i(14,"code"),e(15,"sui-form"),t(),e(16,". "),t(),i(17,"h2",2),e(18,"suiFormValidation"),t(),i(19,"h4",4),e(20,"Properties"),t(),i(21,"table",7)(22,"thead")(23,"tr")(24,"th"),e(25,"Property"),t(),i(26,"th"),e(27,"Description"),t(),i(28,"th"),e(29,"Type"),t(),i(30,"th"),e(31,"Default"),t()()(),i(32,"tbody")(33,"tr")(34,"td"),e(35," suiFields "),t(),i(36,"td"),e(37," Validation rules keyed by field. Each value is a rule, a list of rules, or a longhand field definition "),t(),i(38,"td")(39,"div",8),e(40," SuiFormValidationFieldsInput "),t()(),i(41,"td")(42,"div",9),e(43," null "),t()()(),i(44,"tr")(45,"td"),e(46," suiOn "),t(),i(47,"td"),e(48," When fields are validated "),t(),i(49,"td")(50,"div",8),e(51," 'submit' | 'blur' | 'change' "),t()(),i(52,"td")(53,"div",9),e(54," 'submit' "),t()()(),i(55,"tr")(56,"td"),e(57," suiInline "),t(),i(58,"td"),e(59," Show each error in a label next to its field "),t(),i(60,"td")(61,"div",8),e(62," boolean "),t()(),i(63,"td")(64,"div",9),e(65," false "),t()()(),i(66,"tr")(67,"td"),e(68," suiRevalidate "),t(),i(69,"td"),e(70," Revalidate fields with errors as their value changes "),t(),i(71,"td")(72,"div",8),e(73," boolean "),t()(),i(74,"td")(75,"div",9),e(76," true "),t()()(),i(77,"tr")(78,"td"),e(79," suiDelay "),t(),i(80,"td"),e(81," Milliseconds to wait after typing before validating with "),i(82,"code"),e(83,"change"),t(),e(84," or revalidation. "),i(85,"code"),e(86,"true"),t(),e(87," uses 300ms "),t(),i(88,"td")(89,"div",8),e(90," number | boolean "),t()(),i(91,"td")(92,"div",9),e(93," true "),t()()(),i(94,"tr")(95,"td"),e(96," suiKeyboardShortcuts "),t(),i(97,"td"),e(98," Blur the focused field when "),i(99,"code"),e(100,"Escape"),t(),e(101," is pressed "),t(),i(102,"td")(103,"div",8),e(104," boolean "),t()(),i(105,"td")(106,"div",9),e(107," true "),t()()(),i(108,"tr")(109,"td"),e(110," suiMarkControlsTouchedOnInvalid "),t(),i(111,"td"),e(112," With "),i(113,"code"),e(114,"NgForm"),t(),e(115," or "),i(116,"code"),e(117,"[formGroup]"),t(),e(118,", mark every control as touched after a failed submit "),t(),i(119,"td")(120,"div",8),e(121," boolean "),t()(),i(122,"td")(123,"div",9),e(124," true "),t()()()()(),i(125,"h4",4),e(126,"Events"),t(),i(127,"table",7)(128,"thead")(129,"tr")(130,"th"),e(131,"Event"),t(),i(132,"th"),e(133,"Description"),t(),i(134,"th"),e(135,"Type"),t()()(),i(136,"tbody")(137,"tr")(138,"td"),e(139," suiOnSuccess "),t(),i(140,"td"),e(141," Emitted when the form is submitted or validated and every field is valid "),t(),i(142,"td")(143,"div",8),e(144," EventEmitter&lt;Event&gt; "),t()()(),i(145,"tr")(146,"td"),e(147," suiOnFailure "),t(),i(148,"td"),e(149," Emitted when validation fails, with the error messages and the identifiers of the invalid fields "),t(),i(150,"td")(151,"div",8),e(152," EventEmitter&lt;{errors: string[]; fields: string[]}&gt; "),t()()()()(),i(153,"h4",4),e(154,"Methods"),t(),i(155,"table",7)(156,"thead")(157,"tr")(158,"th"),e(159,"Method"),t(),i(160,"th"),e(161,"Description"),t()()(),i(162,"tbody")(163,"tr")(164,"td"),e(165," validateForm() "),t(),i(166,"td"),e(167," Validates the whole form, shows errors and emits "),i(168,"code"),e(169,"suiOnSuccess"),t(),e(170," or "),i(171,"code"),e(172,"suiOnFailure"),t(),e(173,". Returns whether the form is valid "),t()(),i(174,"tr")(175,"td"),e(176," validateField(identifier) "),t(),i(177,"td"),e(178," Validates one field and shows its error. Returns whether it is valid "),t()(),i(179,"tr")(180,"td"),e(181," isValid(identifier?) "),t(),i(182,"td"),e(183," Returns whether the form, or one field, passes its rules without updating the UI "),t()(),i(184,"tr")(185,"td"),e(186," getFieldElement(identifier) "),t(),i(187,"td"),e(188," Returns the element matching an id, name or "),i(189,"code"),e(190,"data-validate"),t(),e(191," value "),t()(),i(192,"tr")(193,"td"),e(194," getValue(identifier) "),t(),i(195,"td"),e(196," Returns the value of a field "),t()(),i(197,"tr")(198,"td"),e(199," getValues(identifiers?) "),t(),i(200,"td"),e(201," Returns the values of the given fields, or of every validated field "),t()(),i(202,"tr")(203,"td"),e(204," setValue(identifier, value) "),t(),i(205,"td"),e(206," Sets the value of a field "),t()(),i(207,"tr")(208,"td"),e(209," setValues(values) "),t(),i(210,"td"),e(211," Sets several field values from an object "),t()(),i(212,"tr")(213,"td"),e(214," reset() "),t(),i(215,"td"),e(216," Restores every field to the value it had when the form was first validated "),t()(),i(217,"tr")(218,"td"),e(219," clear() "),t(),i(220,"td"),e(221," Clears every field in the form "),t()(),i(222,"tr")(223,"td"),e(224," getAngularForm() "),t(),i(225,"td"),e(226," Returns the "),i(227,"code"),e(228,"FormGroup"),t(),e(229," of a "),i(230,"code"),e(231,"[formGroup]"),t(),e(232," or "),i(233,"code"),e(234,"NgForm"),t(),e(235," on the form, if there is one "),t()()()(),i(236,"h4",4),e(237,"Field Definition"),t(),i(238,"table",7)(239,"thead")(240,"tr")(241,"th"),e(242,"Property"),t(),i(243,"th"),e(244,"Description"),t(),i(245,"th"),e(246,"Type"),t()()(),i(247,"tbody")(248,"tr")(249,"td"),e(250," identifier "),t(),i(251,"td"),e(252," The id, name or "),i(253,"code"),e(254,"data-validate"),t(),e(255," value of the field. Defaults to the key in "),i(256,"code"),e(257,"suiFields"),t()(),i(258,"td")(259,"div",8),e(260," string "),t()()(),i(261,"tr")(262,"td"),e(263," rules "),t(),i(264,"td"),e(265," The rules to check, as rule names or "),i(266,"code"),e(267,"{ type, prompt, value }"),t(),e(268," objects "),t(),i(269,"td")(270,"div",8),e(271," SuiFormValidationRuleSpec[] | string | string[] "),t()()(),i(272,"tr")(273,"td"),e(274," optional "),t(),i(275,"td"),e(276," Only validate the field when it is not empty "),t(),i(277,"td")(278,"div",8),e(279," boolean "),t()()(),i(280,"tr")(281,"td"),e(282," depends "),t(),i(283,"td"),e(284," Only validate the field when this other field has a value "),t(),i(285,"td")(286,"div",8),e(287," string "),t()()()()(),i(288,"h4",4),e(289,"Rules"),t(),i(290,"table",7)(291,"thead")(292,"tr")(293,"th"),e(294,"Rule"),t(),i(295,"th"),e(296,"Description"),t()()(),i(297,"tbody")(298,"tr")(299,"td"),e(300," empty "),t(),i(301,"td"),e(302," A field is not empty "),t()(),i(303,"tr")(304,"td"),e(305," checked "),t(),i(306,"td"),e(307," A checkbox field is checked "),t()(),i(308,"tr")(309,"td"),e(310," email "),t(),i(311,"td"),e(312," A field is a valid e-mail address "),t()(),i(313,"tr")(314,"td"),e(315," url "),t(),i(316,"td"),e(317," A field is a url "),t()(),i(318,"tr")(319,"td"),e(320," integer "),t(),i(321,"td"),e(322," A field is an integer, or in a range: "),i(323,"code"),e(324,"integer[1..10]"),t()()(),i(325,"tr")(326,"td"),e(327," decimal "),t(),i(328,"td"),e(329," A field is a decimal number "),t()(),i(330,"tr")(331,"td"),e(332," number "),t(),i(333,"td"),e(334," A field is any number, decimal or not "),t()(),i(335,"tr")(336,"td"),e(337," regExp[expression] "),t(),i(338,"td"),e(339," A field matches a regular expression: "),i(340,"code"),e(341,"regExp[/^[a-z0-9_-]{3,16}$/]"),t()()(),i(342,"tr")(343,"td"),e(344," creditCard "),t(),i(345,"td"),e(346," A field is a valid credit card, optionally of some types: "),i(347,"code"),e(348,"creditCard[visa,mastercard]"),t()()(),i(349,"tr")(350,"td"),e(351," contains / containsExactly "),t(),i(352,"td"),e(353," A field contains text, case insensitive or sensitive: "),i(354,"code"),e(355,"contains[foo]"),t()()(),i(356,"tr")(357,"td"),e(358," doesntContain / doesntContainExactly "),t(),i(359,"td"),e(360," A field does not contain text: "),i(361,"code"),e(362,"doesntContain[foo]"),t()()(),i(363,"tr")(364,"td"),e(365," is / isExactly "),t(),i(366,"td"),e(367," A field is a value: "),i(368,"code"),e(369,"is[foo]"),t()()(),i(370,"tr")(371,"td"),e(372," not / notExactly "),t(),i(373,"td"),e(374," A field is not a value: "),i(375,"code"),e(376,"not[foo]"),t()()(),i(377,"tr")(378,"td"),e(379," minLength / exactLength / maxLength "),t(),i(380,"td"),e(381," A field's length: "),i(382,"code"),e(383,"minLength[5]"),t()()(),i(384,"tr")(385,"td"),e(386," match / different "),t(),i(387,"td"),e(388," A field matches, or differs from, another field: "),i(389,"code"),e(390,"match[password]"),t()()(),i(391,"tr")(392,"td"),e(393," minCount / exactCount / maxCount "),t(),i(394,"td"),e(395," A multiple select has a number of selections: "),i(396,"code"),e(397,"minCount[2]"),t()()()()()())}var Qt=(()=>{class n{constructor(l){this.snippetSpecifyingRules=tt,this.snippetSpecifyingRulesTs=it,this.snippetLonghand=nt,this.snippetLonghandTs=lt,this.snippetParameters=at,this.snippetParametersTs=rt,this.snippetPrompts=ot,this.snippetPromptsTs=st,this.snippetMatchingFields=mt,this.snippetMatchingFieldsTs=dt,this.snippetInline=ut,this.snippetInlineTs=pt,this.snippetDependent=ct,this.snippetDependentTs=ft,this.snippetOptional=ht,this.snippetOptionalTs=vt,this.snippetProgrammatic=xt,this.snippetProgrammaticTs=St,this.snippetReactive=yt,this.snippetReactiveTs=Et,this.snippetRuleEmpty=gt,this.snippetRuleEmptyTs=bt,this.snippetRuleContentType=Ft,this.snippetRuleContentTypeTs=Ct,this.snippetRulePayment=_t,this.snippetRulePaymentTs=wt,this.snippetRuleMatching=Vt,this.snippetRuleMatchingTs=Ot,this.snippetRuleLength=Tt,this.snippetRuleLengthTs=Pt,this.snippetRuleSpecifiedContent=Dt,this.snippetRuleSpecifiedContentTs=Rt,this.snippetRuleSelectionCount=kt,this.snippetRuleSelectionCountTs=Mt,l.setTitle("Form Validation | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(ne(oe))}}static{this.\u0275cmp=f({type:n,selectors:[["doc-form-validation"]],standalone:!1,decls:3,vars:2,consts:[["header","Form Validation","subHeader","A form validation behavior checks data against a set of criteria before passing it along to the server","semanticUrl","https://semantic-ui.com/behaviors/form.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,r){a&1&&(i(0,"doc-page",0),h(1,In,227,34,"div",1)(2,Nn,398,0,"div",1),t()),a&2&&(m(),d("docPageContent","definition"),m(),d("docPageContent","api"))},dependencies:[fe,pe,ue,ce,D,Y,T,se,It,Nt,Lt,Bt,Gt,At,Ut,Wt,jt,zt,qt,$t,Ht,Yt,Kt,Zt,Jt],encapsulation:2})}}return n})();var ei=`<div sui-grid>
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
`;var ti=`import { SuiVisibilityCalculations } from 'ngx-semantic/modules/visibility';

calculations: SuiVisibilityCalculations | null = null;
keys: (keyof SuiVisibilityCalculations)[] = [
  'pixelsPassed', 'percentagePassed', 'fits', 'width', 'height', 'direction',
  'onScreen', 'offScreen', 'passing', 'topVisible', 'bottomVisible', 'topPassed', 'bottomPassed'
];
`;var ii=`<div sui-buttons
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
`;var ni=`once = true;
continuous = false;
events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 10);
}
`;var li=`<div sui-grid>
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
`;var ai=`events: string[] = [];

log(event: string): void {
  this.events = [event, ...this.events].slice(0, 10);
}
`;var ri=`<div class="visibility-scroller"
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
`;var oi=`items: string[] = ['paragraph', 'short-paragraph', 'paragraph', 'short-paragraph'];
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
`;var si=`<div class="visibility-scroller"
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
`;var mi=`people = ['elliot', 'helen', 'jenny', 'joe', 'justen', 'laura', 'matt', 'stevie'];
loaded = 0;
`;var di=`<div class="visibility-scroller"
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
`;var ui=`<div sui-menu
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
`;function Kn(n){let u=n.offset||0,l=n.element.top,a=n.element.bottom,r=n.element.height;n.includeMargin&&(l-=n.marginTop,a+=n.marginBottom,r+=n.marginTop+n.marginBottom);let s=n.screen.top+u,p=n.screen.top+n.screen.height+u,F=p>=l,ie=s>=l,ve=p>=a,A=s>=a,_e=F&&!A,bi=ie&&!A,we=Math.max(0,s-l),Fi=r>0?we/r:0,Ci=n.scrollTop<n.lastScrollTop?"up":"down";return{topVisible:F,topPassed:ie,bottomVisible:ve,bottomPassed:A,passing:bi,onScreen:_e,offScreen:!_e,fits:r<n.screen.height,width:n.element.width,height:r,pixelsPassed:we,percentagePassed:Fi,direction:Ci}}function Zn(n){return n?Array.isArray(n)?n:Object.keys(n):[]}function Jn(n,u){let l=n.trim();return l.endsWith("%")?parseFloat(l)/100*u:parseFloat(l)}function pi(n,u,l,a,r){return n?r?!0:a?!l:!u:!1}function Xn(n,u,l,a,r,s){return n||!(l||u)?!1:s?!0:r?!a:u}var Qn=["onScreen","offScreen","topVisible","topPassed","bottomVisible","bottomPassed","passing"],el={topVisible:"topVisibleReverse",topPassed:"topPassedReverse",bottomVisible:"bottomVisibleReverse",bottomPassed:"bottomPassedReverse",passing:"passingReverse"},G=(()=>{class n{constructor(){this.document=Z(Oe),this.el=Z(Pe),this.renderer=Z(De),this.zone=Z(Te),this.suiOnce=!0,this.suiContinuous=!1,this.suiContext="window",this.suiScrollContext=null,this.suiOffset=0,this.suiIncludeMargin=!1,this.suiInitialCheck=!0,this.suiObserveChanges=!1,this.suiThrottle=!1,this.suiType=!1,this.suiPassed=null,this.suiZIndex=1,this.suiOnOnScreen=new x,this.suiOnOffScreen=new x,this.suiOnTopVisible=new x,this.suiOnTopPassed=new x,this.suiOnBottomVisible=new x,this.suiOnBottomPassed=new x,this.suiOnPassing=new x,this.suiOnTopVisibleReverse=new x,this.suiOnTopPassedReverse=new x,this.suiOnBottomVisibleReverse=new x,this.suiOnBottomPassedReverse=new x,this.suiOnPassingReverse=new x,this.suiOnUpdate=new x,this.suiOnPassed=new x,this.suiOnRefresh=new x,this.suiOnFixed=new x,this.suiOnUnfixed=new x,this.suiOnLoad=new x,this.lastCalculations=null,this.destroy$=new Ve,this.occurred={},this.previous={},this.scrollEl=window,this.lastScrollTop=0,this.disabled=!1,this.mutationObserver=null,this.refreshTimer=null,this.throttleTimer=null,this.rafId=null,this.imageLoaded=!1,this.isFixed=!1,this.placeholder=null,this.emitters={onScreen:this.suiOnOnScreen,offScreen:this.suiOnOffScreen,topVisible:this.suiOnTopVisible,topPassed:this.suiOnTopPassed,bottomVisible:this.suiOnBottomVisible,bottomPassed:this.suiOnBottomPassed,passing:this.suiOnPassing,topVisibleReverse:this.suiOnTopVisibleReverse,topPassedReverse:this.suiOnTopPassedReverse,bottomVisibleReverse:this.suiOnBottomVisibleReverse,bottomPassedReverse:this.suiOnBottomPassedReverse,passingReverse:this.suiOnPassingReverse}}ngOnInit(){this.bindListeners()}ngAfterViewInit(){this.suiObserveChanges&&typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(()=>this.scheduleRefresh()),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,subtree:!0,attributes:!0})),this.suiInitialCheck&&queueMicrotask(()=>this.check())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.mutationObserver?.disconnect(),this.refreshTimer&&clearTimeout(this.refreshTimer),this.throttleTimer&&clearTimeout(this.throttleTimer),this.rafId!=null&&cancelAnimationFrame(this.rafId),this.removePlaceholder()}refresh(){Object.keys(this.occurred).forEach(l=>{delete this.occurred[l]}),Object.keys(this.previous).forEach(l=>{delete this.previous[l]}),this.suiOnRefresh.emit(),this.check()}disable(){this.disabled=!0}enable(){this.disabled=!1,this.check()}check(){if(this.disabled)return;this.scrollEl=this.resolveScrollElement();let l=this.readCalculations();this.lastCalculations=l,this.suiOnUpdate.emit(l),this.emitConditions(l),this.emitPassed(l),this.applyImageType(l),this.applyFixedType(l)}bindListeners(){let l=this.document.defaultView;this.scrollEl=this.resolveScrollElement(),this.zone.runOutsideAngular(()=>{let a=this.scrollEl===window?l:this.scrollEl;xe(a,"scroll",{passive:!0}).pipe(Se(this.destroy$)).subscribe(()=>this.scheduleCheck()),xe(l,"resize",{passive:!0}).pipe(Se(this.destroy$)).subscribe(()=>this.scheduleCheck())})}scheduleCheck(){if(!this.disabled){if(typeof this.suiThrottle=="number"&&this.suiThrottle>0){this.throttleTimer!=null&&clearTimeout(this.throttleTimer),this.throttleTimer=setTimeout(()=>{this.throttleTimer=null,this.zone.run(()=>this.check())},this.suiThrottle);return}this.rafId==null&&(this.rafId=requestAnimationFrame(()=>{this.rafId=null,this.zone.run(()=>this.check())}))}}scheduleRefresh(){this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.refreshTimer=null,this.refresh()},100)}resolveScrollElement(){let l=this.suiScrollContext??this.suiContext;return!l||l==="window"?window:typeof l!="string"?l:this.document.querySelector(l)||window}readScrollTop(){return this.scrollEl===window?window.scrollY:this.scrollEl.scrollTop}readCalculations(){let l=this.el.nativeElement,a=l.getBoundingClientRect(),r=getComputedStyle(l),s=parseFloat(r.marginTop)||0,p=parseFloat(r.marginBottom)||0,F=this.readScrollTop(),ie=this.scrollEl===window?{top:0,height:window.innerHeight}:(()=>{let A=this.scrollEl.getBoundingClientRect();return{top:A.top,height:A.height}})(),ve=Kn({element:{top:a.top,bottom:a.bottom,width:a.width,height:a.height},screen:ie,offset:this.suiOffset,includeMargin:this.suiIncludeMargin,marginTop:s,marginBottom:p,lastScrollTop:this.lastScrollTop,scrollTop:F});return this.lastScrollTop=F,ve}emitConditions(l){for(let a of Qn){let r=l[a],s=!!this.previous[a],p=el[a];pi(r,s,!!this.occurred[a],this.suiOnce,this.suiContinuous)&&this.emitters[a].emit(l),p&&Xn(r,s,!!this.occurred[a],!!this.occurred[p],this.suiOnce,this.suiContinuous)&&(this.emitters[p].emit(l),this.occurred[p]=!0),r?(this.occurred[a]=!0,!this.suiOnce&&p&&(this.occurred[p]=!1)):this.suiOnce||(this.occurred[a]=!1),this.previous[a]=r}}emitPassed(l){if(!(!l.topPassed&&!l.passing))for(let a of Zn(this.suiPassed)){let r=Jn(a,l.height);if(Number.isNaN(r)||l.pixelsPassed<r)continue;let s=`passed:${a}`,p=!!this.previous[s];pi(!0,p,!!this.occurred[s],this.suiOnce,this.suiContinuous)&&this.suiOnPassed.emit({amount:a,calculations:l}),this.occurred[s]=!0,this.previous[s]=!0}}applyImageType(l){if(this.suiType!=="image"||this.imageLoaded||!l.topVisible)return;let a=this.el.nativeElement,r=a.getAttribute("data-src");r&&(this.renderer.setAttribute(a,"src",r),this.renderer.removeAttribute(a,"data-src"),this.imageLoaded=!0,this.suiOnLoad.emit(l))}applyFixedType(l){this.suiType==="fixed"&&(l.topPassed?this.fixElement(l):this.unfixElement(l))}fixElement(l){if(this.isFixed)return;let a=this.el.nativeElement,r=a.getBoundingClientRect(),s=a.parentNode;s&&(this.placeholder=this.renderer.createElement("div"),this.renderer.setStyle(this.placeholder,"display","block"),this.renderer.setStyle(this.placeholder,"width",`${r.width}px`),this.renderer.setStyle(this.placeholder,"height",`${r.height}px`),this.renderer.insertBefore(s,this.placeholder,a)),this.renderer.addClass(a,"fixed"),this.renderer.setStyle(a,"position","fixed"),this.renderer.setStyle(a,"top",`${this.suiOffset}px`),this.renderer.setStyle(a,"z-index",String(this.suiZIndex)),this.isFixed=!0,this.suiOnFixed.emit(l)}unfixElement(l){if(!this.isFixed)return;let a=this.el.nativeElement;this.renderer.removeClass(a,"fixed"),this.renderer.removeStyle(a,"position"),this.renderer.removeStyle(a,"top"),this.renderer.removeStyle(a,"z-index"),this.removePlaceholder(),this.isFixed=!1,this.suiOnUnfixed.emit(l)}removePlaceholder(){if(!this.placeholder)return;let l=this.placeholder.parentNode;l&&this.renderer.removeChild(l,this.placeholder),this.placeholder=null}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275dir=Re({type:n,selectors:[["","suiVisibility",""]],inputs:{suiOnce:"suiOnce",suiContinuous:"suiContinuous",suiContext:"suiContext",suiScrollContext:"suiScrollContext",suiOffset:"suiOffset",suiIncludeMargin:"suiIncludeMargin",suiInitialCheck:"suiInitialCheck",suiObserveChanges:"suiObserveChanges",suiThrottle:"suiThrottle",suiType:"suiType",suiPassed:"suiPassed",suiZIndex:"suiZIndex"},outputs:{suiOnOnScreen:"suiOnOnScreen",suiOnOffScreen:"suiOnOffScreen",suiOnTopVisible:"suiOnTopVisible",suiOnTopPassed:"suiOnTopPassed",suiOnBottomVisible:"suiOnBottomVisible",suiOnBottomPassed:"suiOnBottomPassed",suiOnPassing:"suiOnPassing",suiOnTopVisibleReverse:"suiOnTopVisibleReverse",suiOnTopPassedReverse:"suiOnTopPassedReverse",suiOnBottomVisibleReverse:"suiOnBottomVisibleReverse",suiOnBottomPassedReverse:"suiOnBottomPassedReverse",suiOnPassingReverse:"suiOnPassingReverse",suiOnUpdate:"suiOnUpdate",suiOnPassed:"suiOnPassed",suiOnRefresh:"suiOnRefresh",suiOnFixed:"suiOnFixed",suiOnUnfixed:"suiOnUnfixed",suiOnLoad:"suiOnLoad"},exportAs:["suiVisibility"]})}}return U([$()],n.prototype,"suiOnce",void 0),U([$()],n.prototype,"suiContinuous",void 0),U([$()],n.prototype,"suiIncludeMargin",void 0),U([$()],n.prototype,"suiInitialCheck",void 0),U([$()],n.prototype,"suiObserveChanges",void 0),n})(),ci=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=j({type:n})}static{this.\u0275inj=W({imports:[re]})}}return n})();function il(n,u){if(n&1&&(i(0,"tr")(1,"td"),e(2),t(),i(3,"td"),e(4),t()()),n&2){let l=u.$implicit,a=w();m(2),P(l),m(2),P(a.calculations==null?null:a.calculations[l])}}function nl(n,u){if(n&1&&(i(0,"div"),e(1),t()),n&2){let l=u.$implicit;m(),P(l)}}function ll(n,u){n&1&&(i(0,"em"),e(1,"Scroll the content to log events"),t())}var al=()=>["25%","50%","75%","100%"];function rl(n,u){if(n&1&&(i(0,"div"),e(1),t()),n&2){let l=u.$implicit;m(),P(l)}}function ol(n,u){n&1&&(i(0,"em"),e(1,"Scroll the content to log events"),t())}function sl(n,u){if(n&1&&o(0,"doc-wireframe",3),n&2){let l=u.$implicit;d("type",l)}}function ml(n,u){n&1&&(i(0,"div",4),e(1," Adding more content... "),t())}function dl(n,u){n&1&&(i(0,"div",5),e(1," That's everything. "),t())}function ul(n,u){if(n&1){let l=J();i(0,"h4",2)(1,"img",3),c("suiOnLoad",function(){V(l);let r=w();return O(r.loaded=r.loaded+1)}),t(),e(2),X(3,"titlecase"),t(),o(4,"doc-wireframe",4)}if(n&2){let l=u.$implicit;w();let a=_(1);m(),d("suiContext",a),ke("data-src","assets/images/"+l+".jpg"),m(),ae(" ",Q(3,3,l)," ")}}var k=class{constructor(){this.calculations=null,this.keys=["pixelsPassed","percentagePassed","fits","width","height","direction","onScreen","offScreen","passing","topVisible","bottomVisible","topPassed","bottomPassed"],this.once=!0,this.continuous=!1,this.events=[],this.items=["paragraph","short-paragraph","paragraph","short-paragraph"],this.loading=!1,this.loads=0,this.maxLoads=5,this.people=["elliot","helen","jenny","joe","justen","laura","matt","stevie"],this.loaded=0,this.shade=0,this.fixed=!1}log(u){this.events=[u,...this.events].slice(0,10)}loadMore(){this.loading||this.loads>=this.maxLoads||(this.loading=!0,setTimeout(()=>{this.items=[...this.items,"paragraph","short-paragraph","paragraph"],this.loads++,this.loading=!1},800))}},fi=(()=>{class n extends k{static{this.\u0275fac=(()=>{let l;return function(r){return(l||(l=M(n)))(r||n)}})()}static{this.\u0275cmp=f({type:n,selectors:[["doc-visibility-usage-example"]],standalone:!1,features:[I],decls:27,vars:2,consts:[["scroller",""],["sui-grid",""],["suiGridColumn","","suiWidth","ten"],[1,"visibility-scroller"],["type","short-paragraph"],["type","paragraph"],["sui-segment","","suiVisibility","",3,"suiOnUpdate","suiContext","suiOnce"],["suiGridColumn","","suiWidth","six"],["sui-table","","suiCelled","","suiCompact","very compact"]],template:function(a,r){if(a&1&&(i(0,"div",1)(1,"div",2)(2,"div",3,0),o(4,"doc-wireframe",4)(5,"doc-wireframe",5),i(6,"div",6),c("suiOnUpdate",function(p){return r.calculations=p}),o(7,"doc-wireframe",5)(8,"doc-wireframe",4)(9,"doc-wireframe",5)(10,"doc-wireframe",5)(11,"doc-wireframe",4)(12,"doc-wireframe",5),t(),o(13,"doc-wireframe",5)(14,"doc-wireframe",4)(15,"doc-wireframe",5),t()(),i(16,"div",7)(17,"table",8)(18,"thead")(19,"tr")(20,"th"),e(21,"Calculation"),t(),i(22,"th"),e(23,"Value"),t()()(),i(24,"tbody"),z(25,il,5,2,"tr",null,ye),t()()()()),a&2){let s=_(3);m(6),d("suiContext",s)("suiOnce",!1),m(19),q(r.keys)}},dependencies:[B,me,de,Y,H,G],encapsulation:2})}}return n})(),hi=(()=>{class n extends k{static{this.\u0275fac=(()=>{let l;return function(r){return(l||(l=M(n)))(r||n)}})()}static{this.\u0275cmp=f({type:n,selectors:[["doc-visibility-frequency-example"]],standalone:!1,features:[I],decls:30,vars:6,consts:[["scroller",""],["tracker","suiVisibility"],["sui-buttons","","suiSize","small"],["sui-button","",3,"click"],["sui-button","","suiToggle","",3,"click","suiActive"],["sui-grid",""],["suiGridColumn","","suiWidth","ten"],[1,"visibility-scroller"],["type","short-paragraph"],["type","paragraph"],["sui-segment","","suiVisibility","",3,"suiOnTopVisible","suiOnTopPassed","suiOnBottomVisible","suiOnBottomPassed","suiOnTopVisibleReverse","suiOnBottomPassedReverse","suiContext","suiOnce","suiContinuous"],["suiGridColumn","","suiWidth","six"],["sui-segment",""],["sui-header",""]],template:function(a,r){if(a&1){let s=J();i(0,"div",2)(1,"button",3),c("click",function(){V(s);let F=_(14);return r.events=[],O(F.refresh())}),e(2," Clear "),t(),i(3,"button",4),c("click",function(){return r.once=!r.once}),e(4," Once "),t(),i(5,"button",4),c("click",function(){return r.continuous=!r.continuous}),e(6," Continuous "),t()(),i(7,"div",5)(8,"div",6)(9,"div",7,0),o(11,"doc-wireframe",8)(12,"doc-wireframe",9),i(13,"div",10,1),c("suiOnTopVisible",function(){return r.log("Top visible")})("suiOnTopPassed",function(){return r.log("Top passed")})("suiOnBottomVisible",function(){return r.log("Bottom visible")})("suiOnBottomPassed",function(){return r.log("Bottom passed")})("suiOnTopVisibleReverse",function(){return r.log("Top not visible")})("suiOnBottomPassedReverse",function(){return r.log("Bottom not passed")}),o(15,"doc-wireframe",9)(16,"doc-wireframe",8)(17,"doc-wireframe",9)(18,"doc-wireframe",9)(19,"doc-wireframe",8),t(),o(20,"doc-wireframe",9)(21,"doc-wireframe",8)(22,"doc-wireframe",9),t()(),i(23,"div",11)(24,"div",12)(25,"h4",13),e(26,"Event Log"),t(),z(27,nl,2,1,"div",null,le,!1,ll,2,0,"em"),t()()()}if(a&2){let s=_(10);m(3),d("suiActive",r.once),m(2),d("suiActive",r.continuous),m(8),d("suiContext",s)("suiOnce",r.once)("suiContinuous",r.continuous),m(14),q(r.events)}},dependencies:[B,me,de,v,he,T,H,G],encapsulation:2})}}return n})(),vi=(()=>{class n extends k{static{this.\u0275fac=(()=>{let l;return function(r){return(l||(l=M(n)))(r||n)}})()}static{this.\u0275cmp=f({type:n,selectors:[["doc-visibility-passed-example"]],standalone:!1,features:[I],decls:22,vars:4,consts:[["scroller",""],["sui-grid",""],["suiGridColumn","","suiWidth","ten"],[1,"visibility-scroller"],["type","short-paragraph"],["type","paragraph"],["sui-segment","","suiVisibility","",3,"suiOnPassed","suiContext","suiPassed"],["suiGridColumn","","suiWidth","six"],["sui-segment",""],["sui-header",""]],template:function(a,r){if(a&1&&(i(0,"div",1)(1,"div",2)(2,"div",3,0),o(4,"doc-wireframe",4)(5,"doc-wireframe",5),i(6,"div",6),c("suiOnPassed",function(p){return r.log(p.amount+" passed")}),o(7,"doc-wireframe",5)(8,"doc-wireframe",4)(9,"doc-wireframe",5)(10,"doc-wireframe",5)(11,"doc-wireframe",4),t(),o(12,"doc-wireframe",5)(13,"doc-wireframe",4)(14,"doc-wireframe",5),t()(),i(15,"div",7)(16,"div",8)(17,"h4",9),e(18,"Event Log"),t(),z(19,rl,2,1,"div",null,le,!1,ol,2,0,"em"),t()()()),a&2){let s=_(3);m(6),d("suiContext",s)("suiPassed",Ne(3,al)),m(13),q(r.events)}},dependencies:[B,me,de,T,H,G],encapsulation:2})}}return n})(),xi=(()=>{class n extends k{static{this.\u0275fac=(()=>{let l;return function(r){return(l||(l=M(n)))(r||n)}})()}static{this.\u0275cmp=f({type:n,selectors:[["doc-visibility-infinite-example"]],standalone:!1,features:[I],decls:7,vars:4,consts:[["scroller",""],[1,"visibility-scroller"],["sui-segment","","suiVisibility","","suiObserveChanges","",3,"suiOnBottomVisible","suiContext","suiOnce"],[3,"type"],["sui-message","","suiState","info"],["sui-message",""]],template:function(a,r){if(a&1&&(i(0,"div",1,0)(2,"div",2),c("suiOnBottomVisible",function(){return r.loadMore()}),z(3,sl,1,1,"doc-wireframe",3,le),N(5,ml,2,0,"div",4),N(6,dl,2,0,"div",5),t()()),a&2){let s=_(1);m(2),d("suiContext",s)("suiOnce",!1),m(),q(r.items),m(2),L(r.loading?5:-1),m(),L(r.loads>=r.maxLoads?6:-1)}},dependencies:[B,D,H,G],encapsulation:2})}}return n})(),Si=(()=>{class n extends k{static{this.\u0275fac=(()=>{let l;return function(r){return(l||(l=M(n)))(r||n)}})()}static{this.\u0275cmp=f({type:n,selectors:[["doc-visibility-lazy-images-example"]],standalone:!1,features:[I],decls:6,vars:2,consts:[["scroller",""],[1,"visibility-scroller"],["sui-header",""],["sui-image","","suiSize","tiny","suiRounded","","suiVisibility","","suiType","image","src","assets/images/wireframes/image.png",3,"suiOnLoad","suiContext"],["type","short-paragraph"]],template:function(a,r){a&1&&(i(0,"div",1,0),z(2,ul,5,5,null,null,ye),t(),i(4,"p"),e(5),t()),a&2&&(m(2),q(r.people),m(3),Ie("Images loaded: ",r.loaded," / ",r.people.length))},dependencies:[B,T,Ge,G,Le],encapsulation:2})}}return n})(),yi=(()=>{class n extends k{static{this.\u0275fac=(()=>{let l;return function(r){return(l||(l=M(n)))(r||n)}})()}static{this.\u0275cmp=f({type:n,selectors:[["doc-visibility-gradual-example"]],standalone:!1,features:[I],decls:12,vars:4,consts:[["scroller",""],[1,"visibility-scroller"],["type","short-paragraph"],["type","paragraph"],["sui-segment","","suiVisibility","","suiContinuous","",3,"suiOnPassing","suiOnTopPassedReverse","suiContext","suiOnce"]],template:function(a,r){if(a&1&&(i(0,"div",1,0),o(2,"doc-wireframe",2)(3,"doc-wireframe",3),i(4,"div",4),c("suiOnPassing",function(p){return r.shade=p.percentagePassed})("suiOnTopPassedReverse",function(){return r.shade=0}),o(5,"doc-wireframe",3)(6,"doc-wireframe",2)(7,"doc-wireframe",3)(8,"doc-wireframe",3),t(),o(9,"doc-wireframe",3)(10,"doc-wireframe",2)(11,"doc-wireframe",3),t()),a&2){let s=_(1);m(4),Me("background-color","rgba(0, 0, 0, "+r.shade+")"),d("suiContext",s)("suiOnce",!1)}},dependencies:[B,H,G],encapsulation:2})}}return n})();function cl(n,u){n&1&&o(0,"doc-visibility-usage-example")}function fl(n,u){n&1&&o(0,"doc-visibility-frequency-example")}function hl(n,u){n&1&&o(0,"doc-visibility-passed-example")}function vl(n,u){n&1&&o(0,"doc-visibility-infinite-example")}function xl(n,u){n&1&&o(0,"doc-visibility-lazy-images-example")}function Sl(n,u){n&1&&o(0,"doc-visibility-gradual-example")}function yl(n,u){if(n&1&&(i(0,"div")(1,"h2",2),e(2,"Usage"),t(),i(3,"doc-code-sample",3)(4,"h3",4),e(5,"How To Use"),t(),i(6,"p"),e(7,"Add "),i(8,"code"),e(9,"suiVisibility"),t(),e(10," to any element to receive events as it moves through the viewport. Every event receives the element calculations"),t(),i(11,"div",5),e(12," These examples scroll inside a container passed to "),i(13,"code"),e(14,"suiContext"),t(),e(15,". Leave it out to track scrolling of the whole page. "),t(),h(16,cl,1,0,"ng-template",6),t(),i(17,"doc-code-sample",3)(18,"h3",4),e(19,"Changing Callback Frequency"),t(),i(20,"p"),e(21,"By default each event only fires "),i(22,"b"),e(23,"the first time"),t(),e(24," its condition is met. Set "),i(25,"code"),e(26,"suiOnce"),t(),e(27," to "),i(28,"code"),e(29,"false"),t(),e(30," to fire each time a condition "),i(31,"b"),e(32,"becomes true"),t(),e(33,", or "),i(34,"code"),e(35,"suiContinuous"),t(),e(36," to fire on "),i(37,"b"),e(38,"every scroll"),t(),e(39," while it holds"),t(),i(40,"div",5),e(41," Call "),i(42,"code"),e(43,"refresh()"),t(),e(44," to reset which events have already fired. "),t(),h(45,fl,1,0,"ng-template",6),t(),i(46,"doc-code-sample",3)(47,"h3",4),e(48,"Passed Amounts"),t(),i(49,"p")(50,"code"),e(51,"suiPassed"),t(),e(52," takes a list of distances, as percentages or pixels, and "),i(53,"code"),e(54,"suiOnPassed"),t(),e(55," fires as each one is scrolled past"),t(),h(56,hl,1,0,"ng-template",6),t(),o(57,"br"),i(58,"h2",2),e(59,"Examples"),t(),i(60,"doc-code-sample",3)(61,"h3",4),e(62,"Infinite Scroll"),t(),i(63,"p"),e(64,"As an alternative to pagination you can use "),i(65,"code"),e(66,"suiOnBottomVisible"),t(),e(67," to load content when the bottom of a container is reached"),t(),i(68,"div",5)(69,"code"),e(70,"suiObserveChanges"),t(),e(71," recalculates positions after new content is added. "),t(),h(72,vl,1,0,"ng-template",6),t(),i(73,"doc-code-sample",3)(74,"h3",4),e(75,"Lazy Loading Images"),t(),i(76,"p"),e(77,"Setting "),i(78,"code"),e(79,"suiType"),t(),e(80," to "),i(81,"code"),e(82,"image"),t(),e(83," swaps an image's "),i(84,"code"),e(85,"data-src"),t(),e(86," into its "),i(87,"code"),e(88,"src"),t(),e(89," once its top is visible. Keep a placeholder in "),i(90,"code"),e(91,"src"),t(),e(92," so the layout does not jump when the image loads"),t(),h(93,xl,1,0,"ng-template",6),t(),i(94,"doc-code-sample",7)(95,"h3",4),e(96,"Gradual Changes"),t(),i(97,"p"),e(98,"Each event receives the calculated values, so you can adjust an element as it is scrolled past"),t(),h(99,Sl,1,0,"ng-template",6),t(),i(100,"doc-code-sample",7)(101,"h3",4),e(102,"Fixing Content To Viewport"),t(),i(103,"p"),e(104,"Setting "),i(105,"code"),e(106,"suiType"),t(),e(107," to "),i(108,"code"),e(109,"fixed"),t(),e(110," fixes an element to the viewport once its top is passed, adds the class "),i(111,"code"),e(112,"fixed"),t(),e(113,", and inserts a placeholder so the page does not shift. It is unfixed when you scroll back"),t(),i(114,"div",8),e(115," This example is not run here because this site is wrapped in a sidebar container, and a transformed ancestor stops "),i(116,"code"),e(117,"position: fixed"),t(),e(118," from attaching to the viewport. Use "),i(119,"code"),e(120,"suiZIndex"),t(),e(121," to keep fixed content above the rest of the page. "),t()()()),n&2){let l=w();m(3),d("templateCode",l.snippetUsage)("componentCode",l.snippetUsageTs),m(14),d("templateCode",l.snippetFrequency)("componentCode",l.snippetFrequencyTs),m(29),d("templateCode",l.snippetPassed)("componentCode",l.snippetPassedTs),m(14),d("templateCode",l.snippetInfinite)("componentCode",l.snippetInfiniteTs),m(13),d("templateCode",l.snippetLazyImages)("componentCode",l.snippetLazyImagesTs),m(21),d("templateCode",l.snippetGradual),m(6),d("templateCode",l.snippetFixed)}}function El(n,u){n&1&&(i(0,"div")(1,"h2",2),e(2,"suiVisibility"),t(),i(3,"h4",4),e(4,"Properties"),t(),i(5,"table",9)(6,"thead")(7,"tr")(8,"th"),e(9,"Property"),t(),i(10,"th"),e(11,"Description"),t(),i(12,"th"),e(13,"Type"),t(),i(14,"th"),e(15,"Default"),t()()(),i(16,"tbody")(17,"tr")(18,"td"),e(19," suiOnce "),t(),i(20,"td"),e(21," Fire each event only the first time its condition is met, until "),i(22,"code"),e(23,"refresh()"),t(),e(24," is called "),t(),i(25,"td")(26,"div",10),e(27," boolean "),t()(),i(28,"td")(29,"div",11),e(30," true "),t()()(),i(31,"tr")(32,"td"),e(33," suiContinuous "),t(),i(34,"td"),e(35," Fire events on every check while their condition holds "),t(),i(36,"td")(37,"div",10),e(38," boolean "),t()(),i(39,"td")(40,"div",11),e(41," false "),t()()(),i(42,"tr")(43,"td"),e(44," suiType "),t(),i(45,"td")(46,"code"),e(47,"image"),t(),e(48," loads "),i(49,"code"),e(50,"data-src"),t(),e(51," into "),i(52,"code"),e(53,"src"),t(),e(54," when visible. "),i(55,"code"),e(56,"fixed"),t(),e(57," fixes the element to the viewport once passed "),t(),i(58,"td")(59,"div",10),e(60," false | 'image' | 'fixed' "),t()(),i(61,"td")(62,"div",11),e(63," false "),t()()(),i(64,"tr")(65,"td"),e(66," suiContext "),t(),i(67,"td"),e(68," The scroll context: "),i(69,"code"),e(70,"'window'"),t(),e(71,", a CSS selector or an element "),t(),i(72,"td")(73,"div",10),e(74," 'window' | string | HTMLElement "),t()(),i(75,"td")(76,"div",11),e(77," 'window' "),t()()(),i(78,"tr")(79,"td"),e(80," suiScrollContext "),t(),i(81,"td"),e(82," Alias of "),i(83,"code"),e(84,"suiContext"),t(),e(85,"; takes precedence when set "),t(),i(86,"td")(87,"div",10),e(88," 'window' | string | HTMLElement "),t()(),i(89,"td")(90,"div",11),e(91," null "),t()()(),i(92,"tr")(93,"td"),e(94," suiOffset "),t(),i(95,"td"),e(96," Pixels to adjust the scroll position by, e.g. to account for a fixed menu. Also the top offset for "),i(97,"code"),e(98,"fixed"),t()(),i(99,"td")(100,"div",10),e(101," number "),t()(),i(102,"td")(103,"div",11),e(104," 0 "),t()()(),i(105,"tr")(106,"td"),e(107," suiIncludeMargin "),t(),i(108,"td"),e(109," Include the element's margins in its calculations "),t(),i(110,"td")(111,"div",10),e(112," boolean "),t()(),i(113,"td")(114,"div",11),e(115," false "),t()()(),i(116,"tr")(117,"td"),e(118," suiInitialCheck "),t(),i(119,"td"),e(120," Check visibility conditions as soon as the element initializes "),t(),i(121,"td")(122,"div",10),e(123," boolean "),t()(),i(124,"td")(125,"div",11),e(126," true "),t()()(),i(127,"tr")(128,"td"),e(129," suiObserveChanges "),t(),i(130,"td"),e(131," Refresh automatically when the element's content changes "),t(),i(132,"td")(133,"div",10),e(134," boolean "),t()(),i(135,"td")(136,"div",11),e(137," false "),t()()(),i(138,"tr")(139,"td"),e(140," suiThrottle "),t(),i(141,"td"),e(142," Debounce scroll checks by this many milliseconds. "),i(143,"code"),e(144,"false"),t(),e(145," uses "),i(146,"code"),e(147,"requestAnimationFrame"),t()(),i(148,"td")(149,"div",10),e(150," number | false "),t()(),i(151,"td")(152,"div",11),e(153," false "),t()()(),i(154,"tr")(155,"td"),e(156," suiPassed "),t(),i(157,"td"),e(158," Distances, as percentages or pixels, that fire "),i(159,"code"),e(160,"suiOnPassed"),t(),e(161," when scrolled past, e.g. "),i(162,"code"),e(163,"['50%', '200px']"),t()(),i(164,"td")(165,"div",10),e(166," string[] | Record&lt;string, unknown&gt; "),t()(),i(167,"td")(168,"div",11),e(169," null "),t()()(),i(170,"tr")(171,"td"),e(172," suiZIndex "),t(),i(173,"td"),e(174," The z-index applied when using "),i(175,"code"),e(176,'suiType="fixed"'),t()(),i(177,"td")(178,"div",10),e(179," number "),t()(),i(180,"td")(181,"div",11),e(182," 1 "),t()()()()(),i(183,"h4",4),e(184,"Events"),t(),i(185,"table",9)(186,"thead")(187,"tr")(188,"th"),e(189,"Event"),t(),i(190,"th"),e(191,"Description"),t(),i(192,"th"),e(193,"Type"),t()()(),i(194,"tbody")(195,"tr")(196,"td"),e(197," suiOnOnScreen "),t(),i(198,"td"),e(199," Any part of the element is in the scroll viewport "),t(),i(200,"td")(201,"div",10),e(202," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(203,"tr")(204,"td"),e(205," suiOnOffScreen "),t(),i(206,"td"),e(207," No part of the element is in the scroll viewport "),t(),i(208,"td")(209,"div",10),e(210," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(211,"tr")(212,"td"),e(213," suiOnTopVisible "),t(),i(214,"td"),e(215," The element's top edge has passed the bottom of the screen "),t(),i(216,"td")(217,"div",10),e(218," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(219,"tr")(220,"td"),e(221," suiOnTopPassed "),t(),i(222,"td"),e(223," The element's top edge has passed the top of the screen "),t(),i(224,"td")(225,"div",10),e(226," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(227,"tr")(228,"td"),e(229," suiOnBottomVisible "),t(),i(230,"td"),e(231," The element's bottom edge has passed the bottom of the screen "),t(),i(232,"td")(233,"div",10),e(234," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(235,"tr")(236,"td"),e(237," suiOnBottomPassed "),t(),i(238,"td"),e(239," The element's bottom edge has passed the top of the screen "),t(),i(240,"td")(241,"div",10),e(242," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(243,"tr")(244,"td"),e(245," suiOnPassing "),t(),i(246,"td"),e(247," The element's top has passed the top of the screen but its bottom has not "),t(),i(248,"td")(249,"div",10),e(250," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(251,"tr")(252,"td"),e(253," suiOnTopVisibleReverse "),t(),i(254,"td"),e(255," Scrolling back up, the element's top edge is no longer visible "),t(),i(256,"td")(257,"div",10),e(258," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(259,"tr")(260,"td"),e(261," suiOnTopPassedReverse "),t(),i(262,"td"),e(263," Scrolling back up, the element's top edge is no longer passed "),t(),i(264,"td")(265,"div",10),e(266," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(267,"tr")(268,"td"),e(269," suiOnBottomVisibleReverse "),t(),i(270,"td"),e(271," Scrolling back up, the element's bottom edge is no longer visible "),t(),i(272,"td")(273,"div",10),e(274," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(275,"tr")(276,"td"),e(277," suiOnBottomPassedReverse "),t(),i(278,"td"),e(279," Scrolling back up, the element's bottom edge is no longer passed "),t(),i(280,"td")(281,"div",10),e(282," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(283,"tr")(284,"td"),e(285," suiOnPassingReverse "),t(),i(286,"td"),e(287," Scrolling back up, the element is no longer being passed "),t(),i(288,"td")(289,"div",10),e(290," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(291,"tr")(292,"td"),e(293," suiOnPassed "),t(),i(294,"td"),e(295," A distance listed in "),i(296,"code"),e(297,"suiPassed"),t(),e(298," has been scrolled past "),t(),i(299,"td")(300,"div",10),e(301," EventEmitter&lt;SuiVisibilityPassedEvent&gt; "),t()()(),i(302,"tr")(303,"td"),e(304," suiOnUpdate "),t(),i(305,"td"),e(306," Emitted every time the calculations are updated "),t(),i(307,"td")(308,"div",10),e(309," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(310,"tr")(311,"td"),e(312," suiOnRefresh "),t(),i(313,"td"),e(314," Emitted when the directive is refreshed "),t(),i(315,"td")(316,"div",10),e(317," EventEmitter&lt;void&gt; "),t()()(),i(318,"tr")(319,"td"),e(320," suiOnLoad "),t(),i(321,"td"),e(322," With "),i(323,"code"),e(324,'suiType="image"'),t(),e(325,", emitted when the image source is swapped in "),t(),i(326,"td")(327,"div",10),e(328," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(329,"tr")(330,"td"),e(331," suiOnFixed "),t(),i(332,"td"),e(333," With "),i(334,"code"),e(335,'suiType="fixed"'),t(),e(336,", emitted when the element becomes fixed "),t(),i(337,"td")(338,"div",10),e(339," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()(),i(340,"tr")(341,"td"),e(342," suiOnUnfixed "),t(),i(343,"td"),e(344," With "),i(345,"code"),e(346,'suiType="fixed"'),t(),e(347,", emitted when the element returns to its position "),t(),i(348,"td")(349,"div",10),e(350," EventEmitter&lt;SuiVisibilityCalculations&gt; "),t()()()()(),i(351,"h4",4),e(352,"Methods"),t(),i(353,"table",9)(354,"thead")(355,"tr")(356,"th"),e(357,"Method"),t(),i(358,"th"),e(359,"Description"),t()()(),i(360,"tbody")(361,"tr")(362,"td"),e(363," check() "),t(),i(364,"td"),e(365," Recalculates and fires any events whose conditions are met "),t()(),i(366,"tr")(367,"td"),e(368," refresh() "),t(),i(369,"td"),e(370," Resets which events have fired, then checks again "),t()(),i(371,"tr")(372,"td"),e(373," disable() "),t(),i(374,"td"),e(375," Stops events temporarily, e.g. while you adjust the scroll position "),t()(),i(376,"tr")(377,"td"),e(378," enable() "),t(),i(379,"td"),e(380," Turns events back on and checks again "),t()()()(),i(381,"h4",4),e(382,"SuiVisibilityCalculations"),t(),i(383,"table",9)(384,"thead")(385,"tr")(386,"th"),e(387,"Field"),t(),i(388,"th"),e(389,"Description"),t(),i(390,"th"),e(391,"Type"),t()()(),i(392,"tbody")(393,"tr")(394,"td"),e(395," pixelsPassed "),t(),i(396,"td"),e(397," Pixels of the element scrolled past the top of the screen "),t(),i(398,"td")(399,"div",10),e(400," number "),t()()(),i(401,"tr")(402,"td"),e(403," percentagePassed "),t(),i(404,"td"),e(405," Fraction of the element scrolled past, from 0 to 1 "),t(),i(406,"td")(407,"div",10),e(408," number "),t()()(),i(409,"tr")(410,"td"),e(411," fits "),t(),i(412,"td"),e(413," Whether the element is shorter than the screen "),t(),i(414,"td")(415,"div",10),e(416," boolean "),t()()(),i(417,"tr")(418,"td"),e(419," width / height "),t(),i(420,"td"),e(421," Size of the element "),t(),i(422,"td")(423,"div",10),e(424," number "),t()()(),i(425,"tr")(426,"td"),e(427," direction "),t(),i(428,"td"),e(429," Scroll direction since the last check "),t(),i(430,"td")(431,"div",10),e(432," 'up' | 'down' "),t()()(),i(433,"tr")(434,"td"),e(435," onScreen / offScreen "),t(),i(436,"td"),e(437," Whether any part of the element is in the viewport "),t(),i(438,"td")(439,"div",10),e(440," boolean "),t()()(),i(441,"tr")(442,"td"),e(443," passing "),t(),i(444,"td"),e(445," Whether the element is being scrolled past "),t(),i(446,"td")(447,"div",10),e(448," boolean "),t()()(),i(449,"tr")(450,"td"),e(451," topVisible / bottomVisible "),t(),i(452,"td"),e(453," Whether the top or bottom edge has passed the bottom of the screen "),t(),i(454,"td")(455,"div",10),e(456," boolean "),t()()(),i(457,"tr")(458,"td"),e(459," topPassed / bottomPassed "),t(),i(460,"td"),e(461," Whether the top or bottom edge has passed the top of the screen "),t(),i(462,"td")(463,"div",10),e(464," boolean "),t()()()()()())}var Ei=(()=>{class n{constructor(l){this.snippetUsage=ei,this.snippetUsageTs=ti,this.snippetFrequency=ii,this.snippetFrequencyTs=ni,this.snippetPassed=li,this.snippetPassedTs=ai,this.snippetInfinite=ri,this.snippetInfiniteTs=oi,this.snippetLazyImages=si,this.snippetLazyImagesTs=mi,this.snippetGradual=di,this.snippetFixed=ui,l.setTitle("Visibility | Ngx Semantic")}static{this.\u0275fac=function(a){return new(a||n)(ne(oe))}}static{this.\u0275cmp=f({type:n,selectors:[["doc-visibility"]],standalone:!1,decls:3,vars:2,consts:[["header","Visibility","subHeader","Visibility provides a set of callbacks for when a content appears in the viewport","semanticUrl","https://semantic-ui.com/behaviors/visibility.html"],[4,"docPageContent"],["sui-header","","suiDividing",""],[3,"templateCode","componentCode"],["sui-header",""],["sui-message","","suiState","info"],["docDemo",""],[3,"templateCode"],["sui-message","","suiState","warning"],["sui-table","","suiCelled","","suiDefinition",""],["sui-label","","suiColour","teal"],["sui-label","","suiColour","grey"]],template:function(a,r){a&1&&(i(0,"doc-page",0),h(1,yl,122,12,"div",1)(2,El,465,0,"div",1),t()),a&2&&(m(),d("docPageContent","definition"),m(),d("docPageContent","api"))},dependencies:[fe,pe,ue,ce,D,Y,T,se,fi,hi,vi,xi,Si,yi],styles:["[_nghost-%COMP%]     .visibility-scroller{height:22rem;overflow-y:auto;padding-right:.5rem}"]})}}return n})();var gl=[{path:"form",component:Qt},{path:"visibility",component:Ei}],gi=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=j({type:n})}static{this.\u0275inj=W({imports:[ge.forChild(gl),ge]})}}return n})();var Jr=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=j({type:n})}static{this.\u0275inj=W({imports:[re,qe,gi,et,We,Be,Xe,Je,Qe,je,Ae,Ue,ze,ci]})}}return n})();export{Jr as BehaviorsModule};
