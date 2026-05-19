/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// ══════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════

const aboutData = {

  location: {
    title: "Location & Municipalities",
    content: `
      <p>
        Negros Oriental is located in the southeastern part of Negros Island
        in Central Visayas, Philippines. It is bordered by Negros Occidental
        to the northwest, the Visayan Sea to the east, and the Bohol Strait
        to the southeast.
      </p>

      <p>
        The province is composed of 19 municipalities and 6 cities:
      </p>

      <ul class="about-list">
        <li>Amlan</li>
        <li>Ayungon</li>
        <li>Bacong</li>
        <li>Basay</li>
        <li>Bindoy</li>
        <li>Dauin</li>
        <li>Jimalalud</li>
        <li>La Libertad</li>
        <li>Mabinay</li>
        <li>Manjuyod</li>
        <li>Pamplona</li>
        <li>San Jose</li>
        <li>Santa Catalina</li>
        <li>Siaton</li>
        <li>Sibulan</li>
        <li>Tanjay</li>
        <li>Tayasan</li>
        <li>Valencia</li>
        <li>Zamboanguita</li>
      </ul>

      <p>
        Its capital city is Dumaguete City, known as the “City of Gentle
        People,” famous for education, culture, and tourism.
      </p>
    `
  },

  history: {
    title: "History of Negros Oriental",
    content: `
      <p>
        The history of Negros Oriental reflects a rich blend of indigenous roots, colonial influences, and modern development. 
        Over the years, the province has evolved into a cultural and economic center in the Visayas while preserving its traditions and heritage.
      </p>

      <p>
        -- Early Inhabitants --
      </p>

      <p>
        >Before the arrival of foreign colonizers, Negros Island was inhabited by native groups who lived in coastal and mountainous areas. 
        Early communities relied on fishing, farming, and trade with neighboring islands. 
        Their simple way of life laid the foundation for the province’s cultural identity.
      </p>

      <p>
        -- Spanish Colonial Period --
      </p>
      <p>>During the Spanish era, Negros Island was divided into two provinces—Negros Oriental and Negros Occidental. 
      The Spanish introduced Christianity, built churches, and established towns that still exist today. 
      Many of the province’s historical landmarks, such as old churches and structures, date back to this period.
      </p>

      <p>-- American Period --</p>
      <p>>In the early 1900s, the Americans brought changes in education, government, and infrastructure. 
      One of the most important developments was the establishment of Silliman University in 1901, 
      which became a center for learning and cultural exchange in the region.
      </p>

      <p>-- World War II --</p>
      <p>>During World War II, Negros Oriental was occupied by Japanese forces. Local resistance groups played an important role in fighting for freedom. 
      The province later became part of the liberation efforts that restored peace and independence to the Philippines.
      </p>

      <p>-- Modern Development --</p>
      <p>>Today, Negros Oriental continues to grow as a center for education, tourism, and culture. 
      Dumaguete City has developed into a vibrant city while still maintaining its historical charm. 
      The province remains proud of its past while embracing progress and modernization.
      </p>
    `
  },

  culture: {
    title: "Culture & Traditions",
    content: `
      <p>
        The people of Negros Oriental are known for their warmth,
        hospitality, and peaceful way of life. Dumaguete City earned the
        nickname “City of Gentle People” because of the friendliness of its
        residents.
      </p>

      <p>
        Festivals are an important part of local culture. One of the most
        famous celebrations is the Buglasan Festival, often called the
        “Festival of Festivals,” where municipalities showcase their culture,
        dances, music, food, and products.
      </p>

      <p>
        Religion also plays a significant role in daily life. Many towns hold
        annual fiestas honoring patron saints, featuring parades, dances,
        traditional food, and community gatherings.
      </p>

      <p>Life in Negros Oriental is simple, peaceful, and community-oriented. 
      People value strong family ties, respect for elders, and hospitality toward visitors. 
      In cities like Dumaguete City, modern living blends with traditional practices, creating a balanced lifestyle. 
      Locals are known for their kindness, which is why Dumaguete is called the “City of Gentle People.”
      </p>

      <p>The main language spoken in the province is Cebuano, also known as Bisaya. 
      Filipino and English are widely understood, especially in schools, businesses, and tourist areas. 
      This makes communication easy for both local and international visitors.
      </p>

      <p>Negros Oriental has a growing arts scene, especially in Dumaguete City, which is home to artists, writers, and performers. 
      Cultural events, art exhibits, and local performances showcase the creativity of the people. 
      Institutions like Silliman University contribute to the development of arts and culture in the province.
      </p>

      <p>
        Traditional Visayan values such as respect, family unity, and bayanihan
        continue to shape the identity of the province today.
      </p>
    `
  },

  attractions: {
    title: "Top Attractions",
    content: `
      <ul class="about-list">
        <li><strong>Apo Island</strong> – Famous for diving and sea turtles</li>
        <li><strong>Manjuyod Sandbar</strong> – Known as the “Maldives of the Philippines”</li>
        <li><strong>Casaroro Falls</strong> – A breathtaking waterfall in Valencia</li>
        <li><strong>Twin Lakes of Balinsasayao</strong> – Scenic mountain lakes surrounded by forests</li>
        <li><strong>Mount Talinis</strong> – Popular hiking destination</li>
        <li><strong>Pulangbato Falls</strong> – Unique reddish-colored waterfalls</li>
      </ul>

      <p>
        Negros Oriental is a paradise for nature lovers, divers, hikers,
        photographers, and travelers seeking adventure and relaxation.
      </p>
    `
  },

  visit: {
    title: "Why Visit Negros Oriental?",
    content: `
      <p>
        Negros Oriental offers a perfect mix of natural beauty, culture,
        history, and adventure.
      </p>

      <p>
        Visitors can enjoy world-class diving, relaxing beaches, waterfalls,
        mountain adventures, local delicacies, and colorful festivals all in
        one province.
      </p>

      <p>
        Compared to other tourist destinations, travel expenses in Negros
        Oriental are also more affordable, making it ideal for students,
        backpackers, families, and foreign tourists.
      </p>

      <p>
        Most importantly, visitors experience the genuine hospitality and
        kindness of the people, making every trip memorable and welcoming.
      </p>
    `
  }

};

