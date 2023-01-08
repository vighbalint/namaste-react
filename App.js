import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <a href="/">
    <img 
    className="logo"
    alt="logo" 
    src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" />
    </a>
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
        
}

const restaurantList = 
[
    {
        id: 0,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hki2lua6e6zyugkiff8o",
        name: "Burger King",
        cusines: ['burgers', 'american'],
        stars: 4.2,
    },
    {
        id: 1,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hki2lua6e6zyugkiff8o",
        name: "Pizza Hut",
        cusines: ['burgers', 'american'],
        stars: 4.2,
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hki2lua6e6zyugkiff8o",
        name: "KFC",
        cusines: ['burgers', 'american'],
        stars: 4.2,
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hki2lua6e6zyugkiff8o",
        name: "McDonalds",
        cusines: ['burgers', 'american'],
        stars: 4.2,
    }
]


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

const Body = () => {
    return (
        <div className="restaurant-list">
            {restaurantList.map((value) => {
                return <RestaurantCard key={value.id} {...value} />
            })}
        </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);