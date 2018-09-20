import React from 'react';




const showHtml = (txt) => {
        return (
            <span dangerouslySetInnerHTML={{__html: `<b>${txt}</b>`}}></span>
        );
    }


const ListItem = (props) => {
    const {
        post,
        i,
        deletePost,
        editPost
    } = props;
            return (
                <li key={i}>
                    {post.id} {showHtml(post.title)} as Author {post.author}  
                        <span onClick={editPost}>Edit</span>
                    <span onClick={deletePost}>Delete</span>
                </li>
                );
};  

export default ListItem;