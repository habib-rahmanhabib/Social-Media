import React from 'react';
import Banner from '../Banner/Banner';
import AdvencCapablicity from '../AdvenceCapacity/AdvencCapablicity';
import ExploreContent from '../ExploreContent/ExploreContent';
import ChooseUs from '../ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExploreContent></ExploreContent>
            <AdvencCapablicity></AdvencCapablicity>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;