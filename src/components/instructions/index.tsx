// methods / hooks / styles
import sytles from "./instructions.module.css";;
import wireframe from "../../assets/images/wireframe.png";
import config from "../utilities/config.json";

const Instructions = () => {
    return <div className={sytles.instructionsContainer}>
        <div className="bg-white w-full rounded-md flex flex-col p-4">
            <div className="w-full">
                <h2 className={sytles.cardTitle}>Wireframe & Instructions</h2>
            </div>
            <div>
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <figure className="w-full sm:w-1/2">
                        <img src={wireframe} alt="Wire Frame" className="h-96" />
                    </figure>
                    <ul className="list-disc list-inside py-4">
                        <li>Design and develop a page to check weather</li>
                        <li>User must be able to enter a city name to check weather</li>
                        <li>User must be able to select weather measurement unit of either metric (&deg;c) or imperial (F)</li>
                        <li>Display the data as a card <code className="bg-gray pr-2 pl-2">*appended</code> to the page</li>
                        <li>Use a reusable component to display weather data</li>
                        <li>Display appropriate icon based on the weather condition</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-white w-full rounded-md flex flex-col p-4">
            <div className="w-full">
                <h2 className={sytles.cardTitle}>API Details</h2>
            </div>
            <div>
                <ul className="list-disc list-inside py-4">
                    <li>API key will be provided during the session</li>
                    <li>Example: <a className="text-blue-700" href={config.API}>{config.API}?q=&lt;city&gt;&appid=&lt;secret_key&gt;</a></li>
                    <li>You can also pass <code>units=&lt;unit&gt;</code> query parameter as well to the API</li>
                    <li>
                        For API response fields description, please refer to the documentation at&nbsp;
                        <a href="https://openweathermap.org/current#parameter" target="_blank" className="text-blue-700">
                            https://openweathermap.org/response/
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
};

export default Instructions;