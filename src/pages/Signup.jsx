import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(props) {
    const navigate =useNavigate()
    const users= props.users
    const setUsers = props.setUsers

    const[eusername,setEusername] = useState()
    const [epassword,setEpassword]= useState()

    function handleUInput(event)
        {
            setEusername(event.target.value)
        }
        function handlePInput(event)
        {
            setEpassword(event.target.value)
        }

        function addUser()
        {
            setUsers([...users,{username:eusername,password:epassword}])
            navigate("/")
        }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>I help you to manage your activites after you login</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 p-1 border border-black bg-transparent rounded-md "
                        placeholder="Username" 
                        onChange={handleUInput}/>

                    <input type="text"
                        className="w-52 p-1 border border-black bg-transparent rounded-md "
                        placeholder="Password" 
                        onChange={handlePInput}/>

                    <input type="text"
                        className="w-52 p-1 border border-black bg-transparent rounded-md "
                        placeholder="Confirm Password" />
                    
                    <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md ">Signup</button>

                    <p>Already have an account? <Link className="underline" to={"/"}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup