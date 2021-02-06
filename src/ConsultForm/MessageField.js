export const MessageField = ({
                                 input,
                                 label,
                                 type,
                                 meta: { touched, error, warning }}) => {
    return (
        <div>
            <textarea className="emailField" id="textarea" placeholder={label} {...input}  />
            { touched && error && <label className={"error"}>{error}</label> }
        </div>
    )
};
