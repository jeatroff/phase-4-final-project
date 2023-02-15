class Like < ApplicationRecord
    belongs_to :user_1, class_name: "User"
    belongs_to :user_2, class_name: "User"

    after_create :default_values

    def default_values
        self.is_match ||= false
        self.messages ||= []
    end
end
