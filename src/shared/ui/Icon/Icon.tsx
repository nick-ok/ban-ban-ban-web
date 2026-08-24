import { type SVGProps } from 'react';

import { iconsMap } from './iconsMap';
import type { IconName } from './types';

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 24, style, ...props }: Props) => {
  const IconComponent = iconsMap[name];

  if (!IconComponent) {
    console.warn(
      `Icon "${name}" not founded in folder src/shared/assets/icons`,
    );

    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    />
  );
};
