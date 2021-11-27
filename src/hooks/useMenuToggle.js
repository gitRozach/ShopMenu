import { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const useMenuToggle = () => {
    
    const tabCount = 2;

    const [toggleState, setToggleState] = useState(1);
    const [toggleDelay] = useState(7000);

    function toggleActiveContent() {
        if ((toggleState + 1) > tabCount) {
            setToggleState(1);
        } else {
            setToggleState(toggleState + 1);
        }
        
        // animateMenuItemsOut();
        // animateMenuTitleOut();
    }

    function animateMenuItemsOut() {
        anime({
        targets: '.MenuItem',
        translateY: {
            value: ['0px', '100%'],
            easing: 'easeInOutQuad',
        },
        opacity: {
            value: [1.0, 0.0],
            easing: 'easeInOutExpo',
        },
        delay: anime.stagger(75, {start: toggleDelay * 0.75, from: 'center'})
        });
    }

    function animateMenuTitleOut() {
        anime({
        targets: '.content-title',
        opacity: {
            value: [1.0, 0.0],
            easing: 'easeInOutExpo',
        },
        delay: anime.stagger(75, {start: toggleDelay * 0.85, from: 'center'})
        });
    }

    useEffect(() => {
        const tabHideInterval = setInterval(() => {
          toggleActiveContent();
        }, toggleDelay);
    
        return () => clearInterval(tabHideInterval);
    }, [toggleDelay, toggleState]);

    return [toggleState, setToggleState, toggleDelay];
}

export default useMenuToggle;