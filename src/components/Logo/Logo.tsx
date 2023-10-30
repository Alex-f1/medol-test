import React from 'react';
import Image from 'next/image';

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <Image
          src="/logo.png"
          alt="MEDOL logo"
          width={200}
          height={58}
          priority
        />
      </a>
    </div>
  )
}

export default Logo;