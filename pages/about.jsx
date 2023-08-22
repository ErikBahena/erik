import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';

const AboutPage = () => {
    return (
        <>
            <h3>About Me</h3><br />
            <ul>
                <li><span role="img" aria-label="laptop">💻</span> Full Time Software Engineer @<a href='https://www.invintus.com/'>Invintus Media</a>.</li>
                <li><span role="img" aria-label="graduate">👨‍🎓</span><a href='https://www.bloomtech.com/learn-more-about-hiring'> Bloom Institute of Technology</a> Alumni.</li>
                <li><span role="img" aria-label="construction-worker">👷</span> Currently working on <b>AI</b> Captioning, Live Stream Creation/Management </li>
                <li><span role="img" aria-label="light-bulb">💡</span> Open to collaborating on projects and innovative ideas. </li>
            </ul>
            <br />
            <center>
                <h3>Resume (<a href={myResume} download="Erik-Bahena-Resume-2023.pdf">Download</a>)</h3>
                <br />
                <Document file={myResume}>
                    <Page pageIndex={0} />
                </Document>
            </center>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'About' },
    };
}

export default AboutPage;
