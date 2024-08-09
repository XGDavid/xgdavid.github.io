/*
#
# __   _______ _______ _____            __      _____
# \ \ / / ____|__   __/ ____|           \ \    / /__ \
#  \ V / |  __   | | | |     ___  _ __ __\ \  / /   ) |
#   > <| | |_ |  | | | |    / _ \| '__/ _ \ \/ /   / /
#  / . \ |__| |  | | | |___| (_) | | |  __/\  /   / /_
# /_/ \_\_____|  |_|  \_____\___/|_|  \___| \/   |____|
#
#   @author XGDAVID
#   Copyright (c) XGTeam & GCStaff - 2024
#   !file XGDAVID
#   (?) user: xgdav | 06/08/2024 8:02 PM
#
*/

document.addEventListener("DOMContentLoaded", function() {
    function toggleContent(button) {
        const targetId = button.getAttribute("data-target");
        const moreContent = document.getElementById(targetId);
        if (moreContent.classList.contains("hidden")) {
            moreContent.classList.remove("hidden");
            button.textContent = "Read Less";
        } else {
            moreContent.classList.add("hidden");
            button.textContent = "Read More";
        }
    }

    // Event listeners read-more buttons
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            toggleContent(this);
        });
    });

    // Popup
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupContent = document.querySelector('.popup-content img');
    const closeBtn = document.querySelector('.close-btn');

    popupTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            const imgSrc = this.getAttribute('src');
            popupContent.setAttribute('src', imgSrc);
            popupOverlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    const images = [
        "images/farmer.png",
        "images/fisher.png",
        "images/fruits.png",
        "images/miner.png"
    ];

    let currentIndex = 0;
    const witherImg = document.getElementById("jobs-img");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        witherImg.src = images[currentIndex];
    }

    setInterval(changeImage, 10000);
});