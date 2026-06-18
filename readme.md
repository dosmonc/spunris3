# 🎧 SPUNRIS3 Website

Welcome to the Spunris3 website repository! This is your complete guide to managing and updating the site.

## 🚀 Quick Start

### Deploying to Netlify

1. **Create Netlify Account**: Go to [netlify.com](https://netlify.com) and sign up
2. **Connect Repository**: 
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git repository (GitHub/GitLab/Bitbucket)
3. **Deploy Settings**:
   - Build command: Leave empty
   - Publish directory: `.` (root)
4. **Add Custom Domain**:
   - Go to Domain Settings
   - Add `spunris3.com`
   - Follow DNS instructions from your domain registrar

## 📝 How to Update Events

### Adding a New Event

1. Open `js/events-data.js`
2. Copy an existing event object
3. Update the details:

```javascript
{
    id: 7, // Increment the ID
    title: "YOUR EVENT NAME",
    date: "2024-05-15", // YYYY-MM-DD format
    time: "10:00 PM",
    venue: "The Rabbit Hole",
    location: "Charlotte, NC",
    description: "Your event description here",
    lineup: ["DJ Name 1", "DJ Name 2", "DJ Name 3"],
    price: "$30",
    ticketLink: "https://your-ticket-link.com",
    image: "", // Add image path or leave empty
    status: "On Sale", // Options: "On Sale", "Sold Out", "Last Tickets"
    featured: false // Set to true for main featured event
}
