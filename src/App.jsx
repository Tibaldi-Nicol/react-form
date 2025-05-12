import { use, useState } from "react";

{/*questi varieranno 
    lo stato è la sitazuone in cui si trova un componente in un determinato instante temporale, situazione che è determinata dalle sue variabili dinamiche*/ }
const initialposts=[


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
    const[posts, setPosts]=useState(initialposts);

    const onHandleSubmit=(e)=>{

        e.preventDefault(); //obbligatorio!!!

        //creo oggetto nuovo
        const obj ={
            id: posts[posts.length-1].id+1,
            title: newPost
        }

        setPosts([...posts,obj])

    }

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
                                    <div className="d-flex justify-content-between">
                                        <div>

                                        {post.title}

                                        </div>

                                        <div><button className="btn btn-danger"><i className="fas fa-trash"></i></button></div>


                                    </div>
                                   
                                </li>
                            )
                        })}
                    </ul>
                    <form onSubmit={onHandleSubmit}>

                        <input

                        /**modificare la variabile newpost */
                         type="text" placeholder="Nuovo Post" 
                         className="form-control" 
                         value={newPost}
                         /**modificare la variabile newpost e - evento devo recuperare il target che sara l'evento input on change bidirezionalita nella modifica della variabile e interfaccia*/
                         onChange={(e)=> {setNewState(e.target.value)}}
               

                         />

                         {/**quando clicco su inserisci deve aggiungere loggetto nell'elenco */}
                         <button className="btn btn-primary">inserisci</button>
                    </form>
                </div>
            </div>
        </div>
    );
    
};

export default App;