function openAboutModal(type) {

  document.getElementById("aboutModalTitle").innerHTML =
    aboutData[type].title;

  document.getElementById("aboutModalContent").innerHTML =
    aboutData[type].content;

  const modal = new bootstrap.Modal(
    document.getElementById("aboutModal")
  );

  modal.show();
}
 
const destinations = [
  {
    id: 1,
    name: "Apo Island",
    city: "Dauin",
    category: "Island",
    image: "image/apo_island.jpg",
    shortDesc: "World-famous marine sanctuary teeming with sea turtles and vibrant coral reefs.",
    fullDesc: "Apo Island is a small volcanic island and marine sanctuary located off the coast of Dauin. It is globally recognized for its thriving coral reef ecosystem and large population of hawksbill and green sea turtles. The island hosts one of the most successful community-based marine conservation programs in Southeast Asia.",
    fee: "₱200 (environmental fee)",
    hours: "5:00 AM – 5:00 PM",
    activities: ["Snorkeling", "Scuba Diving", "Island Hopping", "Swimming", "Turtle Watching"],
    bestTime: "March to June (dry season, calm waters)",
    tips: "Book a boat in advance from Dauin or Malatapay. Bring reef-safe sunscreen only. Respect the marine sanctuary rules and never touch the turtles."
  },
  {
    id: 2,
    name: "Manjuyod Sandbar",
    city: "Manjuyod",
    category: "Beach",
    image: "image/sandbar.jpg",
    shortDesc: "A 7-kilometer stretch of powdery white sand often called the 'Maldives of the Philippines.'",
    fullDesc: "Manjuyod Sandbar is a stunning stretch of white sand that emerges from the sea during low tide, stretching over 7 kilometers. The area is surrounded by crystal-clear turquoise waters and is home to a population of dolphins. Stilt cottages are available for overnight stays.",
    fee: "₱150 per person",
    hours: "Best visited at low tide",
    activities: ["Swimming", "Dolphin Watching", "Island Picnic", "Kayaking", "Photography"],
    bestTime: "January to May (dry season, sandbar is most prominent)",
    tips: "Check tide schedules before visiting. Arrive by early morning for the best experience. Bring your own food and water as facilities are limited."
  },
  {
    id: 3,
    name: "Casaroro Falls",
    city: "Valencia",
    category: "Waterfall",
    image: "image/casaroro_falls.jpg",
    shortDesc: "A dramatic 30-meter single-drop waterfall hidden deep within a lush jungle gorge.",
    fullDesc: "Casaroro Falls is one of the most impressive waterfalls in Negros Oriental, featuring a dramatic 30-meter plunge into a rocky pool. Reaching it requires a scenic trek through dense forest and crossing several streams, making it an adventure in itself.",
    fee: "₱30 entrance fee",
    hours: "6:00 AM – 5:00 PM",
    activities: ["Trekking", "Swimming", "Nature Photography", "Bird Watching"],
    bestTime: "October to May (rainy season makes it more dramatic but trickier to reach)",
    tips: "Wear water shoes or rubber sandals. Bring a waterproof bag for your devices. Hire a local guide for the best route and safety."
  },
  {
    id: 4,
    name: "Pulangbato Falls",
    city: "Valencia",
    category: "Waterfall",
    image: "image/pulangbato_falls.jpg",
    shortDesc: "Unique red-rock waterfall set amidst lush jungle, named for its distinct reddish boulders.",
    fullDesc: "Pulangbato Falls, meaning 'red stone falls,' gets its name from the distinctive reddish volcanic rocks that line its banks. The falls cascade over a series of tiered formations into cool natural pools, perfect for swimming. The red mineral deposits create a uniquely colorful landscape.",
    fee: "₱25 entrance fee",
    hours: "7:00 AM – 5:00 PM",
    activities: ["Swimming", "Photography", "Nature Walk", "Relaxation"],
    bestTime: "Year-round, but best in dry season (March-May)",
    tips: "Often visited in tandem with Casaroro Falls. Bring extra clothes and a dry bag. The area has small local restaurants nearby."
  },
  {
    id: 5,
    name: "Mount Talinis",
    city: "Valencia / Sibulan",
    category: "Mountain",
    image: "image/mount_talinis.png",
    shortDesc: "The highest peak in Negros Oriental at 1,903m, featuring crater lakes and rich biodiversity.",
    fullDesc: "Mount Talinis, also called Cuernos de Negros, is a dormant stratovolcano and the highest peak in Negros Oriental at 1,903 meters. The mountain features several crater lakes, dense primary forest, and is home to rare endemic species. Multiple trails of varying difficulty offer trekking adventures.",
    fee: "₱250 (permit + guide fee)",
    hours: "Day hike starts at 5:00 AM",
    activities: ["Mountaineering", "Camping", "Birdwatching", "Photography", "Crater Lake Visit"],
    bestTime: "November to May (dry season for clearer trails)",
    tips: "Register with the DENR office before ascending. A licensed guide is mandatory. Pack light but bring enough water (minimum 3L). The summit can be very cold — bring a jacket."
  },
  {
    id: 6,
    name: "Twin Lakes (Balinsasayao & Danao)",
    city: "San Jose",
    category: "Adventure",
    image: "image/twin_lakes.jpg",
    shortDesc: "Two stunning volcanic crater lakes nestled side-by-side within a pristine rainforest sanctuary.",
    fullDesc: "The Twin Lakes Natural Park encompasses two beautiful crater lakes, Balinsasayao and Danao, separated by a narrow isthmus. Surrounded by lush tropical forest, the lakes teem with endemic wildlife including rare waterbirds. The area offers kayaking, trekking, and community-based tourism activities.",
    fee: "₱100 per person",
    hours: "7:00 AM – 5:00 PM",
    activities: ["Kayaking", "Bird Watching", "Trekking", "Photography", "Picnicking"],
    bestTime: "Year-round; October–February for birdwatching",
    tips: "Kayaks are available for rent on-site. Bring insect repellent. The road to the lakes requires a sturdy vehicle — consider hiring a habal-habal motorcycle from the main road."
  },
  {
    id: 7,
    name: "Rizal Boulevard",
    city: "Dumaguete City",
    category: "Historical Site",
    image: "image/rizal.jpg",
    shortDesc: "Dumaguete's iconic heritage promenade stretching along the sea wall, lined with century-old trees.",
    fullDesc: "Rizal Boulevard is the heart and soul of Dumaguete City — a scenic promenade that stretches along the waterfront, lined with acacia trees, benches, restaurants, and cafes. Named after the Philippine national hero Jose Rizal, it's the perfect place to watch the sunset and experience local city life.",
    fee: "Free",
    hours: "Open 24 hours",
    activities: ["Sightseeing", "Dining", "Evening Stroll", "Photography", "People Watching"],
    bestTime: "4:00 PM – 7:00 PM for the golden-hour sunset",
    tips: "Visit nearby Silliman University and the Bell Tower. Try the famous silvanas dessert at local shops. Evenings are most lively on weekends."
  },
  {
    id: 8,
    name: "Bais Dolphin Watching",
    city: "Bais City",
    category: "Adventure",
    image: "image/bais_dolphin.jpg",
    shortDesc: "One of the Philippines' best dolphin and whale watching sites in Tañon Strait.",
    fullDesc: "Bais City is renowned for its dolphin and whale watching tours in the Tañon Strait, a protected seascape. Spinner dolphins and occasionally sperm whales can be spotted here. Tours also include a visit to Manjuyod Sandbar, making for a complete sea adventure.",
    fee: "₱1,800–2,500 per boat tour",
    hours: "5:00 AM – 11:00 AM (best window)",
    activities: ["Dolphin Watching", "Whale Watching", "Snorkeling", "Sandbar Visit"],
    bestTime: "March to June (calmest seas and most dolphin activity)",
    tips: "Book early morning tours for the best chance to spot dolphins. Bring a hat, sunscreen, and motion-sickness medicine if needed. Most tours combine dolphin watching with Manjuyod Sandbar."
  },
  {
    id: 9,
    name: "Silliman University",
    city: "Dumaguete City",
    category: "Historical Site",
    image: "image/silliman_university.jpg",
    shortDesc: "The first American university in Asia, a beautiful campus rich in history, culture, and architecture.",
    fullDesc: "Founded in 1901, Silliman University is the oldest American university in Asia and one of the Philippines' most prestigious institutions. Its sprawling campus features beautiful colonial architecture, a marine laboratory, an anthropological museum, and lush grounds that double as a birdwatching destination.",
    fee: "Free to visit",
    hours: "Campus open 6:00 AM – 10:00 PM",
    activities: ["Historical Tour", "Museum Visit", "Bird Watching", "Photography"],
    bestTime: "Year-round; Founders Day (August) features special events",
    tips: "Visit the Silliman University Anthropology Museum for a deep dive into Visayan culture. The marine laboratory offers guided tours. Cafes on campus serve excellent local food."
  },
  {
    id: 10,
    name: "Cansi House Dumaguete",
    city: "Dumaguete City",
    category: "Food Destination",
    image: "image/cansi_house.png",
    shortDesc: "A comforting beef soup dish made with rich marrow bones and sour broth, a local favorite in Negros Oriental.",
    fullDesc: "Cansi is a famous Negrense dish combining the richness of bulalo and the sourness of sinigang. It is slow-cooked to perfection and best enjoyed hot with rice.",
    fee: "₱120–₱180 per bowl",
    hours: "10:00 AM – 9:00 PM",
    activities: ["Eating", "Food Tasting", "Cultural Experience"],
    bestTime: "All day",
    tips: "Best eaten hot and fresh. Pair with rice or local chili sauce."
  }
];
 
