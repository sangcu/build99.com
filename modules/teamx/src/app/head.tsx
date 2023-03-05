import Script from "next/script"

export default function Head() {
  return (
    <>
      <title>yLeader - Helping people succeed</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="A toolkit for tech lead to help people succeed" />
      <link rel="icon" href="/favicon.ico" />    
      <Script id="show-banner" strategy="afterInteractive">
          {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "g3thda132s");
      `}
        </Script>
    </>
  )
}
