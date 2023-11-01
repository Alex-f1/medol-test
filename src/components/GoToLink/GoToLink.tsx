"use client";

import React from 'react';
import './GoToLink.scss';

type GoToLinkType = {
  name: string,
  url: string,
  target?: string,
};

function GoToLink({name, url, target}: GoToLinkType) {
  return (
    <a className="go-to-link" href={url}>
      {name}
      <i></i>
    </a>
  )
}

export default GoToLink;