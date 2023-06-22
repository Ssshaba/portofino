import React from 'react';

const Menu = () => {
    return (
        <div className="container-lg py-5 text-center">
            <h2 className='text-uppercase'>Меню</h2>
            <div className="row justify-content-center mx-auto" style={{ width: '92%' }}>
                <div className="col-md-4">
                    <div className="card" style={{ width: '100%', backgroundColor: '#E3E3E3' }}>
                        <h5 className="card-title" style={{ color: '#16C1D7', fontSize: '32px', textTransform: 'uppercase' }}>Рыба</h5>
                        <img src="/images/fish.png" className="card-img-top" alt="Fish" style={{ width: '100%' }} />
                        <div className="card-body">
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '100%', backgroundColor: '#16C1D7' }}>
                        <h5 className="card-title" style={{ color: '#1C2336', fontSize: '32px', textTransform: 'uppercase' }}>Гарниры</h5>
                        <img src="/images/pasta.png" className="card-img-top" alt="Side Dishes" style={{ width: '100%' }} />
                        <div className="card-body">
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '100%', backgroundColor: '#1C2336' }}>
                        <h5 className="card-title" style={{ color: '#E3E3E3', fontSize: '32px', textTransform: 'uppercase' }}>Напитки</h5>
                        <img src="/images/cocktail.png" className="card-img-top" alt="Drinks" style={{ width: '100%' }} />
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
