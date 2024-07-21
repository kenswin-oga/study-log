module Api

    class UsersController < ApplicationController
        skip_before_action :verify_authenticity_token

        def create
            user = User.new(user_params)
            if user.save
                render json: { message: 'User created successfully' }, status: :created
            else
                Rails.logger.debug "User validation failed: #{user.errors.full_messages}"
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            end
        end

        private

        def user_params
            params.require(:user).permit(:name, :email, :password)
        end
    end
end
  