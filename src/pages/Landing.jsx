import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation()
    return (<div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <Header username={data.state.user}/>
            <div className="flex justify-between gap-7 my-5 flex-wrap">
                <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Chennai"} />
                <Card bgcolor={"#FD6663"} title={"November"} subtitle={"14:08:19"} />
                <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
            </div>
            <TodoContainer />
        </div>
    </div>)
}
export default Landing