const festivals = [
  {
    name: "Buglasan Festival",
    location: "Dumaguete City",
    month: "October",
    image: "image/festival_buglasan.jpg",
    desc: "Known as the 'Festival of Festivals,' Buglasan brings together all 32 municipalities of Negros Oriental for a grand week-long celebration of culture, arts, and sports. Highlights include street dancing, a trade fair, and cultural shows."
  },
  {
    name: "Sandurot Festival",
    location: "Dumaguete City",
    month: "November",
    image: "image/festival_sandurot.jpg",
    desc: "Sandurot celebrates the friendship between the early Malay settlers and the native Negrenses. The word means 'togetherness' in the local dialect. The festival features street dancing, reenactments, and cultural programs along the boulevard."
  },
  {
    name: "Pintaflores Festival",
    location: "San Carlos City",
    month: "November",
    image: "image/festival_pintaflores.jpg",
    desc: "Pintaflores is one of the most visually stunning festivals in Negros Oriental. Performers are elaborately painted with floral designs in honor of Santa Clara. The colorful street performances attract thousands of visitors."
  },
  {
    name: "Tawo-Tawo Festival",
    location: "Bayawan City",
    month: "January",
    image: "image/festival_tawo_tawo.jpg",
    desc: "The Tawo-Tawo Festival honors the farming and fishing communities of Bayawan. Scarecrow-like figures ('tawo-tawo') are artistically decorated and displayed throughout the city, symbolizing gratitude for a bountiful harvest."
  }
];
 
