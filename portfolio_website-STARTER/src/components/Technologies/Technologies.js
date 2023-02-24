import React from 'react';
import { DiAngularSimple, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
  This cheat sheet features the most important and commonly used Git commands for easy reference. INSTALLATION & GUIS. With platform specific installers for Git, ...

  </SectionText>
  <List>
    <ListItem>
      <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>
          Frontend
        </ListTitle>
      <ListParagraph>
        Expereiicen With <br/>
        Rect.JS
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>
        Backend
        </ListTitle>
      <ListParagraph>
        Expereiicen With <br/>
        Node.JS
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiAngularSimple size="3rem"/>
      <ListContainer>
        <ListTitle>
          UI/UX
        </ListTitle>
      <ListParagraph>
        Expereiicen With <br/>
        Rect.JS
      </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;
