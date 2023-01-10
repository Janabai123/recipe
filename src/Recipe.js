import React from 'react'
import style from "./recipe.module.css"
const Recipe = ({title,calories,images,ingredients}) => {
  return (
    <div className={style.recipe}>
        <h1>{title}</h1>
        <p>{calories}</p>
        <ol>
        {ingredients.map(ingredient=>(
            <li>{ingredient.text}</li>

        ))}
        </ol>
        <img  className={style.image} src={images} alt=''></img>
    </div>
  )
}

export default Recipe