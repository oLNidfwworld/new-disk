import type { RegistrationOutput,  RegistrationInput, AuthInput, AuthOutput } from "@/assets/types/user";
import { myFetch } from "./fetch";
import type { ApiError } from "@/assets/types/error";

async function register( input : RegistrationInput ) {
  const response = await myFetch<RegistrationOutput | ApiError>('/reg', {
    method : 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(input)
  });

  return response;
}

async function login( input : AuthInput ) {
  const response = await myFetch<AuthOutput>('/auth', {
    method : 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(input)
  });

  return response;
}

async function getUserData( access_token : string ) {
  const response = await myFetch<RegistrationOutput>('/auth', {
    method : 'GET',
    headers: {Authorization: access_token}
  });

  return response;
}

export { register, login, getUserData }
