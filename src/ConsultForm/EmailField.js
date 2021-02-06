export const EmailField = ({
                        input,
                        label,
                        type,
                        meta: { touched, error, warning }}) => {
    return (
        <div>
            <input className="emailField" placeholder={label} type={type} {...input} />
            { touched && error && <label className={"error"}>{error}</label> }
        </div>
    )
}

