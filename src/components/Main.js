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
        <div>
            <button className="vegan" />
            <button className="vegetarian" />
            <button className="omnivourus" />
            <button className="starter" />
            <button className="main" />
            <button className="smoothie" />
        </div>
    );
}

export default Main;