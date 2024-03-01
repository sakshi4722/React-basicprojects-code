function Cardppt({ title, image, description, link }) {
    return (
    <div className="card">
    <img src={image} alt={title} />
    <div className="card-body">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link}>Learn More</a>
    </div>
    </div>
    );
   }

   export default Cardppt