const foods = [
  {
    name: "Silvanas",
    image: "image/silvanas.jpg",
    desc: "Dumaguete's most beloved pasalubong — a frozen cashew meringue wafer sandwich with buttercream filling, lightly coated in cookie crumbs. Sweet, creamy, and utterly irresistible.",
    where: "Sans Rival Cakes & Pastries, Dumaguete"
  },
  {
    name: "Budbud Kabog",
    image: "image/budbud.jpg",
    desc: "A traditional rice cake made from millet ('kabog') wrapped in banana leaves. Served with a thick hot cocoa drink, it is the quintessential breakfast or merienda experience in Negros Oriental.",
    where: "Public markets, Siaton and Bais City"
  },
  {
    name: "Cansi",
    image: "image/cansi.jpg",
    desc: "A signature Ilonggo-Visayan beef soup dish popular in Negros Oriental, combining the rich flavors of bulalo and sinigang. It features tender beef shanks and bone marrow simmered in a sour broth made with batuan or calamansi, creating a comforting and flavorful soup.",
    where: "Local carinderias and restaurants in Dumaguete City and Negros Oriental"
  },
  {
    name: "Baye-Baye",
    image: "image/baye-baye.png",
    desc: "A sweet sticky rice cake made from young coconut shavings mixed with toasted rice and coconut milk, shaped into cylinders. A popular pasalubong especially in the Mabinay and Bayawan areas.",
    where: "Mabinay market stalls, roadside vendors"
  },
  {
    name: "Panara",
    image: "image/panara.jpg",
    desc: "A popular local snack in Negros Oriental, Panara is a deep-fried turnover filled with savory mung bean (monggo) paste. It has a crispy golden crust and a slightly sweet-salty filling, often enjoyed as an afternoon merienda or street food snack.",
    where: "Local bakeries and street food stalls in Dumaguete City and nearby municipalities"
  },
  {
    name: "Suman",
    image: "image/suman.jpg",
    desc: "Sticky rice cooked in coconut milk and wrapped in banana leaves or buri palm, suman is a traditional Filipino kakanin with a soft, chewy texture. In Negros Oriental it is often paired with ripe mangoes.",
    where: "Public markets and local bakeries throughout the province"
  }
];
 
