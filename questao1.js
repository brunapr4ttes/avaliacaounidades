let atvSala1, atvCasa1, situacaoAp1, objetiva1, atvSala2, atvCasa2, situacaoAp2, objetiva2, atvSala3, atvCasa3, situacaoAp3, objetiva3, atvSala4, atvCasa4, situacaoAp4, objetiva4, mediaArq, mediaMet, mediaLog, mediaFun, mediaSem

atvSala1 = Number(prompt(`Digite a nota na unidade [Arquitetura de HardWare e SoftWare] de acordo com o método de avaliação em Atividades em sala: `))
atvCasa1 = Number(prompt(`Digite a nota na unidade [Arquitetura de HardWare e SoftWare] de acordo com o método de avaliação em Atividades em casa: `))
situacaoAp1 = Number(prompt(`Digite a nota na unidade [Arquitetura de HardWare e SoftWare] de acordo com o método de avaliação em Situações aprendizagem: `))
objetiva1 = Number(prompt(`Digite a nota na unidade [Arquitetura de HardWare e SoftWare] de acordo com o método de avaliação em Avaliação objetiva: `))

mediaArq = (atvCasa1 + atvSala1 + situacaoAp1 + objetiva1) / 4

atvSala2 = Number(prompt(`Digite a nota na unidade [Metodologias de desenvolvimento de projetos] de acordo com o método de avaliação em Atividades em sala: `))
atvCasa2 = Number(prompt(`Digite a nota na unidade [Metodologias de desenvolvimento de projetos] de acordo com o método de avaliação em Atividades em casa: `))
situacaoAp2 = Number(prompt(`Digite a nota na unidade [Metodologias de desenvolvimento de projetos] de acordo com o método de avaliação em Situações aprendizagem: `))
objetiva2 = Number(prompt(`Digite a nota na unidade [Metodologias de desenvolvimento de projetos] de acordo com o método de avaliação em Avaliação objetiva: `))

mediaMet = (atvCasa2 + atvSala2 + situacaoAp2 + objetiva2) / 4

atvSala3 = Number(prompt(`Digite a nota na unidade [Lógica computacional] de acordo com o método de avaliação em Atividades em sala: `))
atvCasa3 = Number(prompt(`Digite a nota na unidade [Lógica computacional] de acordo com o método de avaliação em Atividades em casa: `))
situacaoAp3 = Number(prompt(`Digite a nota na unidade [Lógica computacional] de acordo com o método de avaliação em Situações aprendizagem: `))
objetiva3 = Number(prompt(`Digite a nota na unidade [Lógica computacional] de acordo com o método de avaliação em Avaliação objetiva: `))

mediaLog = (atvCasa3 + atvSala3 + situacaoAp3 + objetiva3) / 4

atvSala4 = Number(prompt(`Digite a nota na unidade [Fundamentos de banco de dados] de acordo com o método de avaliação em Atividades em sala: `))
atvCasa4 = Number(prompt(`Digite a nota na unidade [Fundamentos de banco de dados] de acordo com o método de avaliação em Atividades em casa: `))
situacaoAp4 = Number(prompt(`Digite a nota na unidade [Fundamentos de banco de dados] de acordo com o método de avaliação em Situações aprendizagem: `))
objetiva4 = Number(prompt(`Digite a nota na unidade [Fundamentos de banco de dados] de acordo com o método de avaliação em Avaliação objetiva: `))

mediaFun = (atvCasa4 + atvSala4 + situacaoAp4 + objetiva4) / 4
mediaSem = (mediaArq + mediaMet + mediaLog + mediaFun) / 4

alert(`A média na unidade [Arquitetura de HardWare e SoftWare] é: ${mediaArq.toFixed(2)}`)
alert(`A média na unidade [Metodologias de desenvolvimento de projetos] é: ${mediaMet.toFixed(2)}`)
alert(`A média na unidade [Lógica computacional] é: ${mediaLog.toFixed(2)}`)
alert(`A média na unidade [Fundamentos de banco de dados] é: ${mediaFun.toFixed(2)}`)
alert(`A média semestral é: ${mediaSem.toFixed(2)}`)