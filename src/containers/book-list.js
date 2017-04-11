import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {
    renderList (){
        return this.props.books.map((book)=>{
                return(
                       <li
                            key={book.title}
                             className="list-group-item"
                                             onClick = { ()=>  this.props.selectBook(book) }>
                         {book.title}
                        </li> 
                );
        });
    }

render (){
    return (
            <ul className="list-group col-md-4">
                       {this.renderList()} 
            </ul>
        )
    };

}

function mapStateToProps (state){
    //whate ever is returned will  show up as  props inside of booklist
    return {
        books: state.books
        };
}

//anything returend from this function will end up as props 
//on the book list container 
function mapDispatchToProps (dispatch){
    //whenver selectBook is called , result should pass to all reducers 
    return bindActionCreators({selectBook : selectBook}, dispatch);
}

//promote BookList from  a component  to a container - it need to know about 
//dispatch method , selectBook  and make it avelibel to props

export default connect(mapStateToProps ,mapDispatchToProps) (BookList);