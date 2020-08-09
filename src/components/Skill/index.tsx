import React, { memo } from 'react';
import { SkillContent, SkillBar } from './style';
import { H3 } from 'src/styles/components';

interface Props {
    title: string,
    percent: string
}

function Skill({title, percent}: Props) {
    return (
        <SkillContent>
            <H3>{title}</H3>
            <SkillBar title={percent} />
        </SkillContent>
    )
}

export default memo(Skill);