const galleryImages = [
  { src: "image/negros.jpg", caption: "Pristine coastline of Negros Oriental" },
  { src: "image/apo_island.jpg", caption: "Apo Island crystal waters" },
  { src: "image/sandbar.jpg", caption: "Manjuyod Sandbar at low tide" },
  { src: "image/casaroro_falls.jpg", caption: "Casaroro Falls" },
  { src: "image/nailig_lake.jpg", caption: "Tropical rainforest" },
  { src: "image/twin_lakes.jpg", caption: "Twin Lakes Nature Park" },
  { src: "image/negros_1.jpg", caption: "Mountain peaks of Negros" },
  { src: "image/festival_buglasan.jpg", caption: "Buglasan Festival celebration" },
  { src: "image/street_dancing.jpg", caption: "Street dancing festival" },
  { src: "image/festival_pintaflores.jpg", caption: "Pintaflores Festival performers" },
  { src: "image/bais_flying.jpg", caption: "Dolphin watching in Tañon Strait" },
  { src: "image/sunset.jpg", caption: "Rizal Boulevard sunset" },
  { src: "image/silliman_university.jpg", caption: "Silliman University historic campus" },
  { src: "image/silvanas.jpg", caption: "Local delicacies — Silvanas" },
  { src: "image/budbud.jpg", caption: "Budbud Kabog — traditional rice cake" },
  { src: "image/cansi.jpg", caption: "Cansi — Ilonggo - Visayan beef soup" },
  { src: "image/coral.jpg", caption: "Coral reefs of Apo Island" },
  { src: "image/hopping.jpg", caption: "Tropical beach paradise" },
  { src: "image/turtle.jpg", caption: "Turquoise waters at low tide" },
  { src: "image/niludhan_falls.jpg", caption: "Waterfall trekking adventure" },
  { src: "image/mount_talinis.png", caption: "Scenic mountain views" },
  { src: "image/kayaking.jpg", caption: "Kayaking in Twin Lakes" },
  { src: "image/pulangbato_falls.jpg", caption: "Pulangbato red rock falls" },
  { src: "image/culture_dance.png", caption: "Cultural street performance" },
  { src: "image/rizal.jpg", caption: "Dumaguete City waterfront" },
  { src: "image/panara.jpg", caption: "Local snack in Negros Oriental - Panara" },
  { src: "image/festival_tawo_tawo.jpg", caption: "Tawo-Tawo Festival harvest art" },
  { src: "image/baye-baye.png", caption: "Baye-baye sweet rice cake" },
  { src: "image/suman.jpg", caption: "Suman — traditional kakanin" },
  { src: "image/bais_dolphin.jpg", caption: "Marine wildlife of Tañon Strait" }
];
 
