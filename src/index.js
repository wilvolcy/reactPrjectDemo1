import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
// function Greeting(){
//   return <h4>This is  my first test </h4>;
// }


// const Greeting = () =>{
//   return React.createElement('h1',{},'Bonjour le monde')
// }


// function Greeting (){
//   return <div>
//     <h1>
//       Test for 2 element there is a child element
//     </h1>
//   </div>;
// }

// const Greeting = () =>{
//   return React.createElement('div',{},React.createElement('h2',{},'Seconde Methode for create element'))
// }
// ReactDom.render(<Greeting />,document.getElementById('root')
// ); 


//we always need to return a  single element 
//use camelCase for html attribute 
// div / section / article or Fragment 
// Use className instead of class 
// close every element 
// formating 
//====================================================
//================ Nested Component ==================


// function Greeting (){
//   return (<div>
//     <h1> Name : Volcy </h1>
//     <p>This is the message </p>
//   </div>   
//   );
// }
//Or 
// const Name = ()=>{ return <h2>name2 : Volcy</h2>}
// const Name = () => <h2> name3 : Volcy </h2>
// function Message () { return <p>this is the message !!</p>}
// function Greeting (){
//   return (<div>
//       <Name />
//       <Message />
//   </div>);
// }
// ReactDom.render(<Greeting />,document.getElementById('root')
// ); 
//===========================================================================
//================ Book list amazon exo  multi componennt ===================

// function BookList () {
//   return (<section className= 'bookList'>
//     This is a book list 
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>

//   </section>);
// }
// const Book = () =>{
//   return (<article className='book'>
//     <Image/>
//     <Title/>
//     <Author/>
//   </article>);
// };
// const Image = () => {return <img src='https://m.media-amazon.com/images/I/817T4J3dzhL._AC_UY436_FMwebp_QL65_.jpg' alt=''/>}
// function Title () {
//   return (
//     <h1>If Animals Kissed Good Night</h1>
//   );
// }
// const Author = () =>{return <h1>by Ann Whitford Paul </h1>};
// ReactDom.render(<BookList/>,document.getElementById('root'))


//============================================================================
//================ Book list amazon exo   clean up code  with variable ======================
// Default name for variable is instance variable is props
// kote ns rele component lan nap pase valeur props la epi ns pral relel nan 
// kote objet a defini an nap fe apel avel poun ka use li 
// <Book title = 'jean'/> ---> nan fonksyon an nap relel --> proprs.jean
// const image = 'https://m.media-amazon.com/images/I/81KAMv9wetL._AC_UY436_FMwebp_QL65_.jpg'
// const title ='If Animals Kissed Good Night'
// const author ='by Ann Whitford Paul'
// function BookList () {
//   return (<section className= 'bookList'>
//     <Book />
//   </section>);
// }
// const Book = (props) =>{
//   return (<article className='book'>
//     <img src={image} alt='' />
//     <h1>{title}</h1>
//     <h1>{author}</h1> 
//   </article>
//   );
// };
// ReactDom.render(<BookList/>,document.getElementById('root'))

//============================================================================
//================ Book list amazon exo   using Object  ======================

// const book1 = {
//   image : 'https://m.media-amazon.com/images/I/81KAMv9wetL._AC_UY436_FMwebp_QL65_.jpg',
//   title : 'If Animals Kissed Good Night',
//   author :'by Ann Whitford Paul'
// }
// const book2 = {
//   image : 'https://m.media-amazon.com/images/I/81YIHfmdcfL._AC_UY436_FMwebp_QL65_.jpg',
//   title : '365 Bedtime Stories and Rhymes',
//   author :'Cottage Door Press '
// }


// function BookList () {
//   return (<section className= 'bookList'>
//     <Book image={book1.image} title={book1.title} author={book1.author} />
//     {/* mw ka ajoute on children pou 2em liv la 
//     childre se tout sa kap trouve yo nan mitan ouvertur ak fermetur book la  */}

