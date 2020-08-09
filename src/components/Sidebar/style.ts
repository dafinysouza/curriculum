import { Primaria, Secundaria, Terciaria } from 'src/styles/components';
import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
    background-color: ${Terciaria};
    padding: 250px 50px 50px 50px;
`;
export const ProfilePicture = styled.picture`
    width: 250px;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    display: block;
    border: 3px solid ${Primaria};
    margin-bottom: 50px;
    img {
        width: 100%;
        display: flex;
    }
`;

export const AdressContent = styled.article`
    figure {
        display: grid;
        grid-template-columns: 30px auto;
        gap: 30px;
        margin: 0;
        padding: 10px 0;
        picture {
            svg {
                max-width: 100%;
                path {
                    fill: ${Secundaria};
                }
            }
        }
        figcaption {
                align-self: center;
            h3 {
                color: ${Secundaria};
                margin: 0;
                font-size: 1rem;
            }
        }
    }
`;

export const Skills = styled.article``;
