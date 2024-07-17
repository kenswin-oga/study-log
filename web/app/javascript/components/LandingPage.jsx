import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '1.5rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'relative', padding: '1.5rem 0', maxWidth: '36rem', margin: '0 auto' }}>
        <div style={{ position: 'relative', padding: '2.5rem 1rem', backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '0.5rem' }}>
          <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>勉強時間記録アプリ</h1>
            <div>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>効率的に勉強時間を管理し、目標達成をサポートします。</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#4b5563', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>簡単な時間記録</li>
                <li style={{ marginBottom: '0.5rem' }}>詳細な統計とグラフ</li>
                <li style={{ marginBottom: '0.5rem' }}>カスタマイズ可能な設定</li>
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button style={{ padding: '0.5rem 1rem', backgroundColor: '#e5e7eb', color: '#1f2937', borderRadius: '0.25rem', cursor: 'pointer' }}>
                  ログイン
                </button>
                <button style={{ padding: '0.5rem 1rem', backgroundColor: '#e5e7eb', color: '#1f2937', borderRadius: '0.25rem', cursor: 'pointer' }}>
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