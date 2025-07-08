import Top from "@/features/home/components/Top";
import Link from "next/link";

export default function Home() {
  return (
   <>
   

    <h1 className="text-2xl font-bold text-center">
      <Link href="/"><img src="/AJlBQFtw9NM1Xit1751963807_1751963863.png" alt="AIバーテンダー" className="w-48 mx-auto"/> </Link>
    </h1>

    <p className="text-center text-sm mt-4">
      あなたの手元にある材料、アルコールの強さ、味、今の気分を入力すると
      <br />
      AIがオリジナルのカクテルを考え、レシピなどを教えてくれます
    </p>

  
          <div className="max-w-2xl mx-auto  p-4 bg-white rounded-lg shadow-md mt-6">
           <Top/>
          </div>
          </>
  )
}
