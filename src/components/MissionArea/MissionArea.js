import './MissionArea.css';

const MissionArea = (props) => {
  let {currentCountry} = props
  console.log(currentCountry)
  return (
    <article>
      <img src={currentCountry.flag} alt = 'country flag'/>
      <h1>{currentCountry.nativeName}</h1>
      {`You will travel to ${currentCountry.subregion} 
      and imbed yourself in ${currentCountry.name},
       a nation of ${currentCountry.population} people. 
       Your mission’s target location is ${currentCountry.capital}. 
       The currency you will require is the ${currentCountry.currencies[0].name} and an amount of ${currentCountry.currencies[0].symbol}
       10,000 will be transferred to your account. You will need to learn ${currentCountry.languages[0].name}
       flawlessly in order to blend in with the locals. You will be tasked with infiltrating high level diplomatic offices and 
       reporting back as much info on there dealings with other nations of the ${currentCountry.regionalBlocs[0].name} || ${currentCountry.region}. 
       If your cover is blown… good luck.`}
    </article>
  );
}

export default MissionArea;
