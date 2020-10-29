import './App.css';
import Header from '../Header/Header.js';
import IDForm from '../IDForm/IDForm.js';
import IDPage from '../IDPage/IDPage.js';
import IDArea from '../IDArea/IDArea.js';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Header />
      <IDForm />
      <IDArea />
      <Route path='/id-page'>
        <IDPage />
      </Route>
    </main>
  );
}

export default App;
