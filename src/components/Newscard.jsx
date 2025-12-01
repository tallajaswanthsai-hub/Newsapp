import image from "../assets/news.jpg"

const Newscard = ({title,description,img,url}) => {
  return (
    
    <div className="card bg-dark text-light mb-3  d-inline-block my-3 mx-3 p-2 " style={{maxWidth:"345px"}}>
  <img  src={img ? img : image}  style={{height:"200px", width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"This is the current event.it is information about something that has just happened."}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>

  )
}

export default Newscard
