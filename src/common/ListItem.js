import React from 'react';




const showHtml = (txt) => {
        return (
            <span dangerouslySetInnerHTML={{__html: `<b>${txt}</b>`}}></span>
        );
    }


const ListItem = (props) => {
    const { post, i } = props;
            return (
                <li key={i}>
                    {post.id} {showHtml(post.title)} as Author {post.author}  
                        <span onClick={() => this.editPost(post.id,post.title,post.author)}>Edit</span>
                    <span onClick={()=> this.deletePost(post.id)}>Delete</span>
                </li>
                );
};

export default ListItem;