import React from 'react';
import Link from 'next/link';

// const links = [
//   { href: '#', label: 'ZEIT' },
//   { href: '#', label: 'GitHub' },
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

const Nav = () => (
  <nav>
    {/* <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul> */}
    <br />
    <h3 color="white">Femory</h3>
    <h4>Boost your feminist memory</h4>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background-color: #3f8a53;
        height: 110px;
      }
   
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 13px;
      }
      h3 {
        color: white;
        font-family: tahoma;
      }
      h4 {
        color: white;
        font-family: tahoma;
      }
    `}</style>
  </nav>
);

export default Nav;
