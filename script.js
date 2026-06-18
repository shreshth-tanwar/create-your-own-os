// ===============================

// INVENTOR OS v1.0

// ===============================

let highestZ = 100;

// ===============================

// BOOT SEQUENCE

// ===============================

window.addEventListener("load", () => {

    const bootScreen = document.getElementById("boot-screen");

    setTimeout(() => {

        bootScreen.style.display = "none";

    }, 3000);

});

// ===============================

// LOCK SCREEN

// ===============================

const enterBtn = document.getElementById("enter-btn");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        const lockScreen =

            document.getElementById("lock-screen");

        lockScreen.style.display = "none";

    });

}

// ===============================

// LIVE CLOCK

// ===============================

function updateClock() {

    const now = new Date();

    const time =

        now.toLocaleTimeString([], {

            hour: "2-digit",

            minute: "2-digit"

        });

    const taskbarClock =

        document.getElementById("clock");

    const lockClock =

        document.getElementById("lock-time");

    if (taskbarClock) {

        taskbarClock.textContent = time;

    }

    if (lockClock) {

        lockClock.textContent = time;

    }

}

updateClock();

setInterval(updateClock, 1000);

// ===============================

// START MENU

// ===============================

const startBtn =

    document.getElementById("start-btn");

const startMenu =

    document.getElementById("start-menu");

if (startBtn && startMenu) {

    startBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        if (

            startMenu.style.display === "block"

        ) {

            startMenu.style.display = "none";

        } else {

            startMenu.style.display = "block";

        }

    });

}

// Close menu when clicking elsewhere

document.addEventListener("click", (event) => {

    if (

        startMenu &&

        !startMenu.contains(event.target) &&

        event.target !== startBtn

    ) {

        startMenu.style.display = "none";

    }

});

// ===============================

// WINDOW SYSTEM

// ===============================

function openWindow(id) {

    const win =

        document.getElementById(id);

    if (!win) return;

    win.style.display = "block";

    highestZ++;

    win.style.zIndex = highestZ;

}

function closeWindow(id) {

    const win =

        document.getElementById(id);

    if (!win) return;

    win.style.display = "none";

}

// Make globally accessible

window.openWindow = openWindow;

window.closeWindow = closeWindow;

// ===============================

// BRING TO FRONT

// ===============================

document

.querySelectorAll(".window")

.forEach(windowElement => {

    windowElement.addEventListener(

        "mousedown",

        () => {

            highestZ++;

            windowElement.style.zIndex =

                highestZ;

        }

    );

});

// ===============================

// DRAGGABLE WINDOWS

// ===============================

document

.querySelectorAll(".window")

.forEach(windowElement => {

    const titleBar =

        windowElement.querySelector(".title-bar");

    if (!titleBar) return;

    let dragging = false;

    let offsetX = 0;

    let offsetY = 0;

    titleBar.addEventListener(

        "mousedown",

        (e) => {

            dragging = true;

            highestZ++;

            windowElement.style.zIndex =

                highestZ;

            offsetX =

                e.clientX -

                windowElement.offsetLeft;

            offsetY =

                e.clientY -

                windowElement.offsetTop;

        }

    );

    document.addEventListener(

        "mousemove",

        (e) => {

            if (!dragging) return;

            windowElement.style.left =

                e.clientX - offsetX + "px";

            windowElement.style.top =

                e.clientY - offsetY + "px";

        }

    );

    document.addEventListener(

        "mouseup",

        () => {

            dragging = false;

        }

    );

});

// ===============================

// ESC KEY CLOSES START MENU

// ===============================

document.addEventListener(

    "keydown",

    (e) => {

        if (e.key === "Escape") {

            if (startMenu) {

                startMenu.style.display = "none";

            }

        }

    }

);

// ===============================

// WELCOME MESSAGE

// ===============================

console.log(`

==================================

        INVENTOR OS

==================================

Welcome Shreshth!

Systems Loaded:

✓ About App

✓ Projects Hub

✓ RAWBOT Control Center

✓ Mission Control

✓ Terminal

✓ Gallery

Status: READY

==================================

`);