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

    const content_list = {'src/swords_priestess.gif': ['Priestess of Swords', 'A mature, highly intelligent, influential, and possibly air sign woman. She could represent you, or someone close to you. The Priestess of Swords can often seem detached and aloof, her mind is clear and precise, but she is somewhat out of touch with her feelings and she finds it difficult to connect with others, therefore leading to feelings of loneliness. Maybe you need to practice a little detachment at this time, she could be suggesting that you take a retreat, time out to think, until the way forward becomes clear.'], 'src/wands_son.gif': ['Son of Wands', 'The entertainer, the Son of Wands is a charming, creative, possibly fire sign young man. He could represent you or someone close to you. He finds it hard to take life too seriously and seems to skim along by the skin of his teeth, getting himself into and out of, hilarious scrapes along the way. There is never a dull moment when he is around. Maybe you need to take life a little less seriously right now, break out and have some fun, as the saying goes..all work and no play...take time to enjoy the sweetness of life, let your hair down, enjoy.'], 'src/discs_son.gif': ['Son of Discs', "A career minded, possibly earth sign, young man. The Son of Discs is very much a 'what you see is what you get' kind of person. Dedicated to achieving his goals, he may miss out on the more fun aspects of life, and therefore come across as being slightly boring. He is extremely loyal to those he cares for and will work hard to earn the respect of those he admires. he might represent you or someone close to you."], 'src/swords_son.gif': ['Son of Swords', 'A highly intelligent, possibly air sign, young man. The Son of Swords can often behave rashly, or have his eye so much on his goal that he neglects the feelings of those closest to him. His will is strong, and he has a determination to succeed, even at the expense of his personal life. Clever and resourceful, he can sometimes tend toward manipulation to achieve his aims. He could represent you or someone close to you.'], 'src/cups_son.gif': ['Son of Cups', "A caring, sensitive, possibly water sign, young man. He could be involved, or have ambition to be, in the creative sector, possibly a musician, artist performer or producer. Deeply in touch with all things emotional, he is often the lover or close confidante in a person's reading. Maybe it's time to develop the qualities he represents in yourself. You could be thinking of working in one of the caring or creative professions. The Son of Cups appears to let you know that this would be a good choice for you now."], 'src/swords_shaman.gif': ['Shaman of Swords', "A highly intelligent, mature, possibly air sign man. He could represent you or someone close to you. The Shaman of swords is comfortable in the realm of thoughts, clear and precise. If you need advice with planning and strategy, he's the man to go to. He might be a professor, lawyer or even a doctor, he excels in anything to do with the intellectual approach to life. He can sometimes tend toward manipulation and control, and, being so centred in the mind, he might have difficulty understanding his own or other's feelings."], 'src/wands_shaman.gif': ['Shaman of Wands', 'Dynamic and creative, a man of action. The Shaman of Wands represents a mature, possibly fire sign, man in your life. He could also represent you or parts of yourself that lay dormant. Time to wake up when this Shaman appears in your cards! Take action, get to work on that creative project, talk to the people you need to, in order to make things happen. There can be a tendency toward domination and control with this card, a reminder to be mindful of the people around you. Treat others with respect and it will be returned to you a thousandfold.'], 'src/discs_shaman.gif': ['Shaman of Discs', "The good business man. The Shaman of Discs is a mature, possibly earth sign man, comfortable in the physical and material realms. He's the man you would go to for advice in anything related to career, finance or the physical manifestations in your life. He is a great provider, although he may be a bit of a workaholic and therefore, not always emotionally available, which can be frustrating for his partner and family. He might represent you or someone close to you."], 'src/cups_shaman.gif': ['Shaman of Cups', 'The archetypal good daddy, caring and compassionate, the Shaman of Cups is a mature, possibly water sign man. There could be a tendency to overindulge, especially around alcohol, food or sensual pleasure. In the positive, he is a great friend and a good listener, always looking for ways to make the world a better place for those near and dear to him. He could represent you, or someone close to you.  '], 'src/wands_priestess.gif': ['Priestess of Wands', "Creative, passionate and full of energy, the Priestess of Wands is a mature, possibly fire sign woman. Her nature being generous in the extreme she will always take time to listen to your ideas and assist wherever she's able. She can sometimes be a little controlling or dominating, a tendency she should guard against. If you are looking to manifest an idea or dream, she is a great person to have on your side. This Priestess can represent you or someone close to you."], 'src/cups_priestess.gif': ['Priestess of Cups', "A mature, caring and compassionate, possibly water sign woman. This woman feels deeply, always empathic, she will  seek to understand what is going on with those around her, and help if she can. Home and family are extremely important to her, she's a good listener and a great friend. She can however, sometimes play the victim, and try to find relief in alcohol, drugs, food or relationships, although this is a rare tendency, she should always be careful of overindulgence. This Priestess can represent you or someone close to you."], 'src/discs_priestess.gif': ['Priestess of Discs', 'This Priestess is wise in the ways of the world. A mature, possibly earth sign woman. Often she will be running her own business or be the manager or CEO of a company. She can be materialistic, but not to the exclusion of the people in her life, she will usually offer a helping hand when needed.  If you are considering a business venture, she would be the person to go to for advice. The Priestess of Discs could be yourself or a very capable woman who will be helpful to you, possibly a partner.'], 'src/swords_daughter.gif': ['Daughter of Swords', 'A feisty young woman or child. Possibly an air sign. Highly intelligent and insatiably curious, the Daughter of Swords is a force to be reckoned with! Try not to get in an argument with her as you will very likely lose. She could represent you or a part of yourself that needs to be acknowledged, or someone close to you right now.'], 'src/wands_daughter.gif': ['Daughter of Wands', 'Creative, energetic, passionate and kind, The Daughter of Wands represents a young, possibly fire sign, woman or child. She has an innate desire for freedom in all things. She can be hard work, but only because her creativity and boundless energy can be wearing for those less able to keep up. She may represent you or someone in your life right now. Maybe you need to develop your creativity, if you are thinking of starting a project, now would be a good time. The Passion and energy of this fire child will help you to achieve your goal.'], 'src/cups_daughter.gif': ['Daughter of Cups', 'She shows a vulnerability and openness, a trust in the universe, be gentle with this one she can easily hurt. Creative and kind she may have wandered into your reading today to remind you to cultivate these attributes in yourself, or to appreciate the same in another.'], 'src/discs_daughter.gif': ['Daughter of Discs', 'A young possibly earth sign, woman or child. She could represent you or someone close to you right now. Purposeful and ambitious, the Daughter of Discs reminds you to get on track, focus on your goals, ground yourself in reality and check your boundaries. She can be a great friend, steadfast and loyal, she will always be there when you need her.'], 'src/wands_6.gif': ['Six of Wands', 'Victory, success, vulnerability and trust are all represented here. If you are considering a course of action, your best bet is to be open and honest in your dealings, this will bring you the results you seek. See your vulnerability as a strength rather than a weakness. If you are taking exams, looking for a new job or home, or even trying to get your point across, this card is saying yes, you will achieve your aims.'], 'src/swords_6.gif': ['Six of Swords', 'The Six of Swords represents a journey, a flight, either physical or spiritual. You could be taking a trip or you may find yourself rising above every day concerns. Stay away from gossip or abusive behaviour now, this is a time to let go and move on. The confusion has passed. New opportunities are on the horizon.'], 'src/cups_6.gif': ['Six of Cups', 'Be present in your life and be grateful to your past, the good and the bad, for it made you the person you are today. Celebrate yourself.'], 'src/discs_6.gif': ['Six of Discs', 'The Six of Discs is about sharing, giving of yourself for the greater good. You may be looking to get involved with a charity organisation or to fundraise for a good cause. You may need to be open to give or receive healing at this time. If you have been asking for help with a situation, this card is an indication that the help is available to you now.'], 'src/wands_ace.gif': ['Ace of Wands', 'If you have an Idea for a project, go for it! Restrictions of the past are gone and you are free to create.'], 'src/swords_ace.gif': ['Ace of Swords', 'A good idea. You have the ability to succeed through positive force of will. Focus.'], 'src/discs_ace.gif': ['Ace of Discs', 'An encouraging card - Good things manifesting on the material plane for you.'], 'src/cups_ace.gif': ['Ace of Cups', "Future: - New love on it's way to you."], 'src/wands_10.gif': ['Ten of Wands', 'We all have periods of stress in our lives, times when everything seems too much. This card is asking you to let go now, there is nothing more you can do. Take care of you, maybe go to the spa, get a massage, do something nice for yourself.'], 'src/swords_10.gif': ['Ten of Swords', "This card is letting you know that the time of worrying is over, maybe it's time to take a risk. If you are plagued by over thinking, the Ten of Swords is telling you to stop, this may be the time to take action, or just surrender to life on it's own terms. Worrying does not achieve anything, and more than that it is negative visualisation, you could actually manifest that which worries you. Ask for help from the Universe, trust that your higher power will manifest whatever is in your best interests. You are not alone."], 'src/discs_10.gif': ['Ten of Discs', 'Prosperity, abundance and cooperation are depicted in this card. If your question is about finances, home or work, you are being given a very encouraging message here. If you have been worried about something material, your job, home or physical body, the Ten of Discs is letting you know that all will be well. You have all the support that you need at this time.'], 'src/cups_10.gif': ['Ten of Cups', 'This is a picture of contentment, home and family. Relationships are going well, things have settled down for you. if your question is to do with marriage or commitment, this is a very good card to draw. Peace and Love prevail.'], 'src/wands_9.gif': ['Nine of Wands', 'Seems like you have been working very hard and there is a feeling here that energy is low and you need some rest. Nine is a completion number, you can feel satisfied that the work is almost complete, and whatever you have been going through, change is coming now.'], 'src/swords_9.gif': ['Nine of Swords', 'Are you beating yourself up? Do you feel victimised by another? The Nine of Swords usually relates to cruelty, and often this is toward the self. If you find that you are doing this, try to visualise yourself as you would a good friend, would you give anyone else such a hard time? Probably not. Have some compassion for yourself, the key word here is kindness. Open yourself to new possibilities and realise that even after the darkest night the dawn will always come.'], 'src/discs_9.gif': ['Nine Of Discs', 'Success. Fulfilment. Your material needs are taken care of. Abundance flows in. Creativity and healing abilities are enhanced. Take time to work alone. Positive growth.'], 'src/cups_9.gif': ['Nine of Cups', 'The wishing card, happiness, fulfilment, loving relationships. Your hopes and desires are manifesting for you now, this is a good time. Relax and enjoy it.'], 'src/wands_8.gif': ['Eight of Wands', "Swift movement, flight, taking the initiative. A time of action, travel, New Ideas, an influx of psychic energy. Cupid's arrows being fired toward you or someone in your life. A positive time. be receptive, trust."], 'src/swords_8.gif': ['Eight of Swords', 'Overthinking a situation. Analysis paralysis. building walls around yourself with your thoughts. Feeling stuck. Take a risk, a leap of faith, stop trying to break down the walls with your thoughts, they created them in the first place!  Get into your heart and take action from there.'], 'src/discs_8.gif': ['Eight of Discs', 'Meaningful work, alone or within a group. Learning a new skill. initiative, teamwork and growth are represented here.'], 'src/cups_8.gif': ['Eight of Cups', 'Old Hurts coming up to be faced and released at this time. A deepening of emotion. Give yourself a break, go out in nature, spend time in meditation, go within, this is a time to get to the roots of your deepest feelings. E-motion - energy in motion, let it flow, release all that no longer serves you, You are in a period of growth and renewal.'], 'src/wands_7.gif': ['Seven of Wands', 'Defensiveness or a need to defend your beliefs. you may be feeling challenged but you have the strength and conviction to stand firm.'], 'src/swords_7.gif': ['Seven of Swords', 'You may be choosing to stand apart, or, like the fox in the picture, you might need time to plan a strategy.'], 'src/discs_7.gif': ['Seven of Discs', "A time out to re-assess. Looking back at all you have achieved and taking time to decide on your direction or next steps. Don't rush into anything now, ideas need time to gestate. You may be feeling tired, try to get some rest, tomorrow is a new day."], 'src/cups_7.gif': ['Seven of Cups', 'Big dreams, wanting everything at once. Be peaceful and focus, all in good time.'], 'src/wands_5.gif': ['Five of Wands', 'Creative struggle, possible creative differences with colleagues, team members or community. Internal struggle, different Ideas vying for attention. As this card is creative in nature, the struggle is a positive one. The best idea will win out.'], 'src/swords_5.gif': ['Five of Swords', 'Negative energy turned in on yourself. Resentment & anger. Feeling victimised. An argument brewing. The need to let go of abusive people, thoughts  or behaviours.'], 'src/discs_5.gif': ['Five of Discs', "Financial worries. Change in circumstances. Take the next steps, do the next right thing. The woman in the picture can't see the discs (money) as they have not yet come into view, but she is doing what is necessary, she's baking bread to feed herself and her family, until the difficulty passes."], 'src/cups_5.gif': ['Five of Cups', 'Emotional change, could be the break up of a relationship. Need for communication. Maybe time to let go of a person or situation that no longer fits in your life, time to move on. All is not lost, two cups are spilled but three are still full, be with people who support you at this time.'], 'src/wands_4.gif': ['Four of Wands', 'Celebration. Happy events. Possibly Marriage. Rite of passage. Creative cooperation. Have fun and enjoy this time!'], 'src/swords_4.gif': ['Four of Swords', 'Balancing of the Chakras bringing powerful positive energy to the whole being.'], 'src/discs_4.gif': ['Four of Discs', 'Isolation, a need for space, time to be alone. A need for meditation and integration. A healing time away from the noise of the outside world. Recognition of the need for inner counsel. A time to pray, consult with the ancestors.'], 'src/cups_4.gif': ['Four of Cups', 'With time and effort, the situation will change and confusion will clear, moving you to a better place emotionally.'], 'src/wands_3.gif': ['Three of Wands', "You've had the idea, shared it and created something good, and now your ship is coming in. This card shows success in whatever you are creating, be it business, relationship, or even self development, you can look forward to a positive outcome."], 'src/discs_3.gif': ['Three of Discs', 'Working with others. Learning new skills. Recognition of achievement. Community building. You may be thinking of studying something new. Go for it, the time is right.'], 'src/cups_3.gif': ['Three of Cups', 'This is a playful time for you. Relationships are on track and developing in pleasing ways. Get out and have some fun with friends and loved ones, you may have been working too hard and need a time of relaxation to rejuvenate and refresh.'], 'src/swords_3.gif': ['Three of Swords', 'This could be a difficult time for you. Are you dwelling on old hurts? Maybe feeling resentment toward a person or situation in your past or present. The swords deal with thoughts and this card shows that your thoughts are somehow causing you sorrow. Try to face whatever feelings you are experiencing and let go with love, this time will soon pass and equilibrium will be restored.'], 'src/cups_2.gif': ['Two of Cups', 'Love and attraction, desire, the coming together of opposites. Magnetism.'], 'src/wands_2.gif': ['Two of Wands', 'Are you planning a creative endeavour? Developing your business or personal life? Perhaps you are thinking of inviting someone to help you with a project? This card would suggest that you go ahead and ask, the result will be favourable.'], 'src/swords_2.gif': ['Two of Swords', 'You may be having trouble facing your feelings around a situation or person, If this is the case, this card urges you to be honest with yourself. There is a need to get in touch with your feelings here. Take  time out to meditate and be still. This is not a time to make hasty decisions.'], 'src/discs_2.gif': ['Two of Discs', 'You might also be considering moving home? If so, this card showing up in your reading suggests that now would be a good time and the move will be a success.']}
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
    
        text_content[iter].innerHTML = `<h2 class='title-font' style='font-size: 20px;'>${content_list[image_list[random]][0]}</h2> ${content_list[image_list[random]][1]}`;
        
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