import './IDForm.css';


const IDForm = () => {
  return (
    <form>
      <label for='first-name'>first name</label>
      <input name='first-name' placeholder='first name'/>
      <label for='first-name'>last name</label>
      <input name='last-name' placeholder='last name'/>
      <label for='country'>target country</label>
      <input list='countries' name='country' id='countries'/>
      <datalist id='countries'>
        
      </datalist>
      <input type='submit'/>
    </form>
  );
}

export default IDForm;

//<option value='Bhutan'>
