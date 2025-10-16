import { Console } from "@woowacourse/mission-utils";

class App {
  async calculator() {
    const STR = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')

    if (STR === '')
      return 0
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
