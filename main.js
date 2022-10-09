/* The function to make all the cards flippable */
const cards = document.querySelectorAll('.cards')

cards.forEach(card => card.addEventListener('click', function () {
    console.log("pressed");
    card.classList.toggle('is-flipped');
}));

/* A function to show/unshow the description of each card */
function show_desc(id, id_text, id_content) {
    event.stopPropagation();
    const content = document.getElementById(id);
    const text = document.getElementById(id_text);
    const text_content = document.getElementById(id_content);
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

/* Flip all exisiting cards */
function flip() {
    let cards = document.querySelectorAll('.cards');

    if (checkOpen()) {console.log("closing card..."); return;}

    console.log("flip flip");
    
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
function change_image() {
    const image = document.querySelectorAll('.back-cover');
    const text_content = [document.getElementById('text1-content'), document.getElementById('text2-content'), document.getElementById('text3-content')];
    
    // To add more images, please modify the variables below. You can use the script a.py to automatically get the filenames of all the files inside src directory
    const image_list = ['src/discs_daughter.gif', 'src/cups_8.gif', 'src/wands_daughter.gif', 'src/swords_9.gif', 'src/wands_9.gif', 'src/wands_son.gif', 'src/wands_8.gif', 'src/swords_8.gif', 'src/cups_9.gif', 'src/swords_shaman.gif', 'src/discs_9.gif', 'src/wands_10.gif', 'src/discs_priestess.gif', 'src/discs_8.gif', 'src/cups_10.gif', 'src/cups_priestess.gif', 'src/wands_ace.gif', 'src/swords_priestess.gif', 'src/wands_priestess.gif', 'src/discs_3.gif', 'src/cups_shaman.gif', 'src/cups_ace.gif', 'src/discs_2.gif', 'src/swords_daughter.gif', 'src/discs_6.gif', 'src/wands_shaman.gif', 'src/swords_ace.gif', 'src/discs_7.gif', 'src/discs_5.gif', 'src/discs_son.gif', 'src/discs_10.gif', 'src/discs_4.gif', 'src/cups_7.gif', 'src/cups_son.gif', 'src/swords_6.gif', 'src/swords_10.gif', 'src/wands_6.gif', 'src/wands_7.gif', 'src/cups_daughter.gif', 'src/swords_7.gif', 'src/cups_6.gif', 'src/cups_4.gif', 'src/swords_5.gif', 'src/wands_5.gif', 'src/wands_4.gif', 'src/swords_4.gif', 'src/cups_5.gif', 'src/discs_shaman.gif', 'src/discs_ace.gif', 'src/cups_2.gif', 'src/swords_3.gif', 'src/wands_3.gif', 'src/wands_2.gif', 'src/swords_son.gif', 'src/swords_2.gif', 'src/cups_3.gif'];
    const content_list = ['src/discs_daughter.gif', 'src/cups_8.gif', 'src/wands_daughter.gif', 'src/swords_9.gif', 'src/wands_9.gif', 'src/wands_son.gif', 'src/wands_8.gif', 'src/swords_8.gif', 'src/cups_9.gif', 'src/swords_shaman.gif', 'src/discs_9.gif', 'src/wands_10.gif', 'src/discs_priestess.gif', 'src/discs_8.gif', 'src/cups_10.gif', 'src/cups_priestess.gif', 'src/wands_ace.gif', 'src/swords_priestess.gif', 'src/wands_priestess.gif', 'src/discs_3.gif', 'src/cups_shaman.gif', 'src/cups_ace.gif', 'src/discs_2.gif', 'src/swords_daughter.gif', 'src/discs_6.gif', 'src/wands_shaman.gif', 'src/swords_ace.gif', 'src/discs_7.gif', 'src/discs_5.gif', 'src/discs_son.gif', 'src/discs_10.gif', 'src/discs_4.gif', 'src/cups_7.gif', 'src/cups_son.gif', 'src/swords_6.gif', 'src/swords_10.gif', 'src/wands_6.gif', 'src/wands_7.gif', 'src/cups_daughter.gif', 'src/swords_7.gif', 'src/cups_6.gif', 'src/cups_4.gif', 'src/swords_5.gif', 'src/wands_5.gif', 'src/wands_4.gif', 'src/swords_4.gif', 'src/cups_5.gif', 'src/discs_shaman.gif', 'src/discs_ace.gif', 'src/cups_2.gif', 'src/swords_3.gif', 'src/wands_3.gif', 'src/wands_2.gif', 'src/swords_son.gif', 'src/swords_2.gif', 'src/cups_3.gif'];
    let chosen_index = []; 
    let iter = 0;

    image.forEach(img => {
        let random = Math.floor(Math.random() * image_list.length);

        // to prevent duplicate cards
        while (chosen_index.includes(random)) {
            random = Math.floor(Math.random() * image_list.length);
        }

        chosen_index.push(random);
        img.src = image_list[random];
    
        text_content[iter].innerHTML = "<h2 class='title-font' style='font-size: 20px;'>Title</h2>" + content_list[random];
        
        iter++;
    });
}

async function shuffle(first_run) {
    
    // If it's not the first run (reload), flip all the cards to the front-cover before shuffling the card
    if (first_run){
        if (checkOpen())
            console.log("closing card...")
        await sleep(200);
    }
        
    /* Add fancy shuffling animation uwu */
    let card1 = document.getElementById(1);
    let card2 = document.getElementById(2);
    let card3 = document.getElementById(3);

    console.log("flip-flip shuffle-shuffle");

    shuffle_animation(card1, card2, card3);

    change_image();

    await sleep(500);

    shuffle_animation(card1, card2, card3);

}

/* Randomize the card whenever the user just entered or reload the page */
window.onload = function() {
    shuffle(false);
};