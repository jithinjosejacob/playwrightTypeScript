// These are master components which could be used across all pages.
export class BaseObjects {
  // Normal Locators
  submitBtn () {
    return "//button[@type='submit']"
  }

  // Dynamic Locators
  // Tag having Attribute.
  tagHavingAttribute (tagName: string, attributeType: string, inputText: string) {
    return `//${tagName}[@${attributeType}=${inputText}]`
  }

  // Find button having span tag.
  buttonHavingSpan (buttonText: string) {
    return `//button/span[contains(text(),'${buttonText}')]`
  }

  // Find button having div and span.
  buttonHavingDivAndSpan (buttonText: string) {
    return `//button/div/span[contains(text(),'${buttonText}')]`
  }

  // Find element containing text.
  findElementContainsText (elementType: string, elementText: string) {
    return `//${elementType}[contains(text(),'${elementText}')]`
  }
}

module.exports = { BaseObjects }
