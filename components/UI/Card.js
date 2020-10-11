const Card = props => {
    return (
        <React.Fragment>
            <div 
                className="card" 
                onClick={props.clicked}
            >
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
            <style jsx>{`
                .card {
                    display: block;
                    width: 200px;
                    background-color: #fff;
                    padding: 15px;
                    border-radius: 5px;
                    box-shadow: 0 2px 3px 0px rgba(0,0,0,0.2);
                    text-decoration: none;
                    color: #333;
                    font-size: 14px;
                }

                .card:hover {
                    box-shadow: 0 2px 15px 0px rgba(0,0,0,0.2);
                    cursor: pointer;
                }

                .photo { border-radius: 100%; }
                .title { font-weight: 700; }
                .subtitle { color: #999; font-style: italic; }
            `}</style>
        </React.Fragment>
    );
};

export default Card;