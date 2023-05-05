// libraries
import { Link } from "react-router-dom";

// components
import Icon from "../utilities/icon";

const Footer = () => {
    return <footer className="w-screen p-4 bg-gray-100 flex flex-col space-y-4">
        <div className="flex items-center justify-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/instructions" className="text-gray-600 hover:text-gray-900">Instructions</Link>
            <a href="https://cloudwick.com" target="_blank" className="text-gray-600 hover:text-gray-900">
                Cloudwick Technologies Inc.,{" "} <Icon icon="up-right-from-square" />
            </a>
            <a href="https://openweathermap.org/current#name" target="_blank" className="text-gray-600 hover:text-gray-900">
                OpenWeather API{" "} <Icon icon="up-right-from-square" />
            </a>
        </div>
        <div className="flex items-center justify-center gap-8 text-blue-500">
            <Icon icon="code" />
            <Icon icon="umbrella" />
            <Icon icon="temperature-high" />
            <Icon icon="cloud-sun-rain" />
            <Icon icon="cloud-bolt" />
            <Icon icon="cloud-showers-heavy" />
            <Icon icon="snowflake" />
            <Icon icon="wind" />
            <Icon icon="sun" />
            <Icon icon="cloud" />
            <Icon icon="cloud-moon" />
        </div>
    </footer>
};

export default Footer;