const balance = 1000
const PlusBalance = 0
const MinusBalance = 0
while (true) {
    const Action = +prompt("Выберите действие:\n1 - Проверить баланс\n2 - Пополнить счет\n3 - Снять наличные\n0 - Выйти ")
    if (Action == 0) {
        alert("Спасибо за визит!")
        break
    }
    else if (Action == 1) {
        alert(`Баланс: ${balance}`)
    }
    else if (Action == 2) {
        const PlusBalance = +prompt("Сумма пополнения")
        const newbalance = balance + PlusBalance
        alert(`Баланс: ${newbalance}`) 
    }
    else if (Action == 3) {
        const MinusBalance = +prompt("Сумма снятия")
        if (MinusBalance > balance){
            alert("Недостаточно средств")
            continue
        }
        else {
            const newbalance = balance - MinusBalance
            alert(`Баланс: ${newbalance}`)
        }
    }
    else {
        alert("Неверная операция")
    }
} 