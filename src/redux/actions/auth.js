import {
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "../constants/auth";
import axios from "axios";

export const signIn =
  (credentials) =>
  async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      dispatch({ type: SIGNIN_SUCCESS });
    } catch (error) {
      dispatch({
        type: SIGNIN_ERROR,
        error,
      });
    }
  };

export const signInWithGoogle =
  () =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firebase = getFirebase();
      const firestore = getFirestore();
      const GoogleProvider = new firebase.auth.GoogleAuthProvider();
      const response = await firebase.auth().signInWithPopup(GoogleProvider);
      const chatProfile = {
        email: response.user.email,
        username: response.user.email.split("@")[0],
        secret: response.user.uid,
      };
      let formdata = new FormData();

      for (let key in chatProfile) {
        formdata.append(key, chatProfile[key]);
      }
      let chatAppId;
      await axios
        .post("https://api.chatengine.io/users/", formdata, {
          headers: {
            "private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
          },
        })
        .then((response) => (chatAppId = response.data.id));

      await firestore
        .collection("profile")
        .doc(response.user.uid)
        .set({
          fname: response.user.displayName.split(" ")[0],
          lname: response.user.displayName.split(" ")[1],
          username: response.user.email.split("@")[0],
          followers: [response.user.uid],
          following: [response.user.uid],
          chatAppId: chatAppId,
        });
      dispatch({
        type: SIGNIN_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        error,
      });
    }
  };

export const signUp =
  (credentials) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firebase = getFirebase();
      const firestore = getFirestore();

      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        );

      const chatProfile = {
        email: credentials.email,
        username: credentials.email.split("@")[0],
        secret: response.user.uid,
      };
      let formdata = new FormData();

      for (let key in chatProfile) {
        formdata.append(key, chatProfile[key]);
      }
      let chatAppId;
      await axios
        .post("https://api.chatengine.io/users/", formdata, {
          headers: {
            "private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
          },
        })
        .then((response) => (chatAppId = response.data.id));

      await firestore
        .collection("profile")
        .doc(response.user.uid)
        .set({
          fname: credentials.fname,
          lname: credentials.lname,
          username: credentials.email.split("@")[0],
          followers: [response.user.uid],
          following: [response.user.uid],
          chatAppId: chatAppId,
        });

      dispatch({ type: "SIGNUP_SUCCESS" });
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        error,
      });
    }
  };

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    await firebase.auth().signOut();

    dispatch({ type: SIGNOUT_SUCCESS });
  };
};
