import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <h1>Web</h1>
                    <h1>Developer</h1>
                </div>
                <div className={styles.foreground}>
                    <div className={styles.content}>
                        <h1 className={styles.name}>Erik Bahena</h1>
                        <h6 className={styles.bio}>Software Engineer</h6>
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <div className={styles.content}>
                                    <h4>Skill Set</h4>
                                    <div className={styles.tags}>
                                        <span key='JavaScript' className='JavaScript'>
                                            JavaScript
                                        </span>
                                        <span key='React-js' className='React-js'>
                                            React.js
                                        </span>
                                        <span key='Python' className='Python'>
                                            Python
                                        </span>
                                        <span key='Html' className='Html'>
                                            Html
                                        </span>
                                        <span key='Css' className='Css'>
                                            Css
                                        </span>
                                        <span key='Tailwind-Css' className='Tailwind-Css'>
                                            Tailwind Css
                                        </span>
                                        <span key='SQL' className='SQL'>
                                            SQL
                                        </span>
                                        <span key='Software-Design' className='Software-Design'>
                                            Software-Design
                                        </span>
                                        <span key='APIs' className='APIs'>
                                            APIs
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/about">
                            <button className={styles.button}>About Me</button>
                        </Link>
                        {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
                        <Link href="/contact">
                            <button className={styles.outlined}>Contact</button>
                        </Link>
                    </div>
                    {/* <Illustration className={styles.illustration} /> */}
                    <div className={styles.right}>
                        <div className={styles.picture_boader}>
                            <Image
                                className={styles.picture}
                                src="/me.JPG"
                                width={290}
                                priority
                                height={290}
                                alt="Erik's Picture"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: { title: 'Home' },
    };
}
