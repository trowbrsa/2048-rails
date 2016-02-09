class User < ActiveRecord::Base
  validates :email, :username, :uid, :provider, presence: true

  def self.find_or_create_from_omniauth(auth_hash)
    user = self.find_by(uid: auth_hash["uid"], provider: auth_hash["provider"])
    # Find or create a user
    if user.nil?
      return user
    end
  end

  def self.find_or_create_from_omniauth(auth_hash)
   user = self.find_by(uid: auth_hash["uid"], provider: auth_hash["provider"])
   if !user.nil?
     # User found continue on with your life
     return user
   else
     # Create a new user
     user = User.new
     user.uid        = auth_hash["uid"]
     user.provider   = auth_hash["provider"]
     user.username   = auth_hash["info"]["name"]
     user.email      = auth_hash["info"]["email"]
     if user.save
       return user
     else
       return nil
     end
   end
  end
end
