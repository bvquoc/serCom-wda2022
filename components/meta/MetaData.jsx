import Head from "next/head";

const MetaData = ({ title, description, imgURL, URL, imgAlt }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || 'serCom'} />
        <meta property="og:title" content={title || 'serCom'} />
        <meta property="og:url" content={URL} />
        <meta property="url" content={URL} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content={imgURL || '/icon-512x512.png'} />
        <meta property="og:image:alt" content={imgAlt || 'serCom'} />
        <meta name="image" content={imgURL || '/icon-512x512.png'} />
      </Head>
    </>
  );
};

export default MetaData;
