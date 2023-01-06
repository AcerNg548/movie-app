
export default function HeaderIcon({Icon, title}) {
    return (
        <div className="mx-4 flex flex-col cursor-pointer hover:text-white lg:mx-6 active:text-red-400 ">
            <Icon className="h-5"/>
            <p className="my-2">{title}</p>
        </div>
    )
}