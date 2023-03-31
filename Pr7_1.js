function f1(s) {
    var info = document.getElementById('ta');
    var im = document.getElementById('img');
    if (s == "mumbai") {
        info.value = "Mumbai (formerly called Bombay) is a densely populated city on Indias west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.    ";
        im.src = "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai.jpg?imwidth=680";
    }
    else if (s == "delhi") {
        info.value = "Delhi, Indias capital territory, is a massive metropolitan area in the countrys north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.";
        im.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8K0IQfrwBFJ6iwnt9uNRmbnpBnGMrM3bm5g&usqp=CAU";
    }
    else {
        info.value = "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure.";
        im.src = "https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg"
    }
}