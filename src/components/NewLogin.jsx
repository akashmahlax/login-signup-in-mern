import { useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios";



const NewLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const navigate = useNavigate()


    const Login = async () => {
        try {
            const  r =  await axios.post("http://localhost:5000/auth/newlogin" , {username, email, password} )
            console.log(r.data.message)
            navigate("/home")

        } catch (error) {
            console.log(error, "error in login")
            alert("error in login")
            
        }

    } 

  return (
    <>
     <input 
        type="text" 
        placeholder="username"
        onChange={e => setUsername(e.target.value)}  />
   
        <input 
        type="email" 
        placeholder="email"
        onChange={e => setEmail(e.target.value)} 

         />
        <input 
        type="password" 
        placeholder="password"
        onChange={e => setPassword(e.target.value)} 

         />
        <button  onClick={Login}>submit</button>
  


    </>
  )
}

export default NewLogin