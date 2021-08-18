import selected from ;





// single recipe page

const Recipe = ({ article }) => {
    const { name, featuredImage, description, ingridients} = article.fields;
    const postDescription = selected(description);
    return (
        <div className="recipe">
            <h3 className="name">{name}</h3>
        
        </div>
    );
};
