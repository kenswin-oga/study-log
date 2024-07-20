Rails.application.routes.draw do
    # API用のルート
    namespace :api do
      post '/signup', to: 'users#create'
    end
  
    # ランディングページ（未ログインユーザー向け）
    root 'pages#landing'

#   # ユーザー認証関連
#   get '/login', to: 'sessions#new'
#   post '/login', to: 'sessions#create'
#   delete '/logout', to: 'sessions#destroy'
    get '/signup', to: 'users#new'

#   # アプリケーション本体（ログインユーザー専用）
#   authenticate :user do
#     # ホーム画面 / マイページ
#     get '/home', to: 'pages#home'
#     get '/dashboard', to: 'pages#dashboard'
    
#     # クイックスタート（タイマー）
#     resources :timers, only: [:create, :update]

#     # 記録
#     resources :study_sessions do
#       collection do
#         get 'quick_add'
#       end
#     end

#     # 統計
#     namespace :statistics do
#       get 'daily'
#       get 'weekly'
#       get 'monthly'
#       get 'by_subject'
#     end

#     # 目標設定
#     resources :goals

#     # 設定
#     namespace :settings do
#       get 'account'
#       patch 'update_account'
#       get 'notifications'
#       patch 'update_notifications'
#     end

#     # 科目
#     resources :subjects, except: [:show]
#   end

#   # 静的ページ
#   get '/about', to: 'pages#about'
#   get '/features', to: 'pages#features'
end