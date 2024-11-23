import { useState } from "react"

function AddtodoForm(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr;

    const[newActivity, setNewActivity] = useState("")

    function handleChange(event)
    {
        setNewActivity(event.target.value)
    }
    function addActivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1, activity:newActivity}])
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newActivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
                <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    )
}
export default AddtodoForm