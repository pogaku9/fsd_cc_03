// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

// methods / hooks / styles
import styles from "./icon.module.css";

interface IIconProps {
    icon: IconName;
    spin?: boolean;
    className?: string;
}

const Icon = ({
    icon, spin = false, className
}: IIconProps): JSX.Element => {
    return <FontAwesomeIcon icon={icon} spin={spin} fixedWidth className={clsx( [styles.icon], className )} />
};

export default Icon;