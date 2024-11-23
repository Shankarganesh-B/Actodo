function Card(props) {
    return (
        <div style={{ backgroundColor: props.bgcolor}} className="flex-grow px-10 py-5 border rounded-md text-center">
            <h1 className="font-medium text-2xl">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}
export default Card