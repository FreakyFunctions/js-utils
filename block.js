// Simple Website Ad-Block, could be used for a Website or a simple UserScript.

const KeywordBlocks = [
    "ad", "banner", "redir", "analytics", "?", "&"
];

function isBlocked(url) {
    return KeywordBlocks.some(keyword => url.toLowerCase().includes(keyword));
}

function blockAds() {
    document.querySelectorAll('a').forEach(link => {
        const href = link.href; 
        if (isBlocked(href)) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                alert(`Blocked ad link: ${href}`);
            });
            link.style.color = 'red';
            link.style.textDecoration = 'line-through';
        }
    });
}

const originalWindowOpen = window.open;

window.open = function(url, ...args) {
    if (isBlocked(url)) {
        alert(`Blocked ad window: ${url}`);
        return null;
    }
    return originalWindowOpen.call(this, url, ...args);
};

document.addEventListener('DOMContentLoaded', blockAds);