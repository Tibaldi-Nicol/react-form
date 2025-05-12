import { useState } from "react";

{/*questi varieranno 
    lo stato è la sitazuone in cui si trova un componente in un determinato instante temporale, situazione che è determinata dalle sue variabili dinamiche*/ }
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
    {/*variabile che andra modificata con la form */}
    const[newPost, setNewState]=useState("");

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
                    <form action="">

                        <input

                        /**modificare la variabile newpost */
                         type="text" placeholder="Nuovo Post" 
                         className="form-control" 
                         /**modificare la variabile newpost e - evento devo recuperare il target che sara l'evento input*/
                         onChange={(e)=> {setNewState(e.target.value)}}
               

                         />
                         <button className="btn btn-primary">inserisci</button>
                    </form>
                </div>
            </div>
        </div>
    );
    
};

export default App;
