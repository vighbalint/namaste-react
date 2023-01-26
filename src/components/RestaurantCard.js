const RestaurantCard = ({image, name, cusines, stars}) => {
    return (
        <div className="card">
            <img src={image} />
            <h2>{name}</h2>
            <h3>{cusines.join(', ')}</h3>
            <h4>{stars}</h4>
        </div>
    )
}

export default RestaurantCard;