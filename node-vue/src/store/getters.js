export const getters = {
  blogslist: state => {
    console.log('this is getters')
    return state.blogslist
  },
  user: state => {
      return state.user
  }
}
