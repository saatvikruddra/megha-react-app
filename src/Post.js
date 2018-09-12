import React, { Component } from 'react';

class Post extends Component {
    constructor(){
        super();
        
        this.state  = {
            posts: [],
            title:'',
            author:''
        };
        this.fetchPosts();
    }

    fetchPosts = ()=>{
        fetch("http://localhost:3000/posts")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            this.setState({
                posts: res
            });
        })
        .catch(err=>{
            console.log("Error while fetching posts " + err);
        })
    }

  

    deletePost = (id) =>{
        fetch("http://localhost:3000/posts/"+ id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            // this.fetchPosts();
            if(res.id === undefined){
                let posts = this.state.posts.slice();
                let ind = posts.findIndex((v)=>{
                    return v.id === id
                });
                posts.splice(ind,1);
                this.setState({
                    posts: posts
                });
            }
        })
        .catch(err => {
            console.log("Error while deleting post "+id + " " + err);
        });

    }

    changeTitle = (e)=>{
        this.setState({
            title: e.target.value
        });
    }
    changeAuthor = (e) => {
        this.setState({
            author: e.target.value
        });
    }

    addPost = ()=>{
        let post = {
            title: this.state.title,
            author: this.state.author
        };
        fetch("http://localhost:3000/posts",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => {
            return res.json();
        })
        .then(res=>{
            if(res.id !== undefined){
                // this.fetchPosts();
                let posts = this.state.posts.slice();
                posts.push(res);
                this.setState({
                    posts: posts
                });
                this.clearInputs();
            }
        })
        .catch(err=> {
            console.log("Error while inserting post "+ err);
        })
    }
    clearInputs = ()=>{
        this.setState({
            title:'',
            author: ''
        });
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.title} placeholder="Enter Title" onChange={(event)=>{this.changeTitle(event)}}/> <br/>
                <input type="text" value={this.state.author} placeholder="Enter Author" onChange={(event)=>{this.changeAuthor(event)}}/> <br/>
                <button onClick={this.addPost}> Add Post</button>
                <h1>Posts</h1>
                <ul>
              
                     { this.state.posts.map((p,i)=>{
                        return (
                            <li key={i}>
                                {p.title} as Author {p.author}  
                                <span onClick={()=> this.deletePost(p.id)}>Delete</span>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Post;