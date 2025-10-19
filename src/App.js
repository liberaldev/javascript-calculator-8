import { Console } from "@woowacourse/mission-utils";

class App {
  #extractCustomDelimiter (str) {
    if (!str.startsWith('//')) return null
    return str.split('\\n')[0].split('//')[1]
  }

  async #calculator(str) {
    if (str === '')
      return 0

    const DELIMITERS = [',', ':']

    let numbers

    if (this.#extractCustomDelimiter(str)) {
      DELIMITERS.push(this.#extractCustomDelimiter(str))
      numbers = str.split('\\n')[1].split(new RegExp(`[${DELIMITERS.join('')}]`))
    } else {
      numbers = str.split(new RegExp(`[${DELIMITERS.join('')}]`))
    }

    if (numbers.find(num => Number.isNaN(Number(num)))) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되어 있습니다')
    }

    if (numbers.find(num => num < 0)) {
      throw new Error('[ERROR] 양수가 아닌 숫자가 포함되어 있습니다')
    }

    return numbers.reduce((acc, cur) => acc + Number(cur), 0)
  }

  async run() {
    const STR = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    Console.print('결과 : ' + await this.#calculator(STR))
  }
}

export default App;
