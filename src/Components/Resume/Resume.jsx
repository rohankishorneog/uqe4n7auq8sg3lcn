import React from 'react'

const Resume = () => {
  const pdfFileName = 'RohanKishorNeog_.Resume.pdf';
  const pdfFilePath = process.env.PUBLIC_URL + '/' + pdfFileName;


  return (
    <>
      
            {/* section for Download link to resume */}

            <section>
                <p>Hi, I am Rohan Kishor Neog. I am a fullstack developer. Here is a link to my resume:</p>
                <a href={pdfFilePath} download>Download</a>

...
            </section>
            </>
  )
}

export default Resume