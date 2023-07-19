import React from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import Header from '../components/Header';

const Home = ({ myList, trends, originals, searchContent }) => {

  const searchFilter = trends.concat(originals).filter((item) =>
    item.title.toString().toLowerCase().includes(searchContent.toString().toLowerCase()),
  );

  return (
    <>
      <Header />
      <div className="App">
        <Search isHome />
        {searchFilter.length < trends.concat(originals).length ?
          <>
            {searchFilter.length !== 0 ?
              <>
                <Categories title="buscar">
                  <Carousel>
                    {searchFilter.map(item =>
                      <CarouselItem
                        key={item.id}
                        {...item}
                      />
                    )
                    }
                  </Carousel>
                </Categories>
              </>
              :
              <h1>Su viedo no se encuentra aun habilitado</h1>

            }
          </>
          :
          <>
            {myList.length > 0 &&
              <Categories title="Mi Lista">
                <Carousel>
                  {myList.map(item =>
                    <CarouselItem
                      key={item.id}
                      {...item}
                      isList
                    />
                  )}
                </Carousel>
              </Categories>
            }
            <Categories title="Tendencias">
              <Carousel>
                {trends.map(item =>
                  <CarouselItem key={item.id} {...item} />
                )}
              </Carousel>
            </Categories>
            <Categories title="Originales de Platzi Video">
              <Carousel>
                {originals.map(item =>
                  <CarouselItem key={item.id} {...item} />
                )}
              </Carousel>
            </Categories>
          </>
        }
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchContent: state.searchContent,
  };
};

export default connect(mapStateToProps, null)(Home);