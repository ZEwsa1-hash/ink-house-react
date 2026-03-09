function CardArt({ src, author, title, description, price, children }) {
  return (
    <div className="card-art">
      <img src={src} alt={author} width="310" height="422" className="card-art__image" />
      <p className="card-art__image-title">{author}</p>
      <h3 className="card-art__title">{title}</h3>
      <p className="card-art__description">{description}</p>
      <p className="card-art__price">{price}</p>
      {children}
    </div>
  )
}

export default CardArt
