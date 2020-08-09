import React from 'react';
import { SkillContent, SkillBar } from './style';
import { H3 } from 'src/styles/components';

interface Props {
    title: string,
    percent: string
}

export default function Skill({title, percent}: Props) {
    return (
        <SkillContent>
            <H3>{title}</H3>
            <SkillBar title={percent} />
        </SkillContent>
    )
}