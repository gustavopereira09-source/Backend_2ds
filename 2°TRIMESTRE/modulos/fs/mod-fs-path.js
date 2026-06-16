const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default
try {
//             modulo-fs          diretorio    arquivo      codificação

    const arquivo = fs.readFileSync(path.join(__dirname, 'festa.md'), 'utf-8')
    console.log(chalk.green('Arquivo lido com sucesso!'))
    console.log(arquivo)
} catch (error) {
    console.log(chalk.red('Erro ao ler o arquivo!'))
    console.error(error.message)
}
