import React from 'react';
import { Button } from 'src/styles/components';
import { useTheme } from 'src/ThemeContext';
import { CurriculoContainer } from './style';
import Sidebar from 'src/components/Sidebar';

export default function Curriculo() {
  const themeToggle = useTheme();

  return (
    <>
      <CurriculoContainer>
        <Sidebar />
        <span></span>
      </CurriculoContainer>
      <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button>
    </>
  );
}
