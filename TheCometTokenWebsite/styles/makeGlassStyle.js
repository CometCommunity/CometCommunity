const makeGlassBg = (theme) => ({
  backdropFilter: `blur( 5.5px )`,
  '*::WebkitBackdropFilter': `blur( 5.5px )`,
  borderRadius: `10px`,
  boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px;`,
  border:
    theme.palette.mode === 'dark'
      ? '1px solid rgba( 15, 15, 15, 0.25 )'
      : '1px solid rgba( 255, 255, 255, 0.25 )',
  background:
    theme.palette.mode === 'black'
      ? 'rgba( 255, 255, 255, 0.05)'
      : 'rgba( 29, 29, 32 )',
});

export default makeGlassBg;
