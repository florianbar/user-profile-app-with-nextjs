const Button = props => {
    return (
        <React.Fragment>
            <button onClick={props.clicked}>
                {props.children}
            </button>
            <style jsx>{`
                button { display: inline-block;
                    margin: 5px;
                    padding: 10px;
                    background-color: lightgreen;
                    border: none;
                    border-radius: 5px;
                    outline: none;
                    font-weight: 600;
                }
            
                button:hover {
                    cursor: pointer;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Button;