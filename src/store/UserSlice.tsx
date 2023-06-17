import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { database } from "../firebase";
import { ref, child, get, update, set } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { error } from "console";

interface Users {
    id :string;
    Lastname:string;
    Surname:number;
    Position_User:string;
    Date_User: string;
    Password: string;
    email: string;
    Phone_User:number;
    UserName:string;
  }

  interface UserState {
    data: Users[];
    loading: boolean;
    error: string | null;
    searchTerm: string;
}

const initialState: UserState = {
    data: [],
    loading: false,
    error: null,
    searchTerm: "",
};


const UserSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        // fetchUsersStart(state) {
        //     state.loading = true;
        //     state.error = null;
        // },
        // fetchUsersSuccess(state, action: PayloadAction<User[]>) {
        //     state.data = action.payload;
        //     state.loading = false;
            
        // },
        // fetchUsersFailure(state, action: PayloadAction<string>) {
        //     state.loading = false;
        //     state.error = action.payload;
        // },
        loginUsersStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginUsersSuccess(state, action: PayloadAction<Users[]>) {
            state.data = action.payload;
            state.loading = false;
            
        },
        loginUsersFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
       
    },
});

export const {
    // fetchUsersFailure,
    // fetchUsersSuccess,
    // fetchUsersStart,
    loginUsersFailure,
    loginUsersStart,
    loginUsersSuccess
} = UserSlice.actions;

export default UserSlice.reducer;

// export const fetchData = () => {
//     return async (dispatch: any) => {
//       dispatch(fetchUsersStart());
  
//       try {
//         const dbRef = ref(database);

//         const snapshot = await get(child(dbRef, "Users"));
//         const data = snapshot.val();
//         dispatch(fetchUsersSuccess(data));
//       } catch (error:any) {
//         dispatch(fetchUsersFailure(error.message));
//       }
//     };
//   };


  export const login = (userName: string, password: string):AppThunk  => {


      return async (dispatch: any) => {
              dispatch(loginUsersStart());
              try {
   

                      const userRef = database
                        .ref("Users")
                        .orderByChild("UserName").equalTo(userName)
                      
                      const snapshot = await userRef.once("value");
                      const userData = snapshot.val();
                
                      if (!userData) {
                        loginUsersFailure("")
                
                        return;
                      }
                      const userId = Object.keys(userData)[0];
                      const user = userData[userId] as Users;
                      // const userame = userData[userId].Name_User as Users;
                      // const name = userData[userId].UserName as Users;
                
                      // // localStorage.setItem("id", userId);
                      // // localStorage.setItem("Name_User", userame.toString());
                      // // localStorage.setItem("userName", name.toString());
                      if (user.Password.toString() !== password) {
                        loginUsersFailure("")
                
                        return;
                      }
                      //Login successful
                      dispatch(loginUsersSuccess(userData));
                      //navigate(`/profile/`);
                    } catch (error:any) {
                      
                      loginUsersFailure(error)
                    }
    };
  };
  
