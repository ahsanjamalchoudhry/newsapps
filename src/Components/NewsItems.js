import React from 'react';

const NewsItems =(props)=> {
 
    let { title, content, author, urlToImage, url } = props; // Use this.props instead of destructuring from props argument
    return (
      <>
      <div className="card" style={{width:'288px'}}>
        <img className="card-img-top" src={urlToImage} alt="Card image cap" width={305} height={150}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}...</p>
          <p className="card-text" style={{color:'red'}}>{author}</p>
          <a href={url} className="btn btn-primary">Read More</a>
          </div>
          </div>
      </>
    );
  }
export default NewsItems;
