import './MissionArea.css';

const MissionArea = (props) => {
  let {currentCountry} = props
  let takeOver;
  let languages;
  if(!currentCountry.regionalBlocs[0]){
    takeOver = currentCountry.region
  }else{
    takeOver = `the ${currentCountry.regionalBlocs[0].name}`
  }
  if(!currentCountry.languages[1]){
    languages = currentCountry.languages[0].name
  } else{
    languages = `${currentCountry.languages[0].name} and ${currentCountry.languages[1].name}`
  }

  return (
    <article>
      <h1>Operation:{currentCountry.nativeName}</h1>
      {`You will travel to ${currentCountry.subregion} 
      and imbed yourself in ${currentCountry.name},
       a nation of ${currentCountry.population} people. 
       Your mission’s target location is ${currentCountry.capital}. 
       The currency you will require is the ${currentCountry.currencies[0].name} and an amount of ${currentCountry.currencies[0].symbol}
       10,000 will be transferred to your account. You will need to learn ${languages}
       flawlessly in order to blend in with the locals. You will be tasked with infiltrating high level diplomatic offices and 
       reporting back as much info on there dealings with other nations of ${takeOver}. If your cover is blown… good luck.`}
       <img src={currentCountry.flag} alt = 'country flag'/>
    </article>
    
  );
}

export default MissionArea;
