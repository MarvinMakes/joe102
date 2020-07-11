/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

class ClaimChanger {
    constructor() {
        this.claims = document.getElementsByClassName('claim');
        this.activeClaim = 0;

        this.claims[this.activeClaim].classList.add('active');
        
        setInterval(() => {
            this.claims[this.activeClaim].classList.remove('active');
            const nextClaim = (this.activeClaim + 1) % this.claims.length;
            this.claims[nextClaim].classList.add('active');
            this.activeClaim = nextClaim;
        }, 5000);        
    }
}

new ClaimChanger();