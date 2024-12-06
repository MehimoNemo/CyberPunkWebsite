const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');
const hoverables = document.querySelectorAll('input[type="password" i], input[type="image" i], area:-webkit-any-link, a:-webkit-any-link, button');

// Corrected selectors for light background items
const lightBgItems = document.querySelectorAll('.bg-light, .bg-white');

// Register listeners.
document.body.addEventListener('mousemove', onMouseMove);
document.body.addEventListener('mousedown', onMouseDown);
document.body.addEventListener('mouseup', onMouseUp); // Add mouseup listener
for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}
for (let i = 0; i < lightBgItems.length; i++) {
    lightBgItems[i].addEventListener('mouseenter', onMouseHoverLight);
    lightBgItems[i].addEventListener('mouseleave', onMouseHoverOutLight);
}

// Move the cursor.
function onMouseMove(e) {
    // Calculate the position relative to the cursor container
    const cursorContainerRect = document.querySelector('.cursor').getBoundingClientRect();
    const posX = e.clientX - cursorContainerRect.left - 11;
    const posY = e.clientY - cursorContainerRect.top - 9;

    // Apply TweenMax animations to move the cursor elements smoothly
    TweenMax.to(cursor1, 0.01, { x: posX, y: posY, ease: Power2.easeOut });
    TweenMax.to(cursor2, 0.4, { x: posX, y: posY, ease: Power2.easeOut });
}

// Hover an element
function onMouseHover(e) {
    cursor1.classList.add('hover');
    cursor2.classList.add('hover');
}

// Hover out of an element
function onMouseHoverOut() {
    cursor1.classList.remove('hover');
    cursor2.classList.remove('hover');
}

// Remove hover on mousedown
function onMouseDown() {
    cursor1.classList.remove('hover');
    cursor2.classList.remove('hover');
}

// Check if hovering over hoverables and apply appropriate events on mouseup
function onMouseUp() {
    let hovering = false;
    for (let i = 0; i < hoverables.length; i++) {
        if (hoverables[i].matches(':hover')) {
            hovering = true;
            break;
        }
    }
    if (hovering) {
        onMouseHover();
    } else {
        onMouseHoverOut();
    }
}

function onMouseHoverLight(e) {
    cursor1.classList.add('cursor-dark');
    cursor2.classList.add('cursor-dark');
}

// Hover out of an element
function onMouseHoverOutLight() {
    cursor1.classList.remove('cursor-dark');
    cursor2.classList.remove('cursor-dark');
}
