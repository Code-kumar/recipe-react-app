import axios from 'axios';

const FetchRecipe = async (searchString) => {
    const res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KAY}`)
    console.log(searchString)
    // console.log(res.data.hits);
    return res.data.hits;
}
export default FetchRecipe;