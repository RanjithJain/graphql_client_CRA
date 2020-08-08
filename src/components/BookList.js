import React, {Component}from 'react';


import {graphql} from 'react-apollo';
import {getBooksQuery} from '../query/query.js'

import BookDetails from './BookDetails';

class BookList extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
 displayBook(){
     var data=this.props.data;
     if(data.loading){
        return( <div>Loading Data...</div>)
      }else{
          return data.books.map(book=>{
                return(
                    <li key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }>{ book.name }</li>
                );
          })
          
      }
 }
  render(){
    
    return (
        
      <div id="main">
      <ul id="book_list">
        {this.displayBook()}
        </ul>
        <BookDetails bookId={ this.state.selected } />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
