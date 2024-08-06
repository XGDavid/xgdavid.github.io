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

document.getElementById("read-more-btn").addEventListener("click", function() {
    const moreContent = document.getElementById("more-content");
    if (moreContent.classList.contains("hidden")) {
        moreContent.classList.remove("hidden");
        this.textContent = "Read Less";
    } else {
        moreContent.classList.add("hidden");
        this.textContent = "Read More";
    }
});