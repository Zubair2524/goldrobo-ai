/**
 * Show a specific page and hide others
 * @param {string} pageId - The ID of the page to show
 */
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        console.error(`Page with ID "${pageId}" not found.`);
    }

    // Update sidebar link active state
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });

    // Scroll to top of the page
    window.scrollTo(0, 0);
}

/**
 * Toggle details visibility for a robot item
 * @param {number} id - The ID of the robot
 */
function toggleDetails(id) {
    const details = document.getElementById(`details-${id}`);
    if (details) {
        details.classList.toggle('active');
        const button = details.previousElementSibling;
        button.textContent = details.classList.contains('active') ? 'Hide Details' : 'More Details';
    } else {
        console.error(`Details element with id details-${id} not found`);
    }
}

/**
 * Handle contact form submission
 */
function handleContactSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate sending email to zubair.novartis@gmail.com
        // Note: Actual email sending requires a server-side implementation
        fetch('/send-contact-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
                to: 'zubair.novartis@gmail.com'
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        })
        .catch(error => {
            console.error('Error sending contact form:', error);
            alert('There was an error sending your message. Please try again later.');
        });
    } else {
        alert('Please fill in all fields.');
    }
}

// Robots for Buy Robot page
const robots = [
    {
        id: 1,
        name: "GoldNexus Elite",
        description: "A specialized robot for gold trading with unmatched precision.",
        price: "599.99",
        details: "GoldNexus Elite is designed for gold trading on MT4/MT5 platforms. It uses advanced AI to achieve a 92% win rate, making it ideal for volatile markets.",
        image: "images/goldnexuselite.png"
    },
    {
        id: 2,
        name: "Crypto Trader",
        description: "Trade cryptocurrencies with confidence and high accuracy.",
        price: "649.99",
        details: "Crypto Trader focuses on cryptocurrency markets, offering a 90% win rate on MT4/MT5. Perfect for Bitcoin, Ethereum, and altcoin trading.",
        image: "images/cryptotrader.png"
    },
    {
        id: 3,
        name: "VortexFX-Navigator",
        description: "Navigate forex markets with this powerful trading bot.",
        price: "520.00",
        details: "VortexFX-Navigator provides robust forex trading strategies on MT4/MT5. With an 88% win rate, it’s great for major currency pairs.",
        image: "images/vortexfx-navigator.png"
    },
    {
        id: 4,
        name: "Nabula Trader",
        description: "A futuristic trader for all market conditions.",
        price: "679.99",
        details: "Nabula Trader uses cutting-edge AI to trade across various markets on MT4/MT5. Achieves an 87% win rate, suitable for all traders.",
        image: "images/nabulatrader.png"
    },
    {
        id: 5,
        name: "CentinelAI Trader",
        description: "AI-driven trading for consistent profits.",
        price: "699.99",
        details: "CentinelAI Trader leverages AI sole traders on MT4/MT5. Offers an 86% win rate, ideal for long-term profitability.",
        image: "images/centinelaitrader.png"
    },
    {
        id: 6,
        name: "AlphaPulse X1",
        description: "Pulse through the markets with this advanced bot.",
        price: "510.00",
        details: "AlphaPulse X1 is optimized for high-frequency trading on MT4/MT5. With an 85% win rate, it’s perfect for scalping strategies.",
        image: "images/alphapulsex1.png"
    },
    {
        id: 7,
        name: "TurboPipMaster V2",
        description: "Master the pips with turbo speed and accuracy.",
        price: "729.99",
        details: "TurboPipMaster V2 excels in pip-based trading on MT4/MT5. Achieves an 89% win rate, designed for fast-paced forex markets.",
        image: "images/turbopipmasterv2.png"
    },
    {
        id: 8,
        name: "ForexPhoenix 300",
        description: "Rise from the ashes with this forex trading bot.",
        price: "749.99",
        details: "ForexPhoenix 300 offers robust forex trading on MT4/MT5. With a 90% win rate, it’s ideal for both beginners and experts.",
        image: "images/forexphoenix300.png"
    },
    {
        id: 9,
        name: "QuantumTrades Pro",
        description: "Trade with quantum precision and efficiency.",
        price: "500.00",
        details: "QuantumTrades Pro uses quantum-inspired algorithms for trading on MT4/MT5. Offers an 91% win rate, perfect for advanced traders.",
        image: "images/quantumtradespro.png"
    },
    {
        id: 10,
        name: "Order Block and FVG Trader",
        description: "Identifies the OB and FVG at the selected time frame and places pending orders.",
        price: "450.00",
        details: "Order Block and FVG Trader specializes in identifying Order Blocks (OB) and Fair Value Gaps (FVG) on MT4/MT5. It places pending orders automatically for precise entries.",
        image: "images/order-block-fvg-trader.png"
    },
    {
        id: 11,
        name: "Million Movers Algo",
        description: "Trades in the direction of the trend with multi-timeframe alignment.",
        price: "550.00",
        details: "Million Movers Algo trades in the direction of the trend on MT4/MT5. It only opens trades when the lower time frame trend aligns with the higher time frame trend with at least 30% strength of the trend. It uses 5 different trend-finding strategies to formulate the trend strength.",
        image: "images/million-movers-algo.png"
    },
    {
        id: 12,
        name: "Trade Manager V2",
        description: "The best tool for risk management in trading.",
        price: "250.00",
        details: "Trade Manager V2 is the ultimate risk management tool on MT4/MT5. It automatically places SL and TP on open trades, breakevens trades after a desired profit level, trails profits, and allows partial trade closure in profit while breakevening the remainder.",
        image: "images/trade-manager-v2.png"
    }
];

