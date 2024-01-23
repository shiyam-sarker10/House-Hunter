import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Container from '../../Component/Shared/Container';
import SearchCard from '../../Component/SearchCard/SearchCard';

const Home = () => {
    return (
      <Container>
        <div>
          <Banner></Banner>
          <SearchCard></SearchCard>
        </div>
      </Container>
    );
};

export default Home;