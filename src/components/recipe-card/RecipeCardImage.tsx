import * as React from 'react';

type Props = {
    recipeImage: string,
    recipeName: string,
}

const RecipeCardImage: React.FC<Props> = (props) => {
    const { recipeImage, recipeName} = props;
    
    return (
        <div>
            <img src={recipeImage} alt={recipeName} />
        </div>
    )
};

export default RecipeCardImage;