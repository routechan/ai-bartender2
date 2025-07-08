
const Loading = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 fixed top-0 left-0 z-50">
    <div className="flex flex-col justify-center items-center h-full">
      <div>
        <img
          src="/cocktail.png"
          alt="cocktail"
          className="w-48 animate-spin"
        />
      </div>
      <p className="mt-4 text-lg font-medium text-orange-600 animate-pulse">
        カクテルを作成中...(20秒くらいかかります)
      </p>
    </div>
  </div>
  )
}

export default Loading