const travelTips = [
  {
    icon: "bi-calendar3",
    title: "Best Time to Visit",
    tip: "The dry season from November to May offers the best weather. December to February is the coolest and most comfortable, while March to May is the hottest but great for beach activities. Avoid typhoon season (June–October) for outdoor adventures."
  },
  {
    icon: "bi-bus-front",
    title: "Getting Around",
    tip: "Rent a motorcycle (habal-habal) for remote destinations. Jeepneys and multicabs operate between towns. V-hire (van-for-hire) routes connect major cities. Tricycles are the go-to within Dumaguete. Rent a private car for more flexibility."
  },
  {
    icon: "bi-shield-check",
    title: "Safety Tips",
    tip: "Keep valuables secure and avoid isolated areas at night. Always inform your accommodation of your itinerary. Register with the DENR or LGU before hiking. Check sea conditions before boat trips and always wear a life vest."
  },
  {
    icon: "bi-airplane",
    title: "How to Get There",
    tip: "Fly into Dumaguete-Sibulan Airport from Manila, Cebu, or other major hubs. Alternatively, take a ferry from Cebu (Pier 1) to Dumaguete, or from Bohol (Tagbilaran) via fast craft — a scenic 1–2 hour ride."
  },
  {
    icon: "bi-cash-coin",
    title: "Budget & Currency",
    tip: "Negros Oriental is very budget-friendly. Most attractions cost under ₱200. ATMs are plentiful in Dumaguete but scarce in remote areas — carry cash. Typical daily budget: ₱1,500–3,000 including food, transport, and entrance fees."
  },
  {
    icon: "bi-camera",
    title: "Photography & Etiquette",
    tip: "Always ask permission before photographing locals, especially during festivals. Respect marine sanctuary rules — no touching coral or wildlife. Dress modestly when visiting churches and cultural sites. Remove shoes when entering homes or some heritage buildings."
  }
];
 
 
// ══════════════════════════════════════════════
//  RENDER DESTINATIONS
// ══════════════════════════════════════════════
 
let currentFilter = 'all';
let currentSearch = '';
 
