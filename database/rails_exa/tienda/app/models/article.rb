class Article < ApplicationRecord
	validate:titulo, presence:true
	validate:contenido, presence:true
end
