import './IDForm.css';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { addID } from '../../actions/index'
import {useDispatch,useSelector} from 'react-redux'
import { fetchCountries } from '../../thunks/fetchCountries'

const IDForm = () => {
  const countries = useSelector(state => state.countries)
  let dispatch = useDispatch()
  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all'
    dispatch(fetchCountries(url))
  }, [dispatch]);

  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = values => {
    dispatch(addID(values))
    reset()
  }
  let countryList

  if(!countries || countries.length === 0){
    return <h1>Loading</h1>
  } else {
    countryList = countries.map((country, index) => {
      return <option value={country.name} key={index} />
    })
  }

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

      <label htmlFor="" className="">
      Enter Two Numbers Between 1 And 10
      </label>
      <input
        name="numbers1"
        type='number'
        min='1'
        max='10'
        ref={register({
          required: "Required",
        })}
      />
      <input
        name="numbers2"
        type='number'
        min='1'
        max='10'
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Sport
      </label>
      <input
        name="sport-name"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Game
      </label>
      <input
        name="game-name"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter Two Genres
      </label>
      <input
        name="genre1"
        ref={register({
          required: "Required",
        })}
      />
      <input
        name="genre2"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Color
      </label>
      <input
        name="color-name"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter An Animal You'd See In A Zoo
      </label>
      <input
        name="zoo-animal"
        ref={register({
          required: "Required",
        })}
      />

      <label htmlFor="" className="">
      Enter A Name Of A Country
      </label>
      <input name="country" list="data" />
      <datalist
       id="data"
       ref={register({
        required: "Required",
      })}
      >
        {countryList}
      </datalist>

      <button type="submit">Submit</button>
    </form>
  )
}

export default IDForm;
