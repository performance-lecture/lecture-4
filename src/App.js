import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { fetchPhotos } from './redux/photos';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Header from './components/Header';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  const dispatch = useDispatch();
  const { photos } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  console.log('photos', photos);

  return (
    <AppWrap>
      <GlobalStyle />
      <Header />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-size: 16px;
  }

  ul, li, ol {
    list-style: none;
  }

  a, a:visited, a:active, a:hover {
    color: initial;
  }
`;

export default App;
