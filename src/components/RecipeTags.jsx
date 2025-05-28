const RecipeTags = ({ tags }) => {
  return (
    <div>
      {tags.map(tag => <span key={tag}>{tag}</span>)}
    </div>
  )
}