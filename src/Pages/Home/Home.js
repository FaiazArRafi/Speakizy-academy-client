import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const home = () => {
    return (

        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto"
                        src="https://images.rove.me/w_1920,q_85/vs3w0rteilkeya8fcdsj/los-angeles-nisei-week-japanese-festival.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className=''>Learn Japanese and Experience Japan</h1>
                        <p>Try our Japanese Language Course.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto"
                        src="https://wallpaperaccess.com/full/111853.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-primary'>Bonjure !!</h1>
                        <p>Speak French only in Four months.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.suwalls.com/wallpapers/world/statue-of-liberty-43109-3840x2160.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-danger'>Seeking Higher Studies abroad ?? </h1>
                        <p>
                            Enroll in our English Language Course and touch your dream.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <footer>

            </footer>
        </div>
    );

};

export default home;