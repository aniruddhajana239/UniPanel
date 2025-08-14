// Common JavaScript functionality for all pages

// Sidebar functionality
function initializeSidebar() {
    const openSidebar = document.getElementById('openSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (openSidebar) {
        openSidebar.addEventListener('click', function() {
            sidebar.classList.add('open');
            overlay.classList.add('active');
        });
    }
    
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
}

// Accessibility controls
function initializeAccessibility() {
    const highContrast = document.getElementById('highContrast');
    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    
    if (highContrast) {
        highContrast.addEventListener('change', function() {
            document.body.classList.toggle('high-contrast', this.checked);
        });
    }
    
    if (increaseFont) {
        increaseFont.addEventListener('click', function() {
            document.body.classList.add('font-larger');
        });
    }
    
    if (decreaseFont) {
        decreaseFont.addEventListener('click', function() {
            document.body.classList.remove('font-larger');
        });
    }
}

// Language toggle functionality
function initializeLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('change', function() {
            const isMarathi = this.checked;
            // In a real implementation, this would trigger translation
            console.log('Language switched to:', isMarathi ? 'Marathi' : 'English');
        });
    }
}

// Initialize all common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar();
    initializeAccessibility();
    initializeLanguageToggle();
});

// Utility functions
function showNotification(message, type = 'info') {
    // Simple notification system
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem;
        border-radius: 0.5rem;
        background: var(--slate-900);
        color: var(--white);
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}