function renderDestinations() {
  const grid = document.getElementById('destGrid');
  if (!grid) return;
  const noResults = document.getElementById('no-results');
  let filtered = destinations.filter(d => {
    const matchFilter = currentFilter === 'all' || d.category === currentFilter;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q || d.name.toLowerCase().includes(q) || d.city.toLowerCase().includes(q) || d.category.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });
 
  grid.innerHTML = '';
  if (filtered.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    filtered.forEach(d => {
      grid.innerHTML += `
        <div class="col-lg-4 col-md-6">
          <div class="dest-card">
            <div class="dest-card-img-wrap">
              <img src="${d.image}" alt="${d.name}" loading="lazy">
              <div class="dest-cat-badge">${d.category}</div>
            </div>
            <div class="dest-card-body">
              <h5>${d.name}</h5>
              <div class="location-text"><i class="bi bi-geo-alt me-1"></i>${d.city}</div>
              <p>${d.shortDesc}</p>
              <div class="dest-meta">
                <span><i class="bi bi-clock"></i> ${d.hours.split('–')[0]}...</span>
                <span><i class="bi bi-currency-exchange"></i> ${d.fee.split('(')[0].trim()}</span>
              </div>
              <button class="btn-view-details" onclick="openDestModal(${d.id})">
                <i class="bi bi-arrow-right-circle me-2"></i>View Details
              </button>
            </div>
          </div>
        </div>`;
    });
  }
}
 
function setFilter(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDestinations();
}
 
function filterDestinations() {
  currentSearch = document.getElementById('searchInput').value;
  renderDestinations();
}
 
function openDestModal(id) {
  const d = destinations.find(x => x.id === id);
  if (!d) return;
  document.getElementById('modalTitle').textContent = d.name;
  document.getElementById('modalImg').src = d.image;
  document.getElementById('modalImg').alt = d.name;
  document.getElementById('modalLocation').textContent = d.city;
  document.getElementById('modalCategory').textContent = d.category;
  document.getElementById('modalFee').textContent = d.fee;
  document.getElementById('modalHours').textContent = d.hours;
  document.getElementById('modalDesc').textContent = d.fullDesc;
  document.getElementById('modalBestTime').textContent = d.bestTime;
  document.getElementById('modalTips').textContent = d.tips;
  const acts = document.getElementById('modalActivities');
  acts.innerHTML = d.activities.map(a => `<span class="activity-tag">${a}</span>`).join('');
  new bootstrap.Modal(document.getElementById('destModal')).show();
}
 
 
// ══════════════════════════════════════════════
//  RENDER FESTIVALS
// ══════════════════════════════════════════════
 
function renderFestivals() {
  const grid = document.getElementById('festGrid');
  if (!grid) return;
  festivals.forEach(f => {
    grid.innerHTML += `
      <div class="col-lg-3 col-md-6">
        <div class="festival-card">
          <img src="${f.image}" alt="${f.name}" class="festival-card-img" loading="lazy">
          <div class="festival-card-body">
            <span class="festival-month-badge">${f.month}</span>
            <h4>${f.name}</h4>
            <div class="loc"><i class="bi bi-geo-alt"></i>${f.location}</div>
            <p>${f.desc}</p>
          </div>
        </div>
      </div>`;
  });
}
 
 
// ══════════════════════════════════════════════
//  RENDER FOOD
// ══════════════════════════════════════════════
 
function renderFood() {
  const grid = document.getElementById('foodGrid');
  if (!grid) return;
  foods.forEach(f => {
    grid.innerHTML += `
      <div class="col-lg-4 col-md-6">
        <div class="food-card">
          <img src="${f.image}" alt="${f.name}" loading="lazy">
          <div class="food-card-body">
            <h5>${f.name}</h5>
            <p>${f.desc}</p>
            <div class="food-where"><i class="bi bi-shop me-1"></i>${f.where}</div>
          </div>
        </div>
      </div>`;
  });
}
 
 
// ══════════════════════════════════════════════
//  RENDER GALLERY + LIGHTBOX
// ══════════════════════════════════════════════
 
let lightboxIndex = 0;
 
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  galleryImages.forEach((img, i) => {
    grid.innerHTML += `
      <div class="gallery-item" onclick="openLightbox(${i})">
        <img src="${img.src}" alt="${img.caption}" loading="lazy">
        <div class="gallery-overlay"><div class="zoom-icon"><i class="bi bi-zoom-in"></i></div></div>
      </div>`;
  });
}
 
