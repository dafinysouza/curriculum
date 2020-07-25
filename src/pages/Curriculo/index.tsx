import React from 'react';
import { Button } from 'src/styles/components';
import { useTheme } from 'src/ThemeContext';
import { CurriculoContainer } from './style';

export default function Curriculo() {
  const themeToggle = useTheme();

  return (
    <>
      <CurriculoContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut doloribus beatae ut asperiores debitis
          sequi, assumenda blanditiis animi voluptatibus ducimus, dolores natus nostrum magni maiores perferendis
          ratione, numquam eligendi.
        </p>
        <p>
          Facilis quia iure iusto saepe eveniet eaque praesentium id aspernatur, aperiam maxime eos fugiat vel
          cupiditate voluptatibus natus mollitia dolore repellendus nisi labore incidunt sunt adipisci? Beatae, ratione
          nobis. Dolores.
        </p>
        <p>
          Officia, voluptatum cupiditate aperiam temporibus eligendi officiis sequi tempore fugiat quam, esse architecto
          atque sint impedit, quos dolorem neque quibusdam fuga dolore unde sapiente perferendis hic repellendus quidem.
          Et, laboriosam.
        </p>
        <p>
          Atque magni non odit voluptas, inventore dicta necessitatibus nesciunt sunt praesentium consequatur voluptate
          iste incidunt numquam ratione! Explicabo, possimus dicta non expedita et adipisci error ratione, voluptates
          sed modi commodi?
        </p>
        <p>
          Impedit alias dicta reprehenderit aperiam tempora eligendi nesciunt itaque iste officiis nobis deserunt
          obcaecati earum reiciendis optio vero perspiciatis minima ducimus totam accusamus voluptatibus asperiores
          nostrum, voluptates dignissimos. Unde, iusto.
        </p>
      </CurriculoContainer>
      <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button>
    </>
  );
}
