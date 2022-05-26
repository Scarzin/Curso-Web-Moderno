function contemTodos(str1, str2) {
    return new Set(str1).size === new Set(str1 + str2).size ? true : false
}

const string1 = 'some random text'
const string2 = 'some random text'
const string3 = 'some r@ndom text'

console.log(contemTodos(string1, string2))
console.log(contemTodos(string1, string3))