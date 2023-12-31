import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Erik Bahena's Profolio."
      />
      <meta
        name="keywords"
        content="erik bahena, erik, bahena, software portfolio, software engineer portfolio, web engineer, web developer, erik bahena portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Erik Bahena's Portfolio" />
      <meta
        property="og:description"
        content="Erik Bahena's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.tech" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Erik Bahena',
};
