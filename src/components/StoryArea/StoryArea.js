import './StoryArea.css';

const StoryArea = (props) => {
  let {currentCountry} = props
  return (
    <article>
      Your name is 
      {first name 1} 
      {last name}. 
      You live in 
      {country capital}, 
      {country}. 
      You work for {company name} as a/an {occupation}. 
      You have {number} children and your spouse’s name is {
      first name 2}. The two of you met at {restaurant}. 
      You have a {pet 1} and two {pet 2 (plural)}  
      In your free time, you like to coach a youth 
      {sport} team and play {game} on weekends with your social club. 
      You enjoy {genre 1} novels and watching {genre 2} movies. 
      You have {number} close friends who often call you by your nickname, 
      the {color} {zoo animal}.

      <h2>Your Backstory for Identity: xxx</h2>
      <p>~a bunch of stuff~</p>
    </article>
  );
}

export default StoryArea;
