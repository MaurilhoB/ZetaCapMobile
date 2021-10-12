import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

import { Container, Row } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <Row>
        <ContentLoader height={60}>
          <Circle cx="30" cy="30" r="30" />
          <Rect x="70" y="0" width="100%" height={25} />
          <Rect x="70" y="30" width="100%" height={25} />
        </ContentLoader>
      </Row>
      <Row>
        <ContentLoader height={60}>
          <Circle cx="30" cy="30" r="30" />
          <Rect x="70" y="0" width="100%" height={25} />
          <Rect x="70" y="30" width="100%" height={25} />
        </ContentLoader>
      </Row>
      <Row>
        <ContentLoader height={60}>
          <Circle cx="30" cy="30" r="30" />
          <Rect x="70" y="0" width="100%" height={25} />
          <Rect x="70" y="30" width="100%" height={25} />
        </ContentLoader>
      </Row>
      <Row>
        <ContentLoader height={60}>
          <Circle cx="30" cy="30" r="30" />
          <Rect x="70" y="0" width="100%" height={25} />
          <Rect x="70" y="30" width="100%" height={25} />
        </ContentLoader>
      </Row>
      <Row>
        <ContentLoader height={60}>
          <Circle cx="30" cy="30" r="30" />
          <Rect x="70" y="0" width="100%" height={25} />
          <Rect x="70" y="30" width="100%" height={25} />
        </ContentLoader>
      </Row>
      <Row>
        <ContentLoader height={60}>
          <Circle cx="30" cy="30" r="30" />
          <Rect x="70" y="0" width="100%" height={25} />
          <Rect x="70" y="30" width="100%" height={25} />
        </ContentLoader>
      </Row>
    </Container>
  );
};

export default Loader;
