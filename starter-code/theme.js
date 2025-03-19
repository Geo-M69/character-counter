document.getElementById('theme-container').addEventListener('click', function() {
    const rootStyles = getComputedStyle(document.documentElement);

    // Get the background colors in RGB format (computed values)
    const neutral0 = rootStyles.getPropertyValue('--neutral0').trim();
    const neutral900 = rootStyles.getPropertyValue('--neutral900').trim();
    const neutral100 = rootStyles.getPropertyValue('--neutral100').trim();
    const neutral200 = rootStyles.getPropertyValue('--neutral200').trim();
    const neutral700 = rootStyles.getPropertyValue('--neutral700').trim();

    // Function to convert hex to rgb
    function hexToRgb(hex) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Convert the neutral colors from hex to rgb for comparison
    const neutral0Rgb = hexToRgb(neutral0);
    const neutral900Rgb = hexToRgb(neutral900);

    // Get the current background color of the body
    const currentBgColor = document.body.style.backgroundColor || getComputedStyle(document.body).backgroundColor;

    // Function to add fade-in class with optional staggered delays
    function addFadeInClass(element, delayClass) {
        element.classList.add('fade-in', delayClass);
        element.addEventListener('animationend', function() {
            element.classList.remove('fade-in', delayClass); // Clean up after animation
        });
    }

    if (currentBgColor === neutral0 || currentBgColor === neutral0Rgb) {
        // Switch to dark theme
        document.body.style.backgroundColor = neutral900;
        addFadeInClass(document.body, 'fade-in-delay-1');

        document.getElementById('themeLogo').src = './assets/images/logo-dark-theme.svg';
        addFadeInClass(document.getElementById('themeLogo'), 'fade-in-delay-2');

        document.getElementById('themeIcon').src = './assets/images/icon-sun.svg';
        addFadeInClass(document.getElementById('themeIcon'), 'fade-in-delay-3');

        document.getElementById('header-container').style.color = neutral100;
        addFadeInClass(document.getElementById('header-container'), 'fade-in-delay-3');

        document.getElementById('mainInput').style.backgroundColor = neutral700;
        document.getElementById('mainInput').style.color = neutral200;
        addFadeInClass(document.getElementById('mainInput'), 'fade-in-delay-2');

        document.getElementById('spaceExclude').style.color = neutral200;
        addFadeInClass(document.getElementById('spaceExclude'), 'fade-in-delay-2');

        document.getElementById('limitCharacter').style.color = neutral200;
        addFadeInClass(document.getElementById('limitCharacter'), 'fade-in-delay-3');

        document.getElementById('reading-time-estimate').style.color = neutral200;
        addFadeInClass(document.getElementById('reading-time-estimate'), 'fade-in-delay-3');

        document.getElementById('densityHeader').style.color = neutral200;
        addFadeInClass(document.getElementById('densityHeader'), 'fade-in-delay-2');

        document.getElementById('characterLimitTextArea').style.color = neutral200;
        addFadeInClass(document.getElementById('characterLimitTextArea'), 'fade-in-delay-2');

        document.getElementById('theme-container').style.backgroundColor = neutral700;
        addFadeInClass(document.getElementById('theme-container'), 'fade-in-delay-1');
    } else {
        // Switch to light theme
        document.body.style.backgroundColor = neutral0;
        addFadeInClass(document.body, 'fade-in-delay-1');

        document.getElementById('themeLogo').src = './assets/images/logo-light-theme.svg';
        addFadeInClass(document.getElementById('themeLogo'), 'fade-in-delay-2');

        document.getElementById('themeIcon').src = './assets/images/icon-moon.svg';
        addFadeInClass(document.getElementById('themeIcon'), 'fade-in-delay-3');

        document.getElementById('header-container').style.color = neutral900;
        addFadeInClass(document.getElementById('header-container'), 'fade-in-delay-3');

        document.getElementById('mainInput').style.backgroundColor = neutral200;
        document.getElementById('mainInput').style.color = neutral700;
        addFadeInClass(document.getElementById('mainInput'), 'fade-in-delay-2');

        document.getElementById('spaceExclude').style.color = neutral900;
        addFadeInClass(document.getElementById('spaceExclude'), 'fade-in-delay-2');

        document.getElementById('limitCharacter').style.color = neutral900;
        addFadeInClass(document.getElementById('limitCharacter'), 'fade-in-delay-3');

        document.getElementById('reading-time-estimate').style.color = neutral900;
        addFadeInClass(document.getElementById('reading-time-estimate'), 'fade-in-delay-3');

        document.getElementById('densityHeader').style.color = neutral900;
        addFadeInClass(document.getElementById('densityHeader'), 'fade-in-delay-2');

        document.getElementById('characterLimitTextArea').style.color = neutral900;
        addFadeInClass(document.getElementById('characterLimitTextArea'), 'fade-in-delay-2');

        document.getElementById('theme-container').style.backgroundColor = neutral100;
        addFadeInClass(document.getElementById('theme-container'), 'fade-in-delay-1');
    }
});
