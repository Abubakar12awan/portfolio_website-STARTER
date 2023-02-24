import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectdemos=[{
  title:"Project1",
  description: "This cheat sheet features the most important and commonly used Git commands for easy reference. INSTALLATION & GUIS. With platform specific installers for Git, ..."
},{
  title:"Project1",
  description: "This cheat sheet features the most important and commonly used Git commands for easy reference. INSTALLATION & GUIS. With platform specific installers for Git, ..."
},{
  title:"Project1",
  description: "This cheat sheet features the most important and commonly used Git commands for easy reference. INSTALLATION & GUIS. With platform specific installers for Git, ..."
},{
  title:"Project1",
  description: "This cheat sheet features the most important and commonly used Git commands for easy reference. INSTALLATION & GUIS. With platform specific installers for Git, ..."
}]
const Projects = () => (
<Section nopadding id='projects'>
<SectionDivider/>
<SectionTitle main>
Projects

</SectionTitle>
<GridContainer>
{projects.map(({id,image,title,description,tags,source,visit})=>(
  <div>
    

    <BlogCard key={id} >

      <Img src={image}/>
<TitleContent>
  <HeaderThree title>{title}</HeaderThree>
  <Hr/>
</TitleContent>
<CardInfo>{description}</CardInfo>

<div>
  <TitleContent>
    Stack
    <TagList>
      {tags.map((tag,i)=>(
        <Tag key={i}>{tag}</Tag>
      )


      )}
    </TagList>
  </TitleContent>
</div>
      <UtilityList>
        <ExternalLinks href={visit}>
        Code

        </ExternalLinks>
        <ExternalLinks href={source}>
        Source

        </ExternalLinks>
      </UtilityList>
    </BlogCard>
    {/* {project.description} */}


  </div>


))}
</GridContainer>

</Section>
);

export default Projects;