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
      return <option data-testid="country" value={country.name} key={index} name={country.name} />
    })
  }

  return (

    <form className='id-form' name='identity' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-part'>
        <label htmlFor="first-name1" className="">
        Enter Two First Names
        </label>
        <input
          id="first-name1"
          data-testid="first-name1"
          name="first-name1"
          ref={register({
            required: "Required",
          })}
        />

        <input
          aria-label="first-name2"
          id='first-name2'
          data-testid="first-name2"
          name="first-name2"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="last-name" className="">
        Enter A Last Name
        </label>
        <input
          id='last-name'
          data-testid="last-name"
          name="last-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="company-name" className="">
        Enter A Company Name
        </label>
        <input
          id="company-name"
          data-testid="company"
          name="company-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="occupation-name" className="">
        Enter An Occupation
        </label>
        <input
          id='occupation-name'
          data-testid="occupation"
          name="occupation-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="restaurant-name" className="">
        Enter A Restaurant Name
        </label>
        <input
          id='restaurant-name'
          data-testid="restaurant"
          name="restaurant-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="singular-animal-name" className="">
        Enter A Domestic Animal(singular)
        </label>
        <input
          id='singular-animal-name'
          data-testid="pet-singular"
          name="singular-animal-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="plural-animal-name" className="">
        Enter A Domestic Animal(plural)
        </label>
        <input
          id='plural-animal-name'
          data-testid="pet-plural"
          name="plural-animal-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="number1" className="">
        Enter Two Numbers Between 1 And 10
        </label>
        <input
          id='number1'
          data-testid="number1"
          className='numbers'
          name="numbers1"
          type='number'
          min='1'
          max='10'
          ref={register({
            required: "Required",
          })}
        />
        <input
          aria-label="number2"
          id='number2'
          data-testid="number2"
          className='numbers'
          name="numbers2"
          type='number'
          min='1'
          max='10'
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="sport-name" className="">
        Enter A Sport
        </label>
        <input
          id='sport-name'
          data-testid="sport"
          name="sport-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="game-name" className="">
        Enter A Game
        </label>
        <input
          id='game-name'
          data-testid="game"
          name="game-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="genre1" className="">
        Enter Two Genres
        </label>
        <input
          id='genre1'
          data-testid="genre1"
          name="game-name"
          ref={register({
            required: "Required",
          })}
        />
        <input
          aria-label="genre2"
          id='genre2'
          data-testid="genre2"
          name="genre2"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="color-name" className="">
        Enter A Color
        </label>
        <input
          id='color-name'
          data-testid="color"
          name="color-name"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="zoo-animal" className="">
        Enter An Animal You'd See In A Zoo
        </label>
        <input
          id='zoo-animal'
          data-testid="zoo-animal"
          name="zoo-animal"
          ref={register({
            required: "Required",
          })}
        />
      </div>

      <div className='form-part'>
        <label htmlFor="country" className="country-selection">
        Enter A Name Of A Country
        </label>
        <input
          id='country'
          data-testid="countries"
          name="country"
          list="data"
          ref={register({
          required: "Required",
       })}/>
        <datalist
         data-testid='list-countries'
         id="data"
         name="country"
        >
          {countryList}
        </datalist>
      </div>

      <div className='form-part'>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default IDForm;