function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
 
function updateLightbox() {
  const img = galleryImages[lightboxIndex];
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxCaption').textContent = img.caption;
}
 
function changeLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryImages.length) % galleryImages.length;
  updateLightbox();
}
 
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
 
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  if (!lb.classList.contains('active')) return;
  if (e.key === 'ArrowRight') changeLightbox(1);
  if (e.key === 'ArrowLeft') changeLightbox(-1);
  if (e.key === 'Escape') closeLightbox();
});
 
const lightboxEl = document.getElementById('lightbox');
if (lightboxEl) {
  lightboxEl.addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });
}
 
 
// ══════════════════════════════════════════════
//  RENDER TIPS
// ══════════════════════════════════════════════
 
function renderTips() {
  const grid = document.getElementById('tipsGrid');
  if (!grid) return;
  travelTips.forEach((t, i) => {
    grid.innerHTML += `
      <div class="col-lg-4 col-md-6">
        <div class="tip-card">
          <div class="tip-num">${String(i+1).padStart(2,'0')}</div>
          <div class="tip-icon-wrap"><i class="bi ${t.icon}"></i></div>
          <h5>${t.title}</h5>
          <p>${t.tip}</p>
        </div>
      </div>`;
  });
}
 
 
// ══════════════════════════════════════════════
//  POPULATE FORM DESTINATION SELECT
// ══════════════════════════════════════════════
 
function populateDestSelect() {
  const sel = document.getElementById('destination');
  if (!sel) return;
  destinations.forEach(d => {
    sel.innerHTML += `<option value="${d.name}">${d.name}</option>`;
  });
}
 
 
// ══════════════════════════════════════════════
//  FORM VALIDATION
// ══════════════════════════════════════════════
 
function showErr(id, errId, msg) {
  document.getElementById(id).classList.add('is-invalid');
  document.getElementById(errId).textContent = msg;
}
function clearErr(id) {
  document.getElementById(id).classList.remove('is-invalid');
}
 
const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const fields = ['fullName', 'email', 'contact', 'destination', 'travelDate', 'visitors', 'message'];
    fields.forEach(f => clearErr(f));
 
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const dest = document.getElementById('destination').value;
    const date = document.getElementById('travelDate').value;
    const visitors = parseInt(document.getElementById('visitors').value);
    const msg = document.getElementById('message').value.trim();
 
    if (!name) { showErr('fullName','nameErr','Full name is required.'); valid=false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showErr('email','emailErr','A valid email address is required.'); valid=false; }
    if (!contact || !/^\d+$/.test(contact.replace(/[\s\-\+\(\)]/g,''))) { showErr('contact','contactErr','Contact number must contain numbers only.'); valid=false; }
    if (!dest) { showErr('destination','destErr','Please select a destination.'); valid=false; }
    if (!date) { showErr('travelDate','dateErr','Travel date is required.'); valid=false; }
    if (!visitors || visitors < 1) { showErr('visitors','visitorsErr','Must have at least 1 visitor.'); valid=false; }
    if (!msg) { showErr('message','msgErr','Please include a message.'); valid=false; }
 
    if (valid) {
      document.getElementById('inquiryForm').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    }
  });
}
 
 
// ══════════════════════════════════════════════
//  NAVBAR SHRINK + BACK TO TOP
// ══════════════════════════════════════════════
 
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    if (window.scrollY > 60) nav.classList.add('navbar-shrink');
    else nav.classList.remove('navbar-shrink');
  }
 
  const btn = document.getElementById('back-to-top');
  if (btn) {
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }
});
 
 
// ══════════════════════════════════════════════
//  SCROLL ANIMATIONS
// ══════════════════════════════════════════════
 
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
 
document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
 
 
// ══════════════════════════════════════════════
//  INIT — only render what's on the current page
// ══════════════════════════════════════════════
 
renderDestinations();
renderFestivals();
renderFood();
renderGallery();
renderTips();
populateDestSelect();
 