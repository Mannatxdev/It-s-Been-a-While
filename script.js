const startDate = new Date("2026-04-10T11:24:00");

function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff / 3600000) % 24);
    const minutes = Math.floor((diff / 60000) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const p = (n) => n.toString().padStart(2, '0');
    const pD = (n) => n.toString().padStart(4, '0');

    document.getElementById("time").innerText = 
        `${pD(days)}d ${p(hours)}h ${p(minutes)}m ${p(seconds)}s`;
}

setInterval(updateTime, 1000);
updateTime();

const thoughts = [
    "Stop being so likeable. It’s actually getting a bit annoying.",
    "I’d tell you you look cute today, but I don’t want it going to your head.",
    "You’re like a high-priority bug—I can’t seem to get you out of my head.",
    "I was going to be productive today, then I started thinking about you.",
    "You’re officially a distraction. I hope you’re happy.",
    "Are you always this charming, or am I just special?",
    "My favorite algorithm is just the one that leads me back to you.",
    "You’re the 'nice' in 'something nice'."
];

const btn = document.getElementById("btn");
const text = document.getElementById("compliment");

btn.addEventListener("click", () => {
    text.style.transition = "opacity 0.3s";
    text.style.opacity = 0;

    setTimeout(() => {
        const random = thoughts[Math.floor(Math.random() * thoughts.length)];
        text.innerText = `"${random}"`;
        text.style.opacity = 1;
    }, 300);
});