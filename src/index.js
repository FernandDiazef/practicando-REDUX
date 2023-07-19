import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose } from 'redux';
import reducer from './reducers/index'
import App from './routes/App';

const initialState = {
    "user": {},
    "playing": {},
    "searchContent": [],
    "myList": [],
    "trends": [
        {
            "id": 2,
            "slug": "tvshow-2",
            "title": "Sans' Showdown [Pixel Animation]",
            "type": "Scripted",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 164,
            "cover": "https://picon.ngfiles.com/891000/flash_891855_card.webp?f1689700939",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/tm5PgRcuKUM"
        },
        {
            "id": 3,
            "slug": "tvshow-3",
            "title": "Instinct",
            "type": "Adventure",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 137,
            "cover": "https://i.ytimg.com/vi/JfFEWkHXq6o/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA-EKTMohPK9mlyzIU9_U1FxdhOWw",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/shorts/HOKtXfcgzl8?feature=share"
        },
        {
            "id": 4,
            "slug": "tvshow-4",
            "title": "Grand Hotel",
            "type": "Comedy",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 163,
            "cover": "https://i.ytimg.com/vi/VhyNHVTsOOI/hq720_2.jpg?sqp…AHAAQbQAQE=&rs=AOn4CLAGEUqfpexZRZ3AebVuFmHkjDyUrw",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        },
        {
            "id": 5,
            "slug": "tvshow-5",
            "title": "Stargate Atlantis",
            "type": "Scripted",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 194,
            "cover": "http://dummyimage.com/800x600.png/B36F20/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        },
        {
            "id": 6,
            "slug": "tvshow-6",
            "title": "Final Space",
            "type": "Scripted",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 124,
            "cover": "http://dummyimage.com/800x600.png/CCC539/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        },
        {
            "id": 7,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "http://dummyimage.com/800x600.png/FF7A90/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        }
    ],
    "originals": [
        {
            "id": 8,
            "slug": "tvshow-8",
            "title": "Stargate Atlantis",
            "type": "Action",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 148,
            "cover": "http://dummyimage.com/800x600.png/306880/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        },
        {
            "id": 9,
            "slug": "tvshow-9",
            "title": "Alien Highway",
            "type": "Action",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "http://dummyimage.com/800x600.png/604180/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        },
        {
            "id": 10,
            "slug": "tvshow-10",
            "title": "Elementary",
            "type": "Animation",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 346,
            "cover": "http://dummyimage.com/800x600.png/FF91BA/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        },
        {
            "id": 11,
            "slug": "tvshow-11",
            "title": "Strange Angel",
            "type": "War",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 226,
            "cover": "http://dummyimage.com/800x600.png/45807C/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        },
        {
            "id": 12,
            "slug": "tvshow-12",
            "title": "Private Eyes",
            "type": "Comedy",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        },
        {
            "id": 13,
            "slug": "tvshow-13",
            "title": "NCIS: Los Angeles",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
            "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        }
    ]
}

const composeEnharcers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

const store = createStore(reducer, initialState, composeEnharcers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));