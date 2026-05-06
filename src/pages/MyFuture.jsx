import React from 'react';

const MyFuture = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm mt-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Мій розвиток</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 mb-10 italic text-xl text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-lg">
        "Найкращий спосіб передбачити майбутнє — створити його."
      </blockquote>

      <h2 className="text-2xl font-semibold mb-6">3 кроки до мети:</h2>
      
      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-500 mb-10">
        
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-blue-50 p-4 rounded-lg shadow border border-blue-100">
            <h3 className="font-bold text-lg mb-1">Поглиблення React & Frontend</h3>
            <p className="text-gray-700">Опанувати складний стейт-менеджмент, оптимізацію рендерів та сучасні інструменти екосистеми.</p>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-indigo-50 p-4 rounded-lg shadow border border-indigo-100">
            <h3 className="font-bold text-lg mb-1">Майстерність Backend (C# & SQL)</h3>
            <p className="text-gray-700">Навчитися будувати надійні API, працювати зі складними зв'язками в базах даних (3NF і вище) та архітектурою.</p>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-purple-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">3</div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-purple-50 p-4 rounded-lg shadow border border-purple-100">
            <h3 className="font-bold text-lg mb-1">Full-stack розробка</h3>
            <p className="text-gray-700">Самостійно проєктувати та розгортати повноцінні комерційні додатки від бази даних до інтерфейсу.</p>
          </div>
        </div>

      </div>

      <section className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3">Робота мрії 💼</h2>
        <p className="text-gray-300 leading-relaxed">
         </p>
      </section>
    </div>
  );
};

export default MyFuture;