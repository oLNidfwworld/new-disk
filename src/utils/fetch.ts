
import type { ApiError } from "@/assets/types/error";

async function myFetch<T = unknown>( url: string, init? : RequestInit) {

  try{
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + url, init);
    if ( !response.ok ) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data as T | ApiError;

  } catch ( e ) {
    console.error(e);
  }
}

export {
  myFetch
}
