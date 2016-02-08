require 'rails_helper'

RSpec.describe SiteController, type: :controller do
  describe "#index" do
    it "renders the appropriate view" do
      get :index
      expect(subject).to render_template :index
    end
  end
end
