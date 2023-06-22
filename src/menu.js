import React from 'react';

const Menu = () => {
    return (
        <div className="container-lg py-5 text-center">
            <h2 className='text-uppercase mb-5' style={{ color: '#E3E3E3', fontWeight: 600, fontSize: '4rem', letterSpacing: '2px' }}>Меню</h2>
            <div className="row justify-content-center mx-auto" style={{ width: '92%' }}>
                <div className="col-md-4">
                    <div className="card" style={{ width: '100%', backgroundColor: '#E3E3E3' }}>
                        <h5 className="card-title mt-3" style={{
                            color: '#16C1D7',
                            fontSize: '42px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>Рыба</h5>
                        <img src="/images/fish.png" className="card-img-top px-4 my-3" alt="Fish" style={{ width: '100%' }} />
                        <div className="card-body">
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '100%', backgroundColor: '#16C1D7' }}>
                        <h5 className="card-title  mt-3" style={{
                            color: '#1C2336',
                            fontSize: '42px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'

                        }}>Гарниры</h5>
                        <img src="/images/pasta.png" className="card-img-top px-4 my-3" alt="Side Dishes" style={{ width: '100%' }} />
                        <div className="card-body">
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{ width: '100%', backgroundColor: '#1C2336' }}>
                        <h5 className="card-title mt-3" style={{
                            color: '#E3E3E3',
                            fontSize: '42px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>Напитки</h5>
                        <img src="/images/cocktail.png" className="card-img-top px-4 my-3" alt="Drinks" style={{ width: '100%' }} />
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
