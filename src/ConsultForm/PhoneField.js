export const PhoneField = ({
                               input,
                               label,
                               type,
                               meta: { touched, error, warning }
                           }) => {
    return (
        <div className={"row"}>
            <select className={"phone-select"}>
                <option value="RU +7">RU +7</option>
            </select>
            <input className="phoneField" placeholder={label} type={type} {...input} />
            { touched && error && <label className={"error"}>{error}</label> }
        </div>
    )
}
