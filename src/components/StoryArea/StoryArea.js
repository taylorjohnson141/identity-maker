import './StoryArea.css';

const StoryArea = (props) => {
  let {currentIdentity} = props
  return (
    <article>
      {`Your name is 
      ${currentIdentity['first-name1']} 
      ${currentIdentity['last-name']}. 
      You work for ${currentIdentity['company-name']} as a/an ${currentIdentity['occupation-name']}. 
      You have ${currentIdentity.numbers1} children and your spouse’s name is ${
        currentIdentity['first-name2']}. The two of you met at ${currentIdentity['restaurant-name']}. 
      You have a ${currentIdentity['singular-animal-name']} and two ${currentIdentity['plural-animal-name']}  
      In your free time, you like to coach a youth 
      ${currentIdentity['sport-name']} team and play ${currentIdentity['game-name']} on weekends with your social club. 
      You enjoy ${currentIdentity.genre1} novels and watching ${currentIdentity.genre2} movies. 
      You have ${currentIdentity.numbers2} close friends who often call you by your nickname, 
      the ${currentIdentity['color-name']} ${currentIdentity['zoo-animal']}`}.
    </article>
  );
}

export default StoryArea;
