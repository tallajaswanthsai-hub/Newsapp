import { useEffect, useState } from "react"
import Newscard from "../components/Newscard";


const News = ({category}) => {
    const [articles,setArticles]=useState([]);
    const apikey=import.meta.env.VITE_API_KEY;
    

    useEffect(()=>{
        let url=`https://newsdata.io/api/1/latest?apikey=${apikey}&language=en&country=in&category=${category}`;
        
    fetch(url).then(Response=>Response.json()).then(data=>setArticles(data.results || []));
   
    },[category])

  return (
    

    <div>
      <h3 >Latest  <span className="badge text-bg-danger mx-1">News</span></h3>
    {articles.map((elem,idx)=>(
       <Newscard key={idx} title={elem.title} description={elem.description} url={elem.link} img={elem.image_url} />
    ))}
    </div>
  )
}

export default News
