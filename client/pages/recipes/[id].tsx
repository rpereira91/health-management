import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { RecipeType } from '../../types'
const Recipe = () => {
  const router = useRouter()
  const { id } = router.query
  const [recipe, setRecipe] = useState<RecipeType>({})
  useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`/api/recipe/${id}`)
            const data = await response.json()
            setRecipe(data)
        }
        fetchRecipe()
    }, [])
    console.log(recipe);
    
  return (
    <div>
        {
            recipe.name && (
                <p  className="text-3xl font-bold underline">Name: {recipe.name}</p>
            )
        }
    </div>
    )
}

export default Recipe
