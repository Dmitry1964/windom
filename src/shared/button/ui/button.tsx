
type ButtonPropsType = {
    children: string;
    options?: string;
}

const Button = (props : ButtonPropsType)  => {
    const {children, options} = props
    return (
        <button>
            {children}
        </button>
    )
}

export default Button;