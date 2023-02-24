import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
  <Div1>
    <Link  href="/">
    <a style={{display:"flex",alignItems:"center",color:"white",marginBottom:"20"
    }}>
    <DiCssdeck size="3rem"></DiCssdeck> <Span>Portfolio</Span>

    </a>

    </Link>
  </Div1>
<Div2>
  <li>
    <Link href="#projrcts">
      <NavLink>Projrcts</NavLink>

    </Link>
  </li>
  <li>
    <Link href="#tech">
      <NavLink>Technologies</NavLink>

    </Link>
  </li>
  <li>
    <Link href="#projrcts">
      <NavLink>Projrcts</NavLink>

    </Link>
  </li>
</Div2>
<Div3 >
<SocialIcons href="http://youtube.com">
<AiFillGithub size="3rem"/>

</SocialIcons>
<SocialIcons href="http://youtube.com">
<AiFillLinkedin size="3rem"/>

</SocialIcons>
<SocialIcons href="http://youtube.com">
<AiFillInstagram size="3rem"/>

</SocialIcons>
</Div3>

    </Container>

);

export default Header;
