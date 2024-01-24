import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Container from '../../Component/Shared/Container';
import SearchCard from '../../Component/SearchCard/SearchCard';

const Home = () => {
    return (
      <Container>
        <div>
          <Banner></Banner>
          <h1 className="text-center text-2xl md:text-4xl font-medium py-10 text-[#4F64B3]">
            Search You Nest
          </h1>
          <SearchCard></SearchCard>
        </div>
      </Container>
    );
};

export default Home;