//       <Book image={book2.image} title={book2.title} author={book2.author} >
//           <p>
//             Lorem 20 line jlmd iofmds jnjon ljdfaj ljdfjaljldf ljflaj 
//           </p>
//       </Book>

//   </section>);
// }
// const Book = (props) =>{
//   return (<article className='book'>
//     <img src={props.image} alt='' />
//     <h1>{props.title}</h1>
//     <h1>{props.author}</h1> 
//   </article>
//   );
// };

//Other way to acces to the prop values
// const Book = (props)=>{
//   const {image,title,author} = props;
//   return (<section>
//     <img src={image} alt='' />
//     <h1>{title}</h1>
//     <h1>{author}</h1> 
//   </section>);
// }

// Or i can grab the value directly from the object 
// const Book = ({image,title,author})=>{
//   return (<section>
//     <img src={image} alt='' />
//     <h1>{title}</h1>
//     <h1>{author}</h1> 
//   </section>);
// }

// to access to the children i have to mention the props children i can not put what ever i want 
// it has to be children
// const Book = ({image,title,author,children})=>{
//   return (<section>
//     <img src={image} alt='' />
//     <h1>{title}</h1>
//     <h1>{author}</h1> 
//     {children}
//   </section>);
// }

// Or i can still use Props to get access to the children 
// Or i can remove the props and put all the value in a variable 
//  =====>>> const {image,title,author,children} = props;

// const Book = (props)=>{
//   return (<section className= 'book'>
//     <img src={props.image} alt='' />
//     <h1>{props.title}</h1>
//     <h4>{props.author}</h4> 
//     {props.children}
//   </section>);
// }
// ReactDom.render(<BookList/>,document.getElementById('root'))


//==========================================================================================
//=================================   Manipulate array String ==============================

// it is possiblem to render the string like this because it is not an array of object
// const names = ['Jean','Wilbert','Volcy','Willsheldon','Marlyne']
// // console.log(names)
// const newNames = names.map((name) => {
//   return <h4>{name}</h4>
// })
// console.log(newNames)

//  const TestComponent = (props) =>{
//    return (<div>
//         {props.name}
//    </div>);
//  }
// ReactDom.render(<TestComponent name={newNames} />,document.getElementById('root'))


//============================================================================
//================ Book list amazon exo   using Object  and put them in arry  ======================

// const books = [
//   {
//   id:1,  
//   image : 'https://m.media-amazon.com/images/I/81KAMv9wetL._AC_UY436_FMwebp_QL65_.jpg',
//   title : 'If Animals Kissed Good Night',
//   author :'by Ann Whitford Paul'
// },
// { 
//   id:2,
//   image : 'https://m.media-amazon.com/images/I/81YIHfmdcfL._AC_UY436_FMwebp_QL65_.jpg',
//   title : '365 Bedtime Stories and Rhymes',
//   author :'Cottage Door Press '
// },
// {
//   id:3,
//   image : 'https://m.media-amazon.com/images/I/61kYZrlbbcL._AC_UL640_FMwebp_QL65_.jpg',
//   title : 'ALMA, THE UNICORN: A Children\'s Book About The Power of Diversity In Sports',
//   author :'Mike Alpers and Angela Sun'
// }
// ]

// function BookList () {
//   return (<section className= 'bookList'>
//    {/* I need to iterate over the book list and for each book return a component book 
//    and give it a parameter of book that i get from the value that the map is returning 
//    leum retounen Book component lan mw bal on paramet book mw supoze al chanje props la kotem te deklare 
//    component book la poum ka fel pran on object paske se on object map pase nan paramet la */}
//     {books.map((book)=>{
//       // Each time we deal with lisst in react we need to have a speciap key that represent 
//       // an unique id for the list, we need to add the id to the list 
//       // and pass it as the key value for the book. it has nothing to do with the Book component
//       return <Book key={book.id} book={book}></Book>
//     })}

//     {/*=========>>  OR */}
//      {/* {books.map((book, index)=>{
//        // mw te ka pran index ki nan map la tou 
//        // men li tjr ap chanje an fonksyon de tay array la, donk sim bezwen 
//        // on valeur ki statik pitom kreyel 
//         return <Book key={index} book={book}></Book>
//     })} */}

