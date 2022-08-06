import * as React from 'react';

type Props = {
    recipeName: string,
    recipeCategory: string,
};

const RecipeCardHeader: React.FC<Props> = (props) => {
    return (
        <div>
            {props.recipeName}
            {props.recipeCategory}
        </div>
    )
}

export default RecipeCardHeader;