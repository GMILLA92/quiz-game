const video1 = '<video id="background-video1" autoplay loop muted > <source src="img/waves.mp4" type="video/mp4"> </video>'
const video2= '<video id="background-video2" autoplay loop muted;> <source src="img/art.mp4" type="video/mp4"> </video>'
const video3= '<video id="background-video2" autoplay loop muted;> <source src="img/science.mp4" type="video/mp4"> </video>'
const video4= '<video id="background-video3" autoplay loop muted;> <source src="img/music.mp4" type="video/mp4"> </video>'
const video5= '<video id="background-video2" autoplay loop muted;> <source src="img/animal.mp4" type="video/mp4"> </video>'
const video6= '<video id="background-video3" autoplay loop muted;> <source src="img/map.mp4" type="video/mp4"> </video>'
const video7= '<video id="background-video2" autoplay loop muted;> <source src="img/history.mp4" type="video/mp4"> </video>'
const video8= '<video id="background-video2" autoplay loop muted;> <source src="img/food.mp4" type="video/mp4"> </video>'
const video9= '<video id="background-video3" autoplay loop muted;> <source src="img/climate-change.mp4" type="video/mp4"> </video>'
const video10= '<video id="background-video2" autoplay loop muted;> <source src="img/cinema.mp4" type="video/mp4"> </video>'
const video11= '<video id="background-video2" autoplay loop muted;> <source src="img/book.mp4" type="video/mp4"> </video>'
const video12 = '<video id="background-video3" autoplay loop muted;> <source src="img/end.mp4" type="video/mp4"> </video>'

const question1 = {
  category: "art",
  question: "Who painted The Third of May 1808?",
  background: video2,
  options: [
    ["Diego Velázquez", false],
    ["Francisco de Goya", true],
    ["Pablo Picasso", false],
    ["Édouard Manet", false]
  ]
}
const question2 = {
  category: "art",
  question: "Where is Picasso's Guernica hanging?",
  background: video2,
  options: [
    ["Reina Sofía in Madrid", true],
    ["Fine arts museum in Bilbao", false],
    ["Picasso museum in Barcelona", false],
    ["Prado musseum in Madrid", false]
  ]
}

const question3 = {
  category: "science",
  question: "Roughly how long does it take for the sun's light to reach Earth?",
  background: video3,
  options: [
    ["8 hours", false],
    ["8 days", false],
    ["8 minutes", true],
    ["8 seconds", false]
  ]
}

const question4 = {
  category: "science",
  question: "Which part of the brain controls rational and logical decision-making?",
  background: video3,
  options: [
    ["Prefrontal cortex", true],
    ["Amygdala", false],
    ["Cingulate cortex", false],
    ["Hypothalamus", false]
  ]
}
 
const question5= {
  category: "music",
  question: "Which year in music was known as the Summer of Love?",
  background: video4,
  options: [
    ["2001", false],
    ["1967", true],
    ["1988", false],
    ["1990", false]
  ]
}

 const question6= {
  category: "music",
  question: "Who composed The magic flute?",
  background: video4,
  options: [
    ["Ludwig van Beethoven", false],
    ["Ígor Stravinsky", false],
    ["Sebastian Bach", false],
    ["Amadeus Mozart", true]
  ]
}

const question7= {
  category: "animals",
  question: "Which of the following is not a type of penguin?",
  background: video5,
  options: [
    ["Waterland", true],
    ["Emperor", false],
    ["Chinstrap", false],
    ["Macaroni", false]
  ]
}

const question8= {
  category: "animals",
  question: "What animal is the largest mammal in the world?",
  background: video5,
  options: [
    ["African elephant", false],
    ["Killer wale", false],
    ["White Rhinoceros", false],
    ["Blue wale", true]
  ]
}

const question9= {
  category: "geography",
  question: "What razor-thin country accounts for more than half of the western coastline of South America?",
  background: video6,
  options: [
    ["Perú", false],
    ["Ecuador", false],
    ["Chile", true],
    ["Bolivia", false]
  ]
}

const question10= {
  category: "geography",
  question: "Which African nation has the most pyramids?",
  background: video6,
  options: [
    ["Libya", false],
    ["Egypt", false],
    ["Algeria", false],
    ["Sudan", true]
  ]
}

 const question11= {
  category: "history",
  question: "What does the term 'Samurai' literally mean?",
  background: video7,
  options: [
    ["To serve", true],
    ["To fight", false],
    ["To cry", false],
    ["To live", false]
  ]
}

