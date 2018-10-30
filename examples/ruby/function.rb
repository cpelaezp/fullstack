
def imprimir
    valor = "esto es una variable"
	puts "dgshadgas #{valor}"
	yield
	yield
	puts 'Final'
end

imprimir do
	puts 'hola mundo...' 
	puts 1 + 2
end	

puts "Ingrese texto"
text = gets.chomp

puts "valor es #{text}"

unlambda = -> (name) { puts "hello #{name}"}
unproc = Proc.new {|name| puts "hello #{name}" }

lambda.call("jose")