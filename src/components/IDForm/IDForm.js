import './IDForm.css';
import {useEffect} from 'react'
import { useForm } from 'react-hook-form';
import {addID} from '../../actions/index'
import {useDispatch,useSelector} from 'react-redux'

const IDForm = () => {
  useEffect(() => {
    //makeApi call
    //updateState
  });

  const { handleSubmit, register, errors } = useForm();
  let dispatch = useDispatch()
  const onSubmit = values => {
    dispatch(addID(values))
  }
  const countries = useSelector(state => state.countries)


  
  // if(!countries){
  //   return <h1>Loading</h1>
  // }
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
        {/* Will add countries state here */}
      </datalist>

      <button type="submit">Submit</button>
    </form>
  )
}

export default IDForm;

