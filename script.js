export const motivationalQuotes = [
    { text: "You're doing amazing! Keep going! 🌟", emoji: "🌟" },
    { text: "Believe in yourself, you've got this! 💪", emoji: "💪" },
    { text: "Today is YOUR day to shine! ✨", emoji: "✨" },
    { text: "You are stronger than you think! 🦁", emoji: "🦁" },
    { text: "Every step forward is progress! 🚀", emoji: "🚀" },
    { text: "You make the world a better place! 🌈", emoji: "🌈" },
    { text: "Your potential is limitless! 🌌", emoji: "🌌" },
    { text: "Take a deep breath, you're awesome! 🌸", emoji: "🌸" },
    { text: "Small wins lead to big victories! 🏆", emoji: "🏆" },
    { text: "You're a superstar in the making! ⭐", emoji: "⭐" },
    { text: "Keep smiling, it suits you! 😊", emoji: "😊" },
    { text: "You inspire others more than you know! 💫", emoji: "💫" },
    { text: "Dream big, work hard, stay focused! 🎯", emoji: "🎯" },
    { text: "You are loved and appreciated! ❤️", emoji: "❤️" },
    { text: "The best is yet to come! 🌅", emoji: "🌅" },
    { text: "You're braver than you believe! 🦸", emoji: "🦸" },
    { text: "Today's effort is tomorrow's success! 🌱", emoji: "🌱" },
    { text: "You radiate positive energy! ☀️", emoji: "☀️" },
    { text: "Keep pushing, champions never quit! 🥇", emoji: "🥇" },
    { text: "You're making progress every day! 📈", emoji: "📈" },
    { text: "Embrace the journey, enjoy the ride! 🎢", emoji: "🎢" },
    { text: "Your hard work will pay off! 💎", emoji: "💎" },
    { text: "Stay positive, stay fighting! 🔥", emoji: "🔥" },
    { text: "You're one of a kind, unique! 🦋", emoji: "🦋" },
    { text: "Magic happens outside comfort zones! ✨", emoji: "✨" },
];


// Function to get only cheering quote
export function getRandomMotivational() {
    const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    document.getElementById('quote').textContent = quote.text;
    return quote;
}

// Initialize with random motivational quote on load
document.addEventListener('DOMContentLoaded', () => {
    getRandomMotivational();
});
