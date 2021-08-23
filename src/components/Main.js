//import css?


//tag or filter buttons (vegan,vegetarian,omni, Starter, main, dessert, smoothie)

//vegan button

//vegetarian button

//omnivorous button

//starter button

//main button

//smoothie button

//tag or filter buttons end
function Main({ children }) {
    return (
        <>
        <div>
            <button className="vegan"></button >
            <button className="vegetarian"></button>
            <button className="omnivourus" > </button>
            <button className="starter" ></button>
            <button className="main"></button>
            <button className="smoothie" ></button>
        </div>
        <div className="posts">

        </div>
        </>
    );
}

export default Main;