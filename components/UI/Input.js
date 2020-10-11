const Input = props => {
    return (
        <React.Fragment>
            { props.elementType === "select" ? (
                <select 
                    className="input"
                    value={props.value} 
                    onChange={props.change}
                >
                    {props.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            ) : (
                <input 
                    className="input"
                    type={props.type}
                    value={props.value}
                    onChange={props.change} 
                    placeholder={props.placeholder}
                />
            )}
            <style jsx>{`
                .input {
                    display: inline-block;
                    margin: 5px;
                    padding: 8px 10px;
                    background-color: #fff;
                    border: 1px solid #333;
                    border-radius: 5px;
                    outline: none;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Input;