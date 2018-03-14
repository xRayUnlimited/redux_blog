const blogs = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [action.blog, ...state]
    case 'TOGGLE_BLOG':
      return state.map( blog => {
        if (blog.id === action.id)
          return { ...blog, read: !blog.read }
        return blog
      })
    case 'DELETE_BLOG':
      return state.map( blog => {
        if (blog.id === action.id)
          return [action.blog, ...blog]
        return state;
      })
    default:
      return state;
  }
}

export default blogs;
