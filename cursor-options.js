// Alternative cursor options
document.addEventListener('DOMContentLoaded', function() {
    // Create a button to toggle cursor styles
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Change Cursor Style';
    toggleButton.classList.add('cursor-toggle');
    document.body.appendChild(toggleButton);
    
    // Available cursor options
    const cursorOptions = [
        {
            name: 'Bloody Knife',
            image: 'https://www.pngitem.com/pimgs/m/115-1150775_bloody-knife-cursor-hd-png-download.png',
            size: 30,
            glowColor: 'rgba(255, 255, 255, 0.8)'
        },
        {
            name: 'Skull',
            image: 'https://www.freeiconspng.com/uploads/skull-icon-12.png',
            size: 40,
            glowColor: 'rgba(0, 255, 0, 0.6)'  // Green glow
        },
        {
            name: 'Ghost',
            image: 'https://www.freepnglogos.com/uploads/ghost-png/ghost-png-transparent-images-download-clip-10.png',
            size: 40,
            glowColor: 'rgba(153, 217, 234, 0.7)'  // Light blue glow
        },
        {
            name: 'Eye',
            image: 'https://www.freeiconspng.com/uploads/eye-icon-png-25.png',
            size: 35,
            glowColor: 'rgba(255, 204, 0, 0.6)'  // Yellow glow
        },
        {
            name: 'Normal',
            image: '',
            size: 0,
            glowColor: ''
        }
    ];
    
    let currentCursorIndex = 0;
    const customCursor = document.querySelector('.custom-cursor');
    const cursorGlow = document.querySelector('.cursor-glow');
    
    // Function to apply cursor style
    function applyCursorStyle(index) {
        const option = cursorOptions[index];
        
        // Update cursor display
        if (option.name === 'Normal') {
            // Return to normal cursor
            document.body.style.cursor = 'auto';
            customCursor.style.opacity = '0';
            cursorGlow.style.opacity = '0';
        } else {
            // Apply custom cursor
            document.body.style.cursor = 'none';
            customCursor.style.opacity = '1';
            cursorGlow.style.opacity = '1';
            customCursor.style.backgroundImage = `url('${option.image}')`;
            customCursor.style.width = `${option.size}px`;
            customCursor.style.height = `${option.size}px`;
            customCursor.style.marginLeft = `-${option.size/2}px`;
            customCursor.style.marginTop = `-${option.size/2}px`;
            
            // Set glow color
            cursorGlow.style.background = `radial-gradient(circle, ${option.glowColor} 0%, rgba(255, 255, 255, 0) 70%)`;
        }
        
        // Show notification
        showCursorNotification(option.name);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('cursor-notification');
    document.body.appendChild(notification);
    
    // Function to show cursor change notification
    function showCursorNotification(name) {
        notification.textContent = `Cursor: ${name}`;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
    
    // Handle toggle button click
    toggleButton.addEventListener('click', function() {
        currentCursorIndex = (currentCursorIndex + 1) % cursorOptions.length;
        applyCursorStyle(currentCursorIndex);
    });
    
    // Add extra styles
    const style = document.createElement('style');
    style.textContent = `
        .cursor-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--blood-red);
            color: var(--bone-white);
            border: none;
            border-radius: 5px;
            padding: 8px 12px;
            font-family: 'Creepster', cursive;
            font-size: 16px;
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
        }
        
        .cursor-toggle:hover {
            background-color: var(--eerie-purple);
            transform: scale(1.05);
        }
        
        .cursor-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: rgba(0, 0, 0, 0.8);
            color: var(--toxic-green);
            padding: 10px 15px;
            border-radius: 5px;
            font-family: 'Creepster', cursive;
            font-size: 18px;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            z-index: 10000;
            box-shadow: 0 0 15px rgba(139, 0, 0, 0.7);
        }
        
        .cursor-notification.show {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    
    document.head.appendChild(style);
}); 