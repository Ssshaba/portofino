import React from 'react';

const About = () => {
    return (
        <div className="container d-flex justify-content-end">
            <div className=" p-3" style={{ width: '40%', color: '#E3E3E3', backgroundColor: '#1C2336' }}>
                <div className="pt-4 pb-4" >
                    <h2 className="text-center text-uppercase" style={{ fontWeight: 600, fontSize: '3rem', letterSpacing: '2px' }}>О нас</h2>
                </div>
                <div className="mb-5 mx-5">
                    <p className="fs-3" style={{
                        color: '#E3E3E3',
                        fontWeight: 600,
                        lineHeight: '42px'

                    }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse enim, saepe tempore nemo totam ipsam
                        deleniti laboriosam in laborum voluptatem accusamus dignissimos velit incidunt odit suscipit amet ad
                        adipisci modi! Pariatum laborum voluptas placeat ducimus,
                        debitis mollitia ipsa soluta eveniet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
