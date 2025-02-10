interface RegistrationInput {
  "email": string,
  "password": number | string,
  "confirm_password": number | string
}

type AuthInput = Omit<RegistrationInput, 'confirm_password'>

type RegistrationOutput = Omit<AuthInput, 'password'> & { id : number }

interface AuthOutput {
  "accessToken": string
}

export type {
  RegistrationInput, AuthInput, AuthOutput, RegistrationOutput,
}