// Robots for Top Selling Robot page
const topSellingRobots = [
    {
        id: 10,
        name: "Order Block and FVG Trader",
        description: "Identifies the OB and FVG at the selected time frame and places pending orders.",
        price: "450.00",
        details: "Order Block and FVG Trader specializes in identifying Order Blocks (OB) and Fair Value Gaps (FVG) on MT4/MT5. It places pending orders automatically for precise entries.",
        image: "images/order-block-fvg-trader.png"
    },
    {
        id: 11,
        name: "Million Movers Algo",
        description: "Trades in the direction of the trend with multi-timeframe alignment.",
        price: "550.00",
        details: "Million Movers Algo trades in the direction of the trend on MT4/MT5. It only opens trades when the lower time frame trend aligns with the higher time frame trend with at least 30% strength of the trend. It uses 5 different trend-finding strategies to formulate the trend strength.",
        image: "images/million-movers-algo.png"
    },
    {
        id: 12,
        name: "Trade Manager V2",
        description: "The best tool for risk management in trading.",
        price: "250.00",
        details: "Trade Manager V2 is the ultimate risk management tool on MT4/MT5. It automatically places SL and TP on open trades, breakevens trades after a desired profit level, trails profits, and allows partial trade closure in profit while breakevening the remainder.",
        image: "images/trade-manager-v2.png"
    }
];

// Videos for EA Videos page
const baseVideos = [
    {
        id: 1,
        title: "Order Block and FVG EA",
        thumbnail: "images/order-block-fvg-trader.png",
        url: "https://youtu.be/XeaJI5wSzOA"
    },
    {
        id: 2,
        title: "Trend Following EA Million Movers Algo",
        thumbnail: "images/million-movers-algo.png",
        url: "https://youtu.be/qTc10jMdxlw"
    },
    {
        id: 3,
        title: "Trade Manager - Manage Your Risk Like a Pro",
        thumbnail: "images/trade-manager-v2.png",
        url: "https://youtu.be/qTc10jMdxlw"
    }
];

// Repeat the first three videos across all pages (80 videos total, 3 per page = 27 pages)
const videos = [];
for (let i = 0; i < 80; i += 3) {
    videos.push(...baseVideos.map(video => ({
        ...video,
        id: video.id + i // Ensure unique IDs
    })));
}

