module api
	module d1
		class ArticlesController < ApplicationCOntroller
			def index
				@articles = Articulo.order('created_at DESC')
				render json: {status: 'SECCESS', message:'adsasd', data:articles}
			end	
		end
	end
end				