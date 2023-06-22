import React from 'react';

const Contacts = () => {
    return (
        <div className="container contacts py-5 pb-5 text-light">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-uppercase mb-4" style={{ fontWeight: 600, fontSize: '4rem', letterSpacing: '2px' }}>Как с нами связаться</h2>
                </div>
            </div>
            <div className="row pb-md-5 m-4">
                <div className="col-md-4">
                    <img src="https://via.placeholder.com/500x500" alt="Contact" className="img-fluid" style={{ maxWidth: '100%', width: '100%', height: 'auto' }} />
                </div>
                <div className="col-md-8" style={{ paddingRight: '80px' }}>
                    <p className="fs-3 fs-md-4" style={{ fontWeight: 600, lineHeight: '53px', letterSpacing: '1px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse enim, saepe tempore nemo totam ipsam deleniti laboriosam in laborum voluptatem accusamus dignissimos velit incidunt odit suscipit amet ad adipisci modi!
                        Pariatur atque dolorem provident unde quod minima culpa debitis mollitia ipsa soluta eveniet. Quam.</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
