import './App.css';

function App() {
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
