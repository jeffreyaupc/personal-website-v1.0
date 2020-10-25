/* Random Background */

const body = document.querySelector('body');
const color1 = ['salmon', 'green', 'aqua', 'violet', 'hotpink', 'orchid', 'grey', 'darkblue', 'palegoldenrod', 'peru', 'slateblue', 'thistle', 'teal'];
const color2 = ['salmon', 'green', 'aqua', 'violet', 'hotpink', 'orchid', 'grey', 'darkblue', 'palegoldenrod', 'peru', 'slateblue', 'thistle', 'teal'];
const color3 = ['firebrick']

const colorVar1 = parseInt(Math.random()*color1.length);
const colorVar2 = parseInt(Math.random()*color2.length);

if (color1[colorVar1] != color2[colorVar2]){
    body.style.background = 'linear-gradient(to left,' + color1[colorVar1] + ', ' + color2[colorVar2] + ')';
} else{
    body.style.background = 'linear-gradient(to left,' + color1[colorVar1] + ', ' + color3[0] + ')';
}


/**********************/
/*********Deck*********/
/**********************/

var newDeck = [];
i = 0

function shuffleDeck(){
    deck = ['Diamonds A', 'Diamonds 2', 'Diamonds 3', 'Diamonds 4', 'Diamonds 5', 'Diamonds 6', 'Diamonds 7', 'Diamonds 8', 'Diamonds 9', 'Diamonds 10', 'Diamonds J', 'Diamonds Q', 'Diamonds K', 
    'Clubs A', 'Clubs 2', 'Clubs 3', 'Clubs 4', 'Clubs 5', 'Clubs 6', 'Clubs 7', 'Clubs 8', 'Clubs 9', 'Clubs 10', 'Clubs J', 'Clubs Q', 'Clubs K', 
    'Hearts A', 'Hearts 2', 'Hearts 3', 'Hearts 4', 'Hearts 5', 'Hearts 6', 'Hearts 7', 'Hearts 8', 'Hearts 9', 'Hearts 10', 'Hearts J', 'Hearts Q', 'Hearts K', 
    'Spades A', 'Spades 2', 'Spades 3', 'Spades 4', 'Spades 5', 'Spades 6', 'Spades 7', 'Spades 8', 'Spades 9', 'Spades 10', 'Spades J', 'Spades Q', 'Spades K'
    ];

    for (i = 0; i < 52; i++){
        var card = (deck.splice([Math.floor(Math.random() * deck.length)], 1));
        var strCard = card.toString();
        newDeck.push(strCard);
    }

    // document.getElementById('display').innerHTML = newDeck;
    document.getElementById('btn-shuffle').innerHTML = 'Shuffled';
    document.getElementById('btn-shuffle').disabled = true;
    document.getElementById('btn-shuffle').style.cursor = 'not-allowed';
    document.getElementById('btn-deal').disabled = false;
    document.getElementById('btn-deal').innerHTML = 'Deal';
    console.log(newDeck);
};

function resetShuffle(){
    document.getElementById('btn-shuffle').innerHTML = 'Shuffle';
    document.getElementById('btn-shuffle').disabled = false;
    document.getElementById('btn-shuffle').style.cursor = 'pointer';
    i = 0;
    newDeck.length = 0;
    document.getElementById('card-left').innerHTML = "cards remaining: 52";
    document.getElementById('btn-deal').disabled = true;
    document.getElementById('btn-deal').innerHTML = 'Shuffle deck';
    document.getElementById('dealt-card').innerHTML = '';
    document.getElementById('dealt-card').style.backgroundColor = 'inherit';
    document.getElementById('dealt-card').style.width = '100%';
    document.getElementById('dealt-card').style.border = 'none';
}

