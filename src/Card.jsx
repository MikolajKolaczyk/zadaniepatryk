import profilePic from './assets/profile picture.webp'


function Card ( ) {

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Happy Player</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus?</p>
        </div>
    );

}

export default Card