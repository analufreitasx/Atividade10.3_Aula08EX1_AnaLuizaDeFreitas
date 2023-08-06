function SistemaBanco (saldoatual , valorcompra){
    if (valorcompra <= saldoatual){
        return alert (' Compra efetuada com sucesso! Seu novo saldo é R$ '+ (saldoatual - valorcompra) +'.')
    }
    else if (valorcompra > saldoatual){
        return alert(' Seu saldo é insuficiente para a compra.')
    }
}
let saldo_usuario = parseInt(prompt( 'Bem vindo! Digite seu saldo atual:'))
const compra = parseInt (prompt(' Insira o valor da compra que deseja realizar: '))
var result = SistemaBanco (saldo_usuario, compra)