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
                                        <Link href="/projects?tag=JavaScript">
                                            <span key='JavaScript' className='JavaScript'>
                                                <a href="/projects?tag=JavaScript">JavaScript</a>
                                            </span>
                                        </Link>
                                        <Link href="/projects?tag=React-js">
                                            <span key='React-js' className='React-js'>
                                                <a href="/projects?tag=React-js">React.js</a>
                                            </span>
                                        </Link>
                                        <Link href="/projects?tag=Python">
                                            <span key='Python' className='Python'>
                                                <a href="/projects?tag=Python">Python</a>
                                            </span>
                                        </Link>
                                        <Link href="/projects?tag=Html">
                                            <span key='Html' className='Html'>
                                                <a href="/projects?tag=Html">Html</a>
                                            </span>
                                        </Link>
                                        <Link href="/projects?tag=Css">
                                            <span key='Css' className='Css'>
                                                <a href="/projects?tag=Css">Css</a>
                                            </span>
                                        </Link>
                                        <Link href="/projects?tag=Tailwind-Css">
                                            <span key='Tailwind-Css' className='Tailwind-Css'>
                                                <a href="/projects?tag=Tailwind-Css">Tailwind Css</a>
                                            </span>
                                        </Link>
                                        <Link href="/projects?tag=SQL">
                                            <span key='SQL' className='SQL'>
                                                <a href="/projects?tag=SQL">SQL</a>
                                            </span>
                                        </Link>
                                        <Link href="/projects?tag=Software-Design">
                                            <span key='Software-Design' className='Software-Design'>
                                                <a href="/projects?tag=Software-Design">Software-Design</a>
                                            </span>
                                        </Link>
                                        <Link href="/projects?tag=APIs">
                                            <span key='APIs' className='APIs'>
                                                <a href="/projects?tag=APIs">APIs</a>
                                            </span>
                                        </Link>

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
