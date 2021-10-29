import { Component } from 'react';

// function Card() {
//     const cardTitle = "Song Info";
//     const author = "Andrew Bird";
//     const songTitle = "Danse Caribe";
//     const description = "A wonderful song off of the album 'Break it yourself'";
  
//     return (
//       <div className="card">
//         <h1 className="card-title">{cardTitle}</h1>
//         <h2 className="author-title">{author} - {songTitle}</h2>
//         <p>{description}</p>
//       </div>
//     )
//   }
  
class Card extends Component{
    constructor(){
        super();
        this.cardTitle = "Song Info";
        this.author = "Andrew Bird";
        this.songTitle = "Danse Caribe";
        this.description = "A wonderful song off of the album 'Break it yourself'";
    }

    render(){
        return(
        <div className="card">
            <h1 className="card-title">{this.cardTitle}</h1>
            <h2 className="author-title">{this.author} - {this.songTitle}</h2>
            <p>{this.description}</p>
        </div>
        )
    }
}

export default Card;