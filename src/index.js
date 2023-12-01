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
            "title": "PUNCH PUNCH FOREVER!",
            "type": "Adventure",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 137,
            "cover": "https://picon.ngfiles.com/891000/flash_891548_card.webp?f1689447667",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/8ndBoc6R8_A"
        },
        {
            "id": 4,
            "slug": "tvshow-4",
            "title": "62 bits-Cupsouls",
            "type": "Comedy",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 163,
            "cover": "https://picon.ngfiles.com/702000/flash_702515_card.png?f1601494932",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/FBE8sh7nv4s"
        },
        {
            "id": 5,
            "slug": "tvshow-5",
            "title": "64 Bits - Shovel Knight Dimensions",
            "type": "Scripted",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 194,
            "cover": "https://picon.ngfiles.com/767000/flash_767211_card.png?f1601403802",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/oMbp1piXFLs"
        },
        {
            "id": 6,
            "slug": "tvshow-6",
            "title": "Porkchop 'n Flatscreen! (Episode 2)",
            "type": "Scripted",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 124,
            "cover": "https://i.ytimg.com/vi/KvEVyUnzI2U/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBiMfyB6BRqGO3xyaxrV0_KD2WLTQ",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/KvEVyUnzI2U"
        },
        {
            "id": 7,
            "slug": "tvshow-7",
            "title": "How To Fix a Water Damaged Laptop",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://i.ytimg.com/vi/115amzVdV44/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBaQthS2AekPCRuSjX_CFgQ-AGz8w",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/115amzVdV44"
        }
    ],
    "originals": [
        {
            "id": 8,
            "slug": "tvshow-8",
            "title": "Stargazing With Murderous Intent [lofi/chill beats]",
            "type": "Action",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 148,
            "cover": "https://i.ytimg.com/vi/srhTqupfGyQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8k_jFnrHRw-XadIpRlqX8crS7Uw",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/srhTqupfGyQ"
        },
        {
            "id": 9,
            "slug": "tvshow-9",
            "title": "How To Fix a Cracked iPhone Screen",
            "type": "Action",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "https://i.ytimg.com/vi/3t678W5zfMA/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLAZRbxjcv4gqQgkaP8QLxqQJCkbEA",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/3t678W5zfMA"
        },
        {
            "id": 10,
            "slug": "tvshow-10",
            "title": "How To Feed a Baby",
            "type": "Animation",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 346,
            "cover": "https://i.ytimg.com/vi/z3jE7ZoTp-I/hqdefault.jpg?s…RhlIEQoRTAP&rs=AOn4CLA4J7hbU6th8aUHacYn_IemMahErg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/z3jE7ZoTp-I"
        },
        {
            "id": 11,
            "slug": "tvshow-11",
            "title": "The Maker",
            "type": "War",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 226,
            "cover": "https://i.ytimg.com/vi/YDXOioU_OKM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCiMdIzYWrkF7mmZDG88aMC_QFaUg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/YDXOioU_OKM"
        },
        {
            "id": 12,
            "slug": "tvshow-12",
            "title": "CliffSide",
            "type": "Comedy",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "https://i.ytimg.com/vi/UGa8eReR_ns/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2ayRwE_fjvRREL_GUmpO6wCsgXw",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/UGa8eReR_ns"
        },
        {
            "id": 13,
            "slug": "tvshow-13",
            "title": "THE AMAZING DIGITAL CIRCUS (teaser)",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://i.ytimg.com/vi/9FY0Pt9fyxY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCPQTuNTxsCTQW9uFYLrhLGvCPA1Q",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/9FY0Pt9fyxY"
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