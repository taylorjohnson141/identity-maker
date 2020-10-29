import './App.css';
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
