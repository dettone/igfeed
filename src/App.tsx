import { Header } from "./components/Header";
import {SideBar} from './components/Sidebar';
import "./global.css";
import styles from './App.module.css';
import { Post } from "./components/Post";



type Post =  {
    id: number;
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: {

        type: string;
        content: string;
    }[];
    publishedAt: Date;
}[]


const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketsear"
    },
    content: [
     {type:'paragraph' , content: 'asdfasdfsdad asfsafdsafsadf .'} ,
     {type:'paragraph' , content: 'dfghd fghfgdhfdgh dfghdfhg  sdf.'} ,
     {type:'paragraph' , content: 'lorem asdfasdf .'} ,
     {type:'paragraph' , content: 'lorem asdf sadfasdfsaafdsa.'} ,
     {type:'link' , content: 'jane.design/doctorcare'} ,
    ],
    publishedAt : new Date('2022-05-03 20:00:00')
  },
   {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "João Vitor",
      role: "CTO @ Rocketsear"
    },
    content: [
     {type:'paragraph' , content: 'dsafdasfsadfsafsa asdfasfsadf asdf.'} ,
     {type:'paragraph' , content: 'sdfgsfg dsfgsdg sdgf.'} ,
     {type:'paragraph' , content: 'zxcvzxcvxzvxc zxcvxzvxczvxzcv.'} ,
     {type:'paragraph' , content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'} ,
     {type:'link' , content: 'jane.design/doctorcare'} ,
    ],
    publishedAt : new Date('2022-05-03 20:00:00')
  }
  
] as Post;


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <SideBar />
        <main>
         { post.map(post => {
          return (
            <Post  
            key={post.id}
            id= { post.id }
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          );
         } )}
        
        </main>
      </div>

    </div>
  );
}

export default App;
