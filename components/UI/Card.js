import Link from 'next/link';
//import styled from 'styled-components';

// const StyledCard = styled.div`
//     display: block;
//     width: 200px;
//     background-color: #fff;
//     padding: 15px;
//     border-radius: 5px;
//     box-shadow: 0 2px 3px 0px rgba(0,0,0,0.2);
//     text-decoration: none;
//     color: #333;
//     font-size: 14px;

//     &:hover {
//         box-shadow: 0 2px 15px 0px rgba(0,0,0,0.2);
//         cursor: pointer;
//     }

//     .photo { border-radius: 100%; }
//     .title { font-weight: 700; }
//     .subtitle { color: #999; font-style: italic; }
// `;

const Card = props => {
    return (
        <div onClick={props.clicked}>
            <img
                className="photo" 
                src={props.image} 
                alt={props.title} 
            />
            <div className="title">
                {props.title}
            </div>
            <div className="subtitle">
                {props.subtitle}
            </div>
        </div>
    );
};

export default Card;