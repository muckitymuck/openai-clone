import React from "react";


export default function OptionSelection({ arrayItems, selectOption }) {
    return (
        <>
            <h2 className="heading">OpenAI React Clone</h2>

            <div className="grid-main">
                {arrayItems.map((item) => {
                    return (
                        <div className="grid-child" onClick= {() => selectOption(item.option)}>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                        </ div>
                    );
                })}
            </div>
        </>
    )
}