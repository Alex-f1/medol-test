import React from 'react';
import './TitleBlocks.scss';

type TitleType = {
  title: string
}

function TitleBlocks({title}: TitleType) {
  return (
    <h2>{title}</h2>
  )
}

export default TitleBlocks;