function dealCard(){
    document.getElementById('dealt-card').innerHTML = newDeck.shift();
    document.getElementById('card-left').innerHTML = "cards remaining: " + newDeck.length;
    if (newDeck.length != 0){
        document.getElementById('dealt-card').style.visibility = 'visible';
        document.getElementById('dealt-card').style.backgroundColor = 'white';
        document.getElementById('dealt-card').style.width = '3rem';
        document.getElementById('dealt-card').style.height = '2rem';
    } else if (newDeck.length == 0){
        document.getElementById('dealt-card').innerHTML = 'Shuffle to play again!';
        document.getElementById('dealt-card').style.color = 'white';
        document.getElementById('btn-deal').disabled = true;
        document.getElementById('btn-shuffle').disabled = false;
        document.getElementById('btn-shuffle').innerHTML = 'Shuffle';
        document.getElementById('btn-shuffle').style.cursor = 'pointer';
        document.getElementById('dealt-card').style.backgroundColor = 'inherit';
        document.getElementById('dealt-card').style.width = '100%';
        document.getElementById('dealt-card').style.height = '2rem';
    }
    switch (document.getElementById('dealt-card').innerHTML){
        case 'Diamonds A':
            document.getElementById('description').innerHTML = "Write down one thing that you want to achieve most in life.";
            document.getElementById('dealt-card').innerHTML = '&diams; A';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 2':
            document.getElementById('description').innerHTML = "Start a conversation with a friend that you haven't gotten in touch for a while.";
            document.getElementById('dealt-card').innerHTML = '&diams; 2';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 3':
            document.getElementById('description').innerHTML = "Meditation: Close your eyes, watch your thoughts without following them for two minutes. Try not to fall asleep! Write down the thoughts that came across your mind during the meditation. Were you able to watch your thoughts without following them?";
            document.getElementById('dealt-card').innerHTML = '&diams; 3';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 4':
            document.getElementById('description').innerHTML = "Relax: Listen to your favourite song.";
            document.getElementById('dealt-card').innerHTML = '&diams; 4';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 5':
            document.getElementById('description').innerHTML = "Discipline: Start making your bed every day.";
            document.getElementById('dealt-card').innerHTML = '&diams; 5';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 6':
            document.getElementById('description').innerHTML = "Luck: remember to smile at every person that you talk to.";
            document.getElementById('dealt-card').innerHTML = '&diams; 6';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 7':
            document.getElementById('description').innerHTML = "Think of someone who gives you peace of mind. Whenever you feel stressed or anxious, think about that person or talk to that person.";
            document.getElementById('dealt-card').innerHTML = '&diams; 7';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 8':
            document.getElementById('description').innerHTML = "Creativity: Pick your favourite geometry shape and draw something out of it!";
            document.getElementById('dealt-card').innerHTML = '&diams; 8';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 9':
            document.getElementById('description').innerHTML = "Reminder: Drink water now!";
            document.getElementById('dealt-card').innerHTML = '&diams; 9';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds 10':
            document.getElementById('description').innerHTML = "What is your favourite magic trick? Try to learn it!";
            document.getElementById('dealt-card').innerHTML = '&diams; 10';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds J':
            document.getElementById('description').innerHTML = "Make a plan for your next vacation.";
            document.getElementById('dealt-card').innerHTML = '&diams; J';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds Q':
            document.getElementById('description').innerHTML = "Advice: Love is not possession, it is to let what you love be itself.";
            document.getElementById('dealt-card').innerHTML = '&diams; Q';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Diamonds K':
            document.getElementById('description').innerHTML = "Deep thinking: Is there anything that you don't know about?";
            document.getElementById('dealt-card').innerHTML = '&diams; K';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Clubs A':
            document.getElementById('description').innerHTML = "Write down one thing that makes you truly happy.";
            document.getElementById('dealt-card').innerHTML = '&clubs; A';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 2':
            document.getElementById('description').innerHTML = "Start a conversation with a family member that you haven't gotten in touch for a while.";
            document.getElementById('dealt-card').innerHTML = '&clubs; 2';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 3':
            document.getElementById('description').innerHTML = "Meditation: Focus on your breath, inhale for four seconds, hold your breathe for seven seconds, and exhale for nine seconds. Repeat ten times.";
            document.getElementById('dealt-card').innerHTML = '&clubs; 3';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 4':
            document.getElementById('description').innerHTML = "Relax: come up with a destination for your next vacation.";
            document.getElementById('dealt-card').innerHTML = '&clubs; 4';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 5':
            document.getElementById('description').innerHTML = "Discipline: Try to eat meals at a regular time every day.";
            document.getElementById('dealt-card').innerHTML = '&clubs; 5';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 6':
            document.getElementById('description').innerHTML = "Luck: remember to thank every person who does a favour for you.";
            document.getElementById('dealt-card').innerHTML = '&clubs; 6';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 7':
            document.getElementById('description').innerHTML = "Think about a song or movie that makes you happy or excited. Whenever you feel sad or down, listen to the song or watch the movie.";
            document.getElementById('dealt-card').innerHTML = '&clubs; 7';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 8':
            document.getElementById('description').innerHTML = "Creativity: Pick your favourite color and draw something that associates with that color!";
            document.getElementById('dealt-card').innerHTML = '&clubs; 8';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 9':
            document.getElementById('description').innerHTML = "Reminder: Smile often!";
            document.getElementById('dealt-card').innerHTML = '&clubs; 9';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs 10':
            document.getElementById('description').innerHTML = "What is your favourite music instrument? Play it! If you don't know how to play it, learn it!";
            document.getElementById('dealt-card').innerHTML = '&clubs; 10';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs J':
            document.getElementById('description').innerHTML = "Make a plan for an advancement in your life.";
            document.getElementById('dealt-card').innerHTML = '&clubs; J';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs Q':
            document.getElementById('description').innerHTML = "Advice: If you spend your time chasing after something, it means that 'something' has spent your time, not you. (relativity)";
            document.getElementById('dealt-card').innerHTML = '&clubs; Q';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Clubs K':
            document.getElementById('description').innerHTML = "Deep thinking: Do you have any regret? Can you still do something about it?";
            document.getElementById('dealt-card').innerHTML = '&clubs; K';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Hearts A':
            document.getElementById('description').innerHTML = "write down the biggest achievements you have achieved so far. Whenever you feel stuck or powerless, look at the list you've written down, look at the things you've achieved and overcome.";
            document.getElementById('dealt-card').innerHTML = '&hearts; A';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 2':
            document.getElementById('description').innerHTML = "Start a conversation with someone that you didn't like, and talk about something that you both are interested in.";
            document.getElementById('dealt-card').innerHTML = '&hearts; 2';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 3':
            document.getElementById('description').innerHTML = "Meditation: What is your biggest fear? Do you have control over this fear? If you have no control over it, there's no point fearing it; if you have control over it, you don't need to fear it.";
            document.getElementById('dealt-card').innerHTML = '&hearts; 3';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 4':
            document.getElementById('description').innerHTML = "Relax: Make a plan to hangout with your friends/partner.";
            document.getElementById('dealt-card').innerHTML = '&hearts; 4';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 5':
            document.getElementById('description').innerHTML = "Discipline: Try to sleep at a regular time every day.";
            document.getElementById('dealt-card').innerHTML = '&hearts; 5';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 6':
            document.getElementById('description').innerHTML = "Luck: think about what you already have, and stop thinking about what you do not have.";
            document.getElementById('dealt-card').innerHTML = '&hearts; 6';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 7':
            document.getElementById('description').innerHTML = "Set a goal for the month and a reward if you achieved it. Be realistic and practical.";
            document.getElementById('dealt-card').innerHTML = '&hearts; 7';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 8':
            document.getElementById('description').innerHTML = "Creativity: Draw your favourite animal!";
            document.getElementById('dealt-card').innerHTML = '&hearts; 8';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 9':
            document.getElementById('description').innerHTML = "Reminder: Be grateful!";
            document.getElementById('dealt-card').innerHTML = '&hearts; 9';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts 10':
            document.getElementById('description').innerHTML = "What is your favourite outfit? Wear it tomorrow! (or at your earliest convenience)";
            document.getElementById('dealt-card').innerHTML = '&hearts; 10';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts J':
            document.getElementById('description').innerHTML = "Make a plan to save money.";
            document.getElementById('dealt-card').innerHTML = '&hearts; J';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts Q':
            document.getElementById('description').innerHTML = "Advice: There is no success or failure, only how you look at it. (perspective)";
            document.getElementById('dealt-card').innerHTML = '&hearts; Q';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Hearts K':
            document.getElementById('description').innerHTML = "Deep thinking: Are you in control of your actions? Or do you let your actions define 'you'?";
            document.getElementById('dealt-card').innerHTML = '&hearts; K';
            document.getElementById('dealt-card').style.color = 'red';
            break;
        case 'Spades A':
            document.getElementById('description').innerHTML = "Write down one thing that gives you motivation.";
            document.getElementById('dealt-card').innerHTML = '&spades; A';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 2':
            document.getElementById('description').innerHTML = "Start a conversation with someone that you don't know, a 'Hi, how are you today?' will do.";
            document.getElementById('dealt-card').innerHTML = '&spades; 2';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 3':
            document.getElementById('description').innerHTML = "Meditation: Imagine your mind leaves your body for one day, where do you want to go? Imagine your mind leaves your body forever, what then would be your goal?";
            document.getElementById('dealt-card').innerHTML = '&spades; 3';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 4':
            document.getElementById('description').innerHTML = "Relax: Go out and take a walk for half an hour.";
            document.getElementById('dealt-card').innerHTML = '&spades; 4';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 5':
            document.getElementById('description').innerHTML = "Discipline: Try to set a goal for the day every morning. Be realistic and practical";
            document.getElementById('dealt-card').innerHTML = '&spades; 5';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 6':
            document.getElementById('description').innerHTML = "Luck: remember to fully understand the opposite perspective before starting an argument.";
            document.getElementById('dealt-card').innerHTML = '&spades; 6';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 7':
            document.getElementById('description').innerHTML = "Think of your favourite color, designate a part of your living space and fill it with that color.";
            document.getElementById('dealt-card').innerHTML = '&spades; 7';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 8':
            document.getElementById('description').innerHTML = "Creativity: Casually hum a melody and record it! If possible you can even create a song with it!";
            document.getElementById('dealt-card').innerHTML = '&spades; 8';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 9':
            document.getElementById('description').innerHTML = "Reminder: Don't drink & drive!";
            document.getElementById('dealt-card').innerHTML = '&spades; 9';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades 10':
            document.getElementById('description').innerHTML = "What is your favourite cuisine? Cook it! If you do not know how to cook it, find a recipe and do your best!";
            document.getElementById('dealt-card').innerHTML = '&spades; 10';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades J':
            document.getElementById('description').innerHTML = "Make a plan to quit a bad habit.";
            document.getElementById('dealt-card').innerHTML = '&spades; J';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades Q':
            document.getElementById('description').innerHTML = "Advice: If you dwell about the past, you live in the past; If you always worry about the future, you live in the future;/n But if you do your best at the present, there's no 'past' to dwell about, and there's no 'future' to worry about.";
            document.getElementById('dealt-card').innerHTML = '&spades; Q';
            document.getElementById('dealt-card').style.color = 'black';
            break;
        case 'Spades K':
            document.getElementById('description').innerHTML = "Deep thinking: Would you rather live forever with no money, or would you rather live with all the money in the world for one day?";
            document.getElementById('dealt-card').innerHTML = '&spades; K';
            document.getElementById('dealt-card').style.color = 'black';
            break;
    }
    
}

