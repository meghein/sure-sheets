// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
//This is where we set his reactivity to input speech from the user:
  parse(message) {
    const lowerCaseMessage = message.toLowerCase()

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }

    if (lowerCaseMessage.includes("why")) {
      this.actionProvider.handleWhyLinkList()
    }

    if (lowerCaseMessage.includes("love")) {
      this.actionProvider.loveMessage()
    }

    if (lowerCaseMessage.includes("import")) {
      this.actionProvider.importMessage()
    }

    if (lowerCaseMessage.includes("add")) {
      this.actionProvider.importMessage()
    }

    if (lowerCaseMessage.includes("upload")) {
      this.actionProvider.importMessage()
    }

    if (lowerCaseMessage.includes("screenshots")) {
      this.actionProvider.importMessage()
    }



    if (lowerCaseMessage.includes("export")) {
      this.actionProvider.exportMessage()
    }

    if (lowerCaseMessage.includes("save")) {
      this.actionProvider.exportMessage()
    }

    if (lowerCaseMessage.includes("favorite")) {
      this.actionProvider.favoriteMessage()
    }

    if (lowerCaseMessage.includes("favourite")) {
      this.actionProvider.favoriteMessage()
    }

  }
}

export default MessageParser;