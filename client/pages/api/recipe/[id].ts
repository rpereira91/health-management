import type { NextApiRequest, NextApiResponse } from 'next'
import { recipes } from '../../../data/recipes'
import { RecipeType } from '../../../types'
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<RecipeType>
  ) {
    const { id } = req.query
    const recipe = recipes.filter(r => r.id !== id)
    res.status(200).json(recipe[0])
  }