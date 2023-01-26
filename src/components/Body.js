import RestaurantCard from "./RestaurantCard.js";
import { restaurantList } from "../config.js";
import { useState } from "react";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant.name.includes(searchText));
}

const Body = () => {
    
    const [restaurants, setRestaurants] = useState(restaurantList)

    const [searchText, setSearchText] = useState();
    


    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText} 
                onChange={
                    (e) => {
                        setSearchText(e.target.value)
                    }
                } />
                <button className="search-btn"
                onClick={() => {
                    const data = filterData(searchText, restaurantList);
                    setRestaurants(data);
                }}
                >Search</button> {searchText}
            </div>
            <div className="restaurant-list">
                {restaurants.map((value) => {
                    return <RestaurantCard key={value.id} {...value} />
                })}
            </div>
        </>
       
    )
}

export default Body;


