const gulp = require('gulp')
const paralelo = gulp.parallel
const series = gulp.series

const antes1 = cb => {
    console.log('tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2!')
    return cb()
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    // .pipe(imagemPelaMetade())
    // .pipe(imagemPretaEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    return cb()
}

function fim(cb) {
    console.log('FIM!')
    return cb()
}

module.exports.default = series(
    paralelo(antes1, antes2),
    copiar,
    fim
)