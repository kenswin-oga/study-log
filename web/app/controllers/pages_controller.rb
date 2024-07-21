class PagesController < ApplicationController
  before_action :require_login, only: [:home]
  include SessionsHelper

  def landing
  end

  def home
    @user = current_user
  end

  private

  def require_login
    unless current_user
      redirect_to login_path, alert: 'ログインが必要です。'
    end
  end
end