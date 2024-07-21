import React, { useState, useEffect } from 'react';
import { BarChart2, Settings, LogOut, Target, PlusCircle } from 'lucide-react';

const HomePage = ({ user }) => {
  const [studyTime, setStudyTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [dailyStudyTime, setDailyStudyTime] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setStudyTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    setDailyStudyTime(prevTime => prevTime + studyTime);
    setStudyTime(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatDailyTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    return `${hours}時間${minutes}分`;
  };

  const totalStudyTime = studyTime + dailyStudyTime;

  const handleLogout = async () => {
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
      const response = await fetch('/api/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        credentials: 'same-origin'
      });
      if (response.ok) {
        window.location.href = '/login';
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
      setError('ログアウトに失敗しました。再度お試しください。');
    }
  };

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">マイページ</h1>
      <h2 className="text-xl font-semibold mb-6 text-gray-600">{user.name}さん、こんにちは！</h2>
      <p className="text-gray-600 mb-6">メールアドレス: {user.email}</p>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">学習タイマー</h2>
        <div className="flex flex-col items-center">
          <div 
            className="text-6xl font-bold mb-4" 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.05em'
            }}
          >
            {formatTime(studyTime)}
          </div>
          <div className="text-xl mb-4">
            今日の合計: {formatDailyTime(totalStudyTime)}
          </div>
          <div className="flex gap-4">
            <button 
              onClick={isTimerRunning ? stopTimer : startTimer}
              className={`px-6 py-3 text-lg text-white rounded-md ${isTimerRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
            >
              {isTimerRunning ? '停止' : '開始'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">目標</h2>
          <div className="flex items-center">
            <Target size={24} />
            <p className="ml-2">1日3時間の学習</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${Math.min((totalStudyTime / (3 * 3600)) * 100, 100)}%`}}></div>
          </div>
          <p className="text-sm mt-1">進捗: {Math.min(Math.round((totalStudyTime / (3 * 3600)) * 100), 100)}%</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">クイックアクション</h2>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-2 flex items-center justify-center">
            <PlusCircle className="mr-2" size={16} />
            新規記録追加
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 flex items-center justify-center">
            <BarChart2 className="mr-2" size={16} />
            統計を見る
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 flex items-center">
          <Settings className="mr-2" size={16} />
          設定
        </button>
        <button 
          onClick={handleLogout}
          className="border border-gray-300 text-red-500 py-2 px-4 rounded-md hover:bg-gray-100 flex items-center"
        >
          <LogOut className="mr-2" size={16} />
          ログアウト
        </button>
      </div>
    </div>
  );
};

export default HomePage;