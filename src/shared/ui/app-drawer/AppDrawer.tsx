import { useEffect, useState, type ReactNode, type RefObject } from 'react';

import { Drawer } from 'vaul';

import { AudioService } from '@/features/audio';

import styles from './AppDrawer.module.css';

interface Props {
  containerRef?: RefObject<HTMLElement | null>;
  children: (props: {
    openDrawer?: () => void;
    closeDrawer?: () => void;
  }) => ReactNode;
  trigger?: ReactNode;
  withSound?: boolean;
  open?: boolean;
  showClose?: boolean;
  direction?: 'bottom' | 'left' | 'right' | 'top';
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
}

export const AppDrawer = ({
  children,
  trigger,
  withSound = true,
  direction = 'right',
  open,
  onOpenChange,
  onClose,
  containerRef,
}: Props) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;

  const isOpen = isControlled ? open : internalOpen;
  const setIsOpen = isControlled ? onOpenChange : setInternalOpen;

  useEffect(() => {
    if (isOpen && withSound) {
      AudioService.play({ key: 'drawer' });
    }
  }, [isOpen]);

  return (
    <Drawer.Root
      direction={direction}
      dismissible={true}
      onClose={onClose}
      autoFocus={true}
      open={isOpen}
      onOpenChange={setIsOpen}
      // oxlint-disable-next-line react/refs
      container={containerRef?.current}
    >
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />

        <Drawer.Content className={styles.content} data-type={direction}>
          <div className={styles.inner}>
            {direction === 'bottom' && (
              <div className={styles.handleWrapper}>
                <div className={styles.handle} />
              </div>
            )}

            <div className={styles.scrollableArea}>
              {children({
                openDrawer: () => setIsOpen?.(true),
                closeDrawer: () => setIsOpen?.(false),
              })}
            </div>

            {direction === 'top' && (
              <div
                className={styles.handleWrapper}
                style={{ position: 'sticky', bottom: 0, top: 'auto' }}
              >
                <div className={styles.handle} />
              </div>
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
