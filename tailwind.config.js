/** @type {import('tailwindcss').Config} */




module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('https://opengameart.org/sites/default/files/card%20back%20black.png')",
        'ace': "url('https://images.fineartamerica.com/images/artworkimages/medium/3/cool-gold-ace-playing-cards-single-ace-of-spades-noirty-designs-transparent.png')",
        'joker' : "url('https://upload.wikimedia.org/wikipedia/commons/2/23/The_Jolly_Nero.jpg')",
        "ace-king" : "url(https://cdn.shopify.com/s/files/1/0039/3091/4885/products/ks2.jpg?v=1661168336)"
      },

    },
  },
}
