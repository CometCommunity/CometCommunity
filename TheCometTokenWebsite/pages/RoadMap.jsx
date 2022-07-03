import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../styles/theme';

const timelineItems = [
  {
    date: 'November 1, 2021',
    title: 'Comet was born',
    body: 'THE meme token was born  ',
    passed: true,
  },
  {
    date: 'December 6, 2021',
    title: 'Comet token added ergomixer',
    body: 'Comet token added on ergomixer so you can sent your comet anonymously and pay for your hookers.',
    passed: true,
  },
  {
    date: 'February 6, 2022',
    title: 'First nft gamlbing pre sales series',
    body: 'We launch our successfull nft gamlbing series',
    passed: true,
  },
  {
    date: ' February 14, 2022',
    title: '10k wallets Airdrop with one transtaction',
    body: 'We successfully did 10K wallets airdrop with only one transtaction and we broke a record.',
    passed: true,
  },
  {
    date: 'March 6 ,2022',
    title: 'Pre-Sales',
    body: 'First Pre sales of COMET token.Presale price: 1erg= 200k COMET tokens.',
    passed: true,
  },
  {
    date: 'March , 2022',
    title: 'Refundable Ico',
    body: 'COMET will do the First refundable ICO in ergo blockhain ',
    passed: true,
  },
  {
    date: 'April, 2022',
    title: 'Ergodex listing',
    body: 'COMET token will be listed on ergodex ',
    passed: true,
  },
  {
    date: ' 2022',
    title: 'MINING COMET',
    body: 'Miners will get COMET token rewards. ',
    passed: true,
  },
  {
    date: ' 2022',
    title: 'Rektorry(lottery)',
    body: 'Soon lottery from COMET, Buy only if you want to get rekt ',
    passed: false,
  },
  {
    date: ' 2022',
    title: 'Staking COMET',
    body: 'You will be able to Stake COMET TOKEN ',
    passed: false,
  },
];

const RoadMap = () => {
  return (
    <Timeline position="right" sx={{ mt: -3 }}>
      {timelineItems.map((item, i) => {
        return (
          <Box key={`timeline_item_${i}`}>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0', maxWidth: '30%' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {item.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                {i == 0 ? '' : <TimelineConnector />}
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  color={
                    item.passed
                      ? theme.palette.text.secondary
                      : theme.palette.text.primary
                  }
                  sx={{ textDecoration: item.passed ? 'line-through' : 'none' }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.body}</Typography>
              </TimelineContent>
            </TimelineItem>
          </Box>
        );
      })}
    </Timeline>
  );
};

export default RoadMap;