//   </section>);
// }

// // const Book = (props)=>{
// //   return (<section className= 'book'>
// //     <img src={props.book.image} alt='' />
// //     <h1>{props.book.title}</h1>
// //     <h4>{props.book.author}</h4> 
// //     {props.book.children}
// //   </section>);
// // }

// // =========== >> or <<===========================
// const Book = (props)=>{
//  const {image,title,author,children} = props.book;
//   return (<section className= 'book'>
//     <img src={image} alt='' />
//     <h1>{title}</h1>
//     <h4>{author}</h4> 
//     {children}
//   </section>);
// }

// ReactDom.render(<BookList/>,document.getElementById('root'))




//======================================================================================================================
//================ Book list amazon exo   using Object  and put them in arry and spread operator  ======================
// const books = [
//   {
//   id:1,  
//   image : 'https://m.media-amazon.com/images/I/81KAMv9wetL._AC_UY436_FMwebp_QL65_.jpg',
//   title : 'If Animals Kissed Good Night',
//   author :'by Ann Whitford Paul'
// },
// { 
//   id:2,
//   image : 'https://m.media-amazon.com/images/I/81YIHfmdcfL._AC_UY436_FMwebp_QL65_.jpg',
//   title : '365 Bedtime Stories and Rhymes',
//   author :'Cottage Door Press '
// },
// {
//   id:3,
//   image : 'https://m.media-amazon.com/images/I/61kYZrlbbcL._AC_UL640_FMwebp_QL65_.jpg',
//   title : 'ALMA, THE UNICORN: A Children\'s Book About The Power of Diversity In Sports',
//   author :'Mike Alpers and Angela Sun'
// }
// ]

// function BookList () {
//   return (<section className= 'bookList'>
//  {books.map((book)=>{
//   //  if i use spread operator i dont need to use the book parameter to store a book value 
//   //  anymore and i dont need to get the book parameter either in the Book component.
//       return <Book key={book.id} {...book}></Book>
//     })}
//   </section>);
// }

// const Book = (props)=>{
//  const {image,title,author,children} = props;
//   return (<section className= 'book'>
//     <img src={image} alt='' />
//     <h1>{title}</h1>
//     <h4>{author}</h4> 
//     {children}
//   </section>);
// }

// ==== >>>> Or <<<<=======
// const Book = ({image,title,author,children})=>{
//   return (<section className= 'book'>
//     <img src={image} alt='' />
//     <h1>{title}</h1>
//     <h4>{author}</h4> 
//     {children}
//   </section>);
// }

// ReactDom.render(<BookList/>,document.getElementById('root'))


//======================================================================================================================
//================ Event Handle, OnClick, onMouseOver ======================



const books = [
  {
  id:1,  
  image : 'https://m.media-amazon.com/images/I/81KAMv9wetL._AC_UY436_FMwebp_QL65_.jpg',
  title : 'If Animals Kissed Good Night',
  author :'by Ann Whitford Paul'
},
{ 
  id:2,
  image : 'https://m.media-amazon.com/images/I/81YIHfmdcfL._AC_UY436_FMwebp_QL65_.jpg',
  title : '365 Bedtime Stories and Rhymes',
  author :'Cottage Door Press '
},
{
  id:3,
  image : 'https://m.media-amazon.com/images/I/61kYZrlbbcL._AC_UL640_FMwebp_QL65_.jpg',
  title : 'ALMA, THE UNICORN: A Children\'s Book About The Power of Diversity In Sports',
  author :'Mike Alpers and Angela Sun'
}
]

function BookList () {
  return (<section className= 'bookList'>
 {books.map((book)=>{
      return <Book key={book.id} {...book}></Book>
    })}
  </section>);
}

const Book = ({image,title,author,children})=>{
  return (<section className= 'book'>
    <img src={image} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4> 
    {children}
  </section>);
}


ReactDom.render(<BookList/>,document.getElementById('root'))