// Generic function to render robots for a given grid and robot list
function renderRobots(robotList, gridId, pageInfoId, firstBtnId, prevBtnId, nextBtnId, lastBtnId, robotsPerPage) {
    const robotGrid = document.getElementById(gridId);
    const pageInfo = document.getElementById(pageInfoId);
    const firstBtn = document.getElementById(firstBtnId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const lastBtn = document.getElementById(lastBtnId);

    let currentPage = 1;
    const totalPages = Math.ceil(robotList.length / robotsPerPage);

    function render() {
        console.log(`Rendering robots for ${gridId}...`);
        console.log('Current Page:', currentPage);
        console.log('Total Pages:', totalPages);
        console.log('Robots Array Length:', robotList.length);

        const start = (currentPage - 1) * robotsPerPage;
        const end = start + robotsPerPage;
        const currentRobots = robotList.slice(start, end);

        console.log('Current Robots:', currentRobots);

        if (!robotGrid) {
            console.error(`${gridId} element not found in the DOM`);
            return;
        }

        robotGrid.innerHTML = '';
        currentRobots.forEach(robot => {
            console.log('Attempting to load image:', robot.image);
            const robotDiv = document.createElement('div');
            robotDiv.classList.add('robot-item');
            robotDiv.innerHTML = `
                <img src="${robot.image}" alt="${robot.name}" onerror="console.error('Failed to load image: ${robot.image}'); this.src='images/default-robot.png';" class="robot-image">
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

    render();

    firstBtn.addEventListener('click', () => {
        currentPage = 1;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    lastBtn.addEventListener('click', () => {
        currentPage = totalPages;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Function to render videos for the EA Videos page
function renderVideos() {
    const videoGrid = document.getElementById('video-grid');
    const pageInfo = document.getElementById('video-page-info');
    const firstBtn = document.getElementById('video-first-btn');
    const prevBtn = document.getElementById('video-prev-btn');
    const nextBtn = document.getElementById('video-next-btn');
    const lastBtn = document.getElementById('video-last-btn');

    let currentPage = 1;
    const videosPerPage = 3;
    const totalPages = Math.ceil(videos.length / videosPerPage);

    function render() {
        const start = (currentPage - 1) * videosPerPage;
        const end = start + videosPerPage;
        const currentVideos = videos.slice(start, end);

        if (!videoGrid) {
            console.error('video-grid element not found in the DOM');
            return;
        }

        videoGrid.innerHTML = '';
        currentVideos.forEach(video => {
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video-item');
            videoDiv.innerHTML = `
                <a href="${video.url}" target="_blank">
                    <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='images/default-video-thumbnail.png';" class="video-thumbnail">
                    <h3>${video.title}</h3>
                </a>
            `;
            videoGrid.appendChild(videoDiv);
        });

        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        firstBtn.disabled = currentPage === 1;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        lastBtn.disabled = currentPage === totalPages;
    }

    render();

    firstBtn.addEventListener('click', () => {
        currentPage = 1;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    lastBtn.addEventListener('click', () => {
        currentPage = totalPages;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Function to initialize banner carousel on the home page
function initializeBannerCarousel() {
    const bannerImages = document.querySelector('.banner-images');
    if (!bannerImages) return;

    const robotImages = robots.map(robot => robot.image);
    // Duplicate images to create seamless loop
    const doubledImages = [...robotImages, ...robotImages];
    
    doubledImages.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Robot Banner';
        img.classList.add('banner-img');
        bannerImages.appendChild(img);
    });
}

// Function to add click event listeners to robot images
function initializeRobotImageClicks() {
    // Handle robot images in grids (robot-item, bot-item)
    document.querySelectorAll('.robot-item img, .bot-item img').forEach(img => {
        img.addEventListener('click', () => {
            window.location.href = 'buy-robot.html';
        });
    });

    // Handle banner images
    document.querySelectorAll('.banner-img').forEach(img => {
        img.addEventListener('click', () => {
            window.location.href = 'buy-robot.html';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Toggle hamburger menu for navbar
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const sidebarHamburger = document.querySelector('.sidebar .hamburger');
    const sidebarLinks = document.querySelector('.sidebar-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    if (sidebarHamburger && sidebarLinks) {
        sidebarHamburger.addEventListener('click', () => {
            sidebarLinks.classList.toggle('active');
        });

        // Close sidebar menu when a link is clicked
        sidebarLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                sidebarLinks.classList.remove('active');
            });
        });
    }

    // Sidebar navigation
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            showPage(pageId);
        });
    });

    // Render robots for Buy Robot page
    if (document.getElementById('robot-grid')) {
        renderRobots(
            robots,
            'robot-grid',
            'page-info',
            'first-btn',
            'prev-btn',
            'next-btn',
            'last-btn',
            3
        );
    }

    // Render robots for Top Selling Robot page
    if (document.getElementById('top-selling-robot-grid')) {
        renderRobots(
            topSellingRobots,
            'top-selling-robot-grid',
            'top-selling-page-info',
            'top-selling-first-btn',
            'top-selling-prev-btn',
            'top-selling-next-btn',
            'top-selling-last-btn',
            3
        );
    }

    // Render videos for EA Videos page
    if (document.getElementById('video-grid')) {
        renderVideos();
    }

    // Initialize banner carousel on home page
    if (document.getElementById('home')) {
        initializeBannerCarousel();
    }

    // Initialize robot image click handlers
    initializeRobotImageClicks();

    // Re-apply image click handlers after any dynamic content load
    const observer = new MutationObserver(() => {
        initializeRobotImageClicks();
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
