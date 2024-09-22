const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<style>


.footer {
    position: relative;
    width: 100%;
    height: 200px;
    background: #3586ff;
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .social-icon,
  .menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: left;
    margin: 6px 0;
    flex-wrap: wrap;
  }
  
  .social-icon__item,
  .menu__item {
    list-style: none;
  }
  
  .social-icon__link {
    font-size: 2rem;
    color: #fff;
    margin: 0 20px;
    display: inline-block;
    transition: 0.5s;
  }
  .social-icon__link:hover {
    transform: translateY(-10px);
  }
  
  .menu__link {
    font-size: 1.2rem;
    color: #fff;
    margin: 0 20px;
    display: inline-block;
    transition: 0.5s;
    text-decoration: none;
    opacity: 0.75;
    font-weight: 300;
  }
  
  .menu__link:hover {
    opacity: 1;
  }
  
  .footer p {
    color: black;
    margin: 15px 0 10px 0;
    font-size: 1rem;
    font-weight: 300;
  }
  
  
</style>
<footer class="foot">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://mbasic.facebook.com/login">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.twitter.com">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="home.html"></a></li>
      <li class="menu__item"><a class="menu__link" href="#">Email:-<br>FarmingOrganic@gmail.com</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contacts:-<br>9966885544<br>9545465656</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team:-<br>Balaji<br>sashank<br>Bhargavi<br>Shreya</a></li>

    </ul>

    <p>Project by Artificial Intelligence & Machine Learning</p>
</footer>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
   
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('footer-component', Header);