import { useEffect } from "react"
import { SignOutAsync, selectLoggedInUser } from "../AuthSlice"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Logout = () => {
    const dispatch = useDispatch()
    const user = useSelector (selectLoggedInUser);
    useEffect(()=>{
       dispatch(SignOutAsync())
    })
  return (
    <div>
        {!user &&<Navigate to="/login" replace={true}></Navigate>}
    </div>
  )
}

export default Logout