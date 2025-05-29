import styles from '../styles/RecipeTitle.module.css';

const RecipeTitle = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>;
}

export default RecipeTitle

/* 
function RecipeTitle(props) {
    return <h3>{props.title}</h3>;
}
export default RecipeTitle 
*/