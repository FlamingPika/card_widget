const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, porro eius doloremque distinctio pariatur quo! Porro, optio provident? Totam ipsam quae deleniti, expedita sequi culpa. Quam officia harum magnam aperiam.";

/* The function to make all the cards flippable */
const cards = document.querySelectorAll('.cards')

cards.forEach(card => card.addEventListener('click', function () {
    console.log("pressed");
    card.classList.toggle('is-flipped');
}));


/* A function to show/unshow the description of each card */
function show_desc(id, id_text, id_content) {
    const content = document.getElementById(id);
    const text = document.getElementById(id_text);
    const text_content = document.getElementById(id_content);
    event.stopPropagation();
    content.classList.toggle('appear');
    text.classList.toggle('disappear-text');
    text_content.classList.toggle('appear-text');

}

/* A function to delay the action of another function */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* Check whether there is an opened card or not. Return true if there exists at least one opened card */
function checkOpen() {
    const cards = document.querySelectorAll('.cards');
    const contents = document.querySelectorAll('.content')
    const text_buttons = document.querySelectorAll('.text-button');
    const text_contents = document.querySelectorAll('.text-content')
    let open = false;

    // Reset the text before flipping
    text_buttons.forEach(text => {
        if (text.className == 'text-button disappear-text') {
            text.classList.toggle('disappear-text');
        }
    })
    text_contents.forEach(text => {
        if (text.className == 'text-content appear-text') {
            text.classList.toggle('appear-text');
        }
    })

    // Close all the content before flipping
    contents.forEach(content => {
        if (content.className == 'content appear') {
            content.classList.toggle('appear');
        }
    })

    cards.forEach(card => {
        if (card.className == 'cards is-flipped') {
            open = true;
            card.classList.toggle('is-flipped');
        }
    })

    return open;

}

/* Flip the card once to see the back of the card => put it on class: front*/
// function flip_one(id) {
//     let card = document.getElementById(id);
//     card.classList.toggle('is-flipped');
// }

/* Flip all exisiting cards */
function flip() {
    let cards = document.querySelectorAll('.cards');

    if (checkOpen()) {return;}
    
    cards.forEach(card => {
        card.classList.toggle('is-flipped');
    })
    
}

/* Function to trigger the shuffling animation */
function shuffle_animation(card1, card2, card3) {
    card1.classList.toggle('is-shuffled1');
    card2.classList.toggle('is-shuffled2');
    card3.classList.toggle('is-shuffled3');
}

