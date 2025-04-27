const navLinks = document.querySelectorAll('.sidebar-links a');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('href').substring(1);
        
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
            }
        });

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

const robots = [
    {
        id: 1,
        name: "GoldNexus Elite",
        description: "A specialized robot for gold trading with unmatched precision.",
        price: "599.99",
        details: "GoldNexus Elite is designed for gold trading on MT4/MT5 platforms. It uses advanced AI to achieve a 92% win rate, making it ideal for volatile markets.",
        image: "goldnexuselite.png"
    },
    {
        id: 2,
        name: "Crypto Trader",
        description: "Trade cryptocurrencies with confidence and high accuracy.",
        price: "649.99",
        details: "Crypto Trader focuses on cryptocurrency markets, offering a 90% win rate on MT4/MT5. Perfect for Bitcoin, Ethereum, and altcoin trading.",
        image: "cryptotrader.png"
    },
    {
        id: 3,
        name: "VortexFX-Navigator",
        description: "Navigate forex markets with this powerful trading bot.",
        price: "520.00",
        details: "VortexFX-Navigator provides robust forex trading strategies on MT4/MT5. With an 88% win rate, it’s great for major currency pairs.",
        image: "vortexfx-navigator.png"
    },
    {
        id: 4,
        name: "Nabula Trader",
        description: "A futuristic trader for all market conditions.",
        price: "679.99",
        details: "Nabula Trader uses cutting-edge AI to trade across various markets on MT4/MT5. Achieves an 87% win rate, suitable for all traders.",
        image: "nabulatrader.png"
    },
    {
        id: 5,
        name: "CentinelAI Trader",
        description: "AI-driven trading for consistent profits.",
        price: "699.99",
        details: "CentinelAI Trader leverages AI for smart trading decisions on MT4/MT5. Offers an 86% win rate, ideal for long-term profitability.",
        image: "centinelaitrader.png"
    },
    {
        id: 6,
        name: "AlphaPulse X1",
        description: "Pulse through the markets with this advanced bot.",
        price: "510.00",
        details: "AlphaPulse X1 is optimized for high-frequency trading on MT4/MT5. With an 85% win rate, it’s perfect for scalping strategies.",
        image: "alphapulsex1.png"
    },
    {
        id: 7,
        name: "TurboPipMaster V2",
        description: "Master the pips with turbo speed and accuracy.",
        price: "729.99",
        details: "TurboPipMaster V2 excels in pip-based trading on MT4/MT5. Achieves an 89% win rate, designed for fast-paced forex markets.",
        image: "turbopipmasterv2.png"
    },
    {
        id: 8,
        name: "ForexPhoenix 300",
        description: "Rise from the ashes with this forex trading bot.",
        price: "749.99",
        details: "ForexPhoenix 300 offers robust forex trading on MT4/MT5. With a 90% win rate, it’s ideal for both beginners and experts.",
        image: "forexphoenix300.png"
    },
    {
        id: 9,
        name: "QuantumTrades Pro",
        description: "Trade with quantum precision and efficiency.",
        price: "500.00",
        details: "QuantumTrades Pro uses quantum-inspired algorithms for trading on MT4/MT5. Offers an 91% win rate, perfect for advanced traders.",
        image: "quantumtradespro.png"
    }
];

const robotsPerPage = 3;
const totalPages = Math.ceil(robots.length / robotsPerPage);
let currentPage = 1;

const robotGrid = document.getElementById('robot-grid');
const firstBtn = document.getElementById('first-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const lastBtn = document.getElementById('last-btn');
const pageInfo = document.getElementById('page-info');

function renderRobots() {
    console.log('Rendering robots...');
    console.log('Current Page:', currentPage);
    console.log('Total Pages:', totalPages);
    console.log('Robots Array Length:', robots.length);

    const start = (currentPage - 1) * robotsPerPage;
    const end = start + robotsPerPage;
    const currentRobots = robots.slice(start, end);

    console.log('Current Robots:', currentRobots);

    if (!robotGrid) {
        console.error('robot-grid element not found in the DOM');
        return;
    }

    robotGrid.innerHTML = '';
    currentRobots.forEach(robot => {
        console.log('Attempting to load image:', robot.image);
        const robotDiv = document.createElement('div');
        robotDiv.classList.add('robot-item');
        robotDiv.innerHTML = `
            <img src="${robot.image}" alt="${robot.name}" onerror="console.error('Failed to load image: ${robot.image}'); this.src='default-robot.png';">
            <h3>${robot.name}</h3>
            <p>${robot.description}</p>
            <p class="price">$${robot.price}</p>
            <button class="details-button" onclick="toggleDetails(${robot.id})">More Details</button>
            <div id="details-${robot.id}" class="details">
                <p>${robot.details}</p>
                <a href="payment.html?robot=${encodeURIComponent(robot.name)}" class="buy-now">Buy Now</a>
            </div>
        `;
        robotGrid.appendChild(robotDiv);
    });

    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    firstBtn.textContent = "First Page";
    prevBtn.textContent = "Previous";
    nextBtn.textContent = "Next";
    lastBtn.textContent = "Last Page";
    firstBtn.disabled = currentPage === 1;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    lastBtn.disabled = currentPage === totalPages;
}

function toggleDetails(id) {
    const details = document.getElementById(`details-${id}`);
    if (details) {
        details.classList.toggle('active');
    } else {
        console.error(`Details element with id details-${id} not found`);
    }
}

function toggleBotDetails(botId) {
    const details = document.getElementById(`details-${botId}`);
    if (details) {
        details.classList.toggle('active');
    } else {
        console.error(`Details element with id details-${botId} not found`);
    }
}

firstBtn.addEventListener('click', () => {
    currentPage = 1;
    renderRobots();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderRobots();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderRobots();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

lastBtn.addEventListener('click', () => {
    currentPage = totalPages;
    renderRobots();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderRobots();

function handleContactSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}
