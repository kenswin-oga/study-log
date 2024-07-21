module Api
    class SessionsController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]
      
      def create
        user = User.find_by(email: params[:session][:email].downcase)
        if user && user.authenticate(params[:session][:password])
          log_in user
          render json: { logged_in: true, user: user }
        else
          render json: { logged_in: false, error: 'Invalid email/password combination' }, status: :unauthorized
        end
      end
      
      def destroy
        session.delete(:user_id)
        @current_user = nil
        flash[:success] = "ログアウトしました。"
      end
    end
  end