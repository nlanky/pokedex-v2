// REACT
import { FC } from 'react';

interface SpriteProps {
  activeSprite?: boolean;
  altText: string;
  spriteUrl: string;
}

export const Sprite: FC<SpriteProps> = ({
  activeSprite = true,
  altText,
  spriteUrl,
}) => {
  if (!activeSprite) {
    return null;
  }

  return <img alt={altText} src={spriteUrl} />;
};
