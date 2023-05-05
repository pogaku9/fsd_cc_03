
// libraries
import { useState } from "react";

import config from "../utilities/config.json";

interface ISampleProps {
    city: string;
    unit?: "standard" | "metric" | "imperial";
}
const Sample = ({
    city, unit = "metric"
}: ISampleProps) => {
    const [ loading, setLoading ] = useState(false);
    const [ cityName, setCityName ] = useState(city);
    return <></>
};

export default Sample;