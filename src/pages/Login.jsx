import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const navigate = useNavigate()
    const[eusername,setEusername] = useState()
    const [epassword,setEpassword]= useState()
    const[rUser,setRuser]=useState(true)

    const users = props.users

        function handleUInput(event)
        {
            setEusername(event.target.value)
        }
        function handlePInput(event)
        {
            setEpassword(event.target.value)
        }


        function checkUser()
        {   
            var userfound = false
            users.forEach(function(item)
            {
                if(item.username===eusername && item.password===epassword)
                    {
                        userfound = true
                        console.log("succesfful")
                        navigate("/landing",{state:{user:eusername}})
                        
                    }
            
            })

            if(userfound===false){
                console.log("login failed")
                setRuser(false)
            }
        }

    return(
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {rUser?<p>I help you to manage your activites after you login :)</p>: <p className="text-red-400">Please Signup before login!!</p>}

            <div className="flex flex-col gap-2 my-2">
                <input type="text"
                    className="w-52 p-1 border border-black bg-transparent rounded-md "
                    placeholder="Username" 
                    onChange={handleUInput}/>

                <input type="text"
                    className="w-52 p-1 border border-black bg-transparent rounded-md "
                    placeholder="Password" 
                    onChange={handlePInput}/>

                
                <button className="bg-[#8272DA] w-24 p-1 rounded-md " onClick={checkUser}>
                    Login</button>

                <p>Do not have an account yet? <Link className="underline" to={"/signup"}>Signup</Link></p>
            </div>
        </div>
    </div>
    )
}
export default Login