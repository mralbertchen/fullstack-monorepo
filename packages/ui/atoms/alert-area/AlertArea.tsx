import { Alert, chakra } from '@chakra-ui/react';
import { InfoIcon, WarningIcon } from '@chakra-ui/icons';
import hexToRGB from '../../utils/hexToRGB';

const STATUSES = {
  info: { color: `#ffd800`, icon: InfoIcon },
  error: { color: `#ff0000`, icon: WarningIcon },
};

export const AlertArea = (
  {
    status,
    children,
  }: { status?: 'info' | 'error'; children?: JSX.Element | string } = {
    status: `info`,
    children: ``,
  },
) => {
  const { color, icon: BaseIcon } = STATUSES[status || `info`];

  const [r, g, b] = hexToRGB(color);

  return (
    <Alert
      border={`1px solid rgba(${r}, ${g}, ${b}, 0.2)`}
      boxSizing="border-box"
      borderRadius="20px"
      color={color}
      fontWeight="normal"
      fontSize="14px"
      padding="16px"
      flex="none"
      order={0}
      flexGrow={0}
      margin="16px 0px"
      background={`linear-gradient(-45deg,rgba(${r}, ${g}, ${b}, 0.2) -24.26%,rgba(${r}, ${g}, ${b}, 0) 90.16%)`}
      fontFamily="opensans"
      status={status}
    >
      <chakra.span px={3}>
        <BaseIcon />
      </chakra.span>
      {children}
    </Alert>
  );
};
