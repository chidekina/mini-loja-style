import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonCard = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  transition: all ${props => props.theme.transitions.normal};
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.border} 25%, 
    ${props => props.theme.colors.surface} 50%, 
    ${props => props.theme.colors.border} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 2s infinite;
`;

const SkeletonImage = styled(SkeletonBase)`
  aspect-ratio: 1;
  border-radius: ${props => props.theme.borderRadius.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SkeletonTitle = styled(SkeletonBase)`
  height: 1.25rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  width: 80%;
`;

const SkeletonTitleSecond = styled(SkeletonBase)`
  height: 1.25rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
  width: 60%;
`;

const SkeletonRating = styled(SkeletonBase)`
  height: 1rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  width: 40%;
`;

const SkeletonPrice = styled(SkeletonBase)`
  height: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
  width: 30%;
`;

const SkeletonButton = styled(SkeletonBase)`
  height: 2.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
`;

const Skeleton = () => {
  return (
    <SkeletonCard aria-label="Carregando produto...">
      <SkeletonImage />
      <SkeletonTitle />
      <SkeletonTitleSecond />
      <SkeletonRating />
      <SkeletonPrice />
      <SkeletonButton />
    </SkeletonCard>
  );
};

export default Skeleton;