'use client'

import { DescriptionWrapper } from '@styles/styled';

export const Description = ({ children }: { children: React.ReactNode }) => {
    return (
        <DescriptionWrapper>
            { children }
        </DescriptionWrapper>
    );
};
