import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.div`
    width: 98%;
    height: 55px;
`;

const PageTitleSpan = styled.span`
    font-size: 35pt;
`;

const ContentTitle = ({ name }) => {
  return (
    <PageTitle>
      <PageTitleSpan>
        {name}
      </PageTitleSpan>
    </PageTitle>
  );
};

export default ContentTitle;