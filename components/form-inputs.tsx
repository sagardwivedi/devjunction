export function FnameInput() {
  return (
    <div>
      <label className="text-gray-950" htmlFor="fname">
        First Name
      </label>
      <input type="text" name="firstName" id="fname" className="input-css" />
    </div>
  );
}

export function LnameInput() {
  return (
    <div>
      <label className="text-gray-950" htmlFor="lname">
        Last Name
      </label>
      <input type="text" name="lastName" id="lname" className="input-css" />
    </div>
  );
}

export function EmailInput() {
  return (
    <div>
      <label className="text-gray-950" htmlFor="email">
        Email
      </label>
      <input type="email" name="Email" id="email" className="input-css" autoComplete="email" />
    </div>
  );
}

export function PasswordInput() {
  return (
    <div>
      <label className="text-gray-950" htmlFor="password">
        Password
      </label>
      <input
        minLength={8}
        type="password"
        name="Password"
        id="password"
        className="input-css"
      />
    </div>
  );
}
