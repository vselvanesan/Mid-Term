// setup your IIFE (Immediately Invoked Function Expression)
(function () {
 "use strict";


// // YOUR CODE GOES HERE
// inject Introducton paragraph
        let introParagraph = document.getElementById("IntroParagraph");
        let myParagraph1 = "Now is the time to travel to Greece.The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting.Plus, there may be some great deals.Greece has 1, 400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser - known islands in Greece, too.";
        introParagraph.textContent = myParagraph1;

        // inject Folegandros paragraph
        let folegandrosParagraph = document.getElementById("Folegandros");
        let myParagraph2 = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";
        folegandrosParagraph.textContent = myParagraph2;
    
        // inject Alonissons paragraph
        let alonissosParagraph = document.getElementById("Alonissos");
        let myParagraph3 = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.";
        alonissosParagraph.textContent = myParagraph3;

        // inject Spetses paragraph
        let spetsesParagraph = document.getElementById("Spetses");
        let myParagraph4 = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";
        spetsesParagraph.textContent = myParagraph4;
        
        // inject Amorgos paragraph
        let amorgosParagraph = document.getElementById("Amorgos");
        let myParagraph5 = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.";
        amorgosParagraph.textContent = myParagraph5;

        // inject Syros paragraph
        let syrosParagraph = document.getElementById("Syros");
        let myParagraph6 = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";
        syrosParagraph.textContent = myParagraph6;

        // inject Milos paragraph
        let milosParagraph = document.getElementById("Milos");
        let myParagraph7 ="This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as 'the island of colours' it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.";
        milosParagraph.textContent = myParagraph7;

        // inject Hydra paragraph
        let hydraParagraph = document.getElementById("Hydra");
        let myParagraph8 = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.";
        hydraParagraph.textContent = myParagraph8;

        // inject Ithaca paragraph
        let ithacaParagraph = document.getElementById("Ithaca");
        let myParagraph9 = "Most famous for being the home of Odysseus, and a prominent figure in Homer's 'The Odyssey, 'Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.";
        ithacaParagraph.textContent = myParagraph9;

        // inject Govdos paragraph
        let gavdosParagraph = document.getElementById("Gavdos");
        let myParagraph10 = "Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.";
        gavdosParagraph.textContent = myParagraph10;

        // Creating a function which is print on console
    function OutputFormDataToConsole() {
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c First Name     : ${firstName.value}`, "color: blue;");
        console.log(`%c Last Name: ${lastName.value}`, "color: blue;");
        console.log(`%c Contact Number : ${contactNumber.value}`, "color: blue;");
        console.log(`%c Email : ${email.value}`, "color: blue;");    
        console.log(`%c Your Message  : ${yourMessage.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Length     : ${document.forms[0].length}`, "color: blue;");

         for (let index = 0; index < document.forms[0].length; index++) {
             console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: blue;");
        }

    }
                 
             
  // calling a funcion        
 let SendButton = document.getElementById("sendButton");
 SendButton.addEventListener("click", (event) => {
        OutputFormDataToConsole();  
 });


})();



