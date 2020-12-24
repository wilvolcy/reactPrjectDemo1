import React from 'react'

const Book = ({image,title,author,children})=>{
  
  const clickButton = (e) => {
  console.log("You click on the button");
  console.log("Event is :" +e.target);
}
const moreComplexEvent = (author)=>{
  console.log('The author of this book is :'+author);
};

  return (<section className= 'book' onMouseOver = {()=>{
    console.log("On mouse over event, and print title : "+title);
  }}>
    <img src={image} alt='' />
    <h1 onClick = {()=>{console.log(title)}}>{title}</h1>
    <h4 onClick = {()=>moreComplexEvent(author)}>{author}</h4> 
    {children}
    <button onClick={clickButton}>My Button</button>
  </section>);
}

export default Book;