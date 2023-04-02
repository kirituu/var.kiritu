
function saturdayFun(activity = 'play-football') {
  return `This Saturday, I want to ${activity}!`;
}


function mondayWork(task = 'go to school') {
  return `This Monday, I need to ${task}.`;
}


function wrapAdjective(flair = '*') {
  return function(adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`;
  }
}

const encouragingPromptFunction = wrapAdjective("!!!");
//console.log(encouragingPromptFunction("awesome")); // "You are !!!awesome!!!"
