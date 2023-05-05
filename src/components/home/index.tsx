// libraries
import { Link } from "react-router-dom";

// methods / hooks / styles
import styles from "./home.module.css";
import appLogo from "../../assets/images/app.svg";

const Home = (): JSX.Element => {
    return <div className={styles.home}>
        <h1 className={styles.developer}>Hello Developer,</h1>
        <p className="text-xl">
            We are glad you are here. This is a live coding session as part of the
            interview process.
        </p>
        <p className="text-xl">
            See <Link className="text-blue-800" to="/instructions">Instructions</Link> to get started
        </p>
        <div className="w-full flex justify-center py-12">
            <figure>
                <img src={appLogo} alt="Weather App Logo" className="h-80" />
            </figure>
        </div>
    </div>
};


export default Home;