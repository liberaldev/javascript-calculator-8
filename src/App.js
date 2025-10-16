import { Console } from "@woowacourse/mission-utils";

class App {
  extractCustomDelimiter(str) {
    if (!str.startsWith('//')) return null
    return str.split('\\n')[0].split('//')[1]
  }

  async calculator() {
    const STR = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')

    if (STR === '')
      return 0

    const DELIMITERS = [',', ':']

    if (this.extractCustomDelimiter(STR))
      DELIMITERS.push(this.extractCustomDelimiter(STR))
  }

  async run() {
    try {
      Console.print('결과 : ' + await this.calculator())
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`)
    }
  }
}

export default App;
