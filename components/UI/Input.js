import React from 'react';
//import styled from 'styled-components';

// const styles = `
//     display: inline-block;
//     margin: 5px;
//     padding: 8px 10px;
//     background-color: #fff;
//     border: none;
//     border-radius: 5px;
//     outline: none;
// `;
// const StyledInput = styled.input`${styles}`;
// const StyledSelect = styled.select`${styles}`;

const Input = props => {
    let inputElement = null;

    switch (props.elementType) {
        case "select":
            inputElement = (
                <select value={props.value} onChange={props.change}>
                    {props.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;

        default:
            inputElement = (
                <input 
                    type={props.type}
                    value={props.value}
                    onChange={props.change} 
                    placeholder={props.placeholder}
                />
            );
    }

    return inputElement;
};

export default Input;