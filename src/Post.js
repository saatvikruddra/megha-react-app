import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import ListItem from "./common/ListItem";
import cookie from 'react-cookies';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Post extends Component {
    
    notify = (msg) => toast(msg);
    
    constructor(props){
        super(props);
        
        this.state  = {
            posts: [],
            title:'',
            author:'',
            id: 0,
            baseUrl: 'http://localhost:3000'
        };
        this.fetchPosts();
        if(cookie.load('userinfo') === undefined)
        {
            this.props.history.push('/person');
            // window.location.href = '/';
        }
    }

    fetchPosts = ()=>{
        fetch(`${this.state.baseUrl}/posts`)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            this.setState({
                posts: res
            });
            this.notify("Posts Fetched successfully");
        })
        .catch(err=>{
            console.log("Error while fetching posts " + err);
        })
    }

  

    deletePost = (id) =>{
        fetch(`${this.state.baseUrl}/posts/${id}`,{
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
                this.notify(`Post with id ${id} deleted`);
            }
        })
        .catch(err => {
            console.log("Error while deleting post "+ id + " " + err);
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
        fetch(`${this.state.baseUrl}/posts`,{
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
            author: '',
            id:0
        });
    }
    editPost = (id,title,author) => {
        this.setState({
            id: id,
            title: title,
            author: author
        });
    }

    showButton = () => {
        if(this.state.id !== 0){
            return (
                <button onClick={this.updatePost}> Update Post</button>
            );
        }else{
            return (
                <button onClick={this.addPost}> Add Post</button>
            );
        }
    }

    updatePost = () =>{
        let post = {
            title: this.state.title,
            author: this.state.author
        };
        fetch(""+this.state.id, {
            method: 'PUT',
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
                let ind = posts.findIndex(
                    (v) => {
                        return v.id === this.state.id
                    }
                );
                posts[ind].title = res.title;
                posts[ind].author = res.author;
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



    render(){
        return (
            <div>
                <ToastContainer />
                <input type="text" value={this.state.title} placeholder="Enter Title" onChange={(event)=>{this.changeTitle(event)}}/> <br/>
                <input type="text" value={this.state.author} placeholder="Enter Author" onChange={(event)=>{this.changeAuthor(event)}}/> <br/>
                {this.showButton()}
                <h1>Posts</h1>
                <ul>
                    {this.state.posts.map((p,i)=>{
                        return (
                            <ListItem 
                                key={i} 
                                deletePost={() =>this.deletePost(p.id)} 
                                editPost={() => this.editPost(p.id,p.title,p.author)}
                                post={p} 
                                index={i}
                            />
                        );
                    })}
                </ul>
              <Link to="/">Go to mainpage.</Link>
            </div>
        );
    }
}

export default Post;