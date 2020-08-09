import React from 'react';
import { ReactComponent as IconPin } from 'src/assets/icons/pin.svg';
import { ReactComponent as IconWorld } from 'src/assets/icons/world.svg';
import { ReactComponent as IconMail } from 'src/assets/icons/mail.svg';
import { Subtitle } from 'src/styles/components';
import { SidebarWrapper, ProfilePicture, AdressContent, Skills } from './style';
import Skill from '../Skill';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <ProfilePicture>
        <img src="http://api.adorable.io/avatars/285/1" alt="Dafiny Souza" />
      </ProfilePicture>
      <Subtitle>Contato</Subtitle>
      <AdressContent>
        <figure>
          <picture>
            <IconWorld />
          </picture>
          <figcaption>
              <h3>dafinysouza.com</h3>
          </figcaption>
        </figure>
        <figure>
          <picture>
            <IconMail />
          </picture>
          <figcaption>
              <h3>dafinysouza@outlook.com</h3>
          </figcaption>
        </figure>
        <figure>
          <picture>
            <IconPin />
          </picture>
          <figcaption>
              <h3>Porto Alegre, RS</h3>
          </figcaption>
        </figure>
      </AdressContent>
      <Skills>
        <Subtitle></Subtitle>
        <Skill title="JavaScript" percent="40%" />
      </Skills>
    </SidebarWrapper>
  );
}
