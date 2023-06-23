import React from 'react';
import './index.css';

function Header() {
    return (
        <header className=" text-uppercase" style={{ background: '#1C2336' }}>
            <div className="container d-flex flex-wrap justify-content-center py-3 mb-4">
                <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-uppercase text-decoration-none fs-4" style={{
                    color: '#E3E3E3',
                    fontSize: '28px',
                    fontWeight: 'bold'
                }}
                >Portofino</span>
                <ul className="nav" >
                    <li className="nav-item" ><a href="#" className="nav-link active" aria-current="page" style={{ color: '#E3E3E3' }}>О нас</a></li>
                    <li className="nav-item"><a href="#" className="nav-link" style={{ color: '#E3E3E3' }}>Меню</a></li>
                    <li className="nav-item"><a href="#" className="nav-link" style={{ color: '#E3E3E3' }}>Контакты</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
