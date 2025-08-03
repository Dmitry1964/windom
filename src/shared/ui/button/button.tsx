import cn from "classnames";
import cls from './button.module.scss';
import { ButtonMods } from "src/shared/ui-types";

type ButtonPropsType = {
    children: React.ReactNode;
    options?: ButtonMods;
}

const Button = (props : ButtonPropsType)  => {
    const {children, options} = props;

    return (
        <button className={cn(cls.button, options && cls[`button__${options}`])}>
            {children}
        </button>
    )
}

export {Button};
