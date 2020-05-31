import styles from './Card.module.scss'
import { useState, useEffect } from 'react'


export default function Card({ project, id }) {

    const [hover, setHover] = useState(false)
    const [el, setEl] = useState(false)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', hendleViewPort);
        setWidth(window.innerWidth)
    })

    const hendleViewPort = () => {
        if (!el) return
        if (width < 1024) {
            const folow = el.getBoundingClientRect()
            console.log(folow, width)
            if (folow.top >= 0 && folow.left >= 0 && folow.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                folow.bottom <= (window.innerHeight || document.documentElement.clientHeight))
                return setHover(true)
            else
                return setHover(false)
        }
        return null
    }

    return (
        <div className={styles.card}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            ref={el => {
                if (!el) return
                setEl(el)
            }}
        >
            <img src={project.img} alt={project.name} />
            <h3 className={styles.title}> {project.name}</h3>
            <div className={styles.desc}>

                <div className={!hover ? styles.descNone : styles.descData}>
                    <h4>{project.titile}</h4>
                    <p className={styles.descDataP}>{project.desc}</p>
                    <a className={styles.btn} href={project.url}>{project.btn_text}</a>
                </div>
                <span className={hover && styles.descNone}> {id < 10 ? "0" + id : id}</span>

            </div>
        </div >
    )
}

