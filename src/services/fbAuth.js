import { signInWithPopup } from "firebase/auth";
import { fbAuth, provider } from "../firebaseSetup";

export const fbLogin = async () => {
  try {
    return await signInWithPopup(fbAuth, provider);
  } catch (error) {
    return error;
  }
};
