import { Console } from "@woowacourse/mission-utils";

class App {
  async calculator() {
    const STR = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
  }

  async run() {
    try {
      await this.calculator()
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`)
    }
  }
}

export default App;
