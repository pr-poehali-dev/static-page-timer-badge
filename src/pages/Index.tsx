const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex-1" />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600">тут будет отображаться ваш проект</p>
      </div>
      <div className="flex-1 flex items-end pb-8">
        <span className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
          Подождите 5 минут, Юра создает первую версию проекта с нуля
        </span>
      </div>
    </div>
  );
};

export default Index;