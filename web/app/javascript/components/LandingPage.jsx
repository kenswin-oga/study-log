import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-md sm:rounded-lg sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6">勉強時間記録アプリ</h1>
            <div className="space-y-6">
              <p className="text-gray-700">効率的に勉強時間を管理し、目標達成をサポートします。</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>簡単な時間記録</li>
                <li>詳細な統計とグラフ</li>
                <li>カスタマイズ可能な設定</li>
              </ul>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
                  ログイン
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
                  新規登録
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;