import './App.css';
import Header from '../Header/Header.js';
import IDForm from '../IDForm/IDForm.js';
import IDPage from '../IDPage/IDPage.js';
import IDArea from '../IDArea/IDArea.js';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
    <Route>
      <Route exact path='/'>
        <Header />
        <IDForm />
        <IDArea />
      </Route>
      <Route path ='/:id' render = {({match}) =>{
        const {id} = match.params
       return <IDPage idNumber={id}/>
      }}/>
    </Route>
    </main>
  );
}

export default App;
