import jessicaImg from "./assets/avatar-jessica.jpeg";

const Card = () => {
    return (
        <div className="card">
            <div className="details">
                <img src={jessicaImg} alt="Jessica profile pic" />
                <p>Jessica Randall</p>
                <p>London, United Kingdom</p>
                <p>"Front-end developer and avid reader."</p>
            </div>
            <div className="links">
                <a href="#" className="button">GitHub</a>
                <a href="#" className="button">Frontend Mentor</a>
                <a href="#" className="button">LinkedIn</a>
                <a href="#" className="button">Twitter</a>
                <a href="#" className="button">Instagram</a>
            </div>
        </div>
    );
};

export default Card;