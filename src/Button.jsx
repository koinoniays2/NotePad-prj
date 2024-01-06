export default function Button(props) {
    return (
        <input className="w-20 border border-[#4C4C4C] rounded-3xl p-1 cursor-pointer
        hover:bg-[#4C4C4C] hover:text-[#F6F6F6]" type="button" value={props.value} onClick={props.clickEvent}/>
    )
}