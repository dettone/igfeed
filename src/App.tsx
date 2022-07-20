import { Header } from "./components/Header";
import {SideBar} from './components/Sidebar';
import "./global.css";
import styles from './App.module.css';
import { Post } from "./components/Post";
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <SideBar />
        <main>
        <Post />
        <Post />
        </main>
      </div>

    </div>
  );
}

export default App;