const question12= {
  category: "history",
  question: "What was the first country to legalize gay marriage?",
  background: video7,
  options: [
    ["Sweden", false],
    ["Canada", false],
    ["Netherlands", true],
    ["Ireland", false]
  ]
}

const question13= {
  category: "food",
  question: "What is roti canai?",
  background: video8,
  options: [
    ["A type of curry", false],
    ["A type of bread", true],
    ["A drink", false],
    ["A type of salad", false]
  ]
}

const question14= {
  category: "food",
  question: "Which type of pasta's name means “little worms”?",
  background: video8,
  options: [
    ["Rigatoni", false],
    ["Cannelloni", false],
    ["Vermicelli", true],
    ["Maccheroni", false]
  ]
}

const question15= {
  category: "climate",
  question: "Which of the following is a greenhouse gas?",
  background: video9,
  options: [
    ["Carbon dioxide (CO2)", false],
    ["Methane (CH4)", false],
    ["Ozone (03)", false],
    ["All of the above", true]
  ]
}

const question16= {
  category: "climate",
  question: "Areas in the sea where plastic waste collects are known as what?",
  background: video9,
  options: [
    ["Marine mosh pits", false],
    ["Sea trash cans", false],
    ["Naval dumping grounds", false],
    ["Ocean garbage patches", true]
  ]
}

const question17= {
  category: "cinema",
  question: "In what thriller someone famously says 'You talking to me'?",
  background: video10,
  options: [
    ["Taxi driver", true],
    ["Memento", false],
    ["Sutter Island", false],
    ["The Silence Of The Lambs", false]
  ]
}

const question18= {
  category: "cinema",
  question: "How many Oscars has Meryl Streep been nominated for?",
  background: video10,
  options: [
    ["11 Oscars", false],
    ["18 Oscars", false],
    ["21 Oscars", true],
    ["7 Oscars", false]
  ]
}

const question19= {
  category: "literature",
  question: "What is the novel Frankenstein's alternative name?",
  background: video11,
  options: [
    ["The Faltering Experiment", false],
    ["The Immortality", false],
    ["The Scientific Morality", false],
    ["The Modern Prometheus", true]
  ]
}

const question20= {
  category: "literature",
  question: "Who said 'Man is a political animal'?",
  background: video11,
  options: [
    ["Aristotle", true],
    ["Socrates", false],
    ["Plato", false],
    ["Dante", false]
  ]
}


const allQuestions = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20]

const artQuestions = allQuestions.filter((element) => element.category.includes("art"))
const scienceQuestions = allQuestions.filter((element) => element.category.includes("science"))
const musicQuestions = allQuestions.filter((element) => element.category.includes("music"))
const animalsQuestions = allQuestions.filter((element) => element.category.includes("animals"))
const geographyQuestions = allQuestions.filter((element) => element.category.includes("geography"))
const historyQuestions = allQuestions.filter((element) => element.category.includes("history"))
const foodQuestions = allQuestions.filter((element) => element.category.includes("food"))
const climateQuestions = allQuestions.filter((element) => element.category.includes("climate"))
const cinemaQuestions = allQuestions.filter((element) => element.category.includes("cinema"))
const literatureQuestions = allQuestions.filter((element) => element.category.includes("literature"))


function createRandomQ(){
  let tenQuestions = []
  tenQuestions.push(artQuestions[Math.floor(Math.random() *  artQuestions.length)]) 
  tenQuestions.push(scienceQuestions[Math.floor(Math.random() *  scienceQuestions.length)])
  tenQuestions.push(musicQuestions[Math.floor(Math.random() *  musicQuestions.length)])
  tenQuestions.push(animalsQuestions[Math.floor(Math.random() *  animalsQuestions.length)])
  tenQuestions.push(geographyQuestions[Math.floor(Math.random() *  geographyQuestions.length)])
  tenQuestions.push(historyQuestions[Math.floor(Math.random() *  historyQuestions.length)])
  tenQuestions.push(foodQuestions[Math.floor(Math.random() *  foodQuestions.length)])
  tenQuestions.push(climateQuestions[Math.floor(Math.random() *  climateQuestions.length)])
  tenQuestions.push(cinemaQuestions[Math.floor(Math.random() *  cinemaQuestions.length)])
  tenQuestions.push(literatureQuestions[Math.floor(Math.random() *  literatureQuestions.length)])
  return tenQuestions
}


