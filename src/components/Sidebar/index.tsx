import React from 'react';
import { SidebarWrapper, ProfilePicture } from './style';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <ProfilePicture>
        <img src="http://api.adorable.io/avatars/285/1" alt="Dafiny Souza" />
      </ProfilePicture>
    </SidebarWrapper>
  );
}
