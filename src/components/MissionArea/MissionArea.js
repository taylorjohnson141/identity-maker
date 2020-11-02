import './MissionArea.css';

const MissionArea = (props) => {
  let {currentCountry} = props
  return (
    <article>
      {`You will travel to {country subregion} 
      and imbed yourself in {country},
       a nation of {country population} people. 
       Your mission’s target location is {country capital}. 
       The currency you will require is {currency name} and an amount of {country currency symbol}
       10,000 will be transferred to your account. You will need to learn {country language name} 
       flawlessly in order to blend in with the locals. You will be tasked with infiltrating high level diplomatic offices and 
       reporting back as much info on there dealings with other nations of the {country regionalBlocs[1], or default: region}. 
       If your cover is blown… good luck.`}
    </article>
  );
}

export default MissionArea;
