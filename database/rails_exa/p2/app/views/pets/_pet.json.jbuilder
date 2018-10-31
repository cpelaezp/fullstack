json.extract! pet, :id, :type, :name, :created_at, :updated_at
json.url pet_url(pet, format: :json)
