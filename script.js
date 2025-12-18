/**
 * Handles screen transitions
 */
function next(screenNum) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('s' + screenNum).classList.add('active');
}

/**
 * Handles candidate selection and button state
 */
function select(card) {
    document.querySelectorAll('.candidate-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    document.getElementById('next2').disabled = false;
}

/**
 * Simulates a biometric scan
 */
function startScan() {
    const wrap = document.getElementById('wrap');
    const load = document.getElementById('load');
    
    // Trigger visual scan animation
    wrap.classList.add('scanning');
    load.innerText = "Processing Biometrics...";
    
    // Simulate API processing delay
    setTimeout(() => {
        load.innerText = "Identity Verified";
        
        // Final transition to success screen
        setTimeout(() => {
            next(4);
        }, 800);
    }, 2500);
}
