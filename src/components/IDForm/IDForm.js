import './IDForm.css';
import { useForm } from "react-hook-form";

const IDForm = () => {
  //will create country state here
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    //Will add to state here
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="first-name"
        ref={register({
          required: "Required",
        })}
      />

      <input
        name="last-name"
        ref={register({
          required: "Required",
        })}
      />
      <input name="country "type="text" list="data" />
      <datalist 
       ref={register({
        required: "Required",
      })}
      >
        {/* Will add state here */}
      </datalist>

      <button type="submit">Submit</button>
    </form>
  )
}

export default IDForm;

//<option value='Bhutan'>
