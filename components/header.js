import Image from "next/image";
import HeaderIcon from "./headerIcon";
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/24/solid';



export default function Header() {
    return (
        <div className="bg-gray-700 text-gray-300 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
            <div className="flex ">
                <HeaderIcon Icon={HomeIcon} title="HOME" />
                <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
                <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
                <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
                
            </div>
            <Image
            className="cursor-pointer active:brightness-110"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" width={100} height={100}/>
        </div>
    );
}