const score_modal = document.getElementById("score-modal")
const game_intro = document.getElementById("game-intro")
const videoDiv = document.getElementById('video-div')
const score = document.getElementById('game-details-container')
const scoreNum= document.getElementById('game_score') 
const quiz_container = document.getElementById('game-quiz-container')
const numScore = document.getElementById('game_score')
const numQuestion = document.getElementById('q-number')
const question = document.getElementById('game-question-container')
const options = document.getElementById("game-options-container")
const wrongAnswers = document.getElementById("wrong-answers")
const rightAnswers = document.getElementById("right-answers")

const nextQuestion = document.getElementById("next")
const previousQuestion = document.getElementById("previous")
const playAgain = document.getElementById("playAgain")
const play = document.getElementById("play-again")

optArr = options.querySelectorAll("button")

let count = 0;
let points = 0;
let tries = 0;
window.onload = () => {
    videoDiv.innerHTML = video1
    quiz_container.classList.add("hidden")
    score_modal.classList.add("hidden")
    question.classList.add("hidden")
    options.classList.add("hidden")
    score.classList.add("hidden")
    play.classList.add("hidden")
    document.getElementById('start-button').onclick = () => {
      var audio = new Audio('Carousel.mp3');
      audio.play();
      startGame();
    }
};
   
function startGame(){
  let tenQuestions= createRandomQ()
  numQuestion.innerHTML = count + 1;
  if (count === 0) {
    quiz_container.classList.remove("hidden")
    game_intro.classList.add("hidden")
    question.classList.remove("hidden")
    score.classList.remove("hidden")
    options.classList.remove("hidden")
  }

  if (count < 10) {
    videoDiv.innerHTML= tenQuestions[count].background
    question.textContent = tenQuestions[count].question

    optArr.forEach( (el, index) => {
      el.textContent = tenQuestions[count].options[index][0]
      el.addEventListener( 'click', () => {
        if (tenQuestions[count].options[index][1]) {
          found = 1;
          if (tries === 0){
              points++
              scoreNum.innerHTML= points
              tries =1
          }
        el.classList.add('mystyleR')
        el.textContent= "CORRECT ANSWER !"
            
        } else {
          tries = 1
          el.textContent= "WRONG ANSWER !"
          el.classList.add('mystyleW')
          el.style.color = 'rgb(214, 82, 64)';
        }
      })
    })
  }
}

function endGame(){
  videoDiv.innerHTML = video12
  score_modal.classList.remove("hidden")
  quiz_container.classList.add("hidden")
  question.classList.add("hidden")
  options.classList.add("hidden")
  score.classList.add("hidden")
  play.classList.remove("hidden")
  
  wrongAnswers.innerHTML= 10 - points
  rightAnswers.innerHTML = points

  playAgain.addEventListener('click', () => {
    play.classList.add("hidden")
    score_modal.classList.add("hidden")
    points = 0;
    tries = 0;
    count = 0;
    videoDiv.innerHTML = video1
    quiz_container.classList.add("hidden")
    score_modal.classList.add("hidden")
    question.classList.add("hidden")
    options.classList.add("hidden")
    score.classList.add("hidden")
    play.classList.add("hidden")
    game_intro.classList.remove("hidden")

    document.getElementById('start-button').onclick = () => {
      var audio = new Audio('Carousel.mp3');
      audio.play();  
      startGame()
    }
  })
}

nextQuestion.addEventListener('click', () => {
  count ++
  optArr.forEach( (el, index) => {
    el.classList.remove('mystyleW')
    el.classList.remove('mystyleR')
    el.style.color = 'white';
  })
    
  setTimeout(() => {
    if (count < 10){
      tries =0;
      startGame()
    }
    else {
      endGame()
    }
  },600)
})

previousQuestion.addEventListener('click', () => {
  tries = 1;
  if (count > 0){
    count --
    optArr.forEach( (el, index) => {
      el.classList.remove('mystyleW')
      el.classList.remove('mystyleR')
      el.style.color = 'white';
    })
    setTimeout(() => {
      if (count < 10){
        startGame()
      }
      else {
        endGame()
      }
    },600)
  }
})
  