import React from "react";
import "./index.css";
import { data } from "./data";

const CareerFramework = () => {

    const [current, setCurrent] = React.useState(null);
    const [clicked, setClicked] = React.useState(null);

    const currentOrClicked = React.useMemo(() => {
        return clicked || current
    }, [current, clicked])

    const handleClicked = (d) => {
        if (clicked) setClicked(null);
        else setClicked(d)
    }

    const handleMouseLeave = () => {
        if (!clicked) setCurrent(null)
    }

    const handleMouseEnter = (d) => {
        // setClicked(null)
        setCurrent(d)
    }

    const handleClose = () => {
        setCurrent(null);
        setClicked(null);
    }

    return (
        <section id="career-wrapper">
            <h1 className="career-header">This is our Career Framework</h1>
            <div className="grid-wrapper">
                {currentOrClicked && (
                    <div className={clicked ? "current-career-item clicked" : "current-career-item"}>
                        <h2>{currentOrClicked.name}
                            {clicked && <button onClick={handleClose}>X</button>}

                        </h2>
                        <p>{currentOrClicked.description}</p>
                        {currentOrClicked.certifications &&

                            <>
                                <h3>Sertifiseringer</h3>
                                <ul>
                                    {currentOrClicked.certifications.map(cert => {
                                        return <li><a rel="noopener noreferrer" target="_blank" href={cert}>{cert}</a></li>
                                    })}
                                </ul>
                            </>
                        }
                    </div>
                )}
                {data.map(d => {
                    return (
                        <div onClick={() => handleClicked(d)} onMouseEnter={() => handleMouseEnter(d)} onMouseLeave={handleMouseLeave} className="career-grid-item" style={{
                            background: d.color,
                            gridColumnStart: d.pos.cS,
                            gridColumnEnd: d.pos.cE,
                            gridRowStart: d.pos.rS,
                            gridRowEnd: d.pos.rE,
                        }}>
                            {d.name}
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default CareerFramework;