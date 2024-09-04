import React from 'react';

export default function Image({src, alt, width}) {
  return <img src={require(`@site/static/${src}`).default} alt={alt} style={{maxWidth: width, height: 'auto'}} />;
}