/* A function to shuffle the card and reassign the image of the back cover to the corresponding new card */
async function shuffle(first_run) {
    
    // If it's not the first run (reload), flip all the cards to the front-cover before shuffling the card
    if (first_run){
        checkOpen();
        await sleep(200);
    }
        
    /* Add fancy shuffling animation uwu */
    let card1 = document.getElementById(1);
    let card2 = document.getElementById(2);
    let card3 = document.getElementById(3);

    shuffle_animation(card1, card2, card3);

    await sleep(500);

    shuffle_animation(card1, card2, card3);

    // const promise = new Promise((resolve, reject) => {

    // });

    const image = document.querySelectorAll('.back-cover');
    const text_content = [document.getElementById('text1-content'), document.getElementById('text2-content'), document.getElementById('text3-content')];
    const image_list = ['src/ace sword.jpg', 'src/Shaman of Swords.jpeg', 'src/7w.jpg', 'src/discs_daughter.gif', 'src/6 d.jpeg', 'src/7c.jpg', 'src/cups_8.gif', 'src/wands_daughter.gif', 'src/swords_9.gif', 'src/wands_9.gif', 'src/wands_son.gif', 'src/wands_8.gif', 'src/swords_8.gif', 'src/cups_9.gif', 'src/7d.jpg', 'src/7s.jpg', 'src/swords_shaman.gif', 'src/discs_9.gif', 'src/Shaman of Wands.jpeg', 'src/Daughter of Wands.jpeg', 'src/6 w.jpeg', 'src/ace c.jpg', 'src/wands_10.gif', 'src/discs_priestess.gif', 'src/priestess of swords.png', 'src/discs_8.gif', 'src/cups_10.gif', 'src/10d.jpg', 'src/cups_priestess.gif', 'src/10s.jpg', 'src/2 sword.jpg', 'src/ace w.jpg', 'src/Son of Swords.jpg', 'src/Daughter of Cups.jpeg', 'src/Son of Cups.jpeg', 'src/ace d.jpg', 'src/Priestess of Wands.jpeg', 'src/10w.jpg', 'src/wands_ace.gif', 'src/6 c.jpeg', 'src/swords_priestess.gif', 'src/Son of Wands.jpeg', 'src/10c.jpg', 'src/wands_priestess.gif', 'src/3c.jpg', 'src/2 w.jpg', 'src/Priestess of Wands.jpg', 'src/Priestess of Discs.jpeg', 'src/3w.jpg', 'src/discs_3.gif', 'src/Son of Discs.jpeg', 'src/cups_shaman.gif', 'src/cups_ace.gif', 'src/discs_2.gif', 'src/swords_daughter.gif', 'src/discs_6.gif', 'src/wands_shaman.gif', 'src/Daughter of Discs.jpeg', 'src/Shaman of Discs.jpeg', 'src/swords_ace.gif', 'src/discs_7.gif', 'src/3d.jpg', 'src/Shaman of Cups.jpeg', 'src/discs_5.gif', 'src/discs_son.gif', 'src/2 d-1.jpg', 'src/discs_10.gif', 'src/discs_4.gif', 'src/2c.jpg', 'src/4s.jpg', 'src/5w.jpg', 'src/4d.jpg', 'src/cups_7.gif', 'src/cups_son.gif', 'src/9c.jpg', 'src/swords_6.gif', 'src/swords_10.gif', 'src/wands_6.gif', 'src/wands_7.gif', 'src/cups_daughter.gif', 'src/swords_7.gif', 'src/cups_6.gif', 'src/5c.jpg', 'src/cups_4.gif', 'src/9w.jpg', 'src/8s.jpg', 'src/8d.jpg', 'src/swords_5.gif', 'src/wands_5.gif', 'src/6 s.jpeg', 'src/wands_4.gif', 'src/swords_4.gif', 'src/cups_5.gif', 'src/3 s.jpg', 'src/discs_shaman.gif', 'src/discs_ace.gif', 'src/8w.jpg', 'src/9s.jpg', 'src/9d.jpg', 'src/4c.jpg', 'src/cups_2.gif', 'src/swords_3.gif', 'src/Daughter of Swords.jpeg', 'src/wands_3.gif', 'src/wands_2.gif', 'src/swords_son.gif', 'src/swords_2.gif', 'src/8c.jpg', 'src/5s.jpg', 'src/4w.jpg', 'src/5d.jpg', 'src/cups_3.gif'];
    const content_list = ['src/ace sword.jpg', 'src/Shaman of Swords.jpeg', 'src/7w.jpg', 'src/discs_daughter.gif', 'src/6 d.jpeg', 'src/7c.jpg', 'src/cups_8.gif', 'src/wands_daughter.gif', 'src/swords_9.gif', 'src/wands_9.gif', 'src/wands_son.gif', 'src/wands_8.gif', 'src/swords_8.gif', 'src/cups_9.gif', 'src/7d.jpg', 'src/7s.jpg', 'src/swords_shaman.gif', 'src/discs_9.gif', 'src/Shaman of Wands.jpeg', 'src/Daughter of Wands.jpeg', 'src/6 w.jpeg', 'src/ace c.jpg', 'src/wands_10.gif', 'src/discs_priestess.gif', 'src/priestess of swords.png', 'src/discs_8.gif', 'src/cups_10.gif', 'src/10d.jpg', 'src/cups_priestess.gif', 'src/10s.jpg', 'src/2 sword.jpg', 'src/ace w.jpg', 'src/Son of Swords.jpg', 'src/Daughter of Cups.jpeg', 'src/Son of Cups.jpeg', 'src/ace d.jpg', 'src/Priestess of Wands.jpeg', 'src/10w.jpg', 'src/wands_ace.gif', 'src/6 c.jpeg', 'src/swords_priestess.gif', 'src/Son of Wands.jpeg', 'src/10c.jpg', 'src/wands_priestess.gif', 'src/3c.jpg', 'src/2 w.jpg', 'src/Priestess of Wands.jpg', 'src/Priestess of Discs.jpeg', 'src/3w.jpg', 'src/discs_3.gif', 'src/Son of Discs.jpeg', 'src/cups_shaman.gif', 'src/cups_ace.gif', 'src/discs_2.gif', 'src/swords_daughter.gif', 'src/discs_6.gif', 'src/wands_shaman.gif', 'src/Daughter of Discs.jpeg', 'src/Shaman of Discs.jpeg', 'src/swords_ace.gif', 'src/discs_7.gif', 'src/3d.jpg', 'src/Shaman of Cups.jpeg', 'src/discs_5.gif', 'src/discs_son.gif', 'src/2 d-1.jpg', 'src/discs_10.gif', 'src/discs_4.gif', 'src/2c.jpg', 'src/4s.jpg', 'src/5w.jpg', 'src/4d.jpg', 'src/cups_7.gif', 'src/cups_son.gif', 'src/9c.jpg', 'src/swords_6.gif', 'src/swords_10.gif', 'src/wands_6.gif', 'src/wands_7.gif', 'src/cups_daughter.gif', 'src/swords_7.gif', 'src/cups_6.gif', 'src/5c.jpg', 'src/cups_4.gif', 'src/9w.jpg', 'src/8s.jpg', 'src/8d.jpg', 'src/swords_5.gif', 'src/wands_5.gif', 'src/6 s.jpeg', 'src/wands_4.gif', 'src/swords_4.gif', 'src/cups_5.gif', 'src/3 s.jpg', 'src/discs_shaman.gif', 'src/discs_ace.gif', 'src/8w.jpg', 'src/9s.jpg', 'src/9d.jpg', 'src/4c.jpg', 'src/cups_2.gif', 'src/swords_3.gif', 'src/Daughter of Swords.jpeg', 'src/wands_3.gif', 'src/wands_2.gif', 'src/swords_son.gif', 'src/swords_2.gif', 'src/8c.jpg', 'src/5s.jpg', 'src/4w.jpg', 'src/5d.jpg', 'src/cups_3.gif'];
    let chosen_index = [] 
    let iter = 0;

    image.forEach(img => {
        let random = Math.floor(Math.random() * image_list.length);

        // to prevent duplicate cards
        while (chosen_index.includes(random)) {
            random = Math.floor(Math.random() * image_list.length);
        }

        chosen_index.push(random);
        img.src = image_list[random];
    
        text_content[iter].innerHTML = "<h4>Title</h4>" + content_list[random];
        
        iter++;
    })

}

/* Randomize the card whenever the user just entered or reload the page */
window.onload = function() {
    shuffle(false);
};


/*
    THINGS TO DO:

    - Add state front / back for the flip-all feature bcz all the cards should be on the same state before
    the user use flip-all feature. If at least one card has different state, change the state of that particular
    card first V

    - Find a way to set the card so that it can have two different function on the card (flip + show description) V

    - Find a way to randomize the cards V

    - Add the shuffle feature V


    BUG:

    - there might be duplicate cards

    - the hover transform:rescale only works for the front card V

    - fix layouting V

    


*/