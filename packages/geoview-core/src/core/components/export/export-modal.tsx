import { MouseEventHandler, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'; // TODO: refactor to use UI

import { MapContext } from '@/core/app-start';
import { exportPNG } from '@/core/utils/utilities';

/**
 * Interface used for home button properties
 */
interface ExportModalProps {
  className?: string | undefined;
  isShown: boolean;
  closeModal: MouseEventHandler<HTMLElement>;
}

/**
 * default properties values
 */
const defaultProps = {
  className: '',
};

/**
 * Export PNG Button component
 *
 * @returns {JSX.Element} the export button
 */
export default function ExportModal(props: ExportModalProps): JSX.Element {
  const { className, isShown, closeModal } = props;

  const mapConfig = useContext(MapContext);
  const { mapId } = mapConfig;

  const { t } = useTranslation();

  return (
    <Dialog open={isShown} onClose={closeModal} className={className}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          exportPNG(mapId);
        }}
      >
        <DialogTitle>{t('exportModal.title')}</DialogTitle>
        <DialogActions>
          <Button onClick={closeModal} size="small" autoFocus>
            {t('exportModal.cancelBtn')}
          </Button>
          <Button type="submit" onClick={closeModal} size="small">
            {t('exportModal.exportBtn')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

ExportModal.defaultProps = defaultProps;
