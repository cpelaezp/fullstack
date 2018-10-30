class CuentaBancaria
	#attr_accesor:nombre
	def initialize nombre,balance
		@balance = balance
		@nombre = nombre
	end
	
	def depositar cantidad
		@balance += cantidad
	end	

	def retirar cantidad
		@balance -=cantidad
	end	

	def saldo
		puts "El saldo es : #{@balance} dolares"
	end
end

#cuenta1 = CuentaBancaria.new "Marta"
#puts cuenta1.inspect

#cuenta1.depositar 1000
#cuenta1.saldo		
#cuenta1.retirar 500
#cuenta1.saldo