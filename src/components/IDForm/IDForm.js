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
      <label htmlFor="" className="">
      Enter Three First Names
      </label>
      <input
        name="first-name1"
        ref={register({
          required: "Required",
        })}
      />

      <input
        name="first-name2"
        ref={register({
          required: "Required",
        })}
      />

      <input
        name="first-name3"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Last Name
      </label>
      <input
        name="last-name"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Company Name
      </label>
      <input
        name="company-name"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter An Occupation
      </label>
      <input
        name="occupation-name"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Restaurant Name
      </label>
      <input
        name="restaurant-name"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Domestic Animal(singular)
      </label>
      <input
        name="singular-animal-name"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Domestic Animal(plural)
      </label>
      <input
        name="plural-animal-name"
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
