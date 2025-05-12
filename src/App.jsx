import { useState } from "react";


const posts=[


    {

        id:1,
        title:"post-1"

    },

    {

        id:2,
        title:"post-2"

    },

    {

        id:3,
        title:"post-3"

    },

    {

        id:4,
        title:"post-4"

    },

    {

        id:5,
        title:"post-5"

    }





];

function App(){
    return (
        <div className="container">
            <div className="row gy-4">
                <div className="col-12">
                    <h1>React Form Blog</h1>
                </div>
                <div className="col-12">
                    {/* Visualizzo Lista Articoli */}
                    <ul className="list-group">
                        {posts.map((post)=>{
                            return(
                                <li className="list-group-item" key={post.id}>
                                    {post.title}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
    
};

export default App;
