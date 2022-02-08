function Product(props){
    return (
        <article className="flex justify-between align-start">
          <div  className="flex-40 img-container">
              <img className="full-width" lazy src={'/assets' + props.details.img} />
          </div>
          <div className="flex-60 details">
              <span>$ {props.details.price}</span>
            <h2>{props.details.title}</h2>
            <hr/>
             <p>
             {
             props.details.desc[0].toUpperCase() + props.details.desc.slice(1, props.details.desc.length)
             }
             </p>
          </div>
        </article>
    );
 }
 
 export default Product;