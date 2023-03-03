import { types } from "../types/types"


export const login = (uid, userName)=>{
  return{
    type: types.login,
    payload: {
      uid,
      userName,
    }
  }
}