"use client"
import { useState } from "react";
import Ingredients from "./Ingredients";
import Alcohol from "./Alcohol";
import Taste from "./Taste";
import Mood from "./Mood";
import { useRouter } from "next/navigation";
import parseResponse from "@/app/lib/parseResponse";
import Loading from "@/app/components/Loading";

const Top = () => {
    const [cocktail, setCocktail] = useState(null);
    const router = useRouter();

      // 材料
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };
  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

    // アルコール
    const [alcohol, setAlcohol] = useState(50);
    const handleAlcoholChange = (alcohol) => {
      setAlcohol(alcohol);
    };
  
 // 味わい
 const [taste, setTaste] = useState(50);
 const handleTasteChange = (taste) => {
   setTaste(taste);
 };

 // 気分
 const [mood, setMood] = useState("");
 const handleMoodChange = (mood) => {
   setMood(mood);
 };

 // ローディング
 const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
  if (!ingredients.length) {
    // 材料が入力されていない場合
    alert("材料を入力してください");
    return;
  } else if (!mood) {
    // 気分が入力されていない場合
    alert("気分を入力してください");
    return;
  }
  e.preventDefault();

  setLoading(true);
  try {
   
   const res = await fetch('/api/submit-gemini',{
    method:"POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients, alcohol, taste, mood })
   })
   const response = await res.json()

    // レスポンスをイイ感じにフォーマット
    const parsedCocktail =await parseResponse(
      response.response
    );
    setCocktail(parsedCocktail);
    // カクテルページに移動
    localStorage.setItem('cocktail', JSON.stringify(parsedCocktail))
    router.push("/cocktail");
    // ローディングを非表示
    setLoading(false);
  } catch (error) {
    // ローディングを非表示
    setLoading(false);
  }
}
 

  return (
    
    <div>
       {loading && <Loading />}
    <Ingredients
      addIngredient={addIngredient}
      ingredients={ingredients}
      removeIngredient={removeIngredient}
    />

    <Alcohol handleAlcoholChange={handleAlcoholChange} />

    <Taste handleTasteChange={handleTasteChange} />

    <Mood handleMoodChange={handleMoodChange} />

    <button
      onClick={handleSubmit}
      className="bg-orange-400 p-2 rounded-md text-white block w-full mt-8 hover:bg-orange-500 duration-300"
    >
      カクテルを生成
    </button>
  </div>
  )
}


export default Top