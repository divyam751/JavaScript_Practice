// Random Jokes Generator

let random = Math.floor(Math.random() * 100);

console.log(random);

Jokes = [
  "Scientists aatomon par kyun bharosa nahi karte? Kyunki woh sab kuch banate hain!",
  "Parallel lines mein itna kuch milta hai. Yeh afsos hai ki woh kabhi mil nahi sakte.",
  "Math kitab kyun dukhi thi? Kyunki usmein bahut saare samasyayein thi.",
  "Kya tumne astronaut ko dekha jo khofzadah tha? Usko bas thoda sa khali jagah chahiye tha.",
  "Maine apni biwi se kaha usne apni bhari hui aankhen kyun bana rakhi hain. Usko khud bhi hairani hui.",
  "Main ek kitab padh raha hoon anti-gravity ke baare mein. Use neeche rakhna namumkin hai!",
  "Ek snowman kaise ghumta hai? Ek 'icicle par sawar hokar.",
  "Kyun nahi ladte khaali hadiyaan ek doosre se? Kyunki unmein dum nahi hota.",
  "Maine apni biwi ko kaha ki woh zyada hi badha rahi hai. Usne khud ko palat diya.",
  "Chidiyon ko bay par udne kyun nahi dena chahiye? Kyunki tab woh bagel ho jayenge.",
  "Vaigyanik sidhiyon par kyun bharosa nahi karte? Kyunki woh hamesha kuch na kuch chaal mein hote hain.",
  "Kaise karte hain aap ek space party ki vyavastha? Aap 'planet' karte hain!",
  "Mujhe sirf 25 aksharon ki ABC yaad hai. Yeh yahin khatam ho jati hai.",
  "Kya aapne suna hai woh kaisi nadiyaan hain jo sahaye nahi deti? Woh shellfish hain.",
  "Maine kabhi apni aankhon se piano bajaya, lekin ab main apne haatho se bajata hoon.",
  "Bina daant wale bear ko kya kehte hain? Gummy bear!",
  "Main aapko ek nirmaan mazak suna sakta tha, lekin main abhi tak us par kaam kar raha hoon.",
  "Elsa ko baloon kyun nahi de sakte? Kyunki woh use jaane degi.",
  "Kya aapne suna hai ek taaj pehne machhli ka kya kehna hai? Raja fish.",
  "Squirrel kaise pakda jaata hai? Ek ped par chadh jaayein aur bhoole banke vyavhaar karein!",
  "Math kitab kyun dukhi thi? Kyunki usmein bahut saare samasyayein thi.",
  "Ek aankh ne doosri aankh se kaha, aap aur main, kuchh gandha sunai deta hai.",
  "Ek snowman aur ek vampire ka milan kya deta hai? Frostbite!",
  "Kaise karte hain aap ek space party ki vyavastha? Aap 'planet' karte hain!",
  "Ek snowman aur ek kutte ka milan kya deta hai? Frostbite!",
  "Cycle kyun gir gayi? Kyunki woh do-tired thi!",
  "Bina dum waale skeletons ek doosre se kyun nahi ladte? Kyunki unke pass guts nahi hote.",
  "Scarecrow ne award kyun jeeta? Kyunki woh apne kshetra mein mahaan tha!",
  "Tamatar kyun laal hua? Kyunki usne salad dressing dekha!",
  "Math kitab kyun dukhi thi? Kyunki usmein bahut saare samasyayein thi.",
  "Tissue ko kaise nachaya jaata hai? Usmein thoda sa boogie daal kar!",
  "Vaigyanik aatomon par kyun bharosa nahi karte? Kyunki woh sab kuch banate hain!",
  "Golfer ne kyun laye do paaiyon wale pant? Isliye taki usmein ek mein chhed na ho!",
  "Scarecrow ne award kyun jeeta? Kyunki woh apne kshetra mein mahaan tha!",
  "Kya brown aur sticky hota hai? Ek stick!",
  "Vaigyanik aatomon par kyun bharosa nahi karte? Kyunki woh sab kuch banate hain!",
  "Ek snowman kaise ghumta hai? Ek 'icicle par sawar hokar.",
  "Kya oysters ne charity ko donate nahi kiya? Kyunki woh shellfish hote hain.",
  "Ek wall ne doosri wall se kaha, hum kona par milte hain!",
  "Ek snowman aur ek kutte ka milan kya deta hai? Frostbite!",
  "Maine apni biwi ko kaha ki woh zyada hi badha rahi hai. Usne khud ko palat diya.",
  "Vaigyanik sidhiyon par kyun bharosa nahi karte? Kyunki woh hamesha kuch na kuch chaal mein hote hain.",
  "Scarecrow ne award kyun jeeta? Kyunki woh apne kshetra mein mahaan tha!",
  "Kya orange hota hai aur parrot ki tarah awaaz karta hai? Gajar!",
  "Parallel lines mein itna kuch milta hai. Yeh afsos hai ki woh kabhi mil nahi sakte.",
  "Cycle kyun gir gayi? Kyunki woh do-tired thi!",
  "Kya oysters ne charity ko donate nahi kiya? Kyunki woh shellfish hote hain.",
  "Bina daant wale bear ko kya kehte hain? Gummy bear!",
  "Main aapko ek nirmaan mazak suna sakta tha, lekin main abhi tak us par kaam kar raha hoon.",
  "Tamatar kyun laal hua? Kyunki usne salad dressing dekha!",
  "Elsa ko baloon kyun nahi de sakte? Kyunki woh use jaane degi.",
  "Kya fish jo ek taaj pehne hue hai, usko kya kehte hain? King fish.",
  "Math kitab kyun dukhi thi? Kyunki usmein bahut saare samasyayein thi.",
  "Tissue ko kaise nachaya jaata hai? Usmein thoda sa boogie daal kar!",
  "Maine apni biwi se kaha usne apni bhari hui aankhen kyun bana rakhi hain. Usko khud bhi hairani hui.",
  "Vaigyanik sidhiyon par kyun bharosa nahi karte? Kyunki woh hamesha kuch na kuch chaal mein hote hain.",
  "Chidiyon ko bay par udne kyun nahi dena chahiye? Kyunki tab woh bagel ho jayenge.",
  "Cycle kyun gir gayi? Kyunki woh do-tired thi!",
  "Ek wall ne doosri wall se kaha, hum kona par milte hain!",
  "Kya brown aur sticky hota hai? Ek stick!",
  "Vaigyanik aatomon par kyun bharosa nahi karte? Kyunki woh sab kuch banate hain!",
  "Parallel lines mein itna kuch milta hai. Yeh afsos hai ki woh kabhi mil nahi sakte.",
  "Kya orange hota hai aur parrot ki tarah awaaz karta hai? Gajar!",
  "Main ek kitab padh raha hoon anti-gravity ke baare mein. Use neeche rakhna namumkin hai!",
  "Ek snowman kaise ghumta hai? Ek 'icicle par sawar hokar.",
  "Tamatar kyun laal hua? Kyunki usne salad dressing dekha!",
  "Math kitab kyun dukhi thi? Kyunki usmein bahut saare samasyayein thi.",
  "Kya fish jo ek taaj pehne hue hai, usko kya kehte hain? King fish.",
  "Cycle kyun gir gayi? Kyunki woh do-tired thi!",
  "Maine apni biwi se kaha usne apni bhari hui aankhen kyun bana rakhi hain. Usko khud bhi hairani hui.",
  "Vaigyanik sidhiyon par kyun bharosa nahi karte? Kyunki woh hamesha kuch na kuch chaal mein hote hain.",
  "Scarecrow ne award kyun jeeta? Kyunki woh apne kshetra mein mahaan tha!",
  "Kya brown aur sticky hota hai? Ek stick!",
  "Tamatar kyun laal hua? Kyunki usne salad dressing dekha!",
  "Elsa ko baloon kyun nahi de sakte? Kyunki woh use jaane degi.",
  "Kya oysters ne charity ko donate nahi kiya? Kyunki woh shellfish hote hain.",
  "Ek wall ne doosri wall se kaha, hum kona par milte hain!",
  "Golfer ne kyun laye do paaiyon wale pant? Isliye taki usmein ek mein chhed na ho!",
  "Math kitab kyun dukhi thi? Kyunki usmein bahut saare samasyayein thi.",
  "Tissue ko kaise nachaya jaata hai? Usmein thoda sa boogie daal kar!",
  "Maine apni biwi se kaha usne apni bhari hui aankhen kyun bana rakhi hain. Usko khud bhi hairani hui.",
  "Vaigyanik sidhiyon par kyun bharosa nahi karte? Kyunki woh hamesha kuch na kuch chaal mein hote hain.",
  "Chidiyon ko bay par udne kyun nahi dena chahiye? Kyunki tab woh bagel ho jayenge.",
  "Cycle kyun gir gayi? Kyunki woh do-tired thi!",
  "Woh gappi dost kaun hai jo baar-baar puchte rehte hain? Aap, aur main, kuchh gandha sunai deta hai.",
  "Kya aapne suna hai ek batakh ne hotel mein room liya? Bina ek paise kharch kiye, woh apna bill khud hi bajata tha!",
  "Santa ne doctor se kaha, 'Mujhe aankhon mein dard ho raha hai.' Doctor ne kaha, 'Chasma pehno.' Santa ne poocha, 'Kaise chalega, kis tarah ka chasma pehna jaye?' Doctor ne bola, 'Chasma pehna ho ya pant, andar se pehno!'",
  "Woh kya hai jo haathi nahi, aur cycle bhi nahi? Cycle, kyonki cycle do teen bari hoti hai!",
  "Ek murghi ne doosri murghi se kaha, 'Tumne toh mere pati ko dekha hai, woh kitna sunder hai!' Doosri murghi boli, 'Maine nahi dekha, lekin mujhe suna hai woh egg-citing hai!'",
  "Do dost saath mein dikh rahe the, ek cycle par baithkar aur ek cycle ko thokte hue. Pehla dost bola, 'Arre yaar, tu cycle ko kyun maara?' Dusra dost bola, 'Woh dekh, usne mera horn bajaya tha, toh maine bhi uska bell baja diya!'",
  "Amit: Main ek acha singer ban gaya hoon. Pritam: Sach? Toh ek gaana ga kar sunao. Amit: 'Saare jahan se achha, Hindustan humara...' Pritam: Bas bas, theek hai, main samajh gaya, aap acting mein hi bane rahiye!",
  "Aadmi ne doctor se poocha, 'Doctor sahab, mujhe lagta hai main pagal ho raha hoon.' Doctor ne kaha, 'Kyun?' Aadmi ne jawab diya, 'Maine abhi tak aapko ek paise nahi diye!'",
  "Woh kya hai jo doosron ko sikha nahi sakta? Ghar ka pata!",
  "Teacher ne bachche se poocha, 'Batao, agar tumhare paas 5 aam hain aur tumne unme se 3 aam bech diye, toh tumhare paas kitne aam bachenge?' Bachcha bola, 'Mujhe toh samajh nahi aaya, lekin aapke paas 2 aam honge, madam!'",
  "Santa: Tumne kal raat mujhe sapna mein dekha? Banta: Haan, tum ek gadi mein baithkar bahut door gaye the. Santa: Wah, tumne mujhe pyaara sapna dikhaya! Banta: Nahi, sapna nahi, ola cab tha!",
  "Ladka: Kya tum mujhe apna naam bata sakti ho? Ladki: Main bina kapdo ke toh nahi, lekin naam toh Nidhi hai.",
  "Doctor ne patient se kaha, 'Aapke paas ek din ka hi samay hai.' Patient bola, 'Achha, toh kya aap mujhe kal mil sakte hain?'",
  "Pappu ne apne dost se poocha, 'Tumhe maloom hai, internet par har ek cheez search kar sakte hain?' Dost bola, 'Haan, maloom hai.' Pappu: 'Achha, toh phir aaj mere homework ke liye Google par search karke dikhao!'",
  "Woh kya hai jo ek jhool par baithkar baar-baar upar-niche hota hai? Maan, kyunki uske paas bachche hote hain!",
  "Jija: Saali, tum mere liye roti kaise banaogi? Saali: Simple, gas par rakhkar dekho. Jija: Arre yaar, maine tumse recipe maangi, cooking ki instructions nahi!",
  "Beti: Papa, kya aap mujhe apne office le ja sakte hain? Papa: Nahi, beta, tumhe toh school jaana chahiye. Beti: Arre papa, maine toh boss se poocha tha, woh bhi khush ho gaye the!",
];

console.log(Jokes[random]);
