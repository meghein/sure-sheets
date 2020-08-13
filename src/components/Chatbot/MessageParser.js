class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()


    if (lowerCaseMessage.includes("hello") ||
      lowerCaseMessage.includes("hi")
    ) {
      this.actionProvider.greet()
    }

    if (lowerCaseMessage.includes("why")) {
      this.actionProvider.handleWhyLinkList()
    }

    if (lowerCaseMessage.includes("not") ||
      lowerCaseMessage.includes("no ") ||
      lowerCaseMessage.includes("no.") ||
      lowerCaseMessage.includes("no!")
    ) {
      this.actionProvider.no()
    }

    if (lowerCaseMessage.includes("how") ||
      lowerCaseMessage.includes("can't")) {
      this.actionProvider.handleHowLinkList()
    }

    if (lowerCaseMessage.includes("love")) {
      this.actionProvider.loveMessage()
    }

    if (lowerCaseMessage.includes("presentation")) {
      this.actionProvider.presentation()
    }

    if (lowerCaseMessage.includes("jobs")) {
      this.actionProvider.jobs()
    }

    if (lowerCaseMessage.includes("upload") || 
      lowerCaseMessage.includes("add") || 
      lowerCaseMessage.includes("import") ||
      lowerCaseMessage.includes("screenshots") 
    ) {
      this.actionProvider.screenshots()
    }

    if (lowerCaseMessage.includes("bryan gomes") ||
      lowerCaseMessage.includes("charlie hayes") ||
      lowerCaseMessage.includes("meghan hein")
    ) {
      this.actionProvider.creators()
    }

    if (lowerCaseMessage.includes("export") ||
      lowerCaseMessage.includes("save") ||
      lowerCaseMessage.includes("print")
    ) {
      this.actionProvider.exports()
    }

    if (lowerCaseMessage.includes("delete") ||
      lowerCaseMessage.includes("remove") ||
      lowerCaseMessage.includes("cut")
    ) {
      this.actionProvider.exports()
    }


    if (lowerCaseMessage.includes("favorite") ||
      lowerCaseMessage.includes("favourite")
    ) {
      this.actionProvider.favoriteMessage()
    }

  }
}

export default MessageParser;