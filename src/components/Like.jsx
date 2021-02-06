import React, { Component } from 'react';

class Like extends Component {
    render() { 
        return ( <div>
           
            <a><i className={this.props.liked ? "fa fa-heart" : "fa fa-heart-o"} ></i></a>
        </div> );
    }

}
 
export default Like;