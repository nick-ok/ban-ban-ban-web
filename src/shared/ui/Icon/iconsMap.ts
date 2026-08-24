import { type ComponentType, type SVGProps } from 'react';

const iconModules = import.meta.glob('/src/shared/assets/icons/*.svg', {
  eager: true,
  import: 'default',
});

export const iconsMap = Object.entries(iconModules).reduce(
  (acc, [path, component]) => {
    const name = path.split('/').pop()?.replace('.svg', '');

    if (name) {
      acc[name] = component as ComponentType<SVGProps<SVGSVGElement>>;
    }

    return acc;
  },
  {} as Record<string, ComponentType<SVGProps<SVGSVGElement>>>,
);
