class MessagesController < InheritedResources::Base

  private

    def message_params
      params.require(:message).permit(:name, :email, :message)
    end

end
