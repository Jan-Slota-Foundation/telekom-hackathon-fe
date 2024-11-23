import { reactive } from 'vue'

export const bottomAlert = reactive({
  isVisible: false,
  text: 'Test',
  cancelOption: false,
  variant: 'success',

  changeTextTo(newText) {
    this.text = newText
  },

  show() {
    this.isVisible = true
    setTimeout(() => {
      this.hide()
    }, 4000)
  },

  hide() {
    this.isVisible = false
  },

  openAsSuccess(text) {
    this.changeTextTo(text)
    this.variant = 'success'
    this.show()
  },

  openAsError(text) {
    this.changeTextTo(text)
    this.variant = 'error'
    this.show()
  }
})
