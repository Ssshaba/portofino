import React from 'react';
import './index.css';

function Header() {
    return (
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
                {/* <a href="/" class="">
                  
                </a> */}
                <span class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-4">Portofino</span>
                <ul class="nav ">
                    <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">О нас</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Меню</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Контакты</a></li>
                </ul>
            </header>
        </div >
    );
}

export default Header;
