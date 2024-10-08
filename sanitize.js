// Defeat XSS using JavaScript.

function sanitize(input) {
    if (typeof input !== 'string') {
        return '';
    }
    
    let sanitized = input.trim();
    sanitized = sanitized.replace(/[^\w\s.,!?'"()-]/g, '');
    sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

    return sanitized;
}