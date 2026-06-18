/* ============================================
   SPUNRIS3 - EVENTS DATA
   
   📝 HOW TO UPDATE EVENTS:
   1. Copy an existing event object
   2. Change the details (date, title, venue, etc.)
   3. Set "featured: true" for main event
   4. Past events automatically hide when date passes
   
   💡 TIP: Keep dates in YYYY-MM-DD format!
============================================ */

const eventsData = [
    // FEATURED EVENT (Only one should be featured:true)
    {
        id: 1,
        title: "BASS AWAKENING - TBD",
        date: "2025-12-01",
        time: "TBD",
        venue: "TBD",
        location: "Charlotte, NC",
        description: "The biggest bass music event Before the end of the year featuring world-class DJs and mind-bending production.",
        lineup: ["TBD"],
        price: "TBD",
        ticketLink: "Coming Soon",
        image: "images/events/event-promo-1.jpg", // Leave empty for placeholder
        status: "Coming Soon", // "On Sale", "Sold Out", "Last Tickets"
        featured: true
    },
    
    // UPCOMING EVENTS
    {
        id: 2,
        title: "NEON NIGHTS",
        date: "2024-03-22",
        time: "9:00 PM",
        venue: "The Rabbit Hole",
        location: "Charlotte, NC",
        description: "A journey through house and techno with Charlotte's finest.",
        lineup: ["Charlotte Local", "DJ Mystik", "Sound Wave"],
        price: "$25",
        ticketLink: "https://tickets.example.com",
        image: "",
        status: "On Sale",
        featured: false
    },
    {
        id: 3,
        title: "TRANCE NATION",
        date: "2024-04-05",
        time: "10:00 PM",
        venue: "The Rabbit Hole",
        location: "Charlotte, NC",
        description: "Uplifting trance vibes all night long.",
        lineup: ["Armin van Buuren", "Above & Beyond", "Ferry Corsten"],
        price: "$40",
        ticketLink: "https://tickets.example.com",
        image: "",
        status: "Last Tickets",
        featured: false
    },
    {
        id: 4,
        title: "UNDERGROUND SESSIONS",
        date: "2024-04-12",
        time: "11:00 PM",
        venue: "Secret Location",
        location: "Charlotte, NC",
        description: "An intimate underground experience. Location revealed 24h before.",
        lineup: ["TBA"],
        price: "$20",
        ticketLink: "https://tickets.example.com",
        image: "",
        status: "On Sale",
        featured: false
    },
    
    // PAST EVENTS (These will automatically go to past events section)
    {
        id: 5,
        title: "NEW YEAR'S EVE RAVE",
        date: "2023-12-31",
        time: "9:00 PM",
        venue: "The Rabbit Hole",
        location: "Charlotte, NC",
        description: "We brought in 2024 with the biggest party of the year!",
        lineup: ["Excision", "Illenium", "Rezz"],
        price: "$50",
        ticketLink: "",
        image: "",
        status: "Sold Out",
        featured: false
    },
    {
        id: 6,
        title: "HALLOWEEN HAUNT",
        date: "2023-10-31",
        time: "10:00 PM",
        venue: "The Rabbit Hole",
        location: "Charlotte, NC",
        description: "The spookiest rave of the year with costume contest!",
        lineup: ["Zomboy", "Ghastly", "Riot Ten"],
        price: "$30",
        ticketLink: "",
        image: "",
        status: "Sold Out",
        featured: false
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = eventsData;
}