import marked from "marked";

export const Post = ({ article }) => {
  const { name, featuredImage, description, ingredients } = article.fields;
  const postDescription = marked(description);
  return (
    <div className="post">
      <h2 className="title">{name}</h2>
      {featuredImage && (
        <img
          className="featuredImage"
          src={featuredImage.fields.file.url}
          alt={name}
          title={name}
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
      <section dangerouslySetInnerHTML={{ __html: postIngredients }} />
    </div>
  );
};