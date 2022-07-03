import { Tooltip } from '@mui/material';
import { useState } from 'react';

const CopyToClipboard = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onCopy = (content) => {
    navigator.clipboard.writeText(content);
    setShowTooltip(true);
  };

  return (
    <Tooltip
      open={showTooltip}
      title={'Link copied to clipboard!'}
      leaveDelay={1500}
      onClose={() => setShowTooltip(false)}
      {...(props.TooltipProps || {})}
    >
      {props.children({ copy: onCopy })}
    </Tooltip>
  );
};

export default CopyToClipboard;
