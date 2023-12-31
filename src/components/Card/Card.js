import 'tachyons';
const Card = ({name, email, id, username}) => {
    return (
        <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=300x300&set=set2`} alt="MONSTER" />
            <h2>@{username}</h2>
            <h3><em>{name}</em></h3>
            <p>{email}</p>
        </div>
    );

}

export default Card;
