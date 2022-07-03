import { Typography, List, ListItem } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { styled } from '@mui/system';
import theme from '@styles/theme';
import MuiNextLink from '@components/MuiNextLink';

const MarkdownList = styled(List)({
  listStyle: 'disc',
  listStylePosition: 'inside',
  padding: 0,
  marginBottom: '2rem',
});

const MarkdownListItem = styled(ListItem)({
  display: 'list-item',
  color: theme.palette.text.secondary,
  paddingTop: 0,
});

const MarkdownRender = ({ description }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <Typography variant="h4" {...props} />,
        h2: ({ node, ...props }) => <Typography variant="h5" {...props} />,
        h3: ({ node, ...props }) => (
          <Typography variant="h6" sx={{ marginBottom: '0.2rem' }} {...props} />
        ),
        p: ({ node, ...props }) => <Typography variant="p" {...props} />,
        ul: ({ node, ...props }) => <MarkdownList {...props} />,
        li: ({ node, ...props }) => <MarkdownListItem {...props} />,
        a: ({ node, ...props }) => <MuiNextLink {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {description}
    </ReactMarkdown>
  );
};

export default MarkdownRender;
