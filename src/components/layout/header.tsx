// libraries
import { Link } from "react-router-dom";

import Icon from "../utilities/icon";

const Header = (): JSX.Element => {
    return <header className="w-full">
        <div className="flex items-center justify-between bg-white shadow-sm p-4">
            <Link to="/">
                <div className="flex flex-none gap-2 items-center">
                    <figure>
                        <Icon icon="cloud-sun-rain" className="text-[#0676e1] text-4xl" />
                    </figure>
                    <h2 className="font-semibold text-xl text-[#0676e1]">
                        The Weather App
                    </h2>
                </div>
            </Link>
            <div className="flex items-center gap-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/instructions" className="text-gray-600 hover:text-gray-900">Instructions</Link>
            </div>
        </div>
    </header>
};

export default Header;