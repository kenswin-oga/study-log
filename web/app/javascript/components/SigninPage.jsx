import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });

  const loginUser = async (sessionData) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({ session: sessionData }),
    });
    if (!response.ok) {
      throw new Error('ログインに失敗しました');
    }
    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', content: '' });

    try {
      const sessionData = { email: email.toLowerCase(), password };
      const result = await loginUser(sessionData);
      if (result.logged_in) {
        setMessage({ type: 'success', content: 'ログインに成功しました！' });
        // ユーザーのマイページにリダイレクト
        window.location.href = `/home`;
      } else {
        throw new Error(result.error || 'ログインに失敗しました');
      }
    } catch (error) {
      setMessage({ type: 'error', content: error.message || 'ログインに失敗しました。メールアドレスとパスワードを確認してください。' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-center mb-4">ログイン</h2>
        </div>
        <div className="px-6 py-4">
          {message.content && (
            <div className={`mb-4 p-3 rounded ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message.content}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                'Loading...'
              ) : (
                <>
                  <LogIn className="mr-2" size={16} />
                  ログイン
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;