import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Student from './components/student'
import Subtitle from './components/subtitle';
import List from './components/list';
import studentsListData from './data/student-list';
import ListArticles from './components/list-articles';
import Button from './components/button';

function App() {
  return (
    <div>
      {/* <Title title = 'Students Codecool'/>
      <Subtitle studentsLength ={studentsListData.length}/>
      <List/>
      <Title title = 'Articles'/>
      <ListArticles /> */}
      <Title  title='CodeCool Students'/>
      <Subtitle studentsLength = {studentsListData.length} />
      <List />
      <Title title='Blog Articles' />
      <ListArticles />
    </div>
